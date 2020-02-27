const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let x = 10;
let y = 10;
let w = 10;
let h = 10;

ctx.fillStyle = 'black';
ctx.fillRect(x, y, w, h);



const test = {
    posX: 400,
    posY: 200,
    width: 10,
    height: 10
}
ctx.fillRect( test.posX, test.posY, test.width, test.height);


document.addEventListener('keydown', function(event) {
    // console.log(x,y);
    if (x === test.posX && y === test.posY) {
        console.log('asd');
    }
    if (event.code == 'ArrowRight') {
    ctx.clearRect(x, y, w, h);
    x += 10;
    ctx.fillRect(x, y, w, h);
  }
  if (event.code == 'ArrowLeft') {
    ctx.clearRect(x, y, w, h);
    x -= 10;
    ctx.fillRect(x, y, w, h);
  }
  if (event.code == 'ArrowUp') {
    ctx.clearRect(x, y, w, h);
    y -= 10;
    ctx.fillRect(x, y, w, h);
  }
  if (event.code == 'ArrowDown') {
    ctx.clearRect(x, y, w, h);
    y += 10;
    ctx.fillRect(x, y, w, h);
  }
});
