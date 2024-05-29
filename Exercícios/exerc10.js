/*Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

const prompt = require("prompt-sync")();

function exercicio10() {
  let continuar = true;
  let numeros = Array();
  do {
    let numero = Number(prompt("Digite um número: "));
    if (!isNaN(numero)) {
      numeros.push(numero);
    } else {
      console.log("Número não aceito");
    }
    let desejo = Number(prompt("Digite (1) se você deseja continuar: "));
    continuar = desejo === 1 ? true : false;
  } while (continuar);
  let somatorio = 0;
  let menorNumero = numeros[0];
  let pares = 0;
  for (let i = 0; i < numeros.length; i++) {
    somatorio += numeros[i];
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
    if (numeros[i] % 2 === 0) {
      pares++;
    }
  }
  let media = (somatorio / numeros.length).toFixed(2);

  console.log(`O somatório entre todos os numeros foi:${somatorio}!`);
  console.log(`O menor número foi: ${menorNumero}!`);
  console.log(`Foi encontrado ${pares} números pares.`);
  console.log(`A média foi: ${media}!`);
}
exercicio10();
