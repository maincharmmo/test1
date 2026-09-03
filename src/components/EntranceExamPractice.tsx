import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  FileDown, 
  Sparkles, 
  Award, 
  AlertCircle,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOCK_EXAM_QUESTIONS } from '../data/examQuestions';
import { ExamQuestion, ExamResult, UserProgress } from '../types';
import { exportExamReportHtml } from '../services/storageService';

interface EntranceExamPracticeProps {
  progress: UserProgress;
  onRecordExamResult: (result: ExamResult) => void;
  onAskAITutorAboutQuestion: (question: ExamQuestion, userSelectedOption: string) => void;
}

export const EntranceExamPractice: React.FC<EntranceExamPracticeProps> = ({
  progress,
  onRecordExamResult,
  onAskAITutorAboutQuestion
}) => {
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);

  // Time remaining in seconds (25 minutes = 1500 seconds)
  const [timeRemaining, setTimeRemaining] = useState(1500);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Timer countdown
  useEffect(() => {
    if (!examStarted || examSubmitted) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examSubmitted]);

  const questions = MOCK_EXAM_QUESTIONS;
  const currentQuestion = questions[currentQuestionIndex];

  const handleStartExam = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(1500);
    setExamSubmitted(false);
    setExamResult(null);
    setExamStarted(true);
  };

  const handleSelectAnswer = (qId: string, optionIndex: number) => {
    if (examSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: optionIndex
    }));
  };

  const handleSubmitExam = () => {
    if (examSubmitted) return;

    let score = 0;
    const wrongIds: string[] = [];

    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      } else {
        wrongIds.push(q.id);
      }
    });

    const percentage = Math.round((score / questions.length) * 100);
    let estimatedLevel: 'A1 (Mất gốc)' | 'A2 (Cơ bản)' | 'B1 (Đạt chuẩn đầu vào)' = 'A1 (Mất gốc)';
    if (percentage >= 80) {
      estimatedLevel = 'B1 (Đạt chuẩn đầu vào)';
    } else if (percentage >= 50) {
      estimatedLevel = 'A2 (Cơ bản)';
    }

    const result: ExamResult = {
      id: `exam-${Date.now()}`,
      examTitle: 'Đề Thi Thử Xếp Lớp Chuẩn Đầu Vào A1-B1 (Bộ Đề Số 1)',
      timestamp: Date.now(),
      score,
      total: questions.length,
      percentage,
      estimatedLevel,
      timeSpentSeconds: 1500 - timeRemaining,
      wrongQuestionIds: wrongIds
    };

    setExamResult(result);
    setExamSubmitted(true);
    onRecordExamResult(result);

    // Fire celebratory confetti if good score
    if (percentage >= 50) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainderSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Introduction Banner if not started */}
      {!examStarted ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center max-w-3xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-200">
            <GraduationCap className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Đề Thi Kiểm Tra Trình Độ Chuẩn Đầu Vào A1 — B1
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Mô phỏng chuẩn cấu trúc đề thi xếp lớp & chuẩn đầu vào tiếng Anh: Gồm 20 câu hỏi trọng tâm (Word Form, Các thì, Câu bị động, Câu điều kiện, Mệnh đề quan hệ, Tìm lỗi sai, Ngữ âm).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-xs text-slate-600">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900 font-bold text-sm mb-0.5">20 Câu Hỏi</strong>
              Trắc nghiệm 4 lựa chọn
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900 font-bold text-sm mb-0.5">25 Phút</strong>
              Có đồng hồ đếm ngược
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900 font-bold text-sm mb-0.5">Báo Cáo Tải Về</strong>
              File HTML / In PDF
            </div>
          </div>

          <button
            onClick={handleStartExam}
            id="btn-start-exam-now"
            className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-300 transition-all hover:scale-105"
          >
            Bắt Đầu Làm Bài Ngay
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Top Exam Header & Timer Bar */}
          <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Đề Thi Thử Xếp Lớp Chuẩn Đầu Vào
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                Câu hỏi {currentQuestionIndex + 1} / {questions.length}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {/* Timer */}
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border ${
                timeRemaining < 300 
                  ? 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse' 
                  : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}>
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>{formatTime(timeRemaining)}</span>
              </div>

              {!examSubmitted ? (
                <button
                  onClick={handleSubmitExam}
                  id="btn-submit-exam"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  Nộp Bài Chấm Điểm
                </button>
              ) : (
                <button
                  onClick={handleStartExam}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Làm Lại Đề Này
                </button>
              )}
            </div>
          </div>

          {/* Exam Result Summary Card if submitted */}
          {examSubmitted && examResult && (
            <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    KẾT QUẢ BÀI THI CỦA BẠN
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black mt-1">
                    Điểm số: <span className="text-sky-300">{examResult.score}</span> / {examResult.total}
                    <span className="text-lg font-bold text-slate-300 ml-2">({examResult.percentage}%)</span>
                  </h2>
                  <p className="text-xs text-slate-300 mt-1">
                    Đánh giá xếp loại: <strong className="text-amber-300 text-sm font-extrabold">{examResult.estimatedLevel}</strong>
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => exportExamReportHtml(examResult)}
                    id="btn-download-exam-report"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900 transition-all hover:scale-105"
                  >
                    <FileDown className="w-4 h-4" />
                    Tải Báo Cáo Về Máy (HTML/PDF)
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                <strong className="text-white">Nhận xét: </strong>
                {examResult.percentage >= 80 ? (
                  <span>Bạn đã đạt chuẩn kiến thức B1 vững vàng, sẵn sàng đạt điểm số cao trong kỳ thi đầu vào!</span>
                ) : examResult.percentage >= 50 ? (
                  <span>Bạn đạt mức A2, nắm được kiến thức căn bản nhưng cần rèn thêm các bẫy ngữ pháp và phân biệt từ loại để chắc chắn đỗ B1.</span>
                ) : (
                  <span>Trình độ hiện tại ở mức A1 (Mất gốc). Hãy vào mục "Cứu Mất Gốc", xem kỹ mẹo đoán từ loại 5 giây và 120 động từ bất quy tắc rồi làm lại bài nhé!</span>
                )}
              </div>
            </div>
          )}

          {/* Main Question Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Question Card */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {currentQuestion.section}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Cấp độ {currentQuestion.level}
                </span>
              </div>

              {/* Question Text */}
              <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                <span className="text-indigo-600 mr-2">Câu {currentQuestionIndex + 1}:</span>
                {currentQuestion.question}
              </div>

              {/* 4 Multiple Choice Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, optIdx) => {
                  const isChosen = selectedAnswers[currentQuestion.id] === optIdx;
                  const isCorrect = currentQuestion.correctIndex === optIdx;

                  let btnStyle = 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200';

                  if (examSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isChosen && !isCorrect) {
                      btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                    }
                  } else if (isChosen) {
                    btnStyle = 'bg-indigo-50 border-indigo-600 text-indigo-900 font-bold shadow-xs';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(currentQuestion.id, optIdx)}
                      className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm border-2 transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {examSubmitted && (
                        <div>
                          {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                          {isChosen && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* In-depth Explanation after submission */}
              {examSubmitted && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold">Giải Thích Chi Tiết & Chìa Khóa (Key):</strong>
                    <button
                      onClick={() => onAskAITutorAboutQuestion(currentQuestion, currentQuestion.options[selectedAnswers[currentQuestion.id]] || 'Chưa chọn')}
                      className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Hỏi Gia Sư AI
                    </button>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {currentQuestion.explanationVi}
                  </p>
                </div>
              )}

              {/* Prev / Next Question Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Câu trước
                </button>

                <button
                  disabled={currentQuestionIndex === questions.length - 1}
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 transition-colors"
                >
                  Câu tiếp theo <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Question Navigator Grid (1-20) */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                Danh Sách 20 Câu Hỏi
              </h4>

              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isCorrect = selectedAnswers[q.id] === q.correctIndex;

                  let gridStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200';

                  if (examSubmitted) {
                    if (isCorrect) {
                      gridStyle = 'bg-emerald-600 text-white font-bold';
                    } else {
                      gridStyle = 'bg-rose-500 text-white font-bold';
                    }
                  } else if (isCurrent) {
                    gridStyle = 'bg-indigo-600 text-white ring-2 ring-indigo-400 font-bold';
                  } else if (isAnswered) {
                    gridStyle = 'bg-sky-100 text-sky-900 font-bold border border-sky-300';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-10 rounded-xl text-xs flex items-center justify-center transition-all ${gridStyle}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-600" />
                  <span>Đang xem</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-100 border border-sky-300" />
                  <span>Đã trả lời</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-100" />
                  <span>Chưa trả lời</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
