interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "rotational-dynamics": {
    overview:
      "Ever wondered why a figure skater spins faster when they pull their arms in? That's rotational dynamics in action. This chapter is all about stuff that spins — from wheels to planets — and the rules that govern their motion.",
    concepts: [
      {
        title: "Moment of Inertia",
        body:
          "Moment of inertia is basically the rotational version of mass. Think of it as how hard it is to get something spinning. A heavy door is hard to push open because it has high moment of inertia. But here's the twist — it doesn't just depend on mass, it depends on where the mass is. Mass farther from the axis makes it way harder to spin. That's why a tightrope walker uses a long pole — the mass at the ends keeps them from rotating and falling off.",
      },
      {
        title: "Radius of Gyration",
        body:
          "Imagine you took all the mass of an object and squished it into a single point at some distance from the axis. That distance is the radius of gyration. It's a shortcut to describe how spread out the mass is. Smaller radius of gyration = easier to spin. Simple.",
      },
      {
        title: "Torque and Angular Momentum",
        body:
          "Torque is the twisty cousin of force. When you open a bottle cap, you're applying torque. Angular momentum is the spin equivalent of regular momentum. And here's the cool part — if no outside torque acts on something, its angular momentum stays constant. That's why a spinning top doesn't fall immediately, and why planets keep orbiting. Conservation of angular momentum is everywhere.",
      },
      {
        title: "Rolling Motion",
        body:
          "Rolling is when something rotates and moves forward at the same time — like a tyre on a road. The bottom of the wheel is momentarily at rest relative to the ground (that's why there's grip). Rolling without slipping is a neat combo of translational and rotational motion. The kinetic energy splits between moving forward and spinning. That's why a rolling object takes longer to stop than one that's just sliding.",
      },
    ],
    keyPoints: [
      "Moment of inertia (I) depends on mass AND where it's distributed — not just how much mass there is.",
      "Radius of gyration (K) is the distance where all mass could be concentrated to get the same I.",
      "Torque = rate of change of angular momentum. No torque = angular momentum stays put.",
      "Rolling without slipping means v = ωr at every instant.",
      "Parallel and perpendicular axis theorems help find I for weird shapes.",
      "A body with lower I spins up faster for the same torque.",
    ],
    importantQuestions: [
      "A solid sphere and a hollow sphere of the same mass and radius roll down an incline. Which reaches the bottom first? Why?",
      "Derive an expression for the kinetic energy of a rolling body.",
      "State and prove the law of conservation of angular momentum with an example.",
      "Explain why a diver curls into a ball during a somersault and straightens out before entering water.",
    ],
  },

  "mechanical-properties-fluids": {
    overview:
      "Ever noticed how a needle can float on water even though it's metal? Or why honey pours slower than water? That's fluids doing weird, wonderful things. This chapter is about how liquids and gases behave — under pressure, when flowing, and at surfaces.",
    concepts: [
      {
        title: "Pressure and Pascal's Law",
        body:
          "Pressure is just force spread over an area. A sharp needle pierces skin easily because all the force is concentrated on a tiny tip. Pascal's law says if you push on a fluid in a closed container, that pressure spreads everywhere equally. That's how hydraulic lifts work — a small force on a small piston lifts a heavy car on a big piston. It's force multiplication for free.",
      },
      {
        title: "Viscosity",
        body:
          "Viscosity is a fancy word for how sticky a fluid is — how much it resists flowing. Water has low viscosity, honey has high. Imagine stirring a bucket of water vs a bucket of oil. The oil fights back more. That resistance comes from layers of fluid sliding past each other. The faster you try to stir, the more it fights. That's why thick fluids flow slowly through pipes.",
      },
      {
        title: "Surface Tension",
        body:
          "Surface tension is why water forms droplets and why some insects can walk on water. The molecules at the surface of a liquid are pulled inward by the molecules below, creating a sort of elastic skin. It's like a stretched trampoline — it wants to shrink to the smallest possible area. That's why droplets are spherical. Soap reduces surface tension, which is why soap bubbles form easily.",
      },
      {
        title: "Bernoulli's Principle",
        body:
          "Bernoulli noticed something weird — when a fluid flows faster, its pressure drops. Think of air rushing over an airplane wing. The top is curved, so air moves faster there, creating lower pressure. Higher pressure below pushes the wing up. That's lift. It's also why a shower curtain gets sucked inward when you turn the water on — fast-moving water creates low pressure nearby.",
      },
    ],
    keyPoints: [
      "Pascal's law: Pressure applied to an enclosed fluid transmits equally in all directions.",
      "Viscosity is the internal friction between fluid layers. It depends on temperature — heating oil makes it less viscous.",
      "Surface tension makes liquid surfaces behave like stretched membranes.",
      "Bernoulli: Faster flow = lower pressure. Slower flow = higher pressure.",
      "Stokes' law gives the viscous drag force on a sphere moving through a fluid.",
      "The terminal velocity of a falling object in a fluid is when weight = buoyant force + drag.",
    ],
    importantQuestions: [
      "Explain why a needle floats on water despite being denser than water.",
      "State Bernoulli's principle and give two real-life applications.",
      "Derive the expression for terminal velocity of a sphere falling through a viscous fluid.",
      "What is the difference between laminar and turbulent flow? What is Reynolds number?",
    ],
  },

  "kinetic-theory-gases": {
    overview:
      "Ever wondered why a pressure cooker cooks food faster? Or why a balloon shrinks when you put it in the fridge? It all comes down to tiny gas molecules zipping around. This chapter connects the microscopic world of bouncing molecules to the macroscopic things we can measure — pressure, temperature, and volume.",
    concepts: [
      {
        title: "Gas Laws (Boyle, Charles, Gay-Lussac)",
        body:
          "These are the simple relationships between pressure, volume, and temperature of a gas. Boyle said if you squeeze a gas (reduce volume), pressure goes up — as long as temperature stays the same. Think of squishing a balloon. Charles said heat a gas and it expands — like a hot air balloon rising. Gay-Lussac said if you heat a gas in a fixed container, pressure goes up. That's why tyre pressure increases after a long drive.",
      },
      {
        title: "Ideal Gas Equation",
        body:
          "PV = nRT. That's the big one. It combines all three gas laws into one neat equation. P is pressure, V is volume, T is temperature, n is number of moles, and R is just a constant (8.314). If you know any three of these, you can find the fourth. It's the Swiss Army knife of gas problems.",
      },
      {
        title: "Kinetic Theory Basics",
        body:
          "Here's the picture: gases are made of tiny molecules moving randomly in all directions. They crash into walls — that's what we call pressure. Higher temperature means faster molecules, more crashes, harder crashes. The theory assumes molecules are tiny points that don't attract each other and collisions are perfectly elastic (no energy lost). Not perfectly true for real gases, but close enough for most situations.",
      },
      {
        title: "Degrees of Freedom and Blackbody Radiation",
        body:
          "Degrees of freedom is just a count of how many ways a molecule can move and store energy. A single atom can move in 3 directions (x, y, z) — that's 3 degrees. A diatomic molecule can also spin and vibrate. Blackbody radiation is connected here because energy distribution follows similar statistical rules. A perfect blackbody absorbs all radiation and emits a spectrum that depends only on its temperature. That's why glowing iron goes from red to white as it gets hotter.",
      },
    ],
    keyPoints: [
      "Boyle's law: PV = constant (at constant T). Charles: V ∝ T (at constant P).",
      "Ideal gas equation: PV = nRT. R = 8.314 J/mol·K.",
      "Pressure is caused by gas molecules colliding with container walls.",
      "Average kinetic energy of a gas molecule ∝ absolute temperature.",
      "RMS speed of gas molecules depends on temperature and molar mass.",
      "A blackbody emits radiation whose peak wavelength shifts with temperature (Wien's law).",
    ],
    importantQuestions: [
      "Derive the ideal gas equation using kinetic theory.",
      "What is the RMS speed of oxygen molecules at 27°C?",
      "Explain blackbody radiation and why heated metals change color as temperature increases.",
      "State the law of equipartition of energy and give its applications.",
    ],
  },

  "thermodynamics": {
    overview:
      "Think of a hot cup of chai cooling down on a winter morning. Why does it cool? Where does the heat go? Thermodynamics is the study of energy — how it flows, how it transforms, and why some things are just impossible (like a cold cup of chai spontaneously heating up). It's the physics of 'what goes where'.",
    concepts: [
      {
        title: "Zeroth and First Laws",
        body:
          "The zeroth law just says if A is at the same temperature as B, and B is at the same temperature as C, then A and C are at the same temperature. Obvious? Yeah, but you need to say it for everything else to make sense. The first law is more interesting: energy can't be created or destroyed, only converted. Mathematically, ΔU = Q - W. The change in internal energy equals heat added minus work done. If you add heat to a gas in a piston, the gas either gets hotter (ΔU increases) or expands (does work), or both.",
      },
      {
        title: "Second Law and Entropy",
        body:
          "The second law is the one that says some things just won't happen. Heat flows from hot to cold, never the other way around. You can't unscramble an egg. Entropy is a measure of disorder, and the second law says total entropy always increases. Think of your room — it naturally gets messier over time. You have to put in effort to clean it. The universe is the same way. Energy spreads out and things become more disordered.",
      },
      {
        title: "Heat Engines and Refrigerators",
        body:
          "A heat engine takes heat from a hot place, does some work (like turning a wheel), and dumps the leftover heat somewhere cooler. A car engine is a classic example — hot burning gases push pistons, and exhaust carries away waste heat. No engine can be 100% efficient because some heat always has to be dumped. A refrigerator is a heat engine running backwards — it uses work to pump heat from a cold place to a hot place. That's why the back of your fridge feels warm.",
      },
      {
        title: "Carnot Cycle",
        body:
          "The Carnot cycle is the theoretical best any heat engine can do. It's an ideal cycle with two isothermal (constant temperature) and two adiabatic (no heat exchange) processes. Think of it as the gold standard — no real engine can beat a Carnot engine. Its efficiency depends only on the temperatures of the hot and cold reservoirs. Hotter source and colder sink = better efficiency. Real engines try to get as close to Carnot efficiency as possible.",
      },
    ],
    keyPoints: [
      "First law: ΔU = Q - W. Energy is conserved.",
      "Second law: Heat flows spontaneously from hot to cold. Entropy of the universe always increases.",
      "Heat engine efficiency η = 1 - Q₂/Q₁. Can never be 100%.",
      "Carnot efficiency η = 1 - T₂/T₁ (temperatures in Kelvin).",
      "Refrigerators and heat pumps are heat engines in reverse.",
      "Entropy is a measure of randomness/disorder. ΔS = Q/T for reversible processes.",
    ],
    importantQuestions: [
      "State and explain the first law of thermodynamics. Apply it to an isothermal and adiabatic process.",
      "What is a Carnot engine? Derive the expression for its efficiency.",
      "Explain why 100% efficient heat engine is impossible using the second law.",
      "Calculate the change in entropy when 1 kg of ice at 0°C melts into water.",
    ],
  },

  "oscillations": {
    overview:
      "Think of a swing moving back and forth, or a guitar string vibrating after you pluck it. That repeated motion — to and fro, around a center point — is oscillation. This chapter is about why things keep moving back and forth, and how to describe that motion mathematically without losing your mind.",
    concepts: [
      {
        title: "Simple Harmonic Motion (SHM)",
        body:
          "SHM is the smoothest, most natural kind of oscillation. Imagine a mass on a spring. Pull it, let go — it bounces back and forth. The cool thing is the force bringing it back is proportional to how far you pulled it. More pull = more force back. That's Hooke's law. The motion follows a sine or cosine wave — smooth and predictable. The time for one complete back-and-forth is called the period, and it stays constant no matter how big the swing (for small swings, at least).",
      },
      {
        title: "Parameters of SHM",
        body:
          "Amplitude is how far the thing moves from center — the maximum displacement. Angular frequency (ω) is how fast it oscillates in radians per second. Phase tells you where in the cycle it starts. Think of a Ferris wheel — amplitude is the radius, frequency is how many rotations per second, and phase is whether you start at the top or bottom. All three together completely describe any SHM. The equation looks scary: x = A sin(ωt + φ), but it's really just describing a circle projected onto a line.",
      },
      {
        title: "Energy in SHM",
        body:
          "In SHM, energy keeps swapping forms. At the extremes (maximum displacement), all energy is stored as potential energy — like a stretched spring ready to snap back. At the center (equilibrium), it's all kinetic energy — maximum speed. The total energy stays constant (if there's no friction). It's like a playground swing — at the highest point, you're moving slow (mostly potential), at the bottom, you're fastest (mostly kinetic).",
      },
      {
        title: "Simple Pendulum",
        body:
          "A simple pendulum is just a weight hanging from a string. For small swings (less than about 15°), it behaves like SHM. The time period depends only on the length of the string and gravity — not on the mass of the bob or how big the swing is. That's why a heavier person and a lighter person on swings of the same length have the same time period. Longer string = slower swing. That's how pendulum clocks work — adjust the length to change the timing.",
      },
    ],
    keyPoints: [
      "SHM happens when restoring force ∝ displacement (F = -kx).",
      "x = A sin(ωt + φ) is the general equation of SHM. A = amplitude, ω = angular frequency.",
      "Time period T = 2π/ω. Frequency f = 1/T.",
      "In SHM, energy keeps oscillating between kinetic and potential. Total energy = ½kA² (constant).",
      "Simple pendulum: T = 2π√(L/g). Period doesn't depend on mass.",
      "At equilibrium, velocity is maximum and acceleration is zero. At extremes, vice versa.",
    ],
    importantQuestions: [
      "Derive the expression for the time period of a simple pendulum.",
      "A particle executes SHM with amplitude A. At what displacement from mean position is its kinetic energy equal to potential energy?",
      "Show that the total energy of a body in SHM remains constant.",
      "The length of a simple pendulum is increased by 4%. Find the percentage change in its time period.",
    ],
  },

  "superposition-waves": {
    overview:
      "Have you ever been on a swing and someone pushed you at exactly the right moment, making you go higher? That's superposition in action. When two waves meet, they just add up — simple as that. But this simple idea explains everything from the music of a guitar to why some spots on a wall are quieter than others.",
    concepts: [
      {
        title: "Principle of Superposition",
        body:
          "Here's the rule: when two waves overlap at a point, their displacements just add together. No complicated interaction, no fighting — they just combine. If both push up, you get a bigger upward displacement. If one pushes up and the other pushes down equally, they cancel out and you get nothing. After they pass through each other, each wave continues exactly as before, like nothing happened. Waves are polite like that — they share space without hogging it.",
      },
      {
        title: "Interference",
        body:
          "Interference is what happens when two waves from different sources meet. Constructive interference happens when crest meets crest — they add up to make a bigger wave. Destructive interference happens when crest meets trough — they cancel. You've seen this in soap bubbles — the rainbow colors come from light waves reflecting off the top and bottom surfaces of the bubble film interfering. Some colors cancel out, and others get brighter. That's why you see those swirling patterns.",
      },
      {
        title: "Beats",
        body:
          "Beats happen when two waves of slightly different frequencies overlap. The combined wave gets alternately louder and softer — that wobbling sound. Imagine two tuning forks, one at 256 Hz and one at 260 Hz. The sound will pulse 4 times per second (the difference in frequencies). Musicians use this to tune instruments — when two strings are perfectly in tune, the beats disappear. No wobble = perfect pitch.",
      },
      {
        title: "Stationary (Standing) Waves",
        body:
          "When a wave reflects back and meets its own reflection, you get a standing wave. It looks like the wave is frozen in place, vibrating in segments. There are points that never move (nodes) and points that vibrate with maximum amplitude (antinodes). Think of a jump rope held at both ends — when you shake it just right, it forms a stable pattern. This is exactly how a guitar string works — the string vibrates in standing wave patterns to produce different notes.",
      },
    ],
    keyPoints: [
      "Superposition: displacements of overlapping waves add algebraically.",
      "Constructive interference: path difference = nλ. Destructive: path difference = (n+½)λ.",
      "Beat frequency = |f₁ - f₂|. Beats are used for tuning musical instruments.",
      "Standing waves have nodes (zero displacement) and antinodes (max displacement).",
      "For a string fixed at both ends, resonance happens at L = nλ/2.",
      "In an open pipe, both ends are antinodes. In a closed pipe, one end is a node, the other an antinode.",
    ],
    importantQuestions: [
      "Explain the formation of beats and derive the expression for beat frequency.",
      "Distinguish between stationary and progressive waves.",
      "A string of length 1 m is vibrating in its second harmonic. If the wave speed is 200 m/s, find the frequency.",
      "Two sound waves of frequencies 256 Hz and 260 Hz are produced together. Calculate the number of beats per second.",
    ],
  },

  "wave-optics": {
    overview:
      "You know how light usually travels in straight lines? Well, it doesn't always. Sometimes it bends around corners, cancels itself out, or decides it only wants to go through certain directions. Wave optics is about treating light as a wave — and that explains all the weird stuff geometric optics can't.",
    concepts: [
      {
        title: "Huygens Principle",
        body:
          "Huygens said every point on a wavefront acts like a tiny source of new waves. Think of dropping a pebble in a pond — each point on the ripples creates its own little ripples. The new wavefront is just the combined effect of all these tiny ripples. It sounds abstract, but it's a powerful way to predict how light bends when it hits a slit, a corner, or goes through a lens. It's the foundation of wave optics.",
      },
      {
        title: "Diffraction",
        body:
          "Diffraction is when light bends around obstacles. If light were just rays, you'd get sharp shadows. But instead, edges look fuzzy because light bends around them. The coolest demo is shining light through a narrow slit. The light doesn't just go straight through — it spreads out into a pattern of bright and dark bands. The narrower the slit, the more it spreads. That's why you can't see tiny details with a microscope smaller than the wavelength of light — the light just bends around them.",
      },
      {
        title: "Polarization",
        body:
          "Normal light vibrates in all directions perpendicular to its motion. Polarization is filtering out all except one direction. Imagine a rope tied to a wall. If you shake it up and down, waves travel along it. Now put a picket fence in the middle — only waves vibrating in the direction of the gaps get through. That's what a polaroid filter does. Polarized sunglasses block horizontally vibrating light (glare from roads and water) and let vertical light through. That's why they reduce glare.",
      },
      {
        title: "Resolving Power",
        body:
          "Resolving power is a fancy term for 'how close can two things be and still look like two separate things?' If two stars are too close together, a telescope might see them as one blob. The limit comes from diffraction — whenever light passes through an opening, it spreads. Rayleigh's criterion says two images are just resolved when the central bright spot of one falls on the first minimum of the other. Bigger aperture = better resolution. That's why telescopes have huge mirrors.",
      },
    ],
    keyPoints: [
      "Huygens principle: every point on a wavefront is a source of secondary wavelets.",
      "Diffraction: bending of light around obstacles. Width of central maximum ∝ λ/a.",
      "Polarization: restricting light vibrations to one plane. Only transverse waves can be polarized.",
      "Brewster's angle: when reflected light is completely polarized.",
      "Rayleigh's criterion determines the limit of resolution for optical instruments.",
      "In a double-slit experiment, fringe width β = λD/d.",
    ],
    importantQuestions: [
      "What is diffraction of light? Derive the condition for minima in single-slit diffraction.",
      "Explain polarization by reflection. State Brewster's law.",
      "Distinguish between interference and diffraction.",
      "Two polaroids are placed at 60° to each other. Find the intensity of transmitted light if incident intensity is I₀.",
    ],
  },

  "electrostatics-12": {
    overview:
      "Ever gotten a shock after rubbing your feet on a carpet and touching a door handle? That's electrostatics — charges sitting still, waiting to jump. This chapter is about what happens when electric charges aren't moving, how they push and pull each other, and how we store that charge for later use.",
    concepts: [
      {
        title: "Gauss's Law",
        body:
          "Gauss's law is a clever way of saying 'the total electric field flowing out of a closed surface depends only on the charge inside.' Imagine blowing soap bubbles around a light bulb — the amount of light passing through the bubble depends only on how bright the bulb is, not on the shape or size of the bubble. Same with electric fields. This law makes it dead simple to calculate fields for symmetrical things like spheres, cylinders, and infinite sheets. No messy integrals needed.",
      },
      {
        title: "Electric Potential and Potential Energy",
        body:
          "Electric potential is like height for charges. A charge at a high potential wants to move to a low potential, just like a ball rolls downhill. The voltage of a battery is the potential difference between its terminals — it tells you how much energy each unit of charge gets as it goes through the battery. Work done to move a charge between two points equals the charge times the potential difference. That's what 'voltage' really means — it's the push that makes charges move.",
      },
      {
        title: "Capacitors",
        body:
          "A capacitor is a charge-storing device — two metal plates separated by a gap. When you connect it to a battery, one plate gets positive and the other negative. They store energy in the electric field between them. Think of it like a water tank — you fill it up (charge it), and later you can release the water (discharge it). Capacitors are everywhere — in camera flashes (quick burst of energy), in power supplies (smoothing out voltage), and in circuits (timing and filtering).",
      },
      {
        title: "Dielectrics",
        body:
          "A dielectric is an insulator you put between capacitor plates. It increases the capacitance significantly. Why? Because the material's molecules polarize — positive and negative ends align opposite to the field. This reduces the effective field inside, allowing more charge to be stored for the same voltage. Think of it as the dielectric 'absorbing' some of the electric field. Different materials have different dielectric constants — higher constant = more charge storage.",
      },
    ],
    keyPoints: [
      "Gauss's law: ∮E·dA = Q/ε₀. The electric flux through a closed surface depends only on enclosed charge.",
      "Electric potential V = kQ/r. Potential difference between two points is the work done per unit charge.",
      "Capacitance C = Q/V. For parallel plate capacitor, C = ε₀A/d.",
      "A capacitor stores energy: U = ½CV².",
      "Dielectric increases capacitance by factor K (dielectric constant).",
      "Capacitors in series: 1/Ceq = 1/C₁ + 1/C₂ + ... In parallel: Ceq = C₁ + C₂ + ...",
    ],
    importantQuestions: [
      "State Gauss's law. Use it to find the electric field due to an infinitely long charged wire.",
      "Derive the expression for the capacitance of a parallel plate capacitor with a dielectric between the plates.",
      "Three capacitors of 2 µF, 3 µF, and 6 µF are connected in series. Find the equivalent capacitance.",
      "Explain the concept of electric potential. Derive an expression for electric potential due to a point charge.",
    ],
  },

  "current-electricity": {
    overview:
      "Electricity is just charges moving through wires. But once you have more than one battery and more than one bulb, things get interesting. This chapter is about how current flows through circuits — how it splits at junctions, how it adds up, and how we measure things like resistance and potential difference.",
    concepts: [
      {
        title: "Kirchhoff's Laws",
        body:
          "Kirchhoff had two simple rules. First: at any junction, the total current coming in equals the total current going out. Current can't pile up at a junction — it's like water in pipes, what flows in must flow out. Second: if you go around any closed loop in a circuit, the total voltage gains (from batteries) equal the total voltage drops (across resistors). Think of a roller coaster — the lift hill gives you potential energy (voltage gain), and the drops and turns use it up (voltage drops). By the time you're back at the start, it all balances out.",
      },
      {
        title: "Wheatstone Bridge and Meter Bridge",
        body:
          "The Wheatstone bridge is a clever circuit to measure an unknown resistance. You set up four resistors in a diamond shape and adjust one until no current flows through the middle. When it's balanced, the ratio of the two resistors on one side equals the ratio on the other. Simple cross-multiplication gives you the unknown value. The meter bridge is just a practical version of the same idea using a long wire. It's like a seesaw — when it's perfectly balanced, the products of opposite sides are equal.",
      },
      {
        title: "Electrical Power and Energy",
        body:
          "Power in a circuit is just voltage times current — P = VI. A 100W bulb running on 220V draws about 0.45A of current. The energy consumed is power multiplied by time. That's what your electricity bill measures — kilowatt-hours (kWh). One kWh is using 1000 watts for one hour. The heat produced in a resistor is I²Rt — that's Joule's law. That's how electric heaters and toasters work — current passing through a high-resistance wire generates heat.",
      },
      {
        title: "Temperature Dependence of Resistance",
        body:
          "Resistance usually increases with temperature for metals. As metals heat up, their atoms vibrate more, making it harder for electrons to flow through. For a typical copper wire, resistance goes up by about 0.4% per degree Celsius. That's why your phone charger cable gets warm when fast charging — the current causes heating, which increases resistance, which causes more heating. For semiconductors like silicon, resistance actually decreases with temperature — more heat frees up more charge carriers.",
      },
    ],
    keyPoints: [
      "Kirchhoff's current law (KCL): ΣI_in = ΣI_out at a junction.",
      "Kirchhoff's voltage law (KVL): ΣVoltage gains = ΣVoltage drops in a closed loop.",
      "Wheatstone bridge balanced when P/Q = R/S. Used to measure unknown resistance.",
      "Meter bridge works on the same principle as Wheatstone bridge using a wire of length 1 m.",
      "Electrical power P = VI = I²R = V²/R.",
      "Resistance of metals increases with temperature. For semiconductors, it decreases.",
    ],
    importantQuestions: [
      "State and explain Kirchhoff's laws. Use them to find the current in each branch of a given circuit.",
      "Describe the principle and working of a Wheatstone bridge. How is a meter bridge used to find unknown resistance?",
      "An electric bulb rated 60 W, 220 V is connected to a 220 V supply. Find the current drawn and resistance of the bulb.",
      "Explain how the resistance of a conductor changes with temperature. Give the relation.",
    ],
  },

  "magnetic-fields-current": {
    overview:
      "Ever noticed how a compass needle moves when you bring it near a wire carrying current? That's because moving charges create magnetic fields. This chapter is all about the connection between electricity and magnetism — every current makes a magnetic field, and magnetic fields push on currents.",
    concepts: [
      {
        title: "Biot-Savart Law",
        body:
          "The Biot-Savart law tells you the magnetic field produced by a tiny piece of current-carrying wire. The field gets weaker as you move farther away (1/r²), and it's strongest in the direction perpendicular to the wire. It's like the smoke from a cigarette — the smoke intensity decreases as you move away, and it's strongest straight above the tip. This law is the starting point for calculating magnetic fields for any current-carrying shape — straight wires, loops, solenoids, you name it.",
      },
      {
        title: "Ampere's Law",
        body:
          "Ampere's law is the magnetic equivalent of Gauss's law. It says the total magnetic field around any closed loop is proportional to the current passing through the loop. If you wrap an imaginary loop around a current-carrying wire, the magnetic field along that loop times the loop length equals μ₀ times the current inside. It's the easiest way to find the magnetic field for symmetrical situations — straight wires, solenoids, toroids. No messy integration required.",
      },
      {
        title: "Force on a Current in a Magnetic Field",
        body:
          "A current-carrying wire in a magnetic field feels a force. That's the motor effect. The force depends on the current, the length of wire in the field, the strength of the magnetic field, and the angle between the wire and the field. Maximum force when the wire is perpendicular to the field, zero when it's parallel. This is how electric motors work — loops of wire in a magnetic field experience forces that make them spin. It's also how speakers work — current in a coil creates a force that moves the speaker cone.",
      },
      {
        title: "Solenoids and Toroids",
        body:
          "A solenoid is just a coil of wire. When current flows through it, it produces a nearly uniform magnetic field inside, like a bar magnet. One end acts as north pole, the other as south. The field inside depends only on the number of turns per unit length and the current — not on the diameter. A toroid is a solenoid bent into a donut shape. Its magnetic field is confined entirely within the donut. Solenoids are used in electromagnets, doorbells, and relays — anywhere you need to convert electrical current into mechanical motion.",
      },
    ],
    keyPoints: [
      "Biot-Savart law gives magnetic field due to a current element: dB = (μ₀/4π)(Idℓ×r̂/r²).",
      "Ampere's law: ∮B·dℓ = μ₀I_enclosed.",
      "Force on a current-carrying conductor: F = BIL sinθ. Direction given by Fleming's left-hand rule.",
      "Magnetic field inside a solenoid B = μ₀nI, where n = N/L.",
      "A current loop acts as a magnetic dipole with magnetic moment m = NIA.",
      "Moving coil galvanometer uses the torque on a current loop in a magnetic field to measure current.",
    ],
    importantQuestions: [
      "State Ampere's law. Use it to find the magnetic field inside a solenoid and a toroid.",
      "Derive the expression for the force between two parallel current-carrying conductors.",
      "Explain the working of a moving coil galvanometer. How is it converted into an ammeter and voltmeter?",
      "A circular coil of radius 10 cm has 100 turns and carries a current of 5 A. Find the magnetic field at its centre.",
    ],
  },

  "magnetic-materials": {
    overview:
      "Why is iron magnetic but copper isn't? Why does a fridge magnet lose its strength over time? And what makes some materials float above a magnet? This chapter is about how different materials respond to magnetic fields — some love them, some ignore them, and some actively push them away.",
    concepts: [
      {
        title: "Diamagnetism",
        body:
          "Diamagnetic materials weakly repel magnetic fields. Water, copper, gold, and bismuth are diamagnetic. When you bring a magnet near them, they create a tiny opposing magnetic field inside. It's like they're saying 'stay away.' The effect is super weak — you won't notice it with a fridge magnet. But with a strong enough magnet, you can make a drop of water levitate. That's right — water floats above a magnet because it's diamagnetic. It looks like magic, but it's just physics.",
      },
      {
        title: "Paramagnetism",
        body:
          "Paramagnetic materials are weakly attracted to magnets. Aluminum, platinum, and oxygen are paramagnetic. Their atoms have unpaired electrons that act like tiny magnets, but they're all oriented randomly. When you bring an external magnet, these tiny atomic magnets try to align with it — like compass needles in a magnetic field. But the effect is weak because thermal jiggling keeps knocking them out of alignment. Cool the material down, and the alignment gets stronger.",
      },
      {
        title: "Ferromagnetism",
        body:
          "Ferromagnetic materials — iron, nickel, cobalt — are the strong ones. They can be permanently magnetized. Why? Because they have domains — microscopic regions where all the atomic magnets are already aligned. In an unmagnetized piece of iron, these domains point in random directions. Apply a magnetic field, and the domains that are already aligned grow, swallowing the misaligned ones. The result is a strong net magnetization. That's why you can magnetize an iron nail by stroking it with a magnet. And why heating it above a certain temperature (Curie temperature) destroys the magnetism — the domains break apart from thermal vibrations.",
      },
      {
        title: "Hysteresis",
        body:
          "Hysteresis is the memory of magnetic materials. When you magnetize a piece of iron and then remove the field, it doesn't return to zero magnetization — it stays partly magnetized. To demagnetize it, you need to apply a field in the opposite direction. Plotting magnetization vs applied field gives you a loop — the hysteresis loop. Materials with wide loops (hard magnets) are used for permanent magnets. Materials with narrow loops (soft magnets) are used for transformer cores — they need to magnetize and demagnetize easily without wasting energy.",
      },
    ],
    keyPoints: [
      "Diamagnetic materials are repelled by magnets. They have no unpaired electrons. χ < 0.",
      "Paramagnetic materials are weakly attracted. They have unpaired electrons. χ > 0 but small.",
      "Ferromagnetic materials are strongly attracted. They have domains of aligned magnetic moments.",
      "Curie temperature: above this, ferromagnetic materials become paramagnetic.",
      "Hysteresis: the lag between magnetization and applied field. Area of loop = energy lost per cycle.",
      "Soft iron (narrow hysteresis) is used in transformers. Steel (wide hysteresis) is used for permanent magnets.",
    ],
    importantQuestions: [
      "Distinguish between dia-, para-, and ferromagnetic materials with examples.",
      "Explain the domain theory of ferromagnetism. What is Curie temperature?",
      "What is hysteresis? Draw and explain the B-H curve for a ferromagnetic material.",
      "Why is soft iron used for electromagnets and transformer cores while steel is used for permanent magnets?",
    ],
  },

  "electromagnetic-induction": {
    overview:
      "Remember how moving charges create magnetic fields? Well, it works the other way too — changing magnetic fields create electricity. That's electromagnetic induction. It's the reason generators work, transformers hum, and induction cooktops heat your food without any flame. This chapter is about the beautiful dance between electricity and magnetism.",
    concepts: [
      {
        title: "Faraday's Law",
        body:
          "Faraday discovered that a changing magnetic field induces a voltage in a nearby conductor. Move a magnet into a coil of wire — you get a voltage. Move it out — you get a voltage in the opposite direction. The faster you move it, the bigger the voltage. The more turns in the coil, the bigger the voltage. Faraday's law says the induced voltage equals the rate of change of magnetic flux. Flux is just the amount of magnetic field passing through the coil. Change the field, change the area, or change the angle — any of these creates an induced voltage.",
      },
      {
        title: "Lenz's Law",
        body:
          "Lenz's law tells you which way the induced current flows. It always flows in a direction that opposes the change that caused it. If a magnet approaches a coil, the induced current creates a magnetic field that pushes the magnet away. If the magnet moves away, the induced current tries to pull it back. It's like a stubborn friend — whatever you try to do, they resist. Lenz's law is really just the law of conservation of energy in disguise. If the induced current helped the change, you'd get energy from nowhere, which isn't possible.",
      },
      {
        title: "Self and Mutual Inductance",
        body:
          "Self-inductance is when a changing current in a coil induces a voltage in the same coil. The coil basically fights its own current changes — it's called 'back emf.' That's why you can't change the current through an inductor instantly — the inductor resists. Mutual inductance is when a changing current in one coil induces a voltage in a nearby coil. That's how a transformer works — AC current in the primary coil creates a changing magnetic field that induces a voltage in the secondary coil. The voltage can be stepped up or down just by changing the number of turns.",
      },
      {
        title: "Eddy Currents",
        body:
          "Eddy currents are loops of induced current that flow inside a bulk piece of metal exposed to a changing magnetic field. They're like tiny whirlpools of electricity. They cause heating — that's how induction cooktops work (the pan itself becomes the heating element). They also cause braking — some trains use eddy current brakes, where magnets induce currents in the metal wheels, and the interaction slows the train without contact. But eddy currents also waste energy in transformers. That's why transformer cores are laminated — thin sheets with insulation between them break up the eddy current paths and reduce losses.",
      },
    ],
    keyPoints: [
      "Faraday's law: |ε| = dΦ/dt. The induced emf equals the rate of change of magnetic flux.",
      "Lenz's law: Induced current opposes the change causing it. It's conservation of energy.",
      "Magnetic flux Φ = BA cosθ. B = magnetic field, A = area, θ = angle between B and normal.",
      "Self-inductance L: ε = -L di/dt. An inductor stores energy: U = ½LI².",
      "Mutual inductance M: ε₂ = -M di₁/dt. Used in transformers.",
      "Eddy currents are induced current loops in bulk metal. Minimized by laminating transformer cores.",
    ],
    importantQuestions: [
      "State and explain Faraday's laws of electromagnetic induction. Derive the expression for induced emf.",
      "State Lenz's law. Show that it is consistent with the law of conservation of energy.",
      "Describe the working principle of an AC generator (alternator) with a neat diagram.",
      "A coil of self-inductance 5 H carries a current of 2 A. Find the energy stored in the magnetic field.",
    ],
  },

  "ac-circuits": {
    overview:
      "Ever wondered why your home appliances run on AC and not DC? Or why a fan makes a humming sound? AC circuits are all about voltages and currents that keep flipping direction — 50 times a second in India. This chapter covers what happens when you put resistors, capacitors, and inductors into an AC circuit. Spoiler: they all behave differently.",
    concepts: [
      {
        title: "AC and Phasors",
        body:
          "AC voltage constantly changes like a sine wave — going positive, then negative, then positive again. A phasor is just a rotating arrow that represents this wave. Think of it like a clock hand spinning around — its projection on the x-axis gives you the voltage at any instant. The length of the arrow is the peak voltage, the rotation speed gives you the frequency. Phasors make it way easier to add AC voltages and currents that aren't in sync with each other.",
      },
      {
        title: "LCR Circuits and Impedance",
        body:
          "In an AC circuit, resistance (R), inductive reactance (XL), and capacitive reactance (XC) together form impedance — the total opposition to current. XL = ωL and XC = 1/ωC. These change with frequency. At low frequencies, capacitors block current (high XC). At high frequencies, inductors block current (high XL). The total impedance Z = √(R² + (XL - XC)²). It's like a tug of war — XL and XC oppose each other, while R just does its own thing.",
      },
      {
        title: "Resonance",
        body:
          "Resonance happens when XL equals XC — at that magic frequency, the impedance is minimum (just R), and current is maximum. For an LCR circuit, the resonant frequency is f = 1/(2π√LC). Think of pushing a swing — you get the biggest motion when you push at exactly the natural frequency. Same here — the circuit 'absorbs' the most power at resonance. This is how radio tuners work — you adjust a capacitor to match the resonant frequency to the station you want, filtering out everything else.",
      },
      {
        title: "Power in AC Circuits",
        body:
          "In AC circuits, the voltage and current waves aren't always aligned. There's a phase difference (φ) between them. For a pure resistor, voltage and current are in phase (φ = 0). For a pure inductor, current lags voltage by 90°. For a pure capacitor, current leads voltage by 90°. The real power consumed is P = V_rms × I_rms × cosφ. That cosφ is the power factor. If cosφ = 1 (pure resistive), you're using all the power efficiently. If cosφ = 0 (pure reactive), you're just sloshing energy back and forth, doing no useful work. Low power factor is bad — power companies charge you extra for it.",
      },
    ],
    keyPoints: [
      "AC voltage: V = V₀ sin(ωt). RMS value = V₀/√2. Same for current.",
      "Inductive reactance XL = ωL (increases with frequency). Capacitive reactance XC = 1/ωC (decreases with frequency).",
      "Impedance Z = √(R² + (XL - XC)²). Phase angle tan φ = (XL - XC)/R.",
      "Resonance in LCR circuit: XL = XC, f = 1/(2π√LC). Current is maximum at resonance.",
      "Power in AC: P = V_rms I_rms cosφ. Only the resistive part consumes real power.",
      "Quality factor Q = ω₀L/R. Higher Q means sharper resonance.",
    ],
    importantQuestions: [
      "Derive the expression for impedance and phase angle in an LCR series AC circuit.",
      "What is resonance in an LCR circuit? Derive the condition for resonance and the resonant frequency.",
      "Explain the concept of power factor. How can it be improved?",
      "A 100 µF capacitor is connected across a 230 V, 50 Hz AC supply. Find the capacitive reactance and RMS current.",
    ],
  },

  "dual-nature": {
    overview:
      "Light is a wave. No wait, light is a particle. Actually, it's both. And so are electrons. This chapter is where physics gets properly weird. Light behaves like a particle sometimes, and electrons behave like waves sometimes. The line between 'particle' and 'wave' is completely blurred — it just depends on how you look at it.",
    concepts: [
      {
        title: "Photoelectric Effect",
        body:
          "Shine light on a metal surface, and electrons fly off. That's the photoelectric effect. But here's the weird part — it only happens if the light frequency is above a certain threshold, no matter how bright the light is. Dim blue light works, but super-bright red light doesn't. Einstein explained this by saying light comes in packets (photons) with energy E = hf. Each photon can kick out one electron, but only if its energy is enough to overcome the binding energy (work function) of the metal. Make the light brighter = more photons = more electrons. Make the frequency higher = more energy per photon = faster electrons. This won Einstein a Nobel Prize.",
      },
      {
        title: "Wave-Particle Duality",
        body:
          "Here's the mind-bender: light and matter behave like both waves and particles. Light shows interference (wave behavior) in the double-slit experiment, but it also knocks out electrons in discrete packets (particle behavior). Electrons diffract like waves through a crystal, but they also hit detectors as single points. Which behavior you see depends on what you're measuring. It's like that optical illusion drawing that looks like both a duck and a rabbit — both are true at the same time. Reality is weirder than we imagined.",
      },
      {
        title: "de Broglie Wavelength",
        body:
          "If light can behave like a particle, de Broglie asked, why can't particles behave like waves? He proposed that every moving particle has a wavelength associated with it: λ = h/p, where p is momentum. For a cricket ball, the wavelength is astronomically tiny — way too small to ever detect. But for an electron, it's comparable to atomic spacings. That's why electron microscopes can see things optical microscopes can't — the 'electron wave' is much shorter than light waves, giving much better resolution.",
      },
      {
        title: "Davisson-Germer Experiment",
        body:
          "This was the experiment that proved de Broglie right. Davisson and Germer fired electrons at a nickel crystal and observed a diffraction pattern — exactly like X-rays would produce. It was the smoking gun: electrons really do behave like waves. The wavelength they measured matched de Broglie's formula perfectly. If you ever feel like quantum mechanics is just theoretical nonsense, remember — people have literally observed electrons interfering like waves in a lab.",
      },
    ],
    keyPoints: [
      "Photoelectric effect: light ejects electrons from metal. Threshold frequency depends on the metal.",
      "Einstein's equation: hf = φ + ½mv². hf = photon energy, φ = work function.",
      "Stopping potential V₀ = (h/e)f - φ/e. Used to find Planck's constant.",
      "de Broglie wavelength λ = h/p = h/(mv). Every moving particle has wave nature.",
      "Wave-particle duality: light and matter show both wave and particle properties.",
      "Davisson-Germer experiment confirmed de Broglie's hypothesis using electron diffraction by nickel crystal.",
    ],
    importantQuestions: [
      "Explain the photoelectric effect. How did Einstein explain it? Write the photoelectric equation.",
      "What is de Broglie's hypothesis? Derive the expression for de Broglie wavelength.",
      "Describe the Davisson-Germer experiment and how it confirmed wave nature of electrons.",
      "The work function of sodium is 2.3 eV. Find the maximum kinetic energy of photoelectrons when light of wavelength 400 nm falls on it.",
    ],
  },

  "atoms-nuclei": {
    overview:
      "What's inside an atom? First we thought it was a plum pudding. Then Rutherford shot particles at gold foil and discovered a tiny nucleus. Then Bohr figured out why electrons don't spiral into the nucleus. This chapter traces that journey — from early atomic models to nuclear energy and radioactivity.",
    concepts: [
      {
        title: "Bohr's Model of the Atom",
        body:
          "Bohr said electrons orbit the nucleus in fixed circular paths (energy levels) and can only exist in certain allowed orbits. They don't radiate energy while in these orbits — which was revolutionary because according to classical physics, they should spiral in. Electrons jump between levels by absorbing or emitting photons of specific energies. The energy of the photon equals the difference between the two levels. That's why each element has a unique fingerprint of colors (spectral lines) — each jump produces a specific wavelength of light.",
      },
      {
        title: "Atomic Spectra",
        body:
          "When you pass light from a gas through a prism, you don't get a continuous rainbow — you get a handful of bright lines (emission spectrum) or dark lines (absorption spectrum). Each element has its own unique set of lines, like a barcode. Hydrogen has the simplest spectrum — Lyman (ultraviolet), Balmer (visible), and Paschen (infrared) series. The Balmer series is why hydrogen gas glows pinkish-purple. The spacing between lines decreases as you go to higher energy levels, eventually converging — that convergence point gives you the ionization energy of the atom.",
      },
      {
        title: "Radioactivity",
        body:
          "Some nuclei are unstable — they spontaneously break apart, emitting particles and energy. That's radioactivity. There are three types: alpha (helium nucleus, heavy and slow, stopped by paper), beta (fast electron, stopped by aluminum), and gamma (high-energy photon, needs thick lead). The decay is random — you can't predict which atom will decay next, but for a large sample, the rate follows a simple exponential law. Half-life is the time for half the atoms to decay. Carbon-14 has a half-life of 5730 years — that's how we date ancient artifacts.",
      },
      {
        title: "Nuclear Energy",
        body:
          "Nuclear fission is when a heavy nucleus (like uranium-235) splits into two smaller ones, releasing a huge amount of energy. It happens when the nucleus absorbs a neutron and becomes unstable. The fission fragments fly apart, and more neutrons are released — causing a chain reaction. That's how nuclear reactors and atomic bombs work. Nuclear fusion is the opposite — two light nuclei (like hydrogen isotopes) combine to form a heavier one, releasing even more energy. That's how the sun works. Fusion is cleaner and more powerful than fission, but we haven't figured out how to control it sustainably yet.",
      },
    ],
    keyPoints: [
      "Bohr's model: electrons in fixed orbits with quantized angular momentum. mvr = nh/2π.",
      "Energy of hydrogen atom Eₙ = -13.6/n² eV. Transitions produce spectral lines.",
      "Rutherford's gold foil experiment revealed a tiny, dense, positively charged nucleus.",
      "Radioactive decay: N = N₀e^(-λt). Half-life T½ = ln2/λ.",
      "Alpha, beta, and gamma radiation have different penetrating powers and ionizing abilities.",
      "Nuclear fission splits heavy nuclei; fusion combines light nuclei. Both release enormous energy.",
    ],
    importantQuestions: [
      "Explain Bohr's model of the hydrogen atom. Derive the expression for the radius of the nth orbit.",
      "What is radioactivity? Derive the law of radioactive decay.",
      "Distinguish between nuclear fission and nuclear fusion with examples.",
      "The half-life of a radioactive substance is 10 days. How much of a 100 g sample remains after 40 days?",
    ],
  },

  "semiconductor-devices": {
    overview:
      "Every single electronic device you own — your phone, laptop, TV — is built from tiny semiconductors. These materials are neither good conductors nor good insulators; they're in between. But with a little clever doping (adding impurities), they become the most versatile materials in the world. This chapter is about the building blocks of modern electronics.",
    concepts: [
      {
        title: "Semiconductors and Doping",
        body:
          "Pure silicon is a semiconductor. In its pure form (intrinsic), it doesn't conduct well. But add a tiny bit of phosphorus (which has an extra electron), and suddenly it conducts much better — that's n-type (negative). Add boron (which has one less electron, creating a 'hole'), and you get p-type (positive). Holes act like positive charge carriers. This doping process is incredibly precise — we're talking parts per million. Doping is what makes semiconductors useful — without it, there'd be no transistors, no diodes, no modern electronics.",
      },
      {
        title: "PN Junction Diode",
        body:
          "Join a p-type and n-type semiconductor together, and you get a PN junction diode. The interface forms a 'depletion region' with no free carriers — like a wall. Connect the battery one way (forward bias — p to positive, n to negative), and the wall disappears — current flows. Connect it the other way (reverse bias), and the wall gets thicker — no current flows. That's it: a one-way street for electricity. Diodes are used as rectifiers (converting AC to DC), in solar cells (light creates electron-hole pairs), and as LEDs (electrons recombine with holes, releasing light).",
      },
      {
        title: "Rectifiers",
        body:
          "Rectifiers convert AC to DC using diodes. A half-wave rectifier uses one diode and only passes the positive half of the AC wave — you lose half the power. A full-wave rectifier uses four diodes in a bridge configuration and flips the negative half into positive — much more efficient. Add a capacitor across the output, and it smooths out the pulses into a nearly steady DC. That's how the power adapter for your phone works — it takes 220V AC from the wall and converts it to 5V DC for charging.",
      },
      {
        title: "Logic Gates",
        body:
          "Logic gates are the simplest digital building blocks. AND gate outputs 1 only if both inputs are 1. OR gate outputs 1 if at least one input is 1. NOT gate flips 0 to 1 and vice versa. From these, you build everything — NAND, NOR, XOR, and then whole circuits like adders, flip-flops, and processors. The amazing thing is that these gates are just cleverly wired transistors. Millions of them fit on a fingernail-sized chip. Every calculation, every app, every game — it's all just logic gates switching on and off billions of times per second.",
      },
    ],
    keyPoints: [
      "Intrinsic semiconductors: pure Si or Ge. Extrinsic: doped with impurities to create n-type or p-type.",
      "PN junction: conducts in forward bias, blocks in reverse bias.",
      "Diode as rectifier: half-wave (one diode) and full-wave (bridge rectifier with 4 diodes).",
      "LED works by electron-hole recombination releasing photons. Color depends on band gap energy.",
      "Zener diode operates in reverse breakdown region and is used as a voltage regulator.",
      "Logic gates: AND, OR, NOT, NAND, NOR, XOR. NAND and NOR are universal gates.",
    ],
    importantQuestions: [
      "Explain the working of a PN junction diode in forward and reverse bias with V-I characteristics.",
      "Draw a full-wave bridge rectifier circuit and explain its working. How is ripple reduced?",
      "Distinguish between half-wave and full-wave rectifiers.",
      "Realize the logic gates AND, OR, NOT using NAND gates only.",
      "What is a Zener diode? Explain how it can be used as a voltage regulator.",
    ],
  },
};

export default content;
