export type CefrLevel = 'A1' | 'A2' | 'B1';

export type PartOfSpeech = 
  | 'noun' 
  | 'verb' 
  | 'adjective' 
  | 'adverb' 
  | 'preposition' 
  | 'conjunction' 
  | 'pronoun' 
  | 'determiner' 
  | 'phrase';

export interface WordFamilyMember {
  word: string;
  pos: PartOfSpeech;
  phonetic: string;
  meaningVi: string;
  example: string;
  exampleVi: string;
}

export interface WordFamily {
  id: string;
  root: string;
  level: CefrLevel;
  theme: string;
  coreMeaning: string;
  members: WordFamilyMember[];
  tips?: string;
}

export interface VocabWord {
  id: string;
  word: string;
  pos: PartOfSpeech;
  phonetic: string;
  meaningVi: string;
  level: CefrLevel;
  topic: string;
  familyRoot?: string;
  example: string;
  exampleVi: string;
  collocation?: string;
  notes?: string;
}

export interface GrammarPoint {
  id: string;
  titleVi: string;
  titleEn: string;
  categoryId: string;
  level: CefrLevel;
  importance: 'essential' | 'high' | 'medium';
  summaryFormula: string;
  explanationVi: string;
  examples: Array<{
    en: string;
    vi: string;
    note?: string;
  }>;
  examTrapsVi: string[];
  practiceQuestions: Array<{
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanationVi: string;
  }>;
}

export interface GrammarCategory {
  id: string;
  titleVi: string;
  titleEn: string;
  iconName: string;
  descriptionVi: string;
  totalPoints: number;
  level: CefrLevel;
}

export interface ExamQuestion {
  id: string;
  type: 'word_form' | 'grammar' | 'vocabulary' | 'error_identification' | 'pronunciation' | 'cloze';
  section: string;
  question: string;
  sentenceContext?: string;
  options: string[];
  correctIndex: number;
  explanationVi: string;
  level: CefrLevel;
  grammarPointRef?: string;
  familyRootRef?: string;
}

export interface ExamResult {
  id: string;
  examTitle: string;
  timestamp: number;
  score: number;
  total: number;
  percentage: number;
  estimatedLevel: 'A1 (Mất gốc)' | 'A2 (Cơ bản)' | 'B1 (Đạt chuẩn đầu vào)';
  timeSpentSeconds: number;
  wrongQuestionIds: string[];
}

export interface UserProgress {
  version: number;
  lastUpdated: number;
  streakDays: number;
  lastActiveDate: string;
  learnedWordIds: Record<string, boolean>; // wordId -> isLearned
  starredWordIds: Record<string, boolean>; // wordId -> isStarred
  masteredGrammarIds: Record<string, boolean>; // grammarId -> isMastered
  starredGrammarIds: Record<string, boolean>;
  examHistory: ExamResult[];
  dailyWordGoal: number;
  todayStudiedCount: number;
  notes: Record<string, string>; // item id -> custom user note
}

export interface FastTrackTip {
  id: string;
  category: 'hack' | 'trap' | 'suffix' | 'irregular_verb';
  title: string;
  subtitle?: string;
  contentVi: string;
  exampleEn?: string;
  exampleVi?: string;
  keyRule?: string;
}
