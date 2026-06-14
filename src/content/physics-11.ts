interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "units-measurements": {
    overview:
      "Ever wondered how we know the speed of light is exactly 299,792,458 m/s? That's the magic of units and measurements. This chapter is about the language physics uses to describe the world — SI units, dimensions, and how to deal with errors when measuring stuff.",
    concepts: [
      {
        title: "SI Units — The Universal Language",
        body:
          "Scientists everywhere needed to agree on measurements. That's where SI units come in. There are seven base units — meter, kilogram, second, ampere, kelvin, mole, candela. Everything else (like Newton, Joule, Pascal) is derived from these. Think of base units as the LEGO blocks, and derived units as whatever you build with them.",
      },
      {
        title: "Dimensions — What's the Nature of a Quantity?",
        body:
          "Dimensions tell you what a quantity is made of — length [L], mass [M], time [T], etc. Force isn't just 'force', it's [MLT⁻²]. Why does this matter? You can check if an equation is correct just by looking at dimensions. If the dimensions on both sides don't match, the equation is guaranteed wrong. It's like checking if you're adding apples to apples.",
      },
      {
        title: "Significant Figures — How Precise Are We?",
        body:
          "Significant figures are about honesty in measurement. If a scale shows 3.5 kg, you can't say 3.5000 kg — the scale wasn't that precise. Rules for counting sig figs: non-zero digits always count, zeros between them count, trailing zeros after decimal count. Leading zeros don't. It's basically physics' way of saying 'don't oversell your precision.'",
      },
      {
        title: "Errors and Uncertainty — Nothing's Perfect",
        body:
          "Every measurement has error. Systematic errors are like a scale that's always 2 kg off — consistent but wrong. Random errors are like shaky hands — different every time. Absolute error = |measured - true|. Relative error = (absolute error / true value) × 100. You can reduce random errors by taking multiple readings and averaging, but systematic errors need fixing the instrument.",
      },
    ],
    keyPoints: [
      "Seven base SI units: m, kg, s, A, K, mol, cd",
      "Dimensional formula helps check equation correctness",
      "Significant figures = meaningful digits in a measurement",
      "Absolute error = |true value - measured value|",
      "Relative error = (absolute error / true value) × 100%",
      "Systematic errors are repeatable, random errors are not",
      "Parallax error happens when your eye isn't aligned with the scale",
      "Least count = smallest value an instrument can measure",
    ],
    importantQuestions: [
      "Check the dimensional correctness of v² = u² + 2as.",
      "A student measures the thickness of a wire as 2.53 mm, 2.55 mm, 2.54 mm. Calculate absolute and relative error.",
      "Convert 1 Newton into dyne using dimensional analysis.",
      "Why are significant figures important in experiments? Explain with an example.",
    ],
  },

  "mathematical-methods": {
    overview:
      "Physics is math in disguise. Seriously — Newton had to invent calculus just to explain motion. This chapter gives you the math tools: vectors (stuff with direction) and the basics of calculus (how things change). You can't do physics without this, so think of it as your starter pack.",
    concepts: [
      {
        title: "Vectors — Because Direction Matters",
        body:
          "Scalars are just numbers: 5 kg, 30°C. Vectors have direction: 5 m/s north, 30 N upward. Imagine telling someone 'walk 10 steps' — they wouldn't know where to go. But 'walk 10 steps east'? That's a vector. Vectors are represented as arrows, and you can add them tip-to-tail or using components.",
      },
      {
        title: "Vector Addition and Subtraction",
        body:
          "To add vectors, break each into components along x and y axes. Add all x-components, add all y-components — done. The magnitude of the resultant is √(Rx² + Ry²), and direction is tan⁻¹(Ry/Rx). Subtraction is just adding the negative of a vector. The triangle and parallelogram laws are just fancy names for the same idea.",
      },
      {
        title: "Scalar and Vector Products",
        body:
          "Dot product (A·B) gives a scalar. A·B = AB cosθ. Use it when you care about how much two vectors align — like work done (force·displacement). Cross product (A×B) gives a vector perpendicular to both. |A×B| = AB sinθ. Use it for torque, angular momentum, or anything that spins. Right-hand rule tells you the direction.",
      },
      {
        title: "Calculus Basics — Derivatives",
        body:
          "A derivative tells you the rate of change. If position changes over time, its derivative is velocity. If velocity changes, derivative is acceleration. Graphically, derivative = slope of the tangent. Simple rules: derivative of xⁿ is nxⁿ⁻¹, derivative of a constant is zero. That's really all you need for most of Std 11.",
      },
      {
        title: "Calculus Basics — Integrals",
        body:
          "Integration is the reverse of differentiation — it adds things up. If velocity is the derivative of position, then position is the integral of velocity. Graphically, it's the area under a curve. Indefinite integral gives a family of curves (with + C), definite integral gives a number. The area under a v-t graph? That's displacement.",
      },
    ],
    keyPoints: [
      "Vectors have magnitude and direction; scalars only magnitude",
      "Resultant of two vectors: R² = A² + B² + 2AB cosθ",
      "Dot product: A·B = AB cosθ (scalar)",
      "Cross product: A×B = AB sinθ n̂ (vector)",
      "Derivative = rate of change, Integral = area under curve",
      "d/dx (xⁿ) = nxⁿ⁻¹",
      "Definite integral gives area between curve and x-axis",
    ],
    importantQuestions: [
      "Find the angle between two vectors A = 2i + 3j + k and B = i − 2j + 2k using dot product.",
      "If A = i + 2j + 3k and B = 3i + 2j + k, find A×B.",
      "The position of a particle is x(t) = 2t² + 3t + 1. Find velocity and acceleration at t = 2 s.",
    ],
  },

  "motion-in-plane": {
    overview:
      "Imagine throwing a ball to your friend — it curves through the air in a beautiful arc. That's projectile motion. Now think of a fan's blades spinning around — that's circular motion. This chapter is all about motion that isn't just in a straight line. It's where physics gets two-dimensional and a lot more interesting.",
    concepts: [
      {
        title: "Motion in 2D — Position and Velocity Vectors",
        body:
          "In 1D, position was just x(t). In 2D, it's r(t) = x(t)î + y(t)ĵ. Velocity is dr/dt, acceleration is dv/dt. Each component behaves independently — that's the golden rule. The x-motion doesn't care what the y-motion is doing. It's like watching a video — the horizontal and vertical are on separate tracks but play together.",
      },
      {
        title: "Projectile Motion — The Art of Throwing",
        body:
          "A projectile is anything launched into the air and left to gravity. The horizontal velocity is constant (no force horizontally, ignoring air). Vertical velocity changes by g = 9.8 m/s² each second. The path is a parabola. Time of flight = 2u sinθ / g. Maximum height = u² sin²θ / 2g. Range = u² sin2θ / g. The magic angle for max range? 45°.",
      },
      {
        title: "Uniform Circular Motion",
        body:
          "When something moves in a circle at constant speed, its direction keeps changing — so it's accelerating! That's centripetal acceleration, always pointing toward the center. a = v²/r = ω²r. The force causing this is centripetal force, but it's not a separate force — it's tension, gravity, friction, or whatever is keeping the object on the circular path.",
      },
      {
        title: "Angular Variables — θ, ω, α",
        body:
          "Angular displacement θ (in radians), angular velocity ω = dθ/dt (rad/s), angular acceleration α = dω/dt (rad/s²). The relationships are exactly like linear motion: ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ. Just replace x with θ, v with ω, a with α. It's the same math, different letters.",
      },
      {
        title: "Relative Velocity in 2D",
        body:
          "Relative velocity in 2D is just vector subtraction. If you're in a car moving at 20 m/s east and another car goes 15 m/s north, their velocity relative to you is the vector difference. v_AB = v_A − v_B. Rain-man problems, river-boat problems — all just vector addition and subtraction. Draw the triangle, solve with Pythagoras.",
      },
    ],
    keyPoints: [
      "Horizontal and vertical motions are independent of each other",
      "Time of flight = 2u sinθ / g",
      "Maximum horizontal range at θ = 45°",
      "Centripetal acceleration: a = v²/r (always toward center)",
      "Angular velocity ω = v/r, period T = 2πr/v",
      "Banking of roads provides centripetal force through angled normal reaction",
    ],
    importantQuestions: [
      "A ball is thrown at 30 m/s at 60° to horizontal. Find time of flight, max height, and range.",
      "Derive an expression for centripetal acceleration.",
      "A stone tied to a string rotates in a vertical circle. Why does tension vary at different points?",
      "In a river-boat problem, if river flows at 4 km/h and boat speed is 5 km/h, find the angle to cross directly to the opposite bank.",
    ],
  },

  "laws-of-motion": {
    overview:
      "Ever tried pushing a heavy box? The harder you push, the faster it moves. But why does it stop when you stop pushing? Newton asked the same questions 300 years ago, and his three laws are still the foundation of everything that moves. This chapter also covers friction — that annoying force that's both a hero (you couldn't walk without it) and a villain.",
    concepts: [
      {
        title: "Newton's First Law — The Law of Laziness",
        body:
          "An object at rest stays at rest, and an object in motion stays in motion — unless a net external force acts on it. This property is called inertia. Heavier things have more inertia — a truck is harder to move than a bicycle. That's also why you lurch forward when a bus suddenly stops: your body wanted to keep moving.",
      },
      {
        title: "Newton's Second Law — F = ma",
        body:
          "The net force on an object equals mass × acceleration. Not force = mass × velocity, not force = mass × speed — specifically acceleration. F = ma also tells you direction: acceleration is in the same direction as the net force. Push something east, it accelerates east. Double the force, double the acceleration. Double the mass, half the acceleration.",
      },
      {
        title: "Newton's Third Law — Action and Reaction",
        body:
          "Every action has an equal and opposite reaction. When you push a wall, the wall pushes you back with the same force. You feel it, right? When you jump, you push Earth down, and Earth pushes you up. But Earth barely moves because it's so massive (remember F = ma — same F, huge m, tiny a). These forces always act on different objects.",
      },
      {
        title: "Friction — The Grip That Slows You Down",
        body:
          "Friction is electromagnetic force between surfaces. Static friction is what you overcome to start moving something — it's self-adjusting up to a maximum (f_s ≤ μ_s N). Once moving, kinetic friction takes over, and it's usually smaller (f_k = μ_k N). Rolling friction is even smaller — that's why wheels were invented. Friction is parallel to the surface, opposite to motion.",
      },
      {
        title: "Free Body Diagrams — The Superpower",
        body:
          "A free body diagram is just a sketch showing all forces acting on one object. Weight (mg) down, normal force perpendicular to surface, friction parallel to surface, tension along a string. Draw arrows, label them, pick axes, break into components, set ΣF = ma. It sounds mechanical, but it literally solves every Newton's laws problem. Don't skip the diagram.",
      },
    ],
    keyPoints: [
      "First law = law of inertia; Second law = F = ma; Third law = action-reaction pairs",
      "Inertia depends on mass — more mass = more inertia",
      "Friction: static (f_s ≤ μ_s N) and kinetic (f_k = μ_k N)",
      "Friction always opposes relative motion between surfaces",
      "Angle of repose = angle where an object just starts sliding on an incline",
      "Always draw a free body diagram before solving",
      "Impulse = F × Δt = change in momentum (Δp)",
    ],
    importantQuestions: [
      "A 5 kg box is pushed with 20 N on a rough surface (μ_k = 0.3). Find acceleration.",
      "State and prove Newton's second law. Derive F = ma.",
      "A body of mass 2 kg is kept on a rough inclined plane (θ = 30°, μ_s = 0.6). Will it slide?",
      "Explain why a horse can pull a cart using Newton's laws.",
    ],
  },

  gravitation: {
    overview:
      "Why does an apple fall to the ground, but the Moon doesn't crash into Earth? Newton figured out it's the same force — gravity. This chapter is about the force that governs everything from falling objects to orbiting planets. It's also where Kepler figured out how planets actually move (spoiler: circles were wrong, ellipses are right).",
    concepts: [
      {
        title: "Universal Law of Gravitation",
        body:
          "Every object in the universe attracts every other object with a force. F = G m₁m₂ / r², where G = 6.67 × 10⁻¹¹ N·m²/kg². The force is always attractive, proportional to both masses, and inversely proportional to the square of the distance. It's called 'universal' because it works for apples, planets, and galaxies. Same rule. Everywhere.",
      },
      {
        title: "Kepler's Laws — How Planets Actually Move",
        body:
          "Kepler didn't know WHY planets moved the way they did — he just described it. Law 1: Planets orbit in ellipses with the Sun at one focus. Law 2: A line from Sun to planet sweeps equal areas in equal times (so they move faster when closer). Law 3: T² ∝ r³ — the square of the orbital period is proportional to the cube of the semi-major axis.",
      },
      {
        title: "Gravitational Acceleration (g)",
        body:
          "g = GM/R² — that's acceleration due to gravity at Earth's surface. It's about 9.8 m/s². But g varies: decreases as you go higher (g ∝ 1/r²), decreases as you go inside Earth (only the mass below you pulls), and is less at the equator (Earth bulges) than at poles. That's why your weight changes slightly depending on where you are.",
      },
      {
        title: "Gravitational Potential Energy",
        body:
          "Near Earth's surface, we use PE = mgh. But that's an approximation. The real formula is U = −GMm/r, where r is the distance between centers. It's negative because we set U=0 at infinity. As objects come closer, U becomes more negative (they lose potential energy, gain kinetic). Escape velocity comes from here: v_esc = √(2GM/R).",
      },
      {
        title: "Satellites and Orbital Motion",
        body:
          "A satellite stays in orbit because its centripetal force comes from gravity. GMm/r² = mv²/r, so orbital velocity v = √(GM/r). Geostationary satellites orbit at about 36,000 km above the equator, matching Earth's rotation. They look fixed in the sky — perfect for TV and weather. Polar satellites go over poles and scan the whole Earth.",
      },
    ],
    keyPoints: [
      "Gravitational force: F = G m₁m₂ / r² (always attractive)",
      "G = 6.67 × 10⁻¹¹ N·m²/kg²",
      "Kepler's 1st: elliptical orbits, 2nd: equal area in equal time, 3rd: T² ∝ r³",
      "g varies with altitude, depth, and latitude",
      "Escape velocity: v_esc = √(2GM/R) = 11.2 km/s for Earth",
      "Orbital velocity: v₀ = √(GM/r)",
      "Geostationary satellites have T = 24 hours, orbit above equator",
    ],
    importantQuestions: [
      "Derive the relation between g and G.",
      "Show that the orbital velocity of a satellite is √2 times the escape velocity.",
      "State and explain Kepler's laws of planetary motion.",
      "At what height above Earth's surface does g become half its value on the surface?",
    ],
  },

  "mechanical-properties-solids": {
    overview:
      "Ever stretched a rubber band? It snaps back. But if you stretch too much, it breaks. This chapter is about what happens inside solid materials when you push, pull, or twist them. It's why bridges are built with steel, why your mattress springs work, and why bones can handle impact. Meet stress, strain, and Hooke's law.",
    concepts: [
      {
        title: "Stress and Strain — What's Happening Inside?",
        body:
          "Stress is the force per unit area inside a material (σ = F/A), measured in Pascal. Think of it as 'how hard are the atoms being pushed apart?' Strain is the deformation relative to the original size (ε = ΔL/L), a ratio with no units. Normal stress is perpendicular to the surface (pulling or pushing), shear stress is parallel (sliding layers).",
      },
      {
        title: "Hooke's Law and Elastic Moduli",
        body:
          "Within the elastic limit, stress ∝ strain. That's Hooke's law. The proportionality constant is the modulus of elasticity. Young's modulus (Y) for stretching = stress/strain = FL/AΔL. Bulk modulus (K) for volume change = −ΔP/(ΔV/V). Shear modulus (G) for shape change = shear stress/shear strain. Higher modulus = stiffer material.",
      },
      {
        title: "Stress-Strain Curve — Reading a Material's Story",
        body:
          "If you graph stress vs strain, you get a curve with distinct regions. First comes the elastic region (obeys Hooke's law, material returns to original shape). Then the yield point (permanent deformation starts). After that, plastic region (material deforms permanently). Finally, the breaking point. Ductile materials like copper have a long plastic region; brittle materials like glass break abruptly.",
      },
      {
        title: "Elastic Limit and Plasticity",
        body:
          "The elastic limit is the maximum stress a material can take and still spring back. Exceed it, and you've entered plastic deformation — the material won't fully recover. That's why a bent paperclip stays bent. Elastic aftereffect is when a material takes time to return to shape after a small load. Quartz and phosphor bronze have almost zero elastic aftereffect — that's why they're used in精密 instruments.",
      },
    ],
    keyPoints: [
      "Stress = F/A (Pascal), Strain = ΔL/L (no unit)",
      "Hooke's law: stress ∝ strain within elastic limit",
      "Young's modulus Y = FL / AΔL",
      "Bulk modulus K = −ΔP / (ΔV/V)",
      "Modulus of rigidity G = shear stress / shear strain",
      "Ductile materials undergo plastic deformation before breaking; brittle materials don't",
      "Elastic limit = max stress without permanent deformation",
    ],
    importantQuestions: [
      "A wire of length 2 m and cross-sectional area 10⁻⁶ m² stretches by 1 mm under a 4 kg load. Find Young's modulus.",
      "Distinguish between stress and strain.",
      "Explain the stress-strain curve for a ductile material with a labeled diagram.",
      "Why does a brittle material break suddenly while a ductile one deforms first?",
    ],
  },

  "thermal-properties-matter": {
    overview:
      "Why does a metal spoon feel colder than a wooden spoon even though both are at room temperature? That's thermal conductivity. This chapter is about heat — how it flows, how we measure it, and how materials behave when they heat up. It's the science behind why you can fry an egg on a hot pan but not on a hot plastic plate.",
    concepts: [
      {
        title: "Heat and Temperature — They're Not the Same",
        body:
          "Temperature tells you how hot something is — it's the average kinetic energy of molecules. Heat is energy transferred between objects because of temperature difference. Think of temperature as a 'how excited are the molecules?' meter and heat as the actual energy moving around. Heat flows from hot to cold until thermal equilibrium (same temperature) is reached.",
      },
      {
        title: "Thermal Expansion — Everything Grows When Hot",
        body:
          "Most things expand when heated. Solids expand in length (linear), area (areal), and volume (cubical). Linear expansion: ΔL = α L₀ ΔT, where α is the coefficient of linear expansion. ΔA = β A₀ ΔT (β ≈ 2α), ΔV = γ V₀ ΔT (γ ≈ 3α). That's why railway tracks have gaps and bridges have expansion joints — to avoid buckling in summer.",
      },
      {
        title: "Specific Heat and Calorimetry",
        body:
          "Specific heat capacity (c) is the heat needed to raise 1 kg of a substance by 1°C. Water has a high specific heat (4200 J/kg·°C) — it takes a lot of energy to heat water up, and it cools down slowly. That's why coastal cities have milder climates. Calorimetry is just the heat balance equation: heat lost = heat gained. The principle of conservation of energy applied to thermal systems.",
      },
      {
        title: "Latent Heat — Hidden Heat During Phase Change",
        body:
          "When ice melts at 0°C, the temperature doesn't change until all ice has become water. Where does the heat go? Latent heat — it breaks the bonds between molecules instead of raising temperature. Latent heat of fusion (L_f) for melting/freezing, latent heat of vaporization (L_v) for boiling/condensation. L_v is much larger than L_f — breaking all bonds to turn liquid to gas takes way more energy than melting.",
      },
      {
        title: "Heat Transfer — Conduction, Convection, Radiation",
        body:
          "Three ways heat moves. Conduction: through direct contact (metal spoon in hot tea). Rate = kA(ΔT)/L, where k is thermal conductivity. Convection: through fluid movement (hot air rises, cool air sinks) — that's how room heaters work. Radiation: through electromagnetic waves (Sun's heat reaching Earth) — no medium needed. Dark surfaces absorb and radiate better than shiny ones.",
      },
    ],
    keyPoints: [
      "Temperature = average KE of molecules; Heat = energy transferred",
      "Linear expansion: ΔL = α L₀ ΔT",
      "β = 2α, γ = 3α for most solids",
      "Specific heat c = Q / (m ΔT)",
      "Latent heat: Q = mL — no temperature change during phase change",
      "Conduction: kA(ΔT)/L, Convection: fluid movement, Radiation: electromagnetic waves",
      "Water has high specific heat (4200 J/kg·°C) — great coolant",
    ],
    importantQuestions: [
      "A 0.5 kg metal piece at 150°C is dropped into 2 kg of water at 30°C. Final temp is 35°C. Find the specific heat of the metal.",
      "Distinguish between conduction, convection, and radiation.",
      "Why do railway tracks have small gaps between sections? Explain using thermal expansion.",
      "Calculate the heat required to convert 1 kg of ice at −10°C to steam at 100°C. (c_ice = 2100, L_f = 3.34×10⁵, c_water = 4200, L_v = 2.26×10⁶)",
    ],
  },

  sound: {
    overview:
      "Have you ever seen a speaker vibrate and wondered how sound actually travels? Sound is just vibrations moving through air (or any medium) as waves. This chapter explores how waves behave — reflection, interference, resonance, and that cool effect where a siren sounds different as it passes you (Doppler effect). It's physics you can actually hear.",
    concepts: [
      {
        title: "Waves — What Are They?",
        body:
          "A wave is a disturbance that carries energy without carrying matter. Drop a stone in water — ripples move out, but the water stays. Sound waves are longitudinal — air molecules compress and rarefy along the direction of travel. Light waves are transverse. Key wave properties: wavelength λ, frequency f, velocity v = fλ. Frequency doesn't change when a wave enters a different medium — wavelength and speed do.",
      },
      {
        title: "Speed of Sound — How Fast Does It Travel?",
        body:
          "Sound travels at about 343 m/s in air at 20°C. It's faster in liquids (about 1500 m/s in water) and even faster in solids (5000 m/s in steel). Why? Molecules are closer together, so vibrations transmit faster. Temperature affects speed too: v ∝ √T. That's why sound travels faster on a hot day. Formula: v = √(γP/ρ) for gases, where γ is the adiabatic index.",
      },
      {
        title: "Reflection and Echoes",
        body:
          "Sound reflects off surfaces like light off a mirror. That's how echo works — you hear the reflected sound after a delay. Minimum distance for a distinct echo? About 17 meters (sound travels to the wall and back in 0.1s, the minimum time your ear can distinguish). Reverberation is multiple reflections that persist — that's why empty rooms sound echoey but furnished rooms don't. Carpets and curtains absorb sound.",
      },
      {
        title: "Resonance and Standing Waves",
        body:
          "When you push a swing at just the right moment, it goes higher — that's resonance. For sound, resonance happens when the frequency of a driving force matches the natural frequency of an object. A tuning fork makes a column of air resonate at its natural frequency. Standing waves are formed by two identical waves traveling in opposite directions. Nodes are points of zero displacement, antinodes are points of maximum displacement.",
      },
      {
        title: "Doppler Effect — The Changing Pitch",
        body:
          "You know how an ambulance siren sounds higher when it comes toward you and lower when it moves away? That's the Doppler effect. When the source moves toward you, waves get compressed — shorter wavelength, higher frequency. When it moves away, waves spread out — longer wavelength, lower frequency. The formula is f' = f(v ± v₀)/(v ∓ v_s). Top sign: source moving toward observer. It applies to light too — that's how we know distant galaxies are moving away (redshift).",
      },
    ],
    keyPoints: [
      "Sound is a longitudinal wave — particles vibrate parallel to wave direction",
      "v = fλ, speed depends on medium properties",
      "Speed of sound in air at 20°C ≈ 343 m/s",
      "Echo: reflected sound heard after ≥ 0.1s delay",
      "Resonance = matching natural frequency → maximum amplitude",
      "Doppler effect: frequency shift when source/observer moves",
      "Beats = interference of two waves with slightly different frequencies",
    ],
    importantQuestions: [
      "An ambulance with siren frequency 700 Hz approaches you at 30 m/s. What frequency do you hear? (v = 340 m/s)",
      "What is resonance? Give one example from everyday life.",
      "A stone is dropped into a well and the sound is heard after 3 seconds. If the well is 40 m deep, find the speed of sound.",
      "Derive the formula for the speed of sound in a gas.",
    ],
  },

  optics: {
    overview:
      "Have you ever tried to grab a coin from a bucket of water, only to find it's not where it looks like it is? That's refraction bending light. This chapter covers how light behaves when it hits mirrors, passes through lenses, and travels through different materials. Plus how your eyes, microscopes, and telescopes use these principles to see the tiny and the far away.",
    concepts: [
      {
        title: "Reflection — Bouncing Light",
        body:
          "Law of reflection: angle of incidence = angle of reflection, and the incident ray, reflected ray, and normal all lie in the same plane. That's it. Works for flat mirrors (plane mirrors give virtual, erect, same-size images) and curved mirrors. Concave mirrors converge light (used in torches, telescopes). Convex mirrors diverge light (used in rearview mirrors — gives a wider field of view). Mirror formula: 1/f = 1/u + 1/v.",
      },
      {
        title: "Refraction — Light Bends",
        body:
          "When light goes from one medium to another, it bends. That's refraction. Snell's law: n₁ sin θ₁ = n₂ sin θ₂, where n is the refractive index. Light bends toward the normal when going to a denser medium (air → water), away from normal when going to a rarer medium (water → air). Refractive index n = c/v, where c is speed of light in vacuum and v in the medium. It's also n = real depth / apparent depth.",
      },
      {
        title: "Lenses — The Power to Focus",
        body:
          "Convex lenses converge light (f positive), concave lenses diverge light (f negative). Lens formula: 1/f = 1/v − 1/u. Power of a lens P = 1/f (in diopters, when f is in meters). Lens maker's formula: 1/f = (n − 1)(1/R₁ − 1/R₂). Magnification m = v/u. A real image can be projected on a screen; a virtual image can't. Your eye's lens changes shape to focus — that's accommodation.",
      },
      {
        title: "Optical Instruments — Seeing More",
        body:
          "Simple microscope: a single convex lens magnifies objects (maximum ~10×). Compound microscope: two lenses — objective (small f) and eyepiece — for much higher magnification. Telescope: objective collects light from distant objects (large f), eyepiece magnifies the image. Astronomical telescopes use two convex lenses. Terrestrial telescopes need an extra lens to make the image upright. Magnification power M = fₒ/fₑ for a telescope in normal adjustment.",
      },
      {
        title: "Dispersion — Rainbows and Prisms",
        body:
          "White light is made of all colors. A prism splits it into its component colors — that's dispersion. Red bends the least, violet bends the most (because refractive index is slightly different for each wavelength). That's why you get VIBGYOR. Rainbows are just dispersion by water droplets in the atmosphere. Angular dispersion = δ_v − δ_r, and dispersive power ω = (δ_v − δ_r)/δ_y.",
      },
    ],
    keyPoints: [
      "Reflection: ∠i = ∠r (laws of reflection)",
      "Mirror formula: 1/f = 1/u + 1/v",
      "Snell's law: n₁ sin θ₁ = n₂ sin θ₂",
      "Refractive index n = c/v = real depth / apparent depth",
      "Lens formula: 1/f = 1/v − 1/u",
      "Power of lens P = 1/f (diopters)",
      "Total internal reflection happens when light goes from denser to rarer medium at θ > critical angle",
      "Dispersion: white light splits into VIBGYOR through a prism",
    ],
    importantQuestions: [
      "An object is placed 30 cm from a concave mirror of focal length 20 cm. Find image position and nature.",
      "A convex lens has focal length 15 cm. Where should an object be placed to get a real image 3 times magnified?",
      "Explain total internal reflection with a neat diagram. Give two applications.",
      "Derive the lens maker's formula.",
    ],
  },

  electrostatics: {
    overview:
      "Ever rubbed a balloon on your hair and watched it stick to the wall? That's static electricity — the same force that causes lightning bolts. This chapter is about charges at rest: why they attract or repel, how to calculate the force between them, and what happens when you bring charges near conductors. It's the foundation of all electricity.",
    concepts: [
      {
        title: "Coulomb's Law — The Force Between Charges",
        body:
          "Like charges repel, opposite charges attract. The force between two point charges is F = k q₁q₂ / r², where k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C². ε₀ is the permittivity of free space (8.85 × 10⁻¹²). The force is along the line joining the charges. Coulomb's law looks just like Newton's gravity law — but charges can attract or repel, while gravity only attracts.",
      },
      {
        title: "Electric Field — The Invisible Influence",
        body:
          "An electric field is the region around a charge where it exerts force on other charges. E = F/q₀ (force per unit test charge). For a point charge, E = kQ/r², directed radially outward (positive) or inward (negative). Electric field lines start from positive charges and end on negative charges. They never cross. The denser the lines, the stronger the field. It's like a wind map showing which way a charge would feel a push.",
      },
      {
        title: "Electric Potential — Voltage for Short",
        body:
          "Electric potential V is the work done per unit charge to bring a test charge from infinity to that point. V = kQ/r for a point charge. Potential difference ΔV = W/q — that's what we call voltage. Charges flow from higher potential to lower potential. Equipotential surfaces connect points with the same potential — no work is done moving a charge along them. They're perpendicular to electric field lines.",
      },
      {
        title: "Capacitors — Storing Charge",
        body:
          "A capacitor stores electrical energy. The simplest is two parallel plates: C = ε₀A/d, where A is plate area, d is separation. Capacitance C = Q/V — how much charge it holds per volt. Dielectrics are insulators that increase capacitance when placed between plates (by a factor of κ, the dielectric constant). Energy stored in a capacitor: U = ½CV² = ½QV. Capacitors in parallel add: C_total = C₁ + C₂ + ... In series: 1/C_total = 1/C₁ + 1/C₂ + ...",
      },
      {
        title: "Gauss's Law — The Big Picture",
        body:
          "Gauss's law says the total electric flux through a closed surface equals the charge enclosed divided by ε₀. Φ = ∮ E·dA = q_enclosed / ε₀. It sounds abstract, but it makes calculating fields for symmetrical charge distributions super easy. For example, the field outside a uniformly charged sphere is the same as if all charge were at the center. It's a shortcut — skip messy integrals when you have symmetry.",
      },
    ],
    keyPoints: [
      "Coulomb's law: F = k q₁q₂ / r², k = 9×10⁹ N·m²/C²",
      "Electric field E = F/q₀, direction from + to −",
      "Potential V = kQ/r, Potential difference = work/charge",
      "Capacitance C = Q/V, Parallel plate: C = ε₀A/d",
      "Dielectric increases capacitance by factor κ",
      "Capacitors in parallel: C_total = C₁ + C₂ + ..., in series: 1/C_total = 1/C₁ + 1/C₂ + ...",
      "Gauss's law: Φ = q_enclosed / ε₀",
      "Electric field inside a conductor is zero (electrostatic equilibrium)",
    ],
    importantQuestions: [
      "Two charges 5 μC and −3 μC are placed 20 cm apart. Find the force between them.",
      "Derive an expression for the capacitance of a parallel plate capacitor with a dielectric slab.",
      "State Gauss's law and use it to find the electric field due to an infinitely long charged wire.",
      "Three capacitors 2 μF, 3 μF, and 5 μF are connected in series to a 12 V battery. Find total capacitance and charge on each.",
    ],
  },

  "electric-current": {
    overview:
      "Imagine a wire as a pipe full of electrons. When you push them from one end, they all move — that's electric current. This chapter is about how current flows through conductors, why some materials resist it more than others, and how circuits work. It's the physics behind every electronic device: from a simple flashlight to your phone charger.",
    concepts: [
      {
        title: "Electric Current — Flow of Charge",
        body:
          "Current I = Q/t — the rate at which charge flows past a point. Measured in amperes (A). 1 A = 1 C/s. By convention, current direction is the flow of positive charge (from + to −), even though electrons actually move the other way. Current density J = I/A, where A is cross-sectional area. In metals, free electrons drift slowly (mm/s) but the electric signal propagates at nearly light speed — like a hose filling instantly even though water molecules move slowly.",
      },
      {
        title: "Ohm's Law and Resistance",
        body:
          "V = IR — the voltage across a conductor is proportional to the current through it, as long as temperature is constant. R is resistance (in ohms, Ω). Resistance depends on the material: R = ρL/A, where ρ is resistivity (a material property). Conductors have low ρ (copper: 1.7×10⁻⁸ Ω·m), insulators have very high ρ. Resistivity increases with temperature for metals (ρ = ρ₀[1 + α(T − T₀)]). Conductance G = 1/R, measured in siemens (S).",
      },
      {
        title: "Combinations of Resistors",
        body:
          "Series: same current through all resistors, voltage divides. R_eq = R₁ + R₂ + R₃ + ... If one bulb in a series string blows, all go out. Parallel: same voltage across all resistors, current divides. 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ... Parallel is how your home is wired — each appliance gets full voltage, and turning one off doesn't affect others. For two resistors in parallel: R_eq = (R₁R₂)/(R₁+R₂).",
      },
      {
        title: "Electromotive Force (EMF) and Internal Resistance",
        body:
          "A battery isn't perfect — it has internal resistance r. The terminal voltage V = ε − Ir, where ε is the EMF (theoretical voltage with no load). As you draw more current, terminal voltage drops because of Ir drop. That's why a car's headlights dim when you start the engine — starter motor draws huge current, voltage dips. When the battery is old, internal resistance increases, and it can't deliver enough current.",
      },
      {
        title: "Kirchhoff's Laws — Circuit Solving",
        body:
          "Kirchhoff's Current Law (KCL): the sum of currents entering a junction equals the sum leaving. Conservation of charge. Kirchhoff's Voltage Law (KVL): the sum of voltage drops around any closed loop equals the sum of EMFs in that loop. Conservation of energy. These two laws let you solve any circuit, no matter how complex. Assign currents, write KCL at junctions, write KVL for loops, solve the equations.",
      },
    ],
    keyPoints: [
      "Current I = Q/t, measured in amperes",
      "Ohm's law: V = IR (at constant temperature)",
      "Resistance R = ρL/A, where ρ is resistivity",
      "Series: R_eq = R₁ + R₂ + ..., same current",
      "Parallel: 1/R_eq = 1/R₁ + 1/R₂ + ..., same voltage",
      "EMF ε = terminal voltage when no current flows",
      "Terminal voltage V = ε − Ir (r = internal resistance)",
      "KCL: ΣI_in = ΣI_out; KVL: Σε = ΣIR in a loop",
    ],
    importantQuestions: [
      "A wire of resistance 5 Ω is stretched to double its length. Find new resistance.",
      "Three resistors 2 Ω, 3 Ω, and 6 Ω are connected in parallel. Find equivalent resistance.",
      "State and explain Kirchhoff's laws with an example circuit.",
      "A battery of EMF 12 V and internal resistance 1 Ω is connected to a 5 Ω resistor. Find current and terminal voltage.",
    ],
  },

  magnetism: {
    overview:
      "Ever played with a compass and noticed how it always points north? That's Earth's magnetic field at work. This chapter is about magnetic fields — how they're created by electric currents, how they affect moving charges, and why some materials are magnetic while others aren't. It's the physics behind electric motors, MRI machines, and your phone's speaker.",
    concepts: [
      {
        title: "Magnetic Field and Lorentz Force",
        body:
          "Magnetic fields (B) are regions where moving charges experience force. The Lorentz force on a charge q moving with velocity v in magnetic field B is F = q(v × B) — it's a cross product, so the force is perpendicular to both v and B. That means magnetic force does NO work (it changes direction, not speed). The unit is tesla (T). Earth's magnetic field is about 5×10⁻⁵ T. A fridge magnet is about 0.01 T.",
      },
      {
        title: "Biot-Savart Law — How Currents Make Fields",
        body:
          "The Biot-Savart law tells you the magnetic field produced by a small segment of current-carrying wire. dB = (μ₀/4π) × (Idl × r̂)/r². μ₀ = 4π×10⁻⁷ T·m/A is the permeability of free space. For a long straight wire: B = μ₀I/(2πr) — field circles around the wire. Right-hand thumb rule: thumb points in current direction, fingers curl in field direction.",
      },
      {
        title: "Ampere's Circuital Law",
        body:
          "Ampere's law is like Gauss's law for magnetism: ∮ B·dl = μ₀I_enclosed. The line integral of the magnetic field around a closed loop equals μ₀ times the current passing through the loop. It's a shortcut for calculating B in symmetrical situations. For a long solenoid (a coil of wire): B = μ₀nI, where n is the number of turns per meter. Solenoids are used as electromagnets.",
      },
      {
        title: "Force Between Current-Carrying Wires",
        body:
          "Two parallel wires carrying current attract if currents are in the same direction, repel if opposite. The force per unit length: F/L = μ₀I₁I₂/(2πd). This is because each wire creates a magnetic field that affects the other. This is the definition of the ampere — 1 A is the current that produces a force of 2×10⁻⁷ N/m between two parallel wires 1 m apart.",
      },
      {
        title: "Magnetic Materials — Dia, Para, and Ferro",
        body:
          "Diamagnetic materials (copper, bismuth) are weakly repelled by magnets — all materials have this. Paramagnetic materials (aluminum, oxygen) are weakly attracted. Ferromagnetic materials (iron, nickel, cobalt) are strongly attracted and can become permanent magnets. Ferromagnetic materials have domains — regions where atomic magnetic moments align. When you magnetize iron, all domains align in the same direction. Curie temperature: above this, ferromagnetic materials become paramagnetic.",
      },
    ],
    keyPoints: [
      "Lorentz force: F = q(v × B) — force perpendicular to velocity and field",
      "Right-hand thumb rule: current → thumb, field → curled fingers",
      "Biot-Savart law: dB ∝ Idl × r̂ / r²",
      "Ampere's law: ∮ B·dl = μ₀I_enclosed",
      "Solenoid: B = μ₀nI (uniform field inside)",
      "Force between parallel wires: F/L = μ₀I₁I₂/(2πd)",
      "Ferromagnetic materials have domains that align to become magnets",
    ],
    importantQuestions: [
      "A long straight wire carries 5 A current. Find the magnetic field at a distance of 10 cm from the wire.",
      "State and explain the Biot-Savart law. Use it to find B at the center of a circular current loop.",
      "Derive the expression for force between two parallel current-carrying conductors.",
      "Distinguish between diamagnetic, paramagnetic, and ferromagnetic materials.",
    ],
  },

  "em-waves": {
    overview:
      "Your phone is talking to a tower right now using invisible waves traveling at the speed of light. That's electromagnetic waves — oscillating electric and magnetic fields that carry energy through empty space. This chapter covers the EM spectrum (from radio to gamma rays) and how we use different parts of it for communication. It's basically how the wireless world works.",
    concepts: [
      {
        title: "What Are Electromagnetic Waves?",
        body:
          "EM waves are oscillating electric (E) and magnetic (B) fields perpendicular to each other and to the direction of propagation. They travel at the speed of light c = 3×10⁸ m/s in vacuum. Maxwell figured out that a changing electric field creates a magnetic field, and a changing magnetic field creates an electric field — so they sustain each other. No medium needed: EM waves travel through space. The ratio E/B = c.",
      },
      {
        title: "The Electromagnetic Spectrum",
        body:
          "EM waves range from radio waves (λ meters to km) to gamma rays (λ < 10⁻¹² m). In order of increasing frequency (decreasing wavelength): radio → microwave → infrared → visible → ultraviolet → X-rays → gamma rays. Radio: communication. Microwave: radar, cooking. Infrared: heat, remote controls. Visible: what our eyes see. UV: cause sunburn, sterilize. X-rays: medical imaging. Gamma: cancer treatment, astronomy.",
      },
      {
        title: "Communication — How Signals Travel",
        body:
          "For communication, we encode information onto a carrier wave (high frequency) through modulation. Amplitude Modulation (AM): vary the amplitude of the carrier. Frequency Modulation (FM): vary the frequency. AM is simpler but more noisy; FM gives better quality. Bandwidth is the range of frequencies a signal occupies. The antenna size needed is roughly λ/4 — that's why TV towers are tall (low frequency = large antenna).",
      },
      {
        title: "Propagation of EM Waves",
        body:
          "Ground waves follow Earth's surface (used for AM radio, up to a few hundred km). Sky waves reflect off the ionosphere (used for shortwave radio, can go thousands of km). Space waves travel in straight lines (line of sight) — used for TV, FM, and satellites. For space waves, the range depends on tower height: d = √(2Rh), where R is Earth's radius and h is antenna height. Higher tower = longer range.",
      },
      {
        title: "Satellite Communication",
        body:
          "Geostationary satellites orbit at about 36,000 km above the equator, matching Earth's rotation. They look stationary from the ground — perfect for TV broadcasting, weather monitoring, and communication. The uplink frequency is higher than downlink (to avoid interference). A satellite acts as a repeater in the sky — receives signal, amplifies it, and retransmits it back to Earth. Three geostationary satellites can cover the entire Earth.",
      },
    ],
    keyPoints: [
      "EM waves have E and B fields perpendicular to each other and to direction of travel",
      "Speed of EM waves in vacuum: c = 3×10⁸ m/s",
      "EM spectrum (increasing f): Radio, Microwave, IR, Visible, UV, X-ray, Gamma",
      "AM: amplitude varies; FM: frequency varies (better quality)",
      "Ground waves: follow Earth; Sky waves: reflect from ionosphere; Space waves: line of sight",
      "Antenna height determines range for space waves: d = √(2Rh)",
      "Geostationary satellites at ~36,000 km altitude, T = 24 hours",
    ],
    importantQuestions: [
      "Arrange the following in order of increasing frequency: infrared, gamma rays, radio waves, visible light, X-rays.",
      "Distinguish between AM and FM radio.",
      "What is the height of a TV tower if the range is 40 km? (R = 6400 km)",
      "Explain how a geostationary satellite is used for communication.",
    ],
  },

  semiconductors: {
    overview:
      "Every electronic device around you — phone, laptop, TV, calculator — runs on semiconductors. These materials are neither good conductors nor good insulators. By adding tiny impurities (doping), we can control how they conduct electricity. This chapter is about diodes, transistors, and the physics behind the chips that power our world. It's pretty much magic... but it's real.",
    concepts: [
      {
        title: "Conductors, Insulators, and Semiconductors",
        body:
          "Conductors (copper, aluminum) have lots of free electrons and low resistivity. Insulators (rubber, glass) have almost no free electrons — they don't conduct. Semiconductors (silicon, germanium) are in between. Their conductivity increases with temperature (opposite of metals!) and can be controlled by doping — adding tiny amounts of impurities. At absolute zero, silicon is an insulator. At room temperature, some electrons jump to the conduction band and it conducts a little.",
      },
      {
        title: "Intrinsic and Extrinsic Semiconductors",
        body:
          "Pure silicon is an intrinsic semiconductor — equal numbers of electrons and holes (missing electrons act as positive charge carriers). By doping, we get extrinsic semiconductors. N-type: add phosphorus (5 valence electrons) → extra free electrons. P-type: add boron (3 valence electrons) → extra holes. In n-type, electrons are majority carriers; in p-type, holes are majority carriers. The doping concentration determines conductivity.",
      },
      {
        title: "The P-N Junction — Where Magic Happens",
        body:
          "When you bring p-type and n-type silicon together, a depletion region forms at the junction — electrons from n-side diffuse to p-side and recombine with holes. This creates an internal electric field that prevents further diffusion. In forward bias (p connected to +, n to −), the depletion region shrinks and current flows. In reverse bias (p to −, n to +), the depletion region widens and almost no current flows. This one-way behavior is the basis of the diode.",
      },
      {
        title: "Diodes and Their Applications",
        body:
          "A diode allows current in only one direction. It's like a one-way valve for electricity. Rectification: converting AC to DC using diodes. A half-wave rectifier uses one diode and passes only one half of the AC cycle. A full-wave rectifier uses four diodes (bridge rectifier) and converts both halves — much more efficient. Zener diodes are designed to work in reverse breakdown — they maintain constant voltage, making them great voltage regulators.",
      },
      {
        title: "Transistors — The Amplifier and Switch",
        body:
          "A transistor is essentially a sandwich of semiconductors — either n-p-n or p-n-p. The three terminals: emitter, base, collector. A small current at the base controls a much larger current between collector and emitter — that's amplification. In a common-emitter configuration, current gain β = I_C/I_B. Transistors can also act as switches (on/off) — that's how logic gates and computers work. The base input controls whether the transistor is in cutoff (off) or saturation (on).",
      },
    ],
    keyPoints: [
      "Semiconductors: conductivity between conductors and insulators",
      "Intrinsic: pure Si/Ge with equal electrons and holes",
      "N-type: doped with pentavalent atoms (extra electrons)",
      "P-type: doped with trivalent atoms (extra holes)",
      "P-N junction: allows current only in forward bias",
      "Forward bias: depletion region decreases; Reverse bias: depletion region increases",
      "Diode used for rectification (AC → DC)",
      "Transistor: three-terminal device for amplification and switching",
      "Current gain β = I_C/I_B in common-emitter configuration",
    ],
    importantQuestions: [
      "Explain the formation of the depletion region in a p-n junction.",
      "Draw and explain the circuit diagram of a full-wave rectifier.",
      "What is a Zener diode? Explain its use as a voltage regulator.",
      "In a common-emitter transistor circuit, I_B = 50 μA and I_C = 4 mA. Find β.",
      "Distinguish between intrinsic and extrinsic semiconductors.",
    ],
  },
};

export default content;
