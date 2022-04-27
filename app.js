class Person {
  constructor(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greeting(){
    return ` Hello ${this.firstname} ${this.lastname}`;
  }

  static addnumber(x,y){return x+y;}
}

const mary = new Person('mary','higgins');
console.log(mary.greeting())
// console.log(mary.addnumber(1,2));   //error
console.log(Person.addnumber(1,2));