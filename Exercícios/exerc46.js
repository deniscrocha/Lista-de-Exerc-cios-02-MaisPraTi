/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

function exercicio46(){
    function solucao(vetor){
        let vendasTotal = {};
        for(let i=0; i<vetor.length;i++){
            let vendedorExiste = false;
            for(vendas in vendasTotal){
                if(vendas === vetor[i].vendedor){
                    vendedorExiste = true;
                }
            }
            if(!vendedorExiste){
                vendasTotal[vetor[i].vendedor] = vetor[i].valor;
            } else{
                vendasTotal[vetor[i].vendedor] += vetor[i].valor;
            }
        }
        console.log(vendasTotal);
    }

    let vetorExemplo = [
        {vendedor:"Denis", valor:350},
        {vendedor:"Rafaella", valor:270},
        {vendedor:"Jaques", valor:900},
        {vendedor:"Giovana", valor:1200},
        {vendedor:"Denis", valor:715},
        {vendedor:"Denis", valor:350},
        {vendedor:"Jaques", valor:800},
        {vendedor:"Rafaella", valor:600},
        {vendedor:"Rafaella", valor:600},
        {vendedor:"Denis", valor:300},
    ]

    solucao(vetorExemplo);
}

exercicio46();