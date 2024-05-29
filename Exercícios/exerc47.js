/*
Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

function exercicio47(){
    function solucao(entrada, funcaoFornecida){
        let resposta = 0;
        switch(funcaoFornecida){
            case "adicao":
                for(let valor in entrada){
                    resposta += entrada[valor];
                }
                return resposta;
            case "divisao":
                for(let valor in entrada){
                    if(resposta === 0){
                        resposta = entrada[valor];
                    } else{
                    resposta /= entrada[valor];
                }
                }
                return resposta;
            case "multiplicacao":
                for(let valor in entrada){
                    if(resposta === 0){
                        resposta = entrada[valor];
                    } else{
                        resposta *= entrada[valor];
                    }
                }
                return resposta;
            case "subtracao":
                for(let valor in entrada){
                    if(resposta === 0){
                        resposta = entrada[valor];
                    }else{
                    resposta -= entrada[valor];
                    }
                }
                return resposta;
            default:
                console.log("Função fornecida não encontrada!")
        }
    }

    let objetoDeEntrada = {valorUm: 22, valorDois:3}; 
    console.log(solucao(objetoDeEntrada, "subtracao"));
}

exercicio47();
