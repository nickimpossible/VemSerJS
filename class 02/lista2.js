//---------Exercicio 01---------
// let salarioInicial = 1000;
// let salario = salarioInicial;
// let porcentagemAumento = 1.5;
// let anoInicial = 2016; 
// let anoAtual = 2022;
//
// for (let ano = anoInicial + 1; ano <= anoAtual; ano++){
//     salario += salarioInicial / 100 * porcentagemAumento;
//     porcentagemAumento *= 2;
//     alert(`Salario do ${ano} é ${salario}`)
// }

//--------Exercicio 02-----------
// let total = 0;
// for (let num = 1; num <= 100; num++){
//     total += num % 2 === 0 ? num : 0;
// }
// alert(`A soma dos 50 primeiro numero pares é ${total}`);

//--------Exercicio 03-----------
// let tabuada = prompt("Deseja ver qual tabuada");
// if (isNaN(tabuada)){
//     alert("valor invalido");
// } else {
//     for (let i = 1; i <= 10; i++){
//         console.log(`${i} * ${tabuada} = ${i * tabuada}`);
//     }
// }
//--------Exercicio 04-----------
// let quadrado = 0;
// for (let num = 1; num <= 100; num++){
//     if ( num % 2 === 0){
//         quadrado = num * num
//     console.log(`Quadrado de ${num} é : ${quadrado}`);
//     }
// }
//--------Exercicio 05-----------
// for(let i = 0; i <= 60; i++){
//     console.log(`${("0"+i).slice(-2)}`)
// }
//--------Exercicio 06-----------
// let continuar = true;
// let total = 0;
// do{
//     continuar = confirm("Clique 'Ok' para inserir um numero ou 'Cancelar' para finalizar");
//     if(continuar){
//         let valor = prompt("Insira um numero");
//         if (isNaN(valor)){
//             alert("valor invalido");
//             continuar = false;
//         } else {
//             total += parseFloat(valor);
//         }
//     }else{
//         alert(`A soma dos numeros é ${total}`)
//     }
// }while(continuar);