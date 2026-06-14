export interface ProgressData {
  completedChapters: Record<string, string[]>;
}

function getLocalProgress(): ProgressData {
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

function setLocalProgress(data: ProgressData) {
  localStorage.setItem("stratos-progress", JSON.stringify(data));
}

export async function toggleChapterRemote(
  subjectId: string,
  chapterId: string,
  completed: boolean
): Promise<boolean> {
  try {
    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subjectId, chapterId, completed }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function toggleChapter(subjectId: string, chapterId: string): ProgressData {
  const progress = getLocalProgress();
  if (!progress.completedChapters[subjectId]) {
    progress.completedChapters[subjectId] = [];
  }
  const idx = progress.completedChapters[subjectId].indexOf(chapterId);
  if (idx === -1) {
    progress.completedChapters[subjectId].push(chapterId);
  } else {
    progress.completedChapters[subjectId].splice(idx, 1);
  }
  setLocalProgress(progress);
  return progress;
}

export function isChapterCompleted(subjectId: string, chapterId: string): boolean {
  const progress = getLocalProgress();
  return progress.completedChapters[subjectId]?.includes(chapterId) ?? false;
}

export function getSubjectProgress(subjectId: string, totalChapters: number): number {
  const progress = getLocalProgress();
  const completed = progress.completedChapters[subjectId]?.length ?? 0;
  if (totalChapters === 0) return 0;
  return Math.round((completed / totalChapters) * 100);
}
