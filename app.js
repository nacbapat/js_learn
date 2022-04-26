//Define UI vars

const form =document.querySelector('#task-form'); //with query selector use #
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//load all the event listerners

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',remoteTask);
    clearBtn.addEventListener('click',clearTasks);
    filter.addEventListener('keyup',filterTasks);
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
    taskInput.value = '';
    e.preventDefault();
}

function remoteTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks(e) {
 //   taskList.innerHTML = '';    //works
    
    //faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }   
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