class Veiculo {
    constructor(Marca, Modelo, Ano) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Ano = Ano;
    }
    exibirInformacoes() {
        console.log(`Marca:${this.Marca}\n Modelo:${this.Modelo}\n Ano:${this.Ano}`);

    }
}

const carro = new Veiculo("Toyota", "Corolla", 2022);

const motocicleta = new Veiculo("Honda", "CBR 600RR", 2021)

carro.exibirInformacoes();
motocicleta.exibirInformacoes();