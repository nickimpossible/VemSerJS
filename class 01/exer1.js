//---------Exercicio 01-----------
// let stringDigitada = prompt("Digite SIM/Nao");
//
// if (stringDigitada === "SIM"){
//     alert("Parabéns");
// } else if (stringDigitada === "Nao"){
//     stringDigitada = prompt("Digite um texto");
//     alert(stringDigitada);
// } else {
//     stringDigitada = prompt("Você tem noções dos seus atos?");
//     alert("blz");
// }

//--------Exercicio 02--------------
// let nomeCliente = prompt("Digite seu nome");
// let nomeAtendente = prompt("Digite o nome do atendente");
//
// alert(`Olá ${nomeCliente} eu me chamo ${nomeAtendente}, em que posso ajudar?`)

//--------Exercicio 03--------------
// let isFriday, isTwoGreaterThanFour, isValueEmpty;
//
// let stringDigitada = prompt("Hoje é sexta-feira? SIM/Nao");
// if (stringDigitada === "SIM"){
//     isFriday = true;
// } else {
//     isFriday = false;
// }
//
// isTwoGreaterThanFour = 2 > 4;
//
// stringDigitada = prompt("digite algo");
// if (stringDigitada === "") {
//     isValueEmpty = true;
// } else {
//     isValueEmpty = false;
// }
// alert(`isFriday = ${isFriday}, isTwoGreaterThanFour = ${isTwoGreaterThanFour}, isValueEmpty = ${isValueEmpty}`);

//--------Exercicio 04----------------
// let num1 = prompt("digite o numero");
// if (isNaN(num1)){
//     alert("valor invalido");
//     throw "valor invalido";
// }
// let num2 = prompt("digite o numero");
// if (isNaN(num2)){
//     alert("valor invalido");
//     throw "valor invalido";
// }
// let operacao = prompt("digite a operação desejada");
// switch (operacao){
//     case "+":
//         alert(num1 + num2);
//         break;
//     case "-":
//         alert(num1 - num2);
//         break;
//     case "*":
//         alert(num1 * num2);
//         break;
//     case "/":
//         if (num2 === "0"){
//             alert("impossivel dividir por zero");
//             throw "impossivel dividir por zero";
//         }
//         alert(num1 / num2);
//         break;
//     default:
//         alert("operação invalida")
//         throw "operação invalida";
//         break;
// }

//----------Exercicio 05-------------
// let t1 = prompt("nota do trabalho 1");
// if (isNaN(t1)){
//     alert("valor invalido");
//     throw "valor invalido";
// }
// let t2 = prompt("nota do trabalho 2");
// if (isNaN(t2)){
//     alert("valor invalido");
//     throw "valor invalido";
// }
// let p1 = prompt("nota da prova 1");
// if (isNaN(p1)){
//     alert("valor invalido");
//     throw "valor invalido";
// }
// let media = (parseFloat(t1) + parseFloat(t2) + parseFloat(p1)) / 3;
// console.log(media);
// if (media < 5){
//     alert("Reprovado");
// } else if (media <= 7){
//     alert("Recuperação");
// } else {
//     alert("Aprovado");
// }

// ------------Exercicio 06-------------
let opcaoHotel = prompt("Digite a opcao: \n 1 - CheckIn \n 2 - Checkout \n 3 - Estender Hospedagem \n 4 - Sair");

switch (opcaoHotel) {
    case "1":
        alert("Boas vindas!!!!");
        break;
    case "2":
        let certeza = prompt("Tem certeza? SIM/Nao");
        if (certeza === "SIM")
            alert("Adeus");
        else
            alert("Que bom que ira ficar");
        break;
    case "3":
       let estenderHospedagem = prompt("Quantos dias deseja estender na sua hospedagem?");

        if (isNaN(estenderHospedagem)) {
            alert("Numero de dias invalido");
            throw "Numero de dias invalido";
        }
        alert(`Sucesso!! Sua hospedagem foi estendida em ${estenderHospedagem} dias`);
        break;
    case "4":
        alert("Ok");
        break;
    default:
        alert("Opção invalida");
        break;
}
