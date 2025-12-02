const startime = Date.now();
function someHeavyTask(){
    for (let i = 0; i < 10e7; i++) {
        Math.sprt(i);
    }
}

const endTime = Date.now();
const elapsedTime = endTime - startime;
console.log(`Elapsed time: ${elapsedTime} milliseconds`);