import React, { useState, useEffect } from 'react';
import { 
  Navbar, 
  ActiveTab 
} from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { VocabularyHub } from './components/VocabularyHub';
import { WordFamilyExplorer } from './components/WordFamilyExplorer';
import { GrammarHub } from './components/GrammarHub';
import { EntranceExamPractice } from './components/EntranceExamPractice';
import { FastTrackHacks } from './components/FastTrackHacks';
import { DownloadCenterModal } from './components/DownloadCenterModal';
import { AITutorDrawer } from './components/AITutorDrawer';

import { 
  loadProgress, 
  saveProgress, 
  recordWordLearned, 
  toggleWordStarred, 
  toggleGrammarMastered, 
  saveExamResult 
} from './services/storageService';
import { UserProgress, ExamQuestion, ExamResult } from './types';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  // Modals & Drawers state
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);

  // Cross-component selected context
  const [selectedWordFamilyRoot, setSelectedWordFamilyRoot] = useState<string | undefined>(undefined);
  const [aiTutorContextQuestion, setAiTutorContextQuestion] = useState<ExamQuestion | null>(null);
  const [aiTutorContextChoice, setAiTutorContextChoice] = useState<string | undefined>(undefined);

  // Sync progress changes
  const handleToggleLearned = (wordId: string) => {
    const updated = recordWordLearned(wordId);
    setProgress({ ...updated });
  };

  const handleToggleStarred = (wordId: string) => {
    const updated = toggleWordStarred(wordId);
    setProgress({ ...updated });
  };

  const handleToggleGrammarMastered = (grammarId: string) => {
    const updated = toggleGrammarMastered(grammarId);
    setProgress({ ...updated });
  };

  const handleRecordExamResult = (result: ExamResult) => {
    const updated = saveExamResult(result);
    setProgress({ ...updated });
  };

  const handleSelectWordFamily = (root: string) => {
    setSelectedWordFamilyRoot(root);
    setActiveTab('wordfamily');
  };

  const handleAskAITutorAboutQuestion = (question: ExamQuestion, choice: string) => {
    setAiTutorContextQuestion(question);
    setAiTutorContextChoice(choice);
    setIsAITutorOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 font-sans flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        progress={progress}
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenAITutor={() => {
          setAiTutorContextQuestion(null);
          setAiTutorContextChoice(undefined);
          setIsAITutorOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {activeTab === 'dashboard' && (
          <Dashboard
            progress={progress}
            setActiveTab={setActiveTab}
            onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
            onStartExam={() => setActiveTab('exam')}
          />
        )}

        {activeTab === 'vocab' && (
          <VocabularyHub
            progress={progress}
            onToggleLearned={handleToggleLearned}
            onToggleStarred={handleToggleStarred}
            setActiveTab={setActiveTab}
            onSelectWordFamily={handleSelectWordFamily}
          />
        )}

        {activeTab === 'wordfamily' && (
          <WordFamilyExplorer
            initialRoot={selectedWordFamilyRoot}
            onOpenAITutor={() => setIsAITutorOpen(true)}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarHub
            progress={progress}
            onToggleMastered={handleToggleGrammarMastered}
            onOpenAITutor={() => setIsAITutorOpen(true)}
          />
        )}

        {activeTab === 'exam' && (
          <EntranceExamPractice
            progress={progress}
            onRecordExamResult={handleRecordExamResult}
            onAskAITutorAboutQuestion={handleAskAITutorAboutQuestion}
          />
        )}

        {activeTab === 'hacks' && (
          <FastTrackHacks />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900">English A1-B1 Fast-Track</span>
            <span>• Hệ thống học tập & ôn thi cấp tốc chuẩn đầu vào trên máy tính</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="text-indigo-600 hover:underline font-semibold"
            >
              Lưu dữ liệu vào máy tính (.json / .csv)
            </button>
            <span>• Dữ liệu tự động lưu trong trình duyệt</span>
          </div>
        </div>
      </footer>

      {/* Download Center Modal */}
      <DownloadCenterModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        progress={progress}
        onProgressUpdated={(newProg) => setProgress({ ...newProg })}
      />

      {/* AI Tutor Slide-over Drawer */}
      <AITutorDrawer
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
        initialQuestion={aiTutorContextQuestion}
        userSelectedOption={aiTutorContextChoice}
      />

    </div>
  );
}
