/*Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

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

module.exports = { exercicio03 }
exercicio03();
