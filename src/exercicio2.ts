//2. Utilizando (DoWhile), elaborar um programa que apresente o somatório dos valores pares existentes na faixa de 1 até 500.

let soma2: number = 0;
let par = 2;

do {
    soma2 += par;
    par += 2;
} while (par <= 500)

    console.log("A soma total dos numeros de 1 a 500 é:  " + soma2);
