let val ;

const list = document.querySelector('ul.collection');
var listitem = document.querySelector('li.collection-item');  //will select first one 
var listitem = document.querySelector('li.collection-item:first-child');  

val = list;

//get child nodes
val = list.childNodes;  //this will return node list

//get children    //more used !!
val = list.children;    //this will return html collection

// 1 element
//2 - atribute
// 3 - text node      //this is the line bread
// 8 -comment
//9 - document itself
// 10 -doctype

val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

val = list.children[1].textContent = 'changed text';
//children of children
list.children[3].children[0].id = 'new-id';
val = list.children[3].children[0];

//first
val = list.firstChild;    //text node
val = list.firstElementChild; //actual element //more used

//last
val = list.lastChild;    //text node
val = list.lastElementChild; //actual element //more used

//count the child elements
val =list.childElementCount;

//get parent node
val = listitem.parentElement;
val =listitem.parentElement.parentElement
//sibing
val =listitem.nextSibling;    //this will catch line breaks
val =listitem.nextElementSibling; //this will eliminate the line breaks


// console.log(listitem);
console.log(val);

