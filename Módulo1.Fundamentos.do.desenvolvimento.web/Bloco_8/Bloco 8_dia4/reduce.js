const numbers = [2, 3, 4, 6, 8, 12, 24];
// Com for tradicional
// let acumulador = 0;
// for (let index= 0;index< numbers.length;index+=1){
//         acumulador = acumulador +numbers[index];
// }
// console.log(acumulador);

// Com reduce

// const soma =  numbers.reduce((acumulador,item) => {
//     return acumulador+item;
// });

// console.log('soma',soma);

// Com Filter
const somaFiltrada = numbers
  .filter((item) => item < 8)
  .reduce((acumulador, item) => acumulador + item);
  console.log(somaFiltrada);

//   Aqui eu fiz um filtro nos itens do meu Array,
//   quero filtrar meus números menores que 8,
//   depois disso faço a soma utilizando o acumulador
//   onde coloco o acumulador + meu item(numeros)
