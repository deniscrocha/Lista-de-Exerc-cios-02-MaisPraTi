/*
Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

function exercicio16(){
    let vetorAleatorio = Array();
    for(let i = 0; i<20; i++){
        vetorAleatorio.push(Math.ceil(Math.random()*99));
    }
    console.log(vetorAleatorio);
    function bubbleSort(vetor){
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i] > vetor[i+1]){
                let numeroUm = vetor[i];
                let numeroDois = vetor[i+1];
                vetor[i] = numeroDois;
                vetor[i+1] = numeroUm;
            }
        }
    }
    for(let j = 0; j < vetorAleatorio.length; j++){
        bubbleSort(vetorAleatorio);
    }
    console.log(vetorAleatorio);
}

exercicio16();