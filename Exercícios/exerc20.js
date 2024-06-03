/*
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

const prompt = require("prompt-sync")();

function exercicio20() {
  function fabricaDeFuncionario(matricula, nome, salarioBruto, deducaoInss) {
    return {
      matricula: matricula,
      nome: nome,
      salarioBruto: salarioBruto,
      deducaoInss: deducaoInss,
      salarioLiquido: salarioBruto - deducaoInss,
    };
  }
  let vetorDeFuncionarios = Array();
  let condicaoDeExecucao = true;
  while (condicaoDeExecucao) {
    console.log("Vamos Cadastrar um Funcionario!");
    let matricula = prompt("Digite a matricula do funcionario: ");
    let nome = prompt("Digite o nome do funcionario: ");
    let salarioBruto = prompt("Digite o salario bruto do funcionario: ");
    vetorDeFuncionarios.push(
      fabricaDeFuncionario(
        matricula,
        nome,
        salarioBruto,
        (salarioBruto * 12) / 100,
      ),
    );
    prompt(
      "Deseja adicionar outro funcionario('S' para adicionar outro, qualquer outra tecla para sair): ",
    ) === "S"
      ? (condicaoDeExecucao = true)
      : (condicaoDeExecucao = false);
  }
  vetorDeFuncionarios.forEach((funcionario) => {
    console.log(`Contra-Cheque ${funcionario.nome}
        matricula:${funcionario.matricula},
        nome: ${funcionario.nome},
        Salário bruto: ${funcionario.salarioBruto},
        Dedução INSS: ${funcionario.deducaoInss},
        Salário Líquido: ${funcionario.salarioLiquido}`);
  });
}

module.exports = { exercicio20 }
exercicio20();
