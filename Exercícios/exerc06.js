/*Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

const prompt = require("prompt-sync")();

function exercicio06() {
  console.log("Eu vou sortear um número de 1 a 5 e você deverá adivinhar!");
  let condicaoFimDeJogo = false;
  let numeroAleatorio = Math.ceil(Math.random() * 5);
  let numeroTentativas = 1;
  while (!condicaoFimDeJogo) {
    let jogada = Number(prompt("Digite sua tentativa: "));
    if (jogada === numeroAleatorio) {
      console.log(`Você Adivinhou em ${numeroTentativas} tentativa(s)!`);
      condicaoFimDeJogo = true;
    } else if (jogada > numeroAleatorio) {
      numeroTentativas++;
      console.log("O número de seua tentativa foi maior que o meu número!");
    } else if (jogada < numeroAleatorio) {
      numeroTentativas++;
      console.log("O número de seua tentativa foi menor que o meu número!");
    } else {
      console.log("Sua jogada não foi aceita!");
    }
  }
}

exercicio06();
