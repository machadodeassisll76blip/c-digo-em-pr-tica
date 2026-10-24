# Código em Prática

Crie um site de estudos em português do Brasil (pt-BR) para quem está aprendendo HTML, CSS e JavaScript (nível intermediário). Não precisa de backend nem de login: tudo roda no navegador.

VISUAL
- Tema escuro, estilo programador (fundo quase preto, texto claro, cor de destaque verde/ciano, fonte monoespaçada para código e uma fonte sans-serif limpa para o texto).
- 100% responsivo, pensado primeiro para celular (mobile-first). No desktop: menu lateral fixo com as seções. No celular: menu em gaveta (botão hambúrguer). Botões e áreas de toque grandes. Nada de rolagem horizontal na página.

ESTRUTURA DO SITE
1. Início: título, breve apresentação do site e cartões que levam para HTML, CSS, JavaScript e Projetos.
2. Página de HTML, página de CSS e página de JavaScript. Cada uma começa com um breve resumo da linguagem: o que é, para que serve e quem criou (HTML: Tim Berners-Lee, início dos anos 1990; CSS: Håkon Wium Lie, proposto em 1994 e adotado pelo W3C em 1996; JavaScript: Brendan Eich, na Netscape, em 1995). Depois vem a lista de lições.
3. Página de Projetos, no final do menu, com 3 projetos práticos usando as três linguagens juntas: (a) página de notícias, (b) página de vendas/loja e (c) lista de tarefas. Cada projeto traz explicação do que foi feito e o código completo em HTML, CSS e JS, com o editor interativo para o usuário mexer e ver o resultado.

LIÇÕES (cada lição = título, explicação curta e direta em português, exemplo de código comentado e editor interativo)
- HTML: estrutura básica de um documento, títulos e parágrafos, links e imagens, listas, tabelas, formulários e inputs, tags semânticas (header, nav, main, section, article, footer), atributos e acessibilidade básica.
- CSS: seletores, cores e unidades, modelo de caixa (box model), Flexbox, Grid, posicionamento, responsividade com media queries, transições e animações, variáveis CSS.
- JavaScript: variáveis e tipos, operadores, condicionais, laços, funções, arrays e objetos, manipulação do DOM, eventos, fetch e JSON, localStorage, noções de async/await.

EDITOR INTERATIVO (parte mais importante)
- Em cada lição, um editor de código com abas ou campos para HTML, CSS e JS, e ao lado (no celular, abaixo) a pré-visualização ao vivo, renderizada dentro de um iframe com srcDoc e sandbox. O resultado atualiza enquanto o usuário digita.
- Botões: Copiar código, Restaurar exemplo original e Executar.
- O código deve ser editável com boa usabilidade no celular (fonte legível, sem zoom automático).

EXTRAS
- Barra de busca para achar lições.
- Marcar lição como concluída (salvar o progresso no localStorage) e mostrar uma barra de progresso por linguagem.
- Navegação "lição anterior / próxima".
- Guardar todo o conteúdo das lições em arquivos de dados organizados (um arquivo por linguagem), para ser fácil adicionar novas lições depois.
- Código limpo, componentes reutilizáveis, acessível (contraste bom, foco visível, rótulos).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/90fca419-d934-4f36-ba82-592298a5933e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
