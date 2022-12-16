
import './style/style.scss';

// All kod härifrån och ner är bara ett exempel för att komma igång

// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
// import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data"
//import toDos from './exampleArray';

// Move variables to exampleArray?

/*const list = document.querySelector('#thingsToDo');

const addToDoBtn = document.querySelector('#addToDoBtn');

const newToDoName = document.querySelector('#newToDoField');*/


/*printToDo();

function addNewToDo() {
  if (newToDoName.value.length === 0) {
    return;
  }
  if (toDos.indexOf(newToDoName.value) === -1) {
    toDos.push(newToDoName.value);
    printToDo();
  }
}

// Adding todo:s by writing in the input field and clicking on the "add" button
function printToDo() {
  list.innerHTML = '';

  for (let i = 0; i < toDos.length; i++) {
    const toDoName = toDos[i];
    const toDoNode = document.createElement('li');
    toDoNode.classList.add('to-do-item');
    const toDoTextNode = document.createTextNode(toDoName); 
    toDoNode.appendChild(toDoTextNode);

    const checkToDoBtn = document.createElement('button');
    const checkToDoBtnText = document.createTextNode('Check');
    checkToDoBtn.appendChild(checkToDoBtnText);
    checkToDoBtn.classList.add('check-btn');
    toDoNode.appendChild(checkToDoBtn);        

    const deleteToDoBtn = document.createElement('button');
    const deleteToDoBtnText = document.createTextNode('Delete');
    deleteToDoBtn.appendChild(deleteToDoBtnText);
    deleteToDoBtn.classList.add('delete-btn');
    toDoNode.appendChild(deleteToDoBtn);

    list.appendChild(toDoNode);
  }
} */

//---------------------------------------------
//------------------New method-----------------
//--------------------------------------------- 

//Variables
const newToDoForm = document.querySelector('#newToDoForm');
const newToDoField = document.querySelector('#newToDoField');
const deadlineField = document.querySelector('#deadlineField');

let toDos = [
  'Work on project',
  'Decorate christmas tree',
]; 

// Load todos from local storage
function loadToDos() {
  toDos = JSON.parse(localStorage.getItem('toDos')) || [];
  displayToDos()
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

// Creates new todos
function newToDo(e) {
  if (newToDoField.value.length === 0 || deadlineField.value-length === 0) {
    e.preventDefault();
    return;
  }
    if (e !== undefined) {
      e.preventDefault();
      const toDo = {
        content: e.target.elements.toDoContent.value,
        complete: false,
        createdAt: new Date().getTime(),
        deadline: e.target.elements.deadlineDate.value
      }
      toDos.push(toDo);
      displayToDos()
    }
}


// Makes the todos show up 
function displayToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
  const toDoList = document.querySelector('#thingsToDo');
  toDoList.innerHTML = '';

  toDos.forEach(toDo => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('to-do-item');

    const checkLabel = document.createElement('label');
    const checkBtn = document.createElement('input');
    const checkBtnStyle = document.createElement('span');
    const toDoText = document.createElement('span');
    const deadline = document.createElement('span');
    const deleteBtn = document.createElement('button');

    checkBtn.type = 'checkbox';
    checkBtn.checked = toDo.complete;
    checkLabel.classList.add('check-label');
    checkBtn.classList.add('check-btn');
    checkBtnStyle.classList.add('check-btn-style');
  

    toDoText.classList.add('to-do-text');
    deadline.classList.add('deadline');
    deleteBtn.classList.add('delete-btn');

    toDoText.innerHTML = `
    <span id="toDoText" class="to-do-text">${toDo.content}
    </span>`
    deadline.innerHTML = `<span>Deadline: ${toDo.deadline}</span>`
    deleteBtn.innerHTML = 'Delete'
    
    toDoItem.appendChild(checkLabel);
    checkLabel.appendChild(checkBtn);
    checkLabel.appendChild(checkBtnStyle);

    toDoItem.appendChild(toDoText);
    toDoItem.appendChild(deadline);
    toDoItem.appendChild(deleteBtn);

    toDoList.appendChild(toDoItem);

    // Checks todo if input checkbox is checked
    // TODO: The classlist 'complete' disappears when reloading the page, fix
    function toDoChecked(e) {
      toDo.complete = e.target.checked;
      localStorage.setItem('toDos', JSON.stringify(toDos));
    
      if (toDo.complete) {
        toDoItem.classList.add('complete');
        checkBtnStyle.classList.add('checked');
      } else {
        toDoItem.classList.remove('complete');
        checkBtnStyle.classList.remove('checked');
      }
    } 
    
    // Deletes todo when clicking on 'delete'
    function deleteToDo() {
      toDos = toDos.filter(test => test !== toDo);
      localStorage.setItem('toDos', JSON.stringify(toDos));
      displayToDos();
    }
    // CheckBtn and deleteBtn only exists in this function,
    // the eventlisteners will not work if moved outside
    checkBtn.addEventListener('click', toDoChecked)
    deleteBtn.addEventListener('click', deleteToDo);
  })
}


window.addEventListener('load', loadToDos);
newToDoForm.addEventListener('submit', newToDo); 

