"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __importDefault(require("./Subject"));
const Teacher_1 = __importDefault(require("./Teacher"));
const math = new Subject_1.default('Matemática');
const history = new Subject_1.default('História');
const philosophy = new Subject_1.default('Filosofia');
const marta = new Teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher_1.default('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher_1.default('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);
console.log(marta);
console.log(joao);
console.log(lucio);
const invalidTeacherSalary = new Teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
// deve retornar erro
const today = new Date();
today.setDate(today.getDate() + 1);
const tomorrow = today;
marta.admissionDate = tomorrow;
