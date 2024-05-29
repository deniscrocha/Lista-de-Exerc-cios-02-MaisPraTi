/*
Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

function exercicio44() {
  function solucao(objeto) {
    let camposString = 0;
    for (let campo in objeto) {
      if (typeof objeto[campo] === "string") {
        camposString++;
      }
    }
    console.log(`Existem no objeto ${camposString} propriedades do tipo`);
  }
  let objetoTeste = {
    nome: "Dênis",
    sobrenome: "Rocha",
    idade: 23,
    cidade: "Santa Maria",
  };
  solucao(objetoTeste);
}

exercicio44();
