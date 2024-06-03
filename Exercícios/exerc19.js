/*
Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require("prompt-sync")();

function exercicio19() {
  function fabricaDeHorarios(hora, minuto, segundo) {
    return {
      hora: hora,
      minuto: minuto,
      segundo: segundo,
    };
  }
  let horarios = Array();
  for (let i = 0; i < 5; i++) {
    let hora;
    let minuto;
    let segundo;

    while (true) {
      hora = Number(prompt(`Digite a hora(HH) do horário ${i + 1}: `));
      if (isNaN(hora)) {
        console.log("A hora não é valida!");
      } else if (hora < 0) {
        console.log("A hora não pode ser negativo!");
      } else if (hora > 24) {
        console.log("A hora não pode ser maior que 24!");
      } else {
        break;
      }
    }
    while (true) {
      minuto = Number(prompt(`Digite o minuto(MM) do horário ${i + 1}: `));
      if (isNaN(minuto)) {
        console.log("O minuto não é valido!");
      } else if (minuto < 0) {
        console.log("O minuto não pode ser negativo!");
      } else if (minuto > 60) {
        console.log("O minuto não pode ser maior que 60!");
      } else {
        break;
      }
    }
    while (true) {
      segundo = Number(prompt(`Digite o segundo(SS) do horário ${i + 1}: `));
      if (isNaN(segundo)) {
        console.log("O segundo não é valido!");
      } else if (segundo < 0) {
        console.log("O segundo não pode ser negativo!");
      } else if (segundo > 60) {
        console.log("O segundo não pode ser maior que 60!");
      } else {
        break;
      }
    }
    horarios.push(fabricaDeHorarios(hora, minuto, segundo));
  }
  horarios.forEach((horario) => {
    console.log(`${horario.hora > 10 ? horario.hora : "0" + horario.hora}.
        ${horario.minuto > 10 ? horario.minuto : "0" + horario.minuto}.
        ${horario.segundo > 10 ? horario.segundo : "0" + horario.segundo}`);
  });
}

module.exports = { exercicio19 }
exercicio19();
