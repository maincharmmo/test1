import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  Volume2, 
  Lightbulb, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  Sparkles,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { WORD_FAMILIES } from '../data/wordFamilies';
import { speakEnglish } from '../services/speechService';
import { WordFamily } from '../types';

interface WordFamilyExplorerProps {
  initialRoot?: string;
  onOpenAITutor: () => void;
}

export const WordFamilyExplorer: React.FC<WordFamilyExplorerProps> = ({
  initialRoot,
  onOpenAITutor
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFamilyId, setSelectedFamilyId] = useState<string>(() => {
    if (initialRoot) {
      const found = WORD_FAMILIES.find(f => f.root.toLowerCase() === initialRoot.toLowerCase());
      if (found) return found.id;
    }
    return WORD_FAMILIES[0].id;
  });

  // Practice Drill state
  const [drillAnswers, setDrillAnswers] = useState<Record<string, string>>({});
  const [drillChecked, setDrillChecked] = useState<Record<string, boolean>>({});

  const filteredFamilies = WORD_FAMILIES.filter(f => 
    f.root.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.coreMeaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.theme.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentFamily: WordFamily = WORD_FAMILIES.find(f => f.id === selectedFamilyId) || WORD_FAMILIES[0];

  // Group family members by Part of Speech
  const nouns = currentFamily.members.filter(m => m.pos === 'noun');
  const verbs = currentFamily.members.filter(m => m.pos === 'verb');
  const adjectives = currentFamily.members.filter(m => m.pos === 'adjective');
  const adverbs = currentFamily.members.filter(m => m.pos === 'adverb');

  // Practice questions for the active family
  const practiceItems = [
    {
      id: `${currentFamily.id}-q1`,
      sentence: `Her speech made a deep ________ on the entrance examination board.`,
      targetPos: 'noun',
      rootWord: currentFamily.root,
      suggestedOptions: currentFamily.members.map(m => m.word),
      correctWord: nouns[0]?.word || currentFamily.members[0].word,
      hintVi: 'Trước có "a deep" (tính từ), vị trí này cần một DANH TỪ.'
    }
  ];

  const handleCheckDrill = (itemId: string, correctWord: string) => {
    setDrillChecked(prev => ({ ...prev, [itemId]: true }));
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5" />
            Vũ Khí Điểm 10 Dạng Bài Word Form
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Kho Họ Từ Tiếng Anh (Word Family Master)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Một gốc từ phát triển thành Danh từ, Động từ, Tính từ, Trạng từ. Học 1 từ mở rộng thành 4-6 từ!
          </p>
        </div>

        <button
          onClick={onOpenAITutor}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          Hỏi Gia Sư Về Họ Từ Này
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar: List of Word Families */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm gốc từ, nghĩa..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1 max-h-[560px] overflow-y-auto pr-1">
            {filteredFamilies.map((fam) => {
              const isSelected = fam.id === currentFamily.id;
              return (
                <button
                  key={fam.id}
                  onClick={() => {
                    setSelectedFamilyId(fam.id);
                    setDrillChecked({});
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm">{fam.root}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                        isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {fam.level}
                      </span>
                    </div>
                    <p className={`text-xs truncate max-w-[200px] mt-0.5 ${
                      isSelected ? 'text-indigo-100' : 'text-slate-400'
                    }`}>
                      {fam.coreMeaning}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Main Area: Interactive Family Tree & Drill */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Active Family Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
            
            {/* Top Root Profile */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-indigo-700 tracking-tight">
                    {currentFamily.root}
                  </h3>
                  <button
                    onClick={() => speakEnglish(currentFamily.root)}
                    className="w-8 h-8 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 flex items-center justify-center transition-transform hover:scale-110"
                    title="Nghe phát âm gốc từ"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Cấp độ {currentFamily.level}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-700 mt-1">
                  Nghĩa cốt lõi: <span className="text-slate-900 font-bold">{currentFamily.coreMeaning}</span>
                </p>
              </div>

              <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                Chủ đề: {currentFamily.theme}
              </span>
            </div>

            {/* Exam Tip Callout */}
            {currentFamily.tips && (
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong className="font-bold text-amber-950">Mẹo Thi Đầu Vào: </strong>
                  {currentFamily.tips}
                </div>
              </div>
            )}

            {/* 4 Pillars of Word Family (Noun, Verb, Adj, Adv) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Nouns */}
              <div className="bg-blue-50/40 rounded-xl p-4 border border-blue-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                    Danh Từ (Noun)
                  </span>
                  <span className="text-[11px] text-blue-600 font-semibold">{nouns.length} từ</span>
                </div>

                {nouns.length > 0 ? (
                  <div className="space-y-3 pt-1">
                    {nouns.map((m, idx) => (
                      <div key={idx} className="border-b border-blue-100 last:border-0 pb-2 last:pb-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 text-sm">{m.word}</span>
                            <span className="text-xs font-mono text-slate-400">{m.phonetic}</span>
                          </div>
                          <button 
                            onClick={() => speakEnglish(m.word)}
                            className="text-blue-600 hover:text-blue-800 p-0.5"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 font-medium">{m.meaningVi}</p>
                        <p className="text-[11px] text-slate-500 italic mt-1 bg-white/60 p-1.5 rounded">
                          "{m.example}"
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">Không có biến thể phổ biến</p>
                )}
              </div>

              {/* Verbs */}
              <div className="bg-emerald-50/40 rounded-xl p-4 border border-emerald-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    Động Từ (Verb)
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold">{verbs.length} từ</span>
                </div>

                {verbs.length > 0 ? (
                  <div className="space-y-3 pt-1">
                    {verbs.map((m, idx) => (
                      <div key={idx} className="border-b border-emerald-100 last:border-0 pb-2 last:pb-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 text-sm">{m.word}</span>
                            <span className="text-xs font-mono text-slate-400">{m.phonetic}</span>
                          </div>
                          <button 
                            onClick={() => speakEnglish(m.word)}
                            className="text-emerald-600 hover:text-emerald-800 p-0.5"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 font-medium">{m.meaningVi}</p>
                        <p className="text-[11px] text-slate-500 italic mt-1 bg-white/60 p-1.5 rounded">
                          "{m.example}"
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">Không có biến thể phổ biến</p>
                )}
              </div>

              {/* Adjectives */}
              <div className="bg-amber-50/40 rounded-xl p-4 border border-amber-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    Tính Từ (Adjective)
                  </span>
                  <span className="text-[11px] text-amber-600 font-semibold">{adjectives.length} từ</span>
                </div>

                {adjectives.length > 0 ? (
                  <div className="space-y-3 pt-1">
                    {adjectives.map((m, idx) => (
                      <div key={idx} className="border-b border-amber-100 last:border-0 pb-2 last:pb-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 text-sm">{m.word}</span>
                            <span className="text-xs font-mono text-slate-400">{m.phonetic}</span>
                          </div>
                          <button 
                            onClick={() => speakEnglish(m.word)}
                            className="text-amber-600 hover:text-amber-800 p-0.5"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 font-medium">{m.meaningVi}</p>
                        <p className="text-[11px] text-slate-500 italic mt-1 bg-white/60 p-1.5 rounded">
                          "{m.example}"
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">Không có biến thể phổ biến</p>
                )}
              </div>

              {/* Adverbs */}
              <div className="bg-purple-50/40 rounded-xl p-4 border border-purple-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
                    Trạng Từ (Adverb)
                  </span>
                  <span className="text-[11px] text-purple-600 font-semibold">{adverbs.length} từ</span>
                </div>

                {adverbs.length > 0 ? (
                  <div className="space-y-3 pt-1">
                    {adverbs.map((m, idx) => (
                      <div key={idx} className="border-b border-purple-100 last:border-0 pb-2 last:pb-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 text-sm">{m.word}</span>
                            <span className="text-xs font-mono text-slate-400">{m.phonetic}</span>
                          </div>
                          <button 
                            onClick={() => speakEnglish(m.word)}
                            className="text-purple-600 hover:text-purple-800 p-0.5"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 font-medium">{m.meaningVi}</p>
                        <p className="text-[11px] text-slate-500 italic mt-1 bg-white/60 p-1.5 rounded">
                          "{m.example}"
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">Không có biến thể phổ biến</p>
                )}
              </div>

            </div>
          </div>

          {/* Word Form Drill Exercise for Active Family */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <h4 className="font-bold text-sm text-white">Thực Hành Điền Họ Từ (Word Form Drill)</h4>
              </div>
              <span className="text-xs text-indigo-300 font-mono">Gốc: {currentFamily.root}</span>
            </div>

            <p className="text-xs text-slate-300">
              Điền dạng đúng của từ <span className="font-bold text-amber-300">"{currentFamily.root}"</span> vào chỗ trống sau:
            </p>

            <div className="bg-white/10 rounded-xl p-4 border border-white/15 space-y-3">
              <p className="text-sm font-medium text-slate-100 leading-relaxed">
                "We need a <span className="underline font-bold text-sky-300">[ {currentFamily.root} ]</span> plan to prepare for the entrance examination."
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-slate-300">Chọn phương án:</span>
                {currentFamily.members.map((m) => (
                  <button
                    key={m.word}
                    onClick={() => {
                      const isCorrect = m.pos === 'adjective';
                      setDrillAnswers({ [currentFamily.id]: m.word });
                      setDrillChecked({ [currentFamily.id]: true });
                    }}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      drillAnswers[currentFamily.id] === m.word
                        ? (m.pos === 'adjective' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white')
                        : 'bg-white/20 hover:bg-white/30 text-white'
                    }`}
                  >
                    {m.word} ({m.pos})
                  </button>
                ))}
              </div>

              {drillChecked[currentFamily.id] && (
                <div className="p-3 rounded-lg bg-white/10 text-xs border border-white/20 text-slate-200 mt-2 animate-in fade-in">
                  <strong className="text-amber-300">Giải thích chi tiết: </strong>
                  Trước danh từ "plan" (kế hoạch) cần một TÍNH TỪ (Adjective) để bổ nghĩa. Do đó đáp án chuẩn là tính từ thuộc họ từ này!
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
