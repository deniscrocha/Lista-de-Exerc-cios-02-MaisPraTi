/*
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/

function exercicio40() {
  function solucao(vetorResultado, matrizApostas) {
    let vetorAcertos = Array();
    for (let i = 0; i < matrizApostas.length; i++) {
      let contadorAcertos = 0;
      for (let j = 0; j < matrizApostas[i].length; j++) {
        if (matrizApostas[i][j] === vetorResultado[j]) {
          contadorAcertos++;
        }
      }
      vetorAcertos.push(contadorAcertos);
    }
    vetorAcertos.forEach((acertos, apostador) => {
      if (acertos === 5) {
        console.log(`Apostador: ${apostador} Ganhador!`);
      }
    });
  }

  let resultado = [1, 2, 4, 5, 6];
  let apostas = Array();
  for (let i = 0; i < 50; i++) {
    apostas[i] = Array();
    for (let j = 0; j < 5; j++) {
      let aposta = Math.ceil(Math.random() * 6);
      let igual = false;
      for (let k = 0; k < apostas[i].length; k++) {
        if (aposta === apostas[i][k]) {
          igual = true;
        }
      }
      if (igual) {
        j--;
      } else {
        apostas[i].push(aposta);
      }
    }
  }
  solucao(resultado, apostas);
}

exercicio40();
