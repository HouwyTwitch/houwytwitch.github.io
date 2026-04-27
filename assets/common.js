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
    'hero.stat2':    'Open Projects',

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
    'proj1.name':  'Corporate Website Rework',
    'proj1.desc':  'Static corporate website redesign with RU/EN localization, dark/light theme, responsive layout, interactive 3D network visualization, security headers and SEO files.',
    'proj2.name':  'ML Anti-Phishing Extension',
    'proj2.desc':  'Chromium extension and Python API server for URL reputation checks, blacklist/whitelist validation and ML-based phishing detection.',
    'proj3.name':  'Desktop 2FA Authenticator',
    'proj3.desc':  'Desktop application for managing multiple authenticator profiles, generating TOTP codes and handling secure local account data.',
    'proj4.name':  'Android 2FA Authenticator',
    'proj4.desc':  'Native Android application built with Kotlin and Jetpack Compose for managing authenticator profiles and time-based one-time passwords.',
    'proj5.name':  'GPU Combinatorial Optimizer',
    'proj5.desc':  'CUDA-accelerated tool for searching optimal combinations under numeric constraints and predicting resulting values.',
    'proj6.name':  'Java Spring Messenger',
    'proj6.desc':  'Educational backend project with user accounts, messaging logic, REST API and server-side application structure built with Java Spring.',

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
    'hero.stat2':   'Открытых проектов',

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
    'proj1.name':  'Редизайн корпоративного сайта',
    'proj1.desc':  'Статический корпоративный сайт с локализацией RU/EN, тёмной/светлой темой, адаптивной вёрсткой, 3D-визуализацией сети, security-заголовками и SEO-файлами.',
    'proj2.name':  'ML Антифишинговое расширение',
    'proj2.desc':  'Chromium-расширение и Python API-сервер для проверки репутации URL, валидации чёрного/белого списков и ML-детекции фишинга.',
    'proj3.name':  'Desktop 2FA Аутентификатор',
    'proj3.desc':  'Десктопное приложение для управления несколькими профилями аутентификаторов, генерации TOTP-кодов и безопасного хранения данных аккаунтов.',
    'proj4.name':  'Android 2FA Аутентификатор',
    'proj4.desc':  'Нативное Android-приложение на Kotlin и Jetpack Compose для управления профилями аутентификаторов и одноразовыми паролями.',
    'proj5.name':  'GPU Комбинаторный оптимизатор',
    'proj5.desc':  'CUDA-ускоренный инструмент для поиска оптимальных комбинаций под числовые ограничения и предсказания результирующих значений.',
    'proj6.name':  'Java Spring Мессенджер',
    'proj6.desc':  'Учебный backend-проект: аккаунты пользователей, логика сообщений, REST API и серверная архитектура на Java Spring.',

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
  if (stat2) setTimeout(() => { countUp(stat2, 6, '+'); }, 1000);
});
