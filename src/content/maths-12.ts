interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "mathematical-logic": {
    overview: "Ever wondered how computers decide between true and false? That's logic at work. This chapter is basically about figuring out whether statements are true or false, and how to combine them in different ways. It's the grammar of maths — once you get the rules, everything clicks.",
    concepts: [
      {
        title: "Statements and Truth Values",
        body: "A statement is just a sentence that is either true or false — no in-between. 'Mumbai is in India' is a statement (true). 'This is fun' is NOT a statement because it's an opinion. Simple. Every statement gets a truth value: T or F."
      },
      {
        title: "Logical Connectives — And, Or, Not",
        body: "Think of connectives like seasoning. 'And' (∧) means both need to be true. 'Or' (∨) means at least one is true. 'Not' (∼) just flips the truth. If I say 'I'll bring pizza AND garlic bread', you only get happy if both show up. But 'I'll bring pizza OR garlic bread'? You win either way."
      },
      {
        title: "Truth Tables",
        body: "Truth tables are just cheat sheets. You list every possible combo of true/false for your statements, then figure out the result. For two statements, there are 4 combos. For three? 8. It's like a multiplication table — predictable once you know the rule."
      },
      {
        title: "Implication and Biconditional",
        body: "'If it rains, the ground gets wet' — that's an implication (→). The first part is the condition, the second is the result. The only time it's false is when the condition is true but the result is false. The biconditional (↔) is a two-way street: 'I go out IF AND ONLY IF it's sunny'."
      },
      {
        title: "Tautologies and Contradictions",
        body: "A tautology is always true, no matter what. Like 'it's either raining or not raining' — can't argue with that. A contradiction is always false, like 'it's raining AND it's not raining'. Spotting these saves time in exams — they're the shortcuts of logic."
      }
    ],
    keyPoints: [
      "A statement must be objectively true or false — no opinions allowed",
      "∧ (and) — both T → T; ∨ (or) — at least one T → T",
      "∼ flips truth: ∼T = F, ∼F = T",
      "Implication p → q is false ONLY when p is T and q is F",
      "Biconditional p ↔ q is T when both have same truth value",
      "Tautology = always T; Contradiction = always F",
      "Truth tables = systematic way to check all possibilities"
    ],
    importantQuestions: [
      "Prepare a truth table for (p ∧ q) ∨ (∼p) and identify if it's a tautology.",
      "Write the truth value of 'If 3 > 5 then 7 > 2'.",
      "Using logical equivalence, show that ∼(p ∨ q) ≡ ∼p ∧ ∼q.",
      "Express 'If you work hard then you will succeed' in symbolic form and write its converse."
    ]
  },

  "matrices": {
    overview: "Imagine a spreadsheet full of numbers arranged in rows and columns — that's a matrix. Boring on its own, but crazy powerful when you use it to solve equations, rotate 3D objects in games, or even run AI algorithms. This chapter teaches you how to handle these number tables like a pro.",
    concepts: [
      {
        title: "What is a Matrix?",
        body: "A matrix is just a rectangular arrangement of numbers in rows and columns. Think of it like a train timetable — rows for trains, columns for departure times. We say a matrix has order m × n (rows × columns). A 2×3 matrix has 2 rows and 3 columns. Simple."
      },
      {
        title: "Types of Matrices",
        body: "Square matrix = same rows and columns (like a chessboard). Row matrix = just one row. Column matrix = just one column. Zero matrix = all entries are zero — the boring one. Identity matrix = 1s on the diagonal and 0s everywhere else. Think of identity like the number 1 for matrices."
      },
      {
        title: "Matrix Addition and Scalar Multiplication",
        body: "Adding matrices is easy — just add matching entries. But they need to be the same size! Like adding two trays of eggs — you match position to position. Scalar multiplication just means multiply every entry by the same number. So 2A doubles every element in A."
      },
      {
        title: "Matrix Multiplication — The Tricky One",
        body: "This is where most people get confused. You can multiply two matrices only if the first one's columns match the second one's rows. The resulting matrix has size (first rows) × (second columns). Think of it like a vending machine: the row from the first matrix is the payment method, the column from the second is what you get. Each entry is the dot product of a row from the first and a column from the second."
      },
      {
        title: "Inverse of a Matrix",
        body: "The inverse of a matrix A (written A⁻¹) is like the 'undo' button. A × A⁻¹ = Identity matrix. For a 2×2 matrix, there's a formula: swap the diagonal, negate the off-diagonal, divide by the determinant. But if the determinant is zero? No inverse exists — that matrix is 'singular'. Dead end."
      },
      {
        title: "Solving Equations Using Matrices",
        body: "Got a system of equations? Write it as AX = B, where A is the coefficient matrix, X is the variable matrix, and B is the constants. Then X = A⁻¹B. BOOM — solved in one shot. It's like having a master key for all linear equations."
      }
    ],
    keyPoints: [
      "Order of matrix = rows × columns (m × n)",
      "Matrix addition needs same order — add element by element",
      "For multiplication: columns of first must equal rows of second",
      "Identity matrix I acts like 1 for matrices",
      "A⁻¹ exists only if determinant ≠ 0",
      "For 2×2 matrix [a b; c d], A⁻¹ = 1/(ad−bc) [d −b; −c a]",
      "Use AX = B → X = A⁻¹B to solve system of equations"
    ],
    importantQuestions: [
      "If A = [2 3; 1 −4] and B = [0 1; 2 5], find AB and BA. Is AB = BA?",
      "Find the inverse of matrix [3 1; 5 2].",
      "Solve the system using matrices: 2x + y = 7, 3x − 4y = 5.",
      "If A = [1 2; 3 4], show that A(adj A) = |A| I."
    ]
  },

  "trigonometric-functions": {
    overview: "Remember sine, cosine, and tan from earlier? This chapter takes them to the next level. You'll learn identities that connect them all, solve trigonometric equations, and work with angles that go beyond 90°. It's the toolkit you need for physics, engineering, and making sense of waves.",
    concepts: [
      {
        title: "Compound Angle Formulas",
        body: "Ever wondered what sin(A + B) is? It's NOT sin A + sin B — that's the biggest mistake students make. The real formulas are: sin(A + B) = sin A cos B + cos A sin B. Think of it like a dance move — sine and cosine switching partners. You just need to memorize these; there's no shortcut."
      },
      {
        title: "Double and Triple Angle Formulas",
        body: "These come straight from the compound formulas. If B = A, then sin 2A = 2 sin A cos A. Simple, right? And cos 2A has THREE forms: cos²A − sin²A, 2 cos²A − 1, and 1 − 2 sin²A. Pick whichever one helps you solve the problem. Triple angles are the same idea but messier — sin 3A = 3 sin A − 4 sin³A."
      },
      {
        title: "Factorization Formulas",
        body: "These let you turn sums into products and vice versa. sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2). Why bother? Because sometimes the product form is easier to solve. It's like simplifying a fraction — you change the shape to see the answer better."
      },
      {
        title: "Trigonometric Equations",
        body: "Solving sin θ = 1/2 is not just 'θ = 30°'. No — there are INFINITE solutions because trig functions repeat. The general solution is θ = nπ + (−1)ⁿ(π/6). For sin and cos, solutions repeat every 2π. For tan, every π. Always add the period to your answer."
      },
      {
        title: "Inverse Trigonometric Functions",
        body: "If sin θ = x, then θ = sin⁻¹ x. It's like asking 'what angle gives me this value?' But there's a catch — multiple angles give the same value, so we restrict the range. sin⁻¹ gives values between −π/2 and π/2. cos⁻¹ gives between 0 and π. Just remember which quadrant you're stuck in."
      }
    ],
    keyPoints: [
      "sin(A + B) = sin A cos B + cos A sin B — memorize this",
      "cos 2A = cos²A − sin²A = 2 cos²A − 1 = 1 − 2 sin²A",
      "sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2)",
      "General solution for sin θ = sin α: θ = nπ + (−1)ⁿα",
      "General solution for cos θ = cos α: θ = 2nπ ± α",
      "General solution for tan θ = tan α: θ = nπ + α",
      "Principal values: sin⁻¹ ∈ [−π/2, π/2], cos⁻¹ ∈ [0, π]"
    ],
    importantQuestions: [
      "Prove that sin 3A = 3 sin A − 4 sin³A.",
      "Solve the equation 2 cos²θ − √3 cos θ = 0 for θ ∈ [0, 2π].",
      "Find the general solution of tan θ + cot θ = 2.",
      "If sin A = 3/5 and cos B = 5/13, find sin(A + B) where A and B are acute."
    ]
  },

  "pair-of-straight-lines": {
    overview: "You already know about a single straight line. Now imagine two lines passing through the same point — and we combine their equations into one. That's what this chapter is about: how to represent a pair of lines with a single equation, find the angle between them, and split them apart again.",
    concepts: [
      {
        title: "Combined Equation of Two Lines",
        body: "If you have two lines L₁ = 0 and L₂ = 0, their combined equation is L₁ × L₂ = 0. Multiply them together! For example, lines x − 2y = 0 and x + 3y = 0 combine into (x − 2y)(x + 3y) = 0, which gives x² + xy − 6y² = 0. The degree becomes 2 — that's why we call them 'pair of lines'."
      },
      {
        title: "Homogeneous Equations of Degree 2",
        body: "An equation like ax² + 2hxy + by² = 0 is the general form of a pair of straight lines passing through the origin. Each term has degree 2 (x², xy, y²) — that's why it's 'homogeneous'. Think of it like both lines sharing the same parking spot (the origin)."
      },
      {
        title: "Angle Between Lines",
        body: "Given ax² + 2hxy + by² = 0, the angle θ between the two lines is: tan θ = |2√(h² − ab)| / |a + b|. If h² = ab, the lines are parallel (θ = 0). If a + b = 0, they're perpendicular (θ = 90°). One formula, two special cases. Easy."
      },
      {
        title: "Individual Lines from Combined Equation",
        body: "To split the combined equation back into separate lines, just factor it. Treat ax² + 2hxy + by² = 0 like a quadratic in x (or y). Solve for x in terms of y, and you'll get two equations. Each one is a separate line. It's reverse-engineering the multiplication."
      }
    ],
    keyPoints: [
      "Combined equation of lines L₁ = 0 and L₂ = 0 is L₁L₂ = 0",
      "General pair through origin: ax² + 2hxy + by² = 0",
      "Angle between lines: tan θ = |2√(h² − ab)| / |a + b|",
      "If h² = ab → lines are parallel",
      "If a + b = 0 → lines are perpendicular",
      "Split the equation by factoring the quadratic in x or y"
    ],
    importantQuestions: [
      "Find the combined equation of lines x + 2y = 0 and 2x − y = 0.",
      "Show that the equation x² − 5xy + 6y² = 0 represents two distinct lines and find the angle between them.",
      "If the lines represented by ax² + 2hxy + by² = 0 are perpendicular, prove that a + b = 0.",
      "Find the separate equations of the lines represented by x² + 4xy + 3y² = 0."
    ]
  },

  "vectors": {
    overview: "A vector is just a quantity with both size and direction — think of it like an arrow. Speed is a number (scalar), but velocity is a vector because it has direction. This chapter is about adding, subtracting, and multiplying these arrows. Useful for physics, 3D graphics, and navigation.",
    concepts: [
      {
        title: "What's a Vector?",
        body: "A vector has magnitude (length) and direction. Write it as AB (from A to B) or as a position vector like 2i + 3j. The components tell you how much in each direction. i is the x-direction unit, j is the y-direction, k is the z-direction. Think of them like GPS coordinates — how far east, north, and up."
      },
      {
        title: "Vector Addition — The Triangle Law",
        body: "To add two vectors, put the tail of the second at the head of the first. The result (resultant) goes from the first tail to the second head. It's like walking 5 steps east, then 3 steps north — you end up somewhere northeast. The order doesn't matter: A + B = B + A."
      },
      {
        title: "Dot Product (Scalar Product)",
        body: "The dot product A·B = |A||B|cos θ. It gives you a number, not a vector. It tells you how much one vector goes in the direction of another. If they're perpendicular, dot = 0. If they're parallel, dot = |A||B|. In components: a₁b₁ + a₂b₂ + a₃b₃. Used everywhere in physics for work done."
      },
      {
        title: "Cross Product (Vector Product)",
        body: "The cross product A × B = |A||B|sin θ n̂, where n̂ is perpendicular to both. The result is a VECTOR. If two vectors are parallel, cross = 0. Direction is given by the right-hand rule — curl your fingers from A to B, thumb points the way. In components, it's the determinant of a 3×3 matrix."
      },
      {
        title: "Scalar Triple Product",
        body: "The scalar triple product [A B C] = A·(B × C). It's a number that tells you the volume of the parallelepiped formed by the three vectors. If it's zero, the vectors are coplanar (flat on a plane). Think of it as the '3Dness' check — are these three vectors truly 3D or just pretending?"
      }
    ],
    keyPoints: [
      "Vector = magnitude + direction; Scalar = just magnitude",
      "Triangle law: AB + BC = AC",
      "Dot product A·B = |A||B|cos θ = a₁b₁ + a₂b₂ + a₃b₃",
      "A·B = 0 iff vectors are perpendicular",
      "Cross product A×B = |A||B|sin θ n̂ — direction via right-hand rule",
      "A×B = 0 iff vectors are parallel",
      "Scalar triple product [A B C] = 0 iff vectors are coplanar"
    ],
    importantQuestions: [
      "If A = 2i + 3j − k and B = i − j + 2k, find A·B and A×B.",
      "Show that vectors A = i + 2j + 3k, B = 2i + 3j − 4k, and C = 3i + 5j − k are coplanar.",
      "Find the angle between vectors A = i + j + k and B = i − j + k.",
      "If |A| = 3, |B| = 4, and |A×B| = 6, find the angle between A and B."
    ]
  },

  "3d-geometry": {
    overview: "You've done geometry in 2D your whole life. Now imagine adding a third dimension — depth. This chapter gives you the tools to work with points, lines, and planes in 3D space. It's how GPS works, how 3D movies are made, and how architects design buildings.",
    concepts: [
      {
        title: "Coordinates in 3D Space",
        body: "Every point in space is (x, y, z). X is left-right, Y is forward-backward, Z is up-down. The origin (0, 0, 0) is where all three axes meet. Distance between two points? √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²). Same as 2D but with z added. The section formula also works the same way — just with three coordinates."
      },
      {
        title: "Direction Cosines and Direction Ratios",
        body: "Every line in 3D has direction cosines (l, m, n) — the cosines of the angles it makes with the X, Y, and Z axes. Property: l² + m² + n² = 1. Direction ratios are proportional numbers (a, b, c) — easier to find, but give the same direction. If a line has ratios 2, 3, 4, you can find its actual cosines by dividing by √(a²+b²+c²)."
      },
      {
        title: "Equation of a Line in 3D",
        body: "A line is defined by a point and a direction. Vector form: r = a + λb. a is a point on the line, b is the direction. In Cartesian: (x − x₁)/a = (y − y₁)/b = (z − z₁)/c = λ. Each λ gives you a different point on the line. Think of it like a train on tracks — a is the station, b is the direction the tracks go."
      },
      {
        title: "Angle Between Two Lines",
        body: "The angle between two lines is just the angle between their direction vectors. If direction cosines are (l₁, m₁, n₁) and (l₂, m₂, n₂): cos θ = l₁l₂ + m₁m₂ + n₁n₂. For direction ratios (a₁, b₁, c₁) and (a₂, b₂, c₂): cos θ = |a₁a₂ + b₁b₂ + c₁c₂| / √((a₁²+b₁²+c₁²)(a₂²+b₂²+c₂²)). If cos θ = 0, they're perpendicular."
      },
      {
        title: "Distance of a Point from a Line",
        body: "To find how far a point is from a line, drop a perpendicular from the point to the line. The formula uses cross product: distance = |(r₂ − r₁) × b| / |b|. r₁ is a point on the line, r₂ is your point, b is the line's direction. It's the area of a parallelogram divided by its base."
      }
    ],
    keyPoints: [
      "Distance between P(x₁,y₁,z₁) and Q(x₂,y₂,z₂): √((Δx)² + (Δy)² + (Δz)²)",
      "Direction cosines l, m, n satisfy l² + m² + n² = 1",
      "Direction ratios (a, b, c) are proportional to (l, m, n)",
      "Line through (x₁,y₁,z₁) with ratios (a,b,c): (x−x₁)/a = (y−y₁)/b = (z−z₁)/c",
      "Angle between lines: cos θ = l₁l₂ + m₁m₂ + n₁n₂",
      "Lines are perpendicular if l₁l₂ + m₁m₂ + n₁n₂ = 0",
      "Skew lines never intersect and are not parallel"
    ],
    importantQuestions: [
      "Find the direction cosines of the line passing through (2, 3, −1) and (4, 6, 3).",
      "Show that the lines (x−1)/2 = (y+1)/3 = (z−2)/4 and (x−3)/4 = (y−2)/6 = (z−1)/8 are parallel.",
      "Find the angle between the lines whose direction ratios are (1, 2, 2) and (2, 3, 6).",
      "Find the distance of point (1, 2, 3) from the line (x−1)/2 = (y−2)/3 = (z−3)/4."
    ]
  },

  "line-plane": {
    overview: "Remember line and plane? It's back, but this time in 3D. We're figuring out where lines and planes intersect, the distance between them, and how to find angles between a line and a plane. Think of it as the geometry of where things meet — like figuring out where a laser beam hits a wall.",
    concepts: [
      {
        title: "Equation of a Plane",
        body: "A plane is a flat surface that extends forever. Vector form: r·n = d, where n is the normal (perpendicular) vector. Cartesian: ax + by + cz = d. If d = 0, the plane passes through the origin. The coefficients (a, b, c) tell you which direction the plane faces — they're the normal vector."
      },
      {
        title: "Plane Through Three Points",
        body: "Three non-collinear points define a unique plane. Find two vectors in the plane (subtract points), then cross product gives the normal. Then use r·n = d with any point. It's like setting up a tent — three poles determine the flat surface."
      },
      {
        title: "Angle Between Two Planes",
        body: "The angle between two planes is the same as the angle between their normals. Two normals n₁ and n₂: cos θ = |n₁·n₂| / (|n₁||n₂|). If n₁·n₂ = 0, the planes are perpendicular. If normals are parallel, the planes are parallel. Simple as that."
      },
      {
        title: "Angle Between a Line and a Plane",
        body: "A line meets a plane at some angle. Find the complement of the angle between the line and the normal. If line direction is b and plane normal is n: sin φ = |b·n| / (|b||n|). Why sine? Because you're measuring how much the line is NOT parallel to the plane."
      },
      {
        title: "Distance of a Point from a Plane",
        body: "How far is a point from a plane? Drop a perpendicular — distance = |ax₁ + by₁ + cz₁ − d| / √(a² + b² + c²). The numerator is plugging the point into the plane equation, absolute value. Denominator is the normal's length. It's like measuring how high a balloon is above a flat roof."
      },
      {
        title: "Line of Intersection of Two Planes",
        body: "Two non-parallel planes meet along a straight line. The direction of that line is perpendicular to BOTH normals — so take n₁ × n₂. To find a point on the line, set one coordinate to zero and solve the plane equations. You now have a point and a direction — that's the line."
      }
    ],
    keyPoints: [
      "Plane: ax + by + cz = d, where (a,b,c) is the normal vector",
      "Three points → two vectors → cross product → normal → plane equation",
      "Angle between planes = angle between normals: cos θ = |n₁·n₂| / (|n₁||n₂|)",
      "Angle between line and plane: sin φ = |b·n| / (|b||n|)",
      "Distance from point (x₁,y₁,z₁) to plane ax+by+cz=d: |ax₁+by₁+cz₁−d| / √(a²+b²+c²)",
      "Intersection of two planes: direction = n₁ × n₂"
    ],
    importantQuestions: [
      "Find the equation of the plane passing through (1, 2, 1) with normal perpendicular to (2, 1, 0) and (3, 1, −1).",
      "Find the distance of point (2, 3, 1) from the plane 2x + 3y − z + 5 = 0.",
      "Find the angle between the line (x−1)/2 = y/3 = (z+2)/4 and the plane 3x + 4y − 5z = 7.",
      "Find the equation of the line of intersection of planes x + y + z = 1 and 2x − y + 3z = 4."
    ]
  },

  "linear-programming": {
    overview: "Ever wondered how companies decide what to produce to make the most profit with limited resources? That's linear programming. You take constraints (budget, time, materials) and find the best outcome. It's like a puzzle: given all these restrictions, what's the smartest move?",
    concepts: [
      {
        title: "What is LPP?",
        body: "A Linear Programming Problem (LPP) has three parts: a goal (maximize profit or minimize cost), variables (things you can control), and constraints (limits on those variables). Everything is linear — no x², no xy, just nice straight lines. Think of it like: 'I have 10 hours and ₹500 — what combo of products should I make?'"
      },
      {
        title: "Formulating an LPP",
        body: "Step 1: Identify the decision variables (let x = number of chairs, y = number of tables). Step 2: Write the objective function (Z = 50x + 80y — profit per item). Step 3: Write all constraints (time limit, material limit) as inequalities. Step 4: Non-negativity constraints: x ≥ 0, y ≥ 0 (can't make negative stuff). Done."
      },
      {
        title: "Graphical Method — Feasible Region",
        body: "Plot each constraint as a line on the graph. The area where ALL constraints are satisfied is the 'feasible region'. It's usually a polygon. Shade it. Anything outside is impossible — you'd break some constraint. This region is your playground; the optimal solution lives somewhere on its boundary."
      },
      {
        title: "Finding the Optimal Solution",
        body: "The optimal point is always at a corner (vertex) of the feasible region. Calculate Z = objective function at every corner. The corner with the highest (for max) or lowest (for min) Z value is your answer. This is the 'corner point method'. Check all vertices, pick the best one. No need to check inside — the maths guarantees it's on the edge."
      },
      {
        title: "Types of Solutions",
        body: "LPP can have: (a) a unique optimal solution (one corner wins), (b) multiple optimal solutions (two corners give same Z, and so does the entire edge between them), (c) unbounded solution (feasible region goes on forever and Z keeps increasing — bad news), or (d) infeasible (no region exists — constraints contradict each other)."
      }
    ],
    keyPoints: [
      "LPP = maximize/minimize a linear function under linear constraints",
      "Non-negativity: x ≥ 0, y ≥ 0 always",
      "Feasible region = area satisfying all constraints",
      "Optimal solution is always at a corner of the feasible region",
      "Corner point method: find Z at each vertex, pick best",
      "Multiple optimal solutions exist if objective line is parallel to a constraint edge",
      "Unbounded = feasible region doesn't close; infeasible = no common area"
    ],
    importantQuestions: [
      "A company makes two products A and B. Profit per unit is ₹60 for A and ₹40 for B. Each requires 2 hours on machine M1 and 1 hour on M2. M1 works max 80 hours, M2 max 60 hours. Formulate LPP and solve graphically.",
      "Minimize Z = 3x + 2y subject to x + y ≥ 8, 3x + y ≥ 12, x, y ≥ 0.",
      "Maximize Z = 5x + 7y subject to x + y ≤ 10, 2x + 3y ≤ 24, x, y ≥ 0. Find all corner points and the optimal solution.",
      "Explain with an example how an LPP can have multiple optimal solutions."
    ]
  }
};

export default content;
