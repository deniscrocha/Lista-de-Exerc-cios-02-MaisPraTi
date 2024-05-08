/*
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/

function exercicio35(){
    function solucao(vetor){
        let vetorPar = Array();
        let vetorImpar = Array();
        
        for(valor of vetor){
            if((valor % 2) === 0){
                if(vetorPar.length<5){
                    vetorPar.push(valor);
                } else{
                    console.log(`Vetor Par está cheio: ${vetorPar}`);
                    vetorPar = Array();
                    vetorPar.push(valor);
                }
            } else{
                if(vetorImpar.length<5){
                    vetorImpar.push(valor);
                } else{
                    console.log(`Vetor Impar está cheio: ${vetorImpar}`);
                    vetorImpar = Array();
                    vetorImpar.push(valor);
                }
            }
        }
        console.log(`Vetor Par final: ${vetorPar}`);
        console.log(`Vetor Impar final: ${vetorImpar}`);
    }

    let vetorDeValores = Array();
    for(let i = 0; i<30; i++){
        vetorDeValores.push(Math.ceil(Math.random()*99));
    }
    solucao(vetorDeValores);
}

exercicio35();