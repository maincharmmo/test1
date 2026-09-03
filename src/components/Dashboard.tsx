import React from 'react';
import { 
  Target, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Zap, 
  ArrowRight, 
  Clock, 
  Award, 
  Flame,
  FileDown,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { UserProgress, ExamResult } from '../types';
import { ActiveTab } from './Navbar';
import { exportExamReportHtml } from '../services/storageService';

interface DashboardProps {
  progress: UserProgress;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDownloadModal: () => void;
  onStartExam: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  progress,
  setActiveTab,
  onOpenDownloadModal,
  onStartExam
}) => {
  const learnedWordsCount = Object.keys(progress.learnedWordIds || {}).length;
  const masteredGrammarCount = Object.keys(progress.masteredGrammarIds || {}).length;
  const recentExams = progress.examHistory || [];
  const latestExam: ExamResult | undefined = recentExams[recentExams.length - 1];

  const vocabProgressPercent = Math.min(100, Math.round((learnedWordsCount / 4000) * 100));
  const grammarProgressPercent = Math.min(100, Math.round((masteredGrammarCount / 260) * 100));

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner: Fast-track Welcome & Status */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-48 h-48 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Lộ Trình Cấp Tốc Dành Cho Người Mất Gốc Tiếng Anh
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Mục Tiêu Đạt Chuẩn Đầu Vào <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">A1 — B1</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trang bị toàn diện 4000 từ vựng cốt lõi, mạng lưới họ từ Word Family và 260 điểm ngữ pháp trọng điểm xuất hiện trong các đề thi xếp lớp & chuẩn đầu vào.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onStartExam}
              id="btn-quick-exam-hero"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
            >
              <Award className="w-4 h-4 text-amber-300" />
              Thi Thử Đánh Giá Ngay
            </button>
            <button
              onClick={onOpenDownloadModal}
              id="btn-save-progress-hero"
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-slate-100 border border-white/20 transition-all"
            >
              <FileDown className="w-4 h-4 text-sky-300" />
              Tải & Lưu Tiến Trình
            </button>
          </div>
        </div>
      </div>

      {/* 3 Core Progress Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Metric 1: Vocabulary */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              Từ Vựng Cốt Lõi
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-black text-slate-900">{learnedWordsCount}</span>
            <span className="text-xs text-slate-500">/ 4000 từ vựng A1-B1</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden my-2">
            <div 
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.max(vocabProgressPercent, 3)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Tiến độ: {vocabProgressPercent}%</span>
            <button 
              onClick={() => setActiveTab('vocab')}
              className="text-indigo-600 font-semibold hover:underline flex items-center gap-1"
            >
              Học tiếp <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Metric 2: Grammar */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
              260 Điểm Ngữ Pháp
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-black text-slate-900">{masteredGrammarCount}</span>
            <span className="text-xs text-slate-500">/ 260 chủ điểm</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden my-2">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.max(grammarProgressPercent, 3)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Đã nắm vững: {grammarProgressPercent}%</span>
            <button 
              onClick={() => setActiveTab('grammar')}
              className="text-indigo-600 font-semibold hover:underline flex items-center gap-1"
            >
              Xem ngữ pháp <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Metric 3: Latest Diagnostic Exam */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full">
              Kết Quả Gần Nhất
            </span>
          </div>

          {latestExam ? (
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-black text-slate-900">{latestExam.score}/{latestExam.total}</span>
                <span className="text-xs font-bold text-indigo-600">({latestExam.percentage}%)</span>
              </div>
              <p className="text-xs font-semibold text-slate-700 mb-2">
                Trình độ: <span className="text-indigo-700">{latestExam.estimatedLevel}</span>
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{new Date(latestExam.timestamp).toLocaleDateString('vi-VN')}</span>
                <button 
                  onClick={() => exportExamReportHtml(latestExam)}
                  className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                >
                  Tải báo cáo <FileDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs text-slate-500 mb-3">Chưa có bài thi nào. Hãy làm bài test 20 câu để định vị trình độ.</p>
              <button 
                onClick={onStartExam}
                className="w-full py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors"
              >
                Làm bài thi thử đầu tiên
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Fast-Track 3-Phase Roadmap for Lost Roots (Mất gốc) */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Lộ Trình Học Cấp Tốc 3 Giai Đoạn (Từ A1 Đến B1)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Thiết kế khoa học cho học sinh mất gốc: Học từ dễ đến khó, tập trung vào trọng điểm đề thi.
            </p>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
            Chuẩn Đầu Vào
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phase 1: A1 Mất Gốc */}
          <div className="rounded-xl p-5 border-2 border-emerald-200 bg-emerald-50/40 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                  Giai đoạn 1 • 14 Ngày
                </span>
                <span className="text-xs font-bold text-emerald-700">Cấp độ A1</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">Phá Băng Mất Gốc (Nền Móng)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nắm vững 1000 từ căn bản đời sống & trường học. 50 điểm ngữ pháp: Các thì Hiện tại đơn, Quá khứ đơn, Đại từ nhân xưng, Danh từ số ít/nhiều.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Quy tắc phát âm đuôi -ed và -s/es</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Thuộc 50 động từ bất quy tắc nhóm 1 & 2</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setActiveTab('vocab')}
              className="mt-4 w-full py-2 px-3 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center justify-center gap-1.5"
            >
              Học Từ Vựng A1 <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Phase 2: A2 Nền Tảng */}
          <div className="rounded-xl p-5 border-2 border-indigo-200 bg-indigo-50/40 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-2.5 py-1 rounded-md">
                  Giai đoạn 2 • 21 Ngày
                </span>
                <span className="text-xs font-bold text-indigo-700">Cấp độ A2</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">Bồi Đắp & Tăng Tốc Trọng Điểm</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thêm 1400 từ vựng theo chủ đề xã hội & công việc. 110 điểm ngữ pháp: Câu bị động cơ bản, Câu điều kiện loại 1-2, So sánh hơn/nhất, Họ từ Word Family.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Dạng bài Word Form: Đoán từ loại 5 giây</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Thì Hiện tại hoàn thành (Since / For)</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setActiveTab('wordfamily')}
              className="mt-4 w-full py-2 px-3 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center justify-center gap-1.5"
            >
              Luyện Họ Từ Word Family <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Phase 3: B1 Về Đích */}
          <div className="rounded-xl p-5 border-2 border-sky-200 bg-sky-50/40 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-sky-800 bg-sky-100 px-2.5 py-1 rounded-md">
                  Giai đoạn 3 • 30 Ngày
                </span>
                <span className="text-xs font-bold text-sky-700">Cấp độ B1</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">Bứt Phá Đạt Chuẩn Đầu Vào</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nâng cấp 1600 từ nâng cao & collocations. 100 điểm ngữ pháp phân loại: Mệnh đề quan hệ rút gọn, Câu gián tiếp, Sự hòa hợp S-V, Bẫy tìm lỗi sai.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Chiến thuật giải đề thi trắc nghiệm 10 giây</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Thi thử định kỳ & tải bảng điểm phân tích</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onStartExam}
              className="mt-4 w-full py-2 px-3 rounded-lg text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white transition-colors flex items-center justify-center gap-1.5"
            >
              Vào Phòng Thi Thử <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* 4 Feature Shortcut Quick Launchers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => setActiveTab('vocab')}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-slate-900 mb-1">Thẻ Flashcard Từ Vựng</h4>
          <p className="text-xs text-slate-500">Lật thẻ 3D ghi nhớ từ, có phát âm giọng chuẩn và ví dụ câu song ngữ.</p>
        </div>

        <div 
          onClick={() => setActiveTab('wordfamily')}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-slate-900 mb-1">Họ Từ Word Family</h4>
          <p className="text-xs text-slate-500">Bí kíp ăn trọn điểm phần Word Form (biến đổi từ Noun, Verb, Adj, Adv).</p>
        </div>

        <div 
          onClick={() => setActiveTab('hacks')}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-slate-900 mb-1">Bí Kíp Cứu Mất Gốc</h4>
          <p className="text-xs text-slate-500">120+ động từ bất quy tắc, câu vè mẹo làm bài, bẫy thi thường gặp.</p>
        </div>

        <div 
          onClick={onOpenDownloadModal}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <FileDown className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-slate-900 mb-1">Trung Tâm Lưu & Tải Xuất</h4>
          <p className="text-xs text-slate-500">Tải file tiến trình JSON về máy, xuất từ vựng ra CSV/Excel học offline.</p>
        </div>
      </div>

      {/* Recent Exam History Log */}
      {recentExams.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <h3 className="font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-500" />
            Lịch Sử Các Lần Làm Bài Thi Thử
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-700 uppercase font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Đề Thi</th>
                  <th className="py-3 px-4">Thời Gian</th>
                  <th className="py-3 px-4">Điểm Số</th>
                  <th className="py-3 px-4">Tỷ Lệ</th>
                  <th className="py-3 px-4">Đánh Giá Chuẩn</th>
                  <th className="py-3 px-4 text-right">Tải Báo Cáo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentExams.slice(-5).reverse().map((exam) => (
                  <tr key={exam.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-semibold text-slate-900">{exam.examTitle}</td>
                    <td className="py-3 px-4">{new Date(exam.timestamp).toLocaleString('vi-VN')}</td>
                    <td className="py-3 px-4 font-bold text-indigo-700">{exam.score} / {exam.total}</td>
                    <td className="py-3 px-4 font-bold">{exam.percentage}%</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700">
                        {exam.estimatedLevel}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => exportExamReportHtml(exam)}
                        className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                        title="Tải về máy tính báo cáo kết quả bài thi"
                      >
                        <FileDown className="w-3.5 h-3.5" /> HTML/PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
