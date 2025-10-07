1. Comparative Inspiration Pack
CISA Known Exploited Vulnerabilities (KEV) – U.S.

Audiences: Primarily network defenders across all sectors (especially U.S. Federal agencies under Binding Operational Directive 22-01), but effectively any organization worldwide can use it
armosec.io
. The catalog serves IT security teams and vulnerability managers who need to prioritize patching.

Content Types: A continuously updated catalog of CVEs known to be actively exploited in the wild
armosec.io
armosec.io
. Each entry contains fields like CVE ID, affected product/vendor, short description of the vulnerability, recommended required action (e.g. apply patch or mitigation), status, date added, and a due date for remediation
armosec.io
armosec.io
. No descriptive threat narrative—just factual vulnerability details and remediation guidance. CISA also issues periodic alerts when new KEVs are added, but the catalog itself is the core content.

Cadence: Updates occur whenever new exploited vulns are discovered – often multiple updates per week. There isn’t a fixed schedule; CISA adds entries as needed (often several in a month). The KEV catalog was launched in late 2021 and by policy, U.S. agencies must patch listed vulns by the specified due dates
armosec.io
. The catalog is curated and relatively selective (hundreds of entries out of tens of thousands of CVEs annually).

Machine-Readable Feeds: Yes. The KEV data is accessible via Web UI, and downloadable in CSV and JSON formats
armosec.io
. CISA provides a JSON schema for the catalog and updates a GitHub repo with the latest JSON/CSV to facilitate integration
armosec.io
. Users can also subscribe to a mailing list for KEV updates
armosec.io
. This makes it easy to ingest KEV into vulnerability management tools or dashboards.

Oversharing Controls: The KEV catalog contains no sensitive victim data – only publicly known CVEs and generic guidance. It focuses on “must-patch” information rather than detailed threat actor TTPs. By design, it avoids any attribution or incident-specific data, so there’s no risk of exposing identities or investigative info. Everything is effectively TLP:CLEAR/public. CISA’s role is to aggregate open-source reports of exploitation; any classified or sensitive context is kept out. The KEV list format inherently enforces a defender-first, no-blame approach: it simply tells all organizations to prioritize these vulnerabilities (with minimal narrative)
armosec.io
.

UK NCSC Threat Reports – United Kingdom

Audiences: Broad UK audience – from IT/security professionals in businesses and government to the interested public. The Weekly Threat Report is written in an accessible way, aiming to raise awareness across sectors. NCSC also produces more detailed advisories and sector-specific reports (e.g. threats to sports organisations or law firms), targeting those industries’ security teams
bfff.co.uk
. However, the flagship “weekly threat report” caters to a general security-conscious readership in the UK.

Content Types: The Weekly Threat Report (published on NCSC’s site) is a short bulletin summarizing recent cyber incidents or trends, drawn from open sources
cypro.se
. For example, it might highlight a major ransomware story in the news, a newly disclosed vulnerability, and a reminder of best practices. These reports are narrative in style, not highly technical – a digest of what happened that week and what it means for UK organizations. NCSC also issues advisories and statements on specific threats (often in coordination with allies) and guidance documents. Content types include: incident reports (e.g. “NCSC statement on incident X”), threat trend analyses, and practical guidance pieces. They clearly distinguish between advice/guidance vs. news/threat reports.

Cadence: Weekly for the Threat Reports – typically every Friday, the NCSC posts a “Weekly Threat Report” on its website. Other advisories and news are released as needed (no fixed schedule; e.g. when there is a major vulnerability or campaign affecting the UK). The weekly report has been ongoing for years, providing a regular cadence to inform the community. NCSC also publishes in-depth annual or quarterly threat assessments, but those are separate; the weekly brief is a consistent cadence item.

Machine-Readable Feeds: Limited. NCSC provides an email subscription service where users can sign up to receive “Threat Reports and Advisories”
ncsc.gov.uk
. There is no public API or JSON feed for the weekly reports. However, the content is available via the website and an RSS feed is not obvious (the site is a modern JS-driven portal). Organizations often redistribute or discuss the content, and some third parties (and even NCSC’s CiSP platform) might mirror it. In summary, email notifications and the website are the main channels. (NCSC’s site does have an RSS feed internally, but it’s not prominently advertised; it focuses more on email updates).

Oversharing Controls: NCSC is careful to keep public reports at TLP:CLEAR. The Weekly Threat Report is explicitly “drawn from recent open source reporting”
cypro.se
, meaning they only include information already publicly available. They do not share sensitive victim details or indicators in these public-facing reports. Any sensitive incident data is handled through trusted channels like the Cyber Security Information Sharing Partnership (CiSP), which is NCSC’s vetted community platform. CiSP allows industry members to share detailed threat info under TLP:AMBER or GREEN, whereas public advisories are sanitized. NCSC follows UK government guidance on not releasing anything that could jeopardize ongoing investigations or specific organizations’ reputations. Thus, oversharing is controlled by filtering content to generic observations and advice. (They also often coordinate with law enforcement before publishing any incident-related statements, to ensure nothing sensitive is leaked.)

Australian ACSC Alerts & Advisories – Australia

Audiences: The Australian Cyber Security Centre (ASD’s ACSC) serves multiple audiences: Individuals & Families, Small & Medium Businesses, Large Organizations & Critical Infrastructure, and Government. Every alert/advisory on their site is tagged with the intended audience focus
cyber.gov.au
cyber.gov.au
. Many alerts are broadly applicable (e.g. affecting “Individuals, SMBs, Enterprises, Govt”), while some advisories (like joint technical advisories) focus on critical infrastructure and government entities. The content addresses Australian organizations and citizens, often with non-technical language for general alerts and more technical detail in joint advisories.

Content Types: The ACSC issues both Alerts and Advisories (plus an occasional Report or News piece). On their site, an Alert usually is about a specific immediate threat or vulnerability – often titled like “Alert – [Threat]” with a severity rating (e.g. Critical, High)
cyber.gov.au
. These include brief descriptions of the issue (e.g. active exploitation of a vulnerability or an ongoing campaign) and recommended actions. Advisories are sometimes more in-depth or strategic, often joint publications with international partners (for example, the “Scattered Spider” joint advisory or the PRC state-sponsored actor TTPs)
cyber.gov.au
cyber.gov.au
. Those tend to include background, TTPs, mitigations in detail. In addition, ACSC releases Weekly/Monthly Reports (e.g. the “Security Bulletin” PDFs listed on their site) which aggregate patches and incidents for the period
csa.gov.sg
csa.gov.sg
. Content is categorized by severity and type on their platform, which also provides filtering by status and audience.

Cadence: Frequent, event-driven. ACSC issues alerts/advisories whenever needed – often multiple per month. For example, in just a one-month span in 2025, there were several alerts in late August and September (NetScaler vuln alert, SonicWall exploitation alert, code repository targeting alert, etc.)
cyber.gov.au
cyber.gov.au
. The cadence responds to emerging threats (zero-days, active exploits) quickly. Additionally, ACSC has a Monthly Security Bulletin (as seen by dated PDF bulletins) which is likely a monthly cadence summary of notable vulns and patches. In summary, there’s a steady flow of content (likely weekly on average), with urgent alerts as needed.

Machine-Readable Feeds: Yes. ACSC offers RSS feeds for their advisories and alerts
cyber.gov.au
. Users can subscribe to RSS or sign up for email Alert Service updates
cyber.gov.au
cyber.gov.au
. This allows integration with feed readers or security dashboards. The ACSC site itself is a modern web portal, but they explicitly list RSS feeds for Alerts, Advisories, News, etc., indicating support for machine consumption. They also have a JSON API for partners (and a protected portal for sensitive sharing), but publicly the RSS is the main feed.

Oversharing Controls: ACSC content is crafted to inform without exposing sensitive details. Alerts often mention what ACSC “is aware of” or “has observed” without naming specific victims
cyber.gov.au
. For instance, an alert might say “active exploitation… globally; ACSC has observed targeting in Australia”
cyber.gov.au
 – this gives national context but doesn’t identify which organizations. Any IoCs (Indicators of Compromise) in public alerts are usually high-level (e.g. malware file names) or provided via links to partner reports; they avoid listing raw IPs/domains publicly. The ACSC runs a Partners Portal (login required) for more sensitive incident exchange, so presumably, detailed incident data or TLP:AMBER info stays there. All public advisories are effectively treated as TLP:CLEAR – they focus on remediation guidance (what to do) rather than raw technical data that could aid attackers. The ACSC also applies a time-lаг for reporting ongoing incidents – they will warn that something is happening (like “increased targeting of code repositories”
cyber.gov.au
) but only provide details safe for public dissemination. In joint advisories with the FBI/CISA, the content is approved for public release, often after initial incident response is done. In summary, oversharing is mitigated by: using aggregated data, no victim names, and routing sensitive info through closed channels (ASD’s Cyber Portal).

Singapore CSA Alerts & Ransomware Portal – Singapore

Audiences: The Cyber Security Agency of Singapore (CSA) caters to both the general public and businesses/CII. Their alerts and advisories aim to help “individuals and organisations stay secure online”
csa.gov.sg
. Many advisories are written for a general audience (e.g. recent scam or ransomware alerts), while some technical bulletins target IT departments (e.g. monthly patch summaries). Singapore’s approach often involves multi-agency cooperation (e.g. advisories co-issued with police). The Ransomware Portal specifically targets organizations (especially SMEs) concerned about ransomware, as well as ransomware victims looking for guidance
csa.gov.sg
csa.gov.sg
.

Content Types: CSA’s Alerts & Advisories cover emerging threats (malware, scams, vulnerabilities) and recommended preventive measures
csa.gov.sg
. They maintain an online catalog with categories like Advisory, Alert, Bulletin, Monthly Patch
csa.gov.sg
. For example, recent entries include alerts on actively exploited vulnerabilities (Chrome 0-day, Cisco ASA vuln)
csa.gov.sg
 and advisories on supply chain attacks or significant threats. Bulletins are often PDF summaries of many vulnerabilities (likely akin to Patch Tuesday round-ups)
csa.gov.sg
. Notably, CSA has a dedicated Ransomware Threat portal that publishes ransomware-specific alerts, trends (global and local), decryption tool links, and incident response checklists
csa.gov.sg
. That portal combines general awareness content (“what is ransomware, recent cases”) with actionable advice (“how to report, how to recover”)
csa.gov.sg
. Overall, CSA’s content mix: brief alerts on specific issues, detailed joint advisories for serious threats (sometimes in PDF), monthly compiled bulletins, and thematic portals (like for ransomware).

Cadence: Regular and responsive. Singapore CSA posts alerts frequently – in 2025 they already have dozens of alerts by October
csa.gov.sg
csa.gov.sg
. The count on their site shows 200+ items per year typically
csa.gov.sg
, indicating multiple postings per week on average. Additionally, a “Monthly Patch” bulletin is posted roughly monthly (61 bulletins for 2020–2025 suggests one per month)
csa.gov.sg
. CSA is quite prompt in alerting about major vulnerabilities (often within a day or two of vendor release, e.g. Chrome zero-day on 19 Sep 2025
csa.gov.sg
). They also produce an annual Singapore Cyber Landscape report (yearly retrospective). Cadence summary: near-daily monitoring, with at least a few alerts/advisories each month, plus monthly summary bulletins.

Machine-Readable Feeds: Partial. The CSA website (built on the “Isomer” platform) does not obviously expose RSS feeds for alerts. However, they do provide content on their site that could be scraped or accessed via their open data repository (the repository.ca.go.ke link is likely for Kenya, not SG; disregard that). The CSA site is mostly human-oriented (HTML pages and PDF links). They might use an email alert service for significant advisories (though not clearly advertised). The Ransomware portal is a static page with information rather than a feed. In short, there’s no public JSON or RSS feed explicitly available for CSA alerts. But since the content is on a government site, they might have an API for internal use. For our purposes, assume no easily available machine feed, only the web listings. (However, CSA is a member of FIRST/CIRCLE – they might share some info through international feeds under TLP:GREEN, but that’s beyond public scope).

Oversharing Controls: CSA adheres to strict info-sharing rules, often referencing FIRST’s TLP. Public advisories are effectively TLP:CLEAR. If sensitive, CSA coordinates with law enforcement and might redact details (for instance, in a ransomware alert they might say “16 organizations across 11 countries affected” but not name them
csoonline.com
). They also often issue alerts jointly with the police to ensure messaging doesn’t hinder investigations
csa.gov.sg
. The Ransomware portal specifically focuses on preventive measures and recovery resources
csa.gov.sg
 – it does not list detailed IOCs of ransomware campaigns (aside from generic descriptions), avoiding any hint that could be misused. Charts or stats provided (like number of cases 132 in 2022
csa.gov.sg
) are aggregated yearly figures, which maintain anonymity of victims. CSA likely employs a time lag for incident-based alterations: e.g., only after an incident is resolved or publicly reported do they issue an advisory (ensuring they don’t tip off attackers or expose victims prematurely). In summary, they publish only what is necessary for defense, nothing more. All content is vetted for public release (often approved by a multi-agency comms team).

Kenya National KE-CIRT/CC – Kenya

Audiences: KE-CIRT/CC (the national CERT coordinated by the Communications Authority) serves the entire Kenyan cyber ecosystem: the public, private sector, government agencies, and Critical Information Infrastructure owners. Historically, their public advisories have been aimed at general consumers and organizations to raise awareness (topics like online fraud, child safety, major malware внешности)
ke-cirt.go.ke
. As the national point of contact, they also assist constituency organizations (like telcos, banks) directly with incident response. So, the audience ranges from non-technical citizens (for basic cyber hygiene alerts) to technical staff in enterprises (for specific malware/vulnerability alerts).

Content Types: In the past, KE-CIRT’s website featured Advisories on cyber threats and scams, Alerts on specific issues, Best Practice Guides, and Quarterly Reports
ke-cirt.go.ke
. Examples of advisories include: “Blue Whale Challenge” (a dangerous online challenge) advisory, “Emotet Malware” advisory, “Sim Card Swap Fraud” advisory
ke-cirt.go.ke
. These were essentially one-page write-ups describing the issue and recommended precautions. The Quarterly Reports are more comprehensive trend reports with statistics on incident handling (e.g. number of cyber threats detected nationally). In recent times, KE-CIRT has also leveraged other channels: they reportedly send out mass SMS alerts or emails for critical threats and have an Incident Reporter mobile app
play.google.com
. Content overall includes: cyber threat alerts (scams, malware), consumer guidance, and aggregated statistics (as seen in their annual/quarterly cyber reports).

Cadence: Historically, infrequent on the public site – the last posted web advisories date back to 2018/2019
ke-cirt.go.ke
. However, that doesn’t mean they aren’t active; instead, KE-CIRT likely shifted to more direct communications (press releases, social media, SMS) for urgent alerts. They produce quarterly threat reports that summarize incident trends in Kenya (as per CA reports). For example, in Q1 2025 they noted a huge increase in detected threats and millions of “advisories” disseminated (likely automated notifications to constituencies)
bluefire-redteam.com
bluefire-redteam.com
. So, internally, KE-CIRT operates 24/7 and provides real-time warnings, but publicly visible cadence (online) has been low. With the new platform, we anticipate a more regular cadence: possibly weekly trend updates and timely advisories on national-level threats (similar to other CERTs). KE-CIRT is ramping up to issue content on a weekly basis as part of this situational awareness initiative.

Machine-Readable Feeds: Not currently public. The KE-CIRT site had an “Automated Alerts – Loading RSS feed” section
ke-cirt.go.ke
, suggesting they intended to pull in feeds (maybe from other CERTs or from their internal systems), but it doesn’t display content. They do have a Twitter (X) account
x.com
 which shares alerts (human-readable). There is no known public API or feed of KE-CIRT advisories at this time. However, KE-CIRT likely has internal machine interfaces (e.g. an email list for critical infrastructure contacts, or an API feeding telcos with threat info). For our platform, we’ll treat the current state as manual publishing only. Part of our project’s value is to generate machine-readable outputs (JSON/STIX) for Kenya advisories, which currently isn’t available.

Oversharing Controls: KE-CIRT, being government-run, is very cautious about information release. They stick to high-level advisories – e.g., warnings about global malware like WannaCry or generic threats like SIM swap fraud – and do not disclose specifics of local incidents publicly. Any sensitive incident (e.g. a breach at a Kenyan bank) is handled confidentially with that organization and sector regulators, not broadcasted. Public content remains anonymized and preventive. In the new platform, we will enforce TLP 2.0 on every submission. Likely, most contributions from partners will come in at TLP:AMBER or TLP:GREEN, and only after vetting and stripping identifying details will something be published as TLP:CLEAR. KE-CIRT will implement auto-redaction of personal data or technical indicators from anything moving to the public side. They also use aggregation and time-lag: e.g., the weekly trends dashboard will only show statistics (like “X malware hits this week in county Y”) if enough data points (k-anonymity >=7) to avoid pinpointing a single incident. Similarly, active incident reports won’t be immediately public until contained or agreed with the affected entity. Essentially, KE-CIRT’s policy is “do no harm” – no public disclosure that would negatively impact an entity or reveal identities, unless there is clear public interest and approval. All public advice is in broad strokes (e.g. “patch your systems, watch out for scam X”) with no technical details that attackers could abuse.

Cross-Site Comparison Summary

Below is a comparison of key attributes across these organizations:

Source	Primary Audiences	Content Types	Cadence	Feeds/Access	Oversharing Controls
CISA KEV (US)	IT security teams (esp. US Federal)	Catalog of exploited CVEs; patch deadlines; brief notes
armosec.io
armosec.io
.	Event-driven updates (multiple/week)	Yes – CSV/JSON downloads
armosec.io
; mailing list updates.	Only public vulnerability info (no victim data); purely TLP:CLEAR content.
NCSC (UK)	Broad (public, businesses, gov)	Weekly threat bulletins; advisories; guidance blogs.	Weekly reports + as-needed advisories	Email subs; website (no API).	Uses only open-source info
cypro.se
; sensitive details kept to CiSP (closed sharing).
ACSC (Australia)	Individuals, SMEs, critical infra, govt.	Alerts (immediate threats) w/ severity
cyber.gov.au
; joint technical advisories; monthly summaries.	Frequent (weekly-ish); no fixed day.	Yes – RSS feeds for alerts/advisories
cyber.gov.au
; email alerts.	No victim names; phrased as general warnings
cyber.gov.au
; detailed data in partner portal only.
CSA (Singapore)	Public and organizations (SMEs, CIIs).	Alerts (vulns, scams); Technical advisories; Monthly patch bulletins; Ransomware portal resources.	Very frequent (several per month); monthly bulletin.	Web pages/PDFs (no public API); possibly email list.	Anonymized stats; joint advisories vetted with police
csoonline.com
; uses TLP:CLEAR only publicly.
KE-CIRT/CC (Kenya)	Kenyan public, private sector, govt.	Cyber alerts (malware, fraud); best practice guides; quarterly threat stats reports.	Historically ad-hoc; moving toward weekly updates.	Website & social media; no current JSON feed.	Strict – no specific incident details publicly; all public info is generalized and vetted.

(See separate PDF briefs for each source and annotated screenshots in the inspiration_pack folder.)

Screenshots: The following sample screenshots (provided in the deliverables) illustrate how these agencies present information:

CISA KEV Web Catalog – showing a list of CVEs with due dates and filter options.

UK NCSC Weekly Threat Report – a blog-style page with weekly summary text (no sensitive data visible).

Australia ACSC Alert Example – an alert page with a prominent title, severity label, audience tags, and guidance.

Singapore CSA Advisory Listing – the filtered list of alerts/advisories with dates and categories.

KE-CIRT/CC Portal – the legacy advisory page (showing an example advisory title list from 2018) and the placeholder for RSS feed.

Each screenshot is annotated to highlight how content is tailored to audience and what controls (labels, limited detail) are in place. These serve as inspiration for designing Kenya’s platform content style.

2. Policy & Taxonomy Pack
Publication Policy (Draft 6 pages) – National Cyber SA Platform

Introduction & Scope: This policy governs all information submissions, handling, and publications on the National Cyber Situational Awareness Platform for Kenya. It applies to all contributors (analysts from government, parastatals, counties, CII sectors) and all content types (incidents reports, advisories, dashboards). The goal is to enable broad cyber threat awareness while protecting sensitive information, adhering to Traffic Light Protocol TLP 2.0 and other applicable laws (Data Protection Act, etc.).

2.1 Traffic Light Protocol (TLP 2.0) Implementation

Every cyber intelligence submission must be tagged with a TLP designation. The platform will enforce selection of one of the four TLP 2.0 labels – TLP:RED, AMBER (or AMBER+STRICT), GREEN, CLEAR – before an incident report or indicator is accepted. The meanings are per FIRST.org’s TLP 2.0 standard:

TLP:RED – for recipients’ eyes/ears only, no further disclosure
first.org
. This is used when the information is too sensitive (privacy, operational security) to share beyond the immediate group. On our platform, TLP:RED items are visible only to the originator and the central coordination team. They will not appear in any feeds or be shared without explicit source permission. Example use: a serious incident under active investigation where even partner agencies shouldn’t know details yet.

TLP:AMBER – limited disclosure on a need-to-know within recipient’s organization
first.org
. This implies the information can be shared with the submitting organization’s own staff or constituents under confidentiality. On our platform, TLP:AMBER submissions are visible to all vetted member analysts (since all are under the MoU and effectively part of the trusted circle), unless marked AMBER+STRICT, in which case only the intended organization (and central team) sees it. By default, we treat the entire vetted workspace community as one “organization” for TLP:AMBER sharing, to facilitate collaboration – however, if a contributor wants to restrict visibility to the coordination center only, they should choose AMBER+STRICT. TLP:AMBER info will never be published to the public portal; it may be aggregated into trends only if anonymized.

TLP:GREEN – information can be shared within the broader community but not publicly
first.org
. In practice, “community” in our context means Kenya’s national cybersecurity defense community (all participating orgs). TLP:GREEN submissions can be shared between all members on the platform, and members may further share with peers in their sector as long as those peers also respect not making it public. Green-level info might be summarized in membership-only newsletters or briefings. It will not be posted on the public website, but could influence public advisories (with all sensitive details removed).

TLP:CLEAR – public release allowed
first.org
. This is for information that carries minimal risk if widely known. TLP:CLEAR submissions (formerly TLP:WHITE) are considered publishable content. These will populate the public advisory portal directly, pending editorial review. Even when TLP:CLEAR is used, the content is still reviewed to ensure it’s written in a defender-focused way. Examples: a vulnerability alert that’s already public knowledge, general best-practice guidance, or a non-sensitive trend statistic.

Marking & Handling: All content in the system is labeled in headers/footers with its TLP status
first.org
first.org
. If printed or exported, the TLP label will be included. If a submitter omits a TLP, the default will be TLP:CLEAR, but the system prompts strongly for a deliberate choice (to avoid accidents). By policy, when in doubt, use a more restrictive label and consult the coordination team. Any platform user attempting to share information outside the allowed scope (e.g. forwarding TLP:AMBER details to an external person not in their org) is in violation of this policy and the MoU – such actions will be logged and may lead to removal. Contributors acknowledge that they understand TLP definitions; a quick reference card (see Quick Reference in this pack) is provided to all users.

2.2 Remediation-Focused Content – “Defender-First” Rule

All public-facing content must focus on helping defenders fix or mitigate issues, rather than providing raw intelligence that could be misused. This means: no live indicators (IPs, domains, hashes) will be shown on the public portal. Instead, advisories should describe how to detect or confirm compromise in a generic way (“check your system for X behavior” or “apply the patch and then verify service Y is updated”). If indicators are crucial for defenders, they can be shared as TLP:GREEN/AMBER through the restricted workspace or via an attachment that only vetted members can access.

For example, if an incident submission includes a list of malicious IP addresses (TLP:AMBER), an eventual public advisory might say “malicious IP addresses associated with this campaign have been shared with ISPs and relevant providers” rather than listing them. The focus in public advisories is on what actions to take (patch, isolate, increase monitoring) and who needs to be concerned, not on technical details that aren’t actionable for a general audience. This aligns with practices of other CERTs (e.g., US CERT alerts provide mitigations and high-level indicators, but not raw data on the public site).

Our content will never include personal identifiable information (PII) of individuals affected by incidents. If a breach occurs, any PII about victims (names, contacts) is considered sensitive and will remain within incident reports (TLP:RED/AMBER as appropriate) and not in any public disclosure. Similarly, we avoid naming victim organizations in public reports unless authorized and necessary (e.g., if ODPC decides public notification is required for transparency). Generally, incidents will be described by sector (“a county government experienced X”) rather than by name.

2.3 Anonymization & Redaction Standards

To facilitate safe information sharing, the platform will include an auto-redaction feature for anything marked for publication. This feature scans text for patterns like IPv4/IPv6 addresses, domain names, file hashes, personal names, email addresses, and other fingerprintable data. Any such items are either removed or replaced with a generic placeholder (e.g., “[redacted IP]”) in the public-facing draft. The analyst preparing an advisory must review these and ensure no sensitive detail slipped through. We maintain a “redaction dictionary” – a list of terms and regex patterns to automatically redact or flag. For instance:

Internal government network domains (e.g. “mail.county.go.ke”) – auto-redacted.

Exact software version numbers that could help an attacker (e.g. “v2.3.1 build 453”) – these might be generalized (“v2.3.x” or “an outdated version”).

Unique identifiers like case IDs, ticket numbers – removed.

Any content an analyst explicitly marks with [REDACT] tags in their draft will be stripped out entirely before publishing.

The policy is that if in doubt, redact or anonymize. An editor will double-check that public advisories contain no specific indicators or sensitive data. The Quick Reference includes common examples of information to redact. Contributors should write incident summaries in a way that they could be published with minimal editing – e.g., “Customer data was accessed” instead of “1,200 records from X database containing names and IDs were accessed”. We want to instill a habit of writing for an audience appropriately from the start. The workflow in the platform also allows a “restricted details” section for each incident (visible only to vetted users) separate from the “summary” (which is intended to be publishable). This helps structure information separation.

2.4 Aggregation and K-Anonymity for Trends

When presenting trend data (charts, statistics on the public portal), we implement a k-anonymity threshold of 7. This means no statistic will be shown if it is derived from fewer than 7 distinct data points (incidents or submissions). This is to prevent someone from deducing that a particular data point corresponds to a particular organization. For example, if only 2 organizations reported ransomware in a given week, a chart of “Top 5 sectors hit by ransomware” might either omit that week’s sector breakout or aggregate it at a higher level, to avoid spotlighting those two entities. The platform’s Trends Dashboard module will automatically suppress or aggregate low-sample data. A tooltip or note will explain “Data not shown due to insufficient sample size (protecting privacy).”

Analysts generating weekly trend reports must also ensure that any narrative does not inadvertently point to a single incident. Phrases like “This week, a major bank in Kenya suffered a breach…” are not allowed in public trends. Instead, say “This week, the financial sector saw a notable breach (one of the first this quarter)…”. Only broad sector or category references will be used.

Additionally, time-delay (lag) is used: active incidents (especially if under response) will not be counted in trends until they are closed or a week has passed. For instance, if a critical infrastructure hack is ongoing, we wouldn’t include it in the “weekly count” until it’s resolved or enough time has passed to anonymize it among other incidents. This delay reduces the chance that adversaries or the public can track a live incident via our public data. It also ensures that affected parties have breathing room to manage the issue internally before any signals emerge in aggregated data.

2.5 Disclosure Timing & Approvals

No incident report will be published (even in sanitized form) without clearance from the originating entity and the necessary approvals within the workflow. By default, when a partner submits an incident, that data stays in the restricted workspace (TLP:AMBER or RED). If the central team (ICTA/KE-CIRT) believes there is broader value in issuing a public advisory (TLP:CLEAR) about that incident (for example, others could be at risk from the same threat), they will draft a sanitized advisory. Before publishing, they will seek consent from the affected entity (except in extraordinary cases where law or national interest demands disclosure – and even then, coordination with the National Computer & Cybercrimes Committee would occur).

We also implement a minimum time-lag for publishing details of an incident: generally, no public advisory will go out until at least 48 hours after detection. This gives time for initial response actions and confirmations. (An exception is if there’s an ongoing threat to others and an advisory needs to be urgent – in that case, it will be phrased without referencing the victim, focusing on the threat indicators or vulnerability, and still approved by senior officials on an emergency basis).

All public content must pass an approval checklist (the “Publish Review” step on the platform). The roles involved are: the Analyst (who writes the draft), an Editor (who checks clarity and policy compliance), a Legal/Compliance reviewer (who checks for any privacy or regulatory issues, and that we have necessary permissions), and the Publisher (who is accountable for final release – likely a senior ICTA or KE-CIRT officer). This corresponds to the workflow roles defined below (Analyst, Editor, Legal, Publisher). The platform will not allow one person to unilaterally post to the public site; it requires at least Editor and Publisher sign-off (and Legal for certain content). Each approver will mark a checkbox confirming: “I have reviewed this content for oversharing and it complies with the Publication Policy.” Only then can the advisory be published to the public portal (TLP:CLEAR) or to the members-only feed (if we decide to have a members-only bulletin for TLP:GREEN content).

2.6 Roles and Responsibilities

We define the following roles in the publication process, with corresponding responsibilities:

Analyst/Contributor (Role: Analyst): A vetted user (e.g., a cybersecurity officer from a county or agency) who submits incident reports and drafts advisories. Responsibilities: Input accurate information with correct initial TLP; ensure summaries are as non-sensitive as possible; apply suggested redactions; classify the incident using the agreed taxonomy (see Taxonomy section); and respond to editors’ follow-up questions. Analysts essentially feed the system with raw data and initial write-ups.

Content Editor (Role: Editor): A small team (likely at KoTDA/ICTA central) who reviews drafts. Responsibilities: Check that the content is written clearly in plain language (jargon minimized), that it adheres to this policy (no disallowed details), and that the remediation guidance is actionable. Editors also standardize formatting, apply the style guide (house style: neutral, modern, in Kenyan context), and ensure that references/citations are added if needed. They might send drafts back to analysts with queries or fixes.

Legal/Compliance Officer (Role: Legal): This person (or team) ensures the content doesn’t violate any laws or rights. Responsibilities: Verify that no personal data is included in violation of data protection laws (ODPC would be particularly sensitive to breach notifications); confirm that publishing the info won’t defame or unduly alarm; ensure that if it’s vulnerability info, it’s coordinated with vendors (no 0-day release without permission); and that appropriate approvals from affected parties are documented. Legal also checks that TLP usage is correct (e.g., we’re not accidentally upgrading something from AMBER to CLEAR without consent). They essentially give the “green light” that we are safe to publish from a legal standpoint. (Their approval might not be needed on every routine advisory, but definitely on ones that involve incidents or potential impact on organizations’ reputations.)

Platform Manager/Publisher (Role: Publisher): The authority (e.g., ICTA’s head of cybersecurity or KE-CIRT coordinator) who has final say and pushes the “Publish” button. Responsibilities: Assess the broader impact – is this advisory aligned with national interests? Does it meet quality standards? They double-check that Editor and Legal have signed off. The Publisher also handles scheduling (maybe deciding to publish at a certain time of day, or bundling multiple advisories, etc.). Once satisfied, they authorize release to either the Public Portal (if CLEAR) or the Member Feed (if GREEN). The Publisher role is accountable for what goes out, so they ensure everything above has been done diligently.

System Administrator (Role: Admin) – optional: Responsible for managing user accounts/SSO, configuring the platform (like managing taxonomy lists, TLP enforcement rules), and monitoring that data is compartmentalized correctly. While not directly part of content approval, the Admin ensures the platform’s settings enforce this policy (for example, that a TLP:RED item truly isn’t visible to others, etc.).

(Note: In our pilot, several of these roles may be held by the same person due to limited staff – e.g., the central team might act as Editor, Legal, and Publisher collectively. But the workflow still requires the checks at each stage, even if it’s the same individual doing multiple steps.)

2.7 Incident Taxonomy Recommendation

To ensure consistent classification of incident reports, we will adopt a standard incident taxonomy. We recommend using the ENISA / TF-CSIRT “Reference Security Incident Classification Taxonomy (RSIT)”, which is widely used in CERT communities. This taxonomy provides high-level categories and subcategories for incidents. For example, top-level categories include: Intrusion Attempts, Malicious Code, Availability (DoS), Information Gathering, Information Leakage, Fraud, Content Security, etc. Each has subtypes (e.g., Malicious Code -> Virus/Worm, Trojan, Ransomware; Fraud -> Phishing, Identity Theft; Intrusion -> Privilege Escalation, Brute Force, etc.).

Using this common taxonomy will let us map our data to international reports and facilitate meaningful stats. It also aligns with what FIRST.org recommends, making our data easier to share (under TLP) with other CSIRTs.

We will map our platform fields to this taxonomy as follows:

In the incident submission form, the field “Incident Type” will be a dropdown or multi-select that corresponds to the RSIT categories. The analyst must choose one primary category (and maybe a subtype if applicable). For example: Category: Malicious Code; Subcategory: Ransomware. Or Category: Availability; Subcategory: DDoS. If unsure, pick the closest match.

We will provide a reference sheet of definitions for each category to guide selection. Analysts should also tag the incident with relevant keywords if needed (but the structured category is mandatory).

On the backend, we maintain a mapping table: e.g., if Incident Type = “Malware – Ransomware” that maps to a code (like Malicious Code.Ransomware). Our data model in OpenCTI/MISP will store this as a classification property of the Incident SDO (in STIX, possibly using a custom field or the “labels” property on the Incident object).

When generating metrics for the Trends dashboard, we group incidents by these taxonomy categories. This helps answer questions like “Which categories of threats are most prevalent this quarter?” with consistent terminology.

We considered alternative taxonomies (like VERIS, or the CARO malware naming for malware types), but RSIT is succinct and already widely adopted by CSIRTs in Europe and beyond. It’s also extensible: if needed, we can add a local flavor (for instance, under Fraud we might add a specific subcategory for “Mobile Money Fraud” if that’s prevalent in Kenya). The taxonomy quick reference will be included as an annex in the policy document.

2.8 Quick Reference Summary (1-page)

(The policy document includes a one-page Quick Reference Guide that can be printed and kept at analysts’ desks. It condenses the key rules in bullet form. The content of that is also provided as a separate PDF. It includes:)

TLP 2.0 at a Glance:

RED – Not to be shared beyond specified recipients (e.g., face-to-face meeting only). Use for highly sensitive info.

AMBER – Share within your org on need-to-know (Amber+Strict = within org only). Use for sensitive incidents requiring internal action.

GREEN – Share with peers/community but NOT public. Use for general situational awareness among trusted community.

CLEAR – Share freely, public OK
first.org
. Use for information safe for public release.
(Remember: when in doubt, choose more restrictive. You can always downgrade later with approval.)

Before Publishing Checklist:

✅ No IPs/domains or exact IOCs in public text.

✅ No PII or names of victims.

✅ Incident described in aggregate terms (sector, not organization name, unless approved).

✅ Redaction tool run and all flagged items resolved.

✅ At least two approvers sign-off (Editor/Legal).

✅ TLP:CLEAR label applied on final content (and on document header/footer) for public advisories.

Handling of Submissions:

TLP:RED – only you and central team can see.

TLP:AMBER – visible to all members (treat as internal-only info) – do NOT forward outside platform!

TLP:GREEN – can discuss with other vetted orgs, but not on social media or press.

Violation of TLP rules = removal from platform (trust is paramount).

Taxonomy Tags:

Choose one: Intrusion, Malware, Phishing, Web Defacement, Fraud, Availability/DoS, etc.

If multiple apply, list secondary in description.

Use provided definitions sheet if unsure.

Contacts for Questions:

For classification or TLP guidance: contact Platform Coordinator (email xyz@icta.go.ke).

For legal/privacy: contact ODPC rep or Legal at <contact>.

For technical support: contact Admin via platform chat or <support email>.

This one-pager ensures everyone quickly recalls the rules without needing to read the full policy every time. The complete policy (6 pages) will be circulated to all participants and formalized under the MoU.

(The PublicationPolicy.pdf and QuickRef_TLP.pdf are provided in the deliverables/policy directory.)

3. Data Model & Integration Plan
3.1 STIX 2.1 Data Model – Core Objects & Relationships

To enable interoperability and structured threat info, we base our data model on STIX 2.1 (the structured threat information expression standard). We will use a minimal set of STIX Domain Objects (SDOs) and Relationship Objects (SROs) to represent our key entities:

Vulnerability (SDO): Represents a software/hardware vulnerability (usually identified by a CVE ID). Fields: name (CVE identifier or short name), description (summary of vuln), external_references (e.g. NVD or vendor advisory links), etc. We will create a Vulnerability object for any CVE we reference (especially those in our “KEV Kenya” list or mentioned in advisories).

Relationships: Vulnerability → related-to → Advisory (if an advisory covers that vulnerability). Also potentially Vulnerability → related-to → Incident (if an incident involved exploitation of that vuln).

Incident (SDO): STIX 2.1 reintroduced an Incident object to capture cyber incident details. We will use it to represent specific incidents reported by partners. Fields: name (brief title), description (summary of what happened, sans sensitive data if possible), incident_types (this maps to our taxonomy categories, e.g. “ransomware” or “phishing”), first_seen, last_seen (timelines), severity (we might use a custom field or marking to indicate our 1-3 severity rating). We will also attach the TLP marking to the Incident object itself for access control.

Relationships: Incident → has <indicator> → Indicator (for any IOCs associated). Incident → attributed-to → Threat Actor (if we identify one; although tracking threat actors is not a primary goal now, in future OpenCTI can link to known actor profiles). Incident → targets → Identity (if we want to denote the victim organization or sector; more likely we’ll specify sector as a custom field or Identity object for sector).

Indicator (SDO): Represents an atomic IoC (e.g., an IP address, file hash, domain pattern). Fields: pattern (STIX patterning language, e.g. [ipv4-addr:value = '203.0.113.5']), pattern_type (usually STIX), valid_from etc. Each Indicator can carry a description (like “C2 server IP observed in malware X”). We will mark each Indicator with the same TLP as the incident it came from (or more restrictive). Many indicators will be ingested from MISP or contributed by CTI sources.

Relationships: Indicators can be linked to Incidents (Indicator → indicates → Incident) in STIX parlance
bluefire-redteam.com
. Also, an Indicator might be related to a Malware object if we catalog malware separately (though not in minimal set). For now, we might not explicitly model Malware or Threat Actor as separate objects due to scope – we can just use Incident and description fields.

Advisory (could be modeled as STIX Report or Note SDO): STIX doesn’t have an “Advisory” object out-of-the-box. We have two choices:

Use Report (SDO) – A Report in STIX is a collection of information grouped together, like an intelligence report. We can treat each published advisory as a STIX Report with a name (title of advisory) and description (the content of the advisory). It can have object_refs linking to other STIX objects it mentions (like Vulnerabilities, Indicators, etc.). We can also tag it with report_types (e.g. “advisory”).

Or use Note (SDO) – A Note is a comment on another object. This is less fitting unless we attach advisories as notes to incidents. Probably better to use Report for a standalone advisory.

We will use Report SDO to represent our advisories and weekly trend bulletins. Fields: name, description (which might contain the text or a summary), report_types (we can define types: “advisory”, “trend-report”, “kev-list”), published (timestamp), and references to related objects. For example, a “Spring4Shell Advisory” report might reference the Vulnerability object for CVE-2022-22965 and an Indicator object if we include any detection pattern.

Relationships: Not explicit relationships, but the Report’s content is essentially the linkage. We may also create custom Relationship objects like “mentions” or “remediates” between an Advisory (Report) and a Vulnerability to say this advisory provides remediation for that vuln.

Relationship Objects: We will minimally use relationship to connect the above:

“related-to” – a generic link we’ll use in many cases (OpenCTI will often show generic relationships if specific ones not used).

“indicates” – Indicator to Incident.

“attributed-to” – Incident to Threat Actor (for future use if needed).

“targets” – Incident to Identity (where Identity could represent a sector or org; we might represent each sector as an Identity object of type “Organization” or better “Sector” via identity_class).

“has” or “contains” – not a standard STIX verb, but conceptually Report (Advisory) contains indicators or details. In STIX, we’d list them under object_refs rather than a relationship.

“remediates / mitigates” (custom relationship between Advisory and Vulnerability possibly).

Given our limited scope, we likely do not need the full kill-chain or course-of-action objects at MVP. We might later incorporate Course of Action (COA) SDO for recommended mitigations. But initially, mitigations can just be described in the advisory text.

All these objects will be assigned Marking Definitions for TLP. STIX has a defined way to mark objects with TLP:CLEAR/GREEN etc. We will ensure each object created carries the correct marking so that when sharing via TAXII, access control can be applied.

Diagram (logical): Vulnerability ←(mentioned in)→ Advisory (Report) ←(describes mitigation for)→ Incident →(has)→ Indicator. If we visualize: one or more Incidents might feed into an Advisory (e.g., multiple phishing incidents lead to one advisory on a phishing campaign). And one advisory could mention multiple vulnerabilities (like our KEV list advisory covers 10 CVEs). So it’s many-to-many relationships in some cases.

3.2 TAXII 2.1 Collections – Public vs Restricted Feeds

We will set up two main TAXII collections for data dissemination, aligning with our two-surface model:

Collection 1: “KenyaCyberSA-Public” – This will contain TLP:CLEAR information only. It will be the feed that powers the public portal’s content and that can be shared with any external party or even published openly. In this collection, we will publish STIX objects like:

Published advisories (as Report SDOs with TLP:CLEAR marking).

Vulnerability objects for the KEV Kenya list (marked CLEAR, since that list will be public).

Possibly Indicator objects that are already public or derived from open sources (though likely we won’t include raw indicators in public feed).

Trend reports (maybe represented as Report SDO as well).
Essentially, this is the sanitized public threat intelligence feed for Kenya. TAXII clients (like another CERT or an IIoT SOC) can subscribe to pull these advisories automatically.

Collection 2: “KenyaCyberSA-Members” – This collection is restricted to vetted partners (those with platform access). It will contain TLP:AMBER and GREEN information. This includes:

Incident SDOs shared by members (with their TLP markings). For example, a TLP:GREEN incident report about a malware infection at a county.

Indicator SDOs (with markings) that are shared among members for defensive purposes.

Draft or embargoed advisories (maybe we represent them as STIX Reports marked GREEN if we want to share pre-publication with members).

Enriched threat intelligence from OpenCTI/MISP that’s not for public, like specific TTP notes, actor info if we ingest any.

This collection will be hosted on a secure TAXII endpoint requiring auth. Only organizations under the MoU will get credentials. Even within it, TLP:AMBER data implies they should not redistribute outside their org. We rely on policy adherence rather than technical segmentation at the TAXII level (TAXII itself can filter by marking if needed; we might configure it to not serve TLP:AMBER to those who aren’t supposed to get it, but since all in this feed are authorized, it’s fine).

Additionally, we might configure sub-collections or channels:

Possibly a separate collection for Indicators (if we want to feed just IOCs to automated tools). E.g., “KenyaCyberSA-IOC-feed” (members only). But this might be overkill; we can include indicators in the main members feed since STIX allows filtering by object type.

A collection for KEV Kenya specifically: Since KEV is static-ish data, we could also publish it via a dedicated TAXII collection or as static files. However, to mirror CISA, we’ll likely just provide a JSON/CSV download on the portal rather than require TAXII for that.

Collection Access and Hosting: We plan to host these TAXII 2.1 collections on the platform backend (could be as simple as OpenCTI’s native TAXII server or a separate implementation). The Public collection might even be exposed without auth (read-only) since it’s all public data – akin to how CISA’s feeds don’t require auth. The Members collection will require authentication (e.g. certificate or token) to ensure only vetted orgs pull it. KoTDA/ICTA will control access keys.

We will document the base URL, collection IDs, and authentication method in TAXII_Collections.md for consumers. For example:

TAXII API Root: https://csa.icta.go.ke/taxii/
Collections:
  - KenyaCyberSA-Public (id: 0a12-...-public)
  - KenyaCyberSA-Members (id: 0a12-...-members) [Requires Auth]


And note supported filters (if any) and update frequency.

3.3 Integration: OpenCTI ↔ MISP Mapping

Our tech stack uses both OpenCTI (an intelligence knowledge base platform) and MISP (Malware Information Sharing Platform) for threat data. We need to ensure they interoperate via connectors, using STIX/TAXII as common language.

Data Flow: We envision:

MISP will be used primarily for indicator management and sharing. Partners or automated feeds (like Malware information, URL blocklists) can go into MISP. MISP events can then be imported to OpenCTI for context.

OpenCTI will serve as the central repository for all structured info (including the STIX objects for incidents, advisories, vulnerabilities). It will be the source for our TAXII feeds.

We will deploy the OpenCTI <-> MISP connector (OpenCTI provides a connector script that can poll a MISP instance). This connector will synchronize data in both directions or at least from MISP to OpenCTI:

New MISP Event → becomes a STIX bundle ingested into OpenCTI.

If we create a case/incident in OpenCTI with indicators, we may push it to MISP as a new event for those who prefer the MISP interface. (OpenCTI has “MISP export” connectors too.)

Field Mapping Table: We will map key fields between OpenCTI (which is STIX under the hood) and MISP (which has its own schema of events, attributes, objects). See below:

Concept	OpenCTI / STIX Representation	MISP Representation
Incident (case)	STIX Incident SDO (with custom fields for status/severity)	MISP Event (with Event Title = incident name, Event Tags for taxonomy like “IncidentType:Phishing”; TLP tag)
Indicator (IOC)	STIX Indicator SDO (pattern, type)	MISP Attribute or MISP Object (e.g., an attribute for an IP, or a File object for hash) within an Event. TLP marking via MISP tag (e.g. tag “TLP:GREEN”).
Vulnerability (CVE)	STIX Vulnerability SDO	MISP object “Vulnerability” with attribute CVE=<id>, or simply as an attribute of type “vulnerability”. MISP might store CVEs as attributes in an event describing the vuln advisory.
Advisory (report)	STIX Report SDO (type “advisory”) with object_refs	MISP Event titled e.g. “Advisory: [title]” with the advisory content perhaps in the “Analyst Notebook” or as an attachment. Alternatively, a MISP Event could represent an advisory with relevant attributes (like related CVEs as attributes, links as attributes, etc.) and a PDF attachment of the advisory text.
TLP Marking	STIX Marking Definition on objects (e.g., object.marking = TLP:GREEN)	MISP Tag on Event/Attribute (MISP has built-in TLP tags). The OpenCTI connector maps STIX markings to MISP tags and vice versa.
Sector / victim org	STIX Identity (identity_class “organization” or “sector”) related to Incident	MISP Event “Targeted Sector” tag or a custom attribute. (We might configure a MISP taxonomy for sectors, e.g., tag “Sector: Government”).
Relationships (Incident -> Indicator, etc.)	STIX Relationship objects (incident->indicator)	In MISP, relationships are implicitly through event grouping: an Event contains indicators related to that incident. MISP Galaxy clusters could also link things (but probably not needed). The OpenCTI connector will reconstruct relationships when pulling from MISP by bundling attributes under the event context.

Connectors and Sync Frequency:

We will run the OpenCTI-MISP importer on a schedule (e.g. every 5 minutes or near real-time via streaming) to fetch new or updated MISP events. The connector uses MISP’s REST API or Kafka to pull events and convert them to STIX for OpenCTI. We’ll configure it to filter by certain MISP tags or galaxies if needed (for example, only import events tagged “Kenya” or from a particular MISP community group, if our MISP is connected externally). But initially, since it’s our MISP, we can import everything and use internal tagging to distinguish.

Conversely, an export push: For example, when an advisory is published in OpenCTI, we could have a connector create a corresponding event in MISP (for those who only use MISP). We might do this for Indicators specifically: e.g., if an advisory includes some IoCs שהם we want to share with the community in MISP format, push them. This could be triggered manually by an analyst (e.g., “Export IoCs to MISP” button on a case).

Dedupe strategy: The risk is the same data appearing twice. E.g., a partner might input an incident via MISP and also via the platform form. To mitigate duplicates:

We will encourage using one path (the platform form ideally). If MISP ingestion is on, we might restrict partners from directly creating events in MISP to avoid confusion.

The connector can use IDs or hashes to avoid duplicating indicators. OpenCTI has an internal de-dup mechanism (like merging identical indicators or vulnerabilities). For instance, CVE-2023-1234 from two sources will be recognized by its external_reference and not duplicated.

We’ll set clear naming conventions: e.g., if a MISP event has an “external_id” or “Incident ID” that matches an OpenCTI case ID, we map them. The connector can be configured to update existing OpenCTI objects if there’s a match on some key (like incident name and date).

We might use the dedup logic in OpenCTI for indicators (it often checks the indicator pattern value uniqueness).

Specific Field Mappings: (From OpenCTI perspective)

TLP markings: The OpenCTI MISP connector maps MISP’s “TLP:XXX” tags to STIX marking definitions with the matching name
first.org
. We must ensure our MISP has TLP 2.0 tags (including the new CLEAR and AMBER+STRICT). We’ll likely add tags in MISP for “TLP:AMBER+STRICT” since that is new.

Identity / Sector: We will create STIX Identity objects for each sector (Gov, Finance, etc) or use the “Sector” vocabulary in OpenCTI. MISP doesn’t have first-class sector, but we can tag events e.g. Sector::Government. The connector can transform that into an Identity in OpenCTI linked to the incident.

Indicator types: MISP attributes have types (ip-src, domain, sha256, etc). The connector knows how to convert common ones to STIX indicator patterns. If an attribute is an IP, it becomes an Indicator with pattern [ipv4-addr.value = 'x.x.x.x'].

Vulnerabilities: If we put CVE as an attribute in MISP (type “vulnerability”), the connector will produce a Vulnerability SDO with that CVE ID. We should verify this in testing. Alternatively, we might rely on OpenCTI’s internal CVE enrichment: OpenCTI can pull CVE details from NIST NVD or other sources if given the ID, creating a vulnerability entity with description. We will leverage that for KEV entries.

Tools Integration beyond MISP:

We plan to integrate OpenCTI’s connector to the CISA KEV feed as well. OpenCTI has a built-in connector to fetch CISA KEV JSON regularly and import those vulnerabilities marked as “Known Exploited”. We will use that to keep our vulnerability list updated, then augment it with Kenya-specific fields (like recommended deadlines).

Similarly, we might use connectors for other open feeds (like AlienVault OTX for indicators, etc.) but those can be decided later. For now, main integration is MISP and KEV.

3.4 “KEV Kenya” Mirror Specification

One deliverable of our platform is a “KEV Kenya” Must-Patch Vulnerability List, mirroring the concept of CISA’s KEV but tailored to Kenya’s context. This will be a publicly available list (TLP:CLEAR) focusing on vulnerabilities known to be exploited that are relevant in Kenya (e.g., affecting tech widely used in Kenya or observed in local incidents).

Data fields: We propose the following fields for each entry:

cve – CVE ID of the vulnerability (string).

vendor – Vendor or project name (e.g., Microsoft, Oracle, Apache).

product – Product name (e.g., Windows 10, Exchange Server, Struts2).

vulnerability_name – (Optional) a short name or description (e.g., “Microsoft Outlook Privilege Escalation”).

description – (Optional in the list; not in CSV to keep it lean, but in JSON) a brief summary of the vuln nature.

status – the status or priority in our context. We’ll use “Exploited” for those we have evidence are actively exploited in the wild (like CISA’s list), and possibly “High” for others we consider high severity must-patch (even if not yet observed exploited in Kenya). However, to keep consistency, we might include only exploited ones. Since the prompt explicitly allows “High”, we will include some that might not have confirmed exploitation but are critical (like might include if say a big vendor calls something critical).

date_added – date we added it to our list (so people know recency).

deadline – Patch deadline for Kenyan entities (date by which we recommend patching). We might set a default of e.g. 2 weeks from date_added for critical government systems, or vary based on severity (exploited critical vulns might get a 7-day deadline). This is analogous to CISA’s dueDate but tailored.

reference – source of our info, e.g., either “CISA KEV” if it’s also in CISA’s catalog, “Vendor” if we got it from a vendor advisory or other sources. If CISA KEV listed it, we’ll use that as a reference (since CISA KEV entries are by definition exploited somewhere). If not, but we know of exploitation via, say, the Kenyan national SOC, we might reference “KE-CIRT” or “Local”. For now, likely sources: “CISA KEV”, “Vendor Advisory”, or “Research Report”.

kenya_context – a JSON object (not in CSV, but in JSON) with:

sectors – list of sectors in Kenya particularly affected or at risk (e.g., ["Government", "Financial"] if we know those sectors use the product extensively or were targeted).

recommended_deadline – a date or timeframe recommended specifically by local authorities if different from the general deadline. (This might often be the same as deadline field above, but we include it to highlight if, say, government has an even shorter internal deadline).

Possibly observed_in_Kenya (boolean) – whether exploitation has been seen in Kenya specifically. (We can infer from sectors list if non-empty, but maybe explicit).

We will maintain the list as both CSV and JSON. The CSV is useful for quick view and for organizations to import to Excel, etc., while the JSON is more structured for integration (and could follow a schema similar to CISA’s).

JSON Schema: We provide a JSON Schema file kev_kenya.schema.json that defines the structure as described. In simplified form: an array of objects where each object has the fields above. The schema enforces cve (string), vendor (string), product (string), status (enum Exploited/High), deadline (date), reference (string, perhaps enum of sources), and kenya_context (with sectors array of strings and recommended_deadline date, both optional).

For example, an entry in JSON might look like:

{
  "cve": "CVE-2025-12345",
  "vendor": "Microsoft",
  "product": "Exchange Server 2016",
  "vulnerability_name": "Exchange EoP Vulnerability",
  "date_added": "2025-09-10",
  "status": "Exploited",
  "deadline": "2025-09-30",
  "reference": "CISA KEV",
  "kenya_context": {
    "sectors": ["Government", "Telecom"],
    "recommended_deadline": "2025-09-25"
  }
}


(If a field like vulnerability_name or kenya_context is not available for some entries, it can be omitted or left blank in CSV.)

CSV Format: The CSV will have a header and one row per vulnerability. Columns:
CVE, Vendor, Product, Status, DateAdded, Deadline, Reference, Sectors, RecommendedDeadline.

Sectors can be a semicolon-separated list if multiple (e.g., “Government; Financial”).

Dates in ISO format (YYYY-MM-DD).

If RecommendedDeadline differs from Deadline, we put it; otherwise can repeat or leave blank.

Sample (10 recent CVEs): We’ll prepare an initial CSV with 10 entries. For instance:

CVE,Vendor,Product,Status,DateAdded,Deadline,Reference,Sectors,RecommendedDeadline
CVE-2023-3519,Citrix,NetScaler ADC and Gateway,Exploited,2025-10-01,2025-10-15,CISA KEV,"Government;Financial",2025-10-10
CVE-2023-23397,Microsoft,Outlook,Exploited,2025-09-15,2025-09-30,CISA KEV,"Government;Financial",2025-09-25
CVE-2023-34362,Progress,MOVEit Transfer,Exploited,2025-08-01,2025-08-14,CISA KEV,"Financial;Healthcare",2025-08-10
CVE-2023-36884,Microsoft,Office & Windows,Exploited,2025-07-20,2025-08-04,CISA KEV,"Government",2025-07-30
CVE-2023-27997,Fortinet,FortiOS (SSL-VPN),Exploited,2025-07-01,2025-07-14,CISA KEV,"Telecom;Government",2025-07-10
CVE-2023-23752,Joomla!,Joomla CMS,High,2025-10-01,2025-10-20,Vendor,"Public;Government",2025-10-15
CVE-2023-36802,Adobe,ColdFusion,Exploited,2025-09-05,2025-09-19,CISA KEV,"Education;Financial",2025-09-12
CVE-2022-47966,Zoho,ManageEngine,Exploited,2025-08-15,2025-09-01,CISA KEV,"Energy;Telecom",2025-08-25
CVE-2023-44038,Drupal,Drupal Core,High,2025-10-03,2025-10-17,Vendor,"Government",2025-10-17
CVE-2023-4988,Oracle,WebLogic,Exploited,2025-09-10,2025-09-24,CISA KEV,"Financial",2025-09-20


(This is illustrative: includes a mix of exploited and high-priority vulnerabilities. “High” ones like the Joomla and Drupal example might not be confirmed exploited but are critical to patch due to severity in Kenyan context.)

Workflow: The KEV Kenya list will be maintained by the platform admins (with input from KE-CIRT analysts). We will ingest data from sources like CISA KEV (via their JSON) and cross-check with local incident reports. When CISA adds a new KEV, we consider if it’s relevant here. If yes, we add to our list with similar deadline (or adjust). We’ll also listen to reports from local orgs – if a vuln is being actively exploited in Kenya but not on CISA’s list (perhaps a localized software or regional threat), we can add it (with reference “Local Report” or similar). Each entry’s sectors field helps Kenyan orgs identify if it likely affects them (e.g., if “Telecom” is listed, telecom companies should pay extra attention).

Publishing format:

The JSON file (kev.json) will be available on the public portal for download (and via the API/TAXII maybe).

The CSV file (kev.csv) will be similarly available for those who prefer spreadsheets.

The portal’s KEV page will visually display the list in a table with filters (as per requirements) and offer these files for export.

We align the JSON schema to be similar to CISA’s (for interoperability) but extended with our kenya_context. We will version the schema (v1.0 initially).

All KEV Kenya entries will be TLP:CLEAR by default (since the goal is public awareness). If there’s a truly sensitive vuln we don’t want public, it wouldn’t be in KEV Kenya; it’d be handled quietly with specific orgs (and likely wouldn’t meet the KEV inclusion criteria anyway).

(Files provided: STIX_Model.md with more details on object properties, TAXII_Collections.md with configuration and access info, kev_kenya.schema.json, and kev_kenya.sample.csv with 10 sample entries as above.)
armosec.io
first.org

4. Stakeholder Onboarding Kit
4.1 Memorandum of Understanding (MoU) – 3-page Legal-lite Draft

Title: Memorandum of Understanding for Cyber Threat Information Sharing
Parties: This MoU is made between ICT Authority (ICTA) and Konza Technopolis Development Authority (KoTDA) (jointly operating the National Cyber Situational Awareness Platform) and the undersigned Participant Organization (e.g., Office of the Data Protection Commissioner, County Government of ___, [Name of CNI Company], etc.).

Purpose: To establish a collaboration framework for sharing cyber threat intelligence and situational awareness in Kenya. The aim is to improve all parties’ cybersecurity posture through timely exchange of information, while ensuring appropriate handling and confidentiality of shared data.

Key Terms & Understandings:

Information Sharing: The Participant will share relevant cyber incident reports, indicators, vulnerabilities, and best practices with the Platform’s coordination team and other vetted members, in accordance with the Traffic Light Protocol (TLP) classifications defined in the Platform’s Publication Policy. Likewise, the Participant will receive threat intelligence and advisories from the Platform.

Traffic Light Protocol Compliance: All shared information shall be tagged with TLP levels (RED, AMBER, GREEN, CLEAR) by the source. The recipient must handle the information according to its TLP designation
first.org
first.org
. In particular, TLP:RED information will not be disseminated further without explicit permission. TLP:AMBER may be shared internally on need-to-know, and TLP:GREEN within the trusted community, but none of these may be released publicly unless downgraded to CLEAR by the source. The Platform will assist by marking content and technically restricting access, but each Party is individually responsible for compliance.

Confidentiality & Data Protection: Information shared under TLP:RED/AMBER shall be treated as confidential information. Each Party commits to using such information solely for defensive cybersecurity purposes. They will not disclose it to any unauthorized entity (including media, the public, or vendors) without consent. Parties also agree to handle any personal data in shared incident reports in compliance with the Data Protection Act, and to anonymize personal data wherever possible (especially before it might become public).

No Liability for Voluntary Sharing: This MoU is not legally binding in the sense of enforceable obligations, but it expresses intent. The Participant sharing information to the Platform does so on a voluntary basis “as is”. While the sharing party will strive to provide accurate information, no warranties are made as to completeness or accuracy. Similarly, ICTA/KoTDA will use reasonable efforts to verify information in advisories, but cannot guarantee freedom from errors. Therefore, no party shall hold another liable for any harm or loss arising from the use of shared cyber intel, except in cases of willful misconduct or gross negligence. (Each organization remains responsible for its own cybersecurity actions/decisions.)

Roles & Responsibilities: ICTA/KoTDA (the Platform operators) will: maintain the secure workspace and portal, sanitize and distribute relevant advisories, and protect any sensitive submissions. The Participant will: designate a Point of Contact (POC) for cyber incidents, contribute reports in a timely manner (especially on significant incidents or new threats they encounter), and act on advisories received as appropriate to mitigate threats in their domain. The Participant’s POC is expected to join a bi-weekly briefing call and coordinate within their organization to respond to threats.

Use of Information: All parties agree that information gained through this partnership will be used strictly for cybersecurity defense and incident response. It will not be used for competitive advantage, punitive action, or any unrelated purpose. If a regulatory body (like ODPC) receives incident info via this platform, it agrees not to penalize the reporting organization purely based on the voluntary sharing (the spirit is to encourage openness). However, this does not exempt organizations from regulatory reporting obligations (e.g., breach notifications to ODPC) – those remain separate; this platform is supplemental and does not replace official notifications required by law.

Publication Rights: ICTA/KoTDA are authorized to publish aggregated and anonymized summaries (e.g., in weekly trend reports or advisories) derived from the Participant’s submissions, for the benefit of the community, provided that: (a) they do not identify the Participant or any individuals without consent, and (b) they adhere to the TLP constraints. Essentially, by signing, the Participant consents that the Platform may transform TLP:AMBER or GREEN submissions into generalized TLP:CLEAR advisories (with details removed) when it’s in the public interest, after coordination. The Participant will be consulted before any specific incident attributed to them is hinted at in public content.

Security of the Platform: ICTA/KoTDA will implement appropriate security measures (network security, access controls, encryption) to protect the information shared on the Platform. All users will use individual credentials (with 2FA) and must keep those credentials secure. If a compromise of the platform or an account is suspected, parties will notify each other immediately to contain any leak.

Withdrawal: This MoU is effective upon signature and remains so indefinitely, with a review annually. Any party can withdraw from the MoU with a 30-day written notice to the others. Upon withdrawal, the party will no longer receive or provide information via the Platform and must continue to respect any confidential info received while a member (for at least 2 years after withdrawal or until the info is declassified).

Non-Disclosure Clause: In summary, aside from the TLP rules, the Participant agrees to treat all information received under TLP:AMBER or RED as per a standard non-disclosure agreement (NDA). If required, a separate NDA can be signed referencing this MoU to satisfy organizational policies. But in principle, this section serves as an NDA among all signatories.

Notices and Points of Contact: Official communications regarding this MoU (e.g., change of POC, incidents about misuse of info, etc.) will be sent to: (for ICTA/KoTDA) [Name, Title, email, phone]; (for Participant) [Name, Title, Organization, email, phone]. These can be updated by written email notice.

Signatures: (To be signed by authorized representatives of ICTA, KoTDA, and the Participant organization.)

(This MoU draft is provided as MoU.docx. It’s written in plain language (“legal-lite”) but still has the essential binding intent in confidentiality. Before final, legal teams may tweak some language. But it’s meant to lower barriers to sign-on.)

4.2 “Why Join” Flyer – 1-page (PDF)

This is a visually engaging one-pager that will be used to pitch the Platform to prospective stakeholders (like a county CIO or a CNI company security head). It outlines the value proposition and benefits of joining in simple terms:

Heading: “Stronger Together: Join Kenya’s Cyber Threat Information Sharing Platform” (with ICTA & KoTDA logos and perhaps a Kenyan flag/icon to emphasize national initiative).

Body Sections:

The Mandate: A brief intro that the platform is an ICTA/KoTDA-led national program to proactively share cyber threat insights. “In today’s connected world, no one entity can see the whole picture – by sharing information, we collectively defend Kenya’s digital ecosystem.”

What You Get (Benefits):

Early Warnings: Be the first to know about emerging cyber threats targeting Kenya. Receive real-time Alerts and weekly intelligence summaries specific to our region.

Must-Patch Vulnerabilities: Access the “KEV Kenya” list – a curated list of vulnerabilities you must patch now, with local context (deadlines and which sectors are affected).

Peer Learning: Learn from incidents that happen to others (anonymously shared). Don’t wait to be the next victim – see patterns and tactics used by attackers in Kenya.

Free Tools & Resources: Leverage the platform’s dashboards and reporting tools to strengthen your own security program. (For pilot members: free training on OpenCTI/MISP usage is included.)

National Recognition: Participants will be acknowledged (with consent) as founding members contributing to Kenya’s cyber resilience. (E.g., ODPC, Machakos, Kajiado are already onboard as pilot partners – join the ranks.)

What You Contribute (Responsibilities): “Sharing is Caring – and Safe!” – Explain that members are expected to share relevant incidents or indicators they come across, under strict confidentiality:

“Report incidents anonymously and gain insights – no naming & shaming, just lessons learned.”

Emphasize trust & privacy: The platform uses TLP, so sensitive info stays secure. The flyer might have a small sidebar explaining TLP in layman’s terms (like color-coded dots with Red/Amber/Green/Clear and a one-liner about each – to assure that sensitive data won’t leak).

Success Stories (or Expectations): A quick example: “Last month, one county’s early report of a ransomware attempt helped 3 other counties immediately check and bolster their defenses – potentially preventing a similar attack.” (Hypothetical, but to illustrate value.) Another: “Through this platform, ODPC can issue timely advisories on data protection risks, and enterprises can avoid penalties by acting fast.”

How to Join: Clearly список steps:

Sign the MoU (simplified paperwork, no fees).

Nominate your Point of Contact (and up to 2 analysts for access).

Attend a quick onboarding (we provide training on using the portal and sharing info).

Start receiving intel right away!
(Perhaps present this as 4 icons with captions.)

Platform Snapshot: A couple of quick facts or a mini screenshot (if allowed in the flyer) of the dashboard or portal to make it tangible – e.g., a small graph of “weekly attacks” or the interface (no sensitive data visible, just design).

Branding & Contacts: At the bottom, logos of ICTA, KoTDA, and perhaps tagline “In partnership for a Secure Digital Kenya.” Contact info: email address for inquiries (e.g., cybersecurity@icta.go.ke), and maybe a short URL (if available) for a landing page about the project.

The tone of the flyer is positive, inclusive, and action-oriented. It should address the fear (“if I share, will I be exposed?”) by highlighting the trust framework (TLP, MoU) and the mutual benefits (“others will share with you too”).

(This flyer is provided as WhyJoin.pdf with graphical design aligned to ICTA/KoTDA branding – using their color schemes and perhaps incorporating KoTDA’s Konza “green city” motif subtly to reflect innovation.)

4.3 County Outreach Email Template – (plain text email)

This is a ready-made email template that ICTA can send to, say, County CIOs or ICT Directors to invite them to join. It’s written in a professional but inviting tone:

Subject: Invitation to Join Kenya’s Cyber Situational Awareness Pilot – {Name of Platform}

Dear {Recipient Name},

Cyber threats are on the rise across Kenya’s public sector, and we at ICT Authority, in collaboration with KoTDA, are taking proactive steps to address this. We are pleased to invite {County Name} to be a part of an innovative pilot initiative: the National Cyber Situational Awareness Platform.

As one of the leading counties in digital adoption, {County Name} stands to benefit immensely from real-time sharing of cyber threat intelligence. By joining this platform, your ICT team will gain:
– Early Alerts: Immediate notifications of cyber threats targeting Kenyan government bodies (such as new malware campaigns, phishing waves, or critical software vulnerabilities that require patching).
– Weekly Trends Dashboard: A summary of the week’s cyber incidents and trends within Kenya – so you can see the bigger picture and benchmark {County Name}’s experience against national patterns.
– “KEV Kenya” Must-Patch List: A constantly updated list of known exploited vulnerabilities, with guidance on patch deadlines, ensuring you prioritize the most critical fixes and protect county systems.
– Trusted Collaboration: Access to a restricted workspace where cybersecurity officials from national government, counties, and critical sectors share insights under the Traffic Light Protocol (TLP) for confidentiality. You’ll be able to both contribute and receive intelligence in a secure, controlled environment.

Why your participation matters: Machakos and Kajiado counties have already onboarded in this pilot. By joining, {County Name} will be at the forefront of a collective defense network. Your inputs (even a quick report of an attempted attack) could help another county avert a disaster, and vice versa. ODPC (Office of the Data Protection Commissioner) is also participating, ensuring that any data breach trends are quickly communicated and mitigated nationwide. This is a chance to directly collaborate with national experts at KE-CIRT/CC and peer ICT teams for the greater good.

How to join: It’s simple – we have attached a Memorandum of Understanding (MoU) for the pilot. It’s a light agreement primarily about keeping shared information confidential (using TLP classifications). There’s no financial cost to join. Once the MoU is signed, we will set up accounts for your designated cybersecurity point-of-contact and a small team. We will also schedule an onboarding session (we suggest a 1-hour virtual session) to walk your team through using the platform.

Next Steps:

Please review the attached MoU. We’re happy to discuss any questions or modifications – our goal is to make it mutually comfortable.

Identify the individuals (1-3 people) who will participate (ideally those in charge of ICT security or incident response in {County Name}).

Reply to this email or call us at the number below by {Date, e.g., next two weeks} to confirm your interest. We can then arrange a brief meeting to finalize and onboard.

Contact for queries: {Name}, {Title}, ICT Authority – Email: {email}, Phone: {phone}. Or simply reply to this email.

We believe this collaboration will significantly enhance {County Name}’s cyber readiness. Your leadership in this pilot could eventually shape a national roll-out that benefits all 47 counties and beyond.

Thank you for considering this invitation. Together, we can create a safer digital environment for our citizens.

Sincerely,
{Your Name}
{Title}, ICT Authority
(On behalf of the Kenya Cyber SA Platform Team)

Attachments: MoU for Cyber Information Sharing (Pilot) – PDF; “Why Join” one-pager – PDF.

(The above text is provided in County_Outreach_Email.txt. It can be copy-pasted with minor customization for each recipient. It assumes attachments of the MoU and flyer.)

4.4 Onboarding Agenda – 60-minute Session

Once a stakeholder signs up, we’ll conduct an onboarding workshop. Here’s a proposed agenda (documented in Onboarding_Agenda.md):

Title: “Onboarding Workshop – National Cyber SA Platform” (Duration: 60 minutes)
Participants: New member organization’s IT/security team, Platform representatives (ICTA/KoTDA), optionally ODPC rep if needed for trust building.

Agenda:

0:00 – 0:10 | Welcome & Introductions
– Introduce the facilitation team and participants.
– Quick round: each participant’s role (e.g., “John – County Cybersecurity Officer”).
– Recap of platform objective: “We’re here to help each other by sharing threat info safely.”

0:10 – 0:20 | Overview of Platform & Key Concepts
– Live demo: Show the Public Portal first (open index.html) to illustrate what the public sees (Advisories, KEV, trends). Explain how our advisories are structured to be actionable.
– Then switch to the Restricted Workspace (workspace/index.html). Explain that this is the private area for members. Key concept: TLP labels – reaffirm using a few examples (like in the system, show how a submission form has a TLP dropdown and what it means).
– Mention roles: as a member, they will primarily act as “Analyst/Contributor” in the system, plus read others’ contributions. The central team does editing/publishing.

0:20 – 0:35 | Hands-On Exercise: Incident Submission
– Scenario: Present a hypothetical incident (or encourage them to use a real but small incident from their experience if they have one). For example, “You detected a malware infection on 5 PCs – likely via a phishing email.”
– Walk through the “Report Incident” form (report.html) together. Explain each required field: Title, Severity (we define 1=High, 3=Low priority perhaps), TLP (choose AMBER for this scenario, since it’s internal), Sector (if multi-sector taxonomy, maybe their own sector e.g. County Government), Incident Type (from taxonomy dropdown, e.g. “Malicious Code > Ransomware” or “Phishing” depending on scenario).
– Fill in a Summary (public-safe description) and Evidence (technical details, which will stay restricted). For instance: Title: “Malware outbreak via phishing – July 2025”, Severity: High(1), TLP:AMBER, Sector: County Govt, Type: Malware.Ransomware, Summary: “5 computers encrypted by unknown ransomware variant, initial infection via a phishing email”, Evidence: “Encrypted files have .locked extension, ransom note left as README.TXT. Sample hash: [md5/redacted]. Investigating source of phishing email.”
– Have them actually input this into the form on their end (if possible), or the facilitator shares screen and types it in. Show how validation works (try submitting without a field to see error, then correct it).
– Click “Save Draft” and show how it saves (perhaps we simulate localStorage; explain that in real system it would save to server for others to see if proper auth).
– Emphasize that this info is now in the system at TLP:AMBER – meaning only the trusted group can see it. Explain that on the real platform, the central team would review this and possibly reach out for more details, but also immediately others might search for similar incidents.

0:35 – 0:45 | Exploring the Workspace
– Switch to “Inbox/Triage” view. Show the newly submitted incident in the list (if the demo is interactive, else just describe). Explain columns: severity (maybe color-coded), status (New), dedup group (for now, maybe blank or auto-assigned).
– Demonstrate clicking into a Case (workspace/case.html for the incident we added). Highlight the sections: Summary (what you filled), IOCs (if any – maybe empty now because we didn't formally add Indicators in this UI, but describe that central analysts might extract IOCs and put them there), Timeline (would log any updates or communications), Draft Advisory (the system might auto-generate a draft or the analyst can start writing a public-friendly version here).
– Show how one might add a note or update status (e.g., mark “Investigation ongoing” – if UI allows a status change, or just mention it).
– If possible, show another example case in the inbox from another source (pre-populated in demo data) – e.g. a “Phishing campaign targeting multiple counties” case from KE-CIRT. Open it and show the draft advisory maybe partly written. This so they see what a filled-out one looks like.

0:45 – 0:50 | Publishing Process Overview
– Explain that when multiple cases come in or when an incident has broader implications, the central team may draft an advisory. Walk through the “Publish Review” screen (workspace/publish.html). Show the checklist of automated checks: e.g., “2 IP addresses will be redacted – review ok?”, “Only 5 data points in chart -> won’t publish chart unless more data” (k-anonymity rule).
– Show the approval toggles (Analyst/Editor/Legal) – explain in real ops, those roles ensure quality and permission.
– Not actually publish anything in the demo, but indicate once approved, hitting “Publish to Public” would make it live on the portal.

0:50 – 0:55 | Q&A and Discussion
– Invite questions: common ones might be “Who can see what I post?” (reiterate TLP and membership boundary), “What if I post something by mistake?” (we can recall/edit or delete it, and the importance of trust to not misuse anything seen), “How quickly do I get alerts?” (explain immediate notifications via email or SMS possibly for critical alerts in future, for now maybe just via portal or email digests).
– Also discuss what types of incidents to share: encourage even “minor” ones if they seem new/unusual, plus definitely any significant attacks. Emphasize quality > quantity: a well-described report is more useful than many vague ones.

0:55 – 1:00 | Next Steps
– Ensure their accounts are set up (if this is a live onboarding after MoU, accounts should have been created; share the credentials or the process to create password).
– Provide contact info for support (if they have an incident and need help or if platform issues). Possibly mention an MS Teams/WhatsApp group if we have one for members (sometimes CERTs have a real-time chat for members under TLP:GREEN ground rules).
– Remind them of the bi-weekly virtual meeting (if scheduled) or any planned cyber drills. E.g., “We will have short sync calls on Fridays at 3pm for all pilot members to discuss that week’s major highlights – invitation to follow.”
– Thank them for joining, and express excitement that they are pioneers in this initiative.

The agenda ensures the onboarding is interactive (they actually practice sharing something) and addresses both technical usage and procedural expectations.

(File Onboarding_Agenda.md contains this agenda. Slides or live demo will accompany it during actual onboarding.)

5. MVP Requirements & Backlog

We have identified 30 user stories for the Minimum Viable Product (MVP) of the platform. They are grouped by functional area and marked with priority P0 (must-have for MVP) or P1 (highly desirable, if time permits in MVP). Each story includes acceptance criteria and notes on dependencies. Following the stories, we outline a 12-week implementation plan (6 sprints) and a draft RACI matrix for operational roles.

5.1 User Stories and Acceptance Criteria

Intake & Incident Submission:

Story: As a vetted contributor, I want to report a new cyber incident via a secure form, so that I can share important incident details with the central team and community. (Priority: P0)
Acceptance Criteria:

The system provides a “Report Incident” form with fields: Title, Description/Summary, Severity (1-3), TLP level, Sector/Industry, Incident Type (taxonomy category), Date of incident, and an attachment or evidence field (optional).

All required fields are indicated and validated (e.g., cannot submit without a title or TLP selection).

When submitted, the incident is saved in the workspace, visible in the Triage/Inbox with status “New”.

The incident’s TLP marking automatically restricts its visibility (e.g., if TLP:RED, only the submitting user and admins can see it; if AMBER/GREEN, all logged-in members can see it).

Dependency: User authentication must be in place (only logged-in users can submit). Also depends on the taxonomy list being defined for Incident Type field.

Story: As a contributor, I want to save a draft of an incident report and come back to it, so that I can compile information incrementally. (P1)
Acceptance Criteria:

There is a “Save Draft” button on the report form that stores the partially filled incident locally (for example, in localStorage or in the backend under a temp status).

The user can close the form or logout and later return to find the draft content still available (persisted).

Draft items are clearly indicated as such in the interface (e.g., in Inbox with a “Draft” status visible only to the author until submitted).

Dependency: If backend is not ready, localStorage approach works for MVP. Syncing drafts across devices is P2 (not needed now).

Story: As a central analyst, I want to auto-receive a notification when a new incident is reported, so that I can promptly review and act on it. (P1)
Acceptance Criteria:

When a user submits an incident (status changes to New), the system triggers a notification (could be an email to central team, or an entry in an “Alerts” list on admin dashboard).

The notification contains key info: title, submitting org, severity, and a link to view the incident.

Test: Submit a sample incident; verify an email was received by configured admin address (or a bell icon lit up in UI).

Dependency: Email integration or at least a UI notification component. (Could use a simple SMTP or just rely on central team checking the inbox regularly as interim.)

Triage & Case Management:
4. Story: As a central triage analyst, I want to see a list of all submitted incidents with key details, so that I can prioritize which to address first. (P0)
Acceptance Criteria:

The workspace “Inbox” page displays a table of incident reports with columns: Title, Date submitted, Severity, TLP, Sector, Reporter (org/user), Status (New/Under Review/Drafted/etc.), and any Deduplication Group ID.

The list is sortable (at least by date or severity).

It’s filterable or searchable by keyword (P1 if search; at minimum, the ability to filter by status or TLP is desired to quickly hide e.g. closed cases).

Example: If two incidents have severity 1 (High) and one has severity 3 (Low), and the user sorts by severity, the High ones come first.

Dependency: Need data model for incidents, and a front-end component for table. Test data available.

Story: As a triage analyst, I want to mark or group similar incident reports as duplicates, so that we avoid double work on the same incident. (P1)
Acceptance Criteria:

The interface allows selecting an incident and assigning it to a “Deduplication group” or linking it to another incident as duplicate. For example, a button “Mark as duplicate” → choose the original incident it duplicates.

Once marked, the duplicate might either disappear from main list or appear under the original as a combined entry. A “Dedup group” ID or name is shown (e.g., incidents 5,7,9 are all part of group #5 for the same campaign).

The system might auto-suggest duplicates if titles or indicators are very similar (optional, not MVP strictly).

Acceptance: Mark incident B as duplicate of A. Then Incident A should show that it has (1 duplicate) linked, and incident B’s status might change to “Duplicate of [A]”.

Dependency: Requires linking mechanism in backend. Could be done via a field “dup_group_id”. Possibly user story to allow merging content.

Story: As a case handler, I want to update the status of an incident (e.g., from New to In Analysis to Closed), so that everyone knows its lifecycle stage. (P0)
Acceptance Criteria:

Each incident/case has a status field which can be one of defined statuses: e.g., New, Under Investigation, Contained, Draft Advisory Prepared, Published, Closed. (Exact workflow statuses to be defined.)

The UI (Case View) has a dropdown or buttons to change status for authorized users. For contributors, maybe they can mark their own incidents as resolved/closed too.

Changing the status is logged in the case’s Timeline (e.g., “Status changed to Under Investigation on Oct 10 by Analyst X”).

The Inbox list updates to reflect new status and can filter by it (e.g., to see only New cases).

Dependency: Pre-define workflow states and who has permission for each transition (maybe central team can set any status, contributors can only close their own or add updates).

Story: As an analyst, I want to add internal notes or timeline events to an incident case, so that additional information (investigation updates) is recorded. (P0)
Acceptance Criteria:

In the Case View, there’s a section (Timeline/Notes) where users can post comments or updates. Each entry is timestamped and shows who wrote it.

Possibly differentiate system-generated events (like “Indicator added” or “Status changed”) versus analyst notes.

A user can edit or delete their own note (maybe editing allowed within short time, deletion only by admin to maintain audit log).

Example: A KE-CIRT analyst adds “Contacted county, system patched, awaiting confirmation” as a note. It appears below the initial incident description in timeline.

Dependency: This is basically a comment functionality, requires backend or at least local store. (For MVP, could just be client-side showing static timeline events from JSON if not interactive.)

Analysis & IOC Management:
8. Story: As an analyst, I want to record Indicators of Compromise (IOCs) associated with an incident (like malicious IPs, hashes), and have them kept restricted, so that I and others can use them without exposing publicly. (P0)
Acceptance Criteria:

In Case View, there’s an IOC section where one can add an indicator: specify type (IP, domain, hash, URL, etc.), value, maybe a brief note (like “C2 server” or “phishing site”).

The indicator inherits the incident’s TLP by default or can be set equal or more restrictive. (If incident is AMBER, indicator should be at most AMBER; user could set it to RED if super sensitive.)

Indicators added appear in a list form. They should also be accessible in an aggregated view for analysts (like an “Indicators” tab where you can search across all IOCs if you have permission). But if not MVP, at least within case.

The system might perform a simple validation (e.g., check IP format, or ensure hash is hex). Not mandatory but nice.

Dependency: TLP marking logic, indicator data model. Also if integrating with MISP/OpenCTI, maybe not immediate in MVP but design accordingly.

Story: As an analyst, I want to link an incident to known threat entities (like a known malware or threat actor), so that context is captured. (P1)
Acceptance Criteria:

On a case, I can choose to tag it or link it to e.g. “Malware: Emotet” or “Actor: APT28” if applicable (perhaps via a dropdown or tag system populated from a knowledge base).

This is more advanced – likely requires pre-populated knowledge (OpenCTI can hold actor and malware profiles). We might skip actual linking in MVP due to complexity. Or implement simply as tags (free-form or from a list).

If tags implemented: one can add a tag “Ransomware” or “APT” etc. These tags would not be for public consumption but for internal search.

Acceptable if a user can at least put such info in summary or notes for now. So this story might be deferred.

Story: As the system (analyst automation), I want to detect if an indicator from one incident appears in another, so that I can suggest linking or warn of a broader campaign. (P1/P2)
Acceptance Criteria:

If an IOC is entered (say an IP) that matches an IOC in a different case, the system flags it (maybe “Similar indicator seen in Case #12”).

Could be an alert or a visual highlight linking to the other case.

This likely depends on back-end data indexing. For MVP it can be manual (analysts eyeball for now, or we run a periodic check via OpenCTI).

Mark as stretch goal (P2) unless easy with existing platform capabilities.

Advisory Drafting & Publishing:
11. Story: As a central analyst, I want to draft an advisory based on an incident or pattern of incidents, so that I can eventually publish it to the public portal. (P0)
Acceptance Criteria:
- In the Case View, there is a “Draft Advisory” section (or button “Create Advisory from this case”).
- It provides a template with sections: Summary, What to do now (mitigations), Who is affected, How to detect/check, References. (These correspond to the advisory detail structure on public portal.)
- The analyst can fill these fields. The system might auto-fill some parts if data is present (e.g., affected product or CVE could pre-populate references). Not mandatory at MVP, manual is fine.
- The draft advisory is stored and can be edited over time. It’s by default TLP:CLEAR content (since meant for publication), but not visible to public until published. For now visible within workspace (maybe mark as “Draft-CLEAR”).
- Acceptance: Save a draft, leave page, come back and see it persisted. Possibly have versioning (not required MVP).

Story: As an editor, I want to run an “oversharing check” on the draft advisory content, so that I can ensure no restricted info is accidentally included. (P0)
Acceptance Criteria:

When preparing to publish (or at any point in draft), there’s a function that scans the draft text for any patterns: IP addresses, email addresses, etc.

If found, those are either automatically masked or at least flagged for review. e.g., “System highlights 192.168.. in text – suggests removing or anonymizing.”

The Publish Review page shows a checklist item like “✅ No IP addresses found” or “⚠️ 2 IP addresses were found and have been redacted.”

If we click to see details, it might show what was removed or ask user to confirm redaction. For MVP, we can implement a simple regex hide and a static warning message.

Dependency: This is front-end regex, fairly straightforward. Just ensure it covers common cases.

Story: As an editor, I want to validate that any statistics or charts in the advisory meet the k-anonymity threshold, so that we don’t expose outlier data. (P0)
Acceptance Criteria:

If an advisory includes a chart or data about incidents (likely the Weekly Trends advisory does), the system should require that at least 7 data points contributed to that chart.

The Trends page itself will enforce chart display only if data count >=7. For an advisory, maybe simpler: if in an advisory draft or publication process, if it references a count <7, show warning. Possibly the editor will know this from guidelines.

Perhaps easier: on Trends generation, code automatically omits categories with <7 and adds a note. That suffices.

Acceptance: For Weekly Trends generation (which might be partly automated from trends.json), ensure code has logic: e.g., “if weekly phishing_count <7 perhaps don’t show that number specifically” or if we have a sector chart with a sector that has only 3 incidents, maybe aggregate it as “Other”.

If doing manually, editor just reviews and checks off “No category with <7 incidents is disclosed”. On the Publish Review UI, include a checkbox “Sample size check passed”.

Dependency: Need data pipeline/logic for trends. Possibly not fully automated in MVP, but policy is implemented manually.

Story: As an approver (publisher), I want to see that Analyst, Editor, and Legal have approved the content, so that I can confidently publish it. (P0)
Acceptance Criteria:

On the Publish Review screen for an advisory, there are checkboxes or toggles for each role (Analyst/Author, Editor, Legal) to mark approval.

Only users with those roles can mark their checkbox. (We can simulate this by any user in demo, but in real, enforce by permission if roles defined.)

All checkboxes must be ticked (and oversharing checks passed) to enable the final “Publish” buttons.

If any are missing, the Publish button is disabled or shows a tooltip “awaiting approvals”.

We should log who approved (maybe show initials or name by the checkbox once ticked).

Dependency: Role management – or simpler, not enforce by login but assume a workflow where different people tick. In demo, we just simulate it by letting user toggle each.

Story: As the publisher, I want to publish the final advisory either to the public site or to the members feed, so that the intended audience receives it. (P0)
Acceptance Criteria:

Two distinct actions: “Publish to Public Portal” and “Publish to Members”. Public means it will appear on the public website (advisories.html list and detail page, KEV or trends if applicable). Members means it will appear perhaps in a members-only list or just remain in workspace as an advisory accessible to logged users. (Since currently our workspace is the members area, maybe “members feed” could mean an email to members or something. But MVP may focus on public publishing primarily, because members can already see the incidents in workspace.)

When “Publish to Public” is clicked:

The advisory gets a timestamp and is written into the public advisories dataset (e.g., added to advisories.json in our static site or in database).

It should now be accessible via the public Advisories page and its detail page (with the friendly fields like what/who/how sections).

Possibly triggers generation of downloadable JSON of that advisory (though we can generate on the fly).

When “Publish to Members” is clicked:

Possibly mark the case as “Published (Internal)” and notify members via email or just rely that it’s in the workspace news. Alternatively, we might have a section in workspace listing advisories that were published to members (like things that are TLP:GREEN; e.g., “Advisory – Sensitive: [Title] – only visible to logged in users”).

For MVP, perhaps we don’t need separate “members advisories” because members already see incidents. But we might simulate by just not pushing to public, meaning it remains internal.

After publishing, the system shows a confirmation and maybe the advisory detail view (public view if applicable).

Dependency: Data store for advisories and a way to re-render or refresh the public site. In a static prototype, we might manually add to JSON and require page refresh. In a dynamic env, push to DB and the portal consumes it.

Logging: maybe record in the case timeline “Published by X on Y date to [Public/Members]”.

Story: As a public user, I want to see a list of all public advisories with filter options, so that I can find relevant advisories easily. (P0)
Acceptance Criteria:

The public Advisories List page displays published advisories in reverse chronological order (newest first). For each advisory, show at least: Date, Title, maybe Severity or a short description snippet. Possibly a tag for audience or impact.

The page has filter controls: by severity level (Critical/High/Medium/Low if we have such a rating in advisories – we have a severity field from incidents, but for advisories we might just use severity of underlying issue or a general one), by intended audience (maybe tags: Gov, Public, CNI, etc., as specified in advisory data), and by date range.

The list can be paginated if many advisories (but MVP fine with 10-20 items as sample).

Clicking on an advisory leads to the advisory detail page.

Dependency: Advisories JSON and front-end logic for filtering. Already drafted in requirements and partially done in demo data.

Story: As a public user, I want to read the full details of an advisory and be able to download it in JSON format, so that I can understand the issue and possibly integrate machine-readably. (P0)
Acceptance Criteria:

Advisory Detail page shows the advisory content with clear sections: Summary (what happened), Affected/Who should act, Remediation/What to do now, Detection/How to check if impacted, References (links to patches, CVE, etc.).

It also shows metadata like date published, possibly a severity label (if applicable, e.g., if we categorize advisories by severity of risk). Also a “TLP:CLEAR” label or icon (to reinforce that this is public info).

There is a “Download JSON” button that triggers download of the advisory in JSON format (which would match a schema for advisories; could simply be the same object as in advisories.json).

The page should be printer-friendly (CSS for print) since often advisories might be printed by some offices. (This could be P1, but a simple CSS to white background and no nav for print is good.)

Dependency: Design of detail page (wired in static demo), and having an on-click function to create JSON blob and download (which we can code easily since we have the data).

Public Portal – KEV and Trends:
18. Story: As a public user (e.g., sysadmin), I want to see a “KEV Kenya” list of known exploited vulnerabilities relevant to Kenya, so that I can quickly identify which critical patches I need to apply. (P0)
Acceptance Criteria:
- The KEV Kenya page displays a table of CVEs with columns as defined (CVE ID, Product, Vendor, Status, Deadline, Reference, etc.).
- The table is filterable by fields: e.g., a text search for CVE or product, a filter for Status (Exploited vs High), maybe filter by vendor or by sector (if we want, but sector might be multiple values, maybe a multi-select filter).
- The table is sortable by deadline or CVE ID or status.
- There are buttons to export the list as CSV and JSON. Clicking CSV triggers download of the kev.csv file; JSON triggers kev.json.
- The page should clearly mention when it was last updated (we can take the latest DateAdded or have a timestamp at top).
- Dependency: We must populate a sample kev.json and csv (done in deliverables). Implement filter logic client-side (maybe by simple JS filtering).

Story: As a public user, I want to filter the KEV list to see if a specific product or CVE I use is listed, so that I can focus on relevant vulnerabilities. (P0)
Acceptance Criteria:

In KEV page, typing e.g. “Windows” in a search box should narrow the table to entries where product or vendor contains “Windows”.

If I select filter Status = Exploited, the table shows only those entries, updating counts if shown.

If filter Sector = Government, perhaps show entries where “Government” is in sectors list. (This filter is a bit advanced because sectors is a list; but we can do an “includes” filter).

The filtering should happen dynamically on the client side without page reload.

Dependency: Basic JS for table filtering.

Story: As a public user (CIO or citizen), I want to view a weekly trends dashboard that shows the current cyber threat trends in Kenya in a visual way, so that I can gauge the situation at a glance. (P0)
Acceptance Criteria:

The Trends page displays one or more charts summarizing recent data:

A line chart for something like “Phishing emails reported - last 12 weeks” or “Total incidents per week”.

A bar chart or pie for “Top Exploited Threat Categories this week” (e.g., showing counts of incidents by category for the latest week).

A bar chart for “Sector risk scores” or counts (maybe an index of which sector had the most incidents or a score).

Some statistic like “Median time from incident to advisory” or “Patch adoption % among pilots” – these could be shown as single KPI numbers or an additional chart if data available.

The charts should have labels and a legend.

There should be a note about the date range (e.g., “Trends for the week of Oct 1-7, 2025” and maybe an update date).

If any data has low sample issues, either do not show that particular chart or display aggregated. E.g., if only 2 sectors had incidents, maybe don’t list the specific sectors by name if that reveals something sensitive – instead maybe group as “Various sectors” or skip chart with a message “Insufficient data to display some charts due to privacy”.

The page should be updated weekly (for MVP, we just show static example data covering last 12 weeks). Possibly an interface to choose a different week or compare to previous week (P1 idea, not needed now).

Dependency: Charting capability – likely using Chart.js loaded locally (since no CDN). We have to include Chart.js library file or draw with Canvas manually. Using Chart.js (added to assets) is fine for MVP. Data comes from trends.json (12 weeks of data). We’ll embed that or fetch it and render charts accordingly.

Story: As a public user with disabilities or low bandwidth, I want the site to be accessible (keyboard nav, screen-reader labels, high contrast) and lightweight, so that I can access information without barriers. (P0)
Acceptance Criteria:

All pages follow basic accessibility: e.g., the navigation and tables can be navigated via keyboard (tab order logical, focus outline visible).

Images or canvas charts have alt text or descriptive text. (For trends, maybe provide a data table or summary below the chart for screen readers).

Colors meet contrast guidelines (dark theme is used but ensure text is bright enough vs background). We should test e.g., white text on dark grey background is okay.

Responsive: On small screens (mobile ~360px width), the layout stacks or scrolls properly (e.g., menu collapses to a simple icon or just a top bar). The tables might scroll horizontally or collapse into cards on mobile.

The site uses no external scripts or fonts, to minimize load and privacy concerns. (We will use system fonts or include any necessary in assets).

Page load for main pages should be within a few seconds on a standard connection (we keep assets optimized).

Dependency: Front-end design and testing. Likely manual inspection. We have a styles.css controlling things.

Story: As an admin, I want to be able to switch the site’s language to Swahili (placeholder for future), so that it’s ready for localization. (P1)
Acceptance Criteria:

A language toggle (EN/简体中文 maybe just a dummy) is present, but since content is primarily English now, clicking it might just show a message “Swahili version coming soon” or simply not functional for MVP.

This is low priority given “English is enough” from user. So we might just have a visible toggle that doesn’t actually translate for now. That signals future support.

Workspace/Admin Settings:
23. Story: As a system admin, I want to manage user access (add or remove users, assign roles), so that the right people have the right access to the platform. (P1)
Acceptance Criteria:
- An Admin/Settings page (could be simple list) showing users (name, email, role).
- Options to add a new user (enter email, name, assign role Analyst/Editor/Legal/Publisher). Perhaps just stub UI for demo since actual user management might be out-of-scope for static demo.
- Could show SSO integration stub: e.g., a dropdown “SSO Provider: [None/ADFS/Azure AD]” which is non-functional in demo but indicates that will be there.
- Admin can deactivate a user or change their role.
- For MVP demo, we might not fully implement this, just show the UI as a placeholder.

Story: As an admin, I want to configure integration connectors (like OpenCTI, MISP, KEV sync), so that the platform can import/export data automatically. (P1)
Acceptance Criteria:

On Settings, show an “Integrations” section with maybe toggle switches or status indicators for:

OpenCTI: e.g., “Connected (TAXII feed active)” or a button “Connect to OpenCTI” (non-functional in static demo).

MISP: similarly an icon or button.

KEV Mirror: a button “Sync KEV from CISA now” or a last updated timestamp for our KEV data (in demo, static).

This is largely informational in MVP (since integration is mostly backend). But we want to show that these are considered (maybe with a “last sync: Oct 1, 2025” label).

Acceptable to have static text or a disabled button.

Story: As an admin or editor, I want to update the publication policy text that is displayed or linked in the platform, so that users can read the latest rules. (P1)
Acceptance Criteria:

In Settings, a text area or link to “Publication Policy”. Possibly the admin can paste updated policy content which will reflect in a help section or be downloadable by users.

For demo, we might skip actual edit function; just provide a link to a PDF or a static page summarizing TLP rules (like a help modal).

Minimal: ensure users have access to the policy (maybe via a footer link “Policy”).

Story: As a member user, I want to access a help or tutorial section, so that I can quickly learn how to use the platform. (P1)
Acceptance Criteria:

Provide either a help page or at least tooltips on forms. Possibly a FAQ link on the menu.

Since we have onboarding separately, this could be as simple as a “Help” link to the Quick Reference PDF or to an external wiki.

For MVP, maybe a static “Help.html” with basic instructions or the quick reference.

Notifications & SLAs:
27. Story: As a central ops manager, I want an SLA in place for responding to submissions (e.g., acknowledge within 1 hour), and I want the system to track if we meet that, so that we maintain trust. (P2)
Acceptance Criteria:
- Probably outside scope of MVP implementation. But operationally, we’ll say any new incident should be first commented on or status updated within X hours by central.
- Tracking could be manual for now. We will include in RACI that central team monitors this.
- (No UI needed in MVP, aside from the notifications story which helps addressing new items quickly.)

Story: As a platform, I want to notify members of critical new advisories (e.g., via email or SMS), so that even if they are not logged in, they get the urgent info. (P1)
Acceptance Criteria:

When an advisory is published as CLEAR and marked as critical severity, an email is sent to all registered member users (and possibly a subscription list for public users if implemented).

For MVP demo, we cannot show actual email; we can show perhaps a banner “Email notification sent to members” upon publish. Or just note that an RSS feed is updated.

(This might be more a future feature, but mention as design.)

Story: As the leadership, I want to ensure the platform provides value within 3 months of development (MVP timeline), focusing on core sharing and publishing features. (This is an objective rather than a feature) – Covered by delivering above stories within 12 weeks.

Story: As a risk manager, I want to see a RACI chart for who (ICTA vs KoTDA vs Partners) is responsible for what in operations, so that roles are clear. (Operational, included in RACI doc rather than software feature.)

(The backlog.xlsx is provided with these stories, priorities, and a column for sprint allocation. Each story references dependencies which align with tasks in the 12-week plan.)

5.2 12-Week Implementation Plan (6 Sprints)

We propose a 12-week timeline to develop and launch the MVP, divided into six 2-week sprints:

Sprint 0 (Prep, 1 week before official start): Setup & Kickoff – Confirm team roles (developers, UX, etc.), set up project tools (repo, dev environment). Prep user stories and designs (some already done above). Ensure OpenCTI and MISP instances are available for dev/testing (even if not fully integrated in MVP, have them ready). This is basically week 0.

Sprint 1 (Weeks 1-2): Core Framework & Submission Form –

Implement basic front-end structure: navigation, login placeholder (for now possibly skip real auth but structure pages).

Build the Incident Report form (Story 1). Validate field behaviors. Save draft locally (Story 2).

Create a simple data structure or API endpoint for submitting incidents (for now, maybe a JSON store).

Also design the database or JSON format for incidents, advisories.

Deliverables end of Sprint 1: Working incident submission in the dev environment (data goes to a stub store), and a basic inbox page that simply lists submissions (no filter/sort yet, but proves data flow).

Dependencies: none heavy, this sets groundwork.

Acceptance: demo adding an incident and seeing it appear in a list (even if plain).

Sprint 2 (Weeks 3-4): Workspace Triage & Basic Advisory Flow –

Enhance Inbox table: sorting, filtering (Story 4).

Implement status updates on cases (Story 6) and timeline notes (Story 7).

Implement viewing a case (Case View page), showing incident details and notes. Possibly allow editing of description by central (maybe not MVP).

Start on Draft Advisory section (Story 11): allow a text draft to be saved in case. Not full template parsing but just a text box or separate fields.

Implement oversharing check function (Story 12) as a utility (maybe not UI integrated fully yet, but available to test on a text sample).

Plan out how publishing will write to public site (maybe prepare the advisories.json structure).

Possibly begin front-end for Advisory List and Detail on public side (set up pages with dummy data).

Deliverables end of Sprint 2: You can open a case, add a note, change status. A draft advisory can be written and stored. The public advisories page skeleton is present (with one sample advisory).

Acceptance: Show an end-to-end: submit incident -> central marks status, writes draft advisory (maybe just in case view) -> (simulate publish by manually copying text to public advisory page for demo).

Sprint 3 (Weeks 5-6): Publishing Mechanism & Public Portal –

Implement the Publish Review page: display the draft advisory content, show checkboxes for approvals (just UI logic, not enforcing roles in MVP). Integrate oversharing check results (scan draft text and display any warnings – Story 12 fully).

Hook up the “Publish to Public” action: for MVP, since static, this might mean appending to advisories.json and triggering a front-end refresh. In a dynamic environment, it would send to backend DB and the public API would reflect it. We'll simulate by writing to JSON.

Implement Advisory List filters properly (Story 16) and Advisory Detail with download (Story 17). Use real data from advisories.json if possible.

The JSON download for advisory can be generated on client from the data object.

Also implement the KEV page listing using a static kev.json (Story 18,19). Ensure CSV/JSON export works (we can embed the files for download).

Implement the Trends page with charts using Chart.js (Story 20). Use trends.json sample for data. Ensure the charts meet the anonymity rule (we might artificially drop one data point to test).

Add basic accessibility features (Story 21) – test keyboard nav, add alt text etc. Possibly include a skip link for screen readers.

Deliverables end of Sprint 3: All public-facing pages (Home, Advisories list/detail, KEV, Trends) are functional with sample data. From the workspace, an advisory can actually be published and then visible on public side. (We may test this by manually triggering in dev, but at least simulate it).

Acceptance: Demo scenario: a draft advisory in workspace -> click publish -> open public site and see it listed. Also show filtering on KEV and a trends chart rendering.

Note: This is a heavy sprint; KEV and Trends are somewhat independent – may allocate separate developers in parallel to implement those.

Sprint 4 (Weeks 7-8): Polish, Integration & Secondary Features –

Add finer touches: link incidents to indicators (Story 8). Possibly integrate MISP connector in test environment: e.g., have the system able to export an indicator list as a MISP event (this might be background, but we can simulate by generating a STIX bundle). If integration is too heavy, skip in MVP, but at least ensure indicator data model aligns with future integration (maybe generate some JSON for indicators to show).

Implement Notification stubs: perhaps a banner or log entry when new incident arrives (Story 3) and when advisory published (Story 28 concept).

Finalize accessibility and responsive design (Story 21). Test on a phone resolution. Fix any UI bugs (text overflow, etc.).

Implement any Admin page elements for show (Story 23,24): could be mostly static or non-functional, but build the page to meet requirements (and show roles like Editor, etc. maybe read from a config JSON).

Run a security review of the front-end (no sensitive data in public, etc.).

Prepare user documentation if needed (maybe the help page from Story 26).

Deliverables end of Sprint 4: The MVP should be essentially feature-complete and usable. Begin internal testing with pilot data. Possibly at end of week 8, do a pilot soft launch with ODPC or one county to gather feedback.

Acceptance: QA passes on all primary user stories. The team can run through a full scenario (report -> triage -> draft -> publish -> read) without issues.

Sprint 5 (Weeks 9-10): Testing, Feedback Iteration & Training Materials –

Conduct thorough testing: use test cases for each user story acceptance. Include edge cases (e.g., test TLP restrictions: ensure a TLP:RED incident truly doesn’t show up when logging as another user – if multi-user environment simulated).

Address any bugs found.

Incorporate pilot user feedback: maybe someone said the form needs an additional field or the advisory layout needs tweaks.

Work on performance optimizations if needed (though our static site should be fine).

Prepare training materials: finalize the onboarding kit pieces (maybe record a short demo video or finalize the quick reference and help content).

If any story was dropped earlier, see if we can include small ones now (maybe Story 2 if not done, or the minor language toggle etc.).

Deliverables end of Sprint 5: MVP Release Candidate deployed in a staging environment. All documentation ready (policy doc, MoU ready to sign, quick ref, etc.).

Sprint 6 (Weeks 11-12): Deployment & Pilot Launch –

Final deployment setup: ensure the static site is packaged (for offline demonstration, presumably we’ll zip it up as deliverable). If any server components (OpenCTI, MISP) are needed, ensure they are up and connected (for actual production/pilot).

Walk pilot users (ODPC, Machakos, Kajiado) through the onboarding using the kit. This will likely happen at the beginning of week 12 as a go-live exercise. Gather any last-minute issues and fix promptly.

Monitor initial usage during pilot week and be on standby to support.

Document any enhancements for post-MVP (like additional automation or scaling to more users).

Deliverables end of Sprint 6: Platform officially “goes live” for pilot partners. Collect first week of incidents/trends to validate things working. A report to leadership can be made (which coincides with the presentation deliverable).

Acceptance: All pilot partners have logged in and successfully used the system at least once (e.g., each submitted a test incident or viewed an advisory). Leadership is satisfied with the progress as presented in final slide deck.

This 12-week plan is aggressive but feasible given much of the platform is front-end and integration of proven components (OpenCTI, MISP) rather than building heavy backend from scratch. Regular check-ins each sprint with stakeholders (ICTA/KoTDA) will ensure we stay on track and adjust if needed.

(Document 12WeekPlan.md details this timeline with milestones and responsibilities per sprint.)

5.3 RACI Matrix – Roles for ICTA & KoTDA Ops

We define activities across the platform’s operation and assign R, A, C, I (Responsible, Accountable, Consulted, Informed):

Incident Intake & Triage:

Responsible (R): ICTA SOC Analyst (initial triage of incoming reports), KE-CIRT Analyst.

Accountable (A): KE-CIRT/ICTA SOC Lead (ensures every incident is addressed).

Consulted (C): Partner Org POC (for their own incidents, we consult them for details), KoTDA Cyber Ops (if needed for technical context).

Informed (I): ODPC Rep (if data breach related incidents occur, ODPC should be informed even if not directly acting).

Incident Analysis & Response Coordination:

R: KE-CIRT Analyst, Partner Org IT Sec Team (they investigate their incident, with our guidance).

A: KE-CIRT Manager (oversees that analysis is done thoroughly).

C: KoTDA Threat Analyst (KoTDA might have threat intel folks who provide additional info if needed), Law Enforcement (for certain incidents, e.g., ACSU if cybercrime evidence).

I: ICTA Director of Infrastructure (keeping leadership informed of major ongoing incidents).

Advisory Drafting & Editing:

R: KoTDA Cyber Analyst (the person drafting the text, often pulling info from incident reports).

A: ICTA Communications/Editor (accountable for the quality and clarity of advisories).

C: Subject Matter Expert (e.g., if it’s a vuln in a banking system, consult a banking sector IT expert for accuracy; or ODPC consulted for wording on data breach advisories).

I: All Partners (informed via the draft in platform that an advisory is being prepared, if TLP:GREEN draft can be visible).

Legal/Compliance Review:

R: ODPC Representative (for data breach or privacy issues in content), ICTA Legal Officer.

A: ICTA Head of Legal (accountable to approve release from legal standpoint).

C: Partner’s Legal (if the advisory involves a specific org’s incident, we’d consult that org’s legal before public disclosure).

I: Platform Project Lead (to know approval status).

Publishing & Dissemination:

R: ICTA Platform Manager (presses the publish button, executes distribution).

A: ICTA Director, Cybersecurity (overall accountable for what is released publicly).

C: KE-CIRT/Comm Authority PR (if needed, to align messaging with any press releases), KoTDA Comms (for consistency in wording).

I: All Members (members get informed either via portal or email when an advisory is published).

Platform Maintenance (Tech):

R: KoTDA IT Team (if hosted on Konza cloud, they maintain servers etc.), ICTA IT Support (for user support).

A: KoTDA Head of Tech Ops (accountable infrastructure up), ICTA Head of Cybersecurity (accountable functional maintenance).

C: Vendors (if using OpenCTI/MISP, we might consult those communities on issues), Partner IT (if integration needed with their systems).

I: All stakeholders (when maintenance downtime or changes, inform everyone).

Stakeholder Engagement & Training:

R: ICTA Cyber Awareness Officer (delivers training), KE-CIRT Outreach Officer.

A: ICTA Program Manager (ensures all stakeholders are on-boarded and happy).

C: KoTDA PR/Community (help organize events, comms), Champion users in each partner (maybe county CIOs consulted on schedule).

I: Platform Steering Committee (if exists, they are kept in loop of engagement progress).

Weekly Trend Analysis & Reporting:

R: KoTDA Data Analyst (pull data, generate charts), ICTA SOC Analyst (verify data accuracy).

A: ICTA Cyber Program Lead (accountable that weekly report is produced on time).

C: KE-CIRT Statistician (they produce quarterly stats, can consult for methodology).

I: All Members (everyone sees the weekly trend on portal).

We can tabulate a few of those as example:

Activity	ICTA	KoTDA	ODPC	Partner Orgs
Incident Submission & Triage	A (Program Lead), R (SOC Analyst)	C (Threat Analyst)	I (if breach)	R (for their own incidents)
Incident Analysis	A (KE-CIRT Mgr)	R (KoTDA Analyst)	I (ODPC if needed)	R (Partner IT), C (if need help)
Advisory Draft & Review	R (KoTDA Cyber Analyst) , A (ICTA Editor)	C (KoTDA Intel)	C (ODPC for breach content)	C (Org SME for context)
Legal Approval	A/R (ICTA Legal)	–	R (ODPC Rep for privacy)	C (Partner legal if named)
Publish Advisory	R (ICTA Platform Mgr)	–	–	I (All get notified)
Platform Technical Maintenance	A (ICTA Cyber Lead)	R (KoTDA IT Ops)	–	–
Stakeholder Training/Onboarding	R (ICTA Outreach)	C (KoTDA support)	–	A (each partner must participate)
Weekly Trends Reporting	A (ICTA Lead)	R (KoTDA Data Analyst)	–	I (All members)

(The RACI.xlsx is provided for a full matrix; above is a summary excerpt.)

The key takeaway: ICTA is generally in the driver’s seat (Accountable) for content and process, KoTDA provides technical infrastructure and analysis help (Responsible in tech tasks), ODPC and other regulators are consulted/informed especially on legal/privacy matters, and the partner organizations have responsibility to report their issues and are consulted for accuracy of info pertaining to them.

This clear delineation will be communicated so everyone knows who to call or what to do at each stage (e.g., if county reports an incident, they know KE-CIRT (ICTA) will lead analysis, KoTDA will support, etc., and ODPC will observe if personal data is involved, etc.).

6. Wireframes (Low-Fi) – Annotated

(The deliverables include PNG images of wireframes for key screens. Below are descriptions and key annotations for each wireframe, corresponding to those images.)

6.1 Public Portal – Home Page Wireframe

Description: The Home page introduces the platform and highlights key info at a glance.

Header: Top bar with ICTA and KoTDA logos on the left (Kenyan govt branding) and perhaps the platform name “Kenya Cyber Swahili Name (if any) Cyber Awareness Portal”. On the right, simple navigation links: Advisories, KEV, Trends, and a “Report Incident” (which scrolls or explains it’s for vetted users). Also a language toggle (EN | SW) in top-right corner (non-functional in MVP, but visible).

Annotation: “1. Header with branding and main menu. Mobile view: collapses to a menu icon.”

Hero Section: A banner or hero area with a brief mission statement: e.g., “Cyber Threat Alerts & Guidance for Kenya’s Digital Defenders”. Possibly with a background graphic (like a map of Kenya or abstract tech graphic). A call to action button “View Latest Advisories”.

Next to the text, a “Must Patch Now” highlight showing a big number: e.g., “15 Known Exploited Vulnerabilities in KE” and a link “View KEV List” – this immediately surfaces the KEV KPI.

Annotation: “2. Hero highlight – mission statement + KEV KPI (drives attention to patch urgent vulns).”

Latest Advisories Preview: A section listing the 3 most recent advisories with title, date, maybe a severity tag. For example:

[Critical] Outlook Vulnerability Advisory – Oct 3, 2025.

[High] Ransomware Alert – Lockbit – Oct 1, 2025.

[Medium] Guidance: Cyber Hygiene for Counties – Sep 28, 2025.
Each title is clickable. Possibly a “See all advisories” link after the list.

Annotation: “3. Latest Advisories – shows recent 3 with severity color labels. Keep summaries short.”

Weekly Trends Snapshot: Perhaps a small chart or set of stats showing last week’s summary. E.g., “Last week: 25 phishing reports, 3 ransomware incidents, Sector most targeted: Government.” Could be displayed as a simple bar or just text with icons. And a button “View Full Trends”.

Annotation: “4. Weekly Trends Summary – small preview (e.g., 10% increase in incidents this week). Encourages click to Trends page.”

Footer: Contains contact info (maybe a generic email for KE-CIRT), copyright (© 2025 ICT Authority & KoTDA), maybe links to terms/policy. Possibly partner logos or mention “Supported by ODPC, Machakos, Kajiado counties” to highlight pilots (or this could be a separate section above footer like “Pilot Partners:” with their logos).

Also include a note “Made in Kenya” or something for pride.

Annotation: “5. Footer – contacts, partner acknowledgment, maybe a small Kenya flag icon to signify local ownership.”

Mobile considerations: On mobile, the hero text might stack with the number card below it. Advisories might be a swipe carousel or just a stacked list. The menu would collapse.

6.2 Public Portal – Advisory Detail Wireframe

Description: This page shows one advisory in full detail.

Header: Same site header with nav as home page.

Advisory Title and Metadata: Top of page shows advisory title (e.g., “Critical Vulnerability in Microsoft Exchange – Advisory”). Right below, metadata like:

Date published (e.g., “Published: 3 Oct 2025”).

Severity (if we assign one to advisory, e.g., a colored label “Severity: Critical”).

TLP: CLEAR label (to reinforce classification – maybe a green “CLEAR” tag icon).

Audience: perhaps icons or text like “Audience: Gov + CNI” if relevant (or if we have an audience field from advisory data).

Optionally, an “Advisory ID” or reference number for internal tracking (could be like ADV-2025-001).

Annotation: “1. Advisory header – includes title, date, severity badge, and TLP:CLEAR tag.”

Summary Section: A brief paragraph summarizing the threat/advisory. E.g., “A critical vulnerability affecting Exchange 2019 is being actively exploited. All organizations running Exchange should patch immediately to prevent compromise.” Typically 2-3 sentences maximum.

Annotation: “2. Summary – quick overview of what and why.”

Affected/Who is affected: A section maybe titled “Who is Affected” or “Affected Systems/Users.” This can be bullet points or a short text specifying e.g., “All organizations using Microsoft Exchange 2016/2019 on-prem.” Or “SMEs using Windows 10 without latest updates,” etc. Could incorporate if it’s sector-specific.

Annotation: “3. Who is Affected – helps reader identify if it’s relevant to them.”

What to do (Remediation): Perhaps as a callout or bullet list:

“Apply patch KB12345 released by Microsoft on Oct 1.”

“If you cannot patch immediately, implement workaround X (disable feature Y).”

“Monitor your Exchange server for signs of compromise (see ‘How to check’ below).”
This is the actionable part. Possibly label it “Action Required” or “Recommended Actions.”

Annotation: “4. What to do now – clear steps in bullet form.”

How to check if compromised: If relevant, a section describing how a defender might detect if they’ve been hit:

e.g., “Look for the presence of file X in C:\temp, or unusual outbound traffic to IP 198.x.x.x (if such details are okay to share).”

Or “Use the detection tool provided by XYZ” etc.

If no specific check, we omit this section.

Annotation: “5. How to check – gives hints for detection (no actual IPs if sensitive, maybe general guidance).”

References: At bottom, a list of relevant links:

Official vendor advisory link (e.g., Microsoft Security Bulletin URL).

CISA or other CERT advisory link if exists.

CVE details link (NVD or Mitre).

Possibly internal reference code or link (like if we had a companion technical report under login, but not for public).

Annotation: “6. References – external links open in new tab likely. Possibly a PDF download of this advisory?”

Download JSON button: Likely at the top or bottom (maybe top right near title or bottom after references) a button or link “Download Advisory JSON”. This triggers the JSON download for machine consumption.

Annotation: “7. JSON Download – developer audience can get structured data. Possibly show file size or just do directly.”

Footer: Same site footer.

Print view: We would ensure that if printed, the background is light and all text visible (could define a white background for print CSS and include URL text for links if possible). The wireframe might not show this, but mention print-friendly.

Visual style: Use clear headings for each section (“Summary”, “Affected”, etc., maybe bold or slightly larger font). Possibly differentiate the remediation section with an icon or highlight (like a colored side border).

6.3 Public Portal – Weekly Trends Wireframe

Description: The Trends page provides a dashboard-like view of recent metrics.

Header: Standard site header (with nav).

Title and Date: “Weekly Cyber Trends – Week 40, 2025 (Sep 28 - Oct 4)” for example. Possibly a subtext “Data from pilot constituency only. All data TLP:CLEAR aggregated.”

Could also have a dropdown to select a different week (P1, likely not in MVP).

Annotation: “1. Page title with date range of the data.”

Trend Chart 1: E.g., a line chart titled “Phishing Emails Reported (last 12 weeks)”. X-axis: weeks (could label by week starting date), Y-axis: count of phishing attempts reported. Should show an increasing or whatever trend.

Each point derived from trends.json “phishing_count”.

Annotation: “2. Line chart – showing trend over time. Dots might be weeks. Hover to see values (in actual implementation). Chart.js used.”

Trend Chart 2: E.g., a bar chart titled “Top Exploited Threat Categories – Last Week”. It might list categories like “System Intrusion, Ransomware, Phishing, Web Defacement, etc.” on X-axis, with number of incidents on Y-axis. Or percentages.

If we had top exploited vulnerabilities or similar, we might do a bar for those. But category is easier since we have taxonomy.

Maybe show 5 categories sorted by count.

Annotation: “3. Bar chart – categories vs count for the week (or month). Only shows if enough data per category (should have each bar aggregated from at least 7 incidents maybe – if not, we could combine categories).”

Trend Chart 3: Possibly a bar or gauge chart for “Sector Risk Scores” or “Incident Distribution by Sector”. For example, a bar for Government, one for Finance, one for Healthcare etc., showing some score or count (score could be a weighted metric like incident count * severity).

Or simply “Incidents by Sector last week: Gov 5, County 3, Finance 2, etc.” If some sectors have <7, maybe group them or label as “Other”.

Annotation: “4. Bar chart – incidents by sector. Perhaps highlight highest one.”

Trend Stat Cards: Could have a few key metrics in text form:

“Median time from incident report to advisory: 2 days” (if we track how quickly we published advisories after incidents).

“Patch adoption rate (pilot orgs): 80% patched KEV vulns on time.” (if we had data from pilot orgs scanning – maybe hypothetical).

“Total incidents this week: 10 (vs 8 last week, +25%).”

These could be shown as separate small boxes or listed.

Annotation: “5. Key stats – quick numbers summarizing performance or changes.”

Privacy Note: At bottom or top, a small note: “Charts omit any data where sample < 7 to preserve anonymity.” or similar. This informs users of our guardrail.

If a chart was omitted due to low sample, we can also explicitly say “Some metrics are not displayed due to insufficient sample size.”

Annotation: “6. Privacy note – explains missing data if any.”

Footer: Standard footer.

Visual style: Use consistent colors for charts (maybe one color scheme with accessible palette). Possibly each chart could have a different accent color but within brand (if KoTDA has brand colors, incorporate). Ensure text labels are readable (14px+). Chart axes labeled clearly.

Interaction: Not much on static, but if Chart.js included, could allow hover tooltips. Also maybe a legend if multiple series.

On mobile, charts may need to shrink or be scrollable (we can allow horizontal scroll or just stack vertically which is fine). Possibly use smaller text.

6.4 Public Portal – KEV List Wireframe

Description: A page listing the Known Exploited Vulns in table format.

Header: Standard site header.

Title: “KEV Kenya – Known Exploited Vulnerabilities Catalog (Kenya Context)”. Maybe a short intro: “Vulnerabilities actively exploited that require urgent patching in Kenya. Derived from CISA KEV and local threat intel. Updated weekly or as needed.”

Annotation: “1. Page title and description (with explanation of fields).”

Filters UI:

A text search box labeled “Search CVE or Product:” where user can type free text.

Dropdown filters:

Status: [All, Exploited, High] – default All.

Vendor: [All, Microsoft, Oracle, Citrix, etc.] – we can populate from entries or allow filtering by typing too (typeahead).

(Maybe Sector: if we list sector tags, but might skip for simplicity; or present as checkboxes of top sectors).

Possibly a “Sort by: Deadline (soonest), Date Added (newest)” toggle.

Annotation: “2. Filter controls – search and dropdown filters for Status etc. On mobile, these might collapse into a filter accordion.”

Table: Columns as:

CVE ID – clickable to maybe MITRE or expands row for details.

Vendor – text.

Product – text (might combine vendor+product in one column if space needed).

Status – could show as badge “Exploited” (red) or “High” (orange) or maybe “Watchlist” for not exploited but important.

Recommended Deadline – date (or “Due by Oct 15, 2025”). If passed, maybe highlight in red or italic “Overdue”.

Reference – short text e.g., “CISA KEV” or “Vendor Adv”. Could link to source if available (like a pointer to CISA page or vendor bulletin).

Sectors – maybe a small list or icons if we have icons for sectors. If too verbose, we might just use an icon or abbreviation (like Gov, Fin, Telco, etc.). Could limit to 2-3 and then “+” if more.

Annotation: “3. KEV table – sortable columns. Ensure responsive design (maybe horizontal scroll on mobile or smaller font). Overdue deadlines highlighted.”

Each row lists one CVE entry. Perhaps alternate row shading for readability.

Export Options: Above or below table, two buttons:

“Download CSV” and “Download JSON”.

Annotation: “4. Export buttons – allow downloading the full list as machine-readable. (These will link to kev.csv and kev.json).”

Footer: Standard.

If table is long, incorporate pagination (e.g., show 20 per page with navigation at bottom). Or infinite scroll.

Mobile: The table might become a stacked list (each entry as a card with line breaks for each field) or just scrollable table. We might accept horizontal scroll on mobile as it’s data-heavy.

6.5 Restricted Workspace – Inbox/Triage Wireframe

Description: The main landing for logged-in contributors/analysts showing incoming reports.

Header (workspace): Possibly a different header than public site – include the platform name and maybe a user menu (like “Hello, John (Machakos County) [Logout]”). The nav here might have sections: Inbox, Cases, Publish, Admin (if role), etc.

Annotation: “1. Workspace header with user info and navigation (not visible to public).”

Filter/Queue Bar: Some quick filters: e.g., tabs or checkboxes to show My Org’s reports vs All, or filter by status (New, Assigned to me, All).

Or a search field to find cases by keyword or ID.

Might also have a toggle to include closed cases or not.

Annotation: “2. Inbox filter controls – e.g., a search box, status filter dropdown.”

Cases Table: Columns likely:

Severity – show an icon or color (maybe a colored dot or an exclamation icon with color). Could also just sort by number if we use 1-3.

TLP – an icon or abbreviation (RED, AMBER, GREEN). Possibly color-coded background.

Title – brief description of incident. Possibly prefixed with an incident ID (like INC-25).

Sector – e.g., “County” or “Finance” (depending on submitter).

Reporter / Org – e.g., “Machakos County” or “John Doe (Machakos)” if we show user.

Dedup Group – if part of a cluster, show an identifier (like “#5” or a chain link icon with group ID).

Status – text like “New”, “In Progress”, “Drafted”, etc.

Annotation: “3. Cases table – critical info visible. New items maybe bold. Clicking a row opens case detail.”

New entries might be highlighted or an icon indicating not yet viewed.

Each row clickable to open Case View.

Possibly an action column with a quick button like “Assign to me” or “Mark duplicate” without opening detail:

For MVP, probably skip in table, do inside case.

Sidebar (maybe optional): Could have a sidebar with navigation for different queues (like one for New Reports, one for Draft Advisories to review, etc.). But might not be needed if we incorporate in main view.

If admin user, an Admin menu might show up here to manage users/integrations.

If design allows, maybe have a small “Report Incident” button on this page too for convenience (if user has something new to report while inside workspace).

Possibly top right a button +Incident.

Footer: Possibly minimal or none in workspace (since it’s internal).

Mobile/Tablet: Possibly use a card list instead of wide table. Each incident could appear as a card:

“High | AMBER | [Title] – [Status]” and tapping expands details or navigates.

6.6 Restricted Workspace – Case View Wireframe

Description: When a case is opened, showing details and various tabs.

Header: Could show the case title prominently, with maybe icons indicating severity and TLP.

E.g., “[RED] [High] Malware outbreak in County Offices”.

And maybe a case ID (Case #23).

If there's an 
