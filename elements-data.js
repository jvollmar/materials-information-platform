/* =============================================================
   MATERIALS INFORMATION PLATFORM — elements-data.js

   Contains the ELEMENTS array (all 118 elements) and
   ELEMENT_INFO object (detailed data for elements 1-10).

   This file mirrors elements.csv so the site can run
   directly from the file system without a web server.

   ELEMENTS array structure per entry:
     [0] atomicNum   — integer 1-118
     [1] symbol      — string e.g. 'H'
     [2] name        — string e.g. 'Hydrogen'
     [3] category    — CSS class name (see list below)
     [4] period      — integer 1-7
     [5] group       — integer 1-18  (0 = f-block element)
     [6] atomicMass  — number
     [7] state       — 'gas' | 'liquid' | 'solid' | 'unknown'
     [8] fpos        — integer 0-15
                       0  = main-table element
                       1-15 = position in lanthanide or actinide row

   Category values:
     'alkali-metal' | 'alkaline-earth' | 'transition-metal' |
     'post-transition' | 'metalloid' | 'reactive-nonmetal' |
     'noble-gas' | 'lanthanide' | 'actinide' | 'unknown'

   Grid-column logic (19-column CSS grid):
     Column 1      = period buttons
     Columns 2-19  = groups 1-18
     → main-table element:  gridColumn = group + 1
     → f-block element:     gridColumn = fpos + 3
                             (aligns with groups 3-17)
     → lanthanide row:      gridRow = 9
     → actinide row:        gridRow = 10
   ============================================================= */

var ELEMENTS = [

  /* ── PERIOD 1 ── */
  [1,  'H',  'Hydrogen',      'reactive-nonmetal', 1,  1,   1.008, 'gas',    0],
  [2,  'He', 'Helium',        'noble-gas',         1, 18,   4.003, 'gas',    0],

  /* ── PERIOD 2 ── */
  [3,  'Li', 'Lithium',       'alkali-metal',      2,  1,   6.941, 'solid',  0],
  [4,  'Be', 'Beryllium',     'alkaline-earth',    2,  2,   9.012, 'solid',  0],
  [5,  'B',  'Boron',         'metalloid',         2, 13,  10.811, 'solid',  0],
  [6,  'C',  'Carbon',        'reactive-nonmetal', 2, 14,  12.011, 'solid',  0],
  [7,  'N',  'Nitrogen',      'reactive-nonmetal', 2, 15,  14.007, 'gas',    0],
  [8,  'O',  'Oxygen',        'reactive-nonmetal', 2, 16,  15.999, 'gas',    0],
  [9,  'F',  'Fluorine',      'halogen', 2, 17,  18.998, 'gas',    0],
  [10, 'Ne', 'Neon',          'noble-gas',         2, 18,  20.180, 'gas',    0],

  /* ── PERIOD 3 ── */
  [11, 'Na', 'Sodium',        'alkali-metal',      3,  1,  22.990, 'solid',  0],
  [12, 'Mg', 'Magnesium',     'alkaline-earth',    3,  2,  24.305, 'solid',  0],
  [13, 'Al', 'Aluminum',      'post-transition',   3, 13,  26.982, 'solid',  0],
  [14, 'Si', 'Silicon',       'metalloid',         3, 14,  28.086, 'solid',  0],
  [15, 'P',  'Phosphorus',    'reactive-nonmetal', 3, 15,  30.974, 'solid',  0],
  [16, 'S',  'Sulfur',        'reactive-nonmetal', 3, 16,  32.065, 'solid',  0],
  [17, 'Cl', 'Chlorine',      'halogen', 3, 17,  35.453, 'gas',    0],
  [18, 'Ar', 'Argon',         'noble-gas',         3, 18,  39.948, 'gas',    0],

  /* ── PERIOD 4 ── */
  [19, 'K',  'Potassium',     'alkali-metal',      4,  1,  39.098, 'solid',  0],
  [20, 'Ca', 'Calcium',       'alkaline-earth',    4,  2,  40.078, 'solid',  0],
  [21, 'Sc', 'Scandium',      'transition-metal',  4,  3,  44.956, 'solid',  0],
  [22, 'Ti', 'Titanium',      'transition-metal',  4,  4,  47.867, 'solid',  0],
  [23, 'V',  'Vanadium',      'transition-metal',  4,  5,  50.942, 'solid',  0],
  [24, 'Cr', 'Chromium',      'transition-metal',  4,  6,  51.996, 'solid',  0],
  [25, 'Mn', 'Manganese',     'transition-metal',  4,  7,  54.938, 'solid',  0],
  [26, 'Fe', 'Iron',          'transition-metal',  4,  8,  55.845, 'solid',  0],
  [27, 'Co', 'Cobalt',        'transition-metal',  4,  9,  58.933, 'solid',  0],
  [28, 'Ni', 'Nickel',        'transition-metal',  4, 10,  58.693, 'solid',  0],
  [29, 'Cu', 'Copper',        'transition-metal',  4, 11,  63.546, 'solid',  0],
  [30, 'Zn', 'Zinc',          'transition-metal',  4, 12,  65.380, 'solid',  0],
  [31, 'Ga', 'Gallium',       'post-transition',   4, 13,  69.723, 'solid',  0],
  [32, 'Ge', 'Germanium',     'metalloid',         4, 14,  72.630, 'solid',  0],
  [33, 'As', 'Arsenic',       'metalloid',         4, 15,  74.922, 'solid',  0],
  [34, 'Se', 'Selenium',      'reactive-nonmetal', 4, 16,  78.971, 'solid',  0],
  [35, 'Br', 'Bromine',       'halogen', 4, 17,  79.904, 'liquid', 0],
  [36, 'Kr', 'Krypton',       'noble-gas',         4, 18,  83.798, 'gas',    0],

  /* ── PERIOD 5 ── */
  [37, 'Rb', 'Rubidium',      'alkali-metal',      5,  1,  85.468, 'solid',  0],
  [38, 'Sr', 'Strontium',     'alkaline-earth',    5,  2,  87.620, 'solid',  0],
  [39, 'Y',  'Yttrium',       'transition-metal',  5,  3,  88.906, 'solid',  0],
  [40, 'Zr', 'Zirconium',     'transition-metal',  5,  4,  91.224, 'solid',  0],
  [41, 'Nb', 'Niobium',       'transition-metal',  5,  5,  92.906, 'solid',  0],
  [42, 'Mo', 'Molybdenum',    'transition-metal',  5,  6,  95.960, 'solid',  0],
  [43, 'Tc', 'Technetium',    'transition-metal',  5,  7,  98.000, 'solid',  0],
  [44, 'Ru', 'Ruthenium',     'transition-metal',  5,  8, 101.070, 'solid',  0],
  [45, 'Rh', 'Rhodium',       'transition-metal',  5,  9, 102.906, 'solid',  0],
  [46, 'Pd', 'Palladium',     'transition-metal',  5, 10, 106.420, 'solid',  0],
  [47, 'Ag', 'Silver',        'transition-metal',  5, 11, 107.868, 'solid',  0],
  [48, 'Cd', 'Cadmium',       'transition-metal',  5, 12, 112.411, 'solid',  0],
  [49, 'In', 'Indium',        'post-transition',   5, 13, 114.818, 'solid',  0],
  [50, 'Sn', 'Tin',           'post-transition',   5, 14, 118.710, 'solid',  0],
  [51, 'Sb', 'Antimony',      'metalloid',         5, 15, 121.760, 'solid',  0],
  [52, 'Te', 'Tellurium',     'metalloid',         5, 16, 127.600, 'solid',  0],
  [53, 'I',  'Iodine',        'halogen', 5, 17, 126.904, 'solid',  0],
  [54, 'Xe', 'Xenon',         'noble-gas',         5, 18, 131.293, 'gas',    0],

  /* ── PERIOD 6 (main table — lanthanides 57-71 are in f-block section below) ── */
  [55, 'Cs', 'Cesium',        'alkali-metal',      6,  1, 132.905, 'solid',  0],
  [56, 'Ba', 'Barium',        'alkaline-earth',    6,  2, 137.327, 'solid',  0],
  /* group 3 of period 6 = lanthanide placeholder (added by JS in index.html) */
  [72, 'Hf', 'Hafnium',       'transition-metal',  6,  4, 178.490, 'solid',  0],
  [73, 'Ta', 'Tantalum',      'transition-metal',  6,  5, 180.948, 'solid',  0],
  [74, 'W',  'Tungsten',      'transition-metal',  6,  6, 183.840, 'solid',  0],
  [75, 'Re', 'Rhenium',       'transition-metal',  6,  7, 186.207, 'solid',  0],
  [76, 'Os', 'Osmium',        'transition-metal',  6,  8, 190.230, 'solid',  0],
  [77, 'Ir', 'Iridium',       'transition-metal',  6,  9, 192.217, 'solid',  0],
  [78, 'Pt', 'Platinum',      'transition-metal',  6, 10, 195.084, 'solid',  0],
  [79, 'Au', 'Gold',          'transition-metal',  6, 11, 196.967, 'solid',  0],
  [80, 'Hg', 'Mercury',       'transition-metal',  6, 12, 200.592, 'liquid', 0],
  [81, 'Tl', 'Thallium',      'post-transition',   6, 13, 204.380, 'solid',  0],
  [82, 'Pb', 'Lead',          'post-transition',   6, 14, 207.200, 'solid',  0],
  [83, 'Bi', 'Bismuth',       'post-transition',   6, 15, 208.980, 'solid',  0],
  [84, 'Po', 'Polonium',      'post-transition',   6, 16, 209.000, 'solid',  0],
  [85, 'At', 'Astatine',      'halogen',           6, 17, 210.000, 'solid',  0],
  [86, 'Rn', 'Radon',         'noble-gas',         6, 18, 222.000, 'gas',    0],

  /* ── LANTHANIDES — f-block row (fpos 1-15, placed at grid-row 9) ── */
  [57, 'La', 'Lanthanum',     'lanthanide',        6,  0, 138.905, 'solid',  1],
  [58, 'Ce', 'Cerium',        'lanthanide',        6,  0, 140.116, 'solid',  2],
  [59, 'Pr', 'Praseodymium',  'lanthanide',        6,  0, 140.908, 'solid',  3],
  [60, 'Nd', 'Neodymium',     'lanthanide',        6,  0, 144.242, 'solid',  4],
  [61, 'Pm', 'Promethium',    'lanthanide',        6,  0, 145.000, 'solid',  5],
  [62, 'Sm', 'Samarium',      'lanthanide',        6,  0, 150.360, 'solid',  6],
  [63, 'Eu', 'Europium',      'lanthanide',        6,  0, 151.964, 'solid',  7],
  [64, 'Gd', 'Gadolinium',    'lanthanide',        6,  0, 157.250, 'solid',  8],
  [65, 'Tb', 'Terbium',       'lanthanide',        6,  0, 158.925, 'solid',  9],
  [66, 'Dy', 'Dysprosium',    'lanthanide',        6,  0, 162.500, 'solid', 10],
  [67, 'Ho', 'Holmium',       'lanthanide',        6,  0, 164.930, 'solid', 11],
  [68, 'Er', 'Erbium',        'lanthanide',        6,  0, 167.259, 'solid', 12],
  [69, 'Tm', 'Thulium',       'lanthanide',        6,  0, 168.934, 'solid', 13],
  [70, 'Yb', 'Ytterbium',     'lanthanide',        6,  0, 173.054, 'solid', 14],
  [71, 'Lu', 'Lutetium',      'lanthanide',        6,  0, 174.967, 'solid', 15],

  /* ── PERIOD 7 (main table — actinides 89-103 are in f-block section below) ── */
  [87, 'Fr', 'Francium',      'alkali-metal',      7,  1, 223.000, 'solid',  0],
  [88, 'Ra', 'Radium',        'alkaline-earth',    7,  2, 226.000, 'solid',  0],
  /* group 3 of period 7 = actinide placeholder (added by JS in index.html) */
  [104,'Rf', 'Rutherfordium', 'transition-metal',  7,  4, 267.000, 'solid',  0],
  [105,'Db', 'Dubnium',       'transition-metal',  7,  5, 268.000, 'solid',  0],
  [106,'Sg', 'Seaborgium',    'transition-metal',  7,  6, 271.000, 'solid',  0],
  [107,'Bh', 'Bohrium',       'transition-metal',  7,  7, 274.000, 'solid',  0],
  [108,'Hs', 'Hassium',       'transition-metal',  7,  8, 277.000, 'solid',  0],
  [109,'Mt', 'Meitnerium',    'inner-transition',           7,  9, 278.000, 'solid',  0],
  [110,'Ds', 'Darmstadtium',  'inner-transition',           7, 10, 281.000, 'solid',  0],
  [111,'Rg', 'Roentgenium',   'inner-transition',           7, 11, 282.000, 'solid',  0],
  [112,'Cn', 'Copernicium',   'transition-metal',  7, 12, 285.000, 'gas',    0],
  [113,'Nh', 'Nihonium',      'inner-transition',           7, 13, 286.000, 'solid',  0],
  [114,'Fl', 'Flerovium',     'inner-transition',   7, 14, 289.000, 'solid',  0],
  [115,'Mc', 'Moscovium',     'inner-transition',           7, 15, 290.000, 'solid',  0],
  [116,'Lv', 'Livermorium',   'inner-transition',           7, 16, 293.000, 'solid',  0],
  [117,'Ts', 'Tennessine',    'inner-transition',           7, 17, 294.000, 'solid',  0],
  [118,'Og', 'Oganesson',     'inner-transition',         7, 18, 294.000, 'gas',    0],

  /* ── ACTINIDES — f-block row (fpos 1-15, placed at grid-row 10) ── */
  [89, 'Ac', 'Actinium',      'actinide',          7,  0, 227.000, 'solid',  1],
  [90, 'Th', 'Thorium',       'actinide',          7,  0, 232.038, 'solid',  2],
  [91, 'Pa', 'Protactinium',  'actinide',          7,  0, 231.036, 'solid',  3],
  [92, 'U',  'Uranium',       'actinide',          7,  0, 238.029, 'solid',  4],
  [93, 'Np', 'Neptunium',     'actinide',          7,  0, 237.000, 'solid',  5],
  [94, 'Pu', 'Plutonium',     'actinide',          7,  0, 244.000, 'solid',  6],
  [95, 'Am', 'Americium',     'actinide',          7,  0, 243.000, 'solid',  7],
  [96, 'Cm', 'Curium',        'actinide',          7,  0, 247.000, 'solid',  8],
  [97, 'Bk', 'Berkelium',     'actinide',          7,  0, 247.000, 'solid',  9],
  [98, 'Cf', 'Californium',   'actinide',          7,  0, 251.000, 'solid', 10],
  [99, 'Es', 'Einsteinium',   'actinide',          7,  0, 252.000, 'solid', 11],
  [100,'Fm', 'Fermium',       'actinide',          7,  0, 257.000, 'solid', 12],
  [101,'Md', 'Mendelevium',   'actinide',          7,  0, 258.000, 'solid', 13],
  [102,'No', 'Nobelium',      'actinide',          7,  0, 259.000, 'solid', 14],
  [103,'Lr', 'Lawrencium',    'actinide',          7,  0, 262.000, 'solid', 15],

]; /* end ELEMENTS */


/* =============================================================
   ELEMENT_INFO — detailed data for elements 1-10
   Used by element-page.js to render individual element pages.
   Future: expand to all 118 elements.
   ============================================================= */

var ELEMENT_INFO = {

  1: {
    electronConfig: '1s\u00B9',
    meltingPoint:   '-259.16\u00B0C',
    boilingPoint:   '-252.88\u00B0C',
    density:        '0.0899 g/L',
    atomicRadius:      '31 pm (covalent radius)',
    electronegativity: '2.20',
    discoveredBy:   'Henry Cavendish',
    yearDiscovered: '1766',
    description:
      'Hydrogen is the lightest and most abundant element in the universe, ' +
      'making up about 75% of all normal matter by mass. Stars shine because ' +
      'they fuse hydrogen into helium. On Earth it is most commonly found in ' +
      'water (H\u2082O). Hydrogen gas is colorless, odorless, and highly flammable.',
    uses:    'Rocket fuel, petroleum refining, ammonia / fertilizer production, fuel cells',
    funFact: 'One hydrogen atom contains just one proton and one electron \u2014 the simplest atom possible.'
  },

  2: {
    electronConfig: '1s\u00B2',
    meltingPoint:   '-272.2\u00B0C (at 26 atm)',
    boilingPoint:   '-268.93\u00B0C',
    density:        '0.1786 g/L',
    atomicRadius:      '140 pm (van der Waals radius)',
    electronegativity: 'Not assigned (noble gas)',
    discoveredBy:   'Pierre Janssen &amp; Norman Lockyer',
    yearDiscovered: '1868',
    description:
      'Helium is the second lightest element and the second most abundant in the ' +
      'observable universe. It was first detected in the Sun\'s spectrum before ' +
      'being found on Earth. Helium has the lowest boiling point of any element ' +
      'and is chemically inert \u2014 it forms no stable compounds under ordinary conditions.',
    uses:    'MRI cooling systems, weather balloons, deep-sea diving mixtures, cryogenics, party balloons',
    funFact: 'Helium was discovered in the Sun 27 years before it was found on Earth.'
  },

  3: {
    electronConfig: '[He] 2s\u00B9',
    meltingPoint:   '180.54\u00B0C',
    boilingPoint:   '1342\u00B0C',
    density:        '0.534 g/cm\u00B3',
    atomicRadius:      '128 pm (covalent radius)',
    electronegativity: '0.98',
    discoveredBy:   'Johan August Arfwedson',
    yearDiscovered: '1817',
    description:
      'Lithium is the lightest of all metals and the least dense solid element. ' +
      'It is so reactive it must be stored under oil to prevent oxidation. ' +
      'Lithium reacts vigorously with water, producing flammable hydrogen gas. ' +
      'Despite its reactivity, lithium-ion batteries have transformed portable electronics.',
    uses:    'Rechargeable batteries, psychiatric medications (bipolar disorder), heat-resistant glass, nuclear reactors',
    funFact: 'Lithium is so light it can float on water \u2014 but it would react explosively if you tried!'
  },

  4: {
    electronConfig: '[He] 2s\u00B2',
    meltingPoint:   '1287\u00B0C',
    boilingPoint:   '2470\u00B0C',
    density:        '1.85 g/cm\u00B3',
    atomicRadius:      '96 pm (covalent radius)',
    electronegativity: '1.57',
    discoveredBy:   'Louis-Nicolas Vauquelin',
    yearDiscovered: '1798',
    description:
      'Beryllium is a rare, hard, steel-gray metal. It is exceptionally stiff and ' +
      'light, making it valuable in aerospace engineering. Beryllium dust is highly ' +
      'toxic and carcinogenic. It is largely transparent to X-rays, which makes it ' +
      'ideal for X-ray tube windows.',
    uses:    'Aerospace alloys, X-ray windows, nuclear reactor components, gyroscopes, high-performance springs',
    funFact: 'Beryllium is 6 times stiffer than steel but only one-third the weight.'
  },

  5: {
    electronConfig: '[He] 2s\u00B2 2p\u00B9',
    meltingPoint:   '2076\u00B0C',
    boilingPoint:   '3927\u00B0C',
    density:        '2.34 g/cm\u00B3 (crystalline)',
    atomicRadius:      '84 pm (covalent radius)',
    electronegativity: '2.04',
    discoveredBy:   'Gay-Lussac &amp; Th\u00E9nard',
    yearDiscovered: '1808',
    description:
      'Boron is a metalloid that bridges the gap between metals and nonmetals. ' +
      'It does not occur naturally as a pure element \u2014 it is found in compounds ' +
      'like borax. Boron carbide is one of the hardest materials known and is used ' +
      'in nuclear reactor control rods to absorb neutrons.',
    uses:    'Borosilicate glass (Pyrex), semiconductors, nuclear control rods, fire retardants, plant fertilizers',
    funFact: 'Boron gives green color to fireworks. Its compounds are also found in Silly Putty!'
  },

  6: {
    electronConfig: '[He] 2s\u00B2 2p\u00B2',
    meltingPoint:   '3550\u00B0C (graphite)',
    boilingPoint:   '3825\u00B0C',
    density:        '2.267 g/cm\u00B3 (graphite) / 3.515 g/cm\u00B3 (diamond)',
    atomicRadius:      '73 pm (covalent radius)',
    electronegativity: '2.55',
    discoveredBy:   'Known since antiquity',
    yearDiscovered: 'Ancient',
    description:
      'Carbon is the chemical basis of all known life on Earth. Its ability to form ' +
      'four covalent bonds allows it to create over 10 million organic compounds. ' +
      'Carbon exists in allotropes: graphite (soft, conducts electricity), diamond ' +
      '(hardest natural material), and graphene (single-atom sheets with extraordinary strength).',
    uses:    'Steel production, diamonds (gems and cutting), graphite (pencils, lubricants), carbon fiber, charcoal',
    funFact: 'Every atom of carbon in your body was forged inside a dying star billions of years ago.'
  },

  7: {
    electronConfig: '[He] 2s\u00B2 2p\u00B3',
    meltingPoint:   '-210.01\u00B0C',
    boilingPoint:   '-195.79\u00B0C',
    density:        '1.251 g/L',
    atomicRadius:      '71 pm (covalent radius)',
    electronegativity: '3.04',
    discoveredBy:   'Daniel Rutherford',
    yearDiscovered: '1772',
    description:
      'Nitrogen makes up approximately 78% of Earth\'s atmosphere. Despite being ' +
      'so abundant, N\u2082 is remarkably unreactive because its triple bond is ' +
      'extremely strong. In compounds, nitrogen is essential for all life \u2014 it ' +
      'is a key component of amino acids, proteins, and DNA.',
    uses:    'Fertilizers (via Haber process), explosives, liquid nitrogen cryogenics, food packaging (inert atmosphere)',
    funFact: 'The nitrogen in your DNA was once in the atmosphere, then fixed by bacteria or lightning.'
  },

  8: {
    electronConfig: '[He] 2s\u00B2 2p\u2074',
    meltingPoint:   '-218.79\u00B0C',
    boilingPoint:   '-182.96\u00B0C',
    density:        '1.429 g/L',
    atomicRadius:      '66 pm (covalent radius)',
    electronegativity: '3.44',
    discoveredBy:   'Carl Wilhelm Scheele &amp; Joseph Priestley',
    yearDiscovered: '1774',
    description:
      'Oxygen is the third most abundant element in the universe and the most ' +
      'abundant in Earth\'s crust (46% by mass). It makes up 21% of our atmosphere ' +
      'and is essential for aerobic respiration. The ozone layer (O\u2083) shields ' +
      'Earth from harmful ultraviolet radiation. Oxygen strongly supports combustion.',
    uses:    'Respiration, steel production (blast furnaces), rocket propellant (LOX), medical use, water treatment',
    funFact: 'Oxygen was independently discovered by two scientists \u2014 Scheele in 1772 and Priestley in 1774.'
  },

  9: {
    electronConfig: '[He] 2s\u00B2 2p\u2075',
    meltingPoint:   '-219.67\u00B0C',
    boilingPoint:   '-188.11\u00B0C',
    density:        '1.696 g/L',
    atomicRadius:      '57 pm (covalent radius)',
    electronegativity: '3.98 (highest of all elements)',
    discoveredBy:   'Henri Moissan',
    yearDiscovered: '1886',
    description:
      'Fluorine is the most electronegative and most reactive of all elements. ' +
      'It reacts with almost every substance, including some noble gases. Its ' +
      'compounds are much more stable and widely useful: fluoride prevents tooth ' +
      'decay, and Teflon (PTFE) is one of the most chemically resistant materials known.',
    uses:    'Toothpaste (sodium fluoride), non-stick coatings (Teflon/PTFE), refrigerants, uranium enrichment (UF\u2086)',
    funFact: 'Fluorine is so reactive that glass cannot contain it \u2014 only special nickel alloys work.'
  },

  10: {
    electronConfig: '[He] 2s\u00B2 2p\u2076',
    meltingPoint:   '-248.59\u00B0C',
    boilingPoint:   '-246.08\u00B0C',
    density:        '0.9002 g/L',
    atomicRadius:      '154 pm (van der Waals radius)',
    electronegativity: 'Not assigned (noble gas)',
    discoveredBy:   'William Ramsay &amp; Morris Travers',
    yearDiscovered: '1898',
    description:
      'Neon is a noble gas with a completely full outer electron shell, making it ' +
      'chemically inert. Though it makes up only 0.0018% of Earth\'s atmosphere, ' +
      'it is widely recognized for its distinctive orange-red glow in electric ' +
      'discharge tubes. Neon is obtained commercially by fractional distillation of liquid air.',
    uses:    'Neon signs and lighting, lasers, high-voltage indicators, cryogenic refrigerant, plasma displays',
    funFact: '"Neon" signs may actually use argon, mercury, helium, or xenon \u2014 only orange-red ones use real neon!'
  }

}; /* end ELEMENT_INFO */

/* =============================================================
   SYNTHETIC_ELEMENTS — elements not found in nature;
   produced only in particle accelerators or nuclear reactors.
   Used by index.html to style element symbols in red.
   Tc(43) and Pm(61) have no stable isotopes; elements 93+
   are produced artificially.
   ============================================================= */
var SYNTHETIC_ELEMENTS = {
  43:1, 61:1,
  93:1, 94:1, 95:1, 96:1, 97:1, 98:1, 99:1, 100:1, 101:1, 102:1, 103:1,
  104:1, 105:1, 106:1, 107:1, 108:1, 109:1, 110:1, 111:1, 112:1, 113:1,
  114:1, 115:1, 116:1, 117:1, 118:1
};

/* =============================================================
   ELEMENT_INFO continued — elements 11-118
   ============================================================= */
ELEMENT_INFO[11] = {
  electronConfig:   '[Ne] 3s¹',
  meltingPoint:     '97.72°C',
  boilingPoint:     '883°C',
  density:          '0.968 g/cm³',
  atomicRadius:     '166 pm (covalent radius)',
  electronegativity:'0.93',
  discoveredBy:     'Humphry Davy',
  yearDiscovered:   '1807',
  description:      'Sodium is a soft, silvery metal that reacts vigorously with water, producing hydrogen gas and intense heat. It is essential for animal life — sodium ions drive nerve impulse transmission and maintain blood pressure. The sixth most abundant element in Earth\'s crust, sodium is almost never found in pure form because it reacts instantly with air and moisture.',
  uses:             'Table salt (NaCl), soap (NaOH), glass, street lighting (sodium vapor lamps), paper manufacturing',
  funFact:          'A marble-sized piece of sodium dropped in water skitters across the surface burning orange — and may explode.',
};
ELEMENT_INFO[12] = {
  electronConfig:   '[Ne] 3s²',
  meltingPoint:     '650°C',
  boilingPoint:     '1090°C',
  density:          '1.738 g/cm³',
  atomicRadius:     '141 pm (covalent radius)',
  electronegativity:'1.31',
  discoveredBy:     'Joseph Black (isolated by Humphry Davy)',
  yearDiscovered:   '1808',
  description:      'Magnesium is the lightest structural metal and burns with an intensely white flame. It is vital for over 300 enzyme reactions in the human body and is the central atom in chlorophyll, the molecule that makes plants green and drives photosynthesis. Its name comes from Magnesia, a district in Greece where magnesium carbonate deposits were found.',
  uses:             'Lightweight alloys (aircraft, cars), fireworks and flares, antacids, dietary supplement, photography flash',
  funFact:          'Your body contains about 25 grams of magnesium — and about 60% of it is stored in your bones.',
};
ELEMENT_INFO[13] = {
  electronConfig:   '[Ne] 3s² 3p¹',
  meltingPoint:     '660.3°C',
  boilingPoint:     '2519°C',
  density:          '2.70 g/cm³',
  atomicRadius:     '121 pm (covalent radius)',
  electronegativity:'1.61',
  discoveredBy:     'Hans Christian Ørsted',
  yearDiscovered:   '1825',
  description:      'Aluminum is the most abundant metal in Earth\'s crust and the third most abundant element overall, yet it was rarer than gold in the early 1800s because isolating it was extremely difficult. Today it is one of the most recycled materials on Earth. Aluminum forms a thin transparent oxide layer on its surface that protects it from further corrosion.',
  uses:             'Aircraft and automotive frames, beverage cans, foil, electrical wiring, window frames, cooking utensils',
  funFact:          'The Washington Monument was capped with aluminum in 1884 when it was more valuable than silver.',
};
ELEMENT_INFO[14] = {
  electronConfig:   '[Ne] 3s² 3p²',
  meltingPoint:     '1414°C',
  boilingPoint:     '3265°C',
  density:          '2.329 g/cm³',
  atomicRadius:     '111 pm (covalent radius)',
  electronegativity:'1.90',
  discoveredBy:     'Jöns Jacob Berzelius',
  yearDiscovered:   '1824',
  description:      'Silicon is the second most abundant element in Earth\'s crust (after oxygen) and the foundation of the entire modern electronics industry. A pure silicon crystal is a semiconductor whose conductivity can be precisely controlled by adding tiny amounts of other elements. Silicon dioxide (quartz, sand, glass) is one of the most widespread materials on Earth\'s surface.',
  uses:             'Computer chips, solar cells, glass, concrete, silicone sealants, optical fibers',
  funFact:          'A modern smartphone processor contains over 10 billion silicon transistors — each smaller than a red blood cell.',
};
ELEMENT_INFO[15] = {
  electronConfig:   '[Ne] 3s² 3p³',
  meltingPoint:     '44.15°C (white)',
  boilingPoint:     '280.5°C',
  density:          '1.823 g/cm³ (white)',
  atomicRadius:     '107 pm (covalent radius)',
  electronegativity:'2.19',
  discoveredBy:     'Hennig Brand',
  yearDiscovered:   '1669',
  description:      'Phosphorus exists in several allotropes: white phosphorus glows in the dark and ignites spontaneously in air; red phosphorus is stable and used in safety matches. It is essential for all living things — the backbone of DNA and RNA is made of phosphate groups, and ATP (the energy currency of cells) contains three phosphate groups.',
  uses:             'Fertilizers (most important use), safety matches, detergents, food additives, fireworks',
  funFact:          'Phosphorus was the first element discovered in modern chemistry — Hennig Brand found it by distilling 60 buckets of urine in 1669.',
};
ELEMENT_INFO[16] = {
  electronConfig:   '[Ne] 3s² 3p⁴',
  meltingPoint:     '115.2°C',
  boilingPoint:     '444.7°C',
  density:          '2.07 g/cm³',
  atomicRadius:     '105 pm (covalent radius)',
  electronegativity:'2.58',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Sulfur is a bright yellow, brittle nonmetal known since ancient times as \'brimstone.\' It is essential for life — two amino acids (cysteine and methionine) contain sulfur, creating the disulfide bridges that give proteins their three-dimensional structure. The sulfur dioxide emitted by volcanoes creates acid rain when it combines with water vapor.',
  uses:             'Sulfuric acid (most-produced industrial chemical), fertilizers, rubber vulcanization, matches, fungicides',
  funFact:          'The human body contains about 140 grams of sulfur — it\'s what gives your hair and nails their strength.',
};
ELEMENT_INFO[17] = {
  electronConfig:   '[Ne] 3s² 3p⁵',
  meltingPoint:     '-101.5°C',
  boilingPoint:     '-34.0°C',
  density:          '3.214 g/L',
  atomicRadius:     '102 pm (covalent radius)',
  electronegativity:'3.16',
  discoveredBy:     'Carl Wilhelm Scheele',
  yearDiscovered:   '1774',
  description:      'Chlorine is a yellow-green toxic gas and the most important industrial halogen. Though dangerous in pure form — used as a chemical weapon in World War I — chlorine compounds are essential for water purification (saving millions of lives annually). Table salt (NaCl) and the chloride ion are fundamental to biology.',
  uses:             'Water purification, PVC plastic, bleach, pharmaceuticals, pesticides, pool sanitation',
  funFact:          'More than 90% of all medicines contain chlorine at some stage in their production, even if it\'s not in the final drug.',
};
ELEMENT_INFO[18] = {
  electronConfig:   '[Ne] 3s² 3p⁶',
  meltingPoint:     '-189.3°C',
  boilingPoint:     '-185.9°C',
  density:          '1.784 g/L',
  atomicRadius:     '188 pm (van der Waals radius)',
  electronegativity:'Not assigned (noble gas)',
  discoveredBy:     'Lord Rayleigh &amp; William Ramsay',
  yearDiscovered:   '1894',
  description:      'Argon is the most abundant noble gas on Earth, making up 0.93% of the atmosphere — more than carbon dioxide. It is completely inert and forms no chemical compounds under ordinary conditions. Because argon is heavier than air and non-reactive, it provides a protective blanket in welding to prevent metals from reacting with oxygen at high temperatures.',
  uses:             'Welding shielding gas, incandescent and fluorescent light bulbs, argon lasers, wine preservation, museum artifact storage',
  funFact:          'Every breath you take contains about 10 times more argon than carbon dioxide, yet argon gets far less attention.',
};
ELEMENT_INFO[19] = {
  electronConfig:   '[Ar] 4s¹',
  meltingPoint:     '63.5°C',
  boilingPoint:     '759°C',
  density:          '0.862 g/cm³',
  atomicRadius:     '203 pm (covalent radius)',
  electronegativity:'0.82',
  discoveredBy:     'Humphry Davy',
  yearDiscovered:   '1807',
  description:      'Potassium is a soft, silvery-white alkali metal so reactive it ignites spontaneously in air. It is an essential nutrient for all living organisms — the K⁺ ion is the primary cation inside animal cells, and the balance between potassium and sodium drives every electrical signal in your nervous system. The human body contains about 140 grams of potassium.',
  uses:             'Fertilizers (largest use), potassium chloride (salt substitute), gunpowder, glass, food preservatives',
  funFact:          'The symbol K comes from \'Kalium\' — the Medieval Latin for potash (potassium carbonate), derived from wood ash.',
};
ELEMENT_INFO[20] = {
  electronConfig:   '[Ar] 4s²',
  meltingPoint:     '842°C',
  boilingPoint:     '1484°C',
  density:          '1.55 g/cm³',
  atomicRadius:     '176 pm (covalent radius)',
  electronegativity:'1.00',
  discoveredBy:     'Humphry Davy',
  yearDiscovered:   '1808',
  description:      'Calcium is the most abundant mineral in the human body — a 70 kg person contains about 1 kg of calcium, mostly in bones and teeth as calcium phosphate. It is also essential for muscle contraction, nerve transmission, and blood clotting. Calcium carbonate (limestone, chalk, marble) is one of the most common minerals on Earth.',
  uses:             'Cement and concrete (calcium silicate), plaster, antacids, dietary supplements, steel making, water treatment',
  funFact:          'The Great Wall of China and the Colosseum were both built with calcium-based mortar that has lasted over 2,000 years.',
};
ELEMENT_INFO[21] = {
  electronConfig:   '[Ar] 3d¹ 4s²',
  meltingPoint:     '1541°C',
  boilingPoint:     '2836°C',
  density:          '2.985 g/cm³',
  atomicRadius:     '170 pm (covalent radius)',
  electronegativity:'1.36',
  discoveredBy:     'Lars Fredrik Nilson',
  yearDiscovered:   '1879',
  description:      'Scandium is a rare, silvery-white metal predicted by Mendeleev before its discovery. Though found in over 800 minerals, it is never concentrated enough for economical extraction — most of the world\'s supply comes as a byproduct of uranium refining. Small additions to aluminum dramatically increase strength, making scandium-aluminum alloys prized in aerospace.',
  uses:             'Aluminum-scandium alloys (aircraft parts, bicycle frames, baseball bats), high-intensity metal halide lamps',
  funFact:          'Mendeleev predicted scandium\'s existence in 1871, calling it \'eka-boron.\' Its discovery 8 years later was one of the great validations of the periodic table.',
};
ELEMENT_INFO[22] = {
  electronConfig:   '[Ar] 3d² 4s²',
  meltingPoint:     '1668°C',
  boilingPoint:     '3287°C',
  density:          '4.506 g/cm³',
  atomicRadius:     '160 pm (covalent radius)',
  electronegativity:'1.54',
  discoveredBy:     'William Gregor',
  yearDiscovered:   '1791',
  description:      'Titanium is remarkably strong for its density — it is as strong as steel but 45% lighter. Its most extraordinary property is biocompatibility: the human body does not reject it, allowing its use in implants and prosthetics. Titanium naturally forms a tough, transparent oxide coating that makes it highly resistant to corrosion in seawater, acids, and the human body.',
  uses:             'Aircraft and spacecraft frames, joint and dental implants, bicycle frames, military armor, TiO₂ white paint pigment',
  funFact:          'The SR-71 Blackbird spy plane was 85% titanium — and the CIA secretly bought most of the world\'s titanium supply from the Soviet Union to build it.',
};
ELEMENT_INFO[23] = {
  electronConfig:   '[Ar] 3d³ 4s²',
  meltingPoint:     '1910°C',
  boilingPoint:     '3407°C',
  density:          '6.11 g/cm³',
  atomicRadius:     '153 pm (covalent radius)',
  electronegativity:'1.63',
  discoveredBy:     'Andrés Manuel del Río / Nils Gabriel Sefström',
  yearDiscovered:   '1801/1830',
  description:      'Vanadium is a hard, silvery-grey metal named after Vanadis, the Norse goddess of beauty, because of the beautiful colors its compounds form. Small amounts added to steel dramatically increase its hardness and strength. Some marine creatures (sea cucumbers, certain tunicates) concentrate vanadium in their blood in remarkable quantities.',
  uses:             'High-strength steel alloys (tools, springs, axles), vanadium redox flow batteries, catalysts for sulfuric acid production',
  funFact:          'Vanadium was discovered twice: first in 1801 by del Río, who was then talked out of his own discovery, and again in 1830 by Sefström.',
};
ELEMENT_INFO[24] = {
  electronConfig:   '[Ar] 3d⁵ 4s¹',
  meltingPoint:     '1907°C',
  boilingPoint:     '2671°C',
  density:          '7.19 g/cm³',
  atomicRadius:     '139 pm (covalent radius)',
  electronegativity:'1.66',
  discoveredBy:     'Louis Nicolas Vauquelin',
  yearDiscovered:   '1798',
  description:      'Chromium gives stainless steel its resistance to rust — just 10% chromium prevents iron from corroding by forming an invisible, self-healing oxide layer. Its name comes from the Greek \'chroma\' (color) because its compounds are vividly colored: chromium gives rubies their red color and emeralds their green.',
  uses:             'Stainless steel, chrome plating, pigments (chrome green, chrome yellow), leather tanning, tool steel',
  funFact:          'The color of a ruby (red) and an emerald (green) both come from chromium impurities — the same element creates opposite colors in different crystal environments.',
};
ELEMENT_INFO[25] = {
  electronConfig:   '[Ar] 3d⁵ 4s²',
  meltingPoint:     '1246°C',
  boilingPoint:     '2061°C',
  density:          '7.21 g/cm³',
  atomicRadius:     '161 pm (covalent radius)',
  electronegativity:'1.55',
  discoveredBy:     'Johan Gottlieb Gahn',
  yearDiscovered:   '1774',
  description:      'Manganese is a hard, brittle metal essential in steelmaking — about 90% of all manganese goes to the steel industry. It is also an essential trace element in all known living organisms, serving as a cofactor for hundreds of enzymes. The deep ocean floor contains vast manganese nodules mixed with iron, cobalt, and nickel.',
  uses:             'Steel hardening, aluminum alloy cans, dry cell batteries (MnO₂), pigments, water purification, dietary supplement',
  funFact:          'Manganese ore was used by cave painters in prehistoric times for black and brown pigments. Neanderthals collected it at least 175,000 years ago.',
};
ELEMENT_INFO[26] = {
  electronConfig:   '[Ar] 3d⁶ 4s²',
  meltingPoint:     '1538°C',
  boilingPoint:     '2862°C',
  density:          '7.874 g/cm³',
  atomicRadius:     '132 pm (covalent radius)',
  electronegativity:'1.83',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Iron is the most important metal in human civilization and the fourth most abundant element in Earth\'s crust. Earth\'s inner core is a solid iron-nickel sphere, and the outer core is liquid iron whose convection generates Earth\'s protective magnetic field. In biology, iron is the central atom in hemoglobin, the protein that carries oxygen in red blood cells.',
  uses:             'Steel (primary use), cast iron, electrical motors and transformers, catalysts (Haber process for ammonia)',
  funFact:          'All the iron on Earth was forged in the cores of stars that exploded before our solar system formed. You are literally made of stardust.',
};
ELEMENT_INFO[27] = {
  electronConfig:   '[Ar] 3d⁷ 4s²',
  meltingPoint:     '1495°C',
  boilingPoint:     '2927°C',
  density:          '8.90 g/cm³',
  atomicRadius:     '126 pm (covalent radius)',
  electronegativity:'1.88',
  discoveredBy:     'Georg Brandt',
  yearDiscovered:   '1735',
  description:      'Cobalt is a hard, lustrous metal whose compounds have been used as blue pigments in glass and ceramics for thousands of years. Cobalt is essential for vitamin B₁₂ (cobalamin), the only vitamin with a metal atom at its center. In modern technology, cobalt is critical for lithium-ion batteries that power electric vehicles and smartphones.',
  uses:             'Lithium-cobalt battery cathodes, superalloys (jet engines), cobalt-blue glass and ceramics, magnets, vitamin B₁₂',
  funFact:          'The name cobalt comes from the German \'Kobold\' (goblin) — medieval miners blamed mischievous spirits when smelting cobalt ores released toxic arsenic fumes.',
};
ELEMENT_INFO[28] = {
  electronConfig:   '[Ar] 3d⁸ 4s²',
  meltingPoint:     '1455°C',
  boilingPoint:     '2913°C',
  density:          '8.908 g/cm³',
  atomicRadius:     '124 pm (covalent radius)',
  electronegativity:'1.91',
  discoveredBy:     'Axel Fredrik Cronstedt',
  yearDiscovered:   '1751',
  description:      'Nickel is a hard, silvery metal highly resistant to corrosion. Earth\'s core is thought to be largely iron and nickel. Nickel is a key ingredient in stainless steel and superalloys used in jet engines. It is also an important catalyst in hydrogenation reactions used to make margarine and biodiesel.',
  uses:             'Stainless steel, coins, nickel-metal hydride batteries, magnets, electroplating, food-oil hydrogenation catalysts',
  funFact:          'The US 5-cent "nickel" coin contains only 25% nickel — the rest is copper. Canada\'s nickel coin was 99.9% pure nickel from 1922 to 1981.',
};
ELEMENT_INFO[29] = {
  electronConfig:   '[Ar] 3d¹⁰ 4s¹',
  meltingPoint:     '1084.6°C',
  boilingPoint:     '2562°C',
  density:          '8.96 g/cm³',
  atomicRadius:     '132 pm (covalent radius)',
  electronegativity:'1.90',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Copper has the highest electrical conductivity of any metal except silver, making it the standard for electrical wiring. It has been used by humans for over 10,000 years and was the first metal ever worked by our species. Copper has natural antimicrobial properties — bacteria, viruses, and fungi die on contact with copper surfaces. Bronze (copper + tin) defined an entire era of human civilization.',
  uses:             'Electrical wiring and motors, plumbing pipes, coins, brass and bronze alloys, antimicrobial surfaces, heat exchangers',
  funFact:          'The Statue of Liberty was a shiny reddish-brown color when unveiled in 1886. It took about 30 years to turn its current green patina.',
};
ELEMENT_INFO[30] = {
  electronConfig:   '[Ar] 3d¹⁰ 4s²',
  meltingPoint:     '419.5°C',
  boilingPoint:     '907°C',
  density:          '7.134 g/cm³',
  atomicRadius:     '122 pm (covalent radius)',
  electronegativity:'1.65',
  discoveredBy:     'Andreas Sigismund Marggraf',
  yearDiscovered:   '1746',
  description:      'Zinc is a bluish-white metal essential for life — over 300 enzymes in the human body require zinc to function, and it plays critical roles in immune function and wound healing. Its most important industrial use is galvanizing (coating) steel to prevent rust. Zinc is the fourth most widely used metal, after iron, aluminum, and copper.',
  uses:             'Galvanizing steel (rust prevention), brass alloy, die casting, sunscreen (zinc oxide), dietary supplement, batteries',
  funFact:          'The human body contains about 2.3 grams of zinc. Oysters contain more zinc per serving than any other food.',
};
ELEMENT_INFO[31] = {
  electronConfig:   '[Ar] 3d¹⁰ 4s² 4p¹',
  meltingPoint:     '29.76°C',
  boilingPoint:     '2204°C',
  density:          '5.91 g/cm³',
  atomicRadius:     '122 pm (covalent radius)',
  electronegativity:'1.81',
  discoveredBy:     'Paul Émile Lecoq de Boisbaudran',
  yearDiscovered:   '1875',
  description:      'Gallium is a remarkable metal that melts at just 29.76°C — below normal body temperature — so it liquefies when you hold it in your hand. Its melting point was predicted by Mendeleev before its discovery confirmed his periodic table. Gallium arsenide and gallium nitride are critical semiconductors used in LEDs, solar cells, and high-speed electronics.',
  uses:             'Gallium arsenide chips (smartphones, satellites), LEDs and laser diodes, gallium nitride power electronics, semiconductors',
  funFact:          'A spoon made of gallium will melt as you stir your tea — its melting point of 29.76°C is just below the temperature of a hot drink.',
};
ELEMENT_INFO[32] = {
  electronConfig:   '[Ar] 3d¹⁰ 4s² 4p²',
  meltingPoint:     '938.3°C',
  boilingPoint:     '2833°C',
  density:          '5.323 g/cm³',
  atomicRadius:     '120 pm (covalent radius)',
  electronegativity:'2.01',
  discoveredBy:     'Clemens Winkler',
  yearDiscovered:   '1886',
  description:      'Germanium was predicted by Mendeleev in 1871 as \'eka-silicon\' with remarkable accuracy — he predicted its atomic mass, density, and properties before it was discovered 15 years later. This was one of the greatest triumphs in the history of the periodic table. Germanium is a semiconductor used in fiber-optic cables and was used in the first transistors.',
  uses:             'Fiber-optic cables (Ge-doped glass), infrared optics and cameras, solar cells, gamma-ray detectors, early transistors',
  funFact:          'Germanium\'s discovery in 1886 precisely matched Mendeleev\'s 1871 prediction — same density, same oxide formula, same chemical behavior. Chemistry\'s greatest prophetic moment.',
};
ELEMENT_INFO[33] = {
  electronConfig:   '[Ar] 3d¹⁰ 4s² 4p³',
  meltingPoint:     '817°C (sublimes at 614°C)',
  boilingPoint:     '614°C (sublimation)',
  density:          '5.727 g/cm³',
  atomicRadius:     '119 pm (covalent radius)',
  electronegativity:'2.18',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Arsenic has been known since ancient times as a notorious poison — arsenic trioxide was called \'inheritance powder\' in the Middle Ages and was used in countless murders. Today arsenic compounds are used in semiconductors (gallium arsenide) and wood preservatives. It naturally occurs in groundwater in some regions, causing chronic poisoning.',
  uses:             'Gallium arsenide semiconductors, wood preservative (CCA), herbicides, lead shot hardening, glass manufacturing',
  funFact:          'Napoleon Bonaparte may have been slowly poisoned by arsenic in the green wallpaper dye of his damp St. Helena home — his hair samples show elevated arsenic levels.',
};
ELEMENT_INFO[34] = {
  electronConfig:   '[Ar] 3d¹⁰ 4s² 4p⁴',
  meltingPoint:     '220.8°C',
  boilingPoint:     '685°C',
  density:          '4.81 g/cm³',
  atomicRadius:     '120 pm (covalent radius)',
  electronegativity:'2.55',
  discoveredBy:     'Jöns Jacob Berzelius',
  yearDiscovered:   '1817',
  description:      'Selenium is an essential trace element for humans — the enzyme glutathione peroxidase, which protects cells from oxidative damage, requires selenium. It is a semiconductor whose electrical conductivity increases when exposed to light, leading to its early use in photoelectric cells and photocopiers. Selenium-doped glass is used to create red glass in traffic lights.',
  uses:             'Photovoltaic cells, red glass (traffic lights), dietary supplement, dandruff shampoo (selenium sulfide), rectifiers',
  funFact:          'Brazil nuts contain more selenium than any other food — just two nuts provide the recommended daily intake. Eating too many can cause selenium toxicity.',
};
ELEMENT_INFO[35] = {
  electronConfig:   '[Ar] 3d¹⁰ 4s² 4p⁵',
  meltingPoint:     '-7.2°C',
  boilingPoint:     '58.8°C',
  density:          '3.11 g/cm³ (liquid)',
  atomicRadius:     '120 pm (covalent radius)',
  electronegativity:'2.96',
  discoveredBy:     'Antoine Jérôme Balard',
  yearDiscovered:   '1826',
  description:      'Bromine is one of only two elements that is liquid at room temperature (the other is mercury). It is a dark red-brown, fuming liquid with a suffocating odor — its name comes from the Greek \'bromos\' (stench). Natural bromine is obtained from seawater and salt lakes. Bromine compounds are used in flame retardants, pharmaceuticals, and photography.',
  uses:             'Flame retardants (furniture, electronics), pharmaceuticals, water treatment, agricultural fumigants, dyes',
  funFact:          'The ancient Phoenician dye Tyrian purple — worn only by royalty and once worth more than gold — came from bromine-containing compounds extracted from sea snails.',
};
ELEMENT_INFO[36] = {
  electronConfig:   '[Ar] 3d¹⁰ 4s² 4p⁶',
  meltingPoint:     '-157.4°C',
  boilingPoint:     '-153.2°C',
  density:          '3.749 g/L',
  atomicRadius:     '202 pm (van der Waals radius)',
  electronegativity:'3.00',
  discoveredBy:     'William Ramsay &amp; Morris Travers',
  yearDiscovered:   '1898',
  description:      'Krypton is a dense noble gas that produces a brilliant white light in electric discharge tubes. The krypton-86 isotope was the official definition of the meter from 1960 to 1983. Though largely inert, krypton can form some compounds under extreme conditions — KrF₂ was synthesized in 1963, making krypton one of the few noble gases with confirmed chemistry.',
  uses:             'High-intensity runway lighting, flash photography, krypton lasers, energy-efficient window insulation (Kr between panes)',
  funFact:          'Krypton-86 defined the official length of a meter for 23 years. Superman\'s home planet was named after this real element — though the fictional planet has nothing else in common.',
};ELEMENT_INFO[37] = {
  electronConfig:   '[Kr] 5s¹',
  meltingPoint:     '39.3°C',
  boilingPoint:     '688°C',
  density:          '1.532 g/cm³',
  atomicRadius:     '220 pm (covalent radius)',
  electronegativity:'0.82',
  discoveredBy:     'Robert Bunsen &amp; Gustav Kirchhoff',
  yearDiscovered:   '1861',
  description:      'Rubidium is a soft, silvery alkali metal so reactive it ignites spontaneously in air and explodes in water. It was one of the first elements discovered by spectroscopy — its characteristic deep red spectral lines gave it its name (Latin \'rubidus,\' deep red). Rubidium atomic clocks are the most common type of atomic clock, used in GPS satellites and telecommunications networks.',
  uses:             'Atomic clocks (GPS, telecom), photovoltaic cells, research (Bose-Einstein condensates), specialty glasses',
  funFact:          'Rubidium has enough in common with potassium that plants absorb it from soil as if it were potassium. You have a small amount of rubidium in your body right now.',
};
ELEMENT_INFO[38] = {
  electronConfig:   '[Kr] 5s²',
  meltingPoint:     '777°C',
  boilingPoint:     '1382°C',
  density:          '2.64 g/cm³',
  atomicRadius:     '195 pm (covalent radius)',
  electronegativity:'0.95',
  discoveredBy:     'Adair Crawford',
  yearDiscovered:   '1790',
  description:      'Strontium is a silvery-white alkaline earth metal that burns with a brilliant crimson red flame — the same color seen in red fireworks and flares. Its chemical behavior closely mimics calcium, which means the body can absorb strontium in place of calcium. Radioactive strontium-90 from 1950s nuclear tests accumulated in the bones and teeth of children worldwide.',
  uses:             'Red fireworks and flares, strontium titanate (imitation diamond), ferrite magnets, specialty ceramics, nuclear medicine',
  funFact:          'Strontium-90 from 1950s nuclear tests can still be detected in the bones and teeth of people born before 1963 worldwide.',
};
ELEMENT_INFO[39] = {
  electronConfig:   '[Kr] 4d¹ 5s²',
  meltingPoint:     '1522°C',
  boilingPoint:     '3345°C',
  density:          '4.472 g/cm³',
  atomicRadius:     '190 pm (covalent radius)',
  electronegativity:'1.22',
  discoveredBy:     'Johan Gadolin',
  yearDiscovered:   '1794',
  description:      'Yttrium is a silvery metal chemically similar to the lanthanides and often found with them in minerals. It plays a crucial role in modern display technology: yttrium compounds are key phosphors in LED displays and fluorescent lights. Yttrium aluminum garnet (YAG) is used in the most common solid-state laser. It is also essential in superconducting ceramics.',
  uses:             'Red phosphors in LEDs and screens, YAG lasers, superconducting ceramics (YBCO), radar equipment, alloy strengthening',
  funFact:          'Yttrium, ytterbium, terbium, and erbium were all discovered in a single mine in Ytterby, Sweden — the village holds the record for elements named after one place.',
};
ELEMENT_INFO[40] = {
  electronConfig:   '[Kr] 4d² 5s²',
  meltingPoint:     '1855°C',
  boilingPoint:     '4409°C',
  density:          '6.511 g/cm³',
  atomicRadius:     '175 pm (covalent radius)',
  electronegativity:'1.33',
  discoveredBy:     'Martin Heinrich Klaproth',
  yearDiscovered:   '1789',
  description:      'Zirconium is a lustrous metal with exceptional corrosion resistance — it is practically immune to attack by most acids, alkalis, and seawater. Its most important nuclear property is that it is nearly transparent to neutrons, making it ideal for nuclear reactor fuel rod cladding. Zirconium dioxide (zirconia) is an extremely hard ceramic used as a diamond simulant and in dental crowns.',
  uses:             'Nuclear reactor fuel cladding, zirconia ceramics (dental implants, cubic zirconia gems), chemical pumps and valves',
  funFact:          'Cubic zirconia (ZrO₂) is virtually indistinguishable from diamond to the naked eye and is used in most imitation diamond jewelry sold today.',
};
ELEMENT_INFO[41] = {
  electronConfig:   '[Kr] 4d⁴ 5s¹',
  meltingPoint:     '2477°C',
  boilingPoint:     '4744°C',
  density:          '8.57 g/cm³',
  atomicRadius:     '164 pm (covalent radius)',
  electronegativity:'1.60',
  discoveredBy:     'Charles Hatchett',
  yearDiscovered:   '1801',
  description:      'Niobium is a soft, grey metal with a high melting point and excellent superconducting properties at low temperatures. It is a critical additive to high-strength steels used in pipelines and automotive parts. Niobium-tin and niobium-titanium alloys are the most widely used superconducting materials in the world, found in particle accelerators (like CERN\'s LHC) and MRI machines.',
  uses:             'High-strength steel alloys (pipelines, cars), superconducting magnets (MRI, particle accelerators), jet engines, coins',
  funFact:          'The Large Hadron Collider at CERN uses 7,600 superconducting niobium-titanium magnets cooled to ∜271°C — colder than outer space — to bend its proton beams.',
};
ELEMENT_INFO[42] = {
  electronConfig:   '[Kr] 4d⁵ 5s¹',
  meltingPoint:     '2623°C',
  boilingPoint:     '4639°C',
  density:          '10.28 g/cm³',
  atomicRadius:     '154 pm (covalent radius)',
  electronegativity:'2.16',
  discoveredBy:     'Carl Wilhelm Scheele',
  yearDiscovered:   '1778',
  description:      'Molybdenum has one of the highest melting points of all metals (2623°C) and is extremely strong at high temperatures. It is also an essential micronutrient — the enzyme nitrogenase, which converts atmospheric nitrogen into usable ammonia (critical for plant nutrition), requires molybdenum at its active site. Without molybdenum, plants cannot fix nitrogen from the air.',
  uses:             'High-strength steel and superalloys (aircraft, engine parts), catalysts, lubricant (MoS₂), biological enzyme cofactor',
  funFact:          'Molybdenum is the only Period 5 element essential for almost all life. Most of the nitrogen in your body\'s proteins passed through a molybdenum-containing enzyme at some point.',
};
ELEMENT_INFO[43] = {
  electronConfig:   '[Kr] 4d⁵ 5s²',
  meltingPoint:     '2157°C',
  boilingPoint:     '4265°C',
  density:          '11.5 g/cm³',
  atomicRadius:     '147 pm (covalent radius)',
  electronegativity:'1.90',
  discoveredBy:     'Carlo Perrier &amp; Emilio Segrè',
  yearDiscovered:   '1937',
  description:      'Technetium was the first element to be produced artificially — created in 1937 by bombarding molybdenum with deuterons in a cyclotron. It has no stable isotopes; all forms are radioactive. However, technetium-99m is the most widely used medical isotope in the world, used in about 20 million diagnostic scans annually because it emits ideal gamma rays and has a short 6-hour half-life.',
  uses:             'Medical diagnostic imaging (Tc-99m bone scans, cardiac stress tests, cancer detection) — the dominant modern use',
  funFact:          'Technetium-99m is used in one-third of all nuclear medicine procedures worldwide. Each dose decays to harmless ruthenium within 24 hours.',
};
ELEMENT_INFO[44] = {
  electronConfig:   '[Kr] 4d⁷ 5s¹',
  meltingPoint:     '2334°C',
  boilingPoint:     '4150°C',
  density:          '12.45 g/cm³',
  atomicRadius:     '146 pm (covalent radius)',
  electronegativity:'2.20',
  discoveredBy:     'Karl Ernst Claus',
  yearDiscovered:   '1844',
  description:      'Ruthenium is a rare, hard, silvery-white platinum group metal. It is a remarkable catalyst — ruthenium-based catalysts are used in fuel cells and are central to the Grubbs metathesis reaction that won the 2005 Nobel Prize in Chemistry. Ruthenium also improves the hardness and corrosion resistance of platinum and palladium alloys.',
  uses:             'Platinum alloy hardener, electrical contacts, catalysts, ruthenium-based solar cells, hard disk coatings',
  funFact:          'Ruthenium was named after Ruthenia, the Latin name for Russia — fitting for an element discovered by a German-Estonian chemist at the University of Kazan.',
};
ELEMENT_INFO[45] = {
  electronConfig:   '[Kr] 4d⁸ 5s¹',
  meltingPoint:     '1964°C',
  boilingPoint:     '3695°C',
  density:          '12.41 g/cm³',
  atomicRadius:     '142 pm (covalent radius)',
  electronegativity:'2.28',
  discoveredBy:     'William Hyde Wollaston',
  yearDiscovered:   '1803',
  description:      'Rhodium is the rarest and most expensive of the platinum group metals — more expensive than gold or platinum. It is a critical component of catalytic converters, specifically reducing nitrogen oxides (NOₓ) into harmless nitrogen gas. Its name comes from the Greek \'rhodon\' (rose) for the rose-red color of its salts.',
  uses:             'Catalytic converters (NOₓ reduction), platinum alloy hardener, high-reflectance mirrors, electroplating jewelry',
  funFact:          'Rhodium is so rare that the entire world\'s annual production would fit in a cube about 80 cm on a side.',
};
ELEMENT_INFO[46] = {
  electronConfig:   '[Kr] 4d¹⁰',
  meltingPoint:     '1554.9°C',
  boilingPoint:     '2963°C',
  density:          '12.023 g/cm³',
  atomicRadius:     '139 pm (covalent radius)',
  electronegativity:'2.20',
  discoveredBy:     'William Hyde Wollaston',
  yearDiscovered:   '1803',
  description:      'Palladium is unusual among transition metals in having an electron configuration with no outer s electrons — all 10 d electrons fill before any 5s electrons, making it an exception to normal filling rules. It absorbs hydrogen gas so readily — up to 900 times its own volume — that it is used to purify hydrogen for fuel cells. Palladium catalysts are essential in organic chemistry and pharmaceutical synthesis.',
  uses:             'Catalytic converters (hydrocarbon oxidation), hydrogen purification, electronics soldering, jewelry (white gold alloy)',
  funFact:          'Palladium can absorb 900 times its own volume of hydrogen — making it the best hydrogen sponge known and key to hydrogen fuel cell technology.',
};
ELEMENT_INFO[47] = {
  electronConfig:   '[Kr] 4d¹⁰ 5s¹',
  meltingPoint:     '961.8°C',
  boilingPoint:     '2162°C',
  density:          '10.49 g/cm³',
  atomicRadius:     '145 pm (covalent radius)',
  electronegativity:'1.93',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Silver has the highest electrical conductivity of all elements — higher even than copper. It also has the highest thermal conductivity and the highest optical reflectivity of all metals. Silver has powerful antimicrobial properties and was used in medicine long before antibiotics. Silver nanoparticles are now used in antibacterial clothing and wound dressings.',
  uses:             'Electronics (contacts, RFID), photography (silver halides), mirrors, jewelry, coins, antibacterial applications',
  funFact:          'Silver\'s chemical symbol Ag comes from \'argentum\' — the Latin name that also gave Argentina its name. The country was named for its rumored silver mountains.',
};
ELEMENT_INFO[48] = {
  electronConfig:   '[Kr] 4d¹⁰ 5s²',
  meltingPoint:     '321.1°C',
  boilingPoint:     '767°C',
  density:          '8.65 g/cm³',
  atomicRadius:     '144 pm (covalent radius)',
  electronegativity:'1.69',
  discoveredBy:     'Friedrich Stromeyer',
  yearDiscovered:   '1817',
  description:      'Cadmium is a soft, bluish-white metal that is highly toxic and a known carcinogen, accumulating in kidneys. Despite its toxicity, it has important industrial uses. Cadmium telluride (CdTe) thin-film solar panels are among the most cost-effective solar cells available. Nickel-cadmium (NiCd) batteries were the standard rechargeable battery before lithium-ion technology.',
  uses:             'Cadmium telluride solar panels, NiCd batteries (being phased out), yellow/orange pigments, electroplating, nuclear reactor neutron absorbers',
  funFact:          'Japan\'s itai-itai (\'ouch-ouch\') disease of the 1950s was caused by cadmium-contaminated irrigation water from mining runoff — it caused brittle bones that broke with every step.',
};
ELEMENT_INFO[49] = {
  electronConfig:   '[Kr] 4d¹⁰ 5s² 5p¹',
  meltingPoint:     '156.6°C',
  boilingPoint:     '2072°C',
  density:          '7.31 g/cm³',
  atomicRadius:     '142 pm (covalent radius)',
  electronegativity:'1.78',
  discoveredBy:     'Ferdinand Reich &amp; Hieronymous Richter',
  yearDiscovered:   '1863',
  description:      'Indium is a soft, malleable metal with a peculiar property: when bent, it emits a high-pitched \'cry\' due to twinning of its crystal structure. Its most important use is in indium tin oxide (ITO), a transparent electrical conductor that is the standard coating for touchscreens in smartphones, tablets, and LCD displays. Almost all touchscreen devices depend on indium.',
  uses:             'Indium tin oxide (ITO) for touchscreens, LCD displays, low-melting-point alloys, semiconductors (InP, InGaAs)',
  funFact:          'Every time you use a touchscreen, your finger is detected by a thin transparent layer of indium tin oxide — there is about 0.1 grams of indium in a typical smartphone screen.',
};
ELEMENT_INFO[50] = {
  electronConfig:   '[Kr] 4d¹⁰ 5s² 5p²',
  meltingPoint:     '231.9°C',
  boilingPoint:     '2602°C',
  density:          '7.287 g/cm³',
  atomicRadius:     '139 pm (covalent radius)',
  electronegativity:'1.96',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Tin has been known since antiquity and was crucial to the Bronze Age — bronze (90% copper, 10% tin) is significantly harder than either pure metal. Tin is unusual in having the most stable isotopes of any element (10 isotopes). It does not rust, making it useful for food container coating. When bent, tin emits a distinctive \'tin cry\' from the reorientation of its crystal structure.',
  uses:             'Solder (tin-lead, tin-silver), food can coatings, bronze alloy, glass making (float glass), organotin stabilizers',
  funFact:          '\'Tin cans\' are actually steel cans with a thin tin coating — only about 0.15 grams of tin in a typical food can.',
};
ELEMENT_INFO[51] = {
  electronConfig:   '[Kr] 4d¹⁰ 5s² 5p³',
  meltingPoint:     '630.6°C',
  boilingPoint:     '1587°C',
  density:          '6.685 g/cm³',
  atomicRadius:     '139 pm (covalent radius)',
  electronegativity:'2.05',
  discoveredBy:     'Known since ~15th century',
  yearDiscovered:   '~1400',
  description:      'Antimony is a metalloid known since ancient times — galena containing antimony was used as kohl eye makeup in ancient Egypt. It is brittle and a poor thermal and electrical conductor. Antimony compounds are widely used as flame retardants in plastics, textiles, and electronics. The drug sodium stibogluconate treats leishmaniasis, a serious parasitic disease.',
  uses:             'Flame retardants, lead-acid battery alloy (hardener), antimonide semiconductors, glass clarifying agent',
  funFact:          'The alchemical symbol for antimony came from the observation that pigs fed antimony-rich slag became fat and healthy — but monks who ate it died. They called it \'anti-monk\' as a dark joke.',
};
ELEMENT_INFO[52] = {
  electronConfig:   '[Kr] 4d¹⁰ 5s² 5p⁴',
  meltingPoint:     '449.5°C',
  boilingPoint:     '988°C',
  density:          '6.232 g/cm³',
  atomicRadius:     '138 pm (covalent radius)',
  electronegativity:'2.10',
  discoveredBy:     'Franz-Joseph Müller von Reichenstein',
  yearDiscovered:   '1782',
  description:      'Tellurium is one of the rarest stable solid elements in Earth\'s crust — rarer than gold. Despite its scarcity, it has become strategically important as the primary material in cadmium telluride (CdTe) thin-film solar panels. Tellurium gives a distinctive garlic-like odor to breath and sweat even in tiny doses, and was named after the Latin \'tellus\' (Earth).',
  uses:             'CdTe thin-film solar panels (largest use), thermoelectric devices, rubber vulcanization, bismuth telluride (Peltier coolers)',
  funFact:          'Tellurium is the third rarest stable element in Earth\'s crust — rarer than gold — yet it\'s in millions of solar panels being installed every year.',
};
ELEMENT_INFO[53] = {
  electronConfig:   '[Kr] 4d¹⁰ 5s² 5p⁵',
  meltingPoint:     '113.7°C',
  boilingPoint:     '184.4°C',
  density:          '4.933 g/cm³',
  atomicRadius:     '139 pm (covalent radius)',
  electronegativity:'2.66',
  discoveredBy:     'Bernard Courtois',
  yearDiscovered:   '1811',
  description:      'Iodine is the heaviest stable halogen and forms shiny violet-black crystals at room temperature. It is essential for thyroid hormone synthesis — thyroid hormones regulate metabolism, and iodine deficiency causes goiter and intellectual impairment. Iodized salt (addition of potassium iodide to table salt) is one of the most cost-effective public health interventions in history.',
  uses:             'Thyroid medications, iodized salt, antiseptics (iodine tincture, povidone-iodine), X-ray contrast agents, photography',
  funFact:          'Iodine deficiency is the leading preventable cause of intellectual disability in the world. Adding iodine to salt costs less than $0.10 per person per year.',
};
ELEMENT_INFO[54] = {
  electronConfig:   '[Kr] 4d¹⁰ 5s² 5p⁶',
  meltingPoint:     '-111.8°C',
  boilingPoint:     '-108.0°C',
  density:          '5.894 g/L',
  atomicRadius:     '216 pm (van der Waals radius)',
  electronegativity:'2.60',
  discoveredBy:     'William Ramsay &amp; Morris Travers',
  yearDiscovered:   '1898',
  description:      'Xenon is the heaviest stable noble gas in significant natural abundance and has some unusual chemical properties for a noble gas — it forms well-characterized compounds with fluorine and oxygen. Xenon is used as a general anesthetic in surgery and as the propellant in ion thrusters on spacecraft. High-intensity xenon arc lamps produce light very close to natural sunlight.',
  uses:             'Xenon arc lamps (projectors, solar simulators), anesthesia, ion thrusters (spacecraft), CT scan contrast agents',
  funFact:          'NASA\'s Dawn spacecraft used xenon ion thrusters to orbit both asteroid Vesta and dwarf planet Ceres — the first spacecraft to orbit two separate extraterrestrial bodies.',
};
ELEMENT_INFO[55] = {
  electronConfig:   '[Xe] 6s¹',
  meltingPoint:     '28.44°C',
  boilingPoint:     '671°C',
  density:          '1.93 g/cm³',
  atomicRadius:     '244 pm (covalent radius)',
  electronegativity:'0.79',
  discoveredBy:     'Robert Bunsen &amp; Gustav Kirchhoff',
  yearDiscovered:   '1860',
  description:      'Cesium has the lowest electronegativity and ionization energy of all stable elements, making it the most reactive metal. It melts at 28.44°C — often liquid at room temperature. Cesium was the first element discovered using spectroscopy (1860), identified by the characteristic blue spectral lines that give it its name (Latin \'caesius,\' sky blue). The SI second is defined using cesium-133 atomic clock transitions.',
  uses:             'Atomic clocks (GPS, internet time standards), photoelectric cells, drilling fluid additive, cancer treatment (Cs-137)',
  funFact:          'The entire world is synchronized to cesium: the official definition of one second is exactly 9,192,631,770 oscillations of a cesium-133 atom.',
};
ELEMENT_INFO[56] = {
  electronConfig:   '[Xe] 6s²',
  meltingPoint:     '727°C',
  boilingPoint:     '1845°C',
  density:          '3.594 g/cm³',
  atomicRadius:     '215 pm (covalent radius)',
  electronegativity:'0.89',
  discoveredBy:     'Humphry Davy',
  yearDiscovered:   '1808',
  description:      'Barium is a soft, silvery alkaline earth metal that reacts strongly with water and air. Barium sulfate (BaSO₄) is so insoluble and opaque to X-rays that it is used as the \'barium meal\' — swallowed to coat the digestive tract for imaging. Barium compounds give green colors to fireworks. Barium titanate is a piezoelectric material used in transducers and sonar.',
  uses:             'Barium meal (GI X-ray contrast), green fireworks and flares, barium titanate (piezoelectric sensors), oil well drilling mud',
  funFact:          'Despite barium ions being highly toxic, barium sulfate is so insoluble that swallowing it for GI X-rays is completely safe — it passes through without being absorbed.',
};
ELEMENT_INFO[72] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d² 6s²',
  meltingPoint:     '2233°C',
  boilingPoint:     '4603°C',
  density:          '13.31 g/cm³',
  atomicRadius:     '175 pm (covalent radius)',
  electronegativity:'1.30',
  discoveredBy:     'Dirk Coster &amp; George de Hevesy',
  yearDiscovered:   '1923',
  description:      'Hafnium was the second-to-last naturally occurring element to be discovered, found in 1923 in Niels Bohr\'s Copenhagen laboratory (hafnium from \'Hafnia,\' Latin for Copenhagen). It looks nearly identical to zirconium and is extremely difficult to separate from it. Hafnium absorbs neutrons 600 times more effectively than zirconium, making it essential for nuclear submarine reactor control rods.',
  uses:             'Nuclear control rods (submarine reactors), superalloys (jet engine turbine blades), hafnium oxide (microchip gate dielectric)',
  funFact:          'Intel introduced hafnium oxide as the gate dielectric in transistors starting in 2007 — enabling transistors to keep shrinking after 40 years of silicon dioxide.',
};
ELEMENT_INFO[73] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d³ 6s²',
  meltingPoint:     '3017°C',
  boilingPoint:     '5458°C',
  density:          '16.69 g/cm³',
  atomicRadius:     '170 pm (covalent radius)',
  electronegativity:'1.50',
  discoveredBy:     'Anders Gustaf Ekeberg',
  yearDiscovered:   '1802',
  description:      'Tantalum is nearly completely inert to chemical attack below 150°C — it resists all acids except hydrofluoric acid. This biocompatibility and corrosion resistance make it ideal for surgical implants. Its primary modern use is in tantalum capacitors found in virtually every electronic device. Most tantalum comes from the Democratic Republic of Congo as \'coltan.\'',
  uses:             'Tantalum capacitors (in almost all electronics), surgical implants and stents, superalloys, corrosion-resistant chemical equipment',
  funFact:          'Tantalum capacitors are in virtually every smartphone, laptop, and tablet. The global demand for consumer electronics has made tantalum a conflict mineral in Central Africa.',
};
ELEMENT_INFO[74] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d⁴ 6s²',
  meltingPoint:     '3422°C',
  boilingPoint:     '5555°C',
  density:          '19.3 g/cm³',
  atomicRadius:     '162 pm (covalent radius)',
  electronegativity:'2.36',
  discoveredBy:     'Fausto and Juan José d\'Elhuyar',
  yearDiscovered:   '1783',
  description:      'Tungsten has the highest melting point (3422°C) and highest boiling point of all elements, and the second-highest density among pure elements. It was the material for incandescent light bulb filaments — it withstands white-hot temperatures without melting. Tungsten carbide is one of the hardest synthetic materials known, used in cutting tools and drill bits.',
  uses:             'Light bulb filaments, tungsten carbide cutting tools, X-ray tube anodes, superalloys (jet engines), armor-piercing ammunition',
  funFact:          'Tungsten\'s symbol W comes from \'Wolfram,\' its German name — which is why it was called wolfram in many European countries until recently.',
};
ELEMENT_INFO[75] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d⁵ 6s²',
  meltingPoint:     '3185°C',
  boilingPoint:     '5590°C',
  density:          '21.02 g/cm³',
  atomicRadius:     '151 pm (covalent radius)',
  electronegativity:'1.90',
  discoveredBy:     'Walter Noddack, Ida Tacke &amp; Otto Berg',
  yearDiscovered:   '1925',
  description:      'Rhenium was the last stable non-radioactive element to be discovered (1925). It has the second-highest melting point and one of the highest boiling points of all elements. Rhenium superalloys are used in single-crystal turbine blades of the most advanced jet engines — its addition allows operation at higher temperatures, improving fuel efficiency.',
  uses:             'Nickel superalloy turbine blades (jet engines, gas turbines), platinum-rhenium catalysts (petroleum refining), thermocouples',
  funFact:          'Adding small amounts of rhenium to nickel turbine blades allowed raising jet engine temperatures by 100°C. Each commercial aircraft engine contains about 30 kg of rhenium.',
};
ELEMENT_INFO[76] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d⁶ 6s²',
  meltingPoint:     '3033°C',
  boilingPoint:     '5012°C',
  density:          '22.59 g/cm³',
  atomicRadius:     '144 pm (covalent radius)',
  electronegativity:'2.20',
  discoveredBy:     'Smithson Tennant',
  yearDiscovered:   '1803',
  description:      'Osmium is the densest naturally occurring element — a baseball-sized sphere would weigh about 8.5 kg (nearly 19 lbs). Its name comes from the Greek \'osme\' (smell) because osmium tetroxide, a volatile and toxic compound, has a distinctive strong odor. Osmium is extremely hard and chemically inert and is alloyed with platinum and iridium for fountain pen nibs and instrument bearings.',
  uses:             'Fountain pen nibs and instrument pivots (Os-Ir alloy), electrical contacts, catalyst for asymmetric synthesis reactions',
  funFact:          'If you could gather all the osmium ever extracted commercially, it would fit in a typical living room — it is one of the rarest elements on Earth.',
};
ELEMENT_INFO[77] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d⁷ 6s²',
  meltingPoint:     '2446°C',
  boilingPoint:     '4428°C',
  density:          '22.56 g/cm³',
  atomicRadius:     '141 pm (covalent radius)',
  electronegativity:'2.20',
  discoveredBy:     'Smithson Tennant',
  yearDiscovered:   '1803',
  description:      'Iridium is the second densest element and the most corrosion-resistant metal known — it is not attacked by any acid, not even aqua regia (the mixture that dissolves gold). An iridium-rich clay layer at the Cretaceous-Paleogene boundary is key evidence for the asteroid impact that ended the age of dinosaurs 66 million years ago.',
  uses:             'Iridium-platinum crucibles for crystal growth, spark plug tips, compass bearings, fountain pen nibs, radiation shielding',
  funFact:          'The Cretaceous-Paleogene boundary in rocks worldwide shows an iridium spike 30 times higher than normal — the smoking gun of the asteroid impact that killed the dinosaurs.',
};
ELEMENT_INFO[78] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d⁹ 6s¹',
  meltingPoint:     '1768.3°C',
  boilingPoint:     '3825°C',
  density:          '21.45 g/cm³',
  atomicRadius:     '136 pm (covalent radius)',
  electronegativity:'2.28',
  discoveredBy:     'Antonio de Ulloa (isolated)',
  yearDiscovered:   '1735',
  description:      'Platinum is a dense, malleable, silvery-white precious metal with extraordinary resistance to corrosion. It was used by pre-Columbian civilizations in South America. Platinum catalytic converters have reduced air pollution from vehicles dramatically since the 1970s. Platinum group metals are essential catalysts in the chemical and pharmaceutical industries.',
  uses:             'Catalytic converters (Pt-Pd-Rh), chemical catalysts, jewelry, laboratory vessels, anti-cancer drugs (cisplatin), fuel cell electrodes',
  funFact:          'Cisplatin, a platinum-containing compound, is one of the most effective anti-cancer drugs — discovered accidentally in 1965 when platinum electrodes were found to inhibit bacterial cell division.',
};
ELEMENT_INFO[79] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
  meltingPoint:     '1064.2°C',
  boilingPoint:     '2856°C',
  density:          '19.3 g/cm³',
  atomicRadius:     '136 pm (covalent radius)',
  electronegativity:'2.54',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Gold is the most malleable and ductile of all metals — one gram can be beaten into a sheet one square meter thin. Its color and resistance to corrosion made it the first precious metal used by humans. The yellow color of gold is a relativistic quantum effect: electrons in its outer orbital move at a significant fraction of the speed of light. Gold is also an excellent electrical conductor used in critical electronics.',
  uses:             'Jewelry, financial reserves, electronics (connector plating), dental restorations, aerospace (reflective coatings), glassmaking',
  funFact:          'All the gold ever mined by humanity throughout history would form a cube about 21 meters on a side — roughly the size of a 7-story building.',
};
ELEMENT_INFO[80] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
  meltingPoint:     '-38.83°C',
  boilingPoint:     '356.6°C',
  density:          '13.534 g/cm³',
  atomicRadius:     '132 pm (covalent radius)',
  electronegativity:'2.00',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Mercury is the only metal that is liquid at room temperature. It forms alloys called amalgams with most metals, including gold and silver. Mercury\'s toxicity was widely known even in ancient times. Mercury thermometers and barometers are now largely banned in most countries, and it is being phased out of dental amalgam and fluorescent lamps.',
  uses:             'Fluorescent lamps (CFL), scientific instruments (some), dental amalgam (being phased out), electrical switches (being replaced)',
  funFact:          'The phrase \'mad as a hatter\' comes from hat-makers in the 1800s who used mercury nitrate to cure felt — chronic mercury poisoning caused tremors, mood swings, and hallucinations.',
};
ELEMENT_INFO[81] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',
  meltingPoint:     '304°C',
  boilingPoint:     '1473°C',
  density:          '11.85 g/cm³',
  atomicRadius:     '145 pm (covalent radius)',
  electronegativity:'1.62',
  discoveredBy:     'William Crookes',
  yearDiscovered:   '1861',
  description:      'Thallium is a highly toxic heavy metal once used as a rat poison and infamously as a murder weapon, since it is odorless, tasteless, and causes characteristic hair loss before death. Today its use as a poison has been largely banned. Thallium-201 is used in cardiac stress test imaging. Thallium sulfide is sensitive to infrared light and used in photoelectric sensors.',
  uses:             'Tl-201 cardiac imaging (nuclear medicine), infrared detectors, high-density glass, specialty alloys',
  funFact:          'Thallium was used by the Soviet NKVD for targeted assassinations due to its undetectable nature — a famous case was the poisoning of KGB defector Nikolai Khokhlov in 1957.',
};
ELEMENT_INFO[82] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',
  meltingPoint:     '327.5°C',
  boilingPoint:     '1749°C',
  density:          '11.34 g/cm³',
  atomicRadius:     '146 pm (covalent radius)',
  electronegativity:'2.33',
  discoveredBy:     'Known since antiquity',
  yearDiscovered:   'Ancient',
  description:      'Lead has been used by humans for at least 7,000 years — the ancient Romans used it extensively in plumbing, cooking vessels, and even as a sweetener (lead acetate has a sweet taste). This widespread use may have contributed to the decline of the Roman Empire through chronic poisoning. Lead is exceptionally effective at absorbing X-rays and gamma radiation, making it standard shielding in medical and nuclear facilities.',
  uses:             'Lead-acid batteries, radiation shielding, wheel weights, ammunition, cable sheathing, historical plumbing (being removed)',
  funFact:          'The word \'plumbing\' comes from \'plumbum\' — the Latin word for lead. Roman engineers built aqueducts with lead pipes that may have chronically poisoned the population for centuries.',
};
ELEMENT_INFO[83] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',
  meltingPoint:     '271.4°C',
  boilingPoint:     '1564°C',
  density:          '9.78 g/cm³',
  atomicRadius:     '148 pm (covalent radius)',
  electronegativity:'2.02',
  discoveredBy:     'Known since ~15th century',
  yearDiscovered:   '~1400',
  description:      'Bismuth is the heaviest element with at least one stable or quasi-stable isotope — Bi-209 was long thought to be the heaviest truly stable isotope, but in 2003 it was found to be very slightly radioactive with a half-life of 1.9 × 10¹⁹ years (a billion times the age of the universe). Bismuth crystals form spectacular iridescent hopper crystals. Bismuth subsalicylate is the active ingredient in Pepto-Bismol.',
  uses:             'Bismuth subsalicylate (Pepto-Bismol), lead-free solders and shot, fire sprinkler heads (low-melting alloys), cosmetics',
  funFact:          'Pepto-Bismol\'s active ingredient is bismuth — a heavy metal. It works for nausea because bismuth compounds coat the stomach lining and have mild antimicrobial properties.',
};
ELEMENT_INFO[84] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',
  meltingPoint:     '254°C',
  boilingPoint:     '962°C',
  density:          '9.196 g/cm³',
  atomicRadius:     '140 pm (covalent radius)',
  electronegativity:'2.00',
  discoveredBy:     'Marie &amp; Pierre Curie',
  yearDiscovered:   '1898',
  description:      'Polonium was the first element discovered by Marie and Pierre Curie in 1898 and named after Marie\'s homeland Poland (then under Russian rule). It is intensely radioactive — polonium-210 is 250,000 times more radioactive per gram than radium. Po-210 releases heat from alpha decay, useful as a lightweight power source. It was used to assassinate Russian dissident Alexander Litvinenko in London in 2006.',
  uses:             'Antistatic devices (removing electrostatic charge in manufacturing), neutron initiators, small heat sources',
  funFact:          'Po-210 was used to poison Alexander Litvinenko in London in 2006 — the first confirmed case of nuclear terrorism. The poison trail left a radioactive trace across London that investigators followed.',
};
ELEMENT_INFO[85] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',
  meltingPoint:     '302°C',
  boilingPoint:     '337°C',
  density:          '~7 g/cm³ (est.)',
  atomicRadius:     '150 pm (covalent radius)',
  electronegativity:'2.20',
  discoveredBy:     'Dale Corson, Kenneth Ross MacKenzie &amp; Emilio Segrè',
  yearDiscovered:   '1940',
  description:      'Astatine is the rarest naturally occurring element on Earth — at any given moment, the entire planet contains less than 30 grams of it, produced continuously by the decay of uranium and thorium. It is the heaviest stable halogen and has properties between iodine and the metals. Astatine-211 is being studied as targeted cancer therapy, since it emits alpha particles that destroy cancer cells with minimal surrounding damage.',
  uses:             'At-211 targeted alpha therapy for cancer (experimental), research into heaviest halogen chemistry',
  funFact:          'If you collected all the astatine on Earth right now, you would have less than 30 grams — and it would all decay within a few hours.',
};
ELEMENT_INFO[86] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
  meltingPoint:     '-71°C',
  boilingPoint:     '-61.7°C',
  density:          '9.73 g/L',
  atomicRadius:     '220 pm (van der Waals radius)',
  electronegativity:'Not assigned (noble gas)',
  discoveredBy:     'Friedrich Ernst Dorn',
  yearDiscovered:   '1900',
  description:      'Radon is a naturally occurring radioactive noble gas produced by the decay of radium in rocks and soil. It seeps up from the ground and can accumulate in buildings, particularly basements. Radon is the second leading cause of lung cancer in the United States after smoking, responsible for about 21,000 deaths annually. Homes in certain geological areas are required to have radon testing and mitigation.',
  uses:             'Lung cancer risk indicator (radon testing kits), historical cancer radiotherapy (now replaced)',
  funFact:          'Radon gas causes about 21,000 lung cancer deaths in the US each year — more than drunk driving. The EPA recommends testing every home for radon.',
};ELEMENT_INFO[57] = {
  electronConfig:   '[Xe] 5d¹ 6s²',
  meltingPoint:     '920°C',
  boilingPoint:     '3464°C',
  density:          '6.145 g/cm³',
  atomicRadius:     '207 pm (covalent radius)',
  electronegativity:'1.10',
  discoveredBy:     'Carl Gustaf Mosander',
  yearDiscovered:   '1839',
  description:      'Lanthanum is a soft, malleable lanthanide that gives its name to the entire series. It is a key component in nickel-metal hydride (NiMH) batteries — a Toyota Prius battery contains about 10 kg of lanthanum. Lanthanum compounds are used as catalysts in oil refining and as dopants in specialty glass. Its optical properties make it important in camera and telescope lenses.',
  uses:             'NiMH batteries (hybrid cars), oil refining catalysts, specialty optical glass (camera lenses), hydrogen storage alloys',
  funFact:          'A Toyota Prius battery pack contains about 10 to 15 kg of lanthanum — making each hybrid car a significant consumer of rare earth elements.',
};
ELEMENT_INFO[58] = {
  electronConfig:   '[Xe] 4f¹ 5d¹ 6s²',
  meltingPoint:     '798°C',
  boilingPoint:     '3443°C',
  density:          '6.77 g/cm³',
  atomicRadius:     '204 pm (covalent radius)',
  electronegativity:'1.12',
  discoveredBy:     'Jöns Jacob Berzelius &amp; Wilhelm Hisinger',
  yearDiscovered:   '1803',
  description:      'Cerium is the most abundant of the lanthanides and among the most abundant rare earth elements overall — more plentiful in Earth\'s crust than copper, tin, or lead. It is highly reactive and spontaneously combusts when scratched. Cerium oxide (ceria) is the active polishing compound in most glass and gemstone polishing, and is used in catalytic converters and UV-blocking glass.',
  uses:             'Glass polishing (cerium oxide), catalytic converters, lighter flints (mischmetal alloy), UV-absorbing glass, self-cleaning ovens',
  funFact:          'Lighter flints are made of mischmetal — about 50% cerium mixed with other lanthanides. When struck, the cerium generates sparks that ignite the gas.',
};
ELEMENT_INFO[59] = {
  electronConfig:   '[Xe] 4f³ 6s²',
  meltingPoint:     '931°C',
  boilingPoint:     '3520°C',
  density:          '6.77 g/cm³',
  atomicRadius:     '203 pm (covalent radius)',
  electronegativity:'1.13',
  discoveredBy:     'Carl Auer von Welsbach',
  yearDiscovered:   '1885',
  description:      'Praseodymium\'s name comes from the Greek words for \'leek green\' and \'twin\' — it was separated from an element called \'didymium.\' Its most important modern application is in neodymium-iron-boron magnets, where it is added alongside neodymium to reduce corrosion. Praseodymium oxide creates the yellow-green glass used in welder\'s and glassblower\'s protective goggles.',
  uses:             'NdPr-iron-boron permanent magnets (EV motors, wind turbines), welder\'s goggles glass, colored ceramics, specialty alloys',
  funFact:          'The yellow-green color of the didymium safety glasses worn by glassblowers comes from praseodymium — it absorbs the blinding yellow sodium flare from hot glass.',
};
ELEMENT_INFO[60] = {
  electronConfig:   '[Xe] 4f⁴ 6s²',
  meltingPoint:     '1016°C',
  boilingPoint:     '3074°C',
  density:          '7.01 g/cm³',
  atomicRadius:     '201 pm (covalent radius)',
  electronegativity:'1.14',
  discoveredBy:     'Carl Auer von Welsbach',
  yearDiscovered:   '1885',
  description:      'Neodymium is one of the most important rare earth elements in modern technology. Neodymium-iron-boron (NdFeB) magnets are the strongest permanent magnets known — they power the electric motors in every EV, the hard drives in every computer, and the speakers in every phone. Without neodymium, modern electric vehicles would be far heavier and less efficient. A single wind turbine uses about 2 tonnes of neodymium magnets.',
  uses:             'Strongest permanent magnets (EV motors, wind turbines, hard drives, speakers, MRI machines), laser glass (Nd:YAG)',
  funFact:          'The green Nd:YAG laser used in many applications contains neodymium doped into yttrium aluminum garnet crystal.',
};
ELEMENT_INFO[61] = {
  electronConfig:   '[Xe] 4f⁵ 6s²',
  meltingPoint:     '1100°C (est.)',
  boilingPoint:     '3000°C (est.)',
  density:          '7.26 g/cm³ (est.)',
  atomicRadius:     '199 pm (covalent radius)',
  electronegativity:'1.13',
  discoveredBy:     'Jacob Marinsky, Lawrence Glendenin &amp; Charles Coryell',
  yearDiscovered:   '1945',
  description:      'Promethium is the only naturally absent lanthanide — it has no stable isotopes, and only trace amounts exist on Earth, produced by uranium fission. It was discovered in the products of uranium fission in 1945 during the Manhattan Project, and its discovery was classified until 1955. Promethium-147 is used in nuclear-powered batteries (betavoltaics) and in luminous paints for aircraft instruments.',
  uses:             'Nuclear batteries (Pm-147 betavoltaic), thickness measurement gauges, luminous aircraft instrument dials',
  funFact:          'Promethium was predicted as the missing element #61 in 1902 and searched for in ore samples for 43 years before finally being found in uranium fission products.',
};
ELEMENT_INFO[62] = {
  electronConfig:   '[Xe] 4f⁶ 6s²',
  meltingPoint:     '1072°C',
  boilingPoint:     '1900°C',
  density:          '7.52 g/cm³',
  atomicRadius:     '198 pm (covalent radius)',
  electronegativity:'1.17',
  discoveredBy:     'Paul Émile Lecoq de Boisbaudran',
  yearDiscovered:   '1879',
  description:      'Samarium forms one of the strongest types of permanent magnets — samarium-cobalt (SmCo) magnets. While neodymium magnets are stronger, samarium-cobalt magnets retain their properties at higher temperatures (up to 300°C), making them ideal for aerospace, military, and high-temperature applications. Samarium-153 is used in cancer pain treatment by concentrating in bone metastases.',
  uses:             'SmCo permanent magnets (aerospace, high-temp applications), Sm-153 cancer therapy, infrared laser absorbers',
  funFact:          'Samarium-cobalt magnets were key to making the Sony Walkman and other portable audio devices practical in the 1980s — small enough to drive miniature speakers.',
};
ELEMENT_INFO[63] = {
  electronConfig:   '[Xe] 4f⁷ 6s²',
  meltingPoint:     '826°C',
  boilingPoint:     '1529°C',
  density:          '5.244 g/cm³',
  atomicRadius:     '198 pm (covalent radius)',
  electronegativity:'1.20',
  discoveredBy:     'Eugène-Anatole Demarçay',
  yearDiscovered:   '1901',
  description:      'Europium produces the brightest red and blue luminescence of any element when activated by ultraviolet light. It is the key red and blue phosphor in television screens, computer monitors, LED displays, and Euro banknote fluorescent security ink. Europium-doped yttrium oxide was the red phosphor that made color television viable in the 1960s.',
  uses:             'Red and blue phosphors in displays and LED lighting, Euro banknote security features (UV-fluorescent ink)',
  funFact:          'European currency banknotes glow distinctly under UV light because they contain europium-based fluorescent ink — a security feature that is extremely difficult to forge.',
};
ELEMENT_INFO[64] = {
  electronConfig:   '[Xe] 4f⁷ 5d¹ 6s²',
  meltingPoint:     '1313°C',
  boilingPoint:     '3273°C',
  density:          '7.90 g/cm³',
  atomicRadius:     '196 pm (covalent radius)',
  electronegativity:'1.20',
  discoveredBy:     'Jean Charles Galissard de Marignac',
  yearDiscovered:   '1880',
  description:      'Gadolinium has the highest neutron absorption cross-section of any stable element, making it valuable as a neutron absorber in nuclear reactors. Gadolinium-based contrast agents are the most commonly used MRI contrast agents — injected into the bloodstream, they enhance the visibility of blood vessels and tumors. Gadolinium also becomes ferromagnetic just below room temperature (Curie point is 20°C).',
  uses:             'MRI contrast agents (gadolinium chelates), nuclear reactor control rods, neutron radiography, magneto-optical recording',
  funFact:          'Gadolinium is one of only four elements magnetic at room temperature — and its Curie temperature (20°C) means it loses magnetism when slightly warmed by a warm hand.',
};
ELEMENT_INFO[65] = {
  electronConfig:   '[Xe] 4f⁹ 6s²',
  meltingPoint:     '1356°C',
  boilingPoint:     '3230°C',
  density:          '8.23 g/cm³',
  atomicRadius:     '194 pm (covalent radius)',
  electronegativity:'1.10',
  discoveredBy:     'Carl Gustaf Mosander',
  yearDiscovered:   '1843',
  description:      'Terbium produces a distinctive green luminescence and is one of the key green phosphor elements in modern displays and LED lighting. It is also used to make Terfenol-D, one of the most magnetostrictive materials known — it changes shape dramatically in a magnetic field, converting electrical energy to mechanical vibration with very high efficiency. This makes it useful in sonar transducers and precision actuators.',
  uses:             'Green phosphors in displays and LED lighting, Terfenol-D magnetostrictive alloy (sonar, actuators), fuel cells',
  funFact:          'Terbium activates the green phosphor in trichromatic fluorescent lamps — the same type used in most office buildings and schools worldwide.',
};
ELEMENT_INFO[66] = {
  electronConfig:   '[Xe] 4f¹⁰ 6s²',
  meltingPoint:     '1412°C',
  boilingPoint:     '2567°C',
  density:          '8.540 g/cm³',
  atomicRadius:     '192 pm (covalent radius)',
  electronegativity:'1.22',
  discoveredBy:     'Paul Émile Lecoq de Boisbaudran',
  yearDiscovered:   '1886',
  description:      'Dysprosium has the highest magnetic moment of any element and is added to neodymium-iron-boron magnets to prevent demagnetization at high temperatures — essential for EV motors and wind turbines operating in hot conditions. It is also used as a neutron absorber in nuclear reactor control rods. Despite being important for clean energy, dysprosium is rare and supply is largely controlled by China.',
  uses:             'Neodymium magnet performance enhancement (EV motors, wind turbines at high temp), nuclear reactor control rods',
  funFact:          'The word \'dysprosium\' comes from the Greek \'dysprositos\' — meaning \'hard to get to\' — because it was so difficult to separate from the other lanthanides.',
};
ELEMENT_INFO[67] = {
  electronConfig:   '[Xe] 4f¹¹ 6s²',
  meltingPoint:     '1474°C',
  boilingPoint:     '2700°C',
  density:          '8.79 g/cm³',
  atomicRadius:     '192 pm (covalent radius)',
  electronegativity:'1.23',
  discoveredBy:     'Per Teodor Cleve',
  yearDiscovered:   '1878',
  description:      'Holmium has the highest magnetic moment of any element and its compounds are used in the strongest known static magnetic fields. Holmium-doped YAG lasers (Ho:YAG) emit infrared light at 2.09 micrometers, which is strongly absorbed by water — making it ideal for precision surgery that minimizes damage to surrounding tissue. It is used in kidney stone removal and orthopedic procedures.',
  uses:             'Ho:YAG surgical lasers (kidney stones, orthopedic surgery), powerful magnetic flux concentrators in experimental magnets',
  funFact:          'Holmium has the highest magnetic moment of any naturally occurring element — a property that makes it critical for achieving the highest magnetic field strengths in laboratory experiments.',
};
ELEMENT_INFO[68] = {
  electronConfig:   '[Xe] 4f¹² 6s²',
  meltingPoint:     '1529°C',
  boilingPoint:     '2868°C',
  density:          '9.066 g/cm³',
  atomicRadius:     '189 pm (covalent radius)',
  electronegativity:'1.24',
  discoveredBy:     'Carl Gustaf Mosander',
  yearDiscovered:   '1843',
  description:      'Erbium produces a characteristic pink-red color in glass and is critically important in fiber-optic telecommunications. Erbium-doped fiber amplifiers (EDFAs) revolutionized long-distance optical communication — they amplify light signals directly in fiber without converting to electricity, enabling the internet\'s global optical backbone. Erbium:YAG lasers are used in dermatology and dental procedures.',
  uses:             'Fiber-optic amplifiers (internet backbone), Er:YAG lasers (skin resurfacing, dentistry), pink-colored glass and ceramics',
  funFact:          'Erbium-doped fiber amplifiers made the modern internet possible. Without them, optical signals would need electronic regeneration every few kilometers instead of traveling thousands of kilometers continuously.',
};
ELEMENT_INFO[69] = {
  electronConfig:   '[Xe] 4f¹³ 6s²',
  meltingPoint:     '1545°C',
  boilingPoint:     '1950°C',
  density:          '9.32 g/cm³',
  atomicRadius:     '190 pm (covalent radius)',
  electronegativity:'1.25',
  discoveredBy:     'Per Teodor Cleve',
  yearDiscovered:   '1879',
  description:      'Thulium is the rarest of the naturally occurring lanthanides and has limited current applications. Thulium-170, produced in nuclear reactors, is used in portable X-ray devices that can produce X-rays without electricity — valuable for field medicine. Thulium-doped crystals are being researched for quantum memory and quantum computing applications.',
  uses:             'Portable X-ray devices (Tm-170), thulium-doped fiber lasers (2-micron wavelength), surgical lasers, quantum computing research',
  funFact:          'Thulium was named after Thule — the ancient Greek and Latin name for the mythical northernmost part of the world, roughly corresponding to Scandinavia, where its discoverer worked.',
};
ELEMENT_INFO[70] = {
  electronConfig:   '[Xe] 4f¹⁴ 6s²',
  meltingPoint:     '824°C',
  boilingPoint:     '1196°C',
  density:          '6.90 g/cm³',
  atomicRadius:     '187 pm (covalent radius)',
  electronegativity:'1.10',
  discoveredBy:     'Jean Charles Galissard de Marignac',
  yearDiscovered:   '1878',
  description:      'Ytterbium completes the 4f electron subshell in the lanthanides. It has two common oxidation states (+2 and +3), which is unusual for lanthanides. Ytterbium-171 is used in the most accurate atomic clocks ever built — ytterbium optical lattice clocks are so precise that they would lose only one second in 300 billion years. These clocks are used for testing fundamental physics and improving GPS precision.',
  uses:             'Most accurate atomic clocks (optical lattice), fiber laser dopants, radiation source for portable X-rays, research',
  funFact:          'Ytterbium lattice atomic clocks are so accurate they can detect the gravitational time dilation caused by a height difference of just a few centimeters.',
};
ELEMENT_INFO[71] = {
  electronConfig:   '[Xe] 4f¹⁴ 5d¹ 6s²',
  meltingPoint:     '1663°C',
  boilingPoint:     '3402°C',
  density:          '9.841 g/cm³',
  atomicRadius:     '187 pm (covalent radius)',
  electronegativity:'1.27',
  discoveredBy:     'Georges Urbain &amp; Carl Auer von Welsbach',
  yearDiscovered:   '1906',
  description:      'Lutetium is the last and heaviest lanthanide. It is one of the densest lanthanides and has the smallest atomic radius in the series due to the lanthanide contraction. Lutetium aluminum garnet (LuAG) scintillators are used in PET scan detectors. Lutetium-177 is a promising therapeutic radioisotope for treating certain cancers — it can be attached to molecules that seek out tumors.',
  uses:             'PET scan detectors (LuAG:Ce scintillators), Lu-177 targeted radionuclide cancer therapy, specialty alloys, catalysts',
  funFact:          'Lutetium and hafnium are harder to separate from each other than any other adjacent elements on the periodic table — the debate over which belongs in Group 3 continues today.',
};ELEMENT_INFO[87] = {
  electronConfig:   '[Rn] 7s¹',
  meltingPoint:     '27°C (est.)',
  boilingPoint:     '677°C (est.)',
  density:          '~1.87 g/cm³ (est.)',
  atomicRadius:     '348 pm (covalent radius) (est.)',
  electronegativity:'0.70',
  discoveredBy:     'Marguerite Perey',
  yearDiscovered:   '1939',
  description:      'Francium is the heaviest alkali metal and the rarest naturally occurring element on Earth — fewer than 30 grams exist in Earth\'s entire crust at any moment. It is produced by the alpha decay of actinium-227. It would be the most reactive metal known if enough could be gathered, but its longest-lived isotope (Fr-223) has a half-life of only 22.3 minutes, making large-scale study impossible.',
  uses:             'Fundamental physics research (atomic structure, symmetry tests) — no practical applications',
  funFact:          'Francium is so rare and short-lived that the world\'s entire supply amounts to perhaps 20 grams — and it has never been seen with the naked eye.',
};
ELEMENT_INFO[88] = {
  electronConfig:   '[Rn] 7s²',
  meltingPoint:     '700°C',
  boilingPoint:     '1737°C',
  density:          '5.5 g/cm³',
  atomicRadius:     '221 pm (covalent radius)',
  electronegativity:'0.90',
  discoveredBy:     'Marie &amp; Pierre Curie',
  yearDiscovered:   '1898',
  description:      'Radium was discovered by Marie and Pierre Curie in 1898 from uranium ore, requiring the processing of tonnes of pitchblende to obtain fractions of a gram. It was the second element discovered by Marie Curie (after polonium). Radium was once added to clock dials, toothpaste, and health tonics — with disastrous results. The \'Radium Girls\' lawsuit of the 1920s helped establish modern occupational safety laws.',
  uses:             'Radon production (Ra decays to Rn), historical cancer treatment (now replaced), historical luminous paint (now banned)',
  funFact:          'The \'Radium Girls\' — factory workers who painted watch dials with radium paint in the 1920s — developed radiation poisoning from licking their brushes. Their lawsuit established workers\' right to sue employers for workplace injuries.',
};
ELEMENT_INFO[89] = {
  electronConfig:   '[Rn] 6d¹ 7s²',
  meltingPoint:     '1050°C',
  boilingPoint:     '3200°C',
  density:          '10.07 g/cm³',
  atomicRadius:     '215 pm (covalent radius)',
  electronegativity:'1.10',
  discoveredBy:     'André-Louis Debierne',
  yearDiscovered:   '1899',
  description:      'Actinium is a silvery, strongly radioactive metal that glows blue in the dark from the Cherenkov radiation produced by its decay products. It gave its name to the actinide series. Actinium-225 is a highly promising targeted alpha therapy for cancer — it decays through a chain of alpha emitters which can efficiently destroy cancer cells when delivered directly to tumors.',
  uses:             'Ac-225 targeted alpha cancer therapy (clinical trials), neutron sources, fundamental research',
  funFact:          'Actinium glows blue in the dark — not from any property of the element itself, but from the Cherenkov radiation emitted by its radioactive decay products.',
};
ELEMENT_INFO[90] = {
  electronConfig:   '[Rn] 6d² 7s²',
  meltingPoint:     '1750°C',
  boilingPoint:     '4820°C',
  density:          '11.724 g/cm³',
  atomicRadius:     '206 pm (covalent radius)',
  electronegativity:'1.30',
  discoveredBy:     'Jöns Jacob Berzelius',
  yearDiscovered:   '1829',
  description:      'Thorium is a radioactive actinide that is significantly more abundant in Earth\'s crust than uranium — more common than lead or tin. Thorium-232 has a half-life of 14.05 billion years, nearly as long as the age of the universe. There is renewed interest in thorium as a nuclear fuel: thorium reactors are theoretically safer than uranium reactors and produce less long-lived radioactive waste.',
  uses:             'Potential nuclear fuel (thorium reactors), historical gas lamp mantles (still used in camping), high-temperature alloys',
  funFact:          'India has enormous thorium deposits and is actively developing thorium nuclear reactors as an alternative to uranium. Th-232 is three times more abundant than uranium in Earth\'s crust.',
};
ELEMENT_INFO[91] = {
  electronConfig:   '[Rn] 5f² 6d¹ 7s²',
  meltingPoint:     '1568°C',
  boilingPoint:     '4000°C (est.)',
  density:          '15.37 g/cm³',
  atomicRadius:     '200 pm (covalent radius)',
  electronegativity:'1.50',
  discoveredBy:     'Kasimir Fajans &amp; Otto Göhring',
  yearDiscovered:   '1913',
  description:      'Protactinium is a rare, highly toxic, and radioactive actinide with few practical uses. It was the most difficult naturally occurring element to isolate in pure form. Pa-231, the most stable isotope, has a half-life of 32,760 years. Studies of Pa-231/Th-230 ratios in ocean sediments are used to reconstruct ancient ocean circulation patterns and climate history.',
  uses:             'Ocean circulation research (Pa-231/Th-230 ratio), fundamental nuclear physics research',
  funFact:          'A single gram of protactinium requires processing about a tonne of uranium ore to extract — making it one of the most laborious elements to obtain.',
};
ELEMENT_INFO[92] = {
  electronConfig:   '[Rn] 5f³ 6d¹ 7s²',
  meltingPoint:     '1132.3°C',
  boilingPoint:     '4131°C',
  density:          '19.1 g/cm³',
  atomicRadius:     '196 pm (covalent radius)',
  electronegativity:'1.38',
  discoveredBy:     'Martin Heinrich Klaproth',
  yearDiscovered:   '1789',
  description:      'Uranium was discovered 50 years before radioactivity was understood, so for most of the 19th century it was used as a yellow glass colorant. It is a dense, silvery metal that is weakly radioactive — a piece of uranium is not immediately dangerous to hold. Uranium-235 is fissile and is the basis of all nuclear reactors and the first nuclear bomb (\'Little Boy\') dropped on Hiroshima.',
  uses:             'Nuclear fuel (U-235), nuclear weapons, depleted uranium in armor-piercing ammunition and radiation shielding, historical yellow glass',
  funFact:          'Before radioactivity was understood, uranium was used to make beautiful yellow-green \'Vaseline glass\' from the 1830s to 1940s. These antique pieces still glow bright green under UV light.',
};
ELEMENT_INFO[93] = {
  electronConfig:   '[Rn] 5f⁴ 6d¹ 7s²',
  meltingPoint:     '644°C',
  boilingPoint:     '4000°C (est.)',
  density:          '20.2 g/cm³',
  atomicRadius:     '190 pm (covalent radius)',
  electronegativity:'1.36',
  discoveredBy:     'Edwin McMillan &amp; Philip Abelson',
  yearDiscovered:   '1940',
  description:      'Neptunium was the first transuranium element, created in 1940 at Lawrence Berkeley Laboratory by bombarding uranium with neutrons. It was named after Neptune, the next planet beyond Uranus (uranium) in the solar system. Neptunium-237 is the most stable isotope, with a half-life of 2.14 million years. Trace amounts occur naturally in uranium ores from neutron capture.',
  uses:             'Production of Pu-238 (spacecraft power sources), Np-237 as a starting material for heavier isotopes, research',
  funFact:          'Neptunium was the first element discovered via nuclear reactor bombardment, marking the beginning of the age of synthetic transuranium elements.',
};
ELEMENT_INFO[94] = {
  electronConfig:   '[Rn] 5f⁶ 7s²',
  meltingPoint:     '640°C',
  boilingPoint:     '3228°C',
  density:          '19.816 g/cm³',
  atomicRadius:     '187 pm (covalent radius)',
  electronegativity:'1.28',
  discoveredBy:     'Glenn T. Seaborg et al. (Berkeley)',
  yearDiscovered:   '1940',
  description:      'Plutonium is the most significant synthetic element. Pu-239 is fissile and is the primary material in nuclear weapons (including the Fat Man bomb) and is also used as nuclear fuel. Pu-238 produces heat through radioactive decay without any chain reaction and powers spacecraft that travel too far from the Sun for solar panels — including Voyager 1 and 2 and the Mars Curiosity rover.',
  uses:             'Nuclear weapons (Pu-239), spacecraft power (RTG, Pu-238), nuclear fuel (MOX), smoke detectors (via Am-241 decay chain)',
  funFact:          'The Voyager 1 spacecraft, now over 22 billion km from Earth in interstellar space, is powered by plutonium-238 produced in the 1970s and is still transmitting data today.',
};
ELEMENT_INFO[95] = {
  electronConfig:   '[Rn] 5f⁷ 7s²',
  meltingPoint:     '1176°C',
  boilingPoint:     '2011°C',
  density:          '13.67 g/cm³',
  atomicRadius:     '180 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Glenn T. Seaborg et al.',
  yearDiscovered:   '1944',
  description:      'Americium-241 is found in virtually every household ionization smoke detector — it ionizes the air in the detection chamber, and smoke disrupts this ionization to trigger the alarm. Each smoke detector contains about 1 microcurie (0.3 micrograms) of Am-241. Americium was the first actinide produced in visible amounts and is made in nuclear reactors from plutonium.',
  uses:             'Ionization smoke detectors (Am-241), industrial thickness gauges, production of heavier actinides in nuclear research',
  funFact:          'There is about 0.3 micrograms of americium-241 in every ionization smoke detector. The element most likely to save your life is a synthetic radioactive metal.',
};
ELEMENT_INFO[96] = {
  electronConfig:   '[Rn] 5f⁷ 6d¹ 7s²',
  meltingPoint:     '1340°C',
  boilingPoint:     '3110°C',
  density:          '13.51 g/cm³',
  atomicRadius:     '169 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Glenn T. Seaborg, Ralph A. James, Albert Ghiorso',
  yearDiscovered:   '1944',
  description:      'Curium was synthesized in 1944 by bombarding plutonium with alpha particles. It was named after Marie and Pierre Curie. Cm-244 is used as an alpha-particle source in the APXS (Alpha Particle X-ray Spectrometer) instruments on Mars rovers Opportunity and Curiosity, which analyze the composition of Martian soil and rocks. Curium glows red-hot from its own radioactive decay.',
  uses:             'Mars rover rock analysis instruments (APXS using Cm-244), production of californium-252, nuclear research',
  funFact:          'Curium is used on Mars. The Curiosity rover\'s APXS instrument fires alpha particles from curium-244 into Martian rocks and soil to determine their chemical composition.',
};
ELEMENT_INFO[97] = {
  electronConfig:   '[Rn] 5f⁹ 7s²',
  meltingPoint:     '986°C',
  boilingPoint:     'Not well established',
  density:          '14.79 g/cm³',
  atomicRadius:     '168 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Stanley G. Thompson, Albert Ghiorso &amp; Glenn T. Seaborg',
  yearDiscovered:   '1949',
  description:      'Berkelium was first synthesized in 1949 at UC Berkeley by bombarding americium-241 with alpha particles. It was the first element named after a university city. Only microgram quantities have ever been produced. Bk-249 has a half-life of 330 days and is used as a target material to produce heavier elements — specifically, the 2010 synthesis of tennessine (#117) required berkelium-249.',
  uses:             'Target material for synthesis of heavier elements (tennessine, oganesson), fundamental actinide chemistry research',
  funFact:          'Making tennessine (#117) required 22 mg of berkelium-249 — a nearly invisible speck that took 250 days of continuous reactor irradiation to produce at Oak Ridge National Laboratory.',
};
ELEMENT_INFO[98] = {
  electronConfig:   '[Rn] 5f¹⁰ 7s²',
  meltingPoint:     '900°C',
  boilingPoint:     '1470°C (est.)',
  density:          '15.1 g/cm³',
  atomicRadius:     '168 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso &amp; Glenn T. Seaborg',
  yearDiscovered:   '1950',
  description:      'Californium was first produced in 1950 at UC Berkeley by bombarding curium with alpha particles. Californium-252 is one of the most useful synthetic radioisotopes: it is an exceptionally intense neutron emitter — one microgram emits 2.3 million neutrons per second — used to start nuclear reactors, detect hidden explosives, treat certain cancers, and analyze gold and silver ore grades.',
  uses:             'Cf-252 neutron source (nuclear reactor startup, explosives/drug detection, cancer treatment, gold/silver ore analysis)',
  funFact:          'One microgram of californium-252 emits 2.3 million neutrons per second — making it one of the most intense portable neutron sources available, critical for many industrial and medical applications.',
};
ELEMENT_INFO[99] = {
  electronConfig:   '[Rn] 5f¹¹ 7s²',
  meltingPoint:     '860°C',
  boilingPoint:     '996°C (est.)',
  density:          '~8.84 g/cm³ (est.)',
  atomicRadius:     '165 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Albert Ghiorso et al. (found in H-bomb fallout)',
  yearDiscovered:   '1952',
  description:      'Einsteinium was discovered in 1952 in the fallout from the first thermonuclear bomb test (Ivy Mike) on Enewetak Atoll — it had been created by multiple neutron captures in uranium, a previously impossible process. The discovery was classified until 1955. It was the first element named after a living person (Albert Einstein). A visible amount was first produced only in 2021.',
  uses:             'Fundamental actinide chemistry research only — no practical applications due to extreme scarcity',
  funFact:          'Einsteinium was discovered in the fallout from a hydrogen bomb detonation and kept classified for three years. The first visible amount (hundreds of nanograms) was produced only in 2021, 69 years after its discovery.',
};
ELEMENT_INFO[100] = {
  electronConfig:   '[Rn] 5f¹² 7s²',
  meltingPoint:     '1527°C',
  boilingPoint:     'Not well established',
  density:          'Not well established',
  atomicRadius:     '167 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Albert Ghiorso et al. (found in H-bomb fallout)',
  yearDiscovered:   '1952',
  description:      'Fermium was also discovered in the Ivy Mike hydrogen bomb test fallout in 1952, classified with einsteinium until 1955. It was named after Enrico Fermi, who built the first nuclear reactor. It is the heaviest element that can be produced in significant quantities by neutron bombardment in reactors. To make heavier elements, scientists need particle accelerator collisions between heavy nuclei.',
  uses:             'Fundamental nuclear physics research — no practical applications',
  funFact:          'Fermium is the heaviest element that can be formed by neutron capture in nuclear reactors. Beyond it, you need to crash atomic nuclei together in a particle accelerator.',
};
ELEMENT_INFO[101] = {
  electronConfig:   '[Rn] 5f¹³ 7s²',
  meltingPoint:     '827°C',
  boilingPoint:     'Not well established',
  density:          'Not well established',
  atomicRadius:     '173 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Albert Ghiorso et al. (Berkeley)',
  yearDiscovered:   '1955',
  description:      'Mendelevium was the ninth transuranium element, first synthesized in 1955 at Berkeley by bombarding einsteinium-253 with alpha particles. Only 17 atoms were produced in the initial experiment — confirmed by one of the first uses of ion exchange chromatography for actinide separation. It was the first element produced one atom at a time. It was named after Dmitri Mendeleev, creator of the periodic table.',
  uses:             'Fundamental nuclear chemistry research only',
  funFact:          'Mendelevium was discovered by detecting just 17 atoms — the first element ever identified from such tiny quantities. The entire first sample weighed less than a trillionth of a gram.',
};
ELEMENT_INFO[102] = {
  electronConfig:   '[Rn] 5f¹⁴ 7s²',
  meltingPoint:     '827°C',
  boilingPoint:     'Not well established',
  density:          'Not well established',
  atomicRadius:     '176 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna)',
  yearDiscovered:   '1966',
  description:      'The discovery of nobelium was controversial — multiple laboratories claimed priority, and the initial Berkeley claim of 1957 could not be reproduced. The Dubna laboratory in the USSR confirmed the synthesis in 1966. It was named after Alfred Nobel, inventor of dynamite and founder of the Nobel Prize. Its +2 oxidation state is unusual for an actinide.',
  uses:             'Fundamental nuclear chemistry research only',
  funFact:          'The discovery of nobelium was disputed between US and Soviet scientists for years during the Cold War — element naming became a geopolitical issue, with each side claiming priority.',
};
ELEMENT_INFO[103] = {
  electronConfig:   '[Rn] 5f¹⁴ 7s² 7p¹',
  meltingPoint:     '1627°C (est.)',
  boilingPoint:     'Not well established',
  density:          'Not well established',
  atomicRadius:     '161 pm (covalent radius)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Albert Ghiorso et al. (Berkeley)',
  yearDiscovered:   '1961',
  description:      'Lawrencium is the last actinide element and the fifteenth transuranium element. It was first synthesized at Berkeley in 1961 by bombarding californium with boron ions. It is named after Ernest O. Lawrence, inventor of the cyclotron particle accelerator. Lawrencium\'s electron configuration is debated — relativistic effects may give it a 7s²7p¹ rather than the expected 7s²6d¹ configuration.',
  uses:             'Fundamental nuclear chemistry research only',
  funFact:          'Lawrencium is the last actinide and also the last element whose electron configuration is still scientifically debated. At this point, relativistic quantum effects make predicting electron arrangements extremely difficult.',
};
ELEMENT_INFO[104] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d² 7s²',
  meltingPoint:     '2100°C (est.)',
  boilingPoint:     'Not well established',
  density:          '~23 g/cm³ (est.)',
  atomicRadius:     '157 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna) / Lawrence Berkeley Lab',
  yearDiscovered:   '1969',
  description:      'Rutherfordium is the first transactinide element, beginning the period 7 d-block. It was named after Ernest Rutherford, who discovered the atomic nucleus. Production is extremely small — only a few atoms at a time, with a half-life of about 65 seconds for Rf-267. Its chemistry is being studied to test whether periodic table trends continue at such high atomic numbers — early experiments confirm it behaves like hafnium.',
  uses:             'Fundamental nuclear and chemical research only',
  funFact:          'Rutherfordium belongs to Group 4 and should behave like zirconium and hafnium. Early chemistry experiments confirm it does — the periodic table\'s patterns hold even at element 104.',
};
ELEMENT_INFO[105] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d³ 7s²',
  meltingPoint:     'Not well established',
  boilingPoint:     'Not well established',
  density:          '~29 g/cm³ (est.)',
  atomicRadius:     '149 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna) / Lawrence Berkeley Lab',
  yearDiscovered:   '1970',
  description:      'Dubnium was named after Dubna, Russia, home of the Joint Institute for Nuclear Research that competed with Berkeley during the Cold War for discovery of superheavy elements. Its most stable isotope (Db-268) has a half-life of about 29 hours. Dubnium is in Group 5 and is predicted to behave like tantalum and niobium — early chemistry experiments support this.',
  uses:             'Fundamental nuclear and chemical research only',
  funFact:          'The naming dispute between Dubna and Berkeley over elements 104 and 105 became a \'cold war in chemistry\' lasting 20 years, finally resolved by IUPAC in 1997.',
};
ELEMENT_INFO[106] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d⁴ 7s²',
  meltingPoint:     'Not well established',
  boilingPoint:     'Not well established',
  density:          '~35 g/cm³ (est.)',
  atomicRadius:     '143 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna) / Lawrence Berkeley Lab',
  yearDiscovered:   '1974',
  description:      'Seaborgium was named after Glenn T. Seaborg — the first element named after a living person at the time of IUPAC recognition. Seaborg was a key figure in the synthesis of 10 transuranium elements and won the 1951 Nobel Prize in Chemistry. Seaborgium-271 has a half-life of about 2 minutes. Chemical studies show it behaves like a heavier tungsten, confirming periodic table trends continue.',
  uses:             'Fundamental nuclear and chemical research only',
  funFact:          'Seaborg appeared in the Guinness Book of World Records as the only person who could write their own element\'s name on their own mailing address (he lived on Seaborg Drive, Berkeley, California).',
};
ELEMENT_INFO[107] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d⁵ 7s²',
  meltingPoint:     'Not well established',
  boilingPoint:     'Not well established',
  density:          '~37 g/cm³ (est.)',
  atomicRadius:     '141 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'GSI Helmholtz Centre (Darmstadt, Germany)',
  yearDiscovered:   '1981',
  description:      'Bohrium was first synthesized at GSI in Darmstadt, Germany in 1981 by bombarding bismuth with chromium ions. It was named after Niels Bohr, the Danish physicist who developed the quantum model of the atom. The most stable isotope, Bh-270, has a half-life of about 61 seconds. Chemical experiments confirm it forms the same types of compounds as manganese and rhenium in Group 7.',
  uses:             'Fundamental nuclear and chemical research only',
  funFact:          'Niels Bohr\'s quantum model of the atom — the concept of electron shells that underlies the periodic table\'s structure — is honored in the name of element 107.',
};
ELEMENT_INFO[108] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d⁶ 7s²',
  meltingPoint:     'Not well established',
  boilingPoint:     'Not well established',
  density:          '~41 g/cm³ (est.)',
  atomicRadius:     '134 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'GSI Helmholtz Centre (Darmstadt, Germany)',
  yearDiscovered:   '1984',
  description:      'Hassium was synthesized at GSI in Darmstadt in 1984 and named after Hesse (Hassia in Latin), the German state where the laboratory is located. Hs-269 has a half-life of about 16 seconds. Remarkably, in 2002 hassium oxide (HsO₄) molecules were produced and their volatility measured — confirming hassium behaves like a heavier osmium, showing periodic table trends extend even to superheavy elements.',
  uses:             'Fundamental nuclear and chemical research only',
  funFact:          'In 2002, researchers produced hassium oxide molecules and measured their volatility — proving superheavy element chemistry follows predictable periodic table trends even for atoms that exist for only seconds.',
};
ELEMENT_INFO[109] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d⁷ 7s²',
  meltingPoint:     'Not well established',
  boilingPoint:     'Not well established',
  density:          '~37 g/cm³ (est.)',
  atomicRadius:     '129 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'GSI Helmholtz Centre (Darmstadt, Germany)',
  yearDiscovered:   '1982',
  description:      'Meitnerium was first synthesized in 1982 at GSI, Darmstadt by bombarding bismuth-209 with iron-58 ions, producing just a single atom. It is named after Lise Meitner, the Austrian-Swedish physicist who co-discovered nuclear fission in 1938. Despite her fundamental contribution to nuclear science, she was controversially excluded from the 1944 Nobel Prize awarded to Otto Hahn alone.',
  uses:             'Fundamental nuclear research only — only a few atoms have ever been created',
  funFact:          'Lise Meitner, for whom this element is named, was nominated for the Nobel Prize 49 times between 1924 and 1948 but never received it — one of the greatest oversights in the history of science.',
};
ELEMENT_INFO[110] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d⁸ 7s²',
  meltingPoint:     'Not well established',
  boilingPoint:     'Not well established',
  density:          '~35 g/cm³ (est.)',
  atomicRadius:     '128 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'GSI Helmholtz Centre (Darmstadt, Germany)',
  yearDiscovered:   '1994',
  description:      'Darmstadtium was discovered in 1994 at GSI in Darmstadt — and named after the city where it was created. It was produced by bombarding nickel-62 with lead-208 ions. It is a Group 10 element and should be a noble metal like platinum and palladium. Only nanogram quantities have ever been produced, and it exists for only milliseconds.',
  uses:             'Fundamental nuclear research only',
  funFact:          'Darmstadtium is one of the few elements named after its city of discovery. The GSI researchers in Darmstadt have created more new elements than any other single laboratory in the world.',
};
ELEMENT_INFO[111] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d¹⁰ 7s¹',
  meltingPoint:     'Not well established',
  boilingPoint:     'Not well established',
  density:          '~29 g/cm³ (est.)',
  atomicRadius:     '121 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'GSI Helmholtz Centre (Darmstadt, Germany)',
  yearDiscovered:   '1994',
  description:      'Roentgenium was synthesized at GSI in 1994 by fusing nickel-64 with bismuth-209. It was named after Wilhelm Conrad Röntgen, the discoverer of X-rays (1895), who won the first Nobel Prize in Physics in 1901. Rg-282 has a half-life of about 100 seconds. It is predicted to be a noble metal like gold, sharing some of gold\'s unusual relativistic electronic properties.',
  uses:             'Fundamental nuclear research only',
  funFact:          'Roentgenium is named after the discoverer of X-rays, closing a poetic circle — the element is in the same group as gold, whose own unusual yellow color is itself a relativistic quantum effect.',
};
ELEMENT_INFO[112] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d¹⁰ 7s²',
  meltingPoint:     'Not well established',
  boilingPoint:     'Not well established',
  density:          '~14 g/cm³ (est.)',
  atomicRadius:     '122 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'GSI Helmholtz Centre (Darmstadt, Germany)',
  yearDiscovered:   '1996',
  description:      'Copernicium was synthesized at GSI in 1996 and named after the astronomer Nicolaus Copernicus. Theoretical predictions suggest copernicium may behave like a gas at room temperature rather than a solid metal, due to extreme relativistic effects on its outermost electrons. Experiments in 2009 suggested it does not adsorb onto gold at room temperature, supporting predictions of unusual gaseous behavior.',
  uses:             'Fundamental nuclear and theoretical chemistry research only',
  funFact:          'Copernicium may be a gaseous metal at room temperature — a consequence of relativistic quantum effects so extreme that electrons in its outer shells move at a significant fraction of the speed of light.',
};
ELEMENT_INFO[113] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',
  meltingPoint:     '430°C (est.)',
  boilingPoint:     'Not well established',
  density:          '~16 g/cm³ (est.)',
  atomicRadius:     '136 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'RIKEN Institute (Wako, Saitama, Japan)',
  yearDiscovered:   '2004',
  description:      'Nihonium is the first element discovered in Asia — it was synthesized at RIKEN in Japan in 2004 after a 9-year experiment that produced only 3 confirmed atoms. It was officially named nihonium in 2016, from \'Nihon\' (日本), the Japanese word for Japan. The discovery is a point of national pride — Japanese schoolchildren now learn that Japan is home to the discovery of an element on the periodic table.',
  uses:             'Fundamental nuclear research only — fewer than 10 atoms ever created',
  funFact:          'It took RIKEN nine years and 400 trillion bombardment attempts to produce just 3 confirmed atoms of nihonium. The naming ceremony in 2016 was a national celebration in Japan.',
};
ELEMENT_INFO[114] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',
  meltingPoint:     '∜73°C (est.)',
  boilingPoint:     'Not well established',
  density:          '~14 g/cm³ (est.)',
  atomicRadius:     '137 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna) / Lawrence Livermore National Laboratory',
  yearDiscovered:   '1999',
  description:      'Flerovium is named after the Flerov Laboratory of Nuclear Reactions in Dubna, Russia. Flerovium-289 has a half-life of about 2.1 seconds. Like copernicium, relativistic effects may make it behave as a gas or noble-metal-like substance rather than a typical post-transition metal. It belongs to the carbon group but its chemistry is predicted to differ significantly from lead.',
  uses:             'Fundamental nuclear research only',
  funFact:          'Flyorov, whose lab this element honors, noticed in 1942 that fission papers suddenly vanished from scientific journals — correctly deducing that the US, UK, and Germany had all classified their atomic bomb research.',
};
ELEMENT_INFO[115] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',
  meltingPoint:     '400°C (est.)',
  boilingPoint:     'Not well established',
  density:          '~13.5 g/cm³ (est.)',
  atomicRadius:     '138 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna) / Lawrence Livermore National Laboratory',
  yearDiscovered:   '2003',
  description:      'Moscovium was synthesized in 2003 at Dubna by bombarding americium-243 with calcium-48 ions. It is named after the Moscow Oblast, the region of Russia where the Dubna research center is located. Its most stable isotope, Mc-290, has a half-life of about 650 milliseconds. It is predicted to have chemistry similar to bismuth, though its properties are largely unknown.',
  uses:             'Fundamental nuclear research only',
  funFact:          'The synthesis of moscovium at Dubna was part of a productive US-Russia scientific collaboration that produced elements 113 through 118 despite Cold War tensions.',
};
ELEMENT_INFO[116] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
  meltingPoint:     '709°C (est.)',
  boilingPoint:     'Not well established',
  density:          '~12.9 g/cm³ (est.)',
  atomicRadius:     '141 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna) / Lawrence Livermore National Laboratory',
  yearDiscovered:   '2000',
  description:      'Livermorium was first synthesized in 2000 at Dubna in collaboration with Lawrence Livermore National Laboratory, after which it is named. It is in Group 16 (like oxygen and sulfur) but its chemistry is predicted to differ significantly from its lighter analogs due to relativistic effects. The most stable isotope, Lv-293, has a half-life of about 60 milliseconds.',
  uses:             'Fundamental nuclear research only',
  funFact:          'Lawrence Livermore National Laboratory, which gave livermorium its name, was founded in 1952 to design nuclear weapons — the naming honors the broader scientific contributions of the lab.',
};
ELEMENT_INFO[117] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
  meltingPoint:     '350°C (est.)',
  boilingPoint:     'Not well established',
  density:          '~7.2 g/cm³ (est.)',
  atomicRadius:     '145 pm (covalent radius) (est.)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna) / Oak Ridge National Laboratory &amp; Vanderbilt University',
  yearDiscovered:   '2010',
  description:      'Tennessine was synthesized in 2010 at Dubna using berkelium-249 produced at Oak Ridge National Laboratory in Tennessee. The element was named after Tennessee to honor Oak Ridge, Vanderbilt University, and the University of Tennessee. Its synthesis required 22 mg of berkelium-249, which took 250 days to produce. Ts-294 has a half-life of about 51 milliseconds.',
  uses:             'Fundamental nuclear research only — only about 80 atoms have ever been detected',
  funFact:          'Tennessine is the most recently confirmed element (IUPAC 2016). Producing its berkelium target required running Oak Ridge\'s HFIR reactor essentially non-stop for 250 days.',
};
ELEMENT_INFO[118] = {
  electronConfig:   '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
  meltingPoint:     '∜3°C (predicted)',
  boilingPoint:     'Not well established',
  density:          '~7 g/cm³ (predicted)',
  atomicRadius:     '152 pm (covalent radius) (predicted)',
  electronegativity:'Not well established (synthetic element)',
  discoveredBy:     'Joint Institute for Nuclear Research (Dubna) / Lawrence Berkeley National Laboratory',
  yearDiscovered:   '2002',
  description:      'Oganesson is the heaviest known element, completing Period 7, and was named after nuclear physicist Yuri Oganessian, who pioneered the hot fusion technique for creating superheavy elements. Only 5 atoms have ever been detected, each surviving less than 1 millisecond. Though it completes the noble gas column, quantum calculations predict it may actually be a solid at room temperature and may form chemical compounds — unlike lighter noble gases.',
  uses:             'Fundamental nuclear and theoretical physics research only — the frontier of the known periodic table',
  funFact:          'Oganesson is theorized to not behave like a noble gas despite filling the noble gas column. Relativistic quantum effects may make it a solid at room temperature that forms chemical bonds — a revolutionary idea that challenges our understanding of the periodic table.',
};