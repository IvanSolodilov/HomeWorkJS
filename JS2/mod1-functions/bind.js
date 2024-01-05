const book = {title: 'JS'};
function setPrice(price){
    this.price = price
}

setPrice.apply(book,["100"]);
setPrice.call(book,"2000");
const stoimost = setPrice.bind(book);
stoimost('3000');
console.log(book)


