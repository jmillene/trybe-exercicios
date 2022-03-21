// mudei a cor do titulo das tarefas
const mudarCorTitle = document.getElementById("header-container");{
        mudarCorTitle.style.background  = 'blue'
// _____________________________________________________________________
const mudarCorBloco = document.querySelectorAll(".emergency-tasks");
mudarCorBloco[0].style.background = 'red';

const corTag = document.getElementsByTagName('h3');
corTag[0].style.background = 'yellow';
corTag[1].style.background = 'blue';
}

const mudarCorSegundoBloco = document.querySelectorAll(".no-emergency-tasks")
mudarCorSegundoBloco[0].style.background = 'blue'

const mudarCorTag = document.getElementsByTagName('h3');
mudarCorTag[2].style.background = 'black';
mudarCorTag[3].style.background = 'red';