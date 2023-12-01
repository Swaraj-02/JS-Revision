let score = 33;

console.log(typeof score);

// Type conversion

let scoreOne = "33";

console.log(typeof scoreOne); // String

let conversionNumber = Number(scoreOne); // Cconvert into number [ Number() method]
console.log(typeof conversionNumber); // number type

console.log("------------------------");

// ---- Adding one string with a number to see the result ----
const a = 2,
  b = "4aa";

const c = a + b;
console.log(typeof c); // showing string type

const newType = Number(c); // the string will convert into number
console.log(typeof newType); // type is number but ----
console.log(newType); // NaN ( But output is not a number) coz b = "4aa"

console.log("-------------NaN & null-----------");

console.log(typeof NaN); //number

let scoreTwo = null;

console.log(scoreTwo); // null value = 0
console.log(typeof scoreTwo); // object

console.log("------------undefiend------------");

let scoreThree = undefined;

console.log(scoreThree); // undefined
console.log(typeof scoreThree); // undefined

console.log("-----------Boolean value-------------");

let scoreFour = true;

console.log(scoreFour);
console.log(typeof scoreFour); //boolean

console.log("-----------Array value-------------");

let scoreFive = [1, 2, 3];

console.log(scoreFive);
console.log(typeof scoreFive); //object

console.log("------------------------------");

//Create a string then see the result when we convert to number

let userName = "swaraj";

console.log(typeof userName); //string

// convert into a number

const newName = Number(userName); // did not convert
console.log(typeof userName); // string

/* 

=> we can convert to any value to Number useing [Number()] method like wise we also convert into into string and boolean using [String()] & [Boolean()] methods.

*/

console.log("-----check a boolean conversion-----");

let isLoggedIn = 0; // if 1 => true / if 0 => false

let booleanLoggedIn = Boolean(isLoggedIn); // convert into boolean
console.log(booleanLoggedIn);

console.log("----------");

// if we convert empty variable then -

let empty = ""; // if " " => false / if "sd" => true

let newEmp = Boolean(empty); // convert into boolean
console.log(newEmp); // false

console.log("-----check a String conversion-----");

let someNumber = 33;

let newSomeNumber = String(someNumber); // convert to string

console.log(newSomeNumber);
console.log(typeof newSomeNumber);
