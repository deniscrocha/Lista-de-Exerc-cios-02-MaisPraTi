/*
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

function exercicio37(){
    function solucao(vetorGabarito, matrizRespostasAlunos){
        let vetorAcertos = Array();
        for(let i = 0; i<matrizRespostasAlunos.length;i++){
            let contadorAcertos = 0;
            for(let j = 0; j<matrizRespostasAlunos[i].length;j++){
                if(matrizRespostasAlunos[i][j] === vetorGabarito[j]){
                    contadorAcertos++;
                }
            }
            vetorAcertos.push(contadorAcertos);
        }
        vetorAcertos.forEach((acertos, aluno) => {
            if(acertos >= 12){
                console.log(`Aluno: ${aluno+1} foi APROVADO!`);
            } else{
                console.log(`Aluno: ${aluno+1} foi REPROVADO!`);
            }
        })
    }
    let gabarito = [
        'D','B','C','A','A','A','A','D','A','D',
        'B','C','B','A','C','D','C','A','B','C'
    ]
    let respostasAlunos = Array();
    for(let i = 0; i<50;i++){
        respostasAlunos[i] = Array()
        for(let j =0; j<20;j++){
            let resposta = Math.ceil(Math.random()*4);
            switch(resposta){
                case 1:
                    respostasAlunos[i].push('A');
                    break;
                case 2:
                    respostasAlunos[i].push('B');
                    break;
                case 3:
                    respostasAlunos[i].push('C');
                    break;
                case 4:
                    respostasAlunos[i].push('D');
                    break;
            }
        }
    }
    solucao(gabarito,respostasAlunos)
}

exercicio37();