//------Exercicio 01------
// function imprime(lista){
//     return console.log(lista);
// }
// imprime([1, 'Olá', undefined, 99999, 'Texto qualquer']);

//------Exercicio 02------
// function minhafuncao(str) {
//     return str.toUpperCase().trim();
// }
// console.log(minhafuncao('      Oi, essa é uma   string   qualquer   '));

// //------Exercicio 02 a------
// function removeDupliciados(stringOriginal){
//     while (stringOriginal.indexOf("  ") !== -1){
//         stringOriginal = stringOriginal.replace("  ", " ");
//     }
//     return stringOriginal;
// }
// console.log(removeDupliciados(minhafuncao('      Oi, essa é uma   string   qualquer   ')));

//------------Exercicio 3------------
// function soma(num1, num2, cb){
//   if (isNaN(num1) || isNaN(num2)){
//     cb();
//     return;
//   }
  
//   let resultado = num1 + num2;
//   console.log(`${num1} + ${num2} = ${resultado}`);
// }
// function erro() {
//   console.log("Algum número digitado é inválido");
// }
// soma(1, 2, erro)
// soma(1, "a", erro)

/*------------Exercicio 4------------*/
// function encontraNoArray(lista, procurado){
//   for (idx in lista){
//     if (lista[idx] === procurado){
//       return `O elemento existe no array e a posição dele é: ${idx}`
//     }
//   }
//   return "O elemento não existe no array"
// }
// console.log(encontraNoArray(["a", "cachorro", 255], "cachorro"));
// console.log(encontraNoArray(["a", "cachorro", 255], "abacate"));