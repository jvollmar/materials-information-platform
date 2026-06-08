# MATERIALS INFORMATION PLATFORM
### Video Demo: https://youtu.be/[INSERT_LINK_AFTER_RECORDING]

### Author: John Vollmar (CS50 Student)
### Project Collaborator: Nelson Caldwell (Homeschool Teacher)
### AI Collaboration: Claude AI, ChatGPT

---

## Project Summary

The **Materials Information Platform** is an interactive periodic table web application covering all 118 chemical elements. It is a comprehensive multi-page educational and research tool. It features an animated quantum mechanical electron cloud animation, world deposit and use maps, detailed industrial use data for every element, and a discovery history timeline for each element. This would be useful for students and researchers of chemistry and materials science. It gives a flavor for real-world limitations concerning any of the elements.

This application runs entirely in the browser. Copying the project folder to any computer and opening `index.html` in a browser is sufficient to run the full application. During development, a local server is started with `python3 -m http.server 8080`. Available data determines the depth.

We ran into large problems on several occasions. We could not get the world map to show each circle and percentage and country label without overlapping many times. We even had trouble obtaining a suitable map. They were either too vague or too detailed. We had to have Claude keep searching. We also had a lot of trouble getting the industries and companies to show correctly for each element. Several times in the development of this project, Anthropic’s (the parent company of Claude) servers went down and it took an excessive amount of time to keep requesting portions of the code to be improved. We ended up having to pay $90 in extra usage credits to keep the project going. No coded test programs were written; all debugging was done interactively with Claude and ChatGPT.

The program is set up such that you can add more pages of information such as a page for Market Pricing that uses an API to determine live prices. You could also add common chemical compounds with their formulas and usage. No pun intended -- but you could basically add more icing to this already decadent cake of a project. After a combined 200+ man-hours of work on the designing, code, appearance, and testing, we decided that we would have to limit our scope to the working project as it is.

---

## Standard Libraries and External Resources

### HTML5 Canvas API       – Electron cloud animations
    Browser Fetch API      – On-demand loading of JSON data files
    URLSearchParams        – Reading atomic number from URL queries
    Inline SVG             – World map rendering with custom path data

### External Fonts (loaded from Google Fonts CDN)
    Orbitron               – Headers, element symbols, atomic numbers
    Rajdhani               – Display text, category labels, navigation
    Share Tech Mono        – Data values, masses, electron configurations
    Barlow                 – Body text in industries and discovery panels

### Data Sources
    USGS Mineral Commodity Summaries (2022-2023)
        World Gold Council
            IEA Critical Minerals Report (2023)
                World Nuclear Association
                    Natural Earth Geo Data (public domain, embedded in world-map.svg)

---

## Files

### Root-Level Files
    index.html               – Main interactive periodic table
    element.html             – Element detail page viewer
    elementpage.js           – Main rendering of element detail pages
    elements-data.js         – Core data file: ELEMENTS array
    elements.csv             – Element data in CSV format
    styles.css               – All CSS for every page in the project
    map-data.js              – Deposit and industrial use geo-data
    deposit-map.html         – World Deposit Map and World Use Map
    world-map.svg            – Natural Earth land data
    industrial-uses.html     – Industrial uses panel
    discovery-history.html   – Discovery history panel
    glossary.html            – 17-term chemistry glossary
    groups.html              – 11 element category descriptions
    periods.html             – 7 period descriptions explaining rows
    README.md                – This file

### Subfolders
    industries/              – 118 JSON files, one per element
    discovery/               – 118 JSON files, one per element
    elements/                – 118 element files with redirect stubs
    clouds/                  – electron-cloud.html: single dynamic file

---

## List of Custom JavaScript Functions

### elementpage.js
    renderElementPage(atomicNum)
    pc(label, value)
    ab(href, icon, title, desc, disabled)
    cap(s)

### industrial-uses.html (inline script)
    industriesFileName(z)
    renderHeader()
    renderIndustriesPanel(data)
    renderCompaniesPanel(ind, elName)
    badgeHTML()
    loadIndustriesData(callback)

### discovery-history.html (inline script)
    discoveryFileName(z)
    renderHeader()
    renderDiscovery(data)
    renderComingSoon()
    factCard(label, value)

### clouds/electron-cloud.html (inline script)
    parseConfig(configStr)
    buildSubshells(parsed)
    drawCloud(ctx, subshells)
    drawOrbitals(ctx, subshells)
    animate()

### deposit-map.html (inline script)
    placeLabel(circle, placed, attempts)
    drawMap(elementData)
    buildLegend(data)

### index.html (inline script)
    buildTable()
    handleElementClick(n)

---

## Code Sections and How the Application Works

### Interactive Periodic Table (index.html)
Loads elements-data.js, builds an 18-column CSS-formed periodic table from the ELEMENTS array, color-codes each cell by element category using CSS custom properties. Navigates to element.html on click. Group and period labels link to groups.html and periods.html reference pages. How to use and key terms explanation box included.

### Element Detail Pages (element.html + elementpage.js)
element.html reads the atomic number from the URL query using URLSearchParams and calls renderElementPage(). elementpage.js looks up the element in ELEMENTS and ELEMENT_INFO, builds the page (hero card, properties grid, description, fun fact, Explore Further buttons), and writes it to #element-root. The Explore Further section contains six action buttons: Electron Cloud Animation, World Deposit and Use Maps, Industrial Uses, Discovery History, and possible future pages: Market Pricing, and Isotopes & Nuclear Data (both faded grey for now).

### Electron Cloud Animation (clouds/electron-cloud.html)
Reads NUM from URL, looks up the element's electron configuration, parses it and builds a subshell data structure. Two views are rendered on an HTML5 Canvas using requestAnimationFrame. Cloud View renders probabilistic dot clouds in the correct orbital shapes. Orbital View renders electrons moving along quantum paths. Colors are assigned from 19 unique per-subshell color assignments across seven shells. Shell explanations are included on pages.

### World Deposit and Use Maps (deposit-map.html + world-map.svg + map-data.js)
For elements with geographic data, renders two world maps (deposits and use) using inline SVG. Circle diameters are scaled to percentage of global production or consumption. A custom label placement algorithm prevents overlapping labels (In certain cases, we had to hardcode it). Elements without geographic data (noble gases, synthetic elements, globally distributed elements) display an informational card instead of a map.

### Industrial Uses Panel (industrial-uses.html + industries/*.json)
Fetches industries/elementname.json on demand. The JSON contains an array of industries, each with uses (bullet points) and companies (name, HQ, tier, volume, market share, description). The panel renders an industry list view; clicking "View Companies" switches to a company detail view. Displays "Data Coming Soon" if the JSON fetch fails.

### Discovery History Panel (discovery-history.html + discovery/*.json)
Fetches discovery/elementname.json on demand. The JSON contains discoverer, discovery year, country, named-by, etymology, a timeline array of dated historical events, a narrative story section, and a source note. The panel renders a quick-facts bar, etymology box, vertical timeline (with the discovery year highlighted), and story card. Displays "History Coming Soon" if the JSON fetch fails.

---

## Design Choices

**JSON per element instead of one monolithic file.**

**Dynamic rendering over static pages.** One element.html serves all 118 elements. One electron-cloud.html serves all 118 elements. One industrial-uses.html serves all 118 elements. One discovery-history.html serves all 118 elements. This keeps the file count manageable and all logic in one place per feature.

**Embedded SVG for world maps.** The Natural Earth land-map is embedded directly in deposit-map.html as inline SVG, eliminating any network dependency for the map background. No external mapping library is used.

---

## AI Assistance

Myself and Nelson Caldwell are the project visionaries. We conceived the original idea of a full element explorer with world deposit maps and industrial use data. We made all key architectural decisions — the JSON-per-element approach for industrial and discovery data, the data-depth principle, the decision to keep everything as self-contained HTML with no frameworks, and the standard to research every element thoroughly rather than padding entries. We reviewed every deliverable, identified errors (including institutional attribution errors in the superheavy element entries and corrupted JSON files), and directed the project through hundreds of specific decisions across many sessions.

Claude provided the coding implementation — HTML, CSS, JavaScript, and JSON data files — and conducted the element-by-element research. ChatGPT was consulted on certain matters.

I set up the development environment in the GitHub Codespace, tested every feature in the browser, reported bugs, confirmed fixes, and understood how all the code works.

Per CS50's academic honesty policy for this final project, AI tool use is permitted and is disclosed here as required.
