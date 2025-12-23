let values1 = ['Apple','1','false'];
let values2 = ['Fries','2','true','Apple'];
let values3 = ['Mars','9','Apple','false'];
let copyword = [];

for (checkword = 0; checkword< values1.length; checkword++) {
    word = values1[checkword];
    for (checkword2 = 0; checkword2 < values2.length; checkword2++) {
        word2 = values2[checkword2];
        // if (word == word2) {
        //     console.log("Found duplicate word: " + word);
        // }
        for (checkword3 = 0; checkword3 < values3.length; checkword3++) {
            word3 = values3[checkword3];
            if (word == word2 && word == word3) {
                copyword.push(word);
            }
        }
    }
}   

console.log(copyword);