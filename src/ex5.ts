export class BombaCombustivel {
  tipoCombustivel: 'gasolina' | 'etanol';
  valorGasolina: number;
  quantidadeGasolina: number;
  valorEtanol: number;
  quantidadeEtanol: number;

  constructor() {
    this.valorGasolina = 5;
    this.quantidadeGasolina = 1000;
    this.valorEtanol = 4;
    this.quantidadeEtanol = 1000;
  }

  getQtGasolina() {
    return this.quantidadeGasolina;
  }

  getQtEtanol() {
    return this.quantidadeEtanol;
  }

  abastecerPorLitro(combustivel: string, value: number) {
    if (combustivel == 'gasolina') {
      if (this.quantidadeGasolina < value) {
        console.log('Não há gasolina suficiente');
        console.log(`Quantidade restante na bomba: ${this.getQtGasolina()}`);
      } else {
        this.quantidadeGasolina -= value;
        console.log(`Valor do abastecimento: R$ ${(value * this.valorGasolina).toFixed(2)}`);
        console.log(`Quantidade restante na bomba: ${this.getQtGasolina()}`);
      }
    } else if (combustivel == 'etanol') {
      if (this.quantidadeEtanol < value) {
        console.log('Não há etanol suficiente');
        console.log(`Quantidade restante na bomba: ${this.getQtEtanol()}`);
      } else {
        this.quantidadeEtanol -= value;
        console.log(`Valor do abastecimento: R$ ${(value * this.valorEtanol).toFixed(2)}`);
        console.log(`Quantidade restante na bomba: ${this.getQtEtanol()}`);
      }
    } else {
      return console.log('Combustível inválido');
    }
  }

  abastecerPorValor(combustivel: string, value: number) {
    if (combustivel == 'gasolina') {
      const litros = value / this.valorGasolina;
      if (litros > this.quantidadeGasolina) {
        console.log('Não há gasolina suficiente');
        console.log(`Quantidade restante na bomba: ${this.getQtGasolina()}`);
      } else {
        this.quantidadeGasolina -= litros;
        console.log(`Total de litros abastecidos: ${litros.toFixed(2)}`);
        console.log(`Quantidade restante na bomba: ${this.getQtGasolina()}`);
      }
    } else if (combustivel == 'etanol') {
      const litros = value / this.valorEtanol;
      if (litros > this.quantidadeEtanol) {
        console.log('Não há etanol suficiente');
        console.log(`Quantidade restante na bomba: ${this.getQtEtanol()}`);
      } else {
        this.quantidadeEtanol -= litros;
        console.log(`Total de litros abastecidos: ${litros.toFixed(2)}`);
        console.log(`Quantidade restante na bomba: ${this.getQtEtanol()}`);
      }
    } else {
      return console.log('Combustível inválido');
    }
  }

  alterarValor(combustivel: string, newValue: number) {
    if (combustivel == 'gasolina') {
      this.valorGasolina = newValue;
      console.log('Valor alterado com sucesso');
    } else if (combustivel == 'etanol') {
      this.valorEtanol = newValue;
      console.log('Valor alterado com sucesso');
    } else {
      return console.log('Combustível inválido');
    }
  }

  alterarQuantidadeCombustivel(combustivel: string, value: number) {
    if (combustivel == 'gasolina') {
      this.quantidadeGasolina = value;
      console.log(`Quantidade alterada com sucesso - Nova quantidade: ${this.getQtGasolina()} litros`);
    } else if (combustivel == 'etanol') {
      this.quantidadeEtanol = value;
      console.log(`Quantidade alterada com sucesso - Nova quantidade: ${this.getQtEtanol()} litros`);
    } else {
      return console.log('Combustível inválido');
    }
  }
}
