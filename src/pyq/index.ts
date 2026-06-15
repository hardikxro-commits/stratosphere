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

  // ========== PHYSICS 12 ==========
  // Rotational Dynamics (phys12-ch1)
  { id: "p12-1", subjectId: "physics", chapterId: "phys12-ch1", year: 2024, month: "Feb", question: "Derive an expression for moment of inertia of a uniform rod about an axis passing through its centre and perpendicular to its length.", marks: 4, difficulty: "medium" },
  { id: "p12-2", subjectId: "physics", chapterId: "phys12-ch1", year: 2023, month: "Feb", question: "State and prove the theorem of parallel axes.", marks: 3, difficulty: "medium" },
  { id: "p12-3", subjectId: "physics", chapterId: "phys12-ch1", year: 2024, month: "July", question: "A grindstone of radius 0.5 m rotates with angular speed 40 rad/s. A tool is pressed against it with a force such that the torque due to friction is 10 Nm. Find the time taken for the grindstone to stop if its moment of inertia is 20 kg m².", marks: 4, difficulty: "hard" },
  { id: "p12-4", subjectId: "physics", chapterId: "phys12-ch1", year: 2023, month: "July", question: "State the law of conservation of angular momentum. Give two real-life examples.", marks: 2, difficulty: "easy" },

  // Mechanical Properties of Fluids (phys12-ch2)
  { id: "p12-5", subjectId: "physics", chapterId: "phys12-ch2", year: 2024, month: "Feb", question: "State Bernoulli's theorem and derive Bernoulli's equation for an ideal fluid.", marks: 4, difficulty: "medium" },
  { id: "p12-6", subjectId: "physics", chapterId: "phys12-ch2", year: 2023, month: "Feb", question: "Explain the molecular theory of surface tension. Define surface energy.", marks: 3, difficulty: "medium" },
  { id: "p12-7", subjectId: "physics", chapterId: "phys12-ch2", year: 2024, month: "July", question: "A capillary tube of internal radius 0.5 mm is dipped vertically in water. If the surface tension of water is 0.072 N/m and angle of contact is 0°, calculate the height to which water rises in the tube.", marks: 3, difficulty: "medium" },
  { id: "p12-8", subjectId: "physics", chapterId: "phys12-ch2", year: 2023, month: "July", question: "State Stokes' law. Derive an expression for terminal velocity of a sphere falling through a viscous fluid.", marks: 3, difficulty: "hard" },

  // Kinetic Theory of Gases (phys12-ch3)
  { id: "p12-9", subjectId: "physics", chapterId: "phys12-ch3", year: 2024, month: "Feb", question: "Derive the expression for pressure exerted by an ideal gas using kinetic theory.", marks: 4, difficulty: "hard" },
  { id: "p12-10", subjectId: "physics", chapterId: "phys12-ch3", year: 2023, month: "Feb", question: "State the law of equipartition of energy. Calculate the number of degrees of freedom for monatomic, diatomic and polyatomic gases.", marks: 3, difficulty: "medium" },
  { id: "p12-11", subjectId: "physics", chapterId: "phys12-ch3", year: 2024, month: "July", question: "Calculate the root mean square speed of oxygen molecules at 27°C. Molecular weight of oxygen is 32 g/mol.", marks: 3, difficulty: "medium" },

  // Thermodynamics (phys12-ch4)
  { id: "p12-12", subjectId: "physics", chapterId: "phys12-ch4", year: 2024, month: "Feb", question: "State and explain the first law of thermodynamics. Derive the relation between Cp and Cv.", marks: 4, difficulty: "medium" },
  { id: "p12-13", subjectId: "physics", chapterId: "phys12-ch4", year: 2023, month: "Feb", question: "Derive an expression for work done during an isothermal expansion of an ideal gas.", marks: 3, difficulty: "medium" },
  { id: "p12-14", subjectId: "physics", chapterId: "phys12-ch4", year: 2024, month: "July", question: "Explain the Carnot cycle with a neat P-V diagram. Obtain the expression for efficiency of a Carnot engine.", marks: 5, difficulty: "hard" },
  { id: "p12-15", subjectId: "physics", chapterId: "phys12-ch4", year: 2023, month: "July", question: "Define entropy. State the second law of thermodynamics in terms of entropy.", marks: 2, difficulty: "easy" },

  // Oscillations (phys12-ch5)
  { id: "p12-16", subjectId: "physics", chapterId: "phys12-ch5", year: 2024, month: "Feb", question: "Derive an expression for the time period of a simple pendulum. On what factors does it depend?", marks: 3, difficulty: "medium" },
  { id: "p12-17", subjectId: "physics", chapterId: "phys12-ch5", year: 2023, month: "Feb", question: "Define damped harmonic oscillator. Write the differential equation and discuss the three cases of damping.", marks: 4, difficulty: "hard" },
  { id: "p12-18", subjectId: "physics", chapterId: "phys12-ch5", year: 2024, month: "July", question: "A particle performs SHM with amplitude 5 cm and period 2 s. Find its velocity and acceleration when the displacement is 3 cm.", marks: 3, difficulty: "medium" },

  // Superposition of Waves (phys12-ch6)
  { id: "p12-19", subjectId: "physics", chapterId: "phys12-ch6", year: 2024, month: "Feb", question: "Explain the formation of stationary waves in a stretched string. Show that nodes and antinodes are formed alternately.", marks: 4, difficulty: "medium" },
  { id: "p12-20", subjectId: "physics", chapterId: "phys12-ch6", year: 2023, month: "Feb", question: "State the laws of vibrating strings. Verify them experimentally using a sonometer.", marks: 3, difficulty: "medium" },
  { id: "p12-21", subjectId: "physics", chapterId: "phys12-ch6", year: 2024, month: "July", question: "What are beats? Derive an expression for beat frequency produced by two sound waves of slightly different frequencies.", marks: 3, difficulty: "hard" },

  // Wave Optics (phys12-ch7)
  { id: "p12-22", subjectId: "physics", chapterId: "phys12-ch7", year: 2024, month: "Feb", question: "Describe Young's double slit experiment. Derive the expression for fringe width.", marks: 4, difficulty: "medium" },
  { id: "p12-23", subjectId: "physics", chapterId: "phys12-ch7", year: 2023, month: "Feb", question: "State Huygens' principle. Using it, prove Snell's law of refraction.", marks: 3, difficulty: "medium" },
  { id: "p12-24", subjectId: "physics", chapterId: "phys12-ch7", year: 2024, month: "July", question: "What is diffraction of light? Explain the Fraunhofer diffraction pattern due to a single slit.", marks: 4, difficulty: "hard" },

  // Electrostatics (phys12-ch8)
  { id: "p12-25", subjectId: "physics", chapterId: "phys12-ch8", year: 2024, month: "Feb", question: "State Gauss's theorem in electrostatics. Using it, derive an expression for electric field due to an infinitely long charged wire.", marks: 4, difficulty: "medium" },
  { id: "p12-26", subjectId: "physics", chapterId: "phys12-ch8", year: 2023, month: "Feb", question: "Derive the expression for capacitance of a parallel plate capacitor with a dielectric slab between the plates.", marks: 4, difficulty: "hard" },
  { id: "p12-27", subjectId: "physics", chapterId: "phys12-ch8", year: 2024, month: "July", question: "Three point charges +2 μC, -3 μC and +4 μC are placed at the vertices of an equilateral triangle of side 0.2 m. Find the net force acting on the +4 μC charge.", marks: 4, difficulty: "hard" },
  { id: "p12-28", subjectId: "physics", chapterId: "phys12-ch8", year: 2023, month: "July", question: "Define electric potential. Derive an expression for electric potential due to a point charge.", marks: 3, difficulty: "easy" },

  // Current Electricity (phys12-ch9)
  { id: "p12-29", subjectId: "physics", chapterId: "phys12-ch9", year: 2024, month: "Feb", question: "State Kirchhoff's laws. Using them, determine the current in each branch of a given balanced Wheatstone bridge.", marks: 4, difficulty: "medium" },
  { id: "p12-30", subjectId: "physics", chapterId: "phys12-ch9", year: 2023, month: "Feb", question: "Explain the principle of a potentiometer. How is it used to compare the emf of two cells?", marks: 3, difficulty: "medium" },
  { id: "p12-31", subjectId: "physics", chapterId: "phys12-ch9", year: 2024, month: "July", question: "Derive the expression for the equivalent resistance of three resistors connected in parallel.", marks: 2, difficulty: "easy" },

  // Magnetic Fields due to Electric Current (phys12-ch10)
  { id: "p12-32", subjectId: "physics", chapterId: "phys12-ch10", year: 2024, month: "Feb", question: "State Biot-Savart law. Use it to derive the magnetic field at the centre of a circular loop carrying current.", marks: 4, difficulty: "medium" },
  { id: "p12-33", subjectId: "physics", chapterId: "phys12-ch10", year: 2023, month: "Feb", question: "Obtain an expression for the magnetic field due to a long straight current-carrying conductor using Ampere's circuital law.", marks: 3, difficulty: "medium" },
  { id: "p12-34", subjectId: "physics", chapterId: "phys12-ch10", year: 2024, month: "July", question: "A long solenoid has 500 turns per metre and carries a current of 2 A. Calculate the magnetic field inside the solenoid.", marks: 2, difficulty: "easy" },

  // Magnetic Materials (phys12-ch11)
  { id: "p12-35", subjectId: "physics", chapterId: "phys12-ch11", year: 2024, month: "Feb", question: "Distinguish between diamagnetic, paramagnetic and ferromagnetic materials with suitable examples.", marks: 3, difficulty: "easy" },
  { id: "p12-36", subjectId: "physics", chapterId: "phys12-ch11", year: 2023, month: "Feb", question: "Explain Curie temperature and its significance for ferromagnetic materials.", marks: 2, difficulty: "medium" },
  { id: "p12-37", subjectId: "physics", chapterId: "phys12-ch11", year: 2024, month: "July", question: "Define magnetic susceptibility and magnetic permeability. Derive the relation between relative permeability and susceptibility.", marks: 3, difficulty: "medium" },

  // Electromagnetic Induction (phys12-ch12)
  { id: "p12-38", subjectId: "physics", chapterId: "phys12-ch12", year: 2024, month: "Feb", question: "State Faraday's laws of electromagnetic induction and Lenz's law. Derive the expression for motional emf induced in a conductor moving in a uniform magnetic field.", marks: 4, difficulty: "medium" },
  { id: "p12-39", subjectId: "physics", chapterId: "phys12-ch12", year: 2023, month: "Feb", question: "Define self-inductance and mutual inductance. Derive an expression for the energy stored in an inductor.", marks: 3, difficulty: "hard" },
  { id: "p12-40", subjectId: "physics", chapterId: "phys12-ch12", year: 2024, month: "July", question: "A circular coil of radius 10 cm and 50 turns is placed in a magnetic field of 0.5 T perpendicular to its plane. If the field is reduced to zero in 0.1 s, find the induced emf.", marks: 3, difficulty: "medium" },

  // AC Circuits (phys12-ch13)
  { id: "p12-41", subjectId: "physics", chapterId: "phys12-ch13", year: 2024, month: "Feb", question: "Derive the expression for impedance of a series LCR circuit. Explain the condition for resonance.", marks: 4, difficulty: "hard" },
  { id: "p12-42", subjectId: "physics", chapterId: "phys12-ch13", year: 2023, month: "Feb", question: "Define power factor in an AC circuit. Show that the average power dissipated in a pure inductor is zero.", marks: 3, difficulty: "medium" },
  { id: "p12-43", subjectId: "physics", chapterId: "phys12-ch13", year: 2024, month: "July", question: "A series LCR circuit has R = 10 Ω, L = 0.1 H, C = 10 μF connected to a 230 V, 50 Hz AC supply. Find the impedance and current at resonance.", marks: 3, difficulty: "medium" },

  // Dual Nature of Radiation and Matter (phys12-ch14)
  { id: "p12-44", subjectId: "physics", chapterId: "phys12-ch14", year: 2024, month: "Feb", question: "Explain the photoelectric effect. Derive Einstein's photoelectric equation and state its physical significance.", marks: 4, difficulty: "medium" },
  { id: "p12-45", subjectId: "physics", chapterId: "phys12-ch14", year: 2023, month: "Feb", question: "Calculate the de Broglie wavelength of an electron accelerated through a potential difference of 100 V.", marks: 2, difficulty: "easy" },
  { id: "p12-46", subjectId: "physics", chapterId: "phys12-ch14", year: 2024, month: "July", question: "Describe Davisson and Germer experiment that confirmed the wave nature of electrons.", marks: 3, difficulty: "hard" },

  // Atoms, Molecules and Nuclei (phys12-ch15)
  { id: "p12-47", subjectId: "physics", chapterId: "phys12-ch15", year: 2024, month: "Feb", question: "State Bohr's postulates. Derive the expression for radius of nth orbit and energy of electron in hydrogen atom.", marks: 4, difficulty: "hard" },
  { id: "p12-48", subjectId: "physics", chapterId: "phys12-ch15", year: 2023, month: "Feb", question: "State the radioactive decay law. Derive the relation N = N₀e^(-λt). Define half-life and mean life.", marks: 4, difficulty: "medium" },
  { id: "p12-49", subjectId: "physics", chapterId: "phys12-ch15", year: 2024, month: "July", question: "Distinguish between nuclear fission and nuclear fusion. Give one example of each with equations.", marks: 3, difficulty: "easy" },

  // Semiconductor Devices (phys12-ch16)
  { id: "p12-50", subjectId: "physics", chapterId: "phys12-ch16", year: 2024, month: "Feb", question: "Explain the working of a PN junction diode in forward and reverse bias. Draw its characteristic curves.", marks: 4, difficulty: "medium" },
  { id: "p12-51", subjectId: "physics", chapterId: "phys12-ch16", year: 2023, month: "Feb", question: "With a neat circuit diagram, explain the working of a full wave rectifier.", marks: 4, difficulty: "medium" },
  { id: "p12-52", subjectId: "physics", chapterId: "phys12-ch16", year: 2024, month: "July", question: "Explain the working of an NPN transistor as an amplifier in CE configuration.", marks: 4, difficulty: "hard" },

  // ========== CHEMISTRY 12 ==========
  // Solid State (chem12-ch1)
  { id: "c12-1", subjectId: "chemistry", chapterId: "chem12-ch1", year: 2024, month: "Feb", question: "Distinguish between crystalline and amorphous solids with suitable examples.", marks: 2, difficulty: "easy" },
  { id: "c12-2", subjectId: "chemistry", chapterId: "chem12-ch1", year: 2023, month: "Feb", question: "Calculate the packing efficiency in a face-centered cubic (FCC) unit cell.", marks: 4, difficulty: "hard" },
  { id: "c12-3", subjectId: "chemistry", chapterId: "chem12-ch1", year: 2024, month: "July", question: "Explain Schottky and Frenkel defects in crystals with examples.", marks: 3, difficulty: "medium" },
  { id: "c12-4", subjectId: "chemistry", chapterId: "chem12-ch1", year: 2023, month: "July", question: "What are unit cells? Explain the seven crystal systems.", marks: 3, difficulty: "medium" },

  // Solutions (chem12-ch2)
  { id: "c12-5", subjectId: "chemistry", chapterId: "chem12-ch2", year: 2024, month: "Feb", question: "State Raoult's law for volatile liquids. Explain positive and negative deviations from Raoult's law with examples.", marks: 4, difficulty: "medium" },
  { id: "c12-6", subjectId: "chemistry", chapterId: "chem12-ch2", year: 2023, month: "Feb", question: "Define molality and molarity. Calculate the molality of a solution containing 10 g of glucose dissolved in 250 g of water.", marks: 3, difficulty: "easy" },
  { id: "c12-7", subjectId: "chemistry", chapterId: "chem12-ch2", year: 2024, month: "July", question: "Derive the relationship between elevation of boiling point and molar mass of solute.", marks: 3, difficulty: "medium" },

  // Ionic Equilibria (chem12-ch3)
  { id: "c12-8", subjectId: "chemistry", chapterId: "chem12-ch3", year: 2024, month: "Feb", question: "Define pH and pOH. Derive the relation pH + pOH = 14 at 298 K.", marks: 3, difficulty: "medium" },
  { id: "c12-9", subjectId: "chemistry", chapterId: "chem12-ch3", year: 2023, month: "Feb", question: "Explain the concept of buffer solutions. Derive Henderson-Hasselbalch equation for an acidic buffer.", marks: 4, difficulty: "hard" },
  { id: "c12-10", subjectId: "chemistry", chapterId: "chem12-ch3", year: 2024, month: "July", question: "Calculate the pH of 0.1 M acetic acid solution given Ka = 1.8 × 10⁻⁵.", marks: 2, difficulty: "medium" },

  // Chemical Thermodynamics (chem12-ch4)
  { id: "c12-11", subjectId: "chemistry", chapterId: "chem12-ch4", year: 2024, month: "Feb", question: "State the first and second laws of thermodynamics. Define Gibbs free energy and derive the relation ΔG = ΔH - TΔS.", marks: 4, difficulty: "medium" },
  { id: "c12-12", subjectId: "chemistry", chapterId: "chem12-ch4", year: 2023, month: "Feb", question: "What is spontaneous process? Explain the conditions for spontaneity in terms of Gibbs free energy.", marks: 3, difficulty: "medium" },
  { id: "c12-13", subjectId: "chemistry", chapterId: "chem12-ch4", year: 2024, month: "July", question: "Calculate the standard enthalpy of formation of CH₄ given that bond energies of C-H, H-H and the enthalpy of sublimation of carbon are known.", marks: 3, difficulty: "hard" },

  // Electrochemistry (chem12-ch5)
  { id: "c12-14", subjectId: "chemistry", chapterId: "chem12-ch5", year: 2024, month: "Feb", question: "Explain the construction and working of a Daniell cell with a neat diagram. Write the cell reaction.", marks: 4, difficulty: "medium" },
  { id: "c12-15", subjectId: "chemistry", chapterId: "chem12-ch5", year: 2023, month: "Feb", question: "State and explain Nernst equation. Calculate the emf of a Zn-Cu cell under standard conditions.", marks: 4, difficulty: "hard" },
  { id: "c12-16", subjectId: "chemistry", chapterId: "chem12-ch5", year: 2024, month: "July", question: "Distinguish between electrolytic cells and galvanic cells. Explain Faraday's laws of electrolysis.", marks: 3, difficulty: "medium" },

  // Chemical Kinetics (chem12-ch6)
  { id: "c12-17", subjectId: "chemistry", chapterId: "chem12-ch6", year: 2024, month: "Feb", question: "Define rate of chemical reaction. Derive the integrated rate equation for a first order reaction.", marks: 4, difficulty: "medium" },
  { id: "c12-18", subjectId: "chemistry", chapterId: "chem12-ch6", year: 2023, month: "Feb", question: "Explain Arrhenius equation. How does temperature affect the rate of a reaction?", marks: 3, difficulty: "medium" },
  { id: "c12-19", subjectId: "chemistry", chapterId: "chem12-ch6", year: 2024, month: "July", question: "The half-life of a first order reaction is 30 minutes. Calculate the time required for 90% completion of the reaction.", marks: 3, difficulty: "hard" },

  // Elements of Groups 16, 17, 18 (chem12-ch7)
  { id: "c12-20", subjectId: "chemistry", chapterId: "chem12-ch7", year: 2024, month: "Feb", question: "Explain the trends in physical properties of group 16 elements down the group.", marks: 3, difficulty: "easy" },
  { id: "c12-21", subjectId: "chemistry", chapterId: "chem12-ch7", year: 2023, month: "Feb", question: "Describe the manufacture of sulphuric acid by contact process.", marks: 4, difficulty: "medium" },
  { id: "c12-22", subjectId: "chemistry", chapterId: "chem12-ch7", year: 2024, month: "July", question: "Explain the anomalous behaviour of oxygen in group 16.", marks: 2, difficulty: "easy" },
  { id: "c12-23", subjectId: "chemistry", chapterId: "chem12-ch7", year: 2023, month: "July", question: "What are interhalogen compounds? Give their types and examples.", marks: 3, difficulty: "medium" },

  // Transition and Inner Transition Elements (chem12-ch8)
  { id: "c12-24", subjectId: "chemistry", chapterId: "chem12-ch8", year: 2024, month: "Feb", question: "Explain the general characteristics of transition elements. Why do they exhibit variable oxidation states?", marks: 4, difficulty: "medium" },
  { id: "c12-25", subjectId: "chemistry", chapterId: "chem12-ch8", year: 2023, month: "Feb", question: "What are lanthanoids? Explain lanthanoid contraction and its consequences.", marks: 3, difficulty: "medium" },
  { id: "c12-26", subjectId: "chemistry", chapterId: "chem12-ch8", year: 2024, month: "July", question: "Explain the colour of transition metal ions using crystal field theory.", marks: 3, difficulty: "hard" },

  // Coordination Compounds (chem12-ch9)
  { id: "c12-27", subjectId: "chemistry", chapterId: "chem12-ch9", year: 2024, month: "Feb", question: "Define coordination compound. Explain the terms: ligand, coordination number, coordination sphere with examples.", marks: 3, difficulty: "easy" },
  { id: "c12-28", subjectId: "chemistry", chapterId: "chem12-ch9", year: 2023, month: "Feb", question: "Explain Valence Bond Theory for the bonding in coordination compounds. Give the hybridization of [Co(NH₃)₆]³⁺.", marks: 4, difficulty: "hard" },
  { id: "c12-29", subjectId: "chemistry", chapterId: "chem12-ch9", year: 2024, month: "July", question: "Draw the structures of geometrical isomers of [Pt(NH₃)₂Cl₂]. Explain the difference between geometrical and optical isomerism.", marks: 4, difficulty: "medium" },

  // Halogen Derivatives (chem12-ch10)
  { id: "c12-30", subjectId: "chemistry", chapterId: "chem12-ch10", year: 2024, month: "Feb", question: "Explain the SN₁ and SN₂ mechanisms of nucleophilic substitution reactions with suitable examples.", marks: 4, difficulty: "hard" },
  { id: "c12-31", subjectId: "chemistry", chapterId: "chem12-ch10", year: 2023, month: "Feb", question: "What are Grignard reagents? How are they prepared? Give two important applications.", marks: 3, difficulty: "medium" },
  { id: "c12-32", subjectId: "chemistry", chapterId: "chem12-ch10", year: 2024, month: "July", question: "Distinguish between ethyl chloride and chloroform using a chemical test.", marks: 2, difficulty: "medium" },

  // Alcohols, Phenols and Ethers (chem12-ch11)
  { id: "c12-33", subjectId: "chemistry", chapterId: "chem12-ch11", year: 2024, month: "Feb", question: "Explain the methods of preparation of alcohols from alkenes and Grignard reagents.", marks: 3, difficulty: "medium" },
  { id: "c12-34", subjectId: "chemistry", chapterId: "chem12-ch11", year: 2023, month: "Feb", question: "Describe the acidic nature of phenols. How does it differ from alcohols?", marks: 3, difficulty: "medium" },
  { id: "c12-35", subjectId: "chemistry", chapterId: "chem12-ch11", year: 2024, month: "July", question: "Explain Williamson's synthesis for the preparation of ethers. Write the mechanism.", marks: 3, difficulty: "hard" },

  // Aldehydes, Ketones and Carboxylic Acids (chem12-ch12)
  { id: "c12-36", subjectId: "chemistry", chapterId: "chem12-ch12", year: 2024, month: "Feb", question: "Distinguish between aldehydes and ketones using Tollens' reagent and Fehling's solution tests.", marks: 3, difficulty: "easy" },
  { id: "c12-37", subjectId: "chemistry", chapterId: "chem12-ch12", year: 2023, month: "Feb", question: "Explain the mechanism of aldol condensation. Give one example.", marks: 4, difficulty: "medium" },
  { id: "c12-38", subjectId: "chemistry", chapterId: "chem12-ch12", year: 2024, month: "July", question: "How are carboxylic acids prepared from alcohols and Grignard reagents? Explain their acidic character.", marks: 4, difficulty: "medium" },

  // Amines (chem12-ch13)
  { id: "c12-39", subjectId: "chemistry", chapterId: "chem12-ch13", year: 2024, month: "Feb", question: "Classify amines with examples. Explain the methods of preparation of primary amines.", marks: 3, difficulty: "easy" },
  { id: "c12-40", subjectId: "chemistry", chapterId: "chem12-ch13", year: 2023, month: "Feb", question: "Explain the basicity of amines. Arrange aniline, methylamine and dimethylamine in increasing order of basic strength.", marks: 3, difficulty: "medium" },
  { id: "c12-41", subjectId: "chemistry", chapterId: "chem12-ch13", year: 2024, month: "July", question: "Describe the carbylamine reaction and coupling reaction of amines with equations.", marks: 3, difficulty: "medium" },

  // Biomolecules (chem12-ch14)
  { id: "c12-42", subjectId: "chemistry", chapterId: "chem12-ch14", year: 2024, month: "Feb", question: "Explain the classification of carbohydrates with examples. What are reducing sugars?", marks: 3, difficulty: "easy" },
  { id: "c12-43", subjectId: "chemistry", chapterId: "chem12-ch14", year: 2023, month: "Feb", question: "Describe the structure of proteins. Explain the primary, secondary, tertiary and quaternary structures.", marks: 4, difficulty: "medium" },
  { id: "c12-44", subjectId: "chemistry", chapterId: "chem12-ch14", year: 2024, month: "July", question: "What are vitamins? Classify them with examples. Explain the deficiency diseases.", marks: 3, difficulty: "easy" },

  // Polymers (chem12-ch15)
  { id: "c12-45", subjectId: "chemistry", chapterId: "chem12-ch15", year: 2024, month: "Feb", question: "Classify polymers based on source, structure and type of polymerization.", marks: 3, difficulty: "easy" },
  { id: "c12-46", subjectId: "chemistry", chapterId: "chem12-ch15", year: 2023, month: "Feb", question: "Explain the mechanism of free radical addition polymerization with the example of polythene.", marks: 4, difficulty: "hard" },
  { id: "c12-47", subjectId: "chemistry", chapterId: "chem12-ch15", year: 2024, month: "July", question: "Distinguish between thermoplastics and thermosetting polymers with examples.", marks: 2, difficulty: "easy" },

  // Chemistry in Everyday Life (chem12-ch16)
  { id: "c12-48", subjectId: "chemistry", chapterId: "chem12-ch16", year: 2024, month: "Feb", question: "Explain the classification of drugs based on pharmacological action. Give one example of each class.", marks: 3, difficulty: "easy" },
  { id: "c12-49", subjectId: "chemistry", chapterId: "chem12-ch16", year: 2023, month: "Feb", question: "What are food preservatives? Explain the role of sodium benzoate and sodium metabisulphite as preservatives.", marks: 2, difficulty: "medium" },
  { id: "c12-50", subjectId: "chemistry", chapterId: "chem12-ch16", year: 2024, month: "July", question: "Distinguish between soaps and synthetic detergents. How do they clean?", marks: 3, difficulty: "medium" },

  // ========== BIOLOGY 12 ==========
  // Reproduction in Lower and Higher Plants (bio12-ch1)
  { id: "b12-1", subjectId: "biology", chapterId: "bio12-ch1", year: 2024, month: "Feb", question: "Explain the different modes of asexual reproduction in plants with examples.", marks: 3, difficulty: "easy" },
  { id: "b12-2", subjectId: "biology", chapterId: "bio12-ch1", year: 2023, month: "Feb", question: "Describe the structure of a typical angiosperm ovule with a labeled diagram.", marks: 4, difficulty: "medium" },
  { id: "b12-3", subjectId: "biology", chapterId: "bio12-ch1", year: 2024, month: "July", question: "Explain the process of double fertilization in angiosperms. What is its significance?", marks: 4, difficulty: "medium" },

  // Reproduction in Lower and Higher Animals (bio12-ch2)
  { id: "b12-4", subjectId: "biology", chapterId: "bio12-ch2", year: 2024, month: "Feb", question: "Draw a labeled diagram of the male reproductive system in humans.", marks: 4, difficulty: "easy" },
  { id: "b12-5", subjectId: "biology", chapterId: "bio12-ch2", year: 2023, month: "Feb", question: "Explain the process of oogenesis in humans with a schematic representation.", marks: 4, difficulty: "medium" },
  { id: "b12-6", subjectId: "biology", chapterId: "bio12-ch2", year: 2024, month: "July", question: "Describe the menstrual cycle. Explain the role of hormones in regulating the cycle.", marks: 5, difficulty: "hard" },

  // Inheritance and Variation (bio12-ch3)
  { id: "b12-7", subjectId: "biology", chapterId: "bio12-ch3", year: 2024, month: "Feb", question: "State Mendel's laws of inheritance. Explain monohybrid cross with a checkerboard.", marks: 4, difficulty: "medium" },
  { id: "b12-8", subjectId: "biology", chapterId: "bio12-ch3", year: 2023, month: "Feb", question: "What is codominance? Explain it with the inheritance of ABO blood groups in humans.", marks: 3, difficulty: "medium" },
  { id: "b12-9", subjectId: "biology", chapterId: "bio12-ch3", year: 2024, month: "July", question: "Explain the chromosomal theory of inheritance. What is linkage and crossing over?", marks: 4, difficulty: "hard" },

  // Molecular Basis of Inheritance (bio12-ch4)
  { id: "b12-10", subjectId: "biology", chapterId: "bio12-ch4", year: 2024, month: "Feb", question: "Describe the structure of DNA as proposed by Watson and Crick. Explain its salient features.", marks: 4, difficulty: "medium" },
  { id: "b12-11", subjectId: "biology", chapterId: "bio12-ch4", year: 2023, month: "Feb", question: "Explain the process of transcription in prokaryotes.", marks: 3, difficulty: "hard" },
  { id: "b12-12", subjectId: "biology", chapterId: "bio12-ch4", year: 2024, month: "July", question: "What is the genetic code? Explain its salient features. How is it degenerate?", marks: 3, difficulty: "medium" },

  // Origin and Evolution of Life (bio12-ch5)
  { id: "b12-13", subjectId: "biology", chapterId: "bio12-ch5", year: 2024, month: "Feb", question: "Explain the Miller-Urey experiment. What did it demonstrate about the origin of life?", marks: 3, difficulty: "medium" },
  { id: "b12-14", subjectId: "biology", chapterId: "bio12-ch5", year: 2023, month: "Feb", question: "State Darwin's theory of natural selection. Explain the evidence for evolution from comparative anatomy.", marks: 4, difficulty: "medium" },
  { id: "b12-15", subjectId: "biology", chapterId: "bio12-ch5", year: 2024, month: "July", question: "What is Hardy-Weinberg principle? Write the equation and state the factors affecting gene frequency.", marks: 3, difficulty: "hard" },

  // Plant Water Relation and Mineral Nutrition (bio12-ch6)
  { id: "b12-16", subjectId: "biology", chapterId: "bio12-ch6", year: 2024, month: "Feb", question: "Explain the mechanism of water absorption by roots. Differentiate between apoplast and symplast pathways.", marks: 4, difficulty: "medium" },
  { id: "b12-17", subjectId: "biology", chapterId: "bio12-ch6", year: 2023, month: "Feb", question: "What is transpiration? Explain the factors affecting transpiration rate.", marks: 3, difficulty: "easy" },
  { id: "b12-18", subjectId: "biology", chapterId: "bio12-ch6", year: 2024, month: "July", question: "Describe the mechanism of phloem transport. Explain the pressure flow hypothesis.", marks: 3, difficulty: "hard" },

  // Plant Growth and Mineral Nutrition (bio12-ch7)
  { id: "b12-19", subjectId: "biology", chapterId: "bio12-ch7", year: 2024, month: "Feb", question: "Explain the phases of plant growth. Draw a typical sigmoid growth curve and label its parts.", marks: 3, difficulty: "easy" },
  { id: "b12-20", subjectId: "biology", chapterId: "bio12-ch7", year: 2023, month: "Feb", question: "What are plant growth regulators? Explain the physiological effects of auxins.", marks: 4, difficulty: "medium" },
  { id: "b12-21", subjectId: "biology", chapterId: "bio12-ch7", year: 2024, month: "July", question: "Distinguish between macronutrients and micronutrients. Explain the role of nitrogen in plant nutrition.", marks: 3, difficulty: "medium" },

  // Respiration and Circulation (bio12-ch8)
  { id: "b12-22", subjectId: "biology", chapterId: "bio12-ch8", year: 2024, month: "Feb", question: "Explain the mechanism of breathing in humans. What is the role of the diaphragm?", marks: 3, difficulty: "easy" },
  { id: "b12-23", subjectId: "biology", chapterId: "bio12-ch8", year: 2023, month: "Feb", question: "Describe the structure of the human heart with a labeled diagram. Explain the path of blood circulation.", marks: 5, difficulty: "medium" },
  { id: "b12-24", subjectId: "biology", chapterId: "bio12-ch8", year: 2024, month: "July", question: "What is cardiac cycle? Explain the stages of cardiac cycle with the help of a diagram.", marks: 4, difficulty: "hard" },

  // Control and Coordination (bio12-ch9)
  { id: "b12-25", subjectId: "biology", chapterId: "bio12-ch9", year: 2024, month: "Feb", question: "Explain the structure of a neuron. Describe the mechanism of nerve impulse transmission.", marks: 4, difficulty: "medium" },
  { id: "b12-26", subjectId: "biology", chapterId: "bio12-ch9", year: 2023, month: "Feb", question: "Draw a labeled diagram of the human brain and state the functions of each part.", marks: 5, difficulty: "medium" },
  { id: "b12-27", subjectId: "biology", chapterId: "bio12-ch9", year: 2024, month: "July", question: "Explain the mechanism of hormone action. Distinguish between steroid and peptide hormones.", marks: 3, difficulty: "hard" },

  // Human Health and Diseases (bio12-ch10)
  { id: "b12-28", subjectId: "biology", chapterId: "bio12-ch10", year: 2024, month: "Feb", question: "Explain the structure of HIV with a diagram. Describe the life cycle of HIV.", marks: 4, difficulty: "medium" },
  { id: "b12-29", subjectId: "biology", chapterId: "bio12-ch10", year: 2023, month: "Feb", question: "What is immunity? Distinguish between active and passive immunity with examples.", marks: 3, difficulty: "easy" },
  { id: "b12-30", subjectId: "biology", chapterId: "bio12-ch10", year: 2024, month: "July", question: "Describe the life cycle of Plasmodium that causes malaria. How is malaria transmitted?", marks: 4, difficulty: "medium" },

  // Enhancement of Food Production (bio12-ch11)
  { id: "b12-31", subjectId: "biology", chapterId: "bio12-ch11", year: 2024, month: "Feb", question: "Explain the methods of plant breeding for disease resistance.", marks: 3, difficulty: "medium" },
  { id: "b12-32", subjectId: "biology", chapterId: "bio12-ch11", year: 2023, month: "Feb", question: "What is tissue culture? Explain the technique of micropropagation.", marks: 3, difficulty: "easy" },
  { id: "b12-33", subjectId: "biology", chapterId: "bio12-ch11", year: 2024, month: "July", question: "Describe the methods of animal breeding. What is artificial insemination?", marks: 3, difficulty: "medium" },

  // Biotechnology (bio12-ch12)
  { id: "b12-34", subjectId: "biology", chapterId: "bio12-ch12", year: 2024, month: "Feb", question: "Explain the steps involved in recombinant DNA technology with a diagram.", marks: 4, difficulty: "medium" },
  { id: "b12-35", subjectId: "biology", chapterId: "bio12-ch12", year: 2023, month: "Feb", question: "What are restriction enzymes? Explain their role in genetic engineering.", marks: 3, difficulty: "easy" },
  { id: "b12-36", subjectId: "biology", chapterId: "bio12-ch12", year: 2024, month: "July", question: "Describe the process of polymerase chain reaction (PCR) and its applications.", marks: 4, difficulty: "hard" },

  // Organisms and Populations (bio12-ch13)
  { id: "b12-37", subjectId: "biology", chapterId: "bio12-ch13", year: 2024, month: "Feb", question: "Define population. Explain the different population attributes with examples.", marks: 3, difficulty: "easy" },
  { id: "b12-38", subjectId: "biology", chapterId: "bio12-ch13", year: 2023, month: "Feb", question: "Explain the concept of ecological niche. Differentiate between habitat and niche.", marks: 2, difficulty: "medium" },
  { id: "b12-39", subjectId: "biology", chapterId: "bio12-ch13", year: 2024, month: "July", question: "Describe the different types of species interactions with suitable examples.", marks: 4, difficulty: "medium" },

  // Ecosystems and Energy Flow (bio12-ch14)
  { id: "b12-40", subjectId: "biology", chapterId: "bio12-ch14", year: 2024, month: "Feb", question: "Define ecosystem. Explain the structure and function of an ecosystem.", marks: 3, difficulty: "easy" },
  { id: "b12-41", subjectId: "biology", chapterId: "bio12-ch14", year: 2023, month: "Feb", question: "Explain the flow of energy through an ecosystem. What is the 10% law?", marks: 4, difficulty: "medium" },
  { id: "b12-42", subjectId: "biology", chapterId: "bio12-ch14", year: 2024, month: "July", question: "Describe the carbon cycle with a neat diagram. Why is it called a biogeochemical cycle?", marks: 4, difficulty: "medium" },

  // Biodiversity, Conservation and Environmental Issues (bio12-ch15)
  { id: "b12-43", subjectId: "biology", chapterId: "bio12-ch15", year: 2024, month: "Feb", question: "Define biodiversity. Explain the three types of biodiversity with examples.", marks: 3, difficulty: "easy" },
  { id: "b12-44", subjectId: "biology", chapterId: "bio12-ch15", year: 2023, month: "Feb", question: "Explain the concept of biodiversity hotspots. Name the four biodiversity hotspots of India.", marks: 3, difficulty: "medium" },
  { id: "b12-45", subjectId: "biology", chapterId: "bio12-ch15", year: 2024, month: "July", question: "Describe the methods of in situ and ex situ conservation of biodiversity with examples.", marks: 4, difficulty: "medium" },

  // ========== MATHS 12 ==========
  // Mathematical Logic (math12-ch1)
  { id: "m12-1", subjectId: "maths", chapterId: "math12-ch1", year: 2024, month: "Feb", question: "Construct the truth table for (p ∧ q) → (p ∨ q). Determine whether it is a tautology, contradiction or contingency.", marks: 3, difficulty: "easy" },
  { id: "m12-2", subjectId: "maths", chapterId: "math12-ch1", year: 2023, month: "Feb", question: "Express the following statement in symbolic form: 'If it rains then the match will be cancelled and we will stay home.'", marks: 2, difficulty: "easy" },
  { id: "m12-3", subjectId: "maths", chapterId: "math12-ch1", year: 2024, month: "July", question: "Using the laws of logic, prove that (p → q) ∧ (p → r) ≡ p → (q ∧ r).", marks: 3, difficulty: "medium" },

  // Matrices (math12-ch2)
  { id: "m12-4", subjectId: "maths", chapterId: "math12-ch2", year: 2024, month: "Feb", question: "Find the inverse of matrix A = [[2,3],[1,4]] using elementary row transformations.", marks: 4, difficulty: "medium" },
  { id: "m12-5", subjectId: "maths", chapterId: "math12-ch2", year: 2023, month: "Feb", question: "Solve the system of equations x + 2y = 5, 3x - y = 8 using matrix inversion method.", marks: 3, difficulty: "medium" },
  { id: "m12-6", subjectId: "maths", chapterId: "math12-ch2", year: 2024, month: "July", question: "If A is a square matrix, prove that A(Aᵀ) is symmetric. Give an example.", marks: 2, difficulty: "easy" },

  // Trigonometric Functions (math12-ch3)
  { id: "m12-7", subjectId: "maths", chapterId: "math12-ch3", year: 2024, month: "Feb", question: "Prove that sin⁻¹(3/5) + sin⁻¹(8/17) = cos⁻¹(36/85).", marks: 4, difficulty: "hard" },
  { id: "m12-8", subjectId: "maths", chapterId: "math12-ch3", year: 2023, month: "Feb", question: "Solve the trigonometric equation 2sin²θ - 3sinθ + 1 = 0 for θ in [0, 2π].", marks: 3, difficulty: "medium" },
  { id: "m12-9", subjectId: "maths", chapterId: "math12-ch3", year: 2024, month: "July", question: "Find the general solution of the equation cos2θ = sinθ.", marks: 3, difficulty: "medium" },

  // Pair of Straight Lines (math12-ch4)
  { id: "m12-10", subjectId: "maths", chapterId: "math12-ch4", year: 2024, month: "Feb", question: "Show that the equation 2x² - 5xy + 2y² = 0 represents a pair of lines. Find the angle between them.", marks: 3, difficulty: "medium" },
  { id: "m12-11", subjectId: "maths", chapterId: "math12-ch4", year: 2023, month: "Feb", question: "Find the joint equation of lines passing through the origin and perpendicular to the lines represented by ax² + 2hxy + by² = 0.", marks: 4, difficulty: "hard" },
  { id: "m12-12", subjectId: "maths", chapterId: "math12-ch4", year: 2024, month: "July", question: "Find the combined equation of the lines x + 2y - 3 = 0 and 2x - y + 1 = 0.", marks: 2, difficulty: "easy" },

  // Vectors (math12-ch5)
  { id: "m12-13", subjectId: "maths", chapterId: "math12-ch5", year: 2024, month: "Feb", question: "If a = 2i - j + k, b = i + 2j - 3k, find the unit vector perpendicular to both a and b.", marks: 3, difficulty: "medium" },
  { id: "m12-14", subjectId: "maths", chapterId: "math12-ch5", year: 2023, month: "Feb", question: "Prove that the scalar triple product [a b c] = 0 if and only if the vectors are coplanar.", marks: 3, difficulty: "hard" },
  { id: "m12-15", subjectId: "maths", chapterId: "math12-ch5", year: 2024, month: "July", question: "Find the projection of vector a = i + 2j + k on vector b = 4i - 3j + 5k.", marks: 2, difficulty: "easy" },

  // Line and Plane (math12-ch6)
  { id: "m12-16", subjectId: "maths", chapterId: "math12-ch6", year: 2024, month: "Feb", question: "Find the vector equation of the line passing through (1,2,3) and parallel to the line (x-1)/2 = (y+1)/-3 = (z-2)/4.", marks: 3, difficulty: "medium" },
  { id: "m12-17", subjectId: "maths", chapterId: "math12-ch6", year: 2023, month: "Feb", question: "Find the distance of the point (2,3,4) from the plane 2x + y - 2z + 5 = 0.", marks: 2, difficulty: "easy" },
  { id: "m12-18", subjectId: "maths", chapterId: "math12-ch6", year: 2024, month: "July", question: "Find the angle between the line (x-1)/2 = y/3 = (z+1)/-1 and the plane 3x + 4y - 5z = 7.", marks: 3, difficulty: "medium" },

  // Linear Programming (math12-ch7)
  { id: "m12-19", subjectId: "maths", chapterId: "math12-ch7", year: 2024, month: "Feb", question: "A furniture dealer deals in tables and chairs. Solve graphically to maximize profit given constraints on wood and labor.", marks: 4, difficulty: "medium" },
  { id: "m12-20", subjectId: "maths", chapterId: "math12-ch7", year: 2023, month: "Feb", question: "Define the feasible region in LPP. What are corner points? Explain their significance.", marks: 2, difficulty: "easy" },
  { id: "m12-21", subjectId: "maths", chapterId: "math12-ch7", year: 2024, month: "July", question: "Minimize Z = 3x + 2y subject to x + y ≥ 8, 3x + y ≥ 12, x ≥ 0, y ≥ 0 by graphical method.", marks: 4, difficulty: "hard" },

  // Differentiation (math12-ch8)
  { id: "m12-22", subjectId: "maths", chapterId: "math12-ch8", year: 2024, month: "Feb", question: "If y = (sin⁻¹x)², prove that (1 - x²)d²y/dx² - x dy/dx = 2.", marks: 4, difficulty: "hard" },
  { id: "m12-23", subjectId: "maths", chapterId: "math12-ch8", year: 2023, month: "Feb", question: "Differentiate x^sinx with respect to x using logarithmic differentiation.", marks: 3, difficulty: "medium" },
  { id: "m12-24", subjectId: "maths", chapterId: "math12-ch8", year: 2024, month: "July", question: "Find the derivative of tan⁻¹(√((1- cosx)/(1+ cosx))) with respect to x.", marks: 3, difficulty: "medium" },

  // Applications of Derivative (math12-ch9)
  { id: "m12-25", subjectId: "maths", chapterId: "math12-ch9", year: 2024, month: "Feb", question: "Find the equation of tangent and normal to the curve y = x³ - 2x + 1 at the point where x = 1.", marks: 3, difficulty: "medium" },
  { id: "m12-26", subjectId: "maths", chapterId: "math12-ch9", year: 2023, month: "Feb", question: "Show that the function f(x) = x³ - 3x² + 3x + 2 is always increasing.", marks: 2, difficulty: "easy" },
  { id: "m12-27", subjectId: "maths", chapterId: "math12-ch9", year: 2024, month: "July", question: "A wire of length 28 m is cut into two pieces to form a square and a circle. Find the lengths of the pieces that minimize the total area enclosed.", marks: 4, difficulty: "hard" },

  // Integration (math12-ch10)
  { id: "m12-28", subjectId: "maths", chapterId: "math12-ch10", year: 2024, month: "Feb", question: "Evaluate ∫e^x(sin x + cos x) dx.", marks: 2, difficulty: "easy" },
  { id: "m12-29", subjectId: "maths", chapterId: "math12-ch10", year: 2023, month: "Feb", question: "Evaluate ∫dx/(x² + 4x + 13).", marks: 3, difficulty: "medium" },
  { id: "m12-30", subjectId: "maths", chapterId: "math12-ch10", year: 2024, month: "July", question: "Evaluate ∫x² sin x dx using integration by parts.", marks: 3, difficulty: "medium" },

  // Definite Integral (math12-ch11)
  { id: "m12-31", subjectId: "maths", chapterId: "math12-ch11", year: 2024, month: "Feb", question: "Evaluate ∫₀^(π/2) sin²x dx.", marks: 2, difficulty: "easy" },
  { id: "m12-32", subjectId: "maths", chapterId: "math12-ch11", year: 2023, month: "Feb", question: "Using the property of definite integral, evaluate ∫₀^(π/2) log(sin x) dx.", marks: 4, difficulty: "hard" },
  { id: "m12-33", subjectId: "maths", chapterId: "math12-ch11", year: 2024, month: "July", question: "Evaluate ∫₀¹ x(1-x)⁵ dx using Beta-Gamma functions.", marks: 3, difficulty: "hard" },

  // Differential Equations (math12-ch12)
  { id: "m12-34", subjectId: "maths", chapterId: "math12-ch12", year: 2024, month: "Feb", question: "Find the order and degree of the differential equation (d²y/dx²)² + (dy/dx)³ = 0. Solve the differential equation dy/dx = e^(x+y).", marks: 3, difficulty: "medium" },
  { id: "m12-35", subjectId: "maths", chapterId: "math12-ch12", year: 2023, month: "Feb", question: "Solve the differential equation (x² - y²) dx + 2xy dy = 0.", marks: 4, difficulty: "hard" },
  { id: "m12-36", subjectId: "maths", chapterId: "math12-ch12", year: 2024, month: "July", question: "Solve the differential equation dy/dx + y cot x = sin x.", marks: 3, difficulty: "medium" },

  // Probability Distribution (math12-ch13)
  { id: "m12-37", subjectId: "maths", chapterId: "math12-ch13", year: 2024, month: "Feb", question: "A random variable X has the following probability distribution. Find the value of k and P(X ≥ 2).", marks: 3, difficulty: "medium" },
  { id: "m12-38", subjectId: "maths", chapterId: "math12-ch13", year: 2023, month: "Feb", question: "Define probability distribution of a random variable. Find the mean and variance for the distribution of a fair die.", marks: 3, difficulty: "easy" },
  { id: "m12-39", subjectId: "maths", chapterId: "math12-ch13", year: 2024, month: "July", question: "In a normal distribution with mean 50 and standard deviation 10, find the probability that X lies between 40 and 60.", marks: 3, difficulty: "hard" },

  // Binomial Distribution (math12-ch14)
  { id: "m12-40", subjectId: "maths", chapterId: "math12-ch14", year: 2024, month: "Feb", question: "State the conditions for a binomial experiment. If a fair coin is tossed 6 times, find the probability of getting exactly 4 heads.", marks: 3, difficulty: "medium" },
  { id: "m12-41", subjectId: "maths", chapterId: "math12-ch14", year: 2023, month: "Feb", question: "For a binomial distribution, prove that mean = np and variance = npq.", marks: 4, difficulty: "hard" },
  { id: "m12-42", subjectId: "maths", chapterId: "math12-ch14", year: 2024, month: "July", question: "The mean and variance of a binomial distribution are 8 and 4.8 respectively. Find n and p.", marks: 2, difficulty: "medium" },

  // ========== PHYSICS 11 (additional) ==========
  // Thermodynamics (phys11-ch8)
  { id: "p11-11", subjectId: "physics", chapterId: "phys11-ch8", year: 2024, month: "Feb", question: "Explain the concept of internal energy. State the first law of thermodynamics with mathematical form.", marks: 3, difficulty: "easy" },
  { id: "p11-12", subjectId: "physics", chapterId: "phys11-ch8", year: 2023, month: "Feb", question: "Distinguish between isothermal and adiabatic processes with examples.", marks: 2, difficulty: "easy" },
  { id: "p11-13", subjectId: "physics", chapterId: "phys11-ch8", year: 2024, month: "July", question: "Derive the expression for work done in an adiabatic process.", marks: 3, difficulty: "hard" },

  // Waves (phys11-ch9)
  { id: "p11-14", subjectId: "physics", chapterId: "phys11-ch9", year: 2024, month: "Feb", question: "Distinguish between longitudinal and transverse waves with examples. State the relation between velocity, frequency and wavelength.", marks: 3, difficulty: "easy" },
  { id: "p11-15", subjectId: "physics", chapterId: "phys11-ch9", year: 2023, month: "Feb", question: "Derive Newton's formula for the velocity of sound in air. Explain Laplace's correction.", marks: 4, difficulty: "medium" },
  { id: "p11-16", subjectId: "physics", chapterId: "phys11-ch9", year: 2024, month: "July", question: "What are stationary waves? Explain the formation of stationary waves in a closed pipe organ.", marks: 3, difficulty: "medium" },

  // Optics (phys11-ch10)
  { id: "p11-17", subjectId: "physics", chapterId: "phys11-ch10", year: 2024, month: "Feb", question: "Derive the lens maker's formula for a thin lens.", marks: 4, difficulty: "hard" },
  { id: "p11-18", subjectId: "physics", chapterId: "phys11-ch10", year: 2023, month: "Feb", question: "Explain total internal reflection with conditions and applications.", marks: 3, difficulty: "medium" },
  { id: "p11-19", subjectId: "physics", chapterId: "phys11-ch10", year: 2024, month: "July", question: "A convex lens of focal length 20 cm forms a real image at a distance of 30 cm. Find the object distance and magnification.", marks: 3, difficulty: "medium" },

  // Electrostatics (phys11-ch11)
  { id: "p11-20", subjectId: "physics", chapterId: "phys11-ch11", year: 2024, month: "Feb", question: "State Coulomb's law in vector form. Find the force between two charges of +2 μC and -3 μC placed 10 cm apart in air.", marks: 3, difficulty: "easy" },
  { id: "p11-21", subjectId: "physics", chapterId: "phys11-ch11", year: 2023, month: "Feb", question: "Define electric dipole moment. Derive the expression for electric field on the axial line of an electric dipole.", marks: 4, difficulty: "medium" },
  { id: "p11-22", subjectId: "physics", chapterId: "phys11-ch11", year: 2024, month: "July", question: "State the principle of superposition for electric forces. Two point charges repel each other with a force F when placed in air. If the distance between them is doubled, what will be the new force?", marks: 2, difficulty: "easy" },

  // Current Electricity (phys11-ch12)
  { id: "p11-23", subjectId: "physics", chapterId: "phys11-ch12", year: 2024, month: "Feb", question: "State Ohm's law. Derive the expression for the equivalent resistance of three resistors in series.", marks: 2, difficulty: "easy" },
  { id: "p11-24", subjectId: "physics", chapterId: "phys11-ch12", year: 2023, month: "Feb", question: "Explain the concept of resistivity and conductivity. How does resistivity of a conductor vary with temperature?", marks: 3, difficulty: "medium" },
  { id: "p11-25", subjectId: "physics", chapterId: "phys11-ch12", year: 2024, month: "July", question: "A wire of resistance 4 Ω is stretched to twice its original length. Find its new resistance.", marks: 2, difficulty: "medium" },

  // Magnetism (phys11-ch13)
  { id: "p11-26", subjectId: "physics", chapterId: "phys11-ch13", year: 2024, month: "Feb", question: "Define magnetic flux. State Gauss's law of magnetism.", marks: 2, difficulty: "easy" },
  { id: "p11-27", subjectId: "physics", chapterId: "phys11-ch13", year: 2023, month: "Feb", question: "Derive the expression for the magnetic field at a point on the axis of a bar magnet.", marks: 3, difficulty: "hard" },
  { id: "p11-28", subjectId: "physics", chapterId: "phys11-ch13", year: 2024, month: "July", question: "Explain the principle of a moving coil galvanometer. How is it converted into an ammeter?", marks: 4, difficulty: "medium" },

  // Semiconductors (phys11-ch14)
  { id: "p11-29", subjectId: "physics", chapterId: "phys11-ch14", year: 2024, month: "Feb", question: "Explain the energy band theory of solids. Distinguish between conductors, insulators and semiconductors.", marks: 3, difficulty: "medium" },
  { id: "p11-30", subjectId: "physics", chapterId: "phys11-ch14", year: 2023, month: "Feb", question: "Distinguish between intrinsic and extrinsic semiconductors. Explain doping with examples.", marks: 3, difficulty: "easy" },
  { id: "p11-31", subjectId: "physics", chapterId: "phys11-ch14", year: 2024, month: "July", question: "Explain the working of a half wave rectifier with a circuit diagram.", marks: 3, difficulty: "medium" },

  // ========== CHEMISTRY 11 (additional) ==========
  // Basic Concepts of Chemistry (chem11-ch1)
  { id: "c11-11", subjectId: "chemistry", chapterId: "chem11-ch1", year: 2024, month: "Feb", question: "Define atomic mass unit. Calculate the molecular mass of H₂SO₄ and glucose.", marks: 2, difficulty: "easy" },
  { id: "c11-12", subjectId: "chemistry", chapterId: "chem11-ch1", year: 2023, month: "Feb", question: "What is limiting reagent? In the reaction 2H₂ + O₂ → 2H₂O, if 4 g of H₂ reacts with 32 g of O₂, identify the limiting reagent.", marks: 3, difficulty: "medium" },
  { id: "c11-13", subjectId: "chemistry", chapterId: "chem11-ch1", year: 2024, month: "July", question: "Explain the laws of chemical combination with examples.", marks: 3, difficulty: "medium" },

  // Structure of Atom (chem11-ch2)
  { id: "c11-14", subjectId: "chemistry", chapterId: "chem11-ch2", year: 2024, month: "Feb", question: "Explain Rutherford's alpha scattering experiment. What conclusions were drawn about the structure of the atom?", marks: 3, difficulty: "easy" },
  { id: "c11-15", subjectId: "chemistry", chapterId: "chem11-ch2", year: 2023, month: "Feb", question: "State de Broglie's principle. Calculate the de Broglie wavelength of an electron moving with velocity 2 × 10⁶ m/s.", marks: 3, difficulty: "medium" },
  { id: "c11-16", subjectId: "chemistry", chapterId: "chem11-ch2", year: 2024, month: "July", question: "Explain the quantum numbers. Write all the four quantum numbers for the last electron of sodium atom.", marks: 3, difficulty: "medium" },

  // Chemical Bonding (chem11-ch3)
  { id: "c11-17", subjectId: "chemistry", chapterId: "chem11-ch3", year: 2024, month: "Feb", question: "Explain the formation of sigma and pi bonds. Differentiate between them.", marks: 3, difficulty: "easy" },
  { id: "c11-18", subjectId: "chemistry", chapterId: "chem11-ch3", year: 2023, month: "Feb", question: "Using MOT, predict the bond order and magnetic nature of O₂ and N₂.", marks: 4, difficulty: "hard" },
  { id: "c11-19", subjectId: "chemistry", chapterId: "chem11-ch3", year: 2024, month: "July", question: "Explain the concept of hybridization. Describe the sp³ hybridization with the example of CH₄.", marks: 3, difficulty: "medium" },

  // Redox Reactions (chem11-ch4)
  { id: "c11-20", subjectId: "chemistry", chapterId: "chem11-ch4", year: 2024, month: "Feb", question: "Define oxidation and reduction in terms of oxidation number. Calculate the oxidation number of S in H₂SO₄ and Cr in K₂Cr₂O₇.", marks: 3, difficulty: "easy" },
  { id: "c11-21", subjectId: "chemistry", chapterId: "chem11-ch4", year: 2023, month: "Feb", question: "What are redox reactions? Balance the equation KMnO₄ + FeSO₄ + H₂SO₄ → K₂SO₄ + MnSO₄ + Fe₂(SO₄)₃ + H₂O by ion-electron method.", marks: 4, difficulty: "hard" },
  { id: "c11-22", subjectId: "chemistry", chapterId: "chem11-ch4", year: 2024, month: "July", question: "Distinguish between electrochemical cell and electrolytic cell. Give one example of each.", marks: 2, difficulty: "easy" },

  // Modern Periodic Table (chem11-ch5)
  { id: "c11-23", subjectId: "chemistry", chapterId: "chem11-ch5", year: 2024, month: "Feb", question: "State the periodic law. Explain the trends in atomic radius across a period and down a group.", marks: 3, difficulty: "easy" },
  { id: "c11-24", subjectId: "chemistry", chapterId: "chem11-ch5", year: 2023, month: "Feb", question: "Explain electron gain enthalpy. Why does chlorine have the highest negative electron gain enthalpy?", marks: 2, difficulty: "medium" },
  { id: "c11-25", subjectId: "chemistry", chapterId: "chem11-ch5", year: 2024, month: "July", question: "Define electronegativity. Explain the trends of electronegativity in the periodic table.", marks: 2, difficulty: "easy" },

  // Organic Basics (chem11-ch6)
  { id: "c11-26", subjectId: "chemistry", chapterId: "chem11-ch6", year: 2024, month: "Feb", question: "Explain the classification of organic compounds based on functional groups with examples.", marks: 3, difficulty: "easy" },
  { id: "c11-27", subjectId: "chemistry", chapterId: "chem11-ch6", year: 2023, month: "Feb", question: "Define the terms: homolytic and heterolytic fission. Give examples of each.", marks: 2, difficulty: "medium" },
  { id: "c11-28", subjectId: "chemistry", chapterId: "chem11-ch6", year: 2024, month: "July", question: "Explain the types of organic reactions: addition, substitution and elimination with one example each.", marks: 3, difficulty: "medium" },

  // Hydrocarbons (chem11-ch7)
  { id: "c11-29", subjectId: "chemistry", chapterId: "chem11-ch7", year: 2024, month: "Feb", question: "Explain the preparation of methane from Wurtz reaction and decarboxylation.", marks: 3, difficulty: "medium" },
  { id: "c11-30", subjectId: "chemistry", chapterId: "chem11-ch7", year: 2023, month: "Feb", question: "Describe the mechanism of electrophilic addition of bromine to ethene.", marks: 3, difficulty: "hard" },
  { id: "c11-31", subjectId: "chemistry", chapterId: "chem11-ch7", year: 2024, month: "July", question: "Distinguish between saturated and unsaturated hydrocarbons with suitable tests.", marks: 2, difficulty: "easy" },

  // States of Matter (chem11-ch8)
  { id: "c11-32", subjectId: "chemistry", chapterId: "chem11-ch8", year: 2024, month: "Feb", question: "State the gas laws. Derive the ideal gas equation PV = nRT.", marks: 3, difficulty: "easy" },
  { id: "c11-33", subjectId: "chemistry", chapterId: "chem11-ch8", year: 2023, month: "Feb", question: "Explain the liquefaction of gases using the critical temperature concept.", marks: 3, difficulty: "medium" },
  { id: "c11-34", subjectId: "chemistry", chapterId: "chem11-ch8", year: 2024, month: "July", question: "Calculate the pressure exerted by 2 moles of CO₂ at 27°C in a 5 L container using van der Waals equation.", marks: 3, difficulty: "hard" },

  // Adsorption and Colloids (chem11-ch9)
  { id: "c11-35", subjectId: "chemistry", chapterId: "chem11-ch9", year: 2024, month: "Feb", question: "Distinguish between physisorption and chemisorption. Give one example of each.", marks: 2, difficulty: "easy" },
  { id: "c11-36", subjectId: "chemistry", chapterId: "chem11-ch9", year: 2023, month: "Feb", question: "Explain the classification of colloids based on the physical state of dispersed phase and dispersion medium.", marks: 3, difficulty: "medium" },
  { id: "c11-37", subjectId: "chemistry", chapterId: "chem11-ch9", year: 2024, month: "July", question: "What is Brownian motion? Explain its significance in colloidal systems.", marks: 2, difficulty: "easy" },

  // Nuclear Chemistry (chem11-ch10)
  { id: "c11-38", subjectId: "chemistry", chapterId: "chem11-ch10", year: 2024, month: "Feb", question: "Explain the types of radioactive decay with examples: alpha, beta and gamma emission.", marks: 3, difficulty: "medium" },
  { id: "c11-39", subjectId: "chemistry", chapterId: "chem11-ch10", year: 2023, month: "Feb", question: "Define half-life. The half-life of a radioactive isotope is 10 days. How much of a 100 g sample remains after 30 days?", marks: 2, difficulty: "easy" },
  { id: "c11-40", subjectId: "chemistry", chapterId: "chem11-ch10", year: 2024, month: "July", question: "Explain the application of radioisotopes in medicine and agriculture.", marks: 3, difficulty: "medium" },

  // ========== MATHS 11 (additional) ==========
  // Sets and Relations (math11-ch1)
  { id: "m11-9", subjectId: "maths", chapterId: "math11-ch1", year: 2024, month: "Feb", question: "If A = {x: x is a prime number less than 20} and B = {x: x is a multiple of 3 less than 20}, find A∩B and A∪B. Represent on a Venn diagram.", marks: 3, difficulty: "easy" },
  { id: "m11-10", subjectId: "maths", chapterId: "math11-ch1", year: 2023, month: "Feb", question: "Define equivalence relation. Show that the relation R = {(a,b): a - b is divisible by 3} on the set of integers is an equivalence relation.", marks: 4, difficulty: "hard" },

  // Functions (math11-ch2)
  { id: "m11-11", subjectId: "maths", chapterId: "math11-ch2", year: 2024, month: "Feb", question: "Check whether the function f: R → R defined by f(x) = 3x - 5 is one-one and onto.", marks: 3, difficulty: "medium" },

  // Trigonometry (math11-ch4)
  { id: "m11-12", subjectId: "maths", chapterId: "math11-ch4", year: 2024, month: "Feb", question: "Prove that (sinθ + cosecθ)² + (cosθ + secθ)² = 7 + tan²θ + cot²θ.", marks: 3, difficulty: "medium" },
  { id: "m11-13", subjectId: "maths", chapterId: "math11-ch4", year: 2023, month: "Feb", question: "Find the general solution of the equation sinθ + sin3θ + sin5θ = 0.", marks: 4, difficulty: "hard" },

  // Straight Line (math11-ch5)
  { id: "m11-14", subjectId: "maths", chapterId: "math11-ch5", year: 2024, month: "Feb", question: "Find the distance between the parallel lines 3x - 4y + 7 = 0 and 6x - 8y + 15 = 0.", marks: 2, difficulty: "easy" },
  { id: "m11-15", subjectId: "maths", chapterId: "math11-ch5", year: 2023, month: "July", question: "Find the equation of the line passing through the point of intersection of 2x + y = 5 and x + 3y = 5 and making equal intercepts on the axes.", marks: 3, difficulty: "medium" },

  // Circle & Coordinate Geometry (math11-ch6)
  { id: "m11-16", subjectId: "maths", chapterId: "math11-ch6", year: 2024, month: "Feb", question: "Find the equation of the circle with centre (2,-3) and radius 5 units.", marks: 2, difficulty: "easy" },
  { id: "m11-17", subjectId: "maths", chapterId: "math11-ch6", year: 2023, month: "Feb", question: "Show that the points (1,2), (3,4) and (5,6) are collinear by distance formula.", marks: 2, difficulty: "easy" },

  // Limits (math11-ch7)
  { id: "m11-18", subjectId: "maths", chapterId: "math11-ch7", year: 2024, month: "Feb", question: "Evaluate the limit: lim(x→2) (x² - 5x + 6)/(x² - 4).", marks: 2, difficulty: "easy" },
  { id: "m11-19", subjectId: "maths", chapterId: "math11-ch7", year: 2023, month: "July", question: "Evaluate lim(x→0) (sin 3x)/(2x).", marks: 2, difficulty: "easy" },

  // Differentiation (math11-ch8)
  { id: "m11-20", subjectId: "maths", chapterId: "math11-ch8", year: 2024, month: "Feb", question: "Find the derivative of tan x with respect to x from first principles.", marks: 3, difficulty: "medium" },
  { id: "m11-21", subjectId: "maths", chapterId: "math11-ch8", year: 2023, month: "Feb", question: "If y = e^x sin x, find dy/dx.", marks: 2, difficulty: "easy" },

  // Integration (math11-ch9)
  { id: "m11-22", subjectId: "maths", chapterId: "math11-ch9", year: 2024, month: "Feb", question: "Evaluate ∫(3x² + 1/x² + √x) dx.", marks: 3, difficulty: "easy" },
  { id: "m11-23", subjectId: "maths", chapterId: "math11-ch9", year: 2023, month: "Feb", question: "Evaluate ∫cos²x dx from 0 to π/2.", marks: 3, difficulty: "medium" },
  { id: "m11-24", subjectId: "maths", chapterId: "math11-ch9", year: 2024, month: "July", question: "Find ∫ dx/(x² - a²) and write the result.", marks: 2, difficulty: "medium" },

  // Probability (math11-ch10)
  { id: "m11-25", subjectId: "maths", chapterId: "math11-ch10", year: 2024, month: "Feb", question: "A card is drawn from a well shuffled pack of 52 cards. Find the probability that it is either a king or a red card.", marks: 3, difficulty: "medium" },
  { id: "m11-26", subjectId: "maths", chapterId: "math11-ch10", year: 2023, month: "Feb", question: "State and explain Bayes' theorem. In a class, 60% are boys and 40% are girls. 80% of boys and 90% of girls pass an exam. Find the probability that a randomly chosen student who passed is a boy.", marks: 4, difficulty: "hard" },
  { id: "m11-27", subjectId: "maths", chapterId: "math11-ch10", year: 2024, month: "July", question: "Two dice are thrown simultaneously. Find the probability that the sum of the numbers appearing is at least 10.", marks: 2, difficulty: "easy" },

  // ========== BIOLOGY 11 (additional) ==========
  // Living World (bio11-ch1)
  { id: "b11-11", subjectId: "biology", chapterId: "bio11-ch1", year: 2024, month: "Feb", question: "What is the living world? Explain the characteristic features of living organisms.", marks: 3, difficulty: "easy" },
  { id: "b11-12", subjectId: "biology", chapterId: "bio11-ch1", year: 2023, month: "Feb", question: "Explain the taxonomic hierarchy with suitable examples.", marks: 3, difficulty: "medium" },

  // Systematics of Living Organisms (bio11-ch2)
  { id: "b11-13", subjectId: "biology", chapterId: "bio11-ch2", year: 2024, month: "Feb", question: "What is systematics? Differentiate between taxonomy and systematics.", marks: 2, difficulty: "easy" },
  { id: "b11-14", subjectId: "biology", chapterId: "bio11-ch2", year: 2023, month: "July", question: "Explain binomial nomenclature with examples. Who proposed this system?", marks: 2, difficulty: "easy" },

  // Kingdom Plantae (bio11-ch3)
  { id: "b11-15", subjectId: "biology", chapterId: "bio11-ch3", year: 2024, month: "Feb", question: "Explain the classification of Kingdom Plantae into divisions with characteristics.", marks: 4, difficulty: "medium" },
  { id: "b11-16", subjectId: "biology", chapterId: "bio11-ch3", year: 2023, month: "Feb", question: "Describe the life cycle of a fern plant with a neat diagram.", marks: 4, difficulty: "hard" },

  // Kingdom Animalia (bio11-ch4)
  { id: "b11-17", subjectId: "biology", chapterId: "bio11-ch4", year: 2024, month: "Feb", question: "Explain the salient features of phylum Arthropoda with examples.", marks: 3, difficulty: "easy" },
  { id: "b11-18", subjectId: "biology", chapterId: "bio11-ch4", year: 2023, month: "Feb", question: "Differentiate between chordates and non-chordates with examples.", marks: 2, difficulty: "easy" },

  // Cell Structure and Organization (bio11-ch5)
  { id: "b11-19", subjectId: "biology", chapterId: "bio11-ch5", year: 2024, month: "Feb", question: "Explain the structure and function of the endoplasmic reticulum and Golgi apparatus.", marks: 3, difficulty: "medium" },
  { id: "b11-20", subjectId: "biology", chapterId: "bio11-ch5", year: 2023, month: "Feb", question: "Draw a labeled diagram of a plant cell. Explain the functions of any three organelles.", marks: 4, difficulty: "medium" },

  // Biomolecules (bio11-ch6)
  { id: "b11-21", subjectId: "biology", chapterId: "bio11-ch6", year: 2024, month: "Feb", question: "Define carbohydrates. Classify them with examples.", marks: 3, difficulty: "easy" },
  { id: "b11-22", subjectId: "biology", chapterId: "bio11-ch6", year: 2023, month: "Feb", question: "Explain the structure of proteins. What are essential and non-essential amino acids?", marks: 3, difficulty: "medium" },

  // Cell Division (bio11-ch7)
  { id: "b11-23", subjectId: "biology", chapterId: "bio11-ch7", year: 2024, month: "Feb", question: "Differentiate between mitosis and meiosis with suitable diagrams.", marks: 4, difficulty: "medium" },
  { id: "b11-24", subjectId: "biology", chapterId: "bio11-ch7", year: 2023, month: "July", question: "Explain the stages of meiosis I with the help of diagrams.", marks: 4, difficulty: "hard" },

  // Plant Tissues and Anatomy (bio11-ch8)
  { id: "b11-25", subjectId: "biology", chapterId: "bio11-ch8", year: 2024, month: "Feb", question: "Classify plant tissues. Explain the structure and function of meristematic tissues.", marks: 3, difficulty: "medium" },
  { id: "b11-26", subjectId: "biology", chapterId: "bio11-ch8", year: 2023, month: "Feb", question: "Describe the anatomy of a dicot stem with a labeled diagram.", marks: 4, difficulty: "hard" },

  // Photosynthesis (bio11-ch9)
  { id: "b11-27", subjectId: "biology", chapterId: "bio11-ch9", year: 2024, month: "Feb", question: "Explain the light reaction of photosynthesis. Describe the Z-scheme of electron transport.", marks: 4, difficulty: "hard" },
  { id: "b11-28", subjectId: "biology", chapterId: "bio11-ch9", year: 2023, month: "Feb", question: "Differentiate between C3 and C4 plants with examples.", marks: 3, difficulty: "medium" },
  { id: "b11-29", subjectId: "biology", chapterId: "bio11-ch9", year: 2024, month: "July", question: "What are the factors affecting the rate of photosynthesis? Explain Blackman's law of limiting factors.", marks: 3, difficulty: "medium" },

  // Respiration and Energy Transfer (bio11-ch10)
  { id: "b11-30", subjectId: "biology", chapterId: "bio11-ch10", year: 2024, month: "Feb", question: "Explain the process of glycolysis with a flowchart.", marks: 4, difficulty: "medium" },
  { id: "b11-31", subjectId: "biology", chapterId: "bio11-ch10", year: 2023, month: "Feb", question: "Describe the Krebs cycle. How many ATP molecules are produced from one glucose molecule during aerobic respiration?", marks: 4, difficulty: "hard" },
  { id: "b11-32", subjectId: "biology", chapterId: "bio11-ch10", year: 2024, month: "July", question: "Distinguish between aerobic and anaerobic respiration. Give examples of anaerobic organisms.", marks: 3, difficulty: "easy" },
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
