interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  genetics: {
    overview:
      "Ever wondered why you look like your parents but not exactly like them? That's genetics for you. This chapter is about how traits get passed down from generation to generation — the whole reason you have your mom's eyes but your dad's weird toe.",
    concepts: [
      {
        title: "Mendel's experiments — why peas?",
        body:
          "Mendel wasn't just randomly playing with peas. He chose them because they grow fast, have clear traits (tall vs short, green vs yellow), and you can control who mates with who. Smart guy. He crossed pure tall with pure short plants, got all tall in the first generation, then got a mix in the second. That's where the whole dominance idea comes from — tall was just bossing over short.",
      },
      {
        title: "Dominant vs recessive — the bully and the quiet kid",
        body:
          "Think of dominant alleles as the loud kid in class who always gets picked. Recessive ones only show up when the dominant one isn't around. So Tt gives you tall because T (tall) dominates t (short). But tt? That's when short finally gets its moment. Simple, right?",
      },
      {
        title: "Law of Segregation — alleles break up",
        body:
          "During gamete formation, the two alleles for a trait separate. It's like splitting a pair of socks — each gamete gets one sock, not both. That's why kids get one allele from each parent. Mendel figured this out without even knowing what DNA was. Absolute legend.",
      },
      {
        title: "Law of Independent Assortment — mix and match",
        body:
          "Genes for different traits sort independently of each other. Imagine packing two different colored shirts and two pairs of pants. How many outfit combos can you make? That's independent assortment. But heads up — this only works if the genes are on different chromosomes. If they're on the same one, linkage happens.",
      },
      {
        title: "Linkage and crossing over — when genes stick together",
        body:
          "Genes on the same chromosome travel together — that's linkage. They're like students on the same bus. But sometimes during meiosis, chromosomes swap bits (crossing over), and genes get shuffled. The closer two genes are on a chromosome, the tighter they stick. That's how we make gene maps.",
      },
      {
        title: "Sex determination — XX or XY",
        body:
          "In humans, females are XX, males are XY. The mom always gives an X, the dad gives either X or Y. So technically, dad decides the baby's sex. No pressure, dad. There's also sex-linked disorders like color blindness and hemophilia that hang out on the X chromosome — which is why guys get them more often (they only have one X to fall back on).",
      },
    ],
    keyPoints: [
      "Mendel's laws: dominance, segregation, independent assortment",
      "Monohybrid cross gives 3:1 ratio, dihybrid gives 9:3:3:1",
      "Alleles are different versions of the same gene",
      "Linkage breaks independent assortment when genes are close on same chromosome",
      "Crossing over during prophase I shuffles genes between homologous chromosomes",
      "Sex determination is XX (female) and XY (male)",
      "Test cross (cross with recessive parent) reveals unknown genotype",
      "Pedigree analysis helps trace genetic disorders in families",
    ],
    importantQuestions: [
      "Explain with a cross how Mendel arrived at the Law of Segregation.",
      "What's the difference between linkage and crossing over? How does crossing over affect linkage?",
      "A colour-blind man marries a normal woman. What are the chances their son will be colour-blind?",
      "Draw a dihybrid cross between two heterozygous parents and explain the 9:3:3:1 ratio.",
      "How does independent assortment generate genetic variation? When does it not apply?",
    ],
  },

  "gene-nature": {
    overview:
      "So DNA is basically the instruction manual for your entire body. But how does a tiny molecule in your cells decide your hair color, your height, or whether you can digest milk? This chapter breaks down what genes are made of, how they 'speak' to your cells, and how your body decides which instructions to follow.",
    concepts: [
      {
        title: "DNA structure — the twisted ladder",
        body:
          "DNA is a double helix. Imagine a spiral staircase where the rails are sugar-phosphate backbones and the steps are base pairs. A pairs with T, G pairs with C — always. That's Chargaff's rule. The two strands run opposite to each other (antiparallel), which matters a lot when replication happens.",
      },
      {
        title: "DNA replication — making a copy",
        body:
          "Before a cell divides, it needs to copy its DNA. The two strands unzip like a zipper, and each one acts as a template for a new strand. It's semi-conservative — each new DNA has one old strand and one new one. Think of it as photocopying a document but keeping the original as a reference.",
      },
      {
        title: "Transcription — DNA to RNA",
        body:
          "Your DNA stays safe in the nucleus, but work happens outside in the cytoplasm. So a messenger (mRNA) is made. Transcription is like writing down a recipe from a cookbook (DNA) onto a sticky note (mRNA). Only one strand of DNA is used as the template, and U replaces T in RNA.",
      },
      {
        title: "Translation — RNA to protein",
        body:
          "Now the mRNA goes to the ribosome (the protein factory). Every three letters (codon) codes for one amino acid. tRNA brings the right amino acids, and the ribosome stitches them together in a chain. That chain folds into a protein. You're basically a giant protein assembly line.",
      },
      {
        title: "Gene regulation — not all genes are always on",
        body:
          "Your liver cells and brain cells have the same DNA, so why are they different? Because different genes are switched on or off. In bacteria, the lac operon is the classic example — when lactose is around, the genes for digesting it turn on. When it's gone, they shut off. Efficient, right?",
      },
      {
        title: "Mutation and repair — when things go wrong",
        body:
          "Sometimes DNA gets damaged or copied wrong. That's a mutation. Some mutations do nothing (silent), some mess up the protein (missense, nonsense), and some shift everything (frameshift). Luckily, cells have repair mechanisms. But uncorrected mutations can cause cancer or genetic disorders.",
      },
    ],
    keyPoints: [
      "DNA is double helix with antiparallel strands; A-T, G-C base pairing",
      "DNA replication is semi-conservative — each new strand uses old strand as template",
      "Transcription makes mRNA from DNA template strand",
      "Translation: ribosome reads mRNA codons, tRNA brings amino acids, forms polypeptide chain",
      "Central dogma: DNA → RNA → Protein",
      "Lac operon in E. coli controls lactose metabolism genes using repressor and inducer",
      "Mutations: silent, missense, nonsense, frameshift — each affects protein differently",
      "Introns (non-coding) are spliced out of pre-mRNA; exons code for protein",
    ],
    importantQuestions: [
      "Explain the semi-conservative nature of DNA replication with a diagram.",
      "Trace the path of a gene from DNA to a functional protein (transcription + translation).",
      "What's the lac operon? How does it switch on and off based on lactose availability?",
      "Distinguish between missense, nonsense, and frameshift mutations. Which is most dangerous and why?",
      "A DNA strand has the sequence ATGCCGTA. Write the complementary strand, mRNA transcript, and the amino acid sequence using the genetic code table.",
    ],
  },

  "biotechnology-process": {
    overview:
      "Imagine being able to cut, paste, and copy genes like you edit a Word document. That's biotechnology. This chapter shows you the tools and tricks scientists use to hack DNA — restriction enzymes (molecular scissors), vectors (gene taxis), and PCR (a photocopier for DNA).",
    concepts: [
      {
        title: "Restriction enzymes — molecular scissors",
        body:
          "Bacteria have these enzymes to chop up invading virus DNA. Scientists stole the idea. Each restriction enzyme cuts DNA at a specific sequence (recognition site). Some cut straight through (blunt ends), some leave sticky overhangs. Sticky ends are great because they can stick to complementary cuts from other DNA.",
      },
      {
        title: "Vectors — the delivery guys",
        body:
          "You can't just inject a gene into a cell and hope for the best. You need a vehicle — a vector. Plasmids (small circular DNA in bacteria) are the most common. You cut the plasmid and the gene you want with the same enzyme, mix them, and DNA ligase glues them together. Now you've got recombinant DNA.",
      },
      {
        title: "PCR — making millions of copies",
        body:
          "PCR is a DNA photocopier. Take a tiny bit of DNA, add primers (short starting sequences), nucleotides, and a heat-tolerant DNA polymerase (Taq polymerase). Then cycle through heat (denature), cool (anneal primers), and warm (extend). Every cycle doubles the DNA. In an hour you can make a billion copies from one strand.",
      },
      {
        title: "Gel electrophoresis — separating DNA by size",
        body:
          "After you cut DNA with restriction enzymes, how do you see the pieces? Run them through a gel. DNA is negative, so it moves toward the positive end. Small pieces run fast, big pieces lag behind. You get a ladder of bands. It's like a race where the smallest runners finish first.",
      },
      {
        title: "DNA fingerprinting — who left this DNA?",
        body:
          "Everyone's DNA is unique (except identical twins). DNA fingerprinting uses restriction enzymes to cut DNA at specific spots, then compares the band patterns. Used in crime scenes, paternity tests, and identifying disaster victims. It's like a barcode for your genetic identity.",
      },
      {
        title: "Gene therapy — fixing broken genes",
        body:
          "Some diseases happen because a gene is defective. Gene therapy tries to fix it by inserting a working copy. The healthy gene is delivered via a vector (usually a modified virus) into the patient's cells. It sounds sci-fi, and it's still experimental, but it's already been used for SCID (bubble boy disease).",
      },
    ],
    keyPoints: [
      "Restriction enzymes cut DNA at specific palindromic sequences",
      "Sticky ends help in joining DNA from different sources",
      "Plasmids are common vectors — cut, insert gene, ligate, transform into host",
      "PCR: denaturation (94°C), annealing (50-65°C), extension (72°C) — 25-35 cycles",
      "Taq polymerase is heat-stable, from Thermus aquaticus bacteria",
      "Gel electrophoresis separates DNA fragments by size; smaller = faster",
      "DNA fingerprinting uses VNTRs (variable number tandem repeats) for identification",
      "Gene therapy delivers functional genes to correct genetic disorders",
    ],
    importantQuestions: [
      "Describe the steps involved in making recombinant DNA using a plasmid vector.",
      "Explain the three steps of PCR and why Taq polymerase is essential.",
      "How does gel electrophoresis separate DNA fragments? Why does DNA move toward the positive electrode?",
      "What are restriction enzymes? How do sticky ends and blunt ends differ?",
      "List two applications of DNA fingerprinting and explain the principle behind it.",
    ],
  },

  "food-production": {
    overview:
      "We need to feed 8 billion people. That's a lot of food. This chapter is about how we trick plants and animals into giving us more — bigger grains, fatter cows, pest-resistant crops. It's part science, part magic, and totally necessary.",
    concepts: [
      {
        title: "Plant breeding — making better crops",
        body:
          "Plant breeding is just matchmaking for plants. You pick a high-yield parent and a disease-resistant parent, cross them, and hope the kids get the best of both. Then you keep selecting the best offspring for generations until you get a stable variety. That's how we got the high-yield wheat that saved India from famine (Green Revolution).",
      },
      {
        title: "Green Revolution — the story of wheat and rice",
        body:
          "In the 1960s, India was running out of food. Then came Norman Borlaug's semi-dwarf wheat and M.S. Swaminathan's work. These new varieties had short, strong stems that could hold heavy grain heads without falling over. Plus they responded well to fertilizers. India went from begging for food to being self-sufficient. Absolute game-changer.",
      },
      {
        title: "Animal husbandry — better milk, meat, eggs",
        body:
          "We breed cows, chickens, and fish for better traits too. Crossbreeding local cows with exotic breeds (like Jersey or Holstein) gives higher milk yield. Poultry breeding gives more eggs and faster growth. And aquaculture (fish farming) is the fastest-growing food sector — we're basically farming the ocean now.",
      },
      {
        title: "Tissue culture — growing plants in a test tube",
        body:
          "You can grow an entire plant from a tiny piece of tissue — a leaf, stem, even a single cell. Put it on a nutrient medium with the right hormones, and it'll grow roots and shoots. This is how we mass-produce disease-free banana, sugarcane, and orchid plants. One piece of tissue → thousands of identical plants.",
      },
      {
        title: "Biofortification — making food healthier",
        body:
          "Regular rice is fine, but what if rice had extra iron and zinc? Or wheat had more protein? Biofortification is breeding crops with better nutrition. Golden Rice has beta-carotene (vitamin A) — it's yellow. This stuff can prevent blindness in kids who only eat rice. That's food as medicine.",
      },
    ],
    keyPoints: [
      "Plant breeding: select parents, cross them, select best progeny over generations",
      "Green Revolution used semi-dwarf wheat and rice varieties to boost yield",
      "Crossbreeding in cattle: exotic breeds × indigenous breeds for better milk",
      "Tissue culture (micropropagation) produces disease-free clones of plants",
      "Somatic hybridization fuses cells from different species to create hybrids",
      "Biofortification increases nutrient content (vitamins, minerals) in staple crops",
      "APC (Animal Husbandry) includes dairy, poultry, fisheries, beekeeping",
      "MOET (Multiple Ovulation Embryo Transfer) boosts cattle reproduction rates",
    ],
    importantQuestions: [
      "What was the Green Revolution? How did semi-dwarf varieties help India?",
      "Describe the process of plant breeding. How do you create a disease-resistant crop variety?",
      "What is tissue culture? List any two advantages of micropropagation.",
      "How is biofortification different from regular fortification? Give an example.",
      "Explain MOET and how it's used to improve cattle breeds.",
    ],
  },

  evolution: {
    overview:
      "How did we get here? No, seriously — how did a single-celled blob turn into fish, then lizards, then fluffy mammals, then you? This chapter is the story of life on Earth. It's messy, it's slow, and it involves a lot of dying. But the end result? All 8.7 million species alive today.",
    concepts: [
      {
        title: "Lamarckism — use it or lose it",
        body:
          "Lamarck thought giraffes got long necks because they kept stretching to reach high leaves, and that stretching got passed to their kids. It's kind of intuitive, but it's wrong. You don't pass on skills you learn in your lifetime. A bodybuilder's baby isn't born buff. Lamarck was a good start, but Darwin had the real answer.",
      },
      {
        title: "Darwin's natural selection — survival of the fittest",
        body:
          "Darwin noticed that organisms produce more offspring than can survive. Those with traits better suited to the environment live longer and reproduce more. The 'unfit' die out. Over millions of years, this tiny selection adds up to big changes. It's not the strongest that survive — it's the most adaptable.",
      },
      {
        title: "Evidence for evolution — the proof is everywhere",
        body:
          "Homologous organs (same structure, different function — like human arm and bat wing) show common ancestry. Vestigial organs (like your appendix or wisdom teeth) are leftovers from ancestors that didn't need them anymore. Fossils show a timeline. And DNA? We share 98% of our genes with chimpanzees. The evidence stack is ridiculous.",
      },
      {
        title: "Speciation — how one species becomes two",
        body:
          "When a population gets separated (by a river, mountain, or just distance), they stop interbreeding. Over time, they accumulate different mutations. Eventually, they're so different that even if they meet again, they can't make fertile offspring. Boom — new species. That's allopatric speciation. If it happens without physical separation, it's sympatric.",
      },
      {
        title: "Human evolution — from apes to awkward teenagers",
        body:
          "Humans didn't evolve from modern apes. We share a common ancestor with them about 6-7 million years ago. The journey went: Australopithecus (Lucy) → Homo habilis (tool user) → Homo erectus (fire master) → Neanderthals → Homo sapiens (that's us). We survived because of our big brains, social cooperation, and opposable thumbs.",
      },
      {
        title: "Hardy-Weinberg principle — when evolution DOESN'T happen",
        body:
          "This principle describes an ideal population where allele frequencies stay constant (no evolution). Conditions: huge population, random mating, no mutation, no migration, no natural selection. In real life, this never happens. But it's a useful baseline to measure how much a population is actually evolving.",
      },
    ],
    keyPoints: [
      "Lamarck wrongly believed acquired traits are inherited",
      "Darwin's natural selection: variation → overproduction → struggle for existence → survival of fittest",
      "Homologous organs = same origin, different function; analogous = different origin, similar function",
      "Vestigial organs (appendix, coccyx) are evolutionary leftovers",
      "Speciation: reproductive isolation + genetic drift + natural selection → new species",
      "Allopatric (geographic barrier) vs sympatric (no barrier) speciation",
      "Human lineage: Australopithecus → Homo habilis → Homo erectus → Homo sapiens",
      "Hardy-Weinberg equilibrium: p² + 2pq + q² = 1; conditions rarely met in nature",
    ],
    importantQuestions: [
      "How does natural selection work? Use the example of peppered moths in industrial England.",
      "Distinguish between homologous and analogous organs with one example each.",
      "What is speciation? Explain allopatric speciation with a real-world example.",
      "State the Hardy-Weinberg principle. Why can't it be perfectly applied to real populations?",
      "Trace the evolutionary history of modern humans from Australopithecus.",
    ],
  },

  "plant-water-relation": {
    overview:
      "Plants don't drink water — they pull it. From the ground, up through their stems, to the highest leaves. How? Without a heart or muscles? This chapter is about the physics wizardry plants use to move water around. It's basically plumbing, but way more impressive.",
    concepts: [
      {
        title: "Water potential — the driving force",
        body:
          "Water moves from areas of high water potential to low water potential. Think of water potential as enthusiasm for moving. Pure water has maximum enthusiasm. Add solutes (salt, sugar) and enthusiasm drops. So water flows from pure (high potential) to salty (low potential). Plants use this gradient to pull water in.",
      },
      {
        title: "Absorption of water — roots do the work",
        body:
          "Root hairs are the VIP entrance for water. They have a huge surface area and are in direct contact with soil particles. Water enters via osmosis — the root cells have more solutes than the soil, so water rushes in. From there, it travels through the cortex via apoplast (through cell walls) or symplast (through cell interiors).",
      },
      {
        title: "Ascent of sap — pulling water upward",
        body:
          "Water travels up the xylem vessels like a straw. But there's no pump at the bottom. The pull comes from the top — transpiration. As water evaporates from leaves, it creates a negative pressure that yanks water up from the roots. This is the transpiration pull-cohesion-tension theory. Water molecules stick together (cohesion), so when one gets pulled, the whole column moves.",
      },
      {
        title: "Transpiration — the necessary evil",
        body:
          "Leaves lose water through stomata as water vapor. This is transpiration. It's 'necessary' because it pulls water up and cools the plant. It's 'evil' because the plant loses precious water. Plants balance this by opening stomata during the day (when they need CO₂ for photosynthesis) and closing them at night or during drought.",
      },
      {
        title: "Stomatal mechanism — the gatekeepers",
        body:
          "Stomata are pores made of two guard cells. When guard cells take up water and become turgid, the stoma opens. When they lose water, it closes. Potassium ions flow in and out to control this. It's like a bouncer at a club — K⁺ ions let water in, the guard cells swell, the door opens.",
      },
    ],
    keyPoints: [
      "Water potential (ψ) = solute potential + pressure potential; water moves from high ψ to low ψ",
      "Root hairs absorb water by osmosis; high solute concentration in root cells drives entry",
      "Apoplast (cell walls) and symplast (cytoplasm) are two water transport pathways in roots",
      "Transpiration pull + cohesion of water molecules + adhesion to xylem walls = water rises",
      "Cohesion-tension theory explains ascent of sap in xylem",
      "Transpiration cools plants and enables mineral transport but causes water loss",
      "Stomata open when guard cells are turgid (K⁺ influx), close when flaccid (K⁺ efflux)",
      "Guttation: water loss in liquid form through hydathodes (occurs at night/high humidity)",
    ],
    importantQuestions: [
      "Explain the cohesion-tension theory of water transport in plants.",
      "What is water potential? How does it determine the direction of water movement?",
      "Describe the structure of stomata and explain how they open and close.",
      "Differentiate between apoplast and symplast pathways of water transport.",
      "Why is transpiration called a necessary evil? Explain with reasons.",
    ],
  },

  "plant-growth": {
    overview:
      "What makes a seed decide it's time to wake up and grow? How does a plant know to grow toward the sun? And what's with the whole 'roots go down, shoots go up' thing? This chapter is about plant growth — the hormones that control it, the nutrients it needs, and the weird things plants do to survive.",
    concepts: [
      {
        title: "Plant hormones — the tiny managers",
        body:
          "Auxins make plants grow toward light (phototropism) and roots grow downward (geotropism). Gibberellins make stems elongate and seeds germinate. Cytokinins promote cell division. Abscisic acid (ABA) is the stress hormone — it closes stomata during drought and puts seeds in hibernation. Ethylene ripens fruits. Five tiny chemicals running the whole show.",
      },
      {
        title: "Photoperiodism — plants have calendars too",
        body:
          "Plants measure day length to know when to flower. Short-day plants (like chrysanthemums) flower when nights are long. Long-day plants (like spinach) flower when nights are short. There's a pigment called phytochrome that senses light and darkness. It's basically the plant's internal alarm clock.",
      },
      {
        title: "Essential mineral elements — plants need food too",
        body:
          "Plants need 17 essential elements to survive. Macronutrients (C, H, O, N, P, K, Ca, Mg, S) are needed in large amounts. Micronutrients (Fe, Mn, Cu, Zn, B, Mo, Cl) are needed in trace amounts. Nitrogen deficiency shows as yellow leaves (chlorosis). Potassium deficiency gives scorched leaf edges. It's like vitamin deficiencies in humans.",
      },
      {
        title: "Nitrogen fixation — turning air into fertilizer",
        body:
          "The air is 78% nitrogen, but plants can't use that form. They need nitrogen fixed into ammonia (NH₃). Rhizobium bacteria live in root nodules of legumes and do this job for free. They get food from the plant, the plant gets nitrogen. Win-win. That's why farmers rotate crops with legumes.",
      },
      {
        title: "Seed germination — wake up, little seed",
        body:
          "A seed is a sleeping baby plant with a packed lunch. Give it water, oxygen, and the right temperature, and it wakes up. The radicle (baby root) comes out first, then the plumule (baby shoot). Some seeds germinate above ground (epigeal — like beans), some below (hypogeal — like peas).",
      },
    ],
    keyPoints: [
      "Auxin: cell elongation, phototropism, apical dominance; Gibberellin: stem elongation, seed germination",
      "Cytokinin: cell division, delays senescence; ABA: stress response, stomatal closure, seed dormancy",
      "Ethylene: fruit ripening, senescence; used artificially to ripen fruits",
      "Photoperiodism: SDP (short day) vs LDP (long day) plants; phytochrome detects light duration",
      "Essential elements: macronutrients (N, P, K, etc.) and micronutrients (Fe, Zn, Cu, etc.)",
      "Nitrogen fixation: Rhizobium in legume root nodules converts N₂ to NH₃",
      "Hydroponics: growing plants in nutrient solution without soil",
      "Seed germination requires water, oxygen, and favorable temperature",
    ],
    importantQuestions: [
      "Describe the roles of auxin, gibberellin, and cytokinin in plant growth.",
      "What is photoperiodism? Differentiate between short-day and long-day plants with examples.",
      "List the essential macronutrients and micronutrients. What happens if a plant lacks nitrogen?",
      "Explain how Rhizobium helps in nitrogen fixation. Why is the relationship mutualistic?",
      "Distinguish between epigeal and hypogeal germination with examples.",
    ],
  },

  "respiration-circulation": {
    overview:
      "Every cell in your body needs oxygen and food. Every cell also needs to get rid of waste. This chapter covers the two delivery systems — your lungs (respiration) and your heart + blood vessels (circulation). They're a team: one brings oxygen in, the other ships it everywhere.",
    concepts: [
      {
        title: "The respiratory system — your body's air handling unit",
        body:
          "Air enters through nostrils, gets filtered by hairs and mucus, passes through the pharynx, larynx (voice box), trachea (windpipe), bronchi, and finally into millions of tiny air sacs called alveoli. That's where the magic happens — O₂ goes into blood, CO₂ comes out. The alveoli have a surface area the size of a tennis court packed into your chest.",
      },
      {
        title: "Mechanism of breathing — in and out",
        body:
          "Breathing in (inhalation) is active: your diaphragm contracts and flattens, rib muscles pull ribs up and out. Volume of chest cavity increases, pressure drops, air rushes in. Exhalation is mostly passive — muscles relax, chest volume decreases, pressure pushes air out. That's negative pressure breathing.",
      },
      {
        title: "Gas exchange and transport — O₂'s journey",
        body:
          "Oxygen binds to hemoglobin in red blood cells — each hemoglobin carries 4 O₂ molecules. CO₂ is mostly carried as bicarbonate in plasma. In tissues, O₂ unloads, CO₂ loads up. In the lungs, it's the reverse. The whole system is driven by partial pressure gradients. Hemoglobin loves oxygen at high pressure (lungs) and lets go at low pressure (tissues).",
      },
      {
        title: "The heart — your personal pump",
        body:
          "Your heart has four chambers: two atria (receiving rooms) and two ventricles (pumping rooms). Right side pumps deoxygenated blood to the lungs. Left side pumps oxygenated blood to the body. The SA node (natural pacemaker) sets the rhythm. The lub-dub sound? That's the valves closing. It's been beating since before you were born — show it some respect.",
      },
      {
        title: "Blood vessels — the highway system",
        body:
          "Arteries carry blood away from the heart (thick walls, high pressure). Veins carry blood back to the heart (thin walls, valves to prevent backflow). Capillaries are tiny exchange points where nutrients and gases swap between blood and tissues. If arteries are highways, capillaries are the local streets where deliveries happen.",
      },
      {
        title: "Cardiac cycle — one heartbeat in detail",
        body:
          "One heartbeat = one cardiac cycle. Atria contract first (atrial systole), pushing blood to ventricles. Then ventricles contract (ventricular systole), pushing blood to lungs and body. Then everything relaxes (diastole) and fills up again. All this in about 0.8 seconds. Your heart does this 100,000 times a day without you ever thinking about it.",
      },
    ],
    keyPoints: [
      "Air pathway: nostrils → pharynx → larynx → trachea → bronchi → bronchioles → alveoli",
      "Alveoli are the gas exchange sites with huge surface area and thin walls",
      "Breathing: diaphragm + intercostal muscles change chest volume, creating pressure gradient",
      "Hb + O₂ → oxyhemoglobin (in lungs); O₂ released in tissues (low pO₂, high pCO₂)",
      "CO₂ transported as bicarbonate (70%), carbaminohemoglobin (20-25%), dissolved (5-10%)",
      "Heart: 4 chambers; SA node → AV node → Bundle of His → Purkinje fibers",
      "Cardiac cycle: atrial systole → ventricular systole → joint diastole (0.8 sec total)",
      "Arteries carry blood away from heart, veins return blood, capillaries exchange materials",
    ],
    importantQuestions: [
      "Trace the path of air from the nostrils to the alveoli. What happens at each step?",
      "Explain the mechanism of breathing. Why is human breathing called 'negative pressure breathing'?",
      "How is oxygen transported in the blood? What factors affect hemoglobin's affinity for O₂?",
      "Describe the structure of the human heart with a labeled diagram.",
      "What is the cardiac cycle? Explain atrial systole, ventricular systole, and diastole.",
    ],
  },

  "control-coordination": {
    overview:
      "Your body is doing a million things right now — breathing, balancing, blinking — and you're not thinking about any of it. That's because your nervous system and endocrine system handle everything behind the scenes. This chapter is about the control room (brain) and the messaging systems (nerves and hormones) that keep you alive.",
    concepts: [
      {
        title: "The neuron — your body's text message",
        body:
          "Neurons are specialized cells that transmit electrical signals. A neuron has dendrites (receivers), a cell body (processor), an axon (wire), and axon terminals (output). The signal jumps from node to node (saltatory conduction) in myelinated neurons — way faster than unmyelinated ones. It's like a game of telephone, but biological.",
      },
      {
        title: "Synaptic transmission — crossing the gap",
        body:
          "Neurons don't actually touch each other. There's a tiny gap called the synapse. When an electrical signal reaches the end of a neuron, it triggers release of neurotransmitters (chemical messengers) that float across the gap and bind to receptors on the next neuron. Then the signal continues. Some drugs work by messing with this process.",
      },
      {
        title: "The brain — the CEO",
        body:
          "Your brain has three main parts. Cerebrum (biggest part): thinking, memory, voluntary movement. Cerebellum: balance and coordination (thank this when you catch a ball). Brainstem (medulla): automatic stuff — heartbeat, breathing, digestion — the stuff you never think about. The brain uses 20% of your body's oxygen despite being 2% of your weight. Energy hog.",
      },
      {
        title: "Reflex arc — act first, think later",
        body:
          "When you touch something hot, you pull your hand back before you even feel the pain. That's a reflex. The signal goes from sensory neuron → spinal cord → motor neuron — straight back, no brain involvement. The brain gets the message a split second later as pain. This delay saves your skin from burning.",
      },
      {
        title: "Endocrine system — the slow messenger",
        body:
          "While nerves act fast (milliseconds), hormones act slow (seconds to hours) but last longer. Glands like pituitary (master gland), thyroid, adrenal, pancreas, and gonads release hormones into the blood. These chemical messengers travel everywhere but only affect cells with the right receptors. Think of hormones as spam emails — only relevant if you subscribed.",
      },
      {
        title: "Feedback mechanisms — keeping things steady",
        body:
          "Your body loves balance (homeostasis). When blood sugar goes up after eating, insulin is released to bring it down (negative feedback). When you're cold, shivering generates heat. Positive feedback is rarer — like during childbirth, oxytocin makes contractions stronger, which triggers more oxytocin. A snowball effect that ends when the baby is born.",
      },
    ],
    keyPoints: [
      "Neuron: dendrites → cell body → axon → synaptic terminals; signal travels dendrite → axon",
      "Myelinated neurons have faster saltatory conduction (signal jumps at nodes of Ranvier)",
      "Synapse: neurotransmitters released from presynaptic neuron bind to receptors on postsynaptic",
      "Brain: cerebrum (conscious), cerebellum (coordination), medulla (autonomous functions)",
      "Reflex arc: sensory neuron → spinal interneuron → motor neuron (bypasses brain for speed)",
      "Pituitary is the 'master gland' controlled by hypothalamus",
      "Hormones: steroid (lipid-soluble, cross membrane) vs peptide (water-soluble, bind surface receptors)",
      "Negative feedback maintains homeostasis; positive feedback amplifies change (childbirth, blood clotting)",
    ],
    importantQuestions: [
      "Draw and label a neuron. Explain how an impulse travels along it.",
      "What happens at a synapse? How do neurotransmitters carry the signal across?",
      "Describe the structure and functions of the cerebrum, cerebellum, and medulla oblongata.",
      "What is a reflex arc? Give an example and explain why it bypasses the brain.",
      "Distinguish between hormonal and nervous coordination. How do they complement each other?",
    ],
  },

  "health-diseases": {
    overview:
      "Your body is under constant attack — bacteria, viruses, fungi, parasites. So why aren't you sick all the time? Because you have an immune system that's essentially a secret army patrolling your body 24/7. This chapter covers how that army works, what happens when it fails, and the drugs we use when it needs backup.",
    concepts: [
      {
        title: "Types of immunity — your personal bodyguards",
        body:
          "Innate immunity is what you're born with — skin, mucus, stomach acid, inflammatory response. It's the generic bouncer at the door. Adaptive immunity is specific — it remembers the pathogen and creates targeted antibodies. That's why you only get chickenpox once. Vaccines work by teaching adaptive immunity without making you sick.",
      },
      {
        title: "Antibody structure — the Y-shaped killer",
        body:
          "Antibodies are Y-shaped proteins. The tips of the Y bind to antigens (pathogen markers). The stem of the Y signals other immune cells to come destroy the invader. There are five types (IgG, IgA, IgM, IgE, IgD), each with different jobs. IgG is the most common and hangs around in your blood for years — that's long-term memory.",
      },
      {
        title: "Common diseases — what actually makes you sick",
        body:
          "Typhoid (Salmonella) gives you prolonged fever and is spread through contaminated food. Pneumococcus causes pneumonia — lungs fill with fluid. Malaria (Plasmodium) is spread by mosquitoes and causes fever cycles. Ringworm is a fungal skin infection. Know the pathogen, the vector (if any), and the symptoms. That's what exams ask.",
      },
      {
        title: "Cancer — when cells forget to stop dividing",
        body:
          "Normal cells know when to stop dividing. Cancer cells don't — they just keep multiplying. They form tumors, invade nearby tissues, and spread (metastasis) through blood or lymph. Causes: tobacco, radiation, certain viruses (HPV), genetics. Treatment includes surgery, radiation, chemotherapy, and immunotherapy. Early detection saves lives.",
      },
      {
        title: "Drugs and addiction — the brain on substances",
        body:
          "Opioids (like heroin) bind to pain receptors and give euphoria — then addiction. Cannabinoids (marijuana) affect memory and coordination. Cocaine gives an intense high followed by a crash. Alcohol depresses the CNS. All of them mess with the brain's reward system (dopamine). Addiction isn't weakness — it's your brain rewired to crave the substance.",
      },
      {
        title: "AIDS and HIV — the immune system's worst nightmare",
        body:
          "HIV attacks helper T-cells (CD4 cells) — the generals of your immune army. Without them, your body can't fight off even minor infections. AIDS is the final stage when T-cell count drops below 200. Spread through unprotected sex, infected blood, and from mother to child. Not curable, but manageable with antiretroviral therapy (ART).",
      },
    ],
    keyPoints: [
      "Innate immunity: non-specific, present at birth (skin, mucous, phagocytes)",
      "Adaptive immunity: specific, has memory (antibodies, lymphocytes)",
      "Antibodies (immunoglobulins): IgG (most abundant), IgA (mucosa), IgM (first response), IgE (allergy), IgD (B-cell receptor)",
      "Common diseases: Typhoid (Salmonella typhi), Pneumonia (Streptococcus pneumoniae), Malaria (Plasmodium), Ringworm (fungal)",
      "Cancer: uncontrolled cell division; benign (localized) vs malignant (metastatic); carcinogens trigger mutations",
      "Addictive drugs: opioids (heroin), cannabinoids (marijuana), cocaine, alcohol — all affect dopamine pathway",
      "HIV attacks helper T-cells → AIDS; transmitted via blood, sex, mother-to-child; diagnosed by ELISA/Western blot",
      "Vaccines induce active immunity by exposing the body to weakened/inactivated pathogens",
    ],
    importantQuestions: [
      "Differentiate between innate and adaptive immunity with examples.",
      "Describe the structure of an antibody. Which class is most important for long-term immunity?",
      "Explain the life cycle of Plasmodium and why malaria causes fever cycles.",
      "How does HIV cause AIDS? Why do AIDS patients die from common infections?",
      "What are the effects of opioids and cocaine on the nervous system? Why are they addictive?",
    ],
  },

  "enhancement-food": {
    overview:
      "We already looked at basic plant breeding and animal husbandry. This chapter is the advanced stuff — test-tube plants, single-cell proteins, genetically modified crops, and fermentation. It's food production in the 21st century: faster, smarter, and sometimes a little weird.",
    concepts: [
      {
        title: "Plant tissue culture — one cell, whole forest",
        body:
          "Take a tiny piece of a plant (explant), put it on sterile nutrient medium with auxin and cytokinin, and it'll grow into a callus (a lump of undifferentiated cells). Change the hormone balance, and it'll sprout roots and shoots. Now you have a whole plant from one piece. Thousands of identical, disease-free plants in a few weeks.",
      },
      {
        title: "Single cell protein (SCP) — food from microbes",
        body:
          "You can grow microorganisms (like Spirulina algae or yeast) on waste materials and harvest them as protein-rich food. It's cheap, fast, and requires no farmland. Spirulina is 65% protein and is already sold as a health supplement. In a world running out of land, this could be a huge deal.",
      },
      {
        title: "Genetically modified crops — editing nature's code",
        body:
          "Bt cotton has a bacterial gene (cry gene from Bacillus thuringiensis) that makes a protein toxic to bollworms — so farmers need fewer pesticides. GM soybeans are herbicide-resistant. Golden Rice has beta-carotene genes. The debate: higher yields vs environmental concerns. But love it or hate it, GM crops are already everywhere.",
      },
      {
        title: "Fermentation — letting microbes do the cooking",
        body:
          "Fermentation is how we get curd (Lactobacillus), cheese, idli, dosa, bread, and alcohol. Microbes break down sugars into acids, alcohol, or gas. In large fermenters (bioreactors), we control temperature, pH, and oxygen to get maximum yield. Traditional wisdom meets industrial engineering.",
      },
      {
        title: "Biofortification — food that's actually nutritious",
        body:
          "Regular crops feed you, but biofortified crops feed you better. Breeding or engineering crops for higher protein, vitamins, or minerals. Examples: wheat with higher protein content (Atlas 66), maize with more lysine and tryptophan, orange-fleshed sweet potato with more vitamin A. No pills needed — just eat your food.",
      },
    ],
    keyPoints: [
      "Tissue culture: explant → callus → shoot/root induction → plantlet → hardening → field transfer",
      "Micropropagation produces thousands of disease-free clones rapidly",
      "SCP (Spirulina, Methylophilus) is protein-rich food grown on waste substrates",
      "Bt cotton expresses cry gene producing insecticidal protein against bollworms",
      "Golden Rice has β-carotene (pro-vitamin A) to prevent blindness in deficient populations",
      "Fermentation: microbes convert sugars to desired products (curd, cheese, bread, alcohol)",
      "Bioreactors: large vessels for mass culture of microorganisms under controlled conditions",
      "Biofortified crops: higher protein, vitamins, or minerals through breeding or genetic modification",
    ],
    importantQuestions: [
      "Describe the process of plant tissue culture. Why is it useful for crop improvement?",
      "What is single cell protein? Give an example and explain its potential benefits.",
      "How is Bt cotton different from regular cotton? What advantage does it give farmers?",
      "Explain the role of microbes in fermentation. Name two food products made by fermentation.",
      "What is biofortification? How is golden rice an example of biofortification?",
    ],
  },

  biotechnology: {
    overview:
      "If regular biology is understanding nature, biotechnology is hacking it. We're talking transgenic animals (pigs with human genes), gene therapy (fixing broken DNA), RNA interference (silencing bad genes), and the ethical firestorm around all of it. This is biology's wild side.",
    concepts: [
      {
        title: "Transgenic animals — animals with borrowed genes",
        body:
          "Animals that have a foreign gene deliberately inserted into their genome are transgenic. Rosie the cow produced human protein in her milk. Mice with human genes are used to study diseases. Goats that spin spider silk protein in their milk. It's like giving animals a side job making drugs or materials for us.",
      },
      {
        title: "Gene therapy — fixing the unfixable",
        body:
          "Some diseases are caused by a single defective gene. Gene therapy tries to fix it. A working copy of the gene is delivered into patient cells using a vector (usually a modified virus). The first success was for SCID (severe combined immunodeficiency) — 'bubble boy' disease. It's still risky, but the potential is insane.",
      },
      {
        title: "RNA interference (RNAi) — silencing bad genes",
        body:
          "RNAi is a natural mechanism where small RNA molecules bind to specific mRNA and prevent it from being translated. It's like finding a bad recipe and hiding it before anyone can cook from it. Scientists use RNAi to silence disease-causing genes. It's also being used to make pest-resistant plants without genetic modification.",
      },
      {
        title: "Molecular diagnosis — spotting diseases early",
        body:
          "PCR can amplify tiny amounts of pathogen DNA to detect infections. ELISA uses antibodies to detect antigens or antibodies in blood. Both can find HIV, hepatitis, or genetic disorders before symptoms appear. Early detection = better treatment. These tools have revolutionized medical testing.",
      },
      {
        title: "Ethical issues — just because we can, should we?",
        body:
          "Genetic modification raises real questions. Is it okay to patent a gene? Should we edit human embryos? What about the environmental impact of GM crops? Different countries have different rules. India allows Bt cotton but not Bt brinjal. The science is powerful — and with power comes responsibility. Boards love asking about this.",
      },
    ],
    keyPoints: [
      "Transgenic animals: foreign gene inserted into genome (e.g., Rosie cow, transgenic mice for research)",
      "Gene therapy: deliver functional gene to correct genetic defect; in vivo (direct) or ex vivo (cells modified outside)",
      "SCID was the first disease successfully treated with gene therapy",
      "RNAi: dsRNA → siRNA → binds complementary mRNA → blocks translation",
      "PCR can amplify DNA from a single cell for disease detection (HIV, hepatitis, genetic disorders)",
      "ELISA: enzyme-linked immunoassay detects antigens or antibodies; used for HIV diagnosis",
      "Cry genes from Bt are used in transgenic plants (Bt cotton) for pest resistance",
      "Ethical debates: GM food safety, gene patenting, germline editing, environmental impact",
    ],
    importantQuestions: [
      "What are transgenic animals? Describe any two applications with examples.",
      "Explain the principle of gene therapy. How was it used to treat SCID?",
      "What is RNA interference? How can it be used to protect plants from pests?",
      "Compare PCR-based diagnosis with ELISA. When would you use each?",
      "Discuss any two ethical concerns related to biotechnology. What is India's position on GM crops?",
    ],
  },

  "organisms-environment": {
    overview:
      "You don't exist in a bubble. You're part of a giant web of life — eating, being eaten, breathing what trees exhale, drinking water that dinosaurs drank. This chapter zooms way out. It's about how organisms interact with each other and their environment: ecosystems, food chains, pollution, and why biodiversity matters.",
    concepts: [
      {
        title: "Ecosystem structure — who eats who",
        body:
          "An ecosystem has biotic (living) and abiotic (non-living) components. Producers (plants) make food. Consumers eat them — primary (herbivores), secondary (carnivores), tertiary (top predators). Decomposers (bacteria, fungi) break down dead stuff and recycle nutrients. Energy flows one way (sun → plant → herbivore → carnivore), but nutrients cycle.",
      },
      {
        title: "Food chains and food webs — the lunch lines",
        body:
          "A food chain shows one path of energy flow: grass → deer → tiger. But real life is messier — a deer eats many plants, a tiger eats many animals. That's a food web. At each step, only about 10% of energy passes to the next level (10% law). The rest is lost as heat. That's why top predators are rare — there's just not enough energy.",
      },
      {
        title: "Ecological pyramids — visualizing the ecosystem",
        body:
          "Pyramid of numbers: how many individuals at each level. Pyramid of biomass: how much living matter at each level. Pyramid of energy: always upright because energy decreases at each step. Some pyramids can be inverted (like a tree feeding many insects), but the energy pyramid is always upright. Always.",
      },
      {
        title: "Population interactions — it's complicated",
        body:
          "Organisms interact in different ways. Mutualism (+/+): both benefit (bee and flower). Competition (-/-): both lose (two species fighting for the same food). Predation (+/-): one eats the other. Parasitism (+/-): one benefits, the other is harmed but not immediately killed (tapeworm in humans). Commensalism (+/0): one benefits, the other doesn't care (barnacles on a whale).",
      },
      {
        title: "Pollution — the stuff we're doing to the planet",
        body:
          "Air pollution (SO₂, NO₂) causes acid rain and respiratory disease. Water pollution (industrial waste, sewage) causes eutrophication — algae bloom, then oxygen depletion, then fish die. Soil pollution (pesticides, heavy metals) gets into our food. Noise pollution stresses us out. All of it comes back to haunt us — because we're part of the ecosystem too.",
      },
      {
        title: "Biodiversity and conservation — why species matter",
        body:
          "Biodiversity = variety of life on Earth. It matters because every species plays a role. Lose bees? No pollination. Lose vultures? Rabies spreads from rotting carcasses. India has biodiversity hotspots like the Western Ghats. Conservation: national parks, sanctuaries, biosphere reserves. In situ (in the wild) vs ex situ (zoos, seed banks). Both are needed.",
      },
    ],
    keyPoints: [
      "Ecosystem = biotic (living) + abiotic (non-living) components interacting as a system",
      "10% law: only 10% of energy transfers to next trophic level; rest lost as heat",
      "Food web is more realistic than a simple food chain",
      "Ecological pyramids: numbers, biomass, energy; energy pyramid is always upright",
      "Population interactions: mutualism, competition, predation, parasitism, commensalism",
      "Eutrophication: excess nutrients → algal bloom → O₂ depletion → dead zones",
      "Biodiversity hotspots in India: Western Ghats, Eastern Himalayas, Indo-Burma",
      "Conservation: in situ (national parks, sanctuaries) and ex situ (zoos, botanical gardens, seed banks)",
    ],
    importantQuestions: [
      "Explain the structure of an ecosystem with its biotic and abiotic components.",
      "What is the 10% law of energy transfer? Why can't a food chain have more than 4-5 trophic levels?",
      "Differentiate between food chain and food web with examples.",
      "Describe any three types of population interactions with examples.",
      "What is eutrophication? How does it kill aquatic life? Suggest ways to prevent it.",
    ],
  },
};

export default content;
