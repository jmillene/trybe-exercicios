export default class Subject {

constructor(private _name: string){
  this.name = _name;
}
get name(): string{
  return this._name;
}
set name(value: string){
  this.validations(value);
  this._name = value;
}
private validations(value: string) : void {
if (value.length < 3) throw new Error("O nome tem que possuir no mínimo 3 caracteres");

}
}
