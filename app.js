const name2 = new String('dihk');
name2.foo = 'bar';

console.log(name2,typeof(name2));

if (name2 === 'dihk') {   //this compares the type and the string (which is the value here)
  console.log('yes')
}
else{
  console.log('no')
}

//regex

const re1 = /\w+/;    //a regex lies between two //   / ...here comes the regex betw 2 backslashes...  /
const re2 = RegExp('\\w+');   //when using single quotes ''  the backslash has to be used for the regex

console.log(re1,re2)