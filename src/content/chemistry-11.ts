interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "basic-concepts": {
    overview: "Ever wondered how chemists count things that are way too small to see? That's what this chapter is about. You'll learn the mole concept — basically a way to count atoms and molecules like you'd count eggs in a carton. Stoichiometry is just the math that lets you predict how much stuff you'll get from a reaction.",
    concepts: [
      {
        title: "Mole Concept — The Chemist's Counting Unit",
        body: "Think of a dozen eggs — except instead of 12, we're counting 6.022 × 10²³ particles. That's one mole. Why such a weird number? Because that's how many atoms of carbon-12 you need to get exactly 12 grams of it. So a mole is just a bridge between the microscopic world (atoms) and the stuff you can actually weigh on a scale."
      },
      {
        title: "Molar Mass and the Mole Formula",
        body: "Molar mass is just the mass of one mole of a substance. For carbon, it's 12 g/mol. For water, it's roughly 18 g/mol (16 for oxygen + 2 for hydrogens). The golden formula: n = m / M. n is number of moles, m is mass in grams, M is molar mass. That's basically all you need."
      },
      {
        title: "Percentage Composition",
        body: "Ever looked at a nutrition label? Same idea. Percentage composition tells you what fraction of a compound's mass comes from each element. If water is 16 g oxygen out of 18 g total, that's about 88.9% oxygen by mass. Rest is hydrogen."
      },
      {
        title: "Empirical and Molecular Formulas",
        body: "Empirical formula is the simplest whole-number ratio of atoms in a compound. Molecular formula is the real deal. Think of it like a recipe: empirical is the ratio of ingredients (2 eggs, 1 cup flour), molecular is the actual amounts for one batch."
      },
      {
        title: "Stoichiometry — Reaction Math",
        body: "Stoichiometry is just balancing your checkbook, but with chemicals. If you know the balanced equation, you can figure out exactly how much of each reactant you need and how much product you'll get. The mole ratio from the balanced equation is your conversion factor."
      },
      {
        title: "Limiting Reagent and Yield",
        body: "In a burger joint, if you have 10 buns but only 5 patties, you can only make 5 burgers. The patties are the limiting reagent. Same in chemistry. The reactant that runs out first determines how much product you get. Actual yield vs theoretical yield gives you percentage yield."
      }
    ],
    keyPoints: [
      "One mole = 6.022 × 10²³ particles (Avogadro's number)",
      "n = m / M — the single most important formula in this chapter",
      "Empirical formula = simplest ratio; molecular formula = actual number of atoms",
      "Balanced equations give you mole ratios — use them to convert between substances",
      "Limiting reagent is the reactant that finishes first and limits product formation",
      "Percentage yield = (actual yield / theoretical yield) × 100",
      "Always balance the chemical equation before doing stoichiometric calculations",
      "Molar volume at STP: 22.4 L for one mole of any gas"
    ],
    importantQuestions: [
      "Calculate the number of moles in 22 g of CO₂. (Atomic masses: C = 12, O = 16)",
      "A compound contains 40% carbon, 6.67% hydrogen, and 53.33% oxygen. Find its empirical formula. If its molecular mass is 180 g/mol, find the molecular formula.",
      "In the reaction N₂ + 3H₂ → 2NH₃, if 28 g of N₂ reacts with 10 g of H₂, which is the limiting reagent? How much NH₃ is formed?",
      "What is the mass of one atom of carbon-12?",
      "Define molarity. Calculate the molarity of a solution containing 5.85 g of NaCl in 500 mL of solution."
    ]
  },

  "analytical-chemistry": {
    overview: "Imagine you're a detective trying to figure out what's inside a mysterious powder. That's analytical chemistry. This chapter covers qualitative analysis — figuring out what ions are present in a given sample. You'll learn how to identify cations and anions using precipitation reactions, flame tests, and other cool tricks.",
    concepts: [
      {
        title: "Qualitative vs Quantitative Analysis",
        body: "Qualitative analysis asks 'what's in there?' Quantitative asks 'how much?' This chapter focuses on qualitative. You're basically playing 20 Questions with a chemical sample — adding reagents, observing color changes, and narrowing down the possibilities until you know exactly which ions are present."
      },
      {
        title: "Systematic Analysis of Cations",
        body: "Cation analysis is like a tournament bracket. You add group reagents one by one. Group 1 (HCl) precipates chlorides. Group 2 (H₂S in acidic medium) precipates sulfides. And so on. Each step removes a set of ions until only one remains. It's elimination, chemistry-style."
      },
      {
        title: "Flame Tests — The Color Code",
        body: "Drop a bit of your sample into a flame and watch the color. Sodium gives a brilliant yellow. Copper gives green. Strontium gives red. Different metals absorb energy and release it as specific colors of light. It's like each metal has its own fingerprint."
      },
      {
        title: "Analysis of Anions",
        body: "Anions get tested too. Carbonates fizz with acid (releasing CO₂). Sulfates form a white precipitate with barium chloride. Chlorides give a white precipitate with silver nitrate. Each anion has its own signature reaction."
      },
      {
        title: "Confirmatory Tests",
        body: "Preliminary tests give you a hunch. Confirmatory tests prove it. If you think you have copper ions, add excess ammonia. A deep blue color confirms it. It's like checking your answer twice before submitting."
      }
    ],
    keyPoints: [
      "Qualitative analysis identifies constituents; quantitative measures how much",
      "Cation analysis uses group reagents to precipitate ions step by step",
      "Group 1: HCl, Group 2: H₂S (acidic), Group 3: (NH₄)₂S, Group 4: (NH₄)₂CO₃",
      "Flame test: Na⁺ = yellow, K⁺ = lilac, Ca²⁺ = brick red, Cu²⁺ = green",
      "Anion tests: CO₃²⁻ fizzes with acid, SO₄²⁻ gives white ppt with BaCl₂, Cl⁻ gives white ppt with AgNO₃",
      "Confirmatory tests are specific reactions that uniquely identify an ion",
      "Always note color, smell, and any precipitate formed during analysis"
    ],
    importantQuestions: [
      "A white salt gives a brick-red color in the flame test. When treated with HCl, it produces a gas that turns limewater milky. Identify the salt.",
      "Describe the systematic analysis of a mixture containing Pb²⁺ and Cu²⁺ ions.",
      "How would you distinguish between Na₂CO₃ and Na₂SO₄ using chemical tests?",
      "What is the role of group reagents in qualitative analysis? Explain with one example."
    ]
  },

  "analytical-techniques": {
    overview: "Ever wondered how scientists separate complicated mixtures or figure out what's inside a tiny speck of paint? This chapter shows you the tools. Chromatography, spectroscopy, and other techniques are like having superpowers — you can separate invisible mixtures and identify molecules just by how they interact with light or surfaces.",
    concepts: [
      {
        title: "Chromatography — The Separation Superpower",
        body: "Chromatography is like a race. Different compounds in a mixture move at different speeds across a stationary phase (paper, silica gel, etc.) because they stick to it differently. The ones that stick less move faster. By the end, they're all separated into distinct spots. Black ink? Turns out it's actually a mix of blue, red, and yellow."
      },
      {
        title: "Paper and Thin Layer Chromatography",
        body: "Paper chromatography uses filter paper as the stationary phase. You spot your sample near the bottom, dip the edge in solvent, and watch it climb. TLC does the same but on a glass plate coated with silica. Both are quick, cheap, and perfect for checking purity of compounds."
      },
      {
        title: "Spectroscopy — Reading Light",
        body: "Spectroscopy measures how a substance interacts with light. Different molecules absorb specific wavelengths. It's like each molecule has a unique barcode. If you shine light through a sample and see which wavelengths got absorbed, you can figure out what's in there."
      },
      {
        title: "Distillation — Boiling Things Apart",
        body: "Different liquids boil at different temperatures. Distillation uses this to separate them. Heat the mixture, and the one with the lower boiling point vaporizes first. Condense it back to liquid, and you've got a pure component. Simple distillation for one component, fractional for mixtures with similar boiling points."
      },
      {
        title: "Solvent Extraction",
        body: "Some compounds dissolve better in one solvent than another. If you shake your mixture with a solvent that doesn't mix with water, certain compounds will move into that solvent layer. It's like your friends deciding which table to sit at in the cafeteria — everyone ends up where they fit best."
      }
    ],
    keyPoints: [
      "Chromatography separates mixtures based on differential affinity to stationary vs mobile phase",
      "Rf value = distance moved by substance / distance moved by solvent front",
      "Paper chromatography: stationary phase = paper, mobile phase = solvent",
      "TLC uses a silica-coated plate for faster, better separation",
      "Spectroscopy identifies compounds by their unique absorption spectrum",
      "Distillation separates liquids based on boiling point differences",
      "Simple distillation for boiling point differences > 25°C; fractional for closer boiling points",
      "Solvent extraction uses differential solubility to isolate compounds"
    ],
    importantQuestions: [
      "Explain the principle of paper chromatography. How is Rf value calculated?",
      "A mixture of two dyes is separated using TLC. One dye moves 4 cm while the solvent front moves 8 cm. Calculate the Rf value of each dye.",
      "Differentiate between simple distillation and fractional distillation.",
      "Describe how UV-visible spectroscopy can be used to identify a compound."
    ]
  },

  "structure-of-atom": {
    overview: "Ever tried to take a selfie of your soul? That's basically what scientists did when they tried to figure out what an atom looks like inside. This chapter takes you from simple 'billiard ball' models to the quantum view — where electrons act like waves, exist in orbitals, and can be described by weird-sounding things like quantum numbers. Buckle up.",
    concepts: [
      {
        title: "Evolution of Atomic Models",
        body: "Dalton said atoms are indestructible spheres. Thomson discovered electrons and made the 'plum pudding' model. Rutherford shot alpha particles at gold foil and found a tiny nucleus. Bohr said electrons orbit in fixed energy levels. Each model improved on the last — like phone upgrades, but over a century."
      },
      {
        title: "Quantum Numbers — The Electron's Address",
        body: "Every electron in an atom has a unique address. Principal quantum number (n) tells you the energy level — like what floor of a building. Azimuthal (l) tells you the shape of the orbital — like whether it's a hallway or a room. Magnetic (m) tells you orientation — which direction the room faces. Spin (s) tells you whether the electron spins clockwise or counterclockwise."
      },
      {
        title: "Shapes of Orbitals",
        body: "s orbitals are spherical — like a balloon around the nucleus. p orbitals are dumbbell-shaped — like two balloons tied together. d orbitals are even fancier — clover shapes. f orbitals are just weird. Higher l means more complicated shapes."
      },
      {
        title: "Electronic Configuration — Aufbau and Friends",
        body: "Electrons fill orbitals in a specific order: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p... Aufbau principle says fill from lowest energy first. Pauli's exclusion principle says no two electrons in an atom can have identical quantum numbers — so at most 2 per orbital. Hund's rule says electrons spread out before pairing up, like people on an empty bus."
      },
      {
        title: "de Broglie and Heisenberg — The Quantum Weirdness",
        body: "de Broglie said electrons behave like waves too. Heisenberg said you can't know both where an electron is and how fast it's going at the same time — the uncertainty principle. It's not about bad measurement; it's a fundamental limit of nature. Electrons are fuzzy, not tiny planets."
      }
    ],
    keyPoints: [
      "Rutherford's gold foil experiment proved the nucleus exists",
      "Bohr model works for hydrogen but fails for multi-electron atoms",
      "Quantum numbers: n (shell), l (subshell), m (orbital), s (spin)",
      "s orbital = spherical, p orbital = dumbbell, d orbital = clover, f = complex",
      "Aufbau: fill from lowest energy; Pauli: max 2 electrons per orbital; Hund: spread before pairing",
      "de Broglie: matter has wave nature. Heisenberg: can't know both position and momentum exactly",
      "Electronic configuration of Cu: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ (exception due to stability)"
    ],
    importantQuestions: [
      "What are quantum numbers? Assign all four quantum numbers to the last electron in chlorine (Z = 17).",
      "Explain Heisenberg's uncertainty principle. Why does it not apply to macroscopic objects?",
      "Write the electronic configuration of Fe (Z = 26) and Fe²⁺.",
      "What is the shape of s, p, and d orbitals? Draw them.",
      "State and explain Hund's rule of maximum multiplicity with an example."
    ]
  },

  "chemical-bonding": {
    overview: "Why do atoms stick together? Why is water wet and salt salty? This chapter is all about the glue that holds matter together. You'll learn how atoms share or transfer electrons, why some bonds are strong and others weak, and how to predict the shape of molecules. It's like relationship counseling for atoms.",
    concepts: [
      {
        title: "Ionic Bond — The Generous Handover",
        body: "Some atoms really want to give away electrons (metals), and others really want to take them (non-metals). When they meet, the metal donates an electron to the non-metal, becoming a positive ion, and the non-metal becomes a negative ion. Opposite charges attract — that's an ionic bond. Sodium and chlorine do this to make NaCl."
      },
      {
        title: "Covalent Bond — Sharing Is Caring",
        body: "When two non-metals meet, neither wants to give up electrons. So they share. Each shared pair of electrons forms a covalent bond. H₂, O₂, N₂ — all held together by shared electrons. Single bond is one shared pair, double bond is two, triple bond is three. The more you share, the stronger the bond."
      },
      {
        title: "VSEPR Theory — Shape of Molecules",
        body: "Electron pairs repel each other like magnets of the same pole. So they arrange themselves as far apart as possible. That's VSEPR. Two pairs? Linear (180°). Three pairs? Trigonal planar (120°). Four pairs? Tetrahedral (109.5°). The shape of a molecule determines a lot about its properties — including whether it's polar or not."
      },
      {
        title: "Valence Bond Theory and Hybridization",
        body: "VBT says bonds form when atomic orbitals overlap. But carbon's orbitals aren't arranged right for making 4 equal bonds — so they 'mix' to form hybrid orbitals. sp³ hybridization gives methane its tetrahedral shape. sp² gives ethene's trigonal planar geometry. sp gives ethyne's linear structure. Think of it like mixing paint colors to get a new shade."
      },
      {
        title: "Molecular Orbital Theory",
        body: "MOT says when two atoms bond, their atomic orbitals combine to form molecular orbitals — one lower energy (bonding) and one higher energy (antibonding). Electrons fill these like they fill atomic orbitals. If more electrons are in bonding orbitals than antibonding, the molecule is stable. This explains why He₂ doesn't exist but O₂ is paramagnetic."
      },
      {
        title: "Polarity and Intermolecular Forces",
        body: "Some molecules have positive and negative ends — like a battery. That's polarity. Water is polar, oil isn't. Polar molecules stick to each other through dipole-dipole forces. Hydrogen bonding is a super strong version of this. London forces are weak attractions between all molecules. These forces determine melting points, boiling points, and solubility."
      }
    ],
    keyPoints: [
      "Ionic bond: transfer of electrons between metal and non-metal",
      "Covalent bond: sharing of electrons between non-metals",
      "Lewis structures show valence electrons as dots around atomic symbols",
      "VSEPR: electron pairs repel and arrange for maximum separation",
      "Hybridization: sp³ (4 bonds, tetrahedral), sp² (3 bonds, trigonal planar), sp (2 bonds, linear)",
      "MOT: bonding orbitals are lower energy, antibonding are higher; bond order = (bonding - antibonding)/2",
      "Polar bonds arise from electronegativity differences between atoms",
      "Hydrogen bonding is the strongest intermolecular force and explains water's high boiling point"
    ],
    importantQuestions: [
      "Draw Lewis structures for H₂O, NH₃, and CO₂.",
      "Explain the formation of H₂ molecule using MOT. Calculate its bond order.",
      "What is hybridization? Predict the shape of CH₄, C₂H₄, and C₂H₂ using hybridization.",
      "Differentiate between ionic and covalent bonds with two examples each.",
      "Why does ice float on water? Explain using hydrogen bonding."
    ]
  },

  "redox-reactions": {
    overview: "Every time you charge your phone, start a fire, or watch iron rust, you're looking at redox reactions. Redox is short for reduction-oxidation. One species loses electrons (oxidation), another gains them (reduction). It's the ultimate give-and-take of chemistry. This chapter teaches you how to track those electrons and balance even the messiest reactions.",
    concepts: [
      {
        title: "Oxidation and Reduction — The Classic Dance",
        body: "Oxidation is loss of electrons. Reduction is gain of electrons. A mnemonic: OIL RIG (Oxidation Is Loss, Reduction Is Gain). But there's also the older definition: oxidation adds oxygen or removes hydrogen, reduction removes oxygen or adds hydrogen. These always happen together — you can't have one without the other."
      },
      {
        title: "Oxidation Number — The Electron Scorecard",
        body: "Oxidation number is a pretend charge an atom would have if all bonds were ionic. It helps you track electrons. Rules: elements in free state = 0; oxygen is almost always -2; hydrogen is +1; sum of oxidation numbers in a compound = 0; in an ion = charge on the ion. Simple rules, but they make everything else work."
      },
      {
        title: "Balancing Redox Reactions — The Half-Reaction Method",
        body: "Split the reaction into two halves — one for oxidation, one for reduction. Balance atoms other than H and O first. Add H₂O to balance oxygen, then H⁺ to balance hydrogen. Add electrons to balance charge. Then multiply each half so electrons cancel out, and add them back together. In basic medium, add OH⁻ to neutralize H⁺."
      },
      {
        title: "Electrochemical Cells — Batteries and Beyond",
        body: "A redox reaction can be used to generate electricity. Put oxidation in one container and reduction in another, connect them with a wire and a salt bridge, and electrons flow through the wire. That's an electrochemical cell. Daniel cell uses Zn (oxidation) and Cu (reduction). The voltage depends on the tendency of metals to lose electrons."
      },
      {
        title: "Electrochemical Series — The Popularity Chart",
        body: "Metals arranged by their tendency to lose electrons form the electrochemical series. Li is at the top (most likely to get oxidized) and Au is at the bottom (least likely). Any metal above can displace any metal below from its salt solution. It also tells you which metal works best in a battery."
      }
    ],
    keyPoints: [
      "OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons",
      "Oxidation number rules: free element = 0, O = -2, H = +1, sum = 0 for compounds",
      "Oxidizing agent: gets reduced (gains electrons); Reducing agent: gets oxidized (loses electrons)",
      "Half-reaction method: split, balance atoms, add electrons, combine",
      "In acidic medium: use H⁺ and H₂O; in basic medium: use OH⁻ and H₂O",
      "Daniel cell: Zn (anode, oxidation) and Cu (cathode, reduction), voltage ≈ 1.1 V",
      "Electrochemical series: stronger reducing agents at the top (Li), stronger oxidizing agents at the bottom (F₂)"
    ],
    importantQuestions: [
      "Calculate the oxidation number of Cr in K₂Cr₂O₇ and of Mn in KMnO₄.",
      "Balance the following redox reaction in acidic medium: Cr₂O₇²⁻ + Fe²⁺ → Cr³⁺ + Fe³⁺",
      "What is an oxidizing agent? Identify the oxidizing and reducing agents in the reaction: Zn + CuSO₄ → ZnSO₄ + Cu",
      "Explain the construction and working of a Daniel cell with a neat diagram.",
      "Why is fluorine the strongest oxidizing agent in the periodic table?"
    ]
  },

  "modern-periodic-table": {
    overview: "The periodic table isn't just a chart on a wall — it's the ultimate cheat sheet for chemistry. Once you understand how it's organized, you can predict almost anything about an element: its size, its reactivity, what kind of bonds it forms. This chapter shows you the patterns (periodic trends) that make the table so powerful.",
    concepts: [
      {
        title: "Mendeleev vs Modern Periodic Law",
        body: "Mendeleev arranged elements by atomic mass and left gaps for undiscovered elements — bold move. Modern periodic law says properties repeat when elements are arranged by atomic number, not mass. That's why the modern table fixes the few places Mendeleev got wrong (like tellurium and iodine). Atomic number is the real deal."
      },
      {
        title: "Blocks of the Periodic Table",
        body: "The table is divided into blocks based on which orbital the last electron enters. s-block (groups 1-2): last electron in s orbital. p-block (groups 13-18): last in p. d-block (groups 3-12): last in d. f-block (lanthanides and actinides): last in f. The block tells you the electron configuration of the element."
      },
      {
        title: "Atomic Radius — How Big Is an Atom?",
        body: "Atomic radius decreases as you go left to right across a period (more protons pull electrons tighter). It increases as you go down a group (new shells added). So the biggest atoms are at the bottom-left (francium), and the smallest are at the top-right (helium). Size matters for practically everything an atom does."
      },
      {
        title: "Ionization Energy and Electronegativity",
        body: "Ionization energy is how much energy you need to rip an electron off an atom. It increases across a period (tighter hold) and decreases down a group (further from nucleus). Electronegativity is how badly an atom wants to steal electrons from others. Same trend. Fluorine is the most electronegative — it's the ultimate electron thief."
      },
      {
        title: "Periodic Trends in Chemical Behavior",
        body: "Metallic character decreases across a period (left elements are metals, right are non-metals). Reactivity of metals increases down a group (Cs explodes in water worse than Na). Reactivity of non-metals decreases down a group (F₂ is terrifying, I₂ is mild). Everything follows the same pattern — just read the table."
      }
    ],
    keyPoints: [
      "Modern periodic law: properties are a periodic function of atomic number",
      "s-block (1-2), p-block (13-18), d-block (3-12), f-block (lanthanides + actinides)",
      "Atomic radius decreases across a period, increases down a group",
      "Ionization energy increases across a period, decreases down a group",
      "Electronegativity increases across a period, decreases down a group (F is highest)",
      "Metallic character decreases left to right, increases top to bottom",
      "Noble gases (Group 18) have full valence shells — they're the chill ones that don't react"
    ],
    importantQuestions: [
      "Explain the trend in atomic radius across a period and down a group.",
      "Why is ionization energy of nitrogen higher than oxygen?",
      "Define electronegativity. Which element has the highest electronegativity?",
      "Compare the metallic character of Na, Mg, and Al across period 3.",
      "What are s-block, p-block, d-block, and f-block elements? Give one example of each."
    ]
  },

  "elements-groups": {
    overview: "Not all elements in the periodic table are equally popular. This chapter is about the s-block (groups 1 and 2) and p-block (groups 13 to 18) elements. These are the elements that make up most of the Earth's crust, your body, and the air you breathe. From the explosive reactivity of alkali metals to the laziness of noble gases — it's all here.",
    concepts: [
      {
        title: "Alkali Metals (Group 1) — The Drama Queens",
        body: "Lithium, sodium, potassium, and friends all have one electron in their outer shell that they desperately want to get rid of. They're the most reactive metals. Drop sodium in water and it fizzes and zips around. Drop potassium and it catches fire. They react with water to form alkalis (hence the name) and hydrogen gas. Store them under oil or they'll react with air moisture."
      },
      {
        title: "Alkaline Earth Metals (Group 2)",
        body: "These have two electrons to lose, so they're less reactive than Group 1 but still pretty reactive. Magnesium burns with a blinding white light (flashbulbs use this). Calcium is essential for bones. Beryllium is surprisingly unreactive — the odd one out. Their compounds are often found in rocks and minerals."
      },
      {
        title: "Boron Family (Group 13)",
        body: "Boron is a metalloid (kinda metal, kinda not). Aluminum is everywhere — foil, cans, airplanes. Gallium melts in your hand. Thallium is toxic. The trend: as you go down, metallic character increases. Boron is non-metallic, aluminum is metallic, and by the time you reach thallium, it's fully metallic."
      },
      {
        title: "Carbon Family (Group 14)",
        body: "Carbon is the king of life — it forms more compounds than all other elements combined. Silicon is the basis of computer chips. Germanium is used in electronics. Tin makes bronze. Lead was used in pipes (bad idea). The key pattern: carbon forms strong double/triple bonds; silicon and below prefer single bonds."
      },
      {
        title: "Nitrogen and Oxygen Families (Groups 15 and 16)",
        body: "Nitrogen makes up 78% of air but N≡N is so stable it's hard to break. Phosphorus catches fire in air. Oxygen keeps us alive. Sulfur smells like rotten eggs. The reactivity and properties change dramatically as you go down these groups."
      },
      {
        title: "Halogens and Noble Gases (Groups 17 and 18)",
        body: "Halogens are one electron short of a full shell — they desperately want one more. Fluorine is the most reactive element known. Chlorine is used to disinfect water. Iodine is needed for your thyroid. Noble gases already have a full shell — they don't want anything. They're the introverts of the periodic table."
      }
    ],
    keyPoints: [
      "Alkali metals (Group 1): ns¹, highly reactive, form +1 ions, stored under oil",
      "Alkaline earth metals (Group 2): ns², less reactive than Group 1, form +2 ions",
      "Halogens (Group 17): ns²np⁵, highly reactive non-metals, form -1 ions",
      "Noble gases (Group 18): ns²np⁶, inert due to full valence shell",
      "Metallic character increases down a group in p-block",
      "Carbon can form catenated compounds (long chains) — unique in Group 14",
      "Reactivity of halogens decreases down the group: F₂ > Cl₂ > Br₂ > I₂",
      "Noble gases were once called 'inert gases' but some compounds like XeF₂ exist"
    ],
    importantQuestions: [
      "Why are alkali metals stored under kerosene? What happens when sodium reacts with water?",
      "Explain the trend in reactivity of halogens down the group.",
      "What are the anomalous properties of lithium compared to other alkali metals?",
      "Why is carbon able to form such a huge number of compounds?",
      "Describe the preparation and uses of bleaching powder (CaOCl₂)."
    ]
  },

  "organic-basics": {
    overview: "Organic chemistry is the chemistry of carbon — and since you're made of carbon, it's basically the chemistry of you. This chapter gives you the tools to name organic compounds (IUPAC), understand why they have different shapes (isomerism), and classify them by how their atoms are arranged. It's the grammar of organic chemistry.",
    concepts: [
      {
        title: "Why Carbon Is Special",
        body: "Carbon can bond with itself to form long chains, rings, and branches — a property called catenation. No other element does this as well. Add to that the ability to form strong bonds with hydrogen, oxygen, nitrogen, and halogens, and you get millions of possible compounds. That's why organic chemistry is its own branch."
      },
      {
        title: "Functional Groups — The Personality of a Molecule",
        body: "A functional group is the part of the molecule that determines how it behaves. Alcohols have -OH (they're like water's cousins). Carboxylic acids have -COOH. Aldehydes have -CHO. The rest of the carbon chain is just the skeleton — the functional group is the personality. Change the functional group, change everything."
      },
      {
        title: "IUPAC Nomenclature — How to Name Things Properly",
        body: "IUPAC naming is three steps: find the longest carbon chain (parent), identify the functional group (suffix), and name any branches (prefixes). Pentane is a 5-carbon chain. 2-methylpentane has a methyl branch on carbon 2. 3-chloropentane has a chlorine on carbon 3. Use numbers to show positions, and follow the alphabetical rule. It's like giving your compound a last name, middle name, and first name."
      },
      {
        title: "Structural Isomerism — Same Formula, Different Structure",
        body: "Isomers are molecules with the same molecular formula but different arrangements. Think of LEGO blocks — same set of pieces, but you can build different things. Chain isomers have different branching. Position isomers have the functional group at different spots. Functional group isomers have completely different functional groups. C₄H₁₀O could be an alcohol or an ether — same atoms, totally different compound."
      },
      {
        title: "Stereoisomerism — Same Formula, Different 3D Arrangement",
        body: "Even with the same connectivity, molecules can differ in 3D space. It's like your left and right hand — same parts, but mirror images. cis-trans isomers happen when there's a double bond and groups can be on the same side or opposite sides. cis means same side, trans means opposite. This matters in biology — your body can tell the difference."
      },
      {
        title: "Classification of Organic Compounds",
        body: "Organic compounds are classified as acyclic (open chains) or cyclic (rings). Further divided into homocyclic (only carbon in the ring) and heterocyclic (other atoms like O, N, S in the ring). Saturated compounds have only single bonds; unsaturated have double or triple bonds. Think of it like organizing your music library — genres and subgenres."
      }
    ],
    keyPoints: [
      "Catenation: carbon's ability to form chains with itself — the basis of organic chemistry",
      "Functional group determines chemical properties of the compound",
      "IUPAC naming: parent chain + suffix (functional group) + prefix (substituents)",
      "Structural isomers: same formula, different bonding arrangement",
      "cis-trans isomers: different spatial arrangement around a double bond",
      "Saturated (alkanes): only single bonds. Unsaturated (alkenes/alkynes): double/triple bonds",
      "Homologous series: same functional group, differ by -CH₂-",
      "Common functional groups: -OH (alcohol), -CHO (aldehyde), -COOH (acid), -NH₂ (amine)"
    ],
    importantQuestions: [
      "Write the IUPAC names of: (CH₃)₂CHCH₂CH₃, CH₃CH₂CH(OH)CH₃, CH₃COCH₂CH₃",
      "What are structural isomers? Draw all possible isomers of C₅H₁₂.",
      "Explain the difference between cis and trans isomers with an example.",
      "What is a functional group? Give examples of four different functional groups.",
      "Why does carbon form so many compounds? Explain three reasons."
    ]
  },

  "hydrocarbons": {
    overview: "Hydrocarbons are the simplest organic compounds — just carbon and hydrogen. But don't let the simplicity fool you. They're the basis of fuels (petrol, diesel), plastics, and even the structure of your DNA. This chapter covers alkanes (all single bonds), alkenes (double bonds), alkynes (triple bonds), and aromatic compounds like benzene.",
    concepts: [
      {
        title: "Alkanes — The Boring but Useful Ones",
        body: "Alkanes have only single bonds — C-C and C-H. They're called saturated because every carbon has four bonds and there's no room for more. Methane (CH₄) is the simplest — it's natural gas. Alkanes are generally unreactive, which makes them great as fuels. They burn in oxygen to give CO₂, H₂O, and a lot of energy. That's why your car runs on gasoline (a mix of alkanes)."
      },
      {
        title: "Alkenes — The Double Bond Changes Everything",
        body: "Alkenes have at least one C=C double bond. That double bond is a region of high electron density — it's reactive. Ethene (C₂H₄) is used to make polyethylene plastic. Alkenes undergo addition reactions where the double bond breaks and new atoms attach. It's like a crowded train — two people on a seat meant for one; they separate so others can sit."
      },
      {
        title: "Alkynes — The Triple Bond Warriors",
        body: "Alkynes have a C≡C triple bond — even more reactive than a double bond. Ethyne (C₂H₂, also called acetylene) is used in welding torches because it burns with an extremely hot flame. Triple bonds are shorter and stronger than double bonds. They also undergo addition reactions, sometimes in two steps."
      },
      {
        title: "Aromatic Hydrocarbons — The Benzene Mystery",
        body: "Benzene (C₆H₆) looks like it should have alternating single and double bonds, but all C-C bonds are actually identical. It's a ring with delocalized electrons — like a donut of electron density. This makes benzene unusually stable. It undergoes substitution reactions rather than addition — it'd rather swap a hydrogen than break its stable ring."
      },
      {
        title: "Preparation of Hydrocarbons",
        body: "Alkanes come from petroleum or from the Wurtz reaction (2R-X + 2Na → R-R + 2NaX). Alkenes come from dehydration of alcohols or cracking of alkanes. Alkynes come from dehydrohalogenation of vicinal dihalides. Benzene comes from cyclic compounds or from petroleum. Each method is like a different recipe for the same dish."
      }
    ],
    keyPoints: [
      "Alkanes: C-C single bonds, sp³ hybridized, general formula CₙH₂ₙ₊₂",
      "Alkenes: C=C double bond, sp² hybridized, general formula CₙH₂ₙ",
      "Alkynes: C≡C triple bond, sp hybridized, general formula CₙH₂ₙ₋₂",
      "Alkanes undergo substitution (free radical halogenation); alkenes and alkynes undergo addition",
      "Markovnikov's rule: H adds to the carbon with more H already (for unsymmetrical alkenes)",
      "Benzene is aromatic — 6 π electrons delocalized in a ring, undergoes electrophilic substitution",
      "Benzene resists addition because it would break aromaticity (stability loss)",
      "Cracking: breaking large alkanes into smaller, more useful ones"
    ],
    importantQuestions: [
      "Explain Markovnikov's rule with an example of addition of HBr to propene.",
      "How is benzene prepared from acetylene? Describe the mechanism of nitration of benzene.",
      "Distinguish between alkanes, alkenes, and alkynes based on their hybridization and bond type.",
      "Write the Wurtz reaction. What are its limitations?",
      "Why does benzene undergo substitution rather than addition reactions?"
    ]
  },

  "states-of-matter": {
    overview: "Ever wondered why water turns into ice when you freeze it, or why a balloon shrinks in cold air? That's what this chapter is about — solids, liquids, and gases, and how they behave. You'll learn the gas laws that predict how pressure, volume, and temperature are connected. And you'll finally understand why some things dissolve and others don't.",
    concepts: [
      {
        title: "Gas Laws — The Relationship Triangle",
        body: "Boyle's law: volume goes down when pressure goes up (squeezing a balloon). Charles's law: volume goes up when temperature goes up (a balloon expands in heat). Gay-Lussac's law: pressure goes up when temperature goes up (tire pressure in summer). Avogadro's law: equal volumes of gases at same T and P have equal number of molecules. All these combine into PV = nRT — the ideal gas equation."
      },
      {
        title: "Ideal Gas Equation — PV = nRT",
        body: "P is pressure, V is volume, n is moles, T is temperature in Kelvin, R is the universal gas constant (0.0821 L·atm/mol·K). This single equation summarizes all gas laws. If you know any three variables, you can find the fourth. But remember — real gases don't follow this perfectly at high pressure or low temperature because molecules do have size and do attract each other."
      },
      {
        title: "Intermolecular Forces — The Invisible Glue",
        body: "Why does water stay liquid while methane is a gas at room temperature? Intermolecular forces. Dispersion (London) forces exist in all molecules — the bigger the molecule, the stronger. Dipole-dipole forces happen between polar molecules. Hydrogen bonding is the strongest — it's what makes water boil at 100°C instead of -100°C. These forces determine melting points, boiling points, and solubility."
      },
      {
        title: "The Liquid State — In Between",
        body: "Liquids have a fixed volume but no fixed shape. Their molecules are close together (like solids) but can slide past each other (like gases). Vapor pressure is the pressure exerted by molecules escaping from a liquid's surface. Higher temperature means higher vapor pressure. When vapor pressure equals atmospheric pressure, the liquid boils."
      },
      {
        title: "The Solid State — Ordered and Rigid",
        body: "Solids have fixed shape and volume because particles are packed in regular patterns. Crystalline solids (like salt, diamond) have ordered arrangements. Amorphous solids (like glass, rubber) have random arrangements. Melting a solid means giving it enough energy to break that ordered structure and let molecules move freely."
      },
      {
        title: "Kinetic Molecular Theory — Why Gases Behave the Way They Do",
        body: "The kinetic molecular theory says gas molecules are tiny, far apart, and constantly moving in straight lines until they collide. Pressure comes from collisions with container walls. Temperature is a measure of average kinetic energy. This theory explains all the gas laws in a simple, visual way. Think of gas molecules as hyperactive ping-pong balls."
      }
    ],
    keyPoints: [
      "Boyle's law: P₁V₁ = P₂V₂ (at constant T)",
      "Charles's law: V₁/T₁ = V₂/T₂ (at constant P)",
      "Ideal gas equation: PV = nRT",
      "Kelvin temperature = °C + 273. Use Kelvin for all gas law calculations",
      "Real gases deviate at high pressure and low temperature — van der Waals equation fixes this",
      "Intermolecular forces: London < dipole-dipole < hydrogen bonding",
      "Hydrogen bonding in water explains its high boiling point, surface tension, and expansion on freezing",
      "Kinetic molecular theory: gas particles are in constant random motion; KE ∝ T"
    ],
    importantQuestions: [
      "A gas occupies 500 mL at 27°C. What volume will it occupy at 127°C at constant pressure?",
      "Derive the ideal gas equation from the combined gas laws.",
      "Explain why real gases deviate from ideal behavior at high pressure.",
      "What are hydrogen bonds? How do they affect the properties of water?",
      "Calculate the pressure exerted by 2 moles of an ideal gas in a 5 L container at 27°C."
    ]
  },

  "adsorption-colloids": {
    overview: "Why does charcoal filter water? Why is milk a colloid? This chapter explores surfaces — specifically, how substances stick to surfaces (adsorption) and the weird in-between state of matter called colloids. Colloids are everywhere: milk, fog, paint, even your blood. You'll learn how they work and why they're so useful.",
    concepts: [
      {
        title: "Adsorption — The Surface Stickers",
        body: "Adsorption is when molecules stick to a surface. Not absorption (which is when something goes inside like a sponge soaking water). Adsorption happens only on the surface. Charcoal adsorbs gases and impurities because it has a huge surface area with lots of tiny pores. The more surface area, the more adsorption. Activated charcoal is used in water filters and even in poison treatment."
      },
      {
        title: "Types of Adsorption — Physisorption vs Chemisorption",
        body: "Physisorption is weak — molecules stick via van der Waals forces. It's reversible and happens more at low temperatures. Chemisorption is strong — molecules form actual chemical bonds with the surface. It's irreversible and happens at higher temperatures. Think of physisorption as magnets on a fridge (easily removed) and chemisorption as superglue."
      },
      {
        title: "Catalysis — Speeding Things Up with Surfaces",
        body: "Many catalysts work by adsorption. The reactants stick to the catalyst's surface, which brings them close together and weakens their bonds, making the reaction faster. Catalysis in industry — like the Haber process for ammonia — relies on this. The catalyst isn't used up; it just provides a helpful surface. Solid catalysts in different phases than reactants = heterogeneous catalysis."
      },
      {
        title: "Colloids — The In-Between World",
        body: "Colloids are particles between 1 and 1000 nanometers, suspended in another substance. They're too small to see but too big to dissolve. Milk is fat particles dispersed in water. Fog is water droplets in air. Paint is pigment particles in liquid. Colloids don't settle out — they stay suspended because of constant collisions with solvent molecules (Brownian motion)."
      },
      {
        title: "Types of Colloids and Their Properties",
        body: "Colloids can be sols (solid in liquid), gels (liquid in solid), emulsions (liquid in liquid), foams (gas in liquid or solid). Mayonnaise is an oil-in-water emulsion. Jelly is a gel. Whipped cream is a foam. Colloids show the Tyndall effect — they scatter light, so a beam of light is visible through them. That's how you can tell a colloid from a true solution."
      }
    ],
    keyPoints: [
      "Adsorption (surface) ≠ Absorption (bulk). Adsorption increases with surface area",
      "Physisorption: weak, reversible, low temperature. Chemisorption: strong, irreversible, high temperature",
      "Adsorption isotherms show how much gas adsorbs at different pressures (Freundlich, Langmuir)",
      "Catalysts work by adsorbing reactants, weakening bonds, and bringing them together",
      "Colloids: 1-1000 nm particle size, show Tyndall effect, exhibit Brownian motion",
      "Types: sol (solid in liquid), gel (liquid in solid), emulsion (liquid in liquid), foam (gas in liquid/solid)",
      "Emulsions need emulsifiers to stay stable — soap stabilizes oil in water",
      "Coagulation: adding electrolyte causes colloid particles to clump and settle"
    ],
    importantQuestions: [
      "Distinguish between adsorption and absorption with an example.",
      "What is the Tyndall effect? Why do colloidal solutions show it but true solutions don't?",
      "Explain the role of adsorption in heterogeneous catalysis.",
      "What are emulsions? Give two examples and explain how they are stabilized.",
      "How can you coagulate a colloidal solution? Explain with an example."
    ]
  },

  "nuclear-chemistry": {
    overview: "This chapter is about what happens inside the nucleus of an atom — the part that's normally impossible to change. Nuclear chemistry deals with radioactivity, where atoms spontaneously break apart and release energy. It sounds scary, but it's also how we get nuclear power, medical imaging, and carbon dating. Same science, different outcomes.",
    concepts: [
      {
        title: "Radioactivity — Atoms That Fall Apart",
        body: "Some atoms have unstable nuclei. They spontaneously break apart, releasing radiation. This is radioactivity. It's not a chemical reaction — it happens in the nucleus, not the electrons. You can't speed it up or slow it down with temperature or pressure. It's completely random on the atomic level, but predictable for large numbers of atoms."
      },
      {
        title: "Types of Radiation — Alpha, Beta, Gamma",
        body: "Alpha radiation is a helium nucleus (2 protons + 2 neutrons) flying out. It's big and slow — stopped by paper. Beta radiation is an electron or positron flying out. It's smaller and faster — stopped by aluminum. Gamma radiation is high-energy light — the most penetrating, stopped by thick lead or concrete. Each type has different properties and dangers."
      },
      {
        title: "Half-Life — How Long Until It's Safe?",
        body: "Half-life is the time it takes for half of a radioactive sample to decay. Carbon-14 has a half-life of 5730 years — that's why we can date ancient artifacts. If you start with 100 g and wait one half-life, 50 g remains. Wait another, 25 g. It's like a magic trick where half the audience disappears every minute. The formula: N = N₀ (½)ⁿ where n = number of half-lives."
      },
      {
        title: "Nuclear Fission — Splitting the Atom",
        body: "Fission is when a heavy nucleus (like uranium-235) splits into two smaller nuclei after absorbing a neutron. This releases a huge amount of energy plus more neutrons, which can split more atoms — a chain reaction. That's how nuclear power plants and atomic bombs work. Controlled chain reaction = electricity. Uncontrolled = explosion."
      },
      {
        title: "Nuclear Fusion — Stars in a Bottle",
        body: "Fusion is when two light nuclei combine to form a heavier one. The sun runs on fusion — hydrogen turning into helium. It releases even more energy than fission. Scientists are trying to make fusion reactors on Earth, but it's incredibly hard — you need temperatures of millions of degrees. Fusion is the holy grail of clean energy."
      },
      {
        title: "Applications of Radioactivity",
        body: "Carbon-14 dating tells us how old ancient remains are. Cobalt-60 is used in cancer radiation therapy. Radioactive tracers help doctors see inside your body. Nuclear power plants generate electricity without CO₂ emissions. But there's a downside: radioactive waste stays dangerous for thousands of years, and accidents can be catastrophic."
      }
    ],
    keyPoints: [
      "Radioactivity is spontaneous nuclear decay — not affected by temperature or pressure",
      "α (alpha): He²⁺ nucleus, low penetration, stopped by paper",
      "β (beta): electron from nucleus, stopped by aluminum",
      "γ (gamma): electromagnetic radiation, high penetration, stopped by lead",
      "Half-life: time for half the sample to decay. N = N₀(½)ⁿ",
      "Fission: heavy nucleus splits, releasing energy + neutrons. Used in nuclear reactors",
      "Fusion: light nuclei combine, releasing massive energy. Powers the sun",
      "Applications: carbon dating, cancer treatment, power generation, medical imaging"
    ],
    importantQuestions: [
      "The half-life of C-14 is 5730 years. How much of a 100 g sample remains after 17190 years?",
      "Differentiate between nuclear fission and nuclear fusion with examples.",
      "Write a balanced nuclear equation for the alpha decay of uranium-238.",
      "What are the three types of nuclear radiation? Compare their penetrating power.",
      "Explain the principle of carbon-14 dating. Why can't it be used for rocks millions of years old?"
    ]
  },

  "organic-principles": {
    overview: "This chapter goes deeper into how organic reactions actually happen. It's not just about what you get — it's about the journey. You'll learn about reaction mechanisms (the step-by-step process), the intermediates that form along the way, and how electron movement (curly arrows) explains everything. Think of it as watching the slow-motion replay of a chemical reaction.",
    concepts: [
      {
        title: "Reaction Mechanisms — The Step-by-Step Story",
        body: "A reaction mechanism is the sequence of bond-breaking and bond-forming steps. Most organic reactions happen in multiple steps, not all at once. Each step has a transition state — a high-energy arrangement that's neither reactant nor product. Understanding the mechanism tells you why certain products form and others don't, and how to speed up or control the reaction."
      },
      {
        title: "Electron Movement — Follow the Curly Arrows",
        body: "Curly arrows show where electrons go. A full-headed arrow (curly arrow) shows movement of an electron pair. A half-headed (fishhook) arrow shows movement of a single electron. The tail of the arrow starts at the electron source (lone pair or bond), and the head points to where they're going. Mastering curly arrows is like learning to read sheet music for organic chemistry."
      },
      {
        title: "Electrophiles and Nucleophiles — The Lovers and Hunters",
        body: "Nucleophiles are electron-rich species that 'love' positive charges (nucleus-loving). They attack electron-deficient atoms. Electrophiles are electron-poor species that 'love' electrons. They attack electron-rich atoms. In every reaction, a nucleophile attacks an electrophile. It's like a dance — one leads, the other follows. Most organic reactions are about matching these pairs."
      },
      {
        title: "Types of Organic Reactions",
        body: "Substitution: one atom/group replaces another (like CH₄ + Cl₂ → CH₃Cl + HCl). Addition: atoms add across a double/triple bond (ethene + Br₂ → dibromoethane). Elimination: atoms are removed to form a double bond (alcohol → alkene + water). Rearrangement: atoms shuffle within the molecule. Most reactions fall into these four categories."
      },
      {
        title: "Reactive Intermediates — The Temporary Visitors",
        body: "Carbocations (carbon with positive charge), carbanions (carbon with negative charge), and free radicals (carbon with unpaired electron) are short-lived intermediates formed during reactions. Carbocations are stabilized by nearby alkyl groups (they're 'hungry' for electrons). Carbanions are stabilized by nearby electron-withdrawing groups. Free radicals are neutral but reactive because of the unpaired electron."
      },
      {
        title: "Inductive and Resonance Effects",
        body: "Inductive effect is the pull of electrons through sigma bonds — like a tug-of-war along a chain. Electronegative atoms (like Cl) pull electrons toward themselves (-I effect). Alkyl groups push electrons away (+I effect). Resonance effect is the delocalization of electrons through pi bonds — like sharing a pizza across multiple slices. Both effects explain why certain carbons are more reactive than others."
      }
    ],
    keyPoints: [
      "Reaction mechanism = step-by-step description of bond breaking and forming",
      "Curly arrows track electron movement: full arrow = pair, half arrow = single electron",
      "Nucleophiles: electron-rich, attack positive centers. Electrophiles: electron-poor, attack negative centers",
      "Substitution: replace one atom with another. Addition: add across multiple bond. Elimination: remove atoms to form π bond",
      "Carbocations (R₃C⁺) are electron-deficient and stabilized by alkyl groups (+I effect)",
      "Free radicals (R₃C•) have an unpaired electron — formed by homolytic bond cleavage",
      "Inductive effect: through sigma bonds (+I = electron pushing, -I = electron pulling)",
      "Resonance: delocalization of π electrons across multiple atoms — stabilizes molecules and intermediates"
    ],
    importantQuestions: [
      "What is a carbocation? Explain the order of stability of carbocations with reason.",
      "Differentiate between electrophiles and nucleophiles with examples.",
      "Explain the mechanism of electrophilic addition of HBr to ethene.",
      "What is the difference between inductive effect and resonance effect? Give examples.",
      "Write the mechanism of SN1 and SN2 reactions. How do they differ?"
    ]
  }
};

export default content;
