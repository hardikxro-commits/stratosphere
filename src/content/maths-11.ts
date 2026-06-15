interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "angle-measurement": {
    overview:
      "You've been measuring angles since geometry class — probably in degrees. But have you ever wondered where degrees come from, or why there's a mysterious RAD mode on your calculator that nobody ever touches? Angle measurement is one of those topics that seems simple on the surface but has layers of depth once you look closer. It's not just about protractors and 90° corners; it's about understanding how we quantify rotation, direction, and turn — concepts that matter in everything from navigation to engineering to physics.\n\nLet's start with degrees. A degree is defined as 1/360th of a full rotation. Why 360? Historians believe it comes from the Babylonians, who used a base-60 number system. They noticed that the Sun moves about 1° per day relative to the background stars, so a year — roughly 360 days in ancient reckoning — corresponded to a full circle. The number 360 is also beautifully divisible: it has 24 divisors, so you can split a circle into halves, thirds, quarters, fifths, sixths, eighths, and a dozen other equal parts without running into fractions. That convenience is why degrees stuck around for thousands of years.\n\nBut degrees have a problem. If you want to do calculus or advanced physics with angles, degrees make the formulas ugly. Derivatives and integrals of trig functions would carry annoying factors of π/180 everywhere. That's where radians come in. A radian is the 'natural' unit for measuring angles. Here's the definition: take a circle of radius r, and mark off an arc along the circumference whose length equals r. The angle subtended at the center is exactly 1 radian. In other words, the angle in radians is simply the ratio of arc length to radius: θ = s/r. This makes radians unitless — they're just a ratio — which is why they work so beautifully in calculus.\n\nOne full circle is 2π radians (approximately 6.28), because the circumference of a circle is 2πr, and dividing that by r gives 2π. So π radians = 180°, and that's the single most important conversion to memorise. From there, you can convert anything: radians to degrees by multiplying by 180/π, and degrees to radians by multiplying by π/180.\n\nArmed with radians, you get clean formulas for arc length s = rθ and sector area A = ½r²θ. If you tried using degrees, those formulas would be s = (πrθ)/180 and A = (πr²θ)/360 — much messier. And if you're dealing with angular motion, radian measure makes ω (angular speed) come out naturally in radians per second, which ties directly to linear speed v = rω.\n\nBy the end of this chapter, you'll be able to switch between degrees and radians without thinking, compute arc lengths and sector areas like a pro, and understand what people mean when they say 'an angle of 1 radian'. This is foundational stuff — every maths and physics topic from here on out assumes you're comfortable with radians, so take the time to really get it.\n\nWe'll also touch on directed angles (positive for anti-clockwise, negative for clockwise), the minute-second subdivisions of degrees, and a few historical curiosities. Let's dive in.",
    concepts: [
      {
        title: "Directed angles — which way are you turning?",
        body:
          "In maths, direction matters. A positive angle means turning anti-clockwise from the initial ray to the terminal ray. A negative angle means turning clockwise. This might feel arbitrary, but it's a convention that lets us describe any orientation precisely. When you hear 'an angle of −30°', think 'rotate 30° clockwise'. For trigonometry this becomes essential because the sign of an angle determines which quadrant you end up in.",
      },
      {
        title: "Degree measure and its subdivisions",
        body:
          "One degree (1°) is 1/360th of a full rotation. But sometimes you need finer precision. Each degree is divided into 60 minutes (60'), and each minute is divided into 60 seconds (60''). So an angle could be written as 45° 30' 15''. This sexagesimal system (base-60) is a relic of Babylonian mathematics, but it's still used in navigation, astronomy, and GPS coordinates. In pure maths though, you'll almost always work with decimal degrees or radians.",
      },
      {
        title: "Radian measure — the natural angle",
        body:
          "Here's the clearest way to understand radians. Take a circle of any radius r. Walk along the circumference a distance equal to r. The angle you just covered at the center is 1 radian. So θ (in radians) = arc length / radius = s/r. Since arc length and radius have the same units, radians are actually dimensionless — they're just a number. That's why they're called 'natural' units; they emerge from the geometry of the circle itself rather than from an arbitrary division like 1/360.",
      },
      {
        title: "Why π radians = 180° — the universal conversion",
        body:
          "A full circle = 360° = 2π radians. Divide both sides by 2 and you get 180° = π radians. That's the one relationship you need to commit to memory. From this you can derive everything. To convert degrees to radians, multiply by (π/180). To convert radians to degrees, multiply by (180/π). For example, 90° × (π/180) = π/2 rad. And (3π/4) rad × (180/π) = 135°.",
      },
      {
        title: "Standard angles — the ones that show up everywhere",
        body:
          "Some angles come up so often that you should just know them in both degrees and radians. 0° = 0 rad. 30° = π/6. 45° = π/4. 60° = π/3. 90° = π/2. 120° = 2π/3. 135° = 3π/4. 150° = 5π/6. 180° = π. 270° = 3π/2. 360° = 2π. Memorise these and you'll breeze through most trigonometry problems. They're the 'standard angles' for a reason — sin and cos at these angles give nice exact values like √2/2, √3/2, and 1/2.",
      },
      {
        title: "Arc length — how far along the curve?",
        body:
          "If you know the radius of a circle and the angle (in radians) that an arc subtends, the arc length is simply s = rθ. That's it. No messy constants. For example, a 60° angle on a circle of radius 10 cm means θ = π/3, so s = 10 × π/3 ≈ 10.47 cm. In degrees, the formula would be s = (2πrθ)/360 = (πrθ)/180, which is exactly the same thing but harder to remember and use.",
      },
      {
        title: "Area of a sector — the pizza slice formula",
        body:
          "A sector is like a pizza slice: a region bounded by two radii and the arc between them. Its area is proportional to the angle. In radians: A = ½r²θ. Again, beautifully simple. For a 90° slice (θ = π/2) with r = 8 cm, area = ½ × 64 × π/2 = 16π cm². In degrees, the same would be A = (πr²θ)/360, which takes more steps. Radians make sector problems trivial.",
      },
      {
        title: "Area of a segment — sector minus triangle",
        body:
          "A segment is the region between a chord and its arc. To find its area, calculate the sector area (½r²θ) and subtract the triangle area formed by the two radii and the chord (½r² sin θ). So segment area = ½r²(θ − sin θ). This works when θ is in radians and both the sector and triangle share r. It's a neat example of combining formulas from different chapters.",
      },
      {
        title: "Angular speed — how fast is it rotating?",
        body:
          "Angular speed ω tells you how quickly an angle changes. ω = θ/t, typically in rad/s. If a fan blade spins at 300 RPM (revolutions per minute), its angular speed in rad/s is 300 × 2π / 60 = 10π rad/s. Angular speed is the rotational analogue of linear speed, and it's a fundamental concept in physics and engineering.",
      },
      {
        title: "Linear speed — connecting rotation to distance",
        body:
          "When something rotates, points at different distances from the center move at different speeds. Linear speed v = rω, where r is the radius and ω is the angular speed. A point on the rim of a wheel of radius 0.5 m spinning at ω = 10 rad/s has v = 5 m/s. A point halfway to the center has half that speed. This relationship is why radians are so powerful for rotational motion problems.",
      },
      {
        title: "Clock angle problems",
        body:
          "Clocks are a classic application of angle measurement. The hour hand moves 360° in 12 hours = 0.5° per minute. The minute hand moves 360° in 60 minutes = 6° per minute. So at h hours and m minutes, the angle between them is |30h − 5.5m|° (the smaller angle). This formula is derived from the relative speeds and is a nice test of your angle reasoning.",
      },
      {
        title: "Complementary and supplementary angles",
        body:
          "Two angles that add up to 90° (π/2) are complementary. Two that add up to 180° (π) are supplementary. These relationships are useful in geometry proofs and in solving triangle problems. In radians, if θ and (π/2 − θ) are complementary. This appears again in trigonometry when you learn that sin θ = cos(π/2 − θ).",
      },
      {
        title: "Coterminal angles — different angles, same position",
        body:
          "Adding or subtracting full rotations (360° or 2π) gives you coterminal angles — they land on the same terminal side. For example, 30° and 390° (30° + 360°) are coterminal. So are −330° (30° − 360°). This concept is crucial when finding general solutions to trigonometric equations or simplifying large angles.",
      },
      {
        title: "Minute and second hand relationships",
        body:
          "Beyond the basics, you can explore problems involving all three hands of a clock. The second hand moves 360° per minute = 6° per second. At what times do two hands coincide? These problems combine angle measurement with algebra and are a fun challenge. The relative angular speed approach works best here.",
      },
      {
        title: "Applications in geography and navigation",
        body:
          "Latitude and longitude are angles measured from the Earth's center and the prime meridian. One degree of latitude ≈ 111 km. Nautical miles are based on this: 1 nautical mile = 1 minute of latitude ≈ 1.852 km. The entire system of global navigation relies on angle measurement, which is why understanding degrees, minutes, and seconds still matters even in the age of GPS.",
      },
      {
        title: "Relationship between degrees and real distances",
        body:
          "A useful extension: the length of an arc on Earth's surface (approximating Earth as a sphere of radius 6400 km) is s = (πRθ)/180 where θ is in degrees. This is how you calculate distances along lines of longitude or the distance between two points on the equator. It's the same arc length formula, just with degrees converted.",
      },
    ],
    keyPoints: [
      "1° = 1/360th of a full rotation; historically from Babylonian base-60 astronomy",
      "1 radian is the angle where arc length equals radius — θ = s/r",
      "π radians = 180° — the single most important conversion to memorise",
      "Degrees to radians: multiply by π/180. Radians to degrees: multiply by 180/π",
      "Standard angles in radians: 0, π/6, π/4, π/3, π/2, π, 3π/2, 2π",
      "Arc length: s = rθ (θ in radians)",
      "Area of sector: A = ½r²θ (θ in radians)",
      "Area of segment: A = ½r²(θ − sin θ)",
      "Linear speed v = rω, where ω is angular speed in rad/s",
      "Positive angles are anti-clockwise; negative angles are clockwise",
      "1° = 60 minutes (60'), 1' = 60 seconds (60'')",
      "Coterminal angles: same terminal side, differ by multiples of 360°",
      "Complementary angles sum to 90° (π/2); supplementary sum to 180° (π)",
      "Radians are dimensionless — they're just a ratio of lengths",
      "Clock angle formula: angle = |30h − 5.5m|°",
    ],
    importantQuestions: [
      "Convert 150° to radian measure and 5π/6 to degree measure. Express your answers in exact form.",
      "A pendulum bob swings through an arc of length 44 cm. If the string is 56 cm long, find the angle covered in degrees and radians.",
      "Find the area of a sector with radius 14 cm and central angle 60°. Also find the perimeter of the sector.",
      "A horse is tied to a pole with a 21 m rope. If it grazes an arc of length 44 m, find the angle subtended at the pole.",
      "The minute hand of a clock is 14 cm long. Find the area swept by it between 9:00 AM and 9:25 AM.",
      "Two angles of a triangle are 45° and 60°. Express all three angles in radians.",
      "A wheel makes 240 revolutions per minute. Find its angular speed in rad/s and the linear speed of a point 30 cm from the center.",
    ],
  },

  "trigonometry-1": {
    overview:
      "Trigonometry. The word itself sounds intimidating — but break it down and it's just 'trigon' (triangle) + 'metron' (measure). Triangle measuring. And at its core, that's exactly what it is. But somewhere along the way, trigonometry expands from measuring triangles to describing cycles, waves, and anything that repeats. Sound, light, seasons, heartbeats — they're all described by trig functions.\n\nLet's start with a right triangle. You've got three sides: opposite (across from the angle), adjacent (next to the angle), and hypotenuse (the long one). Every ratio of two sides gives you a trig function. The three primary ones are sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent. Then the reciprocals: cosec θ = 1/sin, sec θ = 1/cos, and cot θ = 1/tan. That's six functions from three ratios. Not so scary after all.\n\nBut triangles only get you so far. What about an angle of 120°? You can't have a right triangle with a 120° angle (a triangle's angles sum to 180°, so a right triangle is at most 90°+something). That's where the unit circle comes in. Draw a circle of radius 1 centered at the origin. For any angle θ, draw a line from the origin at that angle — it hits the circle at a point (x, y). The x-coordinate is cos θ, and the y-coordinate is sin θ. This single idea extends trigonometry to all angles — positive, negative, any size.\n\nThe unit circle also makes trig identities obvious. The Pythagorean identity sin²θ + cos²θ = 1 is just Pythagoras' theorem on a right triangle with hypotenuse 1. The ASTC rule (All, Sin, Tan, Cos) tells you which functions are positive in each quadrant, working anti-clockwise from Quadrant I where everything's positive.\n\nWe'll also cover the trigonometric ratios of standard angles — the ones you should just know because they give nice exact values. You'll learn how trig functions behave with negative angles, with angles greater than 360°, and with allied angles like (180° − θ) and (90° + θ).\n\nBy the end, you'll be able to find any trig ratio for any angle, simplify expressions using identities, and understand the graphs of sin, cos, and tan. This is the foundation for Trigonometry 2, where things get compound and exciting.",
    concepts: [
      {
        title: "The six trigonometric ratios — the full family",
        body:
          "In any right-angled triangle with angle θ: sin θ = opposite/hypotenuse (O/H), cos θ = adjacent/hypotenuse (A/H), tan θ = opposite/adjacent (O/A). Their reciprocals: cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ. The mnemonic 'SOH CAH TOA' helps you remember the first three. For the reciprocals, just remember 'cosec is 1 over sin' and so on.",
      },
      {
        title: "The unit circle — the single best tool in trig",
        body:
          "Centre a circle of radius 1 at (0,0). For any angle θ, the point where the terminal ray meets the circle has coordinates (cos θ, sin θ). This means cos is the x-coordinate and sin is the y-coordinate. The unit circle lets you define trig functions for any angle — not just acute ones. It also shows you the range: cos and sin are always between −1 and 1.",
      },
      {
        title: "ASTC rule — who's positive where?",
        body:
          "The four quadrants of the coordinate plane each have a different sign pattern for trig functions. ASTC stands for All, Sin, Tan, Cos — reading anti-clockwise from Quadrant I. QI (0°−90°): all six functions are positive. QII (90°−180°): sin and cosec are positive. QIII (180°−270°): tan and cot are positive. QIV (270°−360°): cos and sec are positive. 'All Students Take Calculus' is a common mnemonic.",
      },
      {
        title: "Trig ratios of standard angles — the exact values",
        body:
          "Some angles give you clean, exact trig values. 0°: sin=0, cos=1, tan=0. 30° (π/6): sin=½, cos=√3/2, tan=1/√3. 45° (π/4): sin=1/√2, cos=1/√2, tan=1. 60° (π/3): sin=√3/2, cos=½, tan=√3. 90° (π/2): sin=1, cos=0, tan=undefined. These come from simple right triangles (30-60-90 and 45-45-90) and memorising them saves you time in exams.",
      },
      {
        title: "Trigonometric ratios of complementary angles",
        body:
          "Two angles that add up to 90° (π/2) are complementary. The key relationship: sin(90° − θ) = cos θ, cos(90° − θ) = sin θ, tan(90° − θ) = cot θ. For reciprocals: cosec(90° − θ) = sec θ, sec(90° − θ) = cosec θ, cot(90° − θ) = tan θ. These are useful for simplifying expressions and proving identities.",
      },
      {
        title: "Allied angles — how trig functions transform",
        body:
          "Angles like (90° ± θ), (180° ± θ), (270° ± θ), and (360° ± θ) are called allied angles. There are systematic rules: the function changes name when the multiple is 90° or 270° (sin ↔ cos, tan ↔ cot, sec ↔ cosec) and keeps the same name for 180° and 360°. The sign depends on the ASTC rule for the resulting quadrant.",
      },
      {
        title: "The Pythagorean identities — the holy trinity",
        body:
          "The fundamental identity: sin²θ + cos²θ = 1. Divide by cos²θ: tan²θ + 1 = sec²θ. Divide by sin²θ: 1 + cot²θ = cosec²θ. These three identities are the most used in the entire subject. Every trig simplification, every proof, every equation — you'll reach for these constantly. Memorise them like your name.",
      },
      {
        title: "Periodicity of trigonometric functions",
        body:
          "Trig functions repeat. sin(θ + 360°) = sin θ, and the same for cos. So sin and cos have a period of 360° (2π). Tan has a smaller period: tan(θ + 180°) = tan θ, so its period is 180° (π). This periodic nature reflects rotational symmetry — going around the circle again brings you back to the same point.",
      },
      {
        title: "Even and odd trig functions",
        body:
          "Cos is an even function: cos(−θ) = cos θ (symmetric about the y-axis). Sin and tan are odd: sin(−θ) = −sin θ and tan(−θ) = −tan θ (symmetric about the origin). These properties help simplify expressions with negative angles and are useful in integration later.",
      },
      {
        title: "Domain and range of trig functions",
        body:
          "Sin and cos have domain ℝ (all real numbers) and range [−1, 1]. Tan has domain ℝ except odd multiples of 90° (where cos = 0) and range ℝ. Cosec and sec have range (−∞, −1] ∪ [1, ∞). Cot has domain ℝ except multiples of 180° and range ℝ. Understanding these helps avoid undefined operations.",
      },
      {
        title: "Graphs of sin, cos, and tan",
        body:
          "The graph of sin x is a smooth wave starting at 0, peaking at 1 at 90°, back to 0 at 180°, trough at −1 at 270°, back to 0 at 360°. Cos x is the same wave shifted left by 90°. Tan x has vertical asymptotes at odd multiples of 90° and rises from −∞ to +∞ between them. These graphs visualise everything you need to know about amplitude, period, and frequency.",
      },
      {
        title: "Maximum and minimum values of trig expressions",
        body:
          "Since sin and cos are bounded between −1 and 1, expressions like a sin θ + b cos θ have max/min of ±√(a² + b²). This is a standard technique: write it as R sin(θ + α) or R cos(θ + α). For example, 3 sin θ + 4 cos θ has max value 5 (since √(3²+4²) = 5). This is useful in optimisation problems in physics and engineering.",
      },
      {
        title: "Solving simple trigonometric equations",
        body:
          "Basic trig equations like sin θ = ½, cos θ = 0, or tan θ = 1 can be solved using standard angles and ASTC. Sin θ = ½ gives θ = 30° and 150° (in 0°−360°). Cos θ = 0 gives θ = 90° and 270°. Tan θ = 1 gives θ = 45° and 225°. Multiple solutions exist because trig functions are periodic.",
      },
      {
        title: "Trigonometric ratios in terms of sides of a triangle",
        body:
          "Given the sides of a right triangle, you can find all six trig ratios for either acute angle. If the opposite side is 3, adjacent is 4, and hypotenuse is 5, then sin = 3/5, cos = 4/5, tan = 3/4, and so on. This is the most direct application of trig — given a triangle, find the ratios.",
      },
      {
        title: "Finding all ratios from one given ratio",
        body:
          "If sin θ = 3/5 and θ is in QII, you can find cos θ using the Pythagorean identity: cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25, so cos θ = ±4/5. In QII, cos is negative, so cos θ = −4/5. Then tan θ = sin θ/cos θ = −3/4. This 'given one ratio, find the rest' is a classic problem type.",
      },
      {
        title: "Areas of triangles using trig",
        body:
          "The area of any triangle can be found using two sides and the included angle: Area = ½ab sin C. When C = 90°, sin C = 1, and this reduces to the familiar ½ × base × height. This formula connects trigonometry back to geometry and is essential for solving non-right triangles.",
      },
    ],
    keyPoints: [
      "SOH CAH TOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent",
      "Reciprocal ratios: cosec = 1/sin, sec = 1/cos, cot = 1/tan",
      "Unit circle: (cos θ, sin θ) for any angle θ on a circle of radius 1",
      "ASTC rule (anti-clockwise from Q1): All positive, Sin positive, Tan positive, Cos positive",
      "sin²θ + cos²θ = 1 — the master Pythagorean identity",
      "1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ — the derived forms",
      "sin(90° − θ) = cos θ, cos(90° − θ) = sin θ — complementary angle identities",
      "Sin and cos have period 360° (2π); tan has period 180° (π)",
      "cos(−θ) = cos θ (even); sin(−θ) = −sin θ, tan(−θ) = −tan θ (odd)",
      "Sin and cos range in [−1, 1]; tan ranges over all ℝ",
      "Standard angle values: 0°, 30°, 45°, 60°, 90° — memorise the exact values",
      "Allied angle rules: function changes for 90° and 270°, stays same for 180° and 360°",
      "Maximum of a sin θ + b cos θ = √(a² + b²)",
      "Area of triangle = ½ab sin C",
    ],
    importantQuestions: [
      "If sin θ = 5/13 and θ lies in Quadrant II, find cos θ, tan θ, and the remaining three trigonometric ratios.",
      "Prove that sin⁴θ − cos⁴θ = sin²θ − cos²θ using the Pythagorean identity.",
      "Prove that (1 + cot θ − cosec θ)(1 + tan θ + sec θ) = 2.",
      "Find the values of sin 150°, cos 240°, and tan 315° using allied angle formulas.",
      "If tan θ = 4/3 and θ is in QIII, find all six trigonometric ratios.",
      "Express sin 75° and cos 15° in terms of standard angles and find their exact values.",
      "Prove that sec²θ + cosec²θ = sec²θ·cosec²θ.",
      "Find the maximum value of 5 cos θ + 12 sin θ and the angle at which it occurs.",
    ],
  },

  "trigonometry-2": {
    overview:
      "So you know sin θ, cos θ, and the unit circle. You can find any trig ratio, you know the identities — great. Now it's time to level up. What happens when you add two angles inside a trig function? Spoiler: sin(A + B) is NOT sin A + sin B. That would be too easy. Instead, there's a beautiful pattern that connects the trig ratios of sums and differences to products of individual ratios. This is where trigonometry becomes a powerful toolkit.\n\nThe compound angle formulas are the foundation. sin(A ± B) = sin A cos B ± cos A sin B. Cos(A ± B) = cos A cos B ∓ sin A sin B. Notice the pattern — sin keeps the same sign, cos flips it. Tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B). These formulas let you find exact trig values for angles like 75° (45° + 30°) without a calculator.\n\nOnce you have compound angles, you can set B = A and get double angle formulas: sin 2A = 2 sin A cos A, and cos 2A = cos²A − sin²A = 2 cos²A − 1 = 1 − 2 sin²A. These three forms of cos 2A are incredibly useful because they let you switch between squares and linear terms — something you'll rely on in calculus when integrating or differentiating.\n\nTriple angle formulas come next: sin 3A = 3 sin A − 4 sin³A and cos 3A = 4 cos³A − 3 cos A. These have a rhythmic pattern that's easy to memorise with practice. Half-angle formulas let you express sin(A/2) and cos(A/2) in terms of cos A, using those cos 2A forms in reverse.\n\nThen there are the factorisation (sum-to-product) and defactorisation (product-to-sum) formulas. These convert sums of trig functions into products and vice versa. They're the key to solving many equations and simplifying complex expressions. For example, sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2) — this turns an addition into a multiplication, often making the problem much simpler.\n\nYou'll also learn to express a sin θ + b cos θ as R sin(θ + α) or R cos(θ + α), where R = √(a² + b²). This is a game-changer for solving equations, finding maxima and minima, and modelling real-world oscillations.\n\nFinally, we tackle inverse trigonometric functions — the 'undo' buttons for sin, cos, and tan. If sin θ = 0.5, what's θ? The inverse sine function, written sin⁻¹(0.5) or arcsin(0.5), tells you the angle. But it only gives one answer — the principal value. You need general solutions to capture all possible angles.\n\nBy the end, you'll be solving complex trig equations, proving compound-angle identities in your sleep, and using these tools as second nature. This is the trigonometry that powers calculus, physics, and engineering.",
    concepts: [
      {
        title: "Compound angle formulas for sin — the sum and difference",
        body:
          "sin(A + B) = sin A cos B + cos A sin B. sin(A − B) = sin A cos B − cos A sin B. The pattern: sin-cos-cos-sin with the same sign in the middle. These formulas let you find sin of a non-standard angle by splitting it into two standard ones. For example, sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°.",
      },
      {
        title: "Compound angle formulas for cos",
        body:
          "cos(A + B) = cos A cos B − sin A sin B. cos(A − B) = cos A cos B + sin A sin B. Note the sign flip — the plus on the left becomes minus on the right, and vice versa. The pattern: cos-cos-sin-sin, with the 'different' sign. For cos 15° = cos(45° − 30°) = cos 45° cos 30° + sin 45° sin 30°.",
      },
      {
        title: "Compound angle formulas for tan",
        body:
          "tan(A + B) = (tan A + tan B)/(1 − tan A tan B). tan(A − B) = (tan A − tan B)/(1 + tan A tan B). The numerator has the same sign as the compound; the denominator has the opposite sign. These are derived by dividing sin(A+B) by cos(A+B). They're useful when you're given values of tan rather than sin or cos.",
      },
      {
        title: "Double angle formulas — setting B = A",
        body:
          "Put B = A in the compound formulas and you get sin 2A = 2 sin A cos A. For cos 2A, you get three equivalent forms: cos²A − sin²A, 2 cos²A − 1, and 1 − 2 sin²A. Tan 2A = 2 tan A/(1 − tan²A). The three forms of cos 2A are especially important because they let you express sin²A or cos²A in terms of cos 2A — invaluable in integration.",
      },
      {
        title: "Triple angle formulas",
        body:
          "sin 3A = 3 sin A − 4 sin³A. cos 3A = 4 cos³A − 3 cos A. These can be derived by applying compound formulas twice: sin(2A + A). They're useful in solving cubic trigonometric equations and in proofs. The pattern: sin bounces from 3 to 4, cos from 4 to 3.",
      },
      {
        title: "Half angle formulas — working backwards from cos 2A",
        body:
          "Using cos 2A = 1 − 2 sin²A, let A = θ/2, so cos θ = 1 − 2 sin²(θ/2). Rearranging: sin(θ/2) = ±√((1 − cos θ)/2). Similarly, cos(θ/2) = ±√((1 + cos θ)/2). And tan(θ/2) = ±√((1 − cos θ)/(1 + cos θ)) = sin θ/(1 + cos θ) = (1 − cos θ)/sin θ. The sign depends on which quadrant θ/2 falls in.",
      },
      {
        title: "Sum-to-product (factorisation) formulas",
        body:
          "These convert sums into products: sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2). sin C − sin D = 2 cos((C+D)/2) sin((C−D)/2). cos C + cos D = 2 cos((C+D)/2) cos((C−D)/2). cos C − cos D = −2 sin((C+D)/2) sin((C−D)/2). They're derived by setting A+B = C and A−B = D in the compound formulas and adding/subtracting.",
      },
      {
        title: "Product-to-sum (defactorisation) formulas",
        body:
          "The reverse of the factorisation formulas: 2 sin A cos B = sin(A+B) + sin(A−B). 2 cos A sin B = sin(A+B) − sin(A−B). 2 cos A cos B = cos(A+B) + cos(A−B). 2 sin A sin B = cos(A−B) − cos(A+B). These are useful in integration (converting products to sums that are easier to integrate).",
      },
      {
        title: "Expressing a sin θ + b cos θ in a single trig function",
        body:
          "Any expression of the form a sin θ + b cos θ can be rewritten as R sin(θ + α) or R cos(θ + α), where R = √(a² + b²) and α = tan⁻¹(b/a) (with appropriate quadrant adjustments). For example, 3 sin θ + 4 cos θ = 5 sin(θ + 53.13°). This is the go-to technique for solving equations like 3 sin θ + 4 cos θ = 2.",
      },
      {
        title: "General solutions for sin θ = k",
        body:
          "If sin θ = k (where |k| ≤ 1), the general solution is θ = nπ + (−1)ⁿ α, where α = sin⁻¹(k) is the principal value (in [−π/2, π/2]) and n ∈ ℤ. The (−1)ⁿ factor alternates between 1 (for even n) and −1 (for odd n), which generates all solutions across multiple rotations.",
      },
      {
        title: "General solutions for cos θ = k",
        body:
          "If cos θ = k (where |k| ≤ 1), the general solution is θ = 2nπ ± α, where α = cos⁻¹(k) is the principal value (in [0, π]) and n ∈ ℤ. The ± reflects the symmetry of cos about the vertical axis — two solutions per cycle. For example, cos θ = ½ gives θ = 2nπ ± π/3.",
      },
      {
        title: "General solutions for tan θ = k",
        body:
          "If tan θ = k (any real k), the general solution is θ = nπ + α, where α = tan⁻¹(k) (principal value in (−π/2, π/2)) and n ∈ ℤ. Since tan has period π (180°), the solutions are equally spaced — no ± needed. For example, tan θ = 1 gives θ = nπ + π/4.",
      },
      {
        title: "Principal values of inverse trigonometric functions",
        body:
          "Inverse trig functions return a single 'principal' value. For sin⁻¹, range is [−π/2, π/2] (or [−90°, 90°]). For cos⁻¹, range is [0, π] (or [0°, 180°]). For tan⁻¹, range is (−π/2, π/2) (or (−90°, 90°)). These intervals are chosen to make the functions one-to-one and therefore properly invertible.",
      },
      {
        title: "Properties of inverse trigonometric functions",
        body:
          "Key properties: sin⁻¹(sin θ) = θ only when θ ∈ [−π/2, π/2]; otherwise you get a different angle in that range. Similarly for cos⁻¹ and tan⁻¹. The composition sin(sin⁻¹ x) = x for x ∈ [−1, 1]. Also: sin⁻¹(−x) = −sin⁻¹ x (odd), cos⁻¹(−x) = π − cos⁻¹ x, tan⁻¹(−x) = −tan⁻¹ x (odd). And sin⁻¹ x + cos⁻¹ x = π/2 — a very useful relation.",
      },
      {
        title: "Trigonometric equations — practical solving strategies",
        body:
          "To solve a trig equation: first simplify using identities. If multiple functions exist, try to express everything in one function (use sin² + cos² = 1 to substitute). Check domain restrictions. Apply general or particular solutions as needed. Factorise if possible. And always test your solutions — extraneous solutions can creep in from squaring or algebraic manipulation.",
      },
      {
        title: "Inequalities involving trigonometric functions",
        body:
          "Trigonometric inequalities like sin θ > ½ or cos θ ≤ 0 require understanding the graphs and unit circle. For sin θ > ½ in [0, 2π], the solution is (π/6, 5π/6). These problems ask you to find ranges of θ where the inequality holds, often combining algebraic solving with graphical reasoning.",
      },
    ],
    keyPoints: [
      "sin(A ± B) = sin A cos B ± cos A sin B",
      "cos(A ± B) = cos A cos B ∓ sin A sin B",
      "tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)",
      "sin 2A = 2 sin A cos A",
      "cos 2A = cos²A − sin²A = 2 cos²A − 1 = 1 − 2 sin²A — three equivalent forms",
      "tan 2A = 2 tan A/(1 − tan²A)",
      "sin 3A = 3 sin A − 4 sin³A; cos 3A = 4 cos³A − 3 cos A",
      "Half-angle: sin(θ/2) = ±√((1 − cos θ)/2), cos(θ/2) = ±√((1 + cos θ)/2)",
      "sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2)",
      "cos C + cos D = 2 cos((C+D)/2) cos((C−D)/2)",
      "a sin θ + b cos θ = R sin(θ + α) where R = √(a² + b²)",
      "General solution sin θ = k: θ = nπ + (−1)ⁿ α",
      "General solution cos θ = k: θ = 2nπ ± α",
      "General solution tan θ = k: θ = nπ + α",
      "sin⁻¹ x + cos⁻¹ x = π/2",
    ],
    importantQuestions: [
      "Prove that sin(A + B) sin(A − B) = sin²A − sin²B.",
      "If tan A = 1/2 and tan B = 1/3, find tan(A + B). Hence find the value of A + B.",
      "Solve the equation sin θ + cos θ = 1 for 0° ≤ θ ≤ 360°.",
      "Prove that (sin 3θ)/(sin θ) − (cos 3θ)/(cos θ) = 2.",
      "Find the principal value of sin⁻¹(−1/2), cos⁻¹(√3/2), and tan⁻¹(−1).",
      "Solve 2 cos²θ + 3 sin θ = 0 for 0 ≤ θ ≤ 2π.",
      "Express 4 sin θ − 3 cos θ in the form R sin(θ − α) and hence solve 4 sin θ − 3 cos θ = 2.",
      "Prove that tan⁻¹(1/2) + tan⁻¹(1/3) = π/4.",
    ],
  },

  "determinants-matrices": {
    overview:
      "Matrices and determinants might look like a bunch of numbers in neat boxes, but they're actually one of the most powerful tools ever invented. Need to solve a system of equations with three variables? Matrices make it systematic. Want to rotate a shape in computer graphics? That's a matrix multiplication. Ever wondered how search engines rank web pages? The mathematics behind it involves eigenvalues — a more advanced matrix concept.\n\nLet's start with the basics. A matrix is a rectangular arrangement of numbers in rows and columns. We denote its size as m × n (rows × columns). That's it — just a tidy way to organise data. A 2×3 matrix has 2 rows and 3 columns. We refer to individual elements by their position: aᵢⱼ is the entry in row i, column j.\n\nThere are various types of matrices: row matrices (one row), column matrices (one column), square matrices (same number of rows and columns), diagonal matrices (non-zero only on the diagonal), identity matrices (1s on the diagonal, 0s elsewhere), zero matrices (all zeros), symmetric matrices (A = Aᵀ), and skew-symmetric matrices (A = −Aᵀ). Each type has special properties that become important in different contexts.\n\nMatrix operations are straightforward. Addition and subtraction are element-wise — you just add or subtract matching positions. Scalar multiplication multiplies every entry by that number. Matrix multiplication is more involved: you take the dot product of each row of the first matrix with each column of the second. Crucially, AB is NOT generally equal to BA — matrix multiplication doesn't commute.\n\nA determinant is a single number associated with a square matrix. For a 2×2 matrix [[a, b], [c, d]], the determinant is ad − bc. For a 3×3 matrix, you expand using minors and cofactors. The determinant tells you important things: if det(A) = 0, the matrix is singular (not invertible). If det(A) ≠ 0, the matrix is invertible and you can find its inverse.\n\nThe inverse of a matrix A, written A⁻¹, satisfies A × A⁻¹ = I. For a 2×2 matrix, there's a simple formula: swap a and d, negate b and c, and divide by the determinant. For larger matrices, you use the adjoint method or row operations. The inverse is invaluable for solving systems of linear equations: Ax = b becomes x = A⁻¹b.\n\nCramer's rule provides an alternative way to solve linear systems using determinants. It's elegant but computationally expensive for large systems — fine for 2×2 and 3×3, impractical beyond that.\n\nBy the end, you'll be comfortable with matrix operations, able to calculate determinants and inverses, and know how to use them to solve real problems. These skills open doors to linear algebra, which is the language of machine learning, quantum mechanics, and much more.",
    concepts: [
      {
        title: "Definition and order of a matrix",
        body:
          "A matrix is a rectangular array of numbers enclosed in brackets (round or square). If it has m rows and n columns, its order or dimension is m × n. For example, a matrix with 2 rows and 3 columns is a 2×3 matrix. The number of entries is m × n. Individual entries are denoted aᵢⱼ where i is the row and j is the column. Matrices are usually denoted by capital letters (A, B, C) and entries by corresponding lowercase letters.",
      },
      {
        title: "Types of matrices — a classification guide",
        body:
          "Row matrix: only one row (1×n). Column matrix: only one column (m×1). Square matrix: same number of rows and columns (n×n). Diagonal matrix: a square matrix with non-zero entries only on the main diagonal. Scalar matrix: a diagonal matrix where all diagonal entries are equal. Identity matrix (I): diagonal matrix with all diagonal entries = 1. Zero matrix (O): all entries are 0. Each type has special algebraic properties.",
      },
      {
        title: "Equality of matrices",
        body:
          "Two matrices are equal if and only if they have the same order AND every corresponding entry is equal. So A = B means aᵢⱼ = bᵢⱼ for all i, j. You can't compare a 2×2 matrix with a 2×3 matrix — they're automatically not equal because their orders differ. This concept comes up when you solve matrix equations with unknown entries.",
      },
      {
        title: "Addition and subtraction of matrices",
        body:
          "You can only add or subtract matrices of the same order. Simply add or subtract the corresponding entries: (A ± B)ᵢⱼ = aᵢⱼ ± bᵢⱼ. Matrix addition is commutative (A + B = B + A) and associative (A + B) + C = A + (B + C). The zero matrix acts as the additive identity: A + O = A. Every matrix has an additive inverse: A + (−A) = O.",
      },
      {
        title: "Scalar multiplication",
        body:
          "Multiplying a matrix by a scalar (a real number) means multiplying every entry by that number: (kA)ᵢⱼ = k·aᵢⱼ. Scalar multiplication is distributive: k(A + B) = kA + kB and (k₁ + k₂)A = k₁A + k₂A. It's associative with scalars: k₁(k₂A) = (k₁k₂)A. This operation is used to scale transformations and in formula derivations.",
      },
      {
        title: "Matrix multiplication — the dot product dance",
        body:
          "If A is m×n and B is n×p, their product AB exists and is m×p. Entry (i,j) of AB = ∑ aᵢₖ·bₖⱼ (k from 1 to n) — essentially the dot product of row i of A with column j of B. The inner dimensions (n) must match. Matrix multiplication is associative and distributive over addition, but NOT commutative: AB ≠ BA in general. It can even be that AB exists but BA doesn't.",
      },
      {
        title: "Properties of matrix multiplication",
        body:
          "Key properties: (AB)C = A(BC) — associativity. A(B + C) = AB + AC and (A + B)C = AC + BC — distributivity. But AB ≠ BA generally (non-commutative). AB = O doesn't imply A = O or B = O (zero product property doesn't hold). AB = AC doesn't imply B = C (cancellation doesn't hold). These quirks make matrix algebra different from regular number algebra.",
      },
      {
        title: "Transpose of a matrix",
        body:
          "The transpose of an m×n matrix A, written Aᵀ or A', is the n×m matrix obtained by swapping rows and columns: (Aᵀ)ᵢⱼ = Aⱼᵢ. Properties: (Aᵀ)ᵀ = A, (A + B)ᵀ = Aᵀ + Bᵀ, (kA)ᵀ = kAᵀ, (AB)ᵀ = BᵀAᵀ (note the reversed order!). The transpose is used to define symmetric matrices and is crucial in many advanced applications.",
      },
      {
        title: "Symmetric and skew-symmetric matrices",
        body:
          "A square matrix A is symmetric if Aᵀ = A, meaning aᵢⱼ = aⱼᵢ for all i, j. The matrix is symmetric about its main diagonal. A matrix is skew-symmetric if Aᵀ = −A, meaning aᵢⱼ = −aⱼᵢ and the diagonal entries must be 0. Any square matrix can be expressed as the sum of a symmetric and a skew-symmetric matrix: A = ½(A + Aᵀ) + ½(A − Aᵀ).",
      },
      {
        title: "Determinant of 2×2 and 3×3 matrices",
        body:
          "For a 2×2 matrix A = [[a, b], [c, d]], det(A) = ad − bc. For 3×3, expand using the first row: det(A) = a₁₁·M₁₁ − a₁₂·M₁₂ + a₁₃·M₁₃, where Mᵢⱼ is the minor (determinant after deleting row i and column j). The signs alternate: +, −, + for row 1. You can expand along any row or column; the result is the same. This is called Laplace expansion.",
      },
      {
        title: "Minors and cofactors",
        body:
          "The minor Mᵢⱼ of entry aᵢⱼ is the determinant of the matrix obtained by deleting row i and column j. The cofactor Cᵢⱼ = (−1)^(i+j) × Mᵢⱼ. The (−1)^(i+j) gives the alternating sign pattern (+, −, +; −, +, −; +, −, + for a 3×3). The determinant can then be expressed as ∑ aᵢⱼ·Cᵢⱼ along any row or column. Cofactors are also used to find the adjoint and inverse.",
      },
      {
        title: "Properties of determinants — shortcuts and insights",
        body:
          "Key properties: (1) If two rows (or columns) are swapped, det flips sign. (2) If two rows are identical, det = 0. (3) If a row is multiplied by k, det is multiplied by k. (4) Adding a multiple of one row to another doesn't change det. (5) det(Aᵀ) = det(A). (6) det(AB) = det(A)·det(B). (7) det(kA) = kⁿ·det(A) for n×n matrix. These properties let you compute determinants faster and prove theoretical results.",
      },
      {
        title: "Singular and non-singular matrices",
        body:
          "A square matrix is singular if its determinant is 0. A non-singular matrix has a non-zero determinant. Singular matrices: have no inverse, their rows/columns are linearly dependent, and the system Ax = 0 has non-trivial solutions. Non-singular matrices: have an inverse, their rows/columns are linearly independent, and the system Ax = 0 has only the trivial solution x = 0.",
      },
      {
        title: "Adjoint of a matrix",
        body:
          "The adjoint of a square matrix A, written adj(A), is the transpose of the cofactor matrix. Steps: (1) calculate all cofactors Cᵢⱼ, (2) form the cofactor matrix [Cᵢⱼ], (3) take its transpose. For a 2×2 matrix A = [[a, b], [c, d]], adj(A) = [[d, −b], [−c, a]]. The adjoint is a key stepping stone to finding the inverse.",
      },
      {
        title: "Inverse of a matrix",
        body:
          "For a non-singular matrix A, its inverse A⁻¹ = (1/det(A)) × adj(A). So A × A⁻¹ = A⁻¹ × A = I. For 2×2: if A = [[a, b], [c, d]], then A⁻¹ = (1/(ad−bc)) × [[d, −b], [−c, a]]. The inverse exists only if det(A) ≠ 0. The inverse is unique: if it exists, there's exactly one matrix that satisfies the definition.",
      },
      {
        title: "Solving linear equations using matrix methods",
        body:
          "A system of linear equations can be written in matrix form as AX = B, where A is the coefficient matrix, X is the column of variables, and B is the column of constants. If A is non-singular, the solution is X = A⁻¹B. For 2×2 and 3×3 systems, this is often the most systematic approach. Always check your answer by substituting back into the original equations.",
      },
      {
        title: "Cramer's rule — solving systems with determinants",
        body:
          "Cramer's rule solves AX = B using determinants. For a 2×2 system: x = det(Aₓ)/det(A) and y = det(A_y)/det(A), where Aₓ is A with the first column replaced by B, and A_y is A with the second column replaced by B. For 3×3, you do the same with each variable. Cramer's rule is elegant but computationally heavy — it involves computing (n+1) determinants for an n-variable system.",
      },
    ],
    keyPoints: [
      "A matrix of order m×n has m rows and n columns",
      "Matrix addition: same order, add corresponding entries",
      "Scalar multiplication: multiply every entry by the scalar",
      "Matrix multiplication: (m×n)(n×p) = m×p; row i × column j, dot product",
      "AB ≠ BA in general — matrix multiplication does not commute",
      "(Aᵀ)ᵀ = A, (AB)ᵀ = BᵀAᵀ",
      "Symmetric: Aᵀ = A; Skew-symmetric: Aᵀ = −A",
      "Determinant of 2×2: ad − bc",
      "det(AB) = det(A)·det(B)",
      "Swapping two rows flips the sign of the determinant",
      "Matrix is singular iff det(A) = 0",
      "A⁻¹ = adj(A)/det(A) — exists only if det(A) ≠ 0",
      "For 2×2 inverse: swap a,d; negate b,c; divide by det",
      "Cramer's rule: x = det(Aₓ)/det(A), etc.",
      "System AX = B → solution X = A⁻¹B if A is non-singular",
    ],
    importantQuestions: [
      "Find the determinant of the 3×3 matrix [[1, 2, 3], [4, 5, 6], [7, 8, 10]] using expansion of minors.",
      "If A = [[1, 3], [2, 7]], find A⁻¹ and verify that A·A⁻¹ = I.",
      "Prove that the determinant of a matrix with two proportional rows is zero.",
      "Solve the system: 2x + 3y = 7, 3x + 5y = 11 using both Cramer's rule and the matrix inverse method.",
      "If A and B are square matrices of order 2, show that det(AB) = det(A)·det(B) with an example.",
      "Find the values of x for which the matrix [[x, 2], [4, x]] is singular.",
      "Express the matrix [[1, 4], [5, 6]] as the sum of a symmetric and a skew-symmetric matrix.",
      "Solve the system using matrices: x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2.",
    ],
  },

  "straight-line": {
    overview:
      "The straight line is the simplest geometric shape there is. Two points, infinite length, constant direction. But simplicity doesn't mean lack of depth. A straight line can be described in half a dozen different forms, each useful in different contexts. The relationship between lines — whether they're parallel, perpendicular, or intersecting — tells you something about the space they occupy.\n\nIn coordinate geometry, every line has an equation. The most intuitive is y = mx + c, where m is the slope (steepness) and c is the y-intercept (where the line crosses the y-axis). But a line can also be written in point-slope form (y − y₁ = m(x − x₁)), two-point form, intercept form (x/a + y/b = 1), general form (ax + by + c = 0), normal form, and parametric form. Why so many? Because different problems give you different information. If you have a point and a slope, use point-slope. If you have two intercepts, use intercept form. If you want to find distances, use the general form. Knowing which form to pick is half the battle.\n\nThe slope itself carries a lot of meaning. A positive slope means the line goes up as you move right. A negative slope means it goes down. A zero slope is horizontal. An undefined slope (the denominator is zero) means the line is vertical. The slope between any two points on the line is constant — that's what makes it a straight line.\n\nWhen you have two lines, interesting things happen. Parallel lines have equal slopes — they never meet, like railway tracks. Perpendicular lines have slopes that multiply to −1 — they meet at a right angle. The angle between two lines can be found using tan θ = |(m₂ − m₁)/(1 + m₁m₂)|.\n\nDistance formulas are another key part of this chapter. The perpendicular distance from a point to a line is |ax₁ + by₁ + c|/√(a² + b²). The distance between two parallel lines is |c₂ − c₁|/√(a² + b²). These formulas are essential for geometry problems and for understanding the concept of 'closest distance'.\n\nThe final major topic is the family of lines. A family of lines is a set of lines sharing a common property — all lines passing through a given point, or all lines with a given slope. The equation L₁ + λL₂ = 0 represents all lines passing through the intersection of L₁ = 0 and L₂ = 0. By varying λ, you get different lines, but they all pass through the same intersection point.\n\nBy the end, you'll be able to find the equation of any line given its geometric description, determine relationships between lines, and solve distance and intersection problems. The straight line is the building block of coordinate geometry — master it, and curves become much easier.",
    concepts: [
      {
        title: "Slope or gradient of a line — the measure of steepness",
        body:
          "The slope m of a line is the ratio of vertical change to horizontal change. Given two points (x₁, y₁) and (x₂, y₂), m = (y₂ − y₁)/(x₂ − x₁) = rise/run. A positive slope tilts upward to the right, negative tilts downward, zero is horizontal, and undefined (division by zero) means vertical. The larger the absolute value of m, the steeper the line.",
      },
      {
        title: "Angle between two lines",
        body:
          "If two lines have slopes m₁ and m₂, the acute angle θ between them is given by tan θ = |(m₂ − m₁)/(1 + m₁m₂)|. If the denominator 1 + m₁m₂ = 0, then θ = 90° — the lines are perpendicular. This formula is derived from the fact that the angle a line makes with the x-axis is tan⁻¹(m), and the difference of two such angles gives the angle between them.",
      },
      {
        title: "Condition for parallel lines",
        body:
          "Two lines are parallel if and only if their slopes are equal: m₁ = m₂. For lines in general form ax + by + c = 0, parallel lines have the same a and b coefficients but different c. So lines 2x + 3y − 5 = 0 and 2x + 3y + 7 = 0 are parallel. Visually, parallel lines never intersect and maintain a constant distance between them.",
      },
      {
        title: "Condition for perpendicular lines",
        body:
          "Two lines are perpendicular if and only if the product of their slopes is −1: m₁·m₂ = −1. Equivalently, m₂ = −1/m₁ — one slope is the negative reciprocal of the other. For example, if a line has slope 2, any perpendicular line has slope −½. For lines in general form a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the condition is a₁a₂ + b₁b₂ = 0.",
      },
      {
        title: "Slope-intercept form — the most familiar",
        body:
          "y = mx + c, where m is the slope and c is the y-intercept (the y-coordinate where x = 0). This is the most intuitive form because you can immediately see the slope and where the line crosses the y-axis. To graph a line in this form, start at (0, c) and use the slope m = rise/run to find other points. The x-intercept is found by setting y = 0: x = −c/m.",
      },
      {
        title: "Point-slope form — given a point and a slope",
        body:
          "y − y₁ = m(x − x₁), where m is the slope and (x₁, y₁) is a known point on the line. This is the form to use when you're given one point and the slope. It's derived directly from the slope formula. From here you can easily expand to slope-intercept or general form. For example, a line through (2, 3) with slope 4 is y − 3 = 4(x − 2).",
      },
      {
        title: "Two-point form — when you know two points",
        body:
          "(y − y₁)/(x − x₁) = (y₂ − y₁)/(x₂ − x₁). This directly expresses the constancy of slope between any two points on the line. Given (1, 2) and (3, 6), the slope is (6−2)/(3−1) = 2, so the equation becomes (y − 2)/(x − 1) = 2, or y = 2x. This form is especially useful when neither intercept nor slope is obvious.",
      },
      {
        title: "Double-intercept form — intercepts at a glance",
        body:
          "x/a + y/b = 1, where a is the x-intercept and b is the y-intercept. This form is elegant because the intercepts are right there in the equation. The line crosses the x-axis at (a, 0) and the y-axis at (0, b). It's the easiest form to work with when you know where a line crosses the axes. For example, a line with x-intercept 4 and y-intercept 3 is x/4 + y/3 = 1.",
      },
      {
        title: "Normal form — using the perpendicular distance",
        body:
          "x cos α + y sin α = p, where p is the perpendicular distance from the origin to the line, and α is the angle that this perpendicular makes with the positive x-axis. This form is particularly useful when you know the line's distance from the origin and its orientation. The parameters p and α uniquely define the line.",
      },
      {
        title: "General equation — the universal form",
        body:
          "ax + by + c = 0, where a, b, and c are constants, and a and b are not both zero. Every line can be written in this form. The slope is −a/b (if b ≠ 0), the x-intercept is −c/a (if a ≠ 0), and the y-intercept is −c/b (if b ≠ 0). This is the 'parent' form from which others can be derived. It's also the most convenient form for distance calculations.",
      },
      {
        title: "Reduction of general form to other forms",
        body:
          "Given ax + by + c = 0, you can convert to slope-intercept: y = (−a/b)x + (−c/b). To intercept form: x/(−c/a) + y/(−c/b) = 1. To normal form: divide by √(a² + b²) and adjust signs so that the constant term becomes −p. Being able to switch between forms is a key skill — it lets you extract whatever information you need from any given form.",
      },
      {
        title: "Distance from a point to a line",
        body:
          "The perpendicular distance from point (x₁, y₁) to line ax + by + c = 0 is d = |ax₁ + by₁ + c| / √(a² + b²). The absolute value ensures distance is positive. The numerator is the absolute value of the line equation evaluated at the point — it represents how 'far' the point is from satisfying the equation. The denominator is the normalisation factor.",
      },
      {
        title: "Distance between two parallel lines",
        body:
          "For parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0, the distance between them is d = |c₂ − c₁| / √(a² + b²). Note that the a and b coefficients must be the same before applying this formula. If they're not, multiply through to make them match. For example, 2x + 3y − 5 = 0 and 2x + 3y + 7 = 0 are apart by |7 − (−5)|/√(13) = 12/√13 units.",
      },
      {
        title: "Family of lines passing through the intersection of two lines",
        body:
          "If two lines L₁: a₁x + b₁y + c₁ = 0 and L₂: a₂x + b₂y + c₂ = 0 intersect, then L₁ + λL₂ = 0 (i.e., (a₁x + b₁y + c₁) + λ(a₂x + b₂y + c₂) = 0) represents all lines passing through their intersection point. Each value of λ (a real parameter) gives a different line, except L₂ itself. This is a powerful technique for finding a specific line through the intersection that also satisfies another condition.",
      },
      {
        title: "Equation of a line in parametric form",
        body:
          "A line can be represented parametrically as x = x₁ + t·cos θ, y = y₁ + t·sin θ, where (x₁, y₁) is a point on the line, θ is the direction angle of the line (so slope m = tan θ), and t is the parameter (distance from the point along the line). This form is particularly useful in vector geometry and for describing motion along a straight line path.",
      },
      {
        title: "Collinearity of three points",
        body:
          "Three points A, B, C are collinear if they lie on the same straight line. This can be checked in multiple ways: (1) slope of AB = slope of BC, (2) area of triangle ABC = 0 (using determinant formula), (3) the distance AB + BC = AC. These conditions are equivalent and useful for different problem types. The determinant method is particularly clean: |x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1| = 0.",
      },
      {
        title: "Locus of a moving point",
        body:
          "A locus is the set of all points satisfying a given condition. For straight lines, common loci include: a point that moves so that its distance from a fixed point is constant (a circle), or a point that's equidistant from two fixed points (the perpendicular bisector — a straight line). Finding the equation of a locus involves translating geometric conditions into algebraic equations.",
      },
      {
        title: "Combined equation of a pair of lines",
        body:
          "A second-degree homogeneous equation like ax² + 2hxy + by² = 0 represents a pair of lines passing through the origin if h² ≥ ab. Each individual line's slope satisfies the quadratic bm² + 2hm + a = 0. The angle between the two lines is given by tan θ = 2√(h² − ab)/|a + b|. This connects the straight line chapter with the quadratic equations chapter.",
      },
    ],
    keyPoints: [
      "Slope m = (y₂ − y₁)/(x₂ − x₁) = rise/run",
      "tan θ = |(m₂ − m₁)/(1 + m₁m₂)| for the angle between two lines",
      "Parallel lines: m₁ = m₂",
      "Perpendicular lines: m₁·m₂ = −1",
      "y = mx + c — slope-intercept form",
      "y − y₁ = m(x − x₁) — point-slope form",
      "(y − y₁)/(x − x₁) = (y₂ − y₁)/(x₂ − x₁) — two-point form",
      "x/a + y/b = 1 — double-intercept form",
      "x cos α + y sin α = p — normal form",
      "ax + by + c = 0 — general form (covers all lines)",
      "Distance from point to line: |ax₁ + by₁ + c|/√(a² + b²)",
      "Distance between parallel lines: |c₂ − c₁|/√(a² + b²)",
      "Family of lines through intersection: L₁ + λL₂ = 0",
      "Three points are collinear if slope AB = slope BC (or area = 0)",
      "For pair of lines: ax² + 2hxy + by² = 0 represents two lines if h² ≥ ab",
    ],
    importantQuestions: [
      "Find the equation of a line passing through (2, 3) with slope −4 in all five forms.",
      "Find the distance between the parallel lines 3x + 4y − 7 = 0 and 3x + 4y + 8 = 0.",
      "Find the equation of a line perpendicular to 2x − 3y + 5 = 0 and passing through the point (1, −1).",
      "Show that points A(1, 2), B(3, 6), and C(5, 10) are collinear using two different methods.",
      "A line makes positive intercepts on the axes whose sum is 7 and product is 12. Find its equation.",
      "Find the equation of the line passing through the intersection of 2x + y = 5 and x + 3y + 8 = 0 and parallel to the line 3x + 4y = 7.",
      "Find the angle between the lines y = 2x + 3 and 3x + y − 4 = 0.",
      "A point moves so that its distance from the point (1, 2) is always twice its distance from the line 3x + 4y − 5 = 0. Find the equation of its locus.",
    ],
  },

  circle: {
    overview:
      "Of all the shapes in geometry, the circle might be the most perfect. Every point on its circumference is exactly the same distance from the centre. That simplicity makes it elegant — but don't mistake simplicity for shallowness. When circles meet straight lines, fascinating things happen. A line can cut through a circle (secant), just touch it (tangent), or miss it entirely. Each case has its own mathematical description.\n\nThe standard equation of a circle is (x − h)² + (y − k)² = r², where (h, k) is the centre and r is the radius. This is basically Pythagoras' theorem applied to every point on the circle. If the centre is at (0, 0), it simplifies to x² + y² = r² — which is as clean as equations get.\n\nBut circles don't always come packaged so neatly. Often you'll see x² + y² + 2gx + 2fy + c = 0, which is the general form. To extract the centre and radius from this, you complete the square separately for x and y. The centre ends up at (−g, −f) and the radius is √(g² + f² − c). If g² + f² − c < 0, the circle is 'imaginary' — no real points satisfy it.\n\nTangents are one of the most important ideas in the circle chapter. A tangent is a line that touches the circle at exactly one point. For the circle x² + y² = r², the tangent at point (x₁, y₁) is xx₁ + yy₁ = r². There's also the slope form: y = mx ± r√(1 + m²), which gives two tangents (one above, one below) for a given slope m. The condition for a line y = mx + c to be tangent to x² + y² = r² is c² = r²(1 + m²).\n\nThe normal to a circle at a point is the line perpendicular to the tangent, passing through the point of contact. Since the radius is always perpendicular to the tangent, the normal is simply the line through the centre and the point of contact.\n\nOther concepts include the length of the tangent from an external point (PT = √(d² − r²)), the power of a point (d² − r²), the chord of contact, and the director circle — the locus of points from which tangents to a given circle are perpendicular. The director circle of x² + y² = r² is x² + y² = 2r².\n\nThere's also the pole-polar relationship. For a given circle, every point has a corresponding line (its polar), and every line has a corresponding point (its pole). This elegant duality appears in many geometry problems.\n\nBy the end, you'll be able to find the equation of a circle given any geometric description, work with tangents and normals confidently, and apply circle properties to solve problems. The circle is a gateway to the conic sections that follow.",
    concepts: [
      {
        title: "Standard equation of a circle (centre-radius form)",
        body:
          "(x − h)² + (y − k)² = r², where (h, k) is the centre and r is the radius. This is the most fundamental form. For a circle centred at the origin: x² + y² = r². The equation literal says 'the distance from (x, y) to (h, k) is r', which is the very definition of a circle. This form is ideal when you know the centre and radius directly.",
      },
      {
        title: "General equation of a circle",
        body:
          "x² + y² + 2gx + 2fy + c = 0. This is an expanded form where the centre is (−g, −f) and the radius is √(g² + f² − c). The coefficient of x² and y² must be equal (and non-zero) — that's the telltale sign that a second-degree equation might represent a circle. There must be no xy term. If the coefficients of x² and y² differ, it's an ellipse or something else.",
      },
      {
        title: "Completing the square — extracting centre and radius",
        body:
          "Given a general equation like x² + y² − 6x + 8y − 11 = 0, group x terms and y terms: (x² − 6x) + (y² + 8y) = 11. Complete the square for x: (x − 3)² − 9. For y: (y + 4)² − 16. So (x − 3)² + (y + 4)² = 36. Centre = (3, −4), radius = 6. This completing-the-square technique is your main tool for dealing with general-form circles.",
      },
      {
        title: "Circle with given endpoints of a diameter",
        body:
          "If A(x₁, y₁) and B(x₂, y₂) are endpoints of a diameter, the circle's equation is (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0. This uses the fact that the angle subtended by a diameter at any point on the circle is 90°. The centre is the midpoint: ((x₁+x₂)/2, (y₁+y₂)/2), and the radius is half the distance AB.",
      },
      {
        title: "Circle through three non-collinear points",
        body:
          "Three points uniquely determine a circle (unless they're collinear). The general approach: plug each point into x² + y² + 2gx + 2fy + c = 0 to get three equations in g, f, c. Solve the system to find the circle. Alternatively, find the perpendicular bisectors of two chords; their intersection is the centre. This is a classic application of solving simultaneous equations.",
      },
      {
        title: "Position of a point relative to a circle",
        body:
          "A point (x₁, y₁) is inside, on, or outside the circle x² + y² + 2gx + 2fy + c = 0 depending on whether x₁² + y₁² + 2gx₁ + 2fy₁ + c is negative, zero, or positive. For the standard form (x − h)² + (y − k)² = r², compare the distance d = √((x₁−h)² + (y₁−k)²) with r: d < r (inside), d = r (on), d > r (outside).",
      },
      {
        title: "Intersection of a line and a circle",
        body:
          "Substitute the line equation into the circle equation. If the resulting quadratic in x (or y) has: (a) discriminant > 0 → two distinct intersection points (secant), (b) discriminant = 0 → one intersection (tangent), (c) discriminant < 0 → no intersection. The discriminant approach is the algebraic equivalent of the geometric situation.",
      },
      {
        title: "Equation of the tangent at a point on the circle",
        body:
          "For the circle x² + y² = r², the tangent at (x₁, y₁) is xx₁ + yy₁ = r². For the general circle x² + y² + 2gx + 2fy + c = 0, the tangent at (x₁, y₁) is xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0. This formula is derived by 'splitting' the squared terms: x² becomes xx₁, y² becomes yy₁, and linear terms are averaged.",
      },
      {
        title: "Slope form of the tangent — tangents with a given slope",
        body:
          "For the circle x² + y² = r², the equation of a tangent with slope m is y = mx ± r√(1 + m²). The ± gives two parallel tangents — one above and one below the centre. The condition for the line y = mx + c to be a tangent is c² = r²(1 + m²). This is derived by setting the discriminant of the intersection equation to zero.",
      },
      {
        title: "Equation of the normal to a circle",
        body:
          "The normal to a circle at a point is the line perpendicular to the tangent at that point. Since the radius is perpendicular to the tangent, the normal passes through the centre. For x² + y² = r², the normal at (x₁, y₁) is simply y = (y₁/x₁)x (if x₁ ≠ 0). For the general circle, the normal is the line joining (x₁, y₁) to the centre (−g, −f).",
      },
      {
        title: "Length of the tangent from an external point",
        body:
          "From an external point P(x₁, y₁) to the circle x² + y² + 2gx + 2fy + c = 0, the length of the tangent segment PT is √(x₁² + y₁² + 2gx₁ + 2fy₁ + c). This is also the square root of the power of P with respect to the circle. Geometrically, PT² = d² − r², where d is the distance from P to the centre.",
      },
      {
        title: "Power of a point with respect to a circle",
        body:
          "The power of a point P(x₁, y₁) with respect to a circle is defined as x₁² + y₁² + 2gx₁ + 2fy₁ + c. It represents: (distance from P to centre)² − r². If power > 0, P is outside (and the square root gives the tangent length). If power = 0, P is on the circle. If power < 0, P is inside.",
      },
      {
        title: "Chord of contact",
        body:
          "From an external point P(x₁, y₁), draw two tangents to a circle. The line joining the two points of contact is called the chord of contact. For x² + y² = r², its equation is xx₁ + yy₁ = r². For the general circle, it's xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0 — the same as the tangent equation but with P as the external point.",
      },
      {
        title: "Director circle — where tangents are perpendicular",
        body:
          "The director circle is the locus of a point from which tangents drawn to a given circle are perpendicular to each other. For the circle x² + y² = r², the director circle is x² + y² = 2r² — a concentric circle with radius r√2. The director circle's equation is always 'the original circle radius squared multiplied by 2'.",
      },
      {
        title: "Pole and polar",
        body:
          "Given a circle x² + y² = r² and a point P(x₁, y₁), the polar of P is the line xx₁ + yy₁ = r². P is the pole of this line. If P is outside the circle, its polar passes through the points of contact of tangents from P. If P is on the circle, the polar is the tangent at P. If P is inside, the polar is an imaginary line outside. This pole-polar relationship is a beautiful geometric duality.",
      },
      {
        title: "Common tangents to two circles",
        body:
          "Two circles can have up to four common tangents. If circles are separate (distance > r₁ + r₂), there are 4 tangents (2 direct, 2 transverse). If they touch externally, 3 common tangents. If they intersect, 2 common tangents. If they touch internally, 1 common tangent. If one lies inside the other, no common tangents. The type and count depend on the relative positions.",
      },
    ],
    keyPoints: [
      "Standard circle: (x − h)² + (y − k)² = r²",
      "General form: x² + y² + 2gx + 2fy + c = 0",
      "Centre from general form: (−g, −f)",
      "Radius from general form: √(g² + f² − c)",
      "Completing the square is how you find centre and radius from general form",
      "Diameter form: (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0",
      "Tangent at (x₁, y₁) on x² + y² = r²: xx₁ + yy₁ = r²",
      "Slope form of tangent: y = mx ± r√(1 + m²)",
      "Condition for tangency: c² = r²(1 + m²)",
      "Normal at (x₁, y₁) passes through centre — the radius is perpendicular to tangent",
      "Length of tangent from external point PT = √(d² − r²)",
      "Chord of contact has the same equation as the tangent, with P as the external point",
      "Director circle of x² + y² = r² is x² + y² = 2r²",
      "Power of a point: S₁ = x₁² + y₁² + 2gx₁ + 2fy₁ + c",
    ],
    importantQuestions: [
      "Find the equation of a circle with centre (3, −4) and passing through the origin.",
      "Find the centre and radius of the circle x² + y² − 6x + 8y − 11 = 0.",
      "Find the equation of the tangent to the circle x² + y² = 25 at the point (3, 4).",
      "Show that the line 3x + 4y = 25 touches the circle x² + y² = 25, and find the point of contact.",
      "Find the equation of the circle passing through the points (1, 2), (2, 3), and (3, 1).",
      "Find the length of the tangent from the point (7, 1) to the circle x² + y² = 25.",
      "Find the equation of the director circle of x² + y² − 4x + 6y − 3 = 0.",
      "Find the equation of the circle with endpoints of a diameter at (3, 2) and (−5, 6).",
    ],
  },

  "conic-sections": {
    overview:
      "Take a double cone — two ice-cream cones meeting at their tips — and slice it with a plane. If you cut straight across, you get a circle. Tilt the plane a bit and you get an ellipse. Tilt it so it's parallel to the slant of the cone and you get a parabola. Tilt it steeper so it cuts both halves of the cone and you get a hyperbola — two separate mirrored curves. These are the conic sections, and they're some of the most beautiful curves in mathematics.\n\nThe ancient Greeks discovered conic sections around 200 BCE. They were studied as pure geometry for centuries before anyone found practical uses. Today, they're everywhere. Parabolas describe the path of a thrown ball, the shape of satellite dishes, and the reflectors in car headlights. Ellipses describe planetary orbits (Kepler's first law) and the shape of whispering galleries. Hyperbolas appear in navigation (LORAN systems), optics, and the trajectories of particles in nuclear physics.\n\nEach conic section is defined by its eccentricity e — a number that describes how 'stretched' the curve is. A circle has e = 0. An ellipse has 0 < e < 1. A parabola has e = 1 exactly. A hyperbola has e > 1. The eccentricity determines the shape completely.\n\nWe'll start with the parabola: the set of all points equidistant from a fixed point (focus) and a fixed line (directrix). Its standard form y² = 4ax (opening right) gives focus at (a, 0) and directrix x = −a. The vertex is at (0, 0). The latus rectum — a chord through the focus perpendicular to the axis — has length 4a.\n\nNext, the ellipse: the set of points where the sum of distances to two foci is constant. Its standard form x²/a² + y²/b² = 1 (a > b) has major axis along the x-axis of length 2a, minor axis of length 2b, and foci at (±ae, 0) where e = √(1 − b²/a²).\n\nFinally, the hyperbola: the set of points where the absolute difference of distances to two foci is constant. Its standard form x²/a² − y²/b² = 1 has foci at (±ae, 0) with e = √(1 + b²/a²) > 1. Hyperbolas have asymptotes — diagonal lines the curve approaches: y = ±(b/a)x.\n\nBy the end, you'll be able to identify any conic from its equation, find its key features (focus, directrix, vertices, axes, eccentricity, latus rectum), and understand the geometric relationships that define each curve.",
    concepts: [
      {
        title: "What are conic sections — slicing the cone",
        body:
          "A double cone is formed by rotating a line (generator) about an axis. A plane slicing this cone creates different curves. The type of curve depends on the angle of the cut: horizontal → circle, slightly tilted → ellipse, parallel to the generator → parabola, steep enough to cut both cones → hyperbola. The intersection of a plane and a cone is called a 'conic section'. If the plane passes through the vertex, the conic is degenerate (a point, line, or pair of lines).",
      },
      {
        title: "Eccentricity — the shape descriptor",
        body:
          "Eccentricity e measures how much a conic deviates from being circular. For any conic: e = distance from any point to focus / distance from that point to directrix. Circle: e = 0. Ellipse: 0 < e < 1. Parabola: e = 1. Hyperbola: e > 1. The eccentricity completely determines the shape — two conics with the same e are similar (same shape, different sizes).",
      },
      {
        title: "The parabola — equidistant from focus and directrix",
        body:
          "A parabola is the set of all points P such that distance from P to focus F equals distance from P to directrix ℓ. Standard form opening right: y² = 4ax. Focus: (a, 0). Directrix: x = −a. Vertex: (0, 0). Axis: x-axis. Latus rectum: chord through focus perpendicular to axis, length 4a. If the x and y are swapped (x² = 4ay), the parabola opens upward. If coefficients are negative, it opens left or downward.",
      },
      {
        title: "Standard forms of the parabola",
        body:
          "There are four standard orientations: y² = 4ax (opens right, focus (a,0), directrix x = −a). y² = −4ax (opens left, focus (−a,0), directrix x = a). x² = 4ay (opens up, focus (0,a), directrix y = −a). x² = −4ay (opens down, focus (0,−a), directrix y = a). In each case, the vertex is at (0,0) and the latus rectum length is |4a|. The axis is the line through the focus and vertex.",
      },
      {
        title: "Tangent to a parabola",
        body:
          "For the parabola y² = 4ax, the tangent at point (x₁, y₁) is yy₁ = 2a(x + x₁). The slope form: y = mx + a/m (where m ≠ 0) is a tangent, and it touches at (a/m², 2a/m). The condition for a line y = mx + c to be tangent to y² = 4ax is c = a/m. For the parametric point (at², 2at), the tangent is ty = x + at².",
      },
      {
        title: "The ellipse — constant sum of distances",
        body:
          "An ellipse is the set of points P such that PF₁ + PF₂ = 2a (constant), where F₁ and F₂ are the two foci. Standard form (horizontal major axis): x²/a² + y²/b² = 1, where a > b. Centre: (0,0). Vertices: (±a, 0). Co-vertices: (0, ±b). Foci: (±c, 0) where c² = a² − b². Eccentricity e = c/a = √(1 − b²/a²). Length of major axis: 2a. Length of minor axis: 2b. Latus rectum length: 2b²/a.",
      },
      {
        title: "Key properties of the ellipse",
        body:
          "The ellipse x²/a² + y²/b² = 1 (a > b) has several notable features. The sum of distances from any point on the ellipse to the two foci is constant (= 2a). This is the defining property. If a < b, the major axis is vertical, and the ellipse is x²/a² + y²/b² = 1 with foci at (0, ±c) where c² = b² − a². The eccentricity still e = c/a (using the larger denominator under the square root). The area of the ellipse is πab.",
      },
      {
        title: "Tangent to an ellipse",
        body:
          "For the ellipse x²/a² + y²/b² = 1, the tangent at (x₁, y₁) is xx₁/a² + yy₁/b² = 1. The slope form: y = mx ± √(a²m² + b²) is a tangent. Condition: c² = a²m² + b² for the line y = mx + c to be tangent. The parametric form (a cos θ, b sin θ) gives the tangent: (x cos θ)/a + (y sin θ)/b = 1.",
      },
      {
        title: "The hyperbola — constant difference of distances",
        body:
          "A hyperbola is the set of points P such that |PF₁ − PF₂| = 2a (constant). Standard form (horizontal transverse axis): x²/a² − y²/b² = 1. Centre: (0,0). Vertices: (±a, 0). Foci: (±c, 0) where c² = a² + b². Eccentricity e = c/a = √(1 + b²/a²) > 1. Latus rectum length: 2b²/a. The hyperbola has two branches — one on each side of the y-axis.",
      },
      {
        title: "Asymptotes of a hyperbola",
        body:
          "A unique feature of hyperbolas: they have asymptotes — straight lines the curve approaches as x → ±∞. For x²/a² − y²/b² = 1, the asymptotes are y = ±(b/a)x. The hyperbola gets arbitrarily close to these lines but never touches them. The asymptotes pass through the centre and form a 'X' shape. The hyperbola lies entirely within the two opposite angles formed by the asymptotes. If a = b, the asymptotes are y = ±x (perpendicular), and the hyperbola is called rectangular.",
      },
      {
        title: "Conjugate hyperbola",
        body:
          "The conjugate hyperbola of x²/a² − y²/b² = 1 is x²/a² − y²/b² = −1, or equivalently y²/b² − x²/a² = 1. The conjugate shares the same asymptotes but its transverse axis is vertical instead of horizontal. Its vertices are at (0, ±b) instead of (±a, 0). The pair (hyperbola + conjugate) together with their asymptotes form a complete geometric picture centred at the origin.",
      },
      {
        title: "Rectangular hyperbola",
        body:
          "A rectangular hyperbola is one where the asymptotes are perpendicular (at right angles). This happens when a = b, so the equation is x² − y² = a². The asymptotes are y = ±x, which are perpendicular. The eccentricity of a rectangular hyperbola is e = √2. Another common form is xy = c², which is a rectangular hyperbola rotated by 45°. Its asymptotes are the coordinate axes themselves.",
      },
      {
        title: "Tangent to a hyperbola",
        body:
          "For the hyperbola x²/a² − y²/b² = 1, the tangent at (x₁, y₁) is xx₁/a² − yy₁/b² = 1. The slope form: y = mx ± √(a²m² − b²). Condition for y = mx + c to be tangent: c² = a²m² − b² (note the minus, different from the ellipse). The parametric form (a sec θ, b tan θ) gives the tangent: (x sec θ)/a − (y tan θ)/b = 1.",
      },
      {
        title: "Identifying conics from their equations",
        body:
          "A second-degree equation ax² + by² + 2hxy + 2gx + 2fy + c = 0 represents a conic. The type is determined by the discriminant Δ = h² − ab (or just look at the signs). If h = 0 and a = b: circle. If Δ < 0 (and h = 0, a ≠ b): ellipse. If Δ = 0: parabola. If Δ > 0: hyperbola. If a + b = 0 and h = 0: rectangular hyperbola. The presence of an xy term means the conic is rotated.",
      },
      {
        title: "Applications of conic sections in real life",
        body:
          "Parabolas: satellite dishes and telescopes (parallel rays converge at focus), car headlights (light from focus reflects as parallel beam), projectile motion (balls, rockets, water fountains). Ellipses: planetary orbits (Kepler's first law), elliptical pool tables (ball from one focus bounces to the other), whispering galleries (sound from one focus is heard at the other). Hyperbolas: navigation (LORAN time difference), cooling towers of nuclear plants (hyperboloid shape for strength), sonic booms (Mach cone forms a hyperbola on the ground).",
      },
      {
        title: "Parametric forms of conics",
        body:
          "Parametric equations are often more convenient than Cartesian. Parabola y² = 4ax: (at², 2at). Ellipse x²/a² + y²/b² = 1: (a cos θ, b sin θ). Hyperbola x²/a² − y²/b² = 1: (a sec θ, b tan θ). The parameter t or θ varies over the domain. This form is especially useful for deriving tangents, normals, and other properties.",
      },
      {
        title: "Latus rectum of conics",
        body:
          "The latus rectum is a chord through the focus perpendicular to the axis. For parabola y² = 4ax: length = 4a. For ellipse x²/a² + y²/b² = 1: length = 2b²/a. For hyperbola x²/a² − y²/b² = 1: length = 2b²/a. The endpoints of the latus rectum are important points on the conic and are often used in problem-solving.",
      },
    ],
    keyPoints: [
      "All conics come from slicing a double cone with a plane",
      "Eccentricity e: circle (0), ellipse (0<e<1), parabola (1), hyperbola (e>1)",
      "Parabola: set of points equidistant from focus and directrix",
      "Standard parabola y² = 4ax: focus (a,0), directrix x = −a, vertex (0,0)",
      "Latus rectum of parabola = 4a",
      "Ellipse: sum of distances to foci = 2a (constant)",
      "Standard ellipse x²/a² + y²/b² = 1: foci (±c,0), c² = a² − b², e = c/a",
      "Hyperbola: |difference of distances to foci| = 2a (constant)",
      "Standard hyperbola x²/a² − y²/b² = 1: foci (±c,0), c² = a² + b², e = c/a > 1",
      "Asymptotes of hyperbola x²/a² − y²/b² = 1: y = ±(b/a)x",
      "Rectangular hyperbola: a = b (asymptotes at 90°), or xy = c²",
      "Tangent to parabola y² = 4ax at (x₁, y₁): yy₁ = 2a(x + x₁)",
      "Tangent to ellipse at (x₁, y₁): xx₁/a² + yy₁/b² = 1",
      "Tangent to hyperbola at (x₁, y₁): xx₁/a² − yy₁/b² = 1",
      "General conic discriminant: h² − ab < 0 (ellipse), = 0 (parabola), > 0 (hyperbola)",
    ],
    importantQuestions: [
      "Find the focus, directrix, vertex, and length of latus rectum of the parabola y² = 16x.",
      "Find the equation of an ellipse with foci at (±4, 0) and major axis of length 10.",
      "Find the eccentricity, foci, and asymptotes of the hyperbola x²/9 − y²/16 = 1.",
      "A bridge is in the shape of a parabolic arch. The span is 30 m and the maximum height is 10 m. Find the equation of the parabola.",
      "Prove that for any point on an ellipse, the sum of distances to the foci is constant.",
      "Find the equation of the hyperbola with vertices at (±3, 0) and foci at (±5, 0).",
      "Find the equation of the tangent to the ellipse x²/16 + y²/9 = 1 at the point (4 cos θ, 3 sin θ).",
      "Identify the conic: x² + 4y² − 6x + 8y − 3 = 0. Find its centre and eccentricity.",
    ],
  },

  dispersion: {
    overview:
      "Here's a scenario. Two students, same average score of 75 on five tests. One scored 74, 75, 76, 75, 75 — incredibly consistent. The other scored 50, 100, 60, 90, 75 — wild swings. Same average, but completely different stories. That difference — how spread out the numbers are — is what dispersion measures.\n\nMeasures of dispersion tell you about the variability or spread within a dataset. Central tendency (mean, median, mode) tells you where the 'centre' is. Dispersion tells you how tightly data clusters around that centre or how loosely it's scattered. Both are needed to understand a dataset fully.\n\nThe simplest measure is the range: just the difference between the maximum and minimum values. If your data is 2, 5, 7, 10, 12, the range is 12 − 2 = 10. The range is easy to calculate and understand, but it has a serious flaw: it only uses two values from the entire dataset. If there's an outlier, the range can misrepresent the typical spread. For example, data: 1, 45, 47, 48, 50 has range 49, but most values are clustered between 45 and 50.\n\nMean deviation improves on the range by using all the data. Find the mean, find how far each data point is from the mean (absolute difference), then average those distances. It tells you the average distance from the mean. For grouped data (frequency distributions), you use the midpoints of classes and weigh by frequencies.\n\nVariance and standard deviation are the most important measures. Variance is the average of squared deviations from the mean. We square the deviations partly because it makes the mathematics nicer (derivatives, further statistics), but also because it gives more weight to larger deviations — a point far from the mean contributes disproportionately. For a population, variance σ² = ∑(xᵢ − μ)²/N. For a sample, we divide by (n − 1) instead of n — this is Bessel's correction, which makes the sample variance an unbiased estimator of the population variance.\n\nStandard deviation σ is the square root of variance. It's in the same units as the original data (unlike variance, which is in squared units). This makes it more interpretable. A small standard deviation means the data is clustered closely around the mean. A large one means it's spread out.\n\nThe coefficient of variation (CV) is used to compare variability across datasets with different units or different means. CV = (σ/μ) × 100%. It's a dimensionless percentage. For example, comparing height variability (in cm) with weight variability (in kg) — different units make standard deviations incomparable, but CV solves that.\n\nWe'll also study combined standard deviation — what happens when you merge two groups. This is useful when you have statistics for subgroups but need the overall measure. And we'll see how adding a constant or multiplying by a constant affects these measures.\n\nDispersion is the language of reliability, consistency, and risk. In finance, standard deviation measures investment risk. In manufacturing, it measures quality control. In education, it tells you if a test was fair. Master this chapter and you'll see the world in terms of spread, not just average.",
    concepts: [
      {
        title: "Range — quick but rough",
        body:
          "Range = Maximum value − Minimum value. It's the simplest measure of dispersion. For the dataset 10, 20, 30, 40, 50, the range is 40. It tells you immediately how wide the spread is. But it completely ignores the internal distribution. Two datasets can have the same range but entirely different shapes: 10, 10, 10, 10, 50 (range 40, mostly left-skewed) vs 10, 20, 30, 40, 50 (range 40, evenly spread). Use range for a quick, rough estimate only.",
      },
      {
        title: "Quartile deviation (semi-interquartile range)",
        body:
          "The quartile deviation is Q = (Q₃ − Q₁)/2, where Q₁ is the lower quartile (25th percentile) and Q₃ is the upper quartile (75th percentile). This measure ignores the extreme values and focuses on the spread of the middle 50% of data. It's more robust than the range because outliers don't affect it. The interquartile range itself (Q₃ − Q₁) is also commonly used. Quartile deviation is especially useful for skewed distributions.",
      },
      {
        title: "Mean deviation from the mean",
        body:
          "Mean deviation (MD) = (1/n) ∑|xᵢ − x̄|, where x̄ is the mean. It's the average absolute distance from the mean. For ungrouped data: MD = ∑|xᵢ − x̄|/n. For grouped data with frequencies: MD = ∑fᵢ|xᵢ − x̄|/∑fᵢ. Mean deviation uses absolute values to handle negative differences. While intuitive, it has mathematical limitations — absolute values don't play well with calculus, which is one reason variance is often preferred.",
      },
      {
        title: "Mean deviation from the median",
        body:
          "You can also compute mean deviation about the median instead of the mean. MD (median) = (1/n) ∑|xᵢ − M|, where M is the median. For symmetric distributions, this equals the mean deviation about the mean. For skewed distributions, the median-based version is often smaller and more representative. An interesting property: the sum of absolute deviations is minimised when taken about the median.",
      },
      {
        title: "Variance — the average squared deviation",
        body:
          "Variance is the most widely used measure of dispersion. For a population: σ² = ∑(xᵢ − μ)²/N. For a sample: s² = ∑(xᵢ − x̄)²/(n − 1). The n−1 denominator is Bessel's correction — it makes s² an unbiased estimator of σ². Variance penalises larger deviations more heavily than mean deviation because it squares them. A single extreme value can dramatically increase the variance.",
      },
      {
        title: "Standard deviation — variance in the original units",
        body:
          "Standard deviation (SD) is the square root of variance: σ = √σ² or s = √s². It brings the measure back to the original units of the data. If the data is in metres, variance is in square metres, but SD is in metres — making it directly interpretable. For roughly bell-shaped distributions, about 68% of data falls within 1σ of the mean, 95% within 2σ, and 99.7% within 3σ (the empirical rule or 68-95-99.7 rule).",
      },
      {
        title: "Variance and SD for ungrouped data",
        body:
          "Ungrouped data is just a list of values. Steps: (1) find the mean x̄, (2) subtract mean from each xᵢ, (3) square each difference, (4) sum the squares, (5) divide by n (or n-1 for sample). For a shortcut formula: σ² = (∑xᵢ²/n) − x̄². This avoids calculating each deviation individually — handy for large datasets. Example: for data 2, 4, 6, 8, 10: mean = 6, ∑x² = 220, σ² = 220/5 − 36 = 44 − 36 = 8, σ = √8 ≈ 2.83.",
      },
      {
        title: "Variance and SD for grouped frequency data",
        body:
          "For a frequency distribution, each value xᵢ has a frequency fᵢ. Formula: σ² = (∑fᵢxᵢ²/∑fᵢ) − (∑fᵢxᵢ/∑fᵢ)². The second term is just the mean squared. Using the step-deviation method (also called the assumed mean method) makes calculation easier when the class intervals are equal. Choose an assumed mean A, define dᵢ = (xᵢ − A)/h (where h is the class width), then σ² = h²[(∑fᵢdᵢ²/∑fᵢ) − (∑fᵢdᵢ/∑fᵢ)²].",
      },
      {
        title: "Step-deviation method — the shortcut for large data",
        body:
          "When you have equal class intervals, the step-deviation method avoids large numbers. Steps: (1) take a guessed mean A (usually the midpoint of the middle class), (2) compute dᵢ = (xᵢ − A)/h, (3) find ∑fᵢdᵢ and ∑fᵢdᵢ², (4) apply the formula. This is the fastest way to compute standard deviation for grouped data with uniform class width.",
      },
      {
        title: "Combined standard deviation of two groups",
        body:
          "When you merge two groups with sizes n₁, n₂, means x̄₁, x̄₂, and SDs σ₁, σ₂, the combined SD is: σ = √[(n₁σ₁² + n₂σ₂² + n₁d₁² + n₂d₂²)/(n₁ + n₂)], where d₁ = x̄₁ − x̄ and d₂ = x̄₂ − x̄ (x̄ is the combined mean). This formula accounts for both the within-group variation (σ₁², σ₂²) and the between-group variation (d₁², d₂²). The combined variance is always at least as large as the individual variances.",
      },
      {
        title: "Coefficient of variation — comparing apples and oranges",
        body:
          "CV = (σ/μ) × 100%. Since it's a percentage, it's unitless. You can compare the variability of heights (in cm) with weights (in kg) using CV. A CV of 5% means the SD is 5% of the mean. Higher CV = more relative variability. In investment, a lower CV indicates a better risk-to-return ratio. In manufacturing, a lower CV indicates more consistent product quality.",
      },
      {
        title: "Effect of change in origin and scale",
        body:
          "Adding a constant to every data point changes the mean but NOT the standard deviation (SD is a measure of spread, not location). So if you add 10 to every value, SD stays the same. Multiplying every value by a constant k multiplies SD by |k| and variance by k². For example, converting from metres to centimetres (×100) multiplies SD by 100. These properties are useful when working with transformed data.",
      },
      {
        title: "Empirical relationship between measures of dispersion",
        body:
          "For moderately skewed distributions (approximately bell-shaped), there's a rough relationship: σ ≈ 1.4826 × MAD (median absolute deviation) and quartile deviation ≈ (2/3)σ. The range is approximately 6σ for normally distributed data. These relationships give you a quick sanity check: if the range divided by 6 is far from the SD, the data might not be normally distributed.",
      },
      {
        title: "Merits and demerits of different measures",
        body:
          "Range: simplest, quickest, but uses only two values and is outlier-sensitive. Quartile deviation: robust, ignores extremes, but ignores half the data's distribution. Mean deviation: uses all data, intuitive, but mathematically inconvenient (absolute values). Variance/SD: uses all data, mathematically tractable (squares allow calculus), but sensitive to outliers and has squared units (SD fixes the unit issue). CV: best for comparing different datasets, but meaningless if mean is near zero.",
      },
      {
        title: "Applications of dispersion in real life",
        body:
          "Dispersion is everywhere. In finance: standard deviation of stock returns measures risk. In quality control: manufacturers monitor the SD of product dimensions to ensure consistency. In education: spread of test scores indicates how well a test differentiates students. In weather: variance in temperature tells you about climate stability. In sports: consistency of a player's performance is measured by how much their scores vary from their average.",
      },
    ],
    keyPoints: [
      "Range = Max − Min — simple but only uses two values",
      "Quartile deviation = (Q₃ − Q₁)/2 — robust to outliers, based on middle 50%",
      "Mean deviation (about mean) = ∑|xᵢ − x̄|/n — average absolute distance",
      "Mean deviation is minimised when taken from the median",
      "Population variance σ² = ∑(xᵢ − μ)²/N",
      "Sample variance s² = ∑(xᵢ − x̄)²/(n − 1) — Bessel's correction for unbiasedness",
      "Standard deviation = √variance — same units as the original data",
      "For grouped data: variance = (∑fx²/∑f) − (∑fx/∑f)²",
      "Step-deviation method: σ² = h²[(∑fd²/∑f) − (∑fd/∑f)²]",
      "Combined SD accounts for both within-group and between-group variation",
      "Coefficient of variation CV = (σ/μ) × 100% — for comparing datasets",
      "Adding a constant does NOT change SD; multiplying by k multiplies SD by |k|",
      "68-95-99.7 rule: in a normal distribution, data within 1σ, 2σ, 3σ of the mean",
      "SD is more sensitive to outliers than mean deviation due to squaring",
      "CV is meaningless when the mean is close to zero",
    ],
    importantQuestions: [
      "Find the range, mean deviation from the mean, variance, and standard deviation for the data: 5, 8, 12, 15, 20.",
      "Two teams have the same mean score of 65. Team A has SD = 8, Team B has SD = 15. Which team is more consistent, and why?",
      "Find the coefficient of variation for the heights: 150, 155, 160, 165, 170 cm. Interpret the result.",
      "The mean and standard deviation of 100 items are 50 and 4. If each item is increased by 5, what happens to the mean and standard deviation?",
      "Calculate the standard deviation for the following frequency distribution: Class 0-10 (f=3), 10-20 (f=7), 20-30 (f=12), 30-40 (f=8), 40-50 (f=5).",
      "The means and SDs of two groups are: Group 1 (n=50, mean=60, SD=8), Group 2 (n=70, mean=70, SD=10). Find the combined mean and combined SD.",
      "Explain why variance uses squared deviations instead of absolute deviations. What are the advantages and disadvantages of each?",
      "The CV of the first dataset is 12% and the CV of the second is 8%. The means are 100 and 200 respectively. Which dataset has more absolute variability?",
    ],
  },
};

export default content;
