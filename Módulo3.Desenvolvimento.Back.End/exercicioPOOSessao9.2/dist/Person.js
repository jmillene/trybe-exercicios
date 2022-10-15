"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    static getAge(value) {
        const diff = Math.abs(new Date().getTime() - value.getTime());
        const yearMs = 31536000000;
        return Math.floor(diff / yearMs);
    }
    get name() {
        return this._name;
    }
    get birthDate() {
        return this._birthDate;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error("O nome deve ter no mínimo 3 catecteres");
        }
        this._name = value;
    }
    set birthDate(value) {
        this.validaAniversario(value);
        this._birthDate = value;
    }
    validaAniversario(value) {
        if (this.validaDate(value))
            throw new Error("Você não pode informar uma data do futuro");
        if (Person.getAge(value) > 120)
            throw new Error("A pessoa não deve ter mais que 120 anos");
    }
    validaDate(value) {
        if (value > new Date()) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = Person;
