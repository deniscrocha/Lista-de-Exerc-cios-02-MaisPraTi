/*
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

function exercicio33() {
  function solucao(matriz) {
    let totalPrincipal = 0;
    let qtdElementosPrincipal = 0;
    let totalSecundaria = 0;
    let qtdElementosSecundaria = 0;
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (i === j) {
          // Diagonal Principal
          totalPrincipal += matriz[i][j];
          qtdElementosPrincipal++;
        }
        if (j === matriz.length - i - 1) {
          //Diagonal Secundaria
          totalSecundaria += matriz[i][j];
          qtdElementosSecundaria++;
        }
      }
    }
    let mediaPrincipal = totalPrincipal / qtdElementosPrincipal;
    let mediaSecundaria = totalSecundaria / qtdElementosSecundaria;
    console.log(
      `A multiplicação entre as médias é: ${mediaPrincipal * mediaSecundaria}`,
    );
  }

  let matrizTeste = Array();
  for (let i = 0; i < 3; i++) {
    matrizTeste[i] = Array();
    for (let j = 0; j < 3; j++) {
      matrizTeste[i].push(Math.ceil(Math.random() * 10));
    }
  }
  solucao(matrizTeste);
}

exercicio33();
