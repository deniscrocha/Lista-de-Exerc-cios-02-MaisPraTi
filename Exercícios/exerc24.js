/*
Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

function exercicio24() {
  function solucao(matriz) {
    let vetorC = Array();
    for (let i = 0; i < 6; i++) {
      let contadorNegativo = 0;
      for (let j = 0; j < 8; j++) {
        if (matriz[i][j] < 0) {
          contadorNegativo++;
        }
      }
      vetorC.push(contadorNegativo);
    }
    vetorC.forEach((numeroNegativo, indice) => {
      console.log(
        `A quantidade de elementos negativos na linha ${indice + 1} foi de: ${numeroNegativo}`,
      );
    });
  }
  let matrizTeste = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [-10, 82, 44, 444, 4444, 6, -2, -8],
    [99, 999, 9999, 99999, 999999, -9, -99, -999],
    [7, 6, 5, 4, 3, 2, 1, 0],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  solucao(matrizTeste);
}

exercicio24();
