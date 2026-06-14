export interface PYQ {
  id: string;
  subjectId: string;
  chapterId: string;
  year: number;
  month: string;
  question: string;
  marks: number;
  difficulty: "easy" | "medium" | "hard";
}

export interface PYQData {
  subjectId: string;
  questions: PYQ[];
}
