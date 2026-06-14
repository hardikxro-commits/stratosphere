export interface ChapterContent {
  overview: string;
  concepts: ConceptSection[];
  keyPoints: string[];
  importantQuestions?: string[];
}

export interface ConceptSection {
  title: string;
  body: string;
}
