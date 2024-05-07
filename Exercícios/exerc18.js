/*
Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

const prompt = require("prompt-sync")();

function exercicio18(){
    function registroFuncionario(nome, cargo, salario){
        return{ nome: nome, cargo: cargo, salario: salario}
    }
    let nome = prompt("Digite o nome do funcinario: ");
    let cargo = prompt("Digite o cargo do funcionario: ");
    let salario = prompt("Digite o salario do funcionario: ");
    let registro = registroFuncionario(nome, cargo, salario);
    console.log(`O nome do funcionario(a) é: ${registro.nome}, o cargo dele(a) é: ${registro.cargo}, e o salario dele(a) é: R$${registro.salario}`);
    console.log(registro);
}

exercicio18();