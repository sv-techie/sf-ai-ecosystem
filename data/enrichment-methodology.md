# Website, team-size, and CEO enrichment

Observed October 31, 2026. This is partial enrichment, not complete validation of the collection.

## Coverage

- 2,685 source-listed official websites.
- 2,554 source-reported team sizes or ranges.
- 3,495 unambiguous LinkedIn search-size bands, held separately from team sizes.
- 62 company records with individually checked CEO/co-CEO sources.

## Website matching

Existing website fields were retained. Additional websites and team sizes were matched using exact source identity, an exact existing website domain, exact LinkedIn URL, or a unique normalized current company name and matching city in the saved YC or SF Tech Map directory. Former names alone were not used. Websites have not all been independently visited; source snapshots can include outdated domains. Where no website is established the company name is plain text, with source/LinkedIn links separately labeled. Domains are never guessed from company names.

## Team size

YC team_size is the directory's reported team size, not an independently measured count of employees. SF Tech Map supplies a range. Values use saved directory snapshots; the observed date is when this collection was consulted, not proof that headcount remains current. A zero/missing size is unknown. LinkedIn search filters supply only a size interval; they are labeled separately and not treated as a headcount. If multiple collected intervals disagree the search band is left blank. Followers are never used as employees. Figures refer to company-wide teams, not Bay Area office staffing.

## CEOs

Only explicit CEO/co-CEO titles from current company pages or primary event/interview sources are used. Sources and observation dates are stored in ceo_source and ceo_observed_at. Founder is not assumed to mean CEO. Unknown entries are marked Not researched, not interpreted as no CEO. Leadership may change; this is a static snapshot.

The saved YC data is accessed via yc-oss (https://github.com/yc-oss/api); company-level links point to the original YC profiles. SF Tech Map data (https://sftechmap.app/) is CC BY 4.0. Original search evidence and the broader collection methodology remain in data/.

## Direct company-profile review

A further pass opened LinkedIn company pages and collected the explicit Website and Company size fields. Matching required the exact LinkedIn URL and matching displayed company name; mismatched/rebranded titles or institute names were held out. Failed pages were not filled from guessed domains. The review's extracted company facts are in linkedin-profile-review.json.

LinkedIn associated-member counts are shown separately. They count members associated with a company on LinkedIn, not a verified employee census or Bay Area staff. They may include contractors, outdated affiliations, and other discrepancies; they can differ from the company's selected size band. Followers are not used as headcount. First-party published team sizes supersede directory ranges for PolyAI, Gruve, and Bigeye, while the LinkedIn range remains separately available.

For [24]7.ai: website https://www.247.ai/ from its LinkedIn Website field; CEO PV Kannan from https://www.247.ai/leadership/; selected company-size band 10,001+; associated LinkedIn members 11,791 at observation. These are distinct measurements. Company-wide figures are not Campbell or Bay Area employee counts.

Forethought's current company page says it is part of Zendesk and lists no standalone CEO. Its founder is not assumed to retain that title. Bright Machines' LinkedIn page reports its move to Burlingame; the city grouping is updated accordingly.

## Expanded LinkedIn review

The next sweep attempted all 3,914 existing records with a missing website and an existing LinkedIn URL, excluding names explicitly indicating universities, colleges, institutes, tutorials, or prompts. Publicly returned fields were accepted for 1,063 exact company-name/profile-URL matches. Missing fields, failures, and mismatched/rebranded names are recorded in linkedin-field-review.csv. An attempt is not counted as a completed profile review.

In addition, 29 company About and CEO-filtered People tabs were inspected in the signed-in browser. Source URLs are stored separately. Live About values replace older public/cached values for those companies. For [24]7.ai, About and unfiltered People showed 11,791 associated members; the company-selected size remains 10,001+. The CEO filter's 22 results were not mistaken for the company-wide count.

The accepted People-tab roles must explicitly identify the target company, or be corroborated by an official leadership page. Former roles, advisors, assistants to CEOs, CEO-office staff, unrelated companies, and anonymous LinkedIn Member identities are not inferred to be current CEOs. Individual professional profile links are provided. Krish Ramineni was corroborated against Fireflies' official About page because People search also showed a conflicting CEO claim. Clerkie's current abbreviated LinkedIn display name was corroborated with the company's own press release identifying Guy Assad. Bidhan R. is retained exactly as displayed; the surname is not guessed.

No account name, mutual connections, connection degrees, private messages, contact details, or unreviewed employee lists are published. This directory records company facts and leadership evidence; LinkedIn People results do not constitute a verified employee roster. Enrichment remains partial.

Thirteen university units, student groups, and institutional research groups missed by the earlier screen were moved to excluded-records.csv. The current directory has 8,632 records; the original collection's earlier totals are historical.
