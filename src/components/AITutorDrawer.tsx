import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  Lightbulb, 
  BookOpen, 
  Loader2,
  GraduationCap
} from 'lucide-react';
import { ExamQuestion } from '../types';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: number;
}

interface AITutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuestion?: ExamQuestion | null;
  userSelectedOption?: string;
}

const QUICK_PROMPTS = [
  'Mẹo đoán từ loại (Noun, Adj, Adv) trong đề thi 5 giây',
  'Phân biệt Since và For thì hiện tại hoàn thành',
  'Cách phân biệt câu điều kiện loại 1 và loại 2',
  'Mẹo phát âm đuôi -ed bằng câu vè tiếng Việt'
];

export const AITutorDrawer: React.FC<AITutorDrawerProps> = ({
  isOpen,
  onClose,
  initialQuestion,
  userSelectedOption
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Chào bạn! Mình là Gia Sư Tiếng Anh Cấp Tốc. Mình chuyên kèm cặp học sinh mất gốc ôn thi chuẩn đầu vào A1 - B1.\n\nBạn đang thắc mắc cấu trúc nào, cần giải thích câu hỏi trắc nghiệm hay cần mẹo nhớ nhanh?',
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          questionDetails: initialQuestion ? {
            sentence: initialQuestion.question,
            options: initialQuestion.options,
            correctAnswer: initialQuestion.options[initialQuestion.correctIndex],
            userChoice: userSelectedOption
          } : null,
          userContext: 'Học sinh mất gốc đang ôn thi cấp tốc chuẩn đầu vào A1-B1'
        })
      });

      if (!response.ok) {
        throw new Error('Lỗi kết nối máy chủ');
      }

      const data = await response.json();
      const aiReply: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.reply || 'Gia sư đã nhận câu hỏi của bạn. Hãy kiên trì luyện tập nhé!',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiReply]);
    } catch (err) {
      // Intelligent pedagogical offline fallback
      const fallbackMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `[Gia sư tự động] Bí kíp ghi nhớ cho bạn:\n1. Quy tắc từ loại: Vị trí sau to be hoặc trước danh từ luôn là TÍNH TỪ (-ful, -ive, -ous, -able).\n2. Câu bị động: Luôn có "be + V3/ed" (Ví dụ: The book was written by him).\n3. Thì hiện tại hoàn thành: "have/has + V3/ed", nhận biết bằng since (mốc), for (khoảng), already, yet.\n4. Mệnh đề thời gian (when, as soon as, before): Tuyệt đối KHÔNG dùng "will".`,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-lg h-full shadow-2xl flex flex-col border-l border-slate-200">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-sky-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                Gia Sư AI Cứu Mất Gốc
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </h3>
              <p className="text-[11px] text-slate-500">
                Sẵn sàng giải đáp ngữ pháp, bẫy đề thi & dịch câu
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-3.5 rounded-2xl max-w-[85%] text-xs leading-relaxed whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/60 font-medium'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 items-center text-xs text-slate-400">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <span>Gia sư AI đang suy nghĩ câu trả lời dễ hiểu nhất...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Gợi ý câu hỏi nhanh:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {QUICK_PROMPTS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p)}
                className="px-2.5 py-1 text-[11px] rounded-full bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 whitespace-nowrap transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-slate-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Nhập câu hỏi hoặc dán câu tiếng Anh cần giải thích..."
              className="flex-1 px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
