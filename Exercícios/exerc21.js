/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const prompt = require("prompt-sync")();

function exercicio21() {
  function calculo(altura, sexo) {
    if (sexo === "Masculino") {
      return 72.7 * altura - 58;
    } else {
      return 62.1 * altura - 44.7;
    }
  }
  let altura = Number(prompt("Digite a altura: "));
  let sexo = prompt("Digite o sexo ('Masculino' ou 'Feminino'): ");
  console.log(`O seu peso ideal é: ${calculo(altura, sexo).toFixed(2)} Kg!`);
}

module.exports = { exercicio21 }
exercicio21();
