/* eslint-disable */

// Tipos 
let nome: string = "Moisés"; //Qualquer tipo de dado que seja string
let idade: number = 30; //10, 1.5, -5, 0xf00d, 0b1010, 0o744
let adulto: boolean = true; //true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); // simbolos
//let big: bigint = 10n; // bignit

//Arrays
let arrayDeNumber1: Array<number> = [1, 2, 3];
let arrayDeNumber2: number[] = [1, 2, 3];
let arrayDeString1: string[] = ["a", "b", "c"];
let arrayDeString2: Array<string> = ["a", "b", "c"];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "Moisés",
  idade: 30,
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
