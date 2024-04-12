// Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci

let ant = 0;
let atual = 1;

console.log(ant);
console.log(atual);

for (let i = 3; i <= 20; i++) {
    let prox = ant + atual;
    console.log(prox);
    ant = atual;
    atual = prox;
}