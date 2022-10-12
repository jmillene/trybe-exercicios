class Estudante{
  private _nome : string;
  private _matricula: string;
  private _notaDeProva: number[];
  private _notaDeTrabalho: number[];

  constructor( nome: string, matricula: string, notaDeProva: number[], notaDeTrabalho: number[]){
    this._nome = nome;
    this._matricula = matricula;
    this._notaDeProva = notaDeProva;
    this._notaDeTrabalho =notaDeTrabalho;
  }
  get matricula() : string{
    return this._matricula;
  }
  set matricula(value:string){
    this._matricula = value;
  }
  get nome() : string{
    return this._nome;
  }
  set nome(value: string){
    if(value.length < 3){
      throw new Error("O nome deve conter no mínimo 3 caracteres");
    }
    this._nome = value;
  }
  get notaDeProva(): number[]{
    return this._notaDeProva
  }
  set notaDeProva(value: number[]){
    this._notaDeProva = value;
  }
  get notaDeTrabalho (): number[]{
    return this._notaDeTrabalho;
  }
  set notaDeTrabalho( value: number[]){
    this._notaDeTrabalho = value;
  }
  // studante(){
  //   console.log(`Meu nome é ${this.nome} tenho a matricula ${this._matricula} minha nota 
  //   da prova foi ${this._notaDeProva} e a de grupo ${this._notaDeTrabalho}`);
    
  // }
}
 const estudante = new Estudante( 'Jé', '7890',  [8], [10])
// estudante.studante();
console.log(estudante);

