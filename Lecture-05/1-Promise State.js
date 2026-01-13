const promise = new Promise((resolve, reject) => {
    const res = true;
    if (res) {
        resolve('Resolved');
    } else {
        reject('Fatal Error!.');
    }   
});

promise.then(
    (res) => console.log(res),
    (err) => console.error(err)
);