//REPLACE

//create element
const newHeading = document.createElement('h2');
//Add id 
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

//get old heading

const oldHeading = document.getElementById('task-title');

//parent
const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading,oldHeading)

//remove element
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul');

// remove list item
lis[0].remove();

list.removeChild(lis[3]);

//get classes and attributes of individual childresn


//classes
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);

const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;

link.classList.add('test');
link.classList.add('remove');

console.log(val);