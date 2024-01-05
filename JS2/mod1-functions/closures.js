/* Напишите функцию counter(), которая при каждом вызове возвращает число на единицу большее предыдушего  */

function fn() {
    let i = 1;
    return function(){
        return i++;
    }
}

const counter = fn();

console.log( counter() ); //1
console.log( counter() ); //2
console.log( counter() ); //3