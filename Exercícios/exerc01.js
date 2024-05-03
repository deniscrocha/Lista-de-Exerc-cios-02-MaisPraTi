prompt = require("prompt-sync")();

function exercicio01(){
    let cigarroFumadoPorDia;
    let anosFumado;
    let validacaoNumero = false;

    function checagemNumero(x){
        if(isNaN(x)){
            console.log("Número não valido");
            return false;
        }
        return true;
    }



    while(!validacaoNumero){
        cigarroFumadoPorDia = Number(prompt("Digite cigarros você fuma por dia: "));
        validacaoNumero = checagemNumero(cigarroFumadoPorDia);
    }
    validacaoNumero = false;
    while(!validacaoNumero){
        anosFumado = Number(prompt("Digite a Quantos anos você fuma: "));
        validacaoNumero = checagemNumero(anosFumado);
    }

    let calculo = (cigarroFumadoPorDia*10)*(anosFumado*365);
    let diaPerdidos = (calculo/60)/24;

    console.log(`Você perdeu ${diaPerdidos.toFixed(2)} dias de vida!`);
}

exercicio01();