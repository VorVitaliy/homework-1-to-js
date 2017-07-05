"use strict";

/*
    1. Создать 15-ти элементный массив с рандомными числами и вывести их в консоли, при этом числа не должны
    повторяться.
    2.Написать фукнцию, с помощью которой можно заменить любой элемент массива, указываем какой элемент
    и меняем на либо-что.
    3. Элемент который заменяем, вставляем как строку.
    4. Элемент который заменяем, вставляем как число.
*/

function createArr() {
    var result = [];
    var randomNumber;

    for(var i = 0; result.length < 15; i++){
        randomNumber = Math.floor(Math.random() * 100);
        if(result.indexOf(randomNumber) == - 1) {
            result.push(randomNumber);
        }
    }
    return result;
}

function modificationArr(index, value) {
    var arr = createArr();
    arr.splice(index, 1, value);
    return arr;
}


console.log('15-ти элементный массив с неповторяющимися числами', createArr());
console.log("Заменим любой элемент массива на строку: ", modificationArr(11, 'kgfldjklgjfd;'));
console.log("Заменим любой элемент массива на число: ", modificationArr(6, 5555555));
