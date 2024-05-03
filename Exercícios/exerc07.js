const prompt = require("prompt-sync")();

function exercicio07(){
    let tipoDeCarro;
    while(!tipoDeCarro){
        console.log("1 = Carro de Luxo, 2 = Carro Popular");
        let x = Number(prompt("Digite o tipo  de carro alugado: "));
        if(x === 1 || x === 2){
            tipoDeCarro = x;
        } else{
            console.log("Entrada não reconhecida, porfavor digitar novamente!");
        }
    }
    let kmPercorrido;
    while(!kmPercorrido){
        let x = Number(prompt("Digite quantos Km forram percorrido: "))
        if(!isNaN(x)){
            kmPercorrido = x;
        } else{
            console.log("Entrada não reconhecida, porfavor digitar novamente!")
        }
    }
    if(tipoDeCarro === 1){
        if(kmPercorrido <= 200){
            console.log(`Você pagará R$150.00 pelo aluguel do carro e R$${kmPercorrido*0.3} pelos Kms percorridos!`)
            console.log(`valor final: R$ ${150+(kmPercorrido*0.3)}`)
        } else if(kmPercorrido > 200){
            console.log(`Você pagará R$150.00 pelo aluguel do carro e R$${kmPercorrido*0.25} pelos Kms percorridos!`)
            console.log(`valor final: R$ ${150+(kmPercorrido*0.25)}`)
        }
    } else if(tipoDeCarro === 2){
        if(kmPercorrido <= 100){
            console.log(`Você pagará R$90.00 pelo aluguel do carro e R$${kmPercorrido*0.2} pelos Kms percorridos!`)
            console.log(`valor final: R$ ${90+(kmPercorrido*0.2)}`)
        } else if(kmPercorrido > 100){
            console.log(`Você pagará R$90.00 pelo aluguel do carro e R$${kmPercorrido*0.1} pelos Kms percorridos!`)
            console.log(`valor final: R$ ${90+(kmPercorrido*0.1)}`)
        }
    }

}

exercicio07();