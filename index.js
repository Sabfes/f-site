let list = [
    'img/site-example/s1.webp',
    'img/site-example/s2.jpg',
    'img/site-example/s3.jpg'
];
let listLen = list.length;
let bg = document.getElementById('slider');
let counter = 0;

function slide() {
  if (counter < listLen) {
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter] + ')';  
    counter += 1;
    console.log(counter);
  } else {
    counter = 0;
  }
}
