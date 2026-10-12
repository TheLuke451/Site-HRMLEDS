# Caderno de aprendizado

Este documento registra conceitos úteis que podem ser reutilizados no projeto. Não é uma transcrição das conversas nem um manual completo das tecnologias.

## Etapa 0 — Organização do projeto

### Repositório e controle de versão

Um repositório Git guarda o histórico das alterações de um projeto. Cada commit é um registro identificado de um conjunto de mudanças, o que permite entender como o projeto evoluiu e comparar versões.

Exemplo de fluxo, quando o Git estiver inicializado:

```text
arquivos alterados → revisão das mudanças → commit → histórico atualizado
```

O Git local registra versões no computador. GitHub é um serviço remoto que pode armazenar uma cópia do repositório e facilitar colaboração; não é necessário para o histórico local.

O Git também verifica se confia no proprietário da pasta do repositório. Se a pasta pertencer a outro usuário, ele pode bloquear comandos como `status`. Neste ambiente de execução, a checagem foi feita com uma exceção temporária restrita ao comando. Não é necessário desativar essa proteção globalmente; no computador do desenvolvedor, o ideal é operar a pasta com a conta que é proprietária dela.

### Documentação do projeto

- `AGENTS.md` contém as instruções de trabalho e o escopo acordado.
- `README.md` orienta uma pessoa a entender e executar o projeto.
- `CHANGELOG.md` registra o que mudou e quais verificações realmente ocorreram.
- `AULA.md` reúne explicações curtas sobre conceitos aprendidos e sua relação com o projeto.

Na Etapa 0, ainda não existem componentes de aplicação aos quais relacionar esses conceitos. As tecnologias planejadas serão explicadas no contexto em que forem introduzidas.

## Etapa 1 — Estrutura da página e estilos

### HTML semântico

HTML descreve a estrutura e o significado do conteúdo. Tags como `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>` ajudam navegador, leitor de tela e pessoas a entender as regiões da página. Um título de seção pode ser ligado a ela com `aria-labelledby`; o valor aponta para o `id` do título.

Exemplo usado em `index.html`:

```html
<section id="produtos" aria-labelledby="products-title">
  <h2 id="products-title">Produtos</h2>
</section>
```

O link `<a href="#produtos">` leva o navegador até o elemento que tem `id="produtos"`. Cada `id` da página deve ser único.

### CSS e layout responsivo

CSS controla aparência e layout. Uma classe conecta o HTML às regras de estilo: `class="product-grid"` recebe as regras `.product-grid` em `styles.css`. O layout de cartões usa CSS Grid; regras `@media` reorganizam colunas em telas menores. Assim, o mesmo conteúdo pode se ajustar de computador a celular.

O `<meta name="viewport" ...>` em `index.html` faz o navegador móvel usar a largura real da tela ao calcular o layout.

### Separação entre estrutura e apresentação

`index.html` contém conteúdo e estrutura; `styles.css` controla cores, espaçamentos e arranjo visual. Nesta etapa não há JavaScript: links de navegação usam âncoras da própria página e os cartões são exemplos ilustrativos, sem busca, dados persistidos ou preços reais.

### Imagens e identidade visual

Uma referência visual ajuda a identificar escolhas recorrentes da marca, como cores, logo, tipografia e estilo das fotos. Nesta versão, o logo original é exibido diretamente de `referencias/`; recortes de imagens do site antigo foram salvos em `assets/` para usar nos cartões e no banner. Os arquivos originais da pasta `referencias/` foram mantidos intactos.

No HTML, `<img src="..." alt="...">` apresenta a imagem. O caminho em `src` aponta para o arquivo relativo ao `index.html`; `alt` oferece uma descrição textual para pessoas que não veem a imagem e para situações em que ela não carrega.

As cores principais ficaram como variáveis CSS em `:root` de `styles.css`. Por exemplo, `var(--brand-blue)` permite reaproveitar o azul da marca e ajustá-lo em um único lugar. Os textos dos cartões continuam descritivos e não incluem códigos, preços ou especificações ainda não confirmados.

## Etapa 2 — Dados e cartões de produto

### Objetos e arrays

Um objeto guarda propriedades relacionadas, como nome, categoria e imagem de um produto. Um array guarda uma lista ordenada de valores. Em `products.js`, cada produto é um objeto e `window.HRMProducts` é a lista de produtos.

```js
const product = { name: "Luminária circular", category: "Iluminação" };
const products = [product];
```

Separar os dados da estrutura HTML facilita trocar ou acrescentar produtos sem copiar o cartão inteiro. Os itens atuais são demonstrativos; preços, códigos e especificações não foram inventados.

### Funções e renderização no navegador

Uma função recebe dados, executa uma tarefa e pode devolver um resultado. `createProductCard(product)` em `catalog.js` recebe um objeto e devolve elementos HTML criados pelo navegador. `map` chama essa função para cada item; `replaceChildren` coloca os cartões resultantes na página.

Fluxo do catálogo:

```text
products.js (lista de objetos) → catalog.js (cria os cartões) → #product-grid (página)
```

`document.createElement` cria elementos; `textContent` insere texto como texto, sem interpretá-lo como HTML. Isso evita que um nome seja executado como marcação. Quando os dados vierem de um painel ou banco, essa proteção continuará importante.

### Ordem dos scripts

No final de `index.html`, `products.js` aparece antes de `catalog.js`. O atributo `defer` manda o navegador executar os scripts depois de ler o HTML e respeitar essa ordem. A lista é exposta como `window.HRMProducts` para o segundo arquivo encontrá-la sem instalar ferramentas ou iniciar um servidor local. Essa variável global é uma solução simples para esta página estática; em módulos de JavaScript ou componentes React, os dados seriam importados de forma explícita.

Nesta etapa ainda não usamos React: primeiro praticamos lista, objeto, função e criação de elementos no navegador. A renderização de listas em React será introduzida quando começarmos os filtros e o estado da interface.

### Navegação entre páginas

Um endereço como `href="catalogo.html"` leva a outra página HTML do projeto. Já `href="#produtos"` procura um elemento com esse `id` na página atual. Para navegar até uma seção de outra página, combinamos os dois: `href="index.html#contato"`.

A página inicial mantém uma amostra; `catalogo.html` apresenta a página própria do catálogo; `contato.html` é a página de contato. Links como `href="contato.html"` mudam de página. Links como `href="index.html#empresa"` abrem outra página e posicionam o navegador em uma seção identificada por `id="empresa"`.

As páginas inicial e de catálogo carregam `products.js` e `catalog.js`, então exibem os cartões a partir da mesma lista, sem cadastrar cada produto duas vezes. Na página inicial, `data-limit="3"` limita a exibição a três produtos; na página do catálogo, sem esse atributo, todos aparecem. Quando os dados aumentarem, o catálogo poderá ganhar busca e filtros sem alongar a página inicial.

### Cabeçalho que acompanha a rolagem

Em `styles.css`, `position: sticky` com `top: 0` faz o cabeçalho grudar no alto da janela quando a página passa por ele. Diferente de `position: fixed`, ele continua ocupando espaço no layout, então não cobre o começo do conteúdo. `z-index` mantém o cabeçalho acima das seções ao rolar.

## Etapa 3 — React e Next.js: estrutura inicial

### O que React e Next.js fazem

React ajuda a montar a interface dividindo-a em componentes reutilizáveis. Um componente é uma função JavaScript que descreve uma parte visual. Neste projeto, `SiteHeader` cuida do cabeçalho e `ProductCard` cuida de um cartão de produto. Next.js organiza esses componentes em páginas e acrescenta recursos de aplicação web, como rotas e servidor de desenvolvimento.

### Rotas por arquivos no App Router

No App Router, a pasta `app/` representa as páginas. `app/page.js` corresponde à rota `/`; `app/catalogo/page.js`, a `/catalogo`; e `app/contato/page.js`, a `/contato`. O arquivo `app/layout.js` é compartilhado entre elas e coloca elementos comuns, como cabeçalho e rodapé.

### JSX, componentes e propriedades

JSX é a sintaxe parecida com HTML que usamos dentro do JavaScript para descrever a interface React. Em JSX, o atributo `class` é escrito `className`, pois `class` já tem significado na linguagem JavaScript.

Uma propriedade (ou prop) é um dado passado de um componente para outro. `ProductGrid` recebe uma lista na propriedade `products`; para cada produto, cria um `ProductCard` e entrega aquele produto. O `key` ajuda o React a identificar cada item da lista quando ela muda.

```jsx
products.map((product) => (
  <ProductCard key={product.id} product={product} />
))
```

### Navegação e imagens

`next/link` fornece links internos próprios do Next.js. `next/image` apresenta imagens com dimensões e comportamento otimizados. Os arquivos disponíveis ao navegador ficam em `public/`: por exemplo, `public/assets/banner-projetos.png` é acessado pela URL `/assets/banner-projetos.png`.

### Servidor e navegador

Por padrão, os componentes em `app/` são renderizados no servidor. Esta etapa mostra páginas e listas sem executar interatividade no navegador. Busca, filtros e campos que respondem a cliques precisarão de estado no navegador; vamos introduzir isso quando chegarmos à interação do catálogo. Ainda não precisamos adicionar a diretiva `"use client"`.

### Fluxo dos produtos nesta etapa

```text
data/products.js → ProductGrid → ProductCard → página do catálogo ou início
```

Os dados continuam separados da apresentação, mas agora os componentes React descrevem os cartões. Os arquivos HTML estáticos antigos foram mantidos como referência durante a migração.

### Estado React e filtros do catálogo

O componente `CatalogBrowser` em `components/catalog-browser.js` é um componente de cliente, indicado pela linha `"use client"`. Ele precisa responder enquanto a pessoa digita e seleciona uma categoria no navegador. `useState` guarda esses valores; por exemplo, `search` começa vazio e `setSearch` atualiza o texto quando o campo muda. A atualização do estado faz o React renderizar novamente o componente com os produtos correspondentes.

`filter` percorre a lista e mantém os produtos que passam nas duas condições: corresponder ao texto e pertencer à categoria selecionada. Como as condições são combinadas com `&&`, a busca e o filtro podem ser usados juntos. `Set` elimina categorias repetidas para construir as opções do seletor.

```js
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name.includes(search);
  const matchesCategory = category === "all" || product.category === category;
  return matchesSearch && matchesCategory;
});
```

No projeto, `normalizeText` também remove diferenças de acentuação e caixa: assim, uma busca por “luminaria” encontra “Luminária”. Os códigos `DEMO-01` etc. existem apenas para praticar pesquisa por código; são referências fictícias, não códigos comerciais.

## Git e preparação para o GitHub

Git é o programa que registra o histórico de versões na pasta do projeto. GitHub é um serviço que pode guardar uma cópia remota desse repositório. O `.gitignore` lista arquivos locais que o Git deve deixar de fora, como `node_modules/` (dependências instaladas) e `.next/` (arquivos gerados ao compilar). O `package-lock.json`, por outro lado, deve ser compartilhado para que outras pessoas instalem as mesmas versões de dependências.

Quando `git status` mostra arquivos como `??`, significa que eles existem na pasta, mas ainda não foram adicionados ao histórico do Git. Adicionar arquivos ao repositório e criar um commit são passos separados; enviar ao GitHub é outro passo, feito depois de configurar um repositório remoto. Nesta publicação, os arquivos foram revisados e incluídos no commit inicial antes de enviar a branch `main` ao repositório remoto.
