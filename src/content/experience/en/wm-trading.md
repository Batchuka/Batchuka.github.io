---
order: 1
org: WM Trading
url: https://www.wmtrading.com.br/en/
logo: /logos/wm.png
mark: WM
role: RPA Intern → Software Engineer → Senior Software Engineer and Tech Lead
period: Jun 2021 — Jul 2026
place: Vitória, Brazil · foreign trade
summary: I was hired to build RPA and left as a senior engineer and tech lead of more than 10 critical projects. Along the way, I replaced emails and spreadsheets with systems, led a team of four developers and designed the architecture the startup [Simple Hubi](#simple-hubi) was born from.
tags:
  - 2,200+ h/year of manual work removed
  - up to 5,000 processes/day
  - 4 developers led
  - Java · Python · AWS
photos:
  - src: /photos/wm-palestra-ml-2021.webp
    alt: Matheus standing and presenting to the team in front of a screen showing games trained with machine learning.
    caption: A talk on machine learning, 2021.
    position: 35% center
  - src: /photos/wm-mentoria.webp
    alt: Matheus standing behind a colleague, looking at the screen while thinking.
    caption: Helping a junior developer find a bug, 2023.
    position: center 30%
  - src: /photos/wm-equipe-bug.webp
    alt: Three developers around a computer by the office window.
    caption: Hunting a bug with the team, 2026.
    position: center 35%
    marker: { x: 49, y: 31, label: me }
highlights:
  - label: 2021–2022 · Back office
    diagram: pytrobot
    title: Bots for operations, and one standard for all of them
    summary: "Before writing any automation, I went to understand the process up close, with the people doing the work, and asked what that team could stop doing for good. I built the bots in Python and the Java/Spring Boot and Angular applications that supported them. With so many standalone bots, each written its own way, the problem was no longer the bot but the standard. I took the model from REFramework, the state machine UiPath uses for its own bots, and brought it to Python."
    bullets:
      - gain: +1 person freed
        icon: person
        text: "Freight quotes: the bot sends the client the carriers’ quotes and the client picks one with a click. It freed the person who did only that."
      - gain: +1 h/day per person
        icon: clock
        text: "Document upload: with file names standardized alongside the Quality team, a bot uploads the operations documents on its own."
      - gain: +2 people freed
        icon: unlock
        text: "Due diligence: a desktop app does everything but the captcha. Checking every client and supplier, unfeasible before, became routine."
      - gain: 2,200 h/year
        icon: bot
        text: "Other bots for logistics, legal and compliance: together, more than 2,200 fewer hours of manual work a year."
      - gain: deploy on commit
        icon: deploy
        text: "On-premises infrastructure: bots in Docker on Linux servers, deployed automatically on every commit through GitHub Actions."
      - gain: 1 standard for all
        icon: standard
        text: "PyTRobot: a state-machine RPA framework that became the mold for every bot: job, data, transactions, report."
    links:
      - text: PyTRobot ↗
        href: https://github.com/Batchuka/rpa-stateMachine-framework
      - text: CLI ↗
        href: https://github.com/Batchuka/rpa-stateMachine-cli
  - label: 2023 · Document Understanding and NCM
    diagram: fiscal
    title: From invoice to NCM classification, without email
    summary: "In 2023, I was handed a mission. A new client, BYD, was about to sharply increase the number of invoices to absorb. It was one or the other: either we automated the manual process, or the customs clearance team would have to double."
    bullets:
      - gain: "no team doubling"
        icon: person
        text: "200 invoices a month, with up to 800 items each: operations only uploads the invoice and the customs broker only confirms what the system suggests."
      - gain: "4 document types"
        icon: doc
        text: "Two Spring Boot microservices, DU and CLF, configurable per layout: invoices, packing lists, exchange contracts and bills of lading."
      - gain: "license before shipping"
        icon: bell
        text: "With the process in a system came triggers that anticipate problems, such as a still-pending import license."
      - gain: "suggested NCM"
        icon: spark
        text: "Bedrock and a FAISS vector search suggest the classification from the client’s past classifications."
      - gain: "BYD: the fastest"
        icon: bolt
        text: "BYD, the most complex client in the portfolio, became the fastest to classify. Everything is kept in S3 to train models in the future."
  - label: 2023–2024 · Platform
    diagram: plataforma
    title: Event bus and route orchestrator
    summary: "After the success with BYD, the company decided to take the solution to a digital import product for individual buyers. On just one of the marketplaces under consideration, that meant 5,000 processes a day, and the integrations and requests of every system would more than double. I started leading four developers and, in under three months, designed a small architecture, using only AWS services, that put the microservices, isolated until then, to run the whole process together. I took the model from industrial networks."
    bullets:
      - gain: "< 3 months"
        icon: clock
        text: "Only AWS services, modeled on an industrial network: RX and TX buses on EventBridge, a single master and a protocol of my own."
      - gain: "0 refactoring"
        icon: plug
        text: "eventbus library: with AOP, internal Spring events become bus events. Not a single business rule had to change."
      - gain: "ownerless step alerts"
        icon: bell
        text: "The orchestrator runs routes the business declares in a web screen and, when no one can perform a step, it warns the team."
      - gain: "5,000 processes/day"
        icon: bolt
        text: "SQS polling with back-off borrowed from TCP; the visibility timeout keeps the same event from being processed twice."
      - gain: "became Simple Hubi"
        icon: spark
        text: "The project changed course in 2024 and became the seed of [Simple Hubi](#simple-hubi), another company in the group."
    links:
      - text: demo-event-driven ↗
        href: https://github.com/Batchuka/demo-event-driven
      - text: simplehubi.com ↗
        href: https://simplehubi.com/
  - label: 2025–2026 · Architecture
    title: Transit, Banking and the BPMS
    summary: "With the architecture in place, the Simple Hubi project moved to a third-party team and I went back to the company’s internal systems. The question changed from “how do I automate this task” to “how do these automations fit together”, and I worked more as an architect than as a developer."
    bullets:
      - gain: "+1 person freed"
        icon: person
        text: "Transit: reads the carriers’ websites and updates the shipping and arrival dates of each cargo in the ERP. It freed one person in logistics."
      - gain: "−4 threads per process"
        icon: mail
        text: "Banking: a single channel between every department and Finance, instead of emails; on average, four fewer threads per process."
      - gain: "predictable FX"
        icon: shield
        text: "Banking also brought predictability and stability to the foreign exchange contract flow, which is critical."
      - gain: "automatic reconciliation"
        icon: plug
        text: "Integration with financial institutions to reconcile debits automatically."
      - gain: "BPMS in place"
        icon: standard
        text: "Finally, I helped roll out the company’s internal BPMS and integrated these applications into it."
---
