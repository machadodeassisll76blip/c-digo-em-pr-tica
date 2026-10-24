import type { DictionaryEntry } from "./types";
export const htmlAttributes: DictionaryEntry[] = [
  {
    "id": "global-id",
    "name": "id",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Identificador único no documento; usado por links, CSS, JavaScript e associações de rótulos.",
    "syntax": "<elemento id=\"valor\">…</elemento>",
    "example": "<h2 id=\"introducao\">Introdução</h2>",
    "tags": [
      "id"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-class",
    "name": "class",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Lista de classes separadas por espaços para selecionar e agrupar elementos.",
    "syntax": "<elemento class=\"valor\">…</elemento>",
    "example": "<p class=\"aviso destaque\">Importante.</p>",
    "tags": [
      "class"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-style",
    "name": "style",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Declarações CSS aplicadas diretamente ao elemento; prefira folhas de estilo para manutenção.",
    "syntax": "<elemento style=\"valor\">…</elemento>",
    "example": "<p style=\"color: teal;\">Texto destacado.</p>",
    "tags": [
      "style"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-title",
    "name": "title",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Informação complementar, geralmente exibida como dica; não substitui label ou alt.",
    "syntax": "<elemento title=\"valor\">…</elemento>",
    "example": "<abbr title=\"HyperText Markup Language\">HTML</abbr>",
    "tags": [
      "title"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-lang",
    "name": "lang",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Idioma do conteúdo em uma etiqueta de idioma válida, como pt-BR ou en.",
    "syntax": "<elemento lang=\"valor\">…</elemento>",
    "example": "<p lang=\"en\">Hello, world!</p>",
    "tags": [
      "lang"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-dir",
    "name": "dir",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Direção do texto: ltr, rtl ou auto.",
    "syntax": "<elemento dir=\"valor\">…</elemento>",
    "example": "<p dir=\"auto\">Olá!</p>",
    "tags": [
      "dir"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-hidden",
    "name": "hidden",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Oculta conteúdo; hidden=\"until-found\" permite revelá-lo por busca na página em navegadores compatíveis.",
    "syntax": "<elemento hidden=\"valor\">…</elemento>",
    "example": "<p hidden>Mensagem oculta.</p>",
    "tags": [
      "hidden"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-data-star",
    "name": "data-*",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Família de atributos personalizados para dados da aplicação; acesso via dataset no JavaScript.",
    "syntax": "<elemento data-*=\"valor\">…</elemento>",
    "example": "<article data-curso=\"html\">Curso de HTML</article>",
    "tags": [
      "data-*"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-tabindex",
    "name": "tabindex",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Controla foco por teclado: 0 entra na ordem natural; -1 permite foco por script; evite positivos.",
    "syntax": "<elemento tabindex=\"valor\">…</elemento>",
    "example": "<div tabindex=\"0\" role=\"region\" aria-label=\"Resultados\">Resultados</div>",
    "tags": [
      "tabindex"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-aria-star",
    "name": "aria-*",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Família de atributos WAI-ARIA para acessibilidade; cada atributo precisa ser válido para o papel do elemento.",
    "syntax": "<elemento aria-*=\"valor\">…</elemento>",
    "example": "<button type=\"button\" aria-label=\"Fechar\">×</button>",
    "tags": [
      "aria-*"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-role",
    "name": "role",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Define um papel de acessibilidade; prefira a semântica HTML nativa e só use papéis permitidos.",
    "syntax": "<elemento role=\"valor\">…</elemento>",
    "example": "<div role=\"status\">Arquivo salvo.</div>",
    "tags": [
      "role"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-contenteditable",
    "name": "contenteditable",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Permite editar conteúdo: true, false ou plaintext-only; é enumerado, não booleano.",
    "syntax": "<elemento contenteditable=\"valor\">…</elemento>",
    "example": "<p contenteditable=\"plaintext-only\">Edite este texto.</p>",
    "tags": [
      "contenteditable"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-draggable",
    "name": "draggable",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Indica se pode ser arrastado: true ou false; não é atributo booleano.",
    "syntax": "<elemento draggable=\"valor\">…</elemento>",
    "example": "<span draggable=\"true\">Arraste este item</span>",
    "tags": [
      "draggable"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-spellcheck",
    "name": "spellcheck",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Habilita ou desabilita revisão ortográfica; valores true e false.",
    "syntax": "<elemento spellcheck=\"valor\">…</elemento>",
    "example": "<textarea spellcheck=\"true\" aria-label=\"Anotações\"></textarea>",
    "tags": [
      "spellcheck"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-translate",
    "name": "translate",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Indica se o conteúdo deve ser traduzido: yes ou no.",
    "syntax": "<elemento translate=\"valor\">…</elemento>",
    "example": "<code translate=\"no\">querySelector</code>",
    "tags": [
      "translate"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-accesskey",
    "name": "accesskey",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Sugere um atalho para ativar ou focar o elemento; combinação varia e pode conflitar com atalhos existentes.",
    "syntax": "<elemento accesskey=\"valor\">…</elemento>",
    "example": "<button type=\"button\" accesskey=\"s\">Salvar</button>",
    "tags": [
      "accesskey"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-autocapitalize",
    "name": "autocapitalize",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Sugere capitalização em teclados virtuais, como sentences, words, characters ou none.",
    "syntax": "<elemento autocapitalize=\"valor\">…</elemento>",
    "example": "<input aria-label=\"Usuário\" autocapitalize=\"none\">",
    "tags": [
      "autocapitalize"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-autocorrect",
    "name": "autocorrect",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Sugere correção automática de texto: on ou off; suporte depende do navegador.",
    "syntax": "<elemento autocorrect=\"valor\">…</elemento>",
    "example": "<input aria-label=\"Código\" autocorrect=\"off\">",
    "tags": [
      "autocorrect"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-autofocus",
    "name": "autofocus",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Solicita foco automático; use no máximo um por contexto de foco e com cuidado para não surpreender.",
    "syntax": "<elemento autofocus=\"valor\">…</elemento>",
    "example": "<input aria-label=\"Busca\" autofocus>",
    "tags": [
      "autofocus"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-inputmode",
    "name": "inputmode",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Sugere teclado virtual adequado, como numeric, decimal, email ou tel; não valida o valor.",
    "syntax": "<elemento inputmode=\"valor\">…</elemento>",
    "example": "<input aria-label=\"Código postal\" inputmode=\"numeric\">",
    "tags": [
      "inputmode"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-enterkeyhint",
    "name": "enterkeyhint",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Sugere o rótulo da tecla Enter em teclados virtuais, como search, next ou done.",
    "syntax": "<elemento enterkeyhint=\"valor\">…</elemento>",
    "example": "<input type=\"search\" aria-label=\"Busca\" enterkeyhint=\"search\">",
    "tags": [
      "enterkeyhint"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-inert",
    "name": "inert",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Impede foco e interação nos descendentes e os remove da árvore de acessibilidade.",
    "syntax": "<elemento inert=\"valor\">…</elemento>",
    "example": "<section inert><button type=\"button\">Indisponível</button></section>",
    "tags": [
      "inert"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-popover",
    "name": "popover",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Declara um painel exibido com a API de popovers; auto fecha ao clicar fora, manual exige controle explícito.",
    "syntax": "<elemento popover=\"valor\">…</elemento>",
    "example": "<button popovertarget=\"ajuda\">Ajuda</button><div id=\"ajuda\" popover>Uma dica.</div>",
    "tags": [
      "popover"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-slot",
    "name": "slot",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Atribui conteúdo a um slot nomeado de um componente com Shadow DOM.",
    "syntax": "<elemento slot=\"valor\">…</elemento>",
    "example": "<meu-cartao><h2 slot=\"titulo\">Meu título</h2></meu-cartao>",
    "tags": [
      "slot"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-part",
    "name": "part",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Lista nomes de partes dentro do Shadow DOM para estilização externa com ::part().",
    "syntax": "<elemento part=\"valor\">…</elemento>",
    "example": "<template id=\"botao\"><button part=\"controle\">Ação</button></template>",
    "tags": [
      "part"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-exportparts",
    "name": "exportparts",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Reexporta partes de um Shadow DOM aninhado para estilização externa.",
    "syntax": "<elemento exportparts=\"valor\">…</elemento>",
    "example": "<template id=\"externo\"><meu-botao exportparts=\"controle\"></meu-botao></template>",
    "tags": [
      "exportparts"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-is",
    "name": "is",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Nome de um elemento personalizado que estende um elemento nativo; suporte limitado e requer customElements.define.",
    "syntax": "<elemento is=\"valor\">…</elemento>",
    "example": "<button is=\"botao-especial\">Ação</button>",
    "tags": [
      "is"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-itemid",
    "name": "itemid",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Identificador global de um item de microdados; requer itemscope e itemtype.",
    "syntax": "<elemento itemid=\"valor\">…</elemento>",
    "example": "<div itemscope itemtype=\"https://schema.org/Book\" itemid=\"urn:isbn:9780000000000\"><span itemprop=\"name\">Livro</span></div>",
    "tags": [
      "itemid"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-itemprop",
    "name": "itemprop",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Nome de uma propriedade de microdados no item ao redor.",
    "syntax": "<elemento itemprop=\"valor\">…</elemento>",
    "example": "<div itemscope itemtype=\"https://schema.org/Person\"><span itemprop=\"name\">Ana</span></div>",
    "tags": [
      "itemprop"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-itemref",
    "name": "itemref",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Lista IDs de elementos que fornecem propriedades adicionais a um item de microdados.",
    "syntax": "<elemento itemref=\"valor\">…</elemento>",
    "example": "<div itemscope itemtype=\"https://schema.org/Person\" itemref=\"nome\"></div><span id=\"nome\" itemprop=\"name\">Ana</span>",
    "tags": [
      "itemref"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-itemscope",
    "name": "itemscope",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Atributo booleano que inicia um item de microdados.",
    "syntax": "<elemento itemscope=\"valor\">…</elemento>",
    "example": "<div itemscope itemtype=\"https://schema.org/Person\"><span itemprop=\"name\">Ana</span></div>",
    "tags": [
      "itemscope"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-itemtype",
    "name": "itemtype",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "URLs dos vocabulários de microdados; usado junto de itemscope.",
    "syntax": "<elemento itemtype=\"valor\">…</elemento>",
    "example": "<div itemscope itemtype=\"https://schema.org/Person\"><span itemprop=\"name\">Ana</span></div>",
    "tags": [
      "itemtype"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-nonce",
    "name": "nonce",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Valor imprevisível que deve corresponder à política CSP para autorizar um script ou estilo; não use valores fixos em produção.",
    "syntax": "<elemento nonce=\"valor\">…</elemento>",
    "example": "<script nonce=\"VALOR_GERADO_PELO_SERVIDOR\">console.log('Olá');</script>",
    "tags": [
      "nonce"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "global-onclick",
    "name": "onclick",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Executa código ao clicar; faz parte dos atributos de eventos on*. Prefira addEventListener para separar comportamento.",
    "syntax": "<elemento onclick=\"valor\">…</elemento>",
    "example": "<button type=\"button\" onclick=\"console.log('Clicou')\">Testar</button>",
    "tags": [
      "onclick"
    ],
    "lesson": "atributos-acessibilidade"
  },
  {
    "id": "attr-href",
    "name": "href",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "URL de destino ou de recurso; em a e area cria um hiperlink.",
    "syntax": "href=\"valor\"",
    "example": "<a href=\"guia.html\">Guia</a>",
    "tags": [
      "href",
      "a, area, base, link"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: a, area, base, link."
  },
  {
    "id": "attr-src",
    "name": "src",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "URL do recurso a carregar; em picture, source usa srcset, não src.",
    "syntax": "src=\"valor\"",
    "example": "<img src=\"foto.jpg\" alt=\"Paisagem\">",
    "tags": [
      "src",
      "img, audio, video, source, track, iframe, embed, script, input type=image"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: img, audio, video, source, track, iframe, embed, script, input type=image."
  },
  {
    "id": "attr-alt",
    "name": "alt",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Texto alternativo; alt=\"\" é adequado a imagens puramente decorativas.",
    "syntax": "alt=\"valor\"",
    "example": "<img src=\"diagrama.png\" alt=\"HTML estrutura, CSS estiliza e JavaScript interage\">",
    "tags": [
      "alt",
      "img, area, input type=image"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: img, area, input type=image."
  },
  {
    "id": "attr-target",
    "name": "target",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Contexto de destino: _self, _blank, _parent, _top ou nome de janela.",
    "syntax": "target=\"valor\"",
    "example": "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Abrir</a>",
    "tags": [
      "target",
      "a, area, base, form"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: a, area, base, form."
  },
  {
    "id": "attr-rel",
    "name": "rel",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Relação com o destino: stylesheet em link; noopener, noreferrer ou nofollow conforme o caso.",
    "syntax": "rel=\"valor\"",
    "example": "<link rel=\"stylesheet\" href=\"site.css\">",
    "tags": [
      "rel",
      "a, area, link, form"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: a, area, link, form."
  },
  {
    "id": "attr-download",
    "name": "download",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sugere baixar o recurso e opcionalmente seu nome; restrições de origem e do navegador se aplicam.",
    "syntax": "download=\"valor\"",
    "example": "<a href=\"guia.pdf\" download=\"guia-html.pdf\">Baixar</a>",
    "tags": [
      "download",
      "a, area"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: a, area."
  },
  {
    "id": "attr-hreflang",
    "name": "hreflang",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Idioma do recurso vinculado, não do texto do link.",
    "syntax": "hreflang=\"valor\"",
    "example": "<a href=\"guide.html\" hreflang=\"en\">English guide</a>",
    "tags": [
      "hreflang",
      "a, area, link"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: a, area, link."
  },
  {
    "id": "attr-ping",
    "name": "ping",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "URLs que recebem notificações de auditoria quando um link é seguido; considere privacidade e suporte.",
    "syntax": "ping=\"valor\"",
    "example": "<a href=\"guia.html\" ping=\"/auditoria\">Guia</a>",
    "tags": [
      "ping",
      "a, area"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: a, area."
  },
  {
    "id": "attr-referrerpolicy",
    "name": "referrerpolicy",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Controla informações de referência enviadas ao buscar um recurso ou seguir o link.",
    "syntax": "referrerpolicy=\"valor\"",
    "example": "<img src=\"foto.jpg\" alt=\"Foto\" referrerpolicy=\"no-referrer\">",
    "tags": [
      "referrerpolicy",
      "a, area, img, iframe, link, script"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: a, area, img, iframe, link, script."
  },
  {
    "id": "attr-loading",
    "name": "loading",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Carregamento eager ou lazy; evite lazy em imagens essenciais da primeira tela.",
    "syntax": "loading=\"valor\"",
    "example": "<iframe src=\"exemplo.html\" title=\"Exemplo\" loading=\"lazy\"></iframe>",
    "tags": [
      "loading",
      "img, iframe"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: img, iframe."
  },
  {
    "id": "attr-decoding",
    "name": "decoding",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sugere estratégia de decodificação: sync, async ou auto.",
    "syntax": "decoding=\"valor\"",
    "example": "<img src=\"foto.jpg\" alt=\"Foto\" decoding=\"async\">",
    "tags": [
      "decoding",
      "img"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: img."
  },
  {
    "id": "attr-fetchpriority",
    "name": "fetchpriority",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sugere prioridade high, low ou auto; não garante ordem de carregamento.",
    "syntax": "fetchpriority=\"valor\"",
    "example": "<img src=\"capa.jpg\" alt=\"Capa do curso\" fetchpriority=\"high\">",
    "tags": [
      "fetchpriority",
      "img, link, script"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: img, link, script."
  },
  {
    "id": "attr-srcset",
    "name": "srcset",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Lista de imagens com descritores de largura ou densidade para escolha pelo navegador.",
    "syntax": "srcset=\"valor\"",
    "example": "<img src=\"foto.jpg\" srcset=\"foto.jpg 1x, foto-2x.jpg 2x\" alt=\"Paisagem\">",
    "tags": [
      "srcset",
      "img, source em picture"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: img, source em picture."
  },
  {
    "id": "attr-sizes",
    "name": "sizes",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Em imagens, descreve o tamanho previsto para fontes com descritores w; em link de ícone, descreve suas dimensões.",
    "syntax": "sizes=\"valor\"",
    "example": "<img src=\"foto-400.jpg\" srcset=\"foto-400.jpg 400w, foto-800.jpg 800w\" sizes=\"(max-width: 600px) 100vw, 400px\" alt=\"Paisagem\">",
    "tags": [
      "sizes",
      "img, source em picture; link com outra sintaxe"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: img, source em picture; link com outra sintaxe."
  },
  {
    "id": "attr-width",
    "name": "width",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Largura em pixels CSS para elementos HTML visuais; canvas usa dimensões do bitmap.",
    "syntax": "width=\"valor\"",
    "example": "<img src=\"foto.jpg\" alt=\"Foto\" width=\"400\" height=\"300\">",
    "tags": [
      "width",
      "img, iframe, video, embed, object, canvas, input type=image, source em picture"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: img, iframe, video, embed, object, canvas, input type=image, source em picture."
  },
  {
    "id": "attr-height",
    "name": "height",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Altura em pixels; junto de width, ajuda a reservar espaço.",
    "syntax": "height=\"valor\"",
    "example": "<canvas width=\"300\" height=\"150\">Gráfico</canvas>",
    "tags": [
      "height",
      "img, iframe, video, embed, object, canvas, input type=image, source em picture"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: img, iframe, video, embed, object, canvas, input type=image, source em picture."
  },
  {
    "id": "attr-crossorigin",
    "name": "crossorigin",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Configura busca CORS: anonymous ou use-credentials; exige resposta adequada do servidor.",
    "syntax": "crossorigin=\"valor\"",
    "example": "<script src=\"app.js\" crossorigin=\"anonymous\"></script>",
    "tags": [
      "crossorigin",
      "audio, video, img, link, script"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: audio, video, img, link, script."
  },
  {
    "id": "attr-usemap",
    "name": "usemap",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Nome do map prefixado por # para mapa de imagem.",
    "syntax": "usemap=\"valor\"",
    "example": "<img src=\"mapa.png\" usemap=\"#campus\" alt=\"Mapa\"><map name=\"campus\"><area shape=\"default\" href=\"campus.html\" alt=\"Campus\"></map>",
    "tags": [
      "usemap",
      "img, object"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: img, object."
  },
  {
    "id": "attr-ismap",
    "name": "ismap",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Mapa de imagem processado no servidor; envia coordenadas do clique. Para mapas locais, prefira usemap.",
    "syntax": "ismap=\"valor\"",
    "example": "<a href=\"/mapa\"><img src=\"mapa.png\" alt=\"Mapa\" ismap></a>",
    "tags": [
      "ismap",
      "img dentro de a"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: img dentro de a."
  },
  {
    "id": "attr-shape",
    "name": "shape",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Forma da área: rect, circle, poly ou default.",
    "syntax": "shape=\"valor\"",
    "example": "<map name=\"m\"><area shape=\"circle\" coords=\"50,50,20\" href=\"local.html\" alt=\"Local\"></map>",
    "tags": [
      "shape",
      "area"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: area."
  },
  {
    "id": "attr-coords",
    "name": "coords",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Coordenadas da área de acordo com shape.",
    "syntax": "coords=\"valor\"",
    "example": "<map name=\"m\"><area shape=\"rect\" coords=\"0,0,100,100\" href=\"local.html\" alt=\"Local\"></map>",
    "tags": [
      "coords",
      "area"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: area."
  },
  {
    "id": "attr-controls",
    "name": "controls",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que mostra controles de reprodução nativos.",
    "syntax": "controls=\"valor\"",
    "example": "<audio src=\"aula.mp3\" controls></audio>",
    "tags": [
      "controls",
      "audio, video"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: audio, video."
  },
  {
    "id": "attr-autoplay",
    "name": "autoplay",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Solicita reprodução automática; navegadores geralmente a bloqueiam sem silêncio ou interação.",
    "syntax": "autoplay=\"valor\"",
    "example": "<video src=\"clipe.mp4\" autoplay muted playsinline></video>",
    "tags": [
      "autoplay",
      "audio, video"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: audio, video."
  },
  {
    "id": "attr-muted",
    "name": "muted",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que define o áudio inicialmente silenciado.",
    "syntax": "muted=\"valor\"",
    "example": "<video src=\"clipe.mp4\" controls muted></video>",
    "tags": [
      "muted",
      "audio, video"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: audio, video."
  },
  {
    "id": "attr-loop",
    "name": "loop",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que repete a mídia ao terminar.",
    "syntax": "loop=\"valor\"",
    "example": "<audio src=\"som.mp3\" controls loop></audio>",
    "tags": [
      "loop",
      "audio, video"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: audio, video."
  },
  {
    "id": "attr-preload",
    "name": "preload",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sugere carregamento: none, metadata ou auto; o navegador pode ignorar.",
    "syntax": "preload=\"valor\"",
    "example": "<video src=\"aula.mp4\" controls preload=\"metadata\"></video>",
    "tags": [
      "preload",
      "audio, video"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: audio, video."
  },
  {
    "id": "attr-poster",
    "name": "poster",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Imagem exibida antes da reprodução do vídeo.",
    "syntax": "poster=\"valor\"",
    "example": "<video src=\"aula.mp4\" controls poster=\"capa.jpg\"></video>",
    "tags": [
      "poster",
      "video"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: video."
  },
  {
    "id": "attr-playsinline",
    "name": "playsinline",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Solicita reprodução na própria página em vez de tela cheia.",
    "syntax": "playsinline=\"valor\"",
    "example": "<video src=\"aula.mp4\" controls playsinline></video>",
    "tags": [
      "playsinline",
      "video"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: video."
  },
  {
    "id": "attr-kind",
    "name": "kind",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Tipo da trilha: subtitles, captions, descriptions, chapters ou metadata.",
    "syntax": "kind=\"valor\"",
    "example": "<video src=\"aula.mp4\" controls><track kind=\"captions\" src=\"aula.vtt\" srclang=\"pt-BR\" label=\"Português\"></video>",
    "tags": [
      "kind",
      "track"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: track."
  },
  {
    "id": "attr-srclang",
    "name": "srclang",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Idioma da trilha; obrigatório para kind=\"subtitles\".",
    "syntax": "srclang=\"valor\"",
    "example": "<video src=\"aula.mp4\" controls><track kind=\"subtitles\" srclang=\"en\" src=\"en.vtt\" label=\"English\"></video>",
    "tags": [
      "srclang",
      "track"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: track."
  },
  {
    "id": "attr-default",
    "name": "default",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que indica trilha padrão; evite múltiplos defaults para o mesmo tipo.",
    "syntax": "default=\"valor\"",
    "example": "<video src=\"aula.mp4\" controls><track default kind=\"captions\" src=\"pt.vtt\" srclang=\"pt-BR\" label=\"Português\"></video>",
    "tags": [
      "default",
      "track"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: track."
  },
  {
    "id": "attr-label",
    "name": "label",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Rótulo legível para a trilha, opção ou grupo de opções.",
    "syntax": "label=\"valor\"",
    "example": "<select aria-label=\"Curso\"><optgroup label=\"Web\"><option>HTML</option></optgroup></select>",
    "tags": [
      "label",
      "track, option, optgroup"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: track, option, optgroup."
  },
  {
    "id": "attr-sandbox",
    "name": "sandbox",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Restringe capacidades do documento incorporado; vazio impõe todas as restrições. Tokens permitem exceções específicas.",
    "syntax": "sandbox=\"valor\"",
    "example": "<iframe src=\"exemplo.html\" title=\"Exemplo isolado\" sandbox=\"allow-scripts\"></iframe>",
    "tags": [
      "sandbox",
      "iframe"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: iframe."
  },
  {
    "id": "attr-allow",
    "name": "allow",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Política de permissões para capacidades como câmera, microfone ou tela cheia.",
    "syntax": "allow=\"valor\"",
    "example": "<iframe src=\"video.html\" title=\"Vídeo\" allow=\"fullscreen\"></iframe>",
    "tags": [
      "allow",
      "iframe"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: iframe."
  },
  {
    "id": "attr-allowfullscreen",
    "name": "allowfullscreen",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que solicita permitir tela cheia; sujeito à política de permissões.",
    "syntax": "allowfullscreen=\"valor\"",
    "example": "<iframe src=\"video.html\" title=\"Vídeo\" allowfullscreen></iframe>",
    "tags": [
      "allowfullscreen",
      "iframe"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: iframe."
  },
  {
    "id": "attr-srcdoc",
    "name": "srcdoc",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "HTML embutido para o documento incorporado; nunca injete conteúdo não confiável sem proteção.",
    "syntax": "srcdoc=\"valor\"",
    "example": "<iframe title=\"Exemplo\" sandbox srcdoc=\"&lt;p&gt;Olá!&lt;/p&gt;\"></iframe>",
    "tags": [
      "srcdoc",
      "iframe"
    ],
    "lesson": "links-imagens",
    "note": "Aplica-se a: iframe."
  },
  {
    "id": "attr-data",
    "name": "data",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "URL do recurso incorporado; diferente de atributos personalizados data-*.",
    "syntax": "data=\"valor\"",
    "example": "<object data=\"guia.pdf\" type=\"application/pdf\"><p>PDF indisponível.</p></object>",
    "tags": [
      "data",
      "object"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: object."
  },
  {
    "id": "attr-type",
    "name": "type",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Significado depende do elemento: comportamento do input/button, MIME de recurso, módulo de script ou numeração de ol.",
    "syntax": "type=\"valor\"",
    "example": "<input type=\"email\" name=\"email\" aria-label=\"E-mail\">",
    "tags": [
      "type",
      "input, button, script, link, source, embed, object, a, ol"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input, button, script, link, source, embed, object, a, ol."
  },
  {
    "id": "attr-name",
    "name": "name",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Nome do controle enviado, de um contexto, de metadado ou de slot; detalhes com mesmo name formam grupo exclusivo.",
    "syntax": "name=\"valor\"",
    "example": "<input name=\"email\" type=\"email\" aria-label=\"E-mail\">",
    "tags": [
      "name",
      "input, select, textarea, button, form, fieldset, output, iframe, map, meta, slot, details, object"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input, select, textarea, button, form, fieldset, output, iframe, map, meta, slot, details, object."
  },
  {
    "id": "attr-value",
    "name": "value",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Valor do controle, opção, medição ou item de lista; em textarea o valor inicial é o conteúdo.",
    "syntax": "value=\"valor\"",
    "example": "<option value=\"html\">HTML</option>",
    "tags": [
      "value",
      "input, button, option, li, meter, progress, data"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input, button, option, li, meter, progress, data."
  },
  {
    "id": "attr-placeholder",
    "name": "placeholder",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Dica breve de preenchimento; não substitui um rótulo visível.",
    "syntax": "placeholder=\"valor\"",
    "example": "<label for=\"email2\">E-mail</label><input id=\"email2\" type=\"email\" placeholder=\"voce@example.com\">",
    "tags": [
      "placeholder",
      "input de texto/número e textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input de texto/número e textarea."
  },
  {
    "id": "attr-required",
    "name": "required",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que exige valor ou seleção para validação nativa; não se aplica a todo tipo de input.",
    "syntax": "required=\"valor\"",
    "example": "<input type=\"email\" name=\"email\" aria-label=\"E-mail\" required>",
    "tags": [
      "required",
      "input compatível, select, textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input compatível, select, textarea."
  },
  {
    "id": "attr-disabled",
    "name": "disabled",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que desativa o controle; controles desativados não são enviados. Em link de CSS, afeta a folha.",
    "syntax": "disabled=\"valor\"",
    "example": "<button type=\"submit\" disabled>Enviar</button>",
    "tags": [
      "disabled",
      "button, input, select, textarea, fieldset, optgroup, option; link de folha CSS"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button, input, select, textarea, fieldset, optgroup, option; link de folha CSS."
  },
  {
    "id": "attr-readonly",
    "name": "readonly",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Permite leitura sem edição; o controle ainda pode ser focado e enviado.",
    "syntax": "readonly=\"valor\"",
    "example": "<input name=\"codigo\" value=\"ABC\" aria-label=\"Código\" readonly>",
    "tags": [
      "readonly",
      "input de texto/data/número compatível, textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input de texto/data/número compatível, textarea."
  },
  {
    "id": "attr-checked",
    "name": "checked",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que marca a seleção inicial; checked=\"false\" também marca, pois a presença é que importa.",
    "syntax": "checked=\"valor\"",
    "example": "<label><input type=\"checkbox\" name=\"novidades\" checked> Novidades</label>",
    "tags": [
      "checked",
      "input type=checkbox ou radio"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input type=checkbox ou radio."
  },
  {
    "id": "attr-selected",
    "name": "selected",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que indica a seleção inicial de uma opção.",
    "syntax": "selected=\"valor\"",
    "example": "<select aria-label=\"Curso\"><option value=\"html\" selected>HTML</option></select>",
    "tags": [
      "selected",
      "option"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: option."
  },
  {
    "id": "attr-multiple",
    "name": "multiple",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Permite múltiplas escolhas, e-mails ou arquivos conforme o controle.",
    "syntax": "multiple=\"valor\"",
    "example": "<input type=\"file\" aria-label=\"Arquivos\" multiple>",
    "tags": [
      "multiple",
      "select, input type=email ou file"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: select, input type=email ou file."
  },
  {
    "id": "attr-for",
    "name": "for",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Em label, ID do controle; em output, lista de IDs usados no cálculo.",
    "syntax": "for=\"valor\"",
    "example": "<label for=\"nome2\">Nome</label><input id=\"nome2\" name=\"nome\">",
    "tags": [
      "for",
      "label, output"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: label, output."
  },
  {
    "id": "attr-action",
    "name": "action",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "URL para envio do formulário; sem action, usa o documento atual.",
    "syntax": "action=\"valor\"",
    "example": "<form action=\"/busca\"><input name=\"q\" aria-label=\"Busca\"><button>Buscar</button></form>",
    "tags": [
      "action",
      "form"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: form."
  },
  {
    "id": "attr-method",
    "name": "method",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Método de envio: get ou post; dialog fecha um dialog sem enviar dados.",
    "syntax": "method=\"valor\"",
    "example": "<form method=\"get\" action=\"/busca\"><input name=\"q\" aria-label=\"Busca\"><button>Buscar</button></form>",
    "tags": [
      "method",
      "form"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: form."
  },
  {
    "id": "attr-enctype",
    "name": "enctype",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Codificação de formulário post; use multipart/form-data para enviar arquivos.",
    "syntax": "enctype=\"valor\"",
    "example": "<form method=\"post\" action=\"/upload\" enctype=\"multipart/form-data\"><input type=\"file\" name=\"arquivo\" aria-label=\"Arquivo\"><button>Enviar</button></form>",
    "tags": [
      "enctype",
      "form"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: form."
  },
  {
    "id": "attr-autocomplete",
    "name": "autocomplete",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sugere preenchimento automático: on, off ou tokens como name e email, conforme o elemento.",
    "syntax": "autocomplete=\"valor\"",
    "example": "<input name=\"email\" type=\"email\" autocomplete=\"email\" aria-label=\"E-mail\">",
    "tags": [
      "autocomplete",
      "form, input compatível, select, textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: form, input compatível, select, textarea."
  },
  {
    "id": "attr-novalidate",
    "name": "novalidate",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que desativa a validação nativa no envio; não elimina a necessidade de validar os dados.",
    "syntax": "novalidate=\"valor\"",
    "example": "<form novalidate><input type=\"email\" name=\"email\" aria-label=\"E-mail\"><button>Enviar</button></form>",
    "tags": [
      "novalidate",
      "form"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: form."
  },
  {
    "id": "attr-form",
    "name": "form",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "ID de um form associado, mesmo fora dele; não é um atributo global.",
    "syntax": "form=\"valor\"",
    "example": "<form id=\"cadastro\"></form><input form=\"cadastro\" name=\"nome\" aria-label=\"Nome\">",
    "tags": [
      "form",
      "button, fieldset, input, object, output, select, textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button, fieldset, input, object, output, select, textarea."
  },
  {
    "id": "attr-formaction",
    "name": "formaction",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sobrescreve o destino do formulário para esse botão.",
    "syntax": "formaction=\"valor\"",
    "example": "<form action=\"/salvar\"><button formaction=\"/rascunho\">Salvar rascunho</button></form>",
    "tags": [
      "formaction",
      "button de envio, input type=submit ou image"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button de envio, input type=submit ou image."
  },
  {
    "id": "attr-formmethod",
    "name": "formmethod",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sobrescreve o método de envio do form.",
    "syntax": "formmethod=\"valor\"",
    "example": "<form><button formmethod=\"post\" formaction=\"/salvar\">Salvar</button></form>",
    "tags": [
      "formmethod",
      "button de envio, input type=submit ou image"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button de envio, input type=submit ou image."
  },
  {
    "id": "attr-formenctype",
    "name": "formenctype",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sobrescreve a codificação de envio do formulário.",
    "syntax": "formenctype=\"valor\"",
    "example": "<form method=\"post\"><input type=\"file\" name=\"arquivo\" aria-label=\"Arquivo\"><button formenctype=\"multipart/form-data\">Enviar</button></form>",
    "tags": [
      "formenctype",
      "button de envio, input type=submit ou image"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button de envio, input type=submit ou image."
  },
  {
    "id": "attr-formnovalidate",
    "name": "formnovalidate",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que ignora validação nativa nesse envio.",
    "syntax": "formnovalidate=\"valor\"",
    "example": "<form><input type=\"email\" name=\"email\" aria-label=\"E-mail\"><button formnovalidate>Enviar sem validar</button></form>",
    "tags": [
      "formnovalidate",
      "button de envio, input type=submit ou image"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button de envio, input type=submit ou image."
  },
  {
    "id": "attr-formtarget",
    "name": "formtarget",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sobrescreve o contexto de destino do envio.",
    "syntax": "formtarget=\"valor\"",
    "example": "<form action=\"/busca\"><button formtarget=\"_blank\">Abrir resultado</button></form>",
    "tags": [
      "formtarget",
      "button de envio, input type=submit ou image"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button de envio, input type=submit ou image."
  },
  {
    "id": "attr-min",
    "name": "min",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Menor valor permitido; em datas use o formato correspondente ao tipo.",
    "syntax": "min=\"valor\"",
    "example": "<input type=\"number\" min=\"0\" aria-label=\"Quantidade\">",
    "tags": [
      "min",
      "input type=number, range, date, month, week, time, datetime-local; meter"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input type=number, range, date, month, week, time, datetime-local; meter."
  },
  {
    "id": "attr-max",
    "name": "max",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Maior valor permitido ou limite da medição; progress tem mínimo fixo 0.",
    "syntax": "max=\"valor\"",
    "example": "<input type=\"number\" min=\"0\" max=\"10\" aria-label=\"Quantidade\">",
    "tags": [
      "max",
      "input type=number, range, date, month, week, time, datetime-local; meter, progress"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input type=number, range, date, month, week, time, datetime-local; meter, progress."
  },
  {
    "id": "attr-step",
    "name": "step",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Intervalo entre valores válidos ou any quando permitido; unidade varia com o tipo.",
    "syntax": "step=\"valor\"",
    "example": "<input type=\"number\" step=\"0.5\" min=\"0\" aria-label=\"Medida\">",
    "tags": [
      "step",
      "input type=number, range, date, month, week, time, datetime-local"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input type=number, range, date, month, week, time, datetime-local."
  },
  {
    "id": "attr-minlength",
    "name": "minlength",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Comprimento mínimo do texto em unidades UTF-16; use required para impedir valor vazio.",
    "syntax": "minlength=\"valor\"",
    "example": "<input aria-label=\"Usuário\" minlength=\"3\" required>",
    "tags": [
      "minlength",
      "input de texto compatível, textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input de texto compatível, textarea."
  },
  {
    "id": "attr-maxlength",
    "name": "maxlength",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Comprimento máximo do texto em unidades UTF-16.",
    "syntax": "maxlength=\"valor\"",
    "example": "<textarea aria-label=\"Comentário\" maxlength=\"500\"></textarea>",
    "tags": [
      "maxlength",
      "input de texto compatível, textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input de texto compatível, textarea."
  },
  {
    "id": "attr-pattern",
    "name": "pattern",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Expressão regular que deve corresponder ao valor inteiro; não use barras delimitadoras.",
    "syntax": "pattern=\"valor\"",
    "example": "<input aria-label=\"Código\" pattern=\"[A-Z]{3}\" title=\"Três letras maiúsculas\" required>",
    "tags": [
      "pattern",
      "input type=text, search, tel, url, email, password"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input type=text, search, tel, url, email, password."
  },
  {
    "id": "attr-size",
    "name": "size",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Largura aproximada em caracteres para input; número de linhas visíveis em select.",
    "syntax": "size=\"valor\"",
    "example": "<select size=\"3\" aria-label=\"Curso\"><option>HTML</option><option>CSS</option><option>JS</option></select>",
    "tags": [
      "size",
      "input de texto compatível, select"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input de texto compatível, select."
  },
  {
    "id": "attr-list",
    "name": "list",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "ID de um datalist com sugestões.",
    "syntax": "list=\"valor\"",
    "example": "<input list=\"opcoes\" aria-label=\"Curso\"><datalist id=\"opcoes\"><option value=\"HTML\"></datalist>",
    "tags": [
      "list",
      "input compatível"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input compatível."
  },
  {
    "id": "attr-accept",
    "name": "accept",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Tipos ou extensões sugeridos para arquivos; não valida segurança ou conteúdo.",
    "syntax": "accept=\"valor\"",
    "example": "<input type=\"file\" accept=\"image/png,image/jpeg\" aria-label=\"Imagem\">",
    "tags": [
      "accept",
      "input type=file"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input type=file."
  },
  {
    "id": "attr-capture",
    "name": "capture",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Sugere captura de mídia: user ou environment; depende do dispositivo.",
    "syntax": "capture=\"valor\"",
    "example": "<input type=\"file\" accept=\"image/*\" capture=\"environment\" aria-label=\"Foto\">",
    "tags": [
      "capture",
      "input type=file"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input type=file."
  },
  {
    "id": "attr-rows",
    "name": "rows",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Número de linhas de texto visíveis.",
    "syntax": "rows=\"valor\"",
    "example": "<textarea aria-label=\"Anotações\" rows=\"4\"></textarea>",
    "tags": [
      "rows",
      "textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: textarea."
  },
  {
    "id": "attr-cols",
    "name": "cols",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Largura aproximada em caracteres; CSS pode controlar a largura final.",
    "syntax": "cols=\"valor\"",
    "example": "<textarea aria-label=\"Anotações\" cols=\"30\"></textarea>",
    "tags": [
      "cols",
      "textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: textarea."
  },
  {
    "id": "attr-wrap",
    "name": "wrap",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "soft não acrescenta quebras ao enviar; hard acrescenta, respeitando cols.",
    "syntax": "wrap=\"valor\"",
    "example": "<textarea name=\"texto\" aria-label=\"Texto\" wrap=\"hard\" cols=\"30\"></textarea>",
    "tags": [
      "wrap",
      "textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: textarea."
  },
  {
    "id": "attr-dirname",
    "name": "dirname",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Nome de um campo extra para enviar a direção do texto.",
    "syntax": "dirname=\"valor\"",
    "example": "<input name=\"comentario\" dirname=\"comentario.dir\" aria-label=\"Comentário\">",
    "tags": [
      "dirname",
      "input type=text/search e textarea"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: input type=text/search e textarea."
  },
  {
    "id": "attr-low",
    "name": "low",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Limite superior da faixa considerada baixa.",
    "syntax": "low=\"valor\"",
    "example": "<meter min=\"0\" max=\"100\" low=\"20\" high=\"80\" optimum=\"50\" value=\"10\">10%</meter>",
    "tags": [
      "low",
      "meter"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: meter."
  },
  {
    "id": "attr-high",
    "name": "high",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Limite inferior da faixa considerada alta.",
    "syntax": "high=\"valor\"",
    "example": "<meter min=\"0\" max=\"100\" low=\"20\" high=\"80\" optimum=\"50\" value=\"90\">90%</meter>",
    "tags": [
      "high",
      "meter"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: meter."
  },
  {
    "id": "attr-optimum",
    "name": "optimum",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Valor ideal da faixa; influencia a apresentação semântica da medição.",
    "syntax": "optimum=\"valor\"",
    "example": "<meter min=\"0\" max=\"100\" low=\"20\" high=\"80\" optimum=\"90\" value=\"85\">85%</meter>",
    "tags": [
      "optimum",
      "meter"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: meter."
  },
  {
    "id": "attr-start",
    "name": "start",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Número inteiro inicial da lista ordenada.",
    "syntax": "start=\"valor\"",
    "example": "<ol start=\"3\"><li>Terceiro passo</li></ol>",
    "tags": [
      "start",
      "ol"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: ol."
  },
  {
    "id": "attr-reversed",
    "name": "reversed",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que inverte a sequência numérica.",
    "syntax": "reversed=\"valor\"",
    "example": "<ol reversed><li>Primeiro</li><li>Segundo</li></ol>",
    "tags": [
      "reversed",
      "ol"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: ol."
  },
  {
    "id": "attr-colspan",
    "name": "colspan",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Número de colunas ocupadas por uma célula; não use para layout.",
    "syntax": "colspan=\"valor\"",
    "example": "<table><tr><th colspan=\"2\">Notas</th></tr><tr><td>Ana</td><td>9</td></tr></table>",
    "tags": [
      "colspan",
      "td, th"
    ],
    "lesson": "tabelas",
    "note": "Aplica-se a: td, th."
  },
  {
    "id": "attr-rowspan",
    "name": "rowspan",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Número de linhas ocupadas; 0 cobre até o fim do grupo de linhas.",
    "syntax": "rowspan=\"valor\"",
    "example": "<table><tr><th rowspan=\"2\" scope=\"rowgroup\">Web</th><td>HTML</td></tr><tr><td>CSS</td></tr></table>",
    "tags": [
      "rowspan",
      "td, th"
    ],
    "lesson": "tabelas",
    "note": "Aplica-se a: td, th."
  },
  {
    "id": "attr-scope",
    "name": "scope",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Associação do cabeçalho: row, col, rowgroup ou colgroup.",
    "syntax": "scope=\"valor\"",
    "example": "<table><tr><th scope=\"row\">HTML</th><td>8 aulas</td></tr></table>",
    "tags": [
      "scope",
      "th"
    ],
    "lesson": "tabelas",
    "note": "Aplica-se a: th."
  },
  {
    "id": "attr-headers",
    "name": "headers",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "IDs de células th que são cabeçalhos da célula, útil em tabelas complexas.",
    "syntax": "headers=\"valor\"",
    "example": "<table><tr><th id=\"curso\">Curso</th></tr><tr><td headers=\"curso\">HTML</td></tr></table>",
    "tags": [
      "headers",
      "td, th"
    ],
    "lesson": "tabelas",
    "note": "Aplica-se a: td, th."
  },
  {
    "id": "attr-span",
    "name": "span",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Quantidade de colunas representadas; colgroup com filhos col não deve usar span.",
    "syntax": "span=\"valor\"",
    "example": "<table><colgroup span=\"2\"></colgroup><tr><td>A</td><td>B</td></tr></table>",
    "tags": [
      "span",
      "col, colgroup"
    ],
    "lesson": "tabelas",
    "note": "Aplica-se a: col, colgroup."
  },
  {
    "id": "attr-abbr",
    "name": "abbr",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Versão abreviada do texto de cabeçalho da célula.",
    "syntax": "abbr=\"valor\"",
    "example": "<table><tr><th abbr=\"Qtd\" scope=\"col\">Quantidade</th></tr><tr><td>3</td></tr></table>",
    "tags": [
      "abbr",
      "th"
    ],
    "lesson": "tabelas",
    "note": "Aplica-se a: th."
  },
  {
    "id": "attr-cite",
    "name": "cite",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "URL da fonte da citação ou da explicação de uma alteração; não aparece automaticamente.",
    "syntax": "cite=\"valor\"",
    "example": "<blockquote cite=\"https://example.com\"><p>Uma citação.</p></blockquote>",
    "tags": [
      "cite",
      "blockquote, q, ins, del"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: blockquote, q, ins, del."
  },
  {
    "id": "attr-datetime",
    "name": "datetime",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Data ou horário em formato válido; em ins e del registra a alteração.",
    "syntax": "datetime=\"valor\"",
    "example": "<time datetime=\"2026-10-24\">24/10/2026</time>",
    "tags": [
      "datetime",
      "time, ins, del"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: time, ins, del."
  },
  {
    "id": "attr-open",
    "name": "open",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que exibe o conteúdo; em dialog não cria modalidade por si só.",
    "syntax": "open=\"valor\"",
    "example": "<details open><summary>HTML</summary><p>Linguagem de marcação.</p></details>",
    "tags": [
      "open",
      "details, dialog"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: details, dialog."
  },
  {
    "id": "attr-popovertarget",
    "name": "popovertarget",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "ID do elemento popover controlado pelo botão.",
    "syntax": "popovertarget=\"valor\"",
    "example": "<button popovertarget=\"dica\">Dica</button><div id=\"dica\" popover>Use tags semânticas.</div>",
    "tags": [
      "popovertarget",
      "button, input type=button"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button, input type=button."
  },
  {
    "id": "attr-popovertargetaction",
    "name": "popovertargetaction",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Ação no popover alvo: toggle, show ou hide.",
    "syntax": "popovertargetaction=\"valor\"",
    "example": "<button popovertarget=\"dica\" popovertargetaction=\"show\">Abrir</button><div id=\"dica\" popover>Dica</div>",
    "tags": [
      "popovertargetaction",
      "button, input type=button"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button, input type=button."
  },
  {
    "id": "attr-command",
    "name": "command",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Comando para um alvo: show-modal, close, request-close, toggle-popover, show-popover, hide-popover ou comando personalizado iniciado por --; suporte recente.",
    "syntax": "command=\"valor\"",
    "example": "<button commandfor=\"aviso\" command=\"show-modal\">Abrir</button><dialog id=\"aviso\"><p>Olá!</p></dialog>",
    "tags": [
      "command",
      "button"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button."
  },
  {
    "id": "attr-commandfor",
    "name": "commandfor",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "ID do elemento que receberá o comando de command; suporte recente.",
    "syntax": "commandfor=\"valor\"",
    "example": "<button commandfor=\"aviso\" command=\"close\">Fechar</button><dialog id=\"aviso\" open><p>Olá!</p></dialog>",
    "tags": [
      "commandfor",
      "button"
    ],
    "lesson": "formularios",
    "note": "Aplica-se a: button."
  },
  {
    "id": "attr-charset",
    "name": "charset",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Define a codificação; use UTF-8 e coloque a declaração no início de head.",
    "syntax": "charset=\"valor\"",
    "example": "<meta charset=\"UTF-8\">",
    "tags": [
      "charset",
      "meta"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: meta."
  },
  {
    "id": "attr-content",
    "name": "content",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Valor do metadado indicado por name ou http-equiv.",
    "syntax": "content=\"valor\"",
    "example": "<meta name=\"description\" content=\"Guia de HTML em português\">",
    "tags": [
      "content",
      "meta"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: meta."
  },
  {
    "id": "attr-http-equiv",
    "name": "http-equiv",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Diretiva limitada reconhecida pelo navegador, como content-security-policy ou refresh; não equivale a todos os cabeçalhos HTTP.",
    "syntax": "http-equiv=\"valor\"",
    "example": "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\">",
    "tags": [
      "http-equiv",
      "meta"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: meta."
  },
  {
    "id": "attr-media",
    "name": "media",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Condição de mídia para aplicar o estilo ou escolher uma fonte.",
    "syntax": "media=\"valor\"",
    "example": "<link rel=\"stylesheet\" href=\"impressao.css\" media=\"print\">",
    "tags": [
      "media",
      "link, style, source em picture"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: link, style, source em picture."
  },
  {
    "id": "attr-integrity",
    "name": "integrity",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Hash criptográfico de integridade do recurso; gere a partir do arquivo real. Recursos CORS exigem configuração compatível.",
    "syntax": "integrity=\"valor\"",
    "example": "<script src=\"app.js\" integrity=\"sha384-HASH_REAL_DO_ARQUIVO\" crossorigin=\"anonymous\"></script>",
    "tags": [
      "integrity",
      "script, link"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: script, link."
  },
  {
    "id": "attr-defer",
    "name": "defer",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Executa após a análise do HTML, em ordem; módulos já são adiados por padrão.",
    "syntax": "defer=\"valor\"",
    "example": "<script src=\"app.js\" defer></script>",
    "tags": [
      "defer",
      "script clássico externo"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: script clássico externo."
  },
  {
    "id": "attr-async",
    "name": "async",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Executa assim que estiver pronto, sem garantir ordem entre scripts.",
    "syntax": "async=\"valor\"",
    "example": "<script src=\"metricas.js\" async></script>",
    "tags": [
      "async",
      "script externo clássico ou módulo"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: script externo clássico ou módulo."
  },
  {
    "id": "attr-nomodule",
    "name": "nomodule",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que evita executar o script em navegadores com suporte a módulos.",
    "syntax": "nomodule=\"valor\"",
    "example": "<script nomodule src=\"legado.js\"></script>",
    "tags": [
      "nomodule",
      "script"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: script."
  },
  {
    "id": "attr-blocking",
    "name": "blocking",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Token render pode bloquear a renderização em contextos permitidos; suporte varia.",
    "syntax": "blocking=\"valor\"",
    "example": "<script src=\"essencial.js\" blocking=\"render\"></script>",
    "tags": [
      "blocking",
      "script, link, style"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: script, link, style."
  },
  {
    "id": "attr-as",
    "name": "as",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Tipo de destino do recurso pré-carregado, como style, script, font ou image.",
    "syntax": "as=\"valor\"",
    "example": "<link rel=\"preload\" href=\"app.js\" as=\"script\">",
    "tags": [
      "as",
      "link rel=preload"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: link rel=preload."
  },
  {
    "id": "attr-imagesrcset",
    "name": "imagesrcset",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Conjunto de fontes de uma imagem responsiva para pré-carregamento.",
    "syntax": "imagesrcset=\"valor\"",
    "example": "<link rel=\"preload\" as=\"image\" imagesrcset=\"foto-400.jpg 400w, foto-800.jpg 800w\" imagesizes=\"100vw\">",
    "tags": [
      "imagesrcset",
      "link rel=preload as=image"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: link rel=preload as=image."
  },
  {
    "id": "attr-imagesizes",
    "name": "imagesizes",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Tamanho previsto da imagem usado com imagesrcset com descritores w.",
    "syntax": "imagesizes=\"valor\"",
    "example": "<link rel=\"preload\" as=\"image\" imagesrcset=\"foto-400.jpg 400w, foto-800.jpg 800w\" imagesizes=\"100vw\">",
    "tags": [
      "imagesizes",
      "link rel=preload as=image"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: link rel=preload as=image."
  },
  {
    "id": "attr-shadowrootmode",
    "name": "shadowrootmode",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Declara um Shadow DOM declarativo: open ou closed; o template deve estar em contexto permitido.",
    "syntax": "shadowrootmode=\"valor\"",
    "example": "<div><template shadowrootmode=\"open\"><p>Conteúdo encapsulado.</p></template></div>",
    "tags": [
      "shadowrootmode",
      "template"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: template."
  },
  {
    "id": "attr-shadowrootdelegatesfocus",
    "name": "shadowrootdelegatesfocus",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que delega foco para o primeiro descendente focável do Shadow DOM.",
    "syntax": "shadowrootdelegatesfocus=\"valor\"",
    "example": "<div><template shadowrootmode=\"open\" shadowrootdelegatesfocus><input aria-label=\"Nome\"></template></div>",
    "tags": [
      "shadowrootdelegatesfocus",
      "template com shadowrootmode"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: template com shadowrootmode."
  },
  {
    "id": "attr-shadowrootclonable",
    "name": "shadowrootclonable",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que permite clonar a raiz de sombra com o hospedeiro; recurso recente.",
    "syntax": "shadowrootclonable=\"valor\"",
    "example": "<div><template shadowrootmode=\"open\" shadowrootclonable><p>Conteúdo</p></template></div>",
    "tags": [
      "shadowrootclonable",
      "template com shadowrootmode"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: template com shadowrootmode."
  },
  {
    "id": "attr-shadowrootserializable",
    "name": "shadowrootserializable",
    "language": "html",
    "category": "atributos",
    "kind": "attribute",
    "description": "Booleano que permite serialização da raiz em APIs compatíveis; recurso recente.",
    "syntax": "shadowrootserializable=\"valor\"",
    "example": "<div><template shadowrootmode=\"open\" shadowrootserializable><p>Conteúdo</p></template></div>",
    "tags": [
      "shadowrootserializable",
      "template com shadowrootmode"
    ],
    "lesson": "estrutura-basica",
    "note": "Aplica-se a: template com shadowrootmode."
  },
  {
    "id": "aria-aria-label",
    "name": "aria-label",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Rótulo acessível quando não há rótulo visível adequado.",
    "syntax": "aria-label=\"valor\"",
    "example": "<button aria-label=\"Fechar\">×</button>",
    "tags": [
      "aria-label"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-labelledby",
    "name": "aria-labelledby",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Lista IDs de elementos que fornecem o nome acessível.",
    "syntax": "aria-labelledby=\"valor\"",
    "example": "<h2 id=\"titulo\">Preferências</h2><section aria-labelledby=\"titulo\"><p>Suas opções.</p></section>",
    "tags": [
      "aria-labelledby"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-describedby",
    "name": "aria-describedby",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Lista IDs que fornecem uma descrição adicional.",
    "syntax": "aria-describedby=\"valor\"",
    "example": "<input aria-label=\"Senha\" type=\"password\" aria-describedby=\"dica\"><p id=\"dica\">Use pelo menos 8 caracteres.</p>",
    "tags": [
      "aria-describedby"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-hidden",
    "name": "aria-hidden",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "true oculta da árvore de acessibilidade; não oculta visualmente. Nunca use em elementos focáveis ou ancestrais deles.",
    "syntax": "aria-hidden=\"valor\"",
    "example": "<span aria-hidden=\"true\">★</span><span>Favorito</span>",
    "tags": [
      "aria-hidden"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-expanded",
    "name": "aria-expanded",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Indica se a área controlada está expandida; atualize com a interação.",
    "syntax": "aria-expanded=\"valor\"",
    "example": "<button aria-expanded=\"false\" aria-controls=\"painel\">Detalhes</button><div id=\"painel\" hidden>Conteúdo</div>",
    "tags": [
      "aria-expanded"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-controls",
    "name": "aria-controls",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "ID ou lista de IDs das áreas controladas pelo elemento.",
    "syntax": "aria-controls=\"valor\"",
    "example": "<button aria-controls=\"painel\" aria-expanded=\"false\">Abrir</button><div id=\"painel\" hidden>Painel</div>",
    "tags": [
      "aria-controls"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-live",
    "name": "aria-live",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Anuncia mudanças: polite, assertive ou off; use assertive com moderação.",
    "syntax": "aria-live=\"valor\"",
    "example": "<p aria-live=\"polite\">Arquivo salvo.</p>",
    "tags": [
      "aria-live"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-current",
    "name": "aria-current",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Identifica item atual, como page em navegação.",
    "syntax": "aria-current=\"valor\"",
    "example": "<nav><a href=\"/html\" aria-current=\"page\">HTML</a></nav>",
    "tags": [
      "aria-current"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-pressed",
    "name": "aria-pressed",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Estado true, false ou mixed de um botão de alternância.",
    "syntax": "aria-pressed=\"valor\"",
    "example": "<button type=\"button\" aria-pressed=\"false\">Favorito</button>",
    "tags": [
      "aria-pressed"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-selected",
    "name": "aria-selected",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Estado de seleção em papéis que o permitem, como tab ou option.",
    "syntax": "aria-selected=\"valor\"",
    "example": "<div role=\"listbox\" aria-label=\"Cursos\"><div role=\"option\" aria-selected=\"true\">HTML</div></div>",
    "tags": [
      "aria-selected"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-disabled",
    "name": "aria-disabled",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Indica indisponibilidade, mas não bloqueia ações por si só; prefira disabled em controles nativos.",
    "syntax": "aria-disabled=\"valor\"",
    "example": "<button disabled aria-disabled=\"true\">Enviar</button>",
    "tags": [
      "aria-disabled"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-invalid",
    "name": "aria-invalid",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Indica erro de validação; ofereça uma mensagem que explique o problema.",
    "syntax": "aria-invalid=\"valor\"",
    "example": "<input type=\"email\" aria-label=\"E-mail\" aria-invalid=\"true\" aria-describedby=\"erro\"><p id=\"erro\">Informe um e-mail válido.</p>",
    "tags": [
      "aria-invalid"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "aria-aria-required",
    "name": "aria-required",
    "language": "html",
    "category": "atributos-globais",
    "kind": "attribute",
    "description": "Informa que o valor é obrigatório, mas não realiza validação; prefira required em controles nativos.",
    "syntax": "aria-required=\"valor\"",
    "example": "<input aria-label=\"Nome\" required aria-required=\"true\">",
    "tags": [
      "aria-required"
    ],
    "lesson": "atributos-acessibilidade",
    "note": "WAI-ARIA: use apenas em elementos/papéis compatíveis."
  },
  {
    "id": "input-text",
    "name": "input type=\"text\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Texto de uma linha, tipo padrão.",
    "syntax": "<input type=\"text\" name=\"campo\">",
    "example": "<input type=\"text\" name=\"nome\" aria-label=\"Nome\">",
    "tags": [
      "input",
      "text",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-search",
    "name": "input type=\"search\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Texto de busca; pode oferecer botão nativo de limpeza.",
    "syntax": "<input type=\"search\" name=\"campo\">",
    "example": "<input type=\"search\" name=\"q\" aria-label=\"Busca\">",
    "tags": [
      "input",
      "search",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-email",
    "name": "input type=\"email\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Endereço de e-mail com validação nativa de formato.",
    "syntax": "<input type=\"email\" name=\"campo\">",
    "example": "<input type=\"email\" name=\"email\" aria-label=\"E-mail\" required>",
    "tags": [
      "input",
      "email",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-password",
    "name": "input type=\"password\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Texto visualmente oculto; não criptografa o valor nem substitui HTTPS.",
    "syntax": "<input type=\"password\" name=\"campo\">",
    "example": "<input type=\"password\" name=\"senha\" aria-label=\"Senha\" autocomplete=\"current-password\">",
    "tags": [
      "input",
      "password",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-url",
    "name": "input type=\"url\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "URL absoluta com validação nativa de formato.",
    "syntax": "<input type=\"url\" name=\"campo\">",
    "example": "<input type=\"url\" name=\"site\" aria-label=\"Site\" placeholder=\"https://example.com\">",
    "tags": [
      "input",
      "url",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-tel",
    "name": "input type=\"tel\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Telefone, sem formato de validação universal; sugere teclado telefônico.",
    "syntax": "<input type=\"tel\" name=\"campo\">",
    "example": "<input type=\"tel\" name=\"telefone\" aria-label=\"Telefone\" autocomplete=\"tel\">",
    "tags": [
      "input",
      "tel",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-number",
    "name": "input type=\"number\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Número com min, max e step; não é adequado para códigos com zeros à esquerda.",
    "syntax": "<input type=\"number\" name=\"campo\">",
    "example": "<input type=\"number\" name=\"quantidade\" aria-label=\"Quantidade\" min=\"1\" step=\"1\">",
    "tags": [
      "input",
      "number",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-range",
    "name": "input type=\"range\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Controle deslizante numérico; forneça rótulo e indicação do valor quando necessário.",
    "syntax": "<input type=\"range\" name=\"campo\">",
    "example": "<input type=\"range\" name=\"volume\" aria-label=\"Volume\" min=\"0\" max=\"100\" value=\"50\">",
    "tags": [
      "input",
      "range",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-checkbox",
    "name": "input type=\"checkbox\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Opção independente marcada ou não; só é enviada se marcada.",
    "syntax": "<input type=\"checkbox\" name=\"campo\">",
    "example": "<label><input type=\"checkbox\" name=\"novidades\" value=\"sim\"> Receber novidades</label>",
    "tags": [
      "input",
      "checkbox",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-radio",
    "name": "input type=\"radio\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Opção exclusiva entre controles com mesmo name e mesmo formulário.",
    "syntax": "<input type=\"radio\" name=\"campo\">",
    "example": "<label><input type=\"radio\" name=\"curso\" value=\"html\" checked> HTML</label><label><input type=\"radio\" name=\"curso\" value=\"css\"> CSS</label>",
    "tags": [
      "input",
      "radio",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-file",
    "name": "input type=\"file\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Seleção de arquivos; use multipart/form-data em envio post.",
    "syntax": "<input type=\"file\" name=\"campo\">",
    "example": "<input type=\"file\" name=\"arquivo\" aria-label=\"Arquivo\" accept=\".pdf\">",
    "tags": [
      "input",
      "file",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-color",
    "name": "input type=\"color\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Seleção de cor; o formato tradicional é hexadecimal #rrggbb.",
    "syntax": "<input type=\"color\" name=\"campo\">",
    "example": "<input type=\"color\" name=\"cor\" aria-label=\"Cor\" value=\"#008080\">",
    "tags": [
      "input",
      "color",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-date",
    "name": "input type=\"date\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Data sem horário; o valor usa AAAA-MM-DD independentemente da apresentação local.",
    "syntax": "<input type=\"date\" name=\"campo\">",
    "example": "<input type=\"date\" name=\"data\" aria-label=\"Data\" value=\"2026-10-24\">",
    "tags": [
      "input",
      "date",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-time",
    "name": "input type=\"time\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Horário sem fuso; o valor usa HH:mm ou formato com segundos.",
    "syntax": "<input type=\"time\" name=\"campo\">",
    "example": "<input type=\"time\" name=\"hora\" aria-label=\"Horário\" value=\"17:20\">",
    "tags": [
      "input",
      "time",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-datetime-local",
    "name": "input type=\"datetime-local\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Data e horário locais, sem fuso; valor AAAA-MM-DDTHH:mm.",
    "syntax": "<input type=\"datetime-local\" name=\"campo\">",
    "example": "<input type=\"datetime-local\" name=\"inicio\" aria-label=\"Início\" value=\"2026-10-24T17:20\">",
    "tags": [
      "input",
      "datetime-local",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-month",
    "name": "input type=\"month\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Mês e ano; valor AAAA-MM e suporte de interface variável.",
    "syntax": "<input type=\"month\" name=\"campo\">",
    "example": "<input type=\"month\" name=\"mes\" aria-label=\"Mês\" value=\"2026-10\">",
    "tags": [
      "input",
      "month",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-week",
    "name": "input type=\"week\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Semana ISO de um ano; valor AAAA-Wss, com suporte variável.",
    "syntax": "<input type=\"week\" name=\"campo\">",
    "example": "<input type=\"week\" name=\"semana\" aria-label=\"Semana\" value=\"2026-W43\">",
    "tags": [
      "input",
      "week",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-hidden",
    "name": "input type=\"hidden\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Dado de formulário não exibido; não é secreto e pode ser alterado pelo usuário.",
    "syntax": "<input type=\"hidden\" name=\"campo\">",
    "example": "<input type=\"hidden\" name=\"curso\" value=\"html\">",
    "tags": [
      "input",
      "hidden",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-submit",
    "name": "input type=\"submit\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Botão que envia o formulário associado.",
    "syntax": "<input type=\"submit\" name=\"campo\">",
    "example": "<form action=\"/busca\"><input name=\"q\" aria-label=\"Busca\"><input type=\"submit\" value=\"Buscar\"></form>",
    "tags": [
      "input",
      "submit",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-reset",
    "name": "input type=\"reset\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Restaura os valores iniciais do formulário; pode apagar mudanças por acidente.",
    "syntax": "<input type=\"reset\" name=\"campo\">",
    "example": "<form><input name=\"nome\" aria-label=\"Nome\"><input type=\"reset\" value=\"Restaurar\"></form>",
    "tags": [
      "input",
      "reset",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-button",
    "name": "input type=\"button\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Botão sem ação nativa de envio; normalmente requer JavaScript.",
    "syntax": "<input type=\"button\" name=\"campo\">",
    "example": "<input type=\"button\" value=\"Olá\" onclick=\"console.log('Olá')\">",
    "tags": [
      "input",
      "button",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  },
  {
    "id": "input-image",
    "name": "input type=\"image\"",
    "language": "html",
    "category": "formulario",
    "kind": "input-type",
    "description": "Botão de envio com imagem; envia também coordenadas do clique.",
    "syntax": "<input type=\"image\" name=\"campo\">",
    "example": "<form action=\"/busca\"><input type=\"image\" src=\"buscar.png\" alt=\"Buscar\" width=\"32\" height=\"32\"></form>",
    "tags": [
      "input",
      "image",
      "tipos",
      "formulario"
    ],
    "lesson": "formularios"
  }
];
