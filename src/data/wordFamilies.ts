import { WordFamily } from '../types';

export const WORD_FAMILIES: WordFamily[] = [
  {
    id: 'wf-act',
    root: 'act',
    level: 'A1',
    theme: 'Actions & Performance',
    coreMeaning: 'Hành động, diễn xuất, hoạt động',
    tips: 'Trong đề thi, sau giới từ (in, for) thường dùng Noun (action / activity). Sau to be / linking verb dùng Adj (active).',
    members: [
      { word: 'act', pos: 'verb', phonetic: '/ækt/', meaningVi: 'hành động, diễn xuất', example: 'We must act quickly before it is too late.', exampleVi: 'Chúng ta phải hành động nhanh chóng trước khi quá muộn.' },
      { word: 'action', pos: 'noun', phonetic: '/ˈækʃn/', meaningVi: 'hành động, việc làm', example: 'Actions speak louder than words.', exampleVi: 'Hành động có giá trị hơn lời nói.' },
      { word: 'activity', pos: 'noun', phonetic: '/ækˈtɪvəti/', meaningVi: 'hoạt động', example: 'Outdoor activities are good for health.', exampleVi: 'Các hoạt động ngoài trời tốt cho sức khỏe.' },
      { word: 'active', pos: 'adjective', phonetic: '/ˈæktɪv/', meaningVi: 'năng động, tích cực', example: 'She is very active in social work.', exampleVi: 'Cô ấy rất tích cực trong công tác xã hội.' },
      { word: 'actively', pos: 'adverb', phonetic: '/ˈæktɪvli/', meaningVi: 'một cách tích cực', example: 'Students should actively participate in discussions.', exampleVi: 'Học sinh nên tích cực tham gia thảo luận.' },
      { word: 'actor / actress', pos: 'noun', phonetic: '/ˈæktər/', meaningVi: 'diễn viên nam / nữ', example: 'He is a famous Hollywood actor.', exampleVi: 'Anh ấy là một diễn viên Hollywood nổi tiếng.' },
      { word: 'inactive', pos: 'adjective', phonetic: '/ɪnˈæktɪv/', meaningVi: 'thụ động, không hoạt động', example: 'An inactive lifestyle can cause disease.', exampleVi: 'Lối sống thụ động có thể gây bệnh tật.' }
    ]
  },
  {
    id: 'wf-beauty',
    root: 'beauty',
    level: 'A1',
    theme: 'Appearance & Aesthetics',
    coreMeaning: 'Vẻ đẹp, làm đẹp',
    tips: 'Trước Danh từ dùng Tính từ: beautiful picture. Bổ nghĩa Động từ dùng Trạng từ: sing beautifully.',
    members: [
      { word: 'beauty', pos: 'noun', phonetic: '/ˈbjuːti/', meaningVi: 'vẻ đẹp, người đẹp', example: 'She is admired for her inner beauty.', exampleVi: 'Cô ấy được ngưỡng mộ vì vẻ đẹp tâm hồn.' },
      { word: 'beautify', pos: 'verb', phonetic: '/ˈbjuːtɪfaɪ/', meaningVi: 'làm đẹp, tô điểm', example: 'Trees are planted to beautify the city.', exampleVi: 'Cây cối được trồng để làm đẹp thành phố.' },
      { word: 'beautiful', pos: 'adjective', phonetic: '/ˈbjuːtɪfl/', meaningVi: 'xinh đẹp, tuyệt đẹp', example: 'What a beautiful sunset!', exampleVi: 'Thật là một cảnh hoàng hôn tuyệt đẹp!' },
      { word: 'beautifully', pos: 'adverb', phonetic: '/ˈbjuːtɪfli/', meaningVi: 'một cách đẹp đẽ, xuất sắc', example: 'She plays the piano beautifully.', exampleVi: 'Cô ấy chơi piano rất hay.' }
    ]
  },
  {
    id: 'wf-care',
    root: 'care',
    level: 'A1',
    theme: 'Attention & Emotion',
    coreMeaning: 'Chăm sóc, cẩn thận',
    tips: 'Bẫy thi cực phổ biến: Phân biệt careful (cẩn thận) vs careless (bất cẩn, cẩu thả).',
    members: [
      { word: 'care', pos: 'verb', phonetic: '/keər/', meaningVi: 'chăm sóc, quan tâm', example: 'He cares deeply about his family.', exampleVi: 'Anh ấy rất quan tâm đến gia đình mình.' },
      { word: 'care', pos: 'noun', phonetic: '/keər/', meaningVi: 'sự chăm sóc, cẩn trọng', example: 'Handle this glass vase with care.', exampleVi: 'Hãy cầm chiếc bình thủy tinh này cẩn thận.' },
      { word: 'careful', pos: 'adjective', phonetic: '/ˈkeərfl/', meaningVi: 'cẩn thận, kỹ lưỡng', example: 'Be careful when crossing the road.', exampleVi: 'Hãy cẩn thận khi qua đường.' },
      { word: 'carefully', pos: 'adverb', phonetic: '/ˈkeərfəli/', meaningVi: 'một cách cẩn thận', example: 'Listen carefully to the teacher.', exampleVi: 'Hãy lắng nghe giáo viên một cách cẩn thận.' },
      { word: 'careless', pos: 'adjective', phonetic: '/ˈkeərləs/', meaningVi: 'bất cẩn, cẩu thả', example: 'It was a careless mistake.', exampleVi: 'Đó là một lỗi sai do cẩu thả.' },
      { word: 'carelessly', pos: 'adverb', phonetic: '/ˈkeərləsli/', meaningVi: 'một cách cẩu thả', example: 'He drove carelessly and caused an accident.', exampleVi: 'Anh ta lái xe ẩu và gây ra tai nạn.' }
    ]
  },
  {
    id: 'wf-decide',
    root: 'decide',
    level: 'A2',
    theme: 'Thinking & Choices',
    coreMeaning: 'Quyết định',
    tips: 'Cấu trúc: make a decision = decide. Dùng decisive (kiên quyết, mang tính quyết định).',
    members: [
      { word: 'decide', pos: 'verb', phonetic: '/dɪˈsaɪd/', meaningVi: 'quyết định', example: 'I cannot decide what to wear.', exampleVi: 'Tôi không thể quyết định nên mặc gì.' },
      { word: 'decision', pos: 'noun', phonetic: '/dɪˈsɪʒn/', meaningVi: 'sự quyết định', example: 'We reached an important decision.', exampleVi: 'Chúng tôi đã đưa ra một quyết định quan trọng.' },
      { word: 'decisive', pos: 'adjective', phonetic: '/dɪˈsaɪsɪv/', meaningVi: 'kiên quyết, dứt khoát', example: 'A leader needs to be decisive.', exampleVi: 'Người lãnh đạo cần phải dứt khoát.' },
      { word: 'decisively', pos: 'adverb', phonetic: '/dɪˈsaɪsɪvli/', meaningVi: 'một cách dứt khoát', example: 'She spoke decisively to stop the argument.', exampleVi: 'Cô ấy nói một cách dứt khoát để chấm dứt cuộc tranh cãi.' },
      { word: 'indecisive', pos: 'adjective', phonetic: '/ˌɪndɪˈsaɪsɪv/', meaningVi: 'do dự, lưỡng lự', example: 'Don\'t be so indecisive!', exampleVi: 'Đừng lưỡng lự như thế nữa!' }
    ]
  },
  {
    id: 'wf-differ',
    root: 'differ',
    level: 'A2',
    theme: 'Comparison',
    coreMeaning: 'Khác biệt',
    tips: 'Giới từ đi kèm: different FROM. Cấu trúc: make a difference (tạo ra sự khác biệt).',
    members: [
      { word: 'differ', pos: 'verb', phonetic: '/ˈdɪfər/', meaningVi: 'khác nhau, bất đồng', example: 'The twins differ in personality.', exampleVi: 'Cặp song sinh khác nhau về tính cách.' },
      { word: 'difference', pos: 'noun', phonetic: '/ˈdɪfrəns/', meaningVi: 'sự khác biệt', example: 'Can you tell the difference between them?', exampleVi: 'Bạn có thể nhận ra sự khác biệt giữa chúng không?' },
      { word: 'different', pos: 'adjective', phonetic: '/ˈdɪfrənt/', meaningVi: 'khác nhau', example: 'My answer is different from yours.', exampleVi: 'Câu trả lời của tôi khác với của bạn.' },
      { word: 'differently', pos: 'adverb', phonetic: '/ˈdɪfrəntli/', meaningVi: 'một cách khác biệt', example: 'Everyone thinks differently.', exampleVi: 'Mỗi người đều suy nghĩ khác nhau.' }
    ]
  },
  {
    id: 'wf-educate',
    root: 'educate',
    level: 'A2',
    theme: 'School & Learning',
    coreMeaning: 'Giáo dục, đào tạo',
    tips: 'Trọng âm: educate (âm 1), education (âm 3). Sau tính từ sở hữu (their, our) dùng danh từ (education).',
    members: [
      { word: 'educate', pos: 'verb', phonetic: '/ˈedʒukeɪt/', meaningVi: 'giáo dục, dạy dỗ', example: 'Parents should educate children about saving water.', exampleVi: 'Bố mẹ nên giáo dục con trẻ về việc tiết kiệm nước.' },
      { word: 'education', pos: 'noun', phonetic: '/ˌedʒuˈkeɪʃn/', meaningVi: 'nền giáo dục, việc học', example: 'Higher education opens many doors.', exampleVi: 'Giáo dục bậc cao mở ra nhiều cánh cửa.' },
      { word: 'educational', pos: 'adjective', phonetic: '/ˌedʒuˈkeɪʃənl/', meaningVi: 'có tính giáo dục', example: 'This is an educational television program.', exampleVi: 'Đây là một chương trình truyền hình mang tính giáo dục.' },
      { word: 'educated', pos: 'adjective', phonetic: '/ˈedʒukeɪtɪd/', meaningVi: 'có học thức', example: 'She is a highly educated woman.', exampleVi: 'Cô ấy là một người phụ nữ có học thức cao.' },
      { word: 'educator', pos: 'noun', phonetic: '/ˈedʒukeɪtər/', meaningVi: 'nhà giáo dục', example: 'He is respected as a passionate educator.', exampleVi: 'Ông ấy được kính trọng như một nhà giáo dục đầy nhiệt huyết.' }
    ]
  },
  {
    id: 'wf-employ',
    root: 'employ',
    level: 'B1',
    theme: 'Work & Career',
    coreMeaning: 'Thuê, tuyển dụng, việc làm',
    tips: 'Bẫy thi từ loại: employer (ông chủ/nhà tuyển dụng - đuôi er) vs employee (nhân viên - đuôi ee). Unemployment (thất nghiệp).',
    members: [
      { word: 'employ', pos: 'verb', phonetic: '/ɪmˈplɔɪ/', meaningVi: 'thuê, tuyển dụng', example: 'The company employs over 500 workers.', exampleVi: 'Công ty tuyển dụng hơn 500 công nhân.' },
      { word: 'employment', pos: 'noun', phonetic: '/ɪmˈplɔɪmənt/', meaningVi: 'việc làm, sự tuyển dụng', example: 'Full-time employment provides stable income.', exampleVi: 'Công việc toàn thời gian mang lại thu nhập ổn định.' },
      { word: 'unemployment', pos: 'noun', phonetic: '/ˌʌnɪmˈplɔɪmənt/', meaningVi: 'nạn thất nghiệp', example: 'The government aims to reduce unemployment.', exampleVi: 'Chính phủ đặt mục tiêu giảm tỷ lệ thất nghiệp.' },
      { word: 'employer', pos: 'noun', phonetic: '/ɪmˈplɔɪər/', meaningVi: 'người tuyển dụng, người sử dụng lao động', example: 'Good employers respect their staff.', exampleVi: 'Những người chủ tốt luôn tôn trọng nhân viên của mình.' },
      { word: 'employee', pos: 'noun', phonetic: '/ɪmˈplɔɪiː/', meaningVi: 'nhân viên, người lao động', example: 'All employees receive health insurance.', exampleVi: 'Tất cả nhân viên đều nhận được bảo hiểm y tế.' },
      { word: 'unemployed', pos: 'adjective', phonetic: '/ˌʌnɪmˈplɔɪd/', meaningVi: 'thất nghiệp', example: 'He has been unemployed for three months.', exampleVi: 'Anh ấy đã bị thất nghiệp được ba tháng.' }
    ]
  },
  {
    id: 'wf-success',
    root: 'succeed',
    level: 'A2',
    theme: 'Goals & Achievement',
    coreMeaning: 'Thành công',
    tips: 'Cực hay thi: succeed IN + V-ing (thành công trong việc gì). Đuôi -ful là tính từ (successful), đuôi -fully là trạng từ (successfully).',
    members: [
      { word: 'succeed', pos: 'verb', phonetic: '/səkˈsiːd/', meaningVi: 'thành công', example: 'If you work hard, you will succeed.', exampleVi: 'Nếu bạn chăm chỉ, bạn sẽ thành công.' },
      { word: 'success', pos: 'noun', phonetic: '/səkˈses/', meaningVi: 'sự thành công', example: 'Failure is the mother of success.', exampleVi: 'Thất bại là mẹ thành công.' },
      { word: 'successful', pos: 'adjective', phonetic: '/səkˈsesfl/', meaningVi: 'thành công, thắng lợi', example: 'He is a successful entrepreneur.', exampleVi: 'Anh ấy là một doanh nhân thành đạt.' },
      { word: 'successfully', pos: 'adverb', phonetic: '/səkˈsesfəli/', meaningVi: 'một cách thành công', example: 'They successfully completed the project.', exampleVi: 'Họ đã hoàn thành dự án một cách thành công.' }
    ]
  },
  {
    id: 'wf-create',
    root: 'create',
    level: 'A2',
    theme: 'Art & Invention',
    coreMeaning: 'Tạo ra, sáng tạo',
    tips: 'Creative (sáng tạo - tính từ), Creativity (sự sáng tạo - danh từ trừu tượng), Creation (tác phẩm/sự tạo thành).',
    members: [
      { word: 'create', pos: 'verb', phonetic: '/kriˈeɪt/', meaningVi: 'tạo ra, sáng chế', example: 'Scientists create new technologies every year.', exampleVi: 'Các nhà khoa học tạo ra công nghệ mới mỗi năm.' },
      { word: 'creation', pos: 'noun', phonetic: '/kriˈeɪʃn/', meaningVi: 'sự tạo nên, tác phẩm', example: 'The chef presented his latest creation.', exampleVi: 'Bếp trưởng giới thiệu tác phẩm mới nhất của mình.' },
      { word: 'creativity', pos: 'noun', phonetic: '/ˌkriːeɪˈtɪvəti/', meaningVi: 'óc sáng tạo, tính sáng tạo', example: 'Children have endless creativity.', exampleVi: 'Trẻ em có óc sáng tạo vô tận.' },
      { word: 'creative', pos: 'adjective', phonetic: '/kriˈeɪtɪv/', meaningVi: 'sáng tạo', example: 'She has many creative ideas.', exampleVi: 'Cô ấy có rất nhiều ý tưởng sáng tạo.' },
      { word: 'creatively', pos: 'adverb', phonetic: '/kriˈeɪtɪvli/', meaningVi: 'một cách sáng tạo', example: 'They solved the problem creatively.', exampleVi: 'Họ đã giải quyết vấn đề một cách sáng tạo.' }
    ]
  },
  {
    id: 'wf-pollute',
    root: 'pollute',
    level: 'A2',
    theme: 'Environment',
    coreMeaning: 'Ô nhiễm',
    tips: 'Chủ đề môi trường hay gặp nhất trong đề thi đầu vào: air/water pollution (noun), polluted river (adj bị động).',
    members: [
      { word: 'pollute', pos: 'verb', phonetic: '/pəˈluːt/', meaningVi: 'làm ô nhiễm', example: 'Factories pollute the air with toxic smoke.', exampleVi: 'Các nhà máy làm ô nhiễm không khí bằng khói độc.' },
      { word: 'pollution', pos: 'noun', phonetic: '/pəˈluːʃn/', meaningVi: 'sự ô nhiễm', example: 'Environmental pollution is a global crisis.', exampleVi: 'Ô nhiễm môi trường là một cuộc khủng hoảng toàn cầu.' },
      { word: 'pollutant', pos: 'noun', phonetic: '/pəˈluːtənt/', meaningVi: 'chất gây ô nhiễm', example: 'Carbon monoxide is a harmful air pollutant.', exampleVi: 'Khí CO là một chất gây ô nhiễm không khí độc hại.' },
      { word: 'polluted', pos: 'adjective', phonetic: '/pəˈluːtɪd/', meaningVi: 'bị ô nhiễm', example: 'Do not swim in that polluted river.', exampleVi: 'Đừng bơi ở dòng sông bị ô nhiễm đó.' },
      { word: 'unpolluted', pos: 'adjective', phonetic: '/ˌʌnpəˈluːtɪd/', meaningVi: 'trong lành, không bị ô nhiễm', example: 'We enjoyed the unpolluted mountain air.', exampleVi: 'Chúng tôi tận hưởng không khí miền núi trong lành.' }
    ]
  },
  {
    id: 'wf-friend',
    root: 'friend',
    level: 'A1',
    theme: 'Relationships',
    coreMeaning: 'Bạn bè, thân thiện',
    tips: 'Bẫy đề thi: Friendly có đuôi -ly nhưng lại là TÍNH TỪ (adj), không phải trạng từ! Để làm trạng từ phải dùng: in a friendly way.',
    members: [
      { word: 'friend', pos: 'noun', phonetic: '/frend/', meaningVi: 'người bạn', example: 'A friend in need is a friend indeed.', exampleVi: 'Bạn trong lúc hoạn nạn mới là bạn thật sự.' },
      { word: 'friendship', pos: 'noun', phonetic: '/ˈfrendʃɪp/', meaningVi: 'tình bạn', example: 'Their friendship lasted for over twenty years.', exampleVi: 'Tình bạn của họ kéo dài hơn hai mươi năm.' },
      { word: 'friendly', pos: 'adjective', phonetic: '/ˈfrendli/', meaningVi: 'thân thiện', example: 'The local people are very friendly.', exampleVi: 'Người dân địa phương rất thân thiện.' },
      { word: 'unfriendly', pos: 'adjective', phonetic: '/ʌnˈfrendli/', meaningVi: 'không thân thiện, khó gần', example: 'The clerk gave an unfriendly look.', exampleVi: 'Người nhân viên ném một cái nhìn không mấy thân thiện.' }
    ]
  },
  {
    id: 'wf-rely',
    root: 'rely',
    level: 'B1',
    theme: 'Trust & Confidence',
    coreMeaning: 'Tin cậy, dựa vào',
    tips: 'Giới từ: rely ON. Tính từ: reliable (đáng tin cậy) vs unreliable (không đáng tin).',
    members: [
      { word: 'rely', pos: 'verb', phonetic: '/rɪˈlaɪ/', meaningVi: 'dựa vào, trông cậy (rely on)', example: 'You can always rely on me.', exampleVi: 'Bạn luôn có thể trông cậy vào tôi.' },
      { word: 'reliance', pos: 'noun', phonetic: '/rɪˈlaɪəns/', meaningVi: 'sự tin cậy, sự phụ thuộc', example: 'Our reliance on fossil fuels must decrease.', exampleVi: 'Sự phụ thuộc của chúng ta vào nhiên liệu hóa thạch phải giảm.' },
      { word: 'reliable', pos: 'adjective', phonetic: '/rɪˈlaɪəbl/', meaningVi: 'đáng tin cậy', example: 'We need reliable information.', exampleVi: 'Chúng ta cần thông tin đáng tin cậy.' },
      { word: 'reliably', pos: 'adverb', phonetic: '/rɪˈlaɪəbli/', meaningVi: 'một cách đáng tin cậy', example: 'The machine operates reliably.', exampleVi: 'Cỗ máy hoạt động rất đáng tin cậy.' },
      { word: 'unreliable', pos: 'adjective', phonetic: '/ˌʌnrɪˈlaɪəbl/', meaningVi: 'không đáng tin cậy', example: 'Public transport here is totally unreliable.', exampleVi: 'Giao thông công cộng ở đây hoàn toàn không đáng tin.' }
    ]
  },
  {
    id: 'wf-know',
    root: 'know',
    level: 'A1',
    theme: 'Mind & Knowledge',
    coreMeaning: 'Biết, kiến thức',
    tips: 'Knowledge là danh từ KHÔNG ĐẾM ĐƯỢC (không có s, không dùng a/an mà dùng some knowledge). Đuôi -able là knowledgeable (am hiểu).',
    members: [
      { word: 'know', pos: 'verb', phonetic: '/nəʊ/', meaningVi: 'biết, hiểu biết', example: 'I know the answer to this question.', exampleVi: 'Tôi biết câu trả lời cho câu hỏi này.' },
      { word: 'knowledge', pos: 'noun', phonetic: '/ˈnɒlɪdʒ/', meaningVi: 'kiến thức, sự hiểu biết', example: 'Knowledge is power.', exampleVi: 'Kiến thức là sức mạnh.' },
      { word: 'knowledgeable', pos: 'adjective', phonetic: '/ˈnɒlɪdʒəbl/', meaningVi: 'thông thái, am hiểu', example: 'Our tour guide was very knowledgeable.', exampleVi: 'Hướng dẫn viên du lịch của chúng tôi rất am hiểu.' },
      { word: 'unknown', pos: 'adjective', phonetic: '/ˌʌnˈnəʊn/', meaningVi: 'vô danh, chưa được biết đến', example: 'The author remains unknown.', exampleVi: 'Tác giả vẫn chưa được biết đến.' }
    ]
  },
  {
    id: 'wf-danger',
    root: 'danger',
    level: 'A2',
    theme: 'Safety & Risk',
    coreMeaning: 'Nguy hiểm',
    tips: 'Cụm từ: in danger (đang gặp nguy hiểm). Tính từ: dangerous (nguy hiểm), endanger (động từ: gây nguy hiểm - endangered species: loài có nguy cơ tuyệt chủng).',
    members: [
      { word: 'danger', pos: 'noun', phonetic: '/ˈdeɪndʒər/', meaningVi: 'sự nguy hiểm, mối nguy', example: 'He was unaware of the danger.', exampleVi: 'Anh ấy không nhận thức được mối nguy hiểm.' },
      { word: 'endanger', pos: 'verb', phonetic: '/ɪnˈdeɪndʒər/', meaningVi: 'gây nguy hiểm', example: 'Pollution endangers sea life.', exampleVi: 'Ô nhiễm đe dọa sinh vật biển.' },
      { word: 'dangerous', pos: 'adjective', phonetic: '/ˈdeɪndʒərəs/', meaningVi: 'nguy hiểm', example: 'It is dangerous to drive in heavy fog.', exampleVi: 'Lái xe trong sương mù dày đặc rất nguy hiểm.' },
      { word: 'dangerously', pos: 'adverb', phonetic: '/ˈdeɪndʒərəsli/', meaningVi: 'một cách nguy hiểm', example: 'He was driving dangerously fast.', exampleVi: 'Anh ta lái xe nhanh một cách nguy hiểm.' }
    ]
  },
  {
    id: 'wf-impress',
    root: 'impress',
    level: 'B1',
    theme: 'Feeling & Evaluation',
    coreMeaning: 'Ấn tượng',
    tips: 'Cấu trúc: make an impression on someone. Phân biệt impressed (bị ấn tượng - người) vs impressive (gây ấn tượng - vật/sự việc).',
    members: [
      { word: 'impress', pos: 'verb', phonetic: '/ɪmˈpres/', meaningVi: 'gây ấn tượng', example: 'His speech impressed the whole audience.', exampleVi: 'Bài phát biểu của anh ấy đã gây ấn tượng với toàn bộ khán giả.' },
      { word: 'impression', pos: 'noun', phonetic: '/ɪmˈpreʃn/', meaningVi: 'sự ấn tượng, cảm giác', example: 'First impressions are very important.', exampleVi: 'Ấn tượng đầu tiên rất quan trọng.' },
      { word: 'impressive', pos: 'adjective', phonetic: '/ɪmˈpresɪv/', meaningVi: 'hùng vĩ, ấn tượng (vật)', example: 'The skyscraper has an impressive design.', exampleVi: 'Tòa nhà chọc trời có một thiết kế rất ấn tượng.' },
      { word: 'impressed', pos: 'adjective', phonetic: '/ɪmˈprest/', meaningVi: 'cảm thấy ấn tượng (người)', example: 'I was impressed by her fluency.', exampleVi: 'Tôi bị ấn tượng bởi sự lưu loát của cô ấy.' }
    ]
  },
  {
    id: 'wf-hope',
    root: 'hope',
    level: 'A1',
    theme: 'Emotions & Future',
    coreMeaning: 'Hy vọng',
    tips: 'Phân biệt hopeful (đầy hy vọng, khả quan) vs hopeless (vô vọng, tuyệt vọng).',
    members: [
      { word: 'hope', pos: 'verb', phonetic: '/həʊp/', meaningVi: 'hy vọng', example: 'I hope to see you soon.', exampleVi: 'Tôi hy vọng sớm gặp lại bạn.' },
      { word: 'hope', pos: 'noun', phonetic: '/həʊp/', meaningVi: 'niềm hy vọng', example: 'Never lose hope.', exampleVi: 'Đừng bao giờ đánh mất hy vọng.' },
      { word: 'hopeful', pos: 'adjective', phonetic: '/ˈhəʊpfl/', meaningVi: 'tràn trề hy vọng, khả quan', example: 'Doctors are hopeful about his recovery.', exampleVi: 'Các bác sĩ lạc quan về sự bình phục của anh ấy.' },
      { word: 'hopefully', pos: 'adverb', phonetic: '/ˈhəʊpfəli/', meaningVi: 'đầy hy vọng, may mắn thay', example: 'Hopefully the weather will clear up tomorrow.', exampleVi: 'Hy vọng ngày mai thời tiết sẽ quang đãng.' },
      { word: 'hopeless', pos: 'adjective', phonetic: '/ˈhəʊpləs/', meaningVi: 'vô vọng, tuyệt vọng', example: 'The situation seemed hopeless.', exampleVi: 'Tình hình có vẻ như vô vọng.' }
    ]
  }
];
