//game.js

import Brick from './brick';
import Ball from './ball';
import Paddle from './paddle';

/** @class Game
 * Represents a game of breakout.
 */

 export default class Game {
   constructor() {
     this.input = {direction: null};
     this.over = false;
     this.hitPaddle = false;
     this.ball = new Ball(250,200);
     this.paddle = new Paddle(205,450,15,90);
     // Create the back buffer canvas
     this.backBufferCanvas = document.createElement('canvas');
     this.backBufferCanvas.width = 500;
     this.backBufferCanvas.height = 500;
     this.backBufferContext = this.backBufferCanvas.getContext('2d');
     // Create the screen buffer canvas
     this.screenBufferCanvas = document.createElement('canvas');
     this.screenBufferCanvas.width = 500;
     this.screenBufferCanvas.height = 500;
     document.body.appendChild(this.screenBufferCanvas);
     this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
     // Create HTML UI Elements
     var message = document.createElement('div');
     message.id = "message";
     message.textContent = "";
     document.body.appendChild(message);
     //Bind methods
     this.update = this.update.bind(this);
     this.handleKeyDown = this.handleKeyDown.bind(this);
     this.handleKeyUp = this.handleKeyUp.bind(this);
     this.gameOver = this.gameOver.bind(this);
     this.render = this.render.bind(this);
     this.loop = this.loop.bind(this);

     // Set up event handlers
     window.onkeydown = this.handleKeyDown;
     window.onkeyup = this.handleKeyUp;
     // Start the game loop
     this.interval = setInterval(this.loop, 30);
   }

    handleKeyDown(event) {
       event.preventDefault();
       switch(event.key){
         case 'a':
         case 'ArrowLeft':
            this.input.direction = 'left';
            break;
         case 'd':
         case 'ArrowRight':
            this.input.direction = 'right';
            break;
        }
   }

  handleKeyUp(event) {
     event.preventDefault();
     if((event.key == 'a' || event.key == 'ArrowLeft') && this.input.direction == 'left') {
       this.input.direction = null;
     }
     if((event.key == 'd' || event.key == 'ArrowRight') && this.input.direction == 'right') {
       this.input.direction = null;
     }
   }

   gameOver() {
     var message = document.getElementById("message");
     message.innerText = "Game Over";
     this.over = true;
   }

   update() {
     if(!this.over) {
       // determine if the ball passed the paddle.
       var bPosition = this.ball.getPosition();
       var pPosition = this.paddle.getPosition();
       if(bPosition.y > 490) {
         return this.gameOver();
       }
       // determine if ball has collided with the paddle.
       if(bPosition.y + 10 == pPosition.y && bPosition.x+10 >= pPosition.x && bPosition.x <=(pPosition.x+90)) {
         this.ball.collidePaddle();
       }
       // determine if ball has hit wall.
       if(bPosition.x >= 492 || bPosition.x <= 0) {
         this.ball.collideWall();
       }
       // determine if ball has hit ceiling.
       if(bPosition.y <= 40) {
         this.ball.collideCeiling();
       }

       this.ball.update(this.gameOver);
       this.paddle.update(this.input, this.gameOver);
     }
   }

   render() {
     this.backBufferContext.fillStyle = '#ccc';
     this.backBufferContext.fillRect(0, 0, 500, 500);
     this.backBufferContext.fillStyle = 'white';
     this.backBufferContext.fillRect(0,0,500,40);
     this.backBufferContext.fillStyle = 'black';
     this.backBufferContext.font = '14px sans-serif';
     this.backBufferContext.fillText("Score: ",400,25);
     this.ball.render(this.backBufferContext);
     this.paddle.render(this.backBufferContext);
     this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
   }

   loop() {
     this.update();
     this.render();
   }
 }
