"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(_name) {
        this._name = _name;
        this.name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.validations(value);
        this._name = value;
    }
    validations(value) {
        if (value.length < 3)
            throw new Error("O nome tem que possuir no mínimo 3 caracteres");
    }
}
exports.default = Subject;
