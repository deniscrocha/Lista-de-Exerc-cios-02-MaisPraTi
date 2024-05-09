/*
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

const prompt = require("prompt-sync")();

function exercicio38(){
    function solucao(vetor, operacao){
        function soma(vetor){
            let soma = 0;
            for(let i = 0; i<vetor.length; i++){
                soma += vetor[i];
            }
            return soma;
        }
        function produto(vetor){
            produto = vetor[0];
            for(let i = 1; i<vetor.length; i++){
                produto *= vetor[i];
            }
            return produto;
        }
        function media(vetor){
            return soma(vetor) / vetor.length;
        }
        function ordenar(vetor){
            let vetorOrdenado = vetor.sort((a, b) => {
                return a - b;
            })
            return vetorOrdenado;
        }           
        
        switch(operacao){
            case 1:
                console.log(`A soma final dos elementos foi: ${soma(vetor)}`);
                break;
            case 2:
                console.log(`O produto do vetor é: ${produto(vetor)}`);
                break;
            case 3:
                console.log(`A média é: ${media(vetor)}`);
                break;
            case 4:
                console.log(ordenar(vetor));
                break;
            case 5:
                console.log(vetor);
                break;
            default:
                console.log("Operação não identificada!");
        }
    }
    
    
    console.log("1- soma dos elementos; 2- produto dos elementos; 3- média dos elementos;4- ordene os elementos em ordem crescente; 5- mostre o vetor.");
    const variavelIdentificadora = Number(prompt("Digite qual operação você deseja fazer: "));
    
    let vetorTeste = [3, 4, 10, 2, 5 ,6];
    solucao(vetorTeste, variavelIdentificadora);
}

exercicio38();