/*
Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

function exercicio12(){
    fibonacci = Array(0, 1);
    for(let i = 2; i<10;i++){
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    }
    counter = 1;
    fibonacci.forEach(elemento => {
        console.log(`${counter}: ${elemento}`);
        counter++
    })
}

exercicio12();