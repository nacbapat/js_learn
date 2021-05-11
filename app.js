// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');

console.log(items);
items[0].innerHTML = "hello";
items[3].textContent = '3';
console.log(typeof items);

const listitems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listitems);

//convert html collection to array

let  lis = document.getElementsByTagName('li');
lis = Array.from(lis); 
console.log(typeof lis);

lis.forEach(element => {
  console.log(element);
});   //lis is now an array

lis.forEach(function (loopElement,index) {
  console.log(loopElement.className,index);
  loopElement.textContent = `${index} ${loopElement.className}`;
  
})

let items_all = document.querySelectorAll('li.collection-item');    //return an nodelist directly

items_all.forEach(function (element,index) {
  console.log(`element is ${element} ${index}`);
  
})
console.log(items_all);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function (element,index) {      //use a for loop to be safe, works always
  element.style.background = "#ccc";
  
})

const liEven = document.querySelectorAll('li:nth-child(even)');
