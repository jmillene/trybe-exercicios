export default class Person {
  private _name : string;
  private _birthDate : Date;

  constructor (name : string, birthDate : Date) {
    this._name = name;
    this._birthDate = birthDate;

  }
  getAge(value: Date): number{
    const diff = new Date

  }
  get name (): string{
    return this._name;
  }
  get birthDate (): Date{
    return this._birthDate;
  }
  set  name (value: string){
    if(value.length < 3){
      throw new Error("O nome deve ter no mínimo 3 catecteres");
    }
    this._name = value;
  }
  set birthDate (value : Date){
    if(this.validaDate(value))
    throw new Error("Você não pode informar uma data do futuro");
    if(new Date)
    this._birthDate = value;
  }
  validaDate(value : Date): boolean{
    
    if(value > new Date()) {
      return true;
    }
    else {
      return false;
    }
    
  }
}