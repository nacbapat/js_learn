// // var , let , const 

// var namer = "Andreas";
// console.log(namer);

// namer = "john doe";
// console.log(namer);

// //Init
// var greeting;

// console.log(greeting);

// greeting = "hello";
// console.log(greeting);

// //letters, numbers, _, $ can be allowed, cannot start with number

// var $namer = "elcin";   //allowed  used mainly in jQuery
// var _namer ;    //also allowed

// // Mutli word cariables 

// var firstName = 'John'; //camelcase <- this is to be used
// var first_name = 'sarah' // underscore convention
// var FirstName ;   //Pascal case   <- Class and Constructor is upperrcase


//let 
// let name; also works
let namer = "Andreas";
console.log(namer);
namer = "john doe";
console.log(namer);

//const 
// !! important operation on data type and not on the variable value in arrays and objects

const namer2 = "john";  //must be init
// namer2 = 'sarah'; //does not work !!

const person = {
  name: 'john',
  age: 30
}

console.table(person);

person.name = 'sarah';

console.table(person);

const numbers = [1,2,2,4,5];
numbers.push(6);
// numbers = [1,2,6,4,3]; <- not allowed ! 
