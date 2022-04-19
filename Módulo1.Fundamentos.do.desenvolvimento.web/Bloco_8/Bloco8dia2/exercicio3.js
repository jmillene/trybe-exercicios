// 3 - Crie uma HOF que receberá três parâmetros. 
// O primeiro será um array de respostas corretas
//  (Gabarito), o segundo será um array de respostas a serem verificadas 
//  (respostas da pessoa estudante) e o terceiro
//   é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final 
//   recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
//  e quando não houver resposta ("N.A") não altera-se a contagem.

// 1 - Crie uma HOFL que recebe 3 parametros.
// O primeiro será um array de respostas corretas
// //  (Gabarito), o segundo será um array de respostas a serem verificadas 
// //  (respostas da pessoa estudante) e o terceiro
// //   é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final 
// //   recebida pela pessoa estudante. 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let result = 0;
   
const holf = (RIGHT_ANSWERS,STUDENT_ANSWERS, CONT) =>{
    for(let index = 0; index < RIGHT_ANSWERS.length; index+=1){
        const contador =  CONT(RIGHT_ANSWERS(index), STUDENT_ANSWERS(index))
        result+=contador
    }
    if(STUDENT_ANSWER === RIGHT_ANSWERS){
    return +1;
    }
    else if(STUDENT_ANSWER === ''){
        return 'N.A' 

    }
    else if (STUDENT_ANSWER !== RIGHT_ANSWERS){
        return -0.5;
    }
}