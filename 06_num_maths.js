// const score = 400
// console.log(score);
// const balance = new Number(80)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // formats the number to 2 decimal places


// const number = 10.823456789;
// console.log(number.toFixed(3)); // formats the number to 3 decimal places
//  console.log(number.toPrecision(2)); // formats the number to 4 significant digits
// // console.log(number.toExponential(2)); // formats the number in exponential notation with 2
// // decimal places

// console.log(number.toLocaleString('en-US', { style: 'currency', currency: 'PKR' })); // formats the number as USD currency

//  ************ maths ******************

console.log(Math)
console.log(Math.random()); // prints the value of PI
console.log(Math.PI); // prints the value of PI
console.log(Math.random()*10 + 1 ); 
console.log(Math.floor(Math.random() * 10 + 1)); // generates a random number between 1 and 10


const min = 10
const max = 20
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // generates a random number between min and max
console.log(randomNumber);