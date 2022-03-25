//event bubbling

// document.querySelector('.card-title').addEventListener('click',function () {
//   console.log('card title');
// })

// document.querySelector('.card-content').addEventListener('click',function () {
//   console.log('card content');
// })

// document.querySelector('.card').addEventListener('click',function () {
//   console.log('card');
// })

//event delegation

document.body.addEventListener('click',deleteItem);

function deleteItem(e) {
  if(e.target.className === 'delete-item secondary-content'){
    console.log('delete item');
  }
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('work');
    e.target.parentElement.parentElement.remove();
  }
}