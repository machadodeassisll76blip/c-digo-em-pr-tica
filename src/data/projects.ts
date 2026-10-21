import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "noticias",
    title: "Página de notícias",
    summary: "Portal com destaque, grade de notícias e filtro por categoria.",
    explanation: [
      "HTML: usamos header, nav, main e article para dar semântica ao portal.",
      "CSS: Grid com auto-fit deixa a grade de notícias responsiva; variáveis CSS centralizam as cores.",
      "JS: as notícias ficam em um array de objetos; os botões de categoria filtram o array e redesenham os cartões no DOM.",
    ],
    code: {
      html: `<header class="topo">
  <h1>Diário Dev</h1>
  <nav id="filtros" aria-label="Categorias">
    <button data-cat="todas" class="ativo">Todas</button>
    <button data-cat="tecnologia">Tecnologia</button>
    <button data-cat="ciencia">Ciência</button>
    <button data-cat="esporte">Esporte</button>
  </nav>
</header>
<main>
  <section id="noticias" class="grade"></section>
</main>
<footer>© 2026 Diário Dev</footer>`,
      css: `:root { --cor: #0b7a75; --fundo: #f5f5f0; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Georgia, serif; background: var(--fundo); }
.topo { background: var(--cor); color: white; padding: 16px; }
.topo h1 { margin: 0 0 8px; }
nav { display: flex; gap: 8px; flex-wrap: wrap; }
nav button { border: 1px solid white; background: transparent; color: white;
  padding: 6px 12px; border-radius: 20px; cursor: pointer; }
nav button.ativo { background: white; color: var(--cor); }
.grade { display: grid; gap: 16px; padding: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
article { background: white; border-radius: 8px; overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,.1); }
article img { width: 100%; height: 130px; object-fit: cover; display: block; }
article div { padding: 12px; }
.tag { font: 12px system-ui; text-transform: uppercase; color: var(--cor); }
footer { text-align: center; padding: 16px; color: #666; }`,
      js: `const noticias = [
  { titulo: 'Nova versão do navegador chega', cat: 'tecnologia', img: 1 },
  { titulo: 'Telescópio encontra exoplaneta', cat: 'ciencia', img: 2 },
  { titulo: 'Time local vence campeonato', cat: 'esporte', img: 3 },
  { titulo: 'IA ajuda médicos em diagnósticos', cat: 'tecnologia', img: 4 },
  { titulo: 'Estudo revela segredos do oceano', cat: 'ciencia', img: 5 },
];

const area = document.getElementById('noticias');

function render(categoria) {
  const lista = categoria === 'todas'
    ? noticias
    : noticias.filter(n => n.cat === categoria);

  area.innerHTML = lista.map(n =>
    '<article>' +
      '<img src="https://picsum.photos/seed/' + n.img + '/400/200" alt="">' +
      '<div><span class="tag">' + n.cat + '</span><h2>' + n.titulo + '</h2></div>' +
    '</article>'
  ).join('');
}

document.getElementById('filtros').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  document.querySelectorAll('#filtros button').forEach(b => b.classList.remove('ativo'));
  e.target.classList.add('ativo');
  render(e.target.dataset.cat);
});

render('todas');`,
    },
  },
  {
    slug: "loja",
    title: "Página de vendas / loja",
    summary: "Vitrine de produtos com carrinho e total.",
    explanation: [
      "HTML: estrutura com cabeçalho mostrando o carrinho e uma seção para os produtos.",
      "CSS: Flexbox no cabeçalho, Grid na vitrine e transições nos botões.",
      "JS: um array de produtos gera os cartões; o carrinho é um objeto que guarda quantidades, e o total é calculado com reduce. Valores formatados com toLocaleString.",
    ],
    code: {
      html: `<header class="topo">
  <h1>Loja Byte</h1>
  <p>🛒 <span id="qtd">0</span> itens — <strong id="total">R$ 0,00</strong></p>
</header>
<main id="vitrine" class="vitrine"></main>
<button id="limpar" class="limpar">Esvaziar carrinho</button>`,
      css: `* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; background: #fafafa; }
.topo { display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 8px; padding: 12px 16px; background: #222; color: #fff; }
.topo h1 { margin: 0; font-size: 1.3rem; }
.vitrine { display: grid; gap: 16px; padding: 16px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
.produto { background: #fff; border-radius: 10px; padding: 12px; text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,.08); }
.produto .emoji { font-size: 3rem; }
.preco { color: #0a7; font-weight: bold; }
button { font: inherit; cursor: pointer; border: none; border-radius: 8px;
  padding: 10px 14px; transition: transform .2s, background .2s; }
.produto button { background: #0a7; color: #fff; width: 100%; }
.produto button:hover { transform: translateY(-2px); background: #086; }
.limpar { margin: 0 16px 16px; background: #ddd; }`,
      js: `const produtos = [
  { id: 1, nome: 'Teclado', preco: 199.9, emoji: '⌨️' },
  { id: 2, nome: 'Mouse', preco: 89.9, emoji: '🖱️' },
  { id: 3, nome: 'Monitor', preco: 899, emoji: '🖥️' },
  { id: 4, nome: 'Fone', preco: 149.5, emoji: '🎧' },
];
const carrinho = {}; // { idDoProduto: quantidade }

const reais = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

document.getElementById('vitrine').innerHTML = produtos.map(p =>
  '<div class="produto">' +
    '<div class="emoji">' + p.emoji + '</div>' +
    '<h2>' + p.nome + '</h2>' +
    '<p class="preco">' + reais(p.preco) + '</p>' +
    '<button data-id="' + p.id + '">Adicionar</button>' +
  '</div>'
).join('');

function atualizar() {
  const ids = Object.keys(carrinho);
  const qtd = ids.reduce((s, id) => s + carrinho[id], 0);
  const total = ids.reduce((s, id) => {
    const p = produtos.find(x => x.id === Number(id));
    return s + p.preco * carrinho[id];
  }, 0);
  document.getElementById('qtd').textContent = qtd;
  document.getElementById('total').textContent = reais(total);
}

document.getElementById('vitrine').addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (!id) return;
  carrinho[id] = (carrinho[id] || 0) + 1;
  atualizar();
});

document.getElementById('limpar').onclick = () => {
  Object.keys(carrinho).forEach(id => delete carrinho[id]);
  atualizar();
};`,
    },
  },
  {
    slug: "tarefas",
    title: "Lista de tarefas",
    summary: "Adicionar, concluir, excluir e salvar tarefas no localStorage.",
    explanation: [
      "HTML: um formulário com label e input para novas tarefas e uma lista ul.",
      "CSS: Flexbox para alinhar cada tarefa e uma classe .feita que risca o texto.",
      "JS: as tarefas ficam em um array de objetos salvo no localStorage com JSON. Eventos de submit, change e click atualizam o array e redesenham a lista.",
    ],
    code: {
      html: `<main class="app">
  <h1>Minhas tarefas</h1>
  <form id="form">
    <label for="nova" class="sr">Nova tarefa</label>
    <input id="nova" placeholder="O que precisa fazer?" required>
    <button>Adicionar</button>
  </form>
  <ul id="lista"></ul>
  <p id="contador"></p>
</main>`,
      css: `* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; background: #eef2f3; }
.app { max-width: 480px; margin: 24px auto; padding: 16px; background: #fff; border-radius: 12px; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
form { display: flex; gap: 8px; }
input { flex: 1; font: inherit; padding: 10px; border: 1px solid #ccc; border-radius: 8px; }
button { font: inherit; padding: 10px 14px; border: none; border-radius: 8px;
  background: #2a7; color: #fff; cursor: pointer; }
ul { list-style: none; padding: 0; }
li { display: flex; align-items: center; gap: 8px; padding: 8px 0; border-bottom: 1px solid #eee; }
li span { flex: 1; }
li.feita span { text-decoration: line-through; color: #999; }
li button { background: #e44; padding: 6px 10px; }`,
      js: `const CHAVE = 'tarefas';
let tarefas = JSON.parse(localStorage.getItem(CHAVE) || '[]');

const lista = document.getElementById('lista');

function salvar() {
  localStorage.setItem(CHAVE, JSON.stringify(tarefas));
}

function render() {
  lista.innerHTML = '';
  tarefas.forEach((t, i) => {
    const li = document.createElement('li');
    if (t.feita) li.classList.add('feita');
    li.innerHTML =
      '<input type="checkbox" aria-label="Concluir" ' + (t.feita ? 'checked' : '') + '>' +
      '<span></span>' +
      '<button aria-label="Excluir">✕</button>';
    li.querySelector('span').textContent = t.texto; // evita injeção de HTML
    li.querySelector('input').onchange = () => { t.feita = !t.feita; salvar(); render(); };
    li.querySelector('button').onclick = () => { tarefas.splice(i, 1); salvar(); render(); };
    lista.append(li);
  });
  const faltam = tarefas.filter(t => !t.feita).length;
  document.getElementById('contador').textContent = faltam + ' tarefa(s) pendente(s)';
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const campo = document.getElementById('nova');
  tarefas.push({ texto: campo.value.trim(), feita: false });
  campo.value = '';
  salvar();
  render();
});

render();`,
    },
  },
];
