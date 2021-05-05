//arrays 

const numbers = [1,2,8,45,34,634];
const numbers2 = new Array(5,5,27,23,34,2);

const fruit = ["apple", ' banana', 'orange', 'pear'];
const mixed = ['hello', 1, true, null,{a:1, g:4}, new Date()];

let val;
val = numbers.length;
val = Array.isArray(numbers);
val = numbers[3];
val = numbers.indexOf(8);
numbers.push(250); //back
numbers.unshift(120);   //front
numbers.pop();    
numbers.shift();
numbers.splice(0,3);    //start and end to remove particular 
numbers.reverse();

//concatenate array.
val = numbers.concat(numbers2);
val = fruit.sort();

//compare function
val = numbers.sort((function (x,y) {
  return y-x;
  
}))

function under50(num) {
  return num < 50;
}

val = numbers.find(under50);
console.log(numbers);
console.log(val);