const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = 'black';
ctx.font = '30px arial';

let width = 500;
let height = 500;
const timeWhenGameStarted = Date.now();

document.onmousemove = function(move) {
  const mouseX = move.clientX;
  const mouseY = move.clientY;
  
  player1.x = mouseX;
  player1.y = mouseY;
  
}
// player1
const player1 = {
  name: 'P',
  hp: 20,
  width: 20,
  height: 20,
  color: 'green',
};

const enemyList = {};

enemyCreate('E1', 150, 350, 10, 15 , 30, 30, 'red');
enemyCreate('E2', 250, 350, 10, -15, 20, 20, 'red');
enemyCreate('E3', 350, 150, 10, -5, 40, 10, 'red');

function getDistanceBetweenEntity(entity1, entity2) {
  const vx = entity1.x - entity2.x;
  const vy = entity1.y - entity2.y;
  return Math.sqrt(vx*vx + vy*vy);
}
function testCollisionEntity(entity1, entity2) {
  let rect1 = {
    x: entity1.x - entity1.width/2,
    y: entity1.y - entity1.height/2,
    width: entity1.width,
    height: entity1.height,
  }
  let rect2 = {
    x: entity2.x - entity2.width/2,
    y: entity2.y - entity2.height/2,
    width: entity2.width,
    height: entity2.height,
  }
  return testcollisionRectRect(rect1, rect2);
}

function testcollisionRectRect(rect1, rect2) {
  return rect1.x <= rect2.x + rect2.width
    && rect2.x <= rect1.x + rect1.width
    && rect1.y <= rect2.y + rect2.height
    && rect2.y <= rect1.y + rect1.height;
}

function enemyCreate(id, x, y, speedX, speedY,width, height, color) {
  const enemy = {
    x: x,
    y: y,
    name: 'E',
    speedX: speedX,
    speedY: speedY,
    width: width,
    height: height,
    color: color,
  };
  enemyList[id] = enemy;
}
function updateEntity(something){
  updateEntityPosition(something);
  drawEntity(something);
}
function updateEntityPosition(something) {
  something.x += something.speedX;
  something.y += something.speedY;

  if (something.x < 0 || something.x > width) {
    something.speedX = -something.speedX;
  }
  if (something.y < 0 || something.y > height) {
    something.speedY = -something.speedY;
  }
};

function drawEntity(something) {
  ctx.save();
  ctx.fillStyle = something.color;
  ctx.fillRect(something.x-something.width/2, something.y-something.height/2, something.width, something.height);
  ctx.restore();
}

function update() {
  ctx.clearRect(0,0, width, height);
  
  for (let key in enemyList) {
    updateEntity(enemyList[key]);

    let isColliding = testCollisionEntity(player1, enemyList[key]);
    if (isColliding) {
      player1.hp -= 1;
      if (player1.hp <= 0) {
        const timeSurv = Date.now() - timeWhenGameStarted;
        console.log('You surv ' + timeSurv/1000 + "s");
        timeWhenGameStarted = Date.now();
        player1.hp = 20;
      }
    }
  }

  drawEntity(player1);
  ctx.fillText(player1.hp + ' HP',0,30)
};
setInterval(update, 40);
