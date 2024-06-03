/*
Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

const prompt = require("prompt-sync")();

function exercicio11() {
  let Termo = Number(prompt("Digite o primeiro termo da PA: "));
  let razao = Number(prompt("Digite a razão da PA: "));
  let soma = Termo;
  for (let i = 0; i < 10; i++) {
    Termo += razao;
    console.log(i + 1, ": ", Termo);
    soma += Termo;
  }
  console.log(`O valor final da soma dos valores da sequência é: ${soma} `);
}

module.exports = { exercicio11 }
exercicio11();
