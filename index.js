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


// Promise.allsettled
const promise4 = Promise.resolve(3);
const promise5 = 42;
const promise6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 500);
    // setTimeout(reject, 100, '500');
});

Promise.allSettled([promise4, promise5, promise6])
.then((results) => console.log(results))
.catch((err) => console.log(err));


/*
    Promise.allSettled() takes a array of promise it give only one output promise array of settled outpu
    And it give a array of object which consist of the property status, value or reason to the respective promise
*/


/**
 * @param
 * @returns
 */ 

/**
 * @param  {} firstName
 * @param  {} lastName
 * @returns Full name combined by concat with firstName + lastName
 */
function name(firstName, lastName) {
    return firstName + lastName;
}