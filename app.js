const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

clearBtn.addEventListener('click',runEvent);
clearBtn.addEventListener('dblclick',runEvent);
clearBtn.addEventListener('mousedown',runEvent);
clearBtn.addEventListener('mouseup',runEvent);
clearBtn.addEventListener('mouseenter',runEvent);
clearBtn.addEventListener('mouseleave',runEvent);
clearBtn.addEventListener('mouseout',runEvent); //if there are any elements inside the button then this will be treiggered with leaving that element
card.addEventListener('mouseout',runEvent); //if there are any elements inside the button then this will be treiggered with leaving that element




//event handler

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  heading.innerHTML = `mouseX: ${e.offsetX} mousey: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}