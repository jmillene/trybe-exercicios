"use strict";
class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }
    get name() {
        return this._nome;
    }
    set nome(value) {
        if (value.length < 3) {
            throw new Error("O nome deve conter no minimo 3 caracteres");
        }
        this._nome = value;
    }
    nomePessoa() {
        console.log(`$meu nome é ${this.nome}`);
    }
}
const cliente = new Pessoa('José');
cliente.nomePessoa;
