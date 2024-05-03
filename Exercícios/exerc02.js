const prompt = require("prompt-sync")();

function exercicio02(){
    let velocidade = Number(prompt("Digite qual a velocidade do carro: "));

    if(velocidade>80){
        let multa = (velocidade-80)*5;
        console.log(`Você foi multado em: R$${multa.toFixed(2)}`);
    } else if(isNaN(velocidade)){
        console.log("Valor inserido não pode ser lido!")
    }
}

exercicio02()