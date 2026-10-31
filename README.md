# SF AI Ecosystem

A portable, dependency-free web canvas for the Bay Area AI company collection: 8,645 screened source records across 74 cities. Includes a geographic map, city/source filters, full-text company search, pagination, source links, and downloadable CSVs.

## Run locally

```sh
cd ~/src/sf-ai-ecosystem
python3 -m http.server 8787 --bind 127.0.0.1
```

Open http://127.0.0.1:8787. The page fetches JSON, so use HTTP rather than opening index.html directly.

## Publish

Serve this directory with any static host. No build, package install, API key, external JavaScript library, or backend is required. All map boundaries and data are included locally. Company links navigate to external source sites.

## Data and limitations

This is a screened source collection, not a verified census of active startups. Entity matching and AI classification remain provisional. Universities, colleges, and general agencies were screened out. Twelve service-category firms have documented AI products. Points represent city centers rather than office addresses.

See [methodology](data/methodology.md), [search coverage](data/search-coverage-audit.json), [excluded records](data/excluded-records.csv), and [retained product exceptions](data/product-exceptions.csv).

Sources: FundingWatcher and SF Tech Map (CC BY 4.0); public LinkedIn company results; YC directory via yc-oss. Coordinates: GeoNames. Boundaries: US Census / us-atlas. Source links and evidence are retained in the CSV.

Snapshot packaged October 31, 2026. This app does not automatically refresh its data.
