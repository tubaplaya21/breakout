//paddle.js

/** @class Paddle
 * The paddle in the Breakout game.
 */
export default class Paddle {
  constructor(x, y, h, w) {
    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
    this.direction = null;

    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  getPosition() {
    return {x:this.x,y:this.y};
  }

  update(input) {
    var x = this.x;
    var y = this.y;
    this.direction = input.direction;

    switch(this.direction) {
      case 'right':
        x+=7;
        break;
      case 'left':
        x-=7;
        break;
    }
    if(x >= 0 && x <= 410) {
      this.x = x;
    }
  }

  render(ctx) {
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.restore();
  }
}
