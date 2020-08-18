const tarefaInput = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

const botaoTarefa = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoApagaFinalizados = document.querySelector('#remover-finalizados');
const botaoApagaSelecionados = document.querySelector('#remover-selecionado');
const botaoSalvaLista = document.querySelector('#salvar-tarefas');
const botaoMoveCima = document.querySelector('#mover-cima');
const botaoMoveBaixo = document.querySelector('#mover-baixo');

const listaSalva = localStorage.getItem('lista');
if (listaSalva) {
  listaTarefas.innerHTML = listaSalva;
}

function completedItem(item) {
  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}

function selectedItem(item) {
  if (document.getElementsByClassName('selected')[0] != null) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
  }
  item.classList.add('selected');
}

function criaTarefa() {
  const item = document.createElement('li');
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = null;

  item.addEventListener('dblclick', function () {
    completedItem(item);
  });
  item.addEventListener('click', function () {
    selectedItem(item);
  });
}

function apagaTudo() {
  const lista = document.getElementsByTagName('li');
  const elementos = lista.length - 1;
  for (let i = elementos; i >= 0; i -= 1) {
    lista[i].remove();
  }
  localStorage.clear();
}

function apagaFinalizados() {
  const finalizados = document.getElementsByTagName('li');
  const elementos = finalizados.length - 1;
  for (let i = elementos; i >= 0; i -= 1) {
    if (finalizados[i].classList.contains('completed')) {
      finalizados[i].remove();
    }
  }
}

function apagaSelecionados() {
  const selecionado = document.getElementsByClassName('selected')[0];
  selecionado.remove();
}

function salvaLista() {
  localStorage.clear();
  localStorage.setItem('lista', listaTarefas.innerHTML);
}

function moverCima() {
  const itemS = document.querySelector('.selected');
  if (itemS) {
    if (itemS.previousElementSibling) {
      itemS.parentNode.insertBefore(itemS, itemS.previousElementSibling);
    } else {
      alert('Não é possível mover esta tarefa para cima');
    }
  }
}

function moverBaixo() {
  const itemS = document.querySelector('.selected');
  if (itemS) {
    if (itemS.nextElementSibling) {
      itemS.parentNode.insertBefore(itemS.nextElementSibling, itemS);
    } else {
      alert('Não é possível mover esta tarefa para baixo');
    }
  }
}

botaoTarefa.addEventListener('click', criaTarefa);
botaoApagaTudo.addEventListener('click', apagaTudo);
botaoApagaFinalizados.addEventListener('click', apagaFinalizados);
botaoApagaSelecionados.addEventListener('click', apagaSelecionados);
botaoSalvaLista.addEventListener('click', salvaLista);
botaoMoveCima.addEventListener('click', moverCima);
botaoMoveBaixo.addEventListener('click', moverBaixo);
