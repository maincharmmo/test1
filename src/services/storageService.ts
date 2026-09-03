import { UserProgress, ExamResult, VocabWord } from '../types';

const STORAGE_KEY = 'english_a1_b1_progress_v1';

export const INITIAL_PROGRESS: UserProgress = {
  version: 1,
  lastUpdated: Date.now(),
  streakDays: 1,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  learnedWordIds: { 'v-1': true, 'v-2': true },
  starredWordIds: {},
  masteredGrammarIds: { 'gp-pres-simple': true },
  starredGrammarIds: {},
  examHistory: [],
  dailyWordGoal: 15,
  todayStudiedCount: 2,
  notes: {}
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw) as UserProgress;

    // Check streak
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = parsed.lastActiveDate || today;

    const diffDays = Math.round((new Date(today).getTime() - new Date(lastDate).getTime()) / (1000 * 3600 * 24));
    if (diffDays === 1) {
      parsed.streakDays = (parsed.streakDays || 1) + 1;
      parsed.todayStudiedCount = 0;
    } else if (diffDays > 1) {
      parsed.streakDays = 1;
      parsed.todayStudiedCount = 0;
    }

    parsed.lastActiveDate = today;
    return parsed;
  } catch (err) {
    console.error('Failed to load user progress:', err);
    return INITIAL_PROGRESS;
  }
}

export const loadProgress = loadUserProgress;

export function saveUserProgress(progress: UserProgress): void {
  try {
    progress.lastUpdated = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save user progress:', err);
  }
}

export const saveProgress = saveUserProgress;

// Helper: Toggle learned word
export function recordWordLearned(wordId: string): UserProgress {
  const current = loadUserProgress();
  if (current.learnedWordIds[wordId]) {
    delete current.learnedWordIds[wordId];
  } else {
    current.learnedWordIds[wordId] = true;
    current.todayStudiedCount = (current.todayStudiedCount || 0) + 1;
  }
  saveUserProgress(current);
  return current;
}

// Helper: Toggle starred word
export function toggleWordStarred(wordId: string): UserProgress {
  const current = loadUserProgress();
  if (current.starredWordIds[wordId]) {
    delete current.starredWordIds[wordId];
  } else {
    current.starredWordIds[wordId] = true;
  }
  saveUserProgress(current);
  return current;
}

// Helper: Toggle mastered grammar
export function toggleGrammarMastered(grammarId: string): UserProgress {
  const current = loadUserProgress();
  if (current.masteredGrammarIds[grammarId]) {
    delete current.masteredGrammarIds[grammarId];
  } else {
    current.masteredGrammarIds[grammarId] = true;
  }
  saveUserProgress(current);
  return current;
}

// Helper: Save exam result
export function saveExamResult(result: ExamResult): UserProgress {
  const current = loadUserProgress();
  if (!current.examHistory) current.examHistory = [];
  current.examHistory.push(result);
  saveUserProgress(current);
  return current;
}

// Helper: Reset progress
export function resetProgress(): UserProgress {
  const fresh = { ...INITIAL_PROGRESS, lastUpdated: Date.now() };
  saveUserProgress(fresh);
  return fresh;
}

// Download file helper
function triggerDownload(content: string, fileName: string, contentType: string) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 1. Export Progress JSON (Backup)
export function exportProgressJson(progress: UserProgress): void {
  const data = JSON.stringify(progress, null, 2);
  const dateStr = new Date().toISOString().slice(0, 10);
  triggerDownload(data, `tien-trinh-hoc-tieng-anh-a1-b1-${dateStr}.json`, 'application/json;charset=utf-8;');
}

// 2. Export Vocabulary CSV
export function exportVocabularyCsv(words: VocabWord[]): void {
  const headers = ['Từ vựng', 'Từ loại', 'Phiên âm', 'Trình độ', 'Chủ đề', 'Họ từ', 'Nghĩa tiếng Việt', 'Ví dụ câu', 'Dịch ví dụ'];
  const rows = words.map(w => [
    `"${w.word}"`,
    `"${w.pos}"`,
    `"${w.phonetic}"`,
    `"${w.level}"`,
    `"${w.topic}"`,
    `"${w.familyRoot || ''}"`,
    `"${w.meaningVi.replace(/"/g, '""')}"`,
    `"${w.example.replace(/"/g, '""')}"`,
    `"${w.exampleVi.replace(/"/g, '""')}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const dateStr = new Date().toISOString().slice(0, 10);
  triggerDownload(csvContent, `danh-sach-tu-vung-a1-b1-${dateStr}.csv`, 'text/csv;charset=utf-8;');
}

// 3. Export Printable Exam Result Report (HTML)
export function exportExamReportHtml(result: ExamResult): void {
  const dateStr = new Date(result.timestamp).toLocaleString('vi-VN');
  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Báo Cáo Kết Quả Thi Đầu Vào - ${result.examTitle}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; max-width: 800px; margin: 0 auto; background: #fff; }
    .header { text-align: center; border-bottom: 2px solid #0284c7; padding-bottom: 20px; margin-bottom: 30px; }
    .title { font-size: 26px; font-weight: 800; color: #0f172a; margin: 0 0 8px 0; }
    .subtitle { color: #64748b; font-size: 15px; }
    .score-card { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0; }
    .score { font-size: 48px; font-weight: 800; color: #0284c7; }
    .badge { display: inline-block; padding: 6px 16px; border-radius: 9999px; background: #0284c7; color: #fff; font-weight: 700; margin-top: 10px; font-size: 16px; }
    .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
    .info-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; }
    .info-label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 700; }
    .info-value { font-size: 18px; font-weight: 700; color: #0f172a; margin-top: 4px; }
    .advice { background: #ecfdf5; border-left: 4px solid #10b981; padding: 16px; margin-top: 24px; border-radius: 4px; }
    .footer { text-align: center; font-size: 12px; color: #94a3b8; margin-top: 50px; border-top: 1px solid #e2e8f0; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="title">BÁO CÁO KẾT QUẢ THI ĐẦU VÀO TIẾNG ANH (A1 - B1)</div>
    <div class="subtitle">Hệ Thống Ôn Luyện Cấp Tốc Dành Cho Học Sinh Mất Gốc</div>
  </div>

  <div class="score-card">
    <div style="font-size: 14px; font-weight: 600; color: #0369a1;">ĐIỂM SỐ ĐẠT ĐƯỢC</div>
    <div class="score">${result.score} / ${result.total}</div>
    <div style="font-size: 18px; font-weight: 600; color: #0f172a;">Tỷ lệ chính xác: ${result.percentage}%</div>
    <div><span class="badge">Đánh giá trình độ: ${result.estimatedLevel}</span></div>
  </div>

  <div class="info-grid">
    <div class="info-box">
      <div class="info-label">Đề bài kiểm tra</div>
      <div class="info-value">${result.examTitle}</div>
    </div>
    <div class="info-box">
      <div class="info-label">Thời gian làm bài</div>
      <div class="info-value">${Math.floor(result.timeSpentSeconds / 60)} phút ${result.timeSpentSeconds % 60} giây</div>
    </div>
    <div class="info-box">
      <div class="info-label">Ngày thực hiện</div>
      <div class="info-value">${dateStr}</div>
    </div>
    <div class="info-box">
      <div class="info-label">Số câu sai cần xem lại</div>
      <div class="info-value">${result.wrongQuestionIds.length} câu</div>
    </div>
  </div>

  <div class="advice">
    <strong style="color: #065f46; font-size: 16px;">Lời khuyên từ giảng viên:</strong>
    <p style="margin: 8px 0 0 0; color: #047857;">
      ${result.percentage >= 80 
        ? 'Xuất sắc! Bạn đã nắm vững các chủ điểm ngữ pháp cốt lõi và từ loại (Word Form). Đã sẵn sàng tự tin đạt điểm cao kỳ thi đầu vào.' 
        : result.percentage >= 50 
        ? 'Khá tốt! Bạn đã có nền tảng cơ bản, cần tập trung luyện thêm phần phân biệt từ loại (Họ từ Word Family) và các thì quá khứ/hoàn thành để bứt phá lên B1.' 
        : 'Cần nỗ lực cấp tốc! Hãy mở ngay mục "Cứu Mất Gốc", học kỹ 120 động từ bất quy tắc, mẹo phân biệt đuôi từ loại và làm lại đề thi này.'}
    </p>
  </div>

  <div class="footer">
    Báo cáo được xuất tự động từ ứng dụng Ôn Thi Tiếng Anh A1-B1. Có thể in ra giấy (Ctrl + P) để lưu hồ sơ.
  </div>
</body>
</html>`;

  triggerDownload(html, `ket-qua-thi-${result.examTitle.replace(/\s+/g, '-')}.html`, 'text/html;charset=utf-8;');
}

// 4. Import Progress JSON from File
export function importProgressJson(file: File): Promise<UserProgress> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text) as UserProgress;
        if (!parsed || typeof parsed !== 'object' || !parsed.learnedWordIds) {
          throw new Error('File không đúng định dạng tiến trình học tập.');
        }
        saveUserProgress(parsed);
        resolve(parsed);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Không thể đọc file đã chọn.'));
    reader.readAsText(file);
  });
}
