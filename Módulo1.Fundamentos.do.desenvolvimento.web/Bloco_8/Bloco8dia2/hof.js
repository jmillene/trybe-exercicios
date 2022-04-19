function sum (value1, value2){
    return value1+value2;
}

function subtraction (value1, value2){
    return value1-value2;
}
function mult (value1, value2){
    return value1*value2;
}
function div (value1, value2){
    return value1 / value2;
}
function calculadora(value, value2, callback){
    const result = callback(value, value2)
    return result;
}
console.log('A soma dos números é : ', calculadora(2,1, sum));
console.log('A subtração dos números é : ', calculadora(2,1, subtraction));
console.log('A soma dos números é : ', calculadora(2,1, sum));
console.log('A subtração dos números é : ', calculadora(2,1, subtraction));
console.log('A multiplicação dos números é : ', calculadora(2,1, mult));
console.log('A divisão dos números é: ', calculadora(2,1, div));
