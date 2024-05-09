/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

function exercicio43(){
    function solucao(obj1, obj2){
        let obj3 = obj1;
        for(campo in obj2){
            obj3[campo] = obj2[campo];
        }
        console.log(obj3);
    }
    objTeste1 = {nome: "Dênis", sobrenome:"Rocha", idade:23};
    objTeste2 = {telefone: "Motorola", sobrenome:"Chaves", modeloTelefone:"Edge 20"};
    solucao(objTeste1, objTeste2);
}

exercicio43();