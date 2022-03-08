let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',

};
const base = 5;
let height = 8;
const area = (base*height)
const perimeter = ((base**2)+(height**2));
const patientEmail = 'ana@email.com';

console.log(typeof patientAge);
console.log(typeof patientId);
console.log(area);
console.log(perimeter)


// O que aconteceria se tentássemos checar qual o tipo da variável patientAge ? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué...mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined , como você pôde observar no retorno do console.log(typeof patientAge) . Experimente também trocar o valor de patientId = 50 para patientId = '50' . Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.
// Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators disponível nesse link se tiver dúvidas. Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
// Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// // Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
