import entradaDados from "readline-sync"

let num = entradaDados.questionFloat("insira o primeiro numero: ")
let operacao = entradaDados.questionFloat("insira a Operacao (1 -> + 2 -> - 3 -> * 4 -> /): ")
let num2 = entradaDados.questionInt("insira o segundo numero: ")

switch (operacao) {
    case 1:
        console.log(num + num2);
        break;
    case 2:
        console.log(num - num2);
        break;
    case 3:
        console.log(num * num2);
        break;
    case 4:
        console.log(num / num2);
        break;
    default: console.log("A operacao pedida nao existe")
        break;
}