//create element
const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item'
li.setAttribute('title','new Item');


//create text node
li.appendChild(document.createTextNode('hello world')); //creates between <li> </li>

const link = document.createElement('a');
link.className = "delete-item secondary-content";
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link into li
li.appendChild(link);

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);