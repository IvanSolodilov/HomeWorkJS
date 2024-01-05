const arr = ["Ehal", "Greka", "Cherez", 100];

console.log(arr.some(el => typeof el == "number"));

console.log(arr.every(el => typeof el == "number"));