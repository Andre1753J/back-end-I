class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }
    exibirInformacoes() {
        console.log(`${this.tipo}:\n Quartos:${this.quartos}\n Tipo:${this.tipo}\n Endereço:${this.endereco}`);

    }
}

const casa = new Imovel(4, "Casa", "Rua a Amizade, 789 - Bairro Alegre");
const apartemento = new Imovel(2, "Aprtamento", "Avenida da Paz, 123 - Centro");

casa.exibirInformacoes();
apartemento.exibirInformacoes();