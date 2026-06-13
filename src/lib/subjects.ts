export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  formulaCount?: number;
  questionCount?: number;
}

export interface Subject {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  standards: {
    std: number;
    chapters: Chapter[];
  }[];
}

export const subjects: Subject[] = [
  {
    id: "physics",
    title: "Physics",
    shortTitle: "Phy",
    description: "Laws of nature, energy, and the universe",
    icon: "⚡",
    color: "#B84A3A",
    gradient: "from-[#B84A3A] to-[#D4A843]",
    standards: [
      {
        std: 11,
        chapters: [
          { id: "units-measurements", number: 1, title: "Units and Measurements", description: "SI units, dimensions, errors", formulaCount: 15, questionCount: 120 },
          { id: "mathematical-methods", number: 2, title: "Mathematical Methods", description: "Vectors, calculus basics", formulaCount: 20, questionCount: 80 },
          { id: "motion-in-plane", number: 3, title: "Motion in a Plane", description: "Projectile, circular motion", formulaCount: 18, questionCount: 100 },
          { id: "laws-of-motion", number: 4, title: "Laws of Motion", description: "Newton's laws, friction", formulaCount: 12, questionCount: 110 },
          { id: "gravitation", number: 5, title: "Gravitation", description: "Universal law, Kepler's laws", formulaCount: 10, questionCount: 90 },
          { id: "mechanical-properties-solids", number: 6, title: "Mechanical Properties of Solids", description: "Elasticity, Hooke's law", formulaCount: 8, questionCount: 70 },
          { id: "thermal-properties-matter", number: 7, title: "Thermal Properties of Matter", description: "Heat, calorimetry", formulaCount: 14, questionCount: 85 },
          { id: "sound", number: 8, title: "Sound", description: "Waves, Doppler effect", formulaCount: 12, questionCount: 95 },
          { id: "optics", number: 9, title: "Optics", description: "Ray optics, optical instruments", formulaCount: 16, questionCount: 105 },
          { id: "electrostatics", number: 10, title: "Electrostatics", description: "Coulomb's law, electric field", formulaCount: 14, questionCount: 100 },
          { id: "electric-current", number: 11, title: "Electric Current Through Conductors", description: "Ohm's law, circuits", formulaCount: 12, questionCount: 95 },
          { id: "magnetism", number: 12, title: "Magnetism", description: "Magnetic fields, BIOT-Savart", formulaCount: 10, questionCount: 85 },
          { id: "em-waves", number: 13, title: "Electromagnetic Waves and Communication", description: "EM spectrum, modulation", formulaCount: 8, questionCount: 60 },
          { id: "semiconductors", number: 14, title: "Semiconductors", description: "Diodes, transistors", formulaCount: 6, questionCount: 75 },
        ],
      },
      {
        std: 12,
        chapters: [
          { id: "rotational-dynamics", number: 1, title: "Rotational Dynamics", description: "Moment of inertia, rolling", formulaCount: 16, questionCount: 110 },
          { id: "mechanical-properties-fluids", number: 2, title: "Mechanical Properties of Fluids", description: "Viscosity, surface tension", formulaCount: 14, questionCount: 95 },
          { id: "kinetic-theory-gases", number: 3, title: "Kinetic Theory of Gases and Radiation", description: "Gas laws, blackbody radiation", formulaCount: 12, questionCount: 85 },
          { id: "thermodynamics", number: 4, title: "Thermodynamics", description: "Laws of thermodynamics, heat engines", formulaCount: 10, questionCount: 100 },
          { id: "oscillations", number: 5, title: "Oscillations", description: "SHM, simple pendulum", formulaCount: 12, questionCount: 90 },
          { id: "superposition-waves", number: 6, title: "Superposition of Waves", description: "Interference, beats, stationary waves", formulaCount: 10, questionCount: 85 },
          { id: "wave-optics", number: 7, title: "Wave Optics", description: "Diffraction, polarization", formulaCount: 12, questionCount: 95 },
          { id: "electrostatics-12", number: 8, title: "Electrostatics", description: "Gauss law, capacitors", formulaCount: 14, questionCount: 105 },
          { id: "current-electricity", number: 9, title: "Current Electricity", description: "Kirchhoff's laws, bridges", formulaCount: 12, questionCount: 100 },
          { id: "magnetic-fields-current", number: 10, title: "Magnetic Fields due to Electric Current", description: "Ampere's law, solenoids", formulaCount: 10, questionCount: 90 },
          { id: "magnetic-materials", number: 11, title: "Magnetic Materials", description: "Dia/para/ferromagnetism", formulaCount: 8, questionCount: 70 },
          { id: "electromagnetic-induction", number: 12, title: "Electromagnetic Induction", description: "Faraday's law, Lenz's law", formulaCount: 10, questionCount: 95 },
          { id: "ac-circuits", number: 13, title: "AC Circuits", description: "LCR circuits, resonance", formulaCount: 12, questionCount: 85 },
          { id: "dual-nature", number: 14, title: "Dual Nature of Radiation and Matter", description: "Photoelectric effect, de Broglie", formulaCount: 8, questionCount: 80 },
          { id: "atoms-nuclei", number: 15, title: "Structure of Atoms and Nuclei", description: "Bohr model, radioactivity", formulaCount: 10, questionCount: 90 },
          { id: "semiconductor-devices", number: 16, title: "Semiconductor Devices", description: "Logic gates, rectifiers", formulaCount: 6, questionCount: 75 },
        ],
      },
    ],
  },
  {
    id: "chemistry",
    title: "Chemistry",
    shortTitle: "Chem",
    description: "Matter, reactions, and the elements",
    icon: "🧪",
    color: "#D4A843",
    gradient: "from-[#D4A843] to-[#B84A3A]",
    standards: [
      {
        std: 11,
        chapters: [
          { id: "basic-concepts", number: 1, title: "Some Basic Concepts of Chemistry", description: "Mole concept, stoichiometry", formulaCount: 12, questionCount: 100 },
          { id: "analytical-chemistry", number: 2, title: "Introduction to Analytical Chemistry", description: "Qualitative analysis", formulaCount: 6, questionCount: 70 },
          { id: "analytical-techniques", number: 3, title: "Basic Analytical Techniques", description: "Chromatography, spectroscopy", formulaCount: 4, questionCount: 60 },
          { id: "structure-of-atom", number: 4, title: "Structure of Atom", description: "Quantum numbers, orbitals", formulaCount: 8, questionCount: 95 },
          { id: "chemical-bonding", number: 5, title: "Chemical Bonding", description: "VBT, MOT, hybridization", formulaCount: 6, questionCount: 110 },
          { id: "redox-reactions", number: 6, title: "Redox Reactions", description: "Oxidation numbers, balancing", formulaCount: 8, questionCount: 85 },
          { id: "modern-periodic-table", number: 7, title: "Modern Periodic Table", description: "Periodic trends", formulaCount: 4, questionCount: 80 },
          { id: "elements-groups", number: 8, title: "Elements of Groups 1, 2 and 13 to 18", description: "s and p block", formulaCount: 10, questionCount: 90 },
          { id: "organic-basics", number: 9, title: "Organic Chemistry — Some Basic Principles", description: "IUPAC, isomerism", formulaCount: 6, questionCount: 100 },
          { id: "hydrocarbons", number: 10, title: "Hydrocarbons", description: "Alkanes, alkenes, alkynes", formulaCount: 8, questionCount: 95 },
          { id: "states-of-matter", number: 11, title: "States of Matter", description: "Gas laws, intermolecular forces", formulaCount: 10, questionCount: 80 },
          { id: "adsorption-colloids", number: 12, title: "Adsorption and Colloids", description: "Catalysis, colloids", formulaCount: 4, questionCount: 65 },
          { id: "nuclear-chemistry", number: 13, title: "Nuclear Chemistry and Radioactivity", description: "Half-life, fission/fusion", formulaCount: 6, questionCount: 70 },
          { id: "organic-principles", number: 14, title: "Basic Principles of Organic Chemistry", description: "Reaction mechanisms", formulaCount: 8, questionCount: 85 },
        ],
      },
      {
        std: 12,
        chapters: [
          { id: "solid-state", number: 1, title: "Solid State", description: "Crystal lattices, defects", formulaCount: 8, questionCount: 85 },
          { id: "solutions", number: 2, title: "Solutions", description: "Concentration, colligative properties", formulaCount: 12, questionCount: 100 },
          { id: "ionic-equilibria", number: 3, title: "Ionic Equilibria", description: "pH, buffer, solubility", formulaCount: 10, questionCount: 90 },
          { id: "chemical-thermodynamics", number: 4, title: "Chemical Thermodynamics", description: "Enthalpy, Gibbs free energy", formulaCount: 12, questionCount: 95 },
          { id: "electrochemistry", number: 5, title: "Electrochemistry", description: "Cells, Nernst equation", formulaCount: 10, questionCount: 100 },
          { id: "chemical-kinetics", number: 6, title: "Chemical Kinetics", description: "Rate laws, order, half-life", formulaCount: 8, questionCount: 90 },
          { id: "elements-groups-16-17-18", number: 7, title: "Elements of Groups 16, 17 and 18", description: "P-block elements", formulaCount: 6, questionCount: 80 },
          { id: "transition-elements", number: 8, title: "Transition and Inner Transition Elements", description: "d and f block", formulaCount: 6, questionCount: 85 },
          { id: "coordination-compounds", number: 9, title: "Coordination Compounds", description: "CFT, isomerism", formulaCount: 8, questionCount: 90 },
          { id: "halogen-derivatives", number: 10, title: "Halogen Derivatives", description: "SN1, SN2 reactions", formulaCount: 8, questionCount: 85 },
          { id: "alcohols-phenols-ethers", number: 11, title: "Alcohols, Phenols and Ethers", description: "Reactions, mechanisms", formulaCount: 6, questionCount: 95 },
          { id: "aldehydes-ketones", number: 12, title: "Aldehydes, Ketones and Carboxylic Acids", description: "Carbonyl compounds", formulaCount: 8, questionCount: 100 },
          { id: "amines", number: 13, title: "Amines", description: "Basicity, diazonium salts", formulaCount: 4, questionCount: 80 },
          { id: "biomolecules", number: 14, title: "Biomolecules", description: "Carbohydrates, proteins", formulaCount: 4, questionCount: 75 },
          { id: "polymers", number: 15, title: "Polymers", description: "Types, polymerization", formulaCount: 2, questionCount: 60 },
          { id: "chemistry-in-life", number: 16, title: "Chemistry in Everyday Life", description: "Drugs, cosmetics", formulaCount: 2, questionCount: 55 },
        ],
      },
    ],
  },
  {
    id: "mathematics",
    title: "Mathematics",
    shortTitle: "Math",
    description: "Numbers, patterns, and logical reasoning",
    icon: "📐",
    color: "#4A6FA5",
    gradient: "from-[#4A6FA5] to-[#6B8FBF]",
    standards: [
      {
        std: 11,
        chapters: [
          { id: "angle-measurement", number: 1, title: "Angle and its Measurement", description: "Degree, radian, arc length", formulaCount: 6, questionCount: 70 },
          { id: "trigonometry-1", number: 2, title: "Trigonometry — I", description: "Trigonometric functions, identities", formulaCount: 20, questionCount: 100 },
          { id: "trigonometry-2", number: 3, title: "Trigonometry — II", description: "Trigonometric equations, inverses", formulaCount: 18, questionCount: 95 },
          { id: "determinants-matrices", number: 4, title: "Determinants and Matrices", description: "Properties, operations", formulaCount: 12, questionCount: 90 },
          { id: "straight-line", number: 5, title: "Straight Line", description: "Slope, equations, family of lines", formulaCount: 14, questionCount: 85 },
          { id: "circle", number: 6, title: "Circle", description: "Standard forms, tangents", formulaCount: 10, questionCount: 80 },
          { id: "conic-sections", number: 7, title: "Conic Sections", description: "Parabola, ellipse, hyperbola", formulaCount: 16, questionCount: 95 },
          { id: "dispersion", number: 8, title: "Measures of Dispersion", description: "Range, variance, standard deviation", formulaCount: 8, questionCount: 70 },
        ],
      },
      {
        std: 12,
        chapters: [
          { id: "mathematical-logic", number: 1, title: "Mathematical Logic", description: "Statements, truth tables", formulaCount: 6, questionCount: 75 },
          { id: "matrices", number: 2, title: "Matrices", description: "Matrix operations, inverses", formulaCount: 10, questionCount: 90 },
          { id: "trigonometric-functions", number: 3, title: "Trigonometric Functions", description: "Trig identities, equations", formulaCount: 16, questionCount: 95 },
          { id: "pair-of-straight-lines", number: 4, title: "Pair of Straight Lines", description: "Combined equation, angle", formulaCount: 10, questionCount: 80 },
          { id: "vectors", number: 5, title: "Vectors", description: "Dot product, cross product", formulaCount: 14, questionCount: 90 },
          { id: "3d-geometry", number: 6, title: "Three Dimensional Geometry", description: "Lines, planes, distances", formulaCount: 12, questionCount: 85 },
          { id: "line-plane", number: 7, title: "Line and Plane", description: "Equations, intersections", formulaCount: 10, questionCount: 80 },
          { id: "linear-programming", number: 8, title: "Linear Programming", description: "LPP, graphical method", formulaCount: 6, questionCount: 65 },
        ],
      },
    ],
  },
  {
    id: "biology",
    title: "Biology",
    shortTitle: "Bio",
    description: "Life, cells, and living organisms",
    icon: "🧬",
    color: "#4A7C59",
    gradient: "from-[#4A7C59] to-[#6BAF7D]",
    standards: [
      {
        std: 11,
        chapters: [
          { id: "living-world", number: 1, title: "Living World", description: "Characteristics of life, biodiversity", formulaCount: 0, questionCount: 70 },
          { id: "systematics", number: 2, title: "Systematics of Living Organisms", description: "Taxonomy, classification", formulaCount: 0, questionCount: 75 },
          { id: "kingdom-plantae", number: 3, title: "Kingdom Plantae", description: "Plant groups, life cycles", formulaCount: 0, questionCount: 85 },
          { id: "kingdom-animalia", number: 4, title: "Kingdom Animalia", description: "Animal phyla", formulaCount: 0, questionCount: 90 },
          { id: "cell-structure", number: 5, title: "Cell Structure and Organization", description: "Organelles, cell theory", formulaCount: 0, questionCount: 80 },
          { id: "biomolecules", number: 6, title: "Biomolecules", description: "Carbohydrates, proteins, lipids, nucleic acids", formulaCount: 0, questionCount: 85 },
          { id: "cell-division", number: 7, title: "Cell Division", description: "Mitosis, meiosis", formulaCount: 0, questionCount: 80 },
          { id: "plant-tissues", number: 8, title: "Plant Tissues and Anatomy", description: "Meristematic, permanent tissues", formulaCount: 0, questionCount: 75 },
          { id: "flowering-plants", number: 9, title: "Morphology of Flowering Plants", description: "Roots, stems, leaves, flowers", formulaCount: 0, questionCount: 85 },
          { id: "animal-tissue", number: 10, title: "Animal Tissue", description: "Epithelial, connective, muscular, neural", formulaCount: 0, questionCount: 80 },
          { id: "animal-type-cockroach", number: 11, title: "Study of Animal Type — Cockroach", description: "Morphology, anatomy", formulaCount: 0, questionCount: 65 },
          { id: "photosynthesis", number: 12, title: "Photosynthesis", description: "Light and dark reactions", formulaCount: 4, questionCount: 90 },
          { id: "respiration-energy", number: 13, title: "Respiration and Energy Transfer", description: "Glycolysis, Kreb's cycle, ETC", formulaCount: 4, questionCount: 85 },
        ],
      },
      {
        std: 12,
        chapters: [
          { id: "genetics", number: 1, title: "Genetic Basis of Inheritance", description: "Mendelian genetics, linkage", formulaCount: 4, questionCount: 100 },
          { id: "gene-nature", number: 2, title: "Gene: Its Nature, Expression and Regulation", description: "DNA, transcription, translation", formulaCount: 2, questionCount: 90 },
          { id: "biotechnology-process", number: 3, title: "Biotechnology: Process and Application", description: "rDNA, PCR, applications", formulaCount: 0, questionCount: 85 },
          { id: "food-production", number: 4, title: "Enhancement in Food Production", description: "Plant breeding, animal husbandry", formulaCount: 0, questionCount: 75 },
          { id: "evolution", number: 5, title: "Origin and Evolution of Life", description: "Darwinism, speciation", formulaCount: 0, questionCount: 80 },
          { id: "plant-water-relation", number: 6, title: "Plant Water Relation", description: "Absorption, transpiration", formulaCount: 2, questionCount: 70 },
          { id: "plant-growth", number: 7, title: "Plant Growth and Mineral Nutrition", description: "Phytohormones, essential elements", formulaCount: 0, questionCount: 75 },
          { id: "respiration-circulation", number: 8, title: "Respiration and Circulation", description: "Human physiology", formulaCount: 4, questionCount: 95 },
          { id: "control-coordination", number: 9, title: "Control and Coordination", description: "Nervous system, endocrine system", formulaCount: 0, questionCount: 90 },
          { id: "health-diseases", number: 10, title: "Human Health and Diseases", description: "Immunity, diseases, drugs", formulaCount: 0, questionCount: 85 },
          { id: "enhancement-food", number: 11, title: "Enhancement of Food Production", description: "Tissue culture, biofortification", formulaCount: 0, questionCount: 70 },
          { id: "biotechnology", number: 12, title: "Biotechnology", description: "Transgenic organisms, gene therapy", formulaCount: 0, questionCount: 75 },
          { id: "organisms-environment", number: 13, title: "Organisms and Environment", description: "Ecology, ecosystem, pollution", formulaCount: 0, questionCount: 80 },
        ],
      },
    ],
  },
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export function getChapter(subjectId: string, std: number, chapterId: string): Chapter | undefined {
  const subject = getSubject(subjectId);
  if (!subject) return undefined;
  const standard = subject.standards.find((s) => s.std === std);
  if (!standard) return undefined;
  return standard.chapters.find((c) => c.id === chapterId);
}

export function getSubjectInitials(name: string): string {
  return name.slice(0, 2).toUpperCase();
}
