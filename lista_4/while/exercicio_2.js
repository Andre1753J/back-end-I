//Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de alunos.
import entradaDados from "readline-sync"

let numAlunos = entradaDados.questionInt("Quantidade de alunos na turma: ");
let cont = 1;
let notaTotal = 0;

while (cont <= numAlunos) {
    let nota1 = entradaDados.questionFloat("Nota do primeiro bimestre: ");
    let nota2 = entradaDados.questionFloat("Nota do segundo bimestre: ");
    let nota3 = entradaDados.questionFloat("Nota do terceiro bimestre: ");
    let nota4 = entradaDados.questionFloat("Nota do quarto bimestre: ");
    let notaAluno = (nota1 + nota2 + nota3 + nota4)/4

    console.log(`A media desse aluno e: ${notaAluno}`)
    notaTotal += notaAluno;
    cont++;
}

let media = notaTotal / numAlunos;
console.log(`Media da sala: ${media}`)