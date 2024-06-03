/*
Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/

const prompt = require("prompt-sync")();

function exercicio15() {
  let numeros = Array();
  for (let i = 0; i < 10; i++) {
    numeros.push(Number(prompt(`Digite o número posição ${i + 1}: `)));
  }
  numeros.forEach((elementos, indice) => {
    if (elementos % 2 === 0) {
      console.log(
        `O número ${elementos} é par e foi guardado na posição: ${indice + 1}`,
      );
    }
  });
}

module.exports = { exercicio15 }
exercicio15();
