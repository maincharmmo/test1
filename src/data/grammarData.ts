import { GrammarCategory, GrammarPoint } from '../types';

export const GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    id: 'cat-tenses',
    titleVi: 'Hệ Thống 12 Thì Tiếng Anh',
    titleEn: 'English Tenses System',
    iconName: 'Clock',
    descriptionVi: 'Trọng tâm đề thi đầu vào: Hiện tại đơn, Tiếp diễn, Hoàn thành, Quá khứ đơn, Tương lai đơn, Quá khứ tiếp diễn và hoàn thành.',
    totalPoints: 24,
    level: 'A1'
  },
  {
    id: 'cat-passive',
    titleVi: 'Câu Bị Động (Passive Voice)',
    titleEn: 'Passive Voice',
    iconName: 'Repeat',
    descriptionVi: 'Quy tắc chuyển đổi bị động các thì, bị động 2 tân ngữ, bị động câu mệnh lệnh, thể nhờ bảo (have/get done), bị động khách quan.',
    totalPoints: 18,
    level: 'A2'
  },
  {
    id: 'cat-conditionals',
    titleVi: 'Câu Điều Kiện & Đảo Ngữ',
    titleEn: 'Conditionals & Inversion',
    iconName: 'GitFork',
    descriptionVi: 'Điều kiện loại 0, 1, 2, 3, hỗn hợp (Mixed), biến thể Unless, As long as, But for, Đảo ngữ điều kiện Should/Were/Had.',
    totalPoints: 20,
    level: 'A2'
  },
  {
    id: 'cat-relative',
    titleVi: 'Mệnh Đề Quan Hệ (Relative Clauses)',
    titleEn: 'Relative Clauses & Reductions',
    iconName: 'Link',
    descriptionVi: 'Đại từ quan hệ Who, Whom, Whose, Which, That; Trạng từ Where, When, Why; Rút gọn mệnh đề bằng V-ing, V3/ed, To-V.',
    totalPoints: 18,
    level: 'B1'
  },
  {
    id: 'cat-wordform',
    titleVi: 'Họ Từ & Vị Trí Từ Loại (Word Form)',
    titleEn: 'Word Formation & Parts of Speech',
    iconName: 'Layers',
    descriptionVi: 'Vị trí Noun, Verb, Adj, Adv trong câu. Tiền tố & Hậu tố nhận diện từ loại - Dạng bài chiếm điểm cao nhất trong thi đầu vào!',
    totalPoints: 22,
    level: 'A2'
  },
  {
    id: 'cat-comparisons',
    titleVi: 'Các Cấu Trúc So Sánh (Comparisons)',
    titleEn: 'Comparisons & Superlatives',
    iconName: 'Sliders',
    descriptionVi: 'So sánh hơn, nhất, so sánh bằng (as... as), so sánh bội số (twice as... as), so sánh kép càng... càng (The more... the more).',
    totalPoints: 16,
    level: 'A2'
  },
  {
    id: 'cat-modals',
    titleVi: 'Động Từ Khuyết Thiếu (Modal Verbs)',
    titleEn: 'Modal Verbs & Modals in Past',
    iconName: 'ShieldAlert',
    descriptionVi: 'Can, Could, May, Might, Must, Have to, Should, Ought to, Need; và Dự đoán trong quá khứ: Must have V3, Can\'t have V3...',
    totalPoints: 18,
    level: 'A2'
  },
  {
    id: 'cat-gerunds',
    titleVi: 'Danh Động Từ & Động Từ Nguyên Mẫu',
    titleEn: 'Gerunds & Infinitives (V-ing / To V)',
    iconName: 'CheckSquare',
    descriptionVi: 'Các động từ đi với V-ing, To-V, Bare Inf; Nhóm động từ thay đổi nghĩa (Remember, Forget, Stop, Regret, Try...).',
    totalPoints: 20,
    level: 'B1'
  },
  {
    id: 'cat-reported',
    titleVi: 'Câu Gián Tiếp / Tường Thuật',
    titleEn: 'Reported Speech',
    iconName: 'MessageSquare',
    descriptionVi: 'Quy tắc lùi thì, đổi đại từ, chuyển trạng từ thời gian/nơi chốn; Câu tường thuật phát biểu, câu hỏi Yes/No, Wh-questions.',
    totalPoints: 16,
    level: 'A2'
  },
  {
    id: 'cat-articles',
    titleVi: 'Mạo Từ & Lượng Từ (Articles & Quantifiers)',
    titleEn: 'Articles & Quantifiers',
    iconName: 'PieChart',
    descriptionVi: 'Quy tắc vàng dùng A, An, The và Không dùng mạo từ; Phân biệt Some/Any, Few/A few, Little/A little, Much/Many.',
    totalPoints: 18,
    level: 'A1'
  },
  {
    id: 'cat-prepositions',
    titleVi: 'Giới Từ & Cụm Động Từ (Phrasal Verbs)',
    titleEn: 'Prepositions & Phrasal Verbs',
    iconName: 'Compass',
    descriptionVi: 'Giới từ chỉ thời gian, nơi chốn In, On, At; Giới từ đi theo tính từ & động từ cố định; Top 50 Phrasal Verbs thi đầu vào.',
    totalPoints: 24,
    level: 'B1'
  },
  {
    id: 'cat-conjunctions',
    titleVi: 'Liên Từ & Mệnh Đề Trạng Ngữ',
    titleEn: 'Conjunctions & Clauses',
    iconName: 'Share2',
    descriptionVi: 'Phân biệt Although / In spite of, Because / Because of, So that / In order to, So... that / Such... that, However, Therefore.',
    totalPoints: 18,
    level: 'A2'
  },
  {
    id: 'cat-tags',
    titleVi: 'Câu Hỏi Đuôi (Tag Questions)',
    titleEn: 'Tag Questions & Inversions',
    iconName: 'HelpCircle',
    descriptionVi: 'Quy tắc khẳng định - phủ định, các trường hợp đặc biệt: I am -> aren\'t I, Let\'s -> shall we, No one / Nobody -> they.',
    totalPoints: 14,
    level: 'A2'
  },
  {
    id: 'cat-sva',
    titleVi: 'Sự Hòa Hợp Chủ Ngữ & Động Từ',
    titleEn: 'Subject-Verb Agreement (S-V-A)',
    iconName: 'Shuffle',
    descriptionVi: 'Chủ ngữ kép, Either... or, Neither... nor, As well as, Along with, Each / Every, The number of vs A number of.',
    totalPoints: 16,
    level: 'B1'
  }
];

export const GRAMMAR_POINTS: GrammarPoint[] = [
  {
    id: 'gp-pres-simple',
    titleVi: 'Thì Hiện Tại Đơn (Present Simple)',
    titleEn: 'Present Simple Tense',
    categoryId: 'cat-tenses',
    level: 'A1',
    importance: 'essential',
    summaryFormula: 'S + V(s/es) / S + do/does not + V_bare | Do/Does + S + V_bare?',
    explanationVi: 'Diễn tả chân lý, sự thật hiển nhiên, thói quen lặp đi lặp lại hoặc lịch trình tàu xe cố định.',
    examples: [
      { en: 'Water boils at 100 degrees Celsius.', vi: 'Nước sôi ở 100 độ C (sự thật hiển nhiên).' },
      { en: 'She usually walks to school.', vi: 'Cô ấy thường đi bộ đến trường (thói quen).' },
      { en: 'The train leaves at 7:30 tomorrow morning.', vi: 'Chuyến tàu khởi hành lúc 7h30 sáng mai (lịch trình).' }
    ],
    examTrapsVi: [
      'Bẫy chia động từ khi chủ ngữ số ít: He, She, It, Danh từ số ít PHẢI thêm s/es vào động từ thường.',
      'Dấu hiệu nhận biết: always, usually, often, sometimes, rarely, never, every day/month/year.'
    ],
    practiceQuestions: [
      {
        id: 'pq-pres-1',
        question: 'My brother usually ________ to work by bus, but today he is riding a bike.',
        options: ['goes', 'go', 'is going', 'went'],
        correctIndex: 0,
        explanationVi: 'Chủ ngữ "My brother" là ngôi thứ 3 số ít, có trạng từ tần suất "usually" chỉ thói quen nên chia thì Hiện tại đơn: goes.'
      }
    ]
  },
  {
    id: 'gp-pres-cont',
    titleVi: 'Thì Hiện Tại Tiếp Diễn (Present Continuous)',
    titleEn: 'Present Continuous Tense',
    categoryId: 'cat-tenses',
    level: 'A1',
    importance: 'essential',
    summaryFormula: 'S + am/is/are + V-ing | S + am/is/are + not + V-ing',
    explanationVi: 'Diễn tả hành động đang diễn ra tại thời điểm nói, xu hướng thay đổi, hoặc kế hoạch chắc chắn trong tương lai gần.',
    examples: [
      { en: 'Please be quiet! The baby is sleeping.', vi: 'Xin hãy giữ im lặng! Em bé đang ngủ.' },
      { en: 'I am meeting the doctor at 3 PM this afternoon.', vi: 'Tôi có lịch hẹn gặp bác sĩ lúc 3 giờ chiều nay.' }
    ],
    examTrapsVi: [
      'Bẫy Động từ chỉ trạng thái (Stative Verbs) KHÔNG chia tiếp diễn: know, believe, understand, like, love, hate, want, belong to.',
      'Dấu hiệu: now, at the moment, currently, Look!, Listen!, Be quiet!'
    ],
    practiceQuestions: [
      {
        id: 'pq-pres-cont-1',
        question: 'Listen! Someone ________ at the front door.',
        options: ['knocks', 'is knocking', 'knocked', 'are knocking'],
        correctIndex: 1,
        explanationVi: 'Có câu mệnh lệnh "Listen!" cảnh báo hành động đang xảy ra lúc nói, chủ ngữ "Someone" chia số ít -> is knocking.'
      }
    ]
  },
  {
    id: 'gp-pres-perf',
    titleVi: 'Thì Hiện Tại Hoàn Thành (Present Perfect)',
    titleEn: 'Present Perfect Tense',
    categoryId: 'cat-tenses',
    level: 'A2',
    importance: 'essential',
    summaryFormula: 'S + have/has + V3/ed | S + have/has not + V3/ed',
    explanationVi: 'Diễn tả hành động xảy ra trong quá khứ nhưng kết quả còn lưu lại ở hiện tại, trải nghiệm cuộc đời, hoặc hành động bắt đầu trong quá khứ kéo dài đến hiện tại.',
    examples: [
      { en: 'I have lived in Hanoi for 5 years.', vi: 'Tôi đã sống ở Hà Nội được 5 năm (vẫn còn đang sống).' },
      { en: 'She has just finished her entrance exam.', vi: 'Cô ấy vừa mới hoàn thành bài thi đầu vào.' }
    ],
    examTrapsVi: [
      'Phân biệt SINCE (mốc thời gian: since 2020, since yesterday) vs FOR (khoảng thời gian: for 3 days, for a long time).',
      'Đã từng đi và đã về: have/has BEEN to. Đã đi và chưa về: have/has GONE to.',
      'Cấu trúc: This is the first time + S + have/has + V3/ed.'
    ],
    practiceQuestions: [
      {
        id: 'pq-pres-perf-1',
        question: 'She has been an English teacher ________ she graduated from university in 2018.',
        options: ['for', 'since', 'in', 'at'],
        correctIndex: 1,
        explanationVi: '"she graduated..." là một mốc sự kiện trong quá khứ, đi với thì Hiện tại hoàn thành ta dùng SINCE.'
      }
    ]
  },
  {
    id: 'gp-past-simple-cont',
    titleVi: 'Quá Khứ Đơn vs Quá Khứ Tiếp Diễn (Past Simple vs Continuous)',
    titleEn: 'Past Simple & Continuous',
    categoryId: 'cat-tenses',
    level: 'A2',
    importance: 'essential',
    summaryFormula: 'When + S + V2/ed, S + was/were + V-ing | While + S + was/were + V-ing, S + V2/ed',
    explanationVi: 'Hành động đang diễn ra trong quá khứ (chia QKTD) thì có hành động khác xen vào (chia QK đơn).',
    examples: [
      { en: 'While I was studying for the test, the electricity went out.', vi: 'Khi tôi đang học bài thi thì đột ngột mất điện.' },
      { en: 'When the teacher entered the room, all students were talking loudly.', vi: 'Khi giáo viên bước vào phòng, mọi học sinh đang nói chuyện ồn ào.' }
    ],
    examTrapsVi: [
      'Quy tắc vàng giải đề: Sau WHILE thường dùng V-ing (was/were V-ing). Sau WHEN thường dùng V2/ed (hành động ngắn chen ngang).',
      'Nếu 2 hành động cùng song song diễn ra trong quá khứ: While S1 was V-ing, S2 was V-ing.'
    ],
    practiceQuestions: [
      {
        id: 'pq-past-1',
        question: 'He ________ his finger while he was cooking dinner yesterday evening.',
        options: ['cut', 'was cutting', 'is cutting', 'cuts'],
        correctIndex: 0,
        explanationVi: 'Hành động đứt tay là hành động cắt ngang ngắn, chia quá khứ đơn. (Động từ bất quy tắc: cut - cut - cut).'
      }
    ]
  },
  {
    id: 'gp-passive-core',
    titleVi: 'Công Thức Bị Động Các Thì (Passive Voice Formulas)',
    titleEn: 'Passive Voice Fundamentals',
    categoryId: 'cat-passive',
    level: 'A2',
    importance: 'essential',
    summaryFormula: 'Chủ động: S + V + O  ==>  Bị động: S(O) + BE + V3/ed (+ by O)',
    explanationVi: 'Dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động thay vì người thực hiện, hoặc khi không biết rõ ai làm.',
    examples: [
      { en: 'English is spoken all over the world.', vi: 'Tiếng Anh được nói trên toàn thế giới.' },
      { en: 'The bridge was built in 1995.', vi: 'Cây cầu được xây dựng vào năm 1995.' },
      { en: 'A new stadium is being constructed.', vi: 'Một sân vận động mới đang được xây dựng.' }
    ],
    examTrapsVi: [
      'Bị động thì tiếp diễn luôn có BEING: is/am/are + BEING + V3/ed hoặc was/were + BEING + V3/ed.',
      'Bị động thì hoàn thành luôn có BEEN: have/has/had + BEEN + V3/ed.',
      'Bị động động từ khuyết thiếu: Modal + BE + V3/ed (e.g. This problem must be solved immediately).'
    ],
    practiceQuestions: [
      {
        id: 'pq-pass-1',
        question: 'All the homework must ________ before 9 PM tonight.',
        options: ['finish', 'be finished', 'being finished', 'finished'],
        correctIndex: 1,
        explanationVi: 'Sau động từ khuyết thiếu "must" ở thể bị động là "be + V3/ed" -> be finished.'
      }
    ]
  },
  {
    id: 'gp-passive-special',
    titleVi: 'Bị Động Khách Quan & Thể Nhờ Bảo (Have/Get something done)',
    titleEn: 'Special Passive Structures',
    categoryId: 'cat-passive',
    level: 'B1',
    importance: 'high',
    summaryFormula: 'Have + Something + V3/ed | Get + Something + V3/ed | It is said/believed that...',
    explanationVi: 'Thể nhờ bảo (nhờ hoặc thuê ai làm gì cho mình). Bị động khách quan diễn tả dư luận: "Người ta nói/tin rằng...".',
    examples: [
      { en: 'I had my computer repaired yesterday.', vi: 'Tôi đã đem máy tính đi sửa hôm qua (nhờ thợ sửa).' },
      { en: 'It is reported that the exam was very difficult.', vi: 'Người ta báo cáo rằng bài kiểm tra rất khó.' }
    ],
    examTrapsVi: [
      'Have someone DO something (nguyên mẫu) NHƯNG Get someone TO DO something.',
      'Cả hai cấu trúc đều có dạng bị động vật: HAVE/GET something DONE (V3/ed).'
    ],
    practiceQuestions: [
      {
        id: 'pq-pass-special-1',
        question: 'She went to the salon to have her hair ________.',
        options: ['cut', 'cutting', 'to cut', 'cuts'],
        correctIndex: 0,
        explanationVi: 'Cấu trúc nhờ bảo bị động: Have + something (her hair) + V3/ed (cut là động từ bất quy tắc: cut - cut - cut).'
      }
    ]
  },
  {
    id: 'gp-conditionals-123',
    titleVi: 'Bộ 3 Câu Điều Kiện Loại 1, 2, 3 (Type 1, 2, 3 Conditionals)',
    titleEn: 'Conditionals Type 1, 2, 3',
    categoryId: 'cat-conditionals',
    level: 'A2',
    importance: 'essential',
    summaryFormula: 'L1: If + V(hiện tại), S + will + V | L2: If + V2/ed (were), S + would + V | L3: If + had V3, S + would have V3',
    explanationVi: 'Loại 1: Có thể xảy ra ở hiện tại/tương lai. Loại 2: Giả định trái với hiện tại (to be luôn dùng WERE). Loại 3: Giả định trái với quá khứ.',
    examples: [
      { en: 'If you study hard, you will pass the entrance exam.', vi: 'Nếu bạn học chăm chỉ, bạn sẽ đỗ kỳ thi đầu vào (Loại 1).' },
      { en: 'If I were rich, I would travel around the world.', vi: 'Nếu tôi giàu, tôi sẽ đi du lịch quanh thế giới (Loại 2 - hiện tại không giàu).' },
      { en: 'If she had left earlier, she wouldn\'t have missed the bus.', vi: 'Nếu cô ấy rời đi sớm hơn thì cô ấy đã không bị lỡ xe buýt (Loại 3 - sự việc đã xong trong quá khứ).' }
    ],
    examTrapsVi: [
      'Mệnh đề IF không bao giờ chứa WILL hoặc WOULD.',
      'UNLESS = IF ... NOT. (Unless you study = If you do not study).',
      'Đảo ngữ Loại 1: Should + S + V. Đảo ngữ Loại 2: Were + S + to V / Were S... Đảo ngữ Loại 3: Had + S + V3/ed.'
    ],
    practiceQuestions: [
      {
        id: 'pq-cond-1',
        question: 'If he ________ harder last semester, he would have achieved a better score.',
        options: ['studied', 'had studied', 'studies', 'would study'],
        correctIndex: 1,
        explanationVi: 'Vế chính có "would have achieved" (điều kiện loại 3 trái với quá khứ "last semester"), nên mệnh đề IF chia "had + V3" -> had studied.'
      }
    ]
  },
  {
    id: 'gp-relative-clauses',
    titleVi: 'Mệnh Đề Quan Hệ & Đại Từ Thay Thế (Who, Whom, Which, That, Whose)',
    titleEn: 'Relative Pronouns & Usage',
    categoryId: 'cat-relative',
    level: 'B1',
    importance: 'essential',
    summaryFormula: 'Who (người - S), Whom (người - O), Which (vật), That (thay Who/Which), Whose (+ Noun: sở hữu)',
    explanationVi: 'Dùng để bổ nghĩa cho danh từ đứng trước, giúp ghép hai câu đơn thành một câu ghép mạch lạc.',
    examples: [
      { en: 'The boy who won the gold medal is my younger brother.', vi: 'Cậu bé người mà giành huy chương vàng là em trai tôi.' },
      { en: 'This is the laptop which I bought yesterday.', vi: 'Đây là chiếc laptop cái mà tôi đã mua hôm qua.' },
      { en: 'I met a student whose father is a famous professor.', vi: 'Tôi đã gặp một sinh viên có cha là một giáo sư nổi tiếng.' }
    ],
    examTrapsVi: [
      'Không dùng THAT sau dấu phẩy (mệnh đề không xác định) hoặc sau giới từ.',
      'Whose luôn phải đi liền trước một DANH TỪ (whose car, whose parents).',
      'Rút gọn: Chủ động dùng V-ing (The man living next door), Bị động dùng V3/ed (The book written by Nam).'
    ],
    practiceQuestions: [
      {
        id: 'pq-rel-1',
        question: 'The foreign tourist ________ passport was stolen contacted the police immediately.',
        options: ['who', 'whom', 'whose', 'which'],
        correctIndex: 2,
        explanationVi: 'Sau chỗ trống là danh từ "passport" (hộ chiếu của du khách đó), chỉ quan hệ sở hữu nên bắt buộc dùng WHOSE.'
      }
    ]
  },
  {
    id: 'gp-word-formation-rules',
    titleVi: 'Vị Trí Từ Loại Trong Câu (Word Order & Suffix Rules)',
    titleEn: 'Parts of Speech Positions & Formation',
    categoryId: 'cat-wordform',
    level: 'A2',
    importance: 'essential',
    summaryFormula: 'Adj + Noun | Adv + Adj | Verb + Adv | Preposition + Noun/V-ing | Make + O + Adj',
    explanationVi: 'Bí kíp ăn điểm tuyệt đối dạng bài Word Form: Xác định từ loại cần điền dựa vào từ đứng ngay trước và ngay sau chỗ trống.',
    examples: [
      { en: 'She is a carefully driver -> SAI! Sửa: She is a CAREFUL driver (Adj + Noun).', vi: 'Trước danh từ "driver" phải dùng tính từ "careful".' },
      { en: 'He drives very CAREFULLY (Verb + Adv).', vi: 'Sau động từ thường "drives" phải dùng trạng từ "carefully".' }
    ],
    examTrapsVi: [
      'Đuôi Danh từ hay gặp: -tion, -sion, -ment, -ness, -ity, -ance, -ence, -er/or.',
      'Đuôi Tính từ hay gặp: -ful, -less, -ive, -able, -ous, -ic, -al, -ed/ing.',
      'Đuôi Động từ: -en, -ize, -ify.',
      'Tính từ + ly = Trạng từ. NHƯNG Danh từ + ly = Tính từ (friendly, lovely, timely, daily).'
    ],
    practiceQuestions: [
      {
        id: 'pq-wf-1',
        question: 'The Internet has helped to increase the ________ between people worldwide.',
        options: ['connect', 'connection', 'connected', 'connective'],
        correctIndex: 1,
        explanationVi: 'Sau mạo từ "the" và trước giới từ "between", vị trí này cần một DANH TỪ -> connection.'
      }
    ]
  },
  {
    id: 'gp-comparisons-structures',
    titleVi: 'So Sánh Hơn, Nhất & So Sánh Kép (Comparatives & Superlatives)',
    titleEn: 'Comparison Structures',
    categoryId: 'cat-comparisons',
    level: 'A2',
    importance: 'essential',
    summaryFormula: 'Ngắn: -er / -est | Dài: more / most | So sánh kép: The + comp..., the + comp...',
    explanationVi: 'So sánh giữa 2 đối tượng (so sánh hơn: than), giữa 3 đối tượng trở lên (so sánh nhất: the... in/of).',
    examples: [
      { en: 'This exercise is more difficult than that one.', vi: 'Bài tập này khó hơn bài tập kia.' },
      { en: 'Mount Everest is the highest mountain in the world.', vi: 'Đỉnh Everest là ngọn núi cao nhất thế giới.' },
      { en: 'The more you practice, the better your English becomes.', vi: 'Bạn càng luyện tập nhiều, tiếng Anh của bạn càng tiến bộ (Càng... càng).' }
    ],
    examTrapsVi: [
      'Bất quy tắc: good -> better -> best; bad -> worse -> worst; far -> farther/further -> farthest/furthest.',
      'Không dùng đồng thời: more better (SAI) -> much better (ĐÚNG - much dùng để nhấn mạnh mức độ).'
    ],
    practiceQuestions: [
      {
        id: 'pq-comp-1',
        question: 'The harder you study, the ________ results you will achieve in the exam.',
        options: ['good', 'better', 'best', 'more good'],
        correctIndex: 1,
        explanationVi: 'Cấu trúc so sánh kép "Càng... càng": The + so sánh hơn..., the + so sánh hơn... Của "good" là "better" -> the better results.'
      }
    ]
  },
  {
    id: 'gp-gerund-infinitives',
    titleVi: 'V-ing hay To V: Danh Động Từ & Động Từ Nguyên Mẫu',
    titleEn: 'Gerunds (V-ing) vs Infinitives (To V)',
    categoryId: 'cat-gerunds',
    level: 'B1',
    importance: 'essential',
    summaryFormula: 'Sau Giới từ luôn là V-ING | Want/Decide/Hope + TO V | Enjoy/Avoid/Mind + V-ING',
    explanationVi: 'Quy tắc chọn V-ing hay To-V sau động từ chính. Đây là câu hỏi kinh điển có mặt trong 100% đề thi đầu vào.',
    examples: [
      { en: 'I decided to take the English placement test.', vi: 'Tôi đã quyết định tham gia kỳ thi xếp lớp tiếng Anh (decide to V).' },
      { en: 'She avoids eating junk food at night.', vi: 'Cô ấy tránh ăn đồ ăn vặt vào ban đêm (avoid V-ing).' }
    ],
    examTrapsVi: [
      'Nhóm đổi nghĩa đặc biệt cần thuộc lòng:',
      '• Remember / Forget + TO V: Nhớ/quên PHẢI làm gì (tương lai, bổn phận).',
      '• Remember / Forget + V-ING: Nhớ/quên ĐÃ làm gì trong quá khứ.',
      '• Stop + TO V: Dừng lại ĐỂ làm việc khác.',
      '• Stop + V-ING: Dừng hẳn, bỏ hành động đó.',
      '• Try + TO V: Cố gắng làm gì | Try + V-ING: Thử làm gì.'
    ],
    practiceQuestions: [
      {
        id: 'pq-ger-1',
        question: 'Remember ________ off the air conditioner before leaving the classroom.',
        options: ['turning', 'to turn', 'turn', 'turned'],
        correctIndex: 1,
        explanationVi: 'Nhớ phải làm một nhiệm vụ trong tương lai -> Remember + TO V -> to turn.'
      }
    ]
  },
  {
    id: 'gp-reported-speech-rules',
    titleVi: 'Câu Gián Tiếp & Quy Tắc Lùi Thì (Reported Speech Rules)',
    titleEn: 'Reported Speech Transformations',
    categoryId: 'cat-reported',
    level: 'A2',
    importance: 'essential',
    summaryFormula: 'Hiện tại đơn -> Quá khứ đơn | Hiện tại hoàn thành -> Quá khứ hoàn thành | will -> would | can -> could',
    explanationVi: 'Tường thuật lại lời nói của người khác. Động từ giới thiệu (said, told) ở quá khứ thì mệnh đề sau phải LÙI THÌ.',
    examples: [
      { en: '"I am learning English," Nam said. -> Nam said that he was learning English.', vi: 'Nam nói rằng anh ấy đang học tiếng Anh.' },
      { en: '"Where do you live?" she asked me. -> She asked me where I lived.', vi: 'Cô ấy hỏi tôi sống ở đâu (bỏ trợ động từ do, đưa về trật tự khẳng định S + V).' }
    ],
    examTrapsVi: [
      'Bẫy câu hỏi gián tiếp: KHÔNG đảo trợ động từ lên trước chủ ngữ. Phải đưa về thể khẳng định S + V.',
      'Đổi trạng từ: today -> that day, tomorrow -> the next day / following day, yesterday -> the day before, now -> then, here -> there.'
    ],
    practiceQuestions: [
      {
        id: 'pq-rep-1',
        question: 'He asked me where I ________ going on vacation the following week.',
        options: ['am', 'was', 'will be', 'have been'],
        correctIndex: 1,
        explanationVi: 'Động từ dẫn "asked" ở quá khứ, trạng từ "the following week", thì phải lùi từ "is/am/are" về "was/were" -> was.'
      }
    ]
  },
  {
    id: 'gp-sva-mastery',
    titleVi: 'Sự Hòa Hợp Chủ Ngữ & Động Từ (Subject - Verb Agreement)',
    titleEn: 'Subject - Verb Agreement Key Rules',
    categoryId: 'cat-sva',
    level: 'B1',
    importance: 'essential',
    summaryFormula: 'S1 together with/as well as S2 -> Chia theo S1 | Either S1 or S2 -> Chia theo S2 | The number of + Ns + V(ít)',
    explanationVi: 'Quy tắc chia động từ phù hợp với chủ ngữ, đặc biệt khi chủ ngữ có nhiều thành phần hoặc bổ ngữ gây nhiễu.',
    examples: [
      { en: 'The teacher, along with all her students, is visiting the museum.', vi: 'Cô giáo, cùng với tất cả học sinh của mình, đang thăm viện bảo tàng (chia theo "The teacher" số ít).' },
      { en: 'The number of students taking the exam has increased significantly.', vi: 'Số lượng sinh viên tham gia kỳ thi đã tăng đáng kể ("The number of" chia số ít).' },
      { en: 'A number of questions were difficult.', vi: 'Một số câu hỏi rất khó ("A number of" chia số nhiều).' }
    ],
    examTrapsVi: [
      'Danh từ có "s" nhưng là số ít: news, physics, mathematics, measles -> chia động từ số ÍT.',
      'Khoảng cách, thời gian, số tiền: Five dollars IS not enough. Ten kilometers IS a long way.'
    ],
    practiceQuestions: [
      {
        id: 'pq-sva-1',
        question: 'Neither the manager nor the assistants ________ present at the emergency meeting.',
        options: ['was', 'were', 'is', 'has been'],
        correctIndex: 1,
        explanationVi: 'Cấu trúc "Neither S1 nor S2": Động từ chia theo chủ ngữ S2 đứng gần nó nhất. "the assistants" là danh từ số nhiều ở quá khứ -> were.'
      }
    ]
  },
  {
    id: 'gp-tag-questions',
    titleVi: 'Quy Tắc Vàng Câu Hỏi Đuôi (Tag Questions)',
    titleEn: 'Tag Questions Rules & Exceptions',
    categoryId: 'cat-tags',
    level: 'A2',
    importance: 'high',
    summaryFormula: 'Mệnh đề khẳng định (+), Đuôi phủ định (-) ? | Mệnh đề phủ định (-), Đuôi khẳng định (+) ?',
    explanationVi: 'Câu hỏi ngắn ở cuối câu để xác nhận lại thông tin hoặc tìm kiếm sự đồng thuận từ người nghe.',
    examples: [
      { en: 'You are a student, aren\'t you?', vi: 'Bạn là học sinh có phải không?' },
      { en: 'She doesn\'t like coffee, does she?', vi: 'Cô ấy không thích cà phê đúng không?' },
      { en: 'Let\'s practice English together, shall we?', vi: 'Chúng ta cùng luyện tiếng Anh nhé?' }
    ],
    examTrapsVi: [
      'I am... -> đuôi là aren\'t I? (KHÔNG dùng amn\'t I).',
      'Chủ ngữ: No one, Nobody, Someone, Everyone -> đại từ thay thế ở đuôi luôn là THEY (động từ theo THEY).',
      'Câu có từ mang nghĩa phủ định: seldom, rarely, never, hardly, little -> đuôi phải ở dạng KHẲNG ĐỊNH.'
    ],
    practiceQuestions: [
      {
        id: 'pq-tag-1',
        question: 'Nobody called while I was out at the supermarket, ________?',
        options: ['didn\'t they', 'did they', 'did he', 'didn\'t he'],
        correctIndex: 1,
        explanationVi: 'Mệnh đề chính có "Nobody" mang nghĩa phủ định và đại từ thay thế là "they", động từ "called" ở quá khứ nên đuôi phải là thể khẳng định: did they?'
      }
    ]
  }
];
