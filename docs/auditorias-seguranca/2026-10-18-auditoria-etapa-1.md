# Auditoria de segurança — HRM Leds Website

**Data da revisão:** 18/10/2026
**Escopo:** código e configuração atualmente versionados, dependências instaladas e rotas existentes.
**Estágio observado:** interface e catálogo demonstrativo com busca/filtros locais; a integração com banco de dados ainda não começou.
**Resultado:** esta revisão não identificou uma vulnerabilidade explorável no escopo inspecionado. Isso não equivale a uma certificação de segurança.

## Resumo

O site não possui backend próprio, autenticação, formulário funcional ou operações de escrita. O catálogo usa três produtos definidos em `data/products.js`; o campo de busca filtra essa lista no navegador. Assim, a superfície de ataque atual é limitada.

A consulta `npm audit --omit=dev`, executada em 18/10/2026, retornou zero vulnerabilidades conhecidas nas dependências de produção. O projeto não declara dependências de desenvolvimento. Essa consulta é um retrato do momento e deve ser repetida periodicamente.

Não há arquivos `.env` rastreados pelo Git e a revisão do código atual não encontrou credenciais aparentes. **O histórico completo do Git não foi submetido a uma ferramenta de detecção de segredos**, portanto esta auditoria não conclui que nunca houve segredo em commits antigos.

## O que foi conferido

| Área | Resultado observado |
|---|---|
| Rotas e funcionalidades | Páginas institucionais, catálogo local e página de contato informativa; nenhuma rota de API ou operação administrativa encontrada. |
| Busca do catálogo | Compara texto com dados locais usando `includes`; não executa entrada como código nem envia a busca a um banco. |
| Limite da busca | `maxLength={50}` limita a digitação normal no campo do navegador; não é validação de servidor nem uma barreira de segurança. |
| Renderização | Não foi encontrado uso de `dangerouslySetInnerHTML` ou `innerHTML`; textos de produtos são renderizados como conteúdo React. |
| Arquivos de configuração | `.env` e `.env.*` estão ignorados, com exceção explícita para `.env.example`; nenhum `.env` está rastreado. |
| Imagens | As imagens atuais vêm de caminhos locais sob `public/`. |
| Dependências | `npm audit --omit=dev` retornou zero vulnerabilidades conhecidas na data da revisão. |

## Pontos para acompanhar

### 1. Cabeçalhos HTTP antes da publicação

O repositório não contém uma configuração própria de cabeçalhos HTTP. Isso **não é, por si só, uma vulnerabilidade confirmada**: os cabeçalhos finais também podem ser definidos pela plataforma de hospedagem, e a aplicação ainda não foi revisada em produção.

Antes da publicação, verificar as respostas do domínio e decidir, conforme a hospedagem, quais cabeçalhos são adequados — por exemplo, `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options` e `Referrer-Policy`. Uma CSP precisa ser testada com os scripts e recursos reais do Next.js; não deve ser aplicada às cegas. O Next.js permite configurar cabeçalhos por `headers()` em `next.config.js`.

Referência oficial: [Next.js — configuração de cabeçalhos](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers).

### 2. Busca e limite de entrada

`maxLength={50}` melhora a experiência ao impedir que o usuário digite mais de 50 caracteres pelo campo normal. Como não existe consulta remota hoje, isso não corrige uma vulnerabilidade atual nem protege um futuro banco de dados. Se a busca passar a chamar um servidor, validar o limite também no servidor e usar as APIs de consulta parametrizadas do cliente de banco.

### 3. Dados e painel administrativo futuros

Ao conectar o Supabase e criar operações para cadastrar ou alterar produtos:

- validar os dados no servidor;
- autenticar o administrador e autorizar cada operação no servidor;
- configurar políticas RLS no banco e testar acesso anônimo e autenticado;
- nunca expor a chave `service_role` ou outros segredos em código enviado ao navegador;
- limitar tipo e tamanho de uploads, e restringir quem pode enviá-los.

Uma verificação visual ou uma rota protegida na interface não substitui as permissões no banco e nas operações do servidor.

### 4. Imagens hospedadas externamente

Hoje os caminhos das imagens são locais. Se o catálogo usar imagens do Supabase Storage por meio de `next/image`, configurar `remotePatterns` com o host e os caminhos necessários, em vez de permitir qualquer origem ou desativar a otimização como atalho.

### 5. Formulário de contato futuro

O formulário ainda não existe. Quando for implementado, validar campos no servidor, limitar envios abusivos e guardar a chave do serviço de e-mail em variável de ambiente apenas no servidor. Server Actions do Next.js verificam a origem da requisição por padrão, mas isso não substitui validação, autorização nem revisão de Route Handlers próprios.

Referência oficial: [Next.js — segurança de dados](https://nextjs.org/docs/app/guides/data-security).

### 6. Área administrativa e indexação

`robots.txt` é uma orientação para mecanismos de busca; **não protege uma rota** nem impede acesso direto. Uma futura área `/admin` precisará de autenticação e autorização verificadas no servidor e políticas RLS. No Next.js 16, a convenção `middleware` foi renomeada para `proxy`; mesmo o Proxy não deve ser a única verificação de autorização.

Referência oficial: [Next.js — Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy).

### 7. Categorias dinâmicas

Hoje as categorias vêm dos dados locais. React renderiza texto em JSX como texto, não como HTML executável. Quando categorias puderem ser editadas por administradores, validar os valores antes de salvar por consistência e integridade dos dados; evitar inserir conteúdo com APIs de HTML bruto.

## Verificações recomendadas nas próximas etapas

### Antes da integração com o banco

- definir esquema, acesso e políticas RLS;
- manter chaves privadas somente no servidor;
- configurar origens de imagem específicas se necessário;
- testar consultas com dados inválidos e tentativas de acesso não autorizado.

### Antes do painel administrativo

- verificar autenticação e autorização em cada operação;
- testar as políticas RLS com usuário anônimo e administrador;
- validar e limitar uploads;
- não depender de `proxy` ou da interface como única barreira.

### Antes do formulário e da publicação

- validar no servidor, limitar abuso e proteger segredos;
- revisar os cabeçalhos entregues pela hospedagem;
- repetir `npm audit` e testar a aplicação publicada;
- avaliar uma varredura dedicada do histórico Git para credenciais antigas.

> Esta revisão descreve o estado observado em 18/10/2026. Refaça a avaliação quando forem adicionados banco de dados, autenticação, operações de escrita, formulário ou hospedagem pública.
