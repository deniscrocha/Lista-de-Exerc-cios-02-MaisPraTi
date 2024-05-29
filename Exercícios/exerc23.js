/*
Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

function exercicio23() {
  let matriz = Array(7);
  let counter = 0;
  for (let i = 0; i < 7; i++) {
    matriz[i] = Array();
    for (let j = 0; j < 7; j++) {
      if (j === counter) {
        matriz[i][j] = 1;
      } else {
        matriz[i][j] = 0;
      }
    }
    counter++;
  }
  for (let i of matriz) {
    console.log(i.join(" "));
  }
}

exercicio23();
