const prompt = require("prompt-sync")();

function exercicio03(){
    let distanciaPercorrida = Number(prompt("Digite a distância em KM que você deseja percorrer: "));
    if(isNaN(distanciaPercorrida)){
        console.log("Distância Invalida!");
    }else if(distanciaPercorrida > 200){
        console.log(`o preço da viagem vai ficar: R$${distanciaPercorrida *0.45}`);
    }else{
        console.log(`o preço da viagem vai ficar: R$${distanciaPercorrida *0.5}`);
    }
}

exercicio03();