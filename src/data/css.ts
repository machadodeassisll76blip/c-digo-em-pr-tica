import type { Language } from "./types";

export const cssLanguage: Language = {
  id: "css",
  name: "CSS",
  tagline: "O estilo, as cores e o layout da web.",
  intro: {
    what: "CSS (Cascading Style Sheets) é a linguagem de estilos da web. Ela define cores, fontes, espaçamentos, layouts e animações dos elementos HTML.",
    purpose: "Serve para separar a aparência do conteúdo: o mesmo HTML pode ganhar visuais diferentes e se adaptar a celulares, tablets e computadores.",
    creator: "Proposto por Håkon Wium Lie em 1994 e adotado como recomendação pelo W3C em 1996.",
  },
  lessons: [
    {
      slug: "seletores",
      title: "Seletores",
      summary: "Tag, classe, id, descendente e pseudo-classes.",
      explanation: [
        "Um seletor escolhe quais elementos receberão o estilo. p seleciona todos os parágrafos, .classe seleciona por classe e #id por id.",
        "Combine seletores: 'nav a' (a dentro de nav), 'a:hover' (ao passar o mouse), 'li:nth-child(2)' (segundo item). Quanto mais específico, maior a prioridade.",
      ],
      code: {
        html: `<p>Parágrafo comum</p>
<p class="alerta">Parágrafo com classe</p>
<p id="unico">Parágrafo com id</p>
<ul>
  <li>Um</li><li>Dois</li><li>Três</li>
</ul>`,
        css: `/* Seletor de tag */
p { color: #333; }

/* Seletor de classe */
.alerta { color: crimson; font-weight: bold; }

/* Seletor de id */
#unico { background: #def; }

/* Pseudo-classe: o segundo item */
li:nth-child(2) { color: green; }

/* Ao passar o mouse */
li:hover { text-decoration: underline; }`,
        js: "",
      },
    },
    {
      slug: "cores-unidades",
      title: "Cores e unidades",
      summary: "hex, rgb, hsl, px, rem, %, vw.",
      explanation: [
        "Cores podem ser escritas por nome (red), hexadecimal (#ff0000), rgb(255 0 0) ou hsl(0 100% 50%). hsl é ótimo para criar variações.",
        "Unidades: px é fixo; rem é relativo à fonte da raiz (bom para acessibilidade); % é relativo ao pai; vw/vh são relativos à tela.",
      ],
      code: {
        html: `<div class="a">#0af</div>
<div class="b">rgb</div>
<div class="c">hsl</div>
<p class="texto">Texto com 1.25rem</p>`,
        css: `div { padding: 1rem; margin-bottom: 0.5rem; color: white; }
.a { background: #00aaff; width: 50%; }
.b { background: rgb(220 50 90); width: 200px; }
.c { background: hsl(140 60% 40%); width: 80vw; }
.texto { font-size: 1.25rem; }`,
        js: "",
      },
    },
    {
      slug: "box-model",
      title: "Modelo de caixa (box model)",
      summary: "content, padding, border e margin.",
      explanation: [
        "Todo elemento é uma caixa: conteúdo, depois padding (espaço interno), border (borda) e margin (espaço externo).",
        "Com box-sizing: border-box, a largura definida já inclui padding e borda — muito mais previsível. Por isso é comum aplicá-lo a tudo.",
      ],
      code: {
        html: `<div class="caixa">Sou uma caixa</div>`,
        css: `* { box-sizing: border-box; }

.caixa {
  width: 220px;
  padding: 20px;          /* espaço interno */
  border: 5px solid teal; /* borda */
  margin: 30px;           /* espaço externo */
  background: #e0f7f7;
}`,
        js: "",
      },
    },
    {
      slug: "flexbox",
      title: "Flexbox",
      summary: "Alinhar itens em uma direção.",
      explanation: [
        "Flexbox organiza itens em linha ou coluna. Ative com display: flex no elemento pai.",
        "justify-content alinha no eixo principal, align-items no eixo cruzado, gap cria espaço entre itens e flex-wrap permite quebrar linha.",
      ],
      code: {
        html: `<div class="linha">
  <div>1</div><div>2</div><div>3</div>
</div>`,
        css: `.linha {
  display: flex;
  justify-content: space-between; /* eixo principal */
  align-items: center;            /* eixo cruzado */
  gap: 10px;
  flex-wrap: wrap;
  height: 150px;
  background: #eee;
  padding: 10px;
}
.linha div {
  background: tomato; color: white;
  padding: 20px; flex: 1; /* cresce igualmente */
  text-align: center;
}`,
        js: "",
      },
    },
    {
      slug: "grid",
      title: "Grid",
      summary: "Layouts em duas dimensões.",
      explanation: [
        "CSS Grid cria layouts com linhas e colunas. Use display: grid e defina grid-template-columns.",
        "A combinação repeat(auto-fit, minmax(120px, 1fr)) cria grades responsivas sem nenhuma media query.",
      ],
      code: {
        html: `<div class="grade">
  <div>A</div><div>B</div><div>C</div>
  <div>D</div><div>E</div><div>F</div>
</div>`,
        css: `.grade {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}
.grade div {
  background: slateblue; color: white;
  padding: 30px; text-align: center; border-radius: 8px;
}
/* O primeiro ocupa duas colunas */
.grade div:first-child { grid-column: span 2; }`,
        js: "",
      },
    },
    {
      slug: "posicionamento",
      title: "Posicionamento",
      summary: "static, relative, absolute, fixed e sticky.",
      explanation: [
        "position: relative desloca o elemento a partir de onde ele estaria e vira referência para filhos absolute.",
        "absolute posiciona em relação ao ancestral posicionado mais próximo; fixed em relação à tela; sticky gruda ao rolar.",
      ],
      code: {
        html: `<div class="cartao">
  Cartão
  <span class="selo">NOVO</span>
</div>
<p class="gruda">Eu grudo no topo ao rolar</p>
<p style="height:600px">Role para baixo...</p>`,
        css: `.cartao {
  position: relative; /* referência para o selo */
  background: #eef; padding: 40px; margin: 20px 0;
}
.selo {
  position: absolute; top: -10px; right: -10px;
  background: crimson; color: white; padding: 4px 8px; border-radius: 4px;
}
.gruda {
  position: sticky; top: 0;
  background: gold; padding: 8px;
}`,
        js: "",
      },
    },
    {
      slug: "media-queries",
      title: "Responsividade com media queries",
      summary: "Mobile-first e breakpoints.",
      explanation: [
        "Media queries aplicam estilos conforme o tamanho da tela. Na abordagem mobile-first, escrevemos o estilo do celular primeiro e usamos min-width para telas maiores.",
        "Redimensione a janela (ou gire o celular) para ver a pré-visualização mudar.",
      ],
      code: {
        html: `<div class="layout">
  <aside>Menu</aside>
  <main>Conteúdo principal</main>
</div>`,
        css: `/* Celular: uma coluna */
.layout { display: grid; gap: 10px; }
aside, main { padding: 20px; color: white; }
aside { background: teal; }
main { background: darkslateblue; }

/* A partir de 500px: duas colunas */
@media (min-width: 500px) {
  .layout { grid-template-columns: 150px 1fr; }
}`,
        js: "",
      },
    },
    {
      slug: "transicoes-animacoes",
      title: "Transições e animações",
      summary: "transition, transform e @keyframes.",
      explanation: [
        "transition suaviza a mudança de uma propriedade (ex.: ao passar o mouse). transform move, gira e escala sem afetar o layout.",
        "@keyframes define etapas de uma animação, aplicada com a propriedade animation.",
      ],
      code: {
        html: `<button class="btn">Passe o mouse</button>
<div class="bola"></div>`,
        css: `.btn {
  padding: 12px 20px; border: none; background: teal; color: white;
  border-radius: 8px;
  transition: transform 0.3s, background 0.3s;
}
.btn:hover { transform: scale(1.1); background: darkcyan; }

.bola {
  width: 40px; height: 40px; border-radius: 50%;
  background: tomato; margin-top: 30px;
  animation: pular 1s ease-in-out infinite alternate;
}
@keyframes pular {
  from { transform: translateY(0); }
  to   { transform: translateY(-30px); }
}`,
        js: "",
      },
    },
    {
      slug: "variaveis-css",
      title: "Variáveis CSS",
      summary: "Custom properties com -- e var().",
      explanation: [
        "Variáveis CSS (custom properties) começam com -- e são lidas com var(). Defina-as em :root para valerem na página toda.",
        "Elas podem ser alteradas em tempo real com JavaScript — ótimo para temas.",
      ],
      code: {
        html: `<div class="card">Cartão com tema</div>
<button id="tema">Trocar tema</button>`,
        css: `:root {
  --cor-fundo: #fafafa;
  --cor-destaque: #0a8;
  --raio: 12px;
}
.card {
  background: var(--cor-fundo);
  border: 3px solid var(--cor-destaque);
  border-radius: var(--raio);
  padding: 20px; margin-bottom: 10px;
}`,
        js: `// Altera a variável CSS via JavaScript
document.getElementById('tema').onclick = () => {
  const raiz = document.documentElement.style;
  raiz.setProperty('--cor-destaque', '#e33');
  raiz.setProperty('--cor-fundo', '#ffecec');
};`,
      },
    },
  ],
};
