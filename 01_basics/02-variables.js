/* 
Notes -> Keywords - let, const, var

1- let - we can easily change the value in code snippet.
2- const - It is constant value type variable.we can not easily change the value in code snippet.
3- prefer not use var because of issue in block scope and functinal scope. 
4- we can also define variables value without using keywords like below[accountCity] but its not good practice.
5- if we can define a variables without giving value like below [accountState] its show - undefine. 
*/

const accountId = 123;
let accountEmail = "swaraj@google.com";
var accountPassword = "2023";
accountCity = "Puri";
let accountState; //showing - undefined

// accountId = 2;
console.log(accountId);
console.log(accountCity);

console.log("-------------------"); // Separates in Terminal

accountEmail = "swaraj@microsoft.com";
accountPassword = "2024";
accountCity = "BBSR";

console.log(
  `New email = ${accountEmail} and New password = ${accountPassword}`
);

/* 
Showing the value in table formats using - .table() method
-> you have to put all the variable in [] - array formats 
*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
