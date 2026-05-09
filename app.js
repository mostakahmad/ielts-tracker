// ===== STATE =====
let currentUser=null,db=null,planDay=1,currentResTab='free',currentWeek=1,errorEntries=[],vocabEntries=[];
try{firebase.initializeApp(firebaseConfig);db=firebase.firestore();}catch(e){}

function buildNumpad(id,pinId,displayId){
  const np=document.getElementById(id);if(!np)return;np.innerHTML='';
  [1,2,3,4,5,6,7,8,9,'',0,'del'].forEach(k=>{
    const b=document.createElement('button');b.textContent=k==='del'?'X':k;
    if(k==='del')b.classList.add('del');if(k==='')b.disabled=true;
    b.onclick=()=>window.handlePin(k,pinId,displayId);np.appendChild(b);
  });
}
function showRegister(){document.getElementById('loginPanel').classList.add('d-none');document.getElementById('registerPanel').classList.remove('d-none');}
function showLogin(){document.getElementById('registerPanel').classList.add('d-none');document.getElementById('loginPanel').classList.remove('d-none');}
function getPin(displayId){return Array.from(document.getElementById(displayId).querySelectorAll('span')).map(s=>s.textContent).filter(t=>t.length>0).join('');}
async function doRegister(){
  const name=document.getElementById('regName').value.trim(),start=document.getElementById('regStartDate').value,pin=getPin('regPinDisplay'),errEl=document.getElementById('regError');
  if(!name||!start||pin.length<6){errEl.textContent='Fill all fields.';errEl.classList.remove('d-none');return;}
  showLoading('Creating...');const user={name,pin,startDate:start,created:Date.now()};
  try{if(db){const s=await db.collection('ielts_users').where('pin','==',pin).get();if(!s.empty){hideLoading();errEl.textContent='PIN taken.';errEl.classList.remove('d-none');return;}await db.collection('ielts_users').add(user);}}catch(e){}
  localStorage.setItem('ielts_user',JSON.stringify(user));hideLoading();loginUser(user);
}
async function doLogin(){
  const pin=getPin('loginPinDisplay');if(pin.length<6)return;showLoading('Verifying...');
  let user=null;const loc=localStorage.getItem('ielts_user');
  if(loc){const u=JSON.parse(loc);if(u.pin===pin)user=u;}
  if(!user&&db){try{const s=await db.collection('ielts_users').where('pin','==',pin).get();if(!s.empty){user=s.docs[0].data();localStorage.setItem('ielts_user',JSON.stringify(user));}}catch(e){}}
  hideLoading();if(user)loginUser(user);else document.getElementById('loginError').classList.remove('d-none');
}
function loginUser(u){currentUser=u;document.getElementById('authScreen').classList.remove('active');document.getElementById('appScreen').classList.add('active');initApp();}
function doLogout(){currentUser=null;localStorage.removeItem('ielts_user');document.getElementById('appScreen').classList.remove('active');document.getElementById('authScreen').classList.add('active');}
function getCurrentDay(){if(!currentUser?.startDate)return 1;const diff=Math.floor((new Date()-new Date(currentUser.startDate))/(864e5))+1;return Math.max(1,Math.min(45,diff));}
function getWeekForDay(d){return Math.ceil(d/7);}
function getCurrentTopic(){const d=getCurrentDay();for(let i=0;i<VOCAB_TOPIC_DAYS.length;i++){if(d>=VOCAB_TOPIC_DAYS[i][0]&&d<=VOCAB_TOPIC_DAYS[i][1])return VOCAB_TOPICS[i];}return VOCAB_TOPICS[8];}
function showLoading(m){document.getElementById('loadingMsg').textContent=m;document.getElementById('loadingOverlay').classList.remove('d-none');}
function hideLoading(){document.getElementById('loadingOverlay').classList.add('d-none');}
function showToast(m){const b=document.getElementById('toastBox');document.getElementById('toastMsg').textContent=m;b.classList.add('show');setTimeout(()=>b.classList.remove('show'),3000);}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('sidebarOverlay').classList.toggle('show');}
function closeSidebar(){document.getElementById('sidebar').classList.remove('open');document.getElementById('sidebarOverlay').classList.remove('show');}

function initApp(){
  updateTopbar();showPage('dashboard',document.getElementById('nav-dashboard'));
  renderMockSchedule();renderRoutine(1);renderResources('free');renderMentorPage();renderMistakes();renderUpgrades();
}
function updateTopbar(){
  if(!currentUser)return;const day=getCurrentDay();
  document.getElementById('sidebarAvatar').textContent=currentUser.name[0].toUpperCase();
  document.getElementById('sidebarName').textContent=currentUser.name;
  document.getElementById('journeyDay').textContent='Day '+day+' of 45';
  document.getElementById('topDayBadge').textContent='Day '+day;
  document.getElementById('topbarDate').textContent=new Date().toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
  document.getElementById('statDay').textContent=day;
  document.getElementById('statOverall').textContent=Math.round((day/45)*100)+'%';
}
function showPage(name,el){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const pg=document.getElementById('page'+name.charAt(0).toUpperCase()+name.slice(1));
  if(pg)pg.classList.add('active');if(el)el.classList.add('active');
  const titles={dashboard:'Dashboard',today:"Today's Plan",checklist:'Daily Checklist',progress:'My Progress',errorlog:'Error Log',vocab:'Vocabulary',routine:'45-Day Routine',resources:'Resources',mentor:'Mentor Tips'};
  document.getElementById('topbarTitle').textContent=titles[name]||name;
  if(window.innerWidth<992)closeSidebar();
  if(name==='dashboard')renderDashboard();
  if(name==='today'){planDay=getCurrentDay();renderTodayPlan();}
  if(name==='checklist')renderChecklist();
  if(name==='progress')renderProgress();
  if(name==='errorlog')renderErrors();
  if(name==='vocab')renderVocab();
}

// ===== DASHBOARD =====
function renderDashboard(){
  const day=getCurrentDay();const week=getWeekForDay(day);const hour=new Date().getHours();
  const greet=hour<12?'Good morning':hour<17?'Good afternoon':'Good evening';
  document.getElementById('mentorGreeting').textContent=greet+', '+currentUser.name+'!';
  const phases=['Foundation','Core Skills','Question Mastery','Band 6→7 Dev','Mock Tests','Final Push'];
  document.getElementById('mentorMsg').textContent='Week '+week+': '+phases[Math.min(week-1,5)]+'. '+WEEKS[week-1]?.mainTarget+'.';
  document.getElementById('dashWeekBadge').textContent='Week '+week+' - '+WEEKS[week-1]?.theme;
  const plan=PLAN[day-1];
  document.getElementById('todayFocusQuick').innerHTML=plan?`
    <div class="focus-task"><div class="focus-dot" style="background:#fbbf24"></div><div><strong style="color:#fbbf24;font-size:.72rem">MORNING (2h)</strong><div class="focus-label">${plan.morning}</div></div></div>
    <div class="focus-task"><div class="focus-dot" style="background:#6366f1"></div><div><strong style="color:#6366f1;font-size:.72rem">EVENING (2h)</strong><div class="focus-label">${plan.evening}</div></div></div>
    <div class="focus-task"><div class="focus-dot" style="background:#10b981"></div><div><strong style="color:#10b981;font-size:.72rem">OUTPUT</strong><div class="focus-label">${plan.output}</div></div></div>
  `:'';
  renderSkillBars();updateCheckedStat();
}
function renderSkillBars(){
  const data=JSON.parse(localStorage.getItem('ielts_scores_'+currentUser?.pin)||'{}');
  const skills=[{n:'Listening',k:'listening',m:40,c:'#06b6d4'},{n:'Reading',k:'reading',m:40,c:'#6366f1'},{n:'Writing T1',k:'writing1',m:9,c:'#f59e0b'},{n:'Writing T2',k:'writing2',m:9,c:'#f59e0b'},{n:'Speaking',k:'speaking',m:9,c:'#10b981'}];
  document.getElementById('skillProgressBars').innerHTML=skills.map(s=>{const v=data[s.k]||0;const p=Math.round((v/s.m)*100);return `<div class="skill-bar-wrap"><div class="skill-bar-label"><span>${s.n}</span><span>${v}/${s.m}</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" style="width:${p}%;background:${s.c}"></div></div></div>`;}).join('');
}
function renderMockSchedule(){
  const day=getCurrentDay();const el=document.getElementById('mockScheduleList');if(!el)return;
  el.innerHTML=MOCKS.map(m=>{
    const cls=m.day<day?'mock-done':m.day===day?'mock-today':'mock-upcoming';
    const lbl=m.day<day?'Done':m.day===day?'TODAY!':'Upcoming';
    return `<div class="mock-item"><div class="mock-day">Day ${m.day}</div><div class="mock-type">${m.type}</div><div style="font-size:.68rem;color:var(--text3)">${m.purpose}</div><span class="mock-status ${cls}">${lbl}</span></div>`;
  }).join('');
}
function updateCheckedStat(){
  const today=new Date().toDateString();const day=getCurrentDay();const plan=PLAN[day-1];
  const total=DAILY_CHECKLIST_FIXED.length;
  const key='ielts_check_'+currentUser?.pin+'_'+today;const saved=JSON.parse(localStorage.getItem(key)||'{}');
  const done=Object.values(saved).filter(Boolean).length;
  document.getElementById('statChecked').textContent=done+'/'+total;
  let streak=0,d=new Date();
  while(true){const k='ielts_check_'+currentUser?.pin+'_'+d.toDateString();const s=JSON.parse(localStorage.getItem(k)||'{}');if(!Object.values(s).some(Boolean))break;streak++;d.setDate(d.getDate()-1);}
  document.getElementById('statStreak').textContent=streak;
}

// ===== TODAY'S PLAN =====
function changePlanDay(delta){planDay=Math.max(1,Math.min(45,planDay+delta));renderTodayPlan();}
function renderTodayPlan(){
  const plan=PLAN[planDay-1];if(!plan)return;
  const week=getWeekForDay(planDay);const isCur=planDay===getCurrentDay();
  document.getElementById('planDayLabel').textContent='Day '+planDay+(isCur?' (Today)':'');
  const mT=plan.morning.split('.').filter(t=>t.trim());const eT=plan.evening.split('.').filter(t=>t.trim());
  const w=WEEKS[week-1];
  document.getElementById('todayPlanContent').innerHTML=`
    <div class="plan-block plan-morning">
      <div class="plan-block-header"><i class="bi bi-sunrise"></i> Morning Session – 2 Hours</div>
      <div class="plan-block-body"><ul class="mb-0">${mT.map(t=>`<li>${t.trim()}.</li>`).join('')}</ul></div>
    </div>
    <div class="plan-block plan-evening">
      <div class="plan-block-header"><i class="bi bi-moon-stars"></i> Evening Session – 2 Hours</div>
      <div class="plan-block-body"><ul class="mb-0">${eT.map(t=>`<li>${t.trim()}.</li>`).join('')}</ul></div>
    </div>
    <div class="plan-block plan-output">
      <div class="plan-block-header"><i class="bi bi-check2-circle"></i> Expected Output</div>
      <div class="plan-block-body">${plan.output}</div>
    </div>
    <div class="section-card mt-3">
      <div class="section-header"><h6 class="section-title"><i class="bi bi-calendar-week"></i> Week ${week} Targets</h6></div>
      <div style="font-size:.8rem;line-height:1.8">
        <div><span style="color:#06b6d4;font-weight:700">Listening:</span> ${w?.listening}</div>
        <div><span style="color:#6366f1;font-weight:700">Reading:</span> ${w?.reading}</div>
        <div><span style="color:#f59e0b;font-weight:700">Writing:</span> ${w?.writing} | Output: ${w?.writingOutput}</div>
        <div><span style="color:#10b981;font-weight:700">Speaking:</span> ${w?.speaking}</div>
      </div>
    </div>
  `;
}

// ===== CHECKLIST (derived from DAILY_CHECKLIST_FIXED + today's routine tasks) =====
function renderChecklist(){
  const today=new Date().toDateString();const day=getCurrentDay();const plan=PLAN[day-1];
  const key='ielts_check_'+currentUser?.pin+'_'+today;const saved=JSON.parse(localStorage.getItem(key)||'{}');
  document.getElementById('checklistDate').textContent=today+' — Day '+day;
  
  // Combine fixed checklist with today's routine tasks
  const routineTasks=plan.morning.split('.').filter(t=>t.trim()).map((t,i)=>({id:'mr'+i,label:t.trim()+'.',sub:'Morning routine'}))
    .concat(plan.evening.split('.').filter(t=>t.trim()).map((t,i)=>({id:'er'+i,label:t.trim()+'.',sub:'Evening routine'})));
  const fixedTasks=DAILY_CHECKLIST_FIXED.map(c=>({id:c.id,label:c.label,sub:c.sub.replace('today\'s topic',getCurrentTopic())}));
  const allTasks=[...routineTasks,...fixedTasks];
  
  document.getElementById('checklistItems').innerHTML=allTasks.map(item=>{
    const done=saved[item.id]||false;
    return `<div class="checklist-item ${done?'done':''}" onclick="toggleCheck('${item.id}')">
      <div class="checklist-cb">${done?'<i class="bi bi-check-lg"></i>':''}</div>
      <div><div class="checklist-label">${item.label}</div><div class="checklist-sub-label">${item.sub}</div></div>
    </div>`;
  }).join('');
  
  const done=Object.values(saved).filter(Boolean).length;const pct=Math.round((done/allTasks.length)*100)||0;
  document.getElementById('checklistPct').textContent=pct+'%';document.getElementById('checklistBar').style.width=pct+'%';
  loadDayScores();
}
function toggleCheck(id){
  const today=new Date().toDateString();const key='ielts_check_'+currentUser?.pin+'_'+today;
  const saved=JSON.parse(localStorage.getItem(key)||'{}');saved[id]=!saved[id];
  localStorage.setItem(key,JSON.stringify(saved));renderChecklist();updateCheckedStat();
}
function loadDayScores(){
  const today=new Date().toDateString();const saved=JSON.parse(localStorage.getItem('ielts_scores_day_'+currentUser?.pin+'_'+today)||'{}');
  ['Listening','Reading','Writing1','Writing2','Speaking'].forEach(s=>{const el=document.getElementById('score'+s);if(el)el.value=saved[s.toLowerCase()]||'';});
  const n=document.getElementById('dayNotes');if(n)n.value=saved.notes||'';
}
function saveDayData(){
  const today=new Date().toDateString();
  const data={listening:document.getElementById('scoreListening')?.value,reading:document.getElementById('scoreReading')?.value,writing1:document.getElementById('scoreWriting1')?.value,writing2:document.getElementById('scoreWriting2')?.value,speaking:document.getElementById('scoreSpeaking')?.value,notes:document.getElementById('dayNotes')?.value};
  localStorage.setItem('ielts_scores_day_'+currentUser?.pin+'_'+today,JSON.stringify(data));
  const best=JSON.parse(localStorage.getItem('ielts_scores_'+currentUser?.pin)||'{}');
  ['listening','reading','writing1','writing2','speaking'].forEach(k=>{if(data[k])best[k]=data[k];});
  localStorage.setItem('ielts_scores_'+currentUser?.pin,JSON.stringify(best));showToast('Progress saved!');
}

// ===== PROGRESS =====
function renderProgress(){
  const curWeek=getWeekForDay(getCurrentDay());
  document.getElementById('weeklyScoreBody').innerHTML=WEEKS.map(w=>`
    <tr class="${w.week===curWeek?'table-active':''}">
      <td>Wk ${w.week}</td><td style="font-size:.72rem">${w.theme}</td>
      <td>${w.listening}</td><td>${w.reading}</td><td>${w.writing}</td><td>${w.speaking}</td>
      <td>${w.week<curWeek?'<i class="bi bi-check-circle-fill text-success"></i>':w.week===curWeek?'<i class="bi bi-play-circle-fill text-primary"></i>':'<i class="bi bi-circle" style="color:var(--text3)"></i>'}</td>
    </tr>`).join('');
  
  // Band estimate
  const best=JSON.parse(localStorage.getItem('ielts_scores_'+currentUser?.pin)||'{}');
  const scores=[{l:'Listening',v:best.listening,m:40},{l:'Reading',v:best.reading,m:40},{l:'Writing T1',v:best.writing1,m:9},{l:'Writing T2',v:best.writing2,m:9},{l:'Speaking',v:best.speaking,m:9}];
  function toBand(v,m){if(!v)return null;const p=(v/m)*100;if(p>=80)return{b:'7+',cls:'band-7'};if(p>=65)return{b:'6.5',cls:'band-6'};if(p>=50)return{b:'6',cls:'band-6'};return{b:'5.5',cls:'band-low'};}
  document.getElementById('bandEstimate').innerHTML='<div class="band-grid">'+scores.map(s=>{const r=toBand(s.v,s.m);return r?`<div class="band-box ${r.cls}"><div class="band-skill">${s.l}</div><div class="band-val">${r.b}</div><div style="font-size:.7rem">${s.v}/${s.m}</div></div>`:`<div class="band-box band-low"><div class="band-skill">${s.l}</div><div class="band-val">—</div></div>`;}).join('')+'</div>';
  
  // Heatmap
  let h='';for(let i=1;i<=45;i++){const d=new Date(currentUser.startDate);d.setDate(d.getDate()+i-1);const k='ielts_check_'+currentUser.pin+'_'+d.toDateString();const sv=JSON.parse(localStorage.getItem(k)||'{}');const dn=Object.values(sv).filter(Boolean).length;let cls='heatmap-cell';if(dn>0)cls+=' done-partial';if(dn>=8)cls+=' done-full';h+=`<div class="${cls}" title="Day ${i}: ${dn} tasks"></div>`;}
  document.getElementById('journeyHeatmap').innerHTML=h;
}

// ===== ERROR LOG =====
function loadErrors(){errorEntries=JSON.parse(localStorage.getItem('ielts_errors_'+currentUser?.pin)||'[]');}
function renderErrors(){
  loadErrors();const el=document.getElementById('errorList');
  const skillF=document.getElementById('errorSkillFilter')?.value||'';
  const list=skillF?errorEntries.filter(e=>e.skill===skillF):errorEntries;
  if(!list.length){el.innerHTML='<div class="empty-state"><i class="bi bi-journal-check" style="font-size:2rem;color:var(--text3)"></i><p>No errors logged yet.</p></div>';return;}
  el.innerHTML=list.map((e,i)=>`<div class="error-item">
    <div class="error-item-header"><span class="error-skill-badge">${e.skill}</span><span style="font-size:.7rem;color:var(--text3)">${e.date||''}</span><button onclick="deleteError(${i})" style="background:none;border:none;color:var(--red);cursor:pointer"><i class="bi bi-trash3"></i></button></div>
    <div class="error-detail"><div><strong>Mistake:</strong> ${e.mistake}</div>${e.reason?`<div><strong>Reason:</strong> ${e.reason}</div>`:''}<div style="color:var(--green)"><strong>Fix:</strong> ${e.fix}</div></div>
  </div>`).join('');
}
function openErrorModal(){document.getElementById('errorModal').classList.remove('d-none');}
function closeErrorModal(){document.getElementById('errorModal').classList.add('d-none');}
function saveError(){
  const entry={skill:document.getElementById('errSkill').value,mistake:document.getElementById('errMistake').value.trim(),reason:document.getElementById('errReason').value.trim(),fix:document.getElementById('errFix').value.trim(),repeat:document.getElementById('errRepeat').value,date:new Date().toLocaleDateString()};
  if(!entry.mistake){showToast('Enter a mistake.');return;}
  loadErrors();errorEntries.unshift(entry);localStorage.setItem('ielts_errors_'+currentUser.pin,JSON.stringify(errorEntries));
  closeErrorModal();renderErrors();showToast('Error saved!');
  ['errMistake','errReason','errFix'].forEach(id=>document.getElementById(id).value='');
}
function deleteError(i){loadErrors();errorEntries.splice(i,1);localStorage.setItem('ielts_errors_'+currentUser.pin,JSON.stringify(errorEntries));renderErrors();}

// ===== VOCABULARY =====
function loadVocab(){vocabEntries=JSON.parse(localStorage.getItem('ielts_vocab_'+currentUser?.pin)||'[]');}
function renderVocab(){
  loadVocab();const el=document.getElementById('vocabList');const topic=getCurrentTopic();
  document.getElementById('vocabTopicBadge').textContent='Today: '+topic;
  const tip=VOCAB_TIPS[Math.floor(Math.random()*VOCAB_TIPS.length)];
  document.getElementById('vocabTip')?.textContent && (document.getElementById('vocabTip').textContent=tip);
  const search=(document.getElementById('vocabSearch')?.value||'').toLowerCase();
  const tF=document.getElementById('vocabTopicFilter')?.value||'';
  let list=vocabEntries;if(search)list=list.filter(v=>v.word?.toLowerCase().includes(search)||v.meaning?.toLowerCase().includes(search));if(tF)list=list.filter(v=>v.topic===tF);
  if(!list.length){el.innerHTML='<div class="empty-state"><i class="bi bi-alphabet" style="font-size:2rem;color:var(--text3)"></i><p>No words yet. Add 15 words today! Topic: <strong>'+topic+'</strong></p></div>';return;}
  el.innerHTML=list.map((v,i)=>`<div class="vocab-item">
    <div style="display:flex;justify-content:space-between;align-items:flex-start">
      <div style="flex:1"><div class="vocab-word">${v.word}</div><div class="vocab-meaning">${v.meaning}</div>${v.collocation?`<div style="font-size:.72rem;color:#06b6d4">Collocation: ${v.collocation}</div>`:''} ${v.example?`<div style="font-size:.72rem;color:var(--text3);font-style:italic">"${v.example}"</div>`:''} <span style="font-size:.68rem;color:var(--accent);background:rgba(99,102,241,.1);padding:1px 7px;border-radius:20px">${v.topic}</span></div>
      <button onclick="deleteVocab(${i})" style="background:none;border:none;color:var(--text3);cursor:pointer"><i class="bi bi-trash3"></i></button>
    </div>
  </div>`).join('');
}
function openVocabModal(){document.getElementById('vocabModal').classList.remove('d-none');document.getElementById('vocabTopicInput').value=getCurrentTopic();}
function closeVocabModal(){document.getElementById('vocabModal').classList.add('d-none');}
function saveVocab(){
  const entry={word:document.getElementById('vocabWord').value.trim(),meaning:document.getElementById('vocabMeaning').value.trim(),collocation:document.getElementById('vocabCollocation').value.trim(),example:document.getElementById('vocabExample').value.trim(),topic:document.getElementById('vocabTopicInput').value.trim()||getCurrentTopic(),date:new Date().toLocaleDateString()};
  if(!entry.word||!entry.meaning){showToast('Enter word and meaning.');return;}
  loadVocab();vocabEntries.unshift(entry);localStorage.setItem('ielts_vocab_'+currentUser.pin,JSON.stringify(vocabEntries));
  closeVocabModal();renderVocab();showToast('Word added!');
  ['vocabWord','vocabMeaning','vocabCollocation','vocabExample'].forEach(id=>document.getElementById(id).value='');
}
function deleteVocab(i){loadVocab();vocabEntries.splice(i,1);localStorage.setItem('ielts_vocab_'+currentUser.pin,JSON.stringify(vocabEntries));renderVocab();}

// ===== ROUTINE =====
function showWeek(w,el){document.querySelectorAll('.week-tab').forEach(t=>t.classList.remove('active'));if(el)el.classList.add('active');renderRoutine(w);}
function renderRoutine(w){
  const wk=WEEKS[w-1];if(!wk)return;
  const days=PLAN.slice(wk.days[0]-1,wk.days[1]);const cur=getCurrentDay();
  document.getElementById('routineContent').innerHTML=`
    <div style="background:rgba(99,102,241,.08);border:1px solid rgba(99,102,241,.2);border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:.8rem">
      <strong style="color:var(--accent)">Goal:</strong> ${wk.mainTarget} | <strong style="color:var(--teal)">Writing:</strong> ${wk.writingOutput}
    </div>
    ${days.map(d=>`<div style="display:grid;grid-template-columns:36px 1fr 1fr;gap:8px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05);background:${d.day===cur?'rgba(99,102,241,.06)':''}">
      <div style="font-weight:800;color:${d.day===cur?'var(--accent)':'var(--text2)'}">${d.day}${d.day===cur?'<div style="font-size:.55rem;color:var(--teal)">TODAY</div>':''}</div>
      <div style="font-size:.75rem;color:var(--text2);line-height:1.5">${d.morning}</div>
      <div style="font-size:.75rem;color:var(--text2);line-height:1.5">${d.evening}</div>
    </div>`).join('')}`;
}

// ===== RESOURCES =====
function showResTab(tab,el){currentResTab=tab;document.querySelectorAll('.res-tab').forEach(t=>t.classList.remove('active'));if(el)el.classList.add('active');renderResources(tab);}
function renderResources(tab){
  const el=document.getElementById('resourceContent');
  if(tab==='strategy'){el.innerHTML=STRATEGIES.map(s=>`<div class="resource-item"><div class="resource-icon" style="background:rgba(99,102,241,.12)"><i class="bi ${s.icon}" style="color:var(--accent)"></i></div><div><div class="resource-name">${s.name}</div><div class="resource-use" style="line-height:1.6">${s.text}</div></div></div>`).join('');return;}
  const res=tab==='free'?FREE_RESOURCES:PAID_RESOURCES;
  el.innerHTML=res.map(r=>`<div class="resource-item"><div class="resource-icon" style="background:${r.bg};font-size:.72rem;font-weight:700;color:var(--text)">${r.icon}</div><div><div class="resource-name">${r.name}</div><div class="resource-use">${r.use}</div><a href="${r.url}" target="_blank" class="resource-link"><i class="bi bi-box-arrow-up-right"></i> Open</a></div></div>`).join('');
}

// ===== MENTOR PAGE =====
function renderMentorPage(){
  const day=getCurrentDay();const week=getWeekForDay(day);
  const el=document.getElementById('mentorAdviceCards');if(!el)return;
  el.innerHTML=`
    <div class="section-card mb-3"><div class="section-header"><h6 class="section-title"><i class="bi bi-quote"></i> Golden Rule</h6></div>
      <p style="color:var(--accent);font-weight:600">${GOLDEN_RULE.rule}</p>
      <p style="font-size:.78rem"><span style="color:var(--red)">Bad:</span> "${GOLDEN_RULE.badMethod}"</p>
      <p style="font-size:.78rem"><span style="color:var(--green)">Good:</span> "${GOLDEN_RULE.goodMethod}"</p>
    </div>
    <div class="row g-3 mb-3">
      <div class="col-md-6"><div class="advice-card advice-writing h-100"><h6><i class="bi bi-pencil-square"></i> Writing T2: 5-Min Plan</h6>${WRITING_UPGRADE_STEPS.map(s=>`<div style="font-size:.75rem;margin-bottom:4px"><strong style="color:var(--accent)">${s.step}.</strong> ${s.question}</div>`).join('')}</div></div>
      <div class="col-md-6"><div class="advice-card advice-speaking h-100"><h6><i class="bi bi-mic"></i> Speaking Formula</h6><p style="font-size:.78rem;color:var(--accent);font-weight:600">${SPEAKING_UPGRADE_FORMULA}</p><p style="font-size:.72rem;font-style:italic;color:var(--text2)">"${SPEAKING_UPGRADE_EXAMPLE}"</p></div></div>
    </div>
    <div class="section-card mb-3"><div class="section-header"><h6 class="section-title"><i class="bi bi-headphones"></i> Listening Daily Method</h6></div>${LISTENING_DAILY_METHOD.map((m,i)=>`<div style="font-size:.78rem;margin-bottom:6px"><span style="color:var(--teal);font-weight:700">${i+1}.</span> ${m}</div>`).join('')}</div>
    <div class="section-card mb-3"><div class="section-header"><h6 class="section-title"><i class="bi bi-clock-history"></i> Reading Time Rule</h6></div>${READING_TIME_RULE.map(r=>`<div style="display:flex;justify-content:space-between;font-size:.78rem;padding:4px 0;border-bottom:1px solid var(--border)"><span>${r.passage}</span><strong style="color:var(--accent)">${r.time}</strong></div>`).join('')}</div>
    <div class="section-card mb-3"><div class="section-header"><h6 class="section-title"><i class="bi bi-journal-check"></i> Grammar Method</h6></div>${GRAMMAR_DAILY_METHOD.map((m,i)=>`<div style="font-size:.78rem;margin-bottom:4px"><strong style="color:var(--amber)">${i+1}.</strong> ${m}</div>`).join('')}<div style="margin-top:8px;font-size:.75rem;color:var(--text2);font-style:italic">Example: "${GRAMMAR_BAND7_EXAMPLE}"</div></div>
    <div class="section-card mb-3"><div class="section-header"><h6 class="section-title"><i class="bi bi-alarm"></i> Daily Reminders</h6></div>${DAILY_REMINDERS.map(r=>`<div style="display:flex;gap:10px;font-size:.75rem;padding:5px 0;border-bottom:1px solid var(--border)"><span style="color:var(--accent);font-weight:600;min-width:60px">${r.time}</span><span style="color:var(--text2)">${r.reminder}</span></div>`).join('')}</div>
  `;
}
function renderMistakes(){
  const el=document.getElementById('mistakesList');if(!el)return;
  el.innerHTML=MISTAKES.map(m=>`<div class="mistake-row"><div class="mistake-skill">${m.skill}</div><div style="flex:1;color:var(--text2);font-size:.78rem">${m.mistake}</div><div class="mistake-fix">${m.fix}</div></div>`).join('');
}
function renderUpgrades(){
  const el=document.getElementById('upgradeList');if(!el)return;
  el.innerHTML=`<div style="display:grid;grid-template-columns:80px 1fr 1fr;gap:8px;font-size:.7rem;color:var(--text3);font-weight:700;text-transform:uppercase;margin-bottom:8px"><div>Area</div><div>Band 6 Problem</div><div>Band 7 Fix</div></div>`+
  UPGRADES.map(u=>`<div class="upgrade-row"><div class="upgrade-area">${u.area}</div><div class="upgrade-problem">${u.problem}</div><div class="upgrade-fix">${u.fix}</div></div>`).join('');
}

window.addEventListener('DOMContentLoaded',()=>{
  buildNumpad('loginNumpad','loginPinValue','loginPinDisplay');buildNumpad('regNumpad','regPinValue','regPinDisplay');
  const ds=document.getElementById('regStartDate');if(ds)ds.value=new Date().toISOString().split('T')[0];
  window.handlePin=function(k,pinId,displayId){
    const el=document.getElementById(pinId);let v=el.textContent||'';
    if(k==='del')v=v.slice(0,-1);else if(k!==''&&v.length<6)v+=k;el.textContent=v;
    const spans=document.getElementById(displayId).querySelectorAll('span');spans.forEach((s,i)=>{s.textContent=v[i]?'*':'';s.classList.toggle('filled',!!v[i]);});
    if(pinId==='loginPinValue'&&v.length===6)setTimeout(doLogin,200);
  };
  const saved=localStorage.getItem('ielts_user');if(saved){try{loginUser(JSON.parse(saved));}catch(e){}}
});
