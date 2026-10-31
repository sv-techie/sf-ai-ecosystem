# Website, team-size, and CEO enrichment

Observed October 31, 2026. This is partial enrichment, not complete validation of the collection.

## Coverage

- 1,526 source-listed official websites.
- 1,388 YC team sizes or SF Tech Map headcount bands.
- 3,495 unambiguous LinkedIn search-size bands, held separately from team sizes.
- 13 company records with individually checked CEO/co-CEO sources.

## Website matching

Existing website fields were retained. Additional websites and team sizes were matched using exact source identity, an exact existing website domain, exact LinkedIn URL, or a unique normalized current company name and matching city in the saved YC or SF Tech Map directory. Former names alone were not used. Websites have not all been independently visited; source snapshots can include outdated domains. Where no website is established the company name is plain text, with source/LinkedIn links separately labeled. Domains are never guessed from company names.

## Team size

YC team_size is the directory's reported team size, not an independently measured count of employees. SF Tech Map supplies a range. Values use saved directory snapshots; the observed date is when this collection was consulted, not proof that headcount remains current. A zero/missing size is unknown. LinkedIn search filters supply only a size interval; they are labeled separately and not treated as a headcount. If multiple collected intervals disagree the search band is left blank. Followers are never used as employees. Figures refer to company-wide teams, not Bay Area office staffing.

## CEOs

Only explicit CEO/co-CEO titles from current company pages or primary event/interview sources are used. Sources and observation dates are stored in ceo_source and ceo_observed_at. Founder is not assumed to mean CEO. Unknown entries are marked Not researched, not interpreted as no CEO. Leadership may change; this is a static snapshot.

The saved YC data is accessed via yc-oss (https://github.com/yc-oss/api); company-level links point to the original YC profiles. SF Tech Map data (https://sftechmap.app/) is CC BY 4.0. Original search evidence and the broader collection methodology remain in data/.
