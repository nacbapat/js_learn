//object literals

const person = {
  firstName : 'Andreas',
  lastName : 'Gotter',
  age: 44,
  email: 'hello@gmail.com',
  hobbies : ['music', 'programming'],
  address : {
    area: 'brand',
    state : 'NRW',
  },
  getBirthyear : function () {
    return 2021 - this.age; 
  }
}



let val ;


val = person;

val =person.firstName; 
val = person['lastName'];
val = person.hobbies[0];
val = person.address.area;
val = person.getBirthyear();

const people = [
  {name : 'lisa', age : 24},
  {name : 'lars', age : 25},
  {name : 'chris', age : 45},
];

for (let index = 0; index < people.length; index++) {
  console.log(people[index].name);
}

console.log(val);
