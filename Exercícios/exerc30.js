/*
Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

function exercicio30() {
  function solucao(matriz) {
    let vetorSL = Array();
    let vetorSC = Array();
    for (let i = 0; i < 5; i++) {
      let somaLinha = 0;
      for (let j = 0; j < 5; j++) {
        somaLinha += matriz[i][j];
        if (!vetorSC[j]) {
          vetorSC[j] = matriz[i][j];
        } else {
          vetorSC[j] += matriz[i][j];
        }
      }
      vetorSL.push(somaLinha);
    }
    console.log(`Matriz = ${matriz}.`);
    console.log(`Vetor SL = ${vetorSL}.`);
    console.log(`Vetor SC = ${vetorSC}.`);
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

exercicio30();
