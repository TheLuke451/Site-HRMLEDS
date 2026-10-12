# HRM Leds

Website institucional da HRM Leds, empresa familiar do setor de autopeças com foco em iluminação automotiva. O projeto apresenta a empresa e seus produtos e será ampliado com contato comercial e ferramentas administrativas. Também é um projeto de aprendizado prático.

## Estado atual

A aplicação usa React e Next.js com três rotas: página inicial (`/`), catálogo (`/catalogo`) e contato (`/contato`). O catálogo tem busca por nome ou código demonstrativo e filtro por categoria. Os produtos ainda são exemplos locais; formulário funcional, banco de dados e painel administrativo não foram implementados.

## Tecnologias

- React e Next.js (App Router) para as páginas e componentes.
- JavaScript e CSS para lógica e apresentação.
- Node.js e npm para executar as ferramentas do projeto.
- Supabase e Resend são opções planejadas para etapas futuras; ainda não estão configurados.

## Pré-requisitos

- Node.js 20.9 ou mais recente.
- npm, que é instalado junto com Node.js.

O Next.js documenta esse requisito mínimo na [página de instalação](https://nextjs.org/docs/app/getting-started/installation).

## Instalar e executar

Abra um terminal na pasta do projeto e instale as dependências:

```powershell
npm.cmd install
npm.cmd run dev
```

No PowerShell do Windows, use `npm.cmd` caso a política de execução bloqueie o comando `npm`. Em outros terminais, os comandos equivalentes são `npm install` e `npm run dev`.

Abra `http://localhost:3000` no navegador. Para parar o servidor, volte ao terminal e pressione `Ctrl+C`.

Comandos úteis:

- `npm.cmd run dev`: inicia o servidor de desenvolvimento.
- `npm.cmd run build`: compila a aplicação para produção e verifica se ela pode ser gerada.
- `npm.cmd start`: inicia a versão de produção, depois de executar o build.

Não abra `index.html` diretamente para ver a aplicação Next.js; use o servidor iniciado com `npm.cmd run dev`.

## Estrutura do projeto

- `app/`: páginas, rotas e layout compartilhado do Next.js.
- `components/`: componentes React reutilizados pelas páginas.
- `data/products.js`: dados demonstrativos do catálogo.
- `public/`: imagens usadas pela aplicação Next.js.
- `AULA.md`: conceitos estudados durante o desenvolvimento.
- `CHANGELOG.md`: mudanças, verificações e pendências por versão.
- `AGENTS.md`: escopo e instruções de trabalho do projeto.

Os arquivos HTML e JavaScript da raiz (`index.html`, `catalogo.html`, `contato.html`, `products.js` e `catalog.js`), além de `styles.css` e `assets/`, são a versão estática anterior e foram mantidos como material de referência. `referencias/` guarda as imagens originais usadas para orientar o design.

## Variáveis de ambiente e segurança

Esta versão não precisa de variáveis de ambiente. O `.gitignore` exclui arquivos locais `.env` e caches de desenvolvimento para evitar publicar credenciais ou arquivos gerados. Nunca coloque chaves secretas em código enviado ao navegador.

## Verificação

Execute `npm.cmd run build` no PowerShell (ou `npm run build` em outro terminal) para verificar a compilação. A busca, os filtros e o layout responsivo também devem ser conferidos manualmente no navegador.

## Repositório

O `package-lock.json` deve ser mantido junto com o `package.json`: ele registra as versões exatas das dependências para que outras instalações reproduzam a mesma combinação. Não envie `node_modules/`, `.next/`, credenciais ou caches locais; as regras estão no `.gitignore`.

Para versionar este projeto, inclua o código em `app/`, `components/` e `data/`; imagens usadas em `public/`; os arquivos `package.json`, `package-lock.json` e `.gitignore`; a documentação (`README.md`, `AULA.md`, `CHANGELOG.md` e `AGENTS.md`); e os arquivos estáticos e referências que foram preservados para estudo (`index.html`, `catalogo.html`, `contato.html`, `products.js`, `catalog.js`, `styles.css`, `assets/` e `referencias/`). O cache localizado em `Microsoft/Windows/PowerShell/ModuleAnalysisCache` é específico deste computador e está excluído.
