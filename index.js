let list = [
    'img/s1.jpg',
    'img/s2.jpg',
    'img/s3.jpg',
    'img/s4.png',
    'img/s5.jpg'
];
let listLen = 4;
let bg = document.getElementById('portfolio-slide');
let counter = 0;

let li = [
  'li1',
  'li2',
  'li3',
  'li4',
  'li5'
];

function slideLeft() {
  if (counter > 0) {
    counter -= 1;
    document.getElementById('portfolio-slide').style.backgroundImage = 'url(' + list[counter] + ')';
    document.getElementById(li[counter + 1]).style.backgroundColor = '#C4C4C4';
    console.log(counter);
  } else {
    counter = 4;
    document.getElementById('portfolio-slide').style.backgroundImage = 'url(' + list[counter] + ')';
    document.getElementById(li[counter - 4]).style.backgroundColor = '#C4C4C4';
    console.log(counter);
  }
  if (counter != 0) {
    document.getElementById(li[counter]).style.backgroundColor = 'yellow';
  } else {
    document.getElementById(li[counter]).style.backgroundColor = 'yellow';
  }
}
function slideRight() {
  if (counter < 4) {
    counter += 1;
    document.getElementById('portfolio-slide').style.backgroundImage = 'url(' + list[counter] + ')'; 
    document.getElementById(li[counter - 1]).style.backgroundColor = '#C4C4C4';  
    console.log(counter);
  } else {
    counter = 0;
    document.getElementById('portfolio-slide').style.backgroundImage = 'url(' + list[counter] + ')';
    document.getElementById(li[counter + 4]).style.backgroundColor = '#C4C4C4';
    console.log(counter);
  }
  if (counter == 4) {
    document.getElementById(li[counter]).style.backgroundColor = 'yellow';
  } else {
    document.getElementById(li[counter]).style.backgroundColor = 'yellow';
  } 
}
