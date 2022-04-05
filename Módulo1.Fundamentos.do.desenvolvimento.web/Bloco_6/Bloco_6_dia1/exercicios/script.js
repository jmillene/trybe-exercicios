function buttonSubmit (event) {
    event.preventDefault()
//ref https://developer.mozilla.org/

}
window.onload = function(){
const btn = document.querySelector('#buttonSubmit');
btn.addEventListener('click', buttonSubmit, true);
}

const input = document.querySelectorAll('input') //quero limpar meus inputs.
const texto = document.querySelector('textarea')
const botao = document.querySelector('#buttonApagar')


function limpa(){
    //primeiro eu quero que o botão limpe tudo que está contido no meu input
    //para isso posso fazer um for para que eu não digite elemento por elemento
    for (let index =0; index < input.length; index+=1){
        //agora ele deve passar de input por input e ir limpando
        const limpando = input[index]
        limpando.value = "" //meus inputs estão recebendo o valor vazio
        limpando.checked = false //isso porque as caixinhas de checkount ficam preenchidas e tenho que tirar o check delas
    }
    texto.value = ''

    botao.addEventListener('click', limpa);
}
function termos(){
const button = document.querySelector('#buttonSubmit');
const aceitar = document.querySelector('#aceitar');
aceitar.addEventListener('click', () =>{
    if(aceitar.checked){
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
});
}
termos();

function campos (){
    const name = document.querySelector('#nome').value.length;
    const email = document.querySelector('#email').value.length;
    const text = document.querySelector('#areaTexto').value.length;
    if (name < 10 || name > 40){
        return false;
    }
    else if (email < 10 || email > 50)
{
    return false;
}
else if (text > 500) {
    return false;
}

    else {
        return true;
    }
}

function buttonSubmit(event) {
    event.preventDefault();
    const inputsCampos = campos();
        if(inputsCampos === false){
            alert ('Dados inválidos')
        }
        else {
            alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
        }
    }

