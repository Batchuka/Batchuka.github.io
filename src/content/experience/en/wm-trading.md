---
order: 1
org: WM Trading
url: https://www.linkedin.com/company/wmtrading/
mark: WM
role: RPA Intern → Software Engineer → Senior Software Engineer and Tech Lead
period: Jun 2021 — Jul 2026
place: Vitória, Brazil · foreign trade
summary: I joined as an intern to build RPA bots and left as a senior engineer and tech lead. Along the way I replaced emails and spreadsheets with systems, led a team of four developers and designed the architecture that Simple Hubi grew out of.
tags:
  - 2,200+ h/year of manual work removed
  - up to 5,000 processes/day
  - led 4 developers
  - Java · Python · AWS
photos:
  - src: /photos/wm-palestra-ml-2021.webp
    alt: Matheus standing and presenting to the team in front of a screen showing games trained with machine learning.
    caption: A talk on artificial intelligence and machine learning at WM’s 2021 retrospective.
    position: 35% center
  - src: /photos/wm-mentoria.webp
    alt: Matheus standing behind a colleague, looking at the screen while thinking.
    caption: Helping a junior developer track down a bug.
    position: center 30%
  - src: /photos/wm-equipe-bug.webp
    alt: Three developers around a computer by the office window.
    caption: Hunting a bug with the team.
    position: center 35%
    marker: { x: 49, y: 31, label: me }
highlights:
  - label: 2021–2022 · Back office
    title: Bots that take repetitive work off operations
    summary: "As an intern I built the Python bots and the Java/Spring Boot and Angular apps that supported them. The strategy was always the same: find out what each team could stop doing."
    bullets:
      - "International freight quotes: driven by flags in the ERP’s Oracle database, a bot emails the client every carrier quote, and the client confirms one with a single click. It freed a logistics employee who did only that."
      - "Document upload: with the Quality team I standardized file names, mapped the ERP’s document-management API through DevTools and wrote a bot that sweeps the file server and uploads the legal documents five times a day."
      - "Due diligence: after two years losing the race against captchas, I switched to a human-in-the-loop design. An installable desktop app (Tkinter) fetches the queue of pending checks and does everything except the captcha; it updates itself on every GitHub release."
      - "Infrastructure: an on-premises Linux server running the bots in Docker, deploys through GitHub Actions with a local runner, and web apps on ECS, RDS MySQL and Angular served by CloudFront."
  - label: Framework
    title: PyTRobot, a standard for the bots
    summary: With so many standalone bots, I needed reuse and a common way to write them.
    bullets:
      - "I created PyTRobot (Python Transactional Robot), a state-machine RPA framework that abstracts the usual steps of a corporate bot: check for a job, load its data, process each transaction and write the report."
      - It is still in use at the company.
    links:
      - text: PyTRobot ↗
        href: https://github.com/Batchuka/rpa-stateMachine-framework
      - text: CLI ↗
        href: https://github.com/Batchuka/rpa-stateMachine-cli
  - label: Tax · BYD
    title: Tax Classification and Document Understanding
    summary: Declaring goods correctly is the core of a trading company’s business, and the process lived on emails between operations and the customs team, under deadlines backed by heavy fines.
    bullets:
      - "When BYD arrived (more than 200 invoices a month, against 1.2 for a typical client, with up to 800 items each), the company had to either double the customs team or automate. I built a web app where operations only uploads the invoice and the customs broker only classifies what the system points to."
      - "I split extraction into a configurable Document Understanding microservice: OCR on Lambda, text normalization, extraction driven by per-layout JSON and a transformation step using EventBridge’s input-path pattern. It now handles invoices, packing lists, exchange contracts and bills of lading."
      - "Having the process in a system made room for triggers that anticipate problems, such as import licenses that must be issued before shipping, and, in 2025, an LLM layer that suggests classifications from the client’s history."
      - "I kept every document and JSON in S3 to train extraction models later. BYD, the most complex client in the portfolio, became the fastest one to classify."
  - label: 2023–2024 · Platform
    title: Event bus and route orchestrator
    summary: The company decided to enter cross-border retail, expecting 5,000 small import processes a day. I started leading four developers, two backend and two frontend, and designing how every system would talk to the others.
    bullets:
      - "Instead of AMQP or MQTT, I built the messaging on AWS services, inspired by industrial networks: RX and TX buses on EventBridge, a single master, and domain apps that announce what they can do, as in OPC UA."
      - "I wrote the eventbus library, which turns Spring application events into bus messages. Developers only publish events; the domain never knows it is being orchestrated."
      - "The orchestrator runs “routes” that the business declares in a web screen, creates the bus rules by itself and, when nobody answers for a step, tells the team something is missing."
      - "Inside, two threads: one polls SQS with a TCP-inspired back-off, the other processes events in timestamp order through a heap. With several instances on Elastic Beanstalk, the SQS visibility timeout prevents double processing."
      - The project changed course in 2024 and became the seed of Simple Hubi, another company in the group.
    links:
      - text: demo-event-driven ↗
        href: https://github.com/Batchuka/demo-event-driven
      - text: simplehubi.com ↗
        href: https://simplehubi.com/
  - label: 2024–2026 · Architecture
    title: Transit, Banking and the BPMS
    summary: In the senior years I worked more as the architect of the automations than as a developer, and helped roll out an internal BPMS.
    bullets:
      - "Transit: coordinates two Lambdas, one that tracks containers through port and carrier APIs and one that updates shipping and arrival dates in the ERP, from where they reach clients through BI."
      - "Banking: a desk where every team requests payments from Finance, queued by urgency, plus the automated booking of exchange contracts in the ERP."
      - I integrated these apps into the BPMS before leaving.
footnote: "Also built, not detailed here: RADAR linking and checks, process closing, ERP master-data updates, email extraction, the Despacho Ágil and Nota Fiscal apps and the webhooks microservice."
---
