function Person(firstname,lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
}

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1  = new Person('holla','doner');

console.log(person1.greeting());

function Customer(firstName,lastName,phone,membership){
  Person.call(this,firstName,lastName); //call is base function to call the constructor of Person

  this.phone = phone;
  this.membership = membership;
}

//inherit person into customer !!
Customer.prototype = Object.create(Person.prototype);
//make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create Customer

const customer1 = new Customer("tom",'smith','38833-44534-33','std');


Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} membership id: ${this.membership}`;
}

console.log(customer1);
console.log(customer1.greeting());