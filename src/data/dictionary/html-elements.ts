import type { DictionaryEntry } from "./types";
export const htmlElements: DictionaryEntry[] = [
  {
    "id": "html",
    "name": "html",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Elemento raiz do documento; informe o idioma principal com lang.",
    "syntax": "<html>…</html>",
    "example": "<!DOCTYPE html>\n<html lang=\"pt-BR\"><head><title>Estudo</title></head><body><p>Olá!</p></body></html>",
    "tags": [
      "estrutura",
      "html"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "head",
    "name": "head",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Reúne metadados, título e referências a recursos; não é o conteúdo visível.",
    "syntax": "<head>…</head>",
    "example": "<head><meta charset=\"UTF-8\"><title>Minha página</title></head>",
    "tags": [
      "estrutura",
      "head"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "title",
    "name": "title",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Define o título mostrado na aba do navegador; fica dentro de head.",
    "syntax": "<title>…</title>",
    "example": "<title>Meu caderno de HTML</title>",
    "tags": [
      "estrutura",
      "title"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "base",
    "name": "base",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Define a URL base dos endereços relativos; use no máximo um href e um target em base no documento.",
    "syntax": "<base atributo=\"valor\">",
    "example": "<head><base href=\"https://example.com/guias/\"><title>Guias</title></head>",
    "tags": [
      "estrutura",
      "base"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "link",
    "name": "link",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Relaciona o documento a um recurso externo, como uma folha CSS; é um elemento vazio.",
    "syntax": "<link atributo=\"valor\">",
    "example": "<link rel=\"stylesheet\" href=\"estilos.css\">",
    "tags": [
      "estrutura",
      "link"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "meta",
    "name": "meta",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Fornece metadados, como codificação, descrição e configuração da viewport; é um elemento vazio.",
    "syntax": "<meta atributo=\"valor\">",
    "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
    "tags": [
      "estrutura",
      "meta"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "style",
    "name": "style",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Contém regras CSS da página; normalmente fica em head.",
    "syntax": "<style>…</style>",
    "example": "<style>p { line-height: 1.6; }</style>",
    "tags": [
      "estrutura",
      "style"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "body",
    "name": "body",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Contém o conteúdo do documento mostrado ao usuário.",
    "syntax": "<body>…</body>",
    "example": "<body><h1>Estudos</h1><p>Bem-vindo.</p></body>",
    "tags": [
      "estrutura",
      "body"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "script",
    "name": "script",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Inclui código JavaScript ou dados; type=\"module\" ativa módulos JavaScript.",
    "syntax": "<script>…</script>",
    "example": "<script type=\"module\" src=\"app.js\"></script>",
    "tags": [
      "estrutura",
      "script"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "noscript",
    "name": "noscript",
    "language": "html",
    "category": "estrutura",
    "kind": "element",
    "description": "Oferece conteúdo alternativo quando scripts estão desativados ou não são suportados.",
    "syntax": "<noscript>…</noscript>",
    "example": "<noscript>Ative o JavaScript para usar o editor.</noscript>",
    "tags": [
      "estrutura",
      "noscript"
    ],
    "lesson": "estrutura-basica"
  },
  {
    "id": "header",
    "name": "header",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Introdução de uma página ou seção, com título ou navegação; pode haver vários no documento.",
    "syntax": "<header>…</header>",
    "example": "<header><h1>Meu blog</h1></header>",
    "tags": [
      "semantica",
      "header"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "nav",
    "name": "nav",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Agrupa links importantes de navegação.",
    "syntax": "<nav>…</nav>",
    "example": "<nav aria-label=\"Principal\"><a href=\"/\">Início</a></nav>",
    "tags": [
      "semantica",
      "nav"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "main",
    "name": "main",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Representa o conteúdo principal; apenas um main não oculto deve existir no documento.",
    "syntax": "<main>…</main>",
    "example": "<main><h1>Guia de HTML</h1><p>Conteúdo principal.</p></main>",
    "tags": [
      "semantica",
      "main"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "section",
    "name": "section",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Seção temática, normalmente identificada por um título.",
    "syntax": "<section>…</section>",
    "example": "<section><h2>Notícias</h2><p>Últimas novidades.</p></section>",
    "tags": [
      "semantica",
      "section"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "article",
    "name": "article",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Conteúdo independente que pode ser reutilizado, como um post ou notícia.",
    "syntax": "<article>…</article>",
    "example": "<article><h2>Uma notícia</h2><p>Texto da notícia.</p></article>",
    "tags": [
      "semantica",
      "article"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "aside",
    "name": "aside",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Conteúdo relacionado indiretamente ao conteúdo ao redor, como uma nota lateral.",
    "syntax": "<aside>…</aside>",
    "example": "<aside><h2>Leia também</h2><a href=\"guia.html\">Guia</a></aside>",
    "tags": [
      "semantica",
      "aside"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "footer",
    "name": "footer",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Rodapé de uma página ou seção, com autoria ou informações relacionadas.",
    "syntax": "<footer>…</footer>",
    "example": "<footer><p>Escrito por Ana.</p></footer>",
    "tags": [
      "semantica",
      "footer"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "address",
    "name": "address",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Informações de contato do autor ou responsável pela página ou artigo, não qualquer endereço.",
    "syntax": "<address>…</address>",
    "example": "<address>Contato: <a href=\"mailto:ana@example.com\">Ana</a></address>",
    "tags": [
      "semantica",
      "address"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "hgroup",
    "name": "hgroup",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Agrupa um título com parágrafos associados, como subtítulo ou slogan.",
    "syntax": "<hgroup>…</hgroup>",
    "example": "<hgroup><h1>HTML</h1><p>A linguagem da web</p></hgroup>",
    "tags": [
      "semantica",
      "hgroup"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "search",
    "name": "search",
    "language": "html",
    "category": "semantica",
    "kind": "element",
    "description": "Delimita controles e conteúdo de busca ou filtragem.",
    "syntax": "<search>…</search>",
    "example": "<search><form action=\"/busca\"><label>Buscar <input name=\"q\"></label><button>Buscar</button></form></search>",
    "tags": [
      "semantica",
      "search"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "h1",
    "name": "h1",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Título de nível 1; a hierarquia vai de h1 (principal) a h6. Escolha o nível pela estrutura, não pelo tamanho.",
    "syntax": "<h1>…</h1>",
    "example": "<h1>Título de nível 1</h1>",
    "tags": [
      "texto",
      "h1"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "h2",
    "name": "h2",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Título de nível 2; a hierarquia vai de h1 (principal) a h6. Escolha o nível pela estrutura, não pelo tamanho.",
    "syntax": "<h2>…</h2>",
    "example": "<h2>Título de nível 2</h2>",
    "tags": [
      "texto",
      "h2"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "h3",
    "name": "h3",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Título de nível 3; a hierarquia vai de h1 (principal) a h6. Escolha o nível pela estrutura, não pelo tamanho.",
    "syntax": "<h3>…</h3>",
    "example": "<h3>Título de nível 3</h3>",
    "tags": [
      "texto",
      "h3"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "h4",
    "name": "h4",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Título de nível 4; a hierarquia vai de h1 (principal) a h6. Escolha o nível pela estrutura, não pelo tamanho.",
    "syntax": "<h4>…</h4>",
    "example": "<h4>Título de nível 4</h4>",
    "tags": [
      "texto",
      "h4"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "h5",
    "name": "h5",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Título de nível 5; a hierarquia vai de h1 (principal) a h6. Escolha o nível pela estrutura, não pelo tamanho.",
    "syntax": "<h5>…</h5>",
    "example": "<h5>Título de nível 5</h5>",
    "tags": [
      "texto",
      "h5"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "h6",
    "name": "h6",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Título de nível 6; a hierarquia vai de h1 (principal) a h6. Escolha o nível pela estrutura, não pelo tamanho.",
    "syntax": "<h6>…</h6>",
    "example": "<h6>Título de nível 6</h6>",
    "tags": [
      "texto",
      "h6"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "p",
    "name": "p",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Representa um parágrafo; não pode conter outros parágrafos ou seções.",
    "syntax": "<p>…</p>",
    "example": "<p>Aprender HTML é praticar.</p>",
    "tags": [
      "texto",
      "p"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "hr",
    "name": "hr",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Separação temática entre assuntos; é um elemento vazio, não apenas uma linha decorativa.",
    "syntax": "<hr atributo=\"valor\">",
    "example": "<p>Primeiro assunto.</p><hr><p>Outro assunto.</p>",
    "tags": [
      "texto",
      "hr"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "pre",
    "name": "pre",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Preserva espaços e quebras de linha; útil para código e texto pré-formatado.",
    "syntax": "<pre>…</pre>",
    "example": "<pre><code>const soma = 1 + 2;</code></pre>",
    "tags": [
      "texto",
      "pre"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "blockquote",
    "name": "blockquote",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Citação longa de outra fonte; cite pode guardar a URL da fonte, mas não a exibe.",
    "syntax": "<blockquote>…</blockquote>",
    "example": "<blockquote cite=\"https://example.com/artigo\"><p>Uma citação.</p></blockquote>",
    "tags": [
      "texto",
      "blockquote"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "a",
    "name": "a",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Cria um link quando tem href; pode apontar para páginas, arquivos ou âncoras.",
    "syntax": "<a>…</a>",
    "example": "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Visitar</a>",
    "tags": [
      "texto",
      "a"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "abbr",
    "name": "abbr",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Marca uma abreviação; title pode informar sua expansão.",
    "syntax": "<abbr>…</abbr>",
    "example": "<abbr title=\"HyperText Markup Language\">HTML</abbr>",
    "tags": [
      "texto",
      "abbr"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "b",
    "name": "b",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Chama atenção sem indicar importância extra; não substitui strong.",
    "syntax": "<b>…</b>",
    "example": "<p>Palavra-chave: <b>HTML</b>.</p>",
    "tags": [
      "texto",
      "b"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "bdi",
    "name": "bdi",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Isola a direção de um trecho de texto, útil para nomes em idiomas variados.",
    "syntax": "<bdi>…</bdi>",
    "example": "<p>Usuário: <bdi>علي</bdi></p>",
    "tags": [
      "texto",
      "bdi"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "bdo",
    "name": "bdo",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Substitui explicitamente a direção do texto com dir.",
    "syntax": "<bdo>…</bdo>",
    "example": "<bdo dir=\"rtl\">Texto invertido</bdo>",
    "tags": [
      "texto",
      "bdo"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "br",
    "name": "br",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Insere uma quebra de linha, como em poemas ou endereços; é um elemento vazio.",
    "syntax": "<br atributo=\"valor\">",
    "example": "<p>Rua das Flores, 10<br>São Paulo</p>",
    "tags": [
      "texto",
      "br"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "cite",
    "name": "cite",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Identifica o título de uma obra citada, não o nome de uma pessoa isoladamente.",
    "syntax": "<cite>…</cite>",
    "example": "<p>Leia <cite>Dom Casmurro</cite>.</p>",
    "tags": [
      "texto",
      "cite"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "code",
    "name": "code",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Marca um fragmento de código de computador.",
    "syntax": "<code>…</code>",
    "example": "<p>Use <code>document.querySelector()</code>.</p>",
    "tags": [
      "texto",
      "code"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "data",
    "name": "data",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Associa um conteúdo legível a um valor processável por software.",
    "syntax": "<data>…</data>",
    "example": "<data value=\"SKU-42\">Caderno verde</data>",
    "tags": [
      "texto",
      "data"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "dfn",
    "name": "dfn",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Marca o termo que está sendo definido no contexto.",
    "syntax": "<dfn>…</dfn>",
    "example": "<p><dfn>HTML</dfn> é uma linguagem de marcação.</p>",
    "tags": [
      "texto",
      "dfn"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "em",
    "name": "em",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Indica ênfase que altera o sentido de uma frase.",
    "syntax": "<em>…</em>",
    "example": "<p>Eu <em>realmente</em> gostei.</p>",
    "tags": [
      "texto",
      "em"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "i",
    "name": "i",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Texto em voz alternativa, termo técnico ou expressão estrangeira; não substitui em.",
    "syntax": "<i>…</i>",
    "example": "<p>O termo <i lang=\"en\">framework</i> é comum.</p>",
    "tags": [
      "texto",
      "i"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "kbd",
    "name": "kbd",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Representa entrada do usuário, como uma tecla.",
    "syntax": "<kbd>…</kbd>",
    "example": "<p>Pressione <kbd>Enter</kbd>.</p>",
    "tags": [
      "texto",
      "kbd"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "mark",
    "name": "mark",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Destaca conteúdo relevante no contexto, como uma ocorrência de busca.",
    "syntax": "<mark>…</mark>",
    "example": "<p>Aprenda <mark>HTML</mark> hoje.</p>",
    "tags": [
      "texto",
      "mark"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "q",
    "name": "q",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Citação curta dentro do texto; o navegador geralmente acrescenta aspas.",
    "syntax": "<q>…</q>",
    "example": "<p>Ela disse: <q>Vamos estudar.</q></p>",
    "tags": [
      "texto",
      "q"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "ruby",
    "name": "ruby",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Agrupa texto com anotação de pronúncia, comum em idiomas asiáticos.",
    "syntax": "<ruby>…</ruby>",
    "example": "<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>",
    "tags": [
      "texto",
      "ruby"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "rp",
    "name": "rp",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Parênteses alternativos para navegadores que não exibem anotações ruby.",
    "syntax": "<rp>…</rp>",
    "example": "<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>",
    "tags": [
      "texto",
      "rp"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "rt",
    "name": "rt",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Texto da anotação de pronúncia dentro de ruby.",
    "syntax": "<rt>…</rt>",
    "example": "<ruby>漢<rt>kan</rt></ruby>",
    "tags": [
      "texto",
      "rt"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "s",
    "name": "s",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Marca informação que deixou de ser correta; para edições, use del.",
    "syntax": "<s>…</s>",
    "example": "<p><s>R$ 100</s> Agora R$ 80.</p>",
    "tags": [
      "texto",
      "s"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "samp",
    "name": "samp",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Representa saída de um programa ou sistema.",
    "syntax": "<samp>…</samp>",
    "example": "<p>Resultado: <samp>Arquivo salvo</samp>.</p>",
    "tags": [
      "texto",
      "samp"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "small",
    "name": "small",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Comentários secundários, como avisos legais; não é só texto pequeno.",
    "syntax": "<small>…</small>",
    "example": "<small>Todos os direitos reservados.</small>",
    "tags": [
      "texto",
      "small"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "span",
    "name": "span",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Agrupa texto sem acrescentar significado semântico.",
    "syntax": "<span>…</span>",
    "example": "<p>Cor: <span class=\"cor\">verde</span>.</p>",
    "tags": [
      "texto",
      "span"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "strong",
    "name": "strong",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Indica importância, urgência ou seriedade.",
    "syntax": "<strong>…</strong>",
    "example": "<p><strong>Atenção:</strong> salve seu trabalho.</p>",
    "tags": [
      "texto",
      "strong"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "sub",
    "name": "sub",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Texto subscrito, adequado a fórmulas químicas e notações.",
    "syntax": "<sub>…</sub>",
    "example": "<p>H<sub>2</sub>O</p>",
    "tags": [
      "texto",
      "sub"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "sup",
    "name": "sup",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Texto sobrescrito, como expoentes e chamadas de notas.",
    "syntax": "<sup>…</sup>",
    "example": "<p>2<sup>3</sup> = 8</p>",
    "tags": [
      "texto",
      "sup"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "time",
    "name": "time",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Representa data ou horário; datetime fornece um valor padronizado.",
    "syntax": "<time>…</time>",
    "example": "<time datetime=\"2026-10-24\">24 de outubro de 2026</time>",
    "tags": [
      "texto",
      "time"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "u",
    "name": "u",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Anotação não textual, como indicação de erro ortográfico; evite confundir com links.",
    "syntax": "<u>…</u>",
    "example": "<p>Erro: <u class=\"erro\">concerteza</u>.</p>",
    "tags": [
      "texto",
      "u"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "var",
    "name": "var",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Representa uma variável em matemática ou programação.",
    "syntax": "<var>…</var>",
    "example": "<p><var>x</var> + 2 = 4</p>",
    "tags": [
      "texto",
      "var"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "wbr",
    "name": "wbr",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Marca um ponto opcional de quebra em uma palavra longa; é um elemento vazio.",
    "syntax": "<wbr atributo=\"valor\">",
    "example": "<p>super<wbr>comprido<wbr>exemplo</p>",
    "tags": [
      "texto",
      "wbr"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "ins",
    "name": "ins",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Marca conteúdo inserido em uma edição.",
    "syntax": "<ins>…</ins>",
    "example": "<p>Agenda: <ins datetime=\"2026-10-24\">nova aula</ins>.</p>",
    "tags": [
      "texto",
      "ins"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "del",
    "name": "del",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Marca conteúdo removido em uma edição.",
    "syntax": "<del>…</del>",
    "example": "<p><del>Versão antiga</del> Versão nova.</p>",
    "tags": [
      "texto",
      "del"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "div",
    "name": "div",
    "language": "html",
    "category": "texto",
    "kind": "element",
    "description": "Agrupa conteúdo sem significado semântico próprio; prefira elementos semânticos quando apropriado.",
    "syntax": "<div>…</div>",
    "example": "<div class=\"grupo\"><p>Conteúdo agrupado.</p></div>",
    "tags": [
      "texto",
      "div"
    ],
    "lesson": "titulos-paragrafos"
  },
  {
    "id": "ul",
    "name": "ul",
    "language": "html",
    "category": "listas",
    "kind": "element",
    "description": "Lista em que a ordem dos itens não muda o significado.",
    "syntax": "<ul>…</ul>",
    "example": "<ul><li>HTML</li><li>CSS</li></ul>",
    "tags": [
      "listas",
      "ul"
    ],
    "lesson": "listas"
  },
  {
    "id": "ol",
    "name": "ol",
    "language": "html",
    "category": "listas",
    "kind": "element",
    "description": "Lista em que a sequência importa; start define a numeração inicial.",
    "syntax": "<ol>…</ol>",
    "example": "<ol start=\"2\"><li>Pratique</li><li>Revise</li></ol>",
    "tags": [
      "listas",
      "ol"
    ],
    "lesson": "listas"
  },
  {
    "id": "li",
    "name": "li",
    "language": "html",
    "category": "listas",
    "kind": "element",
    "description": "Item dentro de ul, ol ou menu.",
    "syntax": "<li>…</li>",
    "example": "<ul><li>Aprender HTML</li></ul>",
    "tags": [
      "listas",
      "li"
    ],
    "lesson": "listas"
  },
  {
    "id": "menu",
    "name": "menu",
    "language": "html",
    "category": "listas",
    "kind": "element",
    "description": "Lista de comandos, representados por itens li; não cria automaticamente um menu interativo.",
    "syntax": "<menu>…</menu>",
    "example": "<menu><li><button type=\"button\">Salvar</button></li></menu>",
    "tags": [
      "listas",
      "menu"
    ],
    "lesson": "listas"
  },
  {
    "id": "dl",
    "name": "dl",
    "language": "html",
    "category": "listas",
    "kind": "element",
    "description": "Lista de grupos de termos e descrições.",
    "syntax": "<dl>…</dl>",
    "example": "<dl><dt>HTML</dt><dd>Linguagem de marcação.</dd></dl>",
    "tags": [
      "listas",
      "dl"
    ],
    "lesson": "listas"
  },
  {
    "id": "dt",
    "name": "dt",
    "language": "html",
    "category": "listas",
    "kind": "element",
    "description": "Termo ou nome em uma lista de descrições dl.",
    "syntax": "<dt>…</dt>",
    "example": "<dl><dt>CSS</dt><dd>Folhas de estilo.</dd></dl>",
    "tags": [
      "listas",
      "dt"
    ],
    "lesson": "listas"
  },
  {
    "id": "dd",
    "name": "dd",
    "language": "html",
    "category": "listas",
    "kind": "element",
    "description": "Descrição ou valor associado a um termo dt dentro de dl.",
    "syntax": "<dd>…</dd>",
    "example": "<dl><dt>JS</dt><dd>JavaScript.</dd></dl>",
    "tags": [
      "listas",
      "dd"
    ],
    "lesson": "listas"
  },
  {
    "id": "img",
    "name": "img",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Incorpora uma imagem; alt descreve seu conteúdo ou fica vazio em imagens decorativas.",
    "syntax": "<img atributo=\"valor\">",
    "example": "<img src=\"foto.jpg\" alt=\"Pessoa estudando\" width=\"400\" height=\"300\" loading=\"lazy\">",
    "tags": [
      "midia",
      "img"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "picture",
    "name": "picture",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Oferece fontes alternativas de imagem; precisa de um img como alternativa final.",
    "syntax": "<picture>…</picture>",
    "example": "<picture><source srcset=\"foto.webp\" type=\"image/webp\"><img src=\"foto.jpg\" alt=\"Uma paisagem\"></picture>",
    "tags": [
      "midia",
      "picture"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "source",
    "name": "source",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Fonte alternativa para picture, audio ou video; é um elemento vazio.",
    "syntax": "<source atributo=\"valor\">",
    "example": "<video controls><source src=\"aula.mp4\" type=\"video/mp4\"></video>",
    "tags": [
      "midia",
      "source"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "video",
    "name": "video",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Incorpora vídeo; controls mostra controles e track pode fornecer legendas.",
    "syntax": "<video>…</video>",
    "example": "<video controls width=\"320\"><source src=\"aula.mp4\" type=\"video/mp4\"><track kind=\"captions\" src=\"legendas.vtt\" srclang=\"pt-BR\" label=\"Português\"></video>",
    "tags": [
      "midia",
      "video"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "audio",
    "name": "audio",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Incorpora áudio; controls oferece controles de reprodução.",
    "syntax": "<audio>…</audio>",
    "example": "<audio controls src=\"aula.mp3\">Seu navegador não suporta áudio.</audio>",
    "tags": [
      "midia",
      "audio"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "track",
    "name": "track",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Trilha de texto, como legendas WebVTT, em audio ou video; é um elemento vazio.",
    "syntax": "<track atributo=\"valor\">",
    "example": "<video controls src=\"aula.mp4\"><track kind=\"captions\" src=\"aula.vtt\" srclang=\"pt-BR\" label=\"Português\" default></video>",
    "tags": [
      "midia",
      "track"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "iframe",
    "name": "iframe",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Incorpora outro documento; use title descritivo e limite permissões quando necessário.",
    "syntax": "<iframe>…</iframe>",
    "example": "<iframe src=\"/exemplo.html\" title=\"Exemplo da aula\" loading=\"lazy\" sandbox></iframe>",
    "tags": [
      "midia",
      "iframe"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "embed",
    "name": "embed",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Incorpora recurso externo; é um elemento vazio e depende do suporte do navegador.",
    "syntax": "<embed atributo=\"valor\">",
    "example": "<embed src=\"guia.pdf\" type=\"application/pdf\" width=\"400\" height=\"300\">",
    "tags": [
      "midia",
      "embed"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "object",
    "name": "object",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Incorpora um recurso externo com conteúdo alternativo.",
    "syntax": "<object>…</object>",
    "example": "<object data=\"guia.pdf\" type=\"application/pdf\"><a href=\"guia.pdf\">Baixar PDF</a></object>",
    "tags": [
      "midia",
      "object"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "map",
    "name": "map",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Define um mapa de áreas clicáveis associado a img por usemap.",
    "syntax": "<map>…</map>",
    "example": "<img src=\"mapa.png\" alt=\"Mapa do campus\" usemap=\"#campus\"><map name=\"campus\"><area shape=\"rect\" coords=\"0,0,100,100\" href=\"biblioteca.html\" alt=\"Biblioteca\"></map>",
    "tags": [
      "midia",
      "map"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "area",
    "name": "area",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Área clicável de um mapa de imagem; fica em map e é um elemento vazio.",
    "syntax": "<area atributo=\"valor\">",
    "example": "<map name=\"atalhos\"><area shape=\"rect\" coords=\"0,0,100,100\" href=\"guia.html\" alt=\"Guia\"></map>",
    "tags": [
      "midia",
      "area"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "figure",
    "name": "figure",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Conteúdo independente, como imagem, código ou gráfico, com legenda opcional.",
    "syntax": "<figure>…</figure>",
    "example": "<figure><img src=\"foto.jpg\" alt=\"Montanha\"><figcaption>Vista da trilha.</figcaption></figure>",
    "tags": [
      "midia",
      "figure"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "figcaption",
    "name": "figcaption",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Legenda de figure, como primeiro ou último filho.",
    "syntax": "<figcaption>…</figcaption>",
    "example": "<figure><img src=\"foto.jpg\" alt=\"Praia\"><figcaption>Praia ao amanhecer.</figcaption></figure>",
    "tags": [
      "midia",
      "figcaption"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "canvas",
    "name": "canvas",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Área de desenho por scripts; forneça conteúdo alternativo acessível.",
    "syntax": "<canvas>…</canvas>",
    "example": "<canvas id=\"grafico\" width=\"300\" height=\"150\">Gráfico de progresso: 50%.</canvas>",
    "tags": [
      "midia",
      "canvas"
    ],
    "lesson": "links-imagens"
  },
  {
    "id": "svg",
    "name": "svg",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Raiz de gráficos vetoriais SVG incorporados; pertence ao namespace SVG, não ao conjunto de elementos HTML.",
    "syntax": "<svg>…</svg>",
    "example": "<svg viewBox=\"0 0 100 100\" role=\"img\" aria-label=\"Círculo\"><circle cx=\"50\" cy=\"50\" r=\"40\" /></svg>",
    "tags": [
      "midia",
      "svg"
    ],
    "lesson": "links-imagens",
    "note": "Conteúdo estrangeiro incorporável em HTML; seus elementos internos e atributos seguem sua própria especificação."
  },
  {
    "id": "math",
    "name": "math",
    "language": "html",
    "category": "midia",
    "kind": "element",
    "description": "Raiz de uma fórmula MathML incorporada; pertence ao namespace MathML, não ao conjunto de elementos HTML.",
    "syntax": "<math>…</math>",
    "example": "<math><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>",
    "tags": [
      "midia",
      "math"
    ],
    "lesson": "links-imagens",
    "note": "Conteúdo estrangeiro incorporável em HTML; seus elementos internos e atributos seguem sua própria especificação."
  },
  {
    "id": "table",
    "name": "table",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Representa dados tabulares, não o layout da página.",
    "syntax": "<table>…</table>",
    "example": "<table><caption>Notas</caption><tr><th scope=\"col\">Aluno</th><th scope=\"col\">Nota</th></tr><tr><td>Ana</td><td>9</td></tr></table>",
    "tags": [
      "tabela",
      "table"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "caption",
    "name": "caption",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Título ou descrição da tabela; deve ser seu primeiro filho de conteúdo.",
    "syntax": "<caption>…</caption>",
    "example": "<table><caption>Notas</caption><tr><td>9</td></tr></table>",
    "tags": [
      "tabela",
      "caption"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "colgroup",
    "name": "colgroup",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Agrupa colunas para configuração de propriedades como estilos.",
    "syntax": "<colgroup>…</colgroup>",
    "example": "<table><colgroup><col class=\"nome\"><col class=\"nota\"></colgroup><tr><td>Ana</td><td>9</td></tr></table>",
    "tags": [
      "tabela",
      "colgroup"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "col",
    "name": "col",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Representa uma ou mais colunas dentro de colgroup; é um elemento vazio.",
    "syntax": "<col atributo=\"valor\">",
    "example": "<table><colgroup><col span=\"2\" class=\"destaque\"></colgroup><tr><td>A</td><td>B</td></tr></table>",
    "tags": [
      "tabela",
      "col"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "thead",
    "name": "thead",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Agrupa as linhas de cabeçalho de uma tabela.",
    "syntax": "<thead>…</thead>",
    "example": "<table><thead><tr><th scope=\"col\">Nome</th></tr></thead><tbody><tr><td>Ana</td></tr></tbody></table>",
    "tags": [
      "tabela",
      "thead"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "tbody",
    "name": "tbody",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Agrupa as linhas de dados de uma tabela.",
    "syntax": "<tbody>…</tbody>",
    "example": "<table><tbody><tr><td>Ana</td><td>9</td></tr></tbody></table>",
    "tags": [
      "tabela",
      "tbody"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "tfoot",
    "name": "tfoot",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Agrupa linhas de resumo, como totais; vem após os grupos de corpo.",
    "syntax": "<tfoot>…</tfoot>",
    "example": "<table><tbody><tr><td>10</td></tr></tbody><tfoot><tr><td>Total: 10</td></tr></tfoot></table>",
    "tags": [
      "tabela",
      "tfoot"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "tr",
    "name": "tr",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Linha da tabela, contendo células th ou td.",
    "syntax": "<tr>…</tr>",
    "example": "<table><tr><td>Ana</td><td>9</td></tr></table>",
    "tags": [
      "tabela",
      "tr"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "th",
    "name": "th",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Célula de cabeçalho; scope indica as células às quais se aplica.",
    "syntax": "<th>…</th>",
    "example": "<table><tr><th scope=\"row\">Ana</th><td>9</td></tr></table>",
    "tags": [
      "tabela",
      "th"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "td",
    "name": "td",
    "language": "html",
    "category": "tabela",
    "kind": "element",
    "description": "Célula de dados de uma tabela.",
    "syntax": "<td>…</td>",
    "example": "<table><tr><td>HTML</td><td>Concluído</td></tr></table>",
    "tags": [
      "tabela",
      "td"
    ],
    "lesson": "tabelas"
  },
  {
    "id": "form",
    "name": "form",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Agrupa controles para envio de dados; action é o destino e method o método.",
    "syntax": "<form>…</form>",
    "example": "<form action=\"/busca\" method=\"get\"><label>Buscar <input name=\"q\"></label><button>Buscar</button></form>",
    "tags": [
      "formulario",
      "form"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input",
    "name": "input",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Controle de entrada de dados; type define o comportamento e name identifica o dado enviado.",
    "syntax": "<input atributo=\"valor\">",
    "example": "<label for=\"nome\">Nome</label><input id=\"nome\" name=\"nome\" type=\"text\" required>",
    "tags": [
      "formulario",
      "input"
    ],
    "lesson": "formularios"
  },
  {
    "id": "label",
    "name": "label",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Nome acessível de um controle; for deve corresponder ao id do controle.",
    "syntax": "<label>…</label>",
    "example": "<label for=\"email\">E-mail</label><input id=\"email\" type=\"email\" name=\"email\">",
    "tags": [
      "formulario",
      "label"
    ],
    "lesson": "formularios"
  },
  {
    "id": "button",
    "name": "button",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Botão de ação; dentro de form, o padrão é submit, então informe type=\"button\" para outras ações.",
    "syntax": "<button>…</button>",
    "example": "<button type=\"button\">Abrir painel</button>",
    "tags": [
      "formulario",
      "button"
    ],
    "lesson": "formularios"
  },
  {
    "id": "select",
    "name": "select",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Controle para escolher uma opção ou várias com multiple.",
    "syntax": "<select>…</select>",
    "example": "<label for=\"curso\">Curso</label><select id=\"curso\" name=\"curso\"><option value=\"html\">HTML</option><option value=\"css\">CSS</option></select>",
    "tags": [
      "formulario",
      "select"
    ],
    "lesson": "formularios"
  },
  {
    "id": "option",
    "name": "option",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Opção em select, optgroup ou datalist; value é o valor enviado.",
    "syntax": "<option>…</option>",
    "example": "<select name=\"curso\" aria-label=\"Curso\"><option value=\"html\">HTML</option></select>",
    "tags": [
      "formulario",
      "option"
    ],
    "lesson": "formularios"
  },
  {
    "id": "optgroup",
    "name": "optgroup",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Agrupa opções de select com um rótulo label.",
    "syntax": "<optgroup>…</optgroup>",
    "example": "<select aria-label=\"Curso\"><optgroup label=\"Web\"><option>HTML</option><option>CSS</option></optgroup></select>",
    "tags": [
      "formulario",
      "optgroup"
    ],
    "lesson": "formularios"
  },
  {
    "id": "textarea",
    "name": "textarea",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Campo de texto multilinha; o valor inicial fica entre as tags, não em value.",
    "syntax": "<textarea>…</textarea>",
    "example": "<label for=\"msg\">Mensagem</label><textarea id=\"msg\" name=\"msg\" rows=\"3\">Olá!</textarea>",
    "tags": [
      "formulario",
      "textarea"
    ],
    "lesson": "formularios"
  },
  {
    "id": "fieldset",
    "name": "fieldset",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Agrupa controles relacionados; disabled desativa os controles, salvo exceções na primeira legend.",
    "syntax": "<fieldset>…</fieldset>",
    "example": "<fieldset><legend>Contato</legend><label>E-mail <input type=\"email\" name=\"email\"></label></fieldset>",
    "tags": [
      "formulario",
      "fieldset"
    ],
    "lesson": "formularios"
  },
  {
    "id": "legend",
    "name": "legend",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Legenda do grupo fieldset; deve ser seu primeiro filho de conteúdo.",
    "syntax": "<legend>…</legend>",
    "example": "<fieldset><legend>Preferências</legend><label><input type=\"checkbox\" name=\"novidades\"> Novidades</label></fieldset>",
    "tags": [
      "formulario",
      "legend"
    ],
    "lesson": "formularios"
  },
  {
    "id": "datalist",
    "name": "datalist",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Oferece sugestões a um input por meio do atributo list; não obriga a escolher uma sugestão.",
    "syntax": "<datalist>…</datalist>",
    "example": "<label for=\"curso\">Curso</label><input id=\"curso\" list=\"cursos\"><datalist id=\"cursos\"><option value=\"HTML\"><option value=\"CSS\"></datalist>",
    "tags": [
      "formulario",
      "datalist"
    ],
    "lesson": "formularios"
  },
  {
    "id": "output",
    "name": "output",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Resultado de um cálculo ou ação; não é enviado automaticamente como dado do formulário.",
    "syntax": "<output>…</output>",
    "example": "<form oninput=\"total.value=Number(a.value)+Number(b.value)\"><input id=\"a\" type=\"number\" value=\"1\" aria-label=\"A\"><input id=\"b\" type=\"number\" value=\"2\" aria-label=\"B\"><output name=\"total\" for=\"a b\">3</output></form>",
    "tags": [
      "formulario",
      "output"
    ],
    "lesson": "formularios"
  },
  {
    "id": "progress",
    "name": "progress",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Progresso de uma tarefa; sem value, representa progresso indeterminado.",
    "syntax": "<progress>…</progress>",
    "example": "<label for=\"progresso\">Progresso</label><progress id=\"progresso\" value=\"3\" max=\"10\">30%</progress>",
    "tags": [
      "formulario",
      "progress"
    ],
    "lesson": "formularios"
  },
  {
    "id": "meter",
    "name": "meter",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Medição em uma faixa conhecida; não use para progresso de tarefa.",
    "syntax": "<meter>…</meter>",
    "example": "<label for=\"disco\">Espaço usado</label><meter id=\"disco\" min=\"0\" max=\"100\" value=\"60\">60%</meter>",
    "tags": [
      "formulario",
      "meter"
    ],
    "lesson": "formularios"
  },
  {
    "id": "selectedcontent",
    "name": "selectedcontent",
    "language": "html",
    "category": "formulario",
    "kind": "element",
    "description": "Exibe uma cópia da opção selecionada no botão de um select personalizável; recurso recente com suporte limitado.",
    "syntax": "<selectedcontent>…</selectedcontent>",
    "example": "<select aria-label=\"Curso\"><button><selectedcontent></selectedcontent></button><option value=\"html\">HTML</option></select>",
    "tags": [
      "formulario",
      "selectedcontent"
    ],
    "lesson": "formularios",
    "note": "Padronizado no HTML Living Standard; consulte a compatibilidade antes de usar selects personalizáveis."
  },
  {
    "id": "details",
    "name": "details",
    "language": "html",
    "category": "interatividade",
    "kind": "element",
    "description": "Painel de conteúdo recolhível; summary define seu rótulo.",
    "syntax": "<details>…</details>",
    "example": "<details><summary>Mais informações</summary><p>Conteúdo adicional.</p></details>",
    "tags": [
      "interatividade",
      "details"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "summary",
    "name": "summary",
    "language": "html",
    "category": "interatividade",
    "kind": "element",
    "description": "Rótulo clicável de details; deve ser seu primeiro filho summary.",
    "syntax": "<summary>…</summary>",
    "example": "<details><summary>O que é HTML?</summary><p>Linguagem de marcação.</p></details>",
    "tags": [
      "interatividade",
      "summary"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "dialog",
    "name": "dialog",
    "language": "html",
    "category": "interatividade",
    "kind": "element",
    "description": "Janela de diálogo; showModal() abre de forma modal, enquanto open apenas exibe.",
    "syntax": "<dialog>…</dialog>",
    "example": "<button type=\"button\" onclick=\"document.getElementById('aviso').showModal()\">Abrir</button><dialog id=\"aviso\"><p>Olá!</p><form method=\"dialog\"><button>Fechar</button></form></dialog>",
    "tags": [
      "interatividade",
      "dialog"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "template",
    "name": "template",
    "language": "html",
    "category": "interatividade",
    "kind": "element",
    "description": "Guarda conteúdo inativo para clonar via JavaScript; não aparece diretamente na página.",
    "syntax": "<template>…</template>",
    "example": "<template id=\"item\"><li>Nova tarefa</li></template>",
    "tags": [
      "interatividade",
      "template"
    ],
    "lesson": "tags-semanticas"
  },
  {
    "id": "slot",
    "name": "slot",
    "language": "html",
    "category": "interatividade",
    "kind": "element",
    "description": "Ponto de inserção de conteúdo em um componente com Shadow DOM.",
    "syntax": "<slot>…</slot>",
    "example": "<template id=\"cartao\"><article><slot name=\"titulo\">Sem título</slot><slot></slot></article></template>",
    "tags": [
      "interatividade",
      "slot"
    ],
    "lesson": "tags-semanticas"
  }
];
