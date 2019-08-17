let list = [
    'img/site-example/s1.png',
    'img/site-example/s2.jpg',
    'img/site-example/s3.jpg'
];
let listLen = list.length;
let bg = document.getElementById('slider');
let counter = 0;

function slideLeft() {
  if (counter > 0) {
    counter -= 1;
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter-1] + ')';
    console.log(counter);
  } else {
    counter = listLen;
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter - 1] + ')';
    
    
    console.log(counter);
  }
}
function slideRight() {
  if (counter < listLen) {
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter] + ')';  
    counter += 1;
    console.log(counter);
  } else {
    counter = 0;
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter] + ')';
    console.log(counter);
  }
}