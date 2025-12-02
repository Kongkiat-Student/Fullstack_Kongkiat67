function generateTempID(){
    const randomPart = Math.random().toString(36).substring(2,10);
    return randomPart.toUpperCase();
}

const orderID = generateTempID();
console.log("Your temporary order ID is: " + orderID);