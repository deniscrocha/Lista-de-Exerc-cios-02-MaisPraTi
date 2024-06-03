/*
Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/

function exercicio29() {
  function solucao(matriz) {
    let somaLinha = 0;
    let somaColuna = 0;
    let somaDiagonal = 0;
    let somaMatriz = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (j === 4) {
          somaLinha += matriz[i][j];
        }
        if (i === 2) {
          somaColuna += matriz[i][j];
        }
        if (i === j) {
          somaDiagonal += matriz[i][j];
        }
        somaMatriz += matriz[i][j];
      }
    }
    console.log(`A soma da linha 4 de M é ${somaLinha}`);
    console.log(`A soma da coluna 2 de M é ${somaColuna}`);
    console.log(`A soma da diagonal principal é ${somaDiagonal}`);
    console.log(`E a soma da matriz é ${somaMatriz}`);
  }
  const matrizTeste = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6],
    [5, 4, 3, 2, 1],
    [22, 66, 44, 2, 32],
  ];
  solucao(matrizTeste);
}

module.exports = { exercicio29 }
exercicio29();
