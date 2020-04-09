var books = require ('./books'); 
var bookArray = new Array ('books');
const arrLength = books.length;
for (let i= 0; i < arrLength; i++){
console.log (".........................................." + "\n" + "Book:" +books[i].title + "\n" + "Author:" +books[i].author + "\n") 
}

let publisher = "O'Reilly Media"
for (let i=0; i<arrLength; i++){
console.log (books[i].title+ "\n")
}
 
for (let i=0; i<arrLength; i++){
if (books[i].pages>=350)
console.log (books[i].title + "\n")
}



