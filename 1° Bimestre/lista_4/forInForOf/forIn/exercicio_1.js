//Escreva um programa que itere sobre as propriedades de um objeto e imprima suas chaves e valores.
const fruta = {
    cor: "vermelha",
    nome: "maça",
    sabor: "doce"
};

for (let chave in fruta) {
    console.log(`${chave}: ${fruta[chave]}`)
}
