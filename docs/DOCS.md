# Documentação — TechStore

Documentação técnica do projeto, com mais detalhes sobre como cada parte funciona. Se você só quer rodar o projeto, dá uma olhada no README primeiro.

## Visão geral

O TechStore é montado com o App Router do Next.js. Hoje o projeto tem só uma rota de conteúdo real (`/about`), que mostra uma apresentação do projeto e as tecnologias usadas. O layout raiz (`layout.tsx`) já cuida do header e do rodapé, então toda página nova criada dentro de `app/` herda essa estrutura automaticamente.

## Layout raiz

`src/app/layout.tsx` define o HTML base da aplicação e envolve o conteúdo com `Header` e `Bottom`. Isso significa que qualquer página nova não precisa se preocupar em renderizar esses dois componentes de novo, basta focar no conteúdo do meio.

## Componentes

### Header (`src/components/header.tsx`)

Cabeçalho fixo no topo da página, com o logo do projeto, links de navegação (Home, Categories, Products, About Project) e ícones de carrinho e perfil. Por enquanto os links e os ícones são só visuais, não têm lógica de navegação ou de estado atrelada.

### Hero (`src/components/hero.tsx`)

Seção de introdução exibida na página `/about`. Mostra um selo de "Portfolio Project", um título, um texto explicando o objetivo do projeto e uma imagem de um notebook. Tem também um botão que abre o repositório do GitHub em uma nova aba.

### Section2 (`src/components/section2.tsx`)

Renderiza a lista de tecnologias usadas no projeto, chamando o componente `Card` uma vez para cada uma (TypeScript, Next.js e Tailwind CSS).

### Card (`src/components/card.tsx`)

Componente reutilizável que recebe o nome da tecnologia (`techName`) e o nome do arquivo do logo (`logo`) como props. A descrição de cada tecnologia está hardcoded dentro do próprio componente, escolhida com base no `techName` recebido. O logo é buscado em `public/{logo}.svg`.

### Bottom (`src/components/bottom.tsx`)

Rodapé simples, com o aviso de copyright e a informação de que o projeto tem fins educacionais.

## Estilos

O projeto usa Tailwind CSS 4, configurado em `tailwind.config.ts`. As cores customizadas (background, accent, neutral, color, color2 até color5, etc.) são definidas como variáveis CSS em `src/styles/globals.css` e depois mapeadas no Tailwind, então dá pra usar classes como `bg-color3` ou `text-color5` normalmente.

Também tem um dark mode configurado via classe (`darkMode: "class"`), mas atualmente nenhum componente faz o toggle entre os temas, então na prática ele não é usado ainda.

Em `globals.css` também tem algumas classes utilitárias customizadas dentro de `@layer components`, como `.title-1`, `.title-2`, `.card-title` e `.button-primary`, usadas para manter a tipografia consistente entre os componentes.

## Imagens e assets

Os arquivos estáticos (logos das tecnologias, imagem do notebook, ícone do projeto) ficam em `public/`. Os componentes usam o `next/image` do Next.js para otimizar o carregamento dessas imagens.

## O que falta

Esse projeto ainda está em construção. Coisas que ainda não existem:

- Uma página inicial própria (a rota `/` ainda não tem um `page.tsx`)
- Catálogo de produtos de verdade, com dados reais
- Funcionalidade de carrinho (o ícone existe, mas não faz nada)
- Autenticação de usuário (o ícone de perfil também é só visual)
- Links de navegação do header funcionando

## Convenções usadas

- Componentes em PascalCase, um por arquivo, dentro de `src/components`
- Uso de `"use client"` apenas onde necessário (por exemplo, no `Hero`, por causa do `onClick` no botão)
- Estilização feita quase toda via classes utilitárias do Tailwind, direto no JSX
