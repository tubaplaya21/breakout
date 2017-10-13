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
     this.start = true;
     this.brickCount = 0;
     this.score = 0;
     this.ball = new Ball(250,200);
     this.paddle = new Paddle(205,450,15,90);
     // Create bricks
     this.bricks = [];
     for(var i = 0; i < 10; i++) {
       this.bricks[i] = [];
       for(var j = 0; j < 5; j++) {
         this.bricks[i][j] = new Brick(50*i+1,70+(22*j),'blue');
         console.log(this.bricks[i][j].getPosition());
       }
     }
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
     this.interval = setInterval(this.loop, 20);
   }

    handleKeyDown(event) {
       event.preventDefault();
       var message = document.getElementById("message");
       switch(event.key){
         case 'a':
         case 'ArrowLeft':
            this.input.direction = 'left';
            break;
         case 'd':
         case 'ArrowRight':
            this.input.direction = 'right';
            break;
         case ' ':
            this.gameStart = false;
            message.innerText = "";
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

   gameStart(time) {
     var message = document.getElementById("message");
     message.innerText = time;
   }

   gameOver(didWin) {
     var message = document.getElementById("message");
     if(didWin) {
       message.innerText = "You win!";
     }
     else {
       message.innerText = "Game Over";
     }
     this.over = true;
   }

   update() {
     var message = document.getElementById("message");
     if(this.gameStart) {
       message.innerText = "Press space to start.";
     }
     if(!this.over && !this.gameStart) {
       // determine if the ball passed the paddle.
       var bPosition = this.ball.getPosition();
       var pPosition = this.paddle.getPosition();

       if(bPosition.y >= 490) {
         return this.gameOver(false);
       }
       // determine if ball has collided with the paddle.
       if(bPosition.y+10 >= pPosition.y && bPosition.y+10 <= pPosition.y+15
         && bPosition.x+10 >= pPosition.x && bPosition.x <= pPosition.x+90) {
         this.ball.collidePaddle(this.input.direction);
       }
       // determine if ball has hit wall.
       if(bPosition.x >= 490 || bPosition.x <= 0) {
         this.ball.collideWall();
       }
       // determine if ball has hit ceiling.
       if(bPosition.y <= 40) {
         this.ball.collideCeiling();
       }
       // determine if ball has hit brick.
       for(var i = 0; i < 10; i++) {
         for( var j = 0; j < 5; j++) {
           var bkPosition = this.bricks[i][j].getPosition();
           if(bPosition.y <= bkPosition.y+20 && bPosition.y >= bkPosition.y
             && bPosition.x+5 >= bkPosition.x && bPosition.x+5 < bkPosition.x+50
             && !this.bricks[i][j].isBroken) {
             this.bricks[i][j].collideBall();
             this.ball.collideCeiling();
             this.score += 10;
           }
           if(bPosition.y+10 >= bkPosition.y && bPosition.y+10 <= bkPosition.y+20
             && bPosition.x+5 >= bkPosition.x && bPosition.x+5 < bkPosition.x+50
             && !this.bricks[i][j].isBroken) {
             this.bricks[i][j].collideBall();
             this.ball.collidePaddle();
             this.score += 10;
           }
           if(bPosition.x <= bkPosition.x+48 && bPosition.x >= bkPosition.x
             && bPosition.y+5 < bkPosition.y+22 && bPosition.y+5 > bkPosition.y-1
             && !this.bricks[i][j].isBroken) {
             this.bricks[i][j].collideBall();
             this.ball.collideWall();
             this.score += 10;
           }
           if(bPosition.x+10 >= bkPosition.x && bPosition.x+10 <= bkPosition.x+48
             && bPosition.y+5 < bkPosition.y+22 && bPosition.y+5 > bkPosition.y-1
             && !this.bricks[i][j].isBroken) {
             this.bricks[i][j].collideBall();
             this.ball.collideWall();
             this.score += 10;
           }
         }
       }

       this.ball.update(this.gameOver);
       this.paddle.update(this.input);
     }
   }

   render() {
     this.backBufferContext.fillStyle = '#ccc';
     this.backBufferContext.fillRect(0, 0, 500, 500);
     this.backBufferContext.fillStyle = 'white';
     this.backBufferContext.fillRect(0,0,500,40);
     this.backBufferContext.fillStyle = 'black';
     this.backBufferContext.font = '14px sans-serif';
     this.backBufferContext.fillText("Score: " + this.score,400,25);
     this.brickCount = 0;
     for(var i = 0; i < 10; i++) {
       for( var j = 0; j < 5; j++) {
         if(!this.bricks[i][j].isBroken) {
           this.bricks[i][j].render(this.backBufferContext);
           this.brickCount++;
         }
       }
     }
     if(this.brickCount == 0) {
       this.gameOver(true);
     }
     this.ball.render(this.backBufferContext);
     this.paddle.render(this.backBufferContext);
     this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
   }

   loop() {
     this.update();
     this.render();
   }
 }
