const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstname} ${this.lastName}`;
  },

  getsMarried: function(lastname){
    this.lastName = lastname;
  }
}


const mary = Object.create(personPrototypes);
mary.firstname = 'MAry';
mary.lastName = 'asdf';

console.log(mary);

const brad = Object.create(personPrototypes,{
  firstname: {value: 'peter'},
  lastName: {value: 'pfeiffer'},
  age: {value:36}
});