export class Calculator {
  history: string[];
  current: number;

  constructor() {
    this.history = [];
    this.current = 0;
  }

  plus(value: number) {
    this.history.push(`${this.current} + ${value}`);
    this.current += value;
    console.log(this.current);
  }

  minus(value: number) {
    this.history.push(`${this.current} - ${value}`);
    this.current -= value;
    console.log(this.current);
  }

  multiply(value: number) {
    this.history.push(`${this.current} * ${value}`);
    this.current *= value;
    console.log(this.current);
  }

  divide(value: number) {
    this.history.push(`${this.current} / ${value}`);
    this.current /= value;
    console.log(this.current);
  }

  getCurrent() {
    return this.current;
  }

  getHistory() {
    return this.history;
  }
}
