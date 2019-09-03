var pageSettings = {
  red: 200,
  green: 200,
  blue: 200,
  background: [
    'https://pictures.s3.yandex.net/background.jpg',
    'https://pictures.s3.yandex.net/cover-color.jpg', 
    'https://pictures.s3.yandex.net/cover-grid.jpg',
    'https://pictures.s3.yandex.net/cover-typo.jpg',
    'https://pictures.s3.yandex.net/cover-wall.jpg']
}

var bgColor = 'rgb(' + pageSettings.red + ', ' + pageSettings.green + ', ' + pageSettings.blue + ')';
document.body.style.backgroundColor = bgColor;
var header = document.getElementById('main-header');
header.style.backgroundImage = 'url(' + getRandom(pageSettings.background) + ')';

var i = 0;


function getRandom(anyArray) {
  var randomNumber = Math.floor(Math.random() * anyArray.length);
  var randomElement = anyArray[randomNumber];
  return randomElement
}

var cards = document.getElementsByClassName('card');

window.addEventListener('scroll', function() {
  var scrollY = window.pageYOffset;
  var bgValue = 'rgb(' + (pageSettings.red - scrollY / 4) + ', ' + (pageSettings.green - scrollY / 4) + ', ' + (pageSettings.blue - scrollY / 4) + ')';
  
  for (var c=0; c<cards.length; c++){
    var card = cards[c];
    card.style.color ='rgb(' + (pageSettings.red * 0 + scrollY / 4) + ',' + (pageSettings.green * 0 + scrollY / 4) + ',' + (pageSettings.blue * 0 + scrollY / 4) + ')';
  }
  document.body.style.backgroundColor = bgValue;
  
});