"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = void 0;
function losango(diagonal_maior, diagonal_menor) {
    return (diagonal_maior * diagonal_menor) / 2;
}
exports.losango = losango;
function trapezio(base_maior, base_menor, altura) {
    return ((base_maior + base_menor) * altura) / 2;
}
exports.trapezio = trapezio;
function circulo(PI = 3.14, raio) {
    return (PI * (raio * raio));
}
exports.circulo = circulo;
