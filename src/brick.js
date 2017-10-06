// brick.js

export default class Brick {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.isBroken = false;

    this.getPosition = this.getPosition.bind(this);
    this.collideBall = this.collideBall.bind(this);
    this.render = this.render.bind(this);
  }

  getPosition() {
    return {x:this.x,y:this.y};
  }

  collideBall() {
    this.isBroken = true;
  }

  render(ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,48,20);
    ctx.restore();
  }
}
