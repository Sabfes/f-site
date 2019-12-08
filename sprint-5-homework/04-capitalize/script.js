/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/


function capitalize(str) {

    let arr = str.split(' ');
    let res = [];
    arr.forEach(function(a) {
      if (a !== '') {
        res.push(a[0].toUpperCase() + a.substr(1));
      }
    });
    return res.join(' ');
  }
   
 

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"