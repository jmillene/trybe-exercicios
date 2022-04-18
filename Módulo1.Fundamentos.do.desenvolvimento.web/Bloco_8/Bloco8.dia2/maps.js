// map/filter

// o filter traz a quantidade de elementos em um array
// o map pega e traz a mesma quantidade do array original

const fruits = ['🥥', '🍅 ' ,'🥝 ', '🍓' ,'🍒 ','🥥']
const coco = fruits.filter((element) =>{
    return element === '🥥'
})

const sucoDeLaranja =  coco.map((element) => '🥤');
console.log(sucoDeLaranja );

// o filtro me retorna só os coco o map transforma em suco(pega a mesma quantidade e substitui)

// Exemplo mais prático

const number = [1,2,3,4,5,6];
// const filtrarNumerosImparesComFor = () =>{
//     const numerosImpares = [];
//     for(let index = 0; index < number.length;index +=1){
//     if(number[index]%2 === 1){
//       numerosImpares.push(number[index]);
//     }}
//     return numerosImpares;
// }
// console.log(filtrarNumerosImparesComFor(number))

// Reduzir o código em uma linha
const filtrarNumerosImparesComFilter = (number) => number.filter((element) => element %2 ===1);
console.log('Numeros impares de um array:' ,filtrarNumerosImparesComFilter(number));

// Fiz uma função onde peguei e filtrei meus número impares
// onde element diz respeito a cada indice do meu Array.