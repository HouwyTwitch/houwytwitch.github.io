/* ============================================================
   common.js - Theme · i18n · Cursor · Nav · Reveal
   ============================================================ */

/* ── Translations ─────────────────────────────────────────── */
const T = {
  en: {
    /* NAV */
    'nav.skills':      'Skills',
    'nav.infosec':     'InfoSec',
    'nav.projects':    'Projects',
    'nav.experience':  'Experience',
    'nav.contact':     'Contact',
    'nav.back':        'Projects',

    /* HERO */
    'hero.eyebrow':  'Python Backend & Automation Developer',
    'hero.title1':   'Building',
    'hero.title2':   'tools',
    'hero.title3':   'that ship.',
    'hero.desc':     'Backend services, automation pipelines and security tooling - built to run 24/7 without manual input.',
    'hero.cta1':     'View Projects',
    'hero.cta2':     'GitHub ↗',
    'hero.stat1':    'Repositories',
    'hero.stat2':    'Featured Projects',

    /* SKILLS */
    'skills.eyebrow':  'Specialization',
    'skills.title':    'Python & Automation',
    'skill1.title':    'Async & Concurrency',
    'skill1.desc':     'Long-running Python services, parallel workers, efficient resource utilization and background processing.',
    'skill2.title':    'Browser Automation',
    'skill2.desc':     'Data collection, dynamic content, SPAs, auth flows and session management via browser automation.',
    'skill3.title':    'Backend Services',
    'skill3.desc':     'Flask/FastAPI APIs, background workers, queue processing, caching and health-checked service deployments.',
    'skill4.title':    'Docker & Linux',
    'skill4.desc':     'Containerized deployments, service orchestration with Docker Compose and Linux server management.',
    'skill5.title':    'Security Tooling',
    'skill5.desc':     'Anti-phishing detection, secure APIs, input validation, rate limiting and security header configuration.',
    'skill6.title':    'Mobile Development',
    'skill6.desc':     'Native Android with Kotlin and Jetpack Compose. TOTP authentication, secure local data and Material 3 UI.',

    /* INFOSEC */
    'infosec.eyebrow': 'Resume',
    'infosec.title':   'InfoSec',
    'infosec.legis':   'Legislation & Regulatory Framework',
    'infosec.exp':     'Work Experience',
    'infosec.tools':   'Tools & Security Products',
    'infosec.role':    'Information Security Specialist',
    'infosec.roledesc':'IS policy development, system audits, PD information systems, regulatory compliance. Interaction with FSTEC, technical documentation preparation.', 'legis.1': 'Information protection, personal data, and critical infrastructure security', 'legis.2': 'GIS protection requirements, PD security measures, KII and industrial ACS', 'legis.3': 'Electronic signatures and commercial secrets legislation', 'legis.4': 'PD protection levels, KII categorization criteria', 'legis.5': 'SKZI requirements, electronic signature means and certification centers', 'legis.6': 'Financial organization security, baseline controls and CBR conformity assessment', 'legis.7': 'International ISMS standards, information security management systems', 'legis.8': 'Automated systems lifecycle: requirements, technical specification, testing stages',

    /* PROJECTS */
    'projects.eyebrow': 'Work',
    'projects.title':   'Selected Projects',
    'proj1.name':  'Chromium TLS Fingerprint Engine',
    'proj1.desc':  'Custom Chromium build exposing a CDP command to spoof JA3/JA3N TLS ClientHello fingerprints at runtime - cipher suites, curves, extension order - paired with a Python Playwright wrapper.',
    'proj2.name':  'Post-Quantum Crypto Toolkit',
    'proj2.desc':  'A modular Python toolkit for quantum-safe cryptography: post-quantum KEM key exchange, digital signatures and AEAD encryption with HKDF derivation, built on liboqs.',
    'proj3.name':  'ML Anti-Phishing Extension',
    'proj3.desc':  'Chromium extension and Python API server for URL reputation checks, blacklist/whitelist validation and ML-based phishing detection.',
    'proj4.name':  'Desktop 2FA Authenticator',
    'proj4.desc':  'Desktop application for managing multiple authenticator profiles, generating TOTP codes and handling secure local account data.',
    'proj5.name':  'Android 2FA Authenticator',
    'proj5.desc':  'Native Android application built with Kotlin and Jetpack Compose for managing authenticator profiles and time-based one-time passwords.',
    'proj6.name':  'Multi-NTP Time Sync',
    'proj6.desc':  'Windows desktop app that queries 150+ NTP servers concurrently and applies the median offset with microsecond precision. System tray, live clock and per-server diagnostics.',
    'proj7.name':  'GPU Combinatorial Optimizer',
    'proj7.desc':  'CUDA-accelerated tool for searching optimal combinations under numeric constraints and predicting resulting values.',
    'proj8.name':  'Corporate Website Rework',
    'proj8.desc':  'Static corporate website redesign with RU/EN localization, dark/light theme, responsive layout, interactive 3D network visualization, security headers and SEO files.',
    'proj9.name':  'Java Spring Messenger',
    'proj9.desc':  'Educational backend project with user accounts, messaging logic, REST API and server-side application structure built with Java Spring.',

    /* PRIVATE EXPERIENCE */
    'priv.eyebrow': 'Background',
    'priv.title':   'Private & Commercial Automation',
    'priv1.title':  'High-throughput Automation Platform',
    'priv1.desc':   'Python services for continuous data monitoring, external API integration, queue-based processing and notification delivery focused on 24/7 reliability.',
    'priv2.title':  'Data Processing & Alerting Service',
    'priv2.desc':   'Backend service that receives structured data, enriches it with local datasets, applies configurable decision rules and sends threshold-based notifications.',
    'priv3.title':  'Session & Resource Management',
    'priv3.desc':   'Tooling for managing authenticated sessions, background workers for long-running processes and an internal API for exposing managed resources.',

    /* CONTACT */
    'contact.eyebrow': 'Get in touch',
    'contact.title':   "Let's work\ntogether",
    'contact.badge':   'Open to Python backend and automation roles',
    'contact.desc':    'Have a task in backend development, automation or security tooling? Reach out - let\'s figure it out.',

    /* FOOTER */
    'footer.copy': 'houwy.space - © 2026',

    /* PROJECT PAGES - shared */
    'proj.overview':      'Overview',
    'proj.features':      'Features',
    'proj.howit':         'How it works',
    'proj.install':       'Installation',
    'proj.config':        'Configuration',
    'proj.arch':          'Architecture',
    'proj.production':    'Production',
    'proj.problem':       'The Problem',
    'proj.techstack':     'Tech Stack',
    'proj.requirements':  'Requirements',
    'proj.links':         'Links',
    'proj.polling':       'Polling',
    'proj.games':         'Supported Games',
    'proj.patterns':      'Target Patterns',
    'proj.storage':       'Storage',
    'proj.viewgithub':    'View on GitHub ↗',
    'proj.back':          '← Projects',
    'proj.usage':         'Usage',
    'proj.dataflow':      'Data flow',

    /* Desktop 2FA Authenticator */
    'msda.title':   'Desktop 2FA\nAuthenticator',
    'msda.one':     'A desktop application for managing multiple authenticator profiles. Generates live TOTP codes with a countdown timer and handles secure local account data storage.',
    'msda.ov.body': 'A full-featured desktop authenticator built with PyQt5. Manages multiple accounts simultaneously, generates live 2FA codes with a countdown timer, and handles all types of authenticator confirmations without requiring a mobile device.',
    'msda.ov.b2':   'Built with PyQt5 for a native desktop feel. Stores refresh tokens locally so you never re-login on every launch. Local-first architecture - no data leaves your machine.',
    'msda.feat.title': 'Key capabilities',
    's1t':'Multiple accounts', 's1d':'Add and manage as many authenticator accounts as needed. Filter by name or identifier.',
    's2t':'Live TOTP codes',   's2d':'Generates 2FA codes with a live countdown timer - always ready.',
    's3t':'Confirmation handling', 's3d':'Accepts and manages pending authenticator confirmations of all types.',
    's4t':'Session persistence','s4d':'Stores tokens locally so you don\'t re-login on every launch.',
    's5t':'Themes',            's5d':'Built-in dark, light, and high-contrast themes with live switching.',
    'msda.inst.title':'Getting started',
    'msda.inst.body': 'Requires Python 3.10+. Install dependencies and run:',
    'msda.inst.b2':   'To add an account, click +, select your account file and enter credentials.',
    'msda.data.title':'Storage',
    'msda.data.k1': 'accounts.json', 'msda.data.v1': 'Stored account metadata (tokens, paths) - keep private',
    'msda.data.k2': 'settings.json', 'msda.data.v2': 'User preferences: theme, refresh interval, etc.',
    'msda.data.warn':'⚠ accounts.json contains session tokens. Never share it.',

    /* CSFloat bot */
    'csf.title': 'CSFloat\nAuto Bot',
    'csf.one':   'Async Python bot that fully automates the CS2 seller flow on CSFloat. From sale detection to Steam Guard confirmation - no browser extension, no manual action.',
    'csf.ov.b1': 'CSFloat has no public WebSocket or SSE stream. This bot uses a dual-tier polling system - fast notification polling every 15s and a 60s heartbeat fallback - to react to new sales as quickly as practically possible.',
    'csf.ov.b2': 'Steam session cookies are persisted to disk so the bot avoids a full re-login on subsequent runs.',
    'csf.hw.title':'Full trade lifecycle',
    'csf.s1t':'Detect new sales',        'csf.s1d':'Fast notification polling via /api/v1/me/notifications every 15s. Heartbeat fallback every 60s.',
    'csf.s2t':'Bulk-accept on CSFloat',  'csf.s2d':'Calls the CSFloat REST API to accept pending trade offers programmatically.',
    'csf.s3t':'Send Steam trade offer',  'csf.s3d':'Directly sends the trade offer to the buyer via Steam\'s trade API - no browser needed.',
    'csf.s4t':'Confirm via Steam Guard', 'csf.s4d':'Uses identity_secret from your .maFile to confirm the offer.',
    'csf.s5t':'Notify CSFloat',          'csf.s5d':'Calls the steam-status API to mirror what the CSFloat Chrome Extension does.',

    /* Android 2FA Authenticator */
    'and.title': 'Android 2FA\nAuthenticator',
    'and.one':   'A native Android authenticator app built with Jetpack Compose. Manage multiple authenticator profiles, generate TOTP codes and handle confirmations - all locally, with no third-party servers.',
    'and.ov.b1': 'Uses a standard account file format for easy import. All processing happens locally - no third-party servers, no telemetry.',
    'and.ov.b2': 'Built with Jetpack Compose and Material 3, it supports dynamic color theming. Device backups are disabled to prevent credentials appearing in cloud backups.',
    'and.feat.title':'Key capabilities',
    'and.s1t':'Multi-account support',     'and.s1d':'Import multiple account profiles. Switch between them instantly.',
    'and.s2t':'TOTP with countdown',       'and.s2d':'30-second 2FA codes with a visual countdown ring.',
    'and.s3t':'Confirmation handling',     'and.s3d':'View, accept, or decline confirmations with swipe-to-refresh.',
    'and.s4t':'Auto session refresh',      'and.s4d':'Silently re-authenticates using stored refresh tokens.',
    'and.s5t':'Material 3 UI',             'and.s5d':'Dynamic color, dark/light theme. Targets Android 11+ (API 31).',
    'and.inst.title':'Building from source',
    'and.inst.body': 'Requires Android Studio Ladybug (2024.2+) and JDK 17. Targets API 35, runs on API 31+.',

    /* Buff */
    'buf.title': 'Buff.market\nAuto Trades',
    'buf.one':   'Automatically delivers sold CS2 items on Buff.market. Handles Steam OpenID login, RSA-4096 encrypted session handoff, and Steam Guard confirmation - entirely hands-free.',
    'buf.ov.b1': 'When you sell an item on Buff.market, the funds are held until you manually deliver it. This bot eliminates that step entirely. It logs in via Steam OpenID - no API key or manual cookie required.',
    'buf.ov.b2': 'The most technically interesting part: it replicates the hybrid RSA + AES-128-CBC encryption scheme reverse-engineered from the Buff Android APK.',
    'buf.hw.title':'Delivery flow per order',
    'buf.s1t':'Login',           'buf.s1d':'Authenticates with Steam via aiosteampy, then runs the Steam OpenID flow against Buff\'s API.',
    'buf.s2t':'Poll orders',     'buf.s2d':'Fast poll of /api/message/notification every 15s. Full order list from /api/market/sell_order/to_deliver.',
    'buf.s3t':'Encrypt session', 'buf.s3d':'Serializes Steam session cookies as JSON and encrypts with Buff\'s RSA-4096 public key using hybrid RSA + AES-128-CBC.',
    'buf.s4t':'Send to Buff',    'buf.s4d':'POSTs encrypted session to seller_send_offer. Buff decrypts and sends the trade to the buyer.',
    'buf.s5t':'Steam Guard confirm','buf.s5d':'Confirms the trade offer using identity_secret from your .maFile.',

    /* CSMoney */
    'csm.title': 'CS.Money\nAuto Trade',
    'csm.one':   'Replicates the logic of the official CS.Money Chrome extension in pure Python. Automatically processes sale offers, creates Steam trade offers, and confirms them via Steam Guard.',
    'csm.ov.b1': 'When a buyer purchases your CS.Money listing, this tool handles everything automatically. It reverse-engineers the CS.Money Chrome extension flow - including the RSA-6144 session encryption used to hand off Steam credentials.',
    'csm.ov.b2': 'Sessions and cookies are persisted to disk so restarts don\'t require a new login. Rate-limit responses are handled gracefully.',
    'csm.hw.title':'Automated offer flow',
    'csm.s1t':'Notification polling',   'csm.s1d':'Polls GET /1.0/market/notifications every poll_interval seconds. On OFFER_BOUGHT, immediately checks trades.',
    'csm.s2t':'Fetch active offers',    'csm.s2d':'Polls GET /3.0/market/active-offers every 30s as a safety net.',
    'csm.s3t':'Notify & send trade',    'csm.s3d':'For each CREATING-state offer: notifies CS.Money, then sends the Steam trade offer to the buyer.',
    'csm.s4t':'Encrypt & report',       'csm.s4d':'Fetches RSA-6144 public key, encrypts Steam session, reports trade ID and session back to CS.Money.',
    'csm.s5t':'Steam Guard confirm',    'csm.s5d':'Confirms the trade offer via mobile authenticator using identity_secret.',

    /* Pattern */
    'pat.title': 'Pattern\nSearcher Bot',
    'pat.one':   'A real-time bot that monitors the CS:GO market for skins with specific pattern indices at optimal prices - and auto-buys before anyone else can.',
    'pat.ov.b1': 'In CS:GO, certain skins have a pattern index (seed) that determines their visual appearance. Some patterns are extremely rare - specific Case Hardened blue gem configurations, maximum Fade percentages. These skins sell for multiples of the base price.',
    'pat.ov.b2': 'This bot continuously monitors the market for these specific patterns and purchases them the moment they\'re listed below a configured threshold.',
    'pat.hw.title':'Detection & purchase flow',
    'pat.s1t':'Define targets',       'pat.s1d':'Configure specific pattern indices and maximum purchase prices per skin type.',
    'pat.s2t':'Continuous scan',      'pat.s2d':'Polls the CS:GO market API in real time, checking new listings against the target list.',
    'pat.s3t':'Pattern analysis',     'pat.s3d':'Fetches inspect link data to verify the actual pattern index before purchasing.',
    'pat.s4t':'Auto-buy',             'pat.s4d':'Executes the purchase automatically when a target pattern appears at or below threshold.',

    /* GPU Combinatorial Optimizer */
    'flt.title': 'GPU Combinatorial\nOptimizer',
    'flt.one':   'CUDA-accelerated tool for finding optimal combinations of numeric inputs that satisfy a target output constraint. A combinatorial search that takes hours on CPU completes in seconds on GPU.',
    'flt.ov.b1': 'Given a pool of numeric inputs and a target output range, the tool finds all combinations of 10 inputs whose weighted average falls within the target. Formula and weights are configurable per use case.',
    'flt.ov.b2': 'Finding the exact combination for a desired output value is a combinatorial search problem. This tool offloads it entirely to the GPU using CUDA, searching millions of combinations per second.',
    'flt.prob.title':'Why GPU?',
    'flt.prob.b1': 'With 500 available inputs, finding valid 10-element combinations yields ~2.6 trillion possibilities - years at CPU speed, seconds to minutes on GPU.',
    'flt.hw.title':'Computation pipeline',
    'flt.s1t':'Define target',     'flt.s1d':'Specify the target output range and provide the pool of available numeric inputs.',
    'flt.s2t':'Upload to GPU',     'flt.s2d':'Input values transferred to GPU memory. CUDA kernel compiled and launched across all cores.',
    'flt.s3t':'Parallel search',   'flt.s3d':'Each GPU thread evaluates a subset of combinations, computing the weighted average.',
    'flt.s4t':'Return results',    'flt.s4d':'Matching combinations collected from GPU memory and returned for use.',

    /* Corporate Website Rework */
    'mmts.title':       'Corporate Website\nRework',
    'mmts.one':         'Static corporate website redesign with RU/EN localization, dark/light theme, responsive layout, interactive 3D network visualization, security headers and SEO files.',
    'mmts.ov.b1':       'A complete redesign of a telecom company website. Built as a fully static site - no server-side rendering, no CMS - deployed directly via web hosting with all interactivity handled in vanilla JS.',
    'mmts.ov.b2':       'The 3D network visualization is an interactive WebGL-based topology display built without external libraries. Security hardening includes strict CSP, X-Frame-Options, HSTS and a security.txt contact file.',
    'mmts.feat.title':  'Key capabilities',
    'mmts.s1t':'Bilingual content',      'mmts.s1d':'Full RU/EN i18n system with localStorage persistence. All text switched instantly without a page reload.',
    'mmts.s2t':'Dark / Light theme',     'mmts.s2d':'System preference detection on first load. Smooth CSS variable transitions, persisted across sessions.',
    'mmts.s3t':'Responsive layout',      'mmts.s3d':'Mobile-first design across all breakpoints. Fluid grids, scalable type, touch-friendly navigation.',
    'mmts.s4t':'3D network visualization','mmts.s4d':'Interactive WebGL topology display showing network infrastructure. Mouse-controlled rotation and zoom.',
    'mmts.s5t':'Security hardening',     'mmts.s5d':'CSP, X-Frame-Options, HSTS headers. sitemap.xml, robots.txt, security.txt. Optimized meta tags for SEO.',

    /* ML Anti-Phishing Extension */
    'aph.title':        'ML Anti-Phishing\nExtension',
    'aph.one':          'Chromium extension and Python API server for URL reputation checks, blacklist/whitelist validation and ML-based phishing detection. Fully self-hosted.',
    'aph.ov.b1':        'A two-part security tool: a Chromium extension intercepts every navigation event and POSTs the URL to a local Flask API before the page loads. The server checks the URL against configurable lists and an ML classifier, then returns a verdict.',
    'aph.ov.b2':        'The entire stack runs locally via Docker Compose - no external services, no telemetry. The extension communicates only with the self-hosted server, so no browsing data leaves the machine.',
    'aph.feat.title':   'Key capabilities',
    'aph.s1t':'Real-time URL checking',  'aph.s1d':'Intercepts all navigation events before the page loads. Zero user action required.',
    'aph.s2t':'Blacklist / Whitelist',   'aph.s2d':'Fast configurable local lookup. Add domains via the settings page or API. Checked before ML for instant known-bad blocking.',
    'aph.s3t':'ML-based detection',      'aph.s3d':'Trained URL classifier for unknown domains. Configurable confidence threshold for blocking vs. warning.',
    'aph.s4t':'Rate limiting',           'aph.s4d':'Per-IP request throttling on the API server prevents misuse and keeps the local service responsive.',
    'aph.s5t':'Docker deployment',       'aph.s5d':'Full stack runs with a single docker compose up. Easily self-hosted on any machine with Docker.',
    'aph.hw.title':     'How it works',
    'aph.hw.s1t':'Intercept',   'aph.hw.s1d':'Extension catches the navigation event before the page loads and extracts the URL.',
    'aph.hw.s2t':'POST to API', 'aph.hw.s2d':'Extension sends the URL to the local Flask server. Connection is to localhost only.',
    'aph.hw.s3t':'Analysis',    'aph.hw.s3d':'Server checks blacklist → whitelist → ML classifier in sequence. First match wins.',
    'aph.hw.s4t':'Verdict',     'aph.hw.s4d':'Safe / Phishing / Unknown verdict returned with a confidence score. Extension shows indicator or blocks.',

    /* Java Spring Messenger */
    'jms.title':        'Java Spring\nMessenger',
    'jms.one':          'Educational backend project implementing a messaging system with Spring Boot. REST API, user management, message threading and standard Spring layered architecture.',
    'jms.ov.b1':        'A backend-only messaging service built to explore Spring Boot architecture. Covers the full request lifecycle from REST controller through service layer to JPA repository, with Spring Security for auth.',
    'jms.ov.b2':        'Designed as a learning project, the codebase demonstrates idiomatic Spring patterns: dependency injection, transaction management, DTO mapping and integration testing with MockMvc.',
    'jms.feat.title':   'Key capabilities',
    'jms.s1t':'User management',   'jms.s1d':'Registration, login, profile CRUD. Password hashing with BCrypt. JWT-based stateless authentication.',
    'jms.s2t':'Messaging logic',   'jms.s2d':'Send and receive messages. Conversation threading by participants. Paginated message history.',
    'jms.s3t':'REST API',          'jms.s3d':'Standard HTTP methods and status codes. JSON request/response. Input validation with Spring Validator.',
    'jms.s4t':'Spring architecture','jms.s4d':'Clean Controller → Service → Repository layering. Spring Data JPA with H2 (dev) and PostgreSQL (prod).',
    'jms.arch.title':   'Architecture',

    /* Chromium TLS Fingerprint Engine */
    'tls.title':   'Chromium TLS\nFingerprint Engine',
    'tls.one':     'A custom Windows Chromium build that exposes a Chrome DevTools Protocol command to configure TLS ClientHello parameters - JA3/JA3N fingerprint spoofing - at runtime. Paired with a Python playwright_tls package.',
    'tls.ov.b1':   'Anti-bot systems like Cloudflare, Akamai and DataDome fingerprint the TLS ClientHello to tell real browsers from automation. This project patches Chromium and BoringSSL to make that handshake fully controllable from your automation code.',
    'tls.ov.b2':   'Parameters flow from Python through Playwright and CDP into the browser and network service, down to BoringSSL, producing a custom ClientHello on every HTTPS connection - no proxy or TLS-termination layer required.',
    'tls.feat.title':'Key capabilities',
    'tls.s1t':'Runtime control',        'tls.s1d':'Cipher suites, supported groups and curves, TLS version bounds and exact extension ordering - all set per session.',
    'tls.s2t':'JA3 one-liner',          'tls.s2d':'Feed a standard JA3 string and the wrapper configures the whole handshake in a single call.',
    'tls.s3t':'Browser presets',        'tls.s3d':'Ready-made fingerprints for Chrome, Firefox, Edge, Safari and curl.',
    'tls.s4t':'Extension permutation',  'tls.s4d':'Per-connection randomisation matching Chrome 110+ behaviour, or a fixed order for older targets.',
    'tls.s5t':'Playwright wrapper',     'tls.s5d':'Async and sync BrowserWithTLS helpers drop straight into existing Playwright automation.',
    'tls.hw.title':'Data flow',
    'tls.hw.s1t':'Python client', 'tls.hw.s1d':'Your script calls set_fingerprint() or set_ja3() on the BrowserWithTLS wrapper.',
    'tls.hw.s2t':'CDP command',   'tls.hw.s2d':'The wrapper issues Emulation.setTLSFingerprint over the Chrome DevTools Protocol.',
    'tls.hw.s3t':'Mojo IPC',      'tls.hw.s3d':'The browser process forwards the parameters to the network service through a Mojo interface.',
    'tls.hw.s4t':'BoringSSL',     'tls.hw.s4d':'A patched SSL_set_extension_order() builds the custom ClientHello on every new socket.',
    'tls.inst.title':'Build from source',
    'tls.inst.body': 'Windows 10/11 x64 with roughly 250 GB of disk. The whole build is scripted in PowerShell:',
    'tls.use.title':'Drive it from Python',
    'tls.note':'Note: EC point formats beyond uncompressed are logged but not applied, and ALPN / HTTP-2 negotiation stays independent of the TLS fingerprint.',

    /* Post-Quantum Crypto Toolkit */
    'qrpt.title':  'Post-Quantum\nCrypto Toolkit',
    'qrpt.one':    'A modular Python toolkit for quantum-safe cryptography - post-quantum key exchange, digital signatures and authenticated encryption behind a clean, validated API.',
    'qrpt.ov.b1':  'Quantum computers threaten classical public-key cryptography. qrpt wraps post-quantum primitives from liboqs behind a small, safety-first API so applications can adopt quantum-resistant key exchange and signatures today.',
    'qrpt.ov.b2':  'The design favours correctness and maintainability: strict input and nonce-length validation, slotted dataclasses to cut object overhead, and a repeatable benchmark runner to catch performance regressions.',
    'qrpt.feat.title':'What it provides',
    'qrpt.s1t':'KEM key exchange',     'qrpt.s1d':'Post-quantum Key Encapsulation Mechanism to establish a shared secret over an untrusted channel.',
    'qrpt.s2t':'Digital signatures',   'qrpt.s2d':'Post-quantum sign and verify for message authenticity and integrity.',
    'qrpt.s3t':'AEAD encryption',      'qrpt.s3d':'Authenticated encryption with associated data, with a fast path that avoids unnecessary byte copies.',
    'qrpt.s4t':'HKDF derivation',      'qrpt.s4d':'Derives AEAD keys from a shared secret at roughly 0.007 ms per derivation.',
    'qrpt.s5t':'High-level seal / open','qrpt.s5d':'One-call helpers that combine KEM, derivation and AEAD into a simple seal and open interface.',
    'qrpt.inst.title':'Installation',
    'qrpt.inst.body': 'Requires Python 3.11+. AEAD works out of the box; post-quantum features pull in the optional oqs binding.',
    'qrpt.use.title':'Encrypt with a shared secret',

    /* Multi-NTP Time Sync */
    'nts.title':   'Multi-NTP\nTime Sync',
    'nts.one':     'A Windows desktop app that synchronises the system clock against many NTP servers at once and applies the median offset with microsecond precision.',
    'nts.ov.b1':   'Rather than trusting a single time source, the tool queries dozens of servers concurrently and takes the median offset, so one misbehaving or drifting server cannot skew the result.',
    'nts.ov.b2':   'Corrections are written through the Windows FILETIME API at 100-nanosecond resolution, with rounding applied before scaling to avoid floating-point drift. A live clock updates at 30 fps.',
    'nts.feat.title':'Key capabilities',
    'nts.s1t':'Multi-server median',   'nts.s1d':'Queries all active servers simultaneously and uses the median offset to reject outliers.',
    'nts.s2t':'Microsecond precision', 'nts.s2d':'Offsets shown in microseconds; time set via Windows FILETIME at 100 ns resolution.',
    'nts.s3t':'150+ server catalog',   'nts.s3d':'Google, Cloudflare, Amazon, NIST, Apple and regional pools built in - add your own too.',
    'nts.s4t':'Background sync',        'nts.s4d':'Configurable auto-sync interval from 30 seconds to 1 hour while minimised to the system tray.',
    'nts.s5t':'Live diagnostics',      'nts.s5d':'Per-server status, offset, round-trip time and stratum, with dark and light themes.',
    'nts.hw.title':'How it works',
    'nts.hw.s1t':'Concurrent query', 'nts.hw.s1d':'All servers receive NTP v4 requests through a thread pool, capturing offset, delay and stratum.',
    'nts.hw.s2t':'Median offset',    'nts.hw.s2d':'Responses with stratum above 4 or errors are dropped; the median of the rest is taken.',
    'nts.hw.s3t':'Apply correction', 'nts.hw.s3d':'Current UTC plus the median offset is converted to FILETIME and written with SetSystemTimeAsFileTime.',
    'nts.hw.s4t':'Report accuracy',  'nts.hw.s4d':'Displayed as half the average round-trip delay - the theoretical one-way uncertainty.',
    'nts.inst.title':'Running locally',
  },

  ru: {
    /* NAV */
    'nav.skills':      'Навыки',
    'nav.infosec':     'ИнфоБез',
    'nav.projects':    'Проекты',
    'nav.experience':  'Опыт',
    'nav.contact':     'Контакт',
    'nav.back':        'Проекты',

    /* HERO */
    'hero.eyebrow': 'Python Backend & Automation Developer',
    'hero.title1':  'Создаю',
    'hero.title2':  'инструменты',
    'hero.title3':  'которые работают.',
    'hero.desc':    'Backend-сервисы, пайплайны автоматизации и security-инструменты - созданные для работы 24/7 без ручного управления.',
    'hero.cta1':    'Смотреть проекты',
    'hero.cta2':    'GitHub ↗',
    'hero.stat1':   'Репозиториев',
    'hero.stat2':   'Избранных проектов',

    /* SKILLS */
    'skills.eyebrow': 'Специализация',
    'skills.title':   'Python и автоматизация',
    'skill1.title':   'Асинхронность и параллелизм',
    'skill1.desc':    'Долгоживущие Python-сервисы, параллельные воркеры, эффективная утилизация ресурсов и фоновая обработка.',
    'skill2.title':   'Браузерная автоматизация',
    'skill2.desc':    'Сбор данных, динамический контент, SPA, авторизация и управление сессиями через браузерную автоматизацию.',
    'skill3.title':   'Backend-сервисы',
    'skill3.desc':    'Flask/FastAPI API, фоновые воркеры, обработка очередей, кэширование и health-checked деплойменты.',
    'skill4.title':   'Docker и Linux',
    'skill4.desc':    'Контейнеризованные деплойменты, оркестрация через Docker Compose и управление Linux-серверами.',
    'skill5.title':   'Security-инструменты',
    'skill5.desc':    'Антифишинговая детекция, безопасные API, валидация входных данных, rate limiting и security headers.',
    'skill6.title':   'Мобильная разработка',
    'skill6.desc':    'Нативный Android на Kotlin и Jetpack Compose. TOTP-аутентификация, безопасное локальное хранение и Material 3.',

    /* INFOSEC */
    'infosec.eyebrow': 'Резюме',
    'infosec.title':   'InfoSec',
    'infosec.legis':   'Законодательство и нормативная база',
    'infosec.exp':     'Опыт работы',
    'infosec.tools':   'Инструменты и СЗИ',
    'infosec.role':    'Специалист по защите информации',
    'infosec.roledesc':'Разработка политик ИБ, аудит систем, работа с ИСПДн, обеспечение соответствия требованиям регуляторов. Взаимодействие с ФСТЭК, подготовка документации.', 'legis.1': 'Защита информации, обработка ПДн и безопасность КИИ', 'legis.2': 'Требования по защите ГИС, меры защиты ПДн, значимые объекты КИИ, АСУ ТП', 'legis.3': 'Законодательство об электронной подписи и коммерческой тайне', 'legis.4': 'Уровни защищённости ПДн (УЗ 1-4), критерии категорирования КИИ', 'legis.5': 'Требования к СКЗИ и удостоверяющим центрам', 'legis.6': 'Безопасность финансовых организаций, оценка соответствия ЦБ РФ', 'legis.7': 'Международные стандарты СУИБ', 'legis.8': 'Жизненный цикл АС: требования, ТЗ, стадии испытаний',

    /* PROJECTS */
    'projects.eyebrow': 'Работы',
    'projects.title':   'Избранные проекты',
    'proj1.name':  'Движок TLS-фингерпринтов Chromium',
    'proj1.desc':  'Кастомная сборка Chromium с CDP-командой для подмены JA3/JA3N TLS ClientHello-фингерпринтов на лету - наборы шифров, кривые, порядок расширений - с Python-обёрткой для Playwright.',
    'proj2.name':  'Пост-квантовый крипто-тулкит',
    'proj2.desc':  'Модульный Python-тулкит для квантово-устойчивой криптографии: пост-квантовый обмен ключами KEM, цифровые подписи и AEAD-шифрование с деривацией HKDF на базе liboqs.',
    'proj3.name':  'ML Антифишинговое расширение',
    'proj3.desc':  'Chromium-расширение и Python API-сервер для проверки репутации URL, валидации чёрного/белого списков и ML-детекции фишинга.',
    'proj4.name':  'Desktop 2FA Аутентификатор',
    'proj4.desc':  'Десктопное приложение для управления несколькими профилями аутентификаторов, генерации TOTP-кодов и безопасного хранения данных аккаунтов.',
    'proj5.name':  'Android 2FA Аутентификатор',
    'proj5.desc':  'Нативное Android-приложение на Kotlin и Jetpack Compose для управления профилями аутентификаторов и одноразовыми паролями.',
    'proj6.name':  'Multi-NTP синхронизация времени',
    'proj6.desc':  'Windows-приложение, опрашивающее 150+ NTP-серверов одновременно и применяющее медианное смещение с микросекундной точностью. Системный трей, живые часы и диагностика по каждому серверу.',
    'proj7.name':  'GPU Комбинаторный оптимизатор',
    'proj7.desc':  'CUDA-ускоренный инструмент для поиска оптимальных комбинаций под числовые ограничения и предсказания результирующих значений.',
    'proj8.name':  'Редизайн корпоративного сайта',
    'proj8.desc':  'Статический корпоративный сайт с локализацией RU/EN, тёмной/светлой темой, адаптивной вёрсткой, 3D-визуализацией сети, security-заголовками и SEO-файлами.',
    'proj9.name':  'Java Spring Мессенджер',
    'proj9.desc':  'Учебный backend-проект: аккаунты пользователей, логика сообщений, REST API и серверная архитектура на Java Spring.',

    /* PRIVATE EXPERIENCE */
    'priv.eyebrow': 'Опыт',
    'priv.title':   'Приватная и коммерческая автоматизация',
    'priv1.title':  'Высоконагруженная платформа автоматизации',
    'priv1.desc':   'Python-сервисы для непрерывного мониторинга данных, интеграции внешних API, очередной обработки и доставки уведомлений с акцентом на 24/7 надёжность.',
    'priv2.title':  'Сервис обработки данных и алертинга',
    'priv2.desc':   'Backend-сервис, получающий структурированные данные, обогащающий их локальными датасетами, применяющий правила и отправляющий уведомления по порогу.',
    'priv3.title':  'Управление сессиями и ресурсами',
    'priv3.desc':   'Инструменты для управления аутентифицированными сессиями, фоновых воркеров для долгоживущих процессов и внутреннего API.',

    /* CONTACT */
    'contact.eyebrow': 'Связаться',
    'contact.title':   'Давайте\nработать\nвместе',
    'contact.badge':   'Открыт к предложениям по Python backend и автоматизации',
    'contact.desc':    'Есть задача по backend-разработке, автоматизации или security-инструментам? Пишите - разберёмся.',

    /* FOOTER */
    'footer.copy': 'houwy.space - © 2026',

    /* PROJECT PAGES - shared */
    'proj.overview':     'Обзор',
    'proj.features':     'Возможности',
    'proj.howit':        'Как это работает',
    'proj.install':      'Установка',
    'proj.config':       'Конфигурация',
    'proj.arch':         'Архитектура',
    'proj.production':   'Продакшн',
    'proj.problem':      'Почему GPU?',
    'proj.techstack':    'Стек технологий',
    'proj.requirements': 'Требования',
    'proj.links':        'Ссылки',
    'proj.polling':      'Опрос',
    'proj.games':        'Поддерживаемые игры',
    'proj.patterns':     'Целевые паттерны',
    'proj.storage':      'Хранение данных',
    'proj.viewgithub':   'Открыть на GitHub ↗',
    'proj.back':         '← Проекты',
    'proj.usage':        'Использование',
    'proj.dataflow':     'Поток данных',

    /* Desktop 2FA Authenticator */
    'msda.title':   'Desktop 2FA\nАутентификатор',
    'msda.one':     'Десктопное приложение для управления несколькими профилями аутентификаторов. Генерирует живые TOTP-коды с таймером и хранит данные аккаунтов локально.',
    'msda.ov.body': 'Полнофункциональный десктопный аутентификатор на PyQt5. Управляет несколькими аккаунтами одновременно, генерирует живые 2FA-коды с таймером и обрабатывает все типы подтверждений без мобильного устройства.',
    'msda.ov.b2':   'Создан на PyQt5 для нативного вида. Хранит токены локально - не требует повторного входа при каждом запуске. Локальная архитектура - данные не покидают машину.',
    'msda.feat.title': 'Ключевые возможности',
    's1t':'Несколько аккаунтов', 's1d':'Добавляйте любое количество аккаунтов. Фильтрация по имени или идентификатору.',
    's2t':'Живые TOTP-коды',    's2d':'Генерирует 2FA-коды с живым таймером обратного отсчёта.',
    's3t':'Обработка подтверждений','s3d':'Принимает и управляет ожидающими подтверждениями всех типов.',
    's4t':'Сохранение сессии',  's4d':'Хранит токены локально - не требует повторного входа при каждом запуске.',
    's5t':'Темы оформления',    's5d':'Встроенные тёмная, светлая и высококонтрастная темы с переключением на лету.',
    'msda.inst.title':'Начало работы',
    'msda.inst.body': 'Требуется Python 3.10+. Установите зависимости и запустите:',
    'msda.inst.b2':   'Для добавления аккаунта нажмите +, выберите файл аккаунта, введите данные.',
    'msda.data.title':'Хранение данных',
    'msda.data.k1': 'accounts.json', 'msda.data.v1': 'Метаданные аккаунтов (токены, пути) - не передавайте никому',
    'msda.data.k2': 'settings.json', 'msda.data.v2': 'Пользовательские настройки: тема, интервал обновления и т.д.',
    'msda.data.warn':'⚠ accounts.json содержит токены сессий. Никогда не передавайте этот файл.',

    /* CSFloat */
    'csf.title': 'CSFloat\nAuto Bot',
    'csf.one':   'Async Python-бот, полностью автоматизирующий продажи CS2 на CSFloat. От детекции продажи до подтверждения Steam Guard - без браузерного расширения.',
    'csf.ov.b1': 'У CSFloat нет публичного WebSocket или SSE-потока. Бот использует двухуровневую систему опроса - быстрый опрос уведомлений каждые 15с и резервный heartbeat каждые 60с.',
    'csf.ov.b2': 'Куки Steam-сессии сохраняются на диск, чтобы избежать полного перелогина при следующем запуске.',
    'csf.hw.title':'Полный цикл трейда',
    'csf.s1t':'Детекция продажи',        'csf.s1d':'Быстрый опрос /api/v1/me/notifications каждые 15с. Резервный heartbeat каждые 60с.',
    'csf.s2t':'Принятие на CSFloat',     'csf.s2d':'Вызывает CSFloat REST API для программного принятия ожидающих трейд-оферов.',
    'csf.s3t':'Отправка трейд-офера',    'csf.s3d':'Напрямую отправляет трейд-офер покупателю через Steam Trade API.',
    'csf.s4t':'Подтверждение Steam Guard','csf.s4d':'Использует identity_secret из .maFile для подтверждения офера.',
    'csf.s5t':'Уведомление CSFloat',     'csf.s5d':'Вызывает steam-status API, воспроизводя поведение Chrome-расширения CSFloat.',

    /* Android 2FA Authenticator */
    'and.title': 'Android 2FA\nАутентификатор',
    'and.one':   'Нативный Android-аутентификатор на Jetpack Compose. Управление несколькими профилями, генерация TOTP-кодов и обработка подтверждений - без сторонних серверов.',
    'and.ov.b1': 'Использует стандартный формат файла аккаунта для простого импорта. Вся обработка происходит локально - без сторонних серверов и телеметрии.',
    'and.ov.b2': 'Создан на Jetpack Compose с Material 3. Бэкап устройства отключён для защиты учётных данных от попадания в облако.',
    'and.feat.title':'Ключевые возможности',
    'and.s1t':'Мультиаккаунт',            'and.s1d':'Импортируйте несколько профилей аккаунтов. Мгновенное переключение.',
    'and.s2t':'TOTP с таймером',          'and.s2d':'30-секундные 2FA-коды с визуальным кольцом обратного отсчёта.',
    'and.s3t':'Обработка подтверждений',  'and.s3d':'Просмотр, принятие или отклонение подтверждений с обновлением жестом.',
    'and.s4t':'Авто-обновление сессии',   'and.s4d':'Тихая повторная аутентификация с помощью сохранённых refresh-токенов.',
    'and.s5t':'Material 3 интерфейс',     'and.s5d':'Динамическая цветовая схема, тёмная/светлая тема. Android 11+ (API 31).',
    'and.inst.title':'Сборка из исходников',
    'and.inst.body': 'Требуется Android Studio Ladybug (2024.2+) и JDK 17. Таргет API 35, работает на API 31+.',

    /* Buff */
    'buf.title': 'Buff.market\nAuto Trades',
    'buf.one':   'Автоматическая отправка проданных предметов CS2 на Buff.market. Steam OpenID авторизация, RSA-4096 шифрование сессии и подтверждение Guard - полностью без участия человека.',
    'buf.ov.b1': 'При продаже предмета на Buff.market средства удерживаются до ручной отправки. Этот бот полностью устраняет этот шаг. Авторизуется через Steam OpenID - без ключа API или ручных кук.',
    'buf.ov.b2': 'Самое интересное: бот воспроизводит схему гибридного шифрования RSA + AES-128-CBC, реверс-инженерированную из Android APK Buff.',
    'buf.hw.title':'Процесс доставки',
    'buf.s1t':'Авторизация',        'buf.s1d':'Аутентификация через aiosteampy, затем автоматический Steam OpenID flow к API Buff.',
    'buf.s2t':'Опрос заказов',      'buf.s2d':'Быстрый опрос /api/message/notification каждые 15с. Полный список из /api/market/sell_order/to_deliver.',
    'buf.s3t':'Шифрование сессии',  'buf.s3d':'Сериализует куки Steam-сессии в JSON и шифрует RSA-4096 публичным ключом Buff через гибридную схему RSA + AES-128-CBC.',
    'buf.s4t':'Отправка в Buff',    'buf.s4d':'POST зашифрованной сессии в seller_send_offer. Buff расшифровывает и отправляет трейд покупателю.',
    'buf.s5t':'Подтверждение Guard','buf.s5d':'Подтверждение трейд-офера с использованием identity_secret из .maFile.',

    /* CSMoney */
    'csm.title': 'CS.Money\nAuto Trade',
    'csm.one':   'Воспроизводит логику официального Chrome-расширения CS.Money на чистом Python. Автоматически обрабатывает офера, создаёт Steam трейды и подтверждает их через Steam Guard.',
    'csm.ov.b1': 'При покупке вашего листинга на CS.Money инструмент берёт на себя всё. Он реплицирует flow Chrome-расширения - включая RSA-6144 шифрование для передачи учётных данных Steam.',
    'csm.ov.b2': 'Сессии и куки сохраняются на диск - перезапуск не требует повторного входа. Rate-limit ответы обрабатываются корректно.',
    'csm.hw.title':'Автоматический flow',
    'csm.s1t':'Опрос уведомлений',  'csm.s1d':'Опрос GET /1.0/market/notifications каждые poll_interval секунд. При OFFER_BOUGHT - немедленная проверка трейдов.',
    'csm.s2t':'Получение оферов',   'csm.s2d':'Опрос GET /3.0/market/active-offers каждые 30с как страховочная сетка.',
    'csm.s3t':'Уведомление и трейд','csm.s3d':'Для каждого офера в статусе CREATING: уведомляет CS.Money, затем отправляет Steam-трейд покупателю.',
    'csm.s4t':'Шифрование и отчёт', 'csm.s4d':'Получает RSA-6144 публичный ключ, шифрует сессию, передаёт ID трейда и сессию в CS.Money.',
    'csm.s5t':'Подтверждение Guard','csm.s5d':'Подтверждение трейд-офера через мобильный аутентификатор, используя identity_secret.',

    /* Pattern */
    'pat.title': 'Pattern\nSearcher Bot',
    'pat.one':   'Бот реального времени, мониторящий рынок CS:GO на скины с определёнными паттернами по оптимальным ценам и автоматически покупающий их.',
    'pat.ov.b1': 'В CS:GO у скинов есть индекс паттерна (seed), определяющий внешний вид. Некоторые паттерны крайне редки - конфигурации Blue Gem для Case Hardened, максимальный процент Fade. Такие скины стоят в разы дороже базовой цены.',
    'pat.ov.b2': 'Бот непрерывно мониторит рынок и покупает эти паттерны сразу при появлении по цене ниже заданного порога.',
    'pat.hw.title':'Детекция и покупка',
    'pat.s1t':'Настройка целей',     'pat.s1d':'Настройте конкретные индексы паттернов и максимальные цены покупки для каждого типа скина.',
    'pat.s2t':'Непрерывный мониторинг','pat.s2d':'Опрос API рынка CS:GO в реальном времени, проверка новых листингов по списку целей.',
    'pat.s3t':'Анализ паттерна',     'pat.s3d':'Получает данные inspect link для проверки реального индекса паттерна перед покупкой.',
    'pat.s4t':'Авто-покупка',        'pat.s4d':'Автоматически выполняет покупку при появлении целевого паттерна по цене ниже порога.',

    /* GPU Combinatorial Optimizer */
    'flt.title': 'GPU Комбинаторный\nОптимизатор',
    'flt.one':   'CUDA-ускоренный инструмент для поиска оптимальных комбинаций числовых входных данных под целевое ограничение. Перебор, занимающий часы на CPU, завершается за секунды на GPU.',
    'flt.ov.b1': 'Для заданного пула числовых входных данных и диапазона целевого значения инструмент находит все комбинации из 10 элементов, взвешенное среднее которых попадает в цель. Формула и веса настраиваемы.',
    'flt.ov.b2': 'Поиск точной комбинации для желаемого значения - это комбинаторная задача перебора. Инструмент полностью переносит её на GPU через CUDA, перебирая миллионы комбинаций в секунду.',
    'flt.prob.title':'Почему GPU?',
    'flt.prob.b1': 'При 500 доступных входных данных поиск допустимых 10-элементных комбинаций даёт ~2.6 триллиона вариантов: годы на CPU, секунды-минуты на GPU.',
    'flt.hw.title':'Конвейер вычислений',
    'flt.s1t':'Задать цель',       'flt.s1d':'Укажите целевой диапазон значений и предоставьте пул доступных числовых входных данных.',
    'flt.s2t':'Загрузка на GPU',   'flt.s2d':'Значения передаются в память GPU. CUDA-ядро компилируется и запускается на всех ядрах.',
    'flt.s3t':'Параллельный поиск','flt.s3d':'Каждый поток GPU оценивает подмножество комбинаций, вычисляя взвешенное среднее.',
    'flt.s4t':'Возврат результатов','flt.s4d':'Подходящие комбинации собираются из памяти GPU и возвращаются для использования.',

    /* Редизайн корпоративного сайта */
    'mmts.title':       'Редизайн\nкорпоративного сайта',
    'mmts.one':         'Статический корпоративный сайт с локализацией RU/EN, тёмной/светлой темой, адаптивной вёрсткой, интерактивной 3D-визуализацией сети, security-заголовками и SEO-файлами.',
    'mmts.ov.b1':       'Полный редизайн сайта телекоммуникационной компании. Статический сайт без серверного рендеринга и CMS — размещается напрямую на хостинге, весь интерактив реализован на ванильном JS.',
    'mmts.ov.b2':       '3D-визуализация сети — интерактивный WebGL-дисплей топологии без внешних библиотек. Безопасность: строгий CSP, X-Frame-Options, HSTS и файл security.txt.',
    'mmts.feat.title':  'Ключевые возможности',
    'mmts.s1t':'Двуязычный контент',         'mmts.s1d':'Полная i18n-система с localStorage. Весь текст переключается мгновенно без перезагрузки страницы.',
    'mmts.s2t':'Тёмная / Светлая тема',      'mmts.s2d':'Определение системных предпочтений при первом входе. Плавные CSS-переходы, сохранение между сессиями.',
    'mmts.s3t':'Адаптивная вёрстка',         'mmts.s3d':'Mobile-first дизайн для всех брейкпоинтов. Жидкие сетки, масштабируемая типографика, touch-навигация.',
    'mmts.s4t':'3D-визуализация сети',        'mmts.s4d':'Интерактивный WebGL-дисплей сетевой инфраструктуры. Управление поворотом и зумом мышью.',
    'mmts.s5t':'Security-hardening',          'mmts.s5d':'CSP, X-Frame-Options, HSTS. sitemap.xml, robots.txt, security.txt. Оптимизированные meta-теги для SEO.',

    /* ML Антифишинговое расширение */
    'aph.title':        'ML Антифишинговое\nРасширение',
    'aph.one':          'Chromium-расширение и Python API-сервер для проверки репутации URL, валидации чёрного/белого списков и ML-детекции фишинга. Полностью self-hosted.',
    'aph.ov.b1':        'Двухкомпонентный security-инструмент: Chromium-расширение перехватывает каждое навигационное событие и отправляет URL на локальный Flask API до загрузки страницы. Сервер проверяет URL по настраиваемым спискам и ML-классификатору, возвращает вердикт.',
    'aph.ov.b2':        'Весь стек запускается локально через Docker Compose - без внешних сервисов и телеметрии. Расширение общается только с self-hosted сервером, данные браузинга не покидают машину.',
    'aph.feat.title':   'Ключевые возможности',
    'aph.s1t':'Проверка URL в реальном времени','aph.s1d':'Перехватывает все навигационные события до загрузки страницы. Не требует действий пользователя.',
    'aph.s2t':'Чёрный / Белый список',        'aph.s2d':'Быстрый локальный поиск. Добавление доменов через страницу настроек или API. Проверяется до ML.',
    'aph.s3t':'ML-детекция',                   'aph.s3d':'Обученный классификатор URL для неизвестных доменов. Настраиваемый порог уверенности для блокировки.',
    'aph.s4t':'Rate limiting',                 'aph.s4d':'Ограничение запросов по IP на API-сервере предотвращает злоупотребления.',
    'aph.s5t':'Docker-деплой',                 'aph.s5d':'Полный стек запускается одной командой docker compose up. Легко self-hosted на любой машине с Docker.',
    'aph.hw.title':     'Как это работает',
    'aph.hw.s1t':'Перехват',       'aph.hw.s1d':'Расширение перехватывает навигационное событие до загрузки страницы и извлекает URL.',
    'aph.hw.s2t':'POST на API',    'aph.hw.s2d':'Расширение отправляет URL на локальный Flask-сервер. Соединение только с localhost.',
    'aph.hw.s3t':'Анализ',         'aph.hw.s3d':'Сервер проверяет: чёрный список → белый список → ML-классификатор. Первое совпадение побеждает.',
    'aph.hw.s4t':'Вердикт',        'aph.hw.s4d':'Возвращается safe / phishing / unknown с оценкой уверенности. Расширение показывает индикатор или блокирует.',

    /* Java Spring Мессенджер */
    'jms.title':        'Java Spring\nМессенджер',
    'jms.one':          'Учебный backend-проект: система обмена сообщениями на Spring Boot. REST API, управление пользователями, треды сообщений и стандартная слоистая архитектура Spring.',
    'jms.ov.b1':        'Backend-сервис обмена сообщениями, созданный для изучения архитектуры Spring Boot. Охватывает полный жизненный цикл запроса: REST-контроллер → сервисный слой → JPA-репозиторий, с Spring Security для аутентификации.',
    'jms.ov.b2':        'Разработан как учебный проект, кодовая база демонстрирует идиоматические паттерны Spring: dependency injection, управление транзакциями, DTO-маппинг и интеграционное тестирование с MockMvc.',
    'jms.feat.title':   'Ключевые возможности',
    'jms.s1t':'Управление пользователями','jms.s1d':'Регистрация, вход, CRUD профиля. Хэширование паролей BCrypt. JWT-аутентификация без состояния.',
    'jms.s2t':'Логика сообщений',        'jms.s2d':'Отправка и получение сообщений. Треды по участникам. Постраничная история сообщений.',
    'jms.s3t':'REST API',                'jms.s3d':'Стандартные HTTP-методы и коды статусов. JSON запрос/ответ. Валидация входных данных Spring Validator.',
    'jms.s4t':'Архитектура Spring',      'jms.s4d':'Чёткое разделение Controller → Service → Repository. Spring Data JPA с H2 (dev) и PostgreSQL (prod).',
    'jms.arch.title':   'Архитектура',

    /* Движок TLS-фингерпринтов Chromium */
    'tls.title':   'Движок TLS-фингерпринтов\nChromium',
    'tls.one':     'Кастомная сборка Chromium для Windows, открывающая команду Chrome DevTools Protocol для настройки параметров TLS ClientHello - подмены JA3/JA3N-фингерпринта - на лету. В комплекте Python-пакет playwright_tls.',
    'tls.ov.b1':   'Анти-бот системы вроде Cloudflare, Akamai и DataDome снимают отпечаток TLS ClientHello, чтобы отличить настоящий браузер от автоматизации. Проект патчит Chromium и BoringSSL, делая это рукопожатие полностью управляемым из вашего кода.',
    'tls.ov.b2':   'Параметры идут из Python через Playwright и CDP в браузер и сетевой сервис, вплоть до BoringSSL, формируя кастомный ClientHello на каждое HTTPS-соединение - без прокси и слоя терминации TLS.',
    'tls.feat.title':'Ключевые возможности',
    'tls.s1t':'Управление на лету',       'tls.s1d':'Наборы шифров, поддерживаемые группы и кривые, границы версии TLS и точный порядок расширений - всё задаётся для сессии.',
    'tls.s2t':'JA3 одной строкой',        'tls.s2d':'Передайте стандартную JA3-строку, и обёртка настроит всё рукопожатие одним вызовом.',
    'tls.s3t':'Пресеты браузеров',        'tls.s3d':'Готовые фингерпринты для Chrome, Firefox, Edge, Safari и curl.',
    'tls.s4t':'Перестановка расширений',  'tls.s4d':'Рандомизация на каждое соединение как в Chrome 110+, либо фиксированный порядок для старых целей.',
    'tls.s5t':'Обёртка для Playwright',   'tls.s5d':'Async- и sync-хелперы BrowserWithTLS встраиваются прямо в существующую автоматизацию Playwright.',
    'tls.hw.title':'Поток данных',
    'tls.hw.s1t':'Python-клиент', 'tls.hw.s1d':'Ваш скрипт вызывает set_fingerprint() или set_ja3() у обёртки BrowserWithTLS.',
    'tls.hw.s2t':'CDP-команда',   'tls.hw.s2d':'Обёртка отправляет Emulation.setTLSFingerprint по Chrome DevTools Protocol.',
    'tls.hw.s3t':'Mojo IPC',      'tls.hw.s3d':'Процесс браузера передаёт параметры в сетевой сервис через интерфейс Mojo.',
    'tls.hw.s4t':'BoringSSL',     'tls.hw.s4d':'Пропатченный SSL_set_extension_order() собирает кастомный ClientHello на каждом новом сокете.',
    'tls.inst.title':'Сборка из исходников',
    'tls.inst.body': 'Windows 10/11 x64 и около 250 ГБ на диске. Вся сборка автоматизирована в PowerShell:',
    'tls.use.title':'Управление из Python',
    'tls.note':'Примечание: форматы EC point кроме uncompressed логируются, но не применяются, а согласование ALPN / HTTP-2 не зависит от TLS-фингерпринта.',

    /* Пост-квантовый крипто-тулкит */
    'qrpt.title':  'Пост-квантовый\nкрипто-тулкит',
    'qrpt.one':    'Модульный Python-тулкит для квантово-устойчивой криптографии - пост-квантовый обмен ключами, цифровые подписи и аутентифицированное шифрование за чистым, проверяемым API.',
    'qrpt.ov.b1':  'Квантовые компьютеры угрожают классической криптографии с открытым ключом. qrpt оборачивает пост-квантовые примитивы из liboqs в небольшой API с упором на безопасность, позволяя внедрить квантово-устойчивый обмен ключами и подписи уже сейчас.',
    'qrpt.ov.b2':  'Дизайн ставит во главу корректность и поддерживаемость: строгая валидация входных данных и длины nonce, dataclasses со slots для снижения накладных расходов и воспроизводимый бенчмарк для отлова регрессий производительности.',
    'qrpt.feat.title':'Что внутри',
    'qrpt.s1t':'Обмен ключами KEM',      'qrpt.s1d':'Пост-квантовый механизм инкапсуляции ключа для установления общего секрета по недоверенному каналу.',
    'qrpt.s2t':'Цифровые подписи',       'qrpt.s2d':'Пост-квантовые подпись и проверка для аутентичности и целостности сообщений.',
    'qrpt.s3t':'AEAD-шифрование',        'qrpt.s3d':'Аутентифицированное шифрование с привязанными данными и быстрым путём без лишних копий байтов.',
    'qrpt.s4t':'Деривация HKDF',         'qrpt.s4d':'Выводит AEAD-ключи из общего секрета примерно за 0.007 мс на деривацию.',
    'qrpt.s5t':'Высокоуровневые seal / open','qrpt.s5d':'Хелперы одного вызова, объединяющие KEM, деривацию и AEAD в простой интерфейс seal и open.',
    'qrpt.inst.title':'Установка',
    'qrpt.inst.body': 'Требуется Python 3.11+. AEAD работает сразу; пост-квантовые функции подтягивают опциональный пакет oqs.',
    'qrpt.use.title':'Шифрование общим секретом',

    /* Multi-NTP синхронизация времени */
    'nts.title':   'Multi-NTP\nсинхронизация',
    'nts.one':     'Windows-приложение, синхронизирующее системные часы сразу по множеству NTP-серверов и применяющее медианное смещение с микросекундной точностью.',
    'nts.ov.b1':   'Вместо доверия одному источнику времени инструмент опрашивает десятки серверов одновременно и берёт медианное смещение, поэтому один сбойный или уплывающий сервер не исказит результат.',
    'nts.ov.b2':   'Коррекции пишутся через Windows FILETIME API с разрешением 100 наносекунд, с округлением до масштабирования во избежание дрейфа чисел с плавающей точкой. Живые часы обновляются на 30 fps.',
    'nts.feat.title':'Ключевые возможности',
    'nts.s1t':'Медиана по серверам',     'nts.s1d':'Опрашивает все активные серверы одновременно и берёт медианное смещение для отсечения выбросов.',
    'nts.s2t':'Микросекундная точность', 'nts.s2d':'Смещения в микросекундах; время выставляется через Windows FILETIME с разрешением 100 нс.',
    'nts.s3t':'Каталог 150+ серверов',   'nts.s3d':'Google, Cloudflare, Amazon, NIST, Apple и региональные пулы встроены - можно добавить свои.',
    'nts.s4t':'Фоновая синхронизация',   'nts.s4d':'Настраиваемый интервал авто-синхронизации от 30 секунд до 1 часа в свёрнутом в трей виде.',
    'nts.s5t':'Живая диагностика',       'nts.s5d':'Статус, смещение, round-trip и stratum по каждому серверу, с тёмной и светлой темами.',
    'nts.hw.title':'Как это работает',
    'nts.hw.s1t':'Одновременный опрос', 'nts.hw.s1d':'Все серверы получают NTP v4-запросы через пул потоков с захватом смещения, задержки и stratum.',
    'nts.hw.s2t':'Медианное смещение',  'nts.hw.s2d':'Ответы со stratum выше 4 или ошибки отбрасываются; берётся медиана остальных.',
    'nts.hw.s3t':'Применение коррекции','nts.hw.s3d':'Текущий UTC плюс медианное смещение переводится в FILETIME и пишется через SetSystemTimeAsFileTime.',
    'nts.hw.s4t':'Оценка точности',     'nts.hw.s4d':'Показывается как половина средней round-trip задержки - теоретическая односторонняя погрешность.',
    'nts.inst.title':'Запуск локально',
  }
};

/* ── i18n engine ──────────────────────────────────────────── */
let _lang = localStorage.getItem('houwy-lang') || 'en';

function t(key) {
  return (T[_lang] && T[_lang][key]) || (T.en[key]) || key;
}

function applyLang(lang) {
  _lang = lang;
  localStorage.setItem('houwy-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.innerHTML = val.replace(/\n/g, '<br>');
  });

  // Update lang buttons
  document.querySelectorAll('.seg-opt').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function toggleLang() {
  applyLang(_lang === 'en' ? 'ru' : 'en');
}

/* ── Theme ────────────────────────────────────────────────── */
const DARK_KEY = 'houwy-theme';

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(DARK_KEY, theme);
  const btn = document.getElementById('themeBtn');
  if (btn) btn.innerHTML = theme === 'dark' ? '☀' : '🌙';
}

function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
}

function initTheme() {
  const stored = localStorage.getItem(DARK_KEY);
  const pref = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(pref);
}

/* ── Nav scroll behaviour ─────────────────────────────────── */
function initNav() {
  const bar = document.querySelector('.top-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    bar.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  // Active section highlight
  const sections = [...document.querySelectorAll('section[id]')];
  const links = [...document.querySelectorAll('.top-bar-nav a[href^="#"], .nav-sheet a[href^="#"]')];
  if (sections.length && links.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => io.observe(s));
  }

  // Hamburger
  const ham = document.getElementById('hamBtn');
  const sheet = document.getElementById('navSheet');
  if (ham && sheet) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      sheet.classList.toggle('open');
    });
    sheet.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        sheet.classList.remove('open');
      });
    });
  }
}

/* ── Cursor ───────────────────────────────────────────────── */
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx - 2.5 + 'px';
    dot.style.top  = my - 2.5 + 'px';
  });
  document.addEventListener('mousedown', () => { dot.classList.add('clicking'); ring.classList.add('clicking'); });
  document.addEventListener('mouseup',   () => { dot.classList.remove('clicking'); ring.classList.remove('clicking'); });

  (function lerpRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx - 16 + 'px';
    ring.style.top  = ry - 16 + 'px';
    requestAnimationFrame(lerpRing);
  })();

  document.querySelectorAll('a, button, .project-card, .skill-card, .step, .infosec-card-header').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}

/* ── Scroll reveal ────────────────────────────────────────── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .skill-card').forEach(el => io.observe(el));
}

/* ── Stats counter ────────────────────────────────────────── */
function countUp(el, target, suffix) {
  const dur = 1400, t0 = performance.now();
  (function tick(ts) {
    const p = Math.min((ts - t0) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.innerHTML = Math.round(ease * target) + '<span>' + suffix + '</span>';
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ── Terminal animation ───────────────────────────────────── */
function initTerminal(elId) {
  const out = document.getElementById(elId);
  if (!out) return;
  const lines = [
    {c:'cmd', s:'python main.py --config config.json'},
    {c:'ok',  s:'Config loaded, DB connection OK'},
    {c:'ok',  s:'API endpoints registered'},
    {c:'dim', s:'Worker pool active - 4 threads'},
    {c:'blank'},
    {c:'dim', s:'[14:32:01] Processing queue...'},
    {c:'hi',  s:'[14:32:05] New item received'},
    {c:'dim', s:'  Enriching data  ·  validating schema'},
    {c:'ok',  s:'[14:32:06] Notification sent ✓'},
    {c:'ok',  s:'[14:32:07] Record stored ✓'},
    {c:'blank'},
    {c:'dim', s:'[14:33:20] Polling queue...'},
  ];
  let i = 0;
  function next() {
    if (i >= lines.length) {
      setTimeout(() => { out.innerHTML = ''; i = 0; next(); }, 3500);
      return;
    }
    const l = lines[i++];
    if (i > 1) { const prev = out.lastElementChild; if (prev) prev.classList.remove('cursor'); }
    const span = document.createElement('span');
    if (l.c === 'blank') { span.className = 'tl blank'; out.appendChild(span); setTimeout(next, 180); return; }
    span.className = 'tl ' + l.c + (i === lines.length ? ' cursor' : '');
    span.textContent = l.s || '';
    out.appendChild(span);
    out.scrollTop = out.scrollHeight;
    setTimeout(next, 320 + Math.random() * 280);
  }
  setTimeout(next, 600);
}

/* ── Infosec accordion ────────────────────────────────────── */
function initAccordion() {
  document.querySelectorAll('.infosec-card-header').forEach(h => {
    h.addEventListener('click', () => {
      const card = h.closest('.infosec-card');
      card.classList.toggle('open');
    });
  });
}

/* ── Motion / pointer preferences ─────────────────────────── */
const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER  = window.matchMedia('(pointer: fine)').matches;

/* ── Scroll progress bar ──────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

/* ── Card spotlight (cursor-tracked glow) ─────────────────── */
function initSpotlight() {
  if (!FINE_POINTER) return;
  document.querySelectorAll('.project-card, .skill-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
  });
}

/* ── Hero card 3D tilt ────────────────────────────────────── */
function initTilt() {
  if (!FINE_POINTER || REDUCE_MOTION) return;
  const card = document.querySelector('.hero-card');
  const wrap = document.querySelector('.hero-visual');
  if (!card || !wrap) return;
  wrap.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width  - 0.5;
    const cy = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `rotateY(${cx * 7}deg) rotateX(${-cy * 7}deg)`;
  });
  wrap.addEventListener('mouseleave', () => { card.style.transform = ''; });
}

/* ── Magnetic primary buttons ─────────────────────────────── */
function initMagnetic() {
  if (!FINE_POINTER || REDUCE_MOTION) return;
  document.querySelectorAll('.fab, .btn-filled').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left - r.width  / 2;
      const my = e.clientY - r.top  - r.height / 2;
      el.style.transform = `translate(${mx * 0.22}px, ${my * 0.32}px) scale(1.03)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ── Scroll-to-top button ─────────────────────────────────── */
function initToTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  const toggle = () => btn.classList.toggle('show', window.scrollY > 640);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? 'auto' : 'smooth' }));
}

/* ── Page-specific init ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  applyLang(_lang);
  initNav();
  initCursor();
  initReveal();
  initTerminal('termOut');
  initAccordion();
  initScrollProgress();
  initSpotlight();
  initTilt();
  initMagnetic();
  initToTop();

  // Hero stats counter
  const stat1 = document.getElementById('stat1');
  const stat2 = document.getElementById('stat2');
  if (stat1) setTimeout(() => { countUp(stat1, 60, '+'); }, 800);
  if (stat2) setTimeout(() => { countUp(stat2, 9, '+'); }, 1000);
});
