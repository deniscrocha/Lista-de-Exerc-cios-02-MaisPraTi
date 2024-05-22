/*Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/


const prompt = require("prompt-sync")();

function exercicio09(){
    let condicaoFimDoPrograma = true;
    let funcionarios = Array();
    let salarioMasculino = 0;
    let salarioFeminino= 0;
    while(condicaoFimDoPrograma){
        function construtorFuncionario(salario, sexo){
            return{
                salario: salario,
                sexo: sexo
            }
        }
        salario = Number(prompt("Digite o salario do funcionario: "));
        sexo = prompt("(M) = Masculino, (F) = Feminino\nDigite o sexo do funcionario: ")
        funcionarios.push(construtorFuncionario(salario, sexo));
        console.log(funcionarios);
        continuar = Number(prompt("Digite 1 se você deseja continuar, para sair apenas digite qualquer outra coisa \n :"));
        condicaoFimDoPrograma = continuar === 1 ? true : false; 
    }
    funcionarios.forEach((elementos, indice) =>{
        if(elementos.sexo === "M"){
            salarioMasculino += elementos.salario;
        } else if(elementos.sexo === "F"){
            salarioFeminino += elementos.salario;
        }
    })
    console.log(`O total pago para funcinarios do sexo masculino foi: R$${salarioMasculino}`);
    console.log(`O total pago para funcinarios do sexo feminino foi: R$${salarioFeminino}`);
}

exercicio09();
