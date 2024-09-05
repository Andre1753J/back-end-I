const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if (calculadoraIMC.validaParamentro(peso) == false || calculadoraIMC.validaParamentro(altura) == false) {
        res.status(400).json({'Erro' : 'buxou tem que ser numero'})
    }

    else {
        let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
        let status = calculadoraIMC.retornarStatusIMC(imc);
    
        res.json({ imc: imc, status: status });
    
        //Você tambem pode utilizer desta maneira 
        // let json = { imc: imc , status: status};
        // res.json(json);
    };

});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
});