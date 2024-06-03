/*Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

const prompt = require("prompt-sync")();

function exercicio07() {
  let tipoDeCarro;
  while (!tipoDeCarro) {
    console.log("1 = Carro de Luxo, 2 = Carro Popular");
    let x = Number(prompt("Digite o tipo  de carro alugado: "));
    if (x === 1 || x === 2) {
      tipoDeCarro = x;
    } else {
      console.log("Entrada não reconhecida, porfavor digitar novamente!");
    }
  }
  let kmPercorrido;
  while (!kmPercorrido) {
    let x = Number(prompt("Digite quantos Km forram percorrido: "));
    if (!isNaN(x)) {
      kmPercorrido = x;
    } else {
      console.log("Entrada não reconhecida, porfavor digitar novamente!");
    }
  }
  if (tipoDeCarro === 1) {
    if (kmPercorrido <= 200) {
      console.log(
        `Você pagará R$150.00 pelo aluguel do carro e R$${kmPercorrido * 0.3} pelos Kms percorridos!`,
      );
      console.log(`valor final: R$ ${150 + kmPercorrido * 0.3}`);
    } else if (kmPercorrido > 200) {
      console.log(
        `Você pagará R$150.00 pelo aluguel do carro e R$${kmPercorrido * 0.25} pelos Kms percorridos!`,
      );
      console.log(`valor final: R$ ${150 + kmPercorrido * 0.25}`);
    }
  } else if (tipoDeCarro === 2) {
    if (kmPercorrido <= 100) {
      console.log(
        `Você pagará R$90.00 pelo aluguel do carro e R$${kmPercorrido * 0.2} pelos Kms percorridos!`,
      );
      console.log(`valor final: R$ ${90 + kmPercorrido * 0.2}`);
    } else if (kmPercorrido > 100) {
      console.log(
        `Você pagará R$90.00 pelo aluguel do carro e R$${kmPercorrido * 0.1} pelos Kms percorridos!`,
      );
      console.log(`valor final: R$ ${90 + kmPercorrido * 0.1}`);
    }
  }
}

module.exports = { exercicio07 }
exercicio07();
