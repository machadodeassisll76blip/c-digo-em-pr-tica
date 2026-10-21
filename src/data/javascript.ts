import type { Language } from "./types";

const consoleHtml = `<pre id="saida"></pre>`;
const consoleCss = `body { font-family: system-ui, sans-serif; padding: 16px; }
#saida { background: #111; color: #0f9; padding: 12px; border-radius: 8px; white-space: pre-wrap; }`;
// Função auxiliar usada nos exemplos para "imprimir" na tela.
const helper = `function mostrar(...valores) {
  document.getElementById('saida').textContent += valores.join(' ') + '\\n';
}
`;

export const javascriptLanguage: Language = {
  id: "javascript",
  name: "JavaScript",
  tagline: "O comportamento e a interatividade da web.",
  intro: {
    what: "JavaScript é uma linguagem de programação que roda no navegador (e também em servidores, com Node.js).",
    purpose: "Serve para dar vida às páginas: reagir a cliques, validar formulários, buscar dados de APIs, criar animações e aplicações completas.",
    creator: "Criado por Brendan Eich, na Netscape, em 1995 — em apenas 10 dias.",
  },
  lessons: [
    {
      slug: "variaveis-tipos",
      title: "Variáveis e tipos",
      summary: "let, const e os tipos primitivos.",
      explanation: [
        "Use const para valores que não serão reatribuídos e let para os que mudam. Evite var.",
        "Tipos principais: string, number, boolean, null, undefined, object e array. typeof mostra o tipo de um valor.",
      ],
      code: {
        html: consoleHtml,
        css: consoleCss,
        js: helper + `
const nome = 'Ana';      // string
let idade = 25;          // number
const estudando = true;  // boolean
let nada = null;         // null

idade = idade + 1; // let pode mudar

mostrar('Nome:', nome, '-', typeof nome);
mostrar('Idade:', idade, '-', typeof idade);
mostrar('Estudando:', estudando, '-', typeof estudando);
mostrar('Template string:', \`\${nome} tem \${idade} anos\`);`,
      },
    },
    {
      slug: "operadores",
      title: "Operadores",
      summary: "Aritméticos, comparação e lógicos.",
      explanation: [
        "Aritméticos: + - * / % **. Comparação: === (igual em valor e tipo), !==, >, <. Prefira sempre === em vez de ==.",
        "Lógicos: && (e), || (ou), ! (não). O operador ?? retorna o lado direito quando o esquerdo é null ou undefined.",
      ],
      code: {
        html: consoleHtml,
        css: consoleCss,
        js: helper + `
mostrar('10 % 3 =', 10 % 3);     // resto da divisão
mostrar('2 ** 3 =', 2 ** 3);     // potência
mostrar("5 == '5'", 5 == '5');   // true (converte tipo)
mostrar("5 === '5'", 5 === '5'); // false (compara tipo)
mostrar('true && false =', true && false);
mostrar('true || false =', true || false);

const apelido = null;
mostrar('apelido ?? "sem apelido" =', apelido ?? 'sem apelido');`,
      },
    },
    {
      slug: "condicionais",
      title: "Condicionais",
      summary: "if/else, ternário e switch.",
      explanation: [
        "if executa um bloco quando a condição é verdadeira; else if e else tratam os outros casos.",
        "O operador ternário (cond ? a : b) é um if curto. switch compara um valor com vários casos.",
      ],
      code: {
        html: consoleHtml,
        css: consoleCss,
        js: helper + `
const nota = 7.5;

if (nota >= 9) {
  mostrar('Excelente!');
} else if (nota >= 7) {
  mostrar('Aprovado');
} else {
  mostrar('Recuperação');
}

// Ternário
const status = nota >= 7 ? 'passou' : 'não passou';
mostrar('Status:', status);

// switch
const dia = 'sab';
switch (dia) {
  case 'sab':
  case 'dom':
    mostrar('Fim de semana');
    break;
  default:
    mostrar('Dia útil');
}`,
      },
    },
    {
      slug: "lacos",
      title: "Laços",
      summary: "for, while, for...of e forEach.",
      explanation: [
        "Laços repetem código. O for clássico usa contador; while repete enquanto a condição for verdadeira.",
        "for...of percorre os valores de um array; forEach executa uma função para cada item.",
      ],
      code: {
        html: consoleHtml,
        css: consoleCss,
        js: helper + `
for (let i = 1; i <= 3; i++) {
  mostrar('for, volta', i);
}

let n = 3;
while (n > 0) {
  mostrar('while:', n);
  n--;
}

const frutas = ['maçã', 'uva', 'pera'];
for (const fruta of frutas) {
  mostrar('for...of:', fruta);
}
frutas.forEach((f, i) => mostrar('forEach', i, f));`,
      },
    },
    {
      slug: "funcoes",
      title: "Funções",
      summary: "Declaração, arrow functions e parâmetros padrão.",
      explanation: [
        "Funções agrupam código reutilizável. Recebem parâmetros e podem devolver um valor com return.",
        "Arrow functions (=>) são uma forma curta. Parâmetros podem ter valores padrão.",
      ],
      code: {
        html: consoleHtml,
        css: consoleCss,
        js: helper + `
// Declaração tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function com parâmetro padrão
const saudar = (nome = 'visitante') => 'Olá, ' + nome + '!';

// Função que recebe outra função (callback)
const aplicar = (valor, fn) => fn(valor);

mostrar(somar(2, 3));
mostrar(saudar());
mostrar(saudar('Joana'));
mostrar(aplicar(5, x => x * 10));`,
      },
    },
    {
      slug: "arrays-objetos",
      title: "Arrays e objetos",
      summary: "map, filter, reduce e desestruturação.",
      explanation: [
        "Arrays guardam listas; objetos guardam pares chave-valor. Combine os dois para representar dados reais.",
        "map transforma, filter filtra e reduce acumula. A desestruturação extrai valores de forma prática.",
      ],
      code: {
        html: consoleHtml,
        css: consoleCss,
        js: helper + `
const produtos = [
  { nome: 'Caneta', preco: 3 },
  { nome: 'Caderno', preco: 20 },
  { nome: 'Mochila', preco: 120 },
];

const nomes = produtos.map(p => p.nome);
const baratos = produtos.filter(p => p.preco < 50);
const total = produtos.reduce((soma, p) => soma + p.preco, 0);

mostrar('Nomes:', nomes.join(', '));
mostrar('Baratos:', baratos.length);
mostrar('Total: R$', total);

// Desestruturação
const { nome, preco } = produtos[2];
mostrar(nome, 'custa', preco);

// Spread: copia e adiciona
const novo = { ...produtos[0], cor: 'azul' };
mostrar(JSON.stringify(novo));`,
      },
    },
    {
      slug: "dom",
      title: "Manipulação do DOM",
      summary: "querySelector, textContent, classList e createElement.",
      explanation: [
        "O DOM é a representação da página que o JavaScript pode ler e alterar.",
        "querySelector encontra elementos; textContent muda o texto; classList adiciona/remove classes; createElement e append criam novos elementos.",
      ],
      code: {
        html: `<h1 id="titulo">Título original</h1>
<ul id="lista"></ul>`,
        css: `body { font-family: system-ui, sans-serif; padding: 16px; }
.destaque { color: white; background: teal; padding: 8px; border-radius: 6px; }`,
        js: `const titulo = document.querySelector('#titulo');
titulo.textContent = 'Título alterado pelo JS';
titulo.classList.add('destaque');

// Cria itens na lista
const lista = document.querySelector('#lista');
['HTML', 'CSS', 'JS'].forEach(texto => {
  const li = document.createElement('li');
  li.textContent = texto;
  lista.append(li);
});`,
      },
    },
    {
      slug: "eventos",
      title: "Eventos",
      summary: "addEventListener, click, input e o objeto event.",
      explanation: [
        "Eventos são ações do usuário (clique, digitação, envio de formulário). Use addEventListener para reagir a eles.",
        "A função recebe um objeto event com detalhes, como event.target (quem disparou).",
      ],
      code: {
        html: `<button id="btn">Cliques: 0</button>
<p>
  <label for="campo">Digite:</label>
  <input id="campo">
</p>
<p id="eco"></p>`,
        css: `body { font-family: system-ui, sans-serif; padding: 16px; }
button, input { font: inherit; padding: 8px 12px; }`,
        js: `let cliques = 0;
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  cliques++;
  btn.textContent = 'Cliques: ' + cliques;
});

document.getElementById('campo').addEventListener('input', (event) => {
  document.getElementById('eco').textContent = 'Você digitou: ' + event.target.value;
});`,
      },
    },
    {
      slug: "fetch-json",
      title: "Fetch e JSON",
      summary: "Buscar dados de uma API.",
      explanation: [
        "fetch faz requisições HTTP e devolve uma Promise. Com .then, tratamos a resposta quando ela chega.",
        "JSON é o formato de texto mais usado para trocar dados. response.json() converte em objeto; JSON.stringify faz o caminho inverso.",
      ],
      code: {
        html: `<button id="carregar">Carregar usuários</button>
<ul id="usuarios"></ul>`,
        css: `body { font-family: system-ui, sans-serif; padding: 16px; }
button { font: inherit; padding: 8px 12px; }`,
        js: `document.getElementById('carregar').onclick = () => {
  fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    .then(resposta => resposta.json()) // converte JSON em objeto
    .then(usuarios => {
      const ul = document.getElementById('usuarios');
      ul.innerHTML = '';
      usuarios.forEach(u => {
        const li = document.createElement('li');
        li.textContent = u.name + ' (' + u.email + ')';
        ul.append(li);
      });
    })
    .catch(erro => alert('Erro: ' + erro.message));
};`,
      },
    },
    {
      slug: "localstorage",
      title: "localStorage",
      summary: "Salvar dados no navegador.",
      explanation: [
        "localStorage guarda pares chave-valor (sempre texto) que continuam lá mesmo após fechar a página.",
        "Para guardar objetos ou arrays, converta com JSON.stringify ao salvar e JSON.parse ao ler. (Nesta pré-visualização o armazenamento é simulado em memória.)",
      ],
      code: {
        html: `<label for="nome">Seu nome:</label>
<input id="nome">
<button id="salvar">Salvar</button>
<p id="msg"></p>`,
        css: `body { font-family: system-ui, sans-serif; padding: 16px; }
input, button { font: inherit; padding: 8px; }`,
        js: `const msg = document.getElementById('msg');
const salvo = localStorage.getItem('nome');
msg.textContent = salvo ? 'Bem-vindo de volta, ' + salvo : 'Nenhum nome salvo.';

document.getElementById('salvar').onclick = () => {
  const nome = document.getElementById('nome').value;
  localStorage.setItem('nome', nome);
  // Objetos precisam virar texto
  localStorage.setItem('perfil', JSON.stringify({ nome, data: Date.now() }));
  const perfil = JSON.parse(localStorage.getItem('perfil'));
  msg.textContent = 'Salvo! ' + perfil.nome;
};`,
      },
    },
    {
      slug: "async-await",
      title: "Noções de async/await",
      summary: "Código assíncrono legível.",
      explanation: [
        "async/await é uma forma mais legível de lidar com Promises. Uma função async sempre devolve uma Promise, e await espera ela terminar.",
        "Use try/catch para tratar erros, como faria em código síncrono.",
      ],
      code: {
        html: consoleHtml,
        css: consoleCss,
        js: helper + `
// Simula uma espera
const esperar = (ms) => new Promise(r => setTimeout(r, ms));

async function carregar() {
  try {
    mostrar('Esperando 1 segundo...');
    await esperar(1000);

    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const tarefa = await resp.json();
    mostrar('Tarefa:', tarefa.title);
  } catch (erro) {
    mostrar('Deu erro:', erro.message);
  } finally {
    mostrar('Fim!');
  }
}

carregar();`,
      },
    },
  ],
};
