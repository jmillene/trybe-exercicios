// Desafio 1
function compareTrue(a,b) {
    // seu código aqui

    if (a === true && b === true)
    
    {
      
    return true;

    }

else {

  return false;
}
}

// Desafio 1 resolvido com o help dos meus colegas Marina, Fael e Ranner, grata pelas dicas.

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
{
  base :10;
  height : 50;
  return (base*height)/2;
}
{
  base :5;
  height : 2;
  return (base*height)/2;

}
{
  base : 51;
  height : 1;
  return (base*height)/2;
}
}

// Desafio 3

function splitSentence(stringFrase) {
  // seu código aqui
  {
  let frase = stringFrase.split (' ');
  return frase;

  // fonte de aprendizado função split https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
}

}

// Desafio 4
function concatName(nomes) {
  // seu código aqui

  return `${nomes[nomes.length - 1]}, ${nomes[0]}`;

  // fonte de de aprendizado https://stackoverflow.com/
}
// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
return (wins *3) + (ties*1)
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
 let contador = 0;
 let maior = numeros[0];
for (let i = 0; i < numeros.length; i +=1){
  //  maior = Math.max(...numeros);
if (numeros[i] > maior)
{
  maior = numeros[i]
}
}
for (let i = 0; i< numeros.length; i +=1)
{
  if (maior === numeros[i]){
    contador+=1;
  }
}
return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let positionCat1 = Math.abs (mouse - cat1)
  let positionCat2 = Math.abs (mouse  - cat2)

  if (positionCat1 < positionCat2){

    return 'cat1';

  }

  else if (positionCat1 > positionCat2 )
  {
    return "cat2"
  }
  else {
    return "os gatos trombam e o rato foge"

  }
}

// Desafio 8
function fizzBuzz(value) {
  // seu código aqui

  let myArray= [];

  for (let index = 0; index < value.length; index+=1){

if (value[index] %3 === 0  && value[index] %5 === 0 )
{
myArray.push ('fizzBuzz')
}
  else  if (value[index]%3 === 0){
      
      myArray.push ('fizz');
    
    }
else if (value[index]%5 === 0){

  myArray.push ('buzz')
}


else {

  myArray.push('bug!')
}
  }
return myArray;

}

// Desafio 9
function encode(nova_Frase) {
  const frase = 0;
  nova_Frase =  frase.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5);

for (let i = 0; i < frase.length; i+=1)
{
  return  nova_Frase;
}
}
function decode() {
  let vogais = 'a,e,i,o,u'
  let number = [];

  for (let index; index < number.length; index +=1)
  {
    if(number[index] === vogais)
    {

      number.push('a,e,i,o,u');
    }
  return number;
}
}
// Desafio 10
function techList(lista, name) {
  // seu código aqui

  if (lista.length === 0) {
    return 'Vazio!';
  }
  let novaLista = [];
  lista.sort();
  for (let nameList of lista) {
    let list = {
      tech: nameList,
      name: `${name}`,
    };
  novaLista.push(list);
  }
  return novaLista;
}



 
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
