export class Ball {
  private color: string;
  private radius: number;
  private material: string;

  constructor(color: string, radius: number, material: string) {
    this.color = color;
    this.radius = radius;
    this.material = material;
  }

  changeColor(newColor: string) {
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}
