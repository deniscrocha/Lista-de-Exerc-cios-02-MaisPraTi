/*
Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h
-1
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require("prompt-sync")();

function exercicio02() {
  let velocidade = Number(prompt("Digite qual a velocidade do carro: "));

  if (velocidade > 80) {
    let multa = (velocidade - 80) * 5;
    console.log(`Você foi multado em: R$${multa.toFixed(2)}`);
  } else if (isNaN(velocidade)) {
    console.log("Valor inserido não pode ser lido!");
  } else {
    console.log("Não foi multado!");
  }
}

exercicio02();
