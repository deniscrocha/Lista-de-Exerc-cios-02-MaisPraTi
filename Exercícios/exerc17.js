/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const prompt = require("prompt-sync")();

function exercicio17() {
  let vetorNomes = Array();
  let vetorIdades = Array();

  for (let i = 0; i < 9; i++) {
    vetorNomes.push(prompt(`Digite o nome da pessoa número ${i + 1}: `));
    while (true) {
      let idade = Number(prompt(`Digite a idade da pessoa número: ${i + 1}: `));
      if (!isNaN(idade)) {
        vetorIdades.push(idade);
        break;
      }
      console.log("Idade invalida!");
    }
  }
  let vetorMenorDeIdade = Array();
  for (let i = 0; i < vetorIdades.length; i++) {
    if (vetorIdades[i] < 18) {
      vetorMenorDeIdade.push({ nome: vetorNomes[i], idade: vetorIdades[i] });
    }
  }
  console.log(vetorMenorDeIdade);
}

exercicio17();
