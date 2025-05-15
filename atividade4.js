class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidadeAtual = 0;
    }

    acelerar(valor) {
        this.velocidadeAtual += valor;
        console.log(`A velocidade atual é ${this.velocidadeAtual} km/h`);
    }

    frear(valor) {
        this.velocidadeAtual -= valor;
        if (this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0; // Não permite velocidade negativa
        }
        console.log(`A velocidade atual é ${this.velocidadeAtual} km/h`);
    }

    mostrarStatus() {
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Velocidade Atual: ${this.velocidadeAtual} km/h`);
    }
}

let carro = new Carro("Civic", "preto");
//carro.acelerar(30); 
//carro.frear(10);    
carro.mostrarStatus(); 