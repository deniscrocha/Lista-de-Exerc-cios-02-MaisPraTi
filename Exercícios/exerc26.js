/*
Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/

function exercicio26() {
  const matrizA = [
    [1, 32, 2, 5, 12],
    [23, 4, 5, 99, 24],
    [-1, 44, 23, 4, 13],
  ];
  const matrizB = [
    [7, 654, 12, 4, 66],
    [4, 23, 15, 5, 23],
    [7, 7, 7, 7, 60],
  ];
  function solucao(matrizA, matrizB) {
    let matrizProduto = Array();
    for (let i = 0; i < 3; i++) {
      matrizProduto[i] = Array();
      for (let j = 0; j < 5; j++) {
        matrizProduto[i].push(matrizA[i][j] * matrizB[i][j]);
      }
    }
    return matrizProduto;
  }

  console.log(solucao(matrizA, matrizB));
}

module.exports = { exercicio26 }
exercicio26();
