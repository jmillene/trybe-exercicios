"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __importDefault(require("./Subject"));
const math = new Subject_1.default('Matemática');
const story = new Subject_1.default('História');
const philosophy = new Subject_1.default('Filosofia');
console.log(math);
console.log(story);
console.log(philosophy);
