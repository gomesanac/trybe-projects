/* eslint-disable no-let */
/* eslint-disable block-scoped-let */
/* eslint-disable no-redeclare */
/* eslint-disable lets-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  const myArray = [];
  for (let COUNTER1 = 0; COUNTER1 <= 3; COUNTER1 += 1) {
    myArray.push(COUNTER1);
    for (let COUNTER2 = 2; COUNTER2 <= 3; COUNTER2 += 1) {
      myArray.push(COUNTER2);
    }
  }
  return myArray;
};

module.exports = myCounter;
