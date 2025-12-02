const a =5;
const b =3;


const add = function(a, b) {
    return a + b;
};

const add1  = (a, b) => a + b;

const substract = (a, b) => {
    const result = a - b;
    return result;
};

console.log(add(5, 3));
console.log(add1(5, 3));
console.log(substract(5, 3));


console.log(`Add 1 result is ${add1(a,b)}`);