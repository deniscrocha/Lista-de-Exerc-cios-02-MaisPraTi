/*
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

function exercicio48() {
  function solucao(inventarioLojaA, inventarioLojaB) {
    let inventarioCombinado = inventarioLojaA;
    for (let item in inventarioLojaB) {
      let itemExistente = false;
      for (let elemento in inventarioCombinado) {
        if (item === elemento) {
          itemExistente = true;
          inventarioCombinado[elemento] += inventarioLojaB[item];
        }
      }
      if (!itemExistente) {
        inventarioCombinado[item] = inventarioLojaB[item];
      }
    }
    console.log(inventarioCombinado);
  }

  let inventarioTesteA = {
    papelHigienico: 22,
    uva: 12,
    chocolate: 2,
    bolacha: 14,
    bergamota: 10,
    caderno: 5,
    lapis: 12,
    caneta: 8,
  };
  let inventarioTesteB = {
    uva: 4,
    chocolate: 32,
    chaveiro: 4,
    pao: 32,
    televisao: 2,
    caderno: 12,
    lapis: 2,
    caneta: 3,
    borracha: 5,
  };
  solucao(inventarioTesteA, inventarioTesteB);
}

exercicio48();
