let input = document.querySelector('.input');
let button1 = document.querySelector('.button1');
let h1 = document.querySelector('.h1');

/* BUTTON1 ДОБАВЛЕНИЕ ЗАДАЧ */
button1.onclick = () => {
  let text = document.querySelector('.inputV').value;
  if (text == '') {
    alert('Введите сообщение');
  } 
  else {
    let newB = document.createElement('div');
    newB.classList.add('block');
    newB.innerHTML += text;

    let blocktest = document.querySelector('.block-test');
    blocktest.prepend(newB);
    
    /* ПЕРЕНОС ЗАДАЧ В DELETE SECTION */

    newB.onclick = () => {
      let mainsec2 = document.querySelector('.mainsec2');
      mainsec2.append(newB);  

      /* УДАЛЕНИЕ ИЗ DELETE СЕКЦИИ */
      newB.onclick = () => {
        newB.remove();
      }
    }
    document.querySelector('.inputV').value = '';  
  }
}
/* BUTTON 2 DELETE SECTION OPEN*/ 
let button2 = document.querySelector('.button2');
button2.onclick = () => {
  let mainsec2 = document.querySelector('.mainsec2');
  let mainsec1 = document.querySelector('.mainsec');
  mainsec2.style.display = 'initial';
  mainsec1.style.display = 'none';
}
/* BUTTTON3 MAIN SECTION OPEN */
let button3 = document.querySelector('.button3');
button3.onclick = () => {
  let mainsec2 = document.querySelector('.mainsec2');
  let mainsec1 = document.querySelector('.mainsec');
  mainsec2.style.display = 'none';
  mainsec1.style.display = '';
}


