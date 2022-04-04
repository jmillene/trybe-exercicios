// const sum = (value1, value2) => value1 + value2;
// console.log(sum(2, 3));

// se o usuario coloca '3' o javascript por ser dinamica
// considera o 3 como uma String,então o resultado seria 23
// exemplo :

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, '3')); // resultado: 23


// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));
//   essa seria a forma correta, onde o 
//   sistema informa que o valor deve ser númerico.


const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));