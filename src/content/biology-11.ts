interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "living-world": {
    overview:
      "Ever wondered what actually makes something 'alive'? A rock vs. a plant — what's the real difference? This chapter is about that line between living and non-living. And yeah, it's trickier than you think.",
    concepts: [
      {
        title: "Characteristics of Living Organisms",
        body:
          "Living things grow, reproduce, respond to stuff around them, and have metabolism. If something doesn't check most of these boxes, it's probably not alive. A seed sitting in your pocket isn't growing — but it's still alive. A fire grows and moves — still not alive. The key is cellular organization and metabolism.",
      },
      {
        title: "Growth and Reproduction",
        body:
          "Growth in living things is internal — cells divide and get bigger from inside. Non-living things grow by accumulation (think of a crystal forming). Reproduction? That's how life keeps going. Not every living thing reproduces (mules exist), but every species as a whole does.",
      },
      {
        title: "Metabolism and Cellular Organization",
        body:
          "Every living thing has some form of metabolism — chemical reactions happening inside it. And they're all made of cells. That's the foundation. No cells? Not alive. Simple as that.",
      },
      {
        title: "Response to Stimuli and Adaptation",
        body:
          "Touch a hot pan, you pull your hand back. That's response to stimuli. Over millions of years, populations change to fit their environment — that's adaptation. It's why camels have humps and cacti have spines.",
      },
      {
        title: "Biodiversity — Why It Matters",
        body:
          "Biodiversity is just the variety of life on Earth. From bacteria in your gut to blue whales in the ocean. More biodiversity means a healthier planet. Losing species is like removing bricks from a wall — eventually, the whole thing collapses.",
      },
    ],
    keyPoints: [
      "Living things grow, reproduce, metabolize, respond to stimuli, and evolve.",
      "Growth in living things is internal; non-living things grow by adding material outside.",
      "Cells are the basic unit of life — no cells = not alive.",
      "Metabolism is the sum of all chemical reactions in an organism.",
      "Adaptation happens over generations, not in one lifetime.",
      "Biodiversity = variety of life. Higher diversity = healthier ecosystems.",
      "Reproduction isn't essential for an individual organism but is for the species.",
    ],
    importantQuestions: [
      "Differentiate between living and non-living things based on any four characteristics.",
      "What is biodiversity? Why is it important?",
      "Can a mule reproduce? Is it still considered living? Explain.",
      "Why is metabolism considered a defining feature of life?",
    ],
  },

  "systematics": {
    overview:
      "Imagine a library with millions of books but no labels. That's what studying life would be like without systematics. This chapter is about how we name, sort, and organize every living thing so we can actually make sense of them.",
    concepts: [
      {
        title: "What is Systematics?",
        body:
          "Systematics is the science of putting living things into groups based on their relationships. It's not just naming stuff — it's understanding who's related to who. Think of it like a family tree, but for all of life.",
      },
      {
        title: "Taxonomy — The Naming Game",
        body:
          "Taxonomy is the part of systematics that deals with naming organisms. You know how every phone has a brand and model? Same idea here. Humans are Homo sapiens. Dogs are Canis familiaris. The first word is the genus, the second is the species.",
      },
      {
        title: "Hierarchy of Classification",
        body:
          "It goes: Kingdom → Phylum → Class → Order → Family → Genus → Species. That's the order from biggest group to smallest. A mnemonic? 'King Philip Came Over For Good Soup.' Each rank includes everything below it.",
      },
      {
        title: "Binomial Nomenclature",
        body:
          "Carl Linnaeus gave us this system. Every species gets a two-word scientific name: Genus species. It's italicized. Genus is capitalized, species is lowercase. Humans = Homo sapiens. Mangifera indica = mango. No confusion, no matter what language you speak.",
      },
      {
        title: "Taxonomic Aids",
        body:
          "How do you actually figure out what something is? Herbariums (dried plant collections), museums, botanical gardens, and keys (flowchart-style identification tools). These are the tools taxonomists actually use in the field.",
      },
      {
        title: "Five Kingdom System",
        body:
          "Whittaker's five kingdoms: Monera (bacteria), Protista (single-celled eukaryotes), Fungi (mushrooms, molds), Plantae (plants), Animalia (animals). Viruses don't fit anywhere — they're not even considered 'alive' by most definitions.",
      },
    ],
    keyPoints: [
      "Systematics = studying diversity and relationships among organisms.",
      "Taxonomy = the branch that names and classifies organisms.",
      "Hierarchy: Kingdom → Phylum → Class → Order → Family → Genus → Species.",
      "Binomial nomenclature = Genus species (e.g., Homo sapiens).",
      "Scientific names are universal — no language barriers.",
      "Five kingdoms: Monera, Protista, Fungi, Plantae, Animalia.",
      "Viruses are not included in any kingdom — they're acellular.",
    ],
    importantQuestions: [
      "Write the levels of classification in ascending order (species to kingdom).",
      "What is binomial nomenclature? Give two examples.",
      "Explain Whittaker's five kingdom classification.",
      "Why aren't viruses placed in any of the five kingdoms?",
      "Differentiate between taxonomy and systematics.",
    ],
  },

  "kingdom-plantae": {
    overview:
      "Ever looked at moss on a wall and thought, 'is that even a plant?' Turns out, the plant kingdom is a lot bigger than just trees and flowers. From tiny algae to giant sequoias — this chapter is about who's who in the plant world.",
    concepts: [
      {
        title: "Algae — The Simple Ones",
        body:
          "Algae are the simplest plants. No roots, no stems, no leaves. They live in water. Think of pond scum. Spirogyra, Ulva, Chara — they do photosynthesis like bigger plants but have basically zero structure. Some are unicellular, some form long threads.",
      },
      {
        title: "Bryophytes — The Amphibians of Plants",
        body:
          "Mosses and liverworts. They're the plants that couldn't fully leave water behind. They need water for reproduction. No true roots — just rhizoids that hold them in place. They're small and love damp, shady spots. If plants had a teenager phase, this is it.",
      },
      {
        title: "Pteridophytes — The First Land Pioneers",
        body:
          "Ferns are the stars here. They have true roots, stems, and leaves — big upgrade from bryophytes. But they still need water for reproduction (spores, not seeds). They were the first plants to grow tall on land, millions of years ago.",
      },
      {
        title: "Gymnosperms — Naked Seeds",
        body:
          "Pine trees, deodar, cycads. The name means 'naked seeds' — their seeds aren't inside a fruit. They just sit on cones. These were the first seed-producing plants. No flowers, no fruits. Just tough, woody plants that don't mess around.",
      },
      {
        title: "Angiosperms — The Flowering Plants",
        body:
          "This is the group you're most familiar with — mango trees, roses, grass, wheat. Seeds are inside fruits. Flowers are their reproductive structures. They're split into monocots (one seed leaf) and dicots (two seed leaves). They dominate the planet today.",
      },
      {
        title: "Plant Life Cycles",
        body:
          "Plants switch between two forms: haploid (gametophyte) and diploid (sporophyte). In algae and bryophytes, the haploid stage is dominant. In gymnosperms and angiosperms, the diploid stage is dominant. Pteridophytes are somewhere in between. It's called alternation of generations — and yeah, it's a lot to wrap your head around.",
      },
    ],
    keyPoints: [
      "Algae: simplest, aquatic, no roots/stems/leaves.",
      "Bryophytes: mosses, need water, no true roots.",
      "Pteridophytes: ferns, true roots/stems/leaves, spores.",
      "Gymnosperms: naked seeds, cones, no flowers.",
      "Angiosperms: seeds inside fruits, flowers, dominant plant group.",
      "Angiosperms divided into monocots and dicots based on cotyledons.",
      "Alternation of generations: haploid gametophyte and diploid sporophyte stages alternate.",
    ],
    importantQuestions: [
      "Differentiate between gymnosperms and angiosperms.",
      "What is alternation of generations? Explain with an example.",
      "Why are bryophytes called 'amphibians of the plant kingdom'?",
      "Give the differences between monocots and dicots.",
      "What are pteridophytes? Give two examples.",
    ],
  },

  "kingdom-animalia": {
    overview:
      "From sponges that barely move to humans who build rockets — animals come in every shape possible. This chapter is basically a tour of the animal kingdom's major groups. Think of it as speed-dating each phylum.",
    concepts: [
      {
        title: "Porifera — The Sponges",
        body:
          "Sponges are the simplest animals. They literally don't move. No tissues, no organs, no mouth. They just sit there filtering water through tiny pores. They're basically a collection of cells that decided to live together.",
      },
      {
        title: "Cnidaria — Stingers",
        body:
          "Jellyfish, corals, hydras. They have tentacles with stinging cells (cnidocytes) to catch prey. They've got two body layers and a single opening that's both mouth and anus. Corals build reefs — basically underwater cities.",
      },
      {
        title: "Platyhelminthes — Flatworms",
        body:
          "Flatworms are exactly what they sound like — flat. Tapeworms and planarians. They don't have a proper body cavity or an anus. Some are free-living, some are parasites living in your intestines. Gross but fascinating.",
      },
      {
        title: "Aschelminthes — Roundworms",
        body:
          "Roundworms are like flatworms' upgrade. They have a complete digestive tract (mouth and anus, finally). Ascaris is a common example. Many are parasitic. They're tiny but can cause big problems.",
      },
      {
        title: "Annelida — Segmented Worms",
        body:
          "Earthworms, leeches. Their bodies are divided into segments — like a train. They have a proper circulatory system and a coelom (true body cavity). Darwin loved earthworms, and honestly, they're soil heroes.",
      },
      {
        title: "Arthropoda — The Biggest Group",
        body:
          "Insects, spiders, crabs, scorpions. Two-thirds of all known species are arthropods. They have joined legs, an exoskeleton (hard outer shell), and segmented bodies. Cockroaches, butterflies, ants — they're everywhere. You step on more arthropods in a day than there are people on Earth.",
      },
      {
        title: "Mollusca — The Soft Ones",
        body:
          "Snails, octopuses, clams. Soft body, often with a shell. Octopuses are crazy smart — they can solve puzzles and use tools. Snails just chill and carry their house everywhere.",
      },
      {
        title: "Echinodermata — Spiny Skinned",
        body:
          "Starfish, sea urchins, sea cucumbers. They have spiny skin and a water vascular system for movement. Starfish can regrow lost arms. They're only found in the ocean.",
      },
      {
        title: "Chordata — Us and Our Relatives",
        body:
          "Fish, amphibians, reptiles, birds, mammals. All chordates have a notochord at some stage — a flexible rod that becomes the backbone in vertebrates. Yes, you're a chordate. So is your pet dog.",
      },
    ],
    keyPoints: [
      "Porifera: sponges, porous body, no tissues.",
      "Cnidaria: stinging cells, two body layers.",
      "Platyhelminthes: flatworms, no body cavity.",
      "Aschelminthes: roundworms, complete digestive tract.",
      "Annelida: segmented worms, true coelom.",
      "Arthropoda: jointed legs, exoskeleton, largest phylum.",
      "Mollusca: soft body, muscular foot, mantle.",
      "Echinodermata: spiny skin, water vascular system, marine.",
      "Chordata: notochord, dorsal nerve cord, pharyngeal slits.",
    ],
    importantQuestions: [
      "Name the phylum to which the following belong: Starfish, Earthworm, Cockroach, Tapeworm.",
      "What are the key characteristics of arthropods?",
      "Differentiate between annelids and arthropods.",
      "Why are sponges placed in Porifera?",
      "List the characteristic features of chordates.",
    ],
  },

  "cell-structure": {
    overview:
      "Your body has around 37 trillion cells. This chapter is about what each one of those tiny units looks like inside. It's like zooming into a city — every organelle has a job, and nothing's there by accident.",
    concepts: [
      {
        title: "Cell Theory",
        body:
          "Three big ideas: (1) All living things are made of cells. (2) The cell is the basic unit of life. (3) All cells come from pre-existing cells. That's it. This theory is the foundation of all biology. Credit goes to Schleiden, Schwann, and Virchow.",
      },
      {
        title: "Prokaryotic vs. Eukaryotic Cells",
        body:
          "Prokaryotes (bacteria) have no nucleus — their DNA just floats around. Eukaryotes (plants, animals, fungi) have a proper nucleus. Think of a prokaryote as a studio apartment — everything in one room. A eukaryote is a house with separate rooms for different jobs.",
      },
      {
        title: "Cell Membrane and Cell Wall",
        body:
          "The cell membrane is a flexible outer layer that controls what goes in and out. It's selectively permeable — not everything gets through. Plant cells have an extra layer outside: the cell wall. It's rigid and gives them structure. That's why plants don't flop over.",
      },
      {
        title: "Cytoplasm and Organelles",
        body:
          "Cytoplasm is the jelly-like stuff filling the cell. Floating in it are organelles — tiny structures with specific jobs. Mitochondria make energy. Ribosomes make proteins. The ER is like the cell's factory floor. Golgi body packages things up. It's a whole economy in there.",
      },
      {
        title: "Nucleus — The Brain",
        body:
          "The nucleus is the control center. It holds DNA — the instructions for everything. It's surrounded by a nuclear membrane with pores. Inside is the nucleolus where ribosomes are made. No nucleus in prokaryotes — their DNA just hangs out in the nucleoid region.",
      },
      {
        title: "Mitochondria and Chloroplasts",
        body:
          "Mitochondria are the powerhouses — they burn glucose to make ATP (energy). Chloroplasts are found in plants and do photosynthesis. Both have their own DNA and double membranes. Scientists think they were once independent bacteria that got swallowed by bigger cells.",
      },
    ],
    keyPoints: [
      "Cell theory: all living things made of cells, cell is basic unit, cells come from cells.",
      "Prokaryotes have no nucleus; eukaryotes have a membrane-bound nucleus.",
      "Cell membrane is selectively permeable; cell wall provides structural support.",
      "Cytoplasm contains organelles — each with a specific function.",
      "Nucleus contains DNA and controls cell activities.",
      "Mitochondria produce ATP (energy); chloroplasts do photosynthesis.",
      "Ribosomes make proteins; ER modifies and transports them.",
      "Golgi body packages and ships proteins out of the cell.",
    ],
    importantQuestions: [
      "State the cell theory. Who proposed it?",
      "Differentiate between prokaryotic and eukaryotic cells.",
      "Draw a labeled diagram of a plant cell.",
      "What is the function of mitochondria? Why are they called the powerhouse of the cell?",
      "Explain the structure and function of the nucleus.",
    ],
  },

  "biomolecules": {
    overview:
      "Ever wondered what your body is actually made of? It's not just 'flesh and bones'. It's carbs, proteins, fats, and DNA — all working together. This chapter is about the molecules that make life possible. No, it's not boring chemistry. It's literally what you're made of.",
    concepts: [
      {
        title: "Carbohydrates — Fuel and Structure",
        body:
          "Carbs are sugars and their bigger cousins. Glucose is the simplest — it's what your cells burn for energy. Starch is how plants store energy. Cellulose is what plant cell walls are made of — you can't digest it, but cows can. Carbs are made of C, H, and O.",
      },
      {
        title: "Proteins — The Workers",
        body:
          "Proteins do almost everything. They're made of amino acids linked together like beads on a string. There are 20 different amino acids. Enzymes are proteins that speed up reactions. Hair, nails, muscles — all protein. Hemoglobin carries oxygen. Everything gets done by these guys.",
      },
      {
        title: "Lipids — Fats and Oils",
        body:
          "Lipids don't dissolve in water. They're for long-term energy storage and making cell membranes. Fats are made of glycerol and fatty acids. The difference between butter and oil is just saturation — saturated fats are solid at room temp, unsaturated are liquid.",
      },
      {
        title: "Nucleic Acids — DNA and RNA",
        body:
          "DNA holds your genetic blueprint. RNA helps execute it. They're made of nucleotides — each with a sugar, a phosphate, and a nitrogen base. DNA is double-stranded (the famous double helix). RNA is single-stranded. A, T, G, C — those four letters code for everything about you.",
      },
      {
        title: "Enzymes — The Catalysts",
        body:
          "Enzymes make reactions happen faster. Without them, digestion would take years. They work like a lock and key — each enzyme fits a specific molecule. They're not used up in the reaction, so they can work over and over. Temperature and pH affect how well they work.",
      },
    ],
    keyPoints: [
      "Carbohydrates: sugars and starches, source of energy, structural role.",
      "Proteins: amino acid chains, do most cellular work, enzymes are proteins.",
      "Lipids: fats and oils, energy storage, cell membrane component.",
      "Nucleic acids: DNA (genetic info) and RNA (protein synthesis).",
      "DNA is double-stranded; RNA is single-stranded.",
      "Enzymes are biological catalysts — they speed up reactions.",
      "Lock and key model: each enzyme fits a specific substrate.",
      "Enzymes are sensitive to temperature and pH.",
    ],
    importantQuestions: [
      "What are the four major types of biomolecules? Give one function of each.",
      "Differentiate between DNA and RNA.",
      "What are enzymes? Explain the lock and key model.",
      "What is the difference between saturated and unsaturated fats?",
      "Draw the structure of an amino acid.",
    ],
  },

  "cell-division": {
    overview:
      "Every second, millions of cells in your body are splitting in two. This chapter is about how that happens. Think of mitosis like making a photocopy — one cell becomes two identical cells. Meiosis is more like shuffling a deck of cards — it creates variety.",
    concepts: [
      {
        title: "Why Cells Divide",
        body:
          "Cells divide for three reasons: growth (getting bigger), repair (fixing wounds), and reproduction (making babies). A cell can't just keep getting bigger — there's a limit to how much it can handle. Dividing is more efficient than growing forever.",
      },
      {
        title: "The Cell Cycle",
        body:
          "The cell cycle is like a day in the life of a cell. Interphase is when the cell grows and copies its DNA — it's the 'preparation phase'. Then comes M phase (mitosis) where it actually divides. Most of a cell's life is spent in interphase, not dividing.",
      },
      {
        title: "Mitosis — Making Copies",
        body:
          "Mitosis produces two identical daughter cells. Phases: Prophase (DNA condenses), Metaphase (chromosomes line up), Anaphase (they split apart), Telophase (two new nuclei form). PMAT — remember it like that. This is how you grow and heal.",
      },
      {
        title: "Meiosis — Making Gametes",
        body:
          "Meiosis is for making sperm and eggs. It has two rounds of division — meiosis I and II. The result? Four cells, each with half the original DNA. When sperm meets egg, the full number is restored. This is why you're a mix of both parents.",
      },
      {
        title: "Crossing Over — Why You Look Like a Mix",
        body:
          "During meiosis I, homologous chromosomes swap pieces. This is crossing over. It's why siblings aren't identical (unless they're identical twins). It creates new combinations of genes — and that's why evolution works.",
      },
      {
        title: "Mitosis vs. Meiosis — The Cheat Sheet",
        body:
          "Mitosis: 1 division, 2 identical cells, same chromosome number. Used for growth. Meiosis: 2 divisions, 4 unique cells, half the chromosome number. Used for reproduction. Mitosis is cloning. Meiosis is mixing things up.",
      },
    ],
    keyPoints: [
      "Cell division happens for growth, repair, and reproduction.",
      "Cell cycle: Interphase (G1, S, G2) → M phase.",
      "Mitosis: PMAT — Prophase, Metaphase, Anaphase, Telophase.",
      "Mitosis produces 2 identical diploid cells.",
      "Meiosis produces 4 non-identical haploid cells.",
      "Crossing over during meiosis I increases genetic diversity.",
      "Mitosis = growth and repair; Meiosis = gamete formation.",
      "DNA replication happens during S phase of interphase.",
    ],
    importantQuestions: [
      "Differentiate between mitosis and meiosis.",
      "Write the stages of mitosis and what happens in each.",
      "What is crossing over? When does it occur?",
      "Why is meiosis called a reduction division?",
      "Explain the significance of cell division.",
    ],
  },

  "plant-tissues": {
    overview:
      "Plants don't have hearts or brains, but they still manage to live for centuries. How? It's all about their tissues. This chapter is about the different types of plant cells and how they work together to keep a plant alive.",
    concepts: [
      {
        title: "Meristematic Tissue — The Growth Zone",
        body:
          "Meristematic cells are like stem cells for plants. They keep dividing and making new cells. Found at the tips of roots and stems (apical meristem) and in rings inside stems (lateral meristem). This is why plants keep growing their whole lives — they never really stop.",
      },
      {
        title: "Permanent Tissues — When Cells Grow Up",
        body:
          "Once meristematic cells stop dividing, they become permanent tissues. They specialize. Simple permanent tissues have one cell type (parenchyma, collenchyma, sclerenchyma). Complex tissues have multiple types (xylem, phloem). It's like cells going to college and getting a job.",
      },
      {
        title: "Simple Tissues: Parenchyma, Collenchyma, Sclerenchyma",
        body:
          "Parenchyma: thin-walled, soft, does photosynthesis and storage. Think of it as the filler. Collenchyma: thicker walls, provides flexibility — like in celery stalks. Sclerenchyma: dead cells with super thick walls — they're the plant's skeleton. Hard, rigid, gives strength.",
      },
      {
        title: "Complex Tissues: Xylem and Phloem",
        body:
          "Xylem carries water and minerals from roots up to leaves. It's like a plumbing system. Xylem cells are dead when functional. Phloem carries food (sugars) from leaves to the rest of the plant. Phloem cells are alive. Xylem goes up, phloem goes everywhere.",
      },
      {
        title: "Epidermis and Protective Tissues",
        body:
          "The outer layer of leaves, stems, and roots is the epidermis. It's like the plant's skin. Leaves have a waxy cuticle to prevent water loss. Stomata are tiny pores for gas exchange. Guard cells control when they open and close — smart.",
      },
    ],
    keyPoints: [
      "Meristematic tissue: actively dividing cells at growth regions.",
      "Apical meristem: tips of roots and stems — for length growth.",
      "Lateral meristem: inside stems — for girth growth.",
      "Parenchyma: storage, photosynthesis, thin walls.",
      "Collenchyma: flexibility, thick at corners.",
      "Sclerenchyma: dead cells, thick walls, strength.",
      "Xylem: water transport (dead cells). Phloem: food transport (living cells).",
      "Epidermis: outer protective layer with cuticle and stomata.",
    ],
    importantQuestions: [
      "Differentiate between meristematic and permanent tissues.",
      "What are the differences between xylem and phloem?",
      "Explain the structure and function of stomata.",
      "Compare parenchyma, collenchyma, and sclerenchyma.",
      "What is the function of apical meristem?",
    ],
  },

  "flowering-plants": {
    overview:
      "You see plants every day, but have you really looked at one? This chapter is about the outside of flowering plants — roots, stems, leaves, and flowers. After this, you'll never look at a mango tree the same way again.",
    concepts: [
      {
        title: "The Root System",
        body:
          "Roots anchor the plant and suck up water and minerals. There are two types: taproots (one big main root, like carrots) and fibrous roots (many thin roots, like grass). Taproots go deep. Fibrous roots spread wide. Some roots store food — that's what a radish is.",
      },
      {
        title: "The Stem — The Plant's Highway",
        body:
          "The stem holds the plant up and transports stuff between roots and leaves. Nodes are where leaves attach. Internodes are the gaps in between. Stems can be modified — potatoes are underground stems (tubers), not roots. Stem tendrils help climbing plants grab stuff.",
      },
      {
        title: "The Leaf — The Food Factory",
        body:
          "Leaves do photosynthesis. A leaf has a blade (the flat part), petiole (the stalk), veins (transport), and stomata (pores). Simple leaves have one blade. Compound leaves have multiple leaflets. Leaf arrangement on the stem can be alternate, opposite, or whorled.",
      },
      {
        title: "The Flower — Nature's Marketing",
        body:
          "Flowers are for reproduction. They attract pollinators with color and smell. Parts: sepals (protective outer), petals (attract pollinators), stamens (male part — makes pollen), pistil (female part — contains ovules). A complete flower has all four. Some flowers skip parts.",
      },
      {
        title: "Inflorescence — Flowers in Groups",
        body:
          "Sometimes flowers grow alone (solitary). Sometimes they grow in clusters — that's inflorescence. A sunflower isn't one flower — it's hundreds of tiny flowers packed together. Raceme, spike, umbel — these are different types of inflorescence patterns.",
      },
      {
        title: "The Fruit and Seed",
        body:
          "After pollination, the ovary turns into a fruit and the ovules become seeds. Fruits protect seeds and help disperse them. Mangos, apples, cucumbers — all fruits (yes, cucumbers are fruits botanically). A seed contains the embryo and stored food, waiting to grow.",
      },
    ],
    keyPoints: [
      "Taproot: one main root (dicots). Fibrous: many thin roots (monocots).",
      "Stem: support and transport; nodes are leaf attachment points.",
      "Leaf: blade, petiole, veins; does photosynthesis.",
      "Simple vs compound leaves: one blade vs multiple leaflets.",
      "Complete flower: sepals, petals, stamens, pistil.",
      "Stamen = male part (anther + filament). Pistil = female part (stigma, style, ovary).",
      "Fruit = mature ovary. Seed = mature ovule.",
      "Inflorescence: how flowers are arranged on a plant.",
    ],
    importantQuestions: [
      "Draw a labeled diagram of a typical flower.",
      "Differentiate between taproot and fibrous root.",
      "What is inflorescence? Describe any three types.",
      "Explain the structure of a leaf.",
      "Why is a potato considered a stem and not a root?",
    ],
  },

  "animal-tissue": {
    overview:
      "Your body has four basic types of tissue. That's it. Just four. But from those four, we get everything — skin, bones, blood, brain. This chapter is about those building blocks and how each one is built for its job.",
    concepts: [
      {
        title: "Epithelial Tissue — The Cover-Up",
        body:
          "Epithelial tissue covers your body's surfaces — inside and out. Your skin is epithelium. So is the lining of your stomach. It protects, absorbs, and secretes. Simple epithelium is one layer thick (good for absorption like in the gut). Stratified is many layers (good for protection like on skin).",
      },
      {
        title: "Connective Tissue — The Glue",
        body:
          "Connective tissue holds everything together. Blood is connective tissue. So are bones, cartilage, and tendons. They all have cells scattered in a matrix (extracellular material). Bone is hard matrix. Blood is liquid matrix. It's the most diverse tissue type.",
      },
      {
        title: "Muscular Tissue — The Movers",
        body:
          "Three types of muscle: Skeletal (attached to bones, voluntary — you control it), Smooth (in organs like stomach, involuntary — you can't control it), Cardiac (only in heart, involuntary, never gets tired). Skeletal muscles are striated (striped). Smooth is not.",
      },
      {
        title: "Nervous Tissue — The Communication Network",
        body:
          "Nervous tissue is made of neurons and glial cells. Neurons send electrical signals. They have a cell body, dendrites (receive signals), and an axon (sends signals). Your brain, spinal cord, and nerves are all nervous tissue. It's how your body knows what's happening.",
      },
      {
        title: "Tissue Healing and Repair",
        body:
          "Different tissues heal at different rates. Epithelial tissue heals fast — that's why paper cuts stop hurting quickly. Cartilage heals slowly because it has no blood supply. Cardiac muscle doesn't heal well at all. That's why heart attacks are so dangerous.",
      },
    ],
    keyPoints: [
      "Four basic types: epithelial, connective, muscular, nervous.",
      "Epithelial: covers surfaces, protects, absorbs, secretes.",
      "Simple epithelium = one layer; stratified = multiple layers.",
      "Connective tissue: cells + matrix; includes blood, bone, cartilage.",
      "Skeletal muscle: voluntary, striated. Smooth: involuntary, non-striated. Cardiac: involuntary, striated.",
      "Neurons: cell body, dendrites, axon — send electrical impulses.",
      "Epithelial heals fastest; cardiac muscle barely heals.",
    ],
    importantQuestions: [
      "What are the four types of animal tissue? Give one function of each.",
      "Differentiate between skeletal, smooth, and cardiac muscle.",
      "Explain the structure of a neuron.",
      "Why is blood considered a connective tissue?",
      "Differentiate between simple and stratified epithelium.",
    ],
  },

  "animal-type-cockroach": {
    overview:
      "You probably hate cockroaches. But here's the thing — they're perfect for learning animal anatomy. They're big enough to see easily, and they have all the basic systems we have. Plus, they've survived for 300 million years, so they're clearly doing something right.",
    concepts: [
      {
        title: "External Morphology — What You See",
        body:
          "Cockroaches have three body parts: head, thorax, and abdomen. They have six legs (three pairs), two pairs of wings, and a pair of antennae. The exoskeleton is their hard outer shell — made of chitin. It protects them and prevents water loss.",
      },
      {
        title: "Body Systems — Digestive System",
        body:
          "The digestive system runs from mouth to anus. Food goes: mouth → esophagus → crop (storage) → gizzard (grinding) → midgut (digestion and absorption) → hindgut (water absorption) → anus. The crop is like a lunchbox. The gizzard has teeth made of chitin to grind food.",
      },
      {
        title: "Circulatory System — Open Heart",
        body:
          "Cockroaches have an open circulatory system. Blood (hemolymph) isn't confined to vessels. It just bathes the organs directly. The heart is a tube on the back with openings called ostia. It pumps hemolymph forward, and it seeps back through the body cavity.",
      },
      {
        title: "Respiratory System — Air Tubes",
        body:
          "No lungs needed. Cockroaches have a network of tubes called tracheae. Air enters through spiracles (holes on the sides) and travels directly to every cell. It's way more efficient than our system. That's why they can run so fast.",
      },
      {
        title: "Nervous System and Sense Organs",
        body:
          "They have a nerve cord running along the belly (opposite of us — ours is on the back). The brain is small but they have ganglia (nerve clusters) in each segment. Their antennae sense touch and smell. Compound eyes give them a wide field of view — they can see you coming from any direction.",
      },
      {
        title: "Reproduction — Why There's So Many",
        body:
          "Cockroaches lay eggs in a case called ootheca. A single ootheca can hold 16 eggs. Females can produce several. Nymphs hatch and look like mini adults — no caterpillar stage. They molt (shed their exoskeleton) several times before becoming adults. That's why they're everywhere.",
      },
    ],
    keyPoints: [
      "Body divided into head, thorax, abdomen. Six legs, two pairs of wings.",
      "Exoskeleton of chitin — waterproof and protective.",
      "Open circulatory system — heart pumps hemolymph into body cavity.",
      "Respiratory system: tracheae and spiracles — direct oxygen delivery.",
      "Digestive system: mouth → crop → gizzard → midgut → hindgut → anus.",
      "Nervous system: nerve cord on ventral side, ganglia in segments.",
      "Compound eyes provide wide vision; antennae sense touch/smell.",
      "Reproduction: ootheca contains eggs; nymphs develop through molting.",
    ],
    importantQuestions: [
      "Describe the digestive system of a cockroach.",
      "How does respiration occur in a cockroach?",
      "Draw a labeled diagram of the external features of a cockroach.",
      "Explain the circulatory system of a cockroach.",
      "What is an ootheca? What is its significance?",
    ],
  },

  "photosynthesis": {
    overview:
      "Plants literally turn sunlight into food. Think about that — they take sunshine, water, and air, and make sugar. We can't do that. No machine can do it as well. This chapter is about how plants pull off this crazy magic trick.",
    concepts: [
      {
        title: "What is Photosynthesis?",
        body:
          "The big equation: 6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂. Carbon dioxide + water + light energy = glucose + oxygen. It happens in chloroplasts, specifically in the thylakoid membranes (where the green chlorophyll lives). The whole process is plants turning light energy into chemical energy.",
      },
      {
        title: "Light Reaction — Catching the Sun",
        body:
          "Light reaction happens when sunlight hits chlorophyll. The energy splits water molecules (photolysis), releasing oxygen. It also creates ATP and NADPH — energy carriers. This part needs light directly. It's like charging a battery.",
      },
      {
        title: "Dark Reaction (Calvin Cycle) — Building Sugar",
        body:
          "The Calvin Cycle doesn't need light directly — but it needs the ATP and NADPH from the light reaction. It takes CO₂ from the air and fixes it into glucose. It's like using that charged battery to actually do work. The first stable product is 3-PGA (a 3-carbon compound).",
      },
      {
        title: "Factors Affecting Photosynthesis",
        body:
          "Light intensity, CO₂ concentration, temperature, and water. Too little light? Slow photosynthesis. Too much light? The plant gets stressed. At a certain point, some other factor becomes the bottleneck — that's the law of limiting factors.",
      },
      {
        title: "C3 vs. C4 Plants",
        body:
          "Most plants are C3 — they make a 3-carbon compound first. C4 plants (like maize and sugarcane) have an extra step to concentrate CO₂. C4 plants are better adapted to hot, dry conditions. They waste less water. It's like having a turbocharger.",
      },
      {
        title: "Importance of Photosynthesis",
        body:
          "Without photosynthesis, there's no food. Period. Every bite of food you eat comes from plants either directly or indirectly. And that oxygen you're breathing right now? That came from photosynthesis too. Every second, plants produce thousands of tons of oxygen.",
      },
    ],
    keyPoints: [
      "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.",
      "Light reaction: needs light, produces ATP, NADPH, and O₂.",
      "Dark reaction (Calvin cycle): uses ATP and NADPH to fix CO₂ into glucose.",
      "Chlorophyll absorbs light — mainly red and blue, reflects green.",
      "C3 plants: 3-PGA is first product. C4 plants: oxaloacetate first.",
      "Limiting factors: light, CO₂, temperature, water.",
      "Photosynthesis provides food and oxygen for almost all life.",
    ],
    importantQuestions: [
      "Write the balanced equation for photosynthesis.",
      "Explain the light reaction of photosynthesis.",
      "What is the Calvin cycle? Where does it occur?",
      "Differentiate between C3 and C4 plants.",
      "What are the factors affecting the rate of photosynthesis?",
    ],
  },

  "respiration-energy": {
    overview:
      "You eat food. But how does that food actually become energy your body can use? That's respiration — not just breathing, but the chemical process that turns glucose into ATP, the energy currency of life. This chapter follows the journey of a glucose molecule from start to finish.",
    concepts: [
      {
        title: "The Big Picture — Why Respiration?",
        body:
          "Respiration is how cells get energy from food. It's not the same as breathing (breathing is just gas exchange). Cellular respiration breaks down glucose to make ATP — the molecule your cells actually run on. Think of glucose as a battery. Respiration is how you drain that battery to power stuff.",
      },
      {
        title: "Glycolysis — The First Step",
        body:
          "Glycolysis happens in the cytoplasm. No oxygen needed. One glucose (6-carbon) splits into two pyruvate (3-carbon) molecules. You get a net gain of 2 ATP and 2 NADH. It's like stripping the simplest parts first. If no oxygen is available, this is where it stops in some organisms (fermentation).",
      },
      {
        title: "Krebs Cycle — The Processing Plant",
        body:
          "If oxygen is available, pyruvate enters the mitochondria and gets converted to acetyl-CoA, then enters the Krebs cycle. This cycle produces CO₂ (which you breathe out), ATP, and lots of NADH and FADH₂. It's like a roundabout where each turn extracts more energy.",
      },
      {
        title: "Electron Transport Chain — The Power Station",
        body:
          "This is where most of the ATP actually comes from. NADH and FADH₂ dump electrons into a chain of proteins in the inner mitochondrial membrane. The electrons flow through, pumping protons across the membrane. This drives ATP synthase — a tiny turbine that makes ATP. Oxygen is the final electron acceptor — that's why you need to breathe.",
      },
      {
        title: "Fermentation — When Oxygen is Scarce",
        body:
          "No oxygen? No problem. Yeast do alcoholic fermentation — making ethanol and CO₂ (that's how bread rises and beer is made). Our muscles do lactic acid fermentation when we exercise hard — that burning feeling is lactic acid building up. You get only 2 ATP per glucose instead of 38.",
      },
      {
        title: "Aerobic vs. Anaerobic — The Comparison",
        body:
          "Aerobic respiration (with oxygen): 1 glucose → ~38 ATP. Anaerobic respiration (without oxygen): 1 glucose → 2 ATP. Aerobic is way more efficient. But anaerobic is faster and doesn't need oxygen. It's like the difference between a long highway trip (aerobic) and a short sprint (anaerobic).",
      },
    ],
    keyPoints: [
      "Cellular respiration = making ATP from glucose.",
      "Glycolysis: cytoplasm, no O₂ needed, 2 ATP net gain.",
      "Krebs cycle: mitochondria, produces CO₂ and NADH.",
      "ETC (electron transport chain): inner mitochondrial membrane, produces ~34 ATP.",
      "Oxygen is the final electron acceptor in ETC.",
      "Fermentation: anaerobic, only 2 ATP, produces lactic acid or ethanol.",
      "Aerobic: ~38 ATP per glucose. Anaerobic: 2 ATP per glucose.",
      "ATP = adenosine triphosphate — the energy currency of cells.",
    ],
    importantQuestions: [
      "Explain the process of glycolysis.",
      "What is the Krebs cycle? Where does it occur?",
      "Describe the electron transport chain.",
      "Differentiate between aerobic and anaerobic respiration.",
      "What is fermentation? Explain alcoholic and lactic acid fermentation.",
      "Why is oxygen essential for aerobic respiration?",
    ],
  },
};

export default content;
