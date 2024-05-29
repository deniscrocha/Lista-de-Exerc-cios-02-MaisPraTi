/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

function exercicio45() {
  function solucao(vetor) {
    let objeto = {};
    vetor.forEach((elemento) => {
      let campoExistente = false;
      for (let campo in objeto) {
        if (campo === elemento) {
          campoExistente = true;
          objeto[campo] += 1;
        }
      }
      if (!campoExistente) {
        objeto[elemento] = 1;
      }
    });
    console.log(objeto);
  }

  let vetorTeste = [
    "Ubuntu", "Gleam", "Prolog",
    "Lua", "Gleam", "Java",
    "JavaScript", "Gleam", "MongoDB",
    "Julia", "Python", "SQL",
    "Prolog", "JavaScript", "Lua",
    "Prolog", "Debian", "ElementaryOS",
    "Gleam", "Rust", "Rust",
  ];

  solucao(vetorTeste);
}

exercicio45();
