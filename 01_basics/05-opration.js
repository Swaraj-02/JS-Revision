console.log("1" + 2); //12
console.log(1 + "2"); //12

console.log("1" + "2"); // 12

console.log("1" + 2 + 2); //122
console.log("1" + 2 + "2"); //122

console.log(1 + 2 + "2"); //32 = 3 + "2" => 32

console.log(1 + 2 + "2" + 2); // 322

console.log((1 + 2) * "2"); // 6
console.log(typeof ((1 + 2) * "2")); //number

/* 

NOTE => in operational conversion First type is always preforable by JS 
if String 1st then it will treated as string or if number 1st then it will treated as number 

*/

console.log(true);

//-- Bad programming --

console.log(+true); // 1
console.log(-true); //-1

console.log(+false); // 0
console.log(-false); // -0

//--- Increment and decrement oprators ---
let gameCount = 100;
gameCount++;
console.log(gameCount); //101

gameCount--;
console.log(gameCount); // 100

++gameCount;
console.log(gameCount); //101

--gameCount;
console.log(gameCount); //101
