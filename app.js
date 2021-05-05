// type conversion


let val;

val = 4+4;

//date to string

val = String(new Date());


//number to string

val = (5).toString();

// string to number

val = Number([1,2,3]);

val = parseFloat('100.88');



console.log(val);
console.log(typeof val);
valstring  = String(val);
console.log(val.toFixed(3));// only wokrs on numbers

const  val1  = '5';
const val2  = 6;
const sum = Number(val1  + val2);   //implicit automatic conversion !!!! SO COOL !!!  type coersion !!

console.log(typeof sum);
console.log(sum)