//const fs = require('fs').promises;
// Crie uma função que leia todos os dados do arquivo e imprima cada 
// personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
// async function main() {
//   try {
//     const data = await fs.readFile('./simpsons.json','utf8');
//     console.log(data);
    
//   } catch (error) {
//     console.log(`Arquivo incompativel ou não encontrado:${error.message}`);
//   }

// }
// main();

// Crie uma função que receba o id de uma personagem 
// como parâmetro e retorne uma Promise que é resolvida 
// com os dados da personagem que possui o id informado. Caso não haja uma personagem com o 
// id informado, rejeite a Promise com o motivo "id não encontrado".
const fs = require('fs').promises;

async function verificarId (id){
const promise = new Promise((resolve,reject) =>{
  //const data =  await fs.readFile('./simpsons.json','utf8');
  //const transformarJson = JSON.parse(data);
  //const resultado = Object.keys(data).find((elemento)=> elemento.id === id);
  console.log(data);
if(!resultado){
  reject(new Error('ID NÃO ENCONTRADO'))
}
  const resol = Object.keys(data).find((elemento)=> elemento.id === id) ;
 resolve(resol);
});
return promise;
}
const personagem = async(id) => {
  const data =  await fs.readFile('./simpsons.json','utf8');
  //console.log(data);
  const transformarJson = JSON.parse(data);
  const date = transformarJson.find((elemento)=> elemento.id === id);
  if(date === undefined){
  console.log('ID NÂO ENCONTRADO');
  }
  else {
  console.log(date);
}
}
personagem(1);
// verificarId()
// .then(result => console.log(`sucesso: ${result}`))
// .catch(err => console.log(`erro: ${err.message}`));

//pra ler é o parse
//para escrever é o stringfy

//test