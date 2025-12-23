const book = {
    tittle: "1984",
    author: "George Orwell",
    isAvalilable: false,
};

BoookJSON = (JSON.stringify(book));

console.log(BoookJSON);
console.log(JSON.parse(BoookJSON));
console.log(typeof BoookJSON);
console.log(typeof book);

const ResiveBook = JSON.parse(BoookJSON);
console.log(ResiveBook.tittle);
