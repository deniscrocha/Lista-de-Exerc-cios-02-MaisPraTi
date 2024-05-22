/*Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/

const prompt = require("prompt-sync")();

function exercicio08(){
    let horasAtividadesFisicas = Number(prompt("Digite quantas horas de atividades físicas você fez no mês: "));
    let pontosHora;
    if(horasAtividadesFisicas <= 10){
        pontosHora = horasAtividadesFisicas * 2;
    }else if(horasAtividadesFisicas > 10 && horasAtividadesFisicas <= 20){
        pontosHora = horasAtividadesFisicas * 5;
    } else if(horasAtividadesFisicas > 20){
        pontosHora = horasAtividadesFisicas * 10;
    } else{
        console.log("Não foi possível ler a quantidade de horas de atividades físicas foram realizadas no mês!")
    }
    console.log(`Você Adquiriu ${pontosHora} pontos, faturando R$${(pontosHora*0.05).toFixed(2)}!`);
}

exercicio08();
