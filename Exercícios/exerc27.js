/*
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/

function exercicio27() {
  function solucao(matriz, valorA) {
    let vetor = Array();
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        vetor.push(matriz[i][j] * valorA);
      }
    }
    console.log(vetor);
  }
  let matrizExemplo = [
    [1, 2, 3, 4, 5, 6],
    [33, 22, 11, 84, 23, 563],
    [12, 44, 66, 77, 52, 7],
    [32, 0, 57, 13, 4, 75],
    [88, 14, 14, 102, 42, 745],
    [92, 11, 12, 712, 66, 9],
  ];
  solucao(matrizExemplo, 10);
}
module.exports = { exercicio27 }
exercicio27();
