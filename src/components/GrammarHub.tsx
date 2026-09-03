import React, { useState, useMemo } from 'react';
import { 
  FileSpreadsheet, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Volume2, 
  ChevronRight, 
  Sparkles,
  HelpCircle,
  Clock,
  Repeat,
  GitFork,
  Link as LinkIcon,
  Layers,
  Sliders,
  ShieldAlert,
  CheckSquare,
  MessageSquare,
  PieChart,
  Compass,
  Share2,
  Shuffle
} from 'lucide-react';
import { GRAMMAR_CATEGORIES, GRAMMAR_POINTS } from '../data/grammarData';
import { GrammarPoint, UserProgress } from '../types';
import { speakEnglish } from '../services/speechService';

// Icon mapper for categories
const ICON_MAP: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-4 h-4" />,
  Repeat: <Repeat className="w-4 h-4" />,
  GitFork: <GitFork className="w-4 h-4" />,
  Link: <LinkIcon className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Sliders: <Sliders className="w-4 h-4" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4" />,
  CheckSquare: <CheckSquare className="w-4 h-4" />,
  MessageSquare: <MessageSquare className="w-4 h-4" />,
  PieChart: <PieChart className="w-4 h-4" />,
  Compass: <Compass className="w-4 h-4" />,
  Share2: <Share2 className="w-4 h-4" />,
  HelpCircle: <HelpCircle className="w-4 h-4" />,
  Shuffle: <Shuffle className="w-4 h-4" />
};

interface GrammarHubProps {
  progress: UserProgress;
  onToggleMastered: (grammarId: string) => void;
  onOpenAITutor: () => void;
}

export const GrammarHub: React.FC<GrammarHubProps> = ({
  progress,
  onToggleMastered,
  onOpenAITutor
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('cat-tenses');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [activePointId, setActivePointId] = useState<string>(GRAMMAR_POINTS[0].id);

  // Quick quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [checkedQuiz, setCheckedQuiz] = useState<Record<string, boolean>>({});

  // Filter grammar points
  const filteredPoints = useMemo(() => {
    return GRAMMAR_POINTS.filter(gp => {
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const matchTitleVi = gp.titleVi.toLowerCase().includes(query);
        const matchTitleEn = gp.titleEn.toLowerCase().includes(query);
        const matchFormula = gp.summaryFormula.toLowerCase().includes(query);
        if (!matchTitleVi && !matchTitleEn && !matchFormula) return false;
      } else {
        // Filter by category if no search term
        if (gp.categoryId !== selectedCategory) return false;
      }

      if (selectedLevel !== 'all' && gp.level !== selectedLevel) return false;

      return true;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  const activePoint: GrammarPoint = GRAMMAR_POINTS.find(p => p.id === activePointId) || filteredPoints[0] || GRAMMAR_POINTS[0];
  const isMastered = !!progress.masteredGrammarIds[activePoint?.id];

  const totalMasteredCount = Object.keys(progress.masteredGrammarIds || {}).length;

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            260 Điểm Ngữ Pháp Cốt Lõi (A1 — B1)
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Hệ Thống Ngữ Pháp Cấp Tốc Cho Người Mất Gốc
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Đã nắm vững <span className="font-bold text-indigo-600">{totalMasteredCount} / 260</span> chủ điểm ngữ pháp. Công thức màu sắc, ví dụ song ngữ và cảnh báo bẫy thi.
          </p>
        </div>

        <button
          onClick={onOpenAITutor}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          Hỏi Gia Sư Ngữ Pháp
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: 14 Categories & Search */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Search bar */}
          <div className="relative bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-6 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm điểm ngữ pháp, thì, bị động..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Categories List */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-3 space-y-1 max-h-[600px] overflow-y-auto pr-1">
            <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              14 Chuyên Đề Trọng Điểm
            </div>

            {GRAMMAR_CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedCategory && !searchTerm;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSearchTerm('');
                    const firstOfCat = GRAMMAR_POINTS.find(p => p.categoryId === cat.id);
                    if (firstOfCat) setActivePointId(firstOfCat.id);
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 font-bold'
                      : 'hover:bg-slate-50 text-slate-700 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      {ICON_MAP[cat.iconName] || <FileSpreadsheet className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm leading-tight">{cat.titleVi}</div>
                      <span className={`text-[10px] ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                        {cat.totalPoints} điểm • Cấp {cat.level}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Column: Detailed Grammar Point Content */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* Sub-list of Points for current selection */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filteredPoints.map((pt) => {
              const isActive = pt.id === activePoint?.id;
              const isPtMastered = !!progress.masteredGrammarIds[pt.id];
              return (
                <button
                  key={pt.id}
                  onClick={() => setActivePointId(pt.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {isPtMastered && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
                  <span>{pt.titleVi}</span>
                </button>
              );
            })}
          </div>

          {activePoint ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
              
              {/* Point Title & Mastered Status */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      Cấp {activePoint.level}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      Trọng tâm đề thi
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {activePoint.titleVi}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{activePoint.titleEn}</p>
                </div>

                <button
                  onClick={() => onToggleMastered(activePoint.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isMastered
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-200'
                      : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isMastered ? 'Đã Nắm Vững' : 'Đánh dấu đã hiểu'}</span>
                </button>
              </div>

              {/* Summary Formula Box */}
              <div className="bg-slate-900 text-white rounded-xl p-5 shadow-inner space-y-2">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  Công Thức Vàng Cần Nhớ
                </span>
                <div className="text-sm sm:text-base font-mono font-bold text-amber-300 leading-relaxed overflow-x-auto py-1">
                  {activePoint.summaryFormula}
                </div>
              </div>

              {/* Explanation in Vietnamese */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Bản Chất & Cách Dùng (Dành cho người mất gốc)
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 font-medium">
                  {activePoint.explanationVi}
                </p>
              </div>

              {/* Bilingual Examples with Audio */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Ví Dụ Song Ngữ Chuẩn Thi
                </h4>
                <div className="space-y-2">
                  {activePoint.examples.map((ex, idx) => (
                    <div key={idx} className="bg-indigo-50/40 p-3.5 rounded-xl border border-indigo-100/60 flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-900 text-sm">{ex.en}</p>
                        <p className="text-xs text-slate-600">👉 {ex.vi}</p>
                      </div>
                      <button
                        onClick={() => speakEnglish(ex.en)}
                        className="w-8 h-8 rounded-full bg-white text-indigo-600 hover:text-indigo-800 flex items-center justify-center shrink-0 shadow-xs transition-transform hover:scale-110"
                        title="Nghe phát âm ví dụ"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* ⚠️ Exam Traps Callout */}
              {activePoint.examTrapsVi && activePoint.examTrapsVi.length > 0 && (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    CẢNH BÁO BẪY ĐỀ THI ĐẦU VÀO
                  </div>
                  <ul className="text-xs text-rose-900 space-y-1.5 pl-5 list-disc">
                    {activePoint.examTrapsVi.map((trap, idx) => (
                      <li key={idx} className="leading-relaxed">{trap}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Mini Quick Practice Quiz */}
              {activePoint.practiceQuestions && activePoint.practiceQuestions.length > 0 && (
                <div className="border-t border-slate-100 pt-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-indigo-600" />
                    <h4 className="font-bold text-sm text-slate-900">Bài Tập Củng Cố Tại Chỗ (1 Câu)</h4>
                  </div>

                  {activePoint.practiceQuestions.map((q) => {
                    const chosen = selectedAnswers[q.id];
                    const isChecked = checkedQuiz[q.id];
                    const isCorrect = chosen === q.correctIndex;

                    return (
                      <div key={q.id} className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                          {q.question}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            const isThisChosen = chosen === optIdx;
                            let btnStyle = 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200';

                            if (isChecked) {
                              if (optIdx === q.correctIndex) {
                                btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                              } else if (isThisChosen && !isCorrect) {
                                btnStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
                              }
                            } else if (isThisChosen) {
                              btnStyle = 'bg-indigo-600 text-white border-indigo-600 font-bold';
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => {
                                  setSelectedAnswers(prev => ({ ...prev, [q.id]: optIdx }));
                                  setCheckedQuiz(prev => ({ ...prev, [q.id]: true }));
                                }}
                                className={`text-left px-3.5 py-2.5 rounded-lg text-xs border transition-all ${btnStyle}`}
                              >
                                <span className="font-mono mr-2 font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {isChecked && (
                          <div className={`p-3 rounded-lg text-xs border animate-in fade-in ${
                            isCorrect 
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                              : 'bg-amber-50 border-amber-200 text-amber-900'
                          }`}>
                            <strong className="block mb-1">
                              {isCorrect ? '✅ Chính xác!' : '❌ Chưa chính xác!'}
                            </strong>
                            {q.explanationVi}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
              Chọn một điểm ngữ pháp bên trái để bắt đầu học.
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
