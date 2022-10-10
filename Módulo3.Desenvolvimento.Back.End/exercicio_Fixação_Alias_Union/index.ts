//Crie um type para um objeto que represente um pássaro.

type Passaro = {
  bico : string,
  pernas: string,
  penas: string,
}
//Crie um type que represente uma função que recebe
 //dois valores numéricos e retorne a soma deles.

 type Sum = (x: number, y: number) => number;
  
function imprimeRg(rg: string | number){
  console.log('seu RG é:' + rg);
  
}
imprimeRg(111111111)
imprimeRg('111111')