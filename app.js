const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
form.addEventListener('submit',runEvent);

// taskInput.addEventListener('keydown',runEvent);
// taskInput.addEventListener('keyup',runEvent);
taskInput.addEventListener('keypress',runEvent);
taskInput.addEventListener('focus',runEvent); //inside of an object
taskInput.addEventListener('blur',runEvent); //outside of an object after clicking it 
taskInput.addEventListener('cut',runEvent); //cut 
taskInput.addEventListener('paste',runEvent); //paste 
taskInput.addEventListener('change',runEvent); //used on select lists 


function runEvent(e) {

   console.log(`Event type: ${e.type}`);
  // e.preventDefault();
  // console.log(taskInput.value);
  // taskInput.value = ' ';

  console.log(e.target.value);
  heading.innerText = e.target.value;

}