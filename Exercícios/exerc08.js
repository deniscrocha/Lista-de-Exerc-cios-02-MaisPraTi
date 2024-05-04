const prompt = require("prompt-sync")();

function exercicio08(){
    let horasAtividadesFisicas = Number(prompt("Digite quantas horas de atividades físicas você fez no mês: "));
    let pontosHora;
    if(horasAtividadesFisicas < 10){
        pontosHora = horasAtividadesFisicas * 2;
    }else if(horasAtividadesFisicas >= 10 && horasAtividadesFisicas <= 20){
        pontosHora = horasAtividadesFisicas * 5;
    } else if(horasAtividadesFisicas > 20){
        pontosHora = horasAtividadesFisicas * 10;
    } else{
        console.log("Não foi possível ler a quantidade de horas de atividades físicas foram realizadas no mês!")
    }
    console.log(`Você Adquiriu ${pontosHora} pontos, faturando R$${(pontosHora*0.05).toFixed(2)}!`);
}

exercicio08();