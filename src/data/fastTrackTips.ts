import { FastTrackTip } from '../types';

export interface IrregularVerb {
  v1: string;
  v2: string;
  v3: string;
  meaningVi: string;
  categoryGroup: string;
}

export const IRREGULAR_VERBS: IrregularVerb[] = [
  // Nhóm 1: 3 cột giống hệt nhau (Dễ nhớ nhất)
  { v1: 'bet', v2: 'bet', v3: 'bet', meaningVi: 'đánh cược', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'cost', v2: 'cost', v3: 'cost', meaningVi: 'có giá là, trị giá', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'cut', v2: 'cut', v3: 'cut', meaningVi: 'cắt, đốn', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'fit', v2: 'fit', v3: 'fit', meaningVi: 'vừa vặn, làm cho hợp', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'hit', v2: 'hit', v3: 'hit', meaningVi: 'đánh, va chạm', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'hurt', v2: 'hurt', v3: 'hurt', meaningVi: 'làm đau, tổn thương', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'let', v2: 'let', v3: 'let', meaningVi: 'cho phép, để cho', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'put', v2: 'put', v3: 'put', meaningVi: 'đặt, để', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'read', v2: 'read', v3: 'read', meaningVi: 'đọc (v2/v3 đọc là /red/)', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'set', v2: 'set', v3: 'set', meaningVi: 'thiết lập, cài đặt', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'shut', v2: 'shut', v3: 'shut', meaningVi: 'đóng lại, khép lại', categoryGroup: '3 Cột Giống Nhau' },
  { v1: 'spread', v2: 'spread', v3: 'spread', meaningVi: 'lan truyền, trải rộng', categoryGroup: '3 Cột Giống Nhau' },

  // Nhóm 2: V2 và V3 giống nhau (-t hoặc -d)
  { v1: 'build', v2: 'built', v3: 'built', meaningVi: 'xây dựng', categoryGroup: 'V2 = V3' },
  { v1: 'burn', v2: 'burnt', v3: 'burnt', meaningVi: 'đốt cháy', categoryGroup: 'V2 = V3' },
  { v1: 'buy', v2: 'bought', v3: 'bought', meaningVi: 'mua', categoryGroup: 'V2 = V3' },
  { v1: 'catch', v2: 'caught', v3: 'caught', meaningVi: 'bắt, chộp, đón xe', categoryGroup: 'V2 = V3' },
  { v1: 'feel', v2: 'felt', v3: 'felt', meaningVi: 'cảm thấy', categoryGroup: 'V2 = V3' },
  { v1: 'find', v2: 'found', v3: 'found', meaningVi: 'tìm thấy, phát hiện', categoryGroup: 'V2 = V3' },
  { v1: 'get', v2: 'got', v3: 'got / gotten', meaningVi: 'có được, nhận được', categoryGroup: 'V2 = V3' },
  { v1: 'have', v2: 'had', v3: 'had', meaningVi: 'có, sở hữu', categoryGroup: 'V2 = V3' },
  { v1: 'hear', v2: 'heard', v3: 'heard', meaningVi: 'nghe thấy', categoryGroup: 'V2 = V3' },
  { v1: 'hold', v2: 'held', v3: 'held', meaningVi: 'cầm, nắm, tổ chức', categoryGroup: 'V2 = V3' },
  { v1: 'keep', v2: 'kept', v3: 'kept', meaningVi: 'giữ, duy trì', categoryGroup: 'V2 = V3' },
  { v1: 'lead', v2: 'led', v3: 'led', meaningVi: 'dẫn đầu, dẫn dắt', categoryGroup: 'V2 = V3' },
  { v1: 'leave', v2: 'left', v3: 'left', meaningVi: 'rời khỏi, bỏ lại', categoryGroup: 'V2 = V3' },
  { v1: 'lend', v2: 'lent', v3: 'lent', meaningVi: 'cho mượn, cho vay', categoryGroup: 'V2 = V3' },
  { v1: 'lose', v2: 'lost', v3: 'lost', meaningVi: 'đánh mất, thua', categoryGroup: 'V2 = V3' },
  { v1: 'make', v2: 'made', v3: 'made', meaningVi: 'làm, chế tạo', categoryGroup: 'V2 = V3' },
  { v1: 'meet', v2: 'met', v3: 'met', meaningVi: 'gặp gỡ', categoryGroup: 'V2 = V3' },
  { v1: 'pay', v2: 'paid', v3: 'paid', meaningVi: 'trả tiền, thanh toán', categoryGroup: 'V2 = V3' },
  { v1: 'say', v2: 'said', v3: 'said', meaningVi: 'nói, bảo', categoryGroup: 'V2 = V3' },
  { v1: 'sell', v2: 'sold', v3: 'sold', meaningVi: 'bán', categoryGroup: 'V2 = V3' },
  { v1: 'send', v2: 'sent', v3: 'sent', meaningVi: 'gửi đi', categoryGroup: 'V2 = V3' },
  { v1: 'spend', v2: 'spent', v3: 'spent', meaningVi: 'tiêu xài, dành thời gian', categoryGroup: 'V2 = V3' },
  { v1: 'teach', v2: 'taught', v3: 'taught', meaningVi: 'dạy học', categoryGroup: 'V2 = V3' },
  { v1: 'tell', v2: 'told', v3: 'told', meaningVi: 'kể, bảo', categoryGroup: 'V2 = V3' },
  { v1: 'think', v2: 'thought', v3: 'thought', meaningVi: 'suy nghĩ', categoryGroup: 'V2 = V3' },
  { v1: 'understand', v2: 'understood', v3: 'understood', meaningVi: 'hiểu', categoryGroup: 'V2 = V3' },
  { v1: 'win', v2: 'won', v3: 'won', meaningVi: 'chiến thắng', categoryGroup: 'V2 = V3' },

  // Nhóm 3: Biến âm i -> a -> u
  { v1: 'begin', v2: 'began', v3: 'begun', meaningVi: 'bắt đầu', categoryGroup: 'Biến âm i - a - u' },
  { v1: 'drink', v2: 'drank', v3: 'drunk', meaningVi: 'uống', categoryGroup: 'Biến âm i - a - u' },
  { v1: 'ring', v2: 'rang', v3: 'rung', meaningVi: 'rung chuông', categoryGroup: 'Biến âm i - a - u' },
  { v1: 'sing', v2: 'sang', v3: 'sung', meaningVi: 'hát', categoryGroup: 'Biến âm i - a - u' },
  { v1: 'sink', v2: 'sank', v3: 'sunk', meaningVi: 'chìm', categoryGroup: 'Biến âm i - a - u' },
  { v1: 'swim', v2: 'swam', v3: 'swum', meaningVi: 'bơi lội', categoryGroup: 'Biến âm i - a - u' },

  // Nhóm 4: V3 tận cùng là -en hoặc -n
  { v1: 'be (am/is/are)', v2: 'was / were', v3: 'been', meaningVi: 'thì, là, ở', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'bite', v2: 'bit', v3: 'bitten', meaningVi: 'cắn', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'break', v2: 'broke', v3: 'broken', meaningVi: 'làm gãy, vỡ, bẻ', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'choose', v2: 'chose', v3: 'chosen', meaningVi: 'chọn lựa', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'drive', v2: 'drove', v3: 'driven', meaningVi: 'lái xe', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'eat', v2: 'ate', v3: 'eaten', meaningVi: 'ăn', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'fall', v2: 'fell', v3: 'fallen', meaningVi: 'ngã, rơi', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'fly', v2: 'flew', v3: 'flown', meaningVi: 'bay', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'forget', v2: 'forgot', v3: 'forgotten', meaningVi: 'quên', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'give', v2: 'gave', v3: 'given', meaningVi: 'cho, tặng', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'grow', v2: 'grew', v3: 'grown', meaningVi: 'lớn lên, trồng', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'hide', v2: 'hid', v3: 'hidden', meaningVi: 'trốn, giấu', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'know', v2: 'knew', v3: 'known', meaningVi: 'biết', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'ride', v2: 'rode', v3: 'ridden', meaningVi: 'cưỡi, lái xe đạp', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'rise', v2: 'rose', v3: 'risen', meaningVi: 'tăng lên, mọc', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'see', v2: 'saw', v3: 'seen', meaningVi: 'nhìn thấy', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'speak', v2: 'spoke', v3: 'spoken', meaningVi: 'nói', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'steal', v2: 'stole', v3: 'stolen', meaningVi: 'trộm cắp', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'take', v2: 'took', v3: 'taken', meaningVi: 'cầm, lấy, đưa', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'throw', v2: 'threw', v3: 'thrown', meaningVi: 'ném, quăng', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'wake', v2: 'woke', v3: 'woken', meaningVi: 'thức giấc', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'wear', v2: 'wore', v3: 'worn', meaningVi: 'mặc, đeo', categoryGroup: 'V3 tận cùng -en' },
  { v1: 'write', v2: 'wrote', v3: 'written', meaningVi: 'viết', categoryGroup: 'V3 tận cùng -en' }
];

export const FAST_TRACK_HACKS: FastTrackTip[] = [
  {
    id: 'hack-1',
    category: 'hack',
    title: 'Mẹo 5 Giây Đoán Vị Trí Từ Loại (Word Form Hack)',
    subtitle: 'Áp dụng cho 100% câu hỏi từ loại trong đề thi',
    contentVi: 'Nhìn trước và sau chỗ trống để xác định loại từ:',
    keyRule: '1. A/An/The/My/His + [Tính từ] + DANH TỪ\n2. Động từ thường + TRẠNG TỪ (-ly)\n3. To be / Linking verb (look, feel, become) + TÍNH TỪ\n4. Giới từ (in, on, at, of, with) + DANH TỪ / V-ING',
    exampleEn: 'She gave a very [impress] speech. -> Trước có "a very" và sau có danh từ "speech" -> Cần TÍNH TỪ -> impressive.',
    exampleVi: 'Cô ấy đã có một bài phát biểu rất ấn tượng.'
  },
  {
    id: 'hack-2',
    category: 'hack',
    title: 'Mẹo Phát Âm Đuôi "-ed" Cực Dễ Nhớ Bằng Tiếng Việt',
    subtitle: 'Đảm bảo làm đúng 1-2 câu ngữ âm trong đề thi đầu vào',
    contentVi: 'Chia thành 3 nhóm phát âm cực nhanh:',
    keyRule: '• Nhóm 1 (/ɪd/): Tận cùng bằng chữ "T" hoặc "Đ" (Mẹo nhớ: "Tiền Đô") -> wanted, decided.\n• Nhóm 2 (/t/): Tận cùng bằng: P, K, F, S, SH, CH, X, GH, CE (Mẹo nhớ: "Chính Phủ Phát Sách Không Thèm Share") -> stopped, looked, washed, watched.\n• Nhóm 3 (/d/): Các âm còn lại -> played, cleaned, loved.',
    exampleEn: 'looked (/t/), washed (/t/), stopped (/t/), wanted (/ɪd/ -> Khác biệt).',
    exampleVi: 'Chọn từ có phần gạch chân phát âm khác biệt trong đề thi.'
  },
  {
    id: 'hack-3',
    category: 'hack',
    title: 'Mẹo Phát Âm Đuôi "-s / -es"',
    subtitle: 'Ăn chắc điểm bài thi trắc nghiệm ngữ âm',
    contentVi: 'Quy tắc 3 nhóm phát âm đuôi -s/es:',
    keyRule: '• Nhóm 1 (/s/): Tận cùng bằng P, K, T, F, TH (Mẹo: "Thời Phong Kiến Phương Tây") -> stops, books, cats, laughs.\n• Nhóm 2 (/ɪz/): Tận cùng bằng S, SS, CH, SH, X, Z, GE, CE (Mẹo: "Sông Xanh Chèo Xuồng Giờ Chót") -> watches, boxes, misses, changes.\n• Nhóm 3 (/z/): Các âm còn lại -> plays, bags, loves.',
    exampleEn: 'books (/s/), lamps (/s/), cats (/s/), tables (/z/ -> Khác biệt).',
    exampleVi: 'Phương án đúng là tables vì có đuôi phát âm là /z/.'
  },
  {
    id: 'hack-4',
    category: 'hack',
    title: 'Mẹo Giải Quyết Câu Bị Động Trong 3 Giây',
    subtitle: 'Nhận diện ngay khi nào phải chọn thể bị động',
    contentVi: 'Dấu hiệu nhận biết câu bị động:',
    keyRule: '1. Chủ ngữ là ĐỒ VẬT / SỰ VIỆC không tự làm được hành động (e.g. The house, The bridge, Letters).\n2. Ngay sau chỗ trống có giới từ "by" (chỉ người làm) hoặc giới từ chỉ nơi chốn mà KHÔNG có tân ngữ.\n=> Công thức luôn là: BE + V3/ED (Bắt buộc phải có cả trợ động từ BE và V3/ed).',
    exampleEn: 'This bridge [built / was built] in 1980 -> Cây cầu không tự xây được -> Chọn "was built".',
    exampleVi: 'Cây cầu này được xây dựng vào năm 1980.'
  },
  {
    id: 'hack-5',
    category: 'trap',
    title: 'Bẫy Thì Tương Lai Trong Mệnh Đề Thời Gian (Time Clauses Trap)',
    subtitle: 'Bẫy khiến 80% thí sinh mất điểm',
    contentVi: 'Trong mệnh đề chỉ thời gian bắt đầu bằng: When, As soon as, Until, Before, After, While:',
    keyRule: 'TUYỆT ĐỐI KHÔNG DÙNG "WILL" HOẶC "WOULD"!\nPhải lùi về THÌ HIỆN TẠI ĐƠN hoặc HIỆN TẠI HOÀN THÀNH.\nCông thức: As soon as + S + V(hiện tại), S + will + V.',
    exampleEn: 'Sai: When I will arrive, I will call you. -> Đúng: When I ARRIVE, I will call you.',
    exampleVi: 'Khi tôi đến nơi, tôi sẽ gọi cho bạn.'
  },
  {
    id: 'hack-6',
    category: 'trap',
    title: 'Bẫy Danh Từ Không Đếm Được Luôn Chia Động Từ Số Ít',
    subtitle: 'Các từ thường làm bẫy trong bài tìm lỗi sai',
    contentVi: 'Các danh từ sau KHÔNG BAO GIỜ thêm "s/es" và ĐỘNG TỪ LUÔN CHIA SỐ ÍT:',
    keyRule: '• Advice (lời khuyên)\n• Information (thông tin)\n• News (tin tức - dù có chữ s)\n• Furniture (đồ đạc)\n• Knowledge (kiến thức)\n• Homework (bài tập về nhà)\n-> Không bao giờ có: "an advice" hay "informations"!',
    exampleEn: 'The information you provided [is / are] very useful -> Chọn IS.',
    exampleVi: 'Thông tin bạn cung cấp rất hữu ích.'
  },
  {
    id: 'hack-7',
    category: 'suffix',
    title: 'Bảng Nhận Diện Hậu Tố Danh Từ (Noun Suffixes)',
    subtitle: 'Bí kíp chọn nhanh đáp án Danh từ',
    contentVi: 'Gặp các đuôi sau thì 99% là Danh từ:',
    keyRule: '• Chỉ người: -er (teacher), -or (actor), -ant (assistant), -ee (employee), -ist (scientist).\n• Chỉ sự việc/trừu tượng: -tion (action), -sion (decision), -ment (development), -ness (happiness), -ity (ability), -ance/-ence (importance, difference), -ship (friendship), -dom (freedom).',
    exampleEn: 'important (adj) -> importance (n); develop (v) -> development (n).',
    exampleVi: 'Chuyển đổi từ loại nhanh chóng.'
  },
  {
    id: 'hack-8',
    category: 'suffix',
    title: 'Bảng Nhận Diện Hậu Tố Tính Từ (Adjective Suffixes)',
    subtitle: 'Bí kíp chọn nhanh đáp án Tính từ',
    contentVi: 'Gặp các đuôi sau thì 99% là Tính từ:',
    keyRule: '• -ful (đầy, có): helpful, careful, beautiful, hopeful.\n• -less (không, thiếu): careless, hopeless, helpless.\n• -able / -ible (có thể): comfortable, readable, visible.\n• -ive (có tính chất): active, creative, attractive.\n• -ous (nhiều): dangerous, famous, continuous.\n• -ic / -al (thuộc về): historic, economic, musical, cultural.\n• -ed / -ing: bored/boring, interested/interesting.',
    exampleEn: 'harm (n) -> harmful (có hại) vs harmless (vô hại).',
    exampleVi: 'Nhận diện nhanh ý nghĩa và từ loại.'
  }
];

export const FAST_TRACK_TIPS = FAST_TRACK_HACKS;

