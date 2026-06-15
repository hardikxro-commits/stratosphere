export interface PaperEntry {
  id: string;
  standard: 11 | 12;
  subjectId: string;
  year: number;
  month?: string;
  title: string;
  type: "board-exam" | "question-bank" | "sample-paper" | "mock-test";
  description: string;
  url: string;
  local: boolean;
  marks?: number;
  duration?: string;
}

export interface PaperGroup {
  year: number;
  papers: PaperEntry[];
}
