import type { ChapterContent } from "./types";

import physics11 from "./physics-11";
import physics12 from "./physics-12";
import chemistry11 from "./chemistry-11";
import chemistry12 from "./chemistry-12";
import maths11 from "./maths-11";
import maths12 from "./maths-12";
import biology11 from "./biology-11";
import biology12 from "./biology-12";

const content: Record<string, Record<string, ChapterContent>> = {
  physics: { ...physics11, ...physics12 },
  chemistry: { ...chemistry11, ...chemistry12 },
  mathematics: { ...maths11, ...maths12 },
  biology: { ...biology11, ...biology12 },
};

export function getChapterContent(subjectId: string, chapterId: string): ChapterContent | undefined {
  return content[subjectId]?.[chapterId];
}

export default content;
