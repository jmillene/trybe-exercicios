// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number = 0;


for (let index = 0; index < numbers.length; index +=1)
{
    if (numbers[index]%2 !== 0) {
        number += 1
    }
}
if (number === 0){

    console.log("nenhum valor impar encontrado");
}
else {

    console.log(number);
}
  

