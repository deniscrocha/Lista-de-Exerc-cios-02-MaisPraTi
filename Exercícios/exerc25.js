/*
Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

function exercicio25() {
  function solucao(matriz) {
    let somasDasColunas = Array();
    for (let i = 0; i < 15; i++) {
      let soma = matriz[i][0];
      for (let j = 1; j < 20; j++) {
        soma += matriz[i][j];
      }
      somasDasColunas.push(soma);
    }
    somasDasColunas.forEach((total, indice) => {
      console.log(
        `A soma total da coluna ${indice + 1} foi de : ${total.toFixed(2)}`,
      );
    });
  }
  let matrizTeste = Array();
  for (let i = 0; i < 15; i++) {
    matrizTeste[i] = Array();
    for (let j = 0; j < 20; j++) {
      matrizTeste[i].push(
        Math.ceil(Math.random() * 1000) -
          1 -
          Math.ceil(Math.random() * 1000) -
          1,
      );
    }
  }
  solucao(matrizTeste);
}

exercicio25();
