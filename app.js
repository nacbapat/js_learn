// document.getElementById();

//get things from the element
console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//change styling
document.getElementById('task-title').style.background = "#333";
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
//change the content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My tasks';

//use const 
const tasktitle = document.getElementById('task-title');
tasktitle.innerHTML = '<span style="color:red"> My tasks </span>';

//query selector new !

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));  //only the first one is fetched

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';   //css pseudo class li:last-child

document.querySelector('li:nth-child(3)').style.color = 'yellow';


document.querySelector('li:nth-child(4)').textContent= 'change';


document.querySelector('li:nth-child(odd)').textContent= 'odd';//takes only the first odd / even not all for this use the queryselectorAll function


