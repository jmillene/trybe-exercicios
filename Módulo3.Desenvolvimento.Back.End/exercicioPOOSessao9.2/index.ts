import Person from "./Person";

const maria = new Person('Maria da Consolação', new Date('2020/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2020/10/02'));
maria.birthDate = new Date('2023/01/25')

console.log(maria);
console.log(luiza);
