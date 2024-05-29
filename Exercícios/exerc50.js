/*
Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
- Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
- Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.

2. Funcionalidades:
- Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
- Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
- Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
- Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
- Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.

3. Regras de Negócio:
- Um hotel só pode aceitar reservas se houver quartos disponíveis.
- As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
- Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
- Gerar relatórios de ocupação para um hotel.
- Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.
*/

const prompt = require("prompt-sync")();
const { v4: uuidv4 } = require('uuid');

function exercicio50(){
    function hotelManagment(){   
        // -- Factorys -- 

        function hotelFactory(nome, cidade, quartosTotais, quartosDisponiveis){
            let uuidHotel = uuidv4();
            let avaliacao = 0;
            let avaliacaoTotal = 0;
            return{id:uuidHotel,
                nome:nome,
                cidade:cidade,
                quartosTotais:quartosTotais,
                quartosDisponiveis:quartosDisponiveis,
                avaliacao:avaliacao,
                avaliacaoTotal:avaliacaoTotal,
            };
        }
        function reservaFactory(idHotel, nomeCliente){
            let uuidReserva = uuidv4();
            return {idReserva:uuidReserva, idHotel:idHotel, nomeCliente:nomeCliente};
        }

        // -- Vetores --
        let vetorHoteis = Array();
        let vetorReservas = Array();
        let vetorHospedes = Array();

        // -- Funções Programa --
        function adicionarHotel(){
            let nome = prompt("Digite o nome do Hotel: ");
            let cidade = prompt("Digite o nome da cidade: ");
            let quartosTotais = Number(prompt("Digite a quantidade de quartos totais no hotel: "));
            let quartosDisponiveis = Number(prompt("Digite a quantidade de quartos disponiveis no hotel: "));
            vetorHoteis.push(hotelFactory(nome, cidade, quartosTotais, quartosDisponiveis));
        }
        function pesquisarHotelPorCidade(){
            let cidadePesquisada = prompt("Digite a cidade da qual você quer ver os hoteis: ");
            let hotelEncontrado = false;
            vetorHoteis.forEach((hotel)=>{
                if(hotel.cidade === cidadePesquisada){
                    console.log(`Hotel: ${hotel.nome}, possui:${hotel.quartosDisponiveis} quartos disponiveis`);
                    hotelEncontrado = true;
                }
            })
            if(!hotelEncontrado){
                console.log("Nenhum hotel encontrado nessa cidade!");
            }
        }
        function fazerReserva(){
            let hotelProcurado = prompt("Digite o nome do hotel que deseja fazer reserva: ");
            let achouHotel = false;
            vetorHoteis.forEach((hotel) =>{
                if(hotelProcurado === hotel.nome){
                    achouHotel = true;
                    let idHotelParaReserva = hotel.id;
                    if(hotel.quartosDisponiveis <= 0){
                        console.log("O hotel não possui quartos livres!")
                    } else{
                        let nomeDoCliente = prompt("Digite o nome da pessoa que vai ficar hospedada: ");
                        hotel.quartosDisponiveis--;
                        vetorReservas.push(reservaFactory(idHotelParaReserva, nomeDoCliente));
                    }
                }
            })
            if(!achouHotel){
                console.log("Hotel não encontrado em nosso sistema!")
            }
        }
        function cancelarReserva(){
            let nomePessoaCancelar = prompt("Digite o nome da pessoa que está a reserva: ")
            vetorReservas.forEach((reserva, indice) => {
                if(reserva.nomeCliente === nomePessoaCancelar){
                    //Deletar Reserva.
                    let hotelReserva = reserva.idHotel;
                    vetorReservas.splice(indice, 1);
                    //Aumentar Quartos Disponivel.
                    vetorHoteis.forEach((hotel)=>{
                        if(hotel.id === hotelReserva){
                            hotel.quartosDisponiveis++;
                        }
                    })
                }
            })
        }
        function listarReservas(){
            if(vetorReservas[0]){
                vetorReservas.forEach((reserva)=>{
                    let hotelReserva;
                    vetorHoteis.forEach((hotel) => {
                        if(hotel.id === reserva.idHotel){
                            hotelReserva = hotel.nome;
                        }
                    })
                    console.log(`Uma reserva para: ${reserva.nomeCliente}, no Hotel: ${hotelReserva}.`);
                })
            } else{
                console.log("Nenhuma Reserva em Nosso Sistema");
            }
        }

        function avaliacao(idHotel){
            let condicaoAvaliacao = true;
            while(condicaoAvaliacao){
                function avaliar(idHotel, nota){
                    vetorHoteis.forEach((hotel) =>{
                        if(hotel.id === idHotel){
                            hotel.avaliacao += nota;
                            hotel.avaliacaoTotal++;
                        }
                    })
                }
                let notaHotel = Number(prompt("Digite uma nota de 0 a 5: "));
                switch(notaHotel){
                    case 0:
                        avaliar(idHotel, 0);
                        condicaoAvaliacao = false;
                        break;
                    case 1:
                        avaliar(idHotel, 1);
                        condicaoAvaliacao = false;
                        break;
                    case 2:
                        avaliar(idHotel, 2);
                        condicaoAvaliacao = false;
                        break;
                    case 3:
                        avaliar(idHotel, 3);
                        condicaoAvaliacao = false;
                        break;
                    case 4:
                        avaliar(idHotel, 4);
                        condicaoAvaliacao = false;
                        break;
                    case 5:
                        avaliar(idHotel, 5);
                        condicaoAvaliacao = false;
                        break;
                    default:
                        console.log("Nota não aceita!");
                }
            }
        }

        function checkIn(){
            let nomeCheckIn = prompt("Digite o seu nome para CheckIn: ");
            let reservaAchada = false;
            vetorReservas.forEach((reserva, indice) => {
                if(reserva.nomeCliente === nomeCheckIn){
                    reservaAchada = true;
                    vetorHospedes.push(reserva);
                    vetorReservas.splice(indice, 1);
                    console.log("Check-In feito com sucesso!");
                }
            })
            if(!reservaAchada){
                console.log("Não achada sua reserva no hotel!");
            }
        }
        function checkOut(){
            let nomeCheckOut = prompt("Digite o seu nome para CheckOut: ");
            let checkInAchado = false;
            vetorHospedes.forEach((hospede, indice) => {
                if(hospede.nomeCliente === nomeCheckOut){
                    let hotelReserva = hospede.idHotel;
                    checkInAchado = true;
                    vetorHoteis.forEach((hotel)=>{
                        if(hotel.id === hotelReserva){
                            hotel.quartosDisponiveis++;
                        }
                    })
                    vetorHospedes.splice(indice, 1);
                    let escolha = Number(prompt("Digite 1 se você deseja avaliar o hotel: "));
                    if(escolha === 1){
                        avaliacao(hotelReserva);
                    }
                }
            })
            if(!checkInAchado){
                console.log("Não foi possível achar seu Check In!");
            }
        }

        let condicaoExecucao = true;
        while(condicaoExecucao){
            console.log("1- Adicionar Hotel, 2-Buscar Hotel por Cidade, 3-Fazer Reserva, 4-Cancelar Reserva,");
            console.log("5-Listar Reservas, 6- Check-IN, 7- Check-OUT, 0- Sair");
            let acao = Number(prompt("Digite oque você deseja fazer: "))
            switch(acao){
                case 0:
                    condicaoExecucao = false;
                    break;
                case 1:
                    adicionarHotel();
                    break;
                case 2:
                    pesquisarHotelPorCidade(vetorHoteis);
                    break;
                case 3:
                    fazerReserva();
                    break;
                case 4:
                    cancelarReserva();
                    break;
                case 5:
                    listarReservas();
                    break;
                case 6:
                    checkIn();
                    break;
                case 7:
                    // Check-OUT
                    checkOut();
                    break;
                default:
                    console.log("Ação não encontrada");  
            }
        }
    }
    hotelManagment();
}

exercicio50();
