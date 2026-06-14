interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "solid-state": {
    overview:
      "Ever wondered why diamonds are hard but graphite is soft? They're both made of carbon. That's solid state chemistry in action. It's all about how atoms are packed together and what happens when they're not packed perfectly.",
    concepts: [
      {
        title: "Crystal lattices and unit cells",
        body:
          "A crystal lattice is like a giant 3D chessboard. Each intersection is where an atom sits. The smallest repeating chunk of that chessboard is the unit cell. Like wallpaper pattern — you only need one tile to know what the whole wall looks like.",
      },
      {
        title: "Types of unit cells",
        body:
          "Atoms don't just sit at corners. Sometimes they're on faces, sometimes in the center. Simple cubic (only corners), BCC (center + corners), FCC (face centers + corners). FCC is the most packed — like stuffing your suitcase efficiently vs just throwing things in.",
      },
      {
        title: "Packing efficiency",
        body:
          "How much of the box is actually full vs empty space. Simple cubic is terrible — only 52% full. BCC is better at 68%. FCC is the champ at 74%. Think of it like packing oranges in a crate.",
      },
      {
        title: "Imperfections in solids",
        body:
          "No crystal is perfect. There are always empty seats (vacancy defects) or gate-crashers (impurity defects). These aren't always bad. Like a diamond with a tiny impurity — that's what gives it color. Rubies get their red from chromium crashing the party.",
      },
      {
        title: "Electrical properties",
        body:
          "Some solids conduct electricity, some don't. Conductors are like highways with cars everywhere. Insulators are empty roads. Semiconductors are medium traffic — but add a little heat and suddenly more cars show up.",
      },
    ],
    keyPoints: [
      "Crystal lattice = repeating 3D arrangement of points",
      "Unit cell = smallest repeating unit of the lattice",
      "FCC has highest packing efficiency (74%)",
      "Coordination number = number of nearest neighbors",
      "Vacancy and impurity defects mess up perfect order",
      "Doping pure Si with As or Ga creates semiconductors",
      "Ferromagnetic solids can be permanently magnetized",
    ],
    importantQuestions: [
      "Explain the difference between Schottky and Frenkel defects with examples.",
      "Calculate the packing efficiency for a body-centered cubic (BCC) lattice.",
      "Why are ionic solids generally brittle while metals are malleable?",
      "How does doping silicon with Group 13 or 15 elements affect its conductivity?",
    ],
  },

  "solutions": {
    overview:
      "Imagine you're making lemonade. Too much sugar and it's syrup. Too little and it's sad. Solutions are about what dissolves in what, and how much. This chapter is basically the math behind mixing things.",
    concepts: [
      {
        title: "Concentration expressions",
        body:
          "There are so many ways to say 'how much stuff is in there'. Mass percent, mole fraction, molarity, molality. Molarity changes with temperature (volume changes). Molality doesn't (mass stays same). Board exams love asking the difference.",
      },
      {
        title: "Henry's law",
        body:
          "The gas dissolved in a liquid depends on its pressure above the liquid. Open a Coke bottle — pressure drops, gas escapes. That's Henry's law in real life. Deep-sea divers get this problem too — nitrogen dissolves in blood under pressure, then bubbles out if they surface too fast.",
      },
      {
        title: "Raoult's law",
        body:
          "The vapor pressure of a solution depends on how much of each component is there. Like a team project — each member contributes based on how many of them there are. Ideal solutions follow this perfectly. Real solutions? Not so much.",
      },
      {
        title: "Colligative properties",
        body:
          "These depend only on HOW MANY particles you add, not WHAT they are. Add salt to water — boiling point goes up (elevation), freezing point goes down (depression). That's why we salt roads in winter. Also why your car radiator needs antifreeze.",
      },
      {
        title: "Abnormal molar masses",
        body:
          "Sometimes the molar mass calculated from colligative properties is weird — too high or too low. That's because particles are associating (clumping together) or dissociating (splitting apart). NaCl splits into Na+ and Cl- — twice the particles, so freezing point drops twice as much.",
      },
    ],
    keyPoints: [
      "Molarity = moles / volume (L), changes with temperature",
      "Molality = moles / mass (kg), temperature independent",
      "Henry's law: p = KH × x (pressure proportional to mole fraction)",
      "Raoult's law: p = p° × mole fraction of solvent",
      "Four colligative properties: VPL, BPE, FPD, OP",
      "Van't Hoff factor (i) accounts for association/dissociation",
      "i > 1 for dissociation, i < 1 for association",
    ],
    importantQuestions: [
      "Calculate the boiling point elevation when 10g of glucose is dissolved in 200g of water.",
      "Distinguish between ideal and non-ideal solutions with examples.",
      "A 0.5 M solution of KCl shows freezing point depression twice that of urea. Explain.",
    ],
  },

  "ionic-equilibria": {
    overview:
      "Ever used a pH strip in biology class? That's ionic equilibria. Some compounds fall apart completely in water, some barely split. This chapter is about that tug-of-war between staying together and breaking apart.",
    concepts: [
      {
        title: "Strong vs weak electrolytes",
        body:
          "Strong electrolytes break apart completely in water — like NaCl. They don't hold back. Weak ones like acetic acid only partially break apart. It's like a party where some people dance (ions) and most just stand against the wall (undissociated molecules).",
      },
      {
        title: "Ionization constant (Ka, Kb)",
        body:
          "Every weak acid or base has a number that tells you how much it dissociates. Larger Ka = stronger acid (more willing to give up H+). It's like a see-saw — if the acid really wants to give away H+, the see-saw tips toward products.",
      },
      {
        title: "pH and pOH",
        body:
          "pH = -log[H+]. It's just a shortcut to say 'how acidic' without writing tiny numbers. 7 is neutral. Below is acidic. Above is basic. Each step of 1 means 10× more acidic — so pH 3 is 10× stronger than pH 4. Your stomach acid is around pH 2. Scary stuff.",
      },
      {
        title: "Buffer solutions",
        body:
          "A buffer resists pH changes. Like a shock absorber. Your blood is a buffer — it stays around pH 7.4 no matter what you eat. Buffers are usually a weak acid + its salt or weak base + its salt. Henderson-Hasselbalch equation is your best friend here.",
      },
      {
        title: "Solubility product (Ksp)",
        body:
          "Some compounds just won't dissolve much. Ksp tells you how much can dissolve before the solution says 'no more'. Like a crowded elevator — once it's full, no one else gets in. If the ion product exceeds Ksp, precipitation happens.",
      },
    ],
    keyPoints: [
      "Strong electrolytes dissociate completely, weak ones partially",
      "Ka × Kb = Kw = 10^-14 at 25°C",
      "pH = -log[H+]; pOH = -log[OH-]; pH + pOH = 14",
      "Buffer resists pH change; blood buffer = H2CO3 / HCO3-",
      "Henderson-Hasselbalch: pH = pKa + log([salt]/[acid])",
      "Ksp = product of ion concentrations at saturation",
      "Common ion effect — adding a common ion suppresses dissociation",
    ],
    importantQuestions: [
      "Calculate the pH of 0.001 M HCl solution.",
      "Explain how the common ion effect affects the solubility of AgCl in NaCl solution.",
      "What is a buffer? Derive the Henderson-Hasselbalch equation for an acidic buffer.",
      "The solubility of BaSO4 is 1.05 × 10^-5 M. Calculate Ksp.",
    ],
  },

  "chemical-thermodynamics": {
    overview:
      "Why do some reactions happen on their own while others need a push? Thermodynamics answers that. It's basically the energy accounting of chemistry — who loses energy, who gains it, and whether the whole thing is worth it.",
    concepts: [
      {
        title: "First law and enthalpy",
        body:
          "Energy can't be created or destroyed — just moved around. Like money in a closed economy. Enthalpy (H) is just the heat content of a system. If a reaction gives off heat (ΔH negative), it's exothermic. Fireworks, burning wood. If it takes in heat (ΔH positive), it's endothermic — like cooking an egg.",
      },
      {
        title: "Hess's law",
        body:
          "The total enthalpy change is the same no matter how many steps you take. Like climbing a mountain — whether you go straight up or take the scenic route, the height difference is the same. Super useful for calculating ΔH of reactions that are hard to measure directly.",
      },
      {
        title: "Second law and entropy",
        body:
          "Entropy is just a fancy word for disorder. The universe loves chaos. Your room naturally gets messier, not cleaner. Same with energy — it spreads out. A reaction that increases disorder (solid → gas, more molecules) has positive ΔS and is more likely to happen.",
      },
      {
        title: "Gibbs free energy",
        body:
          "ΔG = ΔH - TΔS. This is THE equation. If ΔG is negative, the reaction happens spontaneously. If positive, it won't. If zero, it's at equilibrium. Gibbs energy combines enthalpy and entropy into one number — like a final report card for whether the reaction will occur.",
      },
      {
        title: "Spontaneity and temperature",
        body:
          "Some reactions flip from spontaneous to non-spontaneous depending on temperature. If ΔH is negative and ΔS is positive, it's always spontaneous — free energy. If ΔH is positive and ΔS is negative, it's never spontaneous. The other combos depend on temperature — like ice melting only above 0°C.",
      },
    ],
    keyPoints: [
      "ΔH = heat change at constant pressure",
      "Exothermic: ΔH < 0; Endothermic: ΔH > 0",
      "Hess's law: ΔH depends only on initial and final states",
      "Entropy (S) = measure of disorder; ΔS > 0 for spontaneous reactions",
      "ΔG = ΔH - TΔS; ΔG < 0 means spontaneous",
      "At equilibrium, ΔG = 0",
      "Standard state conditions: 1 bar, 298 K",
    ],
    importantQuestions: [
      "Calculate the enthalpy change for a reaction using standard enthalpies of formation.",
      "State and explain Hess's law of constant heat summation.",
      "For a reaction, ΔH = +30 kJ and ΔS = +100 J/K. At what temperature does it become spontaneous?",
      "Explain why ΔG must be negative for a spontaneous process.",
    ],
  },

  electrochemistry: {
    overview:
      "Batteries, rust, electroplating — all of these are electrochemistry. It's basically about converting chemical energy into electrical energy and vice versa. Think of it as electrons going on a road trip through wires.",
    concepts: [
      {
        title: "Electrochemical cells",
        body:
          "A cell has two electrodes dipped in electrolytes. Electrons flow from one to the other through a wire. The anode is where oxidation happens (electrons leave). The cathode is where reduction happens (electrons arrive). The salt bridge keeps everything balanced — like a referee.",
      },
      {
        title: "Standard electrode potential",
        body:
          "Every metal has a built-in tendency to lose or gain electrons. The standard electrode potential (E°) measures how badly a metal wants to get reduced. More positive E° means it really wants those electrons. Less positive (or negative) means it would rather give them away.",
      },
      {
        title: "Nernst equation",
        body:
          "The voltage of a cell depends on concentration. The Nernst equation tells you exactly how much. E = E° - (0.059/n) log Q. When concentrations are equal (Q = 1), you get the standard voltage. When they're different, the voltage changes. Like a battery dying as it runs out of reactants.",
      },
      {
        title: "Electrolysis",
        body:
          "Forcing a non-spontaneous reaction to happen by pumping electricity in. Like pushing a boulder uphill. Used to extract metals, electroplate jewelry, or split water into hydrogen and oxygen. Faraday's laws tell you how much product you get from a given amount of electricity.",
      },
      {
        title: "Batteries and fuel cells",
        body:
          "Primary batteries are one-time use (alkaline). Secondary batteries are rechargeable (lithium-ion, lead-acid). Fuel cells keep running as long as you supply fuel and oxygen. A hydrogen fuel cell basically combines H2 and O2 to make electricity + water — clean, no pollution.",
      },
    ],
    keyPoints: [
      "Anode: oxidation (lose electrons); Cathode: reduction (gain electrons)",
      "Cell potential E°cell = E°cathode - E°anode",
      "Nernst equation: E = E° - (0.059/n) log Q at 298K",
      "Electrolytic cells use electricity to drive non-spontaneous reactions",
      "Faraday's first law: mass deposited ∝ charge passed",
      "Faraday's second law: same charge deposits masses proportional to equivalent weights",
      "Conductivity of solutions depends on ion concentration and mobility",
    ],
    importantQuestions: [
      "Calculate the EMF of a Daniel cell using the Nernst equation.",
      "Explain the working of a hydrogen-oxygen fuel cell.",
      "How much copper is deposited when 0.5 A current is passed for 30 minutes through CuSO4 solution?",
      "Differentiate between electrolytic and galvanic cells.",
    ],
  },

  "chemical-kinetics": {
    overview:
      "Some reactions happen in a flash. Others take years — like rust forming. Chemical kinetics is the study of speed. How fast does a reaction go? What affects its pace? And most importantly — how do we figure that out?",
    concepts: [
      {
        title: "Rate of reaction",
        body:
          "The rate is just how fast reactants disappear or products appear. Like watching ice melt. Rate = change in concentration / change in time. But here's the thing — the rate isn't constant. As reactants get used up, the reaction slows down, like eating a pizza — fast at first, slower as you finish.",
      },
      {
        title: "Rate law and order",
        body:
          "You can't look at a chemical equation and know the rate law. You have to measure it experimentally. The rate law is rate = k [A]^m [B]^n. The exponents m and n define the order. Order doesn't have to match the coefficients. Chemistry is sneaky like that.",
      },
      {
        title: "Integrated rate laws",
        body:
          "These let you calculate concentrations at any time. Zero order: concentration drops linearly. First order: drops exponentially. Second order: 1/concentration increases linearly. Radioactive decay is first order — that's how carbon dating works.",
      },
      {
        title: "Half-life",
        body:
          "The time it takes for half of the reactant to be used up. For first order reactions, half-life is constant — always the same, no matter how much you start with. For zero order, half-life depends on initial concentration. For second order, half-life depends on concentration too.",
      },
      {
        title: "Arrhenius equation and activation energy",
        body:
          "Molecules need a minimum amount of energy to react — like needing a running start to jump over a fence. That minimum is activation energy (Ea). The Arrhenius equation tells you how temperature affects rate. Higher temperature = more molecules have enough energy = faster reaction. Roughly, every 10°C increase doubles the rate.",
      },
    ],
    keyPoints: [
      "Rate = -d[R]/dt = +d[P]/dt",
      "Rate law determined experimentally, not from balanced equation",
      "First order: t1/2 = 0.693 / k (independent of concentration)",
      "Zero order: t1/2 = [R]0 / 2k",
      "Arrhenius: k = Ae^(-Ea/RT)",
      "Activation energy is the energy barrier for reaction",
      "Catalyst lowers activation energy without being consumed",
    ],
    importantQuestions: [
      "The half-life of a first order reaction is 100 s. Calculate the rate constant.",
      "What is activation energy? Explain with a potential energy diagram.",
      "Derive the integrated rate equation for a first order reaction.",
      "How does temperature affect reaction rate? Explain using the Arrhenius equation.",
    ],
  },

  "elements-groups-16-17-18": {
    overview:
      "Oxygen, sulfur, chlorine, neon — these elements might seem unrelated, but they share the same neighborhoods in the periodic table. Group 16 has oxygen and its buddies. Group 17 are the halogens. Group 18 are the nobles who don't react with anyone.",
    concepts: [
      {
        title: "Group 16 — The oxygen family",
        body:
          "Oxygen, sulfur, selenium, tellurium, polonium. Oxygen is a gas, sulfur is a yellow solid. Going down the group, elements get more metallic. Oxygen is super reactive, while tellurium is pretty chill. All of them have 6 valence electrons, so they want 2 more to complete their octet.",
      },
      {
        title: "Ozone and its importance",
        body:
          "Ozone (O3) is oxygen's weird cousin. The ozone layer in the stratosphere absorbs harmful UV radiation. Without it, we'd all get sunburned in minutes. CFCs from old fridges and sprays destroyed ozone, creating the ozone hole. The Montreal Protocol banned CFCs and the layer is healing — one of humanity's best environmental wins.",
      },
      {
        title: "Group 17 — The halogen family",
        body:
          "Fluorine, chlorine, bromine, iodine, astatine. These are the drama queens of the periodic table. Extremely reactive. Fluorine is the most reactive element on Earth — it'll react with almost anything. Chlorine is used to disinfect water. Iodine is essential for your thyroid. As you go down, reactivity decreases.",
      },
      {
        title: "Chlorine compounds",
        body:
          "HCl is hydrochloric acid — your stomach makes it to digest food. Bleaching powder (CaOCl2) is used for... well, bleaching and disinfecting. Chloroform and carbon tetrachloride are organic chlorine compounds. HCl gas in water gives you hydrochloric acid — it fizzes and gets hot. Be careful.",
      },
      {
        title: "Group 18 — The noble gases",
        body:
          "Helium, neon, argon, krypton, xenon, radon. These guys have full outer shells and don't want to react. They're the introverts of chemistry. Helium fills party balloons. Neon lights up signs. Argon is used as a shielding gas in welding. Xenon actually can form compounds — with fluorine, believe it or not.",
      },
    ],
    keyPoints: [
      "Group 16: 6 valence electrons, oxidizing tendency decreases down group",
      "Ozone layer protects from UV; CFCs damaged it",
      "Group 17: Halogens, very reactive, electronegativity decreases down group",
      "Cl2 + H2O → HCl + HOCl (hypochlorous acid, a disinfectant)",
      "Group 18: Noble gases, full octet, chemically inert",
      "Helium is lighter than air; used in balloons and cryogenics",
      "XeF2, XeF4, XeF6 — xenon does form compounds with F",
    ],
    importantQuestions: [
      "Explain the anomalous behavior of oxygen compared to other Group 16 elements.",
      "Write the preparation, properties, and uses of ozone.",
      "Why are halogens strong oxidizing agents? Explain with examples.",
      "Discuss the reactions of chlorine with water and NaOH.",
      "Why are noble gases chemically inert? Mention any two uses of argon.",
    ],
  },

  "transition-elements": {
    overview:
      "The d-block elements — iron, copper, zinc, gold, and all the colorful metals in between. They're the reason gemstones have color, magnets work, and your body has hemoglobin. These elements are basically the cool kids of the periodic table.",
    concepts: [
      {
        title: "Electronic configuration and properties",
        body:
          "Transition elements have partially filled d-orbitals. That's what makes them special. They form colorful compounds, show variable oxidation states, and make great catalysts. Iron can be Fe2+ or Fe3+. Copper can be Cu+ or Cu2+. It's like they can wear different hats depending on the situation.",
      },
      {
        title: "Why are they colored?",
        body:
          "When light hits a transition metal compound, electrons in d-orbitals absorb certain wavelengths and jump to higher levels. The color you see is whatever's left. That's why CuSO4 is blue, KMnO4 is purple, and NiSO4 is green. It's basically light subtraction — take away some colors, see the rest.",
      },
      {
        title: "Magnetic properties",
        body:
          "Unpaired electrons make a substance magnetic. If all electrons are paired, it's diamagnetic (slightly repelled by magnets). If there are unpaired electrons, it's paramagnetic (attracted). Iron, cobalt, nickel can be ferromagnetic — they stay magnetized even after the field is removed. That's how fridge magnets work.",
      },
      {
        title: "Catalytic properties",
        body:
          "Transition metals are amazing catalysts. Iron is used in the Haber process to make ammonia. Vanadium pentoxide helps make sulfuric acid. Nickel helps harden oils into margarine. They work by providing a surface for reactions or by changing their oxidation state to shuttle electrons around.",
      },
      {
        title: "Lanthanides and Actinides",
        body:
          "The f-block elements (inner transition) sit below the main table. Lanthanides are all similar — they're called 'rare earth' elements and are used in magnets, lasers, and phone screens. Actinides are radioactive. Uranium and plutonium are actinides used in nuclear power and bombs.",
      },
    ],
    keyPoints: [
      "Transition elements have incompletely filled d-orbitals in ground state or ions",
      "Variable oxidation states: Fe (+2, +3), Cu (+1, +2), Mn (+2, +4, +6, +7)",
      "Color arises from d-d transitions (electron jumps between d orbitals)",
      "Paramagnetic = unpaired electrons; Diamagnetic = all paired",
      "Transition metals make great catalysts (Fe, Ni, Pt, V2O5)",
      "Lanthanides: similar properties, used in alloys and phosphors",
      "Actinides: radioactive, include U, Pu used in nuclear reactions",
    ],
    importantQuestions: [
      "Explain why transition metals form colored compounds.",
      "What are the different oxidation states shown by manganese?",
      "How does the catalytic activity of transition metals relate to their electronic configuration?",
      "Differentiate between lanthanides and actinides.",
    ],
  },

  "coordination-compounds": {
    overview:
      "Ever wondered why chlorophyll is green or why hemoglobin carries oxygen? Both are coordination compounds. They're like molecular LEGOs — a central metal atom surrounded by other molecules or ions (ligands). This chapter explains how these complexes work.",
    concepts: [
      {
        title: "What are coordination compounds?",
        body:
          "A coordination compound has a central metal ion bonded to surrounding ligands. Ligands are molecules or ions that donate electron pairs. NH3 and H2O are common ligands. The number of ligands attached is the coordination number. It's like a metal king sitting on a throne with advisors (ligands) around him.",
      },
      {
        title: "Nomenclature",
        body:
          "Naming these compounds follows strict rules. Cation named first, anion last. Ligands come before the metal name. If the complex is an anion, the metal gets an '-ate' ending. K3[Fe(CN)6] = potassium hexacyanoferrate(III). It looks intimidating but once you break it down, it's logical.",
      },
      {
        title: "Isomerism in coordination compounds",
        body:
          "Two compounds with the same formula but different arrangement. Structural isomers have different connectivity. Geometrical isomers (cis-trans) have same bonds but different spatial arrangement. Optical isomers are mirror images that can't be overlapped — like your left and right hands.",
      },
      {
        title: "Crystal Field Theory (CFT)",
        body:
          "CFT explains why coordination compounds are colored and magnetic. The ligands create an electric field that splits the d-orbitals into different energy levels. Some d-orbitals get pushed higher, some stay lower. Electrons fill these split orbitals, and the pattern determines the color and magnetic behavior.",
      },
      {
        title: "Applications in real life",
        body:
          "Hemoglobin is an iron coordination compound that carries oxygen. Chlorophyll has magnesium at its center — that's why plants are green. Vitamin B12 has cobalt. Coordination compounds are also used in chemotherapy (cisplatin), water purification, and as catalysts in industry.",
      },
    ],
    keyPoints: [
      "Coordination compound = central metal + ligands",
      "Coordination number = number of ligand donor atoms bonded",
      "Chelate: ligand that forms a ring with the metal",
      "IUPAC naming: ligands alphabetical, metal with oxidation state in roman numerals",
      "CFT: ligand field splits d-orbitals into t2g and eg sets",
      "Cisplatin is used in cancer treatment",
      "EDTA is a hexadentate ligand — grabs metals tightly",
    ],
    importantQuestions: [
      "Explain Crystal Field Theory. Draw the splitting of d-orbitals in an octahedral field.",
      "Write the IUPAC name of [Co(NH3)5Cl]Cl2 and K3[Fe(CN)6].",
      "Differentiate between geometrical and optical isomerism in coordination compounds.",
      "What is a chelate? Give an example.",
    ],
  },

  "halogen-derivatives": {
    overview:
      "Take a regular hydrocarbon and slap a halogen (Cl, Br, I, F) on it. That's a halogen derivative. These compounds show up in everything from anaesthetics to pesticides to Teflon pans. And the reactions they do? SN1 vs SN2 is the eternal board-exam debate.",
    concepts: [
      {
        title: "Classification and properties",
        body:
          "Alkyl halides (R-X), vinyl halides (C=C-X), aryl halides (X on benzene). The C-X bond is polar — halogen pulls electrons. That makes the carbon slightly positive and vulnerable to attack. Boiling points increase with the size of the halogen. Iodo compounds boil higher than chloro compounds.",
      },
      {
        title: "SN1 reactions",
        body:
          "Substitution Nucleophilic Unimolecular. This happens in two steps. First, the halogen leaves on its own (slow step). Then the nucleophile attacks the carbocation (fast). Works best with tertiary carbons (3 alkyl groups). It's like an old building — first the roof caves in, then new tenants move in.",
      },
      {
        title: "SN2 reactions",
        body:
          "Substitution Nucleophilic Bimolecular. One step — the nucleophile attacks from behind while the halogen leaves from the front. Like a revolving door — one person goes in, the other comes out. Works best with primary carbons. The reaction inverts the molecule (Walden inversion) — like turning an umbrella inside out.",
      },
      {
        title: "Elimination reactions (E1 and E2)",
        body:
          "Sometimes instead of replacing the halogen, you just remove it along with a neighboring hydrogen — forming a double bond. E1 is like SN1 (carbocation intermediate). E2 is like SN2 (one step). Strong bulky bases favor elimination. Small strong bases favor substitution. It's a competition.",
      },
      {
        title: "Important halogen compounds",
        body:
          "Chloroform (CHCl3) was used as an anaesthetic — now it's a lab solvent. DDT is a controversial pesticide. Freons (CFCs) were in fridges but wrecked the ozone layer. Teflon (PTFE) is polymerized CF2=CF2 — non-stick, heat-resistant. Halothane is still used as an anaesthetic in medicine.",
      },
    ],
    keyPoints: [
      "SN1: 2 steps, carbocation intermediate, tertiary best, racemization",
      "SN2: 1 step, backside attack, primary best, inversion",
      "E1: elimination via carbocation, favors bulky bases",
      "E2: elimination in one step, requires strong base",
      "Polar solvents favor SN1; aprotic solvents favor SN2",
      "Alkyl halides react with Mg to form Grignard reagents (R-Mg-X)",
      "CFCs deplete ozone; now replaced by HFCs",
    ],
    importantQuestions: [
      "Distinguish between SN1 and SN2 reactions with examples.",
      "Explain the mechanisms of E1 and E2 elimination reactions.",
      "Why do tertiary alkyl halides undergo SN1 reactions more readily than primary?",
      "What are Grignard reagents? How are they prepared?",
    ],
  },

  "alcohols-phenols-ethers": {
    overview:
      "Alcohols aren't just for drinking. Phenols are used in antiseptics. Ethers are solvents and anaesthetics. These three families are all about the -OH group (alcohols/phenols) or the -O- bridge (ethers). They react differently based on where the oxygen is.",
    concepts: [
      {
        title: "Alcohols — structure and preparation",
        body:
          "Alcohols have an -OH group attached to a carbon. Primary (1°), secondary (2°), tertiary (3°) depending on how many carbons are attached to that carbon. Made by hydration of alkenes, reduction of carbonyl compounds, or fermentation of sugar. Yes, fermentation makes ethanol — that's the drinkable kind.",
      },
      {
        title: "Reactions of alcohols",
        body:
          "Alcohols can be oxidized — primary → aldehyde → acid; secondary → ketone; tertiary won't oxidize (too protected). Dehydration (removing water) gives alkenes. Lucas test distinguishes between 1°, 2°, 3° alcohols based on how fast they react with HCl/ZnCl2. Tertiary reacts immediately — cloudy in seconds.",
      },
      {
        title: "Phenols — acidity and reactions",
        body:
          "Phenols have -OH directly attached to a benzene ring. They're more acidic than alcohols because the phenoxide ion is stabilized by resonance. Not as acidic as carboxylic acids though. Phenol reacts with FeCl3 to give a purple color — a classic test. Used in antiseptics like Dettol.",
      },
      {
        title: "Ethers — structure and properties",
        body:
          "Ethers have an oxygen bonded to two alkyl/aryl groups. R-O-R'. They're relatively unreactive — that's why they're great solvents. Diethyl ether was used as an anaesthetic (smells sweet). They're prepared by Williamson synthesis — alkoxide ion attacks an alkyl halide. Like clicking two LEGO blocks together.",
      },
      {
        title: "Important reactions for exams",
        body:
          "Kolbe's reaction: phenol + CO2 → salicylic acid (used in aspirin). Reimer-Tiemann reaction: phenol + CHCl3 + NaOH → salicylaldehyde. Friedel-Crafts: ethers on benzene rings. These are board exam favorites. Also know that ethers can cleave with HI to give alcohol + alkyl iodide.",
      },
    ],
    keyPoints: [
      "Alcohols: R-OH; Phenols: Ar-OH; Ethers: R-O-R'",
      "Lucas test: 3° alcohol reacts fastest (cloudy immediately)",
      "Primary alcohols oxidize to aldehydes, then carboxylic acids",
      "Phenols are more acidic than alcohols but less than carboxylic acids",
      "Phenol + FeCl3 → violet color (distinctive test)",
      "Williamson synthesis: R-O-Na+ + R'-X → R-O-R' + NaX",
      "Ethers are cleaved by HI (hot) to give alkyl halide and alcohol",
    ],
    importantQuestions: [
      "Explain the mechanism of dehydration of ethanol to ethene.",
      "Why is phenol more acidic than ethanol but less acidic than acetic acid?",
      "Write the mechanism of Kolbe's reaction.",
      "How is diethyl ether prepared by Williamson's synthesis?",
    ],
  },

  "aldehydes-ketones": {
    overview:
      "Carbonyl compounds — that's the C=O group. Aldehydes have it at the end of a chain, ketones in the middle. They're everywhere: formalin (preserves specimens), acetone (nail polish remover), and the stuff that gives vanilla its flavor. This chapter is all about that double bond between carbon and oxygen.",
    concepts: [
      {
        title: "Structure and nomenclature",
        body:
          "Aldehydes have a carbonyl carbon bonded to at least one hydrogen. R-CHO. Ketones have two alkyl/aryl groups attached to carbonyl. R-CO-R'. Naming: replace -e of alkane with -al for aldehydes, -one for ketones. Propanal vs propanone. Methanal (HCHO) is formaldehyde — used to preserve dead things.",
      },
      {
        title: "Preparation methods",
        body:
          "Alcohols can be oxidized to aldehydes (with mild oxidizer like PCC) or to ketones. Ozonolysis of alkenes gives aldehydes/ketones. Friedel-Crafts acylation puts a ketone on a benzene ring. Rosenmund reduction: acid chloride + H2 over poisoned Pd catalyst → aldehyde. Board exams love Rosenmund.",
      },
      {
        title: "Nucleophilic addition",
        body:
          "The carbonyl carbon is partially positive (oxygen pulls electrons). So nucleophiles attack it. HCN adds to give cyanohydrins. Grignard reagents add to give alcohols. NaHSO3 gives a crystalline addition product (used for purification). This is the most important reaction of carbonyl compounds.",
      },
      {
        title: "Alpha-hydrogen reactions",
        body:
          "The hydrogen right next to the carbonyl group is slightly acidic. This lets aldehydes/ketones do aldol condensation — two molecules combine to form a β-hydroxy carbonyl compound. Also haloform reaction: methyl ketones + halogen + base → haloform + carboxylate. This is how chloroform was made historically.",
      },
      {
        title: "Distinction tests",
        body:
          "Tollens' test: aldehydes give a silver mirror (ketones don't). Fehling's test: aldehydes give a red precipitate of Cu2O. Iodoform test: methyl ketones and ethanol give yellow precipitate of CHI3. These are the classic board exam 'identify the compound' questions.",
      },
    ],
    keyPoints: [
      "Aldehydes: R-CHO; Ketones: R-CO-R'",
      "Carbonyl carbon is electrophilic (δ+) — attacked by nucleophiles",
      "Rosenmund reduction: RCOCl + H2/Pd-BaSO4 → RCHO",
      "Aldol condensation: 2 molecules of aldehyde/ketone with α-H",
      "Tollens' test: aldehyde → silver mirror",
      "Fehling's test: aldehyde → red Cu2O precipitate",
      "Iodoform test: CH3-CO-R or CH3-CH(OH)-R → yellow CHI3",
    ],
    importantQuestions: [
      "Distinguish between aldehydes and ketones using chemical tests.",
      "Explain the mechanism of nucleophilic addition in carbonyl compounds.",
      "What is aldol condensation? Write the mechanism.",
      "How is benzaldehyde prepared from toluene?",
    ],
  },

  amines: {
    overview:
      "Amines are basically ammonia (NH3) with one or more hydrogens replaced by carbon groups. They smell like rotten fish (sorry) and are found in everything from amino acids to medicines. This chapter covers how basic they are, how to make them, and what happens when you react them with nitrous acid.",
    concepts: [
      {
        title: "Classification and structure",
        body:
          "Primary (1°) amines: R-NH2. Secondary (2°): R2-NH. Tertiary (3°): R3-N. Quaternary ammonium salts: R4-N+. The classification depends on how many carbons are attached to nitrogen. Each type behaves slightly differently. Aniline is a primary aromatic amine — the most famous one.",
      },
      {
        title: "Basicity of amines",
        body:
          "Amines are basic because the nitrogen has a lone pair that can grab H+. Aliphatic amines are more basic than ammonia. Why? Alkyl groups push electrons toward nitrogen, making the lone pair more available. Aromatic amines (like aniline) are less basic — the lone pair gets delocalized into the benzene ring. It's like the lone pair is distracted.",
      },
      {
        title: "Preparation of amines",
        body:
          "Two main ways. Reduction of nitro compounds: nitrobenzene → aniline (using Sn/HCl or H2/Pd). Or Gabriel phthalimide synthesis: phthalimide + KOH + R-X → primary amine. The Gabriel method gives only primary amines with no secondary/tertiary contamination — super clean.",
      },
      {
        title: "Diazonium salts",
        body:
          "Primary aromatic amines + NaNO2 + HCl at 0-5°C → diazonium salt (Ar-N2+ Cl-). This is HUGE. Diazonium salts are extremely versatile — you can replace the -N2+ group with -Cl, -Br, -I, -CN, -OH, -H, and more. It's like a molecular Lego adapter that lets you swap in almost any group.",
      },
      {
        title: "Reactions of diazonium salts",
        body:
          "Substitution reactions: Sandmeyer reaction (CuCl/KCl → chloro), Gatterman reaction (Cu/HCl). Coupling reaction: diazonium salt + phenol or aromatic amine → azo dye (brightly colored). Azo dyes are used in textiles, food coloring, and even some medicines. The azo group (-N=N-) gives intense color.",
      },
    ],
    keyPoints: [
      "1° amine: R-NH2; 2°: R2NH; 3°: R3N",
      "Aliphatic amines are more basic than ammonia",
      "Aniline is less basic due to resonance of lone pair into benzene ring",
      "Gabriel phthalimide synthesis gives pure primary amine",
      "Diazotization: Ar-NH2 + NaNO2 + HCl at 0-5°C → Ar-N2+ Cl-",
      "Sandmeyer: diazonium → chloro/bromo/cyano using CuX or CuCN",
      "Coupling: diazonium + phenol → azo dye (colored compound)",
    ],
    importantQuestions: [
      "Explain why aniline is less basic than methylamine.",
      "Write the mechanism of diazotization and Sandmeyer reaction.",
      "How are amines classified? Give one example of each class.",
      "What is the carbylamine reaction? Which amines give this test?",
      "Describe the preparation of azo dyes and give their significance.",
    ],
  },

  biomolecules: {
    overview:
      "Carbs give you energy, proteins build your muscles, enzymes digest your food. Biomolecules is the chemistry of living things. It's less about reactions and more about structures — how these huge molecules are put together and what they do in your body.",
    concepts: [
      {
        title: "Carbohydrates",
        body:
          "Sugars and starches. Monosaccharides (glucose, fructose) are single sugar units. Disaccharides (sucrose, lactose) are two linked. Polysaccharides (starch, cellulose) are long chains. Glucose exists in two forms — open chain and ring. The ring form is what you mostly find in water. Glucose + Benedict's → red precipitate (classic test).",
      },
      {
        title: "Structure of glucose",
        body:
          "Glucose is C6H12O6. It has an aldehyde group and five -OH groups. It forms a six-membered ring (pyranose) by the aldehyde reacting with the -OH on carbon 5. The -OH at carbon 1 can be either down (α) or up (β). That α/β difference is why starch (α-linkages) is digestible but cellulose (β-linkages) is not.",
      },
      {
        title: "Proteins and amino acids",
        body:
          "Proteins are chains of amino acids. There are 20 standard amino acids. They link via peptide bonds (CO-NH). The sequence determines the protein's shape and function. Primary structure = sequence. Secondary = folding (α-helix, β-sheet). Tertiary = 3D shape. Quaternary = multiple chains together. Hemoglobin has 4 chains.",
      },
      {
        title: "Enzymes",
        body:
          "Enzymes are protein catalysts. They speed up reactions in your body by millions of times. Lock and key model: the substrate fits perfectly into the enzyme's active site. Induced fit model: the enzyme changes shape a little to grab the substrate. Enzymes are specific — one enzyme, one type of reaction.",
      },
      {
        title: "Vitamins and hormones",
        body:
          "Vitamins are organic compounds your body needs but can't make enough of. Fat-soluble: A, D, E, K. Water-soluble: B-complex and C. Hormones are chemical messengers. Insulin controls blood sugar. Testosterone and estrogen are steroid hormones. Deficiency of vitamins causes diseases — scurvy (C), rickets (D), night blindness (A).",
      },
    ],
    keyPoints: [
      "Monosaccharides: single sugar unit (glucose, fructose)",
      "Glucose forms a pyranose ring (α and β anomers)",
      "Polypeptide = chain of amino acids linked by peptide bonds",
      "Proteins have 4 levels of structure: primary to quaternary",
      "Enzymes are biological catalysts; lock and key model",
      "Vitamins: fat-soluble (A, D, E, K) and water-soluble (B, C)",
      "Deficiency of Vitamin C causes scurvy; Vitamin D causes rickets",
    ],
    importantQuestions: [
      "Explain the structure of glucose. What are α and β anomers?",
      "Differentiate between fibrous and globular proteins with examples.",
      "What is denaturation of proteins? Give an example.",
      "Write the difference between fat-soluble and water-soluble vitamins.",
      "Explain the lock and key model of enzyme action.",
    ],
  },

  polymers: {
    overview:
      "Plastic bottles, nylon ropes, rubber tires — all polymers. A polymer is just a long chain of smaller repeating units called monomers. Think of it like a paperclip chain — one paperclip is boring, but a million of them linked together can make something useful.",
    concepts: [
      {
        title: "Classification of polymers",
        body:
          "Based on source: natural (cotton, silk, rubber), semi-synthetic (rayon), synthetic (nylon, polythene). Based on structure: linear (thermoplastics — melt on heating), cross-linked (thermosetting — burn on heating). Based on polymerization mechanism: addition polymers vs condensation polymers.",
      },
      {
        title: "Addition polymerization",
        body:
          "Monomers with double bonds just keep adding to each other. No byproduct, just chain growth. Needs an initiator to start. Free radical mechanism: initiator breaks the double bond, chain grows. Examples: polythene (from ethylene), PVC (from vinyl chloride), Teflon (from tetrafluoroethylene).",
      },
      {
        title: "Condensation polymerization",
        body:
          "Monomers join by eliminating small molecules like water or HCl. Usually involves two different monomers with functional groups. Nylon-66 is made from hexamethylenediamine + adipic acid (water is released). Dacron (terylene) is made from ethylene glycol + terephthalic acid. These are tougher and more temperature-resistant.",
      },
      {
        title: "Important polymers and their uses",
        body:
          "Polythene: plastic bags and bottles. PVC: pipes, cables, flooring. Teflon: non-stick pans. Nylon-6,6: textiles, ropes, parachutes. Bakelite: electrical switches (thermosetting). Rubber: natural is from latex; vulcanization adds sulfur cross-links to make it stronger. Neoprene: synthetic rubber resistant to oil.",
      },
      {
        title: "Biodegradable polymers",
        body:
          "Regular plastics don't decompose for hundreds of years. Biodegradable polymers (PHBV, PLA) break down naturally. PHBV is made from bacteria. PLA is from corn starch. These are used in medical implants (sutures that dissolve) and eco-friendly packaging. The future of plastics is probably in this direction.",
      },
    ],
    keyPoints: [
      "Monomer = repeating unit; Polymer = chain of monomers",
      "Addition polymers: no byproduct (e.g., polythene, PVC)",
      "Condensation polymers: byproduct eliminated (e.g., nylon, terylene)",
      "Thermoplastics: soften on heating (linear chains)",
      "Thermosetting plastics: harden permanently when heated (cross-linked)",
      "Vulcanization: adding sulfur to rubber for strength and elasticity",
      "Biodegradable polymers: PHBV, PLA — break down naturally",
    ],
    importantQuestions: [
      "Differentiate between addition and condensation polymerization with examples.",
      "Explain the preparation, properties, and uses of Nylon-6,6.",
      "What is vulcanization? Why is it important?",
      "How are biodegradable polymers beneficial over synthetic polymers?",
    ],
  },

  "chemistry-in-life": {
    overview:
      "That painkiller you took? The soap you used this morning? The preservatives in your food? That's chemistry in everyday life. This chapter is about how chemicals keep us healthy, clean, and fed — and sometimes cause problems too.",
    concepts: [
      {
        title: "Drugs and chemotherapy",
        body:
          "Drugs are chemicals that interact with your body's systems. They can kill pathogens (antibiotics), relieve pain (analgesics), or fight cancer (chemotherapy). Most drugs work by targeting specific enzymes or receptors — like a key fitting into a lock. If you can block the right lock, you can control the disease.",
      },
      {
        title: "Analgesics and antipyretics",
        body:
          "Analgesics relieve pain. Antipyretics reduce fever. Aspirin does both — it's an analgesic and antipyretic. Paracetamol (acetaminophen) is another common one. Aspirin works by inhibiting the enzyme that produces prostaglandins (pain-causing compounds). But too much aspirin causes stomach bleeding. Paracetamol is gentler on the stomach but dangerous to the liver in high doses.",
      },
      {
        title: "Antimicrobial drugs",
        body:
          "Antibiotics kill bacteria. Penicillin was the first — discovered by Alexander Fleming by accident in 1928. It disrupts bacterial cell wall synthesis. Human cells don't have cell walls, so penicillin doesn't hurt us — that's what makes it selectively toxic. Antibiotics don't work on viruses. So don't take them for the flu.",
      },
      {
        title: "Chemicals in food",
        body:
          "Preservatives keep food from spoiling. Sodium benzoate and sodium metabisulfite are common. Artificial sweeteners: saccharin (old school), aspartame (diet soda), sucralose (Splenda). Food colors make things look appetizing. Some are natural (turmeric, beetroot). Some are synthetic and controversial. All of them have safe limits set by food authorities.",
      },
      {
        title: "Cleansing agents",
        body:
          "Soaps are sodium or potassium salts of fatty acids. They clean because one end loves water (hydrophilic) and the other loves grease (hydrophobic). Micelles form — the hydrophobic ends grab oil and dirt, the hydrophilic ends face water, and the dirt gets washed away. Detergents are synthetic soaps that work even in hard water.",
      },
    ],
    keyPoints: [
      "Drugs target specific receptors/enzymes in the body",
      "Aspirin: analgesic + antipyretic; inhibits prostaglandin synthesis",
      "Penicillin: antibiotic that disrupts bacterial cell wall formation",
      "Antibiotics don't work on viruses",
      "Preservatives like sodium benzoate prevent microbial growth",
      "Artificial sweeteners: saccharin, aspartame, sucralose",
      "Soap: hydrophilic head + hydrophobic tail; forms micelles to trap dirt",
    ],
    importantQuestions: [
      "Explain how aspirin works as an analgesic and antipyretic.",
      "What is the difference between soaps and detergents?",
      "Discuss the role of chemicals in food preservation.",
      "How do antimicrobial drugs show selective toxicity?",
      "What are artificial sweeteners? Give examples and their uses.",
    ],
  },
};

export default content;
