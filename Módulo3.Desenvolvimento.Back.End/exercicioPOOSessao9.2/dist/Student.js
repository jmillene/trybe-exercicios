"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = String(); //não entendi essa parte
        this._examsGrades = [];
        this._worksGrades = [];
        this._enrollment = this.generateEnrollment();
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16)
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        this._enrollment = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length > 4)
            throw new Error("A pessoa estudante só pode possuir 4 notas de provas.");
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(value) {
        if (value.length > 2)
            throw new Error("A pessoa estudante só pode possuir 2 notas de trabalhos.");
    }
    sumGrades() {
        return [...this._examsGrades, ...this._worksGrades].reduce((prev, note) => {
            const nextNote = note + prev;
            return nextNote;
        }, 0);
    }
    sumAverageGrade() {
        const somaGrades = this.sumGrades();
        console.log(somaGrades);
        const media = this._examsGrades.length + this._worksGrades.length;
        return Math.round(somaGrades / media);
    }
    generateEnrollment() {
        const data = String((new Date().getTime() / 1000) * Math.random());
        return data;
    }
}
exports.default = Student;
//fonte https://pt.stackoverflow.com/questions/60987/gerar-numero-rand%C3%B4mico-com-valor-da-data-e-hora-atual-com-javascript
