export interface ProgressData {
  completedChapters: Record<string, string[]>;
}

export function getProgress(): ProgressData {
  if (typeof window === "undefined") return { completedChapters: {} };
  const stored = localStorage.getItem("stratos-progress");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { completedChapters: {} };
    }
  }
  return { completedChapters: {} };
}

export function toggleChapter(subjectId: string, chapterId: string): ProgressData {
  const progress = getProgress();
  if (!progress.completedChapters[subjectId]) {
    progress.completedChapters[subjectId] = [];
  }
  const idx = progress.completedChapters[subjectId].indexOf(chapterId);
  if (idx === -1) {
    progress.completedChapters[subjectId].push(chapterId);
  } else {
    progress.completedChapters[subjectId].splice(idx, 1);
  }
  localStorage.setItem("stratos-progress", JSON.stringify(progress));
  return progress;
}

export function isChapterCompleted(subjectId: string, chapterId: string): boolean {
  const progress = getProgress();
  return progress.completedChapters[subjectId]?.includes(chapterId) ?? false;
}

export function getSubjectProgress(subjectId: string, totalChapters: number): number {
  const progress = getProgress();
  const completed = progress.completedChapters[subjectId]?.length ?? 0;
  if (totalChapters === 0) return 0;
  return Math.round((completed / totalChapters) * 100);
}
