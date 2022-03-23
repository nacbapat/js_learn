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