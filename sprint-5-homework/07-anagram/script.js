/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    if (str1.toLowerCase() === str2.toLowerCase()) {
      return false;
    }
    let arr = str1.split('');
    for (let i=0; i<str2.length; i++) {
      if ( !arr.includes(str2[i].toLowerCase()  )) {
        return false;
      } else {
        return true;
      }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('up', 'UP')); // false