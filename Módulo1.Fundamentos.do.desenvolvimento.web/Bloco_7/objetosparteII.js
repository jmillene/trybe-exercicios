// Com o que você aprendeu até o momento de objetos, 
// você poderia utilizar a estrutura de repetição for...in . Por exemplo:

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     author: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   for (const property in coolestTvShow) {
//     console.log(property);
//   }
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons

//   porém posso usar uma propriedade mais fácil que seria o Object.keys que me
//   retorna as propriedades do objeto coolestTvShow em forma de Array.apply

//   const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   // for (const property in coolestTvShow) {
//   //   console.log(property);
//   // }
  
//   console.log(Object.keys(coolestTvShow));
  
//   // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  // Verifique que usamos o método Object.keys e a estrutura de repetição for...in 
// em conjunto. Além disso, perceba que a mesma função é utilizada 
// para iterar sobre os dois objetos, 
// mesmo o segundo tendo uma chave a mais que o outro.

