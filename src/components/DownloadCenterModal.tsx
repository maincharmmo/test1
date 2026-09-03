import React, { useRef, useState } from 'react';
import { 
  Download, 
  Upload, 
  FileSpreadsheet, 
  FileText, 
  CheckCircle2, 
  X, 
  RefreshCw, 
  AlertTriangle,
  HardDrive,
  Sparkles
} from 'lucide-react';
import { UserProgress } from '../types';
import { 
  exportProgressJson, 
  importProgressJson, 
  exportVocabularyCsv,
  resetProgress
} from '../services/storageService';
import { getAllVocabulary } from '../data/vocabularyData';

interface DownloadCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onProgressUpdated: (newProgress: UserProgress) => void;
}

export const DownloadCenterModal: React.FC<DownloadCenterModalProps> = ({
  isOpen,
  onClose,
  progress,
  onProgressUpdated
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  if (!isOpen) return null;

  const learnedWordsCount = Object.keys(progress.learnedWordIds || {}).length;
  const masteredGrammarCount = Object.keys(progress.masteredGrammarIds || {}).length;
  const examCount = progress.examHistory?.length || 0;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const imported = await importProgressJson(file);
      onProgressUpdated(imported);
      setIsError(false);
      setImportStatus('✅ Đã nạp thành công tiến trình học tập từ máy tính!');
    } catch (err: any) {
      setIsError(true);
      setImportStatus(err.message || 'Lỗi khi đọc file sao lưu.');
    }
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại tiến trình học tập không? Thao tác này sẽ xóa từ đã thuộc và lịch sử thi trên trình duyệt này.')) {
      const fresh = resetProgress();
      onProgressUpdated(fresh);
      setImportStatus('Đã đặt lại tiến trình về mặc định.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">
                Lưu Trữ & Tải Xuất Tiến Trình Học Tập
              </h3>
              <p className="text-xs text-slate-500">
                Lưu vào máy tính để học offline và không lo mất dữ liệu
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Status Message if any */}
          {importStatus && (
            <div className={`p-3.5 rounded-xl text-xs font-semibold ${
              isError ? 'bg-rose-50 border border-rose-200 text-rose-800' : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
            }`}>
              {importStatus}
            </div>
          )}

          {/* Current Snapshot Stats */}
          <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 grid grid-cols-3 gap-3 text-center">
            <div>
              <span className="text-xl font-black text-indigo-900">{learnedWordsCount}</span>
              <p className="text-[11px] text-indigo-600 font-medium">Từ đã thuộc</p>
            </div>
            <div>
              <span className="text-xl font-black text-indigo-900">{masteredGrammarCount}</span>
              <p className="text-[11px] text-indigo-600 font-medium">Ngữ pháp nắm vững</p>
            </div>
            <div>
              <span className="text-xl font-black text-indigo-900">{examCount}</span>
              <p className="text-[11px] text-indigo-600 font-medium">Đề đã thi</p>
            </div>
          </div>

          {/* Action 1: Export Progress JSON */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Download className="w-4 h-4 text-indigo-600" />
                Tải Xuống File Tiến Trình (.json)
              </h4>
              <p className="text-xs text-slate-500">
                Lưu toàn bộ lịch sử điểm thi, từ đã học, điểm ngữ pháp vào 1 file nhỏ trên máy tính.
              </p>
            </div>
            <button
              onClick={() => exportProgressJson(progress)}
              id="btn-modal-export-json"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-colors shrink-0"
            >
              Tải File Về Máy
            </button>
          </div>

          {/* Action 2: Import Progress JSON */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Upload className="w-4 h-4 text-emerald-600" />
                Khôi Phục Tiến Trình Từ Máy Tính
              </h4>
              <p className="text-xs text-slate-500">
                Tải lên file sao lưu trước đó để tiếp tục học trên máy tính này.
              </p>
            </div>
            <input 
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              id="btn-modal-import-json"
              className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors shrink-0"
            >
              Chọn File Sao Lưu
            </button>
          </div>

          {/* Action 3: Export Vocabulary CSV */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-sky-600" />
                Xuất 4000 Từ Vựng Ra Excel (CSV)
              </h4>
              <p className="text-xs text-slate-500">
                File bảng tính gồm từ, phiên âm, từ loại, nghĩa, ví dụ để tra cứu hoặc in ấn ra giấy.
              </p>
            </div>
            <button
              onClick={() => exportVocabularyCsv(getAllVocabulary())}
              id="btn-modal-export-csv"
              className="px-4 py-2 rounded-xl text-xs font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-300 transition-colors shrink-0"
            >
              Xuất File CSV
            </button>
          </div>

          {/* Reset button */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">Muốn xóa toàn bộ dữ liệu trên máy?</span>
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-rose-600 hover:text-rose-800 hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Đặt lại từ đầu
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
