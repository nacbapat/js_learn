class Person{
  constructor(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greeting(){
    return `hello ${this.firstname} ${this.lastname}`
  }
}

class Customer extends Person {
  constructor(firstname,lastname,phone,membership){
    super(firstname,lastname);    //class the parent class constructor

    this.phone = phone;
    this.membership = membership;
  }

  static getMemebershipcost() {return 500;}
}

const john = new Customer('oioert','huiqwf',65,'444-698-4665');

console.log(john.greeting())    //inherted greeting


console.log(Customer.getMemebershipcost());