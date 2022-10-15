export default class Person {
  private _name : string;
  private _birthDate : Date;

  constructor (name : string, birthDate : Date) {
    this._name = name;
    this._birthDate = birthDate;

  }
  static getAge(value: Date): number{
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);

  }
  get name (): string{
    return this._name;
  }
  get birthDate(): Date{
    return this._birthDate;
  }
  set  name(value: string){
    if(value.length < 3){
      throw new Error("O nome deve ter no mínimo 3 catecteres");
    }
    this._name = value;
  }
  set birthDate (value : Date){
    this.validaAniversario(value);
    this._birthDate = value;
  }
  validaAniversario (value : Date): void {
    if(this.validaDate(value))
    throw new Error("Você não pode informar uma data do futuro");
    if(Person.getAge(value) > 120) throw new Error("A pessoa não deve ter mais que 120 anos");
    
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