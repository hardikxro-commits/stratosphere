import type { PYQ } from "./types";

const allQuestions: PYQ[] = [
  // Physics 11
  { id: "p11-1", subjectId: "physics", chapterId: "phys11-ch1", year: 2024, month: "Feb", question: "State and explain parallax method for measuring large distances.", marks: 3, difficulty: "medium" },
  { id: "p11-2", subjectId: "physics", chapterId: "phys11-ch1", year: 2023, month: "Feb", question: "Convert 1 newton into dyne using dimensional analysis.", marks: 2, difficulty: "easy" },
  { id: "p11-3", subjectId: "physics", chapterId: "phys11-ch2", year: 2024, month: "Feb", question: "Derive the kinematic equation v² = u² + 2as using calculus.", marks: 3, difficulty: "medium" },
  { id: "p11-4", subjectId: "physics", chapterId: "phys11-ch2", year: 2024, month: "July", question: "A ball is thrown vertically upwards with velocity 20 m/s. Find maximum height and time of flight.", marks: 4, difficulty: "medium" },
  { id: "p11-5", subjectId: "physics", chapterId: "phys11-ch3", year: 2023, month: "Feb", question: "State Newton's laws of motion. Explain the concept of inertia with an example.", marks: 4, difficulty: "easy" },
  { id: "p11-6", subjectId: "physics", chapterId: "phys11-ch3", year: 2024, month: "Feb", question: "Derive an expression for centripetal acceleration.", marks: 3, difficulty: "hard" },
  { id: "p11-7", subjectId: "physics", chapterId: "phys11-ch4", year: 2023, month: "July", question: "Define work, energy, and power. State work-energy theorem.", marks: 3, difficulty: "easy" },
  { id: "p11-8", subjectId: "physics", chapterId: "phys11-ch5", year: 2024, month: "Feb", question: "State the laws of thermodynamics. Explain Carnot engine with a neat diagram.", marks: 5, difficulty: "hard" },
  { id: "p11-9", subjectId: "physics", chapterId: "phys11-ch6", year: 2023, month: "Feb", question: "Define SHM. Derive the differential equation of SHM.", marks: 3, difficulty: "medium" },
  { id: "p11-10", subjectId: "physics", chapterId: "phys11-ch7", year: 2024, month: "July", question: "State and explain Huygens' principle. Use it to prove laws of reflection.", marks: 4, difficulty: "medium" },

  // Chemistry 11
  { id: "c11-1", subjectId: "chemistry", chapterId: "chem11-ch1", year: 2024, month: "Feb", question: "Explain the mole concept. Calculate the number of moles in 20g of CaCO₃.", marks: 3, difficulty: "easy" },
  { id: "c11-2", subjectId: "chemistry", chapterId: "chem11-ch2", year: 2023, month: "Feb", question: "State Heisenberg's uncertainty principle. Why is it significant only for subatomic particles?", marks: 2, difficulty: "medium" },
  { id: "c11-3", subjectId: "chemistry", chapterId: "chem11-ch2", year: 2024, month: "Feb", question: "Write the electronic configuration of Cu and Cr. Explain the anomaly.", marks: 3, difficulty: "hard" },
  { id: "c11-4", subjectId: "chemistry", chapterId: "chem11-ch3", year: 2024, month: "July", question: "Explain periodic trends in ionization enthalpy across a period and down a group.", marks: 3, difficulty: "medium" },
  { id: "c11-5", subjectId: "chemistry", chapterId: "chem11-ch4", year: 2023, month: "Feb", question: "Explain VSEPR theory. Predict the geometry of NH₃ and H₂O.", marks: 4, difficulty: "medium" },
  { id: "c11-6", subjectId: "chemistry", chapterId: "chem11-ch5", year: 2024, month: "Feb", question: "State Hess's law. Calculate enthalpy change for a reaction using bond energies.", marks: 4, difficulty: "hard" },
  { id: "c11-7", subjectId: "chemistry", chapterId: "chem11-ch6", year: 2023, month: "July", question: "Derive the relationship between Kp and Kc. Give one example each of homogeneous and heterogeneous equilibrium.", marks: 3, difficulty: "medium" },
  { id: "c11-8", subjectId: "chemistry", chapterId: "chem11-ch7", year: 2024, month: "Feb", question: "Explain the concept of pH. Calculate the pH of 0.001M HCl solution.", marks: 2, difficulty: "easy" },
  { id: "c11-9", subjectId: "chemistry", chapterId: "chem11-ch8", year: 2023, month: "Feb", question: "What is a redox reaction? Balance the following equation using ion-electron method.", marks: 4, difficulty: "medium" },
  { id: "c11-10", subjectId: "chemistry", chapterId: "chem11-ch9", year: 2024, month: "July", question: "Distinguish between electrophiles and nucleophiles with examples.", marks: 2, difficulty: "easy" },

  // Maths 11
  { id: "m11-1", subjectId: "maths", chapterId: "math11-ch1", year: 2024, month: "Feb", question: "If A = {1,2,3}, B = {2,3,4}, find A∪B, A∩B, A-B. Verify n(A∪B) = n(A) + n(B) - n(A∩B).", marks: 3, difficulty: "easy" },
  { id: "m11-2", subjectId: "maths", chapterId: "math11-ch2", year: 2023, month: "Feb", question: "Prove that √3 is irrational.", marks: 2, difficulty: "medium" },
  { id: "m11-3", subjectId: "maths", chapterId: "math11-ch3", year: 2024, month: "Feb", question: "Find the domain and range of f(x) = √(x²-4).", marks: 3, difficulty: "medium" },
  { id: "m11-4", subjectId: "maths", chapterId: "math11-ch4", year: 2024, month: "July", question: "Prove that sin²θ + cos²θ = 1. Express sin3θ in terms of sinθ.", marks: 4, difficulty: "easy" },
  { id: "m11-5", subjectId: "maths", chapterId: "math11-ch5", year: 2023, month: "Feb", question: "Find the equation of the line passing through (2,3) and perpendicular to 3x+4y=12.", marks: 3, difficulty: "medium" },
  { id: "m11-6", subjectId: "maths", chapterId: "math11-ch6", year: 2024, month: "Feb", question: "Find the derivative of x³+2x²-5x+7 from first principles.", marks: 4, difficulty: "hard" },
  { id: "m11-7", subjectId: "maths", chapterId: "math11-ch7", year: 2023, month: "July", question: "Evaluate ∫(3x²+2x-1)dx as a limit of sum.", marks: 4, difficulty: "hard" },
  { id: "m11-8", subjectId: "maths", chapterId: "math11-ch8", year: 2024, month: "Feb", question: "How many 4-letter words can be formed using the letters of 'MATHEMATICS'?", marks: 3, difficulty: "medium" },

  // Biology 11
  { id: "b11-1", subjectId: "biology", chapterId: "bio11-ch1", year: 2024, month: "Feb", question: "State the cell theory. Differentiate between prokaryotic and eukaryotic cells.", marks: 3, difficulty: "easy" },
  { id: "b11-2", subjectId: "biology", chapterId: "bio11-ch2", year: 2023, month: "Feb", question: "Explain the structure and function of mitochondria with a labeled diagram.", marks: 4, difficulty: "medium" },
  { id: "b11-3", subjectId: "biology", chapterId: "bio11-ch3", year: 2024, month: "July", question: "Describe the stages of mitosis with the help of diagrams.", marks: 5, difficulty: "medium" },
  { id: "b11-4", subjectId: "biology", chapterId: "bio11-ch4", year: 2023, month: "Feb", question: "Explain the mechanism of enzyme action using lock-and-key model.", marks: 3, difficulty: "easy" },
  { id: "b11-5", subjectId: "biology", chapterId: "bio11-ch5", year: 2024, month: "Feb", question: "Describe the structure of a dicotyledonous leaf.", marks: 3, difficulty: "medium" },
  { id: "b11-6", subjectId: "biology", chapterId: "bio11-ch6", year: 2024, month: "Feb", question: "Explain the mechanism of breathing in humans.", marks: 4, difficulty: "medium" },
  { id: "b11-7", subjectId: "biology", chapterId: "bio11-ch7", year: 2023, month: "July", question: "Draw a labeled diagram of the human heart showing the flow of blood.", marks: 4, difficulty: "medium" },
  { id: "b11-8", subjectId: "biology", chapterId: "bio11-ch8", year: 2024, month: "Feb", question: "Explain the reflex arc with a neat diagram.", marks: 3, difficulty: "medium" },
  { id: "b11-9", subjectId: "biology", chapterId: "bio11-ch9", year: 2023, month: "Feb", question: "Describe the structure and function of nephrons.", marks: 4, difficulty: "hard" },
  { id: "b11-10", subjectId: "biology", chapterId: "bio11-ch10", year: 2024, month: "July", question: "What are hormones? Explain the feedback mechanism of hormone regulation.", marks: 3, difficulty: "easy" },
];

export function getPYQs(subjectId?: string, chapterId?: string): PYQ[] {
  let filtered = allQuestions;
  if (subjectId) filtered = filtered.filter((q) => q.subjectId === subjectId);
  if (chapterId) filtered = filtered.filter((q) => q.chapterId === chapterId);
  return filtered.sort((a, b) => b.year - a.year || a.month.localeCompare(b.month));
}

export function getYears(): number[] {
  return [...new Set(allQuestions.map((q) => q.year))].sort((a, b) => b - a);
}

export type { PYQ };
