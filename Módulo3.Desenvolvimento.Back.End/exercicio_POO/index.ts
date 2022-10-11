class Animal {
  type: string;
  name: string;
  sound : string;
  age: number;
  constructor(type:string, name: string, sound: string, age:number) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.age = age;
  }
  makeASound() {
    console.log(`${this.type} ${this.name} says: ${this.sound} ${this.age}`);
  }
}
const animal1 = new Animal ('Jacare','Joao', 'fifi', 14)
animal1.makeASound();