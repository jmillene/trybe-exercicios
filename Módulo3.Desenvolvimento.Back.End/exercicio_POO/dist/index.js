"use strict";
class Animal {
    constructor(type, name, sound, age) {
        this.type = type;
        this.name = name;
        this.sound = sound;
        this.age = age;
    }
    makeASound() {
        console.log(`${this.name} says: ${this.sound}`);
    }
}
