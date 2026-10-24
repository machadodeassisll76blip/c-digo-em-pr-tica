import type { DictionaryEntry } from "./types";
export const htmlObsolete: DictionaryEntry[] = [
  {
    "id": "obsolete-font",
    "name": "font",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Estilizava fonte, tamanho e cor.",
    "syntax": "<font>…</font> (legado; não use)",
    "example": "<span style=\"font-family: sans-serif; color: teal;\">Texto</span>",
    "tags": [
      "font",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "CSS com font-family, font-size e color.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-center",
    "name": "center",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Centralizava conteúdo.",
    "syntax": "<center>…</center> (legado; não use)",
    "example": "<div style=\"text-align: center;\">Texto centralizado</div>",
    "tags": [
      "center",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "CSS text-align: center para texto; Flexbox ou Grid para layout.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-marquee",
    "name": "marquee",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Criava texto em movimento; não é HTML moderno conforme.",
    "syntax": "<marquee>…</marquee> (legado; não use)",
    "example": "<p>Últimas notícias</p>",
    "tags": [
      "marquee",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "CSS animation com respeito a prefers-reduced-motion; prefira texto estático.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-acronym",
    "name": "acronym",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Marcava siglas.",
    "syntax": "<acronym>…</acronym> (legado; não use)",
    "example": "<abbr title=\"Organização das Nações Unidas\">ONU</abbr>",
    "tags": [
      "acronym",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "abbr.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-applet",
    "name": "applet",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Incorporava applets Java.",
    "syntax": "<applet>…</applet> (legado; não use)",
    "example": "<canvas width=\"300\" height=\"150\">Conteúdo alternativo</canvas>",
    "tags": [
      "applet",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "Tecnologias web modernas, como JavaScript e canvas.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-basefont",
    "name": "basefont",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Definia fonte padrão do documento.",
    "syntax": "<basefont>…</basefont> (legado; não use)",
    "example": "<style>body { font-family: sans-serif; }</style>",
    "tags": [
      "basefont",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "CSS no body.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-big",
    "name": "big",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Aumentava a fonte sem significado semântico.",
    "syntax": "<big>…</big> (legado; não use)",
    "example": "<span style=\"font-size: 1.2em;\">Texto</span>",
    "tags": [
      "big",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "CSS font-size.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-blink",
    "name": "blink",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Fazia texto piscar; elemento legado não padronizado.",
    "syntax": "<blink>…</blink> (legado; não use)",
    "example": "<strong>Atenção</strong>",
    "tags": [
      "blink",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "Texto estático; evite flashes e animações prejudiciais.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-dir",
    "name": "dir",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Lista de diretórios.",
    "syntax": "<dir>…</dir> (legado; não use)",
    "example": "<ul><li>Documentos</li></ul>",
    "tags": [
      "dir",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "ul.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-frame",
    "name": "frame",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Definia uma área em um frameset.",
    "syntax": "<frame>…</frame> (legado; não use)",
    "example": "<iframe src=\"exemplo.html\" title=\"Exemplo\"></iframe>",
    "tags": [
      "frame",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "Layout CSS e, quando necessário, iframe.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-frameset",
    "name": "frameset",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Dividia a janela em frames.",
    "syntax": "<frameset>…</frameset> (legado; não use)",
    "example": "<main style=\"display: grid; gap: 1rem;\"><section>Conteúdo</section><aside>Notas</aside></main>",
    "tags": [
      "frameset",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "CSS Grid ou Flexbox.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-noframes",
    "name": "noframes",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Alternativa para navegadores sem frames.",
    "syntax": "<noframes>…</noframes> (legado; não use)",
    "example": "<body><main><p>Conteúdo da página.</p></main></body>",
    "tags": [
      "noframes",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "Conteúdo normal e acessível em body.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-keygen",
    "name": "keygen",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Gerava pares de chaves em formulários.",
    "syntax": "<keygen>…</keygen> (legado; não use)",
    "example": "<button type=\"button\">Iniciar autenticação</button>",
    "tags": [
      "keygen",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "Web Crypto API para criptografia e fluxos de autenticação modernos, conforme a necessidade.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-listing",
    "name": "listing",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Exibia texto pré-formatado.",
    "syntax": "<listing>…</listing> (legado; não use)",
    "example": "<pre><code>const x = 1;</code></pre>",
    "tags": [
      "listing",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "pre e code.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-xmp",
    "name": "xmp",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Exibia texto sem interpretar tags.",
    "syntax": "<xmp>…</xmp> (legado; não use)",
    "example": "<pre><code>&lt;p&gt;Olá&lt;/p&gt;</code></pre>",
    "tags": [
      "xmp",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "pre e code com caracteres escapados.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-plaintext",
    "name": "plaintext",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Tratava todo o resto do documento como texto sem marcação.",
    "syntax": "<plaintext>…</plaintext> (legado; não use)",
    "example": "<pre>&lt;p&gt;Texto&lt;/p&gt;</pre>",
    "tags": [
      "plaintext",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "pre com caracteres escapados.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-noembed",
    "name": "noembed",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Alternativa histórica para embed.",
    "syntax": "<noembed>…</noembed> (legado; não use)",
    "example": "<object data=\"guia.pdf\" type=\"application/pdf\"><a href=\"guia.pdf\">Baixar</a></object>",
    "tags": [
      "noembed",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "object com conteúdo alternativo ou link para o recurso.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-param",
    "name": "param",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Declarava parâmetros de object; atualmente obsoleto.",
    "syntax": "<param>…</param> (legado; não use)",
    "example": "<object data=\"guia.pdf\" type=\"application/pdf\"><p>PDF</p></object>",
    "tags": [
      "param",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "Atributos/recursos específicos modernos, sem param.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-rb",
    "name": "rb",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Separava o texto base de ruby.",
    "syntax": "<rb>…</rb> (legado; não use)",
    "example": "<ruby>漢<rt>kan</rt></ruby>",
    "tags": [
      "rb",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "Texto base diretamente em ruby.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-rtc",
    "name": "rtc",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Agrupava anotações de ruby.",
    "syntax": "<rtc>…</rtc> (legado; não use)",
    "example": "<ruby>漢<rt>kan</rt></ruby>",
    "tags": [
      "rtc",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "ruby e rt conforme a estrutura atual.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-strike",
    "name": "strike",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Texto riscado.",
    "syntax": "<strike>…</strike> (legado; não use)",
    "example": "<s>Preço antigo</s>",
    "tags": [
      "strike",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "s para informação desatualizada ou del para remoção editorial.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-tt",
    "name": "tt",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Exibia texto monoespaçado.",
    "syntax": "<tt>…</tt> (legado; não use)",
    "example": "<code>const x = 1;</code>",
    "tags": [
      "tt",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "code, kbd, samp ou CSS conforme o significado.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-menuitem",
    "name": "menuitem",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Comando de menu histórico, removido do padrão.",
    "syntax": "<menuitem>…</menuitem> (legado; não use)",
    "example": "<menu><li><button type=\"button\">Salvar</button></li></menu>",
    "tags": [
      "menuitem",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "button em uma lista menu; para menus complexos, padrões acessíveis adequados.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-content",
    "name": "content",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Ponto de distribuição da versão antiga de Shadow DOM.",
    "syntax": "<content>…</content> (legado; não use)",
    "example": "<slot></slot>",
    "tags": [
      "content",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "slot.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-shadow",
    "name": "shadow",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Ponto de inserção da versão antiga de Shadow DOM.",
    "syntax": "<shadow>…</shadow> (legado; não use)",
    "example": "<slot name=\"conteudo\"></slot>",
    "tags": [
      "shadow",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "Shadow DOM atual com attachShadow e slot.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  },
  {
    "id": "obsolete-image",
    "name": "image",
    "language": "html",
    "category": "obsoletos",
    "kind": "element",
    "description": "Grafia legada que o parser pode tratar como img; não é elemento HTML válido.",
    "syntax": "<image>…</image> (legado; não use)",
    "example": "<img src=\"foto.jpg\" alt=\"Paisagem\">",
    "tags": [
      "image",
      "obsoleto"
    ],
    "obsolete": true,
    "alternative": "img.",
    "lesson": "atributos-acessibilidade",
    "note": "O exemplo mostra a alternativa moderna, não o código obsoleto."
  }
];
