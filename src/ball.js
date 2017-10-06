// ball.js

export default class Ball {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.ys = 5;
    this.xs = 2.5;
    this.hit = new Audio("hit.wav");

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

  collidePaddle(paddleMotion) {
    this.hit.play();
    if(paddleMotion == null || this.xs > 8 || this.xs < -8) {
      this.ys = -this.ys;
    }
    else if(paddleMotion == 'right') {
      this.ys = -this.ys;
      this.xs += 2;
    }
    else if(paddleMotion == 'left') {
      this.ys = -this.ys;
      this.xs -= 2;
    }
  }

  collideWall() {
    this.hit.play();
    this.xs = -this.xs;
  }

  collideCeiling() {
    this.hit.play();
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
