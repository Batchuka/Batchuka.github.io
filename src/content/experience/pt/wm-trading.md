---
order: 1
org: WM Trading
url: https://www.linkedin.com/company/wmtrading/
mark: WM
role: Estagiário de RPA → Engenheiro de Software → Engenheiro de Software Sênior e Líder Técnico
period: jun. 2021 — jul. 2026
place: Vitória, ES · comércio exterior
summary: Entrei como estagiário para fazer robôs de RPA e saí como engenheiro sênior e líder técnico. No caminho, troquei e-mails e planilhas por sistemas, conduzi uma equipe de quatro desenvolvedores e desenhei a arquitetura de onde nasceu a Simple Hubi.
tags:
  - 2.200+ h/ano de trabalho manual eliminadas
  - até 5.000 processos/dia
  - 4 devs liderados
  - Java · Python · AWS
photos:
  - src: /photos/wm-palestra-ml-2021.webp
    alt: Matheus em pé, apresentando para a equipe diante de uma tela com jogos treinados por aprendizado de máquina.
    caption: Palestra sobre inteligência artificial e machine learning na retrospectiva de 2021 da WM.
    position: 35% center
  - src: /photos/wm-mentoria.webp
    alt: Matheus de pé atrás de um colega, olhando para a tela enquanto pensa.
    caption: Ajudando um desenvolvedor júnior a encontrar um bug.
    position: center 30%
  - src: /photos/wm-equipe-bug.webp
    alt: Três desenvolvedores em volta de um computador, junto à janela do escritório.
    caption: Caçando um bug com a equipe.
    position: center 35%
    marker: { x: 49, y: 31, label: eu }
highlights:
  - label: 2021–2022 · Back-office
    title: Robôs que tiram o trabalho repetitivo da operação
    summary: "Como estagiário, fiz os robôs em Python e as aplicações em Java/Spring Boot e Angular que davam suporte a eles. A estratégia sempre foi a mesma: descobrir o que cada setor podia parar de fazer."
    bullets:
      - "Cotação de frete internacional: a partir de flags no Oracle do ERP, o robô envia ao cliente um e-mail com todas as cotações dos armadores, e ele confirma a escolhida com um clique. Liberou uma pessoa da logística que fazia só isso."
      - "Upload de documentos: padronizei com a Qualidade a nomenclatura dos arquivos, mapeei a API do GED do ERP pelo DevTools e fiz um robô que varre o servidor de arquivos e sobe os documentos legais cinco vezes por dia."
      - "Due diligence: depois de dois anos perdendo a corrida contra os captchas, mudei a abordagem para “human-in-the-loop”. Um app desktop instalável (Tkinter) busca a fila de diligências pendentes e faz tudo, menos o captcha; ele se atualiza sozinho a cada release no GitHub."
      - "Infraestrutura: servidor Linux on-premises com os robôs em Docker, deploy por GitHub Actions com runner local, e aplicações web em ECS, RDS MySQL e Angular servido pelo CloudFront."
  - label: Framework
    title: PyTRobot, o padrão dos robôs
    summary: Com tantos robôs isolados, precisei de reuso e de um jeito comum de escrevê-los.
    bullets:
      - "Criei o PyTRobot (Python Transactional Robot), um framework de RPA em máquina de estados que abstrai as etapas típicas de um robô corporativo: verificar se há job, carregar os dados, processar cada transação e gerar o relatório."
      - Segue em uso na empresa até hoje.
    links:
      - text: PyTRobot ↗
        href: https://github.com/Batchuka/rpa-stateMachine-framework
      - text: CLI ↗
        href: https://github.com/Batchuka/rpa-stateMachine-cli
  - label: Fiscal · BYD
    title: Classificação Fiscal e Document Understanding
    summary: Declarar corretamente as mercadorias é o centro do negócio de uma trading, e o processo vivia de e-mails entre a operação e o despacho aduaneiro, com prazos sujeitos a multas milionárias.
    bullets:
      - "Com a chegada da BYD (mais de 200 invoices por mês, contra 1,2 de um cliente comum, com até 800 itens cada), ou a empresa dobrava o despacho ou automatizava. Fiz uma aplicação web em que a operação só envia a invoice e o despachante só classifica o que o sistema indica."
      - "Separei a extração num microsserviço de Document Understanding configurável: OCR em Lambda, normalização, extração por layout descrito em JSON e transformação no padrão input path do EventBridge. Hoje ele atende Notas Fiscais, Packing Lists, contratos de câmbio e Bills of Lading."
      - "A sistematização permitiu gatilhos que antecipam problemas, como a Licença de Importação que precisa sair antes do embarque, e, em 2025, uma camada de LLMs que sugere a classificação a partir do histórico do cliente."
      - "Guardei todos os documentos e JSONs no S3 para treinar modelos de extração no futuro. A BYD, o cliente mais complexo da carteira, virou o que é classificado mais rápido."
  - label: 2023–2024 · Plataforma
    title: Barramento de eventos e orquestrador de roteiros
    summary: A empresa decidiu entrar no varejo internacional, com previsão de 5.000 pequenos processos de importação por dia. Passei a conduzir quatro desenvolvedores, dois de backend e dois de frontend, e a desenhar como todos os sistemas conversariam.
    bullets:
      - "Em vez de AMQP ou MQTT, montei a comunicação com serviços da AWS, inspirada em redes industriais: barramentos RX e TX no EventBridge, um único mestre e aplicações de domínio que anunciam o que sabem fazer, como no OPC UA."
      - "Criei a biblioteca eventbus, que traduz eventos do Spring em publicações no barramento. O desenvolvedor só publica eventos, e o domínio nem sabe que está sendo orquestrado."
      - "O orquestrador conduz “roteiros” declarados pelo negócio numa tela web, cria sozinho as regras dos barramentos e, quando não acha quem execute uma etapa, avisa à equipe que falta implementar algo."
      - "Por dentro, duas threads: uma faz polling do SQS com back-off inspirado no TCP, a outra processa os eventos em ordem de timestamp por meio de um heap. Com várias instâncias no Elastic Beanstalk, o visibility timeout do SQS evita processamento duplicado."
      - O projeto mudou de rumo em 2024 e virou o embrião da Simple Hubi, outra empresa do grupo.
    links:
      - text: demo-event-driven ↗
        href: https://github.com/Batchuka/demo-event-driven
      - text: simplehubi.com ↗
        href: https://simplehubi.com/
  - label: 2024–2026 · Arquitetura
    title: Transit, Banking e o BPMS
    summary: Na fase sênior, atuei mais como arquiteto das automações do que como desenvolvedor, e ajudei na implantação de um BPMS interno.
    bullets:
      - "Transit: coordena duas Lambdas, uma que rastreia containers nas APIs de portos e armadores e outra que atualiza as datas de embarque e de chegada no ERP, de onde seguem por BI para os clientes."
      - "Banking: um balcão de pedidos de pagamento dos setores ao Financeiro, com fila por urgência, mais a automação do lançamento de contratos de câmbio no ERP."
      - Integrei essas aplicações ao BPMS antes de sair.
footnote: "Também fiz, sem detalhar aqui: vínculo e checagem de RADAR, fechamento de processos, atualizações cadastrais no ERP, extração de e-mails, as aplicações Despacho Ágil e Nota Fiscal e o microsserviço de webhooks."
---
