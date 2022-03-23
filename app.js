const clearTasks1 = document.getElementsByClassName('clear-tasks');
//or
// const clearTasks2 = document.querySelector('.clear-tasks'); //when using queryselector pass the class name like in CSS

// console.log(clearTasks2);

// const clearTasks3 = document.querySelector('.clear-tasks').addEventListener('click',function (e) {
//   console.log('hello world'); 
//   //e.preventDefault(); same as using href="#"
// }); 


const clearTasks3 = document.querySelector('.clear-tasks').addEventListener('click',onClick); 

function onClick(e) {
  //console.log('clicked');

  let val;

  val = e;
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = 'HEllo';
  console.log(val)

  //event type

  val = e.type;
  console.log(val)

  //timestamp
  val = e.timestamp;
  val = e.clientY;
  val = e.clientX;
  val = e.offsetY;    //relative to button
  val = e.offsetX;
  
  console.log(val)

  

  
}