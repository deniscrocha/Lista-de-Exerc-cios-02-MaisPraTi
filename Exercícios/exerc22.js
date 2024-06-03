/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/
const prompt = require("prompt-sync")();

function exercicio22() {
  let condicaoDeExecucao = true;
  function pessoaFactory(salario, numeroDeFilhos) {
    return {
      salario: salario,
      numeroDeFilhos: numeroDeFilhos,
    };
  }
  let vetorDePessoas = Array();
  while (condicaoDeExecucao) {
    let salarioEntrada = Number(prompt("Digite o salário da pessoa: "));
    let numeroDeFilhosEntrada = Number(
      prompt("Digite o número de filhos da pessoa: "),
    );
    vetorDePessoas.push(pessoaFactory(salarioEntrada, numeroDeFilhosEntrada));
    let continuar = Number(
      prompt("Digite 1 se deseja adicionar mais pessoas: "),
    );
    if (continuar !== 1) {
      condicaoDeExecucao = false;
    }
  }
  let filhosFinal = 0;
  let salarioTotal = 0;
  let salarioAte350 = 0;
  let maiorSalario = 0;
  vetorDePessoas.forEach((pessoa) => {
    salarioTotal += pessoa.salario;
    filhosFinal += pessoa.numeroDeFilhos;
    if (pessoa.salario <= 350) {
      salarioAte350++;
    }
    if (pessoa.salario > maiorSalario) {
      maiorSalario = pessoa.salario;
    }
  });
  console.log(
    `A média de salário por filhos é: ${(salarioTotal / filhosFinal).toFixed(2)}`,
  );
  console.log(
    `a porcentagem de pessoas com salário até R$350,00 é: ${((salarioAte350 * 100) / vetorDePessoas.length).toFixed(2)}%`,
  );
  console.log(`O maior salário foi de: R$${maiorSalario.toFixed(2)}`);
}

module.exports = { exercicio22 }
exercicio22();
