/*Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

prompt = require("prompt-sync")();

function exercicio05(){
    condicaoFimJogo = false;
    while(!condicaoFimJogo){
        let jogadaPc = Math.ceil(Math.random()*(3 - 0)+0);
        let jogadaJogador;
        let jogadaAceita = false;
        while(!jogadaAceita){
            console.log("0= Sair, 1 = Pedra, 2 = Papel, 3 = Tesoura.")
            jogadaJogador = Number(prompt("Digite sua Jogada: "));
            if(isNaN(jogadaJogador)){1
                console.log("Jogada não aceita!");
            } else{
                jogadaAceita = true;
            }
        }
        jogadaAceita = false;
        switch(jogadaJogador){
            case 0:
                console.log("Obrigado por jogar!");
                condicaoFimJogo = true;
                break;
            case 1:
                if(jogadaPc === 1){
                    console.log("Eu joguei Pedra!")
                    console.log("Empate");
                } else if (jogadaPc === 2){
                    console.log("Eu joguei Papel!")
                    console.log("Você venceu!");
                } else if (jogadaPc === 3){
                    console.log("Eu joguei Tesoura!")
                    console.log("Você perdeu!");
                }
                break;
            case 2:
                if(jogadaPc === 1){
                    console.log("Eu joguei Pedra!")
                    console.log("Você venceu!");
                } else if (jogadaPc === 2){
                    console.log("Eu joguei Papel!")
                    console.log("Empate");
                } else if (jogadaPc === 3){
                    console.log("Eu joguei Tesoura!")
                    console.log("Você perdeu!");
                }
                break;
            case 3:
                if(jogadaPc === 1){
                    console.log("Eu joguei Pedra!")
                    console.log("Você perdeu!");
                } else if (jogadaPc === 2){
                    console.log("Eu joguei Papel!")
                    console.log("Você venceu!");
                } else if (jogadaPc === 3){
                    console.log("Eu joguei Tesoura!")
                    console.log("Empate");
                }
                break;
        }
    }
}

exercicio05();
