class contaBancaria {
    constructor(deposito, sacar, verSaldo) {
      this.deposito = deposito;
      this.sacar = sacar;
      this.verSaldo = verSaldo;
    }
    mostrarDados() {
      console.log(
        `Deposito: ${this.deposito}, Saque: R$ ${this.sacar}, Saldo: ${this.verSaldo}`
      );
    }
    sacar(valor) {
      if ((valor = this.verSaldo)) {
        this.verSaldo -= valor;
        console.log(`Saque realizada. Quantidade atual: ${this.verSaldo} itens.`
        );
      } else {
        console.log("Saldo insuficiente para sacar");
      }
    }
    depositar(valor) {
      this.verSaldo += valor;
      console.log(`Deposito feita. Quantidade atual: ${this.verSaldo} itens.`);
    }
  }
  let saldo = new contaBancaria(2200, 1100, 5000);
  //saldo.mostrarDados();
  //saldo.sacar(1100);
  saldo.depositar(2200);