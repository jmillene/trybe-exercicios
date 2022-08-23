const readLine= require('readline-sync');
// const peso = 98;
// const altura = 181; // 32761

const peso= readLine.questionFloat('Qual seu peso?  '); 
const altura = readLine.questionFloat('Qual sua altura?  ');
//console.log(`Peso: ${peso}, altura: ${altura}`);

function imc (peso,altura){
  //console.log(peso,altura);
  const alturaEmMetros = altura/100;
  const bmi = (peso)/(alturaEmMetros*alturaEmMetros);
  //console.log(bmi);
  return bmi;

}
imc(peso,altura);
//imc(68,181)

console.log(`O BMI é : ${imc(peso,altura).toFixed(2)}`)
if(imc< 18.5){
  console.log('Abaixo do peso (magreza)');
  return
}
if(imc >= 18.5 && imc < 24.9){
console.log('Peso normal');
return
}

if(imc >= 25.0 && imc < 29.9	){
console.log('Acima do peso (sobrepeso)'); 
return
}
if (imc >= 30.0 && imc < 34.9){
console.log('Obesidade grau I');   
}
if(imc >= 35.0 && imc < 39.9){
console.log('Obesidade grau II'); 
return
}
if (imc > 40.0) {
  console.log('acima	Obesidade graus III e IV');
return
}
