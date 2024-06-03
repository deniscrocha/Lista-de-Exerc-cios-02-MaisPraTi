/*
Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

function exercicio39() {
  function solucao(vetor) {
    let vetorB = Array();
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] <= 0 || isNaN(vetor[i])) {
        continue;
      } else {
        vetorB.push(vetor[i]);
      }
    }
    console.log(vetorB);
  }

  let vetorTeste = Array();
  for (let i = 0; i < 100; i++) {
    vetorTeste.push(
      Math.ceil(Math.random() * 20) - Math.ceil(Math.random() * 20),
    );
  }
  solucao(vetorTeste);
}

module.exports = { exercicio39 }
exercicio39();
