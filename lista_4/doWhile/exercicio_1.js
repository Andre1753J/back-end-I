import entradaDados from "readline-sync"

const numAleatorio = Math.floor(Math.random() * 100);
let numEscolhido;

do {
    numEscolhido = entradaDados.questionInt("Qual numero voce acha que e: ")

    if (numEscolhido === numAleatorio) {
        console.log("Este e o numero!")
    }
    else if (numEscolhido > numAleatorio) {
        console.log("O numero e menor")
    } 
    else {
        console.log("O numero e maior")
    }
    console.log(numAleatorio)
    console.log(numEscolhido)

} while (numEscolhido !== numAleatorio);