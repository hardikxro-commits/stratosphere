interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "mathematical-logic": {
    overview: "Let's start with something that's basically the grammar of mathematics — mathematical logic. You know how every sentence in English can be true, false, or somewhere in between? In maths, we only care about sentences that are definitively true or false. No grey areas. No opinions. Just cold, hard truth values. And then we combine those sentences using words like 'and', 'or', 'not', 'if...then', and 'if and only if' to build more complex statements. Now, you might be thinking — why does this matter? Well, mathematical logic is the foundation of everything in computer science. Every time you type a condition in code — if (x > 5 && y < 10) — you're using logic. Every search engine, every AI model, every digital circuit — it all runs on logic gates that are built from these same principles. In fact, the computer you're reading this on uses millions of tiny logic gates that implement exactly the operations we're about to study. So when you master this chapter, you're not just learning maths — you're learning how computers think. The syllabus starts with understanding what a statement actually is, because not every sentence qualifies. Then we move to logical connectives — the glue that joins simple statements into compound ones. You'll meet the five main operators: conjunction (AND, written as ∧), disjunction (OR, ∨), negation (NOT, ∼), implication (IF...THEN, →), and biconditional (IF AND ONLY IF, ↔). Each has its own truth table — a systematic way to list every possible combination of truth values and see what the result is. Truth tables are your best friend in this chapter. They're predictable, logical, and once you understand the pattern, you can handle any compound statement. Then comes the fun part — tautologies (statements that are always true, like 'it is raining or it is not raining'), contradictions (always false), and contingencies (sometimes true, sometimes false). You'll also learn about logical equivalence — two statements that have the same truth table. This is incredibly powerful because it lets you replace a complicated statement with a simpler one that means the same thing. De Morgan's laws are the star players here: ∼(p ∧ q) ≡ ∼p ∨ ∼q and ∼(p ∨ q) ≡ ∼p ∧ ∼q. Think of them as the 'distribution of negation' rules. Then there's the algebra of statements — commutative, associative, distributive, identity, complement laws — it's like the algebra you already know, but with logic operators instead of plus and times. You'll also encounter quantifiers: 'for all' (∀) and 'there exists' (∃). These let you make statements about entire sets of objects. 'All humans are mortal' uses the universal quantifier. 'There exists a prime number greater than 100' uses the existential quantifier. Negating quantifiers can be tricky — the negation of 'all are' is 'some are not', and vice versa. Converse, inverse, and contrapositive are about flipping implications around. If the original statement is 'if p then q', the converse is 'if q then p', the inverse is 'if not p then not q', and the contrapositive is 'if not q then not p'. Here's a cool trick: a statement and its contrapositive are logically equivalent. So if you're stuck proving something, try proving its contrapositive instead. We also cover duality — where you swap ∧ with ∨ and T with F — and the principle of duality says that if a statement is a tautology, its dual is also a tautology. Finally, you'll see how all of this applies to switching circuits. Every logic gate in a circuit corresponds to a logical operation. AND gates, OR gates, NOT gates — they're the hardware implementation of what we're studying here. By the end of this chapter, you'll be able to take a real-world condition, translate it into symbolic logic, simplify it, and even design a circuit for it. That's not just maths — that's engineering.",
    concepts: [
      {
        title: "What Is a Statement?",
        body: "A statement (or proposition) is a declarative sentence that is either true or false, but not both. 'Mumbai is the capital of Maharashtra' is a statement (true). '7 is an even number' is a statement (false). 'Hello!' is not a statement — it's an exclamation. 'x > 5' is not a statement because it depends on x. But 'There exists an x such that x > 5' is a statement (true). Every statement has a truth value — either T (true) or F (false). No maybes allowed."
      },
      {
        title: "Logical Connectives — The Five Operators",
        body: "Connectives join simple statements to make compound ones. There are five: Negation (∼) flips the truth — if p is T, ∼p is F. Conjunction (∧) means AND — p ∧ q is T only when both are T. Disjunction (∨) means OR — p ∨ q is T when at least one is T. Implication (→) means IF...THEN — p → q is F only when p is T and q is F. Biconditional (↔) means IF AND ONLY IF — p ↔ q is T when both have the same truth value. Each has its own truth table pattern."
      },
      {
        title: "Truth Tables — The Systematic Approach",
        body: "A truth table lists all possible truth value combinations for the variables and shows the result. For n variables, you need 2ⁿ rows. Start with columns for each variable, then build up the compound expression step by step. For two variables p and q, the rows are: (T,T), (T,F), (F,T), (F,F). Fill in intermediate columns, then the final column. Truth tables can prove equivalence, identify tautologies, and check validity."
      },
      {
        title: "Tautology, Contradiction, and Contingency",
        body: "A tautology is a statement that is always true regardless of the truth values of its components. Example: p ∨ ∼p — 'it is raining or it is not raining'. Always T. A contradiction is always false. Example: p ∧ ∼p. A contingency is neither — it's sometimes T, sometimes F depending on the variables. In exams, you'll often be asked to check which category a given compound statement falls into using truth tables."
      },
      {
        title: "Logical Equivalence",
        body: "Two statements are logically equivalent if they have the same truth value in every possible scenario — i.e., their truth table columns match exactly. We write p ≡ q. This is powerful because you can replace a complex statement with a simpler equivalent one. For example, p → q ≡ ∼p ∨ q. The implication can be rewritten using OR and NOT. This equivalence is how computers implement 'if-then' without needing a special gate."
      },
      {
        title: "De Morgan's Laws",
        body: "These are the most famous equivalences in logic: ∼(p ∧ q) ≡ ∼p ∨ ∼q and ∼(p ∨ q) ≡ ∼p ∧ ∼q. In words: the negation of 'p and q' is 'not p or not q'. The negation of 'p or q' is 'not p and not q'. Think of it as negation 'distributing' over the connective and flipping it. These are used constantly in programming, circuit design, and mathematical proofs. Memorise them — they're gold."
      },
      {
        title: "Algebra of Statements — The Laws",
        body: "Just like numbers obey algebraic laws, logical statements do too. Commutative: p ∧ q ≡ q ∧ p, p ∨ q ≡ q ∨ p. Associative: (p ∧ q) ∧ r ≡ p ∧ (q ∧ r), same for ∨. Distributive: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) and p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r). Identity: p ∧ T ≡ p, p ∨ F ≡ p. Complement: p ∧ ∼p ≡ F, p ∨ ∼p ≡ T. Idempotent: p ∧ p ≡ p, p ∨ p ≡ p. Absorption: p ∧ (p ∨ q) ≡ p. Use these to simplify compound statements."
      },
      {
        title: "Quantifiers — ∀ and ∃",
        body: "Quantifiers turn open sentences (like 'x > 3') into statements. The universal quantifier ∀ means 'for all'. '∀x ∈ N, x > 0' means 'all natural numbers are positive' — true. The existential quantifier ∃ means 'there exists'. '∃x ∈ N, x < 0' means 'there exists a negative natural number' — false. Negating quantified statements: ∼(∀x, p(x)) ≡ ∃x, ∼p(x). The negation of 'all are' is 'some are not'. And ∼(∃x, p(x)) ≡ ∀x, ∼p(x). The negation of 'there exists' is 'none are'."
      },
      {
        title: "Converse, Inverse, and Contrapositive",
        body: "Given an implication p → q: the converse is q → p, the inverse is ∼p → ∼q, and the contrapositive is ∼q → ∼p. Here's the key fact: p → q is logically equivalent to its contrapositive ∼q → ∼p. So if you need to prove 'if it rains, the ground gets wet', you can instead prove 'if the ground is dry, it did not rain'. The converse and inverse are NOT equivalent to the original — they're actually equivalent to each other (q → p ≡ ∼p → ∼q)."
      },
      {
        title: "Duality",
        body: "The dual of a compound statement is formed by swapping ∧ with ∨ and swapping T with F, but leaving ∼ unchanged. For example, the dual of p ∧ (q ∨ ∼p) is p ∨ (q ∧ ∼p). The principle of duality states: if a statement is a tautology, its dual is also a tautology. This means every logical law comes in a pair. If you know p ∧ T ≡ p, then by duality p ∨ F ≡ p is automatically true. It's like symmetry for logic."
      },
      {
        title: "Negation of Compound Statements",
        body: "Negating compound statements follows patterns. ∼(∼p) ≡ p (double negation). ∼(p ∧ q) ≡ ∼p ∨ ∼q. ∼(p ∨ q) ≡ ∼p ∧ ∼q. ∼(p → q) ≡ p ∧ ∼q (the only time an implication fails is when the condition is true but the result is false). ∼(p ↔ q) ≡ (p ∧ ∼q) ∨ (∼p ∧ q) — which means 'one is true and the other is false'. Watch out for these in exams — they love asking 'what is the negation of this statement?'"
      },
      {
        title: "Implication in Everyday Language",
        body: "Implications hide in everyday language in many forms. 'If you study, you will pass' → p → q. 'You will pass only if you study' → also p → q (where p = 'you study', q = 'you pass' — careful with 'only if'). 'Unless you study, you will not pass' → ∼p → ∼q, which is equivalent to q → p or 'if you pass, you studied'. Translating English to logic is a key skill — look for trigger words like 'if', 'only if', 'unless', 'whenever'."
      },
      {
        title: "Validity of Arguments",
        body: "An argument is valid if whenever the premises (given statements) are true, the conclusion must also be true. In logic terms: (p₁ ∧ p₂ ∧ ... ∧ pₙ) → c should be a tautology. If the implication is a tautology, the argument is valid. If not, it's invalid. Common valid argument forms: Modus Ponens (p → q, p, therefore q), Modus Tollens (p → q, ∼q, therefore ∼p), Hypothetical Syllogism (p → q, q → r, therefore p → r)."
      },
      {
        title: "Switching Circuits and Logic Gates",
        body: "Logic meets hardware here. In a switching circuit, switches can be open (0/F) or closed (1/T). Series connection = AND (both must be closed for current to flow). Parallel connection = OR (at least one closed). A closed switch with a ∼ is a NOT operation. You can represent any circuit symbolically, simplify using logical laws, and then draw an equivalent simpler circuit. This is literally how computer processors are designed at the gate level."
      },
      {
        title: "Application — Simplifying Circuits",
        body: "Given a real-world switching circuit with multiple switches, you can write its symbolic form, simplify using De Morgan's, distributive law, etc., and then redraw a simpler circuit that does the same job. Fewer switches means less cost, less power, and higher reliability. This is the same optimisation that chip designers do when laying out billions of transistors on a processor."
      }
    ],
    keyPoints: [
      "A statement must be objectively true or false — opinions, questions, and commands don't qualify",
      "Five connectives: ∼ (not), ∧ (and), ∨ (or), → (if-then), ↔ (iff)",
      "Truth tables list all 2ⁿ possible combinations — one row per combination",
      "p → q is false ONLY when p is T and q is F — otherwise it's true",
      "p ↔ q is true when p and q have the SAME truth value",
      "Tautology = always true; Contradiction = always false; Contingency = neither",
      "Two statements are logically equivalent if their truth table columns match exactly",
      "De Morgan's Laws: ∼(p∧q) ≡ ∼p∨∼q and ∼(p∨q) ≡ ∼p∧∼q — memorize these",
      "p → q ≡ ∼p ∨ q — implication can be rewritten using OR and NOT",
      "∼(p → q) ≡ p ∧ ∼q — useful for negating 'if-then' statements",
      "A statement and its contrapositive (∼q → ∼p) are logically equivalent",
      "Converse (q → p) and inverse (∼p → ∼q) are equivalent to each other, NOT to the original",
      "∀ = 'for all', ∃ = 'there exists'; ∼(∀x, p(x)) ≡ ∃x, ∼p(x)",
      "Duality: swap ∧↔∨ and T↔F; if a statement is a tautology, its dual is too",
      "Algebraic laws: commutative, associative, distributive, identity, complement, idempotent, absorption",
      "In switching circuits: series = AND, parallel = OR, switch with bar = NOT",
      "Modus Ponens: p→q, p ⇒ q; Modus Tollens: p→q, ∼q ⇒ ∼p",
      "An argument is valid if (premises → conclusion) is a tautology"
    ],
    importantQuestions: [
      "Prepare a truth table for (p → q) ∧ (q → p) and identify whether it is a tautology, contradiction, or contingency.",
      "Using logical equivalences, show that ∼(p → q) ≡ p ∧ ∼q.",
      "Write the negation of: 'If it rains, then the match will be cancelled'.",
      "Express the following in symbolic form and find its negation: 'All students are hardworking'.",
      "Simplify the switching circuit represented by (p ∧ q) ∨ (p ∧ ∼q) using logical laws and draw the equivalent circuit.",
      "Prove that p → (q ∨ r) ≡ (p → q) ∨ (p → r) using truth tables.",
      "State whether the following argument is valid: If I study, I will pass. I did not study. Therefore, I will not pass.",
      "Using duality, write the dual of: (p ∧ T) ∨ (q ∨ F) ≡ p ∨ q."
    ]
  },

  "matrices": {
    overview: "Imagine a giant spreadsheet of numbers — rows and columns, neat and organised. That's a matrix. On its own, it looks boring. But matrices are actually one of the most powerful tools in all of mathematics. They're used to solve systems of equations in seconds, rotate 3D objects in computer graphics, encode and decode secret messages in cryptography, run neural networks in AI, model economic systems, and even simulate quantum mechanics. Every time you see a CGI explosion in a movie or play a 3D video game, matrices are doing the heavy lifting behind the scenes. So what exactly is a matrix? It's simply a rectangular arrangement of numbers enclosed in brackets. The numbers inside are called entries or elements. The size (or order) of a matrix is given as rows × columns — so a 2×3 matrix has 2 rows and 3 columns. We use capital letters like A, B, C to name matrices, and the entry in the i-th row and j-th column is written as aᵢⱼ. We'll start with the different types of matrices you need to know: row matrix (just one row), column matrix (one column), square matrix (same rows and columns), diagonal matrix (non-zero only on the diagonal), scalar matrix (diagonal with all equal entries), identity matrix (1s on the diagonal, 0s elsewhere), zero matrix (all zeros), upper triangular, lower triangular, symmetric (A = Aᵀ), and skew-symmetric (Aᵀ = −A). Each type has special properties that make calculations easier. Then comes matrix operations — addition, subtraction, and scalar multiplication are straightforward (just do the same thing to every entry). But matrix multiplication? That's where things get interesting. To multiply two matrices, the number of columns in the first must equal the number of rows in the second. The entry at position (i,j) in the result is the dot product of row i from the first matrix with column j from the second. And here's the weird part: in general, AB ≠ BA. Matrix multiplication is NOT commutative. This is a big deal — it means order matters. You'll also learn about the transpose of a matrix (flip rows and columns), which has properties like (Aᵀ)ᵀ = A and (AB)ᵀ = BᵀAᵀ. Determinants are next — a special number calculated from a square matrix that tells you important things like whether the matrix has an inverse. For a 2×2 matrix, the determinant is ad − bc. For a 3×3 matrix, you expand using minors and cofactors. Properties of determinants — like swapping rows flips the sign, multiplying a row by a scalar multiplies the determinant — can save you a lot of calculation time. The adjoint of a matrix is the transpose of the cofactor matrix, and the inverse A⁻¹ = (adj A) / |A|. If |A| = 0, the matrix is singular and has no inverse — it's like division by zero. Finally, you'll use all of this to solve systems of linear equations. Write the system as AX = B, where A is the coefficient matrix, X is the variable matrix, and B is the constant matrix. Then X = A⁻¹B. Bam — one formula solves it all. You'll also learn elementary row operations and the rank of a matrix as alternative methods. By the end of this chapter, you'll be able to solve any system of linear equations, find inverses of matrices up to 3×3, and understand how matrices power the algorithms behind modern technology.",
    concepts: [
      {
        title: "Definition and Order of a Matrix",
        body: "A matrix is a rectangular array of numbers arranged in rows and columns. The order (or dimension) is given as m × n, where m is the number of rows and n is the number of columns. A matrix A of order m × n has entries aᵢⱼ where i = 1,...,m and j = 1,...,n. We write A = [aᵢⱼ]ₘₓₙ. The plural of matrix is matrices. Don't mix up rows and columns — rows go left to right, columns go top to bottom."
      },
      {
        title: "Types of Matrices — Row, Column, Square, and More",
        body: "Row matrix: 1 × n (one row). Column matrix: m × 1 (one column). Square matrix: m = n (same rows and columns). Diagonal matrix: square with non-zero entries only on the main diagonal. Scalar matrix: diagonal where all diagonal entries are equal. Identity matrix I: diagonal with all 1s on the diagonal. Zero matrix O: all entries are 0. Upper triangular: all entries below the diagonal are 0. Lower triangular: all entries above the diagonal are 0. Each type has distinct properties."
      },
      {
        title: "Symmetric and Skew-Symmetric Matrices",
        body: "A square matrix A is symmetric if Aᵀ = A, meaning aᵢⱼ = aⱼᵢ. The matrix is symmetric about the main diagonal. Example: [1 2; 2 3]. A is skew-symmetric if Aᵀ = −A, meaning aᵢⱼ = −aⱼᵢ. The diagonal entries of a skew-symmetric matrix are always 0 (since aᵢᵢ = −aᵢᵢ ⇒ aᵢᵢ = 0). Any square matrix can be expressed as the sum of a symmetric and a skew-symmetric matrix: A = ½(A + Aᵀ) + ½(A − Aᵀ)."
      },
      {
        title: "Matrix Addition and Subtraction",
        body: "Two matrices can be added or subtracted only if they have the SAME order. Add (or subtract) corresponding entries: if A = [aᵢⱼ] and B = [bᵢⱼ], then A + B = [aᵢⱼ + bᵢⱼ] and A − B = [aᵢⱼ − bᵢⱼ]. Properties: commutative (A + B = B + A), associative (A + (B + C) = (A + B) + C), additive identity (A + O = A), additive inverse (A + (−A) = O). Simple as matching positions."
      },
      {
        title: "Scalar Multiplication",
        body: "Multiply every entry of the matrix by the scalar (number). If k is a scalar and A = [aᵢⱼ], then kA = [k·aᵢⱼ]. Properties: k(A + B) = kA + kB, (k₁ + k₂)A = k₁A + k₂A, (k₁k₂)A = k₁(k₂A), 1·A = A. Think of it as scaling the entire matrix up or down."
      },
      {
        title: "Matrix Multiplication — The Big One",
        body: "Multiply A (m × n) and B (n × p): the number of columns of A must equal the number of rows of B. The result C = AB has order m × p. Entry cᵢⱼ = Σ aᵢₖ × bₖⱼ (sum over k = 1 to n). In plain English: take row i from A and column j from B, multiply corresponding entries and add them up. Properties: associative (AB)C = A(BC), distributive A(B+C) = AB + AC. NOT commutative: AB ≠ BA in general. The order of multiplication is crucial."
      },
      {
        title: "Transpose of a Matrix",
        body: "The transpose Aᵀ of an m × n matrix A is an n × m matrix obtained by interchanging rows and columns. Row i becomes column i. Properties: (Aᵀ)ᵀ = A, (A + B)ᵀ = Aᵀ + Bᵀ, (kA)ᵀ = kAᵀ, (AB)ᵀ = BᵀAᵀ (note the reverse order!). Transpose is used to define symmetric (A = Aᵀ) and skew-symmetric (A = −Aᵀ) matrices."
      },
      {
        title: "Determinant of a Matrix",
        body: "A determinant is a scalar value associated with a square matrix. For a 2×2 matrix A = [a b; c d], |A| = ad − bc. For a 3×3 matrix, expand along any row or column using minors and cofactors. Minor Mᵢⱼ is the determinant of the submatrix after removing row i and column j. Cofactor Cᵢⱼ = (−1)ⁱ⁺ʲ Mᵢⱼ. Then |A| = Σ aᵢⱼ Cᵢⱼ along any row or column. The determinant tells you if the matrix is invertible (non-zero) or singular (zero)."
      },
      {
        title: "Properties of Determinants",
        body: "These save you massive calculation time. (1) |Aᵀ| = |A|. (2) Swapping two rows/columns flips the sign. (3) Multiplying a row by k multiplies the determinant by k. (4) Adding a multiple of one row to another doesn't change the determinant. (5) If two rows are identical or proportional, |A| = 0. (6) |AB| = |A||B|. (7) |kA| = kⁿ|A| for an n×n matrix. Use these to simplify before expanding."
      },
      {
        title: "Adjoint of a Matrix",
        body: "The adjoint (or adjugate) of a square matrix A is the transpose of the cofactor matrix. First find the cofactor matrix [Cᵢⱼ] where Cᵢⱼ = (−1)ⁱ⁺ʲ Mᵢⱼ. Then take its transpose: adj A = [Cⱼᵢ]. Property: A·(adj A) = (adj A)·A = |A|·I. This is the key relationship that leads to the inverse formula."
      },
      {
        title: "Inverse of a Matrix",
        body: "A⁻¹ exists only if |A| ≠ 0 (non-singular). Formula: A⁻¹ = (adj A) / |A|. For a 2×2 matrix A = [a b; c d], A⁻¹ = (1/(ad−bc)) [d −b; −c a]. Properties: (A⁻¹)⁻¹ = A, (AB)⁻¹ = B⁻¹A⁻¹, (Aᵀ)⁻¹ = (A⁻¹)ᵀ, |A⁻¹| = 1/|A|. The inverse is the 'undo' button — multiply a matrix by its inverse and you get the identity matrix."
      },
      {
        title: "Elementary Row Operations",
        body: "Three types of operations on rows that don't change the solution set: (1) Swap two rows Rᵢ ↔ Rⱼ. (2) Multiply a row by a non-zero scalar k: Rᵢ → kRᵢ. (3) Add a multiple of one row to another: Rᵢ → Rᵢ + kRⱼ. These are used to find inverses (by reducing [A|I] to [I|A⁻¹]) and to solve systems (Gaussian elimination). Column operations work the same way for column transformations."
      },
      {
        title: "Solving Systems of Linear Equations — Matrix Method",
        body: "Write the system as AX = B, where A is the coefficient matrix, X is the column matrix of variables, and B is the column matrix of constants. If |A| ≠ 0, then X = A⁻¹B. This gives a unique solution. Steps: find |A|, find adj A, find A⁻¹ = (adj A)/|A|, multiply A⁻¹B to get X. This method works for any number of equations (as long as A is square and non-singular)."
      },
      {
        title: "Solving Systems — Rank Method",
        body: "When |A| = 0 or the system isn't square, use rank. The rank of a matrix is the number of non-zero rows in its row echelon form. For a system AX = B, form the augmented matrix [A|B]. If rank(A) = rank([A|B]) = number of variables, there's a unique solution. If rank(A) = rank([A|B]) < number of variables, infinite solutions exist. If rank(A) ≠ rank([A|B]), the system is inconsistent (no solution)."
      },
      {
        title: "Consistency of Systems",
        body: "A system of equations can be: consistent with a unique solution (|A| ≠ 0), consistent with infinitely many solutions (|A| = 0 but rank condition holds), or inconsistent (no solution, rank condition fails). For homogeneous systems (B = O), there's always the trivial solution X = O. Non-trivial solutions exist if |A| = 0. This is crucial for understanding whether equations have one answer, many answers, or none at all."
      },
      {
        title: "Application — Cramer's Rule",
        body: "Cramer's rule solves AX = B using determinants. For variable xᵢ: xᵢ = |Aᵢ| / |A|, where Aᵢ is A with column i replaced by B. Works for any square system with |A| ≠ 0. For two equations: x = |D₁|/|D|, y = |D₂|/|D| where D = [a₁ b₁; a₂ b₂], D₁ = [c₁ b₁; c₂ b₂], D₂ = [a₁ c₁; a₂ c₂]. Cramer's rule is elegant but computationally expensive for large systems."
      }
    ],
    keyPoints: [
      "Order of matrix = rows × columns (m × n)",
      "Symmetric: Aᵀ = A (aᵢⱼ = aⱼᵢ); Skew-symmetric: Aᵀ = −A (aᵢᵢ = 0)",
      "Matrix addition/subtraction requires SAME order — add corresponding entries",
      "Scalar multiplication: multiply every entry by the scalar",
      "For AB to exist: columns of A = rows of B; result has rows of A × columns of B",
      "Matrix multiplication is NOT commutative: AB ≠ BA in general",
      "Transpose: (AB)ᵀ = BᵀAᵀ — note the reversal",
      "Determinant of 2×2 [a b; c d] = ad − bc",
      "|AB| = |A||B| — determinant of a product is the product of determinants",
      "|kA| = kⁿ|A| for an n×n matrix",
      "A·(adj A) = (adj A)·A = |A|·I",
      "A⁻¹ exists iff |A| ≠ 0; formula: A⁻¹ = (adj A) / |A|",
      "(AB)⁻¹ = B⁻¹A⁻¹ — inverse reverses order",
      "AX = B ⇒ X = A⁻¹B (if |A| ≠ 0) — master formula for solving systems",
      "Three elementary row operations: swap, multiply by scalar, add multiple of another row",
      "Rank(A) = rank([A|B]) = n ⇒ unique solution; < n ⇒ infinite; ranks differ ⇒ no solution",
      "Homogeneous system AX = O: always has trivial solution; non-trivial if |A| = 0",
      "Cramer's rule: xᵢ = |Aᵢ| / |A| for each variable"
    ],
    importantQuestions: [
      "If A = [2 3; 1 −4] and B = [0 1; 2 5], find 3A − 2B and verify (Aᵀ)ᵀ = A.",
      "Find AB and BA for A = [1 2; 3 4], B = [2 0; 1 3]. Is AB = BA? Comment.",
      "Find the inverse of A = [3 1; 5 2] using the adjoint method.",
      "Solve the system using matrices: 2x + 3y = 8, x − 2y = −3.",
      "If A = [1 2 3; 2 3 4; 3 4 5], show that |A| = 0. What does this mean about the inverse?",
      "Using elementary row operations, find the inverse of A = [1 2; 3 5].",
      "For what value of k does the system x + 2y = 3, 2x + ky = 6 have (i) unique solution (ii) infinite solutions (iii) no solution?",
      "Express A = [3 5; 1 2] as the sum of a symmetric and a skew-symmetric matrix."
    ]
  },

  "trigonometric-functions": {
    overview: "You already know the basics — sine, cosine, tangent, and how they relate to a right-angled triangle. But in Std 12, trigonometry goes from being about triangles to being about functions. And these functions are everywhere — they describe sound waves, light waves, seasonal temperature changes, the motion of a pendulum, the alternating current that powers your home, and even the signals that carry your WiFi data. This chapter is where you stop thinking of sine and cosine as ratios and start thinking of them as functions that repeat infinitely. The first big topic is compound angles — formulas for sin(A + B), cos(A + B), and tan(A + B). The single most important thing to remember: sin(A + B) is NOT sin A + sin B. That's the biggest mistake students make. The real formulas involve mixing sines and cosines. From these, we derive double angle formulas (sin 2A = 2 sin A cos A), triple angle formulas (sin 3A = 3 sin A − 4 sin³ A), and half-angle formulas. Cos 2A has three different forms — learn all three because each one is useful in different situations. Then come the factorization formulas that let you convert sums into products and vice versa. Why bother? Because sometimes a product is easier to integrate, differentiate, or solve. The transformation formulas — expressing a sin θ + b cos θ as R sin(θ + α) — are especially useful for finding maximum and minimum values. Next up: trigonometric equations. Unlike algebraic equations where solutions are finite, trigonometric equations typically have INFINITE solutions because trig functions are periodic. When you solve sin θ = 1/2, the answer isn't just 30° — it's 30° + 360°n and 150° + 360°n for integer n. General solutions follow patterns: for sin θ = sin α, θ = nπ + (−1)ⁿα; for cos θ = cos α, θ = 2nπ ± α; for tan θ = tan α, θ = nπ + α. These are the formulas you'll use repeatedly. Then there are inverse trigonometric functions — the 'undo' operations. If sin θ = x, then θ = sin⁻¹ x (also written as arcsin x). But since trigonometric functions are not one-to-one (multiple angles give the same value), we restrict the domain to get principal values. sin⁻¹ gives values in [−π/2, π/2], cos⁻¹ gives [0, π], and tan⁻¹ gives (−π/2, π/2). You'll need to learn the properties of inverse functions — like sin⁻¹(sin θ) = θ only when θ is in the principal range, and sin⁻¹ x + cos⁻¹ x = π/2. The chapter also covers solutions of triangles — a set of formulas that let you solve any triangle given some of its sides and angles. These include the sine rule (a/sin A = b/sin B = c/sin C = 2R), the cosine rule (a² = b² + c² − 2bc cos A), projection formulas, and area formulas. The sine rule is great when you know two angles and one side. The cosine rule is perfect when you know two sides and the included angle, or all three sides. You'll also learn about the Napier analogies (tangent rules) and the Mollweide formula. All of these help you find unknown parts of a triangle — whether it's a right triangle or an oblique one. This is used in navigation, surveying, astronomy, and engineering. By the end of this chapter, you'll be able to simplify complex trigonometric expressions, solve any trig equation, work comfortably with inverse functions, and solve any triangle using the right combination of rules.",
    concepts: [
      {
        title: "Compound Angle Formulas",
        body: "These are the foundation of everything in this chapter. sin(A + B) = sin A cos B + cos A sin B. sin(A − B) = sin A cos B − cos A sin B. cos(A + B) = cos A cos B − sin A sin B. cos(A − B) = cos A cos B + sin A sin B. tan(A + B) = (tan A + tan B) / (1 − tan A tan B). tan(A − B) = (tan A − tan B) / (1 + tan A tan B). You need to memorise these cold. They're the building blocks for double, triple, and half-angle formulas."
      },
      {
        title: "Double Angle Formulas",
        body: "Set B = A in compound formulas. sin 2A = 2 sin A cos A. cos 2A = cos²A − sin²A = 2 cos²A − 1 = 1 − 2 sin²A. These three forms of cos 2A are incredibly useful — use cos²A = (1 + cos 2A)/2 to integrate cos², use sin²A = (1 − cos 2A)/2 to integrate sin². tan 2A = 2 tan A / (1 − tan²A). The cos 2A forms also give you the half-angle formulas in reverse."
      },
      {
        title: "Triple Angle and Half-Angle Formulas",
        body: "Triple: sin 3A = 3 sin A − 4 sin³A. cos 3A = 4 cos³A − 3 cos A. tan 3A = (3 tan A − tan³A) / (1 − 3 tan²A). These are less common but appear in specific problems. Half-angle: sin(A/2) = ±√((1 − cos A)/2), cos(A/2) = ±√((1 + cos A)/2), tan(A/2) = ±√((1 − cos A)/(1 + cos A)) = (1 − cos A)/sin A = sin A/(1 + cos A). The ± depends on which quadrant A/2 lies in."
      },
      {
        title: "Factorization Formulas — Sum-to-Product",
        body: "These convert sums into products: sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2). sin C − sin D = 2 cos((C+D)/2) sin((C−D)/2). cos C + cos D = 2 cos((C+D)/2) cos((C−D)/2). cos C − cos D = −2 sin((C+D)/2) sin((C−D)/2). These are used to simplify expressions and solve equations where sums of trig functions appear. Remember the pattern: sin+sin = 2 sin cos, sin−sin = 2 cos sin, cos+cos = 2 cos cos, cos−cos = −2 sin sin."
      },
      {
        title: "Factorization Formulas — Product-to-Sum",
        body: "The reverse of sum-to-product: 2 sin A cos B = sin(A+B) + sin(A−B). 2 cos A sin B = sin(A+B) − sin(A−B). 2 cos A cos B = cos(A+B) + cos(A−B). 2 sin A sin B = cos(A−B) − cos(A+B). These are useful when integrating products of trig functions or when you need to expand a product into a sum for easier manipulation."
      },
      {
        title: "Transformation — a sin θ + b cos θ",
        body: "Any expression of the form a sin θ + b cos θ can be written as R sin(θ + α) or R cos(θ + α), where R = √(a² + b²) and α = tan⁻¹(b/a) or the appropriate angle depending on the form. This single transformation lets you find the maximum value (R) and minimum value (−R) of the expression. It's used in physics for simple harmonic motion and wave analysis."
      },
      {
        title: "Trigonometric Equations — Basic Solutions",
        body: "A trigonometric equation involves trigonometric functions of an unknown variable. The smallest positive (or non-negative) solution is called the principal solution. For sin θ = k (where |k| ≤ 1), the principal solutions lie in [0, 2π). For cos θ = k, same range. For tan θ = k, principal solutions in [0, π). Always find the principal solutions first, then add the period."
      },
      {
        title: "General Solutions of Trigonometric Equations",
        body: "Since trig functions are periodic, we give general solutions using integer n. For sin θ = sin α: θ = nπ + (−1)ⁿα. For cos θ = cos α: θ = 2nπ ± α. For tan θ = tan α: θ = nπ + α. Special cases: sin θ = 0 ⇒ θ = nπ. cos θ = 0 ⇒ θ = (2n+1)π/2. tan θ = 0 ⇒ θ = nπ. sin θ = 1 ⇒ θ = (4n+1)π/2. cos θ = 1 ⇒ θ = 2nπ. These special cases are worth memorising — they show up frequently."
      },
      {
        title: "Solving Quadratic Trigonometric Equations",
        body: "Many equations are quadratic in form, like 2 cos²θ − 3 cos θ + 1 = 0. Let t = cos θ, solve 2t² − 3t + 1 = 0 to get t = 1 or t = 1/2. Then solve cos θ = 1 ⇒ θ = 2nπ, and cos θ = 1/2 ⇒ θ = 2nπ ± π/3. Always check if the solutions satisfy original constraints. Some solutions may be extraneous from squaring steps."
      },
      {
        title: "Inverse Trigonometric Functions — Domain and Range",
        body: "Inverse trig functions are defined by restricting the original function to a principal branch. y = sin⁻¹ x: domain [−1, 1], range [−π/2, π/2]. y = cos⁻¹ x: domain [−1, 1], range [0, π]. y = tan⁻¹ x: domain R, range (−π/2, π/2). y = cot⁻¹ x: domain R, range (0, π). y = sec⁻¹ x: domain (−∞, −1] ∪ [1, ∞), range [0, π] − {π/2}. y = cosec⁻¹ x: domain (−∞, −1] ∪ [1, ∞), range [−π/2, π/2] − {0}. The range tells you where the answer lives."
      },
      {
        title: "Properties of Inverse Trigonometric Functions",
        body: "Fundamental properties: sin⁻¹ x + cos⁻¹ x = π/2 for x ∈ [−1, 1]. tan⁻¹ x + cot⁻¹ x = π/2. sec⁻¹ x + cosec⁻¹ x = π/2. Composition: sin⁻¹(sin θ) = θ if θ ∈ [−π/2, π/2], otherwise you need to adjust. sin(sin⁻¹ x) = x for x ∈ [−1, 1]. tan⁻¹ x + tan⁻¹ y = tan⁻¹((x+y)/(1−xy)) when xy < 1. tan⁻¹ x − tan⁻¹ y = tan⁻¹((x−y)/(1+xy)). These properties let you combine and simplify inverse expressions."
      },
      {
        title: "Sine Rule — Solving Triangles",
        body: "For any triangle ABC with sides a, b, c opposite angles A, B, C respectively: a/sin A = b/sin B = c/sin C = 2R, where R is the circumradius. Use the sine rule when you know: (i) two angles and one side (AAS or ASA), or (ii) two sides and a non-included angle (SSA — ambiguous case, may have 0, 1, or 2 solutions). The rule derives from dropping a perpendicular and using basic trig ratios."
      },
      {
        title: "Cosine Rule",
        body: "The cosine rule generalises Pythagoras to any triangle. a² = b² + c² − 2bc cos A. Similarly b² = a² + c² − 2ac cos B, and c² = a² + b² − 2ab cos C. Use it when you know: (i) two sides and the included angle (SAS), or (ii) all three sides (SSS). Rearranged: cos A = (b² + c² − a²)/(2bc). This gives you the angles when you know all sides."
      },
      {
        title: "Projection and Area Formulas",
        body: "Projection formulas express one side in terms of the other sides and included angles: a = b cos C + c cos B, b = c cos A + a cos C, c = a cos B + b cos A. Area of triangle: Δ = ½ bc sin A = ½ ca sin B = ½ ab sin C. Also Heron's formula: Δ = √(s(s−a)(s−b)(s−c)) where s = (a+b+c)/2. Area in terms of circumradius: Δ = abc/(4R). Area in terms of inradius: Δ = rs."
      },
      {
        title: "Napier's Analogies (Tangent Rules)",
        body: "These are useful for solving triangles when you know two sides and the included angle, or two angles and the included side. tan((B−C)/2) = ((b−c)/(b+c)) cot(A/2). tan((C−A)/2) = ((c−a)/(c+a)) cot(B/2). tan((A−B)/2) = ((a−b)/(a+b)) cot(C/2). These are also called the tangent rules. They're especially handy for converting between side differences and angle differences."
      }
    ],
    keyPoints: [
      "sin(A + B) = sin A cos B + cos A sin B — this is the most important formula in the chapter",
      "cos(A + B) = cos A cos B − sin A sin B",
      "sin 2A = 2 sin A cos A; cos 2A = cos²A − sin²A = 2 cos²A − 1 = 1 − 2 sin²A",
      "sin 3A = 3 sin A − 4 sin³A; cos 3A = 4 cos³A − 3 cos A",
      "sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2)",
      "a sin θ + b cos θ can be written as R sin(θ + α) where R = √(a² + b²)",
      "General solution sin θ = sin α: θ = nπ + (−1)ⁿα",
      "General solution cos θ = cos α: θ = 2nπ ± α",
      "General solution tan θ = tan α: θ = nπ + α",
      "sin⁻¹ has range [−π/2, π/2]; cos⁻¹ has range [0, π]; tan⁻¹ has range (−π/2, π/2)",
      "sin⁻¹ x + cos⁻¹ x = π/2 for all x ∈ [−1, 1]",
      "tan⁻¹ x + tan⁻¹ y = tan⁻¹((x+y)/(1−xy)) when xy < 1",
      "Sine rule: a/sin A = b/sin B = c/sin C = 2R",
      "Cosine rule: a² = b² + c² − 2bc cos A",
      "Area = ½ bc sin A = √(s(s−a)(s−b)(s−c)) = abc/(4R) = rs",
      "Projection: a = b cos C + c cos B",
      "Napier's analogy: tan((B−C)/2) = ((b−c)/(b+c)) cot(A/2)",
      "Inverse of a trig function ≠ reciprocal; sin⁻¹ x ≠ 1/sin x",
      "Always check the quadrant when finding principal values of inverse trig functions"
    ],
    importantQuestions: [
      "Prove that cos 3A = 4 cos³A − 3 cos A using compound angle formulas.",
      "Find the general solution of 2 cos²θ − 3 sin θ = 0.",
      "Solve tan θ + cot θ = 2 and find the general solution.",
      "Prove that sin⁻¹(3/5) + sin⁻¹(8/17) = sin⁻¹(77/85).",
      "In a triangle ABC, if a = 13, b = 14, c = 15, find the area and the circumradius R.",
      "Express 5 sin θ + 12 cos θ in the form R sin(θ + α) and find its maximum value.",
      "Prove that tan⁻¹(1/2) + tan⁻¹(2/3) = tan⁻¹(7/4).",
      "Find the principal value of sin⁻¹(−√3/2) and cos⁻¹(−1/2)."
    ]
  },

  "pair-of-straight-lines": {
    overview: "In earlier years, you studied how to write the equation of a single straight line — y = mx + c, ax + by + c = 0, and so on. But what happens when two lines overlap? Or pass through the same point? Can we represent both of them with a single equation? Yes — and that's exactly what this chapter is about. A pair of straight lines is essentially two distinct lines that pass through a common point, combined into a single second-degree equation. The cool thing is that you can look at a quadratic equation in x and y and recognise whether it represents two straight lines, and if so, find their individual equations. This chapter starts with how to form the combined equation when you know the two individual lines. If L₁ = 0 and L₂ = 0 are two lines, then their product L₁ × L₂ = 0 represents both lines together. When we multiply these, we get a second-degree homogeneous equation of the form ax² + 2hxy + by² = 0 — provided both lines pass through the origin. This is the homogeneous form, and it's the simplest case. The key parameters are a, h, and b, and from these three numbers we can determine everything: whether the lines are real or imaginary, the angle between them, whether they're parallel or perpendicular, and the individual line equations. The angle between the two lines is given by the formula tan θ = |2√(h² − ab)| / |a + b|. If h² = ab, the two lines are parallel (or coincident). If a + b = 0, the lines are perpendicular. If h² < ab, no real lines exist — the pair is imaginary. So the discriminant h² − ab tells you the nature of the pair. Now, what about lines that DON'T pass through the origin? That's the general second-degree equation: ax² + 2hxy + by² + 2gx + 2fy + c = 0. This represents a pair of straight lines if and only if the determinant condition holds: Δ = abc + 2fgh − af² − bg² − ch² = 0. This is the 'pair of lines condition.' When it holds, you can shift the origin to the point of intersection of the two lines to get back to the homogeneous form. Finding the point of intersection itself involves solving ∂/∂x = 0 and ∂/∂y = 0 of the general equation — which gives the coordinates of the centre. You'll also learn how to find the separate equations of the two lines from the combined equation. The method: treat ax² + 2hxy + by² = 0 as a quadratic in x (or y), solve for x in terms of y using the quadratic formula, and factor. Each factor gives one line. Alternatively, if the general equation is given and the pair condition holds, you can factor the quadratic part, then adjust the linear terms to match the full expression. There's also a method using the formula for the slopes: the slopes m₁ and m₂ satisfy m₁ + m₂ = −2h/b and m₁m₂ = a/b (when the equation is treated as quadratic in y/x). These relationships come from the coefficients and are useful shortcuts. By the end of this chapter, you'll be able to look at any second-degree equation, quickly check if it represents a pair of lines, find the angle between them, determine their individual equations, and understand their geometric relationship. This is a short but powerful chapter — the concepts are limited but the applications range from coordinate geometry to analytic geometry used in computer vision and graphics.",
    concepts: [
      {
        title: "Combined Equation of Two Lines",
        body: "If two lines L₁: a₁x + b₁y + c₁ = 0 and L₂: a₂x + b₂y + c₂ = 0 exist, their combined equation is L₁·L₂ = 0. Multiply the two equations: (a₁x + b₁y + c₁)(a₂x + b₂y + c₂) = 0. The result is always a second-degree equation in x and y. Any point lying on either line satisfies this product equation. This is how we represent two lines with one equation."
      },
      {
        title: "Homogeneous Equation of Degree 2",
        body: "A homogeneous equation has every term of the same degree. For degree 2: ax² + 2hxy + by² = 0. This always represents two straight lines passing through the origin (0,0). Why? Because substituting (0,0) makes the equation 0 regardless of a, h, b. The lines might be real and distinct, real and coincident, or imaginary depending on the discriminant h² − ab."
      },
      {
        title: "Nature of the Pair — Real or Imaginary",
        body: "The discriminant determines the nature: if h² > ab, the pair consists of two distinct real lines through the origin. If h² = ab, the two lines are real and coincident (the same line repeated). If h² < ab, the pair represents no real lines — they're imaginary. This is analogous to the discriminant of a quadratic equation determining real vs. complex roots."
      },
      {
        title: "Angle Between Two Lines",
        body: "For the pair ax² + 2hxy + by² = 0, the angle θ between the two lines is given by tan θ = |2√(h² − ab)| / |a + b|. Important special cases: if a + b = 0, then the lines are perpendicular (θ = 90°). If h² = ab, then θ = 0 — the lines are parallel or coincident. The formula assumes both lines are real (h² ≥ ab). Note the absolute values — the angle is always acute or right."
      },
      {
        title: "Condition for Perpendicular Lines",
        body: "For the pair ax² + 2hxy + by² = 0, the lines are perpendicular if and only if a + b = 0. This is because tan 90° = ∞, which occurs when the denominator a + b = 0. This is a super useful quick test — scan the coefficients a and b. If they sum to zero, the two lines are at right angles to each other. Example: 3x² + 5xy − 3y² = 0 → a + b = 3 + (−3) = 0 → perpendicular lines."
      },
      {
        title: "Condition for Parallel Lines",
        body: "The lines are parallel (or coincident) when h² = ab. In this case, tan θ = 0, so θ = 0°. Geometrically, both lines have the same slope. The combined equation becomes (√a x + √b y)² = 0 when h = √(ab) with the same sign, or (√a x − √b y)² = 0 when h = −√(ab). Both reduce to a single line repeated — the pair is coincident."
      },
      {
        title: "Slopes of the Lines from Coefficients",
        body: "For ax² + 2hxy + by² = 0 (b ≠ 0), divide by x²: a(y/x)² + 2h(y/x) + b = 0. Let m = y/x be the slope. Then bm² + 2hm + a = 0. The roots m₁ and m₂ are the slopes. Sum of slopes: m₁ + m₂ = −2h/b. Product of slopes: m₁m₂ = a/b. If b = 0, the equation becomes x(ax + 2hy) = 0, giving x = 0 (vertical line) and ax + 2hy = 0. These relations are quick ways to find information without solving fully."
      },
      {
        title: "Finding Separate Lines from Combined Equation",
        body: "Method 1: Treat ax² + 2hxy + by² = 0 as a quadratic in x. Solve for x using the quadratic formula: x = [−2hy ± √(4h²y² − 4aby²)] / (2a) = [−hy ± y√(h² − ab)] / a. This gives x = m₁y and x = m₂y, i.e., two lines through the origin. Method 2: Factor directly if the expression factors nicely. For example, x² + 5xy + 6y² = 0 → (x + 2y)(x + 3y) = 0."
      },
      {
        title: "General Second-Degree Equation",
        body: "The general form is ax² + 2hxy + by² + 2gx + 2fy + c = 0. This represents a pair of straight lines if and only if the determinant condition holds: Δ = abc + 2fgh − af² − bg² − ch² = 0. When this condition is satisfied, the equation represents two lines that intersect at a point (not necessarily the origin). If Δ ≠ 0, it represents a conic (circle, parabola, ellipse, hyperbola) instead."
      },
      {
        title: "Point of Intersection of the Pair",
        body: "When the general equation represents a pair of lines, they intersect at a point P(x₀, y₀). This point is found by solving ∂F/∂x = 0 and ∂F/∂y = 0, where F(x,y) is the general equation. This gives: ax₀ + hy₀ + g = 0 and hx₀ + by₀ + f = 0. Solve for x₀ and y₀. Then shifting the origin to this point converts the equation to the homogeneous form through the transformation x = X + x₀, y = Y + y₀."
      },
      {
        title: "Shifting Origin to Remove Linear Terms",
        body: "Once the point of intersection (x₀, y₀) is found, substitute x = X + x₀, y = Y + y₀ into the general equation. The linear terms (in X and Y) vanish by construction, leaving a homogeneous equation aX² + 2hXY + bY² = 0. This is the pair of lines through the new origin. This transformation simplifies the problem to the homogeneous case we already understand."
      },
      {
        title: "Distance Between Two Parallel Lines",
        body: "If the pair of lines are parallel (h² = ab), the general equation ax² + 2hxy + by² + 2gx + 2fy + c = 0 (with Δ = 0) represents two parallel lines. Their distance can be found by rewriting the equation as two separate parallel line equations and using the distance formula d = |c₁ − c₂| / √(a² + b²). The lines are of the form L₁: lx + my + n₁ = 0 and L₂: lx + my + n₂ = 0."
      },
      {
        title: "Equation of Lines Joining Origin to Intersection Points",
        body: "Given a curve (like a circle or conic) and a line, we can find the equation of the pair of lines joining the origin to the intersection points of the curve and the line. The technique: homogenise the curve equation with the help of the line equation. For example, if a circle x² + y² = r² meets the line lx + my = n, substitute using the line to homogenise the circle equation. The result is a pair of lines through the origin."
      },
      {
        title: "Pair of Lines Through Given Points",
        body: "A pair of lines passing through two given points can be constructed. The combined equation of lines joining the origin to the points of intersection of a given line and a given curve is found by the homogenisation technique. This method is useful for problems where you need to show that certain lines through the origin form a pair with given properties."
      }
    ],
    keyPoints: [
      "Combined equation of two lines L₁ = 0 and L₂ = 0 is L₁L₂ = 0",
      "Homogeneous form ax² + 2hxy + by² = 0 always passes through origin",
      "h² > ab → two distinct real lines; h² = ab → coincident lines; h² < ab → imaginary lines",
      "Angle between lines: tan θ = |2√(h² − ab)| / |a + b|",
      "Lines are perpendicular if and only if a + b = 0",
      "Lines are parallel (or coincident) if and only if h² = ab",
      "Slopes m₁, m₂ satisfy m₁ + m₂ = −2h/b and m₁m₂ = a/b (for b ≠ 0)",
      "To separate lines: solve the quadratic in x or y, or factor directly",
      "General second-degree equation represents a pair of lines iff Δ = 0",
      "Δ = abc + 2fgh − af² − bg² − ch²",
      "Point of intersection of the pair: solve ax + hy + g = 0 and hx + by + f = 0",
      "Shift origin to intersection point to reduce to homogeneous form",
      "Distance between parallel lines: d = |n₁ − n₂| / √(l² + m²)",
      "Homogenisation: turn a curve equation into homogeneous form using a line equation",
      "For perpendicular lines, a + b = 0 regardless of h",
      "If b = 0 in homogeneous form, one line is x = 0 (the y-axis)"
    ],
    importantQuestions: [
      "Show that the equation x² − 5xy + 6y² = 0 represents two distinct lines. Find the angle between them.",
      "Find the combined equation of the lines x + 2y − 3 = 0 and 2x − y + 1 = 0.",
      "If the lines represented by ax² + 2hxy + by² = 0 are perpendicular, prove that a + b = 0.",
      "Find the separate equations of the lines represented by 2x² + 5xy + 3y² = 0.",
      "Show that the equation 2x² + 3xy − 2y² + 3x + y + 1 = 0 represents a pair of lines. Find their point of intersection.",
      "Find the value of k such that the equation x² + kxy − 3y² + 2x + y + 1 = 0 represents a pair of lines.",
      "Find the angle between the lines represented by x² + 2xy sec θ + y² = 0.",
      "The slopes of the lines represented by x² + kxy + y² = 0 are in the ratio 2:3. Find k."
    ]
  },

  "vectors": {
    overview: "Let's talk about vectors. You already know that a quantity like '5 kilograms' just tells you how much. That's a scalar — it has magnitude only. But what about '5 kilometres per hour towards the north'? That's a vector — it has both magnitude AND direction. Vectors are the language of motion, force, and space itself. They're used everywhere — from calculating the trajectory of a rocket to rendering 3D graphics in video games to analysing forces in a bridge. In physics, almost everything interesting is a vector: displacement, velocity, acceleration, force, momentum. In mathematics, vectors let us work in 2D and 3D space in a clean, algebraic way. We start with the basics: what a vector is, how to represent it (as a directed line segment AB or as a position vector using components like 2i + 3j − k), and the different types — zero vector, unit vector, collinear vectors, co-initial vectors, negative vectors, equal vectors, and free vs. localized vectors. Then we learn how to find the magnitude (length) of a vector and its direction cosines. Vector addition is governed by the triangle law and the parallelogram law — both say the same thing in different visual ways. The triangle law: place the tail of the second vector at the head of the first; the resultant goes from the first tail to the second head. The parallelogram law: if two vectors share the same tail, the resultant is the diagonal of the parallelogram they form. Vector addition is commutative (A + B = B + A) and associative. Then there's scalar multiplication — stretching or shrinking a vector by a factor. If the scalar is negative, the direction reverses. The section formula lets you find a point dividing a line segment in a given ratio — both internally and externally. This has direct applications in coordinate geometry. Now, for the really powerful stuff — multiplying vectors. There are two ways to multiply vectors, and they give completely different results. The dot product (scalar product) A·B = |A||B|cos θ gives a scalar. It tells you how much one vector goes in the direction of another. If A and B are perpendicular, A·B = 0. If they're parallel, A·B = |A||B|. The dot product in component form is a₁b₁ + a₂b₂ + a₃b₃. It's used to find the angle between vectors, to check perpendicularity, and to find the projection of one vector onto another. The cross product (vector product) A × B = |A||B|sin θ n̂ gives a VECTOR that is perpendicular to both A and B. Its magnitude is the area of the parallelogram formed by A and B. The direction is given by the right-hand rule — curl your fingers from A to B, and your thumb points the way. In component form, it's the determinant of a 3×3 matrix. If A and B are parallel, A × B = 0. The cross product is anti-commutative: A × B = −(B × A). Then there's the scalar triple product [A B C] = A·(B × C). This gives the volume of the parallelepiped formed by the three vectors. If [A B C] = 0, the three vectors are coplanar — they lie in the same plane. This is a crucial test for coplanarity. There's also the vector triple product A × (B × C) = (A·C)B − (A·B)C, which has its own applications. By the end of this chapter, vectors will feel like second nature. You'll be able to add, subtract, dot, cross, and triple-product your way through any 2D or 3D geometry problem. And you'll appreciate how vectors simplify things that would be incredibly messy with coordinates alone.",
    concepts: [
      {
        title: "What Is a Vector? — Representation and Notation",
        body: "A vector is a quantity with both magnitude and direction. Represent it as a directed line segment: AB (from A to B, with A as tail and B as head). The magnitude is written as |AB|. A position vector gives the coordinates of a point relative to the origin: OP = xi + yj + zk, where i, j, k are unit vectors along the x, y, z axes. Two vectors are equal if they have the same magnitude AND direction — location doesn't matter."
      },
      {
        title: "Types of Vectors",
        body: "Zero vector (0): magnitude 0, no direction. Unit vector (â): magnitude 1, direction of a. A unit vector in the direction of A is Â = A/|A|. Collinear (parallel) vectors: same or opposite direction. Co-initial vectors: share the same tail. Negative vector of A: same magnitude, opposite direction. Free vector: can be moved parallel to itself (location doesn't matter). Localized vector: fixed at a specific point."
      },
      {
        title: "Magnitude and Direction Cosines",
        body: "The magnitude of a vector A = a₁i + a₂j + a₃k is |A| = √(a₁² + a₂² + a₃²). Direction cosines are the cosines of the angles α, β, γ that the vector makes with the x, y, z axes: l = cos α = a₁/|A|, m = cos β = a₂/|A|, n = cos γ = a₃/|A|. Property: l² + m² + n² = 1. Direction ratios are any three numbers proportional to (l, m, n)."
      },
      {
        title: "Vector Addition — Triangle and Parallelogram Laws",
        body: "Triangle law: to add A and B, place B's tail at A's head. The resultant R = A + B goes from A's tail to B's head. Parallelogram law: place A and B tail-to-tail. Complete the parallelogram — the diagonal from the common tail is R = A + B. Properties: commutative (A + B = B + A), associative (A + (B + C) = (A + B) + C), identity (A + 0 = A), inverse (A + (−A) = 0)."
      },
      {
        title: "Scalar Multiplication of Vectors",
        body: "Multiplying a vector A by a scalar k gives kA. If k > 0, direction is same as A; if k < 0, direction is opposite. Magnitude becomes |k|·|A|. Properties: k(A + B) = kA + kB, (k₁ + k₂)A = k₁A + k₂A, (k₁k₂)A = k₁(k₂A), 1·A = A, (−1)·A = −A. Scalar multiplication is how we stretch, shrink, or reverse vectors."
      },
      {
        title: "Position Vectors and Section Formula",
        body: "Position vector of point P is OP = p = xi + yj + zk. The vector from A to B is AB = b − a (head − tail). Section formula: if point R divides AB in ratio m:n internally, then r = (mb + na)/(m + n). For external division in ratio m:n, r = (mb − na)/(m − n). If R is the midpoint, r = (a + b)/2. This is the vector version of the coordinate section formula."
      },
      {
        title: "Dot Product (Scalar Product)",
        body: "A·B = |A||B|cos θ, where θ is the angle between A and B. The result is a SCALAR. In components: A·B = a₁b₁ + a₂b₂ + a₃b₃. Properties: commutative (A·B = B·A), distributive (A·(B + C) = A·B + A·C), k(A·B) = (kA)·B = A·(kB). If A·B = 0, A and B are perpendicular. A·A = |A|². i·i = j·j = k·k = 1, i·j = j·k = k·i = 0."
      },
      {
        title: "Projection of a Vector",
        body: "The scalar projection of A onto B is the length of A's shadow on B: comp_B A = (A·B)/|B|. The vector projection of A onto B is the actual vector component of A along B: proj_B A = ((A·B)/|B|²) B. The component of A perpendicular to B is A − proj_B A. These are used to decompose vectors into parallel and perpendicular parts relative to a direction."
      },
      {
        title: "Angle Between Two Vectors Using Dot Product",
        body: "From the dot product formula: cos θ = (A·B) / (|A||B|). This is the standard way to find the angle between any two vectors in 2D or 3D. If cos θ = 1, vectors are parallel and same direction. cos θ = −1 means opposite directions. cos θ = 0 means perpendicular. This formula works for any number of dimensions."
      },
      {
        title: "Cross Product (Vector Product)",
        body: "A × B = |A||B|sin θ n̂, where n̂ is a unit vector perpendicular to both A and B (direction by right-hand rule). The result is a VECTOR. Magnitude = area of parallelogram with sides A and B. In components: A × B = |i j k; a₁ a₂ a₃; b₁ b₂ b₃| = (a₂b₃ − a₃b₂)i + (a₃b₁ − a₁b₃)j + (a₁b₂ − a₂b₁)k. Properties: anti-commutative (A × B = −B × A), distributive, not associative. A × A = 0. i × j = k, j × k = i, k × i = j."
      },
      {
        title: "Area Using Cross Product",
        body: "Area of parallelogram formed by A and B = |A × B|. Area of triangle with sides A and B = ½|A × B|. For a triangle with vertices P, Q, R: area = ½|PQ × PR|. The cross product is the most direct way to compute areas in 3D space without having to find heights and bases."
      },
      {
        title: "Scalar Triple Product",
        body: "[A B C] = A·(B × C). This is a SCALAR. Geometric meaning: it's the volume of the parallelepiped formed by A, B, C. In components: [A B C] = det([a₁ a₂ a₃; b₁ b₂ b₃; c₁ c₂ c₃]). Properties: cyclic permutations don't change the value: [A B C] = [B C A] = [C A B]. Swapping two vectors flips the sign: [A B C] = −[B A C]. [A B C] = 0 iff A, B, C are coplanar."
      },
      {
        title: "Coplanarity Test Using Scalar Triple Product",
        body: "Three vectors A, B, C are coplanar if and only if [A B C] = 0. For four points P, Q, R, S to be coplanar, the vectors PQ, PR, PS must satisfy [PQ PR PS] = 0. This is the most efficient way to test coplanarity — one scalar calculation instead of trying to find a plane equation and checking if the point lies on it."
      },
      {
        title: "Vector Triple Product",
        body: "A × (B × C) = (A·C)B − (A·B)C. Note the pattern: it's the middle vector (B) times the dot product of the outer two (A·C), minus the third vector (C) times the dot product of the other pair (A·B). The result lies in the plane of B and C. This is used in physics (e.g., deriving centripetal acceleration formula) and in simplifying complex vector expressions."
      },
      {
        title: "Linear Combination of Vectors",
        body: "A vector R can be expressed as a linear combination of vectors A, B, C if R = xA + yB + zC for some scalars x, y, z. If A, B, C are non-coplanar, any vector in space can be expressed uniquely as a linear combination of them. This is the vector equivalent of having a basis — like i, j, k forming a basis for 3D space."
      }
    ],
    keyPoints: [
      "Vector = magnitude + direction; Scalar = magnitude only",
      "Position vector of point P(x,y,z): p = xi + yj + zk",
      "AB = b − a (head minus tail); |AB| = distance between A and B",
      "Unit vector in direction of a: â = a/|a|",
      "Triangle law: AB + BC = AC; Parallelogram law: diagonal from common tail",
      "Section formula (internal): r = (mb + na)/(m + n); midpoint: r = (a + b)/2",
      "Dot product A·B = |A||B|cos θ = a₁b₁ + a₂b₂ + a₃b₃ — result is SCALAR",
      "A·B = 0 ⇔ A ⟂ B (perpendicular vectors)",
      "Cross product A×B = |A||B|sin θ n̂ — result is VECTOR perpendicular to both",
      "A×B = 0 ⇔ A ∥ B (parallel vectors)",
      "Area of parallelogram = |A×B|; area of triangle = ½|A×B|",
      "Scalar triple product [A B C] = A·(B×C) = volume of parallelepiped",
      "[A B C] = 0 ⇔ A, B, C are coplanar",
      "Vector triple product: A×(B×C) = (A·C)B − (A·B)C",
      "Direction cosines l, m, n satisfy l² + m² + n² = 1",
      "i·i = j·j = k·k = 1; i×j = k, j×k = i, k×i = j",
      "Three non-coplanar vectors form a basis for 3D space"
    ],
    importantQuestions: [
      "If A = 2i + 3j − k and B = i − j + 2k, find A·B, A×B, and the angle between A and B.",
      "Find the area of the triangle with vertices P(1,2,3), Q(2,3,1), and R(3,1,2).",
      "Show that the vectors A = i + 2j + 3k, B = 2i + 3j − 4k, and C = 3i + 5j − k are coplanar.",
      "Prove that [A B C] = [B C A] = [C A B].",
      "Find the projection of vector A = 2i + 3j + k on vector B = i + 2j − 2k.",
      "If a = 2i + 3j − k, b = i − 2j + 3k, and c = −i + j + 2k, find the volume of the parallelepiped formed by a, b, c.",
      "Find the vector of magnitude 5 in the direction opposite to A = 2i + 3j − 6k.",
      "Using vectors, prove that the medians of a triangle are concurrent."
    ]
  },

  "3d-geometry": {
    overview: "You've spent years doing geometry in two dimensions — plotting points on x and y axes, finding distances, slopes, and equations of lines. But the world we live in is three-dimensional. This chapter is your passport to working in 3D space. Every point now has three coordinates (x, y, z), and lines have direction in all three dimensions. This is the geometry behind 3D movies, GPS navigation, flight paths, architectural blueprints, and even the way your phone tracks its orientation in space. We start with the basics of the 3D coordinate system. There are three mutually perpendicular axes — X, Y, and Z — meeting at the origin. The space is divided into 8 octants (like quadrants in 2D, but now we have up and down too). The coordinates of a point P are (x, y, z) — the distances along the three axes. The distance between two points P(x₁, y₁, z₁) and Q(x₂, y₂, z₂) is √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²) — it's just the 2D distance formula with z added. The section formula extends naturally too: if R divides PQ internally in ratio m:n, then R = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n), (mz₂ + nz₁)/(m+n)). The midpoint is the special case with m = n. Next come direction cosines and direction ratios — these describe which way a line points. Direction cosines (l, m, n) are the cosines of the angles that the line makes with the X, Y, and Z axes. They satisfy the identity l² + m² + n² = 1. Direction ratios (a, b, c) are any three numbers proportional to (l, m, n). They're easier to find — you just take the differences in coordinates between two points on the line. To convert direction ratios to direction cosines: divide each by √(a² + b² + c²). Then we learn how to write the equation of a line in 3D space. In vector form, r = a + λb, where a is the position vector of a point on the line and b is the direction vector. In Cartesian (symmetric) form, (x − x₁)/a = (y − y₁)/b = (z − z₁)/c = λ. Each value of λ gives a different point on the line. The parametric form writes x = x₁ + aλ, y = y₁ + bλ, z = z₁ + cλ — useful for finding specific points. You'll learn to find the angle between two lines using their direction cosines (cos θ = l₁l₂ + m₁m₂ + n₁n₂) or direction ratios (cos θ = |a₁a₂ + b₁b₂ + c₁c₂| / √((a₁²+b₁²+c₁²)(a₂²+b₂²+c₂²))). If the numerator is zero, the lines are perpendicular. If the direction ratios are proportional, they're parallel. We also cover conditions for a point to lie on a line, and how to find the distance of a point from a line using cross product. Finally, we tackle skew lines — lines that are neither parallel nor intersecting. They exist in different planes. The shortest distance between two skew lines is the length of the common perpendicular. The formula uses the scalar triple product: SD = |(a₂ − a₁)·(b₁ × b₂)| / |b₁ × b₂|. This is the distance between the two lines at their closest approach. By the end of this chapter, you'll be comfortable navigating 3D space and describing lines in multiple equivalent forms. The skills here feed directly into the next chapter on line and plane, where we add planes to the mix.",
    concepts: [
      {
        title: "The 3D Coordinate System",
        body: "Three mutually perpendicular axes — X (horizontal, left-right), Y (horizontal, forward-backward), Z (vertical, up-down) — intersect at the origin O(0,0,0). These axes divide space into 8 octants. A point P(x, y, z) has x-coordinate (distance from YZ-plane), y-coordinate (distance from XZ-plane), and z-coordinate (distance from XY-plane). The sign of each coordinate determines which octant the point lies in."
      },
      {
        title: "Distance Formula in 3D",
        body: "The distance between two points P(x₁, y₁, z₁) and Q(x₂, y₂, z₂) is PQ = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²). This is derived by applying the 2D distance formula twice — first to find the distance in the XY-plane, then incorporating the Z difference. It's the same formula you know, just with a third term added under the square root."
      },
      {
        title: "Section Formula in 3D",
        body: "If point R divides PQ internally in ratio m:n, the coordinates of R are ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n), (mz₂ + nz₁)/(m+n)). For external division: ((mx₂ − nx₁)/(m−n), (my₂ − ny₁)/(m−n), (mz₂ − nz₁)/(m−n)). For the midpoint (m = n): ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2). This is a direct extension of the 2D section formula."
      },
      {
        title: "Direction Cosines of a Line",
        body: "A line making angles α, β, γ with the positive X, Y, Z axes has direction cosines l = cos α, m = cos β, n = cos γ. Fundamental identity: l² + m² + n² = 1. Direction cosines uniquely determine a line's direction (not its sense — opposite direction gives cos(π−α) = −l, etc.). If a line passes through P and Q, then l = (x₂−x₁)/PQ, m = (y₂−y₁)/PQ, n = (z₂−z₁)/PQ."
      },
      {
        title: "Direction Ratios of a Line",
        body: "Direction ratios (a, b, c) are any three numbers proportional to (l, m, n). If a line passes through P(x₁, y₁, z₁) and Q(x₂, y₂, z₂), then a = x₂−x₁, b = y₂−y₁, c = z₂−z₁ (or any multiples). To convert ratios to cosines: l = a/√(a²+b²+c²), m = b/√(a²+b²+c²), n = c/√(a²+b²+c²). Direction ratios are easier to work with because they don't require the actual distance."
      },
      {
        title: "Equation of a Line — Vector Form",
        body: "A line is determined by a point and a direction. Vector form: r = a + λb, where a is the position vector of a known point on the line, b is the direction vector (parallel to the line), and λ is a parameter (real number). Each value of λ gives a different point on the line. For λ = 0, r = a (the given point). This is the most compact form of a line equation."
      },
      {
        title: "Equation of a Line — Cartesian (Symmetric) Form",
        body: "Starting from r = a + λb with a = (x₁, y₁, z₁) and b = (a, b, c), we get x = x₁ + aλ, y = y₁ + bλ, z = z₁ + cλ. Eliminating λ gives (x − x₁)/a = (y − y₁)/b = (z − z₁)/c = λ. This is the symmetric form. If any direction ratio is zero, say b = 0, the equation becomes (x − x₁)/a = (z − z₁)/c, y = y₁. This form is used when you need to find the equation of a line through two given points."
      },
      {
        title: "Equation of a Line Through Two Points",
        body: "If a line passes through P(x₁, y₁, z₁) and Q(x₂, y₂, z₂), the direction ratios are (x₂−x₁, y₂−y₁, z₂−z₁). The symmetric form is (x−x₁)/(x₂−x₁) = (y−y₁)/(y₂−y₁) = (z−z₁)/(z₂−z₁). The vector form is r = a + λ(b − a), where a is P and b is Q. You can also write r = (1−λ)a + λb, which is the two-point form."
      },
      {
        title: "Angle Between Two Lines",
        body: "The angle θ between two lines with direction cosines (l₁, m₁, n₁) and (l₂, m₂, n₂) is given by cos θ = l₁l₂ + m₁m₂ + n₁n₂. For direction ratios (a₁, b₁, c₁) and (a₂, b₂, c₂): cos θ = (a₁a₂ + b₁b₂ + c₁c₂) / √((a₁²+b₁²+c₁²)(a₂²+b₂²+c₂²)). Lines are perpendicular if cos θ = 0 (numerator = 0). Lines are parallel if direction ratios are proportional."
      },
      {
        title: "Collinearity of Three Points in 3D",
        body: "Three points P, Q, R are collinear if they lie on the same line. This happens if the direction ratios of PQ and PR are proportional. That is, (x₂−x₁)/(x₃−x₁) = (y₂−y₁)/(y₃−y₁) = (z₂−z₁)/(z₃−z₁). Alternatively, the area of triangle PQR should be zero (cross product of PQ and PR is zero). Collinearity also means one point's position vector can be expressed as a linear combination of the other two."
      },
      {
        title: "Distance of a Point from a Line",
        body: "To find the perpendicular distance from a point R to a line through P with direction b, use cross product: distance = |(PR) × b| / |b|. This is the area of the parallelogram formed by PR and b divided by the length of b. Alternatively, find the foot of the perpendicular by projecting R onto the line and then compute the distance between R and its foot."
      },
      {
        title: "Skew Lines — Definition and Condition",
        body: "Skew lines are lines that are NOT parallel and do NOT intersect. They lie in different planes. Two lines with direction vectors b₁ and b₂ are skew if: (1) b₁ is not parallel to b₂ (ratios not proportional), and (2) the lines don't intersect (no common point). The condition for intersecting lines: there exist λ, μ such that a₁ + λb₁ = a₂ + μb₂. If no solution exists, the lines are skew."
      },
      {
        title: "Shortest Distance Between Two Skew Lines",
        body: "The shortest distance (SD) between two skew lines r = a₁ + λb₁ and r = a₂ + μb₂ is the length of the common perpendicular. Formula: SD = |(a₂ − a₁)·(b₁ × b₂)| / |b₁ × b₂|. This is the projection of the vector joining a point on each line onto the direction perpendicular to both lines. The scalar triple product in the numerator gives the volume, dividing by |b₁×b₂| gives the height."
      },
      {
        title: "Distance Between Parallel Lines",
        body: "For two parallel lines with direction b, one through point A and the other through point B, the distance between them is: d = |AB × b| / |b|. This is the same as the distance of point B from the first line. Since the lines are parallel, the perpendicular distance is constant everywhere — so just pick any point on one line and find its distance from the other line."
      }
    ],
    keyPoints: [
      "3D coordinates: P(x, y, z) — distances from YZ, XZ, XY planes respectively",
      "Distance between P and Q: √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²)",
      "Section formula (internal): R = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n))",
      "Direction cosines l, m, n satisfy l² + m² + n² = 1",
      "Direction ratios (a, b, c) are proportional to (l, m, n)",
      "Line (vector): r = a + λb; Line (Cartesian): (x−x₁)/a = (y−y₁)/b = (z−z₁)/c",
      "Line through two points P, Q: (x−x₁)/(x₂−x₁) = (y−y₁)/(y₂−y₁) = (z−z₁)/(z₂−z₁)",
      "Angle between lines: cos θ = l₁l₂ + m₁m₂ + n₁n₂",
      "Lines perpendicular iff l₁l₂ + m₁m₂ + n₁n₂ = 0",
      "Lines parallel iff direction ratios are proportional",
      "Collinearity: PR is proportional to PQ for three collinear points",
      "Distance from point to line: d = |PR × b| / |b|",
      "Skew lines: not parallel, not intersecting — no common solution",
      "Shortest distance between skew lines: SD = |(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|",
      "Distance between parallel lines: d = |AB × b| / |b|",
      "In symmetric form, each ratio equals the same parameter λ"
    ],
    importantQuestions: [
      "Find the direction cosines of the line joining the points (1, 2, 3) and (4, 5, 6).",
      "Find the equation of the line through (2, 3, −1) with direction ratios (3, 2, 4) in both vector and Cartesian form.",
      "Show that the lines (x−1)/2 = (y+1)/3 = (z−2)/4 and (x−3)/4 = (y−2)/6 = (z−1)/8 are parallel.",
      "Find the angle between the lines whose direction ratios are (1, 2, 2) and (2, 3, 6).",
      "Find the shortest distance between the lines r = i + j + λ(2i − j + k) and r = 2i + j − k + μ(3i − 5j + 2k).",
      "Find the distance of the point (2, 3, 4) from the line (x−1)/2 = (y−2)/3 = (z−3)/4.",
      "Show that the points A(1, 2, 3), B(3, 5, 7), and C(5, 8, 11) are collinear.",
      "Find the foot of the perpendicular from (1, 2, 3) to the line (x−2)/3 = (y−3)/4 = (z−4)/5."
    ]
  },

  "line-plane": {
    overview: "We just learned how to describe lines in 3D. Now let's add planes into the mix. Planes are flat surfaces that extend infinitely — think of a tabletop, a wall, or the surface of water. And when lines and planes interact, we get interesting questions: where does a line pierce through a plane? What's the angle between a line and a plane? How far is a point from a plane? What about the line where two planes intersect? This chapter answers all of these questions and more. It's the geometry of how things meet in 3D space, and it's used in everything from architectural design to computer graphics to calculating satellite orbits. We start with the equation of a plane. The simplest form is the vector equation: r·n = d, where n is a vector perpendicular to the plane (the normal vector) and d is a constant. In Cartesian form, this becomes ax + by + cz = d, where the coefficients (a, b, c) are the components of the normal vector. If d = 0, the plane passes through the origin. There's also the normal form: r·n̂ = p, where n̂ is a unit normal and p is the perpendicular distance from the origin to the plane. And the intercept form: x/a + y/b + z/c = 1, where a, b, c are the x, y, z intercepts respectively. Each form is useful in different situations. Next, we learn how to find the equation of a plane under different conditions. A unique plane is determined by: (i) a point and a normal vector, (ii) three non-collinear points, (iii) a line and a point not on the line, or (iv) two intersecting lines. For three points, find two vectors in the plane, take their cross product to get the normal, then plug a point into r·n = d. For a line and a point, take the direction of the line and the vector from a point on the line to the given point, cross them to get the normal. Then we tackle angles. The angle between two planes is simply the angle between their normal vectors: cos θ = |n₁·n₂| / (|n₁||n₂|). If n₁·n₂ = 0, the planes are perpendicular. If n₁ and n₂ are parallel, the planes are parallel. For the angle between a line and a plane, we take the complement of the angle between the line and the normal: sin φ = |b·n| / (|b||n|), where b is the line's direction and n is the plane's normal. The distance of a point from a plane has a clean formula: d = |ax₁ + by₁ + cz₁ − d| / √(a² + b² + c²). This is the perpendicular distance — plug the point into the plane equation, take absolute value, divide by the normal vector's magnitude. For two parallel planes, the distance between them is the difference of their d-values divided by the normal magnitude. We also cover the intersection of two planes. Two non-parallel planes always intersect in a straight line. The direction of this line is n₁ × n₂ (perpendicular to both normals). To find a point on the line, set one variable (like z) to 0 and solve the two plane equations. Once you have a point and a direction, you have the line. Finally, we look at coplanarity of lines — whether two lines lie in the same plane. Two lines are coplanar if the scalar triple product (a₂ − a₁)·(b₁ × b₂) = 0, where a₁, a₂ are points on the lines and b₁, b₂ are their directions. If this is zero, they either intersect or are parallel — both are coplanar. If non-zero, they're skew (covered in the 3D geometry chapter). By the end of this chapter, you'll be able to write plane equations from any given data, find intersections and angles involving planes, and solve problems that combine lines and planes in 3D space.",
    concepts: [
      {
        title: "Equation of a Plane — Normal Form",
        body: "The vector form of a plane is r·n = d, where n is the normal vector (perpendicular to the plane) and d is a constant. The Cartesian form is ax + by + cz = d, where n = (a, b, c). The normal form is r·n̂ = p, where n̂ is a unit normal and p is the perpendicular distance from the origin to the plane. If d > 0, the origin is on the opposite side of the plane from the direction of n."
      },
      {
        title: "Equation of a Plane — Intercept Form",
        body: "If a plane cuts the X-axis at a, Y-axis at b, and Z-axis at c (where a, b, c are the intercepts), the equation is x/a + y/b + z/c = 1. This is called the intercept form. It's the fastest way to write a plane equation if you know where it meets each axis. The intercepts can be positive or negative depending on which side of the origin the plane lies on."
      },
      {
        title: "Plane Through a Given Point with Given Normal",
        body: "If a plane passes through point A with position vector a and has normal vector n, its equation is (r − a)·n = 0, or r·n = a·n. In Cartesian: a(x − x₁) + b(y − y₁) + c(z − z₁) = 0, where (x₁, y₁, z₁) is the point and (a, b, c) is the normal. This expands to ax + by + cz = ax₁ + by₁ + cz₁."
      },
      {
        title: "Plane Through Three Non-Collinear Points",
        body: "Three non-collinear points P, Q, R determine a unique plane. Find two vectors in the plane: PQ = q − p and PR = r − p. The normal is n = PQ × PR (cross product). Then the equation is (r − p)·n = 0. In determinant form: |x−x₁ y−y₁ z−z₁; x₂−x₁ y₂−y₁ z₂−z₁; x₃−x₁ y₃−y₁ z₃−z₁| = 0. This determinant condition is equivalent to the scalar triple product being zero."
      },
      {
        title: "Plane Through a Line and a Point",
        body: "Given a line r = a₁ + λb and a point A (not on the line), the plane containing them has normal n = b × (a − a₁) (the cross product of the line's direction and the vector from a point on the line to A). Then the plane equation is (r − a₁)·n = 0 or (r − a)·n = 0. This works because the plane must contain both the line's direction and the point."
      },
      {
        title: "Plane Through Two Intersecting Lines",
        body: "If two lines intersect (share a common point), the plane containing them has normal n = b₁ × b₂ (cross product of their direction vectors). Then use any point common to both lines (the intersection point) to complete the equation: (r − a)·n = 0, where a is the intersection point. If the lines don't intersect but are parallel, they still determine a plane (the normal is b × (a₂ − a₁))."
      },
      {
        title: "Angle Between Two Planes",
        body: "The acute angle θ between two planes equals the angle between their normal vectors. If plane 1 has normal n₁ and plane 2 has normal n₂: cos θ = |n₁·n₂| / (|n₁||n₂|). Planes are perpendicular if n₁·n₂ = 0. Planes are parallel if n₁ is parallel to n₂ (i.e., n₁ = kn₂). Planes are coincident if they're parallel and have the same d value (same equation or multiples)."
      },
      {
        title: "Parallel and Perpendicular Planes — Conditions",
        body: "Two planes a₁x + b₁y + c₁z = d₁ and a₂x + b₂y + c₂z = d₂ are parallel if (a₁, b₁, c₁) is proportional to (a₂, b₂, c₂). They're perpendicular if a₁a₂ + b₁b₂ + c₁c₂ = 0. If they're parallel with d₁ = kd₂ (same proportionality constant as the normals), they're coincident — essentially the same plane. If d₁ ≠ kd₂, they're distinct parallel planes."
      },
      {
        title: "Angle Between a Line and a Plane",
        body: "If a line with direction vector b intersects a plane with normal n, the angle φ between them is the complement of the angle between b and n. Formula: sin φ = |b·n| / (|b||n|). Why sine? Because when the line is parallel to the plane (b ⟂ n, so b·n = 0), the angle is 0° (sin 0 = 0). When the line is perpendicular to the plane (b ∥ n), the angle is 90° (sin 90° = 1)."
      },
      {
        title: "Distance of a Point from a Plane",
        body: "The perpendicular distance from point P(x₁, y₁, z₁) to the plane ax + by + cz = d is: distance = |ax₁ + by₁ + cz₁ − d| / √(a² + b² + c²). The numerator is plugging the point into the plane equation and taking absolute value. The denominator is the magnitude of the normal. If the point is on the plane, the numerator is 0. This is one of the handiest formulas in the chapter."
      },
      {
        title: "Distance Between Two Parallel Planes",
        body: "For two parallel planes ax + by + cz = d₁ and ax + by + cz = d₂ (same normal coefficients), the distance between them is: d = |d₁ − d₂| / √(a² + b² + c²). This is just the difference in the constants divided by the normal magnitude. If the normals are proportional but not identical, first multiply one equation to make the normals equal, then apply the formula."
      },
      {
        title: "Line of Intersection of Two Planes",
        body: "Two non-parallel planes intersect in a straight line. The direction of this line is perpendicular to both normals: b = n₁ × n₂. To find a point on the line, set one coordinate (say z = 0) and solve the two plane equations for x and y. Then the line is r = (x₀, y₀, 0) + λ(n₁ × n₂). If setting z = 0 doesn't work (planes parallel to z-axis), try setting x = 0 or y = 0."
      },
      {
        title: "Coplanarity of Two Lines",
        body: "Two lines r = a₁ + λb₁ and r = a₂ + μb₂ are coplanar (lie in the same plane) if and only if (a₂ − a₁)·(b₁ × b₂) = 0. This is the scalar triple product condition. If zero, the lines either intersect or are parallel — both cases are coplanar. If non-zero, the lines are skew (not coplanar). This condition is the 3D equivalent of having two lines in the same plane in 2D."
      },
      {
        title: "Foot of the Perpendicular from a Point to a Plane",
        body: "To find the foot of the perpendicular from a point A(x₁, y₁, z₁) to the plane ax + by + cz = d: the line through A perpendicular to the plane has direction (a, b, c). Write the line parametically: (x₁ + aλ, y₁ + bλ, z₁ + cλ). Substitute into the plane equation to find λ. Then plug λ back to get the foot coordinates. The distance is then |λ|√(a²+b²+c²)."
      },
      {
        title: "Image of a Point in a Plane",
        body: "The image of point A in (reflection across) a plane is the point A' such that the plane is the perpendicular bisector of AA'. Find the foot M of the perpendicular from A to the plane. Then A' = 2M − A (vector form). In coordinates: if M is the midpoint of AA', then the image coordinates are (2xₘ − x₁, 2yₘ − y₁, 2zₘ − z₁). This is useful in optics and geometry problems."
      }
    ],
    keyPoints: [
      "Plane (vector): r·n = d; Plane (Cartesian): ax + by + cz = d — (a,b,c) is the normal",
      "Intercept form: x/a + y/b + z/c = 1 — a, b, c are axis intercepts",
      "Plane through point with normal n: (r − a)·n = 0",
      "Plane through three points: PQ × PR gives the normal",
      "Angle between two planes = angle between normals: cos θ = |n₁·n₂| / (|n₁||n₂|)",
      "Planes are parallel if normals are proportional; perpendicular if n₁·n₂ = 0",
      "Angle between line and plane: sin φ = |b·n| / (|b||n|)",
      "Distance from point to plane: d = |ax₁ + by₁ + cz₁ − d| / √(a² + b² + c²)",
      "Distance between parallel planes: d = |d₁ − d₂| / √(a² + b² + c²)",
      "Intersection of two planes: direction b = n₁ × n₂; find a point by setting one variable to 0",
      "Two lines are coplanar if (a₂ − a₁)·(b₁ × b₂) = 0",
      "Foot of perpendicular: write line through point along normal, substitute into plane",
      "Image of point in plane: find foot M, then A' = 2M − A",
      "A plane is uniquely determined by: 3 points, or 1 point + 1 normal, or 1 line + 1 point, or 2 intersecting lines"
    ],
    importantQuestions: [
      "Find the equation of the plane passing through (1, 2, 3) and perpendicular to the line with direction ratios (2, −1, 3).",
      "Find the angle between the planes 2x + 3y − z = 5 and x − 2y + 3z = 7.",
      "Find the distance of the point (1, −2, 3) from the plane 2x − 3y + 6z = 14.",
      "Find the equation of the line of intersection of the planes x + y + z = 1 and 2x − y + 3z = 4.",
      "Find the angle between the line (x−1)/2 = (y+2)/3 = (z−3)/4 and the plane 3x + 4y − 5z = 7.",
      "Find the distance between the parallel planes 2x + 3y − z = 5 and 2x + 3y − z = 12.",
      "Show that the lines (x−1)/2 = (y−2)/3 = (z−3)/4 and (x−4)/5 = (y−1)/2 = z/1 are coplanar.",
      "Find the image of the point (1, 2, 3) in the plane x + 2y + 3z = 10."
    ]
  },

  "linear-programming": {
    overview: "Imagine you're running a small factory. You have limited raw materials, limited machine hours, and limited labour. You make two products, each with different profit margins. How many of each should you produce to maximise your profit? That's a Linear Programming Problem (LPP), and it's one of the most practical applications of mathematics in the business world. Linear programming is used by companies to optimise supply chains, by airlines to schedule flights, by investment firms to balance portfolios, and even by sports teams to allocate training resources. It's all about making the best possible decision given a set of constraints. The word 'linear' means everything is a straight line — no curves, no squares, no complicated functions. Just nice, simple linear relationships. An LPP has three essential components: decision variables (what you can control — like how many units to produce), an objective function (what you want to maximise or minimise — like profit or cost), and constraints (the limits you have to work within — like time, money, or materials). Plus, there are always non-negativity constraints: you can't produce negative quantities. The standard form of an LPP is: optimise Z = c₁x₁ + c₂x₂ + ... subject to a₁₁x₁ + a₁₂x₂ ≤ b₁, a₂₁x₁ + a₂₂x₂ ≤ b₂, ..., and x₁, x₂ ≥ 0. All constraints are linear inequalities. The first step in solving any LPP is formulating it — translating a word problem into mathematical expressions. This means identifying the decision variables, writing the objective function, and listing all constraints. This is often the hardest part for students, but it's just pattern recognition. Look for keywords: 'maximise' or 'minimise', 'at least' (≥), 'at most' (≤), 'not more than' (≤), 'not less than' (≥). Once you have the mathematical formulation, you solve it using the graphical method. The graphical method works when you have two decision variables (x and y) because we can draw the constraints on a 2D graph. Each constraint is a straight line, and the inequality tells you which side of the line is valid. The region where ALL constraints are satisfied simultaneously is called the feasible region — it's usually a polygon (convex polygon, to be exact). The key theorem of linear programming states that the optimal solution (maximum or minimum of Z) lies at one of the vertices (corner points) of the feasible region. So you don't need to check every point inside — just the corners. The corner point method: (1) find all corner points of the feasible region, (2) evaluate the objective function Z at each corner, (3) pick the corner with the largest Z (for maximisation) or smallest Z (for minimisation). That corner gives the optimal values of x and y, and the corresponding Z is the optimal value. Sometimes, the optimal solution isn't unique. If the objective function line is parallel to one of the constraint boundaries, then every point on that entire edge is optimal — giving multiple optimal solutions. Sometimes the feasible region is unbounded (goes on forever in some direction). In that case, a maximum might not exist (Z keeps increasing), but a minimum usually does. And sometimes the constraints contradict each other, giving an empty feasible region — in which case no solution exists (infeasible problem). By the end of this chapter, you'll be able to take any real-world optimisation problem with two variables, formulate it mathematically, graph the constraints, and find the optimal solution. Linear programming is one of those rare maths topics where what you learn in class directly applies to real business and engineering decisions.",
    concepts: [
      {
        title: "What Is Linear Programming?",
        body: "Linear Programming is a mathematical method for determining the best possible outcome (maximum profit, minimum cost) under given constraints. 'Linear' means all relationships are straight-line equations/inequalities. 'Programming' refers to planning, not computer programming — though it's used extensively in software optimisation today. An LPP always involves optimising a linear objective function subject to linear equality or inequality constraints."
      },
      {
        title: "Components of an LPP",
        body: "Every LPP has: (1) Decision variables — the quantities we can control (usually x, y). (2) Objective function — the linear function Z = c₁x + c₂y that we want to maximise or minimise. (3) Constraints — linear inequalities that limit the decision variables (like x + 2y ≤ 100). (4) Non-negativity constraints — x ≥ 0, y ≥ 0 (negative quantities don't make sense in most real problems). These four components define any LPP."
      },
      {
        title: "Formulating an LPP from a Word Problem",
        body: "This is the translation step. Step 1: Identify the decision variables. Look for what the problem asks 'how many' of. Step 2: Write the objective function. Look for 'maximise profit' or 'minimise cost'. Step 3: Identify all constraints. Look for resource limits — 'not more than', 'at most', 'limited to', 'at least'. Step 4: Add x ≥ 0, y ≥ 0. Practice is the only way to get good at this — there's no shortcut."
      },
      {
        title: "Types of Constraints — ≤, ≥, and =",
        body: "Constraints come as inequalities. ≤ means 'at most', 'not exceeding', 'cannot exceed', 'maximum'. ≥ means 'at least', 'minimum required', 'not less than'. = means 'exactly equal to'. Most business problems use ≤ constraints (resource limits) and ≥ constraints (minimum requirements). A mix is common. In the graphical method, each constraint is drawn as a line, and the inequality determines which half-plane is feasible."
      },
      {
        title: "Feasible Region and Feasible Solutions",
        body: "The feasible region is the set of all points (x, y) that satisfy ALL constraints simultaneously. It's the intersection of all half-planes defined by the constraints. The feasible region is always a convex polygon (or possibly unbounded). Any point in this region is a feasible solution — it satisfies all constraints but may not be optimal. Points outside are infeasible — they violate at least one constraint."
      },
      {
        title: "Convexity of the Feasible Region",
        body: "The feasible region of an LPP is always convex. Convex means: if you take any two points in the region, the entire line segment joining them also lies in the region. This property is why the optimal solution always occurs at a vertex (corner point). Non-convex regions would allow optimal solutions inside, but linear constraints always produce convex regions — that's the beauty of linear programming."
      },
      {
        title: "The Corner Point Theorem",
        body: "This is the most important theorem in linear programming: if an LPP has an optimal solution, it occurs at one of the vertices (corner points) of the feasible region. Why? Because the objective function Z = c₁x + c₂y is a plane in 3D, and its maximum/minimum over a convex polygon always occurs at an edge or vertex. Since the function is linear, it can't have an interior peak — the peak is always on the boundary."
      },
      {
        title: "Corner Point Method — Step by Step",
        body: "Step 1: Graph all constraints and identify the feasible region. Step 2: Find all corner (vertex) points of the feasible region. Corners are where two constraint lines intersect. Step 3: Calculate Z = c₁x + c₂y at each corner point. Step 4: For maximisation, pick the corner with the largest Z. For minimisation, pick the smallest Z. The coordinates of that corner are the optimal decision variable values, and Z is the optimal objective value."
      },
      {
        title: "Finding Corner Points Algebraically",
        body: "Corner points are intersections of constraint lines. Solve pairs of equations simultaneously. For each pair of constraint equations, solve for x and y, then check if the solution satisfies ALL other constraints. If it does, it's a corner point. Don't forget to include intersections with the axes (x = 0 or y = 0) as potential corners. The origin (0,0) is often a corner if x ≥ 0 and y ≥ 0 are constraints."
      },
      {
        title: "Graphical Method — Shading the Feasible Region",
        body: "For each constraint, draw the corresponding line (replace inequality with equality). Use the 'test point method' to determine which side: pick a test point (like (0,0) if it's not on the line), plug into the inequality. If true, shade that side. If false, shade the other side. The feasible region is where ALL shadings overlap. This overlapping region is usually easy to spot — it's the area that's shaded by every constraint."
      },
      {
        title: "Unique Optimal Solution",
        body: "When the objective function line (Z = c₁x + c₂y) touches the feasible region at exactly one corner point, we have a unique optimal solution. This is the most common case. The corner with the maximum (or minimum) Z value is clearly the winner. No other point in the feasible region gives the same Z value. Graphically, the Z-line is the only line of that slope that touches the feasible region at that specific corner."
      },
      {
        title: "Multiple Optimal Solutions",
        body: "If the objective function line is parallel to one of the edges of the feasible region, and that edge gives the optimal Z value, then every point on that edge is optimal. This means infinitely many optimal solutions. The two corners of that edge are both optimal, and so is any point in between. This occurs when c₁/c₂ equals the slope of a constraint boundary that coincides with the optimal Z-line."
      },
      {
        title: "Unbounded Feasible Region",
        body: "Sometimes the feasible region is unbounded — it extends infinitely in some direction. This happens when constraints don't close off the region. For a maximisation problem, this might mean Z can increase without bound (no finite maximum). But a minimum usually exists even in an unbounded region. For minimisation problems, an unbounded region still has a finite minimum at a corner point — unless the region extends infinitely in the direction of decreasing Z."
      },
      {
        title: "Infeasible Problem — No Solution",
        body: "If the constraints contradict each other, there is no point that satisfies all constraints simultaneously. The feasible region is empty. For example, x + y ≤ 5 and x + y ≥ 10 have no common solution. In this case, the LPP has no feasible solution. This means the problem as stated is impossible — you'd need to relax some constraints to make it solvable."
      },
      {
        title: "Unbounded Solution",
        body: "An unbounded solution occurs when the feasible region is unbounded AND the objective function can increase (for max) or decrease (for min) without bound. For maximisation, if the feasible region extends infinitely in the direction that makes Z larger, no maximum Z exists. For minimisation, if it extends infinitely in the direction of decreasing Z, no minimum exists. In such cases, we say the LPP has an unbounded solution."
      },
      {
        title: "Application — Diet Problem",
        body: "A classic LPP example: you need to plan a diet that meets minimum nutritional requirements at minimum cost. Decision variables: quantities of each food. Objective: minimise total cost. Constraints: minimum required amounts of nutrients (protein, vitamins, etc.). Each food contributes a known amount of each nutrient per unit. This is a minimisation problem with ≥ constraints. The graphical method works for two foods."
      },
      {
        title: "Application — Production Problem",
        body: "Another classic: a factory makes two products using limited resources. Decision variables: number of each product. Objective: maximise total profit. Constraints: available machine hours, labour hours, raw materials. Each product uses known amounts of each resource. This is a maximisation problem with ≤ constraints. This is the most common type of LPP in textbooks because it's intuitive — you want to maximise profit with limited resources."
      }
    ],
    keyPoints: [
      "LPP = optimise (max/min) a linear objective function subject to linear constraints",
      "Decision variables: what you can control (usually x, y)",
      "Objective function: Z = c₁x + c₂y — what you want to optimise",
      "Constraints: linear inequalities (≤, ≥, or =) that limit the variables",
      "Non-negativity: x ≥ 0, y ≥ 0 — always included",
      "Feasible region = intersection of all half-planes satisfying constraints",
      "Feasible region is always CONVEX — the line segment between any two feasible points is also feasible",
      "Corner Point Theorem: optimal solution occurs at a vertex of the feasible region",
      "Corner point method: find all vertices → evaluate Z → pick best",
      "Unique optimal solution: one corner gives the best Z",
      "Multiple optimal solutions: objective line is parallel to a constraint edge — entire edge is optimal",
      "Unbounded region: feasible region extends infinitely — may or may not have finite optimum",
      "Infeasible problem: no point satisfies all constraints — feasible region is empty",
      "Unbounded solution: Z can increase/decrease without limit — no finite optimum",
      "Formulation steps: identify variables → write objective → list constraints → add non-negativity",
      "Graph each constraint by drawing the line, then shade the half-plane that satisfies the inequality",
      "Check corner points at intersections of constraint lines AND intersections with axes",
      "Always verify that found corner points satisfy ALL constraints"
    ],
    importantQuestions: [
      "A factory produces two types of toys: A and B. Profit per unit is ₹50 for A and ₹60 for B. Each requires 2 hours on Machine P and 1 hour on Machine Q. Machine P runs at most 80 hours, Machine Q at most 60 hours. Formulate the LPP and solve graphically.",
      "Minimise Z = 4x + 3y subject to x + y ≥ 8, 3x + y ≥ 12, 2x + y ≥ 10, x ≥ 0, y ≥ 0.",
      "Maximise Z = 6x + 8y subject to 2x + 3y ≤ 24, x + 2y ≤ 16, x ≥ 0, y ≥ 0. Find the optimal solution and the maximum value of Z.",
      "Explain with a diagram the case of multiple optimal solutions in an LPP.",
      "A dietician wants to prepare a diet using two foods A and B. Each unit of A costs ₹50 and contains 2 units of protein and 4 units of carbohydrates. Each unit of B costs ₹30 and contains 3 units of protein and 2 units of carbohydrates. The diet must contain at least 12 units of protein and 12 units of carbohydrates. Formulate LPP and solve graphically to minimise cost.",
      "Show graphically that the LPP — Maximise Z = 3x + 2y subject to x + y ≤ 3, 2x + y ≥ 8, x, y ≥ 0 — has no feasible solution.",
      "Solve graphically: Maximise Z = 5x + 3y subject to 3x + 5y ≤ 15, 5x + 2y ≤ 10, x ≥ 0, y ≥ 0.",
      "What is an unbounded solution? Give an example of an LPP that has an unbounded feasible region but a finite minimum."
    ]
  }
};

export default content;
