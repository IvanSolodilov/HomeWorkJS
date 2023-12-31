// Задание 1
/* 
Определите переменные str, num, flag и txt
со значениями «Привет», 123, true, «true».
При помощи оператора определения типа убедитесь,
что переменных принадлежат типам: string, number, boolean.
*/

let str = "Привет";
let num = 123;
let flag = true;
let txt = "true";

console.log(" str is " + typeof str + "\n num is " + typeof num +
"\n " + "flag is " + typeof flag + "\n txt is " + typeof txt);


// Задание 2
/* 
Создайте переменные a1, a2, a3, a4, a5. При помощи
математических операторов (сложение, вычитание
и т.д.) найдите значения выражений: 5 + 3, 5 - 3, 5 * 3, 5 / 3,
поместив результат каждого выражения в соответствующую
переменную, например, let a1 = 5 + 3.
*/

let a1 = 5+3;
let a2 = 5-3 ;
let a3 = 5* 3;
let a4 = 5 / 3;
let a5;

console.log(`a1 = ${a1},`, `a2 = ${a2}`, `a3 = ${a3},`, `a4 = ${a4},`, `a5 = ${a5},`,  )


// Задание 3
/* Создайте переменные a6, a7, a8, a9, a10. 
Поместите в них результат выражений: 
5 % 3, 3 % 5, 5 + '3','5' - 3, 75 + 'кг'
*/

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log (a6, a7, a8, a9, a10);


// Задание 4
/* 
Напишите скрипт, который находит площадь 
прямоугольника высота 23см. (в числовую переменную height),
шириной 10см (в числовую переменную width), 
значение площади должно хранится в числовой переменной s.
*/

let height = 23;
let width = 10;
let s = height * width;

console.log ("Площадь прямоугольная: " + s + "см");



// Задание 5
/*
Напиши скрипт, который находит объем цилиндра высотой 10м
(переменная heightC) и диаметром основания 4м (dC),
результат поместите в переменную v.
*/

let heightC = 10;
let dC = 4;
let v = (heightC * Math.PI) * ((dC ** 2) / 4)

console.log(Math.floor(v));

// Задание 6
/*
У прямоугольного треугольника две стороны n (со значением 3)
и m (со значением 4). Найдите гипотенузу k по теореме 
Пифагора (нужно использовать функцию Math.pow(число, степень) 
или оператор возведения в степень ** ).
*/

let n = 3;
let m = 4;
let k = Math.pow(n, 2) + Math.pow(m, 2)

console.log("Гипотенуза равна: " + k);

// Задание 7 (*)
/* 
Найди двенадцатый элемент (let nFib = 12, el12;)
последовательности Леонардо Пизанского (нужно
использовать функцию Math.pow(число, степень)).
Не забудьте округлить полученное число 
до целого — Math.round(число).
*/


let nFib = 12;

const Fib1 = (1 + Math.sqrt(5)) / 2;
const Fib2 = (1 - Math.sqrt(5)) / 2;

let el12 = (Math.pow(Fib1, nFib) - Math.pow(Fib2, nFib) / Math.sqrt(5));

console.log (Math.round(el12));

// В задании №7 по вычислению числа Фибоначи вроде делал все по формуле, 
//которую нашел в интернете но у меня получается 322 а в онлайн калькуляторах должно быть 144. 
// Не понял в чем у меня ошибка, можете посмотреть? 



// Задание 8 (*)
/*
Даны размер ипотечного кредита (S — 2 млн.руб),
процентная ставка (p  — 10%), кол-во лет (years — 5).
Найти переплату по кредиту, значение переплаты должно
содержаться в переменной perepl.
*/

const S = 2000000; // размер кредита
const p = 0.10; // процентная ставка
const years = 5; // кол-во лет кредита
const A = (S * p) / (1 - (1 + p) ** - years); // вычисляем аннуитентный платеж

const perepl =  A * years - S; // сюда выводим результат

console.log("Переплата: " + Math.round(perepl));