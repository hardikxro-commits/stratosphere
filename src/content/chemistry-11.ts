interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "basic-concepts": {
    overview: "Imagine trying to count how many grains of sand are on a beach. That's the challenge chemists face working with atoms. This chapter gives you the toolkit: the mole concept, stoichiometry, and the laws of chemical combinations.\n\nThe mole is the chemist's dozen â€” 6.022 Ã— 10Â²Â³ particles. One mole of carbon-12 weighs exactly 12 grams, linking atomic mass (amu) to weighable samples (grams). From here you get percentage composition, empirical/molecular formulas, and stoichiometric calculations.\n\nConcentration terms (molarity, molality, normality) describe solutions precisely. The laws of chemical combination â€” conservation of mass, definite proportions, multiple proportions, Gay-Lussac's law â€” are the foundation.",
    concepts: [
      {
        title: "Mole Concept â€” The Chemist's Counting Unit",
        body: "A mole is 6.022 Ã— 10Â²Â³ particles (Avogadro's constant, N_A). One mole of carbon-12 weighs exactly 12 grams. This bridges amu and grams: atomic mass in amu = mass in grams of one mole. So 1 mole O atoms = 16 g, 1 mole Hâ‚‚O = 18 g."
      },
      {
        title: "Molar Mass and Mole Calculations",
        body: "Molar mass (M) = mass of one mole (g/mol). For elements = atomic mass. For compounds = sum of atomic masses. Central formula: n = m/M. Number of particles = n Ã— N_A. Example: 88 g COâ‚‚ (M=44) = 2 mol = 1.204 Ã— 10Â²â´ molecules = 3.612 Ã— 10Â²â´ atoms."
      },
      {
        title: "Average Atomic Mass and Isotopic Abundance",
        body: "Atomic masses are weighted averages of isotopes. Cl: Cl-35 (75.77%, 34.969 amu) and Cl-37 (24.23%, 36.966 amu). Average = (34.969Ã—0.7577)+(36.966Ã—0.2423) = 35.45 amu. Work backwards to find abundances if needed."
      },
      {
        title: "Percentage Composition",
        body: "% element = (mass of element in 1 mol / molar mass) Ã— 100. Hâ‚‚O: %H = (2.016/18.015)Ã—100 = 11.19%, %O = 88.81%. Sum = 100%. Common mistake: forgetting subscripts â€” Ca(OH)â‚‚ has 2 O and 2 H."
      },
      {
        title: "Empirical and Molecular Formulas",
        body: "Empirical = simplest whole-number ratio. Molecular = (empirical)_n, where n = molecular mass / empirical mass. From % composition: assume 100 g, convert to moles, divide by smallest, round. If 1.33 appears, multiply all by 3 (1.33 = 4/3). CHâ‚‚O (n=1), Câ‚‚Hâ‚„Oâ‚‚ (n=2), Câ‚†Hâ‚â‚‚Oâ‚† (n=6)."
      },
      {
        title: "Stoichiometry â€” The Mathematics of Reactions",
        body: "Balanced equation coefficients = mole ratios. Convert given to moles, use ratio, convert back. Example: 2Hâ‚‚+Oâ‚‚â†’2Hâ‚‚O: 4 mol Hâ‚‚ needs 2 mol Oâ‚‚, produces 4 mol Hâ‚‚O. Never mass-to-mass directly â€” always through moles."
      },
      {
        title: "Limiting Reagent â€” The Bottleneck",
        body: "The reactant that produces least product is limiting. Nâ‚‚+3Hâ‚‚â†’2NHâ‚ƒ: 2 mol Nâ‚‚ + 3 mol Hâ‚‚ â€” Hâ‚‚ is limiting (needs 6 mol for 2 mol Nâ‚‚), produces 2 mol NHâ‚ƒ. Nâ‚‚ could produce 4 mol if enough Hâ‚‚ were present."
      },
      {
        title: "Percentage Yield â€” Reality Check",
        body: "% yield = (actual/theoretical) Ã— 100. >90% excellent, 70-90% good. Multistep: overall = product of step yields. Three 80% steps = 51.2% overall."
      },
      {
        title: "Concentration Terms â€” Molarity, Molality, Normality",
        body: "Molarity (M) = mol/L (temp-dependent). Molality (m) = mol/kg solvent (temp-independent). Normality (N) = nÃ—M. For acids: n = basicity. For bases: n = acidity. For redox: n = electrons transferred. Mole fraction X = náµ¢/n_total. ppm = (mass solute/mass solution)Ã—10â¶."
      },
      {
        title: "Laws of Chemical Combination",
        body: "Conservation of Mass: mass of reactants = mass of products. Definite Proportions: fixed mass ratios in compounds. Multiple Proportions: mass ratios for multiple compounds are small whole numbers. Gay-Lussac's Law: gaseous volumes react in simple whole-number ratios."
      },
      {
        title: "Avogadro's Law and Molar Volume",
        body: "Equal gas volumes at same T/P have equal molecules. At STP (0Â°C, 1 atm): 1 mol = 22.4 L. n = V(L)/22.4 only at STP. At RTP (25Â°C, 1 atm): ~24.5 L/mol. Use PV=nRT otherwise."
      },
      {
        title: "Determining Molecular Mass â€” Vapor Density",
        body: "Vapor density = density of gas / density of Hâ‚‚ = M(gas)/2. So M(gas) = 2 Ã— vapor density. Vapor density = 14 â†’ M = 28 g/mol (Nâ‚‚, CO, or Câ‚‚Hâ‚„)."
      },
      {
        title: "Significant Figures and Scientific Notation",
        body: "Sig figs convey precision. Non-zero digits significant. Zeros between non-zero digits significant. Leading zeros not significant. Trailing zeros after decimal significant. 0.00450 has 3 sig figs. Multiplication/division: same sig figs as least precise. Addition/subtraction: same decimal places as fewest."
      },
      {
        title: "Empirical Formula from Combustion Data",
        body: "Burn sample in Oâ‚‚. Mass C = (12/44)Ã—mass COâ‚‚. Mass H = (2/18)Ã—mass Hâ‚‚O. If O present: mass O = total - mass C - mass H. Find mole ratio C:H:O, simplify."
      },
      {
        title: "Stoichiometry in Solution â€” Titrations",
        body: "Mâ‚Vâ‚/nâ‚ = Mâ‚‚Vâ‚‚/nâ‚‚. For Hâ‚‚SOâ‚„ + 2NaOH: 1:2 ratio, so 2Mâ‚Vâ‚ = Mâ‚‚Vâ‚‚. Or use Nâ‚Vâ‚ = Nâ‚‚Vâ‚‚ (simpler since N accounts for stoichiometry)."
      },
      {
        title: "Law of Equivalents and Equivalent Mass",
        body: "Equivalent mass: elements = atomic mass/valency. Acids = molar mass/basicity. Bases = molar mass/acidity. Redox = molar mass/n-factor. Nâ‚Vâ‚ = Nâ‚‚Vâ‚‚ at equivalence. N = n Ã— M."
      },
      {
        title: "Concentration Conversions and Dilution",
        body: "Mâ‚Vâ‚ = Mâ‚‚Vâ‚‚ (moles constant). To prepare 500 mL 0.1 M HCl from 2 M: Vâ‚ = (0.1Ã—500)/2 = 25 mL. For Mâ†’m conversion, need density. Dilute aqueous: M â‰ˆ m."
      },
      {
        title: "Numericals on Mole Concept â€” A Worked Approach",
        body: "Step 1: Identify given and required. Step 2: Convert to moles. Step 3: Apply relation. Step 4: Calculate with correct units. Step 5: Check reasonableness. Common errors: Â°C not K, mL not L, wrong molar mass, ignoring coefficients."
      }
    ],
    keyPoints: [
      "One mole = 6.022 Ã— 10Â²Â³ particles (Avogadro's number)",
      "Molar mass (g/mol) = atomic/molecular mass in amu",
      "n = m/M is the central formula; Particles = n Ã— N_A",
      "Average atomic mass = Î£ (isotopic mass Ã— fractional abundance)",
      "% composition = (mass of element in 1 mol / molar mass) Ã— 100",
      "Empirical = simplest ratio; Molecular = n Ã— empirical",
      "Combustion: mass C = (12/44)Ã—mass COâ‚‚; mass H = (2/18)Ã—mass Hâ‚‚O",
      "Limiting reagent â†’ theoretical yield; % yield = (actual/theoretical)Ã—100",
      "Molarity (M) = mol/L; Molality (m) = mol/kg; Normality (N) = nÃ—M",
      "Mâ‚Vâ‚ = Mâ‚‚Vâ‚‚ for dilution; Nâ‚Vâ‚ = Nâ‚‚Vâ‚‚ for titrations",
      "STP: 1 mol gas = 22.4 L; Molecular mass = 2 Ã— vapor density",
      "Four laws: Conservation, Definite Proportions, Multiple Proportions, Gay-Lussac",
      "Equivalent mass = molar mass / n-factor",
      "Significant figures: result precision â‰¤ least precise input",
      "Always convert mL to L, Â°C to K"
    ],
    importantQuestions: [
      "Calculate moles, molecules, and atoms in 36 g water.",
      "A compound has C=54.54%, H=9.09%, O=36.37%. Molecular mass=88 g/mol. Find empirical and molecular formulas.",
      "In 2Al+3Clâ‚‚â†’2AlClâ‚ƒ, 5.4 g Al reacts with 21.3 g Clâ‚‚. Find limiting reagent and mass of AlClâ‚ƒ formed.",
      "Calculate average atomic mass of Cu: Cu-63 (62.93 amu, 69.09%) and Cu-65 (64.93 amu, 30.91%).",
      "Calculate molarity and normality of 4.9 g Hâ‚‚SOâ‚„ in 250 mL solution.",
      "0.246 g organic compound gives 0.352 g COâ‚‚ and 0.180 g Hâ‚‚O. Determine empirical formula.",
      "What volume of 0.1 M HCl neutralizes 25 mL of 0.05 M Ca(OH)â‚‚?",
      "How many grams Oâ‚‚ react with 24 g CHâ‚„? Volume of COâ‚‚ at STP?"
    ]
  },
  "analytical-chemistry": {
    overview: "You're a chemical detective handed a mysterious white powder. Analytical chemistry teaches you to identify what's present (qualitative) and how much (quantitative). This chapter covers systematic qualitative inorganic analysis â€” identifying cations and anions in a sample through a sequence of group reagents and confirmatory tests.\n\nYou start with preliminary examination: color (blue=CuÂ²âº, green=NiÂ²âº/FeÂ²âº), solubility, flame test (Na=yellow, K=lilac, Ca=brick red), and dry heating. Then systematic cation analysis: Group 1 (HCl â†’ Agâº, PbÂ²âº, Hgâ‚‚Â²âº), Group 2 (Hâ‚‚S in acid â†’ CuÂ²âº, CdÂ²âº, etc.), Group 3 ((NHâ‚„)â‚‚S â†’ CoÂ²âº, NiÂ²âº, FeÂ³âº, AlÂ³âº, etc.), Group 4 ((NHâ‚„)â‚‚COâ‚ƒ â†’ BaÂ²âº, SrÂ²âº, CaÂ²âº), Group 5 (self â†’ Naâº, Kâº, MgÂ²âº, NHâ‚„âº).\n\nAnion analysis starts with Hâ‚‚SOâ‚„ tests (dilute and concentrated) followed by individual confirmatory tests. The entire process relies on solubility products and the common ion effect for selective precipitation.",
    concepts: [
      {
        title: "Preliminary Examination of the Salt",
        body: "Color: white/colorless (Naâº, Kâº, CaÂ²âº, BaÂ²âº, MgÂ²âº, AlÂ³âº, ZnÂ²âº, NHâ‚„âº), blue (CuÂ²âº), green (NiÂ²âº, FeSOâ‚„, CuClâ‚‚), pink/red (CoÂ²âº, MnÂ²âº), yellow (FeÂ³âº, chromates). Test solubility in water and dil. HCl. Smell: ammonium salts smell of NHâ‚ƒ when moistened. Dry heating: decrepitation (NaCl, KCl), sublimation (NHâ‚„Cl, Iâ‚‚), color change (CuSOâ‚„Â·5Hâ‚‚O blueâ†’white), gas evolution (COâ‚‚, Oâ‚‚, NOâ‚‚)."
      },
      {
        title: "Flame Test â€” Electronic Fingerprints",
        body: "Clean Pt/Ni wire with conc. HCl. Dip in sample, hold in non-luminous flame. Naâº = golden yellow (persistent), Kâº = lilac (cobalt glass to filter Na), CaÂ²âº = brick red, SrÂ²âº = crimson, BaÂ²âº = apple green, CuÂ²âº = emerald green. Positive = strong evidence; negative doesn't rule out."
      },
      {
        title: "Systematic Cation Analysis â€” Group 1 (HCl Group)",
        body: "Agâº, PbÂ²âº, Hgâ‚‚Â²âº precipitate as white chlorides with dil. HCl. Hot water: PbClâ‚‚ dissolves; AgCl and Hgâ‚‚Clâ‚‚ remain. Hot water + Kâ‚‚CrOâ‚„ â†’ yellow PbCrOâ‚„ (PbÂ²âº confirmed). Residue + NHâ‚ƒ: AgCl dissolves as [Ag(NHâ‚ƒ)â‚‚]âº; Hgâ‚‚Clâ‚‚ turns black (Hg + HgNHâ‚‚Cl). Acidify with HNOâ‚ƒ â†’ white AgCl (Agâº confirmed)."
      },
      {
        title: "Systematic Cation Analysis â€” Group 2 (Hâ‚‚S Group)",
        body: "Precipitated as sulfides by Hâ‚‚S in acidic medium. 2A (CuÂ²âº, CdÂ²âº, HgÂ²âº, BiÂ³âº, PbÂ²âº) and 2B (AsÂ³âº, SbÂ³âº, SnÂ²âº, Snâ´âº). Yellow ammonium sulfide dissolves 2B as thio-salts. Dissolve 2A in dil. HNOâ‚ƒ: CuÂ²âº + excess NHâ‚ƒ â†’ deep blue; CdÂ²âº + Hâ‚‚S (NHâ‚ƒ) â†’ yellow CdS; BiÂ³âº + sodium stannite â†’ whiteâ†’black."
      },
      {
        title: "Systematic Cation Analysis â€” Group 3 ((NHâ‚„)â‚‚S Group)",
        body: "Make alkaline with NHâ‚ƒ, add (NHâ‚„)â‚‚S. Precipitates: CoÂ²âº, NiÂ²âº, MnÂ²âº, ZnÂ²âº (sulfides); FeÂ²âº/FeÂ³âº, AlÂ³âº, CrÂ³âº (hydroxides). Dissolve in dil. HCl. NiÂ²âº + DMG â†’ rose-red. CoÂ²âº + SCNâ» â†’ blue complex (amyl alcohol). FeÂ³âº + KSCN â†’ blood-red; + Kâ‚„[Fe(CN)â‚†] â†’ Prussian blue. AlÂ³âº + NHâ‚ƒ â†’ gelatinous white, soluble in excess NaOH. CrÂ³âº + NaOH + Brâ‚‚ â†’ yellow CrOâ‚„Â²â»; + PbÂ²âº â†’ yellow PbCrOâ‚„."
      },
      {
        title: "Systematic Cation Analysis â€” Group 4 ((NHâ‚„)â‚‚COâ‚ƒ Group)",
        body: "BaÂ²âº, SrÂ²âº, CaÂ²âº. Add NHâ‚„Cl + NHâ‚ƒ + (NHâ‚„)â‚‚COâ‚ƒ. NHâ‚„Cl prevents Mg(OH)â‚‚ ppt. Dissolve white carbonates in dil. acetic acid. BaÂ²âº + Kâ‚‚CrOâ‚„ â†’ yellow BaCrOâ‚„ (even in acetic acid). SrÂ²âº â†’ crimson flame, no ppt with Kâ‚‚CrOâ‚„ in acetic acid. CaÂ²âº + ammonium oxalate â†’ white CaCâ‚‚Oâ‚„; brick-red flame."
      },
      {
        title: "Systematic Cation Analysis â€” Group 5 (Self Group)",
        body: "Naâº, Kâº, MgÂ²âº, NHâ‚„âº â€” not precipitated by any group reagent. Test NHâ‚„âº from original: Nessler's reagent â†’ brown color; or NaOH heat â†’ NHâ‚ƒ (smells, blue litmus). Naâº â†’ golden yellow flame. Kâº â†’ lilac flame (cobalt glass). MgÂ²âº + NaOH â†’ white Mg(OH)â‚‚, soluble in NHâ‚„Cl."
      },
      {
        title: "Analysis of Anions â€” Preliminary Tests",
        body: "Dil. Hâ‚‚SOâ‚„: COâ‚ƒÂ²â» â†’ COâ‚‚ (limewater milky); SOâ‚ƒÂ²â» â†’ SOâ‚‚ (Kâ‚‚Crâ‚‚Oâ‚‡ green); SÂ²â» â†’ Hâ‚‚S (lead acetate black); NOâ‚‚â» â†’ brown NOâ‚‚. Conc. Hâ‚‚SOâ‚„: Clâ» â†’ HCl (NHâ‚ƒ white fumes); Brâ» â†’ brown Brâ‚‚; Iâ» â†’ violet Iâ‚‚; NOâ‚ƒâ» â†’ brown NOâ‚‚."
      },
      {
        title: "Confirmatory Tests for Anions â€” COâ‚ƒÂ²â», HCOâ‚ƒâ», SOâ‚ƒÂ²â», SÂ²â»",
        body: "COâ‚ƒÂ²â»: dil. HCl â†’ COâ‚‚, milky limewater. HCOâ‚ƒâ»: also COâ‚‚ but MgSOâ‚„ test â€” COâ‚ƒÂ²â» gives immediate MgCOâ‚ƒ, HCOâ‚ƒâ» needs heating. SOâ‚ƒÂ²â»: dil. HCl â†’ SOâ‚‚ turns Kâ‚‚Crâ‚‚Oâ‚‡ green, KMnOâ‚„ colorless. SÂ²â»: dil. HCl â†’ Hâ‚‚S turns lead acetate black; sodium nitroprusside â†’ purple."
      },
      {
        title: "Confirmatory Tests for Anions â€” Clâ», Brâ», Iâ», NOâ‚ƒâ»",
        body: "Clâ»: AgNOâ‚ƒ â†’ white AgCl, soluble in NHâ‚ƒ, insoluble in HNOâ‚ƒ. Brâ»: AgNOâ‚ƒ â†’ pale yellow AgBr, partially NHâ‚ƒ-soluble; Clâ‚‚ + CClâ‚„ â†’ red-brown Brâ‚‚ layer. Iâ»: AgNOâ‚ƒ â†’ yellow AgI, NHâ‚ƒ-insoluble; Clâ‚‚ + CClâ‚„ â†’ violet Iâ‚‚ layer. NOâ‚ƒâ»: brown ring test â€” FeSOâ‚„ + conc. Hâ‚‚SOâ‚„ layered â†’ brown [Fe(Hâ‚‚O)â‚…(NO)]Â²âº."
      },
      {
        title: "Confirmatory Tests for Anions â€” SOâ‚„Â²â», POâ‚„Â³â», CHâ‚ƒCOOâ», Câ‚‚Oâ‚„Â²â»",
        body: "SOâ‚„Â²â»: BaClâ‚‚ â†’ white BaSOâ‚„, insol. in dil. HCl/HNOâ‚ƒ. POâ‚„Â³â»: ammonium molybdate + conc. HNOâ‚ƒ + warm â†’ canary yellow. CHâ‚ƒCOOâ»: ethanol + conc. Hâ‚‚SOâ‚„ + warm â†’ fruity ethyl acetate. Câ‚‚Oâ‚„Â²â»: CaClâ‚‚ â†’ white CaCâ‚‚Oâ‚„, insol. in acetic acid, sol. in mineral acids."
      },
      {
        title: "Dry Heating Tests",
        body: "Heat dry salt. Decrepitation: NaCl, KCl. Sublimation: NHâ‚„Cl (white), Iâ‚‚ (violet), Asâ‚‚Oâ‚ƒ (white). Color changes: CuSOâ‚„Â·5Hâ‚‚O (blueâ†’white), FeSOâ‚„Â·7Hâ‚‚O (greenâ†’brown). Gas: COâ‚‚ (carbonates), Oâ‚‚/NOâ‚‚ (nitrates), Hâ‚‚O (hydrated salts â€” condenses on cool tube)."
      },
      {
        title: "Solubility Product and Precipitation",
        body: "Ksp = [A]Ë£[B]Ê¸. Precipitate when IP > Ksp. Group 2: acidic medium low [SÂ²â»] â†’ only very low Ksp sulfides ppt (CuS=6Ã—10â»Â³â·). Group 3: higher pH â†’ higher [SÂ²â»] â†’ ZnS (2Ã—10â»Â²âµ) can ppt. Calculate IP and compare to Ksp."
      },
      {
        title: "Common Ion Effect in Qualitative Analysis",
        body: "Group 2: Hâº from HCl suppresses Hâ‚‚S â†’ low [SÂ²â»] â†’ selective precipitation. Group 4: NHâ‚„âº from NHâ‚„Cl suppresses OHâ» â†’ prevents Mg(OH)â‚‚ ppt. Without common ion effect, groups would not separate cleanly."
      },
      {
        title: "Analysis of Insoluble Salts",
        body: "Salts insoluble even in dil. HCl (BaSOâ‚„, SrSOâ‚„, PbSOâ‚„, CaFâ‚‚, AgX): fuse with Naâ‚‚COâ‚ƒ. BaSOâ‚„ + Naâ‚‚COâ‚ƒ (fusion) â†’ BaCOâ‚ƒ + Naâ‚‚SOâ‚„. Dissolve BaCOâ‚ƒ in dil. HCl. Test anion from filtrate. Alternatively: PbSOâ‚„ in CHâ‚ƒCOONHâ‚„; AgCl in NHâ‚ƒ."
      },
      {
        title: "Interference and Elimination of Interfering Ions",
        body: "FeÂ³âº and CuÂ²âº interfere with NOâ‚ƒâ» brown ring test (give color). Remove CuÂ²âº by Hâ‚‚S. POâ‚„Â³â» interferes with Groups 3-4 by forming phosphates. Add excess FeClâ‚ƒ â€” FePOâ‚„ precipitates, carrying down other cations. CrOâ‚„Â²â»: yellow color â€” reduce to CrÂ³âº, test separately."
      }
    ],
    keyPoints: [
      "Qualitative analysis identifies constituents; quantitative measures amounts",
      "Preliminary: color, solubility, flame test, dry heating",
      "Flame test: Naâº (yellow), Kâº (lilac), CaÂ²âº (brick red), SrÂ²âº (crimson), BaÂ²âº (apple green), CuÂ²âº (green)",
      "Group 1 (HCl): Agâº, PbÂ²âº, Hgâ‚‚Â²âº as chlorides; PbClâ‚‚ soluble in hot water",
      "Group 2 (Hâ‚‚S in acid): 2A and 2B separated by yellow ammonium sulfide",
      "Group 3 ((NHâ‚„)â‚‚S in NHâ‚ƒ): CoÂ²âº, NiÂ²âº, MnÂ²âº, ZnÂ²âº, Feâ‚‚âº/FeÂ³âº, AlÂ³âº, CrÂ³âº",
      "Group 4 ((NHâ‚„)â‚‚COâ‚ƒ): BaÂ²âº, SrÂ²âº, CaÂ²âº (MgÂ²âº stays soluble with NHâ‚„Cl)",
      "Group 5 (self): Naâº, Kâº, MgÂ²âº, NHâ‚„âº â€” test NHâ‚„âº from original",
      "NiÂ²âº: rose-red with DMG. FeÂ³âº: blood-red with KSCN",
      "Brown ring test: FeSOâ‚„ + conc. Hâ‚‚SOâ‚„ â†’ brown [Fe(Hâ‚‚O)â‚…(NO)]Â²âº",
      "Clâ» (white AgCl/NHâ‚ƒ-soluble) vs Brâ» (pale yellow/partial) vs Iâ» (yellow/insoluble)",
      "Precipitation when IP > Ksp; common ion effect enables selective separation",
      "Insoluble salts: fuse with Naâ‚‚COâ‚ƒ â†’ soluble carbonates",
      "Interferences: FeÂ³âº, CuÂ²âº (brown ring); POâ‚„Â³â» (Groups 3-4)"
    ],
    importantQuestions: [
      "A white salt gives brick-red flame. With dil. HCl, it produces gas that turns limewater milky. Identify and write reactions.",
      "A salt gives: blue solution, green flame, deep blue with NHâ‚ƒ. Identify the cation.",
      "How to systematically analyze a mixture of PbÂ²âº, CuÂ²âº, and FeÂ³âº?",
      "Distinguish: Naâ‚‚COâ‚ƒ vs Naâ‚‚SOâ‚„; NaCl vs NaBr; BaClâ‚‚ vs CaClâ‚‚",
      "Explain common ion effect in Group 2 and Group 4 separation.",
      "Why is NHâ‚„Cl added in Group 4? What happens if omitted?",
      "Explain brown ring test. Which ions interfere and how removed?",
      "A salt is insoluble in water and dil. HCl. Describe the procedure to identify it."
    ]
  },
  "analytical-techniques": {
    overview: "How do you separate, identify, and quantify unknown substances? This chapter covers chromatography (paper, TLC, column, GC, HPLC), spectroscopy (UV-Vis, IR, NMR, MS), and classical techniques (distillation, extraction). Each method has its niche â€” the skill is choosing the right tool.\n\nChromatography separates based on differential distribution between a stationary phase and mobile phase. Spectroscopy studies light-matter interactions to identify and measure compounds. Classical techniques like distillation and extraction remain essential in every lab.",
    concepts: [
      {
        title: "Paper Chromatography",
        body: "Stationary phase: filter paper (cellulose + water). Mobile phase: solvent climbs by capillary action. Components partition between phases. Rf = distance by solute / distance by solvent front (0<Rf<1). Depends on solvent, temperature, paper type â€” run standards alongside. Visualization: UV, iodine, ninhydrin (purple for amino acids). Simple, cheap, used in pharmaceutical QC."
      },
      {
        title: "Thin Layer Chromatography (TLC)",
        body: "Stationary phase: silica gel or alumina on glass/plastic. More polar compounds are retained more on silica. Detection: UV fluorescence (dark spots on bright green), iodine, charring, chemical sprays. Faster (5-30 min) than paper, requires Î¼g samples, better resolution. Used for reaction monitoring, purity checks, identification."
      },
      {
        title: "Column Chromatography",
        body: "Preparative version of TLC. Column packed with silica/alumina. Sample loaded at top, solvent elutes components at different rates. Gradient elution (increasing polarity) improves separation. Fractions collected and monitored by TLC. Separates grams to kilograms. Essential for organic synthesis and natural product isolation."
      },
      {
        title: "Principle of Spectroscopy â€” Light and Matter",
        body: "Spectroscopy studies how light interacts with matter. E = hÎ½ = hc/Î». Electronic transitions (UV-Vis, 200-800 nm) involve valence electrons. Vibrational transitions (IR, 2.5-25 Î¼m) involve bond stretching/bending. Beer-Lambert: A = Îµcl (absorbance = molar absorptivity Ã— concentration Ã— path length). Quantitative by measuring A at Î»max."
      },
      {
        title: "UV-Visible Spectroscopy",
        body: "For compounds with conjugated Ï€ systems. Chromophores: ethene (170 nm), benzene (255 nm), Î²-carotene (450 nm). Î»max is characteristic. A âˆ c at Î»max. Applications: drug concentrations, metal complexes, kinetics, protein detection (280 nm). Instrument: deuterium lamp (UV), tungsten (Vis), monochromator, detector."
      },
      {
        title: "Infrared (IR) Spectroscopy",
        body: "Identifies functional groups via bond vibrations (4000-400 cmâ»Â¹). Key: 3700-3200 (O-H, N-H, broad), 3100-2800 (C-H), 2250-2100 (Câ‰¡C, Câ‰¡N), 1750-1650 (C=O), 1650-1450 (C=C), 1300-1000 (C-O). Fingerprint region (1500-400) is molecule-specific. Essential for confirming organic compounds."
      },
      {
        title: "Simple Distillation",
        body: "Separates liquids with BP difference > 25Â°C. Apparatus: flask, thermometer, condenser, receiver. Lower BP component vaporizes first, condenses. Temperature constant for pure liquid. Used for solvent purification, desalination. Inefficient for close BPs â€” vapor contains significant higher-BP component."
      },
      {
        title: "Fractional Distillation",
        body: "Uses fractionating column (packed with glass beads/Rashig rings) for close BPs (~5Â°C). Multiple vaporization-condensation cycles = theoretical plates. More plates = better separation. Industrial: petroleum refining separates crude into gases, gasoline, kerosene, diesel, residue."
      },
      {
        title: "Solvent Extraction",
        body: "Solute distributes between immiscible solvents: K = Câ‚/Câ‚‚. Mass remaining after n extractions = initial Ã— [Vâ‚/(Vâ‚+KVâ‚‚)]â¿. Multiple small extractions > one large. Example: three 10 mL extractions more efficient than one 30 mL. Applications: caffeine extraction, natural product isolation."
      },
      {
        title: "Electrophoresis",
        body: "Separates charged molecules in electric field. (+) â†’ cathode, (-) â†’ anode. Speed âˆ charge/size ratio. Gel electrophoresis: agarose or polyacrylamide acts as molecular sieve. DNA fragments by size (fingerprinting), proteins by SDS-PAGE, amino acids by paper electrophoresis."
      },
      {
        title: "Gas Chromatography (GC)",
        body: "For volatile compounds. Sample vaporized (250-300Â°C), carried by He through capillary column. Lower BP â†’ faster elution. Retention time characteristic. Detectors: FID (organics), MS (identification). GC-MS gives both separation and ID. Applications: petroleum, drug testing, pesticides, environmental."
      },
      {
        title: "High Performance Liquid Chromatography (HPLC)",
        body: "For non-volatile/thermally unstable compounds. Mobile phase pumped at high pressure through packed column (3-5 Î¼m particles). Reverse phase (Câ‚â‚ˆ, water-methanol) most common. UV-Vis or MS detection. Workhorse of pharmaceutical analysis. Gradient elution changes solvent composition during run."
      },
      {
        title: "Atomic Absorption Spectroscopy (AAS)",
        body: "Measures metals. Sample atomized in flame or graphite tube. Hollow cathode lamp emits element-specific wavelength. Absorption âˆ concentration (Beer-Lambert). Each element needs its own lamp. Flame AAS: ppm sensitivity. Graphite furnace: ppb. Applications: heavy metals in water, minerals in food, clinical."
      },
      {
        title: "Mass Spectrometry (MS)",
        body: "Determines molecular mass and fragments. Sample ionized (EI, ESI, MALDI). Ions separated by m/z. Mâº or [M+H]âº peak gives molecular mass. Fragments = structural fingerprint. High-resolution MS distinguishes Câ‚‚Hâ‚†O (46.0419) from CHâ‚‚Oâ‚‚ (46.0055). Coupled with GC/LC. Applications: identification, proteomics, doping detection."
      },
      {
        title: "NMR Spectroscopy",
        body: "Most powerful for structure determination. Â¹H NMR: chemical shift Î´ (0.9 CHâ‚ƒ, 1.2 CHâ‚‚, 3.7 CHâ‚‚-O, 7.2 aromatic, 10-12 COOH). Integration = proton count. Splitting n+1 = neighbor count. Â¹Â³C NMR: one peak per unique C. Combined = complete structure determination."
      },
      {
        title: "Conductometry",
        body: "Measures ionic conductivity. Conductance G = 1/R (siemens). Conductivity Îº = G Ã— cell constant. Conductometric titration: plot conductivity vs titrant volume. Endpoint = slope change. HCl + NaOH: conductivity drops (Hâº replaced by Naâº), then rises (OHâ» added). For colored/turbid solutions."
      },
      {
        title: "pH Metry and Potentiometry",
        body: "Measures potential for ion concentration. pH electrode: E = constant - 0.059Ã—pH at 25Â°C. Potentiometric titration endpoint = inflection point (max slope, found from derivative). Works for colored/turbid/non-aqueous solutions. Ion-selective electrodes: Fâ», Naâº, Kâº, CaÂ²âº."
      },
      {
        title: "Thermal Methods (TGA, DTA, DSC)",
        body: "TGA: mass change vs temperature â€” detects dehydration, decomposition. DTA: temperature difference vs reference â€” endothermic (melting), exothermic (crystallization). DSC: heat flow â€” quantifies Î”H for transitions. Used in materials science, polymers, pharmaceuticals."
      },
      {
        title: "Refractometry",
        body: "Refractive index n = speed of light in vacuum / speed in medium. Depends on Î» (Na D-line, 589 nm), temperature, composition. For solutions, n âˆ concentration. Abbe refractometer: one drop, instant reading. Applications: sugar (Brix), purity of essential oils, liquid identification."
      }
    ],
    keyPoints: [
      "Chromatography: differential distribution between stationary and mobile phases",
      "Rf = distance by solute / distance by solvent front (0<Rf<1)",
      "TLC: faster, sharper than paper; used for reaction monitoring",
      "Column chromatography: preparative; gradient elution improves resolution",
      "UV-Vis: electronic transitions; Beer-Lambert A = Îµcl",
      "IR: bond vibrations; key: 3300 (O-H), 1700 (C=O), 1600 (C=C), 2200 (Câ‰¡C)",
      "Simple distillation: BP diff > 25Â°C; fractional: column for close BPs",
      "More theoretical plates = better separation in fractional distillation",
      "Solvent extraction: K = Câ‚/Câ‚‚; multiple small extractions more efficient",
      "GC: volatiles, retention time; GC-MS provides separation + ID",
      "HPLC: non-volatiles; reverse phase (Câ‚â‚ˆ) most common",
      "AAS: element-specific lamp; flame (ppm), graphite furnace (ppb)",
      "MS: Mâº peak for molecular mass; fragments for structure",
      "NMR: Î´, integration, splitting (n+1 rule) determine structure",
      "Conductometry: for colored/turbid solutions; endpoint = slope change",
      "Potentiometry: Nernst equation; inflection point = endpoint",
      "TGA (mass), DTA/DSC (heat flow) â€” materials characterization"
    ],
    importantQuestions: [
      "Explain paper chromatography. How is Rf calculated and what affects it?",
      "Two dyes on TLC: A=4.2 cm, B=6.8 cm, solvent=8.5 cm. Calculate Rf. Which is more polar?",
      "Differentiate between simple and fractional distillation.",
      "State Beer-Lambert law: A=0.45, Îµ=1.5Ã—10â´ L molâ»Â¹cmâ»Â¹, l=1 cm. Find concentration.",
      "Assign IR absorptions for ethanol, acetone, and benzoic acid.",
      "100 mL aqueous has 5 g of compound, K(org/aq)=4. Compare one 50 mL vs two 25 mL extractions.",
      "Compare GC and HPLC with applications.",
      "Predict Â¹H NMR of ethanol (CHâ‚ƒCHâ‚‚OH).",
      "Explain AAS and why hollow cathode lamp is element-specific."
    ]
  },
  "structure-of-atom": {
    overview: "What's inside an atom? This chapter traces our understanding from Dalton's spheres to the quantum mechanical model. Rutherford's gold foil experiment proved the atom has a tiny, dense nucleus. Bohr explained the hydrogen spectrum with quantized orbits. But Bohr's model failed for multi-electron atoms.\n\nde Broglie proposed electrons have wave nature (Î» = h/mv). SchrÃ¶dinger's equation (Ä¤Î¨ = EÎ¨) treats electrons as wave functions â€” |Î¨|Â² gives probability density (orbitals, not orbits). Heisenberg's uncertainty principle (Î”xÂ·Î”p â‰¥ h/4Ï€) says we can't know both position and momentum precisely.\n\nQuantum numbers (n, l, m, s) define each electron's address. The Aufbau principle, Pauli exclusion, and Hund's rule determine electronic configurations. These concepts explain the periodic table, bonding, and spectroscopy.",
    concepts: [
      {
        title: "Dalton's Atomic Theory and Its Limitations",
        body: "Dalton (1808): atoms are indivisible, atoms of same element identical, compounds from different atoms, reactions rearrange atoms. Limitations: atoms divisible (electrons, protons, neutrons), isotopes exist (same element, different masses), nuclear reactions transform elements. Core idea of discrete atoms still stands."
      },
      {
        title: "Discovery of Subatomic Particles",
        body: "Electron: J.J. Thomson (1897), cathode rays, e/m = 1.76Ã—10Â¹Â¹ C/kg. Millikan (1909): e = 1.602Ã—10â»Â¹â¹ C. Proton: Rutherford (1911), charge +1.602Ã—10â»Â¹â¹ C, mass ~1836Ã— electron. Neutron: Chadwick (1932), no charge, mass 1.008665 amu. Neutrons explain isotopes â€” same Z, different A."
      },
      {
        title: "Rutherford's Gold Foil Experiment",
        body: "Fired Î±-particles at thin gold foil. Expected all through (plum pudding). Results: most through, ~1/20,000 deflected >90Â°, some bounced back. Conclusions: atom mostly empty, positive charge concentrated in tiny nucleus (~10â»Â¹âµ m vs atom ~10â»Â¹â° m), electrons orbit. But classical physics says accelerating electrons should spiral into nucleus."
      },
      {
        title: "Bohr's Model of the Hydrogen Atom",
        body: "Postulates: (1) Electrons in circular orbits. (2) Only allowed orbits where mvr = nh/2Ï€ (n=1,2,3...). (3) No radiation in stationary states. (4) Î”E = hÎ½ when jumping. Eâ‚™ = -13.6/nÂ² eV. râ‚™ = nÂ² Ã— 52.9 pm. Explained hydrogen spectrum: Lyman (nâ‚=1, UV), Balmer (nâ‚=2, visible), Paschen (nâ‚=3, IR). Failed for multi-electron atoms."
      },
      {
        title: "Hydrogen Spectrum â€” Spectral Lines Explained",
        body: "Excited H emits specific wavelengths. Series: Lyman (UV, nâ‚=1), Balmer (visible, nâ‚=2), Paschen (IR, nâ‚=3), Brackett (far IR, nâ‚=4), Pfund (far IR, nâ‚=5). Rydberg: 1/Î» = R(1/nâ‚Â² - 1/nâ‚‚Â²), R = 1.097Ã—10â· mâ»Â¹. HÎ± = 656 nm (red), HÎ² = 486 nm (blue-green). Only specific wavelengths = quantized energies."
      },
      {
        title: "Wave-Particle Duality â€” de Broglie's Hypothesis",
        body: "de Broglie (1924): matter has wave properties, Î» = h/mv = h/p. Macroscopic: 1 kg at 1 m/s â†’ Î» = 6.626Ã—10â»Â³â´ m (undetectable). Electron: Î» ~ 10â»Â¹â° m (comparable to atomic spacing). Davisson-Germer (1927): electron diffraction from Ni crystal confirmed. Explains why only certain orbitals are stable (standing waves: 2Ï€r = nÎ»)."
      },
      {
        title: "Heisenberg's Uncertainty Principle",
        body: "Î”xÂ·Î”p â‰¥ h/4Ï€. Can't simultaneously know exact position and momentum. For electrons, uncertainty is significant. If electron confined to nucleus (Î”x~10â»Â¹âµ m), Î”p â‰¥ 5Ã—10â»Â²â° kgÂ·m/s â†’ KE ~60 MeV (far exceeds binding energy â€” electron escapes). Î”EÂ·Î”t â‰¥ h/4Ï€ explains finite lifetimes of excited states."
      },
      {
        title: "Quantum Mechanical Model â€” SchrÃ¶dinger Equation",
        body: "Ä¤Î¨ = EÎ¨, where Î¨ = wave function, Ä¤ = Hamiltonian, E = energy. |Î¨|Â² = probability density â€” gives orbitals (3D probability clouds, not fixed orbits). Solutions yield quantized energies naturally from boundary conditions. Explains all atomic properties that Bohr couldn't."
      },
      {
        title: "Quantum Numbers â€” Address System for Electrons",
        body: "n (principal): energy level and size (1,2,3...). l (azimuthal): shape â€” 0=s, 1=p, 2=d, 3=f (0 to n-1). m_l (magnetic): orientation (-l to +l). m_s (spin): Â±Â½ (â†‘â†“). Each orbital holds max 2 eâ» with opposite spins. No two electrons can have all four QNs identical (Pauli)."
      },
      {
        title: "Shapes of Atomic Orbitals",
        body: "s (l=0): spherical, no angular nodes. p (l=1): dumbbell, three orientations (p_x, p_y, p_z). d (l=2): four cloverleaf + one d_zÂ² with donut. f (l=3): complex, seven orientations. Total nodes = n-1. Radial nodes = n-l-1. Angular nodes = l."
      },
      {
        title: "Electronic Configuration â€” Aufbau Principle",
        body: "Fill by increasing energy: 1s,2s,2p,3s,3p,4s,3d,4p,5s,4d,5p,6s,4f,5d,6p,7s,5f,6d,7p. (n+l) rule: fill by increasing n+l; for equal, lower n first. Exceptions: Cr (3dâµ4sÂ¹), Cu (3dÂ¹â°4sÂ¹) â€” half/full filled subshell stability. Noble gas shorthand: K = [Ar]4sÂ¹."
      },
      {
        title: "Pauli Exclusion Principle and Hund's Rule",
        body: "Pauli: no two electrons with same set of all four QNs. Each orbital: max 2 eâ» with opposite spins. Hund: fill degenerate orbitals singly first, then pair. Maximizes total spin. Carbon (1sÂ²2sÂ²2pÂ²): both 2p eâ» go into different p orbitals with parallel spins (â†‘ â†‘)."
      },
      {
        title: "Stability of Half-Filled and Fully Filled Subshells",
        body: "dâµ, dÂ¹â°, fâ·, fÂ¹â´ have extra stability (symmetrical charge distribution, exchange energy). Explains Cr ([Ar]3dâµ4sÂ¹), Cu ([Ar]3dÂ¹â°4sÂ¹), Mo ([Kr]4dâµ5sÂ¹), Ag ([Kr]4dÂ¹â°5sÂ¹). W (5dâ´6sÂ²) doesn't follow â€” relativistic effects at high Z."
      },
      {
        title: "Moseley's Law and Atomic Number",
        body: "Moseley (1913): âˆšÎ½ âˆ (Z-b) â€” X-ray frequency âˆ atomic number. First proof Z is fundamental, not atomic mass. Corrected periodic table: Co (Z=27) before Ni (Z=28) despite mass ordering. Predicted elements Z=43 (Tc), 61 (Pm), 72 (Hf), 75 (Re). Provided basis for modern periodic law."
      },
      {
        title: "Photoelectric Effect â€” Particle Nature of Light",
        body: "Einstein (1905): light as photons (E = hÎ½). No emission below threshold Î½â‚€. KE of ejected eâ» = hÎ½ - Wâ‚€, where Wâ‚€ = hÎ½â‚€ (work function). KE depends on Î½, not intensity (contradicts wave theory). Instantaneous emission. One photon â†’ one electron. Proved particle nature of light."
      },
      {
        title: "Dual Behavior of Electromagnetic Radiation",
        body: "Wave: interference (Young's double-slit), diffraction, polarization. Particle: photoelectric effect, Compton effect (X-ray wavelength shift Î”Î» = h(1-cosÎ¸)/mâ‚‘c), blackbody radiation. Complementary descriptions. E = hÎ½, p = h/Î», c = Î»Î½."
      },
      {
        title: "Energy Levels in Multi-Electron Atoms",
        body: "In H, energy depends only on n. Multi-electron: repulsion splits â€” ns < np < nd < nf. Order: 1s<2s<2p<3s<3p<4s<3d<4p<5s<4d<5p<6s<4f<5d<6p<7s<5f<6d. 4s fills before 3d, but once occupied, 3d drops below 4s. Ions lose 4s first: Fe ([Ar]3dâ¶4sÂ²) â†’ FeÂ²âº ([Ar]3dâ¶)."
      },
      {
        title: "Nodal Surfaces in Orbitals",
        body: "Nodes = zero probability regions. Radial nodes (spherical, distance from nucleus). Angular nodes (planar/conical through nucleus). Total = n-1. Radial = n-l-1. Angular = l. Examples: 1s (0), 2s (1 radial), 2p (1 angular), 3s (2 radial), 3p (1 radial+1 angular), 3d (2 angular). More nodes = higher energy."
      },
      {
        title: "Limitations of Bohr's Model",
        body: "Failed for multi-electron atoms. Couldn't explain fine structure, Zeeman effect (magnetic splitting), Stark effect (electric splitting). Violated uncertainty principle (precise position + momentum). Couldn't explain intensities, electron wave nature, or why only certain orbits allowed. Quantum mechanical model resolved all."
      }
    ],
    keyPoints: [
      "Thomson discovered electron (1897); Rutherford discovered nucleus (1911)",
      "Bohr: mvr = nh/2Ï€, Eâ‚™ = -13.6/nÂ² eV, explained hydrogen spectrum",
      "Rydberg: 1/Î» = R(1/nâ‚Â² - 1/nâ‚‚Â²), R = 1.097Ã—10â· mâ»Â¹",
      "de Broglie: Î» = h/mv; Davisson-Germer confirmed electron diffraction",
      "Heisenberg: Î”xÂ·Î”p â‰¥ h/4Ï€; Î”EÂ·Î”t â‰¥ h/4Ï€",
      "SchrÃ¶dinger: Ä¤Î¨ = EÎ¨; |Î¨|Â² = probability density",
      "QNs: n (shell), l (shape), m (orientation), s (spin)",
      "s=spherical, p=dumbbell, d=cloverleaf; nodes: total=n-1",
      "Aufbau: 1sâ†’2sâ†’2pâ†’3sâ†’3pâ†’4sâ†’3dâ†’4p...",
      "Pauli: max 2 eâ»/orbital, opposite spins; Hund: fill singly first",
      "Cr and Cu exceptions: half-filled/filled subshell stability",
      "Moseley: âˆšÎ½ âˆ Z; atomic number is fundamental",
      "Photoelectric effect: hÎ½ = Wâ‚€ + KE; proves particle nature of light",
      "Bohr failed for multi-electron atoms; quantum model succeeds"
    ],
    importantQuestions: [
      "Describe Rutherford's gold foil experiment. Observations and conclusions?",
      "State Bohr's postulates. Derive radius and energy of nth orbit in H.",
      "Calculate wavelength of HÎ± in Balmer series (R=1.097Ã—10â· mâ»Â¹).",
      "Assign four quantum numbers for last electron in Cl (Z=17) and 3d electrons in Fe (Z=26).",
      "Explain Heisenberg's uncertainty principle. Show electron can't exist inside nucleus.",
      "Write configurations: Cr, Cu, FeÂ²âº, SÂ²â». Explain exceptions.",
      "State Hund's rule. Apply to N (Z=7). How many unpaired electrons?",
      "What is photoelectric effect? Einstein's equation. How does it prove particle nature?",
      "Sketch 1s, 2s, 2p, 3d_xy, 3d_zÂ² orbitals with nodal surfaces.",
      "Calculate de Broglie wavelength of electron accelerated through 100 V."
    ]
  },
  "chemical-bonding": {
    overview: "Why do atoms bond? Why is diamond hard but graphite soft â€” both pure carbon? Why does water boil at 100Â°C but Hâ‚‚S at -60Â°C? Chemical bonding holds the answers. Atoms bond to achieve full outer shells (octet rule). They can transfer electrons (ionic), share (covalent), or pool (metallic).\n\nIonic bonds form between metals and non-metals (electron transfer). Covalent bonds form between non-metals (electron sharing). VSEPR theory predicts molecular shapes. Hybridization explains how carbon forms spÂ³, spÂ², or sp bonds. Molecular Orbital Theory explains things Lewis can't â€” like Oâ‚‚'s paramagnetism.\n\nIntermolecular forces (hydrogen bonding, dipole-dipole, London dispersion) determine boiling points, solubility, and even the structure of DNA and proteins.",
    concepts: [
      {
        title: "Octet Rule and Its Limitations",
        body: "Atoms tend to achieve 8 valence electrons (2 for H, He). Exceptions: incomplete octet (BeClâ‚‚, BFâ‚ƒ), expanded octet (PClâ‚…, SFâ‚†, IFâ‚‡ â€” period 3+ have d orbitals), odd-electron (NO, NOâ‚‚). Octet rule is a useful guideline, not universal."
      },
      {
        title: "Ionic Bond â€” Electron Transfer and Lattice Energy",
        body: "Metal transfers eâ» to non-metal, held by electrostatic attraction in crystal lattice. Lattice energy (U âˆ qâ‚qâ‚‚/r) determines strength: MgO > NaCl. Born-Haber cycle calculates U from known thermodynamic data. Properties: high MP, conducts when molten/dissolved, brittle (like charges repel when layers shift), water-soluble."
      },
      {
        title: "Covalent Bond â€” Electron Sharing",
        body: "Single (Ïƒ), double (Ïƒ+Ï€), triple (Ïƒ+2Ï€). Bond length decreases, strength increases with order: C-C (154 pm, 348 kJ/mol), C=C (134, 614), Câ‰¡C (120, 839). Polarity from Î”EN: nonpolar (Î”ENâ‰ˆ0), polar covalent (0<Î”EN<1.7). Dipole moment Î¼ = qÃ—d (Debye). Covalent compounds: low MP, don't conduct."
      },
      {
        title: "Lewis Structures â€” Drawing Molecules",
        body: "Count valence eâ», place least EN atom center, connect with single bonds, distribute remaining eâ» as lone pairs, form multiple bonds if octet incomplete. Formal charge = valence - (nonbonding + Â½ bonding). Minimize formal charges; negative charge on more EN atoms. Limitations: no 3D, fails for delocalized systems."
      },
      {
        title: "VSEPR Theory â€” Predicting Molecular Shapes",
        body: "Electron pairs repel â†’ maximize separation. Steric number = bonding + lone pairs. SN2: linear (180Â°, BeClâ‚‚). SN3: trigonal planar (120Â°, BFâ‚ƒ). SN4: tetrahedral (109.5Â°, CHâ‚„); with 1 lone pair â†’ trigonal pyramidal (NHâ‚ƒ, 107Â°); 2 lone pairs â†’ bent (Hâ‚‚O, 104.5Â°). SN5: trigonal bipyramidal (PClâ‚…). SN6: octahedral (SFâ‚†). Lone pairs repel more than bonding pairs."
      },
      {
        title: "Hybridization â€” Mixing Orbitals for Better Bonding",
        body: "spÂ³: 1s+3p â†’ 4 tetrahedral (109.5Â°), 25% s character â€” alkanes. spÂ²: 1s+2p â†’ 3 trigonal planar (120Â°), 33.3% s, one p for Ï€ â€” alkenes. sp: 1s+1p â†’ 2 linear (180Â°), 50% s, two p for Ï€ â€” alkynes. More s character = shorter, stronger bonds. spÂ³d (PClâ‚…), spÂ³dÂ² (SFâ‚†)."
      },
      {
        title: "Valence Bond Theory â€” Orbital Overlap",
        body: "Bond forms when half-filled orbitals overlap with opposite spins. Greater overlap = stronger bond. Ïƒ bonds: end-to-end overlap (s-s, s-p, p-p along axis). Ï€ bonds: lateral p-orbital overlap above/below axis. Ïƒ stronger than Ï€ (more effective overlap). Double bond = Ïƒ+Ï€, not twice as strong as single."
      },
      {
        title: "Molecular Orbital Theory â€” Delocalized Electrons",
        body: "Atomic orbitals combine â†’ bonding MO (lower energy) + antibonding MO (higher energy, *). Fill: Aufbau, Pauli, Hund. Bond order = (B - AB)/2. >0 = stable. Oâ‚‚: bond order 2, 2 unpaired eâ» in Ï€* â†’ paramagnetic (Lewis can't explain this). Heâ‚‚: BO=0, doesn't exist. Oâ‚‚âº > Oâ‚‚ > Oâ‚‚â» > Oâ‚‚Â²â» in bond strength."
      },
      {
        title: "Polarity of Bonds and Molecules",
        body: "Bond polarity from Î”EN. Dipole moment Î¼ = qÃ—d. Net Î¼ = vector sum. Nonpolar: dipoles cancel (COâ‚‚ linear, CClâ‚„ tetrahedral) or symmetric. Polar: Hâ‚‚O (1.85 D). 'Like dissolves like': polar solvents dissolve polar/ionic; nonpolar dissolve nonpolar (fats, oils). Soaps: amphiphilic (nonpolar tail + polar head) â†’ micelles."
      },
      {
        title: "Hydrogen Bonding â€” The Strong Intermolecular Force",
        body: "H bonded to N/O/F attracted to lone pair on another N/O/F. Strength 5-30 kJ/mol â€” stronger than dipole-dipole (2-5) but weaker than covalent (150-800). Explains Hâ‚‚O's high BP (100Â°C vs Hâ‚‚S -60Â°C), ice floating (open hexagonal lattice), DNA base pairing. Intramolecular H-bonding in o-nitrophenol reduces water solubility."
      },
      {
        title: "Dipole-Dipole and London Dispersion Forces",
        body: "Dipole-dipole: + end to - end of polar molecules. Dispersion (London): temporary dipoles from electron fluctuations. Exist in all molecules. Strength â†‘ with molecular size (more eâ» = more polarizable) and surface area (elongated > spherical). Explains trend: Fâ‚‚, Clâ‚‚ (gas), Brâ‚‚ (liquid), Iâ‚‚ (solid)."
      },
      {
        title: "Resonance â€” When One Structure Isn't Enough",
        body: "Actual structure = hybrid of multiple canonical structures. Resonance energy = extra stability. Rules: same connectivity, same # of eâ», more bonds = more stable, minimal charge separation, -ve charge on EN atoms. Benzene: two KekulÃ© forms, all C-C = 139 pm. COâ‚ƒÂ²â»: three equivalent forms. RCOOâ»: charge delocalized over both O. Shown with â†”."
      },
      {
        title: "Fajan's Rules â€” Ionic vs Covalent Character",
        body: "Smaller cation + larger anion = more covalent character. Higher charges = more covalent. LiCl > NaCl (smaller cation). LiI > LiF (larger anion). AlClâ‚ƒ > NaCl (higher charge). AgCl insoluble (covalent from dÂ¹â° configuration) vs NaCl soluble. AgF soluble (Fâ» too small) vs AgI insoluble (Iâ» highly polarizable)."
      },
      {
        title: "Coordinate (Dative) Covalent Bond",
        body: "Both eâ» from same atom (donor) to acceptor with empty orbital. Once formed = indistinguishable from regular covalent. Examples: NHâ‚„âº (NHâ‚ƒâ†’Hâº), Hâ‚ƒOâº (Hâ‚‚Oâ†’Hâº), Fâ‚ƒB:NHâ‚ƒ, COâ†’metal (hemoglobin binding), metal complexes (NHâ‚ƒ, Hâ‚‚O, CNâ» â†’ metal ion). Shown with â†’ from donor to acceptor."
      },
      {
        title: "Metallic Bond â€” The Electron Sea Model",
        body: "Positive metal ions in regular lattice surrounded by delocalized valence electrons ('sea'). Explains: electrical conductivity (mobile eâ»), thermal conductivity, malleability (layers slide, eâ» sea adjusts), luster (eâ» reflect light). Strength âˆ # delocalized eâ» per atom: transition metals > alkali metals."
      },
      {
        title: "Sigma and Pi Bonds",
        body: "Ïƒ: end-to-end overlap along axis, eâ» density between nuclei â€” strong. Every single bond = Ïƒ. Ï€: lateral p-orbital overlap above/below axis â€” weaker. Double = Ïƒ+Ï€. Triple = Ïƒ+2Ï€ (Ï€ bonds perpendicular). Ï€ bonds restrict rotation â†’ cis-trans isomerism. Conjugated Ï€ systems â†’ delocalization."
      },
      {
        title: "Bond Parameters â€” Length, Energy, Angle, Order",
        body: "Bond length: spÂ³C-C (154 pm) > spÂ²C=C (134) > spCâ‰¡C (120). Order: single (1) < double (2) < triple (3). Energy: C-C (348), C=C (614), Câ‰¡C (839 kJ/mol). Ï€ bond (~265) weaker than Ïƒ (~348). Angle: VSEPR/ hybridization. Shorter = stronger. Higher order = shorter and stronger."
      },
      {
        title: "Comparison of Bonding Types",
        body: "Î”EN spectrum: >1.7 ionic (NaCl), 0.4-1.7 polar covalent (Hâ‚‚O), <0.4 nonpolar (Hâ‚‚). Ionic: high MP, conducts molten, brittle, water-soluble. Covalent molecular: low MP, doesn't conduct, variable solubility. Covalent network (diamond): extremely high MP, hardest. Metallic: conducts, malleable, lustrous."
      }
    ],
    keyPoints: [
      "Octet: 8 valence eâ» (2 for H). Exceptions: incomplete, expanded, odd-electron",
      "Ionic: eâ» transfer, lattice energy âˆ qâ‚qâ‚‚/r, Born-Haber cycle",
      "Covalent: sharing; single (Ïƒ) < double (Ïƒ+Ï€) < triple (Ïƒ+2Ï€)",
      "Lewis: minimize formal charges; negative on more EN atoms",
      "VSEPR: eâ» pairs repel; lone pairs repel more than bonding pairs",
      "Shapes: linear 2, trigonal planar 3, tetrahedral 4, trigonal bipyramidal 5, octahedral 6",
      "Hybridization: spÂ³ (109.5Â°, 25% s), spÂ² (120Â°, 33.3% s), sp (180Â°, 50% s)",
      "VBT: Ïƒ (end-to-end, strong) and Ï€ (lateral, weaker)",
      "MOT: BO = (B-AB)/2; Oâ‚‚ paramagnetic (2 unpaired eâ» in Ï€*)",
      "H-bonding: H-N/O/F; explains Hâ‚‚O high BP, ice density, DNA",
      "London dispersion: temporary dipoles; â†‘ with size and surface area",
      "Resonance: hybrid of structures; extra stability = resonance energy",
      "Fajan's: small/high charge cation + large anion = more covalent",
      "Coordinate bond: donorâ†’acceptor (NHâ‚„âº, Hâ‚ƒOâº, metal complexes)",
      "Metallic: electron sea; explains conductivity, malleability, luster",
      "Î”EN > 1.7 ionic, 0.4-1.7 polar covalent, <0.4 nonpolar covalent"
    ],
    importantQuestions: [
      "Draw Lewis structures for Hâ‚‚O, NHâ‚ƒ, COâ‚‚, SOâ‚„Â²â». Calculate formal charges.",
      "Explain Hâ‚‚ formation using MOT. Calculate BO. Explain Oâ‚‚ paramagnetism.",
      "Predict shapes of CHâ‚„, Câ‚‚Hâ‚„, Câ‚‚Hâ‚‚ using hybridization.",
      "Why does ice float on water? Explain with H-bonding.",
      "Predict shapes of NHâ‚ƒ, Hâ‚‚O, SFâ‚†, PClâ‚… using VSEPR.",
      "Explain resonance: benzene, COâ‚ƒÂ²â», ozone.",
      "Apply Fajan's: why LiCl more covalent than NaCl? Why AgCl insoluble but NaCl soluble?",
      "Differentiate Ïƒ and Ï€ bonds. How does Ï€ bond cause cis-trans isomerism?",
      "Explain metallic bonding with electron sea model."
    ]
  },
  "redox-reactions": {
    overview: "Every time you charge a phone, start a fire, or watch iron rust â€” that's redox. OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons. Always happen together. The oxidizing agent gets reduced; the reducing agent gets oxidized.\n\nOxidation numbers track electrons. Changes reveal which atoms are oxidized (â†‘) and reduced (â†“). Balancing redox uses the half-reaction method: split into oxidation and reduction halves, balance atoms (Hâ‚‚O, Hâº/OHâ») and charge (eâ»), then combine.\n\nElectrochemical cells convert chemical energy to electricity (Daniel cell: Zn/Cu, EÂ° = 1.10 V). The Nernst equation relates potential to concentration. Electrolysis drives non-spontaneous reactions. Faraday's laws: m = (EÃ—IÃ—t)/96,485.",
    concepts: [
      {
        title: "Oxidation and Reduction â€” The Classic Dance",
        body: "Oxidation: loss of eâ» (OIL). Reduction: gain of eâ» (RIG). Always together. Older: oxidation = gain O/lose H; reduction = lose O/gain H. 2Mg + Oâ‚‚ â†’ 2MgO: Mg oxidized (0â†’+2), Oâ‚‚ reduced (0â†’-2). Mg = reducing agent (causes reduction by giving eâ»). Oâ‚‚ = oxidizing agent (causes oxidation by accepting eâ»)."
      },
      {
        title: "Oxidation Number â€” The Electron Scorecard",
        body: "Rules: free element = 0. Monatomic ion = charge. O = -2 (except peroxides -1, superoxides -Â½, OFâ‚‚ +2). H = +1 (except metal hydrides -1). F = -1 always. Sum = 0 for compound, = charge for ion. Hâ‚‚SOâ‚„: H=+1, O=-2 â†’ S=+6. KMnOâ‚„: K=+1, O=-2 â†’ Mn=+7. Increase = oxidation, decrease = reduction."
      },
      {
        title: "Oxidizing and Reducing Agents",
        body: "Oxidizing agent: accepts eâ», gets reduced (ON â†“). Reducing agent: donates eâ», gets oxidized (ON â†‘). Zn + CuSOâ‚„ â†’ ZnSOâ‚„ + Cu: Zn reducing agent (0â†’+2), CuSOâ‚„ oxidizing agent (+2â†’0). Common oxidants: Oâ‚‚, Clâ‚‚, HNOâ‚ƒ, KMnOâ‚„, Kâ‚‚Crâ‚‚Oâ‚‡, Hâ‚‚Oâ‚‚. Common reductants: metals (Na, Zn, Fe), Hâ‚‚, C, CO, Hâ‚‚S, KI. Strength: EÂ° value (positive = stronger oxidant)."
      },
      {
        title: "Balancing Redox â€” Half-Reaction Method (Acidic)",
        body: "Steps: (1) Write half-reactions. (2) Balance other atoms. (3) Add Hâ‚‚O for O. (4) Add Hâº for H. (5) Add eâ» for charge. (6) Multiply halves so eâ» cancel. (7) Add and simplify. Crâ‚‚Oâ‚‡Â²â» + FeÂ²âº â†’ CrÂ³âº + FeÂ³âº (acidic). Reduction: Crâ‚‚Oâ‚‡Â²â» + 14Hâº + 6eâ» â†’ 2CrÂ³âº + 7Hâ‚‚O. Oxidation: FeÂ²âº â†’ FeÂ³âº + eâ» (Ã—6). Combined: Crâ‚‚Oâ‚‡Â²â» + 14Hâº + 6FeÂ²âº â†’ 2CrÂ³âº + 7Hâ‚‚O + 6FeÂ³âº."
      },
      {
        title: "Balancing Redox â€” Basic Medium",
        body: "Balance in acidic, then add OHâ» to both sides to neutralize Hâº. For Cr(OH)â‚ƒ + IOâ‚ƒâ» â†’ CrOâ‚„Â²â» + Iâ» (basic): after acidic balance, add 10OHâ» â†’ combine Hâº+OHâ» as Hâ‚‚O, cancel. Result: 2Cr(OH)â‚ƒ + IOâ‚ƒâ» + 10OHâ» â†’ 2CrOâ‚„Â²â» + Iâ» + 6Hâ‚‚O."
      },
      {
        title: "Disproportionation Reactions",
        body: "Same element simultaneously oxidized and reduced. Need â‰¥3 oxidation states; intermediate state unstable. Examples: 2Hâ‚‚Oâ‚‚ â†’ 2Hâ‚‚O + Oâ‚‚ (O: -1â†’-2 and 0). 3Clâ‚‚ + 6OHâ» â†’ 5Clâ» + ClOâ‚ƒâ» + 3Hâ‚‚O (Cl: 0â†’-1 and +5). 2Cuâº â†’ Cu + CuÂ²âº (Cuâº: +1â†’0 and +2)."
      },
      {
        title: "Electrochemical Cells â€” Batteries and Beyond",
        body: "Galvanic cell: chemical â†’ electrical energy. Anode (oxidation, -), cathode (reduction, +). Daniel cell: Zn|ZnÂ²âº||CuÂ²âº|Cu. Zn â†’ ZnÂ²âº + 2eâ» (anode, -0.76 V). CuÂ²âº + 2eâ» â†’ Cu (cathode, +0.34 V). EÂ°_cell = EÂ°_cathode - EÂ°_anode = 0.34-(-0.76)=+1.10 V. Salt bridge maintains charge balance. Electrons flow anodeâ†’cathode."
      },
      {
        title: "Standard Electrode Potential and Nernst Equation",
        body: "EÂ° measured vs SHE (0 V) at 1 M, 1 atm, 298 K. More positive EÂ° = stronger oxidant. Nernst: E = EÂ° - (RT/nF)lnQ. At 298 K: E = EÂ° - (0.0591/n)logâ‚â‚€Q. Q = [products]/[reactants] (exclude solids/liquids). Battery voltage drops as Q increases (discharge). At equilibrium: E=0, Q=K."
      },
      {
        title: "Electrochemical Series â€” The Potentials Table",
        body: "List of EÂ° values. Fâ‚‚ (+2.87 V) = strongest oxidant. Li (-3.04 V) = strongest reductant. Any species oxidizes what's above it. Metals with EÂ°<0 displace Hâ‚‚ from acids (Mg, Zn, Fe). Cu, Ag, Au (EÂ°>0) are 'noble' â€” don't react with non-oxidizing acids. EÂ°_cell = EÂ°_cathode - EÂ°_anode; positive = spontaneous."
      },
      {
        title: "Types of Electrodes",
        body: "Metal-metal ion: Zn|ZnÂ²âº, Cu|CuÂ²âº. Gas: Pt|Hâ‚‚|Hâº (SHE, EÂ°=0). Metal-insoluble salt: Ag|AgCl|Clâ», Hg|Hgâ‚‚Clâ‚‚|Clâ» (calomel). Redox: Pt|FeÂ³âº,FeÂ²âº. Reference electrodes (SHE, calomel, Ag/AgCl) provide stable potentials for measurement."
      },
      {
        title: "Electrolysis â€” Driving Non-Spontaneous Reactions",
        body: "External power drives non-spontaneous redox. Anode (+): oxidation. Cathode (-): reduction. Water: 2Hâ‚‚O â†’ 2Hâ‚‚ (cathode) + Oâ‚‚ (anode). Molten NaCl: 2NaCl â†’ 2Na (cathode) + Clâ‚‚ (anode). Aqueous NaCl (chlor-alkali): Hâ‚‚ at cathode, Clâ‚‚ at anode, NaOH in solution. Faraday's laws govern product amounts."
      },
      {
        title: "Faraday's Laws of Electrolysis",
        body: "First: m âˆ Q = IÃ—t. Second: m âˆ E (equivalent mass). Combined: m = EÃ—IÃ—t/96,485. One faraday (96,485 C) deposits 1 gram equivalent. Example: 0.5 A for 1 hour deposits Cu: m = (31.75Ã—0.5Ã—3600)/96485 = 0.592 g (E(Cu)=63.5/2=31.75 for CuÂ²âº)."
      },
      {
        title: "Applications of Electrochemical Cells",
        body: "Primary (non-rechargeable): dry cell (Zn/MnOâ‚‚, 1.5 V), mercury battery (Zn/HgO). Secondary (rechargeable): lead-acid (Pb/PbOâ‚‚ in Hâ‚‚SOâ‚„, 2 V/cell, car battery), Li-ion (LiCoOâ‚‚/graphite, high energy density). Fuel cells: continuous fuel (Hâ‚‚+Â½Oâ‚‚â†’Hâ‚‚O, produces electricity, only byproduct water). Corrosion prevention: galvanizing (Zn coating), cathodic protection (sacrificial Mg/Zn)."
      },
      {
        title: "Corrosion â€” Redox Gone Wrong",
        body: "Electrochemical degradation of metals. Fe anode: Fe â†’ FeÂ²âº + 2eâ». Oâ‚‚ cathode: Oâ‚‚ + 2Hâ‚‚O + 4eâ» â†’ 4OHâ». FeÂ²âº + 2OHâ» â†’ Fe(OH)â‚‚ â†’ Feâ‚‚Oâ‚ƒÂ·xHâ‚‚O (rust). Needs Oâ‚‚, water, electrolyte. Accelerated by: low pH, salts, contact with less active metals. Prevention: paint, galvanizing, cathodic protection, alloying (stainless steel â€” Cr forms protective Crâ‚‚Oâ‚ƒ)."
      },
      {
        title: "Batteries â€” Portable Redox Power",
        body: "Primary (non-rechargeable): dry cell (Zn anode, MnOâ‚‚/C cathode, NHâ‚„Cl paste, 1.5 V). Secondary: lead-acid (Pb + PbOâ‚‚ in Hâ‚‚SOâ‚„; discharge â†’ both become PbSOâ‚„; recharge reverses; 2 V/cell, 6 cells=12 V). Ni-Cd (NiOOH/Cd, 1.2 V, memory effect). Li-ion (LiCoOâ‚‚/graphite, Liâº shuttles, high energy density, no memory effect)."
      },
      {
        title: "Redox in Biological Systems",
        body: "Respiration: Câ‚†Hâ‚â‚‚Oâ‚† + 6Oâ‚‚ â†’ 6COâ‚‚ + 6Hâ‚‚O (glucose oxidized, Oâ‚‚ reduced). Electron transport chain: series of redox reactions producing ATP. Photosynthesis: reverse of respiration, powered by light. NADâº/NADH and FAD/FADHâ‚‚: biological electron carriers. Catalase: 2Hâ‚‚Oâ‚‚ â†’ 2Hâ‚‚O + Oâ‚‚ (breaks down reactive oxygen species). Antioxidants (vitamin C, E): easily oxidized, protect cells."
      },
      {
        title: "Redox Titrations",
        body: "KMnOâ‚„: purple, self-indicating (â†’ colorless MnÂ²âº in acid). Equivalent mass = M/5 (MnOâ‚„â» + 8Hâº + 5eâ» â†’ MnÂ²âº + 4Hâ‚‚O). Kâ‚‚Crâ‚‚Oâ‚‡: orange, diphenylamine indicator. Primary standard (weighable, stable). Iodometric: Iâ‚‚ + starch â†’ blue-black; titrate with thiosulfate. 5FeÂ²âº + MnOâ‚„â» + 8Hâº â†’ 5FeÂ³âº + MnÂ²âº + 4Hâ‚‚O."
      }
    ],
    keyPoints: [
      "OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons",
      "ON rules: free=0, O=-2, H=+1, sum=0 for compounds",
      "Oxidizing agent: gets reduced (ONâ†“); Reducing agent: gets oxidized (ONâ†‘)",
      "Half-reaction method: split, balance atoms (Hâ‚‚O, Hâº/OHâ»), add eâ», combine",
      "Acidic: use Hâº/Hâ‚‚O; Basic: balance acidic then neutralize Hâº with OHâ»",
      "Disproportionation: same element oxidized and reduced simultaneously",
      "Daniel cell: Zn (anode, -0.76 V) / Cu (cathode, +0.34 V), EÂ°cell=1.10 V",
      "Nernst: E = EÂ° - (0.0591/n)logQ at 298 K",
      "Electrochemical series: positive EÂ° = strong oxidant (Fâ‚‚), negative = strong reductant (Li)",
      "Galvanic: spontaneous â†’ electricity. Electrolytic: electricity â†’ non-spontaneous",
      "Faraday: m = EÃ—IÃ—t/96,485; one F = 96,485 C deposits 1 g equivalent",
      "Primary cells: non-rechargeable (dry cell). Secondary: rechargeable (Li-ion, lead-acid)",
      "Fuel cell: Hâ‚‚+Â½Oâ‚‚â†’Hâ‚‚O produces electricity directly, only byproduct water",
      "Rusting: Fe oxidized by Oâ‚‚ + Hâ‚‚O; prevention: paint, galvanizing, cathodic protection",
      "KMnOâ‚„ titrations: self-indicating; equivalent mass = M/5 in acid",
      "Biological redox: respiration, photosynthesis, electron transport chain"
    ],
    importantQuestions: [
      "Calculate ON: Cr in Kâ‚‚Crâ‚‚Oâ‚‡, Mn in KMnOâ‚„, S in Hâ‚‚SOâ‚„, Cl in Ca(OCl)â‚‚.",
      "Balance in acidic: Crâ‚‚Oâ‚‡Â²â» + FeÂ²âº â†’ CrÂ³âº + FeÂ³âº. Also in basic medium.",
      "Identify OA and RA: Zn+CuSOâ‚„â†’ZnSOâ‚„+Cu; 2KMnOâ‚„+10FeSOâ‚„+8Hâ‚‚SOâ‚„â†’...",
      "Explain Daniel cell construction, working, calculate EÂ°cell.",
      "0.5 A passed through CuSOâ‚„ for 1 hour. Mass of Cu deposited? (F=96,485 C/mol)",
      "Define standard electrode potential. Significance of electrochemical series?",
      "State and explain Faraday's laws with examples.",
      "Distinguish between electrolytic and galvanic cells.",
      "Explain mechanism of rusting and three prevention methods."
    ]
  },
  "modern-periodic-table": {
    overview: "The periodic table isn't just a chart â€” it's the ultimate chemistry cheat sheet. Once you understand its organization, you can predict almost anything about an element: size, reactivity, bond type, and compound formulas.\n\nMendeleev (1869) arranged elements by atomic mass, leaving gaps for undiscovered elements. Modern periodic law (Moseley): properties are periodic functions of atomic number. The table has 18 groups, 7 periods, and 4 blocks (s, p, d, f).\n\nPeriodic trends â€” atomic radius, ionization energy, electronegativity, electron affinity â€” are the real power. Across a period: radius decreases, IE increases, EN increases. Down a group: radius increases, IE decreases, EN decreases. These trends predict chemical behavior.",
    concepts: [
      {
        title: "Mendeleev vs Modern Periodic Law",
        body: "Mendeleev (1869): arranged 63 elements by atomic mass, left gaps for undiscovered, predicted properties (eka-Al=Ga, eka-Si=Ge). Anomalies: Te and I, Ar and K placed out of mass order. Modern (Moseley, 1913): properties periodic function of atomic number. Moseley's X-ray studies (âˆšÎ½ âˆ Z) proved Z is fundamental. Fixed all anomalies."
      },
      {
        title: "Structure of the Modern Periodic Table",
        body: "18 groups, 7 periods. s-block (1-2): last eâ» in s. p-block (13-18): last eâ» in p. d-block (3-12): last eâ» in d (transition metals). f-block: lanthanides and actinides below. Periods: 1 (2 elements), 2-3 (8), 4-5 (18), 6 (32 + lanthanides), 7 (incomplete + actinides). Group # = valence eâ» for s,p blocks."
      },
      {
        title: "Blocks of the Periodic Table",
        body: "s-block (Gr 1-2): nsÂ¹ or nsÂ², highly reactive metals (except H, He). p-block (Gr 13-18): nsÂ²npÂ¹â»â¶, includes metals, metalloids, non-metals. d-block (Gr 3-12): (n-1)dÂ¹â»Â¹â°nsâ°â»Â², transition metals â€” variable oxidation states, colored compounds, catalysts. f-block: (n-2)fÂ¹â»Â¹â´, lanthanides + actinides (all radioactive)."
      },
      {
        title: "Atomic Radius â€” How Big Is an Atom?",
        body: "Half the distance between nuclei of identical bonded atoms. Decreases across period (increasing Z_eff pulls eâ» tighter): Na (186) > Mg (160) > Al (143) > Si (117) > P (110) > S (104) > Cl (99 pm). Increases down group (new shells): Li (152) < Na (186) < K (231) < Rb (244) < Cs (262 pm)."
      },
      {
        title: "Ionization Energy â€” Removing an Electron",
        body: "Energy to remove most loosely bound eâ» from gaseous atom. Increases across period (higher nuclear charge): Na (496) < Mg (738) > Al (578) < Si (786) < P (1012) > S (1000) < Cl (1251) < Ar (1520 kJ/mol). Drops: Mg>Al (p eâ» easier), P>S (pairing repulsion). Decreases down group: Li (520) > Na (496) > K (419) > Rb (403) > Cs (376)."
      },
      {
        title: "Electronegativity â€” The Electron Attraction",
        body: "Tendency to attract shared eâ» in covalent bond. Pauling scale. Increases across period, decreases down group. F (4.0) > O (3.5) > N (3.0) > Cl (3.2) > Br (3.0) > I (2.7). Î”EN > 1.7 = ionic, 0.4-1.7 = polar covalent, <0.4 = nonpolar covalent. Least EN: Cs, Fr (0.7). EN predicts bond type and reactivity."
      },
      {
        title: "Electron Affinity â€” Gaining an Electron",
        body: "Energy change when eâ» added to neutral gaseous atom. Most exothermic (negative) for halogens (Cl: -349 kJ/mol) â€” achieve noble gas config. More negative EA across period, less negative down group. Anomalies: Group 2 (positive EA â€” eâ» goes to higher p orbital), N (positive â€” half-filled pÂ³), O (less negative than expected â€” eâ»-eâ» repulsion in compact 2p)."
      },
      {
        title: "Periodic Trends in Metallic Character",
        body: "Metallic character â†“ across period (Na metal â†’ Mg, Al â†’ Si metalloid â†’ P, S, Cl non-metals), â†‘ down group (B metalloid â†’ Al metal; C non-metal â†’ Si, Ge metalloids â†’ Sn, Pb metals). Correlates with low IE, low EN, large radius. Diagonal relationship: Li-Mg, Be-Al, B-Si (similar charge/size)."
      },
      {
        title: "Trends in Chemical Reactivity",
        body: "Metals: reactivity â†‘ down group (Cs explodes in water, Li reacts slowly). Reactivity âˆ low IE. Non-metals: reactivity â†“ down group (Fâ‚‚ terrifying, Iâ‚‚ mild). Displacement: Fâ‚‚ displaces all; Clâ‚‚ displaces Brâ», Iâ»; Brâ‚‚ displaces Iâ». Across Period 3: Na (very reactive) â†’ Mg, Al â†’ Si â†’ P, S, Cl (reactive non-metals) â†’ Ar (inert)."
      },
      {
        title: "Effective Nuclear Charge and Shielding",
        body: "Z_eff = Z - Ïƒ (nuclear charge minus shielding constant). Across period: Z_eff increases significantly (same shielding, more protons) â†’ smaller radius, higher IE. Down group: Z_eff increases slightly but new shells dominate â†’ larger radius. s orbital penetrates more than p, which penetrates more than d â†’ s electrons experience higher Z_eff."
      },
      {
        title: "Anomalous Trends â€” Why Exceptions Exist",
        body: "Group 2 IE > Group 13 (Mg > Al â€” filled sÂ² stable vs pÂ¹ easier). Group 15 IE > 16 (P > S â€” half-filled pÂ³ stable). O's EA less negative than S (2p electron repulsion in compact O). Lanthanide contraction: poor f-orbital shielding causes gradual radius decrease across lanthanides â†’ post-lanthanides (Hf, Ta, W) similar to Period 5 counterparts (Zr, Nb, Mo)."
      },
      {
        title: "Periodicity in Valence and Oxidation States",
        body: "Max positive OS = group number for representative elements. Gr 1: +1. Gr 2: +2. Gr 13: +3. Gr 14: +4 (and +2, increasing down â€” inert pair effect). Gr 15: +5, +3, -3. Gr 16: +6, +4, -2. Gr 17: +7, +5, +3, +1, -1. Inert pair effect: heavier elements (Tlâº, PbÂ²âº, BiÂ³âº) prefer lower OS â€” nsÂ² eâ» reluctant to participate."
      },
      {
        title: "Periodicity in Physical Properties",
        body: "MP across Period 3: Na (98Â°C) < Mg (650) < Al (660) < Si (1414) > P (44) < S (115) > Cl (-102) > Ar (-189). Reflects bonding: metallic â†’ network covalent (Si, high) â†’ molecular covalent (P, S, Cl, Ar, low). Density: highest near center (Os, Ir). Conductivity: metals (Ag, Cu, Au best)."
      },
      {
        title: "Prediction of Properties Using Periodic Trends",
        body: "Position â†’ size, IE, EN, metallic character, OS, formula of oxide, nature of oxide. Oxides: basic (left, Gr 1-2) â†’ amphoteric (center, Alâ‚‚Oâ‚ƒ) â†’ acidic (right, SOâ‚ƒ, Clâ‚‚Oâ‚‡). Hydrides: Gr 1 (MH), Gr 14 (MHâ‚„), Gr 15 (MHâ‚ƒ), Gr 16 (MHâ‚‚), Gr 17 (MH). Periodic trends predict properties of unknown elements."
      },
      {
        title: "d-Block Elements â€” Transition Metals",
        body: "Last eâ» in d orbital. Properties: variable OS (FeÂ²âº/FeÂ³âº, MnÂ²âºâ†’Mnâ·âº), colored compounds (CuÂ²âº blue, CrÂ³âº green, MnOâ‚„â» purple â€” d-d transitions), paramagnetism (unpaired d eâ»), catalytic (Fe in Haber, Vâ‚‚Oâ‚… in Contact, Pt in converters), complex formation ([Cu(NHâ‚ƒ)â‚„]Â²âº). Atomic radii decrease slowly (d contraction). High MPs (W: 3422Â°C)."
      },
      {
        title: "f-Block Elements and Lanthanide Contraction",
        body: "Last eâ» in f orbital. Lanthanides (Ce-Lu): similar properties (deep 4f orbitals), +3 OS predominantly. Lanthanide contraction: gradual radius decrease due to poor f shielding. Consequence: post-lanthanides (Hf, Ta, W, etc.) nearly same size as Period 5 counterparts (Zr, Nb, Mo) â†’ they're very difficult to separate. Actinides (Th-Lr): all radioactive, only Th, Pa, U natural."
      }
    ],
    keyPoints: [
      "Modern periodic law: properties periodic function of atomic number",
      "18 groups, 7 periods; s, p, d, f blocks based on last electron orbital",
      "Moseley: âˆšÎ½ âˆ Z â€” Z is fundamental, fixed Mendeleev's anomalies",
      "Atomic radius: decreases across period, increases down group",
      "IE: increases across period, decreases down group",
      "EN: increases across period, decreases down group (F=4.0 highest)",
      "EA: most negative for halogens; anomalies at Gr 2, 15, and O",
      "Metallic character: decreases leftâ†’right, increases topâ†’bottom",
      "Z_eff explains all trends: higher Z_eff = smaller radius, higher IE",
      "Inert pair effect: heavier p-block prefer lower OS",
      "Diagonal relationship: Li-Mg, Be-Al, B-Si",
      "d-block: variable OS, colored, paramagnetic, catalytic",
      "Lanthanide contraction: poor f shielding â†’ post-lanthanides same size as Period 5",
      "Oxide nature: basic (left) â†’ amphoteric â†’ acidic (right)",
      "Noble gases: full shell, very high IE, nearly inert"
    ],
    importantQuestions: [
      "State modern periodic law. How is it different from Mendeleev's?",
      "Explain trends in atomic radius and IE across Period 3 and down Group 1.",
      "Why is IE of N higher than O? Why is Mg's IE higher than Al's?",
      "Arrange F, Cl, Br, I, O, N in decreasing EN.",
      "Explain inert pair effect for Tl, Pb, Bi.",
      "What are s, p, d, f blocks? Give two examples each.",
      "What is lanthanide contraction? Consequences on post-lanthanide elements?",
      "Predict formula and nature of oxides for Groups 1, 2, 13, 14, 16.",
      "Explain: (i) EA of O less negative than S (ii) IE of Al lower than Mg."
    ]
  },
  "elements-groups": {
    overview: "This chapter dives into the s-block (Groups 1-2) and p-block (Groups 13-18) elements â€” the main group elements. From the explosive reactivity of alkali metals to the inertness of noble gases, from carbon's versatility to lead's toxicity, this covers the representative elements.\n\nGroup 1 (alkali metals): nsÂ¹, highly reactive, stored under kerosene. Reactivity increases down the group. Group 2 (alkaline earth metals): nsÂ², harder than Group 1. Groups 13-18 show a transition from metallic to non-metallic character moving right. Group 14 features carbon â€” the element of life. Group 17 halogens are highly reactive non-metals. Group 18 noble gases were thought inert until Xe compounds were discovered in 1962.",
    concepts: [
      {
        title: "Alkali Metals (Group 1) â€” General Properties",
        body: "nsÂ¹, silvery-white, soft (cut with knife), low MPs (Li 180, Na 98, K 63Â°C). Most electropositive metals, low IE â†“ down group. Form +1 ions. Reactivity with water â†‘ down: Li (slow), Na (vigorous), K (catches fire), Rb/Cs (explode). With Oâ‚‚: Li â†’ Liâ‚‚O (oxide), Na â†’ Naâ‚‚Oâ‚‚ (peroxide), K â†’ KOâ‚‚ (superoxide). Stored under kerosene. Flame: Li (crimson), Na (yellow), K (lilac)."
      },
      {
        title: "Anomalous Properties of Lithium",
        body: "Li differs due to small size, high IE, high EN, no d orbitals. Harder, higher MP. Reacts slowly with water. Forms Liâ‚‚O (not peroxide/superoxide). LiOH decomposes on heating (others stable). LiCl covalent (soluble in organic solvents). Diagonal relationship with Mg: both form nitrides, less soluble carbonates/phosphates, covalent organometallics."
      },
      {
        title: "Sodium and Its Important Compounds",
        body: "NaOH (caustic soda): chlor-alkali process (electrolysis of NaCl). Strong base, used in soap, paper. Naâ‚‚COâ‚ƒ (washing soda): Solvay process. Used in glass, soap, water softening. NaHCOâ‚ƒ (baking soda): decomposes on heating â†’ Naâ‚‚COâ‚ƒ + COâ‚‚ + Hâ‚‚O. Used in baking (COâ‚‚ makes dough rise) and antacids. NaCl: table salt, preservative, raw material."
      },
      {
        title: "Alkaline Earth Metals (Group 2)",
        body: "nsÂ², harder, higher MPs than Group 1. Form +2 ions. Reactivity â†‘ down (Be inert, Mg slow with hot water, Ca vigorous). Oxides MO: basic (BeO amphoteric). Hydroxides M(OH)â‚‚: less basic than Group 1, solubility â†‘ down. Carbonates/sulfates: solubility trends opposite. Flame: Ca (brick red), Sr (crimson), Ba (apple green). Be, Mg none (electrons too tightly bound)."
      },
      {
        title: "Calcium and Its Important Compounds",
        body: "CaO (quicklime): CaCOâ‚ƒâ†’CaO+COâ‚‚. Reacts with Hâ‚‚O â†’ Ca(OH)â‚‚ (slaked lime). Used in cement, glass, steel. Ca(OH)â‚‚: whitewash, mortar, bleaching powder. CaCOâ‚ƒ: limestone, marble, chalk. Decomposes on heating. CaSOâ‚„Â·2Hâ‚‚O (gypsum): heat 120Â°C â†’ CaSOâ‚„Â·Â½Hâ‚‚O (plaster of Paris). CaOClâ‚‚ (bleaching powder): Clâ‚‚ + Ca(OH)â‚‚. Mg: alloys (duralumin), flashbulbs, reducing agent for Ti/U."
      },
      {
        title: "Group 13 (Boron Family)",
        body: "nsÂ²npÂ¹. B: metalloid, covalent network, high MP (2076Â°C). Al: most abundant metal in crust (8.3%), protective Alâ‚‚Oâ‚ƒ layer, corrosion-resistant. Ga: melts in hand (30Â°C), widest liquid range. In: ITO (touch screens). Tl: toxic. Inert pair effect: Tlâº > TlÂ³âº. B anomalous: electron-deficient (BHâ‚ƒ dimerizes to Bâ‚‚Hâ‚†), Lewis acid."
      },
      {
        title: "Aluminum and Its Compounds",
        body: "Hall-HÃ©roult process: electrolysis of Alâ‚‚Oâ‚ƒ in molten cryolite (Naâ‚ƒAlFâ‚†). Amphoteric (reacts with both acids and bases). AlClâ‚ƒ: Lewis acid, dimer Alâ‚‚Clâ‚† in vapor phase, Friedel-Crafts catalyst. Alums: MâºMÂ³âº(SOâ‚„)â‚‚Â·12Hâ‚‚O â€” potash alum KAl(SOâ‚„)â‚‚Â·12Hâ‚‚O used in water purification (coagulation), dyeing, styptic. Anodizing: electrolytic Alâ‚‚Oâ‚ƒ coating. Uses: aircraft, cans, power lines."
      },
      {
        title: "Group 14 (Carbon Family)",
        body: "nsÂ²npÂ². C: non-metal, Si/Ge: metalloids, Sn/Pb: metals. +4 to +2 trend (inert pair effect). C favors +4; Pb favors +2 (Pbâ´âº strongly oxidizing). C unique: catenation (long chains), strong Ï€ bonds (C=C, Câ‰¡C), hybrids spÂ³/spÂ²/sp. Si: strong Si-O bonds (silicates, silicones). Allotropy: C (diamond, graphite, fullerenes, graphene), Si, Sn (white/gray)."
      },
      {
        title: "Carbon â€” The Element of Life",
        body: "Catenation: C-C bond (348 kJ/mol) stable but not too stable â€” perfect for chains. Multiple bonding: C=C (614), Câ‰¡C (839). Bonds with H, O, N, S, halogens, metals. Isomerism. Allotropes: diamond (spÂ³, hardest, insulator), graphite (spÂ², soft, conductor, lubricant), fullerenes (Câ‚†â‚€), carbon nanotubes, graphene (single-layer graphite). Identical composition, vastly different properties."
      },
      {
        title: "Group 15 (Nitrogen Family)",
        body: "nsÂ²npÂ³. Nâ‚‚: gas (Nâ‰¡N, 941 kJ/mol â€” very stable). NHâ‚ƒ: Haber process (Nâ‚‚+3Hâ‚‚â‡Œ2NHâ‚ƒ, Fe catalyst, 450Â°C, 200 atm). P: white Pâ‚„ (ignites in air, stored under water), red P (stable), black P (most stable). +3 stable down group (inert pair): BiÂ³âº > Biâµâº. Hâ‚ƒPOâ‚„: phosphoric acid, used in fertilizers (superphosphate)."
      },
      {
        title: "Group 16 (Oxygen Family)",
        body: "nsÂ²npâ´. Oâ‚‚: essential for respiration. Oâ‚ƒ (ozone): protects from UV (stratosphere), pollutant (ground level). S: yellow Sâ‚ˆ rings, allotropes rhombic (stable <95.6Â°C) and monoclinic. Hâ‚‚S: toxic, rotten egg. SOâ‚‚: from burning fossil fuels â†’ acid rain. Hâ‚‚SOâ‚„ (king of chemicals): Contact process (Sâ†’SOâ‚‚â†’SOâ‚ƒâ†’Hâ‚‚SOâ‚„, Vâ‚‚Oâ‚… catalyst). Most produced industrial chemical."
      },
      {
        title: "Group 17 (Halogens)",
        body: "nsÂ²npâµ, diatomic (Xâ‚‚). States: Fâ‚‚, Clâ‚‚ (gas), Brâ‚‚ (liquid), Iâ‚‚ (solid). Color intensity: Fâ‚‚ (pale yellow), Clâ‚‚ (greenish-yellow), Brâ‚‚ (red-brown), Iâ‚‚ (violet). Reactivity â†“ down: Fâ‚‚ most reactive (attacks glass, water, everything). Displacement: Fâ‚‚ displaces all; Clâ‚‚ displaces Brâ», Iâ»; Brâ‚‚ displaces Iâ». HX acidity â†‘ down: HF (weak), HI (very strong). Bond strength â†“ down."
      },
      {
        title: "Hydrogen Chloride and Chlorine Compounds",
        body: "HCl: colorless gas, pungent, highly water-soluble (hydrochloric acid). Manufactured: Hâ‚‚+Clâ‚‚â†’2HCl or byproduct. Uses: cleaning metals, pH control. Clâ‚‚: from chlor-alkali. Uses: water disinfection, bleaching, PVC, pesticides. Bleaching powder (CaOClâ‚‚): Clâ‚‚+Ca(OH)â‚‚. Hypochlorite (OClâ») is the active bleaching agent â€” oxidizes colored substances. CHClâ‚ƒ (chloroform): anesthetic (replaced). CClâ‚„: solvent (restricted â€” toxicity, ozone depletion)."
      },
      {
        title: "Group 18 (Noble Gases)",
        body: "nsÂ²npâ¶, colorless, odorless, monatomic, very low reactivity. Discovered from air (Rayleigh, Ramsay). He: natural gas, radioactive decay. Others: fractional distillation of liquid air. Uses: He (balloons, MRI cooling), Ne (neon signs, red-orange), Ar (welding, inert atmosphere), Kr (high-intensity lamps), Xe (flash lamps, anesthesia). Xe compounds: Bartlett (1962) â€” XePtFâ‚†. XeFâ‚‚, XeFâ‚„, XeFâ‚† from Xe+Fâ‚‚. XeOâ‚ƒ explosive. Ended 'inert gas' notion."
      },
      {
        title: "Diagonal Relationship and Anomalous Properties",
        body: "First element of each group often anomalous (small size, high EN, no d orbitals). Li-Mg: both form nitrides, carbonates decompose on heating, chlorides covalent. Be-Al: both amphoteric, covalent compounds, acid-resistant. B-Si: both metalloids, electron-deficient hydrides, acidic oxides. Similarities from comparable charge/size ratios."
      },
      {
        title: "Allotropy in Elements",
        body: "Carbon: diamond (spÂ³, hardest, insulator), graphite (spÂ², soft, conductor, lubricant), fullerenes (Câ‚†â‚€), graphene. Silicon: crystalline (diamond-like, semiconductor) and amorphous. Phosphorus: white Pâ‚„ (ignites in air, stored under water), red P (polymeric, stable), black P (most stable, layered). Sulfur: rhombic (Î±, Sâ‚ˆ, stable <95.6Â°C) and monoclinic (Î², stable >95.6Â°C). Tin: white Î² (metallic, room T), gray Î± (powdery, <13.2Â°C) â€” tin pest."
      },
      {
        title: "Industrially Important Compounds",
        body: "Hâ‚‚SOâ‚„: Contact process. Uses: fertilizers, refining, batteries. HNOâ‚ƒ: Ostwald process (NHâ‚ƒâ†’NOâ†’NOâ‚‚â†’HNOâ‚ƒ). Uses: fertilizers, explosives (TNT), dyes. Naâ‚‚COâ‚ƒ: Solvay process. NHâ‚ƒ: Haber process (Nâ‚‚+3Hâ‚‚â‡Œ2NHâ‚ƒ). Uses: fertilizers, HNOâ‚ƒ, explosives, refrigerants. CaOClâ‚‚: bleaching, disinfection. Naâ‚‚COâ‚ƒÂ·10Hâ‚‚O: washing soda."
      },
      {
        title: "Biological Importance of Main Group Elements",
        body: "Na, K: nerve impulses, fluid balance. Ca: bones, muscle contraction, blood clotting. Mg: chlorophyll, ATP stabilization. P: DNA/RNA backbone, ATP. O: respiration. N: proteins, nucleic acids. S: amino acids (Cys, Met), disulfide bonds. Cl: electrolyte, stomach acid. I: thyroid hormones (thyroxine). F: tooth enamel (fluorapatite). B: plant cell walls. Si: connective tissues, diatom shells."
      }
    ],
    keyPoints: [
      "Alkali metals (Gr 1): nsÂ¹, soft, +1, stored under kerosene, reactivity â†‘ down",
      "Flame test: Li (crimson), Na (yellow), K (lilac), Rb (red-violet), Cs (blue)",
      "Anomalous Li: diagonal relationship with Mg â€” similar charge/size",
      "Alkaline earth (Gr 2): nsÂ², +2, harder than Gr 1; Be anomalous â€” amphoteric, covalent",
      "Ca compounds: quicklime (CaO), slaked lime Ca(OH)â‚‚, gypsum CaSOâ‚„Â·2Hâ‚‚O, POPS",
      "Bleaching powder: CaOClâ‚‚ (Clâ‚‚+Ca(OH)â‚‚); bleaching and disinfection",
      "Gr 13: B (metalloid) â†’ Al, Ga, In, Tl (metals); inert pair: Tlâº > TlÂ³âº",
      "Al: Hall-HÃ©roult process, amphoteric, AlClâ‚ƒ Lewis acid, potash alum coagulant",
      "Gr 14: C catenation and multiple bonding â†’ millions of compounds",
      "Allotropes: diamond (spÂ³, hardest), graphite (spÂ², soft conductor), fullerenes",
      "Inert pair effect in Gr 14: PbÂ²âº more stable than Pbâ´âº",
      "Gr 15: Nâ‚‚ (stable), NHâ‚ƒ (Haber), Pâ‚„ (white), P (red), BiÂ³âº stable",
      "Gr 16: Oâ‚‚ essential, Oâ‚ƒ UV protection, Sâ‚ˆ rings, Hâ‚‚SOâ‚„ (Contact process)",
      "Gr 17: Fâ‚‚ most reactive; Clâ‚‚ (disinfectant); Iâ‚‚ (antiseptic); HF weak acid, HI strong",
      "Gr 18: He, Ne, Ar, Kr, Xe, Rn â€” Xe forms compounds with F and O",
      "Diagonal: Li-Mg, Be-Al, B-Si â€” similar charge/size ratios",
      "Biological roles: Na/K (nerve), Ca (bones), Mg (chlorophyll), P (DNA), I (thyroid)"
    ],
    importantQuestions: [
      "Why are alkali metals stored under kerosene? Write Na + Hâ‚‚O and Na + Oâ‚‚ reactions.",
      "Explain anomalous properties of Li and diagonal relationship with Mg.",
      "Describe preparation, properties, uses of: (i) bleaching powder (ii) plaster of Paris.",
      "Explain halogen reactivity trend down the group. Why is Fâ‚‚ most reactive?",
      "Why does carbon form so many compounds? Explain catenation and multiple bonding.",
      "Describe allotropes of carbon with structures and properties.",
      "Explain inert pair effect in Groups 13, 14, 15.",
      "Describe extraction of Al by Hall-HÃ©roult process. Why is cryolite added?",
      "Write reactions for Contact process (Hâ‚‚SOâ‚„ manufacture).",
      "Why were noble gases considered inert? How was this disproved?"
    ]
  },
  "organic-basics": {
    overview: "Why does carbon form millions of compounds while other elements barely manage a few hundred? The answer lies in catenation — carbon's unique ability to bond with itself in long chains and rings — and its perfect range of bond strengths that allow molecules to be both stable and reactive.\n\nOrganic chemistry studies carbon compounds. Carbon has four valence electrons and forms four covalent bonds via sp³, sp², or sp hybridization. This versatility produces straight chains, branches, rings, and multiple bonds. Add functional groups — OH, C=O, COOH, NH₂ — and you get alcohols, ketones, acids, and amines with distinct properties.\n\nIUPAC nomenclature gives every compound a unique, systematic name. Reaction mechanisms (SN1, SN2, E1, E2) explain exactly how bonds break and form — homolytic (radical) or heterolytic (ionic). This chapter builds the foundation: bonding, classification, naming, functional groups, and the electronic effects (inductive, resonance, hyperconjugation) that control reactivity.",
    concepts: [
      {
        title: "Why Carbon Is Special — Catenation and Hybridization",
        body: "Carbon sits right in Period 2, Group 14. Its four valence electrons (2s²2p²) can form four bonds via sp³, sp², or sp hybridization. The C-C bond (348 kJ/mol) is strong enough for stability but not so strong that reactions are impossible. Carbon also forms strong π bonds (C=C, 614 kJ/mol; C≡C, 839 kJ/mol) enabling multiple bonds. No other element matches carbon's balance of bond strength and versatility — silicon, the closest neighbor, forms Si-Si bonds (222 kJ/mol) that are too weak for long chains."
      },
      {
        title: "Tetravalence of Carbon — The Four-Armed Connector",
        body: "Carbon always forms four covalent bonds (tetravalent). sp³: four σ bonds, 109.5° tetrahedral (CH₄, ethane). sp²: three σ + one π, 120° trigonal planar (ethene). sp: two σ + two π, 180° linear (ethyne, CO₂). Carbon can bond with H, O, N, S, halogens, and metals. It forms single, double, and triple bonds. It creates straight chains, branched chains, rings, and three-dimensional networks. No other element in the periodic table matches this."
      },
      {
        title: "Classification of Organic Compounds",
        body: "Two broad categories: acyclic (open chain, aliphatic) and cyclic (closed ring). Cyclic compounds are further divided into homocyclic (only carbon in ring, e.g., cyclohexane, benzene) and heterocyclic (one or more heteroatoms N/O/S in ring, e.g., pyridine, furan). Aromatic compounds contain a benzene ring or similar conjugated planar ring system. Alicyclic compounds are saturated or unsaturated non-aromatic rings. Benzenoid aromatics contain benzene rings; non-benzenoid aromatics (like azulene, tropone) have aromatic character without a benzene ring."
      },
      {
        title: "Functional Groups — The Reactive Centers",
        body: "A functional group is an atom or group that gives a compound its characteristic properties. Alcohols (-OH): polar, H-bonding, higher BP than hydrocarbons. Aldehydes (-CHO): easily oxidized to acids; reducing sugars test (Tollens' silver mirror, Fehling's red Cu₂O). Ketones (C=O): less easily oxidized, used in fragrances and solvents. Carboxylic acids (-COOH): acidic (pKa ~4-5), form hydrogen-bonded dimers. Amines (-NH₂): basic, fishy smell, found in amino acids and drugs. Alkyl halides (-X): polar, undergo nucleophilic substitution. Ethers (-O-): low reactivity, excellent solvents. Esters (-COO-): fruity smell, in flavors and fragrances. Nitriles (-C≡N): polar, versatile intermediates."
      },
      {
        title: "Homologous Series — The Family Pattern",
        body: "A homologous series shares the same functional group and general formula. Each member differs by -CH₂- (14 amu). Physical properties change gradually: alkanes CₙH₂ₙ₊₂: CH₄ (gas), C₅H₁₂ (liquid), C₁₈H₃₈ (wax). Boiling points increase by ~30°C per CH₂ due to London dispersion forces. Chemical properties remain similar within a series — once you know one alcohol, you know them all. The trend allows prediction of properties for unknown members."
      },
      {
        title: "IUPAC Nomenclature — The Universal Language",
        body: "IUPAC names have three parts: prefix (substituents), root (longest carbon chain), suffix (functional group). Steps: (1) Find longest continuous carbon chain — parent name from number of carbons (meth-1, eth-2, prop-3, but-4, pent-5, hex-6, hept-7, oct-8, non-9, dec-10). (2) Number the chain to give lowest locants to substituents. (3) Name and arrange substituents alphabetically (ignoring prefixes like di-, tri-). (4) Add functional group suffix: -ol (alcohol), -al (aldehyde), -one (ketone), -oic acid (carboxylic acid). For multiple bonds: -ane (single), -ene (double), -yne (triple). Priority order for suffixes: carboxylic acid > ester > amide > aldehyde > ketone > alcohol > amine > ether > alkene > alkyne > alkane."
      },
      {
        title: "Isomerism — Same Formula, Different Molecules",
        body: "Structural isomers differ in connectivity. Chain isomers: butane (C₄H₁₀) n-butane vs isobutane. Position isomers: propanol 1-propanol vs 2-propanol. Functional group isomers: C₂H₆O ethanol vs dimethyl ether. Metamerism: different alkyl groups around same functional group (C₄H₁₀O diethyl ether vs methyl propyl ether). Tautomerism: rapid equilibrium between keto and enol forms (acetoacetic ester). Stereoisomers have same connectivity but different spatial arrangement — covered in the next concept."
      },
      {
        title: "Stereoisomerism — 3D Arrangements",
        body: "Geometric (cis-trans) isomerism: restricted rotation around double bond or ring. cis-1,2-dichloroethene (same side, dipole) vs trans (opposite sides, no dipole). Different physical properties. Optical isomerism: chiral molecules (non-superimposable mirror images). Chiral carbon: four different substituents. Enantiomers: pair of optical isomers, rotate plane-polarized light in opposite directions. Racemic mixture (d,l): 1:1 mixture, no net rotation. Lactic acid (CH₃CHOHCOOH) has one chiral carbon — two enantiomers. Biological systems are stereospecific: L-amino acids, D-sugars."
      },
      {
        title: "Inductive Effect — The Sigma Electron Shift",
        body: "Electronegativity differences cause permanent polarization along σ bonds. -I groups (withdraw electrons): F, Cl, Br, I, OH, NH₂, NO₂, CN, C=O, COOH. +I groups (donate electrons): alkyl groups (CH₃ > C₂H₅ > CH(CH₃)₂ > C(CH₃)₃). -I effect increases acidity (electron withdrawal stabilizes conjugate base): ClCH₂COOH (pKa 2.86) > CH₃COOH (4.76). +I effect decreases acidity: CH₃CH₂COOH (4.87) > CH₃COOH (4.76). Inductive effect decreases rapidly with distance — significant up to 2-3 carbons."
      },
      {
        title: "Resonance Effect — Electron Delocalization",
        body: "Delocalization of π electrons or lone pairs through conjugated systems. +R effect: groups that donate electrons by resonance (OH, NH₂, OR, halogens) — they have lone pairs that can conjugate with π system. -R effect: groups that withdraw electrons by resonance (NO₂, CN, C=O, COOH, SO₃H) — they have π bonds or empty orbitals. Resonance explains: stability of benzene (all C-C 139 pm), acidity of phenol (C₆H₅OH, pKa 10) vs cyclohexanol (pKa 16) — phenoxide ion stabilized by resonance, and the direction of electrophilic aromatic substitution (activating groups donate, deactivating withdraw). The effect is stronger than the inductive effect."
      },
      {
        title: "Hyperconjugation — No Bond Resonance",
        body: "Delocalization of σ electrons (C-H or C-C) into adjacent empty or partially filled p orbital or π* orbital. Alkyl groups attached to sp² carbon show hyperconjugation. Stability order of alkyl carbocations: 3° > 2° > 1° > CH₃⁺. Each α C-H bond contributes ~3-4 kcal/mol stabilization. More α H atoms = more hyperconjugative structures = more stable. Explains: stability of alkenes (more substituted = more stable — Saytzeff rule), orientation in E1 elimination, and Markovnikov addition in electrophilic addition to alkenes."
      },
      {
        title: "Reaction Mechanisms — How Bonds Break and Form",
        body: "Bond cleavage: homolytic (each atom gets one electron, forms free radicals) — common in substitution reactions (Cl₂ + hν → 2Cl•) and combustion. Heterolytic (one atom gets both electrons, forms ions) — common in polar organic reactions. Carbocations (R₃C⁺): sp² hybridized, planar, electron-deficient, stabilized by alkyl groups. Carbanions (R₃C⁻): sp³ hybridized, pyramidal, electron-rich. Free radicals: unpaired electron, neutral, highly reactive. Understanding the intermediate determines the reaction pathway."
      },
      {
        title: "Types of Organic Reactions",
        body: "Substitution: replacement of one atom/group by another. SN1 (unimolecular, carbocation intermediate, racemization, rate ∝ [RX]) vs SN2 (bimolecular, concerted, inversion, rate ∝ [RX][Nu⁻]). Addition: π bond breaks, two new σ bonds form. Electrophilic addition to alkenes (Markovnikov or anti-Markovnikov). Elimination: removal of atoms to form π bond. Zaitsev (Saytzeff) rule: more substituted alkene is major product. Rearrangement: carbon skeleton rearrangement (carbocation rearrangements via hydride or methyl shift). Oxidation-reduction: change in oxidation state of carbon."
      },
      {
        title: "Purification of Organic Compounds",
        body: "Crystallization: dissolve in hot solvent, cool slowly, pure crystals form. Impurities remain in solution. Sublimation: for compounds that go solid→vapor directly (camphor, naphthalene, benzoic acid, NH₄Cl). Distillation: simple (BP diff >25°C), fractional (close BP), steam distillation (volatile compounds immiscible with water — aniline, essential oils), vacuum distillation (high BP, decomposes at atmospheric). Chromatography: paper, TLC, column — separates based on differential adsorption. Determining purity: melting point (sharp range = pure), boiling point, TLC (single spot)."
      },
      {
        title: "Detection of Elements in Organic Compounds",
        body: "Lassaigne's test: fuse organic compound with Na metal. Na + C/N/S/X → NaCN, Na₂S, NaX. Extract with water (Lassaigne's extract). N test: add FeSO₄, heat, add FeCl₃, acidify → Prussian blue (Fe₄[Fe(CN)₆]₃). S test: add sodium nitroprusside → violet color. Halogen test: add AgNO₃ → precipitate (AgCl white, AgBr pale yellow, AgI yellow). P test: fuse with Na₂O₂, acidify, add ammonium molybdate → canary yellow. Detection by acidifying extract: S²⁻ → H₂S (lead acetate), CN⁻ → HCN (Prussian blue). Limitations: N test fails for certain heterocycles and azo compounds; halogen test requires removing N and S interference."
      },
      {
        title: "Quantitative Analysis — Percentage Composition",
        body: "C and H: Liebig's combustion method. Burn sample in O₂, absorb CO₂ in KOH solution and H₂O in CaCl₂ or Mg(ClO₄)₂. %C = (12/44)×(mass CO₂/mass sample)×100. %H = (2/18)×(mass H₂O/mass sample)×100. N: Dumas method (N₂ gas measured) or Kjeldahl method (NH₃ distilled, titrated). %N = (1.4×V×N)/W (Kjeldahl: V = volume of acid, N = normality, W = sample mass). Halogen: Carius method (combust with HNO₃+AgNO₃, weigh AgX). S: Carius method (BaSO₄ precipitate weighed). %S = (32/233)×(mass BaSO₄/mass sample)×100. Oxygen: calculated by difference from 100%."
      },
      {
        title: "Empirical and Molecular Formulas from Analytical Data",
        body: "From % composition: assume 100 g sample, convert masses to moles (mass/atomic mass), divide by smallest number of moles, round to nearest whole number (if .5 → multiply all by 2). Empirical formula = simplest ratio. Molecular formula = (empirical formula)n, where n = molecular mass (from Vapor density × 2 or mass spectrometry) / empirical formula mass. Example: 40% C, 6.67% H, rest O, M=60: C=40/12=3.33, H=6.67/1=6.67, O=53.33/16=3.33. Ratio C:H:O = 1:2:1 → CH₂O (emp formula mass 30). n = 60/30 = 2 → C₂H₄O₂."
      }
    ],
    keyPoints: [
      "Carbon is tetravalent (sp³, sp², sp hybridization) with catenation ability",
      "IUPAC: prefix-root-suffix; longest chain, lowest locants, alphabetical order",
      "Functional groups determine chemical properties: OH, C=O, COOH, NH₂, etc.",
      "Homologous series: same general formula, CH₂ difference, gradual property change",
      "Structural isomers: chain, position, functional group, metamerism",
      "Stereoisomers: geometric (cis/trans) and optical (chiral/enantiomers)",
      "Inductive effect: -I (electron withdrawing) increases acidity; +I decreases",
      "Resonance: delocalization of π electrons; stronger than inductive effect",
      "Hyperconjugation: σ electrons delocalize into empty p orbital; stabilizes carbocations",
      "SN1 (unimolecular, carbocation, racemization) vs SN2 (bimolecular, inversion)",
      "Zaitsev rule: more substituted alkene is major product in elimination",
      "Lassaigne's test: Na fusion for N (Prussian blue), S (violet), halogens (AgX)",
      "Liebig's method: C and H from CO₂ and H₂O absorption",
      "Dumas/Kjeldahl for N; Carius method for halogens and S",
      "Empirical formula: mole ratio; Molecular = n × empirical"
    ],
    importantQuestions: [
      "Write IUPAC names: (CH₃)₂CHCH₂OH, CH₃CH₂CH=CH₂, CH₃CH₂COOH, CH₃COCH₂CH₃.",
      "Distinguish: SN1 vs SN2 mechanism with examples and stereochemistry.",
      "Explain hyperconjugation and its effect on stability of carbocations: 1°, 2°, 3°.",
      "An organic compound has C=39.9%, H=6.7%, O=53.4%. Molecular mass = 60. Find empirical and molecular formula.",
      "Describe Lassaigne's test for N, S, and halogens with reactions.",
      "Explain inductive effect. Why is ClCH₂COOH stronger acid than CH₃COOH?",
      "Calculate %C, %H, %N from combustion data: 0.2 g compound gives 0.44 g CO₂, 0.18 g H₂O, and 22.4 mL N₂ at STP.",
      "What is resonance? Draw resonance structures of aniline and nitrobenzene."
    ]
  },
  "hydrocarbons": {
    overview: "Hydrocarbons are the simplest organic compounds — just carbon and hydrogen. Yet from methane (natural gas) to benzene (plastics precursor) to giant polycyclic rings, they form the backbone of the petrochemical industry and the starting point for all organic synthesis.\n\nAlkanes are saturated (only σ bonds), alkenes have one or more C=C (σ+π), alkynes have C≡C (σ+2π), and arenes contain aromatic rings. Each class has distinct reactions: alkanes undergo free radical substitution, alkenes and alkynes undergo electrophilic addition, and arenes undergo electrophilic aromatic substitution.\n\nThe source of most hydrocarbons is petroleum — a complex mixture separated by fractional distillation. Cracking converts large alkanes into smaller, more valuable ones. The petrochemical industry transforms these into polymers, solvents, fuels, and countless everyday products.",
    concepts: [
      {
        title: "Alkanes — The Saturated Hydrocarbons",
        body: "General formula CₙH₂ₙ₊₂. Only σ bonds, sp³ hybridized carbon (109.5°). Tetrahedral around each carbon. Methane (CH₄), ethane (C₂H₆), propane (C₃H₈), butane (C₄H₁₀). Physical state: C₁-C₄ (gases), C₅-C₁₇ (liquids), C₁₈⁺ (solids). Boiling points increase with chain length (more London dispersion) and branch decreases BP (reduced surface area). Alkanes are nonpolar, insoluble in water, soluble in nonpolar solvents. They are relatively inert — called paraffins (parum affinis = little affinity)."
      },
      {
        title: "Preparation of Alkanes — From the Lab to Industry",
        body: "Hydrogenation of alkenes/alkynes: RCH=CH₂ + H₂ → RCH₂CH₃ (Ni, Pt, or Pd catalyst, room temp). Wurtz reaction: 2RX + 2Na → R-R + 2NaX (dry ether). Only symmetrical alkanes — mixed Wurtz gives all three possible products. Decarboxylation of sodium carboxylate: RCOONa + NaOH (sodalime, CaO) → RH + Na₂CO₃ — produces alkane with one less carbon. Kolbe's electrolysis: 2RCOOK + 2H₂O → R-R + 2CO₂ + H₂ + 2KOH — at anode: carboxylate loses e⁻, forms radical, dimerizes. Grignard reagent: RMgX + H₂O → RH + Mg(OH)X — gives alkane from alkyl halide."
      },
      {
        title: "Chemical Reactions of Alkanes — Substitution and Combustion",
        body: "Free radical halogenation: RH + X₂ → RX + HX (hν or heat). Selectivity: F₂ (too violent, uncontrolled), Cl₂ (3°H > 2°H > 1°H — radical stability), Br₂ (high selectivity — bromination favors most substituted H), I₂ (doesn't react — too slow). Combustion: complete (CO₂ + H₂O, large ΔH), incomplete (CO or C + H₂O). Alkanes are excellent fuels. Pyrolysis (cracking): heat in absence of air → smaller alkanes + alkenes — crucial in petroleum refining. Isomerization: n-alkanes to branched (improved octane rating). Aromatization: alkanes to aromatic compounds over Pt catalyst at high T."
      },
      {
        title: "Conformations of Alkanes — Rotational Isomerism",
        body: "Free rotation around C-C single bond. Ethane: staggered (60° dihedral, more stable, 0 kJ/mol) and eclipsed (0°, less stable, +12 kJ/mol). Barrier to rotation = 12 kJ/mol — fast at room temp. Butane: anti (180°, CH₃ opposite, most stable), gauche (60°, CH₃ at 60°, +3.8 kJ/mol), eclipsed (+16 kJ/mol). Newman projections visualize conformations. Larger groups = higher rotational barriers. At room temp, molecules rapidly interconvert between conformations."
      },
      {
        title: "Alkenes — The Unsaturated Hydrocarbons with C=C",
        body: "General formula CₙH₂ₙ. sp² hybridized carbons at C=C (120°). π bond is weaker (~265 kJ/mol) than σ bond (~348 kJ/mol). Dipole moment: cis-alkenes have net dipole, trans-alkenes generally do not (trans-2-butene μ=0). Physical properties similar to alkanes of same carbon count but slightly higher BP. More polarizable π electrons give slightly stronger London forces. Nomenclature: suffix -ene, lowest number to C=C. Dienes (two C=C): isolated (separated by ≥2 single bonds), conjugated (alternating single-double), cumulative (adjacent C=C)."
      },
      {
        title: "Preparation of Alkenes",
        body: "Dehydration of alcohols: RCH₂CH₂OH → RCH=CH₂ + H₂O (conc. H₂SO₄ or Al₂O₃, 170°C). Follows Zaitsev rule: more substituted alkene is major. Dehydrohalogenation of alkyl halides: RCH₂CH₂X + alc. KOH → RCH=CH₂ + KX + H₂O. Carbocation intermediate with rearrangement possible. Dehalogenation of vicinal dihalides: RCHBrCHBrR + Zn → RCH=CHR + ZnBr₂ (stereospecific — anti elimination). Cracking of alkanes: large alkane → smaller alkane + alkene. From alkynes: partial reduction with Lindlar's catalyst (Pd/BaSO₄ poisoned with quinoline, gives cis-alkene) or Na/NH₃ (gives trans-alkene)."
      },
      {
        title: "Electrophilic Addition Reactions of Alkenes",
        body: "Markovnikov's rule: H⁺ adds to the carbon with more H already (forms more stable carbocation). HX addition: CH₃CH=CH₂ + HBr → 2-bromopropane (major) — 2° carbocation intermediate. H₂SO₄ addition: forms alkyl hydrogen sulfate, then hydrolyzed to alcohol (industrial hydration). H₂O addition (acid-catalyzed): follows Markovnikov — gives alcohol. Halogen addition: Br₂/CCl₄ → vicinal dibromide (red-brown Br₂ decolorized — test for unsaturation). Anti addition: cyclic bromonium ion intermediate → trans product. Oxymercuration: Hg(OAc)₂/H₂O then NaBH₄ → Markovnikov alcohol, no rearrangement. Hydroboration: BH₃/THF then H₂O₂/OH⁻ → anti-Markovnikov alcohol, syn addition."
      },
      {
        title: "Oxidation of Alkenes",
        body: "KMnO₄: cold, dilute, basic → vicinal diol (cis-1,2-diol, syn dihydroxylation — Baeyer's test: purple to brown MnO₂ indicates unsaturation). Hot, acidic KMnO₄ → cleavage at C=C: terminal C=C gives CO₂ + carboxylic acid; R₂C=CR₂ gives two ketones; RCH=CR₂ gives carboxylic acid + ketone. Ozonolysis: O₃ then Zn/H₂O → cleavage gives aldehydes/ketones — identifies position of C=C. Catalytic hydrogenation: H₂ + Pd/Pt/Ni → alkane (syn addition). Epoxidation: peroxyacid (m-CPBA) → epoxide (three-membered ring). Anti dihydroxylation: epoxide + H₃O⁺ → trans-diol."
      },
      {
        title: "Dienes and Conjugated Systems",
        body: "1,3-butadiene (CH₂=CH-CH=CH₂) has conjugated double bonds — alternating single and double. Delocalization: π electrons spread over four carbons → 12 kJ/mol stabilization. 1,2-addition (kinetic, -80°C) gives 3-bromo-1-butene; 1,4-addition (thermodynamic, 40°C) gives 1-bromo-2-butene. Diels-Alder reaction: [4+2] cycloaddition between conjugated diene and dienophile (C=C with electron-withdrawing group) → six-membered ring. One of the most powerful reactions in organic synthesis. Stereospecific: cis-diene geometry preserved, suprafacial on both components."
      },
      {
        title: "Alkynes — The Triple Bond Hydrocarbons",
        body: "General formula CₙH₂ₙ₋₂. sp hybridization (180° linear). C≡C bond length ~120 pm (shorter than C=C 134 pm, C-C 154 pm). Bond strength 839 kJ/mol — stronger than C=C (614) but π bonds are not twice as strong due to less effective sideways overlap of 2p orbitals. Terminal alkynes (RC≡CH) are weakly acidic (pKa ~25) — can be deprotonated by strong bases (NaNH₂, Grignard reagents) to form acetylide ions (RC≡C⁻). Acidity due to high s-character (50%) of C-H bond — more electronegative sp carbon stabilizes negative charge."
      },
      {
        title: "Preparation and Reactions of Alkynes",
        body: "Preparation: dehydrohalogenation of vicinal dihalides (alc. KOH, then NaNH₂). From calcium carbide: CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂ — industrial route to acetylene. Reactions: electrophilic addition (two steps — first to alkene, then to alkane). HX addition follows Markovnikov. H₂O addition (HgSO₄/H₂SO₄): terminal alkyne → methyl ketone (via enol tautomerization — vinyl alcohol rearranges to carbonyl). NaNH₂ deprotonation to form acetylide: RC≡CH + NaNH₂ → RC≡C⁻Na⁺ + NH₃. Alkylation: RC≡C⁻ + R'X → RC≡C-R' + X⁻ — extends carbon chain. Ozonolysis: C≡C → carboxylic acids. Partial hydrogenation: Lindlar's → cis-alkene; Na/NH₃ → trans-alkene."
      },
      {
        title: "Aromatic Hydrocarbons — Benzene and the Hückel Rule",
        body: "Benzene (C₆H₆): planar, all C-C 139 pm (between single and double). Kekulé structure (1865) proposed alternating double bonds, but benzene doesn't undergo addition reactions like alkenes. Modern: delocalized π system, all six C-C equivalent. Hückel's rule: aromatic if planar, cyclic, fully conjugated, with (4n+2) π electrons. n=1 → 6π (benzene, pyridine). n=2 → 10π (naphthalene). Anti-aromatic: 4n π electrons (cyclobutadiene, extremely unstable). Non-aromatic: doesn't meet all criteria. Resonance energy of benzene = 150 kJ/mol — extra stability. Electrophilic aromatic substitution: retains aromaticity — characteristic reaction of arenes."
      },
      {
        title: "Electrophilic Aromatic Substitution — The Heart of Arene Chemistry",
        body: "Mechanism: (1) electrophile generation (2) π-complex (weak interaction, reversible) (3) σ-complex (arenium ion, Wheland intermediate — carbocation with positive charge delocalized over ring, resonance stabilized, slower step) (4) deprotonation to restore aromaticity (fast). Nitration: HNO₃/H₂SO₄ → NO₂⁺ (nitronium ion). Sulfonation: H₂SO₄/SO₃ → benzene sulfonic acid (reversible — desulfonation with dilute H₂SO₄ at 100°C). Halogenation: Cl₂/AlCl₃ or Br₂/FeBr₃ → aryl halide. Friedel-Crafts alkylation: RCl/AlCl₃ → alkylbenzene. Rearrangement possible (1° carbocation → 2° then 3°). Friedel-Crafts acylation: RCOCl/AlCl₃ → acyl benzene — no rearrangement, gives ketone."
      },
      {
        title: "Directing Effects of Substituents on Benzene",
        body: "Ortho-para directors (activate ring, except halogens): EDG groups (OH, NH₂, OCH₃, alkyl). Ortho-para directors have lone pairs or +R/+I effect, stabilize σ-complex intermediate (especially ortho and para positions). Activating groups donate electrons by resonance or induction, making ring more reactive than benzene. Ortho-para directing but deactivating: halogens (F, Cl, Br, I) — strong -I withdraws electrons (deactivates) but lone pairs donate by resonance (direct ortho/para). Meta directors (deactivate ring): EWG (NO₂, CN, C=O, COOH, SO₃H, CF₃). Meta directors have -R or strong -I effects, destabilize σ-complex at ortho/para positions more than meta. Strong deactivators: NO₂, CF₃. Moderate: CN, COR, COOH. Weak: halogens."
      },
      {
        title: "Polycyclic Aromatic Hydrocarbons (PAHs)",
        body: "Naphthalene (C₁₀H₈): two fused benzene rings, 10π electrons (n=2). More reactive than benzene — electrophilic substitution occurs at α-position (C1, more stable σ-complex). Anthracene (C₁₄H₁₀): three linearly fused rings. Phenanthrene: three angularly fused rings. PAHs are formed during incomplete combustion of organic matter (cigarette smoke, grilled meat, vehicle exhaust). Some are carcinogenic (benzo[a]pyrene). Health concerns: air pollution from diesel exhaust, wood smoke. PAHs are persistent environmental pollutants, accumulate in soil and sediments, and undergo bioaccumulation in food chains."
      },
      {
        title: "Sources of Hydrocarbons — Petroleum and Natural Gas",
        body: "Petroleum (crude oil): complex mixture of hydrocarbons (alkanes, cycloalkanes, aromatics) formed from ancient marine organisms over millions of years. Fractional distillation: separates by boiling point — refinery gas (<30°C, C₁-C₄), gasoline (30-200°C, C₅-C₁₂), kerosene (150-250°C, C₁₂-C₁₆), diesel (200-350°C, C₁₅-C₂₅), fuel oil (350-400°C), and residue (asphalt, >400°C). Cracking: thermal (high T, high P) and catalytic (zeolites, lower T) — converts large alkanes to smaller, more valuable ones. Reforming: converts straight-chain alkanes to branched and aromatic compounds (higher octane). Octane number: measure of anti-knock quality — isooctane = 100, n-heptane = 0. Leaded gasoline (tetraethyl lead, Pb(C₂H₅)₄) was phased out due to toxicity; modern gasoline uses oxygenates (ethanol, MTBE)."
      },
      {
        title: "Environmental Aspects of Hydrocarbons",
        body: "Complete combustion: CO₂ + H₂O — CO₂ is the major greenhouse gas from burning fossil fuels. Incomplete combustion: CO (toxic, binds hemoglobin 200× stronger than O₂), soot (particulate matter). Methane: potent greenhouse gas (25× CO₂ over 100 years) — released from natural gas leaks, agriculture (livestock), landfills. Volatile organic compounds (VOCs): unburned hydrocarbons from vehicles and industry → ground-level ozone formation (photochemical smog). CFCs: ozone depletion. Catalytic converters: Pt/Pd/Rh convert CO→CO₂, unburned HC→CO₂+H₂O, NOx→N₂. Greener alternatives: electric vehicles, hydrogen fuel, biofuels (ethanol, biodiesel)."
      }
    ],
    keyPoints: [
      "Alkanes: CₙH₂ₙ₊₂, sp³, σ bonds only, free radical substitution",
      "Wurtz reaction: 2RX + 2Na → R-R; mixed Wurtz gives 3 products",
      "Free radical halogenation: 3° > 2° > 1° H reactivity for Cl₂ and Br₂",
      "Alkenes: CₙH₂ₙ, sp², π bond, electrophilic addition",
      "Markovnikov's rule: H⁺ adds to carbon with more H (stable carbocation)",
      "Anti-Markovnikov: via hydroboration (BH₃/H₂O₂, OH⁻) — syn addition, no rearrangement",
      "Baeyer's test: cold KMnO₄ purple→brown indicates unsaturation",
      "Ozonolysis: O₃ then Zn/H₂O cleaves C=C → identifies position",
      "Alkynes: CₙH₂ₙ₋₂, sp, terminal H acidic (pKa 25), deprotonated by NaNH₂",
      "Lindlar's catalyst: Pd/BaSO₄/quinoline → cis-alkene from alkyne",
      "Hückel: (4n+2)π electrons, planar, cyclic, conjugated = aromatic",
      "Electrophilic aromatic substitution: σ-complex intermediate (Wheland)",
      "Ortho-para directors: EDG (activators) and halogens (deactivators)",
      "Meta directors: EWG (NO₂, CN, C=O, COOH, CF₃)",
      "Petroleum: separated by fractional distillation; cracking increases value",
      "Catalytic converters reduce CO, HC, NOx emissions"
    ],
    importantQuestions: [
      "Write mechanism for CH₃CH=CH₂ + HBr. Show all steps. What is the major product?",
      "Explain Baeyer's test and ozonolysis. How would you distinguish ethene and ethyne?",
      "Describe Friedel-Crafts alkylation and acylation of benzene. Why does alkylation give rearranged products?",
      "How does a benzene ring direct electrophilic substitution? Explain with NO₂ (meta) and OH (ortho-para).",
      "Write reactions: (i) Wurtz reaction (ii) Kolbe's electrolysis (iii) hydration of ethyne.",
      "An alkene C₅H₁₀ on ozonolysis gives CH₃CHO and (CH₃)₂CO. Identify the alkene and write the reaction.",
      "Explain Hückel's rule. Check aromaticity: cyclopentadienyl anion, cycloheptatrienyl cation, pyridine.",
      "Describe fractional distillation of petroleum. What is cracking and why is it important?"
    ]
  },
  "states-of-matter": {
    overview: "Why does water expand when it freezes? Why do gases exert pressure? Why is diamond so hard but iodine so soft? The state of matter — solid, liquid, or gas — depends on the balance between intermolecular forces and thermal energy. Raise the temperature, and solids melt, liquids boil; lower it, and gases condense, liquids freeze.\n\nGases obey simple laws (Boyle, Charles, Avogadro) which combine into the ideal gas equation PV = nRT. But real gases deviate at high pressure and low temperature — that's where van der Waals equation comes in. The kinetic molecular theory explains pressure as molecular collisions, temperature as average kinetic energy, and diffusion as random molecular motion.\n\nLiquids have surface tension, viscosity, and vapor pressure. Solids can be crystalline (regular repeating patterns) or amorphous (disordered). The type of crystal — ionic, covalent, molecular, or metallic — determines its properties: melting point, hardness, and conductivity.",
    concepts: [
      {
        title: "Intermolecular Forces — The Glue Between Molecules",
        body: "Dispersion (London) forces: temporary dipoles from electron fluctuations — present in all molecules, strength ↑ with molecular size and surface area. Dipole-dipole: between polar molecules, stronger than dispersion for small polar molecules. Hydrogen bonding: H bonded to N/O/F attracted to lone pair on another N/O/F (5-30 kJ/mol). Ion-dipole: between ion and polar molecule (solvation of salts in water). Ion-induced dipole: ion polarizes neutral molecule. Strength order: ion-dipole > H-bond > dipole-dipole > dipole-induced dipole > London dispersion. Intermolecular forces determine boiling points: H₂O (100°C, H-bonding) vs H₂S (-60°C, dipole-dipole)."
      },
      {
        title: "The Gas Laws — Boyle, Charles, and Avogadro",
        body: "Boyle's law (1662): P ∝ 1/V at constant n,T — PV = constant. Charles's law (1787): V ∝ T at constant n,P — V/T = constant. Gay-Lussac's law: P ∝ T at constant n,V — P/T = constant. Avogadro's law (1811): V ∝ n at constant P,T — equal volumes of gases at same T,P contain equal molecules. Combined gas law: P₁V₁/T₁ = P₂V₂/T₂. Molar volume: 22.4 L at STP (0°C, 1 atm), 24.5 L at RTP (25°C, 1 atm). All are limiting laws — accurate for ideal behavior at low P and high T."
      },
      {
        title: "Ideal Gas Equation — PV = nRT",
        body: "Combines all gas laws: PV = nRT. R = ideal gas constant = 0.0821 L·atm·mol⁻¹·K⁻¹ = 8.314 J·mol⁻¹·K⁻¹ = 62.36 L·mmHg·K⁻¹·mol⁻¹. STPD conditions: 0°C (273.15 K), 1 atm (760 mmHg). Standard molar volume: 22.414 L. Applications: find molar mass (M = mRT/PV), density (d = PM/RT), number of moles. Dalton's law of partial pressures: P_total = ΣP_i. Partial pressure = mole fraction × total pressure. Gas collected over water: P_dry = P_total - P_vapor(H₂O). Mole fraction X_i = n_i/n_total."
      },
      {
        title: "Kinetic Molecular Theory of Gases",
        body: "Five postulates: (1) Gases consist of tiny particles in constant random motion. (2) Volume of molecules negligible compared to container. (3) No intermolecular forces between molecules. (4) Collisions are perfectly elastic (no energy loss). (5) Average KE ∝ T (KE = ³/₂RT for one mole, = ³/₂kT per molecule). Derived from postulates: PV = ⅓mnu² (where u = root mean square speed). Explains Boyle (more molecules hit walls at higher P), Charles (faster molecules at higher T → more force), Avogadro (more molecules → more collisions)."
      },
      {
        title: "Molecular Speeds — RMS, Average, and Most Probable",
        body: "Root mean square speed: u_rms = √(3RT/M). Average speed: u_avg = √(8RT/πM). Most probable speed: u_mp = √(2RT/M). Ratio u_rms : u_avg : u_mp = 1.000 : 0.921 : 0.816. At 25°C: N₂ (u_rms = 515 m/s) < He (1360 m/s) — lighter molecules move faster. Maxwell-Boltzmann distribution: shows spread of speeds at a given T. As T ↑, the curve broadens and shifts right (more molecules at higher speeds). Lighter molecules have broader distributions. Effusion (Graham's law): rate ∝ 1/√M — H₂ effuses 4× faster than O₂."
      },
      {
        title: "Real Gases and Deviations from Ideality",
        body: "Real gases deviate at high P (molecules closer → volume significant) and low T (intermolecular forces become important). Compression factor Z = PV/nRT. Ideal: Z=1. Z<1: attractive forces dominate (easier to compress than ideal — occurs at moderate P). Z>1: repulsive forces/volume dominate (harder to compress — at very high P). At Boyle temperature (T_B), gas behaves ideally over a range of P. For each gas: T_B ≈ 2.5×T_c (critical temperature). N₂: T_B = 327 K, He: T_B = 23 K (near ideal at most conditions)."
      },
      {
        title: "Van der Waals Equation — Correcting for Reality",
        body: "(P + a/V²)(V - nb) = nRT. 'a' corrects for intermolecular attractions (units: atm·L²/mol²). Larger a = stronger attractions (H₂O: 5.46, He: 0.034). Larger molecules with more electrons have higher 'a'. 'b' corrects for finite molecular volume (units: L/mol). b = 4 × actual volume of molecules. Larger molecules = larger b. Van der Waals equation better predicts behavior at high P and near condensation. Cubic in V — solving gives three real roots below T_c (one liquid, one gas, one meaningless). T_c: temperature above which gas cannot be liquefied by pressure alone."
      },
      {
        title: "Liquefaction of Gases and Critical Phenomena",
        body: "A gas can be liquefied by cooling below its critical temperature (T_c) and applying sufficient pressure. T_c: highest T at which gas can be liquefied. P_c: pressure needed at T_c. V_c: molar volume at critical point. For CO₂: T_c = 304.2 K (31°C), P_c = 73 atm — above 31°C, CO₂ cannot be liquefied (hence 'critical'). Liquefaction methods: Linde's method (Joule-Thomson expansion cooling), Claude's method (adiabatic expansion doing work). Critical constants relate to van der Waals constants: a = 27R²T_c²/64P_c, b = RT_c/8P_c. Practical applications: liquid air separation, cryogenics, liquefied natural gas (LNG) transport."
      },
      {
        title: "Liquid State — Properties and Behavior",
        body: "Between solid and gas — molecules have enough energy to move past each other (fluidity) but not enough to escape (cohesion). Vapor pressure: pressure of vapor in equilibrium with liquid at given T. Increases with T (Clausius-Clapeyron equation: ln(P₂/P₁) = -ΔH_vap/R(1/T₂ - 1/T₁)). Boiling point: when vapor pressure = external pressure (normal BP = 1 atm). Surface tension: molecules at surface experience net inward pull → minimizes surface area (raindrops spherical). Capillary action: adhesion to walls > cohesion → liquid rises in narrow tube. Viscosity: resistance to flow — decreases with T, increases with molecular size and intermolecular forces."
      },
      {
        title: "Solid State — Crystalline and Amorphous",
        body: "Crystalline: regular 3D arrangement (lattice + basis = crystal). Long-range order, sharp melting point, anisotropic properties (different in different directions). Examples: NaCl, diamond, quartz. Amorphous (glass-like): disordered arrangement, short-range order only. No sharp melting point (softens over range), isotropic. Examples: glass, rubber, plastics, gels. Polymorphism: same substance can form different crystal structures (carbon: diamond, graphite; CaCO₃: calcite, aragonite). Unit cell: smallest repeating unit. Lattice points: positions of atoms/ions in crystal. Seven crystal systems and 14 Bravais lattices describe all possible arrangements."
      },
      {
        title: "Crystal Systems and Bravais Lattices",
        body: "Seven crystal systems based on unit cell parameters (edge lengths a, b, c and angles α, β, γ): cubic (a=b=c, α=β=γ=90°), tetragonal (a=b≠c, all 90°), orthorhombic (a≠b≠c, all 90°), hexagonal (a=b≠c, α=β=90°, γ=120°), rhombohedral (a=b=c, α=β=γ≠90°), monoclinic (a≠b≠c, α=γ=90°, β≠90°), triclinic (a≠b≠c, all angles ≠90°). Bravais lattices: primitive (P, lattice points only at corners), body-centered (I, corner + center), face-centered (F, corners + face centers), base-centered (C, corners + two opposite faces). Total 14 Bravais lattices. Cubic is most symmetric: simple cubic (SC), body-centered cubic (BCC), face-centered cubic (FCC)."
      },
      {
        title: "Close Packing in Solids — HCP and CCP",
        body: "Atoms are spheres in closest possible arrangement. Hexagonal close packing (HCP): ABAB... layers — Mg, Zn, Ti. Cubic close packing (CCP = FCC): ABCABC... layers — Cu, Ag, Au. Both have 74% packing efficiency (26% empty space = voids). Coordination number = 12 (each atom touches 12 neighbors). Voids: tetrahedral (4 atoms around, smaller) and octahedral (6 atoms around, larger). Number of tetrahedral voids = 2N; octahedral = N (where N = close-packed atoms). For CCP: each unit cell has 4 atoms, 8 tetrahedral voids, 4 octahedral voids. Interstitial compounds: small atoms (H, C, N) occupy voids in metal lattices, modifying properties."
      },
      {
        title: "Types of Crystalline Solids",
        body: "Ionic (NaCl, MgO): ions held by electrostatic forces — high MP, brittle, conduct when molten/dissolved, soluble in polar solvents. Coordination number depends on radius ratio. Covalent network (diamond, SiC, SiO₂): atoms held by covalent bonds — extremely high MP (diamond 3550°C), very hard, semiconductors or insulators, insoluble. Molecular (I₂, ice, naphthalene): molecules held by weak forces (London, dipole) — low MP, soft, insulators, soluble in nonpolar solvents (or water via H-bonding). Metallic (Cu, Fe, Na): positive ions in electron sea — high MP for d-block, excellent conductors, malleable and ductile, lustrous."
      },
      {
        title: "Imperfections in Solids — Defects",
        body: "Point defects: vacancy (missing atom, Schottky defect in ionic solids — equal numbers of cation and anion vacancies), interstitial (extra atom in void), Frenkel defect (cation moves to interstitial site, leaving vacancy — common in AgCl, ZnS). Line defects (dislocations): edge and screw — determine plastic deformation. Non-stoichiometric defects: excess metal (F-centers — produce color: NaCl yellow when heated in Na vapor) or metal deficiency. Defects impact properties: F-centers in NaCl give color and semiconductivity. Impurities in semiconductors (doping): n-type (Group 15 in Si — extra e⁻) or p-type (Group 13 in Si — electron holes)."
      },
      {
        title: "Electrical Properties of Solids",
        body: "Conductors: metals (conduction band partially filled — e⁻ mobile), resistivity 10⁻⁸ to 10⁻⁶ Ω·m. Insulators: large band gap (5-10 eV) — diamond, quartz, glass. Semiconductors: small band gap (0.5-3 eV) — Si (1.1 eV), Ge (0.7 eV). Conductivity ↑ with T (unlike metals — more electrons jump to conduction band). Intrinsic: pure, equal e⁻ and holes. Extrinsic: doped with impurities. Superconductors: zero resistance below T_c (Meissner effect — expels magnetic field). High T_c superconductors: YBa₂Cu₃O₇ (T_c = 92 K, liquid N₂). Applications: MRI, maglev trains, particle accelerators."
      },
      {
        title: "Liquid Crystals — The Fourth State",
        body: "Molecules with rigid, rod-like shape, one or more polar groups. Nematic: molecules aligned in same direction (long-range orientational order) but no positional order — used in LCDs (twisted nematic display: electric field changes orientation → light transmission controlled). Smectic: molecules aligned + layered (more ordered). Cholesteric (chiral nematic): layers rotated slightly — selective reflection of specific λ (thermometers). Thermotropic liquid crystals: transition temperatures depend on heating. Lyotropic: concentration-dependent in solution (soap micelles). Applications: LCD screens, thermometers (medical, mood rings), optical sensors."
      },
      {
        title: "Phase Diagrams — Mapping States of Matter",
        body: "A phase diagram shows state (solid, liquid, gas) as function of T and P. Triple point: three phases coexist (H₂O: 0.01°C, 4.58 mmHg). Critical point: beyond which liquid and gas indistinguishable. Melting/freezing curve: slope for H₂O is negative (unusual — ice less dense than water, melts under pressure → ice skates). For most substances, slope is positive. Sublimation curve: solid↔vapor. Vaporization curve: liquid↔vapor (ends at critical point). Phase rule (Gibbs): F = C - P + 2. For water at triple point: C=1, P=3 → F=0 (invariant). Applications: freeze-drying (below triple point — sublimation), supercritical CO₂ extraction (decaffeination)."
      },
      {
        title: "Comparison of States — Gases, Liquids, and Solids",
        body: "Density: gases << liquids ≈ solids (except ice < water). Compressibility: gases high, liquids low, solids negligible. Shape: gases fill container, liquids take container shape, solids retain shape. Diffusion: gases fastest (Graham's law), liquids slow (∝1/√M), solids extremely slow. Intermolecular forces: gases (negligible), liquids (moderate), solids (strong). Molecular motion: gases (translational, rotational, vibrational), liquids (limited translation + rotation), solids (vibrational only). Enthalpy changes: fusion (ΔH_fus, melting), vaporization (ΔH_vap, boiling), sublimation (ΔH_sub, solid→gas directly). ΔH_sub = ΔH_fus + ΔH_vap."
      }
    ],
    keyPoints: [
      "Intermolecular forces: dispersion < dipole-dipole < H-bond < ion-dipole",
      "Boyle: PV=const; Charles: V/T=const; Avogadro: V∝n at same T,P",
      "Ideal gas: PV=nRT, R=0.0821 L·atm·mol⁻¹·K⁻¹",
      "Dalton: P_total = ΣP_i; P_i = X_i × P_total",
      "Kinetic theory: KE ∝ T; PV = ⅓mnu²; u_rms = √(3RT/M)",
      "Graham's law: rate of effusion ∝ 1/√M",
      "Real gases deviate: van der Waals (P + a/V²)(V - nb) = nRT",
      "Compression factor Z = PV/nRT; Z=1 ideal, Z<1 attraction, Z>1 repulsion",
      "T_c: critical temp above which gas can't be liquefied",
      "Vapor pressure: Clausius-Clapeyron ln(P₂/P₁) = -ΔH_vap/R(1/T₂ - 1/T₁)",
      "Crystalline: regular lattice, sharp MP, anisotropic. Amorphous: disordered, no sharp MP",
      "7 crystal systems, 14 Bravais lattices; cubic: SC, BCC, FCC",
      "HCP (ABAB) and CCP/FCC (ABCABC): 74% packing efficiency, CN=12",
      "Ionic (high MP), covalent network (very hard), molecular (low MP), metallic (conducting)",
      "Schottky (vacancy), Frenkel (interstitial), F-centers (color centers)",
      "Semiconductors: band gap; n-type (extra e⁻), p-type (hole); conductivity ↑ with T",
      "Liquid crystals: nematic (LCD), smectic, cholesteric — rod-like molecules",
      "Phase diagram: triple point, critical point; water's negative melting slope"
    ],
    importantQuestions: [
      "Derive ideal gas equation from gas laws. Calculate volume of 2 mol CO₂ at STP.",
      "Calculate u_rms of O₂ at 27°C. Compare with H₂ at same temperature.",
      "Explain deviations from ideal behavior. What is van der Waals equation?",
      "State Graham's law. If O₂ takes 30 s to effuse, how long for H₂ under same conditions?",
      "Explain: (i) Surface tension (ii) Viscosity (iii) Vapor pressure",
      "Differentiate crystalline and amorphous solids with examples.",
      "Explain close packing: HCP vs CCP. Calculate packing efficiency for FCC.",
      "What are Schottky and Frenkel defects? Give examples.",
      "Explain phase diagram of water. Why does ice float?",
      "What are liquid crystals? Explain nematic phase and LCD working."
    ]
  },
  "adsorption-colloids": {
    overview: "Activated charcoal can remove toxins from water. Milk is an emulsion of fat in water. Fog is liquid droplets suspended in gas. These everyday phenomena involve surfaces — adsorption on solid surfaces and colloidal systems where one substance is finely dispersed in another.\n\nAdsorption is the accumulation of molecules on a surface. It's different from absorption (which penetrates the bulk). Adsorption depends on surface area, temperature, pressure, and the nature of adsorbate and adsorbent. Freundlich and Langmuir isotherms describe how much adsorbs at different concentrations. Physical adsorption (weak van der Waals forces) and chemical adsorption (strong covalent bonds) have different characteristics.\n\nColloids (1-1000 nm particle size) are intermediate between true solutions and suspensions. They're everywhere — milk, blood, smoke, fog, paint, jelly, cheese. Colloids can be lyophilic (solvent-loving) or lyophobic (solvent-fearing). They exhibit the Tyndall effect, Brownian motion, and electrophoresis. Emulsions, gels, and foams are special types of colloids with immense practical importance.",
    concepts: [
      {
        title: "Adsorption vs Absorption — Surface vs Bulk",
        body: "Adsorption: molecules (adsorbate) accumulate on the surface of a solid or liquid (adsorbent). Absorption: molecules penetrate into the bulk of the absorbent (sponge absorbs water). Sorption: when both occur simultaneously. Adsorption is a surface phenomenon — depends on surface area (activated charcoal has huge surface area ~500-1500 m²/g). Highly porous materials are excellent adsorbents: activated carbon, silica gel, zeolites, alumina. Applications: gas masks (charcoal adsorbs toxic gases), water purification, sugar decolorization, chromatography separation."
      },
      {
        title: "Types of Adsorption — Physisorption and Chemisorption",
        body: "Physisorption (physical adsorption): weak van der Waals forces (10-40 kJ/mol). Low specificity — any gas adsorbs on any surface. Multilayer adsorption possible. Reversible. Decreases with increasing temperature. Increases with pressure (Freundlich/Langmuir isotherms). Rate is fast (no activation energy). Examples: N₂ on charcoal, H₂O on silica gel. Chemisorption (chemical adsorption): strong covalent bonds (80-400 kJ/mol). Highly specific — requires bond formation. Monolayer only (chemically bonded). Often irreversible. Activation energy needed — rate increases with T (like chemical reactions). Examples: O₂ on platinum, H₂ on Ni (catalytic hydrogenation). Distinguishing: chemisorption has higher enthalpy, higher specificity, and is harder to reverse."
      },
      {
        title: "Factors Affecting Adsorption",
        body: "Surface area of adsorbent: higher area = more adsorption (activated charcoal > graphite > diamond). Nature of adsorbate: easily liquefiable gases (higher critical temperature, more van der Waals) adsorb more — NH₃ > CH₄ > H₂ > He. Temperature: physisorption decreases with T (exothermic, ΔH < 0). Chemisorption initially increases (activation energy barrier), then decreases at very high T. Pressure: physisorption increases with P, reaches saturation (monolayer coverage for Langmuir). Concentration (from solution): follows Freundlich: x/m = kC^(1/n). Activation of adsorbent: increasing surface area by heating (removes adsorbed gases) or chemical treatment."
      },
      {
        title: "Adsorption Isotherms — Freundlich and Langmuir",
        body: "Freundlich isotherm: x/m = kP^(1/n) (for gases) or x/m = kC^(1/n) (for solutions). log(x/m) = log k + (1/n)log P. n > 1 (usually 2-3), k depends on temperature and adsorbent. Empirical, works well at moderate pressures but fails at very high P and very low P. Langmuir isotherm: assumes monolayer adsorption, uniform surface, no interaction between adsorbed molecules. θ = KP/(1+KP), where θ = fraction of surface covered. At low P: θ ≈ KP (linear). At high P: θ → 1 (saturation). x/m = (x/m)_max × KP/(1+KP). Linear form: P/(x/m) = 1/K(x/m)_max + P/(x/m)_max. Langmuir is more theoretically sound but assumes ideal surface (real surfaces are heterogeneous)."
      },
      {
        title: "Catalysis and Adsorption — The Surface Connection",
        body: "Heterogeneous catalysis occurs on solid surfaces. Steps: (1) diffusion of reactants to surface (2) adsorption (3) surface reaction (4) desorption of products (5) diffusion away. Rate-determining step is usually surface reaction or adsorption. Examples: Haber process (Fe + promoters adsorbs N₂, weakens N≡N bond, H₂ adsorbs, NH₃ desorbs — 450°C, 200 atm). Contact process (V₂O₅: SO₂ + O₂ adsorb, SO₃ forms, desorbs). Catalytic converter (Pt/Pd/Rh adsorb CO, NO, unburned HC — surface reactions convert to CO₂, N₂, H₂O). Automobile catalyst: three-way converts CO, HC, NOx simultaneously. Poisoning: impurities (Pb, S) adsorb irreversibly, block active sites. Promoters: enhance activity (K₂O, Al₂O₃ in Fe catalyst for Haber)."
      },
      {
        title: "Colloidal State — The In-Between World",
        body: "True solution: <1 nm, particles invisible, pass through filter paper, do not scatter light. Colloidal dispersion: 1-1000 nm, visible with ultramicroscope, pass through filter paper but not semipermeable membrane, scatter light (Tyndall effect). Suspension: >1000 nm, visible to naked eye, settle on standing, scatter light. Colloidal particles are aggregates of many molecules (multimolecular: S₈ colloid) or single large molecules (macromolecular: starch, proteins, polymers). Associated colloids (micelles): molecules that aggregate above a critical concentration (CMC) — soaps and detergents. At low concentration, soap exists as individual ions; above CMC (~10⁻⁴ to 10⁻³ M), they form micelles."
      },
      {
        title: "Types of Colloids — Lyophilic and Lyophobic",
        body: "Lyophilic (solvent-loving): strong affinity between dispersed phase and dispersion medium. Reversible — dried residue can be reconstituted. Stable — needs electrolyte to coagulate. Examples: starch in water, gelatin in water, rubber in benzene. High viscosity. Prepared by simple mixing. Lyophobic (solvent-fearing): no affinity. Irreversible — once coagulated, can't be reconstituted. Unstable — needs stabilizing agent. Examples: metal sols (Ag, Au), metal hydroxides (Fe(OH)₃), As₂S₃, sulfur. Low viscosity. Need special methods (chemical reduction, hydrolysis, condensation, peptization). Catalysis: lyophobic sols have large surface area, used as catalysts (colloidal Pt, Pd, Ni)."
      },
      {
        title: "Preparation of Lyophobic Colloids",
        body: "Condensation methods: build particles from smaller units. Chemical reduction: 2AgNO₃ + 2NH₂OH → 2Ag + N₂ + 2HNO₃ + 2H₂O (red colloidal silver). Hydrolysis: FeCl₃ + 3H₂O (hot) → Fe(OH)₃ sol + 3HCl (red-brown). Double decomposition: As₂O₃ + 3H₂S → As₂S₃ sol + 3H₂O (yellow). Oxidation: 2H₂S + SO₂ → 3S + 2H₂O (sulfur sol). Peptization: convert freshly precipitated particles into colloid by adding electrolyte (Fe(OH)₃ + FeCl₃ → Fe(OH)₃ sol). Bredig's arc method: electric arc between metal electrodes in water — metal vaporizes and condenses as colloidal particles. Dialysis removes electrolyte impurities through semipermeable membrane."
      },
      {
        title: "Purification of Colloids — Dialysis and Ultrafiltration",
        body: "Dialysis: separate colloidal particles from dissolved ions/molecules using semipermeable membrane (cellophane, parchment, animal bladder). Ions pass through, colloids retained. Water changed continuously for efficient removal. Electrodialysis: electric field speeds ion removal. Applications: purification of blood (kidney dialysis — removes urea and toxins while retaining proteins and cells), desalting colloids. Ultrafiltration: filter paper with pores smaller than colloid particles (collodion or cellophane membrane under pressure). Retains colloids, passes true solutions. Ultrafilter paper: filter paper soaked in collodion (nitrocellulose in ether/alcohol), dried. Membranes for reverse osmosis: remove salts from water."
      },
      {
        title: "Properties of Colloids — How They Behave",
        body: "Tyndall effect: scattering of light by colloidal particles — beam visible through colloid (true solutions don't scatter). Blue eyes: Tyndall effect from colloidal particles in iris. Brownian motion: zigzag path due to bombardment by solvent molecules — prevents settling. Confirms kinetic theory and random molecular motion. Electrophoresis: charged colloidal particles move toward oppositely charged electrode under electric field. Positive particles (Fe(OH)₃ sol) → cathode. Negative particles (As₂S₃ sol) → anode. Electro-osmosis: opposite — liquid moves through stationary colloid under electric field. Coagulation/flocculation: neutralization of charge by adding electrolyte — particles aggregate and settle. Hardy-Schulze rule: ion with opposite charge and higher valency is more effective (Al³⁺ > Ba²⁺ > Na⁺ for negative sols)."
      },
      {
        title: "Emulsions — Colloids of Liquids",
        body: "Emulsion: liquid dispersed in another immiscible liquid. Oil-in-water (O/W): oil dispersed in water — milk (butterfat in water), mayonnaise (oil in vinegar/egg), creams. Water-in-oil (W/O): water dispersed in oil — butter, margarine, cold cream. Emulsifiers stabilize emulsions by reducing interfacial tension: soaps (hydrophilic head + hydrophobic tail), detergents, proteins (casein in milk), lecithin in egg yolk, gums. HLB (hydrophilic-lipophilic balance) number: >8 forms O/W emulsion (Tween), <8 forms W/O emulsion (Span). De-emulsification: breaking emulsion by heating (cream separation), centrifugation, freezing, adding electrolyte (salting out), chemical demulsifiers. Applications: homogenized milk, cosmetics, paints, asphalt emulsions."
      },
      {
        title: "Gels — The Semi-Solid Colloids",
        body: "Gel: solid dispersed in liquid (firm, jelly-like). Lyophilic sols form gels on cooling (gelatin: hot sol → cold gel). Gel formation: chain-like molecules cross-link to form 3D network, trapping liquid. Syneresis (weeping): liquid exudes from gel on standing (curd, jelly). Thixotropy: gel↔sol reversible with agitation — paint (stir → sol, stand → gel), drilling mud, ketchup (shake → flows). Applications: gelatin (food, photographic film), agar-agar (microbiology culture medium), silica gel (desiccant — adsorbs water), ion-exchange chromatography. Hydrogels: water-swollen polymer networks — contact lenses, wound dressings, superabsorbent polymers (diapers absorb 500× their weight)."
      },
      {
        title: "Applications of Colloids — From Medicine to Industry",
        body: "Medicine: colloidal gold (diagnostic, drug delivery), silver sol (antimicrobial), milk of magnesia (Mg(OH)₂ sol — antacid), colloidal bismuth (stomach ulcer treatment), iron dextran (IV iron supplement — colloidal iron for anemia). Water purification: alum (Al₂(SO₄)₃) + lime → Al(OH)₃ coagulating sol — adsorbs and settles impurities. Sewage treatment: FeCl₃ or alum coagulates colloidal waste. Photography: AgBr in gelatin (colloidal suspension in photographic film). Rubber industry: latex (colloidal rubber in water), coagulation with acetic acid/formic acid. Paints and inks: pigments dispersed in vehicle (oil or water) with stabilizers. Food: mayonnaise (O/W emulsion), ice cream (foam — air in cream), butter (W/O), cheese, jelly, whipped cream. Purification of drinking water: coagulation with alum removes colloidal clay and bacteria."
      },
      {
        title: "Micelles and Critical Micelle Concentration",
        body: "Surfactants (surface active agents): molecules with hydrophilic head and hydrophobic tail. Soap (sodium stearate C₁₇H₃₅COONa): ionic head, long hydrocarbon tail. Below CMC: surfactant molecules exist as individual ions or molecules at surface (reduce surface tension). Above CMC: spontaneously aggregate into micelles (spherical clusters, 50-100 molecules, tails inward, heads outward in water). CMC: 10⁻⁴ to 10⁻³ M for ionic surfactants, lower for nonionic. Factors: longer hydrocarbon chain = lower CMC; added electrolyte lowers CMC (reduces repulsion between ionic heads). Micelle shape: sphere, rod, or bilayer depending on concentration and structure. Reverse micelles in nonpolar solvents: heads inward, tails outward. Applications: detergency (dissolve grease in micelle core), drug delivery, enhanced oil recovery."
      },
      {
        title: "Colloids Around Us — Everyday Examples",
        body: "Biological: blood (colloidal solution of proteins, RBCs), cytoplasm (gel of proteins/nucleic acids), milk (emulsion + colloid). Atmospheric: fog (liquid in gas), smoke (solid in gas), clouds, aerosol sprays (insecticides, deodorants). Industrial: paints (pigment + binder + solvent), printing inks, adhesives, lubricating greases (soap-thickened oil), drilling muds (bentonite clay in water). Food: mayonnaise, butter, cheese, ice cream, jelly, jam, whipped cream, mousse, chocolate. Household: cleaning products (detergents, soaps, shampoos), toothpaste (CaCO₃ + binder in water), cosmetics (creams, lotions). Geological: river deltas form when colloidal clay coagulates in salt water; soil colloids retain nutrients. Environmental: colloids transport pollutants in groundwater — need to understand their behavior for remediation."
      }
    ],
    keyPoints: [
      "Adsorption (surface) vs absorption (bulk); physisorption (weak) vs chemisorption (strong)",
      "Factors: ↑ surface area, ↑ pressure, ↑ T decreases physisorption",
      "Freundlich: x/m = kP^(1/n); Langmuir: θ = KP/(1+Kp) — monolayer, uniform surface",
      "Heterogeneous catalysis: adsorption → surface reaction → desorption (Haber, Contact)",
      "Colloids: 1-1000 nm, show Tyndall effect and Brownian motion",
      "Lyophilic: reversible, stable, needs electrolyte for coagulation",
      "Lyophobic: irreversible, unstable, needs special preparation methods",
      "Peptization: convert precipitate to colloid with electrolyte",
      "Dialysis: semipermeable membrane removes ions; electrodialysis uses electric field",
      "Electrophoresis: charged particles move to oppositely charged electrode",
      "Hardy-Schulze: higher valency ion → more effective coagulant",
      "Emulsions: O/W (milk) and W/O (butter); stabilized by emulsifiers",
      "Gels: 3D network traps liquid; thixotropy (stir → sol, rest → gel)",
      "CMC: surfactant molecules aggregate into micelles above critical concentration",
      "Applications: water purification (alum), medicine (colloidal drugs), food (mayonnaise)"
    ],
    importantQuestions: [
      "Distinguish between physisorption and chemisorption with examples.",
      "Explain Freundlich adsorption isotherm. How is it different from Langmuir?",
      "What is the role of adsorption in heterogeneous catalysis? Explain with Haber process.",
      "What are colloids? Differentiate between lyophilic and lyophobic colloids.",
      "Explain: (i) Tyndall effect (ii) Brownian motion (iii) Electrophoresis",
      "How are lyophobic colloids prepared? Describe reduction and hydrolysis methods.",
      "What are emulsions? Types, examples, and applications.",
      "Explain Hardy-Schulze rule with examples.",
      "What are micelles? Explain CMC and factors affecting it."
    ]
  },
  "nuclear-chemistry": {
    overview: "How do stars produce energy? How does a nuclear reactor work? How can we use radioactivity to diagnose disease or determine the age of ancient artifacts? Nuclear chemistry holds the answers — it deals with changes in the nucleus, not just the electron cloud.\n\nUnlike chemical reactions (energy changes ~1-10 eV per atom), nuclear reactions release millions of eV per atom. The nucleus contains protons and neutrons held together by the strong nuclear force. Unstable nuclei decay by emitting α, β, or γ radiation, transforming into different elements. The rate of decay follows first-order kinetics — half-life is characteristic of each radioisotope.\n\nNuclear fission splits heavy nuclei (²³⁵U) releasing enormous energy — used in power plants and atomic bombs. Nuclear fusion combines light nuclei (²H + ³H → ⁴He + n) — the energy source of stars and hydrogen bombs. Radioactive isotopes find applications in medicine (diagnosis and therapy), industry (tracing, gauging), agriculture (sterilization), and archaeology (carbon-14 dating).",
    concepts: [
      {
        title: "Composition of the Nucleus — Protons, Neutrons, Nuclides",
        body: "Nucleus contains protons (p⁺, charge +1, mass 1.0073 amu) and neutrons (n⁰, no charge, mass 1.0087 amu). Strong nuclear force binds them — short-range (~10⁻¹⁵ m), much stronger than electrostatic repulsion between protons. Neutrons provide 'glue' — stable nuclei have n/p ratio ~1 for light elements, increasing to ~1.5 for heavy elements (too many protons → repulsion). Nuclide: species with specific Z and A. Isotopes: same Z, different A (¹H, ²H, ³H). Isobars: same A, different Z (⁴⁰Ar, ⁴⁰K, ⁴⁰Ca). Isotones: same N, different Z (¹⁴C, ¹⁵N — both 8 neutrons). Isomers: same Z and A, different energy states (⁹⁹mTc used in medical imaging). Nuclear stability: even Z + even N most stable (magic numbers: 2, 8, 20, 28, 50, 82, 126 — closed shells)."
      },
      {
        title: "Radioactive Decay — Types and Characteristics",
        body: "Alpha (α) decay: ⁴₂He nucleus emitted. Z decreases by 2, A decreases by 4. ²³⁸U → ²³⁴Th + α. Low penetrating power (stopped by paper), high ionizing power. Beta (β⁻) decay: neutron → proton + e⁻ + ν̄ₑ (antineutrino). Z increases by 1, A unchanged. ¹⁴C → ¹⁴N + β⁻ + ν̄ₑ. Moderate penetrating power (stopped by Al sheet). Positron (β⁺) decay: proton → neutron + e⁺ + νₑ (neutrino). Z decreases by 1. Electron capture: nucleus captures inner orbital e⁻, p + e⁻ → n + νₑ. Gamma (γ) decay: excited nucleus emits high-energy photon (no change in Z or A). High penetrating power (needs thick Pb or concrete). Internal conversion: nucleus transfers energy to orbital e⁻ which is ejected. Cherenkov radiation: blue glow from high-speed charged particles in water (nuclear reactors)."
      },
      {
        title: "Radioactive Decay Series — Transforming One Element to Another",
        body: "Heavy radioactive nuclei (Z > 82) decay through series of α and β emissions until reaching stable Pb. Uranium series (4n+2): ²³⁸U (4.5×10⁹ y) → ... → ²⁰⁶Pb (stable). Thorium series (4n): ²³²Th (1.4×10¹⁰ y) → ... → ²⁰⁸Pb. Actinium series (4n+3): ²³⁵U (7×10⁸ y) → ... → ²⁰⁷Pb. Neptunium series (4n+1): ²³⁷Np (2.1×10⁶ y) → ... → ²⁰⁹Bi (stable). All series stepwise transform elements: ²³⁸U → ²³⁴Th (α) → ²³⁴Pa (β⁻) → ²³⁴U (β⁻) → ²³⁰Th (α) → ... Radioactive equilibrium: in closed system, each intermediate achieves constant activity (secular equilibrium: half-life of parent >> daughter, e.g., ²²⁶Ra → ²²²Rn). Radioactive dating: measure ratio of parent to daughter isotopes."
      },
      {
        title: "Kinetics of Radioactive Decay — Half-Life and Activity",
        body: "Radioactive decay follows first-order kinetics: rate = -dN/dt = λN, where λ is decay constant. Integrated: N = N₀e⁻λᵗ. Half-life: t₁/₂ = ln2/λ = 0.693/λ. Average lifetime: τ = 1/λ = 1.44×t₁/₂. Activity: A = λN (becquerel = 1 decay/s, curie = 3.7×10¹⁰ Bq). Units: 1 Bq = 1 s⁻¹, 1 Ci = 3.7×10¹⁰ Bq. For multiple isotopes: total activity = ΣA_i. Carbon-14 dating: t₁/₂ = 5730 y. Living organisms have constant ¹⁴C/¹²C ratio (from cosmic rays). After death, ¹⁴C decays — measure remaining activity → time since death. A wood sample with 25% of original ¹⁴C → age = 2 × t₁/₂ = 11,460 years."
      },
      {
        title: "Nuclear Reactions — Bombardment and Transmutation",
        body: "Artificial transmutation: stable nucleus bombarded with particles → new nucleus. ¹⁴N + α → ¹⁷O + p (Rutherford, 1919 — first artificial transmutation). ⁹Be + α → ¹²C + n (Chadwick, 1932 — discovered neutron). Projectiles: α particles, protons, deuterons (²H), neutrons. Neutrons are ideal (no charge, not repelled by nucleus) — thermal neutrons (slow, ~0.025 eV at 25°C) easily captured. Nuclear equations: balance Z and A. ²⁷Al + n → ²⁴Na + α. ²³⁸U + n → ²³⁹U → ²³⁹Np + β⁻ → ²³⁹Pu + β⁻ (transuranium elements). Superheavy elements: Z=93 (Np) to Z=118 (Og) made by bombardment. Particle accelerators (cyclotron, synchrotron): accelerate charged particles to high energy to overcome nuclear repulsion."
      },
      {
        title: "Nuclear Fission — Splitting the Atom",
        body: "Hahn and Strassmann (1938): ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + energy (~200 MeV per fission). Chain reaction: each fission produces neutrons that cause more fissions. Critical mass: minimum mass for self-sustaining chain reaction. Neutron moderation: slow neutrons more effective for ²³⁵U fission — use water, graphite, heavy water (²H₂O) to slow neutrons. Control rods (Cd, B): absorb excess neutrons to control reaction rate. Nuclear reactor: fuel (³.⁵% ²³⁵U in ²³⁸U), moderator, control rods, coolant, shielding. Pressurized water reactor (PWR): water as moderator and coolant, high pressure prevents boiling. Boiling water reactor (BWR): steam drives turbine directly. Breeder reactor: ²³⁸U + fast n → ²³⁹U → ²³⁹Pu (fissionable) — produces more fuel than it consumes."
      },
      {
        title: "Nuclear Fusion — Power of the Stars",
        body: "Light nuclei combine to form heavier: ²H + ³H → ⁴He + n + 17.6 MeV. Requires extremely high T (~10⁸ K) to overcome Coulomb barrier — only in stars or hydrogen bombs. Sun: proton-proton cycle — 4¹H → ⁴He + 2e⁺ + 2νₑ + 26.7 MeV. Tokamak: magnetic confinement fusion — D-T plasma at 150 million °C. ITER: international fusion reactor under construction in France — aims for 500 MW fusion power. Challenges: plasma instability, materials for 10⁸ K, tritium breeding (from Li + n). Fusion vs fission: no chain reaction (inherently safe), more energy per gram, less radioactive waste (only short-lived activation products), abundant fuel (H from water). Fusion is the holy grail of clean energy."
      },
      {
        title: "Applications of Radioactivity — Medicine and Industry",
        body: "Medical diagnosis: ⁹⁹mTc (γ-emitter, t₁/₂=6 h) — most used medical radioisotope (80% of all nuclear medicine scans). Imaging: gamma camera detects γ rays from injected Tc compound. ¹¹¹In, ¹²³I, ²⁰¹Tl for specific organ imaging. PET scans: ¹⁸F-FDG (fluorodeoxyglucose) — tracer accumulates in metabolically active tissues (cancers, brain). Medical therapy: ⁶⁰Co (γ, t₁/₂=5.3 y) — cancer radiotherapy (teletherapy). ¹³¹I (β⁻, t₁₂=8 d) — thyroid cancer treatment (concentrates in thyroid, destroys tissue). ¹²⁵I seeds: brachytherapy for prostate cancer. Industry: thickness gauging (β source measures paper/steel thickness), level detection, radiography (check welds for defects — ¹⁹²Ir, ⁶⁰Co). Tracer studies: leak detection, flow measurement, mixing studies, wear analysis. Food irradiation: ⁶⁰Co γ rays kill bacteria, insects — extends shelf life (potatoes, onions, spices, meat). Sterilization: medical equipment (syringes, surgical gloves) sterilized by γ radiation."
      },
      {
        title: "Carbon-14 Dating and Archaeological Applications",
        body: "Cosmic rays produce ¹⁴C in upper atmosphere: ¹⁴N + n → ¹⁴C + p. ¹⁴C combines with O₂ → ¹⁴CO₂, incorporated into plants (photosynthesis), then animals (food chain). Living organisms maintain constant ¹⁴C/¹²C ratio (= 1.3×10⁻¹²). After death, ¹⁴C decays (t₁/₂ = 5730 y) without replenishment. Age = -(t₁/₂/0.693) × ln(A/A₀). A₀ = activity when alive (15.3 disintegrations/min/g C). Limitations: effective up to ~50,000 years (after that too little ¹⁴C remains). Calibration needed (production rate varies with solar activity — calibration curves from tree rings used). Accelerator mass spectrometry (AMS): counts individual ¹⁴C atoms directly — needs only mg samples instead of grams. Other cosmogenic isotopes: ¹⁰Be (t₁/₂ = 1.5×10⁶ y) — dating of geological formations; ³⁶Cl — dating of groundwater; ²⁶Al — exposure dating of rocks."
      },
      {
        title: "Biological Effects of Radiation",
        body: "Ionizing radiation damages DNA — can cause cell death, mutation, or cancer. Acute effects: high dose (>1 Sv) in short time — radiation sickness (nausea, hair loss, bone marrow damage). LD₅₀/₃₀: ~4 Sv (50% die within 30 days). Chronic effects: low doses over long time — increased cancer risk (stochastic). Sources: natural (radon gas from soil ~50% of background, cosmic rays, terrestrial ⁴⁰K, internal from food), artificial (medical X-rays/CT scans ~15%, nuclear fallout ~0.3%). Radon: second leading cause of lung cancer (after smoking). Dose units: gray (Gy = J/kg absorbed), sievert (Sv = Gy × quality factor — accounts for biological effect). α: QF=20 (most damaging internally), β: QF=1, γ: QF=1. Protection: time (minimize exposure), distance (inverse square law), shielding (α: paper, β: plastic/Al, γ: Pb/concrete)."
      },
      {
        title: "Safety of Nuclear Reactors and Waste Disposal",
        body: "Nuclear reactor accidents: Chernobyl (1986, RBMK reactor, design flaw + operator error → steam explosion and graphite fire, widespread ¹³¹I/¹³⁷Cs contamination, 30 immediate deaths, increased thyroid cancers). Three Mile Island (1979, partial meltdown, no casualties). Fukushima (2011, earthquake/tsunami led to cooling failure, hydrogen explosions, radioactive water release). Modern safety: multiple barriers (fuel pellets → cladding → pressure vessel → containment building), passive safety systems (gravity-driven cooling), negative temperature coefficient (natural feedback shuts down). Waste disposal: low-level (contaminated clothing, tools — shallow burial), intermediate-level (resins, filters — engineered storage), high-level (spent fuel — vitrified in glass, stored in deep geological repositories). Finland's Onkalo: first permanent HLW repository, 450 m deep in granite, designed for 100,000 years. Reprocessing: extract ²³⁹Pu and unused ²³⁵U from spent fuel."
      },
      {
        title: "Applications of Radioactive Isotopes as Tracers",
        body: "Tracers: chemically identical radioactive isotope added to system, detected by radiation. Chemical: reaction mechanisms — ¹⁴C labeling follows carbon atoms through metabolic pathways (Calvin cycle in photosynthesis). Medical: ⁵⁹Fe follows iron absorption and utilization (anemia diagnosis), ⁵¹Cr labels RBCs for blood volume studies. Agricultural: ³²P in fertilizers traces phosphate uptake by plants — optimize fertilizer application (less runoff, more efficient). ¹⁴C-labeled pesticides: track degradation in environment. Industrial: ¹⁹²Ir traces flow in pipelines — detect leaks, blockages, flow rates (inject at one point, detect downstream). ⁸²Br: leachate monitoring in landfills. ²⁴Na: detect leaks in underground water pipes (inject ²⁴NaHCO₃ solution, monitor with Geiger counter). Autoradiography: photographic film exposed by radiation from labeled sample — locates labeled compounds in TLC, gels (Western blot), tissue sections."
      }
    ],
    keyPoints: [
      "Nucleus: p⁺ + n⁰; strong nuclear force; n/p ratio determines stability",
      "Radioactive decay: α (⁴He), β⁻ (e⁻ + ν̄ₑ), β⁺ (e⁺ + νₑ), γ (high-energy photon)",
      "Decay series: U (4n+2), Th (4n), Ac (4n+3), Np (4n+1) → stable Pb or Bi",
      "First-order kinetics: N = N₀e⁻λᵗ; t₁/₂ = 0.693/λ; A = λN",
      "Activity: Bq = 1 decay/s; Ci = 3.7×10¹⁰ Bq",
      "Transmutation: nucleus + projectile (α, p, d, n) → new nucleus",
      "Fission: ²³⁵U + n → fragments + n + energy; chain reaction needs critical mass",
      "Fusion: ²H + ³H → ⁴He + n + 17.6 MeV; requires 10⁸ K",
      "Nuclear reactor: fuel + moderator + control rods + coolant + shielding",
      "Breeder reactor: ²³⁸U → ²³⁹Pu — produces more fuel than consumed",
      "¹⁴C dating: t₁/₂=5730 y, effective up to ~50,000 years",
      "Medical: ⁹⁹mTc (imaging), ¹³¹I (thyroid therapy), ⁶⁰Co (radiotherapy)",
      "Radiation dose: Gy (absorbed), Sv (biological effect); α most damaging internally",
      "Protection: time, distance, shielding (α: paper, β: plastic, γ: Pb)",
      "Tracers: ¹⁴C, ³²P, ⁵⁹Fe, ¹⁹²Ir — follow through chemical/biological/industrial systems"
    ],
    importantQuestions: [
      "Complete nuclear equations: ²³⁸U (α decay), ¹⁴C (β⁻ decay), ²²Na (β⁺ decay).",
      "Calculate half-life if 75% of sample decays in 40 days. Also find decay constant.",
      "A ¹⁴C sample has 12 disintegrations/min/g C. Living organisms give 15.3. Find age (t₁/₂=5730 y).",
      "Explain nuclear fission with ²³⁵U. What is chain reaction and critical mass?",
      "Differentiate between nuclear fission and fusion with examples.",
      "Describe construction and working of a nuclear reactor.",
      "How is radioactivity used in medicine? Explain with ⁹⁹mTc and ¹³¹I.",
      "What are biological effects of radiation? Explain units and protection methods.",
      "Explain carbon-14 dating — principle, procedure, and limitations."
    ]
  },
  "organic-principles": {
    overview: "This chapter weaves together the fundamental principles that govern organic reactions — how electrons move, why certain products form, and how to predict reaction outcomes. The principles of organic chemistry, purification, and analysis covered earlier come together here into a cohesive picture.\n\nReaction mechanisms are the core — SN1, SN2, E1, E2 — and the factors that determine which pathway dominates: substrate structure, nucleophile strength, leaving group ability, and solvent. Carbocation rearrangements, neighboring group participation, and the influence of electronic effects (inductive, resonance, hyperconjugation) all shape reaction outcomes.\n\nSpectroscopy (IR, NMR, UV-Vis, MS) confirms structures. Chromatography (TLC, column, GC, HPLC) separates and purifies. The entire field rests on these principles — whether you're synthesizing a drug, analyzing a pollutant, or designing a new polymer, you're applying the same core concepts that make organic chemistry the central science.",
    concepts: [
      {
        title: "Nucleophiles and Electrophiles — The Reactive Players",
        body: "Nucleophiles ('nucleus-loving'): electron-rich species that donate a pair of electrons. Neutral: NH₃, H₂O, ROH, RSH. Anionic: OH⁻, CN⁻, RO⁻, X⁻. Strength (nucleophilicity) depends on: charge (⁻ > neutral), size (I⁻ > Cl⁻ in polar aprotic solvents), basicity (stronger base = stronger nucleophile), polarizability (bigger atoms more polarizable), solvent (protic solvents solvate small anions). Electrophiles ('electron-loving'): electron-deficient species that accept electrons. Positive: H⁺, NO₂⁺, R₃C⁺, acyl cation. Neutral: BF₃, AlCl₃, C=O, SO₃. Both react in polar reactions — nucleophile attacks electrophile. The arrow shows electron movement from Nu: to E⁺."
      },
      {
        title: "Leaving Groups — The Departing Guest",
        body: "Good leaving group (LG) stabilizes negative charge after leaving. Best: weak bases (stable anions). Excellent: OTf (triflate), OTs (tosylate), OMs (mesylate), I⁻, Br⁻. Good: Cl⁻, H₂O (after protonation). Poor: OH⁻, NH₂⁻, OR⁻, H⁻. Leaving group ability correlates with conjugate base stability: HI > HBr > HCl > HF (I⁻ best, F⁻ worst). Making poor LG better: protonation of OH (ROH₂⁺ loses H₂O — easy). Tosylate: ROH + TsCl/pyridine → ROTs — excellent LG. In SN2: stronger base = worse LG. In SN1: LG must leave to form carbocation — rate depends on LG ability. Sulfonate esters (OTs, OMs, OTf) are excellent leaving groups because their conjugate acids are very strong (OTf = triflic acid CF₃SO₃H, pKa ~ -14)."
      },
      {
        title: "Solvents and Their Effects on Reactions",
        body: "Protic solvents (H₂O, ROH, RCOOH): have O-H or N-H bonds, can H-bond to nucleophiles. Solvate small anions strongly → reduce nucleophilicity (I⁻ barely solvated, Cl⁻ strongly solvated). In protic solvents: I⁻ > Br⁻ > Cl⁻ > F⁻ (nucleophilicity order reversed from basicity). Aprotic solvents: no O-H/N-H bonds. Polar aprotic (DMSO, DMF, CH₃CN, HMPA, THF, acetone): dissolve ions without solvating anions — anions are 'naked' and highly reactive. SN2 rates increase dramatically in polar aprotic solvents (up to 10⁶× faster than in protic). Nonpolar aprotic (hexane, benzene, CCl₄): dissolve nonpolar compounds — poor ion solvation. Solvent polarity affects reaction rates and product distributions. For SN1: polar protic solvents stabilize carbocation intermediate (more polar = faster). For SN2: polar aprotic solvents give fastest rates."
      },
      {
        title: "SN2 Reactions — One Step, Backside Attack",
        body: "Bimolecular nucleophilic substitution: concerted mechanism (bond breaking and forming simultaneously). Rate = k[RX][Nu⁻] — second order. Inversion of configuration (Walden inversion — stereospecific, like umbrella turning inside out). Backside attack: nucleophile approaches from opposite side of LG → inversion at chiral center. Reactivity: CH₃X > 1° > 2° >> 3° (methyl most reactive, 3° doesn't undergo SN2 — steric hindrance blocks backside approach). Factors: strong nucleophile favors SN2, polar aprotic solvent, good LG. 100% inversion of configuration — complete stereospecificity. Examples: CH₃Br + OH⁻ → CH₃OH + Br⁻; Williamson ether synthesis: RONa + R'X → ROR' + NaX."
      },
      {
        title: "SN1 Reactions — Two Steps, Carbocation Intermediate",
        body: "Unimolecular nucleophilic substitution: two-step mechanism. Step 1 (slow, rate-determining): LG leaves → carbocation. Step 2 (fast): Nu attacks carbocation. Rate = k[RX] — first order (depends only on substrate). Carbocation stability: 3° > 2° > 1° > CH₃⁺ (more stable = faster SN1). Racemization: carbocation is planar sp² — Nu can attack from either face → racemic mixture (loss of optical activity). Rearrangements possible: hydride shift (H⁻ migrates), methyl shift, ring expansion — forms more stable carbocation. Wagner-Meerwein rearrangement: 1,2-shift. Best for: 3° alkyl halides, allylic/benzylic halides. Factors: good LG (leaves on its own), polar protic solvent (stabilizes carbocation), weak nucleophile (doesn't force SN2). Neighboring group participation (NGP): nearby nucleophilic group assists LG departure → retention of configuration."
      },
      {
        title: "Elimination Reactions — E1 and E2",
        body: "E2 (bimolecular elimination): one step — base removes β-H while LG leaves (concerted anti-periplanar). Rate = k[RX][base]. Requires strong base (OH⁻, RO⁻, NH₂⁻). Zaitsev (Saytzeff) product: more substituted alkene is major (more stable). Anti-elimination: H and LG must be anti-periplanar (180° dihedral) — stereospecific. E1 (unimolecular elimination): two steps — LG leaves → carbocation, then base removes β-H. Rate = k[RX] (first order). Weak base (H₂O, ROH). Also gives Zaitsev product. Rearrangements possible (carbocation intermediate). Competition: SN1/E1 share carbocation intermediate — more substitution favors elimination; higher T favors elimination (Ea higher for elimination). For 2° substrates: strong bulky base (t-BuOK) favors E2; weak nucleophile favors SN1/E1. Hoffman elimination: bulky base (t-BuO⁻) gives less substituted alkene (Hofmann product)."
      },
      {
        title: "Substitution vs Elimination — Predicting the Outcome",
        body: "Key factors: (1) Substrate: methyl/1° → SN2 (if strong nucleophile) or E2 (if strong base). 2° → SN2/E2 (strong Nu/base) or SN1/E1 (weak Nu/base). 3° → SN1/E1 (weak) or E2 (strong base) — no SN2. (2) Nucleophile/base: strong base + strong Nu (OH⁻, RO⁻) → SN1/E1? No — strong bases favor E2 and SN2. Strong base + poor Nu (t-BuO⁻, LDA) → E2. Weak base + good Nu (I⁻, CN⁻) → SN2. Weak base + poor Nu (H₂O, ROH) → SN1/E1. (3) Temperature: higher T favors elimination (more ordered transition state). (4) Solvent: polar aprotic favors SN2/E2; polar protic favors SN1/E1. (5) Leaving group: better LG = faster reactions. Summary: methyl → SN2; 1° → SN2/E2; 2° → competition; 3° → E2 (strong base) or SN1/E1 (weak)."
      },
      {
        title: "Reactions of Alcohols — Substitution and Elimination",
        body: "Alcohols are poor substrates for direct SN2 (OH⁻ is bad LG). Convert OH to better LG first: protonation: ROH + H⁺ → ROH₂⁺ (H₂O leaves easily). SN1: 3° alcohols with HX → 3° RX (via carbocation — rearrangements possible). SN2: 1° alcohols — SOCl₂ or PBr₃ in pyridine → 1° RX (inversion). Lucas test: distinguish 1°/2°/3° alcohols. ZnCl₂ + conc. HCl: 3° → immediate cloudiness (RX insoluble), 2° → 5 min, 1° → no reaction at room T. Dehydration to alkenes (E1): conc. H₂SO₄ or H₃PO₄, heat. 3° easiest (~50°C), 2° (~100°C), 1° (~180°C). Follows Zaitsev rule — most substituted alkene major. Pinacol rearrangement: 1,2-diol with acid → ketone/aldehyde (carbocation rearrangement). Oxidation: 1° → aldehyde (PCC, mild) → carboxylic acid (CrO₃/H₂SO₄, strong). 2° → ketone. 3°: no oxidation (no α-H)."
      },
      {
        title: "Electrophilic Addition to Alkenes — Regiochemistry",
        body: "Markovnikov's rule: H⁺ adds to less substituted carbon (more H already) → more stable carbocation. Hydrohalogenation (HX): CH₃CH=CH₂ + HBr → 2-bromopropane (major, via 2° carbocation) + 1-bromopropane (minor, via 1° carbocation). Anti-Markovnikov: HBr with peroxides (ROOR) → free radical mechanism → 1-bromopropane (major). Hydration: H₂O/H⁺ → Markovnikov alcohol. Oxymercuration: Hg(OAc)₂/H₂O then NaBH₄ → Markovnikov alcohol, no rearrangement (no carbocation intermediate). Hydroboration: BH₃/THF then H₂O₂/OH⁻ → anti-Markovnikov alcohol (syn addition, no rearrangement). Carbocation stability: 3° > 2° > 1°. Rearrangements: if a more stable carbocation can form via hydride/methyl shift, it will. Carbocation rearrangements: Wagner-Meerwein (alkyl shift) and hydride shifts following the trend of 1,2-shifts."
      },
      {
        title: "Electrophilic Aromatic Substitution — Fine-Tuning the Ring",
        body: "Mechanism: electrophile generation (NO₂⁺ from HNO₃/H₂SO₄), π-complex formation, σ-complex (arenium ion, resonance-stabilized carbocation, slow step), deprotonation (fast, restores aromaticity). Substituent effects: activating (EDG): -OH, -NH₂, -OCH₃, -CH₃ — donate electrons, increase reaction rate, ortho/para directing. Deactivating (EWG): -NO₂, -CN, -CHO, -COOH, -CF₃ — withdraw electrons, decrease rate, meta directing. Halogens: deactivate ring (-I effect) but ortho/para direct (+R effect from lone pairs). Synthesis strategy: order of introducing groups matters. To get para-nitrotoluene: methylate first (directs ortho/para), then nitrate. For meta: use blocking group or already have meta-directing group. Nitration: 1-5 min, room T for benzene (need H₂SO₄). Toluene reacts faster. Nitrobenzene reacts slower (need fuming H₂SO₄, higher T)."
      },
      {
        title: "Molecules with Chirality — Optical Activity",
        body: "Chiral center (stereocenter): carbon with four different substituents. Two non-superimposable mirror images = enantiomers. (+) and (-): rotate plane-polarized light in opposite directions (dextrorotatory and levorotatory). Racemic mixture (d,l or ±): 1:1 mixture of enantiomers — no net optical rotation. Specific rotation: [α] = observed rotation / (path length × concentration). Resolution of racemic mixtures: (1) form diastereomeric salts with chiral resolving agent (tartaric acid, α-phenylethylamine), separate by fractional crystallization. (2) Chiral chromatography (chiral stationary phase). (3) Kinetic resolution: one enantiomer reacts faster with chiral catalyst/enzyme. Chiral drugs: often only one enantiomer is active (thalidomide tragedy — R enantiomer sedative, S enantiomer teratogenic). Enzymes and receptors are chiral — recognize specific enantiomers. R/S nomenclature (Cahn-Ingold-Prelog rules): assign priority by atomic number, orient lowest priority away, check direction of 1→2→3."
      },
      {
        title: "Chemistry of Carbonyl Compounds — C=O Reactivity",
        body: "Carbonyl carbon (C=O) is electrophilic (δ+ due to O electronegativity, resonance form puts + on C). Nucleophilic addition: Nu attacks C=O → tetrahedral intermediate. Aldehydes more reactive than ketones (less steric hindrance, less electronic stabilization of carbonyl). Hydration: RCHO + H₂O ⇌ RCH(OH)₂ (gem-diol). Formation of cyanohydrin: RCHO + HCN → RCH(OH)CN (useful for carbon chain extension). Acetal formation: RCHO + 2ROH/H⁺ → RCH(OR)₂ + H₂O (protection of aldehydes). Imine (Schiff base): RCHO + R'NH₂ → RCH=NR' + H₂O. Wittig reaction: RCHO + Ph₃P=CHR' → RCH=CHR' + Ph₃P=O — alkene synthesis (geometry: Z or E depends on conditions). Aldol condensation: two carbonyl compounds with α-H → β-hydroxy carbonyl. Enolate chemistry: carbonyl compounds with α-H are weakly acidic (pKa ~20) — deprotonated by strong base (LDA, NaH) to form enolate, which acts as nucleophile. Cannizzaro reaction: aldehydes without α-H (HCHO, PhCHO) — disproportionation with conc. base → alcohol + carboxylic acid."
      },
      {
        title: "Carboxylic Acids and Derivatives",
        body: "Acidity: RCOOH (pKa ~4-5). Inductive effect: electron-withdrawing groups increase acidity (Cl₃CCOOH pKa 0.66 < Cl₂CHCOOH 1.29 < ClCH₂COOH 2.86 < CH₃COOH 4.76). Resonance: carboxylate anion (RCOO⁻) is stabilized by resonance (charge delocalized over two O). Nucleophilic acyl substitution: Nu attacks C=O → tetrahedral intermediate → LG (often Cl⁻, OR⁻, or NR₂) leaves → carbonyl reformed. Acid chlorides (RCOCl): most reactive — from RCOOH + SOCl₂ or PCl₅. Esters (RCOOR'): from RCOOH + R'OH/H⁺ (Fischer esterification), reversible. Amides (RCONR'₂): from RCOCl + R'NH₂. Anhydrides (RCOOOCR'): from RCOOH + R'COCl. Reduction: LiAlH₄ (powerful) → RCH₂OH; NaBH₄ (selective, reduces only aldehyde/ketone). Fisher esterification: equilibrium with H₂O removal shifts right. Transesterification: RCOOR' + R''OH ⇌ RCOOR'' + R'OH (catalyzed by acid or base)."
      },
      {
        title: "Spectroscopic Identification of Organic Compounds",
        body: "Spectroscopy puzzle: combine IR, NMR, MS data to identify unknown. Strategy: (1) MS: molecular ion peak M⁺ gives molecular mass (and confirms M if [M+H]⁺ for soft ionization). Isotope peaks (Cl: M+2 at 32% of M, Br: M+2 equal to M). (2) Unsaturation number (index of H deficiency): Ω = (2C + 2 + N - H - X)/2 — gives number of rings + π bonds. (3) IR: functional groups — ketone C=O ~1715 cm⁻¹, alcohol O-H ~3300 cm⁻¹ (broad), amine N-H ~3300 cm⁻¹ (two peaks for 1°), aromatic ~3020 and 1600-1450 cm⁻¹, nitrile ~2250 cm⁻¹. (4) ¹H NMR: chemical shifts (0.9 CH₃, 1.2-1.4 CH₂, 2.1 CH₃-C=O, 3.7 CH₂-O, 4-5 alkene, 7-8 aromatic, 10-12 COOH). Integration gives H count. Multiplicity (n+1 rule): singlet (0 neighbors), doublet (1), triplet (2), quartet (3), multiplet (4+). ¹³C NMR: each unique C gives separate signal (DEPT: CH₃, CH₂, CH₃ vs C quaternary). Example: ethyl acetate (CH₃COOCH₂CH₃): MS m/z 88, IR 1740 cm⁻¹ (C=O ester), ¹H NMR: δ 1.2 (t, 3H), δ 2.0 (s, 3H), δ 4.1 (q, 2H)."
      },
      {
        title: "Green Chemistry Principles",
        body: "Twelve principles of green chemistry: (1) Prevention (better than waste treatment). (2) Atom economy (maximize atoms incorporated into product). (3) Less hazardous synthesis. (4) Safer chemicals/products. (5) Safer solvents and auxiliaries (water > organic solvents). (6) Energy efficiency (room T better than high heat). (7) Renewable feedstocks (biomass > petroleum). (8) Reduce derivatives (fewer steps). (9) Catalysis (catalyst > stoichiometric reagent). (10) Design for degradation (products break down after use). (11) Real-time monitoring (prevent pollution). (12) Inherent safety. Atom economy = (FW of product / sum of FW of all reactants) × 100. Example: 100% for Diels-Alder, but only 47% for CrO₃ oxidation (byproduct waste). Catalytic hydrogenation (H₂/Pd, 100% atom economy) vs NaBH₄ reduction (byproduct borates). Microwave-assisted synthesis: reduces reaction time from hours to minutes, less energy. Biosynthesis: engineered microbes produce chemicals (artemisinin antimalarial drug) — replaces complex chemical synthesis."
      },
      {
        title: "Practical Organic Synthesis — Retrosynthetic Analysis",
        body: "Retrosynthesis: working backwards from target to simpler starting materials. Disconnection: identify bonds that can be 'disconnected' (the bonds most easily formed). Synthon: idealized fragment (often anionic or cationic). Reagent: actual chemical used to generate synthon. Protecting groups: temporarily mask reactive functional groups. Example: target = 2-butanol → disconnection at C-C bond (via Grignard): synthons: CH₃CH₂MgBr (nucleophile) + CH₃CHO (electrophile). 1,3-dicarbonyl compounds: key disconnections via Claisen condensation or Michael addition. Robison annulation: Michael addition + aldol condensation → cyclohexenone. Convergent synthesis: build fragments independently → join late (more efficient than linear). Strategic bonds: aim to form bonds whose disconnection leads to simple, available starting materials (fewer steps). Apply functional group interconversion (FGI) when needed. Modern approach: automated synthesis planning (AI-based) proposes routes."
      }
    ],
    keyPoints: [
      "Nucleophiles: electron-rich, attack electrophiles (electron-deficient)",
      "Good leaving groups: weak bases (I⁻, Br⁻, OTs, H₂O); poor: OH⁻, NH₂⁻, OR⁻",
      "Polar aprotic solvents (DMSO, DMF, CH₃CN) greatly accelerate SN2 reactions",
      "SN2: concerted, inversion, CH₃/1° > 2°, strong Nu, polar aprotic solvent",
      "SN1: carbocation intermediate, racemization, rearrangement possible, 3° > 2°",
      "E2: concerted, anti-periplanar, strong base, Zaitsev product (more substituted)",
      "E1: carbocation, weak base, rearrangement possible, Zaitsev product",
      "E2 > SN2 with bulky base (t-BuOK); SN1/E1 share carbocation intermediate",
      "Markovnikov: H⁺ adds to less substituted alkene C (stable carbocation)",
      "Anti-Markovnikov: HBr + peroxide (free radical); hydroboration (BH₃/H₂O₂)",
      "EAS: activating/ortho-para (EDG), deactivating/meta (EWG), halogens deactivate/ortho-para",
      "Chirality: four different substituents; R/S; enantiomers vs diastereomers",
      "Carbonyl: Nu addition (aldehydes > ketones); enolate chemistry",
      "Carboxylic acid pKa ~4-5; derivatives: acyl chloride > anhydride > ester > amide",
      "Spectroscopy: MS (MW), IR (functional groups), NMR (structure, connectivity)",
      "Green chemistry: atom economy, catalysis, renewable feedstocks, safer solvents",
      "Retrosynthesis: disconnect C-C bonds backward; synthons → reagents"
    ],
    importantQuestions: [
      "Predict product and mechanism: (CH₃)₃CBr + NaOH (aq, 25°C) vs (CH₃)₃CBr + NaOCH₃ (in CH₃OH, heat).",
      "Explain how solvent affects SN2 rate. Why is DMSO better than ethanol?",
      "Complete reactions: CH₃CH₂OH + conc. H₂SO₄ (170°C); CH₃CH₂Br + alc. KOH.",
      "Draw energy diagrams for SN1 and SN2. Label transition states and intermediates.",
      "An unknown C₄H₁₀O gives IR peak at 3300 cm⁻¹. ¹H NMR: δ 0.9 (t, 3H), 1.4 (sextet, 2H), 1.6 (s, 1H), 3.6 (t, 2H). Identify.",
      "Explain Markovnikov and anti-Markovnikov addition with examples.",
      "Describe electrophilic aromatic substitution mechanism. Explain directing effects of -NO₂ and -OCH₃.",
      "What is atom economy? Calculate for Diels-Alder vs CrO₃ oxidation.",
      "Explain retrosynthesis: how would you synthesize 2-butanol and butanone?"
    ]
  }
};

export default content;

