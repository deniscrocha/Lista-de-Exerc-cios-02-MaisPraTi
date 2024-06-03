/*
Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function exercicio49() {
  function solucao(vetorTransacoes) {
    let objetoCategorias = {};
    for (let i = 0; i < vetorTransacoes.length; i++) {
      let valorEncontrado = false;
      for (let valor in objetoCategorias) {
        if (valor === vetorTransacoes[i].categoria) {
          valorEncontrado = true;
        }
      }
      if (!valorEncontrado) {
        let categoria = vetorTransacoes[i].categoria;
        delete vetorTransacoes[i].categoria;
        objetoCategorias[categoria] = Array();
        objetoCategorias[categoria].push(vetorTransacoes[i]);
      } else {
        let categoria = vetorTransacoes[i].categoria;
        delete vetorTransacoes[i].categoria;
        objetoCategorias[categoria].push(vetorTransacoes[i]);
      }
    }
    for (let valor in objetoCategorias) {
      let total = 0;
      for (let transferencia in objetoCategorias[valor]) {
        total += objetoCategorias[valor][transferencia].valor;
      }
      objetoCategorias[valor].push({ subtotal: total });
    }
    return objetoCategorias;
  }

  let transacoes = [
    { id: 1, valor: 500, data: "13/05/2024", categoria: "transferencia" },
    { id: 2, valor: 250, data: "09/05/2024", categoria: "pix" },
    { id: 3, valor: 1250, data: "10/05/2024", categoria: "pagamento" },
    { id: 4, valor: 13, data: "13/05/2024", categoria: "pagamento" },
    { id: 5, valor: 22, data: "13/05/2024", categoria: "pagamento" },
    { id: 7, valor: 55, data: "12/05/2024", categoria: "transferencia" },
    { id: 8, valor: 2500, data: "01/05/2024", categoria: "transferencia" },
    { id: 9, valor: 37, data: "13/05/2024", categoria: "pix" },
  ];
  console.log(solucao(transacoes));
}

module.exports = { exercicio49 }
exercicio49();
