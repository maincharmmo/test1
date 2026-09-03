import React, { useState } from 'react';
import { 
  Zap, 
  Search, 
  Volume2, 
  Lightbulb, 
  AlertTriangle, 
  CheckCircle2, 
  Table, 
  Layers
} from 'lucide-react';
import { IRREGULAR_VERBS, FAST_TRACK_HACKS } from '../data/fastTrackTips';
import { speakEnglish } from '../services/speechService';

export const FastTrackHacks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'verbs' | 'hacks' | 'suffixes' | 'traps'>('verbs');
  const [verbSearch, setVerbSearch] = useState('');
  const [verbCategory, setVerbCategory] = useState<string>('all');

  const filteredVerbs = IRREGULAR_VERBS.filter(v => {
    if (verbCategory !== 'all' && v.categoryGroup !== verbCategory) return false;
    if (verbSearch) {
      const q = verbSearch.toLowerCase();
      return (
        v.v1.toLowerCase().includes(q) ||
        v.v2.toLowerCase().includes(q) ||
        v.v3.toLowerCase().includes(q) ||
        v.meaningVi.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const hackTips = FAST_TRACK_HACKS.filter(t => t.category === 'hack');
  const trapTips = FAST_TRACK_HACKS.filter(t => t.category === 'trap');
  const suffixTips = FAST_TRACK_HACKS.filter(t => t.category === 'suffix');

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="space-y-2 relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
            <Zap className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
            Cứu Nguy Cho Học Sinh Mất Gốc
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Bộ Bí Kíp Ôn Thi Cấp Tốc (Fast-Track Hacks)
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm leading-relaxed">
            Tổng hợp 120+ động từ bất quy tắc chia theo 4 nhóm dễ nhớ, câu vè mẹo làm bài 5 giây, bảng nhận diện đuôi từ và giải mã các bẫy đề thi hay lừa thí sinh.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('verbs')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'verbs'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Table className="w-4 h-4" />
          120+ Động Từ Bất Quy Tắc (4 Nhóm)
        </button>

        <button
          onClick={() => setActiveTab('hacks')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'hacks'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          Mẹo Làm Bài 5 Giây (Câu Vè)
        </button>

        <button
          onClick={() => setActiveTab('suffixes')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'suffixes'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          Bảng Nhận Diện Đuôi Từ (Suffixes)
        </button>

        <button
          onClick={() => setActiveTab('traps')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'traps'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          Giải Mã Bẫy Đề Thi Thường Gặp
        </button>
      </div>

      {/* TAB 1: IRREGULAR VERBS TABLE */}
      {activeTab === 'verbs' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={verbSearch}
                onChange={(e) => setVerbSearch(e.target.value)}
                placeholder="Tìm động từ V1, V2, V3 hoặc nghĩa tiếng Việt..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: '3 Cột Giống Nhau', label: 'Nhóm 1 (V1=V2=V3)' },
                { id: 'V2 = V3', label: 'Nhóm 2 (V2=V3)' },
                { id: 'Biến âm i - a - u', label: 'Nhóm 3 (i-a-u)' },
                { id: 'V3 tận cùng -en', label: 'Nhóm 4 (Đuôi -en)' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setVerbCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    verbCategory === cat.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-700 uppercase text-xs font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Nguyên thể (V1)</th>
                    <th className="py-3 px-4">Quá khứ (V2)</th>
                    <th className="py-3 px-4">Phân từ II (V3)</th>
                    <th className="py-3 px-4">Nghĩa Tiếng Việt</th>
                    <th className="py-3 px-4">Nhóm quy luật</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredVerbs.map((v, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900">{v.v1}</span>
                          <button
                            onClick={() => speakEnglish(v.v1)}
                            className="text-amber-600 hover:text-amber-800 p-0.5"
                            title="Nghe V1"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                      <td className="py-3 px-4 font-bold text-indigo-700">
                        <div className="flex items-center gap-2">
                          <span>{v.v2}</span>
                          <button
                            onClick={() => speakEnglish(v.v2)}
                            className="text-indigo-500 hover:text-indigo-800 p-0.5"
                            title="Nghe V2"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                      <td className="py-3 px-4 font-bold text-sky-700">
                        <div className="flex items-center gap-2">
                          <span>{v.v3}</span>
                          <button
                            onClick={() => speakEnglish(v.v3)}
                            className="text-sky-500 hover:text-sky-800 p-0.5"
                            title="Nghe V3"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                      <td className="py-3 px-4 font-medium text-slate-800">
                        {v.meaningVi}
                      </td>

                      <td className="py-3 px-4 text-xs text-slate-500">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 font-semibold text-slate-600">
                          {v.categoryGroup}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: EXAM HACKS (CÂU VÈ) */}
      {activeTab === 'hacks' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackTips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  Mẹo 5 Giây
                </span>
                <span className="text-xs font-medium text-slate-400">{tip.subtitle}</span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900">{tip.title}</h3>
              
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {tip.contentVi}
              </p>

              {tip.keyRule && (
                <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-950">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    CÔNG THỨC & CÂU VÈ DỄ THUỘC:
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-amber-900 leading-relaxed whitespace-pre-line font-mono">
                    {tip.keyRule}
                  </div>
                </div>
              )}

              {tip.exampleEn && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <strong className="text-slate-900 block">Ví dụ thực chiến:</strong>
                  <p className="italic font-medium text-slate-800">{tip.exampleEn}</p>
                  {tip.exampleVi && <p className="text-slate-500">👉 {tip.exampleVi}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: SUFFIXES TABLE */}
      {activeTab === 'suffixes' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suffixTips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Hậu Tố Word Form
                  </span>
                  <span className="text-xs text-slate-400">{tip.subtitle}</span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900">{tip.title}</h3>
                <p className="text-xs text-slate-600 font-medium">{tip.contentVi}</p>

                {tip.keyRule && (
                  <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs text-indigo-950 font-mono whitespace-pre-line leading-relaxed">
                    {tip.keyRule}
                  </div>
                )}

                {tip.exampleEn && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <p className="italic font-medium">{tip.exampleEn}</p>
                    {tip.exampleVi && <p className="text-slate-500 mt-0.5">👉 {tip.exampleVi}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: COMMON EXAM TRAPS */}
      {activeTab === 'traps' && (
        <div className="space-y-4">
          {trapTips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{tip.title}</span>
                </div>
                <span className="text-xs text-slate-400">{tip.subtitle}</span>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                {tip.contentVi}
              </p>

              {tip.keyRule && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 whitespace-pre-line leading-relaxed font-medium">
                  {tip.keyRule}
                </div>
              )}

              {tip.exampleEn && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <strong className="text-slate-900 block mb-1">Ví dụ minh họa:</strong>
                  <p className="italic font-medium text-slate-800">{tip.exampleEn}</p>
                  {tip.exampleVi && <p className="text-slate-500 mt-0.5">👉 {tip.exampleVi}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
