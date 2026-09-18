export type LectureKey = 2 | 3 | 4 | 5 | 6 | "mixed";

export type QuizQuestion = {
  id: string;
  lecture: LectureKey;
  kind: "mc" | "sa" | "label";
  prompt: string;
  choices?: { letter: "A" | "B" | "C" | "D"; text: string }[];
  answer: string;
  explanation: string;
};

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "l2-mc-1",
    lecture: 2,
    kind: "mc",
    prompt: "Which statement about hypotheses is required in this class?",
    choices: [
      { letter: "A", text: "They must be proven on the first trial" },
      { letter: "B", text: "They must be testable and falsifiable" },
      { letter: "C", text: "They must be published before testing" },
      { letter: "D", text: "They must use only qualitative data" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 2): A good hypothesis is testable and falsifiable. Science never proves a hypothesis; it can only fail to disprove it and accumulate support. An invisible heatless dragon in the office is not science because it is not testable or falsifiable.",
  },
  {
    id: "l2-mc-2",
    lecture: 2,
    kind: "mc",
    prompt: "Plant height measured in centimeters is",
    choices: [
      { letter: "A", text: "Qualitative" },
      { letter: "B", text: "A law" },
      { letter: "C", text: "Quantitative" },
      { letter: "D", text: "A control group" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 2): Qualitative data are descriptions (color, texture, smell). Quantitative data are measured numbers (mass, temperature, count). Height in centimeters is a measurement, so it is quantitative.",
  },
  {
    id: "l2-mc-3",
    lecture: 2,
    kind: "mc",
    prompt: "You change light color and record photosynthetic rate. Light color is the",
    choices: [
      { letter: "A", text: "Dependent variable" },
      { letter: "B", text: "Independent variable" },
      { letter: "C", text: "Control group" },
      { letter: "D", text: "Theory" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 2): Independent variable = what you change. Dependent variable = what you measure (it depends on the independent). Light color is what you change.",
  },
  {
    id: "l2-mc-4",
    lecture: 2,
    kind: "mc",
    prompt: "The group that receives every treatment except the factor being tested is the",
    choices: [
      { letter: "A", text: "Independent variable" },
      { letter: "B", text: "Hypothesis" },
      { letter: "C", text: "Control group" },
      { letter: "D", text: "Law" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 2): The control group receives every treatment except the one being tested. Controlled variables are the factors held constant so they do not confound results.",
  },
  {
    id: "l2-mc-5",
    lecture: 2,
    kind: "mc",
    prompt: "Science, as defined in lecture, never",
    choices: [
      { letter: "A", text: "Shares results" },
      { letter: "B", text: "Uses deduction" },
      { letter: "C", text: "Proves a hypothesis with certainty" },
      { letter: "D", text: "Forms theories" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 2): Science never proves a hypothesis; it can only fail to disprove it and accumulate support. Theories form only after repeated support.",
  },
  {
    id: "l2-mc-6",
    lecture: 2,
    kind: "mc",
    prompt: "A repeatedly tested explanatory framework is a",
    choices: [
      { letter: "A", text: "Guess" },
      { letter: "B", text: "Theory" },
      { letter: "C", text: "Qualitative note" },
      { letter: "D", text: "Controlled variable" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 2): A theory is a well-supported, repeatedly tested explanation that unifies many hypotheses. It is not a casual guess. A law describes what happens without explaining why.",
  },
  {
    id: "l2-mc-7",
    lecture: 2,
    kind: "mc",
    prompt: "Specific observations used to reach a general conclusion is",
    choices: [
      { letter: "A", text: "Deductive reasoning" },
      { letter: "B", text: "Peer review" },
      { letter: "C", text: "Inductive reasoning" },
      { letter: "D", text: "Hydrolysis" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 2): Inductive reasoning goes from specific observations to a general conclusion (small to big). Deductive reasoning goes from a general law or theory to a specific prediction (big to small).",
  },
  {
    id: "l2-mc-8",
    lecture: 2,
    kind: "mc",
    prompt: "Fleming’s penicillin story is used to show",
    choices: [
      { letter: "A", text: "That accidents cannot be science" },
      { letter: "B", text: "That observation plus follow-up testing can turn serendipity into science" },
      { letter: "C", text: "That hypotheses are unnecessary" },
      { letter: "D", text: "That mold is a eukaryote only" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 2): Some discoveries are accidental but still become science when investigated — Fleming noticed Penicillium mold killing Staphylococcus, then tested it.",
  },
  {
    id: "l2-sa-1",
    lecture: 2,
    kind: "sa",
    prompt: "Why was the class hometown survey a weak test of “half the world lives in cities”?",
    answer:
      "TCC students are not a random world sample; the city/rural cutoff and location bias the results. Hypotheses need many independent tests.",
    explanation:
      "Study packet (Lec 2): The class example (~50% of people live in cities) used a TCC sample (77% city / 23% rural). That sample is not representative of the world, so one classroom poll cannot test a global claim.",
  },
  {
    id: "l2-sa-2",
    lecture: 2,
    kind: "sa",
    prompt: "Distinguish theory from the everyday phrase “I have a theory.”",
    answer:
      "Everyday “theory” means a hunch. A scientific theory is a repeatedly tested explanatory framework.",
    explanation:
      "Study packet (Lec 2): A theory is a well-supported, repeatedly tested explanation — not a casual guess. A law describes without explaining; a principle is a finding from a single evaluation.",
  },
  {
    id: "l2-lab-1",
    lecture: 2,
    kind: "label",
    prompt:
      "List the scientific method cycle in order and name which step must be falsifiable.",
    answer:
      "Observe → question → hypothesis → experiment → evaluate/data → share → new hypotheses. The hypothesis must be falsifiable.",
    explanation:
      "Study packet (Lec 2): Observe → ask a question → form a hypothesis → experiment / collect data → evaluate → share findings → form new hypotheses. The hypothesis is the step that must be testable and falsifiable.",
  },
  {
    id: "l3-mc-1",
    lecture: 3,
    kind: "mc",
    prompt: "The most reliable source of original scientific findings among these is",
    choices: [
      { letter: "A", text: "A group chat" },
      { letter: "B", text: "A peer-reviewed journal" },
      { letter: "C", text: "An unsourced website" },
      { letter: "D", text: "A talk-radio recap" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 3): Books, news, talk radio, friends, websites, Wikipedia, social media, and even government reports can contain science, but they are usually not independently checked the way journals are. The gold standard is peer-reviewed journals.",
  },
  {
    id: "l3-mc-2",
    lecture: 3,
    kind: "mc",
    prompt: "About what fraction of submitted papers are rejected, per lecture?",
    choices: [
      { letter: "A", text: "10%" },
      { letter: "B", text: "25%" },
      { letter: "C", text: "70%" },
      { letter: "D", text: "99%" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 3): Peer-reviewed journals are hard to get into; about 70% of submissions are rejected.",
  },
  {
    id: "l3-mc-3",
    lecture: 3,
    kind: "mc",
    prompt: "Which section lets another lab repeat the work?",
    choices: [
      { letter: "A", text: "Abstract" },
      { letter: "B", text: "Introduction" },
      { letter: "C", text: "Methods" },
      { letter: "D", text: "Discussion" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 3): Methods must have enough detail to replicate. The abstract is a miniature of the whole paper; the introduction states the unknown; the discussion interprets meaning.",
  },
  {
    id: "l3-mc-4",
    lecture: 3,
    kind: "mc",
    prompt: "A review paper typically",
    choices: [
      { letter: "A", text: "Follows IMRaD exactly" },
      { letter: "B", text: "Reports one new experiment only" },
      { letter: "C", text: "Summarizes many studies and does not follow IMRaD" },
      { letter: "D", text: "Contains no references" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 3): Review papers summarize many studies and do not follow IMRaD (Introduction, Methods, Results, Discussion).",
  },
  {
    id: "l3-mc-5",
    lecture: 3,
    kind: "mc",
    prompt: "Which is NOT one of the eight life criteria in lecture?",
    choices: [
      { letter: "A", text: "Homeostasis" },
      { letter: "B", text: "Consciousness" },
      { letter: "C", text: "Metabolism" },
      { letter: "D", text: "Evolution" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 3): The eight criteria (must meet all) are organization; energy use / metabolism; homeostasis; reproduction; growth and development; irritability (response to stimuli); adaptation; evolution. Consciousness is not on that list.",
  },
  {
    id: "l3-mc-6",
    lecture: 3,
    kind: "mc",
    prompt: "Maintenance of internal constancy is",
    choices: [
      { letter: "A", text: "Irritability" },
      { letter: "B", text: "Homeostasis" },
      { letter: "C", text: "A law of gravity" },
      { letter: "D", text: "A nucleotide" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 3): Homeostasis is maintenance of internal constancy. Irritability is the ability to respond to stimuli.",
  },
  {
    id: "l3-mc-7",
    lecture: 3,
    kind: "mc",
    prompt: "Correct small-to-large order:",
    choices: [
      { letter: "A", text: "Cell → atom → biosphere" },
      { letter: "B", text: "Atom → cell → organism → population → community" },
      { letter: "C", text: "Ecosystem → organelle → atom" },
      { letter: "D", text: "Tissue → proton → organ" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 3): Atom → molecule → organelle → cell → tissue → organ → organ system → organism → population → community → ecosystem → biosphere.",
  },
  {
    id: "l3-mc-8",
    lecture: 3,
    kind: "mc",
    prompt: "Boolean AND in a library search",
    choices: [
      { letter: "A", text: "Broadens to either term" },
      { letter: "B", text: "Excludes a term" },
      { letter: "C", text: "Requires both terms" },
      { letter: "D", text: "Replaces peer review" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 3): Use Boolean operators in JSTOR / Google Scholar: AND (narrow — both terms), OR (broaden), NOT (exclude).",
  },
  {
    id: "l3-sa-1",
    lecture: 3,
    kind: "sa",
    prompt: "List the eight criteria of life.",
    answer:
      "Organization, metabolism/energy use, homeostasis, reproduction, growth and development, irritability, adaptation, evolution.",
    explanation:
      "Study packet (Lec 3): Something must meet all eight: organization; energy use / metabolism; homeostasis; reproduction; growth and development; irritability (response to stimuli); adaptation; evolution.",
  },
  {
    id: "l3-sa-2",
    lecture: 3,
    kind: "sa",
    prompt: "What does each letter in IMRaD stand for?",
    answer: "Introduction, Methods, Results, and Discussion.",
    explanation:
      "Study packet (Lec 3): IMRaD is Introduction (unknown, broad → narrow), Methods (enough to replicate), Results (what was found), Discussion (what it means). The abstract is a miniature of the whole paper, not one of the four letters.",
  },
  {
    id: "l3-lab-1",
    lecture: 3,
    kind: "label",
    prompt:
      "List the nested levels of organization from smallest to largest (atom through biosphere).",
    answer:
      "Atom, molecule, organelle, cell, tissue, organ, organ system, organism, population, community, ecosystem, biosphere.",
    explanation:
      "Study packet (Lec 3): Atom → molecule → organelle → cell → tissue → organ → organ system → organism → population → community → ecosystem → biosphere.",
  },
  {
    id: "l4-mc-1",
    lecture: 4,
    kind: "mc",
    prompt: "What defines an element?",
    choices: [
      { letter: "A", text: "Neutron count" },
      { letter: "B", text: "Proton count" },
      { letter: "C", text: "Atomic mass only" },
      { letter: "D", text: "Number of bonds" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 4): Atomic number = number of protons, and that defines the element. Neutron count can vary (isotopes). Mass number is protons + neutrons.",
  },
  {
    id: "l4-mc-2",
    lecture: 4,
    kind: "mc",
    prompt: "Carbon-14 differs from carbon-12 in",
    choices: [
      { letter: "A", text: "Proton number" },
      { letter: "B", text: "Element identity" },
      { letter: "C", text: "Neutron number" },
      { letter: "D", text: "Electron charge sign" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 4): Isotopes have the same protons (same element) and different neutrons (e.g., carbon-13 vs carbon-14).",
  },
  {
    id: "l4-mc-3",
    lecture: 4,
    kind: "mc",
    prompt: "Na+ is a cation because it",
    choices: [
      { letter: "A", text: "Gained a proton" },
      { letter: "B", text: "Lost an electron" },
      { letter: "C", text: "Shared three pairs" },
      { letter: "D", text: "Formed a hydrogen bond" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 4): Ionic bonding transfers electrons. A cation lost electrons (positive). An anion gained electrons (negative; names often end in -ide). Example: NaCl.",
  },
  {
    id: "l4-mc-4",
    lecture: 4,
    kind: "mc",
    prompt: "The strongest common bond type in living chemistry is usually",
    choices: [
      { letter: "A", text: "Hydrogen bond" },
      { letter: "B", text: "Ionic bond in water" },
      { letter: "C", text: "Covalent bond" },
      { letter: "D", text: "Magnetic attraction" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 4): Covalent bonds share electrons and are more common and stronger in living systems than ionic bonds. Hydrogen bonds are weak attractions between molecules.",
  },
  {
    id: "l4-mc-5",
    lecture: 4,
    kind: "mc",
    prompt: "Water is polar because",
    choices: [
      { letter: "A", text: "It has a net +2 charge" },
      { letter: "B", text: "Oxygen pulls shared electrons more strongly than hydrogen" },
      { letter: "C", text: "Neutrons orbit the oxygen" },
      { letter: "D", text: "Hydrogen bonds transfer electrons" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 4): Polar covalent = unequal sharing (water). Water is polar overall but has no net charge: O is δ−, H is δ+. That polarity lets water attract water (cohesion) and other polar/charged substances.",
  },
  {
    id: "l4-mc-6",
    lecture: 4,
    kind: "mc",
    prompt: "A hydrogen bond forms",
    choices: [
      { letter: "A", text: "Inside one water molecule between O and H by sharing" },
      { letter: "B", text: "Between molecules, δ+ H to δ− atom" },
      { letter: "C", text: "Only in NaCl crystals" },
      { letter: "D", text: "Only in DNA, never in water" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 4): Hydrogen bonds are weak attractions between a δ+ H on one molecule and a δ− atom on another. They hold water molecules to each other, not the atoms inside one molecule (those are polar covalent).",
  },
  {
    id: "l4-mc-7",
    lecture: 4,
    kind: "mc",
    prompt: "Atomic mass of chlorine is ~35.45 because",
    choices: [
      { letter: "A", text: "Chlorine atoms weigh 35.45 protons" },
      { letter: "B", text: "It is a weighted average of isotopes (mainly 35 and 37)" },
      { letter: "C", text: "Electrons add that much mass" },
      { letter: "D", text: "All chlorine atoms have 18.45 neutrons" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 4): Atomic mass is the weighted average of all isotopes (Cl ≈ 35.45 because of Cl-35 and Cl-37). Electrons have negligible mass.",
  },
  {
    id: "l4-mc-8",
    lecture: 4,
    kind: "mc",
    prompt: "N2 is abundant in air but limiting in ecosystems mainly because",
    choices: [
      { letter: "A", text: "Nitrogen atoms do not exist" },
      { letter: "B", text: "The triple bond is hard for most organisms to break" },
      { letter: "C", text: "N2 is ionic" },
      { letter: "D", text: "Nitrogen has no electrons" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 4): N2 has a triple covalent bond that is very hard to break; most organisms cannot “fix” N2. Only some microbes can.",
  },
  {
    id: "l4-sa-1",
    lecture: 4,
    kind: "sa",
    prompt: "Compare ionic, covalent, and hydrogen bonds in one sentence each.",
    answer:
      "Ionic transfers electrons. Covalent shares electrons (strong in biomolecules). Hydrogen bonds are weak intermolecular attractions from polarity.",
    explanation:
      "Study packet (Lec 4): Ionic = transfer (cation/anion). Covalent = share; more pairs = stronger. Hydrogen = weak δ+ to δ− attraction between molecules.",
  },
  {
    id: "l4-sa-2",
    lecture: 4,
    kind: "sa",
    prompt: "Define isotope and give one example.",
    answer: "Same number of protons, different neutrons — for example carbon-12 vs carbon-14.",
    explanation:
      "Study packet (Lec 4): Isotopes are the same element (same p+) with different neutron counts (e.g., carbon-13 vs carbon-14). Mass number = protons + neutrons.",
  },
  {
    id: "l4-lab-1",
    lecture: 4,
    kind: "label",
    prompt:
      "Name the three subatomic particles (charge, mass, location) and describe a hydrogen bond between two water molecules.",
    answer:
      "Proton +1 ~1 amu nucleus; neutron 0 ~1 amu nucleus; electron −1 negligible mass in orbitals. Between waters: dashed H-bond from δ+ H of one molecule to δ− O of the other.",
    explanation:
      "Study packet (Lec 4): Nucleus holds protons (+) and neutrons (0); electrons (−) occupy orbitals. On two waters, O is δ−, H is δ+, and a dashed hydrogen bond links them.",
  },
  {
    id: "l5-mc-1",
    lecture: 5,
    kind: "mc",
    prompt: "Joining monomers while releasing water is",
    choices: [
      { letter: "A", text: "Hydrolysis" },
      { letter: "B", text: "Dehydration synthesis" },
      { letter: "C", text: "Denaturation" },
      { letter: "D", text: "Ionization" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 5): Dehydration synthesis (condensation) joins monomers, releases water, and requires energy. Hydrolysis inserts water, splits the polymer, and releases energy.",
  },
  {
    id: "l5-mc-2",
    lecture: 5,
    kind: "mc",
    prompt: "The 1:2:1 C:H:O ratio fingerprints",
    choices: [
      { letter: "A", text: "Proteins" },
      { letter: "B", text: "Nucleic acids" },
      { letter: "C", text: "Carbohydrates" },
      { letter: "D", text: "Steroids only" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 5): Carbohydrates have formula (CH2O)n and C:H:O ≈ 1:2:1. Glucose is the main human fuel.",
  },
  {
    id: "l5-mc-3",
    lecture: 5,
    kind: "mc",
    prompt: "Lactose is",
    choices: [
      { letter: "A", text: "Glucose + galactose" },
      { letter: "B", text: "Glucose + glucose" },
      { letter: "C", text: "A nucleotide" },
      { letter: "D", text: "Three fatty acids" },
    ],
    answer: "A",
    explanation:
      "Study packet (Lec 5): Disaccharides form via a glycosidic bond after dehydration. Lactose = glucose + galactose. Maltose is glucose + glucose; sucrose is another common disaccharide.",
  },
  {
    id: "l5-mc-4",
    lecture: 5,
    kind: "mc",
    prompt: "Starch, glycogen, and cellulose",
    choices: [
      { letter: "A", text: "Use different monomers" },
      { letter: "B", text: "Are all glucose polymers with different linkages/branching" },
      { letter: "C", text: "Are all proteins" },
      { letter: "D", text: "Are hydrophobic membranes" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 5): The same glucose monomer can make starch (plant storage), glycogen (animal storage), or cellulose (plant cell-wall fiber) because linkage and branching change function.",
  },
  {
    id: "l5-mc-5",
    lecture: 5,
    kind: "mc",
    prompt: "A nucleotide contains",
    choices: [
      { letter: "A", text: "Only a fatty acid" },
      { letter: "B", text: "Sugar + phosphate + nitrogenous base" },
      { letter: "C", text: "Three amino acids" },
      { letter: "D", text: "Cellulose only" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 5): A nucleotide = sugar + phosphate + base. DNA uses deoxyribose and A-T / G-C; RNA uses ribose and U instead of T.",
  },
  {
    id: "l5-mc-6",
    lecture: 5,
    kind: "mc",
    prompt: "DNA differs from RNA in that DNA",
    choices: [
      { letter: "A", text: "Uses U and is usually single-stranded" },
      { letter: "B", text: "Uses T and is typically a double helix with deoxyribose" },
      { letter: "C", text: "Has no bases" },
      { letter: "D", text: "Cannot store information" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 5): DNA stores instructions (double helix, A-T and G-C, deoxyribose). RNA helps express those instructions (usually single-stranded; U instead of T; ribose).",
  },
  {
    id: "l5-mc-7",
    lecture: 5,
    kind: "mc",
    prompt: "Unfolding a protein with heat so it stops working is",
    choices: [
      { letter: "A", text: "Hydrolysis of DNA" },
      { letter: "B", text: "Denaturation" },
      { letter: "C", text: "Transcription" },
      { letter: "D", text: "A glycosidic bond" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 5): Shape = function. Denaturation unfolds a protein and destroys function. An enzyme’s active site is a 3-D pocket; unfold it and substrates no longer fit.",
  },
  {
    id: "l5-mc-8",
    lecture: 5,
    kind: "mc",
    prompt: "Phospholipids are especially important because they",
    choices: [
      { letter: "A", text: "Store genetic code" },
      { letter: "B", text: "Build cell membranes (hydrophobic tails, hydrophilic heads)" },
      { letter: "C", text: "Catalyze peptide bonds" },
      { letter: "D", text: "Are monosaccharides" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 5): Lipids are hydrophobic. Phospholipids have two tails plus a phosphate head and build membranes. Triglycerides (three fatty acids + glycerol) are storage fats.",
  },
  {
    id: "l5-sa-1",
    lecture: 5,
    kind: "sa",
    prompt: "Why does enzyme shape matter?",
    answer:
      "The active site is a 3-D pocket; if the protein unfolds, substrates no longer fit and catalysis stops.",
    explanation:
      "Study packet (Lec 5): Proteins have primary → secondary → tertiary (and sometimes quaternary) structure. Shape is essential to function. Denaturation destroys that pocket.",
  },
  {
    id: "l5-sa-2",
    lecture: 5,
    kind: "sa",
    prompt: "Give one function for each of the four macromolecule classes.",
    answer:
      "Carbohydrates: energy/structure. Lipids: membranes/storage/insulation. Proteins: enzymes/structure/contraction. Nucleic acids: information.",
    explanation:
      "Study packet (Lec 5): Carbs energy and structure; lipids energy storage, membranes, insulation; proteins enzymes, structure, contraction; nucleic acids encode information to build proteins.",
  },
  {
    id: "l5-lab-1",
    lecture: 5,
    kind: "label",
    prompt:
      "Describe dehydration vs hydrolysis, the three parts of a nucleotide, and DNA base-pairing rules.",
    answer:
      "Dehydration: join monomers, lose water. Hydrolysis: add water, break polymer. Nucleotide: sugar + phosphate + base. DNA pairs A–T and G–C.",
    explanation:
      "Study packet (Lec 5): Dehydration builds (H and OH leave as water). Hydrolysis splits a bond by inserting water. Nucleotide = sugar, phosphate, base. DNA pairing is A-T and G-C.",
  },
  {
    id: "l6-mc-1",
    lecture: 6,
    kind: "mc",
    prompt: "Which is part of cell theory?",
    choices: [
      { letter: "A", text: "All cells have chloroplasts" },
      { letter: "B", text: "New cells arise from existing cells" },
      { letter: "C", text: "All cells are prokaryotic" },
      { letter: "D", text: "Cells appear by spontaneous generation" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 6): Unified cell theory: (1) all living things are made of one or more cells; (2) the cell is the basic unit of life; (3) new cells arise from existing cells.",
  },
  {
    id: "l6-mc-2",
    lecture: 6,
    kind: "mc",
    prompt: "A typical lab light microscope",
    choices: [
      { letter: "A", text: "Magnifies millions of times with no stain ever" },
      { letter: "B", text: "Inverts the image and magnifies about 40×–1000×" },
      { letter: "C", text: "Is larger than an electron microscope" },
      { letter: "D", text: "Has no lenses" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 6): Light microscopes (lab) are about 40×–1000×, portable, and often need stains. The image is inverted because a compound scope has two lens sets. Electron microscopes have higher resolution and are large and expensive.",
  },
  {
    id: "l6-mc-3",
    lecture: 6,
    kind: "mc",
    prompt: "Found in typical plant cells but not typical animal cells:",
    choices: [
      { letter: "A", text: "Mitochondria" },
      { letter: "B", text: "Golgi" },
      { letter: "C", text: "Chloroplasts" },
      { letter: "D", text: "Cytoskeleton" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 6): Both plant and animal cells have plasma membrane, nucleus, cytoplasm, mitochondria, endomembrane system, and cytoskeleton. Typical plant extras: cell wall, chloroplasts, large central vacuole, plasmodesmata.",
  },
  {
    id: "l6-mc-4",
    lecture: 6,
    kind: "mc",
    prompt: "Protein packaging and shipping is mainly the",
    choices: [
      { letter: "A", text: "Nucleoid" },
      { letter: "B", text: "Golgi apparatus" },
      { letter: "C", text: "Microfilament" },
      { letter: "D", text: "Cell wall" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 6): The Golgi apparatus sorts, tags, packages, and distributes lipids and proteins. Secretory cells (salivary gland) are Golgi-rich. Rough ER makes those proteins; the nucleoid is prokaryotic DNA.",
  },
  {
    id: "l6-mc-5",
    lecture: 6,
    kind: "mc",
    prompt: "Cardiac muscle cells stay electrically coupled through",
    choices: [
      { letter: "A", text: "Tight junctions" },
      { letter: "B", text: "Plasmodesmata" },
      { letter: "C", text: "Gap junctions" },
      { letter: "D", text: "Cell walls" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 6): Gap junctions are animal channels (analogous to plasmodesmata in plants) that let ions/signals pass so cardiac muscle contracts as a unit. Tight junctions are watertight seals; desmosomes are stretchy spot-welds.",
  },
  {
    id: "l6-mc-6",
    lecture: 6,
    kind: "mc",
    prompt: "Rough ER is rough because of",
    choices: [
      { letter: "A", text: "Cellulose" },
      { letter: "B", text: "Ribosomes" },
      { letter: "C", text: "Flagella" },
      { letter: "D", text: "Keratin only" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 6): Rough ER has ribosomes and synthesizes proteins for secretion or membranes. Smooth ER has no ribosomes and handles lipids, detox, and Ca2+ storage.",
  },
  {
    id: "l6-mc-7",
    lecture: 6,
    kind: "mc",
    prompt: "The widest cytoskeleton fiber, used in cilia and flagella, is the",
    choices: [
      { letter: "A", text: "Microfilament" },
      { letter: "B", text: "Intermediate filament" },
      { letter: "C", text: "Microtubule" },
      { letter: "D", text: "Plasmodesma" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 6): Microfilaments (narrowest) = movement. Intermediate filaments = structure (keratin). Microtubules (widest, hollow) resist compression and build flagella, cilia, and centrioles.",
  },
  {
    id: "l6-mc-8",
    lecture: 6,
    kind: "mc",
    prompt: "A watertight seal between animal cells is a",
    choices: [
      { letter: "A", text: "Desmosome" },
      { letter: "B", text: "Tight junction" },
      { letter: "C", text: "Gap junction" },
      { letter: "D", text: "Central vacuole" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 6): Tight junctions are watertight seals (bladder, skin). Desmosomes are spot-welds for stretching tissues. Gap junctions are communication channels. Central vacuoles are plant organelles.",
  },
  {
    id: "l6-sa-1",
    lecture: 6,
    kind: "sa",
    prompt: "Compare prokaryotic and eukaryotic cells on nucleus and organelles.",
    answer:
      "Prokaryotes have a nucleoid and no membrane-bound organelles. Eukaryotes have a true nucleus and membrane-bound organelles.",
    explanation:
      "Study packet (Lec 6): Prokaryotes (bacteria and archaea): no nucleus; DNA in nucleoid; no membrane-bound organelles; generally smaller. Eukaryotes: nucleus; membrane-bound organelles; generally larger.",
  },
  {
    id: "l6-sa-2",
    lecture: 6,
    kind: "sa",
    prompt: "Name the three cytoskeleton fibers from narrowest to widest and one job each.",
    answer:
      "Microfilaments (movement), intermediate filaments (structure/keratin), microtubules (cilia, flagella, centrioles).",
    explanation:
      "Study packet (Lec 6): Microfilaments — movement (e.g., white blood cells). Intermediate filaments — structural cables (keratin). Microtubules — widest hollow tubes; flagella, cilia, centrioles.",
  },
  {
    id: "l6-lab-1",
    lecture: 6,
    kind: "label",
    prompt:
      "Name typical plant-only and animal-only structures, then the four junction types (including plasmodesmata).",
    answer:
      "Plant: cell wall, chloroplasts, large central vacuole, plasmodesmata. Animal: lysosomes, centrioles, ECM. Junctions: plasmodesmata, tight junction, desmosome, gap junction.",
    explanation:
      "Study packet (Lec 6): Plant extras = wall, chloroplasts, big vacuole, plasmodesmata. Animal extras = lysosomes, centrioles, ECM. Junctions: plasmodesmata (plant channels), tight (seal), desmosome (spot-weld), gap (animal channel).",
  },
  {
    id: "mix-mc-1",
    lecture: "mixed",
    kind: "mc",
    prompt: "Which pairing is correct?",
    choices: [
      { letter: "A", text: "Independent variable = what you measure" },
      { letter: "B", text: "Law = casual guess" },
      { letter: "C", text: "Theory = well-supported explanation" },
      { letter: "D", text: "Control group = the factor you change" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 2): A theory is a repeatedly tested explanation. The independent variable is what you change; the control group gets every treatment except the tested factor; a law describes without explaining.",
  },
  {
    id: "mix-mc-2",
    lecture: "mixed",
    kind: "mc",
    prompt: "Homeostasis and irritability are",
    choices: [
      { letter: "A", text: "Bond types" },
      { letter: "B", text: "Two of the eight life criteria" },
      { letter: "C", text: "Organelles" },
      { letter: "D", text: "Base-pairing rules" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 3): Homeostasis (internal constancy) and irritability (response to stimuli) are two of the eight required criteria of life.",
  },
  {
    id: "mix-mc-3",
    lecture: "mixed",
    kind: "mc",
    prompt: "Atomic number of an ion still equals",
    choices: [
      { letter: "A", text: "Electrons only" },
      { letter: "B", text: "Neutrons only" },
      { letter: "C", text: "Protons" },
      { letter: "D", text: "Mass number minus electrons" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 4): Atomic number is proton count and still defines the element even when electrons are lost or gained to make an ion.",
  },
  {
    id: "mix-mc-4",
    lecture: "mixed",
    kind: "mc",
    prompt: "The bond that holds two water molecules to each other is",
    choices: [
      { letter: "A", text: "A covalent bond inside one molecule" },
      { letter: "B", text: "A hydrogen bond" },
      { letter: "C", text: "A peptide bond" },
      { letter: "D", text: "A glycosidic bond" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 4): Inside one water molecule, O–H bonds are polar covalent. Between water molecules, δ+ H to δ− O is a hydrogen bond. Peptide bonds join amino acids; glycosidic bonds join sugars.",
  },
  {
    id: "mix-mc-5",
    lecture: "mixed",
    kind: "mc",
    prompt: "Hydrolysis of a protein yields",
    choices: [
      { letter: "A", text: "Nucleotides" },
      { letter: "B", text: "Fatty acids only" },
      { letter: "C", text: "Amino acids" },
      { letter: "D", text: "Cellulose" },
    ],
    answer: "C",
    explanation:
      "Study packet (Lec 5): Hydrolysis inserts water and breaks a polymer into monomers. Protein monomers are amino acids (peptide bonds). Nucleotides are nucleic-acid monomers; proteases catalyze protein hydrolysis.",
  },
  {
    id: "mix-mc-6",
    lecture: "mixed",
    kind: "mc",
    prompt: "Information to build proteins is stored in",
    choices: [
      { letter: "A", text: "Glycogen" },
      { letter: "B", text: "Nucleic acids" },
      { letter: "C", text: "Triglycerides" },
      { letter: "D", text: "Tight junctions" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 5): Nucleic acids (DNA and RNA) encode the information to build proteins. Glycogen stores glucose; triglycerides store fat; tight junctions seal animal cells.",
  },
  {
    id: "mix-mc-7",
    lecture: "mixed",
    kind: "mc",
    prompt: "A bacterium is typically a",
    choices: [
      { letter: "A", text: "Eukaryote with chloroplasts" },
      { letter: "B", text: "Prokaryote" },
      { letter: "C", text: "Plant cell" },
      { letter: "D", text: "Multicellular organ" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 6): Bacteria and archaea are prokaryotes: nucleoid, no membrane-bound organelles, generally smaller.",
  },
  {
    id: "mix-mc-8",
    lecture: "mixed",
    kind: "mc",
    prompt: "Secretory cells are often rich in",
    choices: [
      { letter: "A", text: "Cell walls only" },
      { letter: "B", text: "Golgi apparatus" },
      { letter: "C", text: "Plasmodesmata only" },
      { letter: "D", text: "Intermediate filaments only" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 6): Cells with a large secretory job (salivary glands) have lots of Golgi because it packages and ships product.",
  },
  {
    id: "mix-mc-9",
    lecture: "mixed",
    kind: "mc",
    prompt: "Keratin is an example of",
    choices: [
      { letter: "A", text: "A microtubule motor" },
      { letter: "B", text: "An intermediate filament protein" },
      { letter: "C", text: "A phospholipid" },
      { letter: "D", text: "A monosaccharide" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 6): Intermediate filaments are structural cables; keratin strengthens nails and hair.",
  },
  {
    id: "mix-mc-10",
    lecture: "mixed",
    kind: "mc",
    prompt: "Which source did lecture treat as the gold standard?",
    choices: [
      { letter: "A", text: "Social media recaps" },
      { letter: "B", text: "Peer-reviewed journals" },
      { letter: "C", text: "Unchecked websites" },
      { letter: "D", text: "Family stories" },
    ],
    answer: "B",
    explanation:
      "Study packet (Lec 3): The gold standard for original scientific findings is peer-reviewed journals — independently checked and hard to publish in (~70% rejected).",
  },
  {
    id: "mix-sa-1",
    lecture: "mixed",
    kind: "sa",
    prompt:
      "Trace one idea across the unit: how atoms → bonds → macromolecules → organelles → a living cell.",
    answer:
      "Atoms bond into molecules; molecules become macromolecules; macromolecules build organelles; organelles make a living cell that meets the eight criteria of life.",
    explanation:
      "Study packet (cross-lecture): Atoms (Lec 4) form bonds into molecules; macromolecules (Lec 5) assemble organelles; organelles make eukaryotic cells (Lec 6) that satisfy the eight life criteria (Lec 3).",
  },
  {
    id: "mix-sa-2",
    lecture: "mixed",
    kind: "sa",
    prompt: "Give one compare/contrast pair from each lecture (2 through 6).",
    answer:
      "L2 independent vs dependent variable; L3 population vs community; L4 cation vs anion; L5 dehydration vs hydrolysis; L6 plant vs animal or tight vs gap junction.",
    explanation:
      "Study packet (exam favorites): Hypothesis/theory/law; IV/DV; cation/anion; ionic/covalent/H-bond; dehydration/hydrolysis; DNA/RNA; prokaryote/eukaryote; plant/animal; tight/gap/desmosome.",
  },
];
