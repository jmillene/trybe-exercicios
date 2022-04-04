// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   Imagine um cenário em que você precisa completar as 
//   informações do cliente adicionando uma nova propriedade 
//   para armazenar seu sobrenome. Uma das formas já vistas até então é reescrever
//    o objeto, dessa vez já com a nova propriedade lastName .

// const customer = {
//     firstName: 'Roberto',
//     lastName: 'Faria', // Propriedade adicionada.
//     age: 22,
//     job: 'Teacher',
//   };

// Existem também outras formas de adicionar essa propriedade 
// de maneira muito mais simples e prática, sem a necessidade de reescrever 
// o objeto e suas propriedades. Veja o exemplo abaixo:

const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  customer1.lastName = 'Faria';
  console.log(customer1);
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  customer2['lastName'] = 'Silva';
  console.log(customer2);