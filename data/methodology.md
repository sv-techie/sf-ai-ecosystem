# Bay Area AI collection — current screened release

Updated October 31, 2026. **8,645 retained source records across 74 Bay Area cities/localities.** This is 355 below the user’s approximate 9,000 target. San Francisco accounts for 6,534 records; the other Bay Area cities account for 2,111.

This supersedes earlier unscreened maps. The map starts with **All Bay Area**, and its city selector narrows the region without changing the underlying collection.

## Applied scope

The user requested the whole Bay Area, excluding universities, colleges and general consulting agencies, while keeping service firms with a clear AI product.

Of 8,944 records before this cleanup, 299 were held out:

- 16 university, college or higher-education organizations/units.
- 245 general service, consulting, staffing, recruiting or agency records without established clear AI-product evidence.
- 38 publisher, community, investing or education organizations without clear AI-product evidence.

12 service/agency-category records were retained because a specific product could be identified in official company documentation, a company profile on Y Combinator, or a company/government product record. See [product exceptions](retained-ai-product-exceptions.csv) for the product and evidence URL for each case. A label such as “IT Services and IT Consulting” alone does not make a product company an agency; examples retained include AI Studios, Touchless lending, Orchestrait and the Invofox document-extraction API. Inherited acquired-company or large-company records were not reclassified as active independent startups merely because they passed the product screen.

Institutions are excluded before applying product exceptions. Additional screens look at industry labels, organization names, and available public descriptions for explicit consulting, outsourcing, staffing, custom-development, agency and publisher/community signals. An excluded row is not a declaration that the organization has no AI product; it means the evidence required to include it under this scope was not established. Some legitimate businesses may remain held out pending review.

## Expanded searches

This pass inspected 7,328 row occurrences, representing 4,637 distinct company/showcase/school URLs across 11 observed search groups. The row count includes intentional overlap across regional, city, industry and size partitions, plus repeated final-page observations; these do not raise the deduplicated candidate count.

Queries used the keywords **artificial intelligence** and **AI**, explicit Bay Area or Bay Area-city location filters, the Software Development, Technology/Information/Internet and Artificial Intelligence industry filters, and company-size groups including 1–10, 11–50 and 51–500 employees. A geographic partition covered Palo Alto, San Jose, Mountain View, Santa Clara, Sunnyvale, San Mateo, Menlo Park, Redwood City, Fremont, Oakland, Berkeley and Cupertino. A separate San Francisco-city partition recovered names hidden by the metro-wide ranking. The audit file records the actual observed filter identifiers and pages.

Some groups ended below the 100-page display boundary. Other groups stopped at page 100 despite larger estimated totals. Some late pages contained a result-count header but no company rows; those were not filled with invented entries. Search totals are not a census and can disagree with the number of visible records. The downloaded audit reports collected records, not advertised totals.

The pass provisionally matched 1,118 candidate URLs to existing names, known aliases, source slugs, corporate-suffix variants or LinkedIn URLs; it held out 565 distinct candidates for outside-region, missing or ambiguous displayed locations, 30 school/showcase pages, 41 name/category cases and 89 industry-review cases. 2,794 candidates were added before the scope cleanup. Screens were then applied across the complete old and new collection, not just the new additions.

## Source lineage

- **FundingWatcher:** 4,067 San Francisco records from its September 27, 2026 [research download](https://fundingwatcher.com/research/san-francisco-vs-eu-ai-startups/), licensed CC BY 4.0. The file also contained EU records, which were excluded. AI category, funding, founding year and non-public filters are source-defined. Its distinct source IDs were preserved even when names repeated.
- **LinkedIn:** original and size-/industry-/city-filtered company searches. Each retained LinkedIn record has a company-page URL. Keywords establish search membership, not an independently verified AI-native business model. Public descriptions were used for screening; personal network and follower annotations are excluded from deliverables.
- **YC directory via yc-oss:** [public API and provenance](https://github.com/yc-oss/api). Earlier additions required source Active status, a primary listed California Bay Area city and an explicit AI-related tag. Former names and slugs also support provisional matching.
- **SF Tech Map:** Data: SF Tech Map, CC BY 4.0, https://sftechmap.app . Earlier additions came from its documented public API, with AI tag, active status and startup/scaleup kind requirements. The retrieved data included machine-verified imports; it was not all hand verified.
- **GeoNames:** city coordinates, CC BY 4.0. **US Census via us-atlas:** map boundaries.

## Limits of the count

**8,645 is a screened-record count, not a verified census of unique active AI startups.** Source definitions differ and some inherited records are large, acquired or inactive businesses. Corporate identity matching remains provisional: common names can collide; unrecognized aliases, old brands, office pages and distinct source IDs can leave duplicates. General agencies with no obvious flag in the available metadata may still require manual review. Passing the screens is not independent product validation for every record.

The collection is not the underlying Crunchbase 9,898-organization dataset and cannot be described as a verified percentage of it. The approximate 9,000 target was not used to admit otherwise excluded records or fabricate map points.

Pins are **city centers**, not office addresses or verified legal headquarters. Displayed city/state fields govern geography because search filters sometimes return companies with non-Bay-Area primary locations. Regional-only and ambiguous multi-city locations were not assigned invented city pins. The record-level CSV retains the source and screening/evidence fields for review.

## Current files

- [Retained collection](bay-area-ai-product-focused.csv): 8,645 records.
- [Exclusion log](excluded-records.csv): 299 held-out records with reasons.
- [AI-product exceptions](retained-ai-product-exceptions.csv): 12 cases, with product and evidence links.
- [Search coverage audit](search-coverage-audit.json): observed query filters and pages, without personal network data.
