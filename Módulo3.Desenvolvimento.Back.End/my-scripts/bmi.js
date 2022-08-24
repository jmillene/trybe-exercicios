const weight = 50;
const height = 68;

function imc (peso, altura) {

    const altura = altura / 100;
    return (peso / (altura * altura));
}
