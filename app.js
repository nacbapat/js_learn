//function declaratoin


function greet(firstName = 'John', lastName = ' Doe') { //function defaults here
  return 'hello ' + firstName + lastName;
}

console.log(greet('John',' asdfads'));
console.log(greet());


//function exporessions 
//here the function is anaoónymous but the function is assigned to the variable and one can then access the variable as if it were a function. 

const increment  = function (_initial =0) {

  return _initial + 1;
  
}

console.log(increment(44));

//Immediately invokable functions IIFE or inline ones 
//these must end with a paranthesis
(function (name) {
  console.log("hello " + name);
})('Brad');


//property functions (methods of objects)

const divya ={    //const only declares that divya will be an object

  cry : function () {
    console.log("whaaa teamviewer is not working");
  }
}

divya.cry();