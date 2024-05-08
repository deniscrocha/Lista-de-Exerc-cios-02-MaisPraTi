/*
Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/

function exercicio34(){
    function solucao(matriz){
        let matrizMultiplicada = Array();
        for(let i = 0; i<matriz.length;i++){
            matrizMultiplicada[i] = Array();
            let diagonalPrincipal;
            for(let j = 0; j < matriz[i].length; j++){
                if(j === i){
                    diagonalPrincipal = matriz[i][j];
                }
            }
            for(let k = 0; k < matriz[i].length; k++){
                matrizMultiplicada[i].push((matriz[i][k]*diagonalPrincipal).toFixed(2));
            }
        }
        console.log(matrizMultiplicada);
    }

    let matrizTeste = Array();
    for(let i = 0; i<50;i++){
        matrizTeste[i] = Array();
        for(let j = 0; j<50; j++){
            matrizTeste[i].push((Math.random()*100).toFixed(2));
        }
    }
    solucao(matrizTeste);
}

exercicio34();