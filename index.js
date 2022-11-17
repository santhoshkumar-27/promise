const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 100, '500');
    setTimeout(reject, 100, '500');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log('values', values);
}).catch((err) => console.log('error', err));
// expected output: Array [3, 42, "foo"]

/*
    Promise.all() takes a array of promise it give only one output promise
    And it give result only all promise get resolve, it will go to the resolve block
    suppose it will get any reject any one of these
    it will go to the catch block
*/
