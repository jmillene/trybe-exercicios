// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
// A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .


let nota = 10;

switch (nota) {

    case nota = 10 :

        console.log("aprovada");
        break;

            case nota = 6:

             console.log("lista de espera");

                break;

            case nota = 5 :
                console.log("Reprovado");
                break;
        default :
        console.log("nota não identificada");
}