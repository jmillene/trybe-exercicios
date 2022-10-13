"use strict";
class Estudante {
    constructor(nome, matricula, notaDeProva, notaDeTrabalho) {
        this._nome = nome;
        this._matricula = matricula;
        this._notaDeProva = notaDeProva;
        this._notaDeTrabalho = notaDeTrabalho;
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        this._matricula = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value.length < 3) {
            throw new Error("O nome deve conter no mínimo 3 caracteres");
        }
        this._nome = value;
    }
    get notaDeProva() {
        return this._notaDeProva;
    }
    set notaDeProva(value) {
        this._notaDeProva = value;
    }
    get notaDeTrabalho() {
        return this._notaDeTrabalho;
    }
    set notaDeTrabalho(value) {
        this._notaDeTrabalho = value;
    }
    // studante(){
    //   console.log(`Meu nome é ${this.nome} tenho a matricula ${this._matricula} minha nota 
    //   da prova foi ${this._notaDeProva} e a de grupo ${this._notaDeTrabalho}`);
    // }
    somaGrades() {
        return [...this.notaDeProva, ...this.notaDeTrabalho].reduce((prev, note) => {
            const nextNote = note + prev;
            return nextNote;
        }, 0);
    }
    mediaNotas() {
        const somaGrades = this.somaGrades();
        const media = this.notaDeProva.length + this.notaDeTrabalho.length;
        return Math.round(somaGrades / media);
    }
}
const estudante = new Estudante('Jé', '7890', [8], [10]);
// estudante.studante();
console.log(estudante);
estudante.notaDeProva = [25, 20, 23, 36];
estudante.notaDeProva = [45, 45];
console.log('Soma das notas é ', estudante.somaGrades());
console.log(' A média é', estudante.mediaNotas());
