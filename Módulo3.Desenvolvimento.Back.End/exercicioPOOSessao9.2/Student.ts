import Person from "./Person";

export default class Student extends Person {
  private _enrollment = String(); //não entendi essa parte
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name : string, birthDate : Date ){
    super(name, birthDate)
    this._enrollment = this.generateEnrollment();
  }
 get enrollment(): string{
  return this._enrollment;
 }
 set enrollment (value : string){
  if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
  this._enrollment = value;
 }
 get examsGrades() : number[]{
  return this._examsGrades;
 }

 set examsGrades(value : number[]){
  if(value.length > 4) throw new Error("A pessoa estudante só pode possuir 4 notas de provas.");
  this._examsGrades = value;

 }
 get worksGrades() : number[]{
return this._worksGrades;  
}
set worksGrades(value : number[]){
  if(value.length > 2) throw new Error("A pessoa estudante só pode possuir 2 notas de trabalhos.");
  
}
 sumGrades() :number{
  return [...this._examsGrades,...this._worksGrades].reduce((prev, note)=>{
const nextNote = note + prev;
return nextNote;
  },0)
}
sumAverageGrade() : number {
  const somaGrades = this.sumGrades();
  console.log(somaGrades);
  
  const media = this._examsGrades.length + this._worksGrades.length;
  return Math.round(somaGrades/media);
}
generateEnrollment(): string {
const data = String((new Date().getTime() / 1000) * Math.random());
return data;
}
 }
//fonte https://pt.stackoverflow.com/questions/60987/gerar-numero-rand%C3%B4mico-com-valor-da-data-e-hora-atual-com-javascript
