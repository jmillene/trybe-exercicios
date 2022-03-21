// https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
// https://linuxhint.com/window-onload-event-in-javascript/
// https://www.w3schools.com/jsref/dom_obj_event.asp

let btn = document.getElementById('start-race-btn');
// function olaTurma() {
//   console.log('Olá turma 21!');
// }
// btn.addEventListener('click', function(event){
//   let p = document.createElement('p');
//   p.innerText = 'Leticia';
//   document.querySelector('body').appendChild(p);
// });
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');

function resetCars(c1, c2){
  c1.style.marginLeft = '1px';
  c2.style.marginLeft = '1px';
}

resetCars(car1,car2);

btn.addEventListener('click', function () {
  // console.log(car1.style.marginLeft);
  // console.log(parseInt(car1.style.marginLeft));
  // console.log(Math.random() * 50);
  car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 50 + 'px';
  car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 50 + 'px';

  if (parseInt(car1.style.marginLeft) > window.innerWidth) {
    alert('Carro VERMELHO venceu!!');
    resetCars(car1, car2)
  }

  if (parseInt(car2.style.marginLeft) > window.innerWidth) {
    alert('Carro VERDE venceu!!');
    resetCars(car1, car2)
  }
});
