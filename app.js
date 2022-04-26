//Define UI vars

const form =document.querySelector('#task-form'); //with query selector use #
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//load all the event listerners

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded',getTasks);
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTasks);
    filter.addEventListener('keyup',filterTasks);
}

// Get Tasks from LS
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task){
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Append the link to li
      li.appendChild(link);
  
      // Append li to ul
      taskList.appendChild(li);
    });
  }

function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //create li element

    const li = document.createElement('li');
    li.className = 'collection-item';   //materialize 
    //create text node and append
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';       //materilize classes
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
    //store in localstorage
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = '';
    e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure')){
        e.target.parentElement.parentElement.remove();

        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem) {

    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    })

    localStorage.setItem('tasks',JSON.stringify(tasks));
    
}

function clearTasks(e) {
 //   taskList.innerHTML = '';    //works
    
    //faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
    
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(  //returns node list unlike 
        function (task) {
            const item = task.firstChild.textContent;       //check this !
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }
            else{
                 task.style.display = 'none';
            }
        }
    );    
}