let list = [
    'img/site-example/s1.png',
    'img/site-example/s2.jpg',
    'img/site-example/s3.jpg'
];
let listLen = 2;
let bg = document.getElementById('slider');
let counter = 0;

let li = [
  'li1',
  'li2',
  'li3'
];

function slideLeft() {
  if (counter > 0) {
    counter -= 1;
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter] + ')';
    document.getElementById(li[counter + 1]).style.backgroundColor = '#F3F3F3';
    console.log(counter);
  } else {
    counter = 2;
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter] + ')';
    document.getElementById(li[counter - 2]).style.backgroundColor = '#F3F3F3';
    console.log(counter);
  }
  if (counter != 0) {
    document.getElementById(li[counter]).style.backgroundColor = 'yellow';
  } else {
    document.getElementById(li[counter]).style.backgroundColor = 'yellow';
  }
}
function slideRight() {
  if (counter < 2) {
    counter += 1;
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter] + ')'; 
    document.getElementById(li[counter - 1]).style.backgroundColor = '#F3F3F3';  
    console.log(counter);
  } else {
    counter = 0;
    document.getElementById('slider').style.backgroundImage = 'url(' + list[counter] + ')';
    document.getElementById(li[counter + 2]).style.backgroundColor = '#F3F3F3';
    console.log(counter);
  }
  if (counter == 2) {
    document.getElementById(li[counter]).style.backgroundColor = 'yellow';
  } else {
    document.getElementById(li[counter]).style.backgroundColor = 'yellow';
  } 
}
 