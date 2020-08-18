const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function classeAleatoria() {
  const estA = Math.round(Math.random() * (estilo.length - 1));
  const tamA = Math.round(Math.random() * (tamanho.length - 1));
  const rotA = Math.round(Math.random() * (rotacao.length - 1));
  const incA = Math.round(Math.random() * (rotacao.length - 1));
  const e = ' ';
  const classe = estilo[estA] + e + tamanho[tamA] + e + rotacao[rotA] + e + inclinacao[incA];
  return classe;
}

const inputCarta = document.querySelector('#carta-texto');
const botaoCarta = document.querySelector('#criar-carta');
const pCarta = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');
const botaoLimpa = document.querySelector('#limpa-carta');

function limpaCarta() {
  pCarta.innerHTML = '';
  contador.innerHTML = '';
  inputCarta.value = '';
}

function criaSpan(arrayCarta) {
  for (let i = 0; i < arrayCarta.length; i += 1) {
    const span = document.createElement('span');
    span.className = classeAleatoria();
    span.innerHTML = arrayCarta[i];
    pCarta.appendChild(span);
  }
}

function novaClasse(j) {
  const spanCriado = document.querySelectorAll('span');
  spanCriado[j].addEventListener('click', function () {
    spanCriado[j].className = classeAleatoria();
  });
}

function addCarta() {
  pCarta.innerHTML = '';
  contador.innerHTML = '';
  const arrayCarta = inputCarta.value.split(' ');
  criaSpan(arrayCarta);
  contador.innerHTML = arrayCarta.length;
  for (let j = 0; j < arrayCarta.length; j += 1) {
    novaClasse(j);
  }
}

botaoCarta.addEventListener('click', addCarta);
botaoLimpa.addEventListener('click', limpaCarta);
