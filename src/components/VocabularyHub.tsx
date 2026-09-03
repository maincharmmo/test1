import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Volume2, 
  Star, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Filter,
  Sparkles
} from 'lucide-react';
import { VocabWord, CefrLevel, UserProgress } from '../types';
import { getAllVocabulary, VOCABULARY_TOPICS } from '../data/vocabularyData';
import { speakEnglish } from '../services/speechService';
import { exportVocabularyCsv } from '../services/storageService';
import { ActiveTab } from './Navbar';

interface VocabularyHubProps {
  progress: UserProgress;
  onToggleLearned: (wordId: string) => void;
  onToggleStarred: (wordId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
  onSelectWordFamily?: (root: string) => void;
}

export const VocabularyHub: React.FC<VocabularyHubProps> = ({
  progress,
  onToggleLearned,
  onToggleStarred,
  setActiveTab,
  onSelectWordFamily
}) => {
  const allWords = useMemo(() => getAllVocabulary(), []);

  const [viewMode, setViewMode] = useState<'flashcard' | 'list'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unlearned' | 'learned' | 'starred'>('all');

  // Flashcard state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filtered list
  const filteredWords = useMemo(() => {
    return allWords.filter(w => {
      // Search
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const matchesWord = w.word.toLowerCase().includes(query);
        const matchesMeaning = w.meaningVi.toLowerCase().includes(query);
        const matchesExample = w.example.toLowerCase().includes(query);
        if (!matchesWord && !matchesMeaning && !matchesExample) return false;
      }

      // Level
      if (selectedLevel !== 'all' && w.level !== selectedLevel) return false;

      // Topic
      if (selectedTopic !== 'All' && w.topic !== selectedTopic) return false;

      // Status
      const isLearned = !!progress.learnedWordIds[w.id];
      const isStarred = !!progress.starredWordIds[w.id];

      if (statusFilter === 'learned' && !isLearned) return false;
      if (statusFilter === 'unlearned' && isLearned) return false;
      if (statusFilter === 'starred' && !isStarred) return false;

      return true;
    });
  }, [allWords, searchTerm, selectedLevel, selectedTopic, statusFilter, progress]);

  // Handle flashcard navigation
  const currentCard = filteredWords[currentCardIndex] || filteredWords[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex(prev => (prev + 1) % Math.max(1, filteredWords.length));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex(prev => (prev - 1 + filteredWords.length) % Math.max(1, filteredWords.length));
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Header & View Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Kho 4000 Từ Vựng Cốt Lõi & Luyện Flashcard
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Hiển thị <span className="font-bold text-indigo-600">{filteredWords.length}</span> từ vựng phù hợp bộ lọc (Đã thuộc: {Object.keys(progress.learnedWordIds || {}).length} từ).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                viewMode === 'list' 
                  ? 'bg-white text-indigo-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Danh Sách
            </button>
            <button
              onClick={() => {
                setViewMode('flashcard');
                setCurrentCardIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                viewMode === 'flashcard' 
                  ? 'bg-indigo-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thẻ Flashcard
            </button>
          </div>

          <button
            onClick={() => exportVocabularyCsv(filteredWords)}
            id="btn-export-vocab-csv"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            title="Tải danh sách từ vựng hiện tại dạng file CSV (mở bằng Excel)"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Xuất CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentCardIndex(0);
              }}
              placeholder="Tra cứu từ vựng tiếng Anh, nghĩa tiếng Việt, ví dụ..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-slate-400 uppercase mr-1">Cấp độ:</span>
            {['all', 'A1', 'A2', 'B1'].map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setSelectedLevel(lvl);
                  setCurrentCardIndex(0);
                }}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedLevel === lvl
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lvl === 'all' ? 'Tất cả' : lvl}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 uppercase mr-1">Trạng thái:</span>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as any);
                setCurrentCardIndex(0);
              }}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-700 focus:outline-none focus:border-indigo-500"
            >
              <option value="all">Tất cả từ</option>
              <option value="unlearned">Chưa thuộc</option>
              <option value="learned">Đã thuộc</option>
              <option value="starred">Đã gắn sao ⭐</option>
            </select>
          </div>
        </div>

        {/* Topic Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          <span className="text-xs font-bold text-slate-400 uppercase whitespace-nowrap">Chủ đề:</span>
          {VOCABULARY_TOPICS.map(topic => (
            <button
              key={topic}
              onClick={() => {
                setSelectedTopic(topic);
                setCurrentCardIndex(0);
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                selectedTopic === topic
                  ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {topic === 'All' ? 'Tất cả chủ đề' : topic}
            </button>
          ))}
        </div>
      </div>

      {/* FLASHCARD MODE */}
      {viewMode === 'flashcard' && (
        <div className="max-w-2xl mx-auto space-y-4">
          {filteredWords.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 font-medium">Không tìm thấy từ vựng nào khớp với bộ lọc.</p>
            </div>
          ) : (
            <>
              {/* Flashcard Card */}
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-indigo-100 shadow-xl shadow-indigo-100/50 cursor-pointer min-h-[360px] flex flex-col justify-between transition-all hover:border-indigo-300 relative group select-none"
              >
                {/* Header indicators */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">
                      {currentCard.level}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                      {currentCard.topic}
                    </span>
                  </div>
                  <span>{currentCardIndex + 1} / {filteredWords.length}</span>
                </div>

                {/* Card Center Content */}
                <div className="text-center py-8">
                  {!isFlipped ? (
                    // Front side
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-3">
                        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                          {currentCard.word}
                        </h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakEnglish(currentCard.word);
                          }}
                          className="w-10 h-10 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 flex items-center justify-center transition-all hover:scale-110"
                          title="Nghe phát âm chuẩn"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                          {currentCard.pos}
                        </span>
                        <span className="text-sm font-mono text-slate-500">
                          {currentCard.phonetic}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 pt-6 flex items-center justify-center gap-1">
                        <RotateCw className="w-3.5 h-3.5" /> Bấm vào thẻ để xem nghĩa và ví dụ
                      </p>
                    </div>
                  ) : (
                    // Back side
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">
                        {currentCard.meaningVi}
                      </div>

                      {currentCard.familyRoot && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
                          <Layers className="w-3.5 h-3.5" />
                          Họ từ gốc: <span className="underline">{currentCard.familyRoot}</span>
                        </div>
                      )}

                      <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-100 text-xs sm:text-sm space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-semibold text-slate-800 italic">
                            "{currentCard.example}"
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speakEnglish(currentCard.example);
                            }}
                            className="text-indigo-600 hover:text-indigo-700 shrink-0"
                            title="Nghe câu ví dụ"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-slate-500">
                          👉 {currentCard.exampleVi}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleStarred(currentCard.id);
                    }}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                      progress.starredWordIds[currentCard.id]
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <Star className={`w-4 h-4 ${progress.starredWordIds[currentCard.id] ? 'fill-amber-400 text-amber-400' : ''}`} />
                    <span>{progress.starredWordIds[currentCard.id] ? 'Đã ghim' : 'Ghim từ khó'}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLearned(currentCard.id);
                    }}
                    className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                      progress.learnedWordIds[currentCard.id]
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{progress.learnedWordIds[currentCard.id] ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}</span>
                  </button>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between px-2">
                <button
                  onClick={handlePrevCard}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-xs transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Từ trước
                </button>

                <span className="text-xs text-slate-400 font-medium">
                  Phím tắt: Bấm vào thẻ để lật
                </span>

                <button
                  onClick={handleNextCard}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-all"
                >
                  Từ tiếp theo <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* TABLE / GRID LIST MODE */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-700 uppercase text-xs font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">Ghim</th>
                  <th className="py-3 px-4">Từ Vựng & Phiên Âm</th>
                  <th className="py-3 px-4">Từ Loại</th>
                  <th className="py-3 px-4">Trình Độ</th>
                  <th className="py-3 px-4">Nghĩa Tiếng Việt</th>
                  <th className="py-3 px-4 hidden md:table-cell">Ví Dụ & Ngữ Cảnh</th>
                  <th className="py-3 px-4 text-center">Trạng Thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredWords.map((item) => {
                  const isLearned = !!progress.learnedWordIds[item.id];
                  const isStarred = !!progress.starredWordIds[item.id];

                  return (
                    <tr 
                      key={item.id}
                      className={`hover:bg-indigo-50/40 transition-colors ${isLearned ? 'bg-emerald-50/20' : ''}`}
                    >
                      {/* Star Button */}
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => onToggleStarred(item.id)}
                          className="text-slate-300 hover:text-amber-400 transition-colors"
                          title="Ghim từ khó"
                        >
                          <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
                        </button>
                      </td>

                      {/* Word & IPA & Audio */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                            {item.word}
                          </span>
                          <button
                            onClick={() => speakEnglish(item.word)}
                            className="text-indigo-600 hover:text-indigo-800 p-1 hover:bg-indigo-50 rounded-full transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xs font-mono text-slate-400 block">
                          {item.phonetic}
                        </span>
                      </td>

                      {/* Part of Speech */}
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide bg-slate-100 text-slate-700">
                          {item.pos}
                        </span>
                      </td>

                      {/* Level */}
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-extrabold ${
                          item.level === 'A1' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : item.level === 'A2'
                            ? 'bg-indigo-100 text-indigo-800'
                            : 'bg-sky-100 text-sky-800'
                        }`}>
                          {item.level}
                        </span>
                      </td>

                      {/* Vietnamese Meaning */}
                      <td className="py-3 px-4 font-semibold text-slate-800">
                        {item.meaningVi}
                        {item.familyRoot && (
                          <span 
                            onClick={() => {
                              if (onSelectWordFamily) onSelectWordFamily(item.familyRoot!);
                              setActiveTab('wordfamily');
                            }}
                            className="ml-2 text-xs font-medium text-indigo-600 hover:underline cursor-pointer inline-flex items-center gap-0.5"
                            title="Xem cây họ từ này"
                          >
                            [Họ: {item.familyRoot}]
                          </span>
                        )}
                      </td>

                      {/* Example */}
                      <td className="py-3 px-4 hidden md:table-cell text-xs text-slate-600 max-w-xs">
                        <div className="flex items-center justify-between gap-1">
                          <span className="italic">"{item.example}"</span>
                          <button
                            onClick={() => speakEnglish(item.example)}
                            className="text-slate-400 hover:text-indigo-600 shrink-0"
                            title="Nghe đọc câu ví dụ"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-slate-400 text-xs mt-0.5">👉 {item.exampleVi}</p>
                      </td>

                      {/* Learn Checkbox Toggle */}
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => onToggleLearned(item.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1 transition-all ${
                            isLearned
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isLearned ? 'text-emerald-700' : 'text-slate-400'}`} />
                          <span>{isLearned ? 'Đã thuộc' : 'Học'}</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
