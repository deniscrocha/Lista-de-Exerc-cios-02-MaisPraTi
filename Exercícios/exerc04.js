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

exercicio04();