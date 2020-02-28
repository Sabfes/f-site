const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = 'black';
ctx.font = '30px arial';

let width = 500;
let height = 500;

// player1
const player1 = {
  x: 50,
  y: 40,
  name: 'P',
  speedX: 30,
  speedY: 5,
}

// Enemy 
const enemy1 = {
  x: 150,
  y: 350,
  name: 'E',
  speedX: 10,
  speedY: 15,
}
const enemy2 = {
  x: 250,
  y: 350,
  name: 'E',
  speedX: 20,
  speedY: 10,
}
const enemyList = {
  'E1': enemy1,
  'E2': enemy2,
}


function updateEntity(something) {
  ctx.fillText(something.name , something.x, something.y);
  something.x += something.speedX;
  something.y += something.speedY;

  if (something.x < 0 || something.x > width) {
    something.speedX = -something.speedX;
  }
  if (something.y < 0 || something.y > height) {
    something.speedY = -something.speedY;
  }
}
function update() {
  ctx.clearRect(0,0, width, height);
  updateEntity(player1);
  for (let key in enemyList) {
    updateEntity(enemyList[key]);
  }
}
setInterval(update, 40);

// document.addEventListener('keydown', function(event) {
//     if (x === test.posX && y === test.posY) {
//         console.log('asd');
//     }
//     if (event.code == 'ArrowRight') {
//     ctx.clearRect(x, y, w, h);
//     x += 10;
//     ctx.fillRect(x, y, w, h);
//   }
//   if (event.code == 'ArrowLeft') {
//     ctx.clearRect(x, y, w, h);
//     x -= 10;
//     ctx.fillRect(x, y, w, h);
//   }
//   if (event.code == 'ArrowUp') {
//     ctx.clearRect(x, y, w, h);
//     y -= 10;
//     ctx.fillRect(x, y, w, h);
//   }
//   if (event.code == 'ArrowDown') {
//     ctx.clearRect(x, y, w, h);
//     y += 10;
//     ctx.fillRect(x, y, w, h);
//   }
// });
