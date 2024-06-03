/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

function exercicio42() {
  function solucao(objeto) {
    let objetoFinal = {};
    for (let campo in objeto) {
      if (Array.isArray(objeto[campo])) {
        objetoFinal[campo] = objeto[campo];
      }
    }
    console.log(objetoFinal);
  }

  let objetoTeste = {
    nome: "Joãozinho",
    idade: 32,
    tecnologias: ["Java", "JavaScript", "SQL", "mongoDB"],
    telefone: ["Motorola", "Iphone"],
  };
  solucao(objetoTeste);
}

module.exports = { exercicio42 }
exercicio42();
