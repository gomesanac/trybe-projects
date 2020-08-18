/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    // ```
    // createMenu(objetoQualquer) // Retorno: { fetchMenu: objetoQualquer }
    // ```
    const input1 = createMenu({objeto: 1}).fetchMenu;
    const output1 = {objeto: 1};

    assert.deepStrictEqual(input1, output1);
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu // Retorno: { food: {}, drink: {}}
    // ```
    const input2 = Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu);
    const output2 = ['food', 'drink'];

    assert.deepStrictEqual(input2, output2);
    // Agora faça o TESTE 3 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu // Retorno: objetoQualquer
    // ```
    const input3 = createMenu({ food: {}, drink: {} }).fetchMenu;
    const output3 = { food: {}, drink: {} };

    assert.deepStrictEqual(input3, output3);
    // Agora faça o TESTE 4 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    const input4 = createMenu({ food: {}, drink: {} }).consumption;
    const output4 = [];

    assert.deepStrictEqual(input4, output4);
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```;
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.comsuption // Retorno: ["coxinha"]
    // ```
    const objeto5 = createMenu({ food: {'coxinha': 3.90, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    objeto5.order('coxinha');
    const input5 = objeto5.consumption;
    const output5 = ['coxinha']
    
    assert.deepStrictEqual(input5, output5);
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.order("coxinha");
    // objetoRetornado.order("agua");
    // objetoRetornado.order("sopa");
    // objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    const objeto6 = createMenu({ food: {'coxinha': 3.90, 'sopa': 9.9, 'sashimi': 10.90}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    objeto6.order('coxinha');
    objeto6.order('agua');
    objeto6.order('sopa');
    objeto6.order('sashimi');
    const input6 = objeto6.consumption;
    const output6 = ['coxinha', 'agua', 'sopa', 'sashimi'];

    assert.deepStrictEqual(input6, output6);
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    const objeto7 = createMenu({ food: {'coxinha': 3.90, 'sopa': 9.9, 'sashimi': 10.90}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    objeto7.order('coxinha');
    objeto7.order('agua');
    objeto7.order('coxinha');
    const input7 = objeto7.consumption;
    const output7 = ['coxinha', 'agua', 'coxinha'];

    assert.deepStrictEqual(input7, output7);
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    const objeto8 = createMenu({ food: {'coxinha': 3.90, 'sopa': 9.90, 'sashimi': 10.90}, drink: {'agua': 3.90, 'cerveja': 6.90} });
    objeto8.order('coxinha');
    objeto8.order('agua');
    objeto8.order('coxinha');
    const input8 = objeto8.pay();
    const output8 = 11.7;

    assert.deepStrictEqual(input8, output8);
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
