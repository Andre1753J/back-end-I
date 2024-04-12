//Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima a tabuada desse número usando um loop while.
import entradaDados from "readline-sync"

let num = entradaDados.questionFloat("Digite um numero: ");
let cont = 0;

while (cont <= 10) {
    console.log(`${num} X ${cont} = ${num * cont}`);
    cont++;
}