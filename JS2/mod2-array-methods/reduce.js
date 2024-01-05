[10, 20, 30, 40, 50].reduce(function (prev, curr) {
  console.log(`prev=${prev}, curr=${curr}`);
  return prev + curr;
}); //150


const arr = ['Ehal', 'Greka', 'Cherez']

console.log(arr.reduce((p, c) => {
  console.log(p);
  return p + (c.includes("re") ? 1 : 0)
}, 0))