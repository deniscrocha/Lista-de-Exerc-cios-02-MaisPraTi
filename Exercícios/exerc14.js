/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

const prompt = require("prompt-sync")();

function exercicio14(){
    let nomes = Array();
    for(let i = 0; i<7; i++){
        nomes.push(prompt(`Digite o nome da pessoa número ${i+1}: `));
    }
    for(let i = nomes.length; i!=0; i--){
        console.log(nomes[i-1]);
    }
}

exercicio14();