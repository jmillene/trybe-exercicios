function buttonSubmit (event) {
    event.preventDefault()

}
const btn = document.querySelector('#buttonSubmit');
btn.addEventListener('click', buttonSubmit, false)

//ref https://developer.mozilla.org/

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
