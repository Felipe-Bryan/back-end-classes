import { Counter } from './ex1';
import { Ball } from './ex2';
import { Account } from './ex3';
import { Calculator } from './ex4';
import { BombaCombustivel } from './ex5';
import { Carro } from './ex6';

const atividade1 = () => {
  const counter = new Counter();

  counter.increase();
  console.log(counter.getValue());

  counter.reset();
  console.log(counter.getValue());
};

// atividade1();

const atividade2 = () => {
  const ball = new Ball('blue', 5, 'plastic');

  console.log(ball.getColor());

  ball.changeColor('red');
  console.log(ball.getColor());
};

// atividade2();

const atividade3 = () => {
  const newAcc = new Account(125, 'Felipe');

  console.log(`Owner Name: ${newAcc.getOwner()}`);
  newAcc.changeOwner('FBryan');
  console.log(`New Owner Name: ${newAcc.getOwner()}`);

  console.log(`Saldo da conta: R$ ${newAcc.getBalance().toFixed(2)}`);

  newAcc.deposit(100);

  newAcc.withdraw(50);
  newAcc.withdraw(60);
};

// atividade3();

const atividade4 = () => {
  const calculator = new Calculator();

  console.log(calculator.getCurrent());

  calculator.plus(10);
  calculator.minus(5);
  calculator.multiply(8);
  calculator.divide(4);

  console.log(calculator.getHistory());
};

// atividade4();

const atividade5 = () => {
  const bomba = new BombaCombustivel();

  bomba.abastecerPorLitro('gasolina', 1001);
  console.log('----------------------------------------------------------');

  bomba.abastecerPorLitro('gasolina', 25);
  console.log('----------------------------------------------------------');

  bomba.abastecerPorValor('gasolina', 200);
  console.log('----------------------------------------------------------');

  bomba.alterarValor('gasolina', 5.5);
  console.log('----------------------------------------------------------');

  bomba.abastecerPorLitro('gasolina', 25);
  console.log('----------------------------------------------------------');

  bomba.alterarQuantidadeCombustivel('gasolina', 1000);
  console.log('----------------------------------------------------------');

  bomba.abastecerPorValor('etanol', 300);
  console.log('----------------------------------------------------------');
};

// atividade5();

const atividade6 = () => {
  const carro = new Carro();

  carro.andar(300);
  console.log('----------------------------------------------------------');

  carro.andar(300);
  console.log('----------------------------------------------------------');

  console.log(`Restam ${carro.getQtCombustivel()} litros no tanque`);
  console.log('----------------------------------------------------------');

  carro.abastecer(30);
  console.log(`Agora tem ${carro.getQtCombustivel()} litros no tanque`);
  console.log('----------------------------------------------------------');

  carro.andar(400);
  console.log('----------------------------------------------------------');
};

// atividade6();
