import { Linter } from 'eslint';
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

// TODO: Move function to utils when done
// Adding todo:s by writing in the input field and clicking on the "add" button
function printToDo() {
  list.innerHTML = '';

  for (let i = 0; i < toDos.length; i++) {
    const toDoName = toDos[i];
    const toDoNode = document.createElement('li');
    toDoNode.classList.add('to-do-item');
    const toDoTextNode = document.createTextNode(toDoName); // TODO: Move the textnode so the check button is to the left
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

let toDos = [
  'Work on project',
  'Decorate christmas tree',
]; 

// Load todos from local storage
function loadToDos() {
  toDos = JSON.parse(localStorage.getItem('toDos')) || [];
  
  newToDo()

  localStorage.setItem('toDos', JSON.stringify(toDos));
}

// Creates new todos
function newToDo(e) {
  e.preventDefault();

  const toDo = {
    content: e.target.elements.toDoContent.value,
    done: false,
    createdAt: new Date().getTime()
  }

  toDos.push(toDo);

  displayToDos();
}

// Makes the todos show
function displayToDos() {
  const toDoList = document.querySelector('#thingsToDo');

  toDoList.innerHTML = '';

  toDos.forEach(toDo => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('to-do-item');

    const checkBtn = document.createElement('button');
    const toDoText = document.createElement('input');
    const deadlineLabel = document.createElement('label');
    const deadlineDate = document.createElement('input');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
  })
}

//addToDoBtn.addEventListener('click', addNewToDo); 

window.addEventListener('load', loadToDos);
newToDoForm.addEventListener('submit', newToDo); 

