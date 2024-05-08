/*
Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/

function exercicio32(){
    function solucao(matriz){
        let matrizDividido = Array();
        for(let i = 0; i<matriz.length; i++){
            matrizDividido[i] = Array();
            let maiorNumeroLinha = matriz[i][0];
            for(let j = 1; j < matriz[i].length; j++){
                if(matriz[i][j] > maiorNumeroLinha){
                    maiorNumeroLinha = matriz[i][j];
                }
            }
            for(let k = 0; k < matriz[i].length; k++){
                let numeroDivido = matriz[i][k] / maiorNumeroLinha;
                matrizDividido[i].push(numeroDivido.toFixed(2));
            }
        }
        console.log("Matriz Lida: ")
        console.log(matriz);
        console.log("Matriz Dividida: ")
        console.log(matrizDividido);
    }
    let matrizTeste = Array();
    for(let i = 0; i<12;i++){
        matrizTeste[i] = Array();
        for(let j = 0; j<13;j++){
            matrizTeste[i].push(Math.ceil(Math.random()*10));
        }
    }
    solucao(matrizTeste);
}

exercicio32();