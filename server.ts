import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// AI Tutor endpoint for English explanations & sentence check
app.post('/api/ai/tutor', async (req, res) => {
  const { question, userContext, questionDetails } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Câu hỏi không hợp lệ.' });
  }

  const ai = getGeminiClient();
  if (!ai) {
    // If no API key is provided, return intelligent built-in pedagogical advice
    return res.json({
      reply: `[Gia sư tự động] Hãy nhớ các nguyên tắc vàng cho kỳ thi đầu vào:\n1. Phân biệt từ loại: A/An/The + [Tính từ] + [Danh từ].\n2. Bổ nghĩa động từ thường dùng Trạng từ (-ly).\n3. Bị động thì quá khứ đơn luôn là "was/were + V3/ed".\n4. Mệnh đề thời gian (when, as soon as, until) tuyệt đối không dùng "will", phải dùng hiện tại đơn!`
    });
  }

  try {
    const prompt = `Bạn là một gia sư tiếng Anh giàu kinh nghiệm, chuyên kèm cặp học sinh mất gốc ôn thi cấp tốc chuẩn đầu vào (A1 đến B1).
Phong cách trả lời:
- Giải thích bằng tiếng Việt cực kỳ dễ hiểu, ngắn gọn, súc tích.
- Chỉ rõ công thức cốt lõi, dấu hiệu nhận biết 5 giây (key signal).
- Nêu rõ bẫy đề thi hay lừa thí sinh.
- Động viên học sinh tự tin.

Câu hỏi của học sinh:
"${question}"

${questionDetails ? `Ngữ cảnh câu hỏi trắc nghiệm:\n${JSON.stringify(questionDetails)}` : ''}
${userContext ? `Thông tin học sinh:\n${userContext}` : ''}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt
    });

    res.json({ reply: response.text || 'Gia sư đã nhận câu hỏi của bạn. Hãy kiên trì luyện tập nhé!' });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({
      error: 'Không thể kết nối với Gia sư AI lúc này. Bạn có thể sử dụng các mẹo có sẵn trong mục "Cứu Mất Gốc".'
    });
  }
});

// Start server with Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`English Learning App server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
