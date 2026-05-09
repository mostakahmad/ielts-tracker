// ============================================================
// IELTS MENTOR APP - COMPLETE DATA STORE
// Sourced 100% from ielts-plan.txt - No data skipped
// ============================================================

// ===== 1. 45-DAY PLAN =====
const PLAN = [
  {day:1,morning:"Learn IELTS format. 20-min diagnostic listening + reading sample. Vocabulary: education topic.",evening:"Write 150 words about yourself. Record 1-min speaking intro. Basic sentence structure.",output:"Baseline score + first error list"},
  {day:2,morning:"Listening Section 1: numbers, dates, names. Reading: skimming vs scanning.",evening:"Writing Task 1: overview concept. Speaking Part 1: hometown. Grammar: present simple vs continuous.",output:"1 listening section + 5 speaking answers"},
  {day:3,morning:"Listening Section 1 form completion. Reading: True/False/Not Given basics.",evening:"Task 2: essay structure. Speaking Part 1 recording. Grammar: past simple vs present perfect.",output:"1 TFNG set + 1 essay outline"},
  {day:4,morning:"Listening Section 2 map basics. Reading: matching headings intro.",evening:"Task 1: line graph vocabulary. Speaking: daily routine topic. Grammar: articles a/an/the.",output:"1 graph vocabulary sheet"},
  {day:5,morning:"Listening Section 2 multiple choice. Reading: sentence completion.",evening:"Task 2: opinion essay structure. Speaking Part 2 cue card intro. Grammar: countable/uncountable nouns.",output:"1 short essay intro + 1 cue card"},
  {day:6,morning:"Listening Section 1+2 combined practice. Reading: short passage timed 20 min.",evening:"Task 1: write first line graph report. Speaking Part 1 mock. Grammar: basic connectors.",output:"1 Task 1 report"},
  {day:7,morning:"Weekly mini test: Listening 2 sections + Reading 1 passage.",evening:"Review all mistakes. Rewrite Task 1. Record 2-min speaking answer.",output:"Week 1 progress report"},
  {day:8,morning:"Listening Section 3 conversation practice. Reading: matching information.",evening:"Task 2: agree/disagree essay planning. Speaking Part 2: person topic. Grammar: complex sentences.",output:"1 essay plan + 1 cue card"},
  {day:9,morning:"Listening Section 3 multiple choice. Reading: gap fill.",evening:"Task 1: bar chart vocabulary. Speaking Part 1: family/friends. Grammar: comparative/superlative.",output:"1 bar chart paragraph"},
  {day:10,morning:"Listening spelling + distractors. Reading: paragraph matching.",evening:"Task 2: write introduction + conclusion. Speaking Part 3: give reasons. Grammar: relative clauses.",output:"1 intro + 1 conclusion"},
  {day:11,morning:"Listening Section 4 lecture note completion. Reading: summary completion.",evening:"Task 1: table report structure. Speaking Part 2: place topic. Grammar: passive voice.",output:"1 table overview"},
  {day:12,morning:"Listening Section 4 academic vocabulary. Reading: Yes/No/Not Given.",evening:"Task 2: advantages/disadvantages essay. Speaking Part 3: compare past and present. Grammar: modals.",output:"1 essay body paragraph"},
  {day:13,morning:"Listening full 3 sections timed. Reading 2 passages untimed.",evening:"Task 1: bar chart full report. Speaking mock: Part 1+2. Grammar: sentence correction.",output:"1 full Task 1"},
  {day:14,morning:"Weekly test: Listening full test attempt.",evening:"Review listening transcript. Rewrite 20 wrong sentences. Speaking fluency drill.",output:"Listening score + error categories"},
  {day:15,morning:"Reading: TFNG deep practice. Listening Section 1 speed practice.",evening:"Task 2: opinion essay full writing. Speaking Part 1: hobbies, food, weather.",output:"1 full Task 2"},
  {day:16,morning:"Reading: matching headings. Listening Section 2 map labeling.",evening:"Task 1: pie chart. Speaking Part 2: object topic. Grammar: conditionals type 1/2.",output:"1 pie chart report"},
  {day:17,morning:"Reading: multiple choice. Listening Section 3 academic discussion.",evening:"Task 2: problem-solution essay. Speaking Part 3: explain consequences.",output:"1 problem-solution plan"},
  {day:18,morning:"Reading: sentence completion. Listening Section 4 lecture.",evening:"Task 1: process diagram. Speaking Part 2: event topic. Grammar: sequencing language.",output:"1 process diagram report"},
  {day:19,morning:"Reading: summary completion. Listening: distractor practice.",evening:"Task 2: discussion essay. Speaking Part 3: balanced opinion practice.",output:"1 discussion essay outline"},
  {day:20,morning:"Reading: full passage timed 20 min x2. Listening full test.",evening:"Task 1: map comparison. Speaking mock Part 1-3.",output:"Reading accuracy + speaking recording"},
  {day:21,morning:"Weekly mock: Listening + Reading partial test.",evening:"Review mistakes. Rewrite 1 Task 2 essay. Vocabulary revision.",output:"Week 3 score sheet"},
  {day:22,morning:"Listening full test timed. Analyze wrong answers by section.",evening:"Task 2: write full agree/disagree essay. Speaking Part 3: abstract topics.",output:"1 full essay + listening log"},
  {day:23,morning:"Reading full test timed. Focus on time management.",evening:"Task 1: mixed chart. Speaking Part 2: 2 cue cards. Grammar: error-free complex sentences.",output:"Reading score + 2 cue cards"},
  {day:24,morning:"Listening Section 3 and 4 only. Reading: matching headings.",evening:"Task 2: improve coherence and linking. Speaking pronunciation: stress and pauses.",output:"1 improved essay"},
  {day:25,morning:"Reading: TFNG + YNNG timed. Listening map + multiple choice.",evening:"Task 1: line + bar combined chart. Speaking Part 1 rapid answers.",output:"1 combined chart report"},
  {day:26,morning:"Listening full test. Reading passage 3 practice.",evening:"Task 2: lexical resource upgrade. Replace simple words with academic collocations.",output:"20 upgraded phrases"},
  {day:27,morning:"Reading full test. Listening transcript shadowing.",evening:"Speaking full mock test. Writing: fix grammar mistakes from old essays.",output:"Speaking score estimate"},
  {day:28,morning:"Full mock test: Listening + Reading + Writing.",evening:"Review only. No new lesson. Identify top 10 repeated mistakes.",output:"Mock 1 full analysis"},
  {day:29,morning:"Listening weak sections only. Reading weak question type only.",evening:"Task 1 weak type rewrite. Speaking weak topic practice.",output:"Weakness correction sheet"},
  {day:30,morning:"Reading full test timed.",evening:"Task 2 full essay under 40 min. Speaking Part 3: difficult questions.",output:"Reading score + essay"},
  {day:31,morning:"Listening full test timed.",evening:"Task 1 full report under 20 min. Speaking Part 2: 3 cue cards.",output:"Listening score + Task 1"},
  {day:32,morning:"Reading: passage 3 only x2. Listening Section 4.",evening:"Task 2: discussion + opinion essay. Grammar: complex structures.",output:"1 Band 7-style essay"},
  {day:33,morning:"Listening: full test + transcript review.",evening:"Speaking full mock. Writing: rewrite old weak essay.",output:"Mock speaking recording"},
  {day:34,morning:"Reading full test.",evening:"Task 1 + Task 2 mini writing test: 60 min.",output:"Writing test attempt"},
  {day:35,morning:"Full mock test: Listening, Reading, Writing.",evening:"Speaking mock test + full review.",output:"Mock 2 score sheet"},
  {day:36,morning:"Analyze Mock 2. Fix Listening/Reading errors.",evening:"Rewrite Task 1 and Task 2 from Mock 2.",output:"Corrected writing version"},
  {day:37,morning:"Listening full test. Reading TFNG + headings.",evening:"Speaking Part 1/2/3. Vocabulary revision: education, technology, environment.",output:"Score + topic vocabulary"},
  {day:38,morning:"Reading full test. Listening Section 3/4.",evening:"Task 2: problem-solution essay. Grammar: accuracy check.",output:"1 essay"},
  {day:39,morning:"Listening full test. Reading passage 3.",evening:"Task 1: process/map. Speaking Part 2 cue cards.",output:"1 report + 2 cue cards"},
  {day:40,morning:"Full mock test under exam timing.",evening:"Review. Build final mistake list.",output:"Mock 3 score sheet"},
  {day:41,morning:"Fix only weak areas from Mock 3.",evening:"Writing: improve introductions, overviews, conclusions. Speaking fluency practice.",output:"Final correction sheet"},
  {day:42,morning:"Full Listening + Reading test.",evening:"Task 1 + Task 2 timed.",output:"Mock 4 score sheet"},
  {day:43,morning:"Review all error logs. Redo wrong Reading/Listening questions.",evening:"Speaking full mock. Vocabulary revision.",output:"Final weak topic list"},
  {day:44,morning:"Light practice: Listening 2 sections + Reading 1 passage.",evening:"Write 1 Task 2 plan only. Speaking confidence practice.",output:"No heavy pressure"},
  {day:45,morning:"Final revision. Review templates, vocabulary, grammar, timing.",evening:"Relaxed speaking practice + exam checklist. Sleep early.",output:"Ready for exam"}
];

// ===== 2. WEEKLY TARGETS =====
const WEEKS = [
  {week:1, theme:"Foundation + IELTS Understanding", days:[1,7], mainTarget:"Understand IELTS basics", listening:"Section 1 accuracy", reading:"Skimming/scanning", writing:"Basic Task 1/2 structure", speaking:"Simple answers", writingOutput:"2 outlines + 1 intro"},
  {week:2, theme:"Core Skills Building", days:[8,14], mainTarget:"Build foundation", listening:"Sections 1-3", reading:"Main question types", writing:"Task 1 charts + Task 2 paragraphs", speaking:"Part 1 + Part 2", writingOutput:"2 body paragraphs + 1 full essay"},
  {week:3, theme:"Question-Type Mastery", days:[15,21], mainTarget:"Master question types", listening:"Sections 3-4", reading:"All major question types", writing:"Full Task 1/2 practice", speaking:"Part 3 reasoning", writingOutput:"3 full essays"},
  {week:4, theme:"Band 6 to Band 7 Development", days:[22,28], mainTarget:"Move toward Band 6+", listening:"Full tests", reading:"Timed tests", writing:"Coherence + grammar", speaking:"Fluency", writingOutput:"3 full essays"},
  {week:5, theme:"Exam Simulation + Weakness Repair", days:[29,35], mainTarget:"Mock test stage", listening:"30+ correct target", reading:"30+ correct target", writing:"Band 6.5-7 writing", speaking:"Full speaking mock", writingOutput:"4 full essays"},
  {week:6, theme:"Final Push", days:[36,45], mainTarget:"Band 7 polishing", listening:"Error reduction", reading:"Time control", writing:"Accuracy + task response", speaking:"Natural fluency", writingOutput:"3 full essays + rewrites"}
];

// ===== 3. MOCK TEST SCHEDULE =====
const MOCKS = [
  {day:7,  type:"Mini Mock",          purpose:"Check foundation"},
  {day:14, type:"Full Listening",     purpose:"Check listening baseline"},
  {day:21, type:"Listening + Reading partial", purpose:"Check question types"},
  {day:28, type:"Full L/R/W Mock",    purpose:"First serious mock"},
  {day:35, type:"Full L/R/W + Speaking", purpose:"Exam simulation"},
  {day:40, type:"Full Mock",          purpose:"Timing and stamina"},
  {day:42, type:"Full L/R/W",         purpose:"Final score check"},
  {day:43, type:"Speaking Mock",      purpose:"Final fluency check"}
];

// ===== 4. DAILY CHECKLIST (from ielts-plan.txt Section 13) =====
const DAILY_CHECKLIST_FIXED = [
  {id:"words",    label:"Learned 15 IELTS words",         sub:"Add to vocabulary notebook"},
  {id:"listen",   label:"Practiced listening",             sub:"At least 1 section or 20 min"},
  {id:"read",     label:"Practiced reading",               sub:"At least 1 passage or 15 min"},
  {id:"write",    label:"Practiced writing",               sub:"Task 1 or Task 2 as per today's plan"},
  {id:"speak",    label:"Practiced speaking by recording", sub:"Record and listen back"},
  {id:"grammar",  label:"Corrected grammar mistakes",      sub:"5 sentences using today's grammar point"},
  {id:"errorlog", label:"Updated error log",               sub:"Log every mistake with reason and fix"},
  {id:"review",   label:"Reviewed yesterday's mistakes",   sub:"Memory check before sleeping"},
  {id:"timed",    label:"Practiced under time limit",      sub:"Simulate real exam conditions"},
  {id:"save",     label:"Saved score/progress",            sub:"Update progress tracker"}
];

// ===== 5. FREE RESOURCES (from ielts-plan.txt Section 15) =====
const FREE_RESOURCES = [
  {name:"British Council IELTS Practice Tests", use:"Official practice tests - best quality material", url:"https://www.britishcouncil.org/exam/ielts/preparation", icon:"BC", bg:"rgba(6,182,212,0.15)"},
  {name:"IDP IELTS Prepare", use:"Practice tests, preparation videos, articles", url:"https://www.idp.com/global/ielts/prepare-for-ielts/", icon:"IDP", bg:"rgba(99,102,241,0.15)"},
  {name:"IELTS.org Official Resources", use:"Official guidance, sample tests, band descriptors", url:"https://www.ielts.org/", icon:"ORG", bg:"rgba(16,185,129,0.15)"},
  {name:"IELTS Liz", use:"Writing and reading strategy, free lessons", url:"https://ieltsliz.com/", icon:"LIZ", bg:"rgba(245,158,11,0.15)"},
  {name:"E2 IELTS YouTube", use:"Listening, speaking, writing tips and strategies", url:"https://www.youtube.com/@E2IELTS", icon:"E2", bg:"rgba(239,68,68,0.15)"},
  {name:"Fastrack IELTS YouTube", use:"Academic writing and speaking tips", url:"https://www.youtube.com/@FastrackIELTS", icon:"FT", bg:"rgba(168,85,247,0.15)"},
  {name:"BBC Learning English", use:"Grammar, pronunciation, everyday English", url:"https://www.bbc.co.uk/learningenglish", icon:"BBC", bg:"rgba(6,182,212,0.15)"},
  {name:"Cambridge Dictionary", use:"Vocabulary meaning, pronunciation, examples", url:"https://dictionary.cambridge.org/", icon:"CAM", bg:"rgba(245,158,11,0.15)"}
];

// ===== 6. PAID RESOURCES (from ielts-plan.txt Section 15) =====
const PAID_RESOURCES = [
  {name:"Cambridge IELTS Academic Books 15-19/20", use:"Best mock test practice - most authentic material", url:"https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-ielts-series", icon:"CAM", bg:"rgba(6,182,212,0.15)"},
  {name:"IELTS Ready Premium (British Council)", use:"Guided practice with personalized feedback", url:"https://www.britishcouncil.org/exam/ielts/preparation/ielts-ready", icon:"IRP", bg:"rgba(99,102,241,0.15)"},
  {name:"E2 IELTS Paid Course", use:"Structured coaching with expert tutors", url:"https://www.e2language.com/", icon:"E2P", bg:"rgba(239,68,68,0.15)"},
  {name:"Magoosh IELTS", use:"Vocabulary, self-study, video lessons", url:"https://magoosh.com/ielts/", icon:"MAG", bg:"rgba(16,185,129,0.15)"},
  {name:"Grammarly Premium", use:"Writing grammar support and real-time correction", url:"https://www.grammarly.com/", icon:"GRM", bg:"rgba(245,158,11,0.15)"},
  {name:"Elsa Speak", use:"Pronunciation improvement with AI feedback", url:"https://elsaspeak.com/", icon:"ELS", bg:"rgba(168,85,247,0.15)"}
];

// ===== 7. VOCABULARY TOPICS ROTATION (from ielts-plan.txt Section 8) =====
const VOCAB_TOPICS = [
  "Education", "Work and Career", "Health", "Technology",
  "Environment", "Society and Culture", "Transport and Cities",
  "Globalization and Media", "Full Revision"
];
const VOCAB_TOPIC_DAYS = [
  [1,5], [6,10], [11,15], [16,20],
  [21,25], [26,30], [31,35], [36,40], [41,45]
];

// ===== 8. VOCABULARY NOTEBOOK FORMAT (from ielts-plan.txt Section 8) =====
const VOCAB_NOTEBOOK_COLUMNS = ["Word/Phrase", "Meaning", "Collocation", "Example Sentence"];
const VOCAB_TIPS = [
  "For Band 7, learn collocations, not only single words.",
  "Bad: 'big pollution'. Good: 'serious environmental pollution'.",
  "Always write an example sentence using the word in context.",
  "Review your vocabulary list every 3 days for retention."
];
const VOCAB_SAMPLE = [
  {word:"sustainable", meaning:"able to continue long-term", collocation:"sustainable development", example:"Governments should support sustainable development.", topic:"Environment"}
];

// ===== 9. GRAMMAR STRATEGY (from ielts-plan.txt Section 9) =====
const GRAMMAR_PRIORITY = [
  {area:"Tenses",            why:"Needed for Task 1 trends and Speaking"},
  {area:"Articles",          why:"Common beginner mistake"},
  {area:"Complex sentences", why:"Needed for Band 7 grammar range"},
  {area:"Passive voice",     why:"Useful for process diagrams"},
  {area:"Comparatives",      why:"Needed for charts"},
  {area:"Conditionals",      why:"Useful for Task 2"},
  {area:"Relative clauses",  why:"Improves sentence quality"}
];
const GRAMMAR_DAILY_METHOD = [
  "Learn one grammar point.",
  "Write 5 sentences.",
  "Correct them.",
  "Use one sentence in writing/speaking."
];
const GRAMMAR_BAND7_EXAMPLE = "Although online learning is convenient, it may reduce face-to-face interaction among students.";

// ===== 10. LISTENING PLAN (from ielts-plan.txt Section 4) =====
const LISTENING_PLAN = [
  {section:"Section 1", focus:"Daily conversation",       practice:"Names, numbers, forms, addresses", goal:"Almost full marks"},
  {section:"Section 2", focus:"Monologue/social context", practice:"Maps, multiple choice, notes",       goal:"Avoid distractors"},
  {section:"Section 3", focus:"Academic discussion",      practice:"Multiple choice, matching",           goal:"Follow speakers' opinions"},
  {section:"Section 4", focus:"Academic lecture",         practice:"Note completion",                     goal:"Catch keywords and synonyms"}
];
const LISTENING_DAILY_METHOD = [
  "Predict answer type: noun, number, adjective, place.",
  "Listen once under exam condition.",
  "Check answers.",
  "Listen again with transcript.",
  "Write why each mistake happened."
];

// ===== 11. READING PLAN (from ielts-plan.txt Section 4) =====
const READING_QUESTION_TYPES = [
  {type:"True/False/Not Given",  days:"3, 15, 25, 37",  strategy:"Match exact meaning, not your opinion"},
  {type:"Yes/No/Not Given",      days:"11, 25",          strategy:"Focus on writer's claim"},
  {type:"Matching Headings",     days:"4, 16, 24, 37",   strategy:"Read first/last sentence, find paragraph purpose"},
  {type:"Matching Information",  days:"8, 20",           strategy:"Scan keywords and synonyms"},
  {type:"Sentence Completion",   days:"3, 10, 17",       strategy:"Grammar-fit answer"},
  {type:"Summary Completion",    days:"11, 19",          strategy:"Understand paragraph flow"},
  {type:"Multiple Choice",       days:"10, 17",          strategy:"Eliminate traps"},
  {type:"Diagram/Table/Flowchart",days:"18, 25",         strategy:"Follow sequence"}
];
const READING_TIME_RULE = [
  {passage:"Passage 1", time:"15-17 min"},
  {passage:"Passage 2", time:"18-20 min"},
  {passage:"Passage 3", time:"23-25 min"}
];

// ===== 12. WRITING TASK 1 PLAN (from ielts-plan.txt Section 5) =====
const TASK1_STRUCTURE = [
  {para:"Paragraph 1", content:"Paraphrase the question"},
  {para:"Paragraph 2", content:"Overview: main trends/features"},
  {para:"Paragraph 3", content:"Details 1"},
  {para:"Paragraph 4", content:"Details 2"}
];
const TASK1_ROTATION = [
  {type:"Line graph",     days:[4,6]},
  {type:"Bar chart",      days:[9,13]},
  {type:"Pie chart",      days:[16]},
  {type:"Table",          days:[11]},
  {type:"Process diagram",days:[18,39]},
  {type:"Map",            days:[20,39]},
  {type:"Mixed chart",    days:[23,25]}
];
const TASK1_MUST_HAVE = [
  "Clear overview",
  "No personal opinion",
  "Accurate comparisons",
  "Correct tense",
  "Data selection, not every number",
  "150+ words, ideally 170-190"
];

// ===== 13. WRITING TASK 2 PLAN (from ielts-plan.txt Section 6) =====
const TASK2_TYPES = [
  {type:"Opinion",                  days:[5,15,22,30], structure:"Opinion + 2 reasons"},
  {type:"Discussion",               days:[19,32],      structure:"Both views + your view"},
  {type:"Advantages/Disadvantages", days:[12],         structure:"Advantages + disadvantages"},
  {type:"Problem/Solution",         days:[17,38],      structure:"Problems + solutions"},
  {type:"Two-part question",        days:[33],         structure:"Answer Q1 + Q2"}
];
const TASK2_STRUCTURE = [
  {para:"Introduction", task:"Paraphrase + clear position"},
  {para:"Body 1",       task:"Main idea + explanation + example"},
  {para:"Body 2",       task:"Main idea + explanation + example"},
  {para:"Conclusion",   task:"Summarize position"}
];
const TASK2_WEEKLY_OUTPUT = [
  {week:1, output:"2 outlines + 1 intro"},
  {week:2, output:"2 body paragraphs + 1 full essay"},
  {week:3, output:"3 full essays"},
  {week:4, output:"3 full essays"},
  {week:5, output:"4 full essays"},
  {week:6, output:"3 full essays + rewrites"}
];
const WRITING_UPGRADE_STEPS = [
  {step:1, question:"What is the exact question type?"},
  {step:2, question:"What is my clear position?"},
  {step:3, question:"What are my two main ideas?"},
  {step:4, question:"What example can I use?"},
  {step:5, question:"What vocabulary fits this topic?"}
];

// ===== 14. SPEAKING PLAN (from ielts-plan.txt Section 7) =====
const SPEAKING_PART1_TOPICS = [
  {topic:"Work/study",   days:[1,2]},
  {topic:"Hometown",     days:[2]},
  {topic:"Family/friends", days:[9]},
  {topic:"Food",         days:[15,37]},
  {topic:"Weather",      days:[15]},
  {topic:"Hobbies",      days:[15]},
  {topic:"Technology",   days:[37]},
  {topic:"Daily routine",days:[4]}
];
const SPEAKING_PART2_TOPICS = [
  {type:"Person",  days:[8]},
  {type:"Place",   days:[11]},
  {type:"Object",  days:[16]},
  {type:"Event",   days:[18]},
  {type:"Hobby",   days:[20]},
  {type:"Cue card x2", days:[23]},
  {type:"Difficult topics", days:[30]},
  {type:"3 cue cards", days:[31]},
  {type:"2 cue cards", days:[39]}
];
const SPEAKING_PART3_TOPICS = [
  {topic:"Give reasons",            days:[10]},
  {topic:"Compare past and present",days:[12]},
  {topic:"Explain consequences",    days:[17]},
  {topic:"Balanced opinion",        days:[19]},
  {topic:"Abstract topics",         days:[22]},
  {topic:"Pronunciation/pauses",    days:[24]},
  {topic:"Rapid answers",           days:[25]},
  {topic:"Difficult questions",     days:[30]},
  {topic:"Full mock Part 1-3",      days:[35,40,43]}
];
const SPEAKING_PART1_FORMULA = "Direct answer + reason + small example.";
const SPEAKING_PART1_EXAMPLE = "Yes, I enjoy reading because it helps me relax after work. For example, I usually read short articles at night.";
const SPEAKING_UPGRADE_FORMULA = "Answer → Reason → Example → Extra detail";
const SPEAKING_UPGRADE_EXAMPLE = "I prefer studying in the morning because my concentration is much better at that time. For example, when I study vocabulary after breakfast, I can remember words more easily than at night.";
const SPEAKING_PART2_STRUCTURE = ["Past", "Description", "Details", "Feeling", "Result"];

// ===== 15. MARKING CRITERIA (from ielts-plan.txt Section 12) =====
const BAND7_TARGETS = {
  listening: "Around 30+ correct out of 40",
  reading:   "Around 30+ correct out of 40"
};
const MARKING_CRITERIA = {
  writing: [
    {criterion:"Task Achievement/Response", band7:"Fully answers the question with clear position/overview"},
    {criterion:"Coherence and Cohesion",    band7:"Logical paragraphs, clear progression"},
    {criterion:"Lexical Resource",          band7:"Good vocabulary, collocations, few word-choice errors"},
    {criterion:"Grammar Range and Accuracy",band7:"Mix of simple/complex sentences with good control"}
  ],
  speaking: [
    {criterion:"Fluency and Coherence", band7:"Speaks at length without too much hesitation"},
    {criterion:"Lexical Resource",      band7:"Uses flexible vocabulary and paraphrases"},
    {criterion:"Grammar",              band7:"Uses complex structures with some errors"},
    {criterion:"Pronunciation",        band7:"Clear enough, good stress and intonation"}
  ]
};

// ===== 16. ERROR LOG - CATEGORIES (from ielts-plan.txt Section 11) =====
const ERROR_CATEGORIES = {
  Listening: ["spelling", "plural/singular", "distractor", "number confusion", "map labelling"],
  Reading:   ["keyword trap", "synonym miss", "Not Given confusion", "time management"],
  Writing:   ["weak overview", "unclear thesis", "grammar errors", "poor coherence", "no position"],
  Speaking:  ["hesitation", "short answers", "memorized answer", "pronunciation", "lack of detail"],
  Vocabulary:["wrong collocation", "informal word", "word form error", "repetition"],
  Grammar:   ["wrong tense", "article error", "subject-verb agreement", "complex sentence error"]
};
const ERROR_CORRECTION_STEPS = [
  {step:1, action:"Identify the mistake type"},
  {step:2, action:"Correct it immediately"},
  {step:3, action:"Repeat similar practice within 48 hours"}
];
const ERROR_LOG_COLUMNS = ["Date", "Skill", "Mistake", "Reason", "Correction", "Repeat?"];
const ERROR_LOG_SAMPLE = [
  {date:"Day 5",  skill:"Listening", mistake:"Wrote '15' instead of '50'", reason:"Number confusion", correction:"Listen to number drills", repeat:"Yes"},
  {date:"Day 10", skill:"Writing",   mistake:"No clear position",          reason:"Weak planning",   correction:"Write thesis first",      repeat:"Yes"}
];

// ===== 17. COMMON MISTAKES (from ielts-plan.txt Section 16) =====
const MISTAKES = [
  {skill:"Listening",    mistake:"Not reading questions before audio",       fix:"Use 30-sec preview time"},
  {skill:"Listening",    mistake:"Ignoring plural/singular",                  fix:"Check grammar after answer"},
  {skill:"Reading",      mistake:"Reading every word slowly",                 fix:"Skim first, scan later"},
  {skill:"Reading",      mistake:"Confusing False and Not Given",             fix:"False = opposite; Not Given = no information"},
  {skill:"Writing T1",   mistake:"No overview",                               fix:"Always write overview paragraph"},
  {skill:"Writing T2",   mistake:"Memorized essay",                           fix:"Learn structure, not full essays"},
  {skill:"Speaking",     mistake:"Very short answers",                        fix:"Answer + reason + example"},
  {skill:"Speaking",     mistake:"Memorized answers",                         fix:"Speak naturally"},
  {skill:"Vocabulary",   mistake:"Learning only word meaning",                fix:"Learn collocations"},
  {skill:"Grammar",      mistake:"Using complex sentences incorrectly",       fix:"Accuracy first, complexity second"}
];

// ===== 18. BAND 6→7 UPGRADE PLAN (from ielts-plan.txt Section 18) =====
const UPGRADES = [
  {area:"Listening",  problem:"Loses marks in Sections 3/4",           fix:"Practice distractors + transcript analysis"},
  {area:"Reading",    problem:"Runs out of time",                       fix:"Strict passage timing"},
  {area:"Writing",    problem:"Ideas are simple or unclear",            fix:"Plan before writing"},
  {area:"Writing",    problem:"Grammar errors reduce score",            fix:"Use fewer but more accurate complex sentences"},
  {area:"Speaking",   problem:"Hesitation and repetition",             fix:"Record daily and answer with structure"},
  {area:"Vocabulary", problem:"Basic words repeated",                   fix:"Use topic collocations"},
  {area:"Grammar",    problem:"Too many small errors",                  fix:"Maintain correction notebook"}
];

// ===== 19. FINAL 7-DAY REVISION PLAN (from ielts-plan.txt Section 17) =====
const FINAL_7_DAYS = [
  {label:"Final Day 7", morning:"Full Listening + Reading test",          evening:"Review errors + Task 2 essay",           goal:"Score check"},
  {label:"Final Day 6", morning:"Reading weak question types",            evening:"Speaking Part 1/2/3",                     goal:"Fix weak skills"},
  {label:"Final Day 5", morning:"Listening Section 3/4",                  evening:"Task 1 all chart types review",           goal:"Academic accuracy"},
  {label:"Final Day 4", morning:"Full mock test",                          evening:"Review only",                             goal:"Exam stamina"},
  {label:"Final Day 3", morning:"Vocabulary + grammar revision",           evening:"Speaking full mock",                      goal:"Confidence"},
  {label:"Final Day 2", morning:"Light practice only",                     evening:"Review templates and error log",          goal:"Avoid burnout"},
  {label:"Final Day 1", morning:"No heavy study",                          evening:"Sleep, documents, exam checklist",        goal:"Mental readiness"}
];

// ===== 20. STRATEGIES (from ielts-plan.txt Section 4) =====
const STRATEGIES = [
  {name:"Listening: Preview Strategy",    icon:"bi-headphones",      text:"Predict answer type (noun, number, adjective, place) before audio. Use every 30-sec gap before each section to read and mark questions."},
  {name:"Listening: Post-Check Method",   icon:"bi-check2-all",      text:"After answering: listen again with transcript. Write why each mistake happened. This alone can improve score by 3-5 marks."},
  {name:"Reading: Skim + Scan Rule",      icon:"bi-book-half",       text:"Skim passage for gist in 2 min, then scan for keywords when answering. Never read every word. Passage 3 = 23-25 min."},
  {name:"Reading: TFNG vs YNNG",          icon:"bi-question-circle", text:"True/False/Not Given = factual info in passage. Yes/No/Not Given = writer's claim or opinion. Never answer from your own knowledge."},
  {name:"Writing T1: Overview First",     icon:"bi-bar-chart-line",  text:"Always write an overview (main trend, biggest feature) BEFORE details. No overview = cannot get Band 7 in Task Achievement."},
  {name:"Writing T2: 5-Min Plan Rule",    icon:"bi-pencil-square",   text:"Spend 5 minutes planning: Question type? Position? 2 main ideas? Examples? Vocabulary? Planning prevents weak thesis and structure."},
  {name:"Speaking: Answer Formula",       icon:"bi-mic",             text:"For Part 1: Direct answer + reason + small example. For Part 3: Answer + Reason + Example + Extra detail. Never give 1-sentence answers."},
  {name:"Speaking: Record Daily",         icon:"bi-record-circle",   text:"Record yourself every day. Listen back: count hesitations, wrong vocabulary, short answers. This is the fastest way to improve fluency."},
  {name:"Daily Rule: Practice + Correct", icon:"bi-arrow-repeat",    text:"Never only practice. Always practice + correct. Solve → check → transcript → write mistake reason → repeat weak section."}
];

// ===== 21. DAILY REMINDERS =====
const DAILY_REMINDERS = [
  {time:"Morning", reminder:"Read today's plan before starting study"},
  {time:"Morning", reminder:"Do listening practice first when your mind is fresh"},
  {time:"Afternoon", reminder:"Check your error log from yesterday"},
  {time:"Evening", reminder:"Write Task 1 or Task 2 as per the routine"},
  {time:"Evening", reminder:"Record your speaking and listen back"},
  {time:"Night", reminder:"Learn 15 vocabulary words for today's topic"},
  {time:"Night", reminder:"Update your error log before sleeping"},
  {time:"Night", reminder:"Mark off your daily checklist items"},
  {time:"Night", reminder:"Review tomorrow's plan so you are ready"}
];

// ===== 22. WEEKLY PROGRESS TRACKING HEADERS (from ielts-plan.txt Section 14) =====
const WEEKLY_PROGRESS_COLUMNS = ["Week", "Listening Score", "Reading Score", "Task 1 Quality", "Task 2 Quality", "Speaking Confidence", "Main Weakness"];
const WEEKLY_PROGRESS_BASELINE = [
  {week:1, listeningTarget:"/40", readingTarget:"/40", writingT1:"Beginner",      writingT2:"Beginner",    speaking:"Low",         note:"Foundation building"},
  {week:2, listeningTarget:"/40", readingTarget:"/40", writingT1:"Basic",         writingT2:"Basic",        speaking:"Low-Medium",   note:"Core skills"},
  {week:3, listeningTarget:"/40", readingTarget:"/40", writingT1:"Improving",     writingT2:"Improving",    speaking:"Medium",       note:"Question types"},
  {week:4, listeningTarget:"/40", readingTarget:"/40", writingT1:"Band 6 target", writingT2:"Band 6 target",speaking:"Medium",       note:"Band 6+ push"},
  {week:5, listeningTarget:"/40", readingTarget:"/40", writingT1:"Band 6.5 target",writingT2:"Band 6.5 target",speaking:"Medium-High", note:"Mock test stage"},
  {week:6, listeningTarget:"/40", readingTarget:"/40", writingT1:"Band 7 target", writingT2:"Band 7 target",speaking:"High",         note:"Final push"}
];

// ===== 23. GOLDEN RULE (from ielts-plan.txt Section 19) =====
const GOLDEN_RULE = {
  rule: "Never only practice. Always practice + correct.",
  badMethod: "I solved one listening test.",
  goodMethod: "I solved one listening test, checked every wrong answer, listened again with transcript, wrote the reason for each mistake, and repeated the weak section.",
  conclusion: "That correction habit is what moves you toward Band 7+."
};

// ===== 24. EXAM INFO =====
const EXAM_INFO = {
  sections: ["Listening (40 questions, ~30 min)", "Reading (40 questions, 60 min)", "Writing (Task 1 + Task 2, 60 min)", "Speaking (Part 1 + 2 + 3, ~11-14 min)"],
  ownership: "IELTS is jointly owned by the British Council, IDP IELTS, and Cambridge University Press & Assessment.",
  officialMaterials: "Use official IELTS and British Council/IDP practice materials where possible."
};
