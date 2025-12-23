const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    checkOut: function(){
    this.isAvailable = false;
    },

    checkIN: function(){
    this.isAvailable = true;
    }

};

console.log(typeof book);
console.log(book);
console.log("Title",book.title);
console.log("Is Avalable",book.isAvalilable);
book.checkIN();
console.log(book.isAvailable);
book.checkOut();
console.log(book.isAvailable);


