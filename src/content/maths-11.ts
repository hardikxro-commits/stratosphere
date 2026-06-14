interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "angle-measurement": {
    overview:
      "Ever wondered why we use 360° for a full circle? Or why your calculator has that RAD button nobody touches? Turns out, angles are everywhere — from the slope of a rooftop to the spin of a fan. This chapter is all about understanding how we measure turns and twists, and why radians aren't as scary as they sound.",
    concepts: [
      {
        title: "Degrees and the 360° convention",
        body:
          "A degree is 1/360th of a full rotation. Why 360? Probably because ancient astronomers noticed the Sun moves about 1° per day across the sky. Conveniently, 360 also has a ton of divisors, so it's easy to split into halves, thirds, quarters — you name it. So 1° is tiny, but stack 360 of 'em and you've done a full loop.",
      },
      {
        title: "Radians — the natural angle",
        body:
          "Radians feel weird at first, but they're actually the 'natural' way to measure angles. Here's the trick: take a circle of radius 1, walk along the circumference by a distance equal to the radius, and the angle you've covered is 1 radian. That's it. A full circle is about 6.28 radians (that's 2π). So when you see π/2, that's a quarter turn — 90°.",
      },
      {
        title: "Converting between degrees and radians",
        body:
          "Simple formula: radians = degrees × (π / 180). Or the other way: degrees = radians × (180 / π). Memorise that π radians = 180° and you're golden. For example, 60° = π/3, 45° = π/4, 30° = π/6. These show up so often they're basically free marks.",
      },
      {
        title: "Arc length and area of a sector",
        body:
          "If you know the angle in radians, arc length is just radius × angle. Easy. For area of a sector (think pizza slice), it's (1/2) × r² × angle. Both formulas are dead simple because radians make the math clean. Degrees would give you ugly fractions — another reason radians exist.",
      },
    ],
    keyPoints: [
      "1° = 1/360th of a full rotation",
      "1 radian ≈ 57.3° — the angle where arc length equals radius",
      "π radians = 180° — the golden conversion rule",
      "Arc length = r × θ (θ in radians)",
      "Area of sector = ½ r²θ",
      "Degree is convenient, radian is natural — use radian for calculus and formulas",
    ],
    importantQuestions: [
      "Convert 150° to radians and 3π/5 to degrees.",
      "A pendulum swings through an angle of 30°. If the string is 40 cm long, find the distance travelled by the tip.",
      "Find the area of a sector with radius 7 cm and central angle 60°.",
      "The sum of two angles is 120° and their difference is 30°. Find the angles in radians.",
      "A horse is tied to a pole with a 14 m rope. If it grazes an arc of length 22 m, what angle does the rope cover?",
    ],
  },

  "trigonometry-1": {
    overview:
      "Imagine you're on a Ferris wheel. As you go up, come down, and go around, your height above the ground keeps changing in a smooth, wavy pattern. That's trigonometry — it's the maths of cycles, angles, and triangles, but really it's about how things go up and down and around.",
    concepts: [
      {
        title: "The six trigonometric functions",
        body:
          "Meet sin, cos, tan, cosec, sec, and cot. At their heart, they're just ratios of sides of a right-angled triangle. For an angle θ: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = sin/cos. The other three are just reciprocals — cosec = 1/sin, sec = 1/cos, cot = 1/tan. That's it. Nothing more.",
      },
      {
        title: "The unit circle — your best friend",
        body:
          "Draw a circle of radius 1 at the center of a graph. Pick any point on it. The x-coordinate is cos θ and the y-coordinate is sin θ. That's the whole idea. As you walk around the circle, sin and cos trace out smooth waves. It connects triangles to circles, and circles to waves. This one picture explains pretty much everything in trig.",
      },
      {
        title: "ASTC rule — sign of trig functions",
        body:
          "In which quadrants are sin, cos, and tan positive? There's a stupid-simple trick. Draw four quadrants and label 'em: A (all positive), S (sin positive), T (tan positive), C (cos positive). Start from the first quadrant and go anti-clockwise — A, S, T, C. That's the ASTC rule. In Q1 everything's happy. In Q2 only sin is. In Q3 tan survives. In Q4 cos is the lone positive one.",
      },
      {
        title: "Trigonometric identities you can't escape",
        body:
          "The big daddy: sin²θ + cos²θ = 1. It's just Pythagoras on the unit circle. Divide it by cos²θ and you get 1 + tan²θ = sec²θ. Divide by sin²θ and you get cot²θ + 1 = cosec²θ. These three show up everywhere — in proving stuff, in solving equations, in integration later. Just memorise them.",
      },
    ],
    keyPoints: [
      "sin = opposite/hypotenuse, cos = adjacent/hypotenuse",
      "tan = sin/cos, cot = cos/sin",
      "Unit circle: (cos θ, sin θ) for any angle θ",
      "ASTC rule — All, Sin, Tan, Cos (anti-clockwise from Q1)",
      "sin²θ + cos²θ = 1 — the master identity",
      "1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ",
      "Trig functions are periodic — sin and cos repeat every 360°",
    ],
    importantQuestions: [
      "Prove that sin⁴θ − cos⁴θ = sin²θ − cos²θ.",
      "If sin θ = 3/5 and θ lies in Q2, find cos θ and tan θ.",
      "Prove that (1 + cot θ − cosec θ)(1 + tan θ + sec θ) = 2.",
      "Express sin 150° and cos 240° in terms of acute angles and find their values.",
      "If tan θ = 4/3 and θ is in Q3, find all six trigonometric ratios.",
    ],
  },

  "trigonometry-2": {
    overview:
      "So you know what sin and cos are. Cool. But what if I told you sin(A + B) isn't sin A + sin B? (Yeah, that's a common mistake.) This chapter takes trig to the next level — adding angles, doubling them, splitting them, and even reversing the functions to find angles from ratios.",
    concepts: [
      {
        title: "Compound angle formulas",
        body:
          "Here's where the magic happens. sin(A + B) = sin A cos B + cos A sin B. And sin(A − B) = sin A cos B − cos A sin B. Cos is similar but with a twist: cos(A + B) = cos A cos B − sin A sin B. Don't just memorise them — notice the pattern. Sin is symmetrical (sin-cos then cos-sin), cos switches between cos and sin with a minus in the middle. Practise a few and they'll stick.",
      },
      {
        title: "Double angle formulas",
        body:
          "Just set B = A in the compound formulas and you get: sin 2A = 2 sin A cos A. And cos 2A = cos²A − sin²A = 2 cos²A − 1 = 1 − 2 sin²A. That last form (cos 2A = 2 cos²A − 1) is super useful for integration later. These also let you derive half-angle and triple-angle formulas if you need 'em.",
      },
      {
        title: "Trigonometric equations",
        body:
          "Solving sin θ = 0.5 means finding ALL angles where that's true, not just one. General formula: If sin θ = k, then θ = nπ + (−1)ⁿ·α where α is the principal solution. For cos θ = k, it's θ = 2nπ ± α. For tan θ = k, it's θ = nπ + α. The n ∈ Z means 'any integer', so you capture every possible answer across infinite rotations.",
      },
      {
        title: "Inverse trigonometric functions",
        body:
          "Sometimes you know the ratio but need the angle. That's sin⁻¹, cos⁻¹, tan⁻¹. They're called inverse functions. But careful — sin⁻¹(0.5) doesn't give you infinite answers; it gives the 'principal value', which is the simplest one. For sin⁻¹, the output is between −90° and 90°. For cos⁻¹, it's between 0° and 180°. Domain restrictions make them proper functions.",
      },
    ],
    keyPoints: [
      "sin(A ± B) = sin A cos B ± cos A sin B",
      "cos(A ± B) = cos A cos B ∓ sin A sin B",
      "sin 2A = 2 sin A cos A",
      "cos 2A = cos²A − sin²A = 2 cos²A − 1 = 1 − 2 sin²A",
      "General solutions: sin θ = k → θ = nπ + (−1)ⁿα",
      "Inverse functions return principal values only",
      "Domain of sin⁻¹ is [−1, 1], range is [−π/2, π/2]",
    ],
    importantQuestions: [
      "Prove that sin(A + B) sin(A − B) = sin²A − sin²B.",
      "If tan A = 1/2 and tan B = 1/3, find tan(A + B). What can you say about A + B?",
      "Solve sin θ + cos θ = 1 for 0° ≤ θ ≤ 360°.",
      "Prove that (sin 3θ)/(sin θ) − (cos 3θ)/(cos θ) = 2.",
      "Find the principal value of sin⁻¹(−1/2) and tan⁻¹(√3).",
    ],
  },

  "determinants-matrices": {
    overview:
      "Imagine you have a bunch of numbers and you want to pack them neatly into a box so you can do maths on them all at once. That's a matrix. A determinant is just a special number that tells you something about that box — like whether it's squishy or not. Sounds abstract, but this stuff powers computer graphics, physics, and even your phone's camera filters.",
    concepts: [
      {
        title: "What even is a matrix?",
        body:
          "A matrix is just a rectangular grid of numbers. Think of it like a spreadsheet — rows and columns. A 2×3 matrix has 2 rows and 3 columns. You can add matrices if they're the same size (just add matching entries). Multiply by a scalar (a number) and every entry gets multiplied. That's the simple stuff.",
      },
      {
        title: "Matrix multiplication — the weird one",
        body:
          "Multiplying two matrices isn't just 'multiply matching numbers'. You take the rows of the first and columns of the second. Element (i,j) = row i of first × column j of second — dot product style. If A is m×n and B is n×p, the result is m×p. The inner dimensions must match, or it's a no-go. And AB ≠ BA most of the time. Yeah, matrix multiplication doesn't commute.",
      },
      {
        title: "Determinants — what are they?",
        body:
          "A determinant is a single number calculated from a square matrix. For a 2×2 matrix [[a, b], [c, d]], the determinant is ad − bc. If it's 0, the matrix is 'singular' — think of it like a flat rubber band that's lost its spring. Non-zero determinant means the matrix is invertible. For 3×3, you expand using minors and cofactors. It's a bit tedious but the pattern is mechanical.",
      },
      {
        title: "Properties of determinants",
        body:
          "There are rules that make life easier. If two rows are swapped, the determinant flips sign. If two rows are identical, determinant = 0. If you multiply a row by a constant k, the determinant gets multiplied by k. Adding a multiple of one row to another doesn't change the determinant. These properties help you compute determinants faster without expanding fully.",
      },
      {
        title: "Inverse of a matrix",
        body:
          "The inverse of a matrix A is A⁻¹, such that A × A⁻¹ = I (the identity matrix). For 2×2, A⁻¹ = (1/det(A)) × adj(A). The adjoint is just switching a and d, negating b and c — easy. If det(A) = 0, no inverse exists. The inverse is useful for solving systems of equations: Ax = b → x = A⁻¹b.",
      },
    ],
    keyPoints: [
      "Matrix: rectangular array of numbers with m rows, n columns",
      "Addition: same dimensions, add matching entries",
      "Multiplication: AB exists if columns(A) = rows(B)",
      "Determinant of 2×2: ad − bc",
      "det(AB) = det(A)·det(B)",
      "A is invertible iff det(A) ≠ 0",
      "Inverse of 2×2: (1/det) × adj — swap a,d and negate b,c",
      "Use Cramer's rule or matrix inverse to solve linear systems",
    ],
    importantQuestions: [
      "Find the determinant of a 3×3 matrix using expansion of minors.",
      "If A = [[1, 2], [3, 4]], find A⁻¹ and verify A·A⁻¹ = I.",
      "Prove that the determinant of a matrix with two equal rows is 0.",
      "Solve the system: 2x + 3y = 8, x − y = −1 using matrix method.",
      "If A and B are 2×2 matrices, show that det(AB) = det(A)·det(B) with an example.",
    ],
  },

  "straight-line": {
    overview:
      "Remember drawing straight lines on graph paper in school? It turns out there's a whole universe hiding inside those lines. Slope, intercepts, parallel lines, perpendicular lines — this chapter gives you the tools to describe any straight line with an equation. And once you can do that, you can predict where lines meet, how steep they are, and a whole lot more.",
    concepts: [
      {
        title: "Slope of a line",
        body:
          "Slope (m) tells you how steep a line is. It's rise over run — change in y divided by change in x. Between any two points (x₁, y₁) and (x₂, y₂), m = (y₂ − y₁)/(x₂ − x₁). A positive slope tilts up, negative tilts down. Zero slope? Flat horizontal line. Undefined slope? Vertical line. That's all there is to it.",
      },
      {
        title: "Equation of a line in all its forms",
        body:
          "There are way too many forms, and you need 'em all. Slope-intercept: y = mx + c. Point-slope: y − y₁ = m(x − x₁). Two-point: (y − y₁)/(x − x₁) = (y₂ − y₁)/(x₂ − x₁). Intercept form: x/a + y/b = 1. General form: ax + by + c = 0. Which one to use? Depends what info you're given. If you have slope and y-intercept, do slope-intercept. If you have two points, use two-point form. Easy.",
      },
      {
        title: "Parallel and perpendicular lines",
        body:
          "Two lines are parallel if their slopes are equal: m₁ = m₂. They never meet — like train tracks. Perpendicular lines meet at a right angle, and their slopes multiply to −1: m₁·m₂ = −1. So if one line has slope 2, a perpendicular line has slope −1/2. Flip it, negate it — done.",
      },
      {
        title: "Distance between a point and a line",
        body:
          "Need to find how far a point is from a line? There's a formula. For a line ax + by + c = 0 and point (x₁, y₁), distance = |ax₁ + by₁ + c| / √(a² + b²). That absolute value makes sure distance is always positive. The denominator is just Pythagoras on the coefficients. Give it the coordinates and the line, and it spits out the perpendicular distance.",
      },
      {
        title: "Family of lines",
        body:
          "A 'family of lines' means lines that share something in common. Like all lines passing through a given point, or all lines with the same slope. The general trick: if you have two lines L₁ = 0 and L₂ = 0, then L₁ + λL₂ = 0 represents a family of lines through their intersection. Change λ and you get different lines, but they all pass through that same intersection point.",
      },
    ],
    keyPoints: [
      "Slope m = (y₂ − y₁)/(x₂ − x₁) = rise/run",
      "y = mx + c — slope-intercept form",
      "Parallel lines: m₁ = m₂",
      "Perpendicular lines: m₁·m₂ = −1",
      "Point-to-line distance: |ax₁ + by₁ + c| / √(a² + b²)",
      "x-intercept is where y = 0, y-intercept is where x = 0",
    ],
    importantQuestions: [
      "Find the equation of a line passing through (2, 3) with slope 4.",
      "Find the distance between the parallel lines 3x + 4y − 7 = 0 and 3x + 4y + 8 = 0.",
      "Find the equation of a line perpendicular to 2x − 3y + 5 = 0 and passing through (1, −1).",
      "Show that three given points are collinear using slope.",
      "A line makes intercepts whose sum is 7 and product is 12. Find its equation.",
    ],
  },

  circle: {
    overview:
      "Circles are everywhere — wheels, pizzas, orbits, the moon. And they're deceptively simple: just a set of points all at the same distance from a center. But when you mix circles with algebra and geometry, you get some really neat formulas. This chapter is about describing circles with equations and finding tangents that just barely kiss them.",
    concepts: [
      {
        title: "Standard equation of a circle",
        body:
          "The basic form: (x − h)² + (y − k)² = r². Here (h, k) is the center and r is the radius. If the center is at the origin (0,0), it simplifies to x² + y² = r². That's the equation of a circle — literally just Pythagoras applied to every point on the circumference. Any time you see x² + y² with equal coefficients, think 'circle'.",
      },
      {
        title: "General equation and completing the square",
        body:
          "Sometimes you get x² + y² + 2gx + 2fy + c = 0. That's the general form of a circle. To find the center and radius, complete the square — group x terms, group y terms, and make them into perfect squares. Center ends up at (−g, −f) and radius is √(g² + f² − c). The condition for a real circle is g² + f² − c > 0, else it's imaginary or a point.",
      },
      {
        title: "Tangent to a circle",
        body:
          "A tangent is a line that touches the circle at exactly one point. For a circle x² + y² = r², the tangent at (x₁, y₁) is xx₁ + yy₁ = r². That's the formula. The radius to that point is perpendicular to the tangent — always. If you know the slope m, the tangent equation is y = mx ± r√(1 + m²). The ± gives you two parallel tangents, one on each side.",
      },
      {
        title: "Condition for tangency",
        body:
          "A line y = mx + c is tangent to x² + y² = r² if c² = r²(1 + m²). That's the condition — derived by solving the line and circle together and setting the discriminant to 0 (only one intersection). In more general cases, find the perpendicular distance from the center to the line; if it equals the radius, the line is tangent.",
      },
    ],
    keyPoints: [
      "Standard circle: (x − h)² + (y − k)² = r²",
      "General form: x² + y² + 2gx + 2fy + c = 0",
      "Center (−g, −f), radius = √(g² + f² − c)",
      "Tangent at (x₁, y₁) on x² + y² = r²: xx₁ + yy₁ = r²",
      "Line y = mx + c is tangent if c² = r²(1 + m²)",
      "Radius to point of tangency is perpendicular to tangent",
    ],
    importantQuestions: [
      "Find the equation of a circle with center (3, −4) and radius 5.",
      "Find the center and radius of x² + y² − 6x + 8y − 11 = 0.",
      "Find the equation of the tangent to x² + y² = 25 at the point (3, 4).",
      "Show that the line 3x + 4y = 25 touches the circle x² + y² = 25.",
      "Find the equation of a circle passing through three given points.",
    ],
  },

  "conic-sections": {
    overview:
      "If you cut a cone at different angles, you get different shapes — a circle, an ellipse, a parabola, or a hyperbola. Wild, right? These 'conic sections' show up everywhere: the path of a thrown ball (parabola), the orbit of planets (ellipse), the shape of a satellite dish (parabola again). This chapter teaches you how to describe them with equations.",
    concepts: [
      {
        title: "What are conic sections?",
        body:
          "Take a cone (like an ice cream cone but double-ended). Slice it straight across and you get a circle. Slice it at a tilt and you get an ellipse. Slice it parallel to the slant and you get a parabola. Slice it steep enough to cut both halves and you get a hyperbola. All four shapes come from the same cone — just different angles. That's why they're called 'conic sections'.",
      },
      {
        title: "Parabola — the U-shaped curve",
        body:
          "A parabola is the set of points equidistant from a fixed point (focus) and a fixed line (directrix). Standard form: y² = 4ax (opens right). The focus is at (a, 0), the directrix is x = −a, and the vertex is at (0, 0). Every parabola is symmetric about its axis. The latus rectum is the chord passing through the focus perpendicular to the axis — its length is 4a.",
      },
      {
        title: "Ellipse — the stretched circle",
        body:
          "An ellipse looks like a squashed circle. Standard form: x²/a² + y²/b² = 1, where a > b. The longer axis is the major axis (length 2a), the shorter is the minor axis (length 2b). There are two foci (plural of focus) — the sum of distances from any point on the ellipse to the two foci is constant (= 2a). Eccentricity e = √(1 − b²/a²) — how 'squashed' it is. e = 0 means a circle.",
      },
      {
        title: "Hyperbola — the mirrored curve",
        body:
          "A hyperbola has two separate branches that mirror each other. Standard form: x²/a² − y²/b² = 1. The minus sign is what makes it different from an ellipse — that changes everything. The eccentricity e = √(1 + b²/a²) is always > 1. Hyperbolas have asymptotes — diagonal lines that the curve approaches but never touches: y = ±(b/a)x.",
      },
    ],
    keyPoints: [
      "All conics come from slicing a double cone",
      "Parabola: set of points equidistant from focus and directrix",
      "Standard parabola y² = 4ax: focus (a,0), directrix x = −a",
      "Ellipse: x²/a² + y²/b² = 1, sum of distances to foci = 2a",
      "Eccentricity: e = 0 (circle), 0 < e < 1 (ellipse), e = 1 (parabola), e > 1 (hyperbola)",
      "Hyperbola: x²/a² − y²/b² = 1, asymptotes y = ±(b/a)x",
      "Latus rectum: chord through focus perpendicular to axis",
    ],
    importantQuestions: [
      "Find the focus, directrix, and latus rectum of y² = 16x.",
      "Find the equation of an ellipse with foci (±4, 0) and major axis length 10.",
      "Find the eccentricity and asymptotes of x²/9 − y²/16 = 1.",
      "A bridge is in the shape of a parabolic arch. The span is 30 m and the maximum height is 10 m. Find the equation of the parabola.",
      "Prove that for any point on an ellipse, the sum of distances to the foci is constant.",
    ],
  },

  dispersion: {
    overview:
      "You and your friends score 70, 72, 68, and 71 on a test. Pretty similar, right? Now imagine scores of 30, 95, 50, and 85 — same average, but wildly different. That difference — how spread out the numbers are — is called dispersion. This chapter gives you tools to measure that spread, so you can tell if data is tightly clustered or all over the place.",
    concepts: [
      {
        title: "Range — the simplest measure",
        body:
          "Range = maximum value − minimum value. That's it. It's the easiest measure of dispersion. For test scores 30, 95, 50, 85, the range is 95 − 30 = 65. For 70, 72, 68, 71, the range is just 4. Quick and dirty. Downside? It only uses two numbers from the whole dataset, so outliers can mess it up badly.",
      },
      {
        title: "Mean deviation",
        body:
          "Mean deviation tells you 'on average, how far are the numbers from the mean?' Steps: find the mean, subtract it from each data point (take absolute value), then average those differences. For data x₁, x₂, ..., xₙ: MD = (∑|xᵢ − mean|)/n. It uses all the data, unlike range. The absolute values mean we don't care about direction — only distance.",
      },
      {
        title: "Variance and standard deviation",
        body:
          "This is the big one. Variance is the average of squared deviations from the mean. Instead of absolute values, we square the differences. Why square? It punishes big deviations more (like a score that's way off). For a population: σ² = ∑(xᵢ − μ)²/n. For a sample: s² = ∑(xᵢ − x̄)²/(n − 1). Standard deviation (σ or s) is just the square root of variance — it brings units back to normal. A low SD means data is clustered around the mean; a high SD means it's scattered.",
      },
      {
        title: "Coefficient of variation",
        body:
          "Standard deviation alone isn't always fair. Compare heights (in cm) with weights (in kg) — different units, different scales. The coefficient of variation (CV) fixes that: CV = (σ/mean) × 100%. It's a percentage. A CV of 10% means the standard deviation is 10% of the mean. The higher the CV, the more relative variability. Useful for comparing datasets with different units or vastly different means.",
      },
    ],
    keyPoints: [
      "Range = max − min — simple but sensitive to outliers",
      "Mean deviation = average of |xᵢ − mean|",
      "Population variance σ² = ∑(xᵢ − μ)² / n",
      "Sample variance s² = ∑(xᵢ − x̄)² / (n − 1)",
      "Standard deviation = √variance — in the same units as the data",
      "Coefficient of variation = (σ/mean) × 100% — for comparing spreads",
    ],
    importantQuestions: [
      "Find the range, variance, and standard deviation for 5, 8, 12, 15, 20.",
      "Two teams have the same mean score of 65. Team A has SD 8, Team B has SD 15. Which is more consistent? Why?",
      "Find the coefficient of variation for heights: 150, 155, 160, 165, 170 cm.",
      "The mean and SD of 100 items are 50 and 4. If each item is increased by 5, what happens to the mean and SD?",
      "Explain why variance uses squared deviations instead of absolute deviations.",
    ],
  },
};

export default content;
