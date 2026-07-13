# TechStore

Projeto pessoal criado para praticar Next.js, TypeScript e Tailwind CSS. É uma página de e-commerce, focada mais em estrutura e componentização do que em funcionalidades completas de loja (por enquanto não tem carrinho funcional, autenticação nem catálogo de produtos real).

## Sobre

A ideia foi montar a arquitetura de uma loja online do zero: header fixo, seção hero, cards de tecnologias e rodapé, tudo componentizado e estilizado com Tailwind. Serve mais como base de estudo e portfólio do que como um produto pronto.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- react-icons

## Rodando localmente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/ArthurAngeloFollador/TechStore.git
cd TechStore
npm install
```

Depois inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. A página principal do projeto fica em `/about`.

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera o build de produção
- `npm run start` — roda o build de produção
- `npm run lint` — roda o ESLint

## Estrutura do projeto

```
src/
  app/
    layout.tsx       # layout raiz (Header + Bottom)
    about/page.tsx    # página principal com Hero e Section2
  components/
    header.tsx         # cabeçalho fixo com navegação
    hero.tsx            # seção de introdução do projeto
    section2.tsx      # seção que lista as tecnologias usadas
    card.tsx             # card individual de cada tecnologia
    bottom.tsx        # rodapé
  styles/
    globals.css        # variáveis de cor e classes utilitárias
```

## Status

Ainda em desenvolvimento. Próximos passos que pretendo fazer: página inicial própria (hoje o conteúdo principal está em `/about`), catálogo de produtos e talvez um carrinho funcional.

## Licença

Projeto pessoal sem licença definida, sinta-se livre para olhar o código e usar como referência.
