import './style/style.scss';

// All kod härifrån och ner är bara ett exempel för att komma igång

// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
// import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data"
import toDos from './exampleArray';

// Move variables to exampleArray?

// const list = document.querySelector('#thingsToDo');

// const addToDoBtn = document.querySelector('#addToDoBtn');

// const newToDoName = document.querySelector('#newToDoField');

// HANDLEDNING
/* function addNewToDo() {
  toDos?.push(newToDoName?.value);
  console.log(list);
}

// Move function to utils when done
function printToDo() {
  list?.innerHTML = '';

  for (let i = 0; i < toDos.length; i++) {
    const toDoName = toDos[i];
    const toDoNode = document.createElement('li');
    const toDoTextNode = document.createTextNode(toDoName);
    toDoNode.appendChild(toDoTextNode);
    list?.appendChild(toDoNode);
  }
}

printToDo();

addToDoBtn?.addEventListener('click', addNewToDo); */
