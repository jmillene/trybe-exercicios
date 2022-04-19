// Questão 1 - 
// Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
// representando uma nova pessoa contratada. Passe sua função 
// como parâmetro da HOF newEmployees para criar cada pessoa contratada 
// em seu respectivo id . A sua função deve receber como parâmetro 
// o nome completo da pessoa funcionária e a partir dele gerar 
// automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (dados) => {
    const employees = {
      id1: dados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: dados ('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: dados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  function dados(nome){
      return { nome, email: `${nome.replace(/ /g, '_').toLowerCase()}@trybe.com` }
      
    }
    console.log(dados('Pedro Guerra'));
    console.log(dados('Luiza Drumond'));

    // Ref replace https://stackoverflow.com/questions/63438228/convert-to-small-letters-and-remove-space-js
