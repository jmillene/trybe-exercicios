// https://www.w3schools.com/jsref/dom_obj_document.asp
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
// https://www.w3schools.com/jsref/met_node_appendchild.asp


// Como pegar o pai dos elementos que eu quero adicionar a minha página?
let divFirst = document.getElementById('first');
// console.log(divFirst);
// Como podemos criar um elemento HTML?
let novaDiv = document.createElement('div');
let novaDiv1 = document.createElement('div');
let novaDiv2 = document.createElement('div');
let paragrafo = document.createElement('p');
// console.log(novaDiv);
// Como podemos modificar esse elemento, adicionando classes CSS para ele, por exemplo!?
novaDiv.classList = 'circle small red';
novaDiv1.classList = 'square small blue';
novaDiv2.classList = 'circle small green';
paragrafo.innerText = 'Essa tribo é a melhor!!'

// Como efetivamos a inclusão do elemento criado ao HTML e deixando ele visivel na página?
divFirst.appendChild(novaDiv);
divFirst.appendChild(novaDiv1);
divFirst.appendChild(novaDiv2);
divFirst.appendChild(paragrafo);

// Posso continuar aleterando o elemento via código?
novaDiv.classList.remove('circle');
novaDiv.classList.add('square');

// Como posso remover um elemento do HTML via código?
novaDiv.remove();
divFirst.removeChild(paragrafo);
// Vamos deixar nosso código mais organizado criando funções para matar a 'repetição'de código
divSecond = document.getElementById('second');

function createDivElements(classes){
  let div = document.createElement('div');
  div.classList = classes;
  return div;
}

divSecond.appendChild(createDivElements('circle small red'));
divSecond.appendChild(createDivElements('square small green'));
divSecond.appendChild(createDivElements('square small yellow'));
divFirst.appendChild(createDivElements('circle small red'));

// Habilidades e funções vistas nessa aula:
// createElement;
// appendChild;
// removeChild;
// parentNode;
// childNodes;
// children;
// firstChild;
// firstElementChild;
// lastChild;
// lastElementChild;
// nextSibling
// nextElementSibling;
// previousSibling
// previousElementSibling;