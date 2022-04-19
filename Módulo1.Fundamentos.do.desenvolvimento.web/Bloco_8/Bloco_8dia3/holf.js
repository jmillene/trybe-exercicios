
// const loopComFor = (array) =>{
//         for(let index =0; index < array.length; index+=1){
//             console.log(`Elemento for`,array[index]);
//             console.log(`index`,index);
//             console.log(`Array com for`,array);
//         }
//     }
//     loopComFor(number)


    // Implementando com forEach
// number.forEach((element,index,array) => {
//     console.log(`Elemento for`,array[index]);
//     console.log(`index`,index);
//     console.log(`Array com for`,array);
    
// });

// const number = [10,9,8,7,6,5,4]
// const number=  [2,4,6,10] testandoo every com todos os números pares
const retornoEvery = number.every((element) => element %2 ===0)
console.log(retornoEvery);


// O element representa cada indice do meu Array,
// Every retorna true ou false (Boolean), ele passa 
// por todos os elementos e verifica se é par,então 
// para que essa condição fosse verdadeira
// todos os elementos deveriam ser divisiveis por 2.
// se ao menos um elemento não atender essa condição ele retorna false;
// Every é todos os elementos
// O some retorna true se ao menos uma é verdadeira, no caso divisivél por 2
// const number = [10,9,8,7,6,5,4]
const retorneSome = number.some((element) => element %2 ===0)
console.log(retorneSome);



// Tem o find que pega sempre o primeiro elemento na validação
// então ele vê o meu array e retorna o primeiro elemento que
// satisfaça minha condição 
// const number = [10,9,8,7,6,5,4]
const retornoFind = number.find((element) => element %2 ===0)
console.log(retornoFind);
 

// O sort ordenar para mim um array de números
 const arraySort = [3,2,1]
 const resultadoSort = arraySort.sort((a,b) => a-b)
    console.log(resultadoSort); 
