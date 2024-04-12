import entradaDados from "readline-sync"
let numEs = entradaDados.questionInt("Digite um numero: ")
//Declaração de função
/*
function parImpar(num) {
    return num % 2 == 0 ? "par" : "impar"
};
console.log(parImpar(numEs))*/

//Expressão de função
/*
const parImpar = function (num) {return num % 2 == 0 ? "par" : "impar"}
console.log(parImpar(numEs))*/

//Funções de seta =>
/*
const inteiro = (numeros)=> {
    if (numeros%2==0) {
        return"par"
    }
    else{
        return"impar"
    }

}
console.log(inteiro(numeros))
*/