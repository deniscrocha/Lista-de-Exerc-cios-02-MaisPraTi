/*
Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

function exercicio36() {
  function solucao(vetorNumerosCertos, matrizApostadores) {
    let vetorAcertos = Array();
    for (let i = 0; i < matrizApostadores.length; i++) {
      let numeroAcertos = 0;
      for (let j = 0; j < matrizApostadores[i].length; j++) {
        for (let k = 0; k < vetorNumerosCertos.length; k++) {
          if (matrizApostadores[i][j] === vetorNumerosCertos[k]) {
            numeroAcertos++;
          }
        }
      }
      vetorAcertos.push({ idApostador: i, numeroAcertos: numeroAcertos });
    }
    vetorAcertos.forEach((apostador) => {
      if (apostador.numeroAcertos === 13) {
        console.log(`Parabéns, tu foi o ganhador ${apostador.idApostador}!`);
      } else {
        console.log(apostador);
      }
    });
  }
  let apostadores = Array();
  let numerosCertos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  for (let i = 0; i < 100; i++) {
    apostadores[i] = Array();
    for (let j = 0; j < 20; j++) {
      let numeroJaExistente = false;
      let numeroAleatorio = Math.ceil(Math.random() * 25);
      for (let k = 0; k < apostadores[i].length; k++) {
        if (apostadores[i][k] === numeroAleatorio) {
          numeroJaExistente = true;
        }
      }
      if (numeroJaExistente) {
        j--;
      } else {
        apostadores[i].push(numeroAleatorio);
      }
    }
  }

  solucao(numerosCertos, apostadores);
}

module.exports = { exercicio36 }
exercicio36();
