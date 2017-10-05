// ball.js

export default class Ball {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.ys = 5;
    this.xs = 2.5;

    this.getPosition = this.getPosition.bind(this);
    this.collidePaddle = this.collidePaddle.bind(this);
    this.collideWall = this.collideWall.bind(this);
    this.collideCeiling = this.collideCeiling.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
  }

  getPosition() {
    return {x:this.x,y:this.y};
  }

  collidePaddle() {
    this.ys = -this.ys;
  }

  collideWall() {
    this.xs = -this.xs;
  }

  collideCeiling() {
    this.ys = -this.ys;
  }

  update(hitPaddle,gameOver) {
    var x = this.x;
    var y = this.y;
    x += this.xs;
    y += this.ys;
    if(this.y > 490) {
      gameOver();
    }
    this.x = x;
    this.y = y;
  }

  render(ctx) {
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x,this.y,10,10);
    ctx.restore();
  }
}
