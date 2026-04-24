/* ============================================================
   common.js - Theme · i18n · Cursor · Nav · Reveal
   ============================================================ */

/* ── Translations ─────────────────────────────────────────── */
const T = {
  en: {
    /* NAV */
    'nav.skills':    'Skills',
    'nav.infosec':   'InfoSec',
    'nav.projects':  'Projects',
    'nav.contact':   'Contact',
    'nav.back':      'Projects',

    /* HERO */
    'hero.eyebrow':  'Python Dev · InfoSec Specialist',
    'hero.title1':   'Building',
    'hero.title2':   'tools',
    'hero.title3':   'that ship.',
    'hero.desc':     'Trading automation, anti-bot bypass, and information security - tools that run 24/7 without manual input.',
    'hero.cta1':     'View Projects',
    'hero.cta2':     'GitHub ↗',
    'hero.stat1':    'Repositories',
    'hero.stat2':    'Pull Shark',

    /* SKILLS */
    'skills.eyebrow':  'Specialization',
    'skills.title':    'Python & Automation',
    'skill1.title':    'Async & Concurrency',
    'skill1.desc':     'High-throughput async solutions. Trading bots, parallel tasks, efficient resource utilization.',
    'skill2.title':    'Scraping & Browser Automation',
    'skill2.desc':     'Data collection at any scale. Dynamic content, SPAs, auth flows and session management.',
    'skill3.title':    'Anti-Bot Bypass',
    'skill3.desc':     'Deep knowledge of TLS fingerprinting, behavioral analysis, canvas/WebGL evasion.',
    'skill4.title':    'Proxy Infrastructure',
    'skill4.desc':     'Pool management, rotation, load balancing. HTTP/SOCKS5, residential and datacenter proxies.',
    'skill5.title':    'API Integration & Bots',
    'skill5.desc':     'Steam, CS2 marketplaces, exchange APIs. Full trading automation - no browser required.',
    'skill6.title':    'Mobile Development',
    'skill6.desc':     'Native Android in Kotlin. Modern SDA - a full Steam Guard reimplementation from scratch.',

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
    'proj1.name':  'Modern SDA',
    'proj1.desc':  'A modern PyQt5 Steam Desktop Authenticator - multi-account, live TOTP codes, all confirmation types, proxy support.',
    'proj2.name':  'CSFloat Auto Bot',
    'proj2.desc':  'Async Python bot automating the full CS2 seller flow on CSFloat - sale detection to Steam Guard confirm, no browser needed.',
    'proj3.name':  'Modern SDA Android',
    'proj3.desc':  'Native Android Steam authenticator built with Jetpack Compose. Multi-account, TOTP, trade confirmations.',
    'proj4.name':  'Buff.market Auto Trades',
    'proj4.desc':  'Automates item delivery on Buff.market - Steam auth, RSA-4096 encrypted session handoff, Guard confirmation.',
    'proj5.name':  'CS.Money Auto Trade',
    'proj5.desc':  'Replicates the CS.Money Chrome extension - polls notifications, fires trade offers and confirms them via Steam Guard.',
    'proj6.name':  'Pattern Searcher Bot',
    'proj6.desc':  'Real-time bot hunting CS:GO skins with specific patterns at the best prices. Continuous market monitoring.',
    'proj7.name':  'CSGOFloatMaster',
    'proj7.desc':  'GPU-accelerated CUDA tool that finds optimal CS:GO trade-up combinations with a predictable float result.',

    /* CONTACT */
    'contact.eyebrow': 'Get in touch',
    'contact.title':   "Let's work\ntogether",
    'contact.badge':   'Available for projects',
    'contact.desc':    'Have a task in automation, security, or Python development? Reach out - let\'s figure it out.',

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

    /* Modern SDA */
    'msda.title':   'Modern\nSDA',
    'msda.one':     'A modern PyQt5 Steam Desktop Authenticator. Multi-account management, live TOTP codes, all confirmation types, and per-account proxy support.',
    'msda.ov.body': 'Modern SDA is a full replacement for the original Steam Desktop Authenticator. It manages multiple Steam accounts simultaneously, generates live Guard codes with a countdown timer, and handles every type of Steam confirmation - trades, market listings, API key activations - without needing the mobile app.',
    'msda.ov.b2':   'Built with PyQt5 for a native desktop feel, it stores refresh tokens so you never re-login on every launch. A per-account HTTP proxy system lets you isolate traffic per account.',
    'msda.feat.title': 'Key capabilities',
    's1t':'Multiple accounts', 's1d':'Add and manage as many Steam accounts as needed. Filter by name or Steam ID.',
    's2t':'Live TOTP codes',   's2d':'Generates Steam Guard codes with a live countdown timer - always ready.',
    's3t':'All confirmation types', 's3d':'Accepts any Steam confirmation: trades, market listings, API key activations, and more.',
    's4t':'Session persistence','s4d':'Stores refresh tokens so you don\'t re-login on every launch.',
    's5t':'Themes',            's5d':'Built-in dark, light, and high-contrast themes with live switching.',
    'msda.inst.title':'Getting started',
    'msda.inst.body': 'Requires Python 3.10+. Install dependencies and run:',
    'msda.inst.b2':   'To add an account, click + , select your .mafile, enter password and optional proxy.',
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

    /* SDA Android */
    'and.title': 'Modern SDA\nAndroid',
    'and.one':   'A native Android Steam authenticator built with Jetpack Compose. Manage multiple accounts, generate TOTP codes, and approve or decline confirmations - all from your phone, with no third-party servers.',
    'and.ov.b1': 'Modern SDA Android uses the standard .mafile format so any account from the original SDA works instantly. All traffic goes directly to Steam\'s official APIs - no third-party servers, no telemetry.',
    'and.ov.b2': 'Built with Jetpack Compose and Material 3, it supports dynamic color theming. Device backups are disabled to prevent credentials appearing in cloud backups.',
    'and.feat.title':'Key capabilities',
    'and.s1t':'Multi-account support',     'and.s1d':'Import any number of .mafile accounts. Switch between them instantly.',
    'and.s2t':'TOTP with countdown',       'and.s2d':'30-second Steam Guard codes with a visual countdown ring.',
    'and.s3t':'Trade & market confirmations','and.s3d':'View, accept, or decline confirmations with swipe-to-refresh.',
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

    /* FloatMaster */
    'flt.title': 'CSGO\nFloatMaster',
    'flt.one':   'GPU-accelerated CUDA tool for finding optimal CS:GO trade-up combinations with a predictable float result. A brute-force problem that takes hours on CPU completes in seconds on GPU.',
    'flt.ov.b1': 'In CS:GO, a trade-up contract takes 10 skins and produces one from the next rarity tier. The output float is the weighted average of the 10 inputs, mapped through a per-skin formula.',
    'flt.ov.b2': 'Finding the exact combination that produces a desired float is a combinatorial search problem. This tool offloads it entirely to the GPU using CUDA, searching millions of combinations per second.',
    'flt.prob.title':'Why GPU?',
    'flt.prob.b1': 'Suppose you want a Factory New AWP | Dragon Lore below float 0.01. With 500 available input skins, that\'s ~2.6 trillion combinations - years at CPU speed, seconds to minutes on GPU.',
    'flt.hw.title':'Computation pipeline',
    'flt.s1t':'Define target',     'flt.s1d':'Specify the desired output skin and target float range. Provide the pool of available inputs.',
    'flt.s2t':'Upload to GPU',     'flt.s2d':'Input float values transferred to GPU memory. CUDA kernel compiled and launched across all cores.',
    'flt.s3t':'Parallel brute-force','flt.s3d':'Each GPU thread evaluates a subset of combinations, computing the weighted average float.',
    'flt.s4t':'Return results',    'flt.s4d':'Matching combinations collected from GPU memory - ready to execute as real trade-up contracts.',
  },

  ru: {
    /* NAV */
    'nav.skills':   'Навыки',
    'nav.infosec':  'ИнфоБез',
    'nav.projects': 'Проекты',
    'nav.contact':  'Контакт',
    'nav.back':     'Проекты',

    /* HERO */
    'hero.eyebrow': 'Python-разработчик · Специалист по ИБ',
    'hero.title1':  'Создаю',
    'hero.title2':  'инструменты',
    'hero.title3':  'которые работают.',
    'hero.desc':    'Торговая автоматизация, обход антибот-систем и информационная безопасность - инструменты, работающие 24/7 без ручного управления.',
    'hero.cta1':    'Смотреть проекты',
    'hero.cta2':    'GitHub ↗',
    'hero.stat1':   'Репозиториев',
    'hero.stat2':   'Pull Shark',

    /* SKILLS */
    'skills.eyebrow': 'Специализация',
    'skills.title':   'Python и автоматизация',
    'skill1.title':   'Асинхронность и параллелизм',
    'skill1.desc':    'Высоконагруженные async-решения. Торговые боты, параллельные задачи, эффективная утилизация ресурсов.',
    'skill2.title':   'Парсинг и браузерная автоматизация',
    'skill2.desc':    'Сбор данных любой сложности. Динамический контент, SPA, авторизация и управление сессиями.',
    'skill3.title':   'Обход антибот-систем',
    'skill3.desc':    'Глубокое понимание TLS-фингерпринтинга, поведенческого анализа, canvas/WebGL-обходов.',
    'skill4.title':   'Прокси-инфраструктура',
    'skill4.desc':    'Управление пулами, ротация, балансировка нагрузки. HTTP/SOCKS5, резидентные и дата-центр прокси.',
    'skill5.title':   'API-интеграции и боты',
    'skill5.desc':    'Steam, CS2-маркетплейсы, биржевые API. Полная автоматизация торговли без браузера.',
    'skill6.title':   'Мобильная разработка',
    'skill6.desc':    'Нативный Android на Kotlin. Modern SDA - полная реализация Steam Guard с нуля.',

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
    'proj1.name':  'Modern SDA',
    'proj1.desc':  'Современный PyQt5 Steam Desktop Authenticator - мультиаккаунт, живые TOTP-коды, все типы подтверждений, поддержка прокси.',
    'proj2.name':  'CSFloat Auto Bot',
    'proj2.desc':  'Async Python-бот, полностью автоматизирующий продажи CS2 на CSFloat - от детекции продажи до подтверждения Steam Guard.',
    'proj3.name':  'Modern SDA Android',
    'proj3.desc':  'Нативный Android-аутентификатор Steam на Jetpack Compose. Мультиаккаунт, TOTP, подтверждения трейдов.',
    'proj4.name':  'Buff.market Auto Trades',
    'proj4.desc':  'Автоматическая отправка проданных предметов на Buff.market - Steam-авторизация, RSA-4096 шифрование сессии, подтверждение Guard.',
    'proj5.name':  'CS.Money Auto Trade',
    'proj5.desc':  'Реплицирует логику Chrome-расширения CS.Money - опрашивает уведомления, отправляет трейд-оферы и подтверждает их через Steam Guard.',
    'proj6.name':  'Pattern Searcher Bot',
    'proj6.desc':  'Бот реального времени для охоты на скины CS:GO с определёнными паттернами по выгодным ценам.',
    'proj7.name':  'CSGOFloatMaster',
    'proj7.desc':  'GPU-ускоренный CUDA-инструмент для поиска оптимальных комбинаций контрактов CS:GO с предсказуемым флоатом.',

    /* CONTACT */
    'contact.eyebrow': 'Связаться',
    'contact.title':   'Давайте\nработать\nвместе',
    'contact.badge':   'Открыт для предложений',
    'contact.desc':    'Есть задача по автоматизации, безопасности или Python-разработке? Пишите - разберёмся.',

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

    /* Modern SDA */
    'msda.title':   'Modern\nSDA',
    'msda.one':     'Современный PyQt5 Steam Desktop Authenticator. Мультиаккаунт, живые TOTP-коды, все типы подтверждений, поддержка прокси на каждый аккаунт.',
    'msda.ov.body': 'Modern SDA - полная замена оригинального Steam Desktop Authenticator. Управляет несколькими Steam-аккаунтами одновременно, генерирует живые коды Guard с таймером отсчёта и обрабатывает все типы подтверждений Steam.',
    'msda.ov.b2':   'Создан на PyQt5 для нативного вида десктопного приложения. Хранит refresh-токены, поэтому не требует повторного входа при каждом запуске.',
    'msda.feat.title': 'Ключевые возможности',
    's1t':'Несколько аккаунтов', 's1d':'Добавляйте любое количество Steam-аккаунтов. Фильтрация по имени или Steam ID.',
    's2t':'Живые TOTP-коды',    's2d':'Генерирует коды Steam Guard с живым таймером обратного отсчёта.',
    's3t':'Все типы подтверждений','s3d':'Принимает любые подтверждения Steam: трейды, размещения на маркете, активации ключей API.',
    's4t':'Сохранение сессии',  's4d':'Хранит refresh-токены - не требует повторного входа при каждом запуске.',
    's5t':'Темы оформления',    's5d':'Встроенные тёмная, светлая и высококонтрастная темы с переключением на лету.',
    'msda.inst.title':'Начало работы',
    'msda.inst.body': 'Требуется Python 3.10+. Установите зависимости и запустите:',
    'msda.inst.b2':   'Для добавления аккаунта нажмите +, выберите .mafile, введите пароль и при необходимости прокси.',
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

    /* SDA Android */
    'and.title': 'Modern SDA\nAndroid',
    'and.one':   'Нативный Android-аутентификатор Steam на Jetpack Compose. Управление несколькими аккаунтами, генерация TOTP-кодов и подтверждение трейдов - без сторонних серверов.',
    'and.ov.b1': 'Modern SDA Android использует стандартный формат .mafile, поэтому любой аккаунт из оригинального SDA работает сразу. Весь трафик идёт напрямую к официальным API Steam.',
    'and.ov.b2': 'Создан на Jetpack Compose с Material 3. Бэкап устройства отключён для защиты учётных данных от попадания в облако.',
    'and.feat.title':'Ключевые возможности',
    'and.s1t':'Мультиаккаунт',            'and.s1d':'Импортируйте любое количество .mafile аккаунтов. Мгновенное переключение.',
    'and.s2t':'TOTP с таймером',          'and.s2d':'30-секундные коды Steam Guard с визуальным кольцом обратного отсчёта.',
    'and.s3t':'Подтверждение трейдов',    'and.s3d':'Просмотр, принятие или отклонение подтверждений с обновлением жестом.',
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

    /* FloatMaster */
    'flt.title': 'CSGO\nFloatMaster',
    'flt.one':   'GPU-ускоренный CUDA-инструмент для поиска оптимальных комбинаций контрактов CS:GO с предсказуемым флоатом. Задача, занимающая часы на CPU, решается за секунды на GPU.',
    'flt.ov.b1': 'В CS:GO контракт на обмен берёт 10 скинов и создаёт один из следующего уровня редкости. Флоат результата - взвешенное среднее 10 входных флоатов по формуле конкретного скина.',
    'flt.ov.b2': 'Поиск точной комбинации для желаемого флоата - это комбинаторная задача перебора. Инструмент полностью переносит её на GPU через CUDA, перебирая миллионы комбинаций в секунду.',
    'flt.prob.title':'Почему GPU?',
    'flt.prob.b1': 'Допустим, нужен Factory New AWP | Dragon Lore с флоатом ниже 0.01. При 500 доступных скинах входа - ~2.6 триллиона комбинаций: годы на CPU, секунды-минуты на GPU.',
    'flt.hw.title':'Конвейер вычислений',
    'flt.s1t':'Задать цель',       'flt.s1d':'Укажите желаемый скин и диапазон флоата. Предоставьте пул доступных входных скинов.',
    'flt.s2t':'Загрузка на GPU',   'flt.s2d':'Значения флоатов передаются в память GPU. CUDA-ядро компилируется и запускается на всех ядрах.',
    'flt.s3t':'Параллельный перебор','flt.s3d':'Каждый поток GPU оценивает подмножество комбинаций, вычисляя взвешенное среднее флоата.',
    'flt.s4t':'Возврат результатов','flt.s4d':'Подходящие комбинации собираются из памяти GPU - готовы для реального выполнения контрактов.',
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
    {c:'ok',  s:'Session restored from cookies.json'},
    {c:'ok',  s:'Steam connection established'},
    {c:'',    s:'Notification poll active - 15s interval', cls:'dim'},
    {c:'blank'},
    {c:'dim', s:'[14:32:01] Polling notifications...'},
    {c:'hi',  s:'[14:32:07] New sale detected!'},
    {c:'dim', s:'  AK-47 | Redline FT  ·  $24.80'},
    {c:'ok',  s:'[14:32:08] Trade offer sent ✓'},
    {c:'ok',  s:'[14:32:09] Steam Guard confirmed ✓'},
    {c:'blank'},
    {c:'dim', s:'[14:33:20] Polling...'},
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

/* ── Page-specific init ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  applyLang(_lang);
  initNav();
  initCursor();
  initReveal();
  initTerminal('termOut');
  initAccordion();

  // Hero stats counter
  const stat1 = document.getElementById('stat1');
  const stat2 = document.getElementById('stat2');
  if (stat1) setTimeout(() => { countUp(stat1, 20, '+'); }, 800);
  if (stat2) setTimeout(() => { countUp(stat2, 3, '×'); }, 1000);
});
