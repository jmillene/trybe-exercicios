"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const maria = new Person_1.default('Ma', new Date('2023/01/25'));
const luiza = new Person_1.default('Lu', new Date('2023/10/02'));
console.log(maria);
console.log(luiza);
