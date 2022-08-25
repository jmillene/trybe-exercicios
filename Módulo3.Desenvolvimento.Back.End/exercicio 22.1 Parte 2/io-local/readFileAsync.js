// exercicio 6.1
//Crie uma função que leia todos os dados do arquivo e imprima cada personagem no 
//formato id - Nome. Por exemplo: 1 - Homer Simpson.
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

// exercicio 6.2 Crie uma função que receba o id de uma personagem 
// como parâmetro e retorne uma Promise que é resolvida 
// com os dados da personagem que possui o id informado. Caso não haja uma personagem com o 
// id informado, rejeite a Promise com o motivo "id não encontrado".
// const fs = require('fs').promises;
// const personagem = async(id) => {
//   const data =  await fs.readFile('./simpsons.json','utf8');
//   //console.log(data);
//   const transformarJson = JSON.parse(data);
//   const date = transformarJson.find((elemento)=> elemento.id === id);
//   if(date === undefined){
//   console.log('ID NÂO ENCONTRADO');
//   }
//   else {
//   console.log(date);
// }
// }
// personagem(1);
//pra ler é o parse
//para escrever é o stringfy

//6.3 Crie uma função que altere o arquivo simpsons.json 
//retirando os personagens com id 10 e 6.
// const fs = require('fs').promises;
// async function remover () {
// try {
//   const data = await fs.readFile('./simpsons.json', 'utf8');
//   const transformarJson = JSON.parse(data);
//   const date = transformarJson.filter((elemento)=>elemento.id !="1" && elemento.id != "10")

//   if(date.length === 8){
//     console.log("Arquivo removido com sucesso");
//   }
// } catch (error) {
//   console.log(`Esse arquivo não pode ser removido:${error.message}`);
// }
// }
// remover()

// 6.4 Crie uma função que leia 
// o arquivo simpsons.json e crie um novo arquivo,
//  chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// const fs = require('fs').promises;
// async function trocaNomeArquivo  () {
// const data = await fs.rename('./simpsons.json','./simpsonFamily.json');
// console.log(data);
// const transformarJson = JSON.parse(data);
// console.log(transformarJson);
// const date = transformarJson.filter((elemento)=>{
//   elemento.id === '1' && elemento.id === '4'
// })
// console.log(date);
// }
// trocaNomeArquivo();

const fs= require('fs').promises;
async function adicionarNome () {
  try {
    const data = await fs.readFile('./simpsonFamily.json', 'utf-8' )
    console.log(data);
  } catch (error) {
    console.log(`erro ${error.message}`);
  }
 
}
adicionarNome();
