# SF AI Ecosystem

**[Browse the company directory →](https://sv-techie.github.io/sf-ai-ecosystem/#directory)** · [Explore the map](https://sv-techie.github.io/sf-ai-ecosystem/#map-section)

A portable, dependency-free web canvas for the Bay Area AI company collection: 8,632 screened source records across 74 cities. Includes a geographic map, city/source filters, full-text company search, pagination, source links, and downloadable CSVs.

## Open directly — no server required

Download `index.html` and open it in a modern browser. The responsive page includes all styles, JavaScript, map boundaries, company records, and downloadable data. It works offline; external company links need an internet connection.

The layout adapts to phones, tablets, and desktops. The directory includes card/table views, sorting, page-size selection, page jumping, company details with all available source metadata, and filtered CSV export. Search, city/source filters, pagination, zoom, and CSV downloads work directly from the file.

## Repository contents

- `index.html` — the complete responsive site, including styles, browser JavaScript, map geometry, all company records, and downloadable data.
- `data/` — original data files, screening evidence, and methodology for inspection or reuse.
- `.nojekyll` — tells GitHub Pages to serve these files directly.

No local app, Python process, package installation, build step, or server is required. The JavaScript embedded in the HTML powers search, filters, the map, company details, and downloads; allow JavaScript in your browser.

## Publish and update

GitHub Pages serves the repository's `main` branch. Push an updated `index.html` to publish changes. Share the live link above, or share `index.html` as a standalone file.

The HTML contains a snapshot of the data. Editing files under `data/` alone will not update the embedded records or downloads; update the embedded `ecosystem-data` JSON in `index.html` as well. No automatic refresh is configured.

## Company websites and people

Company names link to source-listed official websites when established. Visitor-facing company references prioritize the company website, then LinkedIn About; FundingWatcher links and labels are omitted from company cards, tables, and details. Original dataset provenance remains in downloadable records and credits. Unknown website names stay as plain text; LinkedIn and record sources remain separately labeled.

Current partial coverage: **2,686 websites**, **2,563 reported team sizes/headcount bands** (including **72 LinkedIn About sizes**), **70 CEO records**, and **23 records with sourced founders**. Use the **Profile data** filter to browse these records. Names, company websites, and CEO names are searchable. Both cards and tables show team and CEO annotations; company details include evidence URLs and observed dates.

Team sizes are company-wide source snapshots, not live counts or Bay Area office staffing. LinkedIn search-filter size bands are stored separately and are not reported as employee counts. CEOs are populated only where an explicit title was checked. Founders have their own field and evidence links; founder status alone does not establish a current CEO role. No domains or CEO names are guessed.

The expanded sweep attempted **3,914** existing records with a missing website and a LinkedIn URL; **1,063** matching records supplied usable public company fields. Separately, **29 signed-in About and CEO-filtered People tabs** were inspected. The directory now has **1,016** LinkedIn-associated member counts. LinkedIn-associated members are shown separately from employees and selected company-size ranges. Profiles no longer display internal screening or matching notes.

For example, **[24]7.ai** now links to [247.ai](https://www.247.ai/), lists **PV Kannan** as CEO with a company leadership source, and shows the LinkedIn **10,001+** size band separately from **11,791 associated members** observed October 31, 2026.

The directory provides direct About and People links, plus individual LinkedIn profile evidence for 18 CEOs. Former and unrelated CEO search results are not treated as current leadership. Missing or unestablished roles stay explicit. Thirteen university/research-group rows missed earlier were moved to exclusions, leaving 8,632 records.

See the [field-review status](data/linkedin-field-review.csv), [About/People review](data/linkedin-about-people-review.json), and [enrichment sources and definitions](data/enrichment-methodology.md) and [coverage summary](data/enrichment-summary.json). Data remains static until explicitly updated.

## Data and limitations

This is a screened source collection, not a verified census of active startups. Entity matching and AI classification remain provisional. Universities, colleges, and general agencies were screened out. Twelve service-category firms have documented AI products. Points represent city centers rather than office addresses.

See [methodology](data/methodology.md), [search coverage](data/search-coverage-audit.json), [excluded records](data/excluded-records.csv), and [retained product exceptions](data/product-exceptions.csv).

Sources: FundingWatcher and SF Tech Map (CC BY 4.0); public LinkedIn company results; YC directory via yc-oss. Coordinates: GeoNames. Boundaries: US Census / us-atlas. Source links and evidence are retained in the CSV.

Snapshot packaged October 31, 2026. This app does not automatically refresh its data.

The saved October 31 enrichment checkpoint adds 50 company About reviews, sourced founder annotations, and an **About size + website + leader** filter. 59 records meet those three fields together. Full enrichment remains incomplete; further research is paused. See [checkpoint evidence](data/enrichment-checkpoint-review.json).
