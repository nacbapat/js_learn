const add = {
  name: 'Nachiket',
  age: '30'
}

//constructor
//Person Constructor

function Person(nameIn,dob) {
  this.name = nameIn;
  this.birthday = new Date(dob);
  this.getAge = function () {
    const diff = Date.now() - this.birthday;
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  console.log(this);    //return self 
}

const nachi = new Person('nachiket',30);
const brad = new Person('brad','9-10-1981');

console.log(nachi.name);  //like c++
console.log("brad birtda ",brad.birthday,brad.getAge());