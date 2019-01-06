export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  init() {
    this.resizeCanvas();
    this.fillArea('rgba(0,0,255,.8)',0,0,100,100);
    this.fillArea('rgba(0,255,0,.5)',50,50,100,100);
  }

  resizeCanvas(width = window.innerWidth, height = window.innerHeight) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  fillArea(
    color = "green",
    x = 0, y = 0,
    width = window.innerWidth, height = window.innerHeight) {
    this.context.fillStyle = color;
    this.context.fillRect(x,y,width,height);
  }
}
