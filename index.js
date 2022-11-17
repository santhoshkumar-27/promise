const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, '500');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log('values' ,values);
}).catch((err) => console.log('err',err));
// expected output: Array [3, 42, "foo"]
