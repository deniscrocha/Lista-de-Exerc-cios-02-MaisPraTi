/*
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

const prompt = require("prompt-sync")();

function exercicio41(){
    function solucao(objeto){
        console.log(`A idade no objeto é: ${objeto.idade}`);
        email = prompt("Digite o email para armazenar no objeto: ");
        objeto.email = email;
        console.log(objeto);
    }

    let objetoTeste = {
        nome: "Dênis",
        idade: 23
    }

    solucao(objetoTeste);
}

exercicio41();