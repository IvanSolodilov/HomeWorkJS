/* Реализуйте каррирование для функции сложения чисел sum() */

function sum(a, b){
  return a + b;
}
console.log(sum(3, 5)); 8

const sum2 = function sum2(a) {
  return function sum2(b) {
 return function sum2(c){
  return function sum2(d) {
    return a + b + c + d;
  };
 };
  };
}

console.log(sum2(3)(5)(10)(11)); 