const SCALE = 1;
const WIDTH = 16;
const HEIGHT = 18;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;
const CYCLE_LOOP = [0, 1, 0, 2];
const FACING_DOWN = 0;
const FACING_UP = 1;
const FACING_LEFT = 2;
const FACING_RIGHT = 3;
const FRAME_LIMIT = 12;
const MOVEMENT_SPEED = 1;

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let keyPresses = {};
let currentDirection = FACING_DOWN;
let currentLoopIndex = 0;
let frameCount = 0;
let positionX = 145;
let positionY = 0;
let img = new Image();
const div = document.querySelector('div')

    for (let i = 0; i < 100; i++) {
     const p = document.createElement('p')
     p.textContent = 'hello'
     div.appendChild(p)
    }

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

function loadImage() {
  img.src = 'https://i.imgur.com/s5YqOzR.png';
  img.onload = function() {
    window.requestAnimationFrame(gameLoop);
  };
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

loadImage();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let hasMoved = false;

  if (keyPresses.w) {
    moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
    hasMoved = true;
  } else if (keyPresses.s) {
    moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
    hasMoved = true;
  }

  if (keyPresses.a) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
    hasMoved = true;
  } else if (keyPresses.d) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    hasMoved = true;
  }

  if (hasMoved) {
    frameCount++;
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
      }
    }
  }
  
  if (!hasMoved) {
    currentLoopIndex = 0;
  }

  drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
  window.requestAnimationFrame(gameLoop);
}

function moveCharacter(deltaX, deltaY, direction) {

  if (positionX < 96 && 33 <= positionY && positionY <= 76) {
      positionX += 1;
      if (positionY == 33) {
        positionY -= 1;
      } else if (positionY == 76) {
        positionY += 1;
      }
    } 

  if (positionX > 186 && 33 <= positionY && positionY <= 76) {
      positionX -= 1;
      if (positionY == 33) {
        positionY -= 1;
      } else if (positionY == 76) {
        positionY += 1;
      }
    }

  if (positionX < 96 && 104 <= positionY && positionY <= 151) {
      positionX += 1;
      if (positionY == 104) {
        positionY -= 1;
      } else if (positionY == 151) {
        positionY += 1;
      }
    } 

  if (positionX > 186 && 104 <= positionY && positionY <= 151) {
      positionX -= 1;
      if (positionY == 104) {
        positionY -= 1;
      } else if (positionY == 151) {
        positionY += 1;
      }
    } 

  if (positionX < 96 && 180 <= positionY && positionY <= 228) {
      positionX += 1;
      if (positionY == 180) {
        positionY -= 1;
      } else if (positionY == 228) {
        positionY += 1;
      }
    } 

  if (positionX > 186 && 180 <= positionY && positionY <= 228) {
      positionX -= 1;
      if (positionY == 180) {
        positionY -= 1;
      } else if (positionY == 228) {
        positionY += 1;
      }
    }

  if (positionX <= 168 && positionX >= 119 && 30 <= positionY && positionY <= 56) {
      if (positionX == 119) {
        positionX -= 1;
      } else if (positionX == 168) {
        positionX += 1;
      }
      if (positionY == 30) {
        positionY -= 1;
      } else if (positionY == 56) {
        positionY += 1;
      }
    } 

  if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
    positionX += deltaX;
  }
  if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
    positionY += deltaY;
  }
  currentDirection = direction;
  console.log('X' + positionX);
  console.log('Y' + positionY);

  if (positionX == 23 && 77 <= positionY && positionY <= 103) {
    window.open("https://viv9n.github.io/interactive-1/list-poetry/");
    location.reload();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  if (positionX == 264 && 77 <= positionY && positionY <= 103) {
    window.open("https://viv9n.github.io/interactive-1/wikizine/");
    location.reload();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  if (positionX == 23 && 152 <= positionY && positionY <= 179) {
    window.open("https://viv9n.github.io/interactive-1/flags/");
    location.reload();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  if (positionX == 264 && 152 <= positionY && positionY <= 179) {
    window.open("https://viv9n.github.io/interactive-1/haiku/");
    location.reload();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  if (positionX == 23 && 229 <= positionY) {
    window.open("https://viv9n.github.io/interactive-1/musica-viva/");
    location.reload();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  if (positionX == 264 && 229 <= positionY) {
    window.open("https://viv9n.github.io/interactive-1/clock/");
    location.reload();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  if (positionY == 156 && currentDirection == FACING_DOWN) {
     window.scrollTo(0, div.scrollHeight);
  }

  if (positionY == 156 && currentDirection == FACING_UP) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
