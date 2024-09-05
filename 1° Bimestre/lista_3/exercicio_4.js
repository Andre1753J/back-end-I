import entradaDados from "readline-sync"

let categoria = entradaDados.question("Qual categoria voce pertence? ");
let salario = entradaDados.questionFloat("Qual seu salario? ")

switch (categoria) {
    case "A":
        console.log(`Seu novo salario e: ${salario * 1.05}`)
        break;
    case "B":
        console.log(`Seu novo salario e: ${salario * 1.10}`)
        break;
    case "C":
        console.log(`Seu novo salario e: ${salario * 1.15}`)
        break;
    case "D":
        console.log(`Seu novo salario e: ${salario * 1.20}`)
        break;
    default: console.log("A categoria nao existe")
        break;
}