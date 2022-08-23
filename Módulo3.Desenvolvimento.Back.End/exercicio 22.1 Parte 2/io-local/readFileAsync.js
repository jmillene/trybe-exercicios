const fs = require('fs').promises;
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

function verificarId (id){
const promise = new Promise(() =>{
  const data = fs.readFile('./simpsons.json','utf8')
  const result = data.find((elemento)=> elemento.id === 1)
  console.log(result);
})

}
verificarId();