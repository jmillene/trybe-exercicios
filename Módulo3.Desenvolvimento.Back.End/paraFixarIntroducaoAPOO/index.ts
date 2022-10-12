class Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  dataDeNascimento: string;

  constructor(
    nome: string,
    idade: number,
    sexo: string,
    dataDeNascimento: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
  }
  apresentar() {
    console.log(`Ola, meu nome é ${this.nome}, eu tenho ${this.idade} anos`);
  }
}
const matheus = new Pessoa("Matheus", 23, "Masculino", "25/05/1994");
matheus.apresentar();
