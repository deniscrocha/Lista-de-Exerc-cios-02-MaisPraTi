/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

const prompt = require("prompt-sync")();


function exercicio04(){
    let retas = Array();
    do{
        let x = Number(prompt(`Digite a reta número ${retas.length+1}: `));
        if(!isNaN(x)){
            retas.push(x);
        }else{
            console.log("Número não aceito");
        }
    }while(retas.length < 3);
    if(((retas[0] + retas[1]) > retas[2]) && ((retas[2] + retas[1]) > retas[0]) && ((retas[0] + retas[2]) > retas[1])){
        console.log("É possível formar um triângulo!");
    } else{
        console.log("Não é possível formar um triângulo!");
    }
}

module.exports = { exercicio04 }
exercicio04();
