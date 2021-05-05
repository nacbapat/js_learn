const firstName = 'Andreas';
const lastName = 'Gotter';

const stringer = 'hello there my name is lorry';
const tags  = 'web design, web dev';

let val ;
val = 'his name is ' + firstName + ' '+ lastName;

//escaping very imp
val = 'that\'s awesome i can\'t wait' ;

val = firstName.concat(' ',lastName);

//change case
val = firstName.toUpperCase();
val = firstName.indexOf('s');
val = firstName.lastIndexOf('s');   //if not there then  -1 is returned
val = firstName.charAt('2');
val = firstName.charAt(firstName.length -1);
val = firstName.substring(0,3);   //same as slice, slice is used with arrays
val = firstName.slice(-3);

val = stringer.split(' ');    //brilliant to do data input changes
val = stringer.replace('hello', 'bye');
val = stringer.includes('hola');
console.log(val);