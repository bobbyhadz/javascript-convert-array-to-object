// EXAMPLE 1 - Convert an Array to an Object using Object.assign()

const arr = ['zero', 'one', 'two'];

const obj1 = Object.assign({}, arr);
console.log(obj1); // 👉️ {0: 'zero', 1: 'one', 2: 'two'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Array to an Object using Array.forEach()

// const arr = ['zero', 'one', 'two'];

// const obj = {};

// arr.forEach((element, index) => {
//   obj[`key${index}`] = element;
// });

// // 👇️️ {'key0': 'zero', 'key1': 'one', 'key2': 'two'}
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Array to an Object using Spread syntax (...)

// const arr = ['zero', 'one', 'two'];

// const obj = {...arr};
// console.log(obj); // 👉️ {0: 'zero', 1: 'one', 2: 'two'}

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert an Array to Object using Object.fromEntries()

// const arr = [
//   ['name', 'bobby hadz'],
//   ['age', 30],
// ];

// const obj = Object.fromEntries(arr);

// console.log(obj); // 👉️ { name: 'bobby hadz', age: 30 }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert an Array to an Object using Array.reduce()

// const arr = ['zero', 'one', 'two'];

// const obj = arr.reduce((accumulator, value, index) => {
//   return {...accumulator, ['key' + index]: value};
// }, {});

// // 👇️️ {'key0': 'zero', 'key1': 'one', 'key2': 'two'}
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Convert an Array of Objects to an Object using `Object.fromEntries()`

// const arr = [
//   {name: 'country', value: 'Austria'},
//   {name: 'age', value: 30},
//   {name: 'city', value: 'Vienna'},
// ];

// const obj = Object.fromEntries(
//   arr.map(obj => [obj.name, obj.value]),
// );

// // 👇️ { country: 'Austria', age: 30, city: 'Vienna' }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Convert an array to an Object using a `for` loop

// const obj = {};

// const arr = ['bobby', 'hadz', 'com'];

// for (let index = 0; index < arr.length; index++) {
//   obj[index] = arr[index];
// }

// // 👇️ { '0': 'bobby', '1': 'hadz', '2': 'com' }
// console.log(obj);
