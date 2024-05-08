/*
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/

function exercicio31(){
    function solucao(inteiroA, matriz){
        let contadorDeIgual = 0;
        let matrizDiferente = Array();
        for(let i = 0; i<matriz.length; i++){
            matrizDiferente[i] = Array();
            for(let j = 0; j < matriz[i].length;j++){
                if(matriz[i][j] === inteiroA){
                    contadorDeIgual++;
                } else{
                    matrizDiferente[i].push(matriz[i][j]);
                }
            }
        }
        console.log(`Tiveram ${contadorDeIgual} números igual ao inteiro ${inteiroA}`);
        console.log(matrizDiferente);
    }

    let matrizTeste = Array();
    for(let i = 0; i<30;i++){
        matrizTeste[i] = Array();
        for(let j = 0; j<30;j++){
            matrizTeste[i].push(Math.ceil(Math.random()*10));
        }
    }
    solucao(2, matrizTeste);
}

exercicio31();