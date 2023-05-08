export class Account {
  private accNumber: number;
  private ownerName: string;
  private balance: number;

  constructor(accNumber: number, ownerName: string) {
    this.accNumber = accNumber;
    this.ownerName = ownerName;
    this.balance = 0;
  }

  changeOwner(newOwner: string) {
    this.ownerName = newOwner;
  }

  getOwner() {
    return this.ownerName;
  }

  deposit(value: number) {
    this.balance += value;
    console.log(`Depósito realizado com sucesso!\nSaldo da conta: R$ ${this.getBalance().toFixed(2)}`);
  }

  withdraw(value: number) {
    if (this.balance - value < 0) {
      console.log('Saldo insuficiente');
    } else {
      this.balance -= value;
      console.log(`Saque realizado com sucesso!\nSaldo da conta: R$ ${this.getBalance().toFixed(2)}`);
    }
  }

  getBalance() {
    return this.balance;
  }
}
