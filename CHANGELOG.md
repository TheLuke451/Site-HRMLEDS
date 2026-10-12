# Changelog

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
