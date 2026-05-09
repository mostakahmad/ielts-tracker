// ============================================================
// IELTS MENTOR APP - COMPLETE DATA STORE
// Sourced 100% from ielts-plan.txt - No data skipped
// ============================================================

const COVERAGE = {
  listening: [
    {area:"Section 1 form completion", days:"1, 2, 3, 6, 15, 44"},
    {area:"Section 2 maps/MCQ", days:"4, 5, 6, 16, 25, 44"},
    {area:"Section 3 academic discussion", days:"8, 9, 17, 24, 33"},
    {area:"Section 4 academic lecture", days:"11, 12, 18, 26, 32, 39"},
    {area:"Full listening tests", days:"14, 22, 28, 31, 35, 37, 38, 39, 40, 42"},
    {area:"Transcript review", days:"14, 22, 31, 33, 36, 43"}
  ],
  reading: [
    {area:"Skimming/scanning", days:"2, 6"},
    {area:"True/False/Not Given", days:"3, 15, 25, 37, 45"},
    {area:"Matching headings", days:"4, 16, 24, 37, 45"},
    {area:"Sentence completion", days:"5, 18"},
    {area:"Summary completion", days:"11, 19"},
    {area:"Multiple choice", days:"5, 17"},
    {area:"Passage 3 mastery", days:"26, 27, 32, 38, 39"},
    {area:"Full timed tests", days:"23, 27, 28, 30, 34, 35, 38, 40, 42"}
  ],
  writing: [
    {area:"Task 1: Line/Bar/Table", days:"4, 6, 9, 11, 13"},
    {area:"Task 1: Pie/Process/Map", days:"16, 18, 20, 39"},
    {area:"Task 2: Opinion/Agree", days:"5, 8, 15, 22, 30"},
    {area:"Task 2: Problem/Discussion", days:"17, 19, 32, 38"},
    {area:"Lexical/Coherence upgrade", days:"24, 26"},
    {area:"Full timed mocks", days:"28, 34, 35, 40, 42"}
  ],
  grammar: [
    {area:"Tenses & Sentence Structure", days:"1, 2, 3, 8"},
    {area:"Articles & Nouns", days:"4, 5, 15"},
    {area:"Connectors & Clauses", days:"6, 10, 19, 22"},
    {area:"Passive & Conditionals", days:"11, 16, 18, 39"},
    {area:"Cause-Effect & Referencing", days:"17, 24, 38"},
    {area:"Final Polish", days:"36, 37, 41, 44, 45"}
  ]
};

const STRATEGY_FINAL = [
  {module:"Listening", target:"30+ correct", tips:["Section 1 must be perfect.", "Section 3/4 need transcript review.", "Identify traps: synonyms and changed answers."]},
  {module:"Reading", target:"30+ correct", tips:["Don't read every word.", "Use skimming/scanning strictly.", "Underline evidence for every answer."]},
  {module:"Writing", target:"Band 7.0+", tips:["Clear overview in Task 1.", "Clear position from start in Task 2.", "Logical paragraph progression."]},
  {module:"Speaking", target:"Natural flow", tips:["Avoid memorized full answers.", "Use answer + reason + example.", "Record and listen to yourself daily."]}
];

// ===== 1. 45-DAY PLAN =====
const PLAN = [
  {
    "day": 1,
    "title": "IELTS Orientation + Baseline Test",
    "morning": "Vocabulary: Learn Day 1 Education vocabulary: formal education, higher education, compulsory education, academic performance, academic pressure, learning environment, critical thinking, rote memorization, lifelong learning, etc.. Listening: Take a short diagnostic Listening practice: Section 1 only. Focus on names, numbers, spelling, phone numbers, dates.. Reading: Take a short diagnostic Reading passage. Do not worry about score. Identify which question types are difficult.. Review: Create your IELTS Error Notebook with columns: Date, Module, Mistake, Reason, Correction, Repeat Date.",
    "evening": "Writing: Write 150 words about your current English level, IELTS goal, and study plan. Do not use AI first. Then underline grammar mistakes.. Speaking: Record a 1-minute self-introduction: name, study/work, hometown, IELTS goal, daily routine. Listen again and note hesitation.. Grammar: Learn basic sentence structure: Subject + Verb + Object. Write 10 simple sentences.. Review: Write today's reflection: What was hardest? Listening, Reading, Writing, or Speaking?",
    "output": "Day 1 reflection",
    "mentor": "Start honestly. Today's goal is not Band 7 performance. Today's goal is to know your starting point."
  },
  {
    "day": 2,
    "title": "Listening Section 1 + Reading Skimming/Scanning",
    "morning": "Vocabulary: Education and exams vocabulary: curriculum, syllabus, academic feedback, continuous assessment, scholarship, tuition fees, dropout rate, university admission.. Listening: Practice Listening Section 1 form completion. Focus: names, addresses, prices, dates, weekdays, spelling. Replay only after checking answers.. Reading: Learn skimming and scanning. Skim a passage in 3 minutes, write the main idea of each paragraph, then scan for names/numbers/dates.. Review: Write all wrong Listening answers and why they were wrong: spelling, plural, number, missed word, distractor.",
    "evening": "Writing Task 1: Learn Academic Task 1 structure: paraphrase, overview, details 1, details 2. Study one simple line graph. Write only paraphrase + overview.. Speaking Part 1: Practice topics: hometown, study, work. Use formula: answer + reason + example. Record 6 answers.. Grammar: Present simple vs present continuous. Write 10 sentences about your daily routine and current IELTS preparation.. Review: Review Day 1 vocabulary and use 5 words in speaking.",
    "output": "Vocabulary activation",
    "mentor": "Listening Section 1 should become your scoring zone. Aim for 8-10 out of 10 in this section."
  },
  {
    "day": 3,
    "title": "Listening Form Completion + Reading True/False/Not Given",
    "morning": "Vocabulary: Student life vocabulary: peer learning, group assignment, research project, laboratory work, study habit, exam preparation, academic writing, moral education.. Listening: Practice Section 1 form/table completion again. Focus on word limit: ONE WORD ONLY, NO MORE THAN TWO WORDS.. Reading: Learn True/False/Not Given. Practice 10 questions slowly. For each answer, underline the exact evidence.. Review: Separate mistakes into False vs Not Given confusion.",
    "evening": "Writing Task 2: Learn Task 2 basic structure: introduction, body 1, body 2, conclusion. Plan one opinion essay only.. Speaking Part 1: Practice topics: family, daily routine, free time. Record 6 answers of 20-30 seconds each.. Grammar: Past simple vs present perfect. Write 10 sentences about your education and IELTS journey.. Review: Rewrite 5 weak sentences from Day 1 writing.",
    "output": "5 improved sentences",
    "mentor": "For TFNG, never use outside knowledge. Only use the passage."
  },
  {
    "day": 4,
    "title": "Listening Maps + Reading Matching Headings",
    "morning": "Vocabulary: Technology basics: technological advancement, digital transformation, artificial intelligence, automation, user-friendly interface, online platform, internet access, cloud computing.. Listening: Learn map labeling basics. Practice direction words: opposite, next to, behind, between, at the end of, on the left, on the right.. Reading: Learn matching headings. Read first and last sentence of each paragraph. Choose heading based on paragraph purpose, not repeated words.. Review: Write 5 direction phrases and 5 heading mistakes.",
    "evening": "Writing Task 1: Learn line graph vocabulary: increase, decrease, rise, fall, fluctuate, remain stable, peak. Write 1 overview + 1 details paragraph.. Speaking Part 1: Topic: technology. Answer questions about mobile phones, internet, online learning. Record 6 answers.. Grammar: Articles: a, an, the, zero article. Correct 15 article mistakes.. Review: Use 5 technology words in speaking.",
    "output": "Active vocabulary practice",
    "mentor": "In matching headings, avoid keyword traps. The correct heading summarizes the whole paragraph."
  },
  {
    "day": 5,
    "title": "Listening Multiple Choice + Reading Sentence Completion",
    "morning": "Vocabulary: Digital life vocabulary: data privacy, cyber security, screen time, information overload, digital divide, online transaction, smartphone addiction, online fraud.. Listening: Practice Section 2 multiple choice. Focus on distractors: speaker says one option first, then changes answer.. Reading: Practice sentence completion. Predict grammar before answering: noun, adjective, verb, number.. Review: Write answer-type prediction notes.",
    "evening": "Writing Task 2: Opinion essay introduction practice. Write 3 introductions for 3 different topics: education, technology, environment.. Speaking Part 2: Learn cue card method: past, description, details, feeling, result. Prepare one cue card: a useful app/website.. Grammar: Countable and uncountable nouns. Focus: advice, information, knowledge, research, pollution, traffic.. Review: Review Day 1-5 vocabulary. Mark difficult words.",
    "output": "Vocabulary weak list",
    "mentor": "Multiple choice is a trap-heavy question type. Listen for final meaning, not first word match."
  },
  {
    "day": 6,
    "title": "Listening Section 1+2 + Timed Reading Passage",
    "morning": "Vocabulary: Digital problems and safety: cyberbullying, online harassment, fake profile, privacy concern, secure password, data breach, digital inclusion, technological dependency.. Listening: Practice Sections 1 and 2 together under timed condition. Do not pause audio.. Reading: Complete one Reading Passage 1 in 20 minutes. Use remaining time to review evidence.. Review: Write top 5 mistakes from Listening/Reading.",
    "evening": "Writing Task 1: Write first full line graph report: 170-190 words. Include overview.. Speaking Part 1: Mini mock: 10 Part 1 questions from hometown, study, technology, family. Record continuously.. Grammar: Connectors: because, so, although, while, however. Write 10 compound/complex sentences.. Review: Rewrite 5 weak Task 1 sentences.",
    "output": "Improved Task 1 sentences",
    "mentor": "Your first full Task 1 may be weak. That is normal. The key is overview + comparison."
  },
  {
    "day": 7,
    "title": "Week 1 Mini Mock + Full Review",
    "morning": "Vocabulary: Review Days 1-6 vocabulary. Do not learn new words first. Test yourself on Bangla meaning.. Listening: Mini mock: Sections 1 and 2. No pause. Transfer answers carefully.. Reading: One Passage 1 timed, including TFNG or headings if possible.. Review: Calculate Week 1 score trend. Identify weakest module.",
    "evening": "Writing: Rewrite Day 6 Task 1 after correction. Improve overview, comparisons, grammar.. Speaking Part 2: Record one 2-minute cue card: Describe a subject you liked at school.. Grammar: Review Week 1 grammar: sentence structure, tenses, articles, countable nouns, connectors.. Weekly Review: Write Week 1 reflection: strongest area, weakest area, next week target.",
    "output": "Week 1 reflection",
    "mentor": "By the end of Week 1, you should understand the IELTS structure and have your first error notebook."
  },
  {
    "day": 8,
    "title": "Listening Section 3 + Reading Matching Information",
    "morning": "Vocabulary: Environment: climate change, global warming, greenhouse gases, carbon emissions, fossil fuels, renewable energy, sustainable development, environmental degradation.. Listening: Practice Section 3 academic conversation. Focus on speaker opinions, agreement, disagreement, and changed decisions.. Reading: Practice matching information. Scan for names, dates, examples, causes, results.. Review: Write paraphrases from questions and passage.",
    "evening": "Writing Task 2: Agree/disagree essay planning. Write thesis + two body topic sentences.. Speaking Part 2: Cue card: Describe a person who helped you. Use past + details + feeling.. Grammar: Complex sentences with because, although, while, which.. Review: Add 5 environmental words into your essay plan.",
    "output": "Topic vocabulary activation",
    "mentor": "Section 3 is about meaning, not just words. Follow the students' final decision."
  },
  {
    "day": 9,
    "title": "Listening Section 3 MCQ + Reading Gap Fill",
    "morning": "Vocabulary: Waste and conservation: plastic waste, industrial waste, waste management, recycling, biodiversity, wildlife conservation, endangered species, deforestation.. Listening: Section 3 multiple choice. Before listening, underline keywords and predict paraphrases.. Reading: Gap fill practice. Predict part of speech before reading.. Review: Write all wrong answers with grammar reason.",
    "evening": "Writing Task 1: Bar chart vocabulary and structure. Write overview + one comparison paragraph.. Speaking Part 1: Topics: environment, pollution, recycling. Record 8 short answers.. Grammar: Comparatives and superlatives: higher than, the highest, more common, less popular.. Review: Rewrite 5 comparison sentences for Task 1 accuracy.",
    "output": "Improved comparison set",
    "mentor": "For charts, do not describe every number. Select the biggest, smallest, and main change."
  },
  {
    "day": 10,
    "title": "Listening Distractors + Reading Paragraph Matching",
    "morning": "Vocabulary: Climate/disaster vocabulary: natural disaster, flood risk, drought, extreme weather, rising sea level, climate crisis, eco-friendly product, sustainable lifestyle.. Listening: Distractor practice. Listen for corrections: actually, no, sorry, I mean, instead, rather than.. Reading: Paragraph matching practice. Find which paragraph contains specific information.. Review: Write 5 distractor examples from audio.",
    "evening": "Writing Task 2: Write introduction + conclusion for an environment essay.. Speaking Part 3: Practice giving reasons: Why should people protect the environment? Why do cities have pollution?. Grammar: Relative clauses: who, which, that, where.. Review: Use 5 environment words in speaking answers.",
    "output": "Active speaking vocabulary",
    "mentor": "Band 7 speaking needs reasons and examples, not one-line answers."
  },
  {
    "day": 11,
    "title": "Listening Section 4 Note Completion + Reading Summary Completion",
    "morning": "Vocabulary: Health: public health, healthcare system, medical treatment, preventive care, mental health, physical health, balanced diet, sedentary lifestyle.. Listening: Section 4 lecture note completion. Predict answer type before listening.. Reading: Summary completion practice. Focus on synonyms and grammar fit.. Review: Write 10 synonyms from passage/questions.",
    "evening": "Writing Task 1: Table report. Learn how to compare rows/columns. Write overview + 1 details paragraph.. Speaking Part 2: Cue card: Describe a healthy activity you do or want to do.. Grammar: Passive voice basics. Use for process and formal writing.. Review: Correct 5 sentences from your table report.",
    "output": "Improved report sentences",
    "mentor": "In summary completion, grammar often tells you the answer type."
  },
  {
    "day": 12,
    "title": "Listening Academic Vocabulary + Reading Yes/No/Not Given",
    "morning": "Vocabulary: Disease/lifestyle: chronic disease, vaccination, life expectancy, stress management, obesity, diabetes, respiratory disease, depression.. Listening: Section 4 academic vocabulary practice. Focus on lecture signposting: firstly, however, as a result, in contrast.. Reading: Yes/No/Not Given practice. Focus on writer's opinion, not factual statement only.. Review: Separate YNNG from TFNG rules.",
    "evening": "Writing Task 2: Advantages/disadvantages essay. Write one body paragraph about technology or health.. Speaking Part 3: Compare past and present health habits. Use \"Compared with the past...\". Grammar: Modals: should, must, might, could, have to.. Review: Add 5 health words into speaking answers.",
    "output": "Vocabulary activation",
    "mentor": "YNNG is about the writer's view. TFNG is about factual information."
  },
  {
    "day": 13,
    "title": "Timed Listening 3 Sections + Full Bar Chart",
    "morning": "Vocabulary: Food/medicine: nutritional value, processed food, smoking habit, drug addiction, public hospital, private clinic, health insurance, disease prevention.. Listening: Complete Listening Sections 1-3 under timed condition.. Reading: Two short reading passages untimed. Focus on understanding evidence.. Review: Identify weak Listening section.",
    "evening": "Writing Task 1: Write full bar chart report in 20 minutes, then spend 25 minutes correcting.. Speaking: Mini mock: Part 1 + one Part 2 cue card on health/food.. Grammar: Sentence correction from your writing: articles, verb tense, subject-verb agreement.. Review: Review Week 2 vocabulary so far.",
    "output": "Weak vocabulary list",
    "mentor": "Correction time is part of study time. Do not skip it."
  },
  {
    "day": 14,
    "title": "Full Listening Test + Week 2 Review",
    "morning": "Vocabulary: Review Days 8-13 vocabulary. Test yourself without looking at Bangla meanings.. Listening: Full Listening test, 40 questions. No pause, no replay.. Listening Review: Review transcript for wrong answers. Find exact audio line.. Error Log: Categorize mistakes: spelling, plural, distractor, speed, unknown word.",
    "evening": "Writing: Rewrite one weak Task 1 or Task 2 paragraph from Week 2.. Speaking: Fluency drill: speak for 1 minute on 5 topics without stopping.. Grammar: Week 2 grammar review: comparatives, relative clauses, passive, modals.. Weekly Review: Record Week 2 scores and set Week 3 targets.",
    "output": "Week 2 report",
    "mentor": "By the end of Week 2, you should know the main Listening/Reading question types."
  },
  {
    "day": 15,
    "title": "TFNG Mastery + Full Opinion Essay",
    "morning": "Vocabulary: Work and career: career prospects, employment opportunity, job satisfaction, job security, workplace environment, professional development, work-life balance, workplace stress.. Listening: Section 1 speed practice. Aim for 9-10 out of 10. Focus on spelling and plural.. Reading: TFNG deep practice: 15 questions. Write evidence line for each answer.. Review: List all Not Given traps.",
    "evening": "Writing Task 2: Write full opinion essay in 40 minutes. Use clear position. Spend 5 min checking.. Speaking Part 1: Topics: hobbies, food, weather, work/study. Record 10 answers.. Grammar: Subject-verb agreement. Correct 15 sentences.. Review: Underline 5 career words used in writing/speaking.",
    "output": "Active vocabulary check",
    "mentor": "From today, writing must become timed. Band 7 needs both quality and speed."
  },
  {
    "day": 16,
    "title": "Matching Headings + Pie Chart",
    "morning": "Vocabulary: Business vocabulary: entrepreneurship, market competition, customer satisfaction, profit margin, business ethics, product quality, service quality, competitive advantage.. Listening: Section 2 map labeling and multiple choice mixed practice.. Reading: Matching headings: 7-8 paragraphs. Write paragraph purpose in 5 words before choosing heading.. Review: Write why each wrong heading was wrong.",
    "evening": "Writing Task 1: Pie chart report. Learn proportion language: account for, make up, represent. Write full report.. Speaking Part 2: Cue card: Describe an object you use every day.. Grammar: Conditionals type 1 and 2. Write 10 IELTS-style sentences.. Review: Add business words into speaking examples.",
    "output": "Speaking vocabulary use",
    "mentor": "For pie charts, group similar categories. Do not list every slice separately."
  },
  {
    "day": 17,
    "title": "Reading Multiple Choice + Problem-Solution Essay",
    "morning": "Vocabulary: Economy: economic growth, economic development, financial stability, inflation, cost of living, purchasing power, income inequality, poverty reduction.. Listening: Section 3 academic discussion. Focus on students agreeing/disagreeing.. Reading: Multiple choice reading. Eliminate wrong options and write why they are wrong.. Review: Write 5 paraphrases from options.",
    "evening": "Writing Task 2: Problem-solution essay planning + one full body paragraph.. Speaking Part 3: Topic: unemployment/economy. Practice causes, effects, solutions.. Grammar: Cause-effect sentences: leads to, results in, contributes to, because of, due to.. Review: Rewrite weak body paragraph sentences.",
    "output": "Improved body paragraph",
    "mentor": "Problem-solution essays must have matching problems and solutions."
  },
  {
    "day": 18,
    "title": "Sentence Completion + Process Diagram",
    "morning": "Vocabulary: Government and policy: government policy, public funding, social welfare, public services, policy makers, law enforcement, transparency, accountability.. Listening: Section 4 lecture. Focus on note completion and academic nouns.. Reading: Sentence completion. Predict word form and check word limit.. Review: List grammar clues before each answer.",
    "evening": "Writing Task 1: Process diagram. Learn passive voice and sequence language: first, then, after that, finally.. Speaking Part 2: Cue card: Describe an important event in your life.. Grammar: Sequencing and passive voice for processes.. Review: Correct Task 1 process grammar.",
    "output": "Improved process report",
    "mentor": "Process diagrams need sequence and passive voice. No data comparison needed."
  },
  {
    "day": 19,
    "title": "Summary Completion + Discussion Essay",
    "morning": "Vocabulary: Society: social inequality, social harmony, community development, public participation, quality of life, equal opportunity, human rights, ethical values.. Listening: Distractor practice from Sections 2 and 3. Focus on changed answers.. Reading: Summary completion with and without word bank. Focus on synonyms.. Review: Write 10 synonym pairs.",
    "evening": "Writing Task 2: Discussion essay outline: view 1, view 2, your view. Write introduction + topic sentences.. Speaking Part 3: Balanced opinion practice: advantages/disadvantages of city life, technology, education.. Grammar: Contrast sentences: although, however, whereas, while, nevertheless.. Review: Add society vocabulary to essay plan.",
    "output": "Vocabulary integration",
    "mentor": "Discussion essays need balance. Do not ignore one side."
  },
  {
    "day": 20,
    "title": "Timed Reading + Map Report",
    "morning": "Vocabulary: Family: family bonding, parental guidance, responsible parenting, childcare, emotional support, generation gap, peer pressure, mutual respect.. Listening: Full Listening test or Sections 1-4 mixed if full test is not possible.. Reading: Two full passages timed: 20 minutes each. Review for 5 minutes.. Review: Identify which question type consumed most time.",
    "evening": "Writing Task 1: Map comparison. Learn location language: to the north, replaced by, converted into, expanded, demolished.. Speaking Mock: Part 1 + Part 2 + 3 Part 3 questions. Record continuously.. Grammar: Prepositions of place and change vocabulary for maps.. Review: Self-rate speaking: fluency, vocabulary, grammar, pronunciation.",
    "output": "Speaking self-score",
    "mentor": "Reading speed must improve now. Use strict timing."
  },
  {
    "day": 21,
    "title": "Week 3 Mock + Review",
    "morning": "Vocabulary: Review Days 15-20 vocabulary. Test recall and pronunciation.. Listening: Partial mock: Sections 3 and 4 only.. Reading: One Passage 2 or 3 timed. Focus on difficult question types.. Review: Record Week 3 Listening/Reading progress.",
    "evening": "Writing: Rewrite one weak Task 2 essay from Week 3. Improve thesis, topic sentences, examples.. Speaking: Cue card: Describe a family member or friend. Then answer 3 Part 3 follow-ups.. Grammar: Review complex sentences and punctuation.. Weekly Review: Write top 10 repeated mistakes from Weeks 1-3.",
    "output": "Week 3 score log",
    "mentor": "By the end of Week 3, you should understand all major Reading and Listening question types."
  },
  {
    "day": 22,
    "title": "Full Listening + Agree/Disagree Essay",
    "morning": "Vocabulary: Culture: cultural heritage, cultural identity, cultural diversity, traditional values, local customs, national identity, preserve culture, multicultural society.. Listening: Full Listening test. Focus on exam discipline: no pause, no replay.. Review: Check transcript for all wrong answers. Mark repeated mistake types.. Error Log: Update Listening error log with section-wise weakness.",
    "evening": "Writing Task 2: Full agree/disagree essay in 40 minutes. Use 5 minutes to plan first.. Speaking Part 3: Abstract culture topics: Should traditions be preserved? Does globalization harm culture?. Grammar: Advanced connectors: nevertheless, in contrast, consequently, to some extent.. Review: Check essay for clear position and paragraph logic.",
    "output": "Essay checklist",
    "mentor": "Band 7 writing needs a clear position from beginning to end."
  },
  {
    "day": 23,
    "title": "Full Reading + Mixed Chart",
    "morning": "Vocabulary: Media: mass media, digital media, media coverage, fake news, reliable information, media literacy, freedom of speech, target audience.. Reading: Full Academic Reading test, 60 minutes. No dictionary.. Review: Check wrong answers. Identify timing issue and question-type weakness.. Vocabulary: Collect 10 unknown words from reading passage.",
    "evening": "Writing Task 1: Mixed chart report. Focus on grouping data and writing overview.. Speaking Part 2: Two cue cards: Describe a TV program / Describe a website.. Grammar: Complex sentence accuracy check. Correct fragments and run-on sentences.. Review: Review full reading score and set next reading target.",
    "output": "Reading improvement target",
    "mentor": "Reading Band 7 requires about 30+ correct. Your timing strategy must become fixed."
  },
  {
    "day": 24,
    "title": "Section 3/4 Repair + Essay Coherence",
    "morning": "Vocabulary: Advertising/crime: advertising campaign, misleading advertisement, consumerism, crime rate, crime prevention, rehabilitation, juvenile crime, cybercrime.. Listening: Practice only Sections 3 and 4. These are usually harder and more academic.. Reading: Matching headings or matching information practice, whichever is weaker.. Review: Write 5 rules for your weak Reading type.",
    "evening": "Writing Task 2: Improve coherence. Take an old essay and improve topic sentences, linking, and paragraph progression.. Speaking: Pronunciation drill: record 10 answers focusing on stress, pauses, and clarity.. Grammar: Referencing: this, these, such, it, they. Avoid unclear pronouns.. Review: Read improved essay aloud to check flow.",
    "output": "Coherence check",
    "mentor": "Band 7 coherence means the examiner can follow your argument easily."
  },
  {
    "day": 25,
    "title": "TFNG/YNNG + Combined Chart",
    "morning": "Vocabulary: Transport: public transport, traffic congestion, road safety, pedestrian safety, transport network, commuting time, urban planning, sustainable transport.. Listening: Map labeling + multiple choice mixed practice.. Reading: TFNG and YNNG timed set. Compare factual information vs writer opinion.. Review: Write 5 False examples and 5 Not Given examples.",
    "evening": "Writing Task 1: Combined line + bar chart. Write full report under 20 minutes, then correct.. Speaking Part 1: Rapid answer practice: transport, city, travel, hometown.. Grammar: Comparison structures: twice as high as, higher than, the same as, similar to.. Review: Add transport words into speaking answers.",
    "output": "Vocabulary activation",
    "mentor": "Task 1 combined charts require grouping. Do not separate everything mechanically."
  },
  {
    "day": 26,
    "title": "Lexical Resource Upgrade",
    "morning": "Vocabulary: Housing/city: housing shortage, affordable housing, overcrowding, green spaces, smart city, city infrastructure, rural migration, residential area.. Listening: Full Listening test or weak-section practice. Focus on spelling and Section 4.. Reading: Passage 3 practice. Focus on complex sentences and author argument.. Review: Extract 10 useful academic phrases from reading.",
    "evening": "Writing Task 2: Lexical upgrade exercise. Replace simple vocabulary in an old essay with natural collocations.. Speaking Part 3: City/housing questions: Why are cities crowded? How can housing be improved?. Grammar: Noun phrases: serious environmental pollution, affordable housing policy, public transport system.. Review: Create personal list: 20 Band 7 collocations.",
    "output": "Collocation list",
    "mentor": "Band 7 vocabulary means natural collocations, not rare words."
  },
  {
    "day": 27,
    "title": "Full Reading + Speaking Mock",
    "morning": "Vocabulary: Science: scientific research, evidence-based decision, research findings, data analysis, laboratory experiment, medical breakthrough, ethical concern, practical application.. Reading: Full Reading test, 60 minutes. Follow fixed timing: Passage 1 17 min, Passage 2 20 min, Passage 3 23 min.. Review: Review wrong answers and record timing problem.. Vocabulary: Add 10 reading synonyms to notebook.",
    "evening": "Speaking Mock: Full Speaking mock: Part 1, Part 2, Part 3. Record everything.. Writing Grammar: Correct grammar mistakes from two old essays. Focus on articles, agreement, tense, sentence boundaries.. Pronunciation: Listen to your speaking mock. Note pronunciation and hesitation problems.. Review: Self-score speaking using 4 criteria: fluency, vocabulary, grammar, pronunciation.",
    "output": "Speaking score estimate",
    "mentor": "Speaking improvement requires recording. Without recording, you cannot hear your real weaknesses."
  },
  {
    "day": 28,
    "title": "Mock Test 1 + Full Analysis",
    "morning": "Preparation: Prepare answer sheets, timer, quiet environment.. Listening Mock: Full Listening test.. Reading Mock: Full Reading test.. Break/Score: Calculate raw scores quickly.",
    "evening": "Writing Mock: Full Writing test: Task 1 20 min + Task 2 40 min.. Review: Identify top 10 repeated mistakes from mock.. Vocabulary: Collect 15 unknown words/paraphrases from Reading and Listening.. Reflection: Write next week's repair plan.",
    "output": "Mock 1 mistake list",
    "mentor": "Do not study randomly now. Repair what your mock exposed."
  },
  {
    "day": 29,
    "title": "Weakness Repair: Listening + Reading",
    "morning": "Vocabulary: Globalization/food: globalization, international cooperation, global supply chain, healthy eating habit, nutritious food, organic food, food safety, food waste.. Listening: Practice your weakest Listening section from Mock 1. Repeat similar question type.. Reading: Practice your weakest Reading question type from Mock 1.. Review: Compare today's performance with Mock 1 mistakes.",
    "evening": "Writing: Rewrite the weakest writing task from Mock 1. Improve structure and grammar.. Speaking: Practice weakest speaking part from Mock 1 or Day 27.. Grammar: Grammar based on your actual mistakes. Choose top 1 grammar weakness.. Review: Write what improved today and what still needs repair.",
    "output": "Repair reflection",
    "mentor": "Weakness repair is how you bridge the gap to Band 7."
  },
  {
    "day": 30,
    "title": "Full Reading + Timed Task 2",
    "morning": "Vocabulary: Housing/food: genetically modified food, vegetarian diet, calorie intake, dietary choice, housing market, rental accommodation, home ownership, neighborhood safety.. Reading: Full Academic Reading test. Strict timing.. Review: Analyze wrong answers and time loss.. Vocabulary: Add 10 paraphrases from test.",
    "evening": "Writing Task 2: Full essay under 40 minutes. Use 5-minute plan.. Speaking Part 3: Difficult abstract questions: success, money, society, technology, education.. Grammar: Conditional and hypothetical language for Part 3: would, could, might, if.. Review: Check essay against Band 7 criteria.",
    "output": "Essay self-assessment",
    "mentor": "For Task 2, planning is not wasted time. It prevents unclear essays."
  },
  {
    "day": 31,
    "title": "Full Listening + Task 1 Timing",
    "morning": "Vocabulary: Travel/tourism: tourism industry, tourist attraction, eco-tourism, cultural tourism, hospitality industry, travel destination, natural scenery, tourism development.. Listening: Full Listening test.. Review: Transcript review only for wrong answers. Replay wrong sections.. Error Log: Mark section-wise score.",
    "evening": "Writing Task 1: Write one Task 1 report in exactly 20 minutes. Use remaining time for correction.. Speaking Part 2: Practice 3 cue cards: travel, object, person. Use 1-minute notes + 2-minute speaking.. Grammar: Task 1 tense control: past data, present data, future projection.. Review: Check Task 1: overview, data selection, comparison, word count.",
    "output": "Task 1 checklist",
    "mentor": "Task 1 must be finished in 20 minutes. Task 2 is worth more and needs 40 minutes."
  },
  {
    "day": 32,
    "title": "Passage 3 + Band 7 Essay Style",
    "morning": "Vocabulary: Sports/leisure: recreational activity, sports facility, competitive sport, physical fitness, stress relief, sportsmanship, active lifestyle, exercise routine.. Listening: Section 4 lecture practice. Focus on academic terms and signposting.. Reading: Passage 3 only. Focus on writer's argument and inference.. Review: Write paragraph summary for each paragraph.",
    "evening": "Writing Task 2: Discussion + opinion essay. Focus on balanced views and final opinion.. Speaking Part 3: Sport/leisure topic: public health, exercise, government role.. Grammar: Complex sentence control: although + main clause, which clause, because clause.. Review: Highlight topic vocabulary used naturally.",
    "output": "Essay vocabulary review",
    "mentor": "Band 7 essays are clear, balanced, and logically developed."
  },
  {
    "day": 33,
    "title": "Listening Transcript + Essay Rewrite",
    "morning": "Vocabulary: Communication/language: verbal communication, body language, language barrier, bilingual ability, pronunciation skill, fluency, accuracy, active listening.. Listening: Full Listening or weak-section test.. Transcript Review: Study transcript. For each wrong answer, write exact phrase you missed.. Shadowing: Repeat 2 minutes of audio sentence by sentence.",
    "evening": "Speaking Mock: Full Speaking mock with focus on communication and fluency.. Writing: Rewrite one old weak essay. Improve examples and paragraph logic.. Grammar: Spoken grammar correction: tense, articles, sentence endings.. Review: Write 5 phrases you will use in future speaking answers.",
    "output": "Speaking phrase bank",
    "mentor": "Shadowing improves listening, speaking rhythm, and pronunciation together."
  },
  {
    "day": 34,
    "title": "Full Reading + Full Writing Test",
    "morning": "Vocabulary: Art/creativity: creative thinking, artistic expression, visual art, performing art, creative industry, imagination, artistic freedom, art education.. Reading: Full Reading test.. Review: Review wrong questions only.. Vocabulary: Add 10 synonyms from reading.",
    "evening": "Writing Test: Full writing test: Task 1 20 min + Task 2 40 min.. Grammar Review: Find and correct grammar mistakes in writing.. Speaking: Light speaking: describe an artwork, song, or movie.. Reflection: Check writing timing and word count.",
    "output": "Writing timing note",
    "mentor": "Writing stamina must be trained. Complete both tasks together."
  },
  {
    "day": 35,
    "title": "Mock Test 2 + Speaking Review",
    "morning": "Setup: Prepare timer, answer sheet, quiet room.. Listening Mock: Full Listening test.. Reading Mock: Full Reading test.. Score: Calculate scores quickly.",
    "evening": "Writing Mock: Full Writing test.. Speaking Mock: Full Speaking test recording.. Review: Compare Mock 1 vs Mock 2.. Plan: Set final 10-day strategy.",
    "output": "Mock 2 score sheet",
    "mentor": "By the end of Week 5, you should know your real Band 7 gaps."
  },
  {
    "day": 36,
    "title": "Mock 2 Analysis + Rewrite",
    "morning": "Vocabulary: Children/youth: child development, early childhood, teenage behavior, youth culture, parental influence, peer influence, social development, child protection.. Listening Review: Review Mock 2 Listening transcript. Replay only wrong sections.. Reading Review: Review Mock 2 Reading. Write evidence for each wrong answer.. Error Log: Update final error notebook.",
    "evening": "Writing Rewrite: Rewrite Task 1 or Task 2 from Mock 2.. Speaking: Practice youth/education topics with Part 3 reasoning.. Grammar: Correct most common grammar errors from Mock 2 writing.. Review: Create final personal checklist for exam.",
    "output": "Personal checklist",
    "mentor": "Correction day converts mock mistakes into score improvement."
  },
  {
    "day": 37,
    "title": "Listening Full + TFNG/Headings Review",
    "morning": "Vocabulary: Elderly/aging: elderly people, senior citizen, aging population, retirement age, pension system, social isolation, active aging, elderly-friendly society.. Listening: Full Listening test.. Reading: Practice TFNG + matching headings, your two most important question types.. Review: Write final rules for TFNG and headings.",
    "evening": "Speaking: Full Part 1, Part 2, Part 3 practice on education, technology, environment.. Vocabulary: Review education, technology, environment vocabulary. Use 10 in sentences.. Grammar: Accuracy drill: correct 20 short sentences.. Review: Note which speaking answers sound memorized and make them natural.",
    "output": "Speaking naturalness notes",
    "mentor": "Final speaking answers must sound natural, not memorized."
  },
  {
    "day": 38,
    "title": "Full Reading + Problem-Solution Essay",
    "morning": "Vocabulary: Synonyms: increase/rise, decrease/decline, important/significant, harmful/detrimental, useful/beneficial, improve/enhance.. Reading: Full Reading test.. Review: Focus on wrong answers from Passage 3.. Vocabulary: Add 10 new paraphrases.",
    "evening": "Writing Task 2: Problem-solution essay under timed condition.. Speaking Part 3: Problem-solution speaking: pollution, unemployment, technology addiction.. Grammar: Cause-effect grammar: because of, due to, as a result, consequently.. Review: Check essay: Are problems and solutions directly connected?",
    "output": "Essay logic check",
    "mentor": "Band 7 answers are specific. Avoid vague solutions like \"government should take steps\" without explanation."
  },
  {
    "day": 39,
    "title": "Full Listening + Process/Map Final Review",
    "morning": "Vocabulary: Task 1 vocabulary: increase sharply, rise gradually, remain stable, reach a peak, account for, respectively, approximately, a similar pattern.. Listening: Full Listening test.. Reading: Passage 3 timed. Focus on inference and writer's view.. Review: Write final Passage 3 strategy.",
    "evening": "Writing Task 1: Practice process or map, whichever is weaker.. Speaking Part 2: 2 cue cards: place and event.. Grammar: Passive voice + prepositions for process/map.. Review: Check Task 1 for overview and accurate description.",
    "output": "Task 1 checklist",
    "mentor": "Maps and processes are common weak areas. Learn their structure clearly."
  },
  {
    "day": 40,
    "title": "Mock Test 3",
    "morning": "Setup: Prepare full mock environment.. Listening: Full Listening mock.. Reading: Full Reading mock.. Score: Calculate raw scores.",
    "evening": "Writing: Full Writing mock.. Review: Identify final top 10 mistakes.. Vocabulary: Review weak vocabulary topics from mock.. Plan: Plan Days 41-45 based on Mock 3.",
    "output": "Final repair plan",
    "mentor": "This is your final heavy mock before final polishing."
  },
  {
    "day": 41,
    "title": "Final Weakness Fix",
    "morning": "Vocabulary: Task 2 phrases: controversial issue, growing concern, from my perspective, one major reason, positive impact, address this issue, outweigh the drawbacks.. Listening: Practice only weakest Listening section from Mock 3.. Reading: Practice only weakest Reading type from Mock 3.. Review: Compare with previous errors.",
    "evening": "Writing: Improve introductions, overviews, and conclusions. Write 3 intros, 3 overviews, 3 conclusions.. Speaking: Fluency practice. Speak on 5 topics for 1 minute each without stopping.. Grammar: Final grammar accuracy drill. Correct 20 common mistakes.. Review: Update final exam checklist.",
    "output": "Exam checklist",
    "mentor": "No random learning now. Only final score-improving work."
  },
  {
    "day": 42,
    "title": "Mock Test 4: Listening + Reading + Writing",
    "morning": "Setup: Prepare exam-like environment.. Listening: Full Listening test.. Reading: Full Reading test.. Score: Calculate score quickly.",
    "evening": "Writing: Full Writing test: Task 1 + Task 2.. Review: Check writing structure and timing only.. Speaking: Light speaking: 1 cue card + 3 Part 3 questions.. Reflection: Decide final 3-day revision priority.",
    "output": "Final priority note",
    "mentor": "This is your final full L/R/W score check."
  },
  {
    "day": 43,
    "title": "Final Error Log Review + Speaking Mock",
    "morning": "Vocabulary: Speaking phrases: I would say that, from my point of view, to be honest, it depends, compared with the past, overall I think.. Listening: Redo wrong Listening questions from previous mocks.. Reading: Redo wrong Reading questions from previous mocks. Do not take new test.. Review: Mark which old mistakes are now fixed.",
    "evening": "Speaking Mock: Full Speaking mock. Focus on natural answers, not memorized answers.. Vocabulary: Review weak topic vocabulary: education, health, environment, technology, society.. Grammar: Spoken grammar correction from mock.. Reflection: Write final weak topic list and quick phrases for each.",
    "output": "Final speaking sheet",
    "mentor": "Redoing wrong questions is more powerful than doing new questions at this stage."
  },
  {
    "day": 44,
    "title": "Light Practice + Confidence Day",
    "morning": "Vocabulary: Final collocations: serious problem, positive impact, negative impact, provide opportunity, acquire skills, boost the economy, strict regulation, consistent practice.. Listening: Light practice: Sections 1 and 2 only. Aim for accuracy and calmness.. Reading: One Passage 1 only. Focus on confidence and clean strategy.. Review: Review final test strategies.",
    "evening": "Writing: Do not write full essay. Write 2 Task 2 plans and 2 Task 1 overviews.. Speaking: Confidence speaking: hometown, study, technology, environment, future plan.. Grammar: Review personal grammar mistake list only.. Exam Prep: Prepare documents, ID/passport, test location/time, pencils if paper-based, sleep plan.",
    "output": "Exam readiness checklist",
    "mentor": "Avoid burnout. Keep your mind fresh and confident."
  },
  {
    "day": 45,
    "title": "Final Revision and Exam Readiness",
    "morning": "Vocabulary: Review only your personal weak vocabulary list. Do not learn many new words.. Listening: Listen to one easy Section 1 or 2 for confidence. Do not do hard full test.. Reading: Review Reading strategies: TFNG, headings, matching, summary. No full test.. Final Review: Review error notebook: top grammar mistakes, top listening mistakes, top reading traps.",
    "evening": "Writing: Review Task 1 and Task 2 structures. Read your best corrected essay/report.. Speaking: Light speaking only. Answer familiar questions naturally.. Exam Checklist: Confirm test time, ID, route, sleep, food, water, reporting time.. Rest: Stop studying. Relax, sleep early, avoid stress.",
    "output": "Fresh mind",
    "mentor": "The final day is not for heavy learning. It is for confidence, clarity, and rest."
  }
];

// ===== 2. WEEKLY TARGETS =====
const WEEKS = [
  {week:1, theme:"IELTS Foundation", days:[1,7], mainTarget:"Understand format, build basic English control", listening:"Section 1 basics", reading:"Skimming/scanning", writing:"Basic structure", speaking:"Part 1 intro", writingOutput:"First writing baseline"},
  {week:2, theme:"Core Skill Building", days:[8,14], mainTarget:"Learn major question types and basic writing structures", listening:"Section 3 academics", reading:"Core question types", writing:"Charts + body paragraphs", speaking:"Part 1 + Part 2", writingOutput:"Bar chart + Essay segments"},
  {week:3, theme:"Question-Type Mastery", days:[15,21], mainTarget:"Practice Reading/Listening question types deeply", listening:"Mastery of all sections", reading:"Deep type practice", writing:"Full Task 1 + Task 2", speaking:"Part 3 reasoning", writingOutput:"Full Essay + Pie Chart"},
  {week:4, theme:"Band 6 to Band 7 Transition", days:[22,28], mainTarget:"Timed practice, essay improvement, speaking fluency", listening:"Timed discipline", reading:"Exam speed", writing:"Coherence + Lexical upgrade", speaking:"Fluency + Mock", writingOutput:"Full timed mock set"},
  {week:5, theme:"Mock Test and Weakness Repair", days:[29,35], mainTarget:"Full tests, targeted correction, confidence building", listening:"30+ correct aim", reading:"30+ correct aim", writing:"Polishing essays", speaking:"Natural flow", writingOutput:"Mock test series"},
  {week:6, theme:"Final Band 7 Polishing", days:[36,45], mainTarget:"Full mock tests, final revision, error elimination", listening:"Error minimization", reading:"Strategy mastery", writing:"Speed + Accuracy", speaking:"Confidence", writingOutput:"Final mock scores"}
];

// ===== 3. MOCK TEST SCHEDULE =====
const MOCKS = [
  {day:7,  type:"Mini Mock",          purpose:"Check foundation (Sections 1/2)"},
  {day:14, type:"Full Listening Test",   purpose:"Listen without replay baseline"},
  {day:21, type:"Reading Timed Test",    purpose:"Check question type speed"},
  {day:28, type:"Full Mock Test 1",      purpose:"First full exam simulation"},
  {day:35, type:"Full Mock Test 2",      purpose:"Exam stamina check"},
  {day:40, type:"Full Mock Test 3",      purpose:"Final polish mock"},
  {day:42, type:"Final Mock Test",       purpose:"Ready for real exam"}
];

// ===== 4. DAILY CHECKLIST (from ielts-plan.txt Section 13) =====
const DAILY_CHECKLIST_FIXED = [
  {id:"vocab",    label:"Learned 18–20 vocabulary items", sub:"Add to daily topic list"},
  {id:"vocab_s",  label:"Used 5 words in sentences",      sub:"Active sentence practice"},
  {id:"listen",   label:"Completed Listening practice",   sub:"Focused section or full test"},
  {id:"listen_r", label:"Reviewed Listening mistakes",    sub:"Transcript review and trap analysis"},
  {id:"read",     label:"Completed Reading practice",     sub:"Passage timing or question type"},
  {id:"read_r",   label:"Reviewed Reading evidence",      sub:"Check exactly where the answer is"},
  {id:"write",    label:"Completed Writing practice",     sub:"Task 1 or Task 2 as per plan"},
  {id:"write_r",  label:"Corrected Writing mistakes",     sub:"Grammar, overview, or coherence"},
  {id:"speak",    label:"Completed Speaking recording",   sub:"Record and listen back"},
  {id:"speak_r",  label:"Reviewed Speaking fluency",      sub:"Check hesitation and grammar"},
  {id:"grammar",  label:"Practiced grammar topic",        sub:"10 correct sentences for today's rule"},
  {id:"error",    label:"Updated error notebook",         sub:"Log today's most important mistakes"},
  {id:"reflect",  label:"Wrote daily reflection",         sub:"What was hardest today?"}
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
  "Education and Exams", "Work and Career", "Business and Economy", "Health and Lifestyle", "Technology and Digital Life",
  "Environment and Disaster", "Society and Family", "Transport and Housing", "Science and Culture", "Media and Crime"
];
const VOCAB_TOPIC_DAYS = [
  [1,7], [8,14], [15,18], [19,21], [22,24], [25,27], [28,34], [35,40], [41,43], [44,45]
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
