/* ============================================================
   map-data.js  —  Deposit and industrial use data
   Sources: USGS Mineral Commodity Summaries 2022-2023,
            World Gold Council, IEA Critical Minerals 2023,
            World Nuclear Association, International study groups
   pct: approximate % of world total (top producers shown)
   Coordinates: geographic centre of primary production region
   ============================================================ */

var DEPOSITS = {

  /* ── Lithium ─────────────────────────────────────────── Z=3  */
  3:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Australia leads in hard-rock spodumene; Chile and Argentina dominate brine extraction from the Lithium Triangle.',
    countries:[
      {name:'Australia',    pct:47, lat:-25, lng:134},
      {name:'Chile',        pct:26, lat:-30, lng:-71},
      {name:'China',        pct:14, lat:35,  lng:105},
      {name:'Argentina',    pct:6,  lat:-34, lng:-64},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Zimbabwe',     pct:2,  lat:-20, lng:30},
      {name:'Portugal',     pct:1,  lat:39,  lng:-8},
      {name:'USA',          pct:1,  lat:41,  lng:-117},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Beryllium ───────────────────────────────────────── Z=4  */
  4:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. The USA\'s Spor Mountain, Utah is the world\'s largest beryllium deposit. Beryllium is critical for aerospace, nuclear, and defense applications.',
    countries:[
      {name:'USA',          pct:65, lat:39,  lng:-113},
      {name:'China',        pct:20, lat:35,  lng:105},
      {name:'Kazakhstan',   pct:10, lat:48,  lng:68},
      {name:'Mozambique',   pct:3,  lat:-18, lng:35},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52}
    ]},

  /* ── Boron ───────────────────────────────────────────── Z=5  */
  5:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Turkey holds the world\'s largest boron reserves and dominates global production from the Eskisehir region.',
    countries:[
      {name:'Turkey',       pct:72, lat:39,  lng:35},
      {name:'USA',          pct:14, lat:35,  lng:-117},
      {name:'Chile',        pct:6,  lat:-23, lng:-68},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Argentina',    pct:2,  lat:-24, lng:-67},
      {name:'Bolivia',      pct:1,  lat:-20, lng:-64},
      {name:'China',        pct:1,  lat:35,  lng:105},
      {name:'Peru',         pct:1,  lat:-15, lng:-72}
    ]},

  /* ── Carbon (Graphite) ───────────────────────────────── Z=6  */
  6:{ label:'Natural graphite production \u00b7 % of world total',
    note:'Source: USGS 2023. Natural graphite is mined primarily for steel, batteries, and lubricants. China dominates global output; Mozambique and Madagascar are major emerging producers.',
    countries:[
      {name:'China',        pct:65, lat:35,  lng:105},
      {name:'Mozambique',   pct:12, lat:-18, lng:35},
      {name:'Madagascar',   pct:8,  lat:-20, lng:47},
      {name:'Russia',       pct:5,  lat:55,  lng:60},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Canada',       pct:2,  lat:56,  lng:-96},
      {name:'Norway',       pct:2,  lat:62,  lng:10},
      {name:'Ukraine',      pct:2,  lat:49,  lng:31},
      {name:'Tanzania',     pct:1,  lat:-6,  lng:35}
    ]},

  /* ── Fluorine (Fluorspar) ────────────────────────────── Z=9  */
  9:{ label:'Fluorspar production \u00b7 % of world total',
    note:'Source: USGS 2023. Fluorine is obtained from fluorspar (calcium fluoride). China is the dominant global producer; Mexico has the highest-grade reserves.',
    countries:[
      {name:'China',        pct:64, lat:35,  lng:105},
      {name:'Mexico',       pct:15, lat:26,  lng:-105},
      {name:'Vietnam',      pct:4,  lat:22,  lng:104},
      {name:'South Africa', pct:4,  lat:-29, lng:25},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Mongolia',     pct:3,  lat:47,  lng:103},
      {name:'Namibia',      pct:2,  lat:-22, lng:18},
      {name:'Spain',        pct:2,  lat:43,  lng:-6},
      {name:'Kenya',        pct:1,  lat:1,   lng:38},
      {name:'Morocco',      pct:1,  lat:32,  lng:-7}
    ]},

  /* ── Aluminum (Bauxite) ──────────────────────────────── Z=13 */
  13:{ label:'Bauxite production \u00b7 % of world total',
    note:'Source: USGS 2023. Bauxite is the primary ore of aluminum. Guinea holds the world\'s largest reserves. Australia leads in production volume.',
    countries:[
      {name:'Australia',    pct:29, lat:-25, lng:134},
      {name:'Guinea',       pct:24, lat:11,  lng:-12},
      {name:'China',        pct:21, lat:35,  lng:105},
      {name:'Brazil',       pct:8,  lat:-15, lng:-52},
      {name:'India',        pct:6,  lat:20,  lng:78},
      {name:'Jamaica',      pct:3,  lat:18,  lng:-77},
      {name:'Indonesia',    pct:3,  lat:-5,  lng:117},
      {name:'Russia',       pct:2,  lat:56,  lng:60},
      {name:'Kazakhstan',   pct:2,  lat:48,  lng:68},
      {name:'Ghana',        pct:2,  lat:8,   lng:-1}
    ]},

  /* ── Phosphorus (Phosphate rock) ─────────────────────── Z=15 */
  15:{ label:'Phosphate rock production \u00b7 % of world total',
    note:'Source: USGS 2023. Morocco controls over 70% of known phosphate reserves. China leads in annual production volume.',
    countries:[
      {name:'China',        pct:34, lat:35,  lng:105},
      {name:'Morocco',      pct:15, lat:32,  lng:-7},
      {name:'Russia',       pct:7,  lat:55,  lng:60},
      {name:'Egypt',        pct:5,  lat:26,  lng:30},
      {name:'Jordan',       pct:4,  lat:31,  lng:36},
      {name:'USA',          pct:4,  lat:28,  lng:-82},
      {name:'Saudi Arabia', pct:3,  lat:25,  lng:45},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Algeria',      pct:3,  lat:28,  lng:3},
      {name:'Australia',    pct:3,  lat:-25, lng:134}
    ]},

  /* ── Sulfur ──────────────────────────────────────────── Z=16 */
  16:{ label:'Sulfur production \u00b7 % of world total',
    note:'Source: USGS 2023. Most sulfur is now recovered from petroleum and natural gas desulfurization rather than mined directly. Used primarily to manufacture sulfuric acid.',
    countries:[
      {name:'China',        pct:25, lat:35,  lng:105},
      {name:'USA',          pct:17, lat:40,  lng:-100},
      {name:'Russia',       pct:10, lat:55,  lng:60},
      {name:'Canada',       pct:9,  lat:53,  lng:-114},
      {name:'Saudi Arabia', pct:6,  lat:25,  lng:45},
      {name:'Japan',        pct:5,  lat:36,  lng:138},
      {name:'Germany',      pct:4,  lat:51,  lng:10},
      {name:'Kazakhstan',   pct:3,  lat:48,  lng:68},
      {name:'Mexico',       pct:3,  lat:23,  lng:-102},
      {name:'UAE',          pct:3,  lat:24,  lng:54}
    ]},

  /* ── Potassium (Potash) ──────────────────────────────── Z=19 */
  19:{ label:'Potash production \u00b7 % of world total',
    note:'Source: USGS 2023. Potash is the primary source of potassium for fertilizers. Canada\'s Saskatchewan basin is the world\'s largest known potash deposit.',
    countries:[
      {name:'Canada',       pct:31, lat:52,  lng:-107},
      {name:'Russia',       pct:20, lat:59,  lng:56},
      {name:'Belarus',      pct:18, lat:53,  lng:28},
      {name:'China',        pct:10, lat:38,  lng:97},
      {name:'Germany',      pct:7,  lat:52,  lng:11},
      {name:'Chile',        pct:4,  lat:-24, lng:-69},
      {name:'USA',          pct:3,  lat:38,  lng:-100},
      {name:'Jordan',       pct:2,  lat:31,  lng:36},
      {name:'Israel',       pct:2,  lat:31,  lng:35},
      {name:'Spain',        pct:2,  lat:42,  lng:2}
    ]},

  /* ── Calcium (Limestone / Quicklime) ─────────────────── Z=20 */
  20:{ label:'Limestone production \u00b7 % of world total',
    note:'Source: USGS 2023. Limestone is the primary ore for calcium. Production is closely tied to cement manufacturing, which is dominated by China.',
    countries:[
      {name:'China',        pct:53, lat:35,  lng:105},
      {name:'India',        pct:8,  lat:20,  lng:78},
      {name:'USA',          pct:5,  lat:40,  lng:-85},
      {name:'Vietnam',      pct:3,  lat:21,  lng:106},
      {name:'Turkey',       pct:3,  lat:39,  lng:35},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Iran',         pct:2,  lat:32,  lng:53},
      {name:'South Korea',  pct:2,  lat:37,  lng:128},
      {name:'Japan',        pct:2,  lat:36,  lng:138}
    ]},

  /* ── Scandium ────────────────────────────────────────── Z=21 */
  21:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Scandium is produced mainly as a byproduct of uranium and titanium processing. Global production is tiny — only a few tonnes per year.',
    countries:[
      {name:'China',        pct:66, lat:35,  lng:105},
      {name:'Russia',       pct:17, lat:55,  lng:60},
      {name:'Philippines',  pct:7,  lat:13,  lng:122},
      {name:'Australia',    pct:5,  lat:-25, lng:134},
      {name:'Ukraine',      pct:3,  lat:49,  lng:31},
      {name:'Kazakhstan',   pct:2,  lat:48,  lng:68}
    ]},

  /* ── Titanium (Ilmenite & Rutile) ────────────────────── Z=22 */
  22:{ label:'Titanium mineral production \u00b7 % of world total',
    note:'Source: USGS 2023. Titanium minerals (ilmenite and rutile) are mined from coastal heavy-mineral sand deposits worldwide.',
    countries:[
      {name:'China',        pct:35, lat:35,  lng:105},
      {name:'South Africa', pct:17, lat:-29, lng:25},
      {name:'Mozambique',   pct:11, lat:-18, lng:35},
      {name:'Canada',       pct:8,  lat:47,  lng:-71},
      {name:'Australia',    pct:7,  lat:-25, lng:134},
      {name:'India',        pct:6,  lat:20,  lng:78},
      {name:'Senegal',      pct:4,  lat:14,  lng:-14},
      {name:'Ukraine',      pct:4,  lat:49,  lng:31},
      {name:'Norway',       pct:3,  lat:62,  lng:10},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47}
    ]},

  /* ── Vanadium ────────────────────────────────────────── Z=23 */
  23:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Vanadium is primarily recovered as a byproduct of steel slag processing. China dominates global output by a wide margin.',
    countries:[
      {name:'China',        pct:62, lat:35,  lng:105},
      {name:'Russia',       pct:17, lat:55,  lng:60},
      {name:'South Africa', pct:14, lat:-29, lng:25},
      {name:'Brazil',       pct:5,  lat:-15, lng:-52},
      {name:'Australia',    pct:2,  lat:-25, lng:134}
    ]},

  /* ── Chromium ────────────────────────────────────────── Z=24 */
  24:{ label:'Chromite ore production \u00b7 % of world total',
    note:'Source: USGS 2023. South Africa\'s Bushveld Complex is the world\'s largest chromite deposit. Kazakhstan and India are major secondary producers.',
    countries:[
      {name:'South Africa', pct:44, lat:-29, lng:25},
      {name:'Kazakhstan',   pct:22, lat:48,  lng:68},
      {name:'India',        pct:11, lat:20,  lng:78},
      {name:'Zimbabwe',     pct:5,  lat:-20, lng:30},
      {name:'Turkey',       pct:4,  lat:39,  lng:35},
      {name:'Finland',      pct:3,  lat:64,  lng:26},
      {name:'Pakistan',     pct:3,  lat:30,  lng:70},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Oman',         pct:2,  lat:21,  lng:57}
    ]},

  /* ── Manganese ───────────────────────────────────────── Z=25 */
  25:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Manganese is essential for steelmaking. South Africa and Gabon hold most of the world\'s high-grade reserves.',
    countries:[
      {name:'South Africa', pct:33, lat:-29, lng:25},
      {name:'Gabon',        pct:19, lat:0,   lng:12},
      {name:'Australia',    pct:16, lat:-25, lng:134},
      {name:'Ghana',        pct:7,  lat:8,   lng:-1},
      {name:'China',        pct:6,  lat:35,  lng:105},
      {name:'Brazil',       pct:5,  lat:-15, lng:-52},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Ukraine',      pct:3,  lat:49,  lng:31},
      {name:'Malaysia',     pct:2,  lat:4,   lng:109},
      {name:'Mexico',       pct:2,  lat:23,  lng:-102}
    ]},

  /* ── Iron ────────────────────────────────────────────── Z=26 */
  26:{ label:'Iron ore production \u00b7 % of world total',
    note:'Source: USGS 2023. Australia\'s Pilbara region and Brazil\'s Carajás are the world\'s largest iron ore deposits. Iron ore is the raw material for steel.',
    countries:[
      {name:'Australia',    pct:34, lat:-25, lng:134},
      {name:'Brazil',       pct:18, lat:-15, lng:-52},
      {name:'China',        pct:15, lat:35,  lng:105},
      {name:'India',        pct:8,  lat:20,  lng:78},
      {name:'Russia',       pct:5,  lat:55,  lng:60},
      {name:'South Africa', pct:4,  lat:-29, lng:25},
      {name:'Ukraine',      pct:3,  lat:49,  lng:31},
      {name:'Canada',       pct:3,  lat:56,  lng:-96},
      {name:'USA',          pct:2,  lat:47,  lng:-92},
      {name:'Sweden',       pct:2,  lat:65,  lng:20}
    ]},

  /* ── Cobalt ──────────────────────────────────────────── Z=27 */
  27:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. The DR Congo produces the majority of the world\'s cobalt, primarily from the Katanga Copper Belt.',
    countries:[
      {name:'DR Congo',     pct:68, lat:-4,  lng:24},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'Australia',    pct:4,  lat:-25, lng:134},
      {name:'Philippines',  pct:4,  lat:13,  lng:122},
      {name:'Cuba',         pct:3,  lat:22,  lng:-79},
      {name:'Madagascar',   pct:2,  lat:-20, lng:47},
      {name:'Papua New Guinea',pct:2,lat:-6, lng:147},
      {name:'Canada',       pct:2,  lat:56,  lng:-96},
      {name:'Morocco',      pct:2,  lat:32,  lng:-7},
      {name:'South Africa', pct:2,  lat:-29, lng:25}
    ]},

  /* ── Nickel ──────────────────────────────────────────── Z=28 */
  28:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Indonesia has grown rapidly to become the world\'s largest nickel producer, largely from laterite deposits in Sulawesi.',
    countries:[
      {name:'Indonesia',    pct:37, lat:-5,  lng:117},
      {name:'Philippines',  pct:13, lat:13,  lng:122},
      {name:'Russia',       pct:11, lat:55,  lng:60},
      {name:'New Caledonia',pct:8,  lat:-21, lng:165},
      {name:'Canada',       pct:6,  lat:56,  lng:-96},
      {name:'Australia',    pct:5,  lat:-25, lng:134},
      {name:'China',        pct:4,  lat:35,  lng:105},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Cuba',         pct:3,  lat:22,  lng:-79},
      {name:'South Africa', pct:2,  lat:-29, lng:25}
    ]},

  /* ── Copper ──────────────────────────────────────────── Z=29 */
  29:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Chile\'s Atacama Desert hosts the world\'s largest copper mines. Peru, the DRC, and China are major secondary producers.',
    countries:[
      {name:'Chile',        pct:27, lat:-30, lng:-71},
      {name:'Peru',         pct:10, lat:-12, lng:-75},
      {name:'DR Congo',     pct:9,  lat:-4,  lng:24},
      {name:'China',        pct:8,  lat:35,  lng:105},
      {name:'USA',          pct:6,  lat:33,  lng:-110},
      {name:'Australia',    pct:5,  lat:-25, lng:134},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'Zambia',       pct:4,  lat:-13, lng:28},
      {name:'Kazakhstan',   pct:4,  lat:48,  lng:68},
      {name:'Indonesia',    pct:3,  lat:-5,  lng:117}
    ]},

  /* ── Zinc ────────────────────────────────────────────── Z=30 */
  30:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. China leads zinc production by a large margin. Zinc is primarily used for galvanizing steel to prevent corrosion.',
    countries:[
      {name:'China',        pct:34, lat:35,  lng:105},
      {name:'Peru',         pct:11, lat:-12, lng:-75},
      {name:'Australia',    pct:11, lat:-25, lng:134},
      {name:'India',        pct:8,  lat:20,  lng:78},
      {name:'USA',          pct:6,  lat:38,  lng:-106},
      {name:'Bolivia',      pct:4,  lat:-17, lng:-65},
      {name:'Mexico',       pct:4,  lat:23,  lng:-102},
      {name:'Canada',       pct:3,  lat:56,  lng:-96},
      {name:'Kazakhstan',   pct:3,  lat:48,  lng:68},
      {name:'Sweden',       pct:3,  lat:65,  lng:20}
    ]},

  /* ── Gallium ─────────────────────────────────────────── Z=31 */
  31:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Gallium is recovered exclusively as a byproduct of aluminum smelting. It is critical for semiconductors, LEDs, and 5G technology.',
    countries:[
      {name:'China',        pct:80, lat:35,  lng:105},
      {name:'Russia',       pct:7,  lat:55,  lng:60},
      {name:'Ukraine',      pct:5,  lat:49,  lng:31},
      {name:'Germany',      pct:4,  lat:51,  lng:10},
      {name:'Kazakhstan',   pct:4,  lat:48,  lng:68}
    ]},

  /* ── Germanium ───────────────────────────────────────── Z=32 */
  32:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Germanium is recovered as a byproduct of zinc smelting and coal combustion. It is critical for fiber optics and infrared optics.',
    countries:[
      {name:'China',        pct:71, lat:35,  lng:105},
      {name:'Russia',       pct:10, lat:55,  lng:60},
      {name:'USA',          pct:6,  lat:40,  lng:-100},
      {name:'Canada',       pct:4,  lat:56,  lng:-96},
      {name:'Belgium',      pct:4,  lat:50,  lng:4},
      {name:'Finland',      pct:3,  lat:64,  lng:26},
      {name:'Namibia',      pct:2,  lat:-22, lng:18}
    ]},

  /* ── Arsenic ─────────────────────────────────────────── Z=33 */
  33:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Arsenic is produced almost entirely as a byproduct of copper, gold, and lead smelting. Used in wood preservatives and semiconductors.',
    countries:[
      {name:'China',        pct:35, lat:35,  lng:105},
      {name:'Morocco',      pct:20, lat:32,  lng:-7},
      {name:'Russia',       pct:15, lat:55,  lng:60},
      {name:'Peru',         pct:10, lat:-12, lng:-75},
      {name:'Belgium',      pct:8,  lat:50,  lng:4},
      {name:'Bolivia',      pct:5,  lat:-17, lng:-65},
      {name:'Chile',        pct:4,  lat:-30, lng:-71},
      {name:'Ghana',        pct:3,  lat:8,   lng:-1}
    ]},

  /* ── Selenium ────────────────────────────────────────── Z=34 */
  /* Se deposit: spread Germany & Belgium to avoid overlap */
  34:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Selenium is recovered as a byproduct of copper refining. Major uses include glass manufacturing, solar cells, and animal feed supplements.',
    countries:[
      {name:'Germany',      pct:25, lat:55,  lng:10, forcedPos:{lx:567, ly:88}},
      {name:'Japan',        pct:20, lat:36,  lng:138},
      {name:'Belgium',      pct:15, lat:44,  lng:-12, forcedPos:{lx:386, ly:118}},
      {name:'China',        pct:12, lat:35,  lng:105},
      {name:'USA',          pct:10, lat:40,  lng:-100},
      {name:'Canada',       pct:8,  lat:56,  lng:-96},
      {name:'Finland',      pct:5,  lat:64,  lng:26},
      {name:'Russia',       pct:5,  lat:55,  lng:60}
    ]},

  /* ── Bromine ─────────────────────────────────────────── Z=35 */
  35:{ label:'Bromine production \u00b7 % of world total',
    note:'Source: USGS 2023. Bromine is extracted from underground brines and the Dead Sea. Used in flame retardants, drilling fluids, and pharmaceuticals.',
    countries:[
      {name:'USA',          pct:40, lat:33,  lng:-92},
      {name:'Israel',       pct:37, lat:25,  lng:25},
      {name:'Jordan',       pct:15, lat:35,  lng:43},
      {name:'China',        pct:5,  lat:35,  lng:105},
      {name:'Ukraine',      pct:2,  lat:49,  lng:31},
      {name:'Japan',        pct:1,  lat:36,  lng:138}
    ]},

  /* ── Strontium (Celestite) ───────────────────────────── Z=38 */
  38:{ label:'Celestite production \u00b7 % of world total',
    note:'Source: USGS 2023. Strontium is mined as celestite (strontium sulfate). China and Spain dominate global production. Used in fireworks, magnets, and TVs.',
    countries:[
      {name:'China',        pct:45, lat:35,  lng:105},
      {name:'Spain',        pct:32, lat:37,  lng:-4},
      {name:'Mexico',       pct:10, lat:26,  lng:-106},
      {name:'Turkey',       pct:5,  lat:39,  lng:35},
      {name:'Argentina',    pct:4,  lat:-28, lng:-65},
      {name:'Iran',         pct:4,  lat:32,  lng:53}
    ]},

  /* ── Yttrium ─────────────────────────────────────────── Z=39 */
  39:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Yttrium is a rare earth element mined alongside other lanthanides. Key uses include LEDs, superconductors, and camera lenses.',
    countries:[
      {name:'China',        pct:70, lat:35,  lng:105},
      {name:'Australia',    pct:10, lat:-25, lng:134},
      {name:'Myanmar',      pct:8,  lat:17,  lng:97},
      {name:'USA',          pct:5,  lat:37,  lng:-117},
      {name:'India',        pct:3,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52}
    ]},

  /* ── Zirconium ───────────────────────────────────────── Z=40 */
  40:{ label:'Zircon sand production \u00b7 % of world total',
    note:'Source: USGS 2023. Zirconium is mined as zircon sand from coastal placer deposits. Australia and South Africa dominate production.',
    countries:[
      {name:'Australia',    pct:40, lat:-25, lng:134},
      {name:'South Africa', pct:25, lat:-30, lng:22},
      {name:'China',        pct:15, lat:35,  lng:105},
      {name:'Mozambique',   pct:5,  lat:-14, lng:39},
      {name:'Senegal',      pct:5,  lat:14,  lng:-14},
      {name:'India',        pct:3,  lat:20,  lng:78},
      {name:'Indonesia',    pct:2,  lat:-5,  lng:117},
      {name:'Ukraine',      pct:2,  lat:49,  lng:31},
      {name:'Malawi',       pct:2,  lat:-11, lng:33},
      {name:'USA',          pct:1,  lat:30,  lng:-81}
    ]},

  /* ── Niobium ─────────────────────────────────────────── Z=41 */
  41:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Brazil\'s Araxa mine (CBMM) alone supplies about 85% of the world\'s niobium, the most geographically concentrated critical mineral supply on Earth.',
    countries:[
      {name:'Brazil',       pct:88, lat:-19, lng:-47},
      {name:'Canada',       pct:8,  lat:52,  lng:-78},
      {name:'Australia',    pct:2,  lat:-25, lng:134},
      {name:'Nigeria',      pct:1,  lat:10,  lng:8},
      {name:'Russia',       pct:1,  lat:55,  lng:60}
    ]},

  /* ── Molybdenum ──────────────────────────────────────── Z=42 */
  42:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Molybdenum is primarily a byproduct of copper mining. China leads in production; the USA\'s Climax mine is the world\'s largest primary Mo mine.',
    countries:[
      {name:'China',        pct:44, lat:35,  lng:105},
      {name:'Chile',        pct:17, lat:-30, lng:-71},
      {name:'USA',          pct:13, lat:39,  lng:-106},
      {name:'Peru',         pct:8,  lat:-12, lng:-75},
      {name:'Mexico',       pct:4,  lat:23,  lng:-102},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Armenia',      pct:3,  lat:40,  lng:45},
      {name:'Canada',       pct:2,  lat:56,  lng:-96},
      {name:'Kazakhstan',   pct:2,  lat:48,  lng:68},
      {name:'Iran',         pct:2,  lat:32,  lng:53}
    ]},

  /* ── Ruthenium ───────────────────────────────────────── Z=44 */
  44:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Ruthenium is a platinum group metal (PGM) recovered as a byproduct of nickel and platinum mining. Used in electronics and catalysis.',
    countries:[
      {name:'South Africa', pct:84, lat:-29, lng:25},
      {name:'Russia',       pct:10, lat:55,  lng:60},
      {name:'Zimbabwe',     pct:4,  lat:-20, lng:30},
      {name:'Canada',       pct:2,  lat:56,  lng:-96}
    ]},

  /* ── Rhodium ─────────────────────────────────────────── Z=45 */
  45:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Rhodium is the rarest and most valuable PGM. South Africa\'s Bushveld Complex accounts for over 80% of global production.',
    countries:[
      {name:'South Africa', pct:80, lat:-29, lng:25},
      {name:'Russia',       pct:11, lat:55,  lng:60},
      {name:'Zimbabwe',     pct:5,  lat:-20, lng:30},
      {name:'Canada',       pct:3,  lat:56,  lng:-96},
      {name:'USA',          pct:1,  lat:46,  lng:-109}
    ]},

  /* ── Palladium ───────────────────────────────────────── Z=46 */
  46:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Palladium is mined primarily as a platinum group metal (PGM). Russia\'s Norilsk Nickel and South Africa\'s Bushveld Complex dominate supply.',
    countries:[
      {name:'Russia',       pct:42, lat:55,  lng:60},
      {name:'South Africa', pct:37, lat:-29, lng:25},
      {name:'Canada',       pct:8,  lat:56,  lng:-96},
      {name:'USA',          pct:6,  lat:46,  lng:-109},
      {name:'Zimbabwe',     pct:4,  lat:-20, lng:30},
      {name:'Australia',    pct:1,  lat:-25, lng:134},
      {name:'Finland',      pct:1,  lat:64,  lng:26},
      {name:'Botswana',     pct:1,  lat:-22, lng:24}
    ]},

  /* ── Silver ──────────────────────────────────────────── Z=47 */
  47:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Mexico has been the world\'s leading silver producer for over a decade. Silver is primarily produced as a byproduct of copper, zinc, and lead mining.',
    countries:[
      {name:'Mexico',       pct:22, lat:23,  lng:-102},
      {name:'China',        pct:14, lat:35,  lng:105},
      {name:'Peru',         pct:13, lat:-12, lng:-75},
      {name:'Russia',       pct:7,  lat:55,  lng:60},
      {name:'Chile',        pct:6,  lat:-30, lng:-71},
      {name:'Australia',    pct:5,  lat:-25, lng:134},
      {name:'Bolivia',      pct:4,  lat:-17, lng:-65},
      {name:'Poland',       pct:4,  lat:52,  lng:20},
      {name:'Argentina',    pct:4,  lat:-34, lng:-64},
      {name:'USA',          pct:3,  lat:38,  lng:-110}
    ]},

  /* ── Cadmium ─────────────────────────────────────────── Z=48 */
  48:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Cadmium is recovered almost entirely as a byproduct of zinc smelting. Used in nickel-cadmium batteries and solar cells.',
    countries:[
      {name:'China',        pct:32, lat:35,  lng:105},
      {name:'South Korea',  pct:12, lat:37,  lng:127},
      {name:'Japan',        pct:8,  lat:36,  lng:138},
      {name:'India',        pct:7,  lat:20,  lng:78},
      {name:'USA',          pct:6,  lat:40,  lng:-100},
      {name:'Netherlands',  pct:5,  lat:61,  lng:5, forcedPos:{lx:418, ly:71}},
      {name:'Kazakhstan',   pct:5,  lat:48,  lng:68},
      {name:'Belgium',      pct:4,  lat:50,  lng:3},
      {name:'Germany',      pct:4,  lat:52,  lng:12},
      {name:'Canada',       pct:3,  lat:56,  lng:-96}
    ]},

  /* ── Indium ──────────────────────────────────────────── Z=49 */
  49:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Indium is recovered as a byproduct of zinc and tin smelting. The dominant use is in indium tin oxide (ITO) for flat-panel displays and touchscreens.',
    countries:[
      {name:'China',        pct:57, lat:35,  lng:105},
      {name:'South Korea',  pct:15, lat:37,  lng:127},
      {name:'Japan',        pct:9,  lat:37,  lng:141},
      {name:'Canada',       pct:5,  lat:56,  lng:-96},
      {name:'Belgium',      pct:5,  lat:51,  lng:3},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'Peru',         pct:3,  lat:-12, lng:-75},
      {name:'France',       pct:2,  lat:46,  lng:0}
    ]},

  /* ── Tin ─────────────────────────────────────────────── Z=50 */
  50:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. China is the largest tin producer. Myanmar has grown rapidly. Indonesia\'s Bangka-Belitung islands are a major historical source.',
    countries:[
      {name:'China',        pct:34, lat:35,  lng:105},
      {name:'Myanmar',      pct:22, lat:17,  lng:97},
      {name:'Indonesia',    pct:21, lat:-5,  lng:117},
      {name:'Peru',         pct:8,  lat:-12, lng:-75},
      {name:'Bolivia',      pct:8,  lat:-17, lng:-65},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Australia',    pct:1,  lat:-25, lng:134},
      {name:'Vietnam',      pct:1,  lat:16,  lng:108},
      {name:'DR Congo',     pct:1,  lat:-4,  lng:24}
    ]},

  /* ── Antimony ────────────────────────────────────────── Z=51 */
  51:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. China dominates global antimony production. Used primarily as a flame retardant and in lead-acid batteries.',
    countries:[
      {name:'China',        pct:56, lat:35,  lng:119},
      {name:'Russia',       pct:11, lat:55,  lng:60},
      {name:'Tajikistan',   pct:8,  lat:37,  lng:65, forcedPos:{lx:703, ly:138}},
      {name:'Myanmar',      pct:6,  lat:17,  lng:97},
      {name:'Bolivia',      pct:5,  lat:-17, lng:-65},
      {name:'Australia',    pct:4,  lat:-25, lng:134},
      {name:'Kyrgyzstan',   pct:4,  lat:44,  lng:80, forcedPos:{lx:743, ly:118}},
      {name:'Turkey',       pct:2,  lat:39,  lng:35},
      {name:'South Africa', pct:2,  lat:-29, lng:25},
      {name:'India',        pct:2,  lat:20,  lng:78}
    ]},

  /* ── Tellurium ───────────────────────────────────────── Z=52 */
  52:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Tellurium is recovered as a byproduct of copper refining. Critical for cadmium telluride (CdTe) solar panels.',
    countries:[
      {name:'China',        pct:56, lat:35,  lng:105},
      {name:'Japan',        pct:11, lat:36,  lng:138},
      {name:'Russia',       pct:10, lat:55,  lng:60},
      {name:'USA',          pct:8,  lat:40,  lng:-100},
      {name:'Canada',       pct:5,  lat:56,  lng:-96},
      {name:'Belgium',      pct:4,  lat:50,  lng:4},
      {name:'Germany',      pct:3,  lat:51,  lng:10},
      {name:'Sweden',       pct:3,  lat:65,  lng:20}
    ]},

  /* ── Iodine ──────────────────────────────────────────── Z=53 */
  53:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Chile extracts iodine from caliche ore in the Atacama Desert; Japan extracts it from underground brine. Together they supply 94% of global output.',
    countries:[
      {name:'Chile',        pct:64, lat:-21, lng:-69},
      {name:'Japan',        pct:30, lat:36,  lng:138},
      {name:'Azerbaijan',   pct:4,  lat:40,  lng:48},
      {name:'USA',          pct:1,  lat:35,  lng:-99},
      {name:'Turkmenistan', pct:1,  lat:40,  lng:58}
    ]},

  /* ── Cesium ──────────────────────────────────────────── Z=55 */
  55:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Canada\'s Tanco mine in Manitoba is the world\'s primary cesium source, containing pollucite — the richest known cesium ore.',
    countries:[
      {name:'Canada',       pct:80, lat:50,  lng:-96},
      {name:'Zimbabwe',     pct:15, lat:-20, lng:30},
      {name:'Namibia',      pct:5,  lat:-22, lng:18}
    ]},

  /* ── Barium (Barite) ─────────────────────────────────── Z=56 */
  56:{ label:'Barite production \u00b7 % of world total',
    note:'Source: USGS 2023. Barium is mined as barite (barium sulfate). The dominant use is as a weighting agent in oil and gas drilling muds.',
    countries:[
      {name:'China',        pct:44, lat:35,  lng:105},
      {name:'India',        pct:20, lat:20,  lng:78},
      {name:'Morocco',      pct:9,  lat:32,  lng:-7},
      {name:'Mexico',       pct:6,  lat:23,  lng:-102},
      {name:'USA',          pct:5,  lat:37,  lng:-107},
      {name:'Iran',         pct:4,  lat:32,  lng:53},
      {name:'Thailand',     pct:3,  lat:16,  lng:102},
      {name:'Kazakhstan',   pct:3,  lat:48,  lng:68},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Turkey',       pct:3,  lat:39,  lng:35}
    ]},

  /* ── Lanthanum ───────────────────────────────────────── Z=57 */
  57:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Lanthanum is mined alongside all rare earth elements. China\'s Bayan Obo mine is the world\'s largest REE deposit. Used in hybrid batteries and catalysts.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Cerium ──────────────────────────────────────────── Z=58 */
  58:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Cerium is the most abundant rare earth element. Used in catalytic converters, glass polishing, and as a yellow pigment in ceramics.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Praseodymium ────────────────────────────────────── Z=59 */
  59:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Praseodymium is always found with other REEs. Increasingly used in NdPr magnets for electric vehicle motors and wind turbines.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Neodymium ───────────────────────────────────────── Z=60 */
  60:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Neodymium is the critical ingredient in the world\'s strongest permanent magnets (Nd-Fe-B), essential for EV motors and wind turbines.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Samarium ────────────────────────────────────────── Z=62 */
  62:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Samarium is co-mined with other rare earth elements. Samarium-cobalt magnets were the first high-performance permanent magnets.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Europium ────────────────────────────────────────── Z=63 */
  63:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Europium is the rarest of the lanthanides produced commercially. It provides the red and blue color in fluorescent lamps and television screens.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Gadolinium ──────────────────────────────────────── Z=64 */
  64:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Gadolinium is used as a contrast agent in MRI scans and in shielding for nuclear reactors due to its very high neutron-capture cross-section.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Terbium ─────────────────────────────────────────── Z=65 */
  65:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Terbium is critical for green phosphors in displays and for magnetostrictive alloys. It is a heavy REE with supply concentrated almost entirely in southern China.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Dysprosium ──────────────────────────────────────── Z=66 */
  66:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Dysprosium is added to neodymium magnets to maintain performance at high temperatures. It is essential for EV motors operating in hot environments.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Holmium ─────────────────────────────────────────── Z=67 */
  67:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Holmium has the highest magnetic moment of any element. Used in the strongest permanent magnets and in medical lasers.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Erbium ──────────────────────────────────────────── Z=68 */
  68:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Erbium is used as a dopant in fiber-optic cables to amplify light signals, enabling long-distance internet transmission.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Thulium ─────────────────────────────────────────── Z=69 */
  69:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Thulium is one of the rarest lanthanides. Used in portable X-ray sources and as a radiation source in medical and security applications.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Ytterbium ───────────────────────────────────────── Z=70 */
  70:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Ytterbium is used in atomic clocks, lasers, and as a dopant in stainless steel. It is co-produced with other heavy rare earth elements.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Lutetium ────────────────────────────────────────── Z=71 */
  71:{ label:'Rare earth element production \u00b7 % of world total',
    note:'Source: USGS 2023. Lutetium is the heaviest and densest rare earth element and among the rarest. Used in PET scanners and as a catalyst in petroleum refining.',
    countries:[
      {name:'China',        pct:60, lat:41,  lng:110},
      {name:'USA',          pct:15, lat:35,  lng:-117},
      {name:'Myanmar',      pct:8,  lat:23,  lng:98},
      {name:'Australia',    pct:6,  lat:-25, lng:134},
      {name:'Madagascar',   pct:3,  lat:-20, lng:47},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Vietnam',      pct:1,  lat:22,  lng:104},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Hafnium ─────────────────────────────────────────── Z=72 */
  72:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Hafnium is always found with zirconium and separated during zirconium refining. Critical for nuclear reactor control rods and semiconductor chips.',
    countries:[
      {name:'France',       pct:50, lat:46,  lng:2},
      {name:'USA',          pct:25, lat:40,  lng:-100},
      {name:'Ukraine',      pct:15, lat:49,  lng:31},
      {name:'Russia',       pct:8,  lat:55,  lng:60},
      {name:'China',        pct:2,  lat:35,  lng:105}
    ]},

  /* ── Tantalum ────────────────────────────────────────── Z=73 */
  73:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Tantalum (as coltan) is mined primarily in central Africa. The DRC and Rwanda are the dominant suppliers of this critical electronics mineral.',
    countries:[
      {name:'DR Congo',     pct:45, lat:-5,  lng:21},
      {name:'Rwanda',       pct:20, lat:-1,  lng:31},
      {name:'Nigeria',      pct:10, lat:10,  lng:8},
      {name:'Brazil',       pct:8,  lat:-15, lng:-52},
      {name:'Australia',    pct:5,  lat:-25, lng:134},
      {name:'Ethiopia',     pct:3,  lat:9,   lng:40},
      {name:'Mozambique',   pct:3,  lat:-18, lng:35},
      {name:'China',        pct:2,  lat:35,  lng:105},
      {name:'Mali',         pct:2,  lat:17,  lng:-4},
      {name:'Canada',       pct:2,  lat:56,  lng:-96}
    ]},

  /* ── Tungsten ────────────────────────────────────────── Z=74 */
  74:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. China controls over 80% of world tungsten production. It is the hardest of all metals and critical for cutting tools and military applications.',
    countries:[
      {name:'China',        pct:82, lat:35,  lng:105},
      {name:'Vietnam',      pct:6,  lat:16,  lng:108},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Bolivia',      pct:2,  lat:-17, lng:-65},
      {name:'Austria',      pct:2,  lat:47,  lng:13},
      {name:'Portugal',     pct:1,  lat:37,  lng:-9, forcedPos:{lx:448, ly:167}},
      {name:'Rwanda',       pct:1,  lat:-1,  lng:30},
      {name:'Spain',        pct:1,  lat:42,  lng:-3, forcedPos:{lx:435, ly:124}},
      {name:'Canada',       pct:1,  lat:56,  lng:-96},
      {name:'UK',           pct:1,  lat:53,  lng:-5}
    ]},

  /* ── Rhenium ─────────────────────────────────────────── Z=75 */
  75:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Rhenium is recovered as a byproduct of molybdenum roasting. Chile\'s copper-molybdenum mines are the primary source. Used in superalloy jet engine blades.',
    countries:[
      {name:'Chile',        pct:52, lat:-30, lng:-71},
      {name:'Poland',       pct:28, lat:52,  lng:20},
      {name:'USA',          pct:8,  lat:39,  lng:-106},
      {name:'Kazakhstan',   pct:5,  lat:48,  lng:68},
      {name:'Armenia',      pct:4,  lat:40,  lng:45},
      {name:'Russia',       pct:3,  lat:55,  lng:60}
    ]},

  /* ── Osmium ──────────────────────────────────────────── Z=76 */
  76:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Osmium is the densest naturally occurring element and among the rarest PGMs. Recovered as a byproduct of platinum and nickel mining.',
    countries:[
      {name:'Russia',       pct:45, lat:55,  lng:60},
      {name:'South Africa', pct:38, lat:-29, lng:25},
      {name:'Zimbabwe',     pct:12, lat:-20, lng:30},
      {name:'Canada',       pct:3,  lat:56,  lng:-96},
      {name:'USA',          pct:2,  lat:46,  lng:-109}
    ]},

  /* ── Iridium ─────────────────────────────────────────── Z=77 */
  77:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Iridium is the most corrosion-resistant metal known. Recovered as a PGM byproduct. Used in spark plugs, crucibles, and satellite communications.',
    countries:[
      {name:'South Africa', pct:83, lat:-29, lng:25},
      {name:'Russia',       pct:12, lat:55,  lng:60},
      {name:'Zimbabwe',     pct:4,  lat:-20, lng:30},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  /* ── Platinum ────────────────────────────────────────── Z=78 */
  78:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. South Africa\'s Bushveld Igneous Complex contains over 80% of the world\'s known platinum reserves. Platinum is essential for catalytic converters.',
    countries:[
      {name:'South Africa', pct:72, lat:-29, lng:25},
      {name:'Russia',       pct:12, lat:55,  lng:60},
      {name:'Zimbabwe',     pct:7,  lat:-20, lng:30},
      {name:'Canada',       pct:4,  lat:56,  lng:-96},
      {name:'USA',          pct:2,  lat:46,  lng:-109},
      {name:'Australia',    pct:1,  lat:-25, lng:134},
      {name:'Finland',      pct:1,  lat:64,  lng:26},
      {name:'Botswana',     pct:1,  lat:-22, lng:24}
    ]},

  /* ── Gold ────────────────────────────────────────────── Z=79 */
  79:{ label:'Mine production \u00b7 % of world total',
    note:'Source: World Gold Council 2022. Top 10 countries represent approximately 60% of global production.',
    countries:[
      {name:'China',        pct:10.7,lat:35, lng:105},
      {name:'Australia',    pct:10.0,lat:-25,lng:134},
      {name:'Russia',       pct:9.4, lat:60, lng:105},
      {name:'Canada',       pct:6.5, lat:58, lng:-96},
      {name:'United States',pct:5.2, lat:40, lng:-100},
      {name:'Kazakhstan',   pct:4.2, lat:48, lng:68},
      {name:'Mexico',       pct:3.9, lat:23, lng:-102},
      {name:'Ghana',        pct:3.2, lat:8,  lng:-1},
      {name:'South Africa', pct:2.9, lat:-30,lng:25},
      {name:'Indonesia',    pct:2.9, lat:-1, lng:117}
    ]},

  /* ── Mercury ─────────────────────────────────────────── Z=80 */
  80:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Global mercury mining has declined sharply due to environmental controls under the Minamata Convention. China and Kyrgyzstan dominate remaining output.',
    countries:[
      {name:'China',        pct:40, lat:35,  lng:105},
      {name:'Kyrgyzstan',   pct:30, lat:41,  lng:74},
      {name:'Mexico',       pct:10, lat:23,  lng:-102},
      {name:'Peru',         pct:8,  lat:-12, lng:-75},
      {name:'Russia',       pct:5,  lat:55,  lng:60},
      {name:'USA',          pct:2,  lat:38,  lng:-110},
      {name:'Algeria',      pct:2,  lat:28,  lng:3},
      {name:'Slovakia',     pct:1,  lat:50,  lng:22},
      {name:'Spain',        pct:1,  lat:40,  lng:-3},
      {name:'Slovenia',     pct:1,  lat:45,  lng:13}
    ]},

  /* ── Thallium ────────────────────────────────────────── Z=81 */
  81:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Thallium is recovered as a byproduct of zinc, lead, and copper smelting. Highly toxic; use has been largely phased out in many applications.',
    countries:[
      {name:'China',        pct:60, lat:35,  lng:105},
      {name:'Kazakhstan',   pct:20, lat:48,  lng:68},
      {name:'Russia',       pct:10, lat:55,  lng:60},
      {name:'Germany',      pct:5,  lat:53,  lng:13},
      {name:'Belgium',      pct:3,  lat:50,  lng:2},
      {name:'Serbia',       pct:2,  lat:44,  lng:21}
    ]},

  /* ── Lead ────────────────────────────────────────────── Z=82 */
  82:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Lead is predominantly used in lead-acid batteries. China leads production by a large margin.',
    countries:[
      {name:'China',        pct:37, lat:35,  lng:105},
      {name:'Australia',    pct:13, lat:-25, lng:134},
      {name:'USA',          pct:7,  lat:38,  lng:-106},
      {name:'Peru',         pct:7,  lat:-12, lng:-75},
      {name:'Mexico',       pct:6,  lat:23,  lng:-102},
      {name:'Russia',       pct:5,  lat:55,  lng:60},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Bolivia',      pct:3,  lat:-17, lng:-65},
      {name:'Sweden',       pct:3,  lat:65,  lng:20},
      {name:'Morocco',      pct:2,  lat:32,  lng:-7}
    ]},

  /* ── Bismuth ─────────────────────────────────────────── Z=83 */
  83:{ label:'Mine production \u00b7 % of world total',
    note:'Source: USGS 2023. Bismuth is produced almost entirely as a byproduct of lead smelting. China dominates global supply. Used in pharmaceuticals and low-melt alloys.',
    countries:[
      {name:'China',        pct:75, lat:35,  lng:105},
      {name:'Vietnam',      pct:9,  lat:16,  lng:108},
      {name:'Mexico',       pct:8,  lat:23,  lng:-102},
      {name:'Bolivia',      pct:4,  lat:-17, lng:-65},
      {name:'Canada',       pct:2,  lat:56,  lng:-96},
      {name:'Peru',         pct:1,  lat:-12, lng:-75},
      {name:'Russia',       pct:1,  lat:55,  lng:60}
    ]},

  /* ── Thorium ─────────────────────────────────────────── Z=90 */
  90:{ label:'Reserve estimates \u00b7 % of world total',
    note:'Source: USGS 2023. Thorium is found in monazite sands, mostly as a byproduct of rare earth mining. Little active mining occurs due to low demand and radioactive handling requirements.',
    countries:[
      {name:'Australia',    pct:26, lat:-25, lng:134},
      {name:'USA',          pct:16, lat:40,  lng:-100},
      {name:'Egypt',        pct:13, lat:26,  lng:30},
      {name:'Canada',       pct:13, lat:56,  lng:-96},
      {name:'South Africa', pct:9,  lat:-29, lng:25},
      {name:'Brazil',       pct:7,  lat:-15, lng:-52},
      {name:'India',        pct:7,  lat:20,  lng:78},
      {name:'Norway',       pct:2,  lat:62,  lng:10},
      {name:'Greenland',    pct:2,  lat:72,  lng:-40},
      {name:'Kenya',        pct:2,  lat:1,   lng:38}
    ]},

  /* ── Uranium ─────────────────────────────────────────── Z=92 */
  92:{ label:'Mine production \u00b7 % of world total',
    note:'Source: World Nuclear Association 2022. Kazakhstan has dominated uranium production since 2009 through low-cost in-situ leaching methods.',
    countries:[
      {name:'Kazakhstan',   pct:43, lat:48,  lng:68},
      {name:'Canada',       pct:13, lat:59,  lng:-108},
      {name:'Namibia',      pct:12, lat:-22, lng:18},
      {name:'Uzbekistan',   pct:8,  lat:41,  lng:63},
      {name:'Russia',       pct:6,  lat:55,  lng:60},
      {name:'Australia',    pct:5,  lat:-25, lng:134},
      {name:'Niger',        pct:4,  lat:17,  lng:8},
      {name:'China',        pct:4,  lat:35,  lng:105},
      {name:'India',        pct:3,  lat:20,  lng:78},
      {name:'South Africa', pct:1,  lat:-29, lng:25}
    ]}

};

/* ═══════════════════════════════════════════════════════════════
   INDUSTRIAL USE DATA
   ═══════════════════════════════════════════════════════════════ */

var USES = {

  /* ── Lithium ─────────────────────────────────────────── Z=3  */
  3:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: IEA Critical Minerals 2023. Battery manufacturing for electric vehicles and grid storage dominates lithium demand.',
    countries:[
      {name:'China',        pct:59, lat:35,  lng:105},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Japan',        pct:8,  lat:36,  lng:138},
      {name:'South Korea',  pct:7,  lat:37,  lng:127},
      {name:'Germany',      pct:4,  lat:51,  lng:10},
      {name:'France',       pct:2,  lat:46,  lng:2},
      {name:'Norway',       pct:2,  lat:62,  lng:10},
      {name:'Sweden',       pct:2,  lat:65,  lng:20},
      {name:'UK',           pct:2,  lat:52,  lng:-2},
      {name:'India',        pct:2,  lat:20,  lng:78}
    ]},

  /* ── Boron ───────────────────────────────────────────── Z=5  */
  5:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Boron is primarily consumed in glass manufacturing (fiberglass and borosilicate glass), agriculture, and ceramics.',
    countries:[
      {name:'USA',          pct:25, lat:40,  lng:-100},
      {name:'China',        pct:22, lat:35,  lng:105},
      {name:'Turkey',       pct:8,  lat:39,  lng:35},
      {name:'Germany',      pct:8,  lat:51,  lng:10},
      {name:'Japan',        pct:6,  lat:36,  lng:138},
      {name:'India',        pct:5,  lat:20,  lng:78},
      {name:'Brazil',       pct:4,  lat:-15, lng:-52},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'Italy',        pct:4,  lat:42,  lng:12}
    ]},

  /* ── Carbon (Graphite) ───────────────────────────────── Z=6  */
  6:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Natural graphite is consumed in steelmaking, lithium-ion battery anodes, lubricants, and refractories. Demand is growing rapidly due to EVs.',
    countries:[
      {name:'China',        pct:58, lat:35,  lng:105},
      {name:'USA',          pct:9,  lat:40,  lng:-100},
      {name:'Japan',        pct:7,  lat:36,  lng:138},
      {name:'Germany',      pct:5,  lat:51,  lng:10},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Italy',        pct:2,  lat:42,  lng:12}
    ]},

  /* ── Fluorine ────────────────────────────────────────── Z=9  */
  9:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Fluorine is consumed as hydrofluoric acid in aluminum smelting, petroleum refining, and in producing fluoropolymers like PTFE (Teflon).',
    countries:[
      {name:'China',        pct:45, lat:35,  lng:105},
      {name:'USA',          pct:14, lat:40,  lng:-100},
      {name:'Japan',        pct:8,  lat:36,  lng:138},
      {name:'Germany',      pct:7,  lat:51,  lng:10},
      {name:'India',        pct:5,  lat:20,  lng:78},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'Brazil',       pct:4,  lat:-15, lng:-52},
      {name:'Italy',        pct:3,  lat:42,  lng:12}
    ]},

  /* ── Phosphorus ──────────────────────────────────────── Z=15 */
  15:{ label:'Phosphate fertilizer consumption \u00b7 % of world total',
    note:'Source: IFA 2023. Phosphate is consumed almost entirely as agricultural fertilizer. Demand tracks global food production.',
    countries:[
      {name:'China',        pct:40, lat:35,  lng:105},
      {name:'India',        pct:14, lat:20,  lng:78},
      {name:'USA',          pct:11, lat:40,  lng:-100},
      {name:'Brazil',       pct:7,  lat:-15, lng:-52},
      {name:'Indonesia',    pct:4,  lat:-5,  lng:117},
      {name:'Pakistan',     pct:3,  lat:30,  lng:70},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Germany',      pct:3,  lat:51,  lng:10},
      {name:'Canada',       pct:2,  lat:56,  lng:-96}
    ]},

  /* ── Potassium ───────────────────────────────────────── Z=19 */
  19:{ label:'Potash fertilizer consumption \u00b7 % of world total',
    note:'Source: IFA 2023. Potassium is consumed almost entirely as potash fertilizer. Demand is driven by global crop production.',
    countries:[
      {name:'China',        pct:28, lat:35,  lng:105},
      {name:'USA',          pct:14, lat:40,  lng:-100},
      {name:'India',        pct:12, lat:20,  lng:78},
      {name:'Brazil',       pct:9,  lat:-15, lng:-52},
      {name:'Indonesia',    pct:4,  lat:-5,  lng:117},
      {name:'Canada',       pct:4,  lat:56,  lng:-96},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Germany',      pct:3,  lat:51,  lng:10},
      {name:'Pakistan',     pct:3,  lat:30,  lng:70},
      {name:'Australia',    pct:2,  lat:-25, lng:134}
    ]},

  /* ── Calcium (Cement) ────────────────────────────────── Z=20 */
  20:{ label:'Cement production \u00b7 % of world total',
    note:'Source: USGS 2023. Cement production is the primary industrial use of calcium. China alone produces over half of all the world\'s cement.',
    countries:[
      {name:'China',        pct:53, lat:35,  lng:105},
      {name:'India',        pct:8,  lat:20,  lng:78},
      {name:'Vietnam',      pct:3,  lat:21,  lng:106},
      {name:'USA',          pct:3,  lat:40,  lng:-85},
      {name:'Turkey',       pct:3,  lat:39,  lng:35},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Iran',         pct:2,  lat:32,  lng:53},
      {name:'South Korea',  pct:2,  lat:37,  lng:128},
      {name:'Japan',        pct:2,  lat:36,  lng:138}
    ]},

  /* ── Titanium ────────────────────────────────────────── Z=22 */
  22:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Over 90% of titanium mineral production goes into TiO\u2082 pigment for paints, plastics, and paper. Titanium metal is used in aerospace and medical implants.',
    countries:[
      {name:'China',        pct:45, lat:35,  lng:105},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Germany',      pct:8,  lat:51,  lng:10},
      {name:'UK',           pct:6,  lat:52,  lng:-2},
      {name:'Australia',    pct:5,  lat:-25, lng:134},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'Japan',        pct:4,  lat:36,  lng:138},
      {name:'South Korea',  pct:3,  lat:37,  lng:127},
      {name:'Italy',        pct:3,  lat:42,  lng:12}
    ]},

  /* ── Vanadium ────────────────────────────────────────── Z=23 */
  23:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. About 85% of vanadium is used as a steel alloy additive (ferrovanadium). Vanadium redox flow batteries are a growing application for grid energy storage.',
    countries:[
      {name:'China',        pct:53, lat:35,  lng:105},
      {name:'Russia',       pct:12, lat:55,  lng:60},
      {name:'USA',          pct:8,  lat:40,  lng:-100},
      {name:'Japan',        pct:7,  lat:36,  lng:138},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'Germany',      pct:5,  lat:51,  lng:10},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Italy',        pct:2,  lat:42,  lng:12},
      {name:'France',       pct:2,  lat:46,  lng:2}
    ]},

  /* ── Chromium ────────────────────────────────────────── Z=24 */
  24:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. About 85% of chromium is consumed in stainless steel production. China and India are the largest consumers.',
    countries:[
      {name:'China',        pct:48, lat:35,  lng:105},
      {name:'India',        pct:12, lat:20,  lng:78},
      {name:'USA',          pct:8,  lat:40,  lng:-100},
      {name:'Germany',      pct:6,  lat:51,  lng:10},
      {name:'Japan',        pct:5,  lat:36,  lng:138},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'Italy',        pct:4,  lat:42,  lng:12},
      {name:'Taiwan',       pct:4,  lat:24,  lng:121},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Russia',       pct:3,  lat:55,  lng:60}
    ]},

  /* ── Manganese ───────────────────────────────────────── Z=25 */
  25:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Over 90% of manganese is used in steel production as a deoxidizer and to improve strength and hardness.',
    countries:[
      {name:'China',        pct:57, lat:35,  lng:105},
      {name:'India',        pct:8,  lat:20,  lng:78},
      {name:'USA',          pct:6,  lat:40,  lng:-100},
      {name:'Japan',        pct:5,  lat:36,  lng:138},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'Germany',      pct:4,  lat:51,  lng:10},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Turkey',       pct:3,  lat:39,  lng:35},
      {name:'Italy',        pct:2,  lat:42,  lng:12}
    ]},

  /* ── Iron / Steel ────────────────────────────────────── Z=26 */
  26:{ label:'Steel production \u00b7 % of world total',
    note:'Source: World Steel Association 2022. Steel consumption closely tracks iron ore use. China produces more than half the world\'s steel.',
    countries:[
      {name:'China',        pct:57, lat:35,  lng:105},
      {name:'India',        pct:7,  lat:20,  lng:78},
      {name:'Japan',        pct:5,  lat:36,  lng:138},
      {name:'USA',          pct:5,  lat:40,  lng:-100},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'Germany',      pct:3,  lat:51,  lng:10},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'Turkey',       pct:3,  lat:39,  lng:35},
      {name:'Italy',        pct:2,  lat:42,  lng:12}
    ]},

  /* ── Cobalt ──────────────────────────────────────────── Z=27 */
  27:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: Cobalt Institute 2023. Battery manufacturing for EVs and consumer electronics now accounts for over 70% of cobalt demand.',
    countries:[
      {name:'China',        pct:62, lat:35,  lng:105},
      {name:'Japan',        pct:8,  lat:36,  lng:138},
      {name:'South Korea',  pct:7,  lat:37,  lng:127},
      {name:'USA',          pct:6,  lat:40,  lng:-100},
      {name:'Germany',      pct:4,  lat:51,  lng:10},
      {name:'Finland',      pct:3,  lat:64,  lng:26},
      {name:'Belgium',      pct:3,  lat:50,  lng:4},
      {name:'Norway',       pct:2,  lat:62,  lng:10},
      {name:'Canada',       pct:2,  lat:56,  lng:-96},
      {name:'France',       pct:2,  lat:46,  lng:2}
    ]},

  /* ── Nickel ──────────────────────────────────────────── Z=28 */
  28:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: International Nickel Study Group 2023. About 70% of nickel goes into stainless steel. Battery demand is growing rapidly.',
    countries:[
      {name:'China',        pct:56, lat:35,  lng:105},
      {name:'Japan',        pct:7,  lat:36,  lng:138},
      {name:'USA',          pct:5,  lat:40,  lng:-100},
      {name:'Germany',      pct:5,  lat:51,  lng:10},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Italy',        pct:4,  lat:42,  lng:12},
      {name:'Taiwan',       pct:3,  lat:24,  lng:121},
      {name:'Finland',      pct:3,  lat:64,  lng:26},
      {name:'Russia',       pct:3,  lat:55,  lng:60}
    ]},

  /* ── Copper ──────────────────────────────────────────── Z=29 */
  29:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: International Copper Study Group 2023. Copper is the backbone of electrical infrastructure. China consumes over half due to its construction and manufacturing sectors.',
    countries:[
      {name:'China',        pct:52, lat:35,  lng:105},
      {name:'USA',          pct:9,  lat:40,  lng:-100},
      {name:'Germany',      pct:6,  lat:51,  lng:10},
      {name:'Japan',        pct:4,  lat:36,  lng:138},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Italy',        pct:3,  lat:42,  lng:12},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'Taiwan',       pct:2,  lat:24,  lng:121}
    ]},

  /* ── Zinc ────────────────────────────────────────────── Z=30 */
  30:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: International Lead and Zinc Study Group 2023. Zinc is primarily used to galvanize steel. China is both the largest producer and consumer.',
    countries:[
      {name:'China',        pct:48, lat:35,  lng:105},
      {name:'USA',          pct:7,  lat:40,  lng:-100},
      {name:'India',        pct:6,  lat:20,  lng:78},
      {name:'Japan',        pct:5,  lat:36,  lng:138},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'Germany',      pct:4,  lat:51,  lng:10},
      {name:'Italy',        pct:4,  lat:42,  lng:12},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Turkey',       pct:3,  lat:39,  lng:35}
    ]},

  /* ── Zirconium ───────────────────────────────────────── Z=40 */
  40:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Zirconium is consumed primarily in nuclear fuel cladding tubes, ceramics, and refractories. France is a major refiner for nuclear-grade material.',
    countries:[
      {name:'China',        pct:35, lat:35,  lng:105},
      {name:'USA',          pct:15, lat:40,  lng:-100},
      {name:'Japan',        pct:12, lat:36,  lng:138},
      {name:'France',       pct:10, lat:46,  lng:2},
      {name:'Germany',      pct:8,  lat:51,  lng:10},
      {name:'South Korea',  pct:6,  lat:37,  lng:127},
      {name:'Australia',    pct:4,  lat:-25, lng:134},
      {name:'UK',           pct:3,  lat:52,  lng:-2},
      {name:'India',        pct:3,  lat:20,  lng:78},
      {name:'Canada',       pct:2,  lat:56,  lng:-96}
    ]},

  /* ── Niobium ─────────────────────────────────────────── Z=41 */
  41:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. About 90% of niobium is used as ferroniobium in high-strength low-alloy (HSLA) steels for pipelines, automotive structures, and buildings.',
    countries:[
      {name:'China',        pct:50, lat:35,  lng:105},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Japan',        pct:10, lat:36,  lng:138},
      {name:'Germany',      pct:8,  lat:51,  lng:10},
      {name:'South Korea',  pct:6,  lat:37,  lng:127},
      {name:'Brazil',       pct:4,  lat:-15, lng:-52},
      {name:'India',        pct:3,  lat:20,  lng:78},
      {name:'France',       pct:2,  lat:46,  lng:2},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Italy',        pct:2,  lat:42,  lng:12}
    ]},

  /* ── Molybdenum ──────────────────────────────────────── Z=42 */
  42:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Molybdenum is used primarily as an alloying agent in steel to improve strength and corrosion resistance at high temperatures.',
    countries:[
      {name:'China',        pct:45, lat:35,  lng:105},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Japan',        pct:8,  lat:36,  lng:138},
      {name:'Germany',      pct:7,  lat:51,  lng:10},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'India',        pct:5,  lat:20,  lng:78},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'Italy',        pct:4,  lat:42,  lng:12},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52},
      {name:'France',       pct:3,  lat:46,  lng:2}
    ]},

  /* ── Palladium ───────────────────────────────────────── Z=46 */
  46:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Palladium\'s primary industrial use is in catalytic converters for gasoline vehicles. Electronics and dental applications are significant secondary uses.',
    countries:[
      {name:'China',        pct:20, lat:35,  lng:105},
      {name:'USA',          pct:18, lat:40,  lng:-100},
      {name:'Japan',        pct:13, lat:36,  lng:138},
      {name:'Germany',      pct:10, lat:51,  lng:10},
      {name:'South Korea',  pct:7,  lat:37,  lng:127},
      {name:'UK',           pct:6,  lat:52,  lng:-2},
      {name:'Italy',        pct:5,  lat:42,  lng:12},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Russia',       pct:3,  lat:55,  lng:60}
    ]},

  /* ── Silver ──────────────────────────────────────────── Z=47 */
  47:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: The Silver Institute 2023. Industrial silver demand is driven by solar panels (silver paste), electronics, and medical applications.',
    countries:[
      {name:'USA',          pct:19, lat:40,  lng:-100},
      {name:'China',        pct:18, lat:35,  lng:105},
      {name:'Japan',        pct:10, lat:36,  lng:138},
      {name:'Germany',      pct:8,  lat:51,  lng:10},
      {name:'South Korea',  pct:6,  lat:37,  lng:127},
      {name:'India',        pct:6,  lat:20,  lng:78},
      {name:'Italy',        pct:5,  lat:42,  lng:12},
      {name:'UK',           pct:4,  lat:52,  lng:-2},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'Canada',       pct:3,  lat:56,  lng:-96}
    ]},

  /* ── Tin ─────────────────────────────────────────────── Z=50 */
  50:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: International Tin Association 2023. Soldering applications in electronics are the dominant use of tin, making the semiconductor industry a key driver of demand.',
    countries:[
      {name:'China',        pct:43, lat:35,  lng:105},
      {name:'USA',          pct:11, lat:40,  lng:-100},
      {name:'Japan',        pct:9,  lat:36,  lng:138},
      {name:'Germany',      pct:6,  lat:52,  lng:12},
      {name:'South Korea',  pct:6,  lat:38,  lng:126},
      {name:'Taiwan',       pct:5,  lat:22,  lng:119},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Brazil',       pct:4,  lat:-15, lng:-52},
      {name:'UK',           pct:3,  lat:52,  lng:-2},
      {name:'Netherlands',  pct:3,  lat:52,  lng:5}
    ]},

  /* ── Antimony ────────────────────────────────────────── Z=51 */
  51:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Antimony trioxide is primarily used as a flame retardant synergist in plastics, textiles, and electronics.',
    countries:[
      {name:'China',        pct:55, lat:35,  lng:105},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Japan',        pct:8,  lat:36,  lng:138},
      {name:'Germany',      pct:6,  lat:52,  lng:12},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'UK',           pct:3,  lat:54,  lng:-4},
      {name:'Italy',        pct:3,  lat:42,  lng:12},
      {name:'Netherlands',  pct:3,  lat:52,  lng:5},
      {name:'South Korea',  pct:3,  lat:37,  lng:127}
    ]},

  /* ── Barium ──────────────────────────────────────────── Z=56 */
  56:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Barite is primarily used as a weighting agent in oil and gas drilling fluids, so consumption closely follows oil and gas exploration activity.',
    countries:[
      {name:'USA',          pct:30, lat:40,  lng:-100},
      {name:'China',        pct:22, lat:35,  lng:105},
      {name:'Russia',       pct:8,  lat:55,  lng:60},
      {name:'Saudi Arabia', pct:7,  lat:25,  lng:45},
      {name:'Norway',       pct:5,  lat:62,  lng:10},
      {name:'UAE',          pct:4,  lat:24,  lng:54},
      {name:'Germany',      pct:4,  lat:51,  lng:10},
      {name:'UK',           pct:4,  lat:52,  lng:-2},
      {name:'Mexico',       pct:4,  lat:23,  lng:-102},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52}
    ]},

  /* ── Lanthanum ───────────────────────────────────────── Z=57 */
  57:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Lanthanum is primarily consumed in petroleum refining catalysts and nickel-metal hydride batteries for hybrid vehicles.',
    countries:[
      {name:'China',        pct:60, lat:35,  lng:105},
      {name:'USA',          pct:13, lat:40,  lng:-100},
      {name:'Japan',        pct:10, lat:36,  lng:138},
      {name:'Germany',      pct:6,  lat:51,  lng:10},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'India',        pct:2,  lat:20,  lng:78},
      {name:'Canada',       pct:2,  lat:56,  lng:-96}
    ]},

  /* ── Cerium ──────────────────────────────────────────── Z=58 */
  58:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Cerium is consumed primarily as a glass polishing agent, in catalytic converters, as a UV filter in glass, and in yellow ceramic pigments.',
    countries:[
      {name:'China',        pct:58, lat:35,  lng:105},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Japan',        pct:10, lat:36,  lng:138},
      {name:'Germany',      pct:7,  lat:51,  lng:10},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'India',        pct:3,  lat:20,  lng:78},
      {name:'UK',           pct:2,  lat:52,  lng:-2}
    ]},

  /* ── Neodymium ───────────────────────────────────────── Z=60 */
  60:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: IEA Critical Minerals 2023. Neodymium is consumed primarily in permanent Nd-Fe-B magnets for EV motors, wind turbines, hard drives, and headphones.',
    countries:[
      {name:'China',        pct:65, lat:35,  lng:105},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'Germany',      pct:7,  lat:51,  lng:10},
      {name:'USA',          pct:6,  lat:40,  lng:-100},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'India',        pct:3,  lat:20,  lng:78}
    ]},

  /* ── Dysprosium ──────────────────────────────────────── Z=66 */
  66:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: IEA Critical Minerals 2023. Dysprosium is added to neodymium magnets to maintain performance at high temperatures — essential for EV motors.',
    countries:[
      {name:'China',        pct:70, lat:35,  lng:105},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'Germany',      pct:6,  lat:51,  lng:10},
      {name:'USA',          pct:5,  lat:40,  lng:-100},
      {name:'South Korea',  pct:4,  lat:37,  lng:127}
    ]},

  /* ── Hafnium ─────────────────────────────────────────── Z=72 */
  72:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Hafnium\'s primary uses are in nuclear reactor control rods and as a gate dielectric in advanced semiconductor chips (replacing silicon dioxide).',
    countries:[
      {name:'USA',          pct:40, lat:40,  lng:-100},
      {name:'France',       pct:25, lat:46,  lng:2},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'South Korea',  pct:10, lat:37,  lng:127},
      {name:'Germany',      pct:5,  lat:51,  lng:10},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'China',        pct:2,  lat:35,  lng:105}
    ]},

  /* ── Tantalum ────────────────────────────────────────── Z=73 */
  73:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. About 60% of tantalum is used in electrolytic capacitors in electronic devices. Medical implants and superalloys are significant secondary uses.',
    countries:[
      {name:'China',        pct:30, lat:35,  lng:105},
      {name:'Japan',        pct:20, lat:36,  lng:138},
      {name:'USA',          pct:15, lat:40,  lng:-100},
      {name:'Germany',      pct:10, lat:51,  lng:16},
      {name:'South Korea',  pct:8,  lat:37,  lng:127},
      {name:'Taiwan',       pct:6,  lat:23,  lng:119},
      {name:'UK',           pct:4,  lat:62,  lng:-2},
      {name:'France',       pct:4,  lat:44,  lng:0},
      {name:'Netherlands',  pct:2,  lat:60,  lng:5},
      {name:'India',        pct:2,  lat:20,  lng:78}
    ]},

  /* ── Tungsten ────────────────────────────────────────── Z=74 */
  74:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Tungsten is consumed primarily in cemented carbide cutting tools for metalworking, mining, and construction.',
    countries:[
      {name:'China',        pct:55, lat:35,  lng:105},
      {name:'USA',          pct:10, lat:40,  lng:-100},
      {name:'Germany',      pct:8,  lat:51,  lng:10},
      {name:'Japan',        pct:7,  lat:36,  lng:138},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'Russia',       pct:4,  lat:55,  lng:60},
      {name:'Italy',        pct:4,  lat:42,  lng:12},
      {name:'India',        pct:3,  lat:20,  lng:78},
      {name:'France',       pct:2,  lat:46,  lng:2},
      {name:'Austria',      pct:2,  lat:47,  lng:13}
    ]},

  /* ── Rhenium ─────────────────────────────────────────── Z=75 */
  75:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. About 80% of rhenium is used in single-crystal superalloy turbine blades for jet engines. The remainder goes into petroleum reforming catalysts.',
    countries:[
      {name:'USA',          pct:35, lat:40,  lng:-100},
      {name:'Germany',      pct:20, lat:51,  lng:16},
      {name:'UK',           pct:12, lat:62,  lng:-4},
      {name:'France',       pct:10, lat:44,  lng:0},
      {name:'Japan',        pct:8,  lat:36,  lng:138},
      {name:'China',        pct:5,  lat:35,  lng:105},
      {name:'Canada',       pct:4,  lat:56,  lng:-96},
      {name:'Netherlands',  pct:3,  lat:60,  lng:5},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Italy',        pct:2,  lat:42,  lng:14}
    ]},

  /* ── Platinum ────────────────────────────────────────── Z=78 */
  78:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: World Platinum Investment Council 2023. Automotive catalytic converters account for about 40% of platinum demand. Hydrogen fuel cell technology is a growing application.',
    countries:[
      {name:'China',        pct:22, lat:35,  lng:105},
      {name:'USA',          pct:14, lat:40,  lng:-100},
      {name:'Japan',        pct:13, lat:36,  lng:138},
      {name:'Germany',      pct:10, lat:51,  lng:10},
      {name:'South Korea',  pct:6,  lat:37,  lng:127},
      {name:'UK',           pct:5,  lat:52,  lng:-2},
      {name:'Italy',        pct:5,  lat:42,  lng:12},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'South Africa', pct:4,  lat:-29, lng:25}
    ]},

  /* ── Gold ────────────────────────────────────────────── Z=79 */
  79:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: World Gold Council 2022. Industrial uses include electronics, semiconductors, dental and aerospace applications.',
    countries:[
      {name:'Japan',        pct:29, lat:36,  lng:141},
      {name:'United States',pct:24, lat:40,  lng:-100},
      {name:'Germany',      pct:12, lat:51,  lng:10},
      {name:'South Korea',  pct:9,  lat:37,  lng:125},
      {name:'China',        pct:7,  lat:35,  lng:105},
      {name:'Taiwan',       pct:5,  lat:24,  lng:121},
      {name:'United Kingdom',pct:5, lat:52,  lng:-2},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Italy',        pct:3,  lat:42,  lng:12},
      {name:'India',        pct:3,  lat:20,  lng:78}
    ]},

  /* ── Mercury ─────────────────────────────────────────── Z=80 */
  80:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Mercury demand has fallen sharply globally. Artisanal gold mining uses the most mercury worldwide; other uses include chlor-alkali production and dental amalgam.',
    countries:[
      {name:'China',        pct:38, lat:35,  lng:105},
      {name:'India',        pct:14, lat:20,  lng:78},
      {name:'Russia',       pct:8,  lat:55,  lng:60},
      {name:'USA',          pct:7,  lat:40,  lng:-100},
      {name:'Germany',      pct:6,  lat:51,  lng:10},
      {name:'Brazil',       pct:5,  lat:-15, lng:-52},
      {name:'Mexico',       pct:4,  lat:23,  lng:-102},
      {name:'Spain',        pct:4,  lat:40,  lng:-4},
      {name:'Italy',        pct:4,  lat:42,  lng:12},
      {name:'France',       pct:3,  lat:46,  lng:2}
    ]},

  /* ── Lead ────────────────────────────────────────────── Z=82 */
  82:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: International Lead and Zinc Study Group 2023. Lead-acid batteries for automobiles and backup power account for over 80% of lead consumption.',
    countries:[
      {name:'China',        pct:42, lat:35,  lng:105},
      {name:'USA',          pct:14, lat:40,  lng:-100},
      {name:'Germany',      pct:6,  lat:51,  lng:10},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'Japan',        pct:5,  lat:36,  lng:138},
      {name:'India',        pct:5,  lat:20,  lng:78},
      {name:'Italy',        pct:4,  lat:42,  lng:12},
      {name:'UK',           pct:4,  lat:52,  lng:-2},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Brazil',       pct:3,  lat:-15, lng:-52}
    ]},

  /* ── Bismuth ─────────────────────────────────────────── Z=83 */
  83:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Bismuth is used in pharmaceuticals (Pepto-Bismol), cosmetics, low-melting alloys, and as a lead-free solder alternative.',
    countries:[
      {name:'China',        pct:45, lat:35,  lng:105},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'USA',          pct:14, lat:40,  lng:-100},
      {name:'Germany',      pct:8,  lat:51,  lng:16},
      {name:'Belgium',      pct:6,  lat:51,  lng:1},
      {name:'UK',           pct:4,  lat:62,  lng:-4},
      {name:'France',       pct:4,  lat:43,  lng:-4},
      {name:'Italy',        pct:2,  lat:42,  lng:14},
      {name:'Netherlands',  pct:2,  lat:60,  lng:5}
    ]},

  /* ── Uranium ─────────────────────────────────────────── Z=92 */
  92:{ label:'Nuclear fuel consumption \u00b7 % of world total',
    note:'Source: World Nuclear Association 2023. Uranium consumption tracks nuclear power generation. The USA has the world\'s largest nuclear fleet by capacity.',
    countries:[
      {name:'USA',          pct:26, lat:40,  lng:-100},
      {name:'France',       pct:16, lat:46,  lng:2},
      {name:'China',        pct:14, lat:35,  lng:105},
      {name:'South Korea',  pct:7,  lat:37,  lng:127},
      {name:'Russia',       pct:6,  lat:55,  lng:60},
      {name:'Japan',        pct:5,  lat:36,  lng:138},
      {name:'Canada',       pct:4,  lat:56,  lng:-96},
      {name:'UK',           pct:4,  lat:52,  lng:-2},
      {name:'Germany',      pct:4,  lat:51,  lng:10},
      {name:'Ukraine',      pct:3,  lat:49,  lng:31}
    ]},


  4:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Beryllium is consumed primarily in aerospace structural components, nuclear and defense systems, and precision instruments. The USA dominates due to its defense sector.',
    countries:[
      {name:'USA',          pct:70, lat:40,  lng:-100},
      {name:'Germany',      pct:8,  lat:52,  lng:12},
      {name:'Japan',        pct:7,  lat:36,  lng:138},
      {name:'China',        pct:5,  lat:35,  lng:105},
      {name:'UK',           pct:4,  lat:54,  lng:-3},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Russia',       pct:2,  lat:55,  lng:60},
      {name:'Canada',       pct:1,  lat:56,  lng:-96}
    ]},

  13:{ label:'Aluminum consumption \u00b7 % of world total',
    note:'Source: International Aluminium Institute 2023. China dominates aluminum consumption for construction, packaging, and electric vehicles.',
    countries:[
      {name:'China',        pct:57, lat:35,  lng:105},
      {name:'USA',          pct:9,  lat:40,  lng:-100},
      {name:'Germany',      pct:5,  lat:52,  lng:12},
      {name:'Japan',        pct:4,  lat:36,  lng:138},
      {name:'South Korea',  pct:3,  lat:37,  lng:127},
      {name:'India',        pct:3,  lat:20,  lng:78},
      {name:'Italy',        pct:3,  lat:42,  lng:12},
      {name:'Russia',       pct:3,  lat:55,  lng:60},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52},
      {name:'France',       pct:2,  lat:46,  lng:2}
    ]},

  16:{ label:'Industrial consumption (as sulfuric acid) \u00b7 % of world total',
    note:'Source: USGS 2023. Sulfuric acid is the world\'s most-produced industrial chemical. Primary consumption is in phosphate fertilizer manufacture, followed by petroleum refining.',
    countries:[
      {name:'China',        pct:28, lat:35,  lng:105},
      {name:'USA',          pct:14, lat:40,  lng:-100},
      {name:'India',        pct:8,  lat:20,  lng:78},
      {name:'Brazil',       pct:5,  lat:-15, lng:-52},
      {name:'Russia',       pct:5,  lat:55,  lng:60},
      {name:'Morocco',      pct:4,  lat:32,  lng:-7},
      {name:'Germany',      pct:4,  lat:52,  lng:12},
      {name:'Japan',        pct:4,  lat:36,  lng:138},
      {name:'South Korea',  pct:3,  lat:37,  lng:127},
      {name:'Canada',       pct:3,  lat:56,  lng:-96}
    ]},

  31:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Gallium is consumed primarily in compound semiconductors (GaAs, GaN) for LEDs, solar cells, and 5G communications equipment.',
    countries:[
      {name:'China',        pct:35, lat:35,  lng:105},
      {name:'Japan',        pct:25, lat:36,  lng:138},
      {name:'USA',          pct:15, lat:40,  lng:-100},
      {name:'South Korea',  pct:10, lat:37,  lng:127},
      {name:'Germany',      pct:7,  lat:52,  lng:12},
      {name:'Taiwan',       pct:5,  lat:23,  lng:119},
      {name:'UK',           pct:3,  lat:54,  lng:-3}
    ]},

  32:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Germanium is consumed primarily in fiber optic cables, infrared optics for thermal cameras, and as a polymerization catalyst in PET plastic.',
    countries:[
      {name:'USA',          pct:30, lat:40,  lng:-100},
      {name:'China',        pct:20, lat:35,  lng:105},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'Germany',      pct:12, lat:52,  lng:12},
      {name:'South Korea',  pct:8,  lat:37,  lng:127},
      {name:'UK',           pct:7,  lat:54,  lng:-3},
      {name:'France',       pct:5,  lat:46,  lng:2},
      {name:'Netherlands',  pct:3,  lat:53,  lng:5}
    ]},

  33:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Arsenic is consumed as a wood preservative (CCA), in herbicides, and in gallium arsenide (GaAs) semiconductors. Use is declining due to environmental regulations.',
    countries:[
      {name:'China',        pct:40, lat:35,  lng:105},
      {name:'USA',          pct:18, lat:40,  lng:-100},
      {name:'Japan',        pct:10, lat:36,  lng:138},
      {name:'India',        pct:8,  lat:20,  lng:78},
      {name:'Germany',      pct:6,  lat:52,  lng:12},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'UK',           pct:4,  lat:54,  lng:-3},
      {name:'Australia',    pct:3,  lat:-25, lng:134},
      {name:'Taiwan',       pct:2,  lat:23,  lng:119}
    ]},

  34:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Selenium is consumed primarily in glass manufacturing (decolorizing and UV-absorbing agent), CIGS thin-film solar cells, and as an animal feed supplement.',
    countries:[
      {name:'China',        pct:30, lat:35,  lng:105},
      {name:'Japan',        pct:20, lat:36,  lng:138},
      {name:'USA',          pct:15, lat:40,  lng:-100},
      {name:'Germany',      pct:10, lat:51,  lng:16},
      {name:'South Korea',  pct:7,  lat:37,  lng:127},
      {name:'Belgium',      pct:5,  lat:49,  lng:4},
      {name:'France',       pct:5,  lat:44,  lng:0},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'UK',           pct:4,  lat:62,  lng:-2}
    ]},

  35:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Bromine is primarily consumed in flame retardants for electronics and textiles, drilling fluids in oil and gas, and pharmaceutical synthesis.',
    countries:[
      {name:'USA',          pct:35, lat:40,  lng:-100},
      {name:'China',        pct:25, lat:35,  lng:105},
      {name:'Israel',       pct:10, lat:31,  lng:34},
      {name:'India',        pct:7,  lat:20,  lng:78},
      {name:'Japan',        pct:6,  lat:36,  lng:138},
      {name:'Germany',      pct:5,  lat:52,  lng:12},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'UK',           pct:4,  lat:54,  lng:-3}
    ]},

  38:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Strontium is consumed primarily in ceramic permanent magnets, fireworks (crimson-red flame color), and as a scintillator in medical and security imaging.',
    countries:[
      {name:'China',        pct:40, lat:35,  lng:105},
      {name:'USA',          pct:20, lat:40,  lng:-100},
      {name:'Japan',        pct:12, lat:36,  lng:138},
      {name:'Germany',      pct:8,  lat:52,  lng:12},
      {name:'South Korea',  pct:6,  lat:37,  lng:127},
      {name:'India',        pct:5,  lat:20,  lng:78},
      {name:'UK',           pct:4,  lat:54,  lng:-3},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52}
    ]},

  39:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Yttrium is consumed primarily in LED phosphors (yttrium aluminum garnet, YAG), camera lenses, and as a stabilizer in zirconia ceramics.',
    countries:[
      {name:'China',        pct:55, lat:35,  lng:105},
      {name:'Japan',        pct:18, lat:36,  lng:138},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'South Korea',  pct:7,  lat:37,  lng:127},
      {name:'Germany',      pct:4,  lat:52,  lng:12},
      {name:'France',       pct:2,  lat:46,  lng:2},
      {name:'UK',           pct:2,  lat:54,  lng:-3}
    ]},

  44:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Ruthenium is consumed primarily in hard disk drive magnetic recording layers, thick-film resistors in electronics, and as an industrial catalyst.',
    countries:[
      {name:'Japan',        pct:30, lat:36,  lng:138},
      {name:'USA',          pct:25, lat:40,  lng:-100},
      {name:'China',        pct:15, lat:35,  lng:105},
      {name:'Germany',      pct:10, lat:52,  lng:12},
      {name:'South Korea',  pct:8,  lat:37,  lng:127},
      {name:'UK',           pct:5,  lat:54,  lng:-3},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'Taiwan',       pct:3,  lat:23,  lng:119}
    ]},

  45:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Rhodium\'s primary industrial use is in three-way catalytic converters for gasoline-engine vehicles, where it converts nitrogen oxides to nitrogen gas.',
    countries:[
      {name:'China',        pct:25, lat:35,  lng:105},
      {name:'Japan',        pct:18, lat:36,  lng:138},
      {name:'USA',          pct:15, lat:40,  lng:-100},
      {name:'Germany',      pct:12, lat:52,  lng:12},
      {name:'South Korea',  pct:8,  lat:37,  lng:127},
      {name:'UK',           pct:6,  lat:54,  lng:-3},
      {name:'Italy',        pct:5,  lat:42,  lng:12},
      {name:'France',       pct:5,  lat:46,  lng:2},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'Brazil',       pct:2,  lat:-15, lng:-52}
    ]},

  48:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Cadmium is consumed primarily in nickel-cadmium (NiCd) rechargeable batteries and in cadmium telluride (CdTe) thin-film solar panels.',
    countries:[
      {name:'China',        pct:35, lat:35,  lng:105},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Germany',      pct:8,  lat:51,  lng:16},
      {name:'South Korea',  pct:7,  lat:37,  lng:127},
      {name:'France',       pct:5,  lat:44,  lng:0},
      {name:'Belgium',      pct:5,  lat:49,  lng:4},
      {name:'Netherlands',  pct:4,  lat:60,  lng:5},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'UK',           pct:3,  lat:62,  lng:-2}
    ]},

  49:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Indium is consumed primarily as indium tin oxide (ITO) in flat-panel displays and touchscreens. Thin-film CIGS solar cells are a growing application.',
    countries:[
      {name:'China',        pct:40, lat:35,  lng:105},
      {name:'Japan',        pct:25, lat:36,  lng:138},
      {name:'South Korea',  pct:18, lat:37,  lng:127},
      {name:'Germany',      pct:6,  lat:52,  lng:12},
      {name:'Taiwan',       pct:5,  lat:23,  lng:119},
      {name:'USA',          pct:3,  lat:40,  lng:-100},
      {name:'France',       pct:2,  lat:46,  lng:2},
      {name:'UK',           pct:1,  lat:54,  lng:-3}
    ]},

  52:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Tellurium is consumed primarily in cadmium telluride (CdTe) solar panels — First Solar alone accounts for most US demand — and in thermoelectric devices.',
    countries:[
      {name:'USA',          pct:35, lat:40,  lng:-100},
      {name:'China',        pct:25, lat:35,  lng:105},
      {name:'Japan',        pct:12, lat:36,  lng:138},
      {name:'Germany',      pct:8,  lat:52,  lng:12},
      {name:'South Korea',  pct:7,  lat:37,  lng:127},
      {name:'Malaysia',     pct:5,  lat:4,   lng:109},
      {name:'India',        pct:4,  lat:20,  lng:78},
      {name:'France',       pct:4,  lat:46,  lng:2}
    ]},

  53:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Iodine is consumed in X-ray contrast media, disinfectants (povidone-iodine), LCD polarizing film, and as a catalyst in nylon production.',
    countries:[
      {name:'China',        pct:25, lat:35,  lng:105},
      {name:'Japan',        pct:20, lat:36,  lng:138},
      {name:'USA',          pct:15, lat:40,  lng:-100},
      {name:'India',        pct:10, lat:20,  lng:78},
      {name:'Germany',      pct:8,  lat:52,  lng:12},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'Brazil',       pct:5,  lat:-15, lng:-52},
      {name:'France',       pct:4,  lat:46,  lng:2},
      {name:'UK',           pct:4,  lat:54,  lng:-3},
      {name:'Italy',        pct:4,  lat:42,  lng:12}
    ]},

  59:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: IEA Critical Minerals 2023. Praseodymium is consumed alongside neodymium in NdPr permanent magnets for EV motors and wind turbines. Demand is growing rapidly.',
    countries:[
      {name:'China',        pct:65, lat:35,  lng:105},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'Germany',      pct:7,  lat:52,  lng:12},
      {name:'USA',          pct:6,  lat:40,  lng:-100},
      {name:'South Korea',  pct:4,  lat:37,  lng:127},
      {name:'India',        pct:3,  lat:20,  lng:78}
    ]},

  62:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Samarium is consumed primarily in samarium-cobalt (Sm-Co) permanent magnets, which maintain performance at higher temperatures than NdFeB magnets.',
    countries:[
      {name:'China',        pct:60, lat:35,  lng:105},
      {name:'Japan',        pct:18, lat:36,  lng:138},
      {name:'USA',          pct:10, lat:40,  lng:-100},
      {name:'Germany',      pct:6,  lat:52,  lng:12},
      {name:'UK',           pct:3,  lat:54,  lng:-3},
      {name:'France',       pct:3,  lat:46,  lng:2}
    ]},

  63:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Europium is consumed in LED phosphors (red and blue components), fluorescent lamps, and as a security feature in euro banknotes and passports.',
    countries:[
      {name:'China',        pct:55, lat:35,  lng:105},
      {name:'Japan',        pct:20, lat:36,  lng:138},
      {name:'South Korea',  pct:10, lat:37,  lng:127},
      {name:'Germany',      pct:6,  lat:52,  lng:12},
      {name:'USA',          pct:5,  lat:40,  lng:-100},
      {name:'Taiwan',       pct:4,  lat:23,  lng:119}
    ]},

  64:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Gadolinium is consumed as an MRI contrast agent (gadolinium chelates) and as a neutron absorber in nuclear reactor control rods.',
    countries:[
      {name:'USA',          pct:30, lat:40,  lng:-100},
      {name:'China',        pct:25, lat:35,  lng:105},
      {name:'Japan',        pct:18, lat:36,  lng:138},
      {name:'Germany',      pct:10, lat:52,  lng:12},
      {name:'France',       pct:8,  lat:46,  lng:2},
      {name:'UK',           pct:5,  lat:54,  lng:-3},
      {name:'South Korea',  pct:4,  lat:37,  lng:127}
    ]},

  65:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: IEA Critical Minerals 2023. Terbium is consumed in green phosphors for LED displays and in Terfenol-D magnetostrictive alloys. It enhances high-temperature performance of NdFeB magnets.',
    countries:[
      {name:'China',        pct:65, lat:35,  lng:105},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'South Korea',  pct:8,  lat:37,  lng:127},
      {name:'Germany',      pct:6,  lat:52,  lng:12},
      {name:'USA',          pct:4,  lat:40,  lng:-100},
      {name:'France',       pct:2,  lat:46,  lng:2}
    ]},

  67:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Holmium is consumed in high-field magnets, in solid-state surgical lasers for urology and dentistry, and as a neutron absorber in nuclear reactors.',
    countries:[
      {name:'China',        pct:55, lat:35,  lng:105},
      {name:'Japan',        pct:20, lat:36,  lng:138},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Germany',      pct:8,  lat:52,  lng:12},
      {name:'France',       pct:5,  lat:46,  lng:2}
    ]},

  68:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Erbium is consumed primarily as a dopant in erbium-doped fiber amplifiers (EDFAs), which boost light signals in fiber-optic internet cables.',
    countries:[
      {name:'China',        pct:45, lat:35,  lng:105},
      {name:'Japan',        pct:22, lat:36,  lng:138},
      {name:'USA',          pct:15, lat:40,  lng:-100},
      {name:'Germany',      pct:8,  lat:52,  lng:12},
      {name:'South Korea',  pct:5,  lat:37,  lng:127},
      {name:'France',       pct:3,  lat:46,  lng:2},
      {name:'UK',           pct:2,  lat:54,  lng:-3}
    ]},

  69:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Thulium is consumed in portable X-ray sources (which require no electricity), solid-state surgical lasers, and specialty optical glass.',
    countries:[
      {name:'China',        pct:60, lat:35,  lng:105},
      {name:'Japan',        pct:20, lat:36,  lng:138},
      {name:'USA',          pct:12, lat:40,  lng:-100},
      {name:'Germany',      pct:5,  lat:52,  lng:12},
      {name:'France',       pct:3,  lat:46,  lng:2}
    ]},

  70:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Ytterbium is consumed in ytterbium-doped fiber lasers (widely used in industrial cutting and welding), atomic clocks, and as a dopant in stainless steel.',
    countries:[
      {name:'China',        pct:50, lat:35,  lng:105},
      {name:'Japan',        pct:20, lat:36,  lng:138},
      {name:'USA',          pct:15, lat:40,  lng:-100},
      {name:'Germany',      pct:8,  lat:52,  lng:12},
      {name:'UK',           pct:4,  lat:54,  lng:-3},
      {name:'France',       pct:3,  lat:46,  lng:2}
    ]},

  71:{ label:'Industrial consumption \u00b7 % of world total',
    note:'Source: USGS 2023. Lutetium is consumed in PET scan detectors (lutetium oxyorthosilicate scintillators), targeted radionuclide cancer therapy (Lu-177 DOTATATE), and petroleum refining catalysts.',
    countries:[
      {name:'USA',          pct:35, lat:40,  lng:-100},
      {name:'Germany',      pct:20, lat:51,  lng:16},
      {name:'Japan',        pct:15, lat:36,  lng:138},
      {name:'China',        pct:12, lat:35,  lng:105},
      {name:'France',       pct:8,  lat:44,  lng:0},
      {name:'Netherlands',  pct:5,  lat:60,  lng:5},
      {name:'UK',           pct:5,  lat:62,  lng:-2}
    ]},
};


/* ═══════════════════════════════════════════════════════════════
   NO-USE-MAP NOTES
   Shown as an info card when a deposit map exists but industrial
   use data is not available at a meaningful geographic scale.
   ═══════════════════════════════════════════════════════════════ */

var NO_USE_NOTES = {
  21: 'Scandium is consumed in extremely small quantities globally — under 15 tonnes per year — primarily in aerospace aluminum alloys and solid oxide fuel cells. Production is so limited that geographic consumption data is not meaningful at this scale.',
  55: 'Cesium has very few commercial applications, with global consumption under 10 tonnes per year. Primary uses are atomic clocks, oil well logging sensors, and specialty chemicals. Geographic use data is not available at this scale.',
  76: 'Osmium is the rarest naturally occurring element, with global annual trade measured in grams. Its primary uses are as a biological tissue stain, in specialty tip alloys, and as a catalyst. No meaningful geographic use data is available.',
  77: 'Iridium production is approximately 7 tonnes per year globally — less than a single truckload. Used primarily in high-temperature crucibles, spark plugs, and satellite thruster components. Geographic use data is not available at this scale.',
  81: 'Thallium use has been almost entirely phased out worldwide due to its extreme toxicity. Remaining applications in specialty semiconductors and infrared optics are too small and dispersed to map geographically.',
  90: 'Thorium has no significant commercial consumption currently. Although long proposed as a nuclear reactor fuel cycle material, no thorium reactors are operating at industrial scale. Geographic use data is not available.'
};
