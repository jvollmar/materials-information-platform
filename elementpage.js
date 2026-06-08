/* =============================================================
   MATERIALS INFORMATION PLATFORM — elementpage.js  (v3)

   Named WITHOUT a hyphen to avoid Windows filename issues.
   Loaded by element.html at the project root level.
   All paths are relative to the project root (no ../ needed).

   Usage: renderElementPage(atomicNum)
   ============================================================= */

/* Maps internal category keys to human-readable display labels */
var CAT_LABELS = {
  'alkali-metal':      'Alkali Metal',
  'alkaline-earth':    'Alkaline Earth Metal',
  'transition-metal':  'Transition Metal',
  'post-transition':   'Post-Transition Metal',
  'metalloid':         'Metalloid',
  'reactive-nonmetal': 'Other Nonmetal',
  'halogen':           'Halogen',
  'noble-gas':         'Noble Gas',
  'lanthanide':        'Lanthanide',
  'actinide':          'Actinide',
  'inner-transition':  'Inner-Transition Metal',
  'unknown':           'Unknown Properties'
};

/*
  FEATURES — which interactive pages exist per element.
  Paths relative to the project root (element.html lives at root).

  Add entries here as new pages are built:
    FEATURES[79]  = { electronCloud: 'clouds/gold-electron-cloud.html' };
    FEATURES[87]  = { electronCloud: 'clouds/francium-electron-cloud.html' };
    FEATURES[118] = { electronCloud: 'clouds/oganesson-electron-cloud.html' };
*/

/* Build feature URL lookup for all 118 elements at startup */
var FEATURES = {};
(function(){
  for (var __fi = 1; __fi <= 118; __fi++) {
    FEATURES[__fi] = {
      electronCloud: 'clouds/electron-cloud.html?n=' + __fi,
      depositMap:    'deposit-map.html?n=' + __fi
    };
  }
})();

/* ── MAIN RENDER FUNCTION ── */

/*
 * Builds and injects the full element detail page for the given atomic number.
 * Reads data from the global ELEMENTS array and ELEMENT_INFO object (elements-data.js).
 * Writes the resulting HTML string into the #element-root div.
 */
function renderElementPage(atomicNum) {

  /* Search ELEMENTS array for the matching atomic number */
  var el = null;
  var i;
  for (i = 0; i < ELEMENTS.length; i++) {
    if (ELEMENTS[i][0] === atomicNum) { el = ELEMENTS[i]; break; }
  }

  /* If no match found, show an error message and stop */
  if (!el) {
    document.getElementById('element-root').innerHTML =
      '<p style="padding:40px;font-family:sans-serif">Element #' + atomicNum + ' not found.</p>';
    return;
  }

  /* Pull extended info, category label, feature URLs, and synthetic flag */
  var info    = ELEMENT_INFO[atomicNum] || {};
  var cat     = el[3];
  var catName = CAT_LABELS[cat] || cat;
  var feats   = FEATURES[atomicNum] || {};
  var isSynth = (SYNTHETIC_ELEMENTS[atomicNum] === 1);

  /* Set the browser tab title */
  document.title = el[2] + ' (' + el[1] + ') \u2014 MIP';

  /* Build the synthetic element warning banner (empty string if not synthetic) */
  var synthBanner = isSynth
    ? '<div style="background:#FFF5F5;border:1px solid #FFCCCC;border-radius:6px;padding:8px 14px;margin-top:10px;font-size:0.82rem;color:#CC0000;font-family:var(--font-display)">&#9679; Synthetic element &mdash; produced only in laboratories, not found in nature</div>'
    : '';

  /* Accumulate page HTML as a single string, then write once to the DOM */
  var html = '';

  /* HEADER — back button + site title */
  html += '<header class="page-header">';
  html += '<a href="index.html" class="nav-back">&#8592; Periodic Table</a>';
  html += '<h1>MATERIALS INFORMATION PLATFORM</h1>';
  html += '</header>';

  /* HERO — large element card + name, category badge, atomic mass */
  html += '<section class="element-hero">';
  html += '<div class="element-card-large ' + cat + (isSynth ? ' synthetic' : '') + '">';
  html += '<span class="atomic-num">' + atomicNum + '</span>';
  html += '<span class="symbol">' + el[1] + '</span>';
  html += '<span class="elem-name">' + el[2] + '</span>';
  html += '</div>';
  html += '<div class="element-info-text">';
  html += '<h2>' + el[2] + '</h2>';
  html += '<span class="category-badge ' + cat + '">' + catName + '</span>';
  html += '<div class="elem-mass-display">Atomic Mass: ' + el[6] + ' u &nbsp;&bull;&nbsp; Standard State: ' + cap(el[7]) + '</div>';
  html += synthBanner;
  html += '</div>';
  html += '</section>';

  /* PROPERTIES — grid of property cards; only renders a card if the value exists */
  html += '<section class="properties-section">';
  html += '<h3>Physical &amp; Chemical Properties</h3>';
  html += '<div class="properties-grid">';
  html += pc('Atomic Number',   '#' + atomicNum);
  html += pc('Atomic Mass',     el[6] + ' u');
  html += pc('Period / Group',  'Period ' + el[4] + (el[5] ? ' &bull; Group ' + el[5] : ' &bull; f-block'));
  html += pc('Standard State',  cap(el[7]));
  if (info.electronConfig)    html += pc('Electron Configuration',    info.electronConfig);
  if (info.meltingPoint)      html += pc('Melting Point',             info.meltingPoint);
  if (info.boilingPoint)      html += pc('Boiling Point',             info.boilingPoint);
  if (info.density)           html += pc('Density',                   info.density);
  if (info.atomicRadius)      html += pc('Atomic Radius',             info.atomicRadius);
  if (info.electronegativity) html += pc('Electronegativity (Pauling)', info.electronegativity);
  if (info.discoveredBy)      html += pc('Discovered By',             info.discoveredBy);
  if (info.yearDiscovered)    html += pc('Year Discovered',           info.yearDiscovered);

  /* Glossary link — last card in the grid, links to term definitions */
  html += '<a href="glossary.html?from=' + atomicNum + '" class="prop-card prop-glossary-card">';
  html += '<div class="prop-label">&#128214; Glossary</div>';
  html += '<div class="prop-value prop-glossary-val">What do these terms mean?</div>';
  html += '</a>';
  html += '</div></section>';

  /* DESCRIPTION — paragraph about the element; only shown if data exists */
  if (info.description) {
    html += '<section class="description-section">';
    html += '<h3>About ' + el[2] + '</h3>';
    html += '<p class="description-text">' + info.description + '</p>';
    if (info.uses) html += '<p class="uses-text"><strong>Common uses:</strong> ' + info.uses + '</p>';
    html += '</section>';
  }

  /* FUN FACT — highlighted callout box; only shown if data exists */
  if (info.funFact) {
    html += '<section class="fun-fact-section">';
    html += '<h3>Did You Know?</h3>';
    html += '<div class="fun-fact-box"><strong>&#128161; Fun Fact</strong>' + info.funFact + '</div>';
    html += '</section>';
  }

  /* ACTION BUTTONS — six Explore Further buttons linking to sub-panels */
  html += '<section class="action-section">';
  html += '<h3>Explore Further</h3>';
  html += '<div class="action-grid">';

  /* Electron Cloud: active for all elements via the dynamic cloud page */
  if (feats.electronCloud) {
    html += ab(feats.electronCloud, '&#9883;', 'Electron Cloud Animation',
               'See quantum probability clouds for all electron orbitals', false);
  } else {
    html += ab(null, '&#9883;', 'Electron Cloud Animation',
               'Interactive orbital visualisation &mdash; coming soon', true);
  }

  /* World Maps: active for all elements; deposit-map.html handles elements with no data */
  html += ab(feats.depositMap || null, '&#127758;', 'World Deposit &amp; Use Maps',
             feats.depositMap ? 'Geographic distribution of global deposits and industrial uses' : 'Global mining &amp; deposit locations &mdash; coming soon',
             !feats.depositMap);

  /* Industrial Uses: active for all 118 elements */
  var indUrl = 'industrial-uses.html?n=' + atomicNum;
  html += ab(indUrl, '&#127981;', 'Industrial Uses',
             'Top industries &amp; companies that use this element', false);

  /* Discovery History: active for all 118 elements */
  html += ab('discovery-history.html?n=' + atomicNum, '&#128218;', 'Discovery History',
             'Who discovered it, when, where, and the story behind the name', false);

  /* Market Pricing and Isotopes: placeholders, not yet implemented */
  html += ab(null, '&#128200;', 'Market Pricing',            'Real-time commodity pricing &mdash; coming soon', true);
  html += ab(null, '&#128280;', 'Isotopes &amp; Nuclear Data','Stable isotopes &amp; radioactive decay &mdash; coming soon', true);
  html += '</div></section>';

  /* FOOTER */
  html += '<footer class="site-footer">CS50 Final Project &mdash; Materials Information Platform &mdash; HTML &bull; CSS &bull; JavaScript</footer>';

  /* Write the completed HTML string into the page's root container */
  var root = document.getElementById('element-root');
  if (root) root.innerHTML = html;
}

/* ── HELPER FUNCTIONS ── */

/*
 * Returns an HTML string for a single property card in the properties grid.
 * label: the property name displayed in small caps above the value
 * value: the property value displayed in the card body
 */
function pc(label, value) {
  return '<div class="prop-card"><div class="prop-label">' + label +
         '</div><div class="prop-value">' + value + '</div></div>';
}

/*
 * Returns an HTML string for an action button in the Explore Further grid.
 * Renders as a clickable <a> tag if not disabled and href is provided.
 * Renders as a greyed-out <div> if disabled is true or href is null.
 * href:     URL the button links to, or null if not yet available
 * icon:     HTML entity string for the button icon
 * title:    bold label text on the button
 * desc:     smaller description text below the title
 * disabled: true renders the button as inactive
 */
function ab(href, icon, title, desc, disabled) {
  if (!disabled && href) {
    return '<a href="' + href + '" class="action-btn available">' +
           '<span class="action-icon">' + icon + '</span>' +
           '<span class="action-title">' + title + '</span>' +
           '<span class="action-desc">' + desc + '</span></a>';
  }
  return '<div class="action-btn disabled">' +
         '<span class="action-icon">' + icon + '</span>' +
         '<span class="action-title">' + title + '</span>' +
         '<span class="action-desc">' + desc + '</span></div>';
}

/*
 * Capitalizes the first character of a string.
 * Returns an empty string if s is falsy.
 */
function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
