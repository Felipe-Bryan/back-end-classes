export class Carro {
  consumo: number;
  qtCombustivel: number;

  constructor() {
    this.consumo = 10;
    this.qtCombustivel = 50;
  }

  andar(distancia: number) {
    const litrosGastos = distancia / this.consumo;
    if (litrosGastos > this.qtCombustivel) {
      console.log('Será necessário abastecer durante o trajeto');
    } else {
      this.qtCombustivel -= litrosGastos;
      console.log('Você chegará ao destino sem necessidade de abastecer');
    }
  }

  abastecer(litros: number) {
    this.qtCombustivel += litros;
  }

  getQtCombustivel() {
    return this.qtCombustivel;
  }
}
