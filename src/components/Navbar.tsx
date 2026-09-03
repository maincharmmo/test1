import React from 'react';
import { 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Flame, 
  Download, 
  Sparkles, 
  GraduationCap, 
  Zap,
  Target,
  FileSpreadsheet
} from 'lucide-react';
import { UserProgress } from '../types';

export type ActiveTab = 'dashboard' | 'vocab' | 'wordfamily' | 'grammar' | 'exam' | 'hacks';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  progress: UserProgress;
  onOpenDownloadModal: () => void;
  onOpenAITutor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  progress,
  onOpenDownloadModal,
  onOpenAITutor
}) => {
  const learnedWordsCount = Object.keys(progress.learnedWordIds || {}).length;
  const masteredGrammarCount = Object.keys(progress.masteredGrammarIds || {}).length;
  const examsTakenCount = progress.examHistory?.length || 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & App Title */}
          <div 
            onClick={() => setActiveTab('dashboard')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                  English <span className="text-indigo-600">A1-B1</span>
                </span>
                <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Cấp Tốc Đầu Vào
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                4000 Từ Vựng • Họ Từ Word Family • 260 Ngữ Pháp
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hidden lg:flex items-center gap-4 bg-slate-50/80 px-3 py-1.5 rounded-xl border border-slate-200/80 text-xs">
            <div className="flex items-center gap-1.5 text-slate-600" title="Số từ vựng đã học">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Đã học:</span>
              <span className="font-bold text-slate-900">{learnedWordsCount}</span>
              <span className="text-slate-400">/ 4000</span>
            </div>

            <div className="w-px h-4 bg-slate-300" />

            <div className="flex items-center gap-1.5 text-slate-600" title="Số điểm ngữ pháp nắm vững">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Ngữ pháp:</span>
              <span className="font-bold text-slate-900">{masteredGrammarCount}</span>
              <span className="text-slate-400">/ 260</span>
            </div>

            <div className="w-px h-4 bg-slate-300" />

            <div className="flex items-center gap-1.5 text-amber-700" title="Chuỗi ngày học liên tục">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Chuỗi:</span>
              <span className="font-bold text-amber-800">{progress.streakDays || 1} ngày</span>
            </div>

            <div className="w-px h-4 bg-slate-300" />

            <div className="flex items-center gap-1.5 text-sky-700" title="Số đề đã thi thử">
              <Target className="w-4 h-4 text-sky-600" />
              <span>Đã thi:</span>
              <span className="font-bold text-sky-900">{examsTakenCount} đề</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenDownloadModal}
              id="btn-download-center"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              title="Lưu và Tải về tiến trình học tập"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">Lưu & Tải Về</span>
            </button>

            <button
              onClick={onOpenAITutor}
              id="btn-ai-tutor"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 rounded-lg shadow-sm shadow-indigo-200 transition-all hover:scale-[1.02]"
              title="Mở Gia Sư AI Giải Đáp Ngữ Pháp"
            >
              <Sparkles className="w-4 h-4" />
              <span>Gia Sư AI</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex space-x-1 sm:space-x-2 py-2 overflow-x-auto no-scrollbar border-t border-slate-100">
          <button
            onClick={() => setActiveTab('dashboard')}
            id="tab-dashboard"
            className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'dashboard'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Target className="w-4 h-4" />
            Lộ Trình Cấp Tốc
          </button>

          <button
            onClick={() => setActiveTab('vocab')}
            id="tab-vocab"
            className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'vocab'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            4000 Từ Vựng & Flashcard
          </button>

          <button
            onClick={() => setActiveTab('wordfamily')}
            id="tab-wordfamily"
            className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'wordfamily'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            Họ Từ (Word Family)
          </button>

          <button
            onClick={() => setActiveTab('grammar')}
            id="tab-grammar"
            className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'grammar'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            260 Điểm Ngữ Pháp
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            id="tab-exam"
            className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'exam'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Thi Thử Đầu Vào
          </button>

          <button
            onClick={() => setActiveTab('hacks')}
            id="tab-hacks"
            className={`flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'hacks'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-700 bg-amber-50/60 hover:bg-amber-100'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-500" />
            Cứu Mất Gốc (Bí Kíp 5 Giây)
          </button>
        </nav>
      </div>
    </header>
  );
};
