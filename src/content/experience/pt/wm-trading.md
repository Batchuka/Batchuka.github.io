---
order: 1
org: WM Trading
url: https://www.wmtrading.com.br/
logo: /logos/wm.png
mark: WM
role: Estagiário de RPA → Engenheiro de Software → Engenheiro de Software Sênior e Líder Técnico
period: jun. 2021 — jul. 2026
place: Vitória, ES · comércio exterior
summary: Fui contratado para fazer RPA e saí como engenheiro sênior e líder técnico de mais de 10 projetos críticos. No caminho, troquei e-mails e planilhas por sistemas, conduzi uma equipe de quatro desenvolvedores e desenhei a arquitetura de onde nasceu a startup [Simple Hubi](#simple-hubi).
tags:
  - 2.200+ h/ano de trabalho manual eliminadas
  - até 5.000 processos/dia
  - 4 devs liderados
  - Java · Python · AWS
photos:
  - src: /photos/wm-palestra-ml-2021.webp
    alt: Matheus em pé, apresentando para a equipe diante de uma tela com jogos treinados por aprendizado de máquina.
    caption: Palestra sobre machine learning, 2021.
    position: 35% center
  - src: /photos/wm-mentoria.webp
    alt: Matheus de pé atrás de um colega, olhando para a tela enquanto pensa.
    caption: Ajudando um desenvolvedor júnior a encontrar um bug, 2023.
    position: center 30%
  - src: /photos/wm-equipe-bug.webp
    alt: Três desenvolvedores em volta de um computador, junto à janela do escritório.
    caption: Caçando um bug com a equipe, 2026.
    position: center 35%
    marker: { x: 49, y: 31, label: eu }
highlights:
  - label: 2021–2022 · Back-office
    diagram: pytrobot
    title: Robôs para a operação, e um padrão para todos eles
    summary: "Antes de escrever qualquer automação, eu ia entender o processo de perto, com quem fazia o trabalho, e perguntava o que aquele setor podia parar de fazer de vez. Fiz os robôs em Python e as aplicações em Java/Spring Boot e Angular que davam suporte a eles. Com tantos robôs isolados, cada um escrito de um jeito, o problema deixou de ser o robô e passou a ser o padrão. Fui buscar o modelo no REFramework, a máquina de estados que a UiPath usa nos robôs dela, e o trouxe para Python."
    bullets:
      - gain: +1 pessoa livre
        icon: person
        text: "Cotação de frete: o robô manda ao cliente as cotações dos armadores e ele escolhe com um clique. Liberou quem fazia só isso."
      - gain: +1 h/dia por pessoa
        icon: clock
        text: "Upload no GED: com a nomenclatura padronizada junto à Qualidade, um robô sobe os documentos do operacional sozinho."
      - gain: +2 pessoas livres
        icon: unlock
        text: "Due diligence: um app desktop faz tudo, menos o captcha. Checar todos os clientes e fornecedores, antes inviável, virou rotina."
      - gain: 2.200 h/ano
        icon: bot
        text: "Outros robôs para logística, jurídico e compliance: somados, mais de 2.200 horas de trabalho manual a menos por ano."
      - gain: deploy no commit
        icon: deploy
        text: "Infraestrutura on-premises: robôs em Docker em servidores Linux, com deploy automático a cada commit pelo GitHub Actions."
      - gain: 1 padrão para todos
        icon: standard
        text: "PyTRobot: framework de RPA em máquina de estados que virou o molde de todos os robôs: job, dados, transações, relatório."
    links:
      - text: PyTRobot ↗
        href: https://github.com/Batchuka/rpa-stateMachine-framework
      - text: CLI ↗
        href: https://github.com/Batchuka/rpa-stateMachine-cli
  - label: 2023 · Document Understanding e NCM
    diagram: fiscal
    title: Da invoice à classificação NCM, sem e-mail
    summary: "No ano de 2023, trouxeram uma missão para mim. A entrada de um novo cliente, a BYD, iria aumentar drasticamente o número de invoices a absorver. Das duas, uma: ou automatizávamos o processo manual, ou a equipe de despacho aduaneiro teria que dobrar."
    bullets:
      - gain: "despacho sem dobrar"
        icon: person
        text: "200 invoices por mês, com até 800 itens cada: a operação só envia a invoice e o despachante só confirma o que o sistema indica."
      - gain: "4 tipos de documento"
        icon: doc
        text: "Dois microsserviços Spring Boot, DU e CLF, configuráveis por layout: notas fiscais, packing lists, contratos de câmbio e BLs."
      - gain: "LI antes do embarque"
        icon: bell
        text: "Com o processo num sistema, vieram gatilhos que antecipam problemas, como a Licença de Importação ainda pendente."
      - gain: "NCM sugerida"
        icon: spark
        text: "Bedrock e uma busca vetorial com FAISS sugerem a classificação a partir das classificações anteriores do cliente."
      - gain: "BYD: a mais rápida"
        icon: bolt
        text: "A BYD, o cliente mais complexo da carteira, virou o mais rápido de classificar. Tudo fica no S3 para treinar modelos no futuro."
  - label: 2023–2024 · Plataforma
    diagram: plataforma
    title: Barramento de eventos e orquestrador de roteiros
    summary: "Com o sucesso na BYD, a empresa decidiu levar a solução a um produto digital de importação para pessoa física. Só num dos marketplaces avaliados, seriam 5.000 processos por dia, e as integrações e requisições de cada sistema mais do que dobrariam. Passei a conduzir quatro desenvolvedores e, em menos de três meses, desenhei uma arquitetura pequena, só com serviços da AWS, que pôs os microsserviços, até então isolados, para conduzir juntos o processo inteiro. Fui buscar o modelo nas redes industriais."
    bullets:
      - gain: "< 3 meses"
        icon: clock
        text: "Só serviços da AWS, no modelo de uma rede industrial: barramentos RX e TX no EventBridge, um único mestre e um protocolo próprio."
      - gain: "0 refatoração"
        icon: plug
        text: "Biblioteca eventbus: com AOP, eventos internos do Spring viram eventos de barramento. Nenhuma regra de negócio precisou mudar."
      - gain: "etapa sem dono avisa"
        icon: bell
        text: "O orquestrador conduz roteiros declarados pelo negócio numa tela web e, se ninguém sabe fazer uma etapa, avisa a equipe."
      - gain: "5.000 processos/dia"
        icon: bolt
        text: "Polling do SQS com back-off emprestado do TCP; o visibility timeout evita processar o mesmo evento duas vezes."
      - gain: "virou a Simple Hubi"
        icon: spark
        text: "O projeto mudou de rumo em 2024 e virou o embrião da [Simple Hubi](#simple-hubi), outra empresa do grupo."
    links:
      - text: demo-event-driven ↗
        href: https://github.com/Batchuka/demo-event-driven
      - text: simplehubi.com ↗
        href: https://simplehubi.com/
  - label: 2025–2026 · Arquitetura
    title: Transit, Banking e o BPMS
    summary: "Com a arquitetura de pé, o projeto da Simple Hubi passou para uma equipe terceira e eu voltei aos sistemas internos da empresa. A pergunta mudou de “como automatizar esta tarefa” para “como estas automações se encaixam”, e atuei mais como arquiteto do que como desenvolvedor."
    bullets:
      - gain: "+1 pessoa livre"
        icon: person
        text: "Transit: lê os sites dos armadores e atualiza no ERP as datas de embarque e chegada de cada carga. Liberou uma pessoa da logística."
      - gain: "−4 threads por processo"
        icon: mail
        text: "Banking: um único canal entre todos os setores e o Financeiro, no lugar dos e-mails; em média, quatro threads a menos por processo."
      - gain: "câmbio previsível"
        icon: shield
        text: "O Banking também trouxe previsibilidade e estabilidade ao fluxo de contratos de câmbio, que é crítico."
      - gain: "conciliação automática"
        icon: plug
        text: "Integração com as instituições financeiras para conciliar os débitos automaticamente."
      - gain: "BPMS implantado"
        icon: standard
        text: "Por fim, ajudei na implantação do BPMS interno da empresa e integrei essas aplicações a ele."
---
