# Changelog

## Versão 1.0.5 — Registro da revisão de segurança

### Relatório inicial de segurança

- **O que mudou:** adicionada a revisão de segurança da interface e do catálogo em `docs/auditorias-seguranca/2026-10-18-auditoria-etapa-1.md`.
- **Motivo:** documentar o escopo analisado, os resultados observados e as proteções a planejar nas etapas de banco de dados, painel, formulário e publicação.
- **Arquivos afetados:** `docs/auditorias-seguranca/2026-10-18-auditoria-etapa-1.md`, `CHANGELOG.md`.
- **Decisões:** o relatório distingue vulnerabilidades atuais de recomendações futuras e registra que não foi feita varredura dedicada do histórico Git por segredos.
- **Verificações:** revisão somente de leitura do código e configuração; `npm audit --omit=dev` retornou zero vulnerabilidades conhecidas nas dependências de produção; `git diff --cached --check` não apontou problemas de whitespace após remover espaços finais.
- **Pendências:** revisar novamente após mudanças de arquitetura e antes da publicação.

## Versão 1.0.4 — Limite de tamanho da busca

### Campo de busca do catálogo

- **O que mudou:** o campo de busca passou a limitar a entrada a 50 caracteres.
- **Motivo:** manter consultas de interface em tamanho razoável.
- **Arquivos afetados:** `components/catalog-browser.js`, `CHANGELOG.md`.
- **Decisões:** o limite é aplicado pelo atributo `maxLength` do campo. Como a busca atual filtra uma lista local no navegador, isso é uma medida de usabilidade e contenção de entrada, não uma correção de vulnerabilidade nem uma proteção para operações de servidor.
- **Verificações:** `npm.cmd run build` concluiu com sucesso; `git diff --check` não apontou problemas de whitespace.
- **Pendências:** nenhuma para esta alteração. Caso a busca passe a consultar um servidor, será necessário validar o limite também no servidor.

## Versão 1.0.3 — Favicon do site

### Ícone da aba do navegador

- **O que mudou:** adicionado `app/icon.png` para o Next.js disponibilizar como favicon; `.gitignore` passou a ignorar a pasta local `favicon/` e o arquivo `AGENTS2.md`.
- **Motivo:** exibir a identidade visual da HRMLeds na aba do navegador e evitar incluir arquivos locais auxiliares no repositório.
- **Arquivos afetados:** `app/icon.png`, `.gitignore`, `CHANGELOG.md`.
- **Decisões:** o favicon fica em `app/`, onde o Next.js reconhece automaticamente arquivos de ícone.
- **Verificações:** `npm.cmd run build` concluiu com sucesso e gerou a rota estática `/icon.png`; `git diff --check` não apontou problemas de whitespace.
- **Pendências:** conferir a aparência do ícone na aba do navegador após iniciar a aplicação.

## Versão 1.0.2 — Centralização do banner do hero

### Enquadramento central

- **O que mudou:** imagem do hero centralizada em computadores e celulares.
- **Motivo:** distribuir o enquadramento pelos veículos, sem priorizar a van.
- **Arquivos afetados:** `app/globals.css`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** mantido `object-fit: cover` para preencher o hero sem distorção; `object-position: center` define o foco central em todos os tamanhos.
- **Verificações:** `npm.cmd run build` concluiu com sucesso; `git diff --check` não apontou problemas de whitespace.
- **Pendências:** conferir visualmente o resultado em computador e celular no navegador.

## Versão 1.0.1 — Ajuste do banner ao hero

### Imagem preenchendo a área do hero

- **O que mudou:** a imagem dos veículos agora preenche toda a área do hero em computadores e celulares, com enquadramento responsivo.
- **Motivo:** o enquadramento anterior deixava uma faixa pequena à direita e muito espaço vazio.
- **Arquivos afetados:** `app/page.js`, `app/globals.css`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** `next/image` usa `fill` e o CSS usa `object-fit: cover`, preservando a proporção da imagem e cortando o excesso. `object-position` mantém o foco nos veículos em telas de larguras diferentes.
- **Verificações:** `npm.cmd run build` concluiu com sucesso; `git diff --check` não apontou problemas de whitespace.
- **Pendências:** conferir visualmente o enquadramento final em computador e celular no navegador.

## Versão 1.0.0 — Recorte dos veículos no hero

### Banner sem frases incorporadas

- **O que mudou:** criado `public/assets/hero-veiculos.jpg` a partir da faixa que contém a ambulância, o ônibus e a van, removendo a chamada superior e os rótulos inferiores por recorte. O hero usa o recorte à direita no desktop e uma composição responsiva em telas menores.
- **Motivo:** evitar que a ambulância e o texto embutido no banner concorram com o título HTML do hero, que foi mantido.
- **Arquivos afetados:** `public/assets/hero-veiculos.jpg`, `app/page.js`, `app/globals.css`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** os pixels dos veículos foram preservados por um corte local determinístico, sem recriar a imagem. No celular, `cover` fecha o enquadramento para dar destaque à faixa dentro da tela estreita.
- **Verificações:** `npm.cmd run build` concluiu com sucesso; imagem do recorte revisada visualmente.
- **Pendências:** revisar no navegador se o título e os veículos ficam bem separados em computador e celular.

## Versão 0.9.0 — Ajuste do banner do hero

### Novo banner na página inicial

- **O que mudou:** o banner da página inicial passou a descrever visualmente uma ambulância, um ônibus e uma van, e sua composição foi deslocada para a direita por meio de uma escala horizontal leve.
- **Motivo:** adaptar o enquadramento à nova imagem e manter o texto principal do site legível à esquerda.
- **Arquivos afetados:** `app/page.js`, `app/globals.css`, `public/assets/banner_01.jpg`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** o ajuste usa `scaleX` e ancora a imagem à esquerda; a altura do hero e os demais elementos da seção são preservados. O texto alternativo foi atualizado para corresponder à nova arte.
- **Verificações:** `npm.cmd run build` concluiu com sucesso e gerou as rotas da aplicação.
- **Pendências:** conferir o enquadramento em computador e celular no navegador.

## Versão 0.8.0 — Primeiro envio ao GitHub

### Repositório remoto inicializado

- **O que mudou:** criado o commit inicial `361c2ba` e enviada a branch `main` para `TheLuke451/Site-HRMLEDS`.
- **Motivo:** guardar o projeto em um repositório remoto para preservar seu histórico e facilitar o acesso.
- **Arquivos afetados:** os 35 arquivos de código, documentação, configuração e imagens da versão inicial; `AULA.md` e `CHANGELOG.md` registram o processo.
- **Decisões:** o commit foi associado ao endereço `noreply` da conta para não expor o e-mail pessoal. O cache do PowerShell, dependências instaladas e arquivos de build ficaram fora do commit.
- **Verificações:** envio do Git terminou com sucesso; branch local `main` acompanha `origin/main`. A compilação Next.js já havia passado antes da publicação.
- **Pendências:** continuar o desenvolvimento incremental; o repositório é público e os dados de produto continuam demonstrativos.

## Versão 0.7.0 — Preparação para repositório remoto

### Documentação e arquivos locais

- **O que mudou:** README atualizado para refletir a aplicação Next.js, seus comandos, estrutura, estado atual e arquivos que devem acompanhar o projeto. `.gitignore` passou a excluir caches do Vercel, arquivos TypeScript gerados e o cache local do PowerShell. A aula explica a diferença entre repositório local, GitHub e arquivos ignorados.
- **Motivo:** deixar o projeto compreensível e evitar incluir dependências, saídas de build ou cache específico deste computador quando for enviado ao GitHub.
- **Arquivos afetados:** `README.md`, `.gitignore`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** manter os arquivos da versão estática e as referências de design, pois foram preservados como material de estudo. O diretório `Microsoft/Windows/PowerShell/ModuleAnalysisCache` foi identificado como cache local e excluído.
- **Verificações:** leitura do inventário, regras atuais de arquivos ignorados, varredura textual por possíveis credenciais e consulta dos remotos Git. Não foi encontrado `.env`; nenhuma URL remota está configurada. Nenhum commit ou push foi feito.
- **Pendências:** confirmar se o repositório GitHub será público ou privado e qual URL usar antes de criar/configurar o remoto e enviar os commits.

## Versão 0.6.0 — Busca e filtro no catálogo

### Catálogo interativo

- **O que mudou:** adicionados campo de busca por nome/código, filtro por categoria, contador de resultados, opção para limpar e mensagem para resultados vazios. A busca ignora maiúsculas e acentos. Códigos `DEMO-01` a `DEMO-03` foram incluídos como dados fictícios.
- **Motivo:** permitir localizar produtos de forma rápida e praticar estado, eventos e filtragem de listas com React.
- **Arquivos afetados:** `components/catalog-browser.js`, `app/catalogo/page.js`, `app/globals.css`, `data/products.js`, `AULA.md`, `CHANGELOG.md`, `README.md`.
- **Decisões:** a interatividade fica isolada em um Client Component; a página e seus metadados continuam no servidor. O grid e os cartões existentes foram reaproveitados.
- **Verificações:** `npm.cmd run build` concluiu com sucesso e gerou as rotas `/`, `/catalogo` e `/contato`.
- **Pendências:** validar busca, combinação de filtros, estado sem resultados e layout móvel no navegador; substituir códigos fictícios pelos reais quando fornecidos.

## Versão 0.5.0 — Primeira estrutura com React e Next.js

### Rotas e componentes React iniciais

- **O que mudou:** iniciado o projeto Next.js com App Router, layout compartilhado e páginas para início, catálogo e contato. Os três produtos demonstrativos são apresentados por componentes React reutilizáveis; imagens foram copiadas para `public/`. Criados scripts `dev`, `build` e `start` e instaladas dependências oficiais com versões exatas no `package.json` e lockfile.
- **Motivo:** começar a adoção gradual da stack planejada e preparar uma estrutura que possa crescer sem perder a apresentação já existente.
- **Arquivos afetados:** `package.json`, `package-lock.json`, `app/`, `components/`, `data/`, `public/`, `README.md`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** JavaScript permanece por enquanto; TypeScript não foi introduzido. Os HTML e scripts estáticos antigos foram preservados como referência. Busca, filtros, formulário, banco de dados e administração continuam para etapas futuras.
- **Verificações:** `npm.cmd run build` concluiu com sucesso; foram geradas as rotas `/`, `/catalogo` e `/contato`. O comando `npm` foi bloqueado pela política do PowerShell, então a variante `npm.cmd` foi usada. Revisão visual no navegador ainda pendente.
- **Pendências:** revisar páginas e responsividade no navegador local; busca e filtros ainda não foram iniciados.

Histórico organizado por versões de desenvolvimento. Esses números são marcos internos para agrupar mudanças; não indicam que o projeto foi publicado ou que houve um lançamento oficial. Verificações não executadas e pendências permanecem registradas.

## Versão 0.4.0 — Navegação e contato

### Cabeçalho persistente durante a rolagem

- **O que mudou:** o cabeçalho passou a acompanhar a rolagem e permanecer no topo da janela.
- **Motivo:** manter a navegação acessível enquanto a pessoa percorre as páginas.
- **Arquivos afetados:** `styles.css`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** usado `position: sticky` para manter o espaço do cabeçalho no fluxo da página; aplicado `z-index` e sombra leve para separá-lo do conteúdo.
- **Verificações:** confirmado que as três páginas usam a classe `.site-header` e compartilham `styles.css`. Revisão visual durante rolagem ainda pendente.
- **Pendências:** conferir no navegador em telas grandes e pequenas.

### Página de contato

- **O que mudou:** o botão da seção de contato passou de “Ver produtos” para “Fale conosco” e agora abre `contato.html`. A página tem uma apresentação inicial e informa que o formulário será desenvolvido depois. O menu de contato nas páginas inicial e de catálogo também aponta para ela.
- **Motivo:** criar um destino próprio para o futuro formulário de contato com o setor comercial.
- **Arquivos afetados:** `index.html`, `catalogo.html`, `contato.html`, `styles.css`, `README.md`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** não criar ainda o formulário nem inventar o e-mail comercial; ambos dependem da etapa de contato e do endereço oficial da empresa.
- **Verificações:** conferir caminhos entre páginas, âncoras, imagem do logo e folha de estilo. Revisão visual em navegador pendente.
- **Pendências:** implementar e validar o formulário no servidor quando o endereço comercial e a configuração do serviço de e-mail forem definidos.

## Versão 0.3.0 — Catálogo de produtos

### Página própria para o catálogo

- **O que mudou:** criada `catalogo.html`; a página inicial mantém até três cartões demonstrativos e ganhou o botão “Ver todos os produtos”. Os links “Produtos” da navegação levam ao catálogo.
- **Motivo:** separar a apresentação da empresa da exploração dos produtos e reservar espaço para um catálogo maior.
- **Arquivos afetados:** `index.html`, `catalogo.html`, `styles.css`, `README.md`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** ambas as páginas reutilizam `products.js` e `catalog.js`, mantendo uma única lista de dados e a mesma aparência dos cartões. `data-limit="3"` limita a amostra da página inicial; o catálogo não possui esse limite.
- **Verificações:** conferir destino dos links entre páginas, IDs de seção, carregamento dos scripts e referências de estilo/imagem. Não foi feita revisão visual no navegador.
- **Pendências:** o catálogo ainda contém três produtos demonstrativos e não possui pesquisa ou filtros; informações reais e canais de contato continuam pendentes.

### Ajuste do espaçamento dos cartões

- **O que mudou:** a descrição do produto passou a fazer parte do bloco `.product-info`.
- **Motivo:** aplicar a ela o espaçamento interno já definido no CSS do cartão e manter o alinhamento com categoria e nome.
- **Arquivos afetados:** `catalog.js`, `CHANGELOG.md`.
- **Decisões:** preservada a estrutura de dados e a geração dinâmica dos cartões; nenhum estilo foi refeito.
- **Verificações:** sintaxe JavaScript e estrutura de criação dos elementos conferidas.
- **Pendências:** revisar visualmente no navegador.

### Catálogo com dados locais

- **O que mudou:** os três cartões passaram a ser gerados a partir de objetos em `products.js`, usando a função `createProductCard` de `catalog.js`.
- **Motivo:** separar dados e apresentação e introduzir arrays, objetos, funções e criação de elementos no navegador.
- **Arquivos afetados:** `index.html`, `styles.css`, `products.js`, `catalog.js`, `README.md`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** manter JavaScript simples, sem dependências ou servidor, para continuar abrindo `index.html` diretamente. A lista de demonstração fica em `window.HRMProducts`; React será introduzido junto aos filtros/estado da interface.
- **Verificações:** verificação de sintaxe JavaScript, ordem dos scripts, referências de imagem e seletores HTML. Não foram adicionados testes automatizados.
- **Pendências:** confirmar nomes, códigos, descrições técnicas, preços e imagens oficiais. O catálogo ainda não oferece pesquisa, filtro ou detalhes individuais.

## Versão 0.2.0 — Identidade visual da HRM Leds

### Redesign com referências da HRM Leds

- **O que mudou:** substituída a identidade visual inicial pelo logo e pelas cores azul, vermelho, cinza e branco das referências. A página agora usa imagens de componentes extraídas do banner e dos cartões no screenshot do site antigo.
- **Motivo:** aproximar o site da marca e dos produtos reais apresentados pela empresa.
- **Arquivos afetados:** `index.html`, `styles.css`, `README.md`, `AULA.md`, `CHANGELOG.md`; novos recortes em `assets/`.
- **Decisões:** os originais em `referencias/` foram preservados; imagens foram copiadas por recorte para `assets/`. Textos de produto descrevem apenas forma e aparência; dados comerciais e especificações aguardam confirmação.
- **Verificações:** conferir links internos, IDs únicos, referências a CSS e imagens locais, dimensões e leitura dos arquivos de imagem. Não foi feita revisão visual da página no navegador.
- **Pendências:** confirmar nomes, códigos, preços, especificações e canais oficiais de contato; revisar a apresentação visual em computador e celular.

## Versão 0.1.0 — Preparação e primeira página

### Primeira página institucional

- **O que mudou:** criada uma página estática responsiva com navegação, apresentação institucional, categorias ilustrativas de produtos, contato e rodapé.
- **Motivo:** iniciar a interface praticando HTML semântico e CSS antes de adicionar JavaScript e React.
- **Arquivos afetados:** `index.html`, `styles.css`, `README.md`, `AULA.md`, `CHANGELOG.md`.
- **Decisões:** CSS e HTML separados; layout adaptável com Grid e media queries; fontes do sistema, sem dependência externa. Categorias e ilustrações são demonstrativas; não inventar dados de produto nem contato comercial.
- **Verificações:** inventário de IDs e links de âncora, existência do arquivo CSS referenciado e checagem de referências externas. Não foi feita revisão visual em navegador nesta execução.
- **Pendências:** obter e adicionar canais comerciais oficiais; adicionar dados e imagens reais quando autorizados; conferir visualmente em computador e celular. Sem JavaScript, formulário, catálogo funcional ou testes automatizados nesta etapa.

### Preparação inicial

- **O que mudou:** adicionados `README.md`, `AULA.md`, `CHANGELOG.md` e `.gitignore`; repositório Git local inicializado.
- **Motivo:** documentar o objetivo, a stack proposta, o estado do projeto e as convenções de aprendizado e manutenção antes de criar a aplicação.
- **Arquivos afetados:** `README.md`, `AULA.md`, `CHANGELOG.md`, `.gitignore`.
- **Decisões:** manter as tecnologias descritas no `AGENTS.md` como propostas iniciais; não instalar dependências nem criar código do website nesta etapa.
- **Verificações:** inventário da pasta; versões de Node.js, npm e Git; estado inicial do Git (sem commits); e regras do `.gitignore` para arquivos `.env`. Não foram executados testes de aplicação porque ainda não existe aplicação.
- **Pendências:** o Git detecta que o proprietário da pasta difere do usuário deste ambiente e bloqueia comandos comuns. O estado foi consultado com exceção limitada a um único comando; a configuração global não foi alterada. A pasta preexistente `Microsoft` contém um arquivo `Windows/PowerShell/ModuleAnalysisCache` e foi preservada; confirmar fora deste ambiente se deve permanecer nessa pasta do projeto. Nenhum commit foi criado.
