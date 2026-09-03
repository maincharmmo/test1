import { ExamQuestion } from '../types';

export const MOCK_EXAM_QUESTIONS: ExamQuestion[] = [
  // 1. Word Form (Họ từ / Từ loại)
  {
    id: 'eq-1',
    type: 'word_form',
    section: 'Word Form (Từ Loại)',
    question: 'Environmental ________ is one of the most serious problems facing our planet today.',
    options: ['pollute', 'pollution', 'polluted', 'pollutant'],
    correctIndex: 1,
    explanationVi: 'Sau tính từ "Environmental" cần một DANH TỪ (Noun) chỉ sự ô nhiễm -> "pollution". (Pollutant là chất gây ô nhiễm, số ít không phù hợp ngữ cảnh).',
    level: 'A2',
    familyRootRef: 'pollute'
  },
  {
    id: 'eq-2',
    type: 'word_form',
    section: 'Word Form (Từ Loại)',
    question: 'She always drives very ________ because the weather condition is terrible.',
    options: ['careful', 'carefully', 'careless', 'caring'],
    correctIndex: 1,
    explanationVi: 'Bổ nghĩa cho động từ thường "drives" cần một TRẠNG TỪ (Adverb). Vì thời tiết xấu nên cô ấy lái xe một cách "cẩn thận" -> carefully.',
    level: 'A1',
    familyRootRef: 'care'
  },
  {
    id: 'eq-3',
    type: 'word_form',
    section: 'Word Form (Từ Loại)',
    question: 'The new manager made a very ________ decision to cut unnecessary operational costs.',
    options: ['decide', 'decision', 'decisive', 'decisively'],
    correctIndex: 2,
    explanationVi: 'Trước danh từ "decision" cần một TÍNH TỪ bổ nghĩa -> "decisive" (mang tính dứt khoát, quyết định).',
    level: 'B1',
    familyRootRef: 'decide'
  },
  {
    id: 'eq-4',
    type: 'word_form',
    section: 'Word Form (Từ Loại)',
    question: 'Without proper ________, young students will struggle to adapt to modern technology.',
    options: ['educate', 'education', 'educational', 'educator'],
    correctIndex: 1,
    explanationVi: 'Sau giới từ "Without" và tính từ "proper" cần một DANH TỪ -> "education" (sự giáo dục).',
    level: 'A2',
    familyRootRef: 'educate'
  },
  {
    id: 'eq-5',
    type: 'word_form',
    section: 'Word Form (Từ Loại)',
    question: 'After months of preparation, they ________ launched their new educational app.',
    options: ['succeed', 'success', 'successful', 'successfully'],
    correctIndex: 3,
    explanationVi: 'Đứng trước động từ chính "launched" để bổ nghĩa cho cả hành động phóng ứng dụng cần một TRẠNG TỪ -> "successfully".',
    level: 'A2',
    familyRootRef: 'succeed'
  },

  // 2. Verb Tenses (Các thì)
  {
    id: 'eq-6',
    type: 'grammar',
    section: 'Tenses (Các Thì)',
    question: 'While Lan was reading books in the library, the fire alarm suddenly ________.',
    options: ['rings', 'was ringing', 'rang', 'has rung'],
    correctIndex: 2,
    explanationVi: 'Hành động Lan đang đọc sách là hành động dài trong quá khứ (was reading), chuông báo cháy reo là hành động ngắn chen ngang -> chia Quá khứ đơn (rang).',
    level: 'A2'
  },
  {
    id: 'eq-7',
    type: 'grammar',
    section: 'Tenses (Các Thì)',
    question: 'Mr. David ________ English at this university for more than 10 years now.',
    options: ['teaches', 'is teaching', 'has taught', 'taught'],
    correctIndex: 2,
    explanationVi: 'Có "for more than 10 years now" chỉ hành động bắt đầu từ quá khứ và vẫn đang tiếp diễn ở hiện tại -> chia Hiện tại hoàn thành: has taught.',
    level: 'A2'
  },
  {
    id: 'eq-8',
    type: 'grammar',
    section: 'Tenses (Các Thì)',
    question: 'By the time the rescue team arrived at the scene, the flood water ________ significantly.',
    options: ['receded', 'was receding', 'had receded', 'has receded'],
    correctIndex: 2,
    explanationVi: 'Cấu trúc "By the time + S + V(quá khứ đơn), S + had + V3/ed" (Quá khứ hoàn thành chỉ hành động xảy ra trước một mốc trong quá khứ).',
    level: 'B1'
  },
  {
    id: 'eq-9',
    type: 'grammar',
    section: 'Tenses (Các Thì)',
    question: 'Don\'t call me at 8 PM tonight because I ________ my online English entrance test then.',
    options: ['take', 'will take', 'will be taking', 'have taken'],
    correctIndex: 2,
    explanationVi: 'Hành động sẽ đang diễn ra tại một thời điểm xác định cụ thể trong tương lai ("at 8 PM tonight") -> chia Tương lai tiếp diễn (will be taking).',
    level: 'B1'
  },

  // 3. Passive Voice (Bị động)
  {
    id: 'eq-10',
    type: 'grammar',
    section: 'Passive Voice (Câu Bị Động)',
    question: 'Many trees ________ in the community park by local volunteers last weekend.',
    options: ['planted', 'were planted', 'are planted', 'were planting'],
    correctIndex: 1,
    explanationVi: 'Chủ ngữ "Many trees" là vật chịu tác động, có "by volunteers" và "last weekend" (quá khứ) -> Bị động Quá khứ đơn: were planted.',
    level: 'A2'
  },
  {
    id: 'eq-11',
    type: 'grammar',
    section: 'Passive Voice (Câu Bị Động)',
    question: 'This important document needs to ________ to the admission office before 5 PM.',
    options: ['send', 'be sent', 'being sent', 'sent'],
    correctIndex: 1,
    explanationVi: 'Cấu trúc bị động với động từ nguyên mẫu: need to + BE + V3/ed -> to be sent.',
    level: 'A2'
  },

  // 4. Conditionals & Inversion (Câu điều kiện)
  {
    id: 'eq-12',
    type: 'grammar',
    section: 'Conditionals (Câu Điều Kiện)',
    question: 'If I ________ you, I would spend at least one hour every day reviewing basic grammar.',
    options: ['am', 'was', 'were', 'had been'],
    correctIndex: 2,
    explanationVi: 'Vế chính dùng "would spend" (Điều kiện loại 2 giả định lời khuyên trái với hiện tại: If I were you). Trong văn phong chuẩn, to be luôn là WERE.',
    level: 'A2'
  },
  {
    id: 'eq-13',
    type: 'grammar',
    section: 'Conditionals (Câu Điều Kiện)',
    question: 'You will not be allowed to enter the exam room ________ you present a valid student ID card.',
    options: ['if', 'unless', 'provided that', 'as long as'],
    correctIndex: 1,
    explanationVi: 'Unless = If not (Trừ khi / Nếu không). Nghĩa: Bạn sẽ không được vào phòng thi TRỪ KHI bạn xuất trình thẻ sinh viên hợp lệ.',
    level: 'A2'
  },

  // 5. Relative Clauses (Mệnh đề quan hệ)
  {
    id: 'eq-14',
    type: 'grammar',
    section: 'Relative Clauses (MĐ Quan Hệ)',
    question: 'The professor ________ lecture inspired thousands of young students has just retired.',
    options: ['who', 'whom', 'whose', 'which'],
    correctIndex: 2,
    explanationVi: 'Sau chỗ trống là danh từ "lecture" (bài giảng CỦA giáo sư đó), chỉ sự sở hữu -> dùng đại từ WHOSE.',
    level: 'B1'
  },
  {
    id: 'eq-15',
    type: 'grammar',
    section: 'Relative Clauses (MĐ Quan Hệ)',
    question: 'The laptop ________ I bought last week has excellent battery life.',
    options: ['who', 'which', 'whom', 'whose'],
    correctIndex: 1,
    explanationVi: 'Bổ nghĩa cho danh từ chỉ đồ vật "The laptop", dùng WHICH (hoặc THAT).',
    level: 'A2'
  },

  // 6. Gerunds & Infinitives
  {
    id: 'eq-16',
    type: 'grammar',
    section: 'Gerund & Infinitive (V-ing / To V)',
    question: 'The exam proctor asked everyone to avoid ________ with each other during the test.',
    options: ['to communicate', 'communicating', 'communicate', 'communicated'],
    correctIndex: 1,
    explanationVi: 'Sau động từ AVOID luôn luôn là V-ING -> communicating.',
    level: 'B1'
  },
  {
    id: 'eq-17',
    type: 'grammar',
    section: 'Gerund & Infinitive (V-ing / To V)',
    question: 'Don\'t forget ________ the classroom door before going home.',
    options: ['lock', 'to lock', 'locking', 'locked'],
    correctIndex: 1,
    explanationVi: 'Forget / Remember + TO V: Nhớ/quên một bổn phận, nhiệm vụ phải làm trong tương lai -> to lock.',
    level: 'A2'
  },

  // 7. Error Identification (Tìm lỗi sai - Dạng bài trọng tâm thi đầu vào)
  {
    id: 'eq-18',
    type: 'error_identification',
    section: 'Error Identification (Tìm Lỗi Sai)',
    question: 'Find the underlined part that needs correction: "The information [A: that] you gave me yesterday [B: were] extremely [C: useful] for my [D: preparation]."',
    options: ['A: that', 'B: were', 'C: useful', 'D: preparation'],
    correctIndex: 1,
    explanationVi: 'Lỗi sai ở [B: were]. Danh từ "information" là danh từ KHÔNG ĐẾM ĐƯỢC, động từ to be phải chia số ít: WAS thay vì were.',
    level: 'A2'
  },
  {
    id: 'eq-19',
    type: 'error_identification',
    section: 'Error Identification (Tìm Lỗi Sai)',
    question: 'Find the underlined part that needs correction: "Although [A: he studied] very [B: hardly], he [C: failed to pass] the English [D: entrance exam]."',
    options: ['A: he studied', 'B: hardly', 'C: failed to pass', 'D: entrance exam'],
    correctIndex: 1,
    explanationVi: 'Lỗi sai ở [B: hardly]. "Hardly" có nghĩa là "hầu như không" (phủ định). Học tập chăm chỉ phải dùng trạng từ "HARD": studied very HARD.',
    level: 'B1'
  },

  // 8. Pronunciation & Stress (Phát âm & Trọng âm)
  {
    id: 'eq-20',
    type: 'pronunciation',
    section: 'Pronunciation (-ed)',
    question: 'Choose the word whose underlined part is pronounced differently: A. decided, B. wanted, C. invited, D. stopped',
    options: ['decided', 'wanted', 'invited', 'stopped'],
    correctIndex: 3,
    explanationVi: 'Áp dụng mẹo: decided, wanted, invited đều tận cùng bằng /t/ hoặc /d/ nên phát âm là /ɪd/. Còn stopped tận cùng bằng /p/ nên phát âm là /t/ -> D là đáp án khác biệt.',
    level: 'A1'
  }
];
