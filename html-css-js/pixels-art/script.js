const cor1 = document.querySelectorAll('.color')[0];
const cor2 = document.querySelectorAll('.color')[1];
const cor3 = document.querySelectorAll('.color')[2];
const cor4 = document.querySelectorAll('.color')[3];

function corAleatoria() {
  const hexadecimais = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i += 1) {
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = corAleatoria();
cor3.style.backgroundColor = corAleatoria();
cor4.style.backgroundColor = corAleatoria();

sessionStorage.setItem('color', 'black');

function selecionaCor(indicador) {
  if (indicador === 1) {
    sessionStorage.setItem('color', cor1.style.backgroundColor);
    cor1.className = 'color selected';
    cor2.className = 'color';
    cor3.className = 'color';
    cor4.className = 'color';
  } else if (indicador === 2) {
    sessionStorage.setItem('color', cor2.style.backgroundColor);
    cor1.className = 'color';
    cor2.className = 'color selected';
    cor3.className = 'color';
    cor4.className = 'color';
  } else if (indicador === 3) {
    sessionStorage.setItem('color', cor3.style.backgroundColor);
    cor1.className = 'color';
    cor2.className = 'color';
    cor3.className = 'color selected';
    cor4.className = 'color';
  } else if (indicador === 4) {
    sessionStorage.setItem('color', cor4.style.backgroundColor);
    cor1.className = 'color';
    cor2.className = 'color';
    cor3.className = 'color';
    cor4.className = 'color selected';
  }
}

cor1.addEventListener('click', function () {
  selecionaCor(1);
});

cor2.addEventListener('click', function () {
  selecionaCor(2);
});

cor3.addEventListener('click', function () {
  selecionaCor(3);
});

cor4.addEventListener('click', function () {
  selecionaCor(4);
});

let pixel = document.querySelectorAll('.pixel');

function pintaPixel(i) {
  pixel[i].addEventListener('click', function () {
    pixel[i].style.backgroundColor = sessionStorage.color;
  });
}

for (let i = 0; i < pixel.length; i += 1) {
  pintaPixel(i);
}

const botaoLimpar = document.querySelector('#clear-board');

function limpaPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

botaoLimpar.addEventListener('click', limpaPixel);

const inputTamanho = document.getElementById('board-size');
const botaoQuadro = document.getElementById('generate-board');
let tr = document.querySelectorAll('tr');
const tbody = document.querySelector('tbody');

function criaTabela() {
  for (let j = 0; j < inputTamanho.value; j += 1) {
    const trCriado = document.createElement('tr');
    tbody.appendChild(trCriado);
    for (let k = 0; k < inputTamanho.value; k += 1) {
      const tdCriado = document.createElement('td');
      tdCriado.className = 'pixel';
      trCriado.appendChild(tdCriado);
    }
  }
}

function criaQuadro() {
  for (let i = 0; i < tr.length; i += 1) {
    tr[i].remove();
  }

  if (inputTamanho.value > 50) {
    inputTamanho.value = 50;
  } else if (inputTamanho.value < 5) {
    inputTamanho.value = 5;
  }

  criaTabela();

  pixel = document.querySelectorAll('.pixel');

  for (let l = 0; l < pixel.length; l += 1) {
    pintaPixel(l);
  }

  inputTamanho.value = '';
  tr = document.querySelectorAll('tr');
}

botaoQuadro.addEventListener('click', criaQuadro);
