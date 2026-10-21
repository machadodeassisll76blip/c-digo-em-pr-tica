import type { Language } from "./types";

const baseCss = `body { font-family: system-ui, sans-serif; padding: 16px; line-height: 1.5; }`;

export const htmlLanguage: Language = {
  id: "html",
  name: "HTML",
  tagline: "A estrutura de toda página da web.",
  intro: {
    what: "HTML (HyperText Markup Language) é uma linguagem de marcação: ela descreve o conteúdo de uma página usando tags como <h1>, <p> e <a>.",
    purpose: "Serve para estruturar documentos na web — títulos, textos, imagens, links, formulários — e dar significado a cada parte para navegadores, buscadores e leitores de tela.",
    creator: "Criado por Tim Berners-Lee no início dos anos 1990, no CERN, junto com a própria World Wide Web.",
  },
  lessons: [
    {
      slug: "estrutura-basica",
      title: "Estrutura básica de um documento",
      summary: "DOCTYPE, html, head e body.",
      explanation: [
        "Todo documento HTML começa com <!DOCTYPE html>, que avisa ao navegador que usamos HTML5.",
        "A tag <html> envolve tudo. Dentro dela, <head> guarda informações sobre a página (título, charset, viewport) e <body> guarda o que aparece na tela.",
        "No editor abaixo, o HTML já é inserido dentro de um <body>; aqui mostramos a estrutura completa como referência nos comentários.",
      ],
      code: {
        html: `<!--
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Minha página</title>
  </head>
  <body> ...conteúdo... </body>
</html>
-->

<!-- Tudo abaixo vai dentro do <body> -->
<h1>Olá, mundo!</h1>
<p>Esta é minha primeira página.</p>`,
        css: baseCss,
        js: "",
      },
    },
    {
      slug: "titulos-paragrafos",
      title: "Títulos e parágrafos",
      summary: "h1 a h6, p, strong, em e br.",
      explanation: [
        "Existem seis níveis de título: <h1> (mais importante) até <h6>. Use apenas um <h1> por página e respeite a hierarquia.",
        "Parágrafos usam <p>. Para dar ênfase, use <strong> (importância) e <em> (ênfase). Evite usar títulos só para deixar o texto grande — isso é trabalho do CSS.",
      ],
      code: {
        html: `<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Seção menor</h3>

<!-- Parágrafo com ênfases -->
<p>HTML é <strong>muito importante</strong> e <em>fácil</em> de aprender.</p>
<p>Uma linha<br>quebrada com br.</p>`,
        css: baseCss,
        js: "",
      },
    },
    {
      slug: "links-imagens",
      title: "Links e imagens",
      summary: "A tag a, href, target e img com alt.",
      explanation: [
        "Links usam <a href=\"...\">. Com target=\"_blank\", o link abre em nova aba (adicione rel=\"noopener\" por segurança).",
        "Imagens usam <img src=\"...\" alt=\"...\">. O atributo alt descreve a imagem para quem não pode vê-la — nunca esqueça dele.",
      ],
      code: {
        html: `<!-- Link externo abrindo em nova aba -->
<a href="https://developer.mozilla.org/pt-BR/" target="_blank" rel="noopener">
  Documentação MDN
</a>

<!-- Link para uma âncora na mesma página -->
<p><a href="#foto">Ir para a foto</a></p>

<!-- Imagem com texto alternativo -->
<img id="foto" src="https://picsum.photos/400/200" alt="Paisagem aleatória" width="400">`,
        css: baseCss + `\nimg { max-width: 100%; height: auto; border-radius: 8px; }`,
        js: "",
      },
    },
    {
      slug: "listas",
      title: "Listas",
      summary: "ul, ol, li e listas aninhadas.",
      explanation: [
        "<ul> cria uma lista sem ordem (marcadores) e <ol> cria uma lista numerada. Cada item fica em <li>.",
        "Listas podem ser aninhadas: basta colocar uma nova <ul> ou <ol> dentro de um <li>.",
      ],
      code: {
        html: `<h2>Compras</h2>
<ul>
  <li>Arroz</li>
  <li>Feijão</li>
  <li>Frutas
    <!-- Lista dentro de lista -->
    <ul>
      <li>Banana</li>
      <li>Maçã</li>
    </ul>
  </li>
</ul>

<h2>Receita</h2>
<ol>
  <li>Ferva a água</li>
  <li>Adicione o macarrão</li>
  <li>Espere 8 minutos</li>
</ol>`,
        css: baseCss,
        js: "",
      },
    },
    {
      slug: "tabelas",
      title: "Tabelas",
      summary: "table, thead, tbody, tr, th e td.",
      explanation: [
        "Tabelas servem para dados tabulares (não para layout!). <tr> é uma linha, <th> é célula de cabeçalho e <td> é célula comum.",
        "Use <thead>, <tbody> e <caption> para organizar e dar contexto à tabela.",
      ],
      code: {
        html: `<table>
  <caption>Notas do bimestre</caption>
  <thead>
    <tr><th scope="col">Aluno</th><th scope="col">Nota</th></tr>
  </thead>
  <tbody>
    <tr><td>Ana</td><td>9,5</td></tr>
    <tr><td>Bruno</td><td>8,0</td></tr>
    <tr><td>Carla</td><td>7,5</td></tr>
  </tbody>
</table>`,
        css: baseCss + `
table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
thead { background: #eee; }`,
        js: "",
      },
    },
    {
      slug: "formularios",
      title: "Formulários e inputs",
      summary: "form, label, input, select, textarea e button.",
      explanation: [
        "Formulários coletam dados do usuário. Cada campo deve ter um <label> ligado a ele pelo atributo for (igual ao id do campo).",
        "Tipos de input como email, number e date mostram teclados e validações adequadas no celular. O atributo required torna o campo obrigatório.",
      ],
      code: {
        html: `<form>
  <label for="nome">Nome</label>
  <input id="nome" name="nome" type="text" required>

  <label for="email">E-mail</label>
  <input id="email" name="email" type="email" placeholder="voce@exemplo.com">

  <label for="nivel">Nível</label>
  <select id="nivel">
    <option>Iniciante</option>
    <option selected>Intermediário</option>
  </select>

  <label for="msg">Mensagem</label>
  <textarea id="msg" rows="3"></textarea>

  <label><input type="checkbox"> Aceito os termos</label>

  <button type="submit">Enviar</button>
</form>`,
        css: baseCss + `
form { display: grid; gap: 8px; max-width: 360px; }
input, select, textarea, button { font: inherit; padding: 8px; }`,
        js: `// Evita recarregar a página ao enviar
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formulário enviado!');
});`,
      },
    },
    {
      slug: "tags-semanticas",
      title: "Tags semânticas",
      summary: "header, nav, main, section, article e footer.",
      explanation: [
        "Tags semânticas dizem o que cada parte da página é: <header> (cabeçalho), <nav> (navegação), <main> (conteúdo principal), <section> (seção temática), <article> (conteúdo independente) e <footer> (rodapé).",
        "Elas ajudam leitores de tela e buscadores a entender a página, e deixam o código mais legível que um monte de <div>.",
      ],
      code: {
        html: `<header>
  <h1>Meu Blog</h1>
  <nav>
    <a href="#">Início</a> | <a href="#">Sobre</a>
  </nav>
</header>

<main>
  <section>
    <h2>Últimos posts</h2>
    <article>
      <h3>Aprendendo HTML</h3>
      <p>Hoje estudei tags semânticas...</p>
    </article>
  </section>
</main>

<footer>
  <p>&copy; 2026 Meu Blog</p>
</footer>`,
        css: baseCss + `
header, main, footer { border: 1px dashed #999; padding: 8px; margin-bottom: 8px; }
article { background: #f3f3f3; padding: 8px; }`,
        js: "",
      },
    },
    {
      slug: "atributos-acessibilidade",
      title: "Atributos e acessibilidade básica",
      summary: "id, class, lang, alt, aria-label e foco.",
      explanation: [
        "Atributos dão informações extras às tags: id (único), class (para estilizar grupos), lang (idioma), title, alt etc.",
        "Acessibilidade básica: use alt em imagens, label nos campos, botões de verdade (<button>) para ações, aria-label quando o botão só tem ícone e mantenha o foco visível para quem navega pelo teclado.",
      ],
      code: {
        html: `<p lang="en">This sentence is in English.</p>

<!-- Botão só com ícone precisa de aria-label -->
<button aria-label="Fechar">✕</button>

<!-- Classe para estilo, id para identificação única -->
<p id="aviso" class="destaque">Use Tab para navegar pelos elementos.</p>

<a href="#">Link focável</a>
<input aria-label="Buscar" placeholder="Buscar...">`,
        css: baseCss + `
.destaque { background: #fff3a0; padding: 4px; }
/* Foco sempre visível */
:focus-visible { outline: 3px solid #0aa; outline-offset: 2px; }`,
        js: "",
      },
    },
  ],
};
