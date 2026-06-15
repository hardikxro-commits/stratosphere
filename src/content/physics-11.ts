interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "units-measurements": {
    overview:
      "Ever wondered how scientists know the distance to a star trillions of kilometers away, or how they measure something as tiny as the width of a human hair? It all starts with units and measurements. Physics is built on numbers - and those numbers mean nothing without a standard unit to compare against. This chapter is about the foundation of all physics: how we measure things, how we describe measurements, and how we deal with the fact that no measurement is ever perfect. You'll learn why 1 meter means the same thing in Mumbai and Moscow, why significant figures matter when you're calculating rocket trajectories, and how a tiny error in measurement can snowball into a huge mistake in your final answer. This might feel like the boring chapter at first - learning about SI units and error analysis - but trust me, it's the most practical stuff you'll ever study. Every single calculation you do in physics from now on depends on getting units right and understanding how accurate your numbers really are.",
    concepts: [
      {
        title: "Need for Measurement and Standard Units",
        body:
          "Imagine trying to build a house where one person uses their foot as a unit and another uses their hand. Chaos, right? That's why we need standard units - a common language for measurement. Early civilizations used body parts (cubit = forearm length, foot = well, a foot), but those vary from person to person. The French Revolution gave us the metric system, which evolved into the SI system (Systeme International). Seven base units form the foundation: meter (length), kilogram (mass), second (time), ampere (current), kelvin (temperature), candela (luminous intensity), and mole (amount of substance). Everything else - speed, force, energy, pressure - is derived from these seven. Think of them as the primary colors of measurement; you can mix them to get any shade you need.",
      },
      {
        title: "SI Base Units and Their Definitions",
        body:
          "Let's get specific about what each base unit actually means. The meter is defined as the distance light travels in a vacuum in 1/299,792,458 of a second. The kilogram was historically defined by a platinum-iridium cylinder kept in France, but since 2019 it's based on the Planck constant. The second is defined by the vibrations of cesium-133 atoms - 9,192,631,770 oscillations to be exact. The ampere comes from the force between parallel current-carrying wires. Kelvin is based on the triple point of water (273.16 K). The mole is Avogadro's number (6.022 x 10^23) of entities. And the candela is based on the luminous intensity of a specific frequency of light. Why so complicated? Because nature doesn't change - a cesium atom today vibrates at the same frequency as it did a billion years ago. That's reliability.",
      },
      {
        title: "Derived Units",
        body:
          "Derived units are combinations of base units. Speed is meters per second (m/s). Force is kilogram-meter per second squared - we call that a newton (N). Pressure is newton per square meter - that's a pascal (Pa). Energy is newton-meter - the joule (J). Power is joule per second - the watt (W). Electric charge is ampere-second - the coulomb (C). The beauty is you can break any physical quantity down into base units. Acceleration is m/s^2, density is kg/m^3, momentum is kg-m/s. If you ever forget a formula, just check the units - they'll tell you if you're on the right track. This is called dimensional analysis, and it's a lifesaver in exams.",
      },
      {
        title: "Dimensions and Dimensional Formula",
        body:
          "Every physical quantity has dimensions - a way of expressing it in terms of the base quantities. Length is [L], mass is [M], time is [T], current is [A], temperature is [K], amount of substance is [mol], and luminous intensity is [cd]. Speed has dimensions [L T^-1] - one length per time. Acceleration is [L T^-2]. Force is [M L T^-2]. Energy is [M L^2 T^-2]. The dimensional formula is just the exponents: for force, it's [M^1 L^1 T^-2]. When you multiply or divide quantities, their dimensions multiply or divide too. You can only add or subtract quantities with the same dimensions - you can't add apples to oranges. This is the principle of dimensional homogeneity.",
      },
      {
        title: "Applications of Dimensional Analysis",
        body:
          "Dimensional analysis is a Swiss Army knife. First, it checks the correctness of a formula. If the dimensions on both sides of an equation don't match, the equation is wrong - no debate. Second, it helps derive relationships between quantities. Suppose you want to find how the time period of a pendulum depends on its length and gravity. Set up a proportional relationship, compare dimensions, and boom - you get T proportional to square root of (L/g). Third, it converts units from one system to another. If you know 1 newton = 1 kg-m/s^2, you can convert it to CGS units: 1 N = 10^5 dynes. But watch out - dimensional analysis can't tell you about dimensionless constants (like the 2pi in the pendulum formula). You still need experiment or theory for those.",
      },
      {
        title: "Limitations of Dimensional Analysis",
        body:
          "Dimensional analysis is powerful, but it has limits. It can't handle dimensionless constants - you'll never derive the 2pi in T = 2pi sqrt(L/g) from dimensions alone. It can't distinguish between quantities with the same dimensions - torque and energy both have [M L^2 T^-2], but they're completely different concepts. It only works for relationships involving products or quotients - you can't derive formulas with sums like s = ut + 1/2 at^2 directly. It also can't handle trigonometric, logarithmic, or exponential functions of dimensional quantities - the argument of sin, log, or exp must always be dimensionless. When you use dimensional analysis, think of it as a quick sanity check, not a derivation tool.",
      },
      {
        title: "Significant Figures",
        body:
          "Significant figures (sig figs) tell you how precise a measurement is. If you measure a length as 3.5 m, that's two sig figs - the length is between 3.4 and 3.6 m. The rules for counting sig figs are simple: all non-zero digits are significant (42 has 2, 3.1416 has 5). Zeros between non-zero digits count (101 has 3). Leading zeros don't count (0.0012 has 2 - they're just placeholders). Trailing zeros after a decimal point count (5.00 has 3 - they show precision). Trailing zeros in a whole number without a decimal are ambiguous (1200 could have 2, 3, or 4 sig figs). In calculations, your answer should have no more sig figs than your least precise measurement. Add and subtract: round to the least decimal places. Multiply and divide: round to the least sig figs.",
      },
      {
        title: "Scientific Notation",
        body:
          "Scientific notation saves your sanity when dealing with huge or tiny numbers. Instead of writing 300,000,000 m/s, write 3 x 10^8 m/s. A number in scientific notation has three parts: a coefficient (between 1 and 10), a base (10), and an exponent. 6.022 x 10^23 is Avogadro's number. 1.6 x 10^-19 C is the charge on an electron. To add or subtract, the exponents must match. To multiply, multiply the coefficients and add the exponents: (2 x 10^3)(3 x 10^4) = 6 x 10^7. To divide, divide the coefficients and subtract exponents. Scientific notation also makes sig figs crystal clear - 1.2 x 10^4 has two sig figs, 1.200 x 10^4 has four.",
      },
      {
        title: "Errors in Measurement",
        body:
          "No measurement is perfect - every measurement comes with uncertainty. That uncertainty is called error. Systematic errors are consistent - they shift every measurement the same way (like a poorly calibrated scale reading 0.5 kg too heavy). Random errors are unpredictable - they scatter measurements around the true value (like slight variations in reaction time when using a stopwatch). To minimize random errors, take multiple readings and average them. To fix systematic errors, calibrate your instruments. The accuracy of a measurement is how close it is to the true value. Precision is how consistently you get the same result. A good measurement needs both - you can be precisely wrong if your instrument is systematically off.",
      },
      {
        title: "Absolute, Relative, and Percentage Error",
        body:
          "Absolute error is the difference between the measured value and the true value: delta a = |a_0 - a_m|, where a_0 is true value and a_m is measured. If you measure a length as 5.2 cm and the true value is 5.0 cm, your absolute error is 0.2 cm. Relative error is absolute error divided by the true value: delta a / a_0. For our example, 0.2/5.0 = 0.04. Percentage error is relative error times 100: 4%. When you have multiple measurements, the arithmetic mean is taken as the best estimate. The mean absolute error is the average of all absolute errors. Relative error gives you a sense of proportion - an error of 1 cm in measuring a building's height is tiny, but the same error in measuring a pencil is huge. In physics, relative and percentage errors matter more than absolute errors.",
      },
      {
        title: "Propagation of Errors",
        body:
          "When you use measured quantities in a calculation, the errors propagate through. For addition and subtraction, absolute errors add: if z = a + b, then delta z = delta a + delta b. For a = 5.0 +- 0.1 cm and b = 3.0 +- 0.1 cm, their sum is 8.0 +- 0.2 cm. For multiplication and division, relative errors add: if z = a x b, then delta z/z = delta a/a + delta b/b. For powers, the relative error multiplies: if z = a^n, then delta z/z = n(delta a/a). This is why squaring a measurement doubles its relative error - a small measurement error becomes a big problem in the final answer. Always measure the most sensitive quantity in your experiment with the highest precision.",
      },
      {
        title: "Vernier Caliper",
        body:
          "A Vernier caliper measures length with precision up to 0.1 mm or 0.05 mm. It has a main scale (like a regular ruler) and a Vernier scale (a sliding secondary scale). The least count (LC) = main scale division / number of Vernier divisions. For a standard caliper, 1 MSD = 1 mm, 10 Vernier divisions = 9 mm, so LC = 1/10 = 0.1 mm. To read it: note the main scale reading before the zero of the Vernier scale, then find which Vernier division lines up perfectly with a main scale division. Multiply that by LC and add to the main scale reading. Common mistakes: forgetting to check for zero error (when the caliper reads non-zero when fully closed), or misaligning the Vernier lines. Always subtract the zero error (positive or negative) from your reading.",
      },
      {
        title: "Screw Gauge (Micrometer)",
        body:
          "A screw gauge measures thickness or diameter with precision up to 0.01 mm. It works on the principle of a screw - one complete rotation of the thimble moves the spindle by a fixed distance called the pitch (usually 0.5 mm or 1 mm). If the circular scale has 100 divisions, the least count = pitch / number of circular divisions. To read: note the main scale reading (visible on the sleeve), then note the circular scale division aligned with the reference line. Multiply by LC and add. Like the Vernier caliper, check for zero error. The screw gauge also suffers from backlash error - when you reverse direction, there's a slight play in the threads. Always approach the final reading by turning the screw forward (tightening), not backward.",
      },
      {
        title: "Measuring Mass, Time, and Temperature",
        body:
          "Mass is measured using a balance - either a physical balance (comparing with standard masses) or an electronic balance (using strain gauges). A physical balance has a least count of about 0.01 g, while electronic balances can go to 0.001 g or better. Time is measured using clocks - from stopwatches (least count 0.1 s or 0.01 s) to atomic clocks (accurate to 1 second in millions of years). In the lab, you'll mostly use a stopwatch, and reaction time (~0.2 s) is the main source of random error. Temperature is measured with thermometers - liquid-in-glass (mercury or alcohol), thermocouples (for wide ranges), or resistance thermometers (high precision). Each instrument has its own range and least count. Always choose an instrument whose least count matches the required precision.",
      },
    ],
    keyPoints: [
      "Seven SI base units: m, kg, s, A, K, mol, cd. All other units derived from these.",
      "Dimensions: [L], [M], [T], [A], [K], [mol], [cd]. Each quantity has unique dimensional formula.",
      "Principle of homogeneity: only quantities with same dimensions can be added/subtracted.",
      "Dimensional analysis checks formula correctness, derives relationships, converts units - but can't find dimensionless constants.",
      "Significant figures: non-zero digits are significant; zeros between them count; leading zeros don't.",
      "Multiply/divide: round to least sig figs. Add/subtract: round to least decimal places.",
      "Systematic errors are consistent (fixed by calibration). Random errors are unpredictable (reduced by averaging).",
      "Absolute error = |true value - measured value|. Relative error = absolute/true. Percentage = relative x 100.",
      "Addition/subtraction: absolute errors add. Multiplication/division/powers: relative errors add.",
      "Vernier caliper least count = MSD / number of Vernier divisions. Typically 0.01 cm.",
      "Screw gauge least count = pitch / number of circular scale divisions. Typically 0.001 cm.",
      "Zero error must be checked and corrected for both instruments.",
      "Accuracy = closeness to true value. Precision = consistency of repeated measurements.",
      "Scientific notation: coefficient between 1 and 10, times 10 raised to exponent.",
    ],
    importantQuestions: [
      "Check the correctness of F = mv^2/r using dimensional analysis, where F is force, m is mass, v is velocity, r is radius.",
      "A box has dimensions 5.2 cm, 3.8 cm, 2.1 cm each with error +-0.1 cm. Find percentage error in volume.",
      "A screw gauge has 100 circular divisions, pitch 1 mm. Zero error: 3 divisions below reference. Main scale reads 4 mm, circular scale 45. Find corrected reading.",
      "Explain the difference between systematic and random errors with examples. How is each minimized?",
      "A wire diameter measured four times: 0.052, 0.053, 0.051, 0.054 cm. Find mean, mean absolute error, percentage error.",
      "Convert 10^5 N/m^2 into CGS units using dimensional analysis.",
      "How many significant figures in: (a) 0.00405 (b) 3400 (c) 7.020 x 10^3 (d) 100.00?",
      "Derive the relationship between time period T of a pendulum, length L, and g using dimensional analysis.",
    ],
  },

  "mathematical-methods": {
    overview:
      "Physics is written in the language of mathematics. If you don't speak that language, the laws of physics will sound like gibberish. This chapter is your crash course in the math tools you'll need for the rest of Std 11 and 12 physics. We're talking vectors - quantities with both size and direction that describe everything from forces to velocities. We're talking basic calculus - the mathematics of change that lets us figure out how fast something is moving or how quickly it's speeding up. And we're talking about how to add, subtract, multiply, and break down these quantities so you can solve real physics problems. Most students skip this chapter thinking it's just math review, and then they struggle with projectile motion, circular motion, and Newton's laws. Don't be that student. Master this chapter, and the rest of physics becomes dramatically easier. Think of it as sharpening your axe before cutting down the tree.",
    concepts: [
      {
        title: "Scalars vs Vectors",
        body:
          "Scalars have only magnitude - a number and a unit. Mass (5 kg), temperature (300 K), speed (20 m/s), energy (100 J). Vectors have both magnitude and direction - displacement (5 m north), velocity (20 m/s east), force (10 N downward). In writing, vectors are shown in bold (v) or with an arrow. The magnitude of a vector is written as |v| or just v. This distinction is crucial because adding scalars is just arithmetic (5 kg + 3 kg = 8 kg), but adding vectors depends on direction. If you walk 5 m east and then 5 m west, your total displacement is zero, not 10 m. That's the whole point of vectors - direction matters.",
      },
      {
        title: "Representation of Vectors",
        body:
          "Vectors are represented graphically as arrows. The length of the arrow shows the magnitude, and the arrowhead shows the direction. A vector from point A to point B is written as AB with an arrow. The angle measured from a reference direction (usually positive x-axis) gives the direction. Mathematically, we represent vectors in component form: A = A_x i-hat + A_y j-hat. Here A_x = A cos theta and A_y = A sin theta are the components along x and y axes, and i-hat and j-hat are unit vectors. A unit vector has magnitude 1 and points in a specific direction - it's a pure direction indicator. The magnitude |A| = sqrt(A_x^2 + A_y^2). This component form makes vector calculations much easier - you just work with numbers instead of arrows.",
      },
      {
        title: "Addition and Subtraction of Vectors",
        body:
          "The triangle law: place vectors tip-to-tail. The resultant (sum) is the vector from the first tail to the last tip. The parallelogram law: place both vectors tail-to-tail, complete the parallelogram - the diagonal from the common tail gives the resultant. For components: just add components separately. R = A + B means R_x = A_x + B_x, R_y = A_y + B_y. Subtraction is similar: A - B means add the negative of B. The negative of a vector has the same magnitude but opposite direction. The magnitude of the resultant depends on the angle between them: |R| = sqrt(A^2 + B^2 + 2AB cos theta). When theta = 0 degrees, |R| = A + B (maximum). When theta = 180 degrees, |R| = |A - B| (minimum). When theta = 90 degrees, |R| = sqrt(A^2 + B^2). This is why forces at different angles combine differently.",
      },
      {
        title: "Resolution of Vectors",
        body:
          "Resolution is the reverse of addition - splitting a vector into perpendicular components. Any vector A can be broken into A_x = A cos theta (along x-axis) and A_y = A sin theta (along y-axis). Why do this? Because forces at angles are harder to work with than forces along axes. When a block slides down an incline, its weight mg acts vertically downward. But we split it into mg sin theta (parallel to incline, causing motion) and mg cos theta (perpendicular to incline, balanced by normal reaction). This trick simplifies nearly every inclined plane problem. In 3D, we add a z-component: A = A_x i-hat + A_y j-hat + A_z k-hat.",
      },
      {
        title: "Scalar Product (Dot Product)",
        body:
          "The dot product of two vectors gives a scalar: A dot B = |A||B| cos theta = AB cos theta. In component form: A dot B = A_x B_x + A_y B_y + A_z B_z. The dot product tells you how much of A is in the direction of B. If A and B are perpendicular, A dot B = 0 (cos 90 = 0). If they're parallel, A dot B = |A||B| (cos 0 = 1). Work is a classic dot product: W = F dot d = Fd cos theta. Only the component of force in the direction of displacement does work. If you push a wall (d = 0), work is zero no matter how hard you push. Power is also a dot product: P = F dot v. Dot products always produce scalars - no direction, just magnitude.",
      },
      {
        title: "Vector Product (Cross Product)",
        body:
          "The cross product gives a vector: A x B = |A||B| sin theta n-hat, where n-hat is a unit vector perpendicular to both A and B (right-hand rule). The magnitude is |A x B| = AB sin theta. In component form using determinants: A x B = (A_y B_z - A_z B_y)i-hat + (A_z B_x - A_x B_z)j-hat + (A_x B_y - A_y B_x)k-hat. The cross product is maximum when vectors are perpendicular (sin 90 = 1) and zero when parallel (sin 0 = 0). Torque tau = r x F is a cross product - only the perpendicular component of force produces torque. Angular momentum L = r x p is another. The direction follows the right-hand rule: curl fingers from first vector to second, thumb gives direction. Cross products are antisymmetric: A x B = - (B x A).",
      },
      {
        title: "Differentiation: Rate of Change",
        body:
          "Differentiation tells you how fast something changes. If position s changes with time, velocity v = ds/dt (derivative of position). Acceleration a = dv/dt = d^2s/dt^2 (second derivative). The derivative of a function f(x) at a point is the slope of the tangent line at that point - how steep the curve is. Basic rules: d/dx(x^n) = nx^(n-1). d/dx(constant) = 0. d/dx(sin x) = cos x. d/dx(cos x) = -sin x. The chain rule: if y = f(g(x)), then dy/dx = f'(g(x)) dot g'(x). For physics, the most important application is: velocity is the slope of position-time graph, acceleration is the slope of velocity-time graph. Maxima and minima - where the derivative is zero - help you find when something reaches its highest point or maximum range.",
      },
      {
        title: "Integration: Reverse of Differentiation",
        body:
          "Integration is the opposite of differentiation - it adds up tiny pieces to get a total. If you know velocity as a function of time, integrating gives displacement: s = integral v dt. If you know acceleration, integrating gives velocity: v = integral a dt. The integral integral x^n dx = x^(n+1)/(n+1) + C, where C is the constant of integration (determined by initial conditions). In physics, integration gives you area under a curve. The area under a velocity-time graph gives displacement. The area under a force-displacement graph gives work done. Definite integrals have limits: integral from a to b of f(x) dx gives the area between x = a and x = b. You'll use integration constantly from here - for equations of motion, work-energy theorem, and beyond.",
      },
      {
        title: "Logarithms",
        body:
          "Logarithms are the inverse of exponentiation. If 10^2 = 100, then log base 10 of 100 = 2. Natural log uses base e (about 2.718): ln(x) = log base e of x. Log rules: log(ab) = log a + log b. log(a/b) = log a - log b. log(a^n) = n log a. In physics, logs are used in radioactive decay (N = N_0 e^(-lambda t) becomes ln N = ln N_0 - lambda t), in sound intensity (decibel scale: beta = 10 log(I/I_0)), and in the pH scale. Log scales compress huge ranges into manageable numbers - the Richter scale for earthquakes and the decibel scale for sound both use logs. If you ever see exponential growth or decay in physics, logs are the tool to linearize it.",
      },
      {
        title: "Trigonometry Basics for Physics",
        body:
          "You don't need to be a trig master for Std 11 physics, but you need the basics. For a right-angled triangle: sin theta = opposite/hypotenuse, cos theta = adjacent/hypotenuse, tan theta = opposite/adjacent. Key values to memorize: sin 0 = 0, sin 30 = 1/2, sin 45 = 1/sqrt(2), sin 60 = sqrt(3)/2, sin 90 = 1. Cosine values are the reverse. The Pythagorean identity: sin^2 theta + cos^2 theta = 1. In physics, trig appears everywhere: resolving vectors, projectile motion (range, height, time of flight), inclined planes, circular motion, waves, and optics. The angle in a projectile's launch determines everything - range, maximum height, time of flight. Commit these relationships to memory.",
      },
      {
        title: "Graphs in Physics",
        body:
          "Graphs are not just pictures - they're powerful analytical tools. A straight line graph y = mx + c tells you: slope m gives the rate of change, y-intercept c gives the starting value. In physics, many relationships are linearized by clever plotting. For a freely falling body, plotting s vs t^2 gives a straight line whose slope is g/2. For Ohm's law, V vs I gives a straight line with slope R. For Hooke's law, F vs x gives slope k. When you see a curved graph, its slope at any point gives a physical quantity - slope of s-t graph is velocity, slope of v-t graph is acceleration. The area under the curve also has significance - area under v-t graph is displacement, area under F-s graph is work. Always label axes with quantities and units, choose appropriate scales, and draw the best-fit line.",
      },
    ],
    keyPoints: [
      "Scalars have only magnitude; vectors have magnitude and direction.",
      "Vector addition: triangle law (tip-to-tail) or parallelogram law. Use component addition for numerical work.",
      "A vector in component form: A = A_x i-hat + A_y j-hat. Magnitude: |A| = sqrt(A_x^2 + A_y^2).",
      "Resolution: A_x = A cos theta, A_y = A sin theta. Breaking vectors into components simplifies problems.",
      "Dot product: A dot B = AB cos theta = A_x B_x + A_y B_y + A_z B_z. Result is scalar. Zero for perpendicular vectors.",
      "Cross product: |A x B| = AB sin theta. Direction by right-hand rule. Zero for parallel vectors.",
      "Derivative: rate of change. ds/dt = velocity, dv/dt = acceleration. Slope of tangent line.",
      "Integral: area under curve. Integral v dt = displacement, integral F dx = work. Reverse of differentiation.",
      "log(ab) = log a + log b, log(a/b) = log a - log b, log(a^n) = n log a.",
      "sin^2 theta + cos^2 theta = 1. Key angles: 0, 30, 45, 60, 90 degrees - memorize their sine and cosine.",
      "Graph slopes and areas give physical quantities: slope of s-t gives v, area under v-t gives s.",
      "Unit vectors i-hat, j-hat, k-hat have magnitude 1 and point along x, y, z axes respectively.",
      "Chain rule: if y = f(g(x)), dy/dx = f'(g(x)) dot g'(x). Essential for composite functions.",
      "Right-hand rule: curl fingers from first to second vector in cross product, thumb gives direction.",
    ],
    importantQuestions: [
      "A force of 10 N acts at 60 degrees to horizontal. Find its horizontal and vertical components.",
      "Find the angle between vectors A = 2i-hat + 3j-hat - k-hat and B = i-hat - 2j-hat + 3k-hat using dot product.",
      "If A = 3i-hat + 4j-hat and B = 2i-hat - j-hat + 2k-hat, find (a) A dot B (b) A x B (c) unit vector perpendicular to both.",
      "The displacement of a particle is s = 2t^3 - 5t^2 + 3t + 1. Find velocity and acceleration at t = 2 s.",
      "Integrate (3t^2 + 4t - 2) dt from t = 0 to t = 3. What physical quantity could this represent?",
      "A vector has magnitude 10 and makes 30 degrees with x-axis. Write in component form and find a unit vector in its direction.",
      "Using parallelogram law, show resultant magnitude R = sqrt(A^2 + B^2 + 2AB cos theta).",
      "A car accelerates from rest with a = 4t - 2. Find velocity after 5 s and distance traveled.",
    ],
  },

  "motion-in-plane": {
    overview:
      "Throw a ball in the air - why does it follow that curved path? Why does it go faster at some points and slower at others? And why, no matter how hard you throw it straight up, does it always come back down? Motion in a plane - two-dimensional motion - is where physics gets really interesting. This chapter covers three big ideas: projectile motion (things flying through the air), relative velocity (how speed depends on your frame of reference), and uniform circular motion (things going around in circles). These aren't just exam topics - they are the physics behind every sport (why basketball players aim at an angle), every vehicle turn (why you feel pushed sideways), and even why planes take off into the wind. By the end of this chapter, you will be able to predict exactly where a ball will land just from how it was thrown. That is not magic - that is physics.",
    concepts: [
      {
        title: "Motion in Two Dimensions - Position and Displacement",
        body:
          "In one dimension, position is just a number on a line. In two dimensions, it is a vector - you need both x and y coordinates. Position vector r = x i-hat + y j-hat. Displacement is the change in position: delta r = r_2 - r_1. The path between the two points does not matter - displacement is the straight line from start to finish. Distance traveled is the actual path length, which is usually longer. This is a common exam trap: always use displacement (vector difference) for velocity calculations, not distance. A particle going around a circular track and returning to the starting point has zero displacement but traveled 2 pi r distance. Average velocity = displacement/time. Average speed = distance/time. They are different.",
      },
      {
        title: "Velocity and Acceleration in a Plane",
        body:
          "Average velocity = delta r / delta t, a vector in the direction of displacement. Instantaneous velocity v = dr/dt - the slope of the position-time graph, now a vector tangent to the path. Acceleration a = dv/dt = d^2r/dt^2. In component form: v_x = dx/dt, v_y = dy/dt, a_x = dv_x/dt, a_y = dv_y/dt. The key insight: motion in x and y directions is independent. A ball thrown horizontally falls at the same rate as a ball dropped straight down. The horizontal motion (constant velocity, no force) and vertical motion (constant acceleration, gravity) do not interfere with each other. This independence is the foundation of projectile motion analysis.",
      },
      {
        title: "Projectile Motion - Basic Concepts",
        body:
          "A projectile is any object thrown into the air with only gravity acting on it (ignoring air resistance). The path is a parabola. The initial velocity v_0 at angle theta gives: v_0x = v_0 cos theta (constant throughout), v_0y = v_0 sin theta (changes due to gravity). The equations: x = v_0x t, y = v_0y t - (1/2)gt^2. The horizontal motion is uniform (no horizontal force), so v_x stays constant. The vertical motion is uniformly accelerated (a = -g). These two independent motions combine to give the parabolic trajectory. At any point in the projectile's flight, you can find its velocity by vector-adding v_x and v_y at that instant. The speed is sqrt(v_x^2 + v_y^2), and the direction is arctan(v_y/v_x).",
      },
      {
        title: "Projectile Motion - Key Parameters",
        body:
          "Time of flight T = 2 v_0 sin theta / g - the total time the projectile stays in the air. It depends only on the vertical component. Maximum height H = (v_0^2 sin^2 theta) / (2g) - the highest point, reached at half the time of flight. At the peak, v_y = 0. Horizontal range R = v_0^2 sin(2 theta) / g - the distance traveled horizontally. The range is maximum when sin(2 theta) = 1, which means 2 theta = 90 degrees or theta = 45 degrees. That is why in sports, the optimal launch angle for maximum distance is 45 degrees. For complementary angles (theta and 90 - theta), the range is the same, but time of flight and maximum height differ. A 30 degree launch and a 60 degree launch give the same range, but the 60 degree launch goes higher and stays longer in the air.",
      },
      {
        title: "Projectile on an Inclined Plane",
        body:
          "Things get more interesting when the projectile is launched onto an inclined plane. Now the ground is sloped. You need to consider the angle of the incline alpha. The coordinate axes are rotated - x-axis along the incline, y-axis perpendicular to it. Gravity now has components: g sin alpha along the incline and g cos alpha perpendicular. The range along the incline depends on the launch angle and the incline angle. The condition for maximum range on an incline is: theta = 45 + alpha/2 (for uphill) and theta = 45 - alpha/2 (for downhill). This is a favorite exam question - they love asking for the range on an incline and comparing it with flat ground range.",
      },
      {
        title: "Relative Velocity in One Dimension",
        body:
          "Relative velocity is how fast something is moving from your perspective. If two cars move on a straight road: v_AB = v_A - v_B (velocity of A as seen from B). If car A moves at 60 km/h and car B at 40 km/h in the same direction, A sees B moving backward at 20 km/h. B sees A moving forward at 20 km/h. If they move toward each other, the relative speed is the sum: 60 + 40 = 100 km/h. This explains why head-on collisions are so devastating - the closing speed is the sum of individual speeds. Relative velocity explains why you can catch a ball thrown from a moving car - the ball's velocity relative to you changes the moment you are both in the same frame.",
      },
      {
        title: "Relative Velocity in Two Dimensions",
        body:
          "In two dimensions, relative velocity is vector subtraction. v_AB = v_A - v_B. If a boat tries to cross a river with a current, its velocity relative to ground is v_bg = v_bw + v_wg (boat relative to water + water relative to ground). To go straight across, the boat must point upstream at an angle such that the upstream component of v_bw cancels v_wg. The time to cross depends on the component perpendicular to the bank. The minimum time is achieved by pointing directly across (no angle), but then you will end up downstream. This boat-river problem is a classic - it tests your understanding of vector addition in a real context.",
      },
      {
        title: "Rain-Man Problems",
        body:
          "Rain-man problems are relative velocity in action. If rain is falling vertically at speed v_r, and you are walking horizontally at v_m, the rain appears to be coming at you at an angle. The relative velocity of rain with respect to man: v_rm = v_r - v_m. The magnitude is sqrt(v_r^2 + v_m^2) and the angle from vertical is arctan(v_m/v_r). That is why you tilt your umbrella forward when walking in the rain - you are aligning it with the apparent direction of rainfall. If you run faster, you need to tilt it more. This is a favorite short-answer question - it tests whether you really understand relative velocity or just memorized formulas.",
      },
      {
        title: "Uniform Circular Motion",
        body:
          "When an object moves in a circle at constant speed, it is in uniform circular motion. Even though speed is constant, the velocity keeps changing because direction changes. That means there is acceleration - centripetal acceleration. It always points toward the center. The magnitude is a_c = v^2/r = omega^2 r, where v is linear speed, omega is angular speed (rad/s), and r is radius. The centripetal force F_c = mv^2/r is not a separate force - it is whatever keeps the object in the circle (tension, gravity, friction, normal reaction). If the centripetal force vanishes, the object flies off tangentially, not radially outward.",
      },
      {
        title: "Angular Displacement, Velocity, and Acceleration",
        body:
          "Angular displacement theta is the angle swept by the radius vector. Measured in radians (not degrees). 1 radian = 57.3 degrees, and 2 pi rad = 360 degrees. Angular velocity omega = d theta/dt (rad/s). Angular acceleration alpha = d omega/dt (rad/s^2). Linear and angular quantities: v = omega r, a_t = alpha r (tangential acceleration), a_c = omega^2 r (centripetal). Equations of circular motion: omega = omega_0 + alpha t, theta = omega_0 t + (1/2)alpha t^2, omega^2 = omega_0^2 + 2 alpha theta. When a car speeds up around a curve, it has both tangential acceleration (speeding up) and centripetal acceleration (changing direction). The total acceleration is the vector sum.",
      },
      {
        title: "Banking of Roads",
        body:
          "When a car turns on a flat road, friction provides the centripetal force. But if the road is banked (tilted inward), the normal reaction provides the needed centripetal force, reducing reliance on friction. The angle of banking theta is given by tan theta = v^2/rg for the ideal case (no friction needed). For highways, cars can turn safely at higher speeds. The maximum safe speed with friction: v_max = sqrt(rg(mu + tan theta)/(1 - mu tan theta)). Banking allows smoother turns - that is why race tracks and highway curves are banked. A common exam question: find the banking angle for a given radius and speed, or find the maximum speed for a given banking angle.",
      },
      {
        title: "Conical Pendulum",
        body:
          "A conical pendulum is a mass on a string that moves in a horizontal circle while the string traces a cone. The tension T has two components: T cos theta balances weight mg, and T sin theta provides centripetal force. From these: tan theta = v^2/rg = r omega^2/g. The time period T = 2 pi sqrt(L cos theta/g) = 2 pi sqrt(h/g), where h is the vertical height. Notice the period does not depend on the mass - just like a simple pendulum. The angle theta increases with speed - faster rotation means a wider cone. This is a great example of combining statics (balancing weight) and dynamics (circular motion) in one system.",
      },
      {
        title: "Vertical Circular Motion",
        body:
          "When a mass moves in a vertical circle (like a roller coaster loop), gravity is not uniform in direction. At the top: tension plus weight provide centripetal force: T + mg = mv^2/r. At the bottom: tension minus weight: T - mg = mv^2/r. The critical condition is the minimum speed at the top to complete the loop - when T becomes zero: v_min = sqrt(gr). Below this, the mass falls before reaching the top. At the bottom, tension is maximum: T_max = mg + mv^2/r = 6mg (for the critical case). This explains why roller coaster loops are designed with higher entry speeds and why you feel heaviest at the bottom of a loop.",
      },
    ],
    keyPoints: [
      "Projectile motion: horizontal and vertical motions independent. a_x = 0, a_y = -g.",
      "Time of flight: T = 2 v_0 sin theta / g.",
      "Maximum height: H = v_0^2 sin^2 theta / (2g).",
      "Horizontal range: R = v_0^2 sin(2 theta) / g. Maximum at theta = 45 degrees.",
      "For complementary angles (theta and 90 - theta), range is same, height and time differ.",
      "Relative velocity: v_AB = v_A - v_B. In 2D, vector subtraction.",
      "Boat-river: v_bg = v_bw + v_wg. To go straight across, point upstream at appropriate angle.",
      "Centripetal acceleration: a_c = v^2/r = omega^2 r, always toward center.",
      "Centripetal force: F_c = mv^2/r. Not a separate force - provided by tension, friction, gravity, etc.",
      "Banking of roads: tan theta = v^2/rg (ideal). Higher speeds need steeper banking.",
      "Conical pendulum: tan theta = v^2/rg. Period T = 2 pi sqrt(h/g), independent of mass.",
      "Vertical circular motion: minimum speed at top = sqrt(gr). Max tension at bottom = 6mg.",
      "Angular quantities: theta (rad), omega = d theta/dt, alpha = d omega/dt. v = omega r, a_t = alpha r.",
      "In uniform circular motion, speed constant but velocity changes (direction changes).",
      "If centripetal force vanishes, object moves tangentially.",
    ],
    importantQuestions: [
      "A projectile is fired at 20 m/s at 30 degrees. Find (a) time of flight (b) max height (c) range.",
      "Show that the path of a projectile is a parabola. Derive the trajectory equation.",
      "A boat moves at 4 m/s in still water, river flows at 3 m/s, width 100 m. Find direction to reach opposite point directly and time taken.",
      "Derive the expression for banking angle so a vehicle can turn without depending on friction.",
      "A stone on a 1 m string is whirled in vertical circle. Find minimum speed at lowest point to complete the circle.",
      "Rain falls vertically at 5 m/s. A man walks at 3 m/s. Find angle to hold umbrella.",
      "A car moves on a circular track of radius 50 m, mu = 0.5. Find maximum speed without skidding.",
      "State the principle of independence of motions. Give an example.",
    ],
  },

  "laws-of-motion": {
    overview:
      "Why does a book sitting on a table stay there until you push it? Why does your body lurch forward when a bus suddenly stops? And why do you feel pushed back into your seat when the bus accelerates? The answers are Newton's three laws of motion - the most fundamental rules about how things move or do not move. These three laws, published in 1687, are the foundation of classical mechanics. They explain everything from why a cricket ball follows a curved path after being hit, to why a rocket can travel in the vacuum of space, to why a passenger in a turning car feels flung sideways. This chapter goes deep into Newton's laws - what they really mean, how to apply them in different situations, and the practical nuances like friction that make real-world motion different from ideal physics problems. Once you master these laws, you will see the world differently - every motion around you will make physical sense.",
    concepts: [
      {
        title: "Newton's First Law - Inertia",
        body:
          "Newton's first law says: an object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by an unbalanced external force. This is the law of inertia. Galileo first came up with this idea - he imagined a ball rolling down one incline and up another, and realized that if there were no friction, the ball would roll forever. Inertia is the tendency of objects to resist changes in their state of motion. More mass = more inertia. That is why pushing a heavy box is harder than pushing a light one. The first law also defines what we mean by an inertial frame of reference - a frame where the law holds. A bus accelerating is not an inertial frame - things inside seem to move without any obvious force acting on them.",
      },
      {
        title: "Newton's Second Law - F = ma",
        body:
          "Newton's second law quantifies force: the net force on an object equals its mass times its acceleration: F_net = ma. In formal terms: F = dp/dt, where p = mv is momentum. Force is the rate of change of momentum. If mass is constant, F = ma. This is a vector equation - force and acceleration are always in the same direction. A larger mass needs more force for the same acceleration. The same force produces less acceleration on a larger mass. This law is the workhorse of mechanics - any time you need to find how something moves under forces, start with F = ma. The key is identifying all forces acting on the object and vector-adding them to get the net force.",
      },
      {
        title: "Newton's Third Law - Action and Reaction",
        body:
          "Every action has an equal and opposite reaction. If you push on a wall, the wall pushes back on you with the same force. If Earth pulls on you (gravity), you pull on Earth with the same force. The forces always come in pairs - they act on DIFFERENT objects. This last point is crucial and commonly misunderstood. When you punch a wall, your hand exerts a force on the wall. The wall exerts an equal and opposite force on your hand - that is why your hand hurts. The two forces act on different objects (hand and wall), so they do not cancel each other. Action-reaction pairs are always equal in magnitude, opposite in direction, and act on different bodies.",
      },
      {
        title: "Free Body Diagrams",
        body:
          "A free body diagram (FBD) is your best friend for solving force problems. Isolate the object of interest. Represent it as a dot. Draw arrows for ALL forces acting on it - gravity (mg, downward), normal reaction (perpendicular to surface), tension (along the string, away from the object), friction (opposing relative motion or tendency), applied forces. Label each force clearly. Choose coordinate axes (typically along the direction of acceleration). Break forces into components along those axes. Apply F_net = ma along each direction separately. FBDs force you to be systematic - most mistakes in force problems come from missing a force or getting its direction wrong. Always draw the FBD before writing any equations.",
      },
      {
        title: "Connected Bodies - Tension and Pulleys",
        body:
          "When objects are connected by strings over pulleys, they move together. The tension in an ideal string (massless, inextensible) is the same throughout. For an Atwood machine (two masses connected by a string over a pulley): m_1g - T = m_1a (if m_1 > m_2), T - m_2g = m_2a. Solving: a = (m_1 - m_2)g/(m_1 + m_2), T = 2m_1m_2g/(m_1 + m_2). For more complex systems, the same approach works: isolate each body, write F = ma for each, and solve the system. The constraint equation (relationship between accelerations) comes from the geometry of the strings.",
      },
      {
        title: "Friction - Static and Kinetic",
        body:
          "Friction opposes relative motion (or tendency) between surfaces in contact. Static friction f_s prevents motion from starting. It is self-adjusting - it matches the applied force up to a maximum: f_s(max) = mu_s N, where mu_s is the coefficient of static friction. Kinetic friction f_k acts when surfaces are sliding: f_k = mu_k N. Usually mu_k < mu_s - it is harder to start sliding than to keep sliding. Friction direction always opposes relative motion. A common mistake: friction always opposes motion - false! When you walk, friction with the ground pushes you forward. When a car accelerates, road friction pushes it forward. Without friction, you could not walk, cars could not move, and nails would not stay in walls.",
      },
      {
        title: "Angle of Friction and Angle of Repose",
        body:
          "Angle of friction lambda = arctan(mu) - the angle between normal reaction and the resultant of normal reaction and friction. Angle of repose alpha is the maximum incline angle at which a body stays put without sliding: tan alpha = mu_s. Conveniently, they are equal. If you slowly increase incline angle, the block starts sliding when tan theta = mu_s. This gives an experimental method for mu_s - tilt the surface until sliding starts and measure the angle. The acceleration down an incline: a = g(sin theta - mu_k cos theta). For mu_k = 0, a = g sin theta - it is just the component of gravity along the slope.",
      },
      {
        title: "Applications of Friction",
        body:
          "Rolling friction is much smaller than sliding friction - that is why wheels are efficient. When a wheel rolls without slipping, static friction acts at the point of contact (which is momentarily at rest). For braking, stopping distance s = v^2/(2 mu g). Higher mu = shorter stopping distance. ABS prevents wheel lockup, maintaining static friction (stronger than kinetic) between tire and road. In banking, friction helps: max safe speed on a banked curve with friction is higher than without. Friction is also why you can not drive on icy roads - low mu means minimal force for acceleration, braking, and turning.",
      },
      {
        title: "Dynamics of Circular Motion",
        body:
          "In circular motion, the net force toward center provides centripetal acceleration: F_c = mv^2/r. This can come from tension, gravity, friction, normal reaction, or combinations. In vertical circular motion, net force changes at each point because gravity's direction relative to center changes. At top: mg + T = mv^2/r. At bottom: T - mg = mv^2/r. If centripetal force is removed, the object moves in a straight line tangent to the circle - not outward. The centrifugal force you feel is not real - it is your body's inertia wanting to go straight while the car forces you into a circular path.",
      },
      {
        title: "Inertial and Non-Inertial Frames",
        body:
          "An inertial frame is where Newton's first law holds - objects at rest stay at rest, moving objects keep constant velocity unless acted upon. A frame at rest or moving with constant velocity is inertial. A non-inertial frame is accelerating - a car speeding up, a rotating merry-go-round. In non-inertial frames, objects appear to accelerate without apparent force. To make Newton's laws work, we invent pseudo-forces. In a linearly accelerating frame, pseudo-force = -ma (opposite to acceleration). In a rotating frame, centrifugal force appears: F_cf = m omega^2 r outward. These are not real forces - they are mathematical corrections.",
      },
      {
        title: "Impulse and Conservation of Momentum",
        body:
          "Impulse J = F dot delta t = delta p (change in momentum). A large force for short time can produce same impulse as small force for long time. Airbags save lives by increasing stopping time, reducing force on passengers. Cricketers pull hands back while catching to increase stopping time and reduce impact force. Conservation of momentum: in absence of external forces, total momentum of system stays constant. Derived from Newton's third law - internal forces come in equal-opposite pairs, canceling out when summing momentum changes of all bodies.",
      },
      {
        title: "Collisions - Elastic and Inelastic",
        body:
          "In elastic collisions, both kinetic energy and momentum are conserved. Objects bounce off with no energy loss. In perfectly inelastic collisions, objects stick together - momentum conserved, kinetic energy not (converted to heat, sound, deformation). For 1D elastic collision: v_1f = ((m_1 - m_2)/(m_1 + m_2))v_1i + (2m_2/(m_1 + m_2))v_2i. Equal masses exchange velocities. For inelastic: m_1v_1i + m_2v_2i = (m_1 + m_2)v_f. Coefficient of restitution e = (relative speed after)/(relative speed before). e = 1 for elastic, e = 0 for perfectly inelastic.",
      },
    ],
    keyPoints: [
      "First law: objects resist changes in motion (inertia). Defines inertial frames.",
      "Second law: F_net = ma = dp/dt. Force causes acceleration in same direction.",
      "Third law: action-reaction are equal, opposite, act on different bodies. Never cancel.",
      "Free body diagrams: isolate object, draw all forces, resolve components, apply F = ma in each direction.",
      "Connected bodies: apply F = ma to each, use constraint equations for connections.",
      "Static friction: f_s = mu_s N. Self-adjusting. Kinetic friction: f_k = mu_k N. mu_k < mu_s.",
      "Angle of repose = angle of friction = arctan(mu). Block slides when theta > arctan(mu_s).",
      "Centripetal force F_c = mv^2/r. Not a separate force - provided by tension, friction, gravity, etc.",
      "Non-inertial frames: pseudo-forces appear - -ma (linear), m omega^2 r (centrifugal).",
      "Impulse J = F delta t = delta p. Same impulse from large force/short time or small force/long time.",
      "Conservation of momentum: total momentum of isolated system constant. Derived from third law.",
      "Elastic collision: momentum and KE conserved. Inelastic: only momentum. Perfectly inelastic: objects stick.",
      "Coefficient of restitution e = relative speed after / relative speed before. e = 1 elastic, e = 0 perfectly inelastic.",
      "Friction can be necessary for motion - walking, car acceleration depend on friction.",
    ],
    importantQuestions: [
      "State Newton's laws. Explain how third law differs from action-reaction misconception.",
      "Two masses 5 kg and 3 kg connected by string over pulley. Find acceleration and tension.",
      "A 10 kg block on rough surface with mu_s = 0.4, mu_k = 0.3. A 30 N force is applied. Will it move? If yes, find acceleration.",
      "Derive expressions for velocities after 1D elastic collision between two bodies.",
      "A 1500 kg car at 20 m/s collides with stationary 1000 kg car, they stick. Find common velocity and KE loss.",
      "Explain why a cricketer pulls hands back while catching. Use impulse-momentum.",
      "A 2 kg mass moves in circle of radius 0.5 m at 3 m/s. Find centripetal force. What provides it on a string?",
      "A block slides down a 30 degree incline with mu_k = 0.2. Find acceleration and time to slide 5 m from rest.",
    ],
  },

  "gravitation": {
    overview:
      "Why does the Moon orbit the Earth instead of flying off into space? Why do all objects fall at the same rate regardless of their mass? And how do we know the mass of the Sun without ever going there? The answer to all these questions is gravity - the invisible force that pulls everything with mass toward everything else. Newton's law of universal gravitation was a revolution: it unified the physics of falling apples on Earth with the motion of planets in the sky. For the first time, humans understood that the same force that makes things fall also holds the solar system together. This chapter takes you from Kepler's observations of planetary motion to Newton's gravity equation, from gravitational potential energy to escape velocity, and from Earth's gravity to satellites orbiting above us. By the end, you will be able to calculate how fast a satellite needs to go to stay in orbit, why astronauts feel weightless, and what escape velocity really means.",
    concepts: [
      {
        title: "Kepler's Laws of Planetary Motion",
        body:
          "Before Newton, Kepler used Tycho Brahe's detailed observations to figure out how planets move. Three laws: First law (Law of Orbits): planets move in elliptical orbits with the Sun at one focus. Not circles - ellipses. Second law (Law of Areas): a line joining a planet to the Sun sweeps out equal areas in equal times. A planet moves faster when closer to the Sun (perihelion) and slower when farther (aphelion). Third law (Law of Periods): the square of the orbital period T is proportional to the cube of the semi-major axis a: T^2 proportional to a^3. For circular orbits: T^2 = (4 pi^2/GM_Sun) r^3. Kepler's laws are empirical - they describe what happens. Newton later explained WHY using his law of gravitation.",
      },
      {
        title: "Newton's Universal Law of Gravitation",
        body:
          "Every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance: F = G m_1 m_2 / r^2. G = 6.67 x 10^-11 N-m^2/kg^2 - the universal gravitational constant, same everywhere. The force is along the line joining the masses, always attractive. This law is universal - applies to apples and atoms and galaxies. The inverse square means doubling distance reduces force to ONE FOURTH. The Moon is 60 Earth radii away, so it feels 1/3600 of the gravitational pull that surface objects feel.",
      },
      {
        title: "Acceleration Due to Gravity (g)",
        body:
          "On Earth's surface, g = GM_E / R_E^2 = 9.8 m/s^2. But g varies: it decreases with height: g_h = g(1 - 2h/R) for h much less than R. It decreases with depth: g_d = g(1 - d/R). At Earth's center, g = 0 - equal mass pulling in all directions cancels. g also varies with latitude due to Earth's rotation - at the equator, centrifugal effects reduce g slightly (about 0.03 m/s^2 less than at poles). At poles g - 9.83 m/s^2, at equator g - 9.78 m/s^2. Earth's shape (oblate spheroid) also contributes. These variations matter for precise measurements and satellite launches.",
      },
      {
        title: "Gravitational Potential and Potential Energy",
        body:
          "Gravitational potential V at a point is the work per unit mass to bring a test mass from infinity: V = -GM/r. Zero at infinity, negative elsewhere. Gravitational potential energy U = -GMm/r (for two masses separated by r). Negative because gravity is attractive - you need to add energy to separate them. On Earth's surface, mgh is an approximation valid only for small heights. The general formula U = -GMm/r is always correct and becomes important for satellites, escape velocity, and celestial mechanics.",
      },
      {
        title: "Escape Velocity",
        body:
          "Escape velocity is the minimum speed to escape Earth's gravity forever - to reach infinity with zero KE remaining. v_esc = sqrt(2GM_E/R_E) = sqrt(2gR_E) - 11.2 km/s. Compare: orbital velocity in LEO is about 7.9 km/s. Escape velocity depends only on planet's mass and radius, not on the mass of the escaping object. The Moon's escape velocity is only 2.4 km/s - that is why it cannot hold an atmosphere. Gas molecules at room temperature move fast enough to escape lunar gravity. Earth's escape velocity keeps our atmosphere intact.",
      },
      {
        title: "Satellites - Orbital Velocity and Time Period",
        body:
          "A satellite in circular orbit has centripetal force provided by gravity: mv^2/r = GMm/r^2. Orbital velocity v = sqrt(GM/r). Depends only on central body's mass and orbital radius - not on satellite's mass. Closer satellites must move faster - LEO at 200 km requires about 7.8 km/s. Geostationary satellites orbit at 35,786 km above equator with period 24 hours - they appear fixed, perfect for communications. Time period T = 2 pi sqrt(r^3/GM). Kepler's third law in newtonian form. Energy of satellite: total E = -GMm/(2r) = KE + PE. Negative total energy means bound to Earth. To move to higher orbit, add energy.",
      },
      {
        title: "Weightlessness",
        body:
          "Astronauts in orbit appear weightless. But Earth's gravity at ISS altitude (~400 km) is still about 90% of surface gravity! So why do they float? Because they are in free fall. The spacecraft and everything inside fall toward Earth at the same acceleration. There is no normal reaction force pushing up - and that is what we perceive as weight. Weightless does not mean no gravity - it means no contact force. You experience the same momentarily on a roller coaster during a drop. True weightlessness requires being far from any massive body or being in continuous free fall.",
      },
      {
        title: "Gravitational Field and Intensity",
        body:
          "The gravitational field is the region around a mass where another mass experiences gravitational force. Field intensity E = F/m = GM/r^2. It is a vector pointing toward the mass. For a point mass, field intensity is just g at that point. The field is conservative - work done moving a mass around a closed path is zero. Field lines radiate inward. For a spherical mass, the field outside is as if all mass were at center (Shell theorem). Inside a uniform spherical shell, field is zero. Inside a solid sphere, field varies linearly: g = GMr/R^3 (for r < R).",
      },
      {
        title: "Variation of g with Latitude and Rotation",
        body:
          "Earth's rotation affects apparent weight. Centrifugal acceleration = omega^2 R cos^2 phi, where phi is latitude. At the equator, this reduces g by about 0.034 m/s^2. Effective g at latitude phi: g_eff = g - R omega^2 cos^2 phi. Things weigh slightly less at equator than at poles. Also Earth bulges at equator (equatorial radius ~21 km larger than polar), further reducing g at equator. For exam problems: g_eff = g_0 - R omega^2 cos^2 phi. Mumbai (near equator) has measurably lower g than Srinagar (north).",
      },
    ],
    keyPoints: [
      "Kepler's laws: elliptical orbits, equal areas in equal times, T^2 proportional to a^3.",
      "Newton's law: F = G m_1 m_2 / r^2. G = 6.67 x 10^-11 N-m^2/kg^2. Universal attractive force.",
      "g = GM/R^2 = 9.8 m/s^2. Varies with height: g_h = g(1 - 2h/R). With depth: g_d = g(1 - d/R).",
      "At Earth's center, g = 0. At poles g - 9.83, at equator g - 9.78 m/s^2.",
      "Gravitational PE: U = -GMm/r. Zero at infinity, negative elsewhere.",
      "Escape velocity: v_esc = sqrt(2GM/R) = sqrt(2gR) = 11.2 km/s. Independent of escaping mass.",
      "Orbital velocity: v = sqrt(GM/r). Closer = faster. LEO ~7.9 km/s.",
      "Geostationary orbit: r - 42,000 km from Earth center, T = 24 h, above equator.",
      "Weightlessness = free fall. No normal reaction. Gravity is still present.",
      "Total energy of satellite: E = -GMm/(2r). Add energy ? higher orbit.",
      "Shell theorem: outside sphere, gravity as if all mass at center. Inside shell, gravity zero.",
      "Variation due to rotation: g_eff = g_0 - R omega^2 cos^2 phi. Equator has lowest g.",
      "Gravitational field is conservative - work around closed path is zero.",
    ],
    importantQuestions: [
      "State Kepler's laws. Derive Newton's law of gravitation from Kepler's third law.",
      "Derive expression for g at height h above and depth d below Earth's surface.",
      "Calculate escape velocity from Earth: R = 6400 km, g = 9.8 m/s^2.",
      "A satellite orbits Earth at height 500 km. Find orbital velocity and time period. (R_E = 6400 km, M_E = 6 x 10^24 kg)",
      "Why do astronauts in orbiting space station feel weightless despite gravity still acting?",
      "Derive variation of g with latitude. Why is g slightly less at equator than poles?",
      "What is a geostationary satellite? Calculate height of geostationary orbit.",
      "State shell theorem for gravitational force. What is its significance?",
    ],
  },

  "mechanical-properties-solids": {
    overview:
      "Stretch a rubber band and let it go - it snaps back. Bend a metal rod too far, and it stays bent. Why do some materials bounce back while others permanently deform? And why does a steel bridge not collapse under its own weight but a paper bridge of the same shape would? The answer lies in the mechanical properties of solids - how materials respond to forces. This chapter is about elasticity: the ability of solids to regain their original shape after being deformed. You will learn about stress (how hard you pull or push), strain (how much the material deforms), and the relationship between them. We will cover Hooke's law, Young's modulus, shear modulus, bulk modulus, and Poisson's ratio - the constants that define a material's elastic behavior. These are not abstract concepts - they determine everything from the thickness of dental braces wire to the design of skyscraper beams. When a civil engineer chooses a material for a bridge or a dentist chooses a wire for teeth alignment, they are applying the physics of elasticity.",
    concepts: [
      {
        title: "Deforming Force and Elasticity",
        body:
          "When you apply a force to a solid, it deforms - changes shape or size. If the solid returns to its original shape when the force is removed, it is elastic. If it stays deformed, it is plastic. Rubber is highly elastic for small stretches. Putty is plastic - it stays squished. But here is the twist: all materials are elastic up to a point. Steel is elastic for small deformations but becomes plastic if you bend it too far. The elastic limit is the maximum stress for which the material returns to its original shape. Beyond that, permanent deformation sets in. Elasticity comes from the atomic structure - atoms are pulled apart or pushed together by forces, but their interatomic bonds pull them back to their equilibrium positions. Think of atoms connected by tiny springs - stretch them, and they pull back.",
      },
      {
        title: "Stress and Strain",
        body:
          "Stress is the internal force per unit area within a material when an external force is applied: sigma = F/A. Unit: pascal (Pa) or N/m^2. There are three types: tensile stress (pulling apart), compressive stress (pushing together), and shear stress (sliding one face relative to another). Strain is the fractional deformation: epsilon = delta L/L (longitudinal strain for length change), epsilon = delta V/V (volume strain), or shear strain = delta x/L (angle of shear). Strain is dimensionless. A steel rod with a tensile stress of 200 MPa experiences a strain of about 0.001 - it stretches by 0.1% of its original length. The ratio of stress to strain in the elastic region is the modulus of elasticity - a measure of the material's stiffness.",
      },
      {
        title: "Hooke's Law and Elastic Moduli",
        body:
          "Hooke's law: within the elastic limit, stress is proportional to strain: stress = E x strain. E is Young's modulus (for tensile/compressive stress). For shear, tau = G gamma, where G is the shear modulus. For volume change, P = -B(delta V/V), where B is the bulk modulus (negative sign means increased pressure decreases volume). All three moduli have the same units as stress (Pa). Steel has Young's modulus about 2 x 10^11 Pa - it is very stiff. Rubber has Young's modulus about 10^6 Pa - it is easily stretched. A high modulus means the material deforms very little under stress. The SI unit is N/m^2 or Pa, but in practice, GPa (10^9 Pa) is commonly used for stiff materials.",
      },
      {
        title: "Young's Modulus - Tensile and Compressive",
        body:
          "Young's modulus Y = (F/A) / (delta L/L) = FL/(A delta L). It measures a material's resistance to length changes. For a steel wire of length 2 m, cross-section area 10^-6 m^2, with Y = 2 x 10^11 Pa, a force of 100 N stretches it by: delta L = FL/(AY) = (100 x 2) / (10^-6 x 2x10^11) = 0.001 m = 1 mm. For the same wire made of copper (Y about 1.2 x 10^11 Pa), the stretch would be about 1.67 mm. Materials with higher Y are stiffer. You can determine Y experimentally by stretching a wire with known weights and measuring the extension with a Vernier scale or optical lever. The stress-strain graph for a ductile material like steel shows: elastic region (linear), yield point, plastic region, and fracture point.",
      },
      {
        title: "Determination of Young's Modulus",
        body:
          "Searle's apparatus is the classic experiment to find Young's modulus for a wire. Two long wires of the same material are suspended from a rigid support. One is the test wire (loaded with weights), the other is a reference wire (to compensate for thermal expansion or support sag). A spirit level and micrometer screw measure the extension of the test wire precisely. The experiment involves: measuring the original length L of the test wire, measuring its diameter (using a screw gauge) to find cross-section area A, adding weights in steps and recording the extension delta L, then plotting a load-extension graph. The slope gives F/delta L, and Y = slope x (L/A). The graph should be a straight line through the origin if Hooke's law is obeyed. Temperature changes and parallax errors are common pitfalls.",
      },
      {
        title: "Shear Modulus (Modulus of Rigidity)",
        body:
          "Shear modulus G = shear stress / shear strain = (F/A) / (theta), where theta is the angular deformation (in radians). Shear occurs when forces are applied parallel to a face - like a deck of cards being pushed from the side. Instead of changing length, the shape changes - the top surface shifts relative to the bottom. A high G means the material resists shape change. Steel has G about 8 x 10^10 Pa. Water has G = 0 - fluids cannot resist shear (they flow). Shear modulus is important for: twisting a shaft (torsion), cutting a material, and bending beams. The shear modulus is related to Young's modulus by G = Y / (2(1+mu)), where mu is Poisson's ratio.",
      },
      {
        title: "Bulk Modulus and Compressibility",
        body:
          "Bulk modulus B = -delta P / (delta V/V). It measures resistance to volume change under uniform pressure. The negative sign means volume decreases as pressure increases - B is positive. Compressibility is the reciprocal: k = 1/B. Solids generally have high B (low compressibility). Steel: B about 1.6 x 10^11 Pa. Water: B about 2.2 x 10^9 Pa - you can compress water, but barely (only about 0.05% per atmosphere). Gases are highly compressible. For an ideal gas at constant temperature, B = P (the pressure). This huge difference in bulk modulus explains why solids and liquids are called condensed matter while gases are not. A material with infinite bulk modulus would be completely incompressible.",
      },
      {
        title: "Poisson's Ratio",
        body:
          "When you stretch a material, it gets thinner. The ratio of lateral strain to longitudinal strain is Poisson's ratio mu (or nu): mu = -(lateral strain) / (longitudinal strain). The negative sign makes mu positive since lateral strain is opposite in sign. For most materials, mu is between 0 and 0.5. Cork has mu about 0 - it does not get thinner when stretched (good for bottle stoppers). Rubber has mu about 0.5 - it is nearly incompressible. Steel has mu about 0.3. Concrete has mu about 0.2. The theoretical limits: 0 < mu < 0.5. A material with mu = 0.5 is incompressible (volume does not change). Poisson's ratio connects the three moduli: Y = 3B(1 - 2mu) = 2G(1 + mu).",
      },
      {
        title: "Stress-Strain Curve",
        body:
          "The stress-strain curve tells the complete story of a material under load. Region 1 (elastic): stress proportional to strain, straight line. The slope is Young's modulus. Up to the proportional limit, Hooke's law holds. Just beyond is the elastic limit - beyond this point, the material will not fully recover. Region 2 (yield): a small increase in stress causes a large increase in strain - the material yields. For mild steel, there is a clear yield point. Region 3 (plastic): the material deforms permanently and irreversibly. Strain hardening occurs - the material becomes stronger as it is deformed. Region 4 (necking): a local constriction forms, and the material quickly fractures. Ductile materials (steel, copper) show large plastic deformation before fracture. Brittle materials (glass, cast iron) fracture with little or no plastic deformation.",
      },
      {
        title: "Elastic Fatigue and Hysteresis",
        body:
          "Elastic fatigue: if you repeatedly stress a material, it may eventually fail even at stresses below its elastic limit. Paper clips break if you bend them back and forth enough times. The repetitive loading causes microscopic cracks to grow - this is called fatigue failure. Elastic hysteresis: the stress-strain curve during loading differs from that during unloading, forming a loop. The area of the hysteresis loop represents the energy dissipated as heat during the cycle. Materials with large hysteresis (like rubber) are good for shock absorbers - they absorb energy. Materials with small hysteresis (like steel) are good for springs - they return most of the energy. Elastic aftereffect: some materials take time to return to original shape after the deforming force is removed - they creep back slowly.",
      },
    ],
    keyPoints: [
      "Elasticity: ability to regain original shape after deforming force removed.",
      "Stress sigma = F/A (Pa). Three types: tensile, compressive, shear.",
      "Strain epsilon = delta L/L (longitudinal), delta V/V (volume), theta (shear). Dimensionless.",
      "Hooke's law: stress proportional to strain within elastic limit.",
      "Young's modulus Y = FL/(A delta L). Measures stiffness against length change.",
      "Shear modulus G = shear stress / shear strain. Resists shape change.",
      "Bulk modulus B = -delta P/(delta V/V). Resists volume change. Compressibility k = 1/B.",
      "Poisson's ratio mu = -lateral strain / longitudinal strain. Range: 0 to 0.5.",
      "Y = 3B(1 - 2mu) = 2G(1 + mu). Connects all elastic constants.",
      "Stress-strain curve: elastic region, yield point, plastic region, necking, fracture.",
      "Ductile: large plastic deformation before fracture. Brittle: little plastic deformation.",
      "Elastic fatigue: repeated stress causes failure below elastic limit.",
      "Elastic hysteresis: energy dissipated as heat in loading-unloading cycle.",
      "Searle's apparatus: experiment to find Young's modulus.",
    ],
    importantQuestions: [
      "Define stress and strain. Explain different types with examples.",
      "Derive relationship between Young's modulus, bulk modulus, and Poisson's ratio.",
      "A steel wire length 2 m, diameter 1 mm, stretched by 100 N. Find extension. (Y = 2 x 10^11 Pa)",
      "Explain stress-strain curve for ductile material. Mark proportional limit, elastic limit, yield point, breaking point.",
      "What is Poisson's ratio? Show its value lies between 0 and 0.5.",
      "Bulk modulus of water is 2.2 x 10^9 Pa. What pressure change reduces volume by 1%?",
      "Describe Searle's experiment to determine Young's modulus.",
      "Distinguish between elastic fatigue and elastic hysteresis with real-world examples.",
    ],
  },

  "thermal-properties-matter": {
    overview:
      "Why does a metal lid expand when heated, making it easier to open a tight jar? Why does a lake freeze from the top down instead of the bottom up? And why do you feel colder on a breezy 20 degree C day than on a still 20 degree C day? The study of thermal properties of matter answers all these questions. This chapter is about heat - what it is, how it moves, and how it changes the materials around us. We will explore temperature scales, thermal expansion of solids, liquids, and gases, the strange behavior of water near freezing, heat capacity and specific heat, latent heat of phase changes, heat transfer through conduction, convection, and radiation, and Newton's law of cooling. These are not just textbook topics - they are the physics behind how a thermos keeps your coffee hot, why cooking pots have metal bottoms and plastic handles, why deserts get freezing cold at night, and how a pressure cooker cooks food faster.",
    concepts: [
      {
        title: "Temperature and Heat - The Basic Distinction",
        body:
          "Temperature and heat are NOT the same thing. Temperature measures how hot or cold something is - it is proportional to the average kinetic energy of the molecules. Heat is energy transferred between objects because of temperature difference. A cup of coffee at 80 degrees C has a higher temperature than a bathtub at 40 degrees C, but the bathtub contains far more heat energy because it has so much more water. Temperature tells you the intensity of thermal motion; heat tells you the total thermal energy content. Heat flows naturally from higher temperature to lower temperature - never the other way. A thermometer measures its own temperature, which reaches equilibrium with the object.",
      },
      {
        title: "Temperature Scales",
        body:
          "Celsius: 0 degrees C = freezing point of water, 100 degrees C = boiling point at standard pressure. Fahrenheit: 32 degrees F = freezing, 212 degrees F = boiling. Kelvin is the SI unit - absolute scale starting at absolute zero (-273.15 degrees C). No negative Kelvin temperatures. Conversion: K = degrees C + 273.15, degrees F = (9/5)degrees C + 32, degrees C = (5/9)(degrees F - 32). The Kelvin scale is fundamental because many formulas (ideal gas law, thermodynamic efficiency) require absolute temperature. At absolute zero (0 K), molecular motion theoretically stops. Room temperature is about 300 K (27 degrees C). The difference between two temperatures is the same in Celsius and Kelvin.",
      },
      {
        title: "Thermal Expansion - Linear",
        body:
          "Most solids expand when heated. Linear expansion: delta L = alpha L_0 delta T, where alpha is the coefficient of linear expansion (unit: per degree C or per K). Different materials expand differently: steel alpha about 11 x 10^-6 /C, aluminum alpha about 23 x 10^-6 /C, glass alpha about 9 x 10^-6 /C. A steel bridge 100 m long on a cold day (10 degrees C) might expand by about 3.3 cm on a hot summer day (40 degrees C). That is why bridges have expansion joints - gaps that allow the bridge to expand and contract. Railway tracks have similar gaps. If expansion is not accommodated, the stress can cause buckling - that is why concrete roads have cut sections filled with flexible material.",
      },
      {
        title: "Thermal Expansion - Areal and Volume",
        body:
          "Area expansion: delta A = beta A_0 delta T, where beta = 2 alpha. Volume expansion: delta V = gamma V_0 delta T, where gamma = 3 alpha for isotropic materials. A steel sheet with alpha = 11 x 10^-6 has beta = 22 x 10^-6 and gamma = 33 x 10^-6 per degree C. For liquids, only volume expansion matters since liquids have no fixed shape. Liquids generally have larger expansion coefficients than solids - that is why a full bottle of liquid left in the freezer might burst. The expansion of liquid in a thermometer is what makes it work. Bi-metallic strips use differential expansion of two metals bonded together - when heated they bend, used in thermostats.",
      },
      {
        title: "Anomalous Expansion of Water",
        body:
          "Most substances expand when heated and contract when cooled. Water is weird: between 0 degrees C and 4 degrees C, water contracts when heated! At 4 degrees C, water has its maximum density (minimum volume). Below 4 degrees C, it expands again, becoming less dense. This is why ice floats - ice at 0 degrees C is less dense (about 917 kg/m^3) than water at 4 degrees C (1000 kg/m^3). The implications are huge: when a lake cools in winter, the surface water reaches 4 degrees C and sinks (because it is denser). Deeper water remains at 4 degrees C while the surface cools further and forms ice. The ice layer acts as an insulator, protecting aquatic life below. If water behaved normally, lakes would freeze from the bottom up.",
      },
      {
        title: "Specific Heat Capacity",
        body:
          "Specific heat capacity c is the heat required to raise the temperature of 1 kg of a substance by 1 degree C (or 1 K). Unit: J/(kg-K). Water has an unusually high specific heat: c = 4186 J/(kg-K). That is why coastal areas have moderate climates - water heats up and cools down slowly. Sand has low specific heat (~800 J/(kg-K)), so it heats up quickly during the day and cools quickly at night. Heat capacity C = mc. Heat required: Q = mc delta T = C delta T. To heat 2 kg of water from 20 to 100 degrees C: Q = 2 x 4186 x 80 = 669,760 J. This is why it takes time to boil water.",
      },
      {
        title: "Latent Heat - Phase Changes",
        body:
          "Latent heat L is the heat absorbed or released during a phase change at constant temperature. No temperature rise occurs during melting, boiling, or condensation - all the energy goes into changing the phase. Latent heat of fusion L_f: heat to melt ice at 0 degrees C to water at 0 degrees C = 334 kJ/kg. Latent heat of vaporization L_v: heat to boil water at 100 degrees C to steam at 100 degrees C = 2260 kJ/kg. L_v is much larger than L_f - breaking all intermolecular bonds to turn liquid into gas takes way more energy. That is why steam burns are so dangerous - steam releases its latent heat when it condenses on your skin. Water's high latent heat of vaporization is why sweating cools you.",
      },
      {
        title: "Calorimetry - Measuring Heat Transfer",
        body:
          "Calorimetry is about measuring heat transfer. The principle: heat lost by hot bodies = heat gained by cold bodies (in an isolated system). A calorimeter is a metal container with a stirrer and thermometer, insulated from surroundings. To find specific heat: heat the substance to a known temperature, drop it into the calorimeter containing water, measure the final equilibrium temperature. The heat lost by the substance equals the heat gained by water plus calorimeter: m_1 c_1 (T_1 - T_f) = m_2 c_2 (T_f - T_2) + m_cal c_cal (T_f - T_2). The water equivalent of a calorimeter is the mass of water that would absorb the same heat as the calorimeter. Do not forget the calorimeter itself absorbs heat too.",
      },
      {
        title: "Heat Transfer - Conduction",
        body:
          "Conduction is heat transfer through a material without the material itself moving. Heat flows from the hot end to the cold end. Fourier's law: rate of heat flow H = -kA(dT/dx), where k is thermal conductivity (W/m-K), A is cross-section area, dT/dx is temperature gradient. For a uniform rod: H = kA(T_1 - T_2)/L. Metals have high k (copper: 400 W/m-K, aluminum: 237 W/m-K) - cooking pots have metal bases. Wood and plastics have very low k (~0.1 W/m-K) - saucepan handles are plastic. Air is a terrible conductor (~0.02 W/m-K) - double-pane windows with air gaps insulate well.",
      },
      {
        title: "Heat Transfer - Convection and Radiation",
        body:
          "Convection is heat transfer by fluid movement. As a fluid is heated, it expands, becomes less dense, and rises. Cooler fluid moves in to replace it, creating a convection current. Natural convection: the wind on a beach (land heats faster, warm air rises, cool sea air moves in). Forced convection: a fan blowing air over a hot surface. Radiation is heat transfer via electromagnetic waves (infrared) - no medium needed. The Stefan-Boltzmann law: power radiated P = epsilon sigma A T^4, where sigma = 5.67 x 10^-8 W/m^2-K^4, epsilon is emissivity (0 to 1). A blackbody has epsilon = 1. Dark rough surfaces are good emitters/absorbers. Shiny surfaces are poor emitters/absorbers - thermos flasks use silvered surfaces to reflect radiation.",
      },
      {
        title: "Newton's Law of Cooling",
        body:
          "Newton's law of cooling: the rate of heat loss by a body is proportional to the temperature difference between the body and its surroundings: dT/dt = -k(T - T_s). This holds for relatively small temperature differences (up to about 30 degrees C). The solution is T = T_s + (T_0 - T_s)e^(-kt). The body cools quickly at first, then more slowly as it approaches surroundings temperature. Experimentally, plot ln(T - T_s) vs t - a straight line with slope -k. The cooling constant k depends on surface area, nature of surface, and surrounding medium. Applications: estimating cooling time of hot beverages, designing cooling systems, forensics (estimating time of death from body temperature). Valid only for small temperature differences.",
      },
    ],
    keyPoints: [
      "Temperature: measure of average KE of molecules. Heat: energy transferred due to temperature difference.",
      "Absolute zero = -273.15 C = 0 K. K = C + 273.15. No negative Kelvin.",
      "Linear expansion: delta L = alpha L_0 delta T. Expansion joints in bridges and rails.",
      "Area expansion: beta = 2 alpha. Volume expansion: gamma = 3 alpha for isotropic solids.",
      "Anomalous expansion of water: density maximum at 4 C. Ice less dense than water.",
      "Specific heat c: heat to raise 1 kg by 1 C. Q = mc delta T. Water: c = 4186 J/(kg-K).",
      "Latent heat of fusion L_f = 334 kJ/kg. Latent heat of vaporization L_v = 2260 kJ/kg.",
      "Calorimetry principle: heat lost = heat gained (isolated system).",
      "Conduction: H = kA(delta T/L). Metals high k, insulators low k.",
      "Convection: heat transfer by fluid movement. Natural and forced.",
      "Radiation: P = epsilon sigma A T^4. sigma = 5.67 x 10^-8 W/m^2-K^4.",
      "Newton's cooling: dT/dt = -k(T - T_s). Exponential decay to surroundings temperature.",
      "Emissivity epsilon: 1 for blackbody, 0 for perfect reflector. Dark surfaces high epsilon.",
      "Phase changes occur at constant temperature with latent heat.",
    ],
    importantQuestions: [
      "Define specific heat and latent heat. 500 g ice at 0 C mixed with 500 g water at 80 C. Find final temperature. (L_f = 334 kJ/kg, c = 4186 J/(kg-K))",
      "A metal rod of length 1 m at 20 C expands by 0.55 mm when heated to 120 C. Find alpha and length at 0 C.",
      "State Newton's law of cooling. A body cools from 80 to 60 C in 5 min. Surroundings at 30 C. Find time to cool from 60 to 40 C.",
      "Derive expression for rate of heat conduction through a composite wall of two materials.",
      "Explain anomalous expansion of water. Why does ice float? Why do lakes freeze from top?",
      "Describe how to determine specific heat of a solid using the method of mixtures.",
      "A copper sphere of radius 5 cm at 200 C in a room at 20 C. sigma = 5.67 x 10^-8, epsilon = 0.8. Find initial rate of heat loss by radiation.",
      "Distinguish between conduction, convection, and radiation with two daily-life examples each.",
    ],
  },

  "sound": {
    overview:
      "When you pluck a guitar string, it vibrates, pushes the air around it, and those ripples in air pressure travel to your ear, where your brain interprets them as sound. But how do those vibrations travel? Why do some sounds hit a high note and others a low note? Why does a siren sound different when it is coming toward you versus moving away? And how does a hall like the Sydney Opera House make music sound so good? This chapter is the physics of sound - mechanical waves that travel through matter. You will learn about longitudinal and transverse waves, the wave equation, speed of sound in different media, the Doppler effect, beats, standing waves in pipes and strings, and acoustics. Sound is not just about music - it is about how we communicate, how bats navigate in the dark, how ultrasound scans create images, and how a glass can shatter from a singer's high note. By the end, you will never hear a sound the same way again.",
    concepts: [
      {
        title: "Nature of Sound Waves",
        body:
          "Sound is a mechanical wave - it needs a medium to travel through. Sound cannot travel through a vacuum. That is why there is no sound in space. Sound waves in air are longitudinal - air molecules vibrate parallel to the direction of wave propagation. Regions of compression (high pressure) and rarefaction (low pressure) travel through the air. A sound wave is characterized by its frequency (pitch), amplitude (loudness), and wavelength. The human hearing range is 20 Hz to 20,000 Hz. Below 20 Hz is infrasound. Above 20 kHz is ultrasound (used in medical imaging and bat echolocation). The speed of sound in air at 0 C is about 331 m/s, increasing by about 0.6 m/s for every 1 C rise.",
      },
      {
        title: "Transverse and Longitudinal Waves",
        body:
          "In transverse waves, particles vibrate perpendicular to wave travel - like a wave on a string. Light is a transverse wave. In longitudinal waves, particles vibrate parallel to wave travel - like sound in air. Transverse waves can be polarized (vibrations filtered to one plane), but longitudinal waves cannot. Sound in solids can be both longitudinal and transverse - solids can support shear stresses. Transverse sound waves in solids are generally slower than longitudinal. Earthquakes produce both types: P-waves (longitudinal, faster) and S-waves (transverse, slower). The time difference between their arrival helps locate the epicenter.",
      },
      {
        title: "Speed of Sound in Different Media",
        body:
          "Speed of sound depends on the medium's elasticity and density. In solids: v = sqrt(Y/rho) (Young's modulus Y, density rho). In fluids: v = sqrt(B/rho) (bulk modulus B). In gases: v = sqrt(gamma P/rho) = sqrt(gamma RT/M), where gamma = C_P/C_V (about 1.4 for air). Sound travels fastest in solids (steel: ~5000 m/s), slower in liquids (water: ~1480 m/s), slowest in gases (air: ~343 m/s at 20 C). Particles in solids are more tightly packed, transmitting disturbances faster. Temperature increases speed in gases. Humidity also affects it - moist air has lower density, so sound travels slightly faster in humid air.",
      },
      {
        title: "Reflection of Sound - Echo and Reverberation",
        body:
          "Sound reflects off surfaces. An echo is a distinct reflected sound arriving after the original sound stops. For a distinct echo, the reflecting surface must be at least 17 m away (the ear can distinguish two sounds 0.1 s apart). Echoes are used in sonar to detect objects underwater. Reverberation is the persistence of sound after the source stops, caused by multiple overlapping reflections. Too much reverberation makes sound muddy. Too little makes sound dead. Reverberation time is the time for sound intensity to drop by 60 dB. Optimal time: about 1-2 s for concert halls, about 0.5-1 s for speech.",
      },
      {
        title: "Doppler Effect",
        body:
          "The Doppler effect is the change in frequency of a wave due to relative motion between source and observer. When a source moves toward you, waves get compressed - you hear a higher frequency. When it moves away, waves get stretched - you hear a lower frequency. That is why an ambulance siren sounds higher as it approaches and lower as it moves away. The formula: f' = f(v +/- v_o)/(v -/+ v_s), where v is speed of sound, v_o is observer velocity, v_s is source velocity. Numerator: + if observer moves toward source. Denominator: - if source moves toward observer. Applications: radar speed guns, Doppler ultrasound (measuring blood flow), astronomy (redshift of galaxies).",
      },
      {
        title: "Beats",
        body:
          "Beats occur when two sound waves of slightly different frequencies interfere. The amplitude varies periodically - you hear a loud-soft-loud wobbling sound. Beat frequency = |f_1 - f_2|. If one tuning fork is 256 Hz and another is 260 Hz, you hear 4 beats per second. Beats are used by musicians to tune instruments - when two strings are perfectly in tune, beats disappear. The time between successive maxima is 1/f_beat. Beats result from superposition - at some instants waves add constructively (loud), at others destructively (soft). Above about 10-15 beats per second, the ear cannot follow individual pulses and hears a continuous rough sound.",
      },
      {
        title: "Standing Waves in Strings",
        body:
          "A string fixed at both ends vibrates in specific patterns called standing waves. Boundary conditions: displacement zero at both ends (nodes). Possible wavelengths: lambda_n = 2L/n, where n = 1, 2, 3, ... Frequencies: f_n = nv/(2L) = n f_1, where f_1 = v/(2L) is the fundamental. For a stretched string, wave speed v = sqrt(T/mu), where T is tension and mu is mass per unit length. So f_n = (n/(2L)) sqrt(T/mu). Higher tension = higher pitch. Shorter string = higher pitch. Lighter string = higher pitch. When you press a guitar string against a fret, you shorten the vibrating length, increasing frequency. First three modes: fundamental (n=1), first overtone (n=2), second overtone (n=3).",
      },
      {
        title: "Standing Waves in Pipes",
        body:
          "Pipes produce sound through standing waves of air columns. For a pipe open at both ends: both ends are displacement antinodes. All harmonics present: f_n = nv/(2L), n = 1, 2, 3, ... For a pipe closed at one end: closed end is displacement node, open end is antinode. Only odd harmonics: f_n = nv/(4L), n = 1, 3, 5, ... Closed pipes have a hollower sound because they are missing even harmonics. End correction: the antinode at the open end is slightly outside, so effective length = L + e, where e about 0.6R. Resonance occurs when driving frequency matches a natural frequency - maximum amplitude. That is how blowing across a bottle produces sound.",
      },
      {
        title: "Forced Vibrations and Resonance",
        body:
          "When a vibrating system is driven by an external periodic force, it oscillates at the driving frequency. If driving frequency matches natural frequency, resonance occurs - amplitude becomes very large. This is how an opera singer can shatter a glass. Resonance is why soldiers break step while crossing a bridge - if their marching frequency matches the bridge's natural frequency, the bridge could resonate and collapse. In musical instruments, resonance amplifies sound - the body of a guitar resonates, making the sound louder. The resonance tube experiment uses a vibrating tuning fork above a tube in water - adjusting the water level changes the air column length until resonance occurs (loud sound).",
      },
      {
        title: "Loudness, Intensity, and Decibels",
        body:
          "Intensity I = power/area = (1/2) rho omega^2 A^2 v. Proportional to square of amplitude and frequency. The human ear can detect an enormous range - from 10^-12 W/m^2 (threshold of hearing) to about 1 W/m^2 (threshold of pain) - a factor of 10^12. We use a logarithmic scale: the decibel (dB). Sound level beta = 10 log(I/I_0), where I_0 = 10^-12 W/m^2. Whisper: about 20 dB. Normal conversation: about 60 dB. Rock concert: about 110-120 dB. An increase of 10 dB means a factor of 10 in intensity, which sounds about twice as loud. Prolonged exposure above 85 dB can cause hearing damage.",
      },
      {
        title: "Quality of Sound - Timbre and Pitch",
        body:
          "Pitch depends on frequency - higher frequency = higher pitch. Loudness depends on amplitude - larger amplitude = louder sound. But two instruments playing the same note at the same loudness still sound different. That is timbre (quality) - determined by harmonic content. A violin and a piano both playing middle A (440 Hz) sound different because they produce different combinations of harmonics (overtones). The fundamental frequency gives the pitch, but the relative strengths of higher harmonics create the unique sound signature. A pure tone has only the fundamental. Most musical sounds are complex waves with many harmonics.",
      },
    ],
    keyPoints: [
      "Sound is a mechanical longitudinal wave - requires a medium. Cannot travel through vacuum.",
      "Speed of sound in air at 0 C: 331 m/s. Increases 0.6 m/s per C rise.",
      "Speed in solids: v = sqrt(Y/rho), liquids: v = sqrt(B/rho), gases: v = sqrt(gamma RT/M).",
      "Human hearing: 20 Hz - 20 kHz. Infrasound < 20 Hz, Ultrasound > 20 kHz.",
      "Echo: reflected sound > 0.1 s after original. Minimum distance: ~17 m.",
      "Doppler effect: f' = f(v +/- v_o)/(v -/+ v_s). Approaching source ? higher frequency.",
      "Beat frequency: f_beat = |f_1 - f_2|. Used for tuning instruments.",
      "String fixed both ends: f_n = nv/(2L). v = sqrt(T/mu).",
      "Open pipe: all harmonics f_n = nv/(2L). Closed pipe: odd harmonics f_n = nv/(4L).",
      "Resonance: driving frequency = natural frequency ? maximum amplitude.",
      "Sound level: beta = 10 log(I/I_0) dB. I_0 = 10^-12 W/m^2. Pain threshold: ~120 dB.",
      "Timbre depends on harmonic content. Same pitch, different instruments ? different timbre.",
      "End correction for pipes: effective length = actual + 0.6R.",
      "Reverberation time: time for intensity to drop 60 dB after source stops.",
    ],
    importantQuestions: [
      "State Newton's formula for speed of sound in air. What correction did Laplace make?",
      "Derive expression for Doppler effect when source moves toward stationary observer.",
      "A string of length 1 m, mass 0.5 g, tension 80 N. Find fundamental frequency and first two overtones.",
      "What are beats? Prove beat frequency equals difference of frequencies of two waves.",
      "An open pipe of length 50 cm produces 340 Hz. Find speed of sound. If closed, what is fundamental frequency?",
      "Explain resonance with resonance tube experiment. How is speed of sound determined?",
      "A train at 30 m/s sounds its whistle at 500 Hz. Find apparent frequency heard by stationary observer (a) approaching (b) receding. (v = 340 m/s)",
      "Define intensity and sound level. A sound has intensity 10^-4 W/m^2. Find dB level. What if intensity doubles?",
    ],
  },

  "optics": {
    overview:
      "Why does a straw look bent in a glass of water? Why does a rainbow form after rain? Why do some lenses make things look bigger and others make them look smaller? And how does a telescope let you see distant galaxies? Optics is the study of light - how it travels, how it bends, how it reflects, and how it forms images. This chapter covers ray optics (treating light as straight lines) and wave optics (treating light as waves). You will learn the laws of reflection and refraction, how spherical mirrors and lenses form images, total internal reflection (the physics behind optical fibers), dispersion of light (how a prism splits white light into colors), and optical instruments like microscopes and telescopes. Every time you put on glasses, use a smartphone camera, or look through a telescope, you are using the principles of optics. By the end, you will be able to trace light rays through any lens system and predict exactly where the image will form.",
    concepts: [
      {
        title: "Reflection of Light - Plane and Spherical Mirrors",
        body:
          "Reflection is when light bounces off a surface. Law of reflection: angle of incidence = angle of reflection, both rays lie in same plane as the normal. For a plane mirror, the image is virtual (behind the mirror), upright, same size as the object, and laterally inverted. For spherical mirrors (concave and convex), the mirror equation: 1/u + 1/v = 1/f, where u = object distance, v = image distance, f = focal length = R/2. Cartesian sign convention: distances in front of mirror are positive, behind are negative. Concave mirrors converge light (used in torches, headlights, shaving mirrors). Convex mirrors diverge light (used in rear-view mirrors - they give a wider field of view).",
      },
      {
        title: "Refraction - Bending of Light",
        body:
          "Refraction is the bending of light when it passes from one medium to another, caused by the change in speed of light. Refractive index n = c/v, where c = 3 x 10^8 m/s in vacuum. Snell's law: n_1 sin i = n_2 sin r. When light goes from rarer to denser medium, it bends TOWARD the normal. From denser to rarer, it bends AWAY. Higher n means slower light in that medium. Diamond has n = 2.42 - the highest among common materials, giving brilliant sparkle. Water n = 1.33, glass n - 1.5. Apparent depth = real depth / n.",
      },
      {
        title: "Total Internal Reflection",
        body:
          "When light travels from denser to rarer medium at an angle greater than the critical angle, it reflects back entirely into the denser medium - total internal reflection (TIR). Critical angle C: sin C = n_2/n_1 (where n_1 > n_2). For glass-air: C - 42 degrees. For diamond-air: C - 24 degrees - diamond's small critical angle means light bounces around inside, causing brilliant sparkle. Applications: optical fibers (guide light through repeated TIR - used in telecommunications and medical endoscopes), prisms in binoculars (right-angle prisms use TIR to reflect light through 90 degrees), mirages (hot air near ground has lower density, creating illusion of water on road).",
      },
      {
        title: "Refraction Through a Prism",
        body:
          "A prism bends light twice - at both surfaces. Deviation angle delta = i_1 + i_2 - A, where A is prism angle. At minimum deviation (delta_m), light passes symmetrically: i_1 = i_2, r_1 = r_2 = A/2. Refractive index n = sin[(A + delta_m)/2] / sin(A/2). This is a key experimental method to find n. When white light enters a prism, different wavelengths (colors) are refracted differently - this is dispersion. Violet bends most (highest n), red bends least (lowest n). Rainbow is nature's prism - water droplets disperse sunlight. The color sequence: VIBGYOR.",
      },
      {
        title: "Lenses - Convex and Concave",
        body:
          "A convex lens (converging) is thicker in the middle, focuses parallel light to a point. A concave lens (diverging) is thinner in the middle, spreads parallel light outward. Lens formula: 1/f = 1/v - 1/u. Lens maker's formula: 1/f = (n_21 - 1)(1/R_1 - 1/R_2), where n_21 is refractive index of lens relative to surrounding medium. Power of lens: P = 1/f (in meters), unit: diopter (D). Convex lens has positive power, concave has negative power. For combination: P = P_1 + P_2. Magnification m = h_i/h_o = v/u.",
      },
      {
        title: "Image Formation by Lenses - Ray Diagrams",
        body:
          "Ray diagrams for thin lenses use three principal rays: Ray 1: parallel to axis ? passes through focus (convex) or appears to come from focus (concave). Ray 2: through optical center ? goes straight. Ray 3: through focus ? emerges parallel to axis. For convex lens: object beyond 2F ? real, inverted, diminished image between F and 2F. Object at 2F ? same size at 2F. Object between F and 2F ? real, inverted, enlarged beyond 2F. Object at F ? image at infinity. Object between lens and F ? virtual, upright, enlarged (magnifying glass). For concave lens: always virtual, upright, diminished. Mastering ray diagrams gives intuitive feel for image formation.",
      },
      {
        title: "Optical Instruments - Microscope",
        body:
          "A simple microscope (magnifying glass) is just a convex lens. Angular magnification M = D/f, where D - 25 cm (least distance of distinct vision). For image at infinity: M = D/f. For image at near point: M = 1 + D/f. A compound microscope has two convex lenses: objective (short focal length) and eyepiece (longer focal length). The objective forms a real, inverted, enlarged image, which the eyepiece further magnifies. Total magnification M = M_o x M_e = (-L/f_o)(D/f_e), where L is the tube length. The negative sign indicates inverted final image. Resolving power = 1/delta d = (2n sin theta)/lambda. Shorter wavelength ? better resolution (electron microscopes can see much smaller objects).",
      },
      {
        title: "Optical Instruments - Telescope",
        body:
          "A refracting telescope uses two convex lenses: objective (large focal length, large aperture) and eyepiece (short focal length). The objective forms a real, inverted image at its focus. The eyepiece magnifies this image. Angular magnification M = f_o/f_e (for normal adjustment). Length = f_o + f_e. Image is inverted - acceptable for astronomy. Terrestrial telescopes use extra lenses or prisms to erect the image (binoculars). Resolving power = 1/delta theta = D/(1.22 lambda), where D is aperture. Larger aperture ? better resolution AND gathers more light. That is why astronomical telescopes have huge mirrors.",
      },
      {
        title: "Dispersion and Scattering of Light",
        body:
          "Dispersion is splitting of white light into colors when passing through a prism. Happens because refractive index differs for different wavelengths - violet (short wavelength) is slowed more than red. Angular dispersion = delta_v - delta_r. Dispersive power omega = (n_v - n_r)/(n_y - 1). Scattering: when particles are much smaller than wavelength, scattering intensity proportional to 1/lambda^4 (Rayleigh scattering). Blue light scatters much more than red - that is why sky is blue. At sunrise/sunset, sunlight passes through more atmosphere, most blue scatters away, red/orange reaches your eyes - red sunset. Clouds appear white because water droplets scatter all colors equally (Mie scattering). Tyndall effect: scattering by colloidal particles.",
      },
    ],
    keyPoints: [
      "Law of reflection: i = r. Plane mirror: virtual, upright, same size, laterally inverted.",
      "Spherical mirror equation: 1/u + 1/v = 1/f. f = R/2. Cartesian sign convention critical.",
      "Snell's law: n_1 sin i = n_2 sin r. Light bends toward normal entering denser medium.",
      "Refractive index n = c/v. Higher n ? slower light. Diamond: n = 2.42.",
      "Total internal reflection: occurs when i > C. sin C = n_2/n_1.",
      "Applications of TIR: optical fibers, binocular prisms, mirages, diamond brilliance.",
      "Prism: deviation delta = i_1 + i_2 - A. At minimum deviation, i_1 = i_2.",
      "Dispersion: splitting of white light. VIBGYOR. Dispersive power omega = (n_v - n_r)/(n_y - 1).",
      "Lens formula: 1/f = 1/v - 1/u. Lens maker's: 1/f = (n_21 - 1)(1/R_1 - 1/R_2).",
      "Power P = 1/f (diopters). Convex: +P, Concave: -P. Combined: P = P_1 + P_2.",
      "Simple microscope: M = D/f. Compound: M = -(L/f_o)(D/f_e).",
      "Telescope: M = f_o/f_e. Length = f_o + f_e. Larger aperture ? better resolution.",
      "Rayleigh scattering: intensity proportional to 1/lambda^4. Blue sky, red sunset.",
      "Optical fibers guide light through repeated TIR. Used in telecom and endoscopy.",
    ],
    importantQuestions: [
      "Derive the lens maker's formula for a thin lens.",
      "An object is placed 15 cm from a convex lens of focal length 10 cm. Find position, nature, and magnification of image.",
      "Explain total internal reflection. What is critical angle? Give three applications.",
      "A prism with angle A = 60 degrees gives minimum deviation of 40 degrees. Find refractive index.",
      "Draw ray diagrams for convex lens when object is: (a) at infinity (b) at 2F (c) between F and 2F.",
      "Derive expression for angular magnification of compound microscope in normal adjustment.",
      "Why is the sky blue? Why are sunsets red? Explain using Rayleigh scattering.",
      "Describe construction and working of optical fibers.",
      "A telescope has objective f = 100 cm and eyepiece f = 5 cm. Find magnifying power and length.",
      "State conditions for TIR. Calculate critical angle for glass-air interface (n_g = 1.5).",
    ],
  },

  "electrostatics": {
    overview:
      "Ever get a shock when touching a metal doorknob after walking on a carpet? That is electrostatics - the physics of stationary electric charges. This chapter is about the forces between charged objects, the electric fields they create, the energy stored in those fields, and the potential differences that drive electric currents. You will start from the very basics - what charge is, how it is conserved, and the difference between insulators and conductors. You will then explore Coulomb's law (the electrostatic equivalent of gravity but with both attraction and repulsion), the concept of electric field as a force field around charges, electric potential and potential difference, and capacitors - devices that store charge and energy. Electrostatics is not just about shocks and Van de Graaff generators - it is the foundation of electronics, from tiny capacitors in your phone to lightning protection on buildings.",
    concepts: [
      {
        title: "Electric Charge - Basic Properties",
        body:
          "Electric charge is a fundamental property of matter. Two types: positive and negative. Like charges repel, unlike charges attract. Charge is quantized - integer multiples of e = 1.6 x 10^-19 C (charge on one electron). You cannot have 0.5e. The coulomb (C) is the SI unit - a huge amount. One coulomb is the charge of 6.25 x 10^18 electrons. Charge is conserved - in any isolated system, total charge stays constant. Charge cannot be created or destroyed, only transferred. When you rub a glass rod with silk, electrons transfer from glass to silk - glass becomes positive, silk negative. The net charge stays zero. Conductors (metals) allow charge to move freely. Insulators (rubber, plastic) do not.",
      },
      {
        title: "Coulomb's Law",
        body:
          "Coulomb's law: the force between two point charges is proportional to the product of charges and inversely proportional to the square of distance: F = k q_1 q_2 / r^2, where k = 1/(4 pi epsilon_0) = 9 x 10^9 N-m^2/C^2, and epsilon_0 = 8.85 x 10^-12 C^2/N-m^2 is the permittivity of free space. Like charges: F positive (repulsive). Unlike: F negative (attractive). For multiple charges, net force is vector sum (superposition principle). This is trickier than gravity because electrostatic force can be attractive or repulsive. Doubling distance reduces force to one-fourth. The analogy with gravity is strong, but charge can be positive or negative while mass is always positive.",
      },
      {
        title: "Electric Field",
        body:
          "Electric field E at a point is the force that a unit positive charge would experience: E = F/q_0. For a point charge Q: E = kQ/r^2, directed radially away (if Q positive) or toward (if Q negative). Unit: N/C or V/m. Electric field is a vector field. Electric field lines start at positive charges and end at negative charges. Density of lines indicates field strength. Properties: field lines never cross, they are perpendicular to equipotential surfaces, and enter/leave conductors perpendicularly. For a uniform field (between parallel plates), lines are parallel and equally spaced. Inside a conductor in electrostatic equilibrium, E = 0 - that is why you are safe inside a car during lightning (Faraday cage).",
      },
      {
        title: "Electric Potential and Potential Difference",
        body:
          "Electric potential V at a point is work per unit charge to bring a test charge from infinity: V = W/q_0. For a point charge Q: V = kQ/r (taking V = 0 at infinity). Potential is a scalar - much easier than electric field. For multiple charges, just add potentials algebraically. Potential difference delta V = V_2 - V_1 = work per unit charge to move from point 1 to 2. A 12 V battery does 12 J of work per coulomb. The electron volt (eV): energy gained by electron through 1 V: 1 eV = 1.6 x 10^-19 J. Equipotential surfaces: V = constant, always perpendicular to E. Moving charge along equipotential surface does zero work.",
      },
      {
        title: "Relation Between E and V",
        body:
          "The electric field is the negative gradient of potential: E = -dV/dr (1D). In 3D: E = -grad V = -(partial V/partial x i-hat + partial V/partial y j-hat + partial V/partial z k-hat). E points in direction of steepest decrease of potential. Charges naturally move from high to low potential. For uniform field between parallel plates separated by d: V = Ed. If you know the potential function, you can find the field by differentiating. If you know the field, find potential by integrating: V_B - V_A = -integral_A^B E dot dr. Common exam question: given V as function of x, find E.",
      },
      {
        title: "Capacitors and Capacitance",
        body:
          "A capacitor stores charge and electrical energy. Simplest: parallel plate capacitor - two conducting plates separated by insulator. Capacitance C = Q/V. Unit: farad (F). A 1 F capacitor is enormous - most are in microfarads, nanofarads, or picofarads. For parallel plate: C = epsilon_0 A/d. Capacitance depends only on geometry, not on charge or voltage. Larger area ? more capacitance. Smaller separation ? more capacitance. Energy stored: U = 1/2 CV^2 = 1/2 QV = Q^2/(2C). Capacitors are used for: energy storage (camera flash), smoothing voltage fluctuations (power supplies), timing circuits (RC circuits), filtering signals.",
      },
      {
        title: "Capacitors in Series and Parallel",
        body:
          "Series: 1/C_eq = 1/C_1 + 1/C_2 + 1/C_3 + ... Same charge on each, voltage divides. Equivalent capacitance is LESS than smallest individual. Parallel: C_eq = C_1 + C_2 + C_3 + ... Same voltage across each, charge divides. Equivalent capacitance is the SUM. Key tip: series capacitors have SAME Q, parallel capacitors have SAME V. When solving networks: identify series and parallel groups, simplify step by step. The energy stored in combination = sum of energies in each capacitor.",
      },
      {
        title: "Dielectrics and Polarization",
        body:
          "A dielectric is an insulating material between capacitor plates. It increases capacitance by factor K (dielectric constant): C = K C_0, where C_0 is without dielectric. K = epsilon_r (relative permittivity). For parallel plate with dielectric: C = K epsilon_0 A/d = epsilon A/d. How does dielectric increase capacitance? The dielectric's molecules polarize - positive charges shift toward negative plate, negative toward positive. This creates an internal field opposing the applied field, reducing net field. Lower field means you can store more charge for same voltage. Dielectrics also increase breakdown voltage. Different dielectrics: mica (K - 6), paper (K - 3.5), ceramic (K - 100-10000), distilled water (K - 80).",
      },
    ],
    keyPoints: [
      "Charge quantized (Q = ne, e = 1.6 x 10^-19 C) and conserved. Like repel, unlike attract.",
      "Coulomb's law: F = k q_1 q_2 / r^2, k = 9 x 10^9 N-m^2/C^2 = 1/(4 pi epsilon_0). Superposition applies.",
      "Electric field E = F/q_0. For point charge: E = kQ/r^2 radially. Unit: N/C or V/m.",
      "Field lines start on +Q, end on -Q, never cross, perpendicular to conductors.",
      "Inside conductor in equilibrium, E = 0. Charge on surface. Electrostatic shielding (Faraday cage).",
      "Electric potential V = kQ/r (point charge). Scalar - add algebraically. Unit: volt (J/C).",
      "Potential difference: delta V = -integral E dot dr. E = -dV/dr (gradient).",
      "Equipotential surfaces: V constant, perpendicular to E. Zero work moving charge on them.",
      "Capacitance C = Q/V. Parallel plate: C = epsilon_0 A/d. Energy: U = 1/2 C V^2.",
      "Series: 1/C_eq = sum(1/C_i). Same Q. Parallel: C_eq = sum(C_i). Same V.",
      "Dielectric: C = K C_0 = epsilon A/d. K = epsilon_r. Polarization reduces internal field.",
      "Dielectric strength: max E-field before breakdown. Air: 3 x 10^6 V/m.",
      "Electron volt: 1 eV = 1.6 x 10^-19 J. Energy gained by e- through 1 V.",
    ],
    importantQuestions: [
      "State Coulomb's law. Three charges q, 4q, and 2q are placed at corners of an equilateral triangle. Find net force on charge at one corner.",
      "Define electric field. Find E due to an electric dipole at a point on its axial line.",
      "Two point charges +5 microC and -3 microC are 20 cm apart. Find the point on the line joining them where E = 0.",
      "Derive the expression for capacitance of a parallel plate capacitor with a dielectric.",
      "Three capacitors 2 microF, 3 microF, 6 microF are in series. Find equivalent capacitance.",
      "Explain the relation between electric field and potential. If V = 2x^2 + 3y, find E at (1, 2).",
      "What is electrostatic shielding? Give an example.",
      "A 10 microF capacitor is charged to 100 V. Find the energy stored and the charge on each plate.",
    ],
  },

  "electric-current": {
    overview:
      "Flip a switch, and light floods the room. Press a button, and a message reaches the other side of the world. But what is actually happening inside those wires? Electric current is the flow of charge - typically electrons moving through conductors. This chapter covers how current flows, what resists it, how circuits behave, and how we measure electrical quantities. You will learn Ohm's law (the relationship between voltage, current, and resistance), Kirchhoff's laws (the rules for analyzing complex circuits), how resistors combine in series and parallel, the Wheatstone bridge and meter bridge for measuring unknown resistance, the heating effect of current (how electric heaters work), and the temperature dependence of resistance. These are the fundamentals of electrical engineering - the physics behind every electronic device you have ever used.",
    concepts: [
      {
        title: "Electric Current and Drift Velocity",
        body:
          "Electric current I is the rate of flow of charge: I = dQ/dt. Unit: ampere (A). 1 A = 1 C/s. In metals, current is due to electron flow. Electrons move randomly at high speeds (~10^6 m/s), but when an electric field is applied, they drift slowly (~10^-4 m/s) toward the positive terminal. This drift velocity v_d = I/(neA), where n is number density of electrons, e is charge, A is cross-section area. Current density J = I/A = n e v_d. The direction of conventional current is opposite to electron flow - a historical convention that we are stuck with. Current can be DC (direct current, steady one way) or AC (alternating current, reverses periodically).",
      },
      {
        title: "Ohm's Law and Resistance",
        body:
          "Ohm's law: the potential difference across a conductor is proportional to the current through it, provided temperature and other physical conditions remain constant: V = IR. R is resistance (unit: ohm, O). 1 O = 1 V/A. Resistance depends on the material, length, and cross-section: R = rho L/A, where rho is resistivity (unit: O-m). Conductivity sigma = 1/rho. Conductors have low rho (copper: 1.7 x 10^-8 O-m). Insulators have very high rho (rubber: ~10^13 O-m). Semiconductors have intermediate rho. Not all materials obey Ohm's law - diodes and transistors are non-ohmic. For ohmic materials, the V-I graph is a straight line through the origin.",
      },
      {
        title: "Temperature Dependence of Resistance",
        body:
          "Resistance usually increases with temperature for metals. As metals heat up, atoms vibrate more, making it harder for electrons to flow. For most metals: R_T = R_0 (1 + alpha T), where alpha is the temperature coefficient of resistance (per degree C). For copper, alpha - 0.004 /C - resistance increases by 0.4% per degree C. This is why your phone charger cable gets warm when fast charging - current causes heating, which increases resistance, causing more heating. For semiconductors, resistance decreases with temperature - more heat frees up more charge carriers. This opposite behavior is used in thermistors (temperature sensors). Some alloys like constantan have very low alpha - their resistance stays nearly constant with temperature (used in standard resistors).",
      },
      {
        title: "Resistors in Series and Parallel",
        body:
          "Series: R_eq = R_1 + R_2 + R_3 + ... Same current through each resistor, voltage divides. Equivalent resistance is larger than the largest individual. Parallel: 1/R_eq = 1/R_1 + 1/R_2 + 1/R_3 + ... Same voltage across each, current divides. Equivalent resistance is smaller than the smallest individual. For two resistors in parallel: R_eq = (R_1 R_2)/(R_1 + R_2). This is why adding more bulbs in parallel does not reduce brightness (each gets full voltage), but adding in series makes them dimmer (voltage is shared). In household wiring, appliances are connected in parallel so each gets 220 V.",
      },
      {
        title: "Electromotive Force (EMF) and Internal Resistance",
        body:
          "A battery has an electromotive force (emf) epsilon - the energy it gives per unit charge. But batteries also have internal resistance r (due to the electrolyte and electrodes). The terminal voltage V = epsilon - Ir (when discharging). When current flows, some voltage drops across the internal resistance. This is why a battery's voltage drops under load - a 12 V car battery might read 11 V when starting the engine (high current drawn). When no current flows (open circuit), terminal voltage = emf. A good battery has low internal resistance. As batteries age, internal resistance increases, and terminal voltage drops more under load.",
      },
      {
        title: "Kirchhoff's Laws",
        body:
          "Kirchhoff had two simple but powerful rules. Kirchhoff's Current Law (KCL): at any junction, the sum of currents entering equals the sum of currents leaving. Current cannot pile up - like water in pipes. Kirchhoff's Voltage Law (KVL): the sum of all voltage gains (from batteries) around any closed loop equals the sum of all voltage drops (across resistors). The algebraic sum of all potential differences in a closed loop is zero. These laws allow you to analyze any circuit, no matter how complex. Steps: identify junctions and loops, assign current directions (if wrong, answer will be negative), apply KCL at junctions, apply KVL around loops, solve the resulting equations.",
      },
      {
        title: "Wheatstone Bridge",
        body:
          "The Wheatstone bridge is a clever circuit to measure an unknown resistance. Four resistors are arranged in a diamond shape with a galvanometer in the middle. When the bridge is balanced (no current through galvanometer), the ratio of two adjacent resistors equals the ratio of the other two: P/Q = R/S. If P, Q, R are known, S = (Q/P) R. The bridge is balanced by adjusting one known resistor until the galvanometer shows zero deflection. This is a null method - no calibration of the galvanometer needed, just detection of zero current. The meter bridge is a practical version using a 1 m wire as one pair of resistors.",
      },
      {
        title: "Electrical Power and Energy",
        body:
          "Power in a circuit: P = VI = I^2R = V^2/R. Unit: watt (W). A 100 W bulb on 220 V draws about 0.45 A. The energy consumed is power x time. Your electricity bill measures kilowatt-hours (kWh). 1 kWh = using 1000 W for 1 hour = 3.6 x 10^6 J. The heat produced in a resistor is I^2 R t (Joule's law of heating). That is how electric heaters, toasters, and incandescent bulbs work - current passing through a high-resistance wire generates heat. In bulbs, the filament (tungsten) gets so hot it glows white-hot. The heating effect is also why fuses work - if current exceeds rated value, the fuse wire melts, breaking the circuit and protecting appliances.",
      },
    ],
    keyPoints: [
      "Current I = dQ/dt. Unit: ampere. Conventional current direction opposite to electron flow.",
      "Drift velocity v_d = I/(neA). Very slow (~10^-4 m/s) despite fast random electron motion.",
      "Ohm's law: V = IR. R depends on material, length, area: R = rho L/A.",
      "Resistivity rho: conductor low (Cu: 1.7 x 10^-8), insulator very high, semiconductor intermediate.",
      "Temperature dependence: R_T = R_0 (1 + alpha T). Metals: alpha positive. Semiconductors: alpha negative.",
      "Series: R_eq = sum(R_i). Same I. Parallel: 1/R_eq = sum(1/R_i). Same V.",
      "EMF epsilon: energy per charge from battery. Terminal voltage V = epsilon - Ir.",
      "Kirchhoff's Current Law: sum I_in = sum I_out at junction.",
      "Kirchhoff's Voltage Law: sum of potential differences in closed loop = 0.",
      "Wheatstone bridge balanced: P/Q = R/S. Null method for measuring unknown resistance.",
      "Electrical power P = VI = I^2R = V^2/R. Energy = P x t. 1 kWh = 3.6 x 10^6 J.",
      "Joule's law of heating: H = I^2 R t. Heat produced is proportional to I^2, R, and t.",
      "Internal resistance causes terminal voltage to drop when current is drawn.",
    ],
    importantQuestions: [
      "Define drift velocity. Derive the expression for current in terms of drift velocity.",
      "State Ohm's law. A wire of length 1 m, radius 0.5 mm has resistance 5 O. Find resistivity.",
      "Explain temperature dependence of resistance for metals and semiconductors.",
      "State Kirchhoff's laws. Find the current in each branch of a given circuit using KCL and KVL.",
      "Describe principle and working of Wheatstone bridge. How is meter bridge used to find unknown resistance?",
      "An electric bulb rated 60 W, 220 V is connected to 220 V supply. Find current drawn and resistance.",
      "A 12 V battery has internal resistance 0.5 O. Find terminal voltage when it supplies 2 A current.",
      "Resistors 2 O, 3 O, and 6 O are in parallel. Find equivalent resistance. If connected across 12 V, find total current.",
    ],
  },

  "magnetism": {
    overview:
      "Why does a compass needle point north? How do magnets work? And what does electricity have to do with magnetism? This chapter explores magnetism - from the tiny magnetic moments of electrons to the large-scale magnetic fields of Earth and electromagnets. You will learn about the Biot-Savart law (how currents create magnetic fields), Ampere's law (a shortcut for finding magnetic fields in symmetric situations), the force on a current in a magnetic field (the motor effect), and the classification of materials as diamagnetic, paramagnetic, and ferromagnetic. Magnetism and electricity are two sides of the same coin - moving charges create magnetic fields, and magnetic fields exert forces on moving charges. That connection runs through everything from electric motors to MRI machines to the magnetic stripes on credit cards.",
    concepts: [
      {
        title: "Magnetic Field and Its Sources",
        body:
          "A magnetic field is a region where a magnetic force is experienced. Represented by B, unit: tesla (T) or gauss (1 T = 10^4 G). Earth's magnetic field is about 0.5 G = 5 x 10^-5 T. A bar magnet has field lines from north to south outside the magnet (south to north inside). Magnetic field lines always form closed loops - they do not start or end anywhere (unlike electric field lines which start and end on charges). There are no magnetic monopoles - a magnetic north pole always comes with a south pole. The sources of magnetic fields are moving charges (currents) and intrinsic magnetic moments of particles (like electron spin).",
      },
      {
        title: "Biot-Savart Law",
        body:
          "The Biot-Savart law gives the magnetic field produced by a tiny current element: dB = (mu_0/4 pi) (I dl x r-hat)/r^2, where mu_0 = 4 pi x 10^-7 T-m/A is the permeability of free space. The direction is given by the right-hand rule (cross product). For a long straight wire: B = mu_0 I / (2 pi r) - the field wraps around the wire in circles. For a circular loop at its center: B = mu_0 I/(2R) (for N turns, multiply by N). For a solenoid: B = mu_0 n I, where n = N/L is turns per unit length. The field is uniform inside a long solenoid and nearly zero outside.",
      },
      {
        title: "Ampere's Law",
        body:
          "Ampere's law: the line integral of B around any closed path equals mu_0 times the current enclosed: closed integral B dot dl = mu_0 I_enclosed. It is the magnetic equivalent of Gauss's law for electricity. For a long straight wire: choosing a circular path of radius r gives B x 2 pi r = mu_0 I, so B = mu_0 I/(2 pi r). For a solenoid: the path encloses nL turns, each carrying I, so B L = mu_0 n L I, giving B = mu_0 n I. For a toroid: B = mu_0 N I/(2 pi r) inside the toroid, zero outside. Ampere's law is only useful for highly symmetric situations.",
      },
      {
        title: "Force on a Current-Carrying Conductor",
        body:
          "A current-carrying wire in a magnetic field experiences a force: F = I L x B, where L is the length vector in the direction of current. Magnitude: F = BIL sin theta, where theta is angle between wire and B. Direction: Fleming's left-hand rule (thumb = force, index finger = field, middle finger = current). Maximum force when wire is perpendicular to B, zero when parallel. This is the motor effect - electric motors use loops of wire in a magnetic field. The torque on a current loop: tau = N I A B sin theta, where A is area of loop, theta is angle between normal to loop and B. This torque drives the rotation in motors and moving coil galvanometers.",
      },
      {
        title: "Force Between Parallel Currents",
        body:
          "Two parallel current-carrying wires exert magnetic forces on each other. Each wire produces a magnetic field that acts on the other wire. The force per unit length: F/L = mu_0 I_1 I_2/(2 pi d), where d is separation. Like currents (same direction) attract. Opposite currents repel. This is how the ampere is defined - one ampere is the current that, flowing in two parallel wires 1 m apart, produces a force of 2 x 10^-7 N per meter. This force is used in high-power circuit breakers - if current gets too high, the magnetic force becomes strong enough to mechanically separate the contacts.",
      },
      {
        title: "Moving Coil Galvanometer",
        body:
          "A moving coil galvanometer (MCG) detects small currents. It has a coil of wire suspended in a radial magnetic field. When current flows, torque acts on the coil: tau = N I A B. A spring provides restoring torque: tau = k phi, where phi is deflection angle. At equilibrium: phi = (N A B / k) I. The deflection is proportional to current. The current sensitivity = phi/I = N A B/k. The voltage sensitivity = phi/V = N A B/(kR). An MCG can be converted to an ammeter by connecting a small shunt resistor in parallel (to bypass most current). It can be converted to a voltmeter by connecting a large series resistor (to limit current through the coil).",
      },
      {
        title: "Diamagnetism",
        body:
          "Diamagnetic materials weakly repel magnetic fields. Water, copper, gold, and bismuth are diamagnetic. When you bring a magnet near them, they create a tiny opposing magnetic field inside - like saying stay away. The effect is super weak - you will not notice it with a fridge magnet. But with a strong enough magnet, you can make a drop of water levitate. Water floats above a magnet because it is diamagnetic. Diamagnetism arises from orbital motion of electrons - an applied field induces currents in electron orbits that oppose the field. All materials have some diamagnetism, but it is usually masked by stronger paramagnetic or ferromagnetic effects.",
      },
      {
        title: "Paramagnetism and Ferromagnetism",
        body:
          "Paramagnetic materials are weakly attracted to magnets. Aluminum, platinum, and oxygen are paramagnetic. Their atoms have unpaired electrons acting as tiny magnets, but randomly oriented. An external magnetic field aligns them slightly - like compass needles. Thermal jiggling keeps knocking them out of alignment - cooling strengthens the effect. Ferromagnetic materials - iron, nickel, cobalt - are strongly attracted and can be permanently magnetized. They have domains - microscopic regions where atomic magnets are already aligned. An external field grows the aligned domains, swallowing misaligned ones. Above Curie temperature, thermal vibrations destroy domain alignment and the material becomes paramagnetic. Iron's Curie temperature: 770 C.",
      },
      {
        title: "Hysteresis",
        body:
          "Hysteresis is the memory of magnetic materials. When you magnetize iron and remove the field, it does not return to zero magnetization - it stays partly magnetized. To demagnetize, you need a field in the opposite direction. The B-H curve (magnetization vs applied field) forms a loop - the hysteresis loop. Materials with wide loops (hard magnets) are used for permanent magnets - they retain magnetization. Materials with narrow loops (soft magnets) are used for transformer cores - they need to magnetize and demagnetize easily. The area of the hysteresis loop represents energy lost as heat per cycle. That is why transformer cores get warm - energy is lost in each AC cycle due to hysteresis.",
      },
    ],
    keyPoints: [
      "Magnetic field B, unit: tesla (T). Earth's B - 5 x 10^-5 T. Field lines form closed loops.",
      "Biot-Savart law: dB = (mu_0/4 pi) (I dl x r-hat)/r^2. mu_0 = 4 pi x 10^-7 T-m/A.",
      "Long straight wire: B = mu_0 I/(2 pi r). Circular loop center: B = mu_0 I/(2R).",
      "Solenoid: B = mu_0 n I inside, nearly zero outside. n = N/L = turns per unit length.",
      "Ampere's law: closed integral B dot dl = mu_0 I_enclosed. For symmetric situations only.",
      "Force on a conductor: F = I L x B. F = BIL sin theta. Fleming's left-hand rule for direction.",
      "Force between parallel wires: F/L = mu_0 I_1 I_2/(2 pi d). Like currents attract, opposites repel.",
      "Moving coil galvanometer: phi = (NAB/k) I. Converts to ammeter with shunt, voltmeter with series resistor.",
      "Diamagnetic: weakly repel (water, Cu). Paramagnetic: weakly attract (Al, Pt).",
      "Ferromagnetic: strongly attracted (Fe, Ni, Co). Have domains. Above Curie temperature ? paramagnetic.",
      "Hysteresis: B-H loop area = energy lost per cycle. Hard magnets (wide loop) for permanent magnets.",
      "Soft magnets (narrow loop) for transformer cores - magnetize/demagnetize easily.",
      "There are no magnetic monopoles - north pole always paired with south pole.",
    ],
    importantQuestions: [
      "State Biot-Savart law. Use it to find magnetic field at center of a circular current loop.",
      "State Ampere's law. Find magnetic field inside a solenoid and a toroid using it.",
      "Derive the expression for force between two parallel current-carrying conductors.",
      "Explain working of a moving coil galvanometer. How is it converted into an ammeter and voltmeter?",
      "A circular coil of radius 10 cm, 100 turns, carries 5 A. Find magnetic field at its center.",
      "Distinguish between diamagnetic, paramagnetic, and ferromagnetic materials with examples.",
      "Explain the domain theory of ferromagnetism. What is Curie temperature?",
      "What is hysteresis? Draw and explain B-H curve for a ferromagnetic material.",
      "Two long parallel wires 5 cm apart carry currents 10 A and 15 A in same direction. Find force per unit length on each.",
      "A galvanometer of resistance 100 O gives full-scale deflection for 1 mA. Convert it to (a) 0-1 A ammeter (b) 0-10 V voltmeter.",
    ],
  },

  "em-waves": {
    overview:
      "Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays - they all travel at the same speed in vacuum and they are all electromagnetic waves. But what makes them different? Frequency and wavelength. This chapter is about electromagnetic waves - how they are produced, how they travel, their properties, and their uses. James Clerk Maxwell predicted their existence in 1864 by realizing that a changing electric field creates a magnetic field, and a changing magnetic field creates an electric field - a self-sustaining wave that needs no medium. Heinrich Hertz later proved they exist. Today we use EM waves for everything from cooking food (microwaves) to looking at broken bones (X-rays) to talking to people on the other side of the planet (radio waves).",
    concepts: [
      {
        title: "Maxwell's Equations and EM Wave Prediction",
        body:
          "Maxwell combined four equations of electromagnetism and noticed something missing - a changing electric field produces a magnetic field (displacement current). This symmetry with Faraday's law (changing magnetic field produces electric field) meant that an electromagnetic wave could propagate through empty space. The four equations: Gauss's law for electricity (E-field divergence = charge density/epsilon_0), Gauss's law for magnetism (B-field divergence = 0 - no monopoles), Faraday's law (changing B produces E), and Ampere's law with Maxwell's addition (changing E produces B). Maxwell calculated the speed of these waves and found it matched the speed of light - showing that light itself is an electromagnetic wave.",
      },
      {
        title: "Displacement Current",
        body:
          "The displacement current is Maxwell's brilliant addition. In a circuit with a capacitor, current cannot flow through the gap between plates - so how is the circuit complete? Maxwell said the changing electric field between the plates acts like a current: I_d = epsilon_0 d(phi_E)/dt, where phi_E is the electric flux. This displacement current is what makes EM wave propagation possible. Without it, there would be no magnetic field in empty space, and radio waves, light, and all other EM radiation would not exist. The displacement current also explains why a capacitor passes AC current - the changing electric field between plates keeps the circuit going even though no charges cross the gap.",
      },
      {
        title: "Properties of Electromagnetic Waves",
        body:
          "EM waves are transverse - the electric and magnetic fields oscillate perpendicular to each other and to the direction of propagation. E and B are in phase (their peaks coincide). The ratio of their magnitudes is constant: E_0/B_0 = c (speed of light). In vacuum, all EM waves travel at c = 3 x 10^8 m/s regardless of frequency. The energy in an EM wave is carried by both fields. Energy density: u = (1/2)epsilon_0 E^2 + (1/2mu_0)B^2. Energy flows in the direction of propagation, given by the Poynting vector S = (E x B)/mu_0. Intensity I = power/area = (1/2) c epsilon_0 E_0^2. EM waves carry momentum too: p = U/c.",
      },
      {
        title: "The Electromagnetic Spectrum",
        body:
          "The EM spectrum spans from radio waves (lowest frequency, longest wavelength) to gamma rays (highest frequency, shortest wavelength). Radio waves (10^3 - 10^9 Hz): used for communication, TV, radio. Microwaves (10^9 - 10^12 Hz): used for radar, microwave ovens (2.45 GHz excites water molecules), satellite communication. Infrared (10^12 - 4.3 x 10^14 Hz): thermal radiation, remote controls, night vision. Visible light (4.3 - 7.5 x 10^14 Hz): what our eyes can detect - ROYGBIV. Ultraviolet (7.5 x 10^14 - 10^16 Hz): causes sunburn, used for sterilization. X-rays (10^16 - 10^20 Hz): medical imaging, security scanners. Gamma rays (> 10^20 Hz): nuclear radiation, cancer treatment, produced by cosmic events.",
      },
      {
        title: "Production and Detection of EM Waves",
        body:
          "EM waves are produced by accelerating charges. An oscillating charge (like electrons in an antenna moving back and forth) produces EM waves of the same frequency. An LC circuit (inductor + capacitor) oscillates at its natural frequency and radiates EM waves if connected to an antenna. Hertz generated radio waves using a spark gap transmitter and detected them with a loop antenna - proving Maxwell's theory. For detection, the antenna must be comparable to the wavelength (lambda/2 is common). A receiving antenna picks up the wave and induces a tiny current, which is then amplified and processed. Different frequency bands require different antenna designs.",
      },
      {
        title: "Applications of EM Waves",
        body:
          "Radio waves: AM (amplitude modulation) and FM (frequency modulation) broadcasting, television, cell phones, Wi-Fi. Microwaves: radar (detecting aircraft, weather), microwave ovens, Bluetooth, GPS. Infrared: thermal imaging, remote controls, fiber optic communications, spectroscopy (identifying molecules by their IR absorption patterns). Visible light: photography, microscopy, lasers, optical fiber communication. Ultraviolet: sterilization of water and medical equipment, fluorescence (blacklight posters), detecting forged banknotes. X-rays: medical and dental X-rays, CT scans, security baggage screening, crystallography (determining atomic structures). Gamma rays: cancer radiotherapy, sterilizing medical equipment, food irradiation, studying nuclear reactions.",
      },
    ],
    keyPoints: [
      "EM waves are transverse: E and B are perpendicular to each other and to propagation direction.",
      "Maxwell predicted EM waves. Speed c = 1/sqrt(epsilon_0 mu_0) = 3 x 10^8 m/s.",
      "Displacement current I_d = epsilon_0 d(phi_E)/dt. Essential for EM wave propagation.",
      "E and B are in phase. E_0/B_0 = c. Energy density u = (1/2)epsilon_0 E^2 + (1/2mu_0)B^2.",
      "Poynting vector S = (E x B)/mu_0 gives direction and rate of energy flow.",
      "EM waves carry momentum: p = U/c. They exert radiation pressure.",
      "EM spectrum: Radio, Microwaves, IR, Visible, UV, X-rays, Gamma rays.",
      "Frequency increases (wavelength decreases) from radio to gamma.",
      "All EM waves travel at c in vacuum. Speed is lower in materials.",
      "EM waves produced by accelerating charges. Oscillating charge ? oscillating fields.",
      "Radio and microwaves: communication. IR: thermal. Visible: sight. UV: sterilization.",
      "X-rays: medical imaging. Gamma rays: cancer treatment, nuclear physics.",
      "Different EM wave bands require different antenna designs and detection methods.",
    ],
    importantQuestions: [
      "What are electromagnetic waves? Derive the speed of EM waves in vacuum using Maxwell's equations.",
      "Explain the concept of displacement current. Why was it necessary for Maxwell to add it?",
      "Write the electromagnetic spectrum in order of increasing frequency. Give one use of each type.",
      "State properties of electromagnetic waves. Show that E_0/B_0 = c.",
      "Explain how an oscillating LC circuit produces electromagnetic waves.",
      "What is the Poynting vector? What does it represent?",
      "Why are microwaves used in radar and oven but not for medical imaging? Explain.",
      "An EM wave has E_0 = 100 V/m. Find B_0 and the intensity of the wave.",
    ],
  },

  "semiconductors": {
    overview:
      "Every single electronic device you own - your phone, laptop, TV - is built from tiny semiconductors. These materials are neither good conductors nor good insulators; they are in between. But with a little clever doping (adding impurities), they become the most versatile materials in the world. This chapter is about the building blocks of modern electronics. You will learn about intrinsic and extrinsic semiconductors, PN junction diodes and their V-I characteristics, rectifiers that convert AC to DC, special diodes like Zener diodes and LEDs, and the basics of logic gates - the fundamental building blocks of digital circuits. The transistor, invented in 1947, revolutionized the world. Today, billions of transistors fit on a fingernail-sized chip. Understanding semiconductors is understanding how modern technology works.",
    concepts: [
      {
        title: "Intrinsic Semiconductors",
        body:
          "Pure silicon (Si) or germanium (Ge) are intrinsic semiconductors. At absolute zero (0 K), they are perfect insulators - all electrons are in the valence band, the conduction band is empty. As temperature rises, some electrons gain enough energy to jump from the valence band to the conduction band, leaving behind holes (vacant spots) in the valence band. Each electron-hole pair is created thermally. In an intrinsic semiconductor, the number of electrons in conduction band (n_i) equals the number of holes in valence band (p_i), and both increase with temperature. At 300 K, silicon has about 1.5 x 10^10 carriers/cm^3 - much less than a conductor (about 10^22/cm^3). This is why pure silicon does not conduct well.",
      },
      {
        title: "Extrinsic Semiconductors - Doping",
        body:
          "Doping is adding a tiny impurity (about 1 part in 10^7) to dramatically change conductivity. N-type semiconductor: add a pentavalent atom (phosphorus, arsenic, antimony - 5 valence electrons). Four electrons bond with silicon, one is extra - it becomes a free electron. The majority carriers are electrons, minority are holes. P-type semiconductor: add a trivalent atom (boron, aluminum, indium - 3 valence electrons). Three electrons bond, leaving one bond unfilled - a hole. Majority carriers are holes, minority are electrons. The doping concentration determines conductivity. Heavier doping = more carriers = higher conductivity. The extrinsic carrier concentration far exceeds the intrinsic concentration - n_n >> n_i for n-type, p_p >> n_i for p-type.",
      },
      {
        title: "PN Junction Diode",
        body:
          "Join a p-type and n-type semiconductor together. At the junction, electrons from n-side diffuse into p-side, recombining with holes. This creates a depletion region - a layer with no free carriers, only fixed ions (positive on n-side, negative on p-side). This sets up a built-in potential barrier (about 0.7 V for silicon, 0.3 V for germanium). Forward bias: p-side connected to positive, n-side to negative. The applied voltage reduces the barrier, current flows easily. Reverse bias: p-side to negative, n-side to positive. The barrier increases, no current flows (except a tiny leakage current). The diode acts as a one-way valve for current - the basis of rectification.",
      },
      {
        title: "V-I Characteristics of PN Junction",
        body:
          "The voltage-current relationship of a diode is nonlinear. In forward bias: current is negligible until the voltage exceeds the knee voltage (about 0.7 V for Si, 0.3 V for Ge). After that, current increases rapidly with small voltage increase - approximately I = I_0 (e^(eV/kT) - 1). In reverse bias: a very small reverse saturation current I_0 flows (microamperes for Si, milliamperes for Ge), which is almost independent of voltage. If reverse voltage exceeds the breakdown voltage, the diode breaks down and current suddenly increases. The V-I characteristic clearly shows the rectifying behavior - the diode conducts in one direction only.",
      },
      {
        title: "Half-Wave Rectifier",
        body:
          "A rectifier converts AC to DC. A half-wave rectifier uses a single diode. During the positive half-cycle of AC input, the diode is forward biased and conducts - current flows through the load. During the negative half-cycle, the diode is reverse biased and blocks current. The output is a pulsating DC with only positive half-cycles. The average (DC) voltage V_dc = V_m/pi, where V_m is the peak voltage. The ripple factor (measure of smoothness) is about 1.21 for half-wave - very poor. Efficiency is about 40.6%. Half-wave rectifiers are simple but inefficient - they waste half the input power.",
      },
      {
        title: "Full-Wave Rectifier",
        body:
          "A full-wave rectifier uses both half-cycles. There are two types: center-tap rectifier (uses two diodes and a center-tapped transformer) and bridge rectifier (uses four diodes, no center tap needed). In a bridge rectifier: during positive half-cycle, diodes D1 and D2 conduct, D3 and D4 are reverse biased. During negative half-cycle, D3 and D4 conduct, D1 and D2 are reverse biased. The output current flows through the load in the same direction for both half-cycles. Average voltage V_dc = 2V_m/pi. Ripple factor is about 0.48 - much smoother than half-wave. Efficiency is about 81.2%. Adding a filter capacitor across the output smoothes the pulsating DC further.",
      },
      {
        title: "Zener Diode",
        body:
          "A Zener diode is designed to operate in reverse breakdown - it conducts in reverse bias when voltage exceeds the Zener voltage V_z. The key property: the voltage across a Zener diode remains nearly constant at V_z even when current varies widely (within limits). This makes it perfect for voltage regulation. A Zener voltage regulator: connect a Zener diode (in reverse bias) with a series resistor R_s. The input voltage V_in drops across R_s and the Zener. As V_in fluctuates, the current through the Zener changes, but the voltage across it stays at V_z. The load across the Zener gets a stable voltage. Zener diodes are available with various breakdown voltages from about 2 V to hundreds of volts.",
      },
      {
        title: "Light Emitting Diode (LED)",
        body:
          "An LED emits light when forward biased. When electrons and holes recombine at the PN junction, energy is released as photons (light). The color depends on the band gap energy E_g of the semiconductor: E_g = hf = hc/lambda. Different materials give different colors: GaAs (infrared), GaAsP (red, yellow), GaP (green), GaN (blue, white). LEDs have many advantages: low power consumption, long life, fast switching, small size, ruggedness. They replaced incandescent bulbs in many applications. White LEDs are made by coating a blue LED with yellow phosphor - the combination produces white light. LEDs require proper current limiting (a series resistor) - too much current destroys them.",
      },
      {
        title: "Logic Gates",
        body:
          "Logic gates are the simplest digital building blocks. They perform Boolean operations on binary inputs (0 and 1). AND gate: output 1 only if ALL inputs are 1. OR gate: output 1 if AT LEAST one input is 1. NOT gate: inverts the input (0?1, 1?0). NAND gate: AND followed by NOT - universal gate (any logic gate can be built using only NANDs). NOR gate: OR followed by NOT - also universal. XOR gate: output 1 if inputs are different. The truth table lists all input combinations and the corresponding output. Logic gates are implemented using transistors (diodes and transistors in RTL, DTL, TTL, or CMOS technology). Millions of gates fit on a single chip in modern processors.",
      },
    ],
    keyPoints: [
      "Intrinsic semiconductor: pure Si/Ge. Electrons and holes in equal numbers (n_i = p_i).",
      "Extrinsic: n-type (pentavalent dopant ? extra electrons) and p-type (trivalent dopant ? extra holes).",
      "Doping dramatically increases conductivity. Majority carriers dominate conductivity.",
      "PN junction: depletion region forms at junction. Built-in potential ~0.7 V (Si).",
      "Forward bias: reduces barrier ? current flows. Reverse bias: increases barrier ? no current.",
      "V-I characteristic: nonlinear. Knee voltage ~0.7 V (Si). Breakdown in reverse at high voltage.",
      "Half-wave rectifier: 1 diode, V_dc = V_m/pi, efficiency 40.6%, ripple factor 1.21.",
      "Full-wave bridge rectifier: 4 diodes, V_dc = 2V_m/pi, efficiency 81.2%, ripple factor 0.48.",
      "Zener diode: operates in reverse breakdown. Used as voltage regulator - maintains constant V_z.",
      "LED: emits light when forward biased. Color depends on band gap. Requires current limiting resistor.",
      "Logic gates: AND, OR, NOT, NAND, NOR, XOR. NAND and NOR are universal gates.",
      "Truth table lists all input-output combinations for a logic gate.",
      "Transistors are the building blocks of logic gates and all digital circuits.",
    ],
    importantQuestions: [
      "Distinguish between intrinsic and extrinsic semiconductors. Explain n-type and p-type doping.",
      "Explain the working of a PN junction diode in forward and reverse bias with V-I characteristics.",
      "Draw and explain the working of a full-wave bridge rectifier. How is ripple reduced?",
      "Distinguish between half-wave and full-wave rectifiers.",
      "What is a Zener diode? Explain its use as a voltage regulator with a circuit diagram.",
      "Explain the working of an LED. What determines the color of light emitted?",
      "Realize the logic gates AND, OR, NOT using NAND gates only.",
      "Draw the truth tables for AND, OR, NOT, NAND, and NOR gates.",
      "A half-wave rectifier has input 230 V (rms) AC. Find the DC output voltage and ripple factor.",
      "Explain the formation of depletion region in a PN junction. What is barrier potential?",
    ],
  },


};

export default content;

