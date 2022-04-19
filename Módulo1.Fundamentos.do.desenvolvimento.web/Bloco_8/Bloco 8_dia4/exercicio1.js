// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acumulador, item) => acumulador.concat(item), []);
}
console.log(flatten(arrays));
// ref https://pt.stackoverflow.com/questions/318038/como-transformar-um-array-de-arrays-em-um-%C3%BAnico-array-em-javascript