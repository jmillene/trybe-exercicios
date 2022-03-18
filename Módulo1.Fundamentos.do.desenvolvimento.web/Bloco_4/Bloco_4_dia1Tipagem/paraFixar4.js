// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".


const name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let bestInTheWorld =[2006, 2007, 2008, 2009, 2010, 2018]


let player = {
name : 'Marta',
lastName : 'Silva',
age : 34,
medals : { golden: 2, silver: 3 },
bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log(' A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita '+ [bestInTheWorld.length] + ' vezes' + ' a melhor do mundo!!!' )