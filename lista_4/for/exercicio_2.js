import entradaDados from 'readline-sync';

for (let i = 1; i <= 2; i++) {
    let nome = entradaDados.question(`Informe o nome da ${i}ª pessoa: `);
    let sal = entradaDados.questionFloat(`Informe o salário de ${nome}: `);

    let impostoRenda = 0;

    if (sal <= 2100) {
        impostoRenda = 0;
    } else if (sal <= 2800) {
        impostoRenda = sal * 0.075;
    } else if (sal <= 3750) {
        impostoRenda = sal * 0.15;
    } else if (sal <= 4660) {
        impostoRenda = sal * 0.225;
    } else {
        impostoRenda = sal * 0.275;
    }

    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}