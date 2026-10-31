# SF AI Ecosystem

**[Browse the company directory →](https://sv-techie.github.io/sf-ai-ecosystem/#directory)** · [Explore the map](https://sv-techie.github.io/sf-ai-ecosystem/#map-section)

A portable, dependency-free web canvas for the Bay Area AI company collection: 8,645 screened source records across 74 cities. Includes a geographic map, city/source filters, full-text company search, pagination, source links, and downloadable CSVs.

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

## Data and limitations

This is a screened source collection, not a verified census of active startups. Entity matching and AI classification remain provisional. Universities, colleges, and general agencies were screened out. Twelve service-category firms have documented AI products. Points represent city centers rather than office addresses.

See [methodology](data/methodology.md), [search coverage](data/search-coverage-audit.json), [excluded records](data/excluded-records.csv), and [retained product exceptions](data/product-exceptions.csv).

Sources: FundingWatcher and SF Tech Map (CC BY 4.0); public LinkedIn company results; YC directory via yc-oss. Coordinates: GeoNames. Boundaries: US Census / us-atlas. Source links and evidence are retained in the CSV.

Snapshot packaged October 31, 2026. This app does not automatically refresh its data.
