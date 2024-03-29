"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(`A area do losango é ${Exercise.losango(32, 18)}`);
console.log(`A area do losango é ${Exercise.losango(200, 50)}`);
console.log(`A area do losango é ${Exercise.losango(75, 25)}`);
console.log(`A area do trapezio é ${Exercise.trapezio(100, 70, 50)}`);
console.log(`A area do trapezio é ${Exercise.trapezio(75, 50, 35)}`);
console.log(`A area do trapezio é ${Exercise.trapezio(150, 120, 80)}`);
console.log(`A area do circulo é ${Exercise.circulo(3.14, 25)}`);
console.log(`A area do circulo é ${Exercise.circulo(3.14, 100)}`);
console.log(`A area do circulo é ${Exercise.circulo(3.14, 12.5)}`);
