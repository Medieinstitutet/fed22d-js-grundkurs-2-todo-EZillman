
import './style/style.scss';

// All kod härifrån och ner är bara ett exempel för att komma igång

// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
// import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data"
//import toDos from './exampleArray';

// Move variables to exampleArray?

//Variables
const newToDoForm = document.querySelector('#newToDoForm');
const newToDoField = document.querySelector('#newToDoField');
const deadlineField = document.querySelector('#deadlineField');

const sorting = document.querySelector('#sorting');

let toDos = [
  ''
]; 

// Load todos from local storage
function loadToDos() {
  toDos = JSON.parse(localStorage.getItem('toDos')) || [];
  displayToDos();
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

// Creates new todos
function newToDo(e) {
  e.preventDefault();
  if (newToDoField.value.length === 0 || deadlineField.value.length === 0) {
    return;
  }
    if (e !== undefined) {
      const toDo = {
        content: e.target.elements.toDoContent.value,
        complete: false,
        createdAt: new Date().getTime(),
        deadline: e.target.elements.deadlineDate.value
      }

      toDos.push(toDo);
      displayToDos();
    }
}


// Checks todo if input checkbox is checked 
function toDoChecked(e) {
  const toDo = toDos[e.target.dataset.id];
  toDo.complete = e.target.checked;

  localStorage.setItem('toDos', JSON.stringify(toDos));

  const toDoItem = e.target.parentElement.parentElement;
  const checkBtnStyle = e.target.nextElementSibling;

  if (toDo.complete) {
    toDoItem.classList.add('complete');
    checkBtnStyle.classList.add('checked');
  } else {
    toDoItem.classList.remove('complete');
    checkBtnStyle.classList.remove('checked');
  }
} 


function deleteToDo(e) {
  const toDoIndex = e.target.dataset.id;

  toDos.splice(toDoIndex, 1)

  localStorage.setItem('toDos', JSON.stringify(toDos));

  displayToDos();
} 


// Makes the todos show up 
function displayToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
  const toDoList = document.querySelector('#thingsToDo');
  toDoList.innerHTML = '';

  toDos.forEach((toDo, index,) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('to-do-item');

    const checkboxDiv = document.createElement('div');
    const checkBtn = document.createElement('input');
    const checkBtnStyle = document.createElement('label');
    const toDoText = document.createElement('span');
    const deadline = document.createElement('span');
    const deleteBtn = document.createElement('button'); 

    checkBtn.type = 'checkbox';
    checkBtn.checked = toDo.complete;
    checkboxDiv.classList.add('checkbox');
    checkBtn.classList.add('check-btn');
    checkBtn.setAttribute('data-id', index);
    checkBtnStyle.htmlFor = 'checkBtn'
    checkBtnStyle.classList.add('check-btn-style');
    deleteBtn.setAttribute('data-id', index);
        
    toDoText.classList.add('to-do-text');
    deadline.classList.add('deadline');
    deleteBtn.classList.add('delete-btn');

    toDoText.innerHTML = `${toDo.content}`
    deadline.innerHTML = `Deadline: ${toDo.deadline}`
    deleteBtn.innerHTML = 'Delete'
    
    toDoItem.appendChild(checkboxDiv);
    checkboxDiv.appendChild(checkBtn);
    checkboxDiv.appendChild(checkBtnStyle);

    toDoItem.appendChild(toDoText);
    toDoItem.appendChild(deadline);
    toDoItem.appendChild(deleteBtn);

    toDoList.appendChild(toDoItem);

    checkBtn.addEventListener('click', toDoChecked);
    deleteBtn.addEventListener('click', deleteToDo); 
    sorting.addEventListener('change', sortBy);
  
  })

  // TODO: apply index to the toDos array from this function and move the sorting outside
  function sortBy(e) {
    if (e.target.value === 'deadline') {
      toDos.sort((a, b) => {
        return a.deadline === b.deadline ? 0 : a.deadline < b.deadline ? -1 : 1;
      });
    }

    if (e.target.value === 'name') {
    
    }

    if (e.target.value === 'added') {
      toDos.sort((a, b) => {
        return a.createdAt === b.createdAt ? 0 : a.createdAt < b.createdAt ? -1 : 1;
      });
    }
  }

}



  

window.addEventListener('load', loadToDos);
newToDoForm.addEventListener('submit', newToDo); 



