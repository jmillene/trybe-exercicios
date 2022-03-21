// Aqui eu guardei os dados do meu Id na variavel cores para poder manipula-localStorage;
let cores = document.getElementById("header-container");
        cores.style.backgroundColor = 'blue';

// o "emergency-tasks" é uma class em uma section, então selecionei a classe,
// devo informar a posição e o que desejo fazer na nela.


let emergency =  document.getElementsByClassName("emergency-tasks")[0];
emergency.style.backgroundColor = 'red';

let emergencytasks = document.querySelectorAll('"emergency-tasks")')[1];
emergency.style.backgroundColor = 'blue';
