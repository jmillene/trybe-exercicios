// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const jogoXadrez = 'REI';

switch (jogoXadrez.toLocaleLowerCase())
{
case'rei':
console.log("Movimente a peça para qualquer direção somentes nas casas");
break;

case 'rainha' :

console.log('Movimente a peça no jogo na horizontal, vertical e diagonais.');

break;

case 'peao' :
    console.log('Movimente a peça pelas frontais');

    break;

    case 'Torre' :
console.log('Direções (frente, trás, direita, esquerda).');

break;

case 'bispo' :

console.log('Mova a peça no sentido diagonal');

break;

case 'cavalo' :
    console.log('Realize movimentos em “L”,');

    break;

    default :

    console.log('Peça invalida');
}