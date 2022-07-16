const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const targetValue = toDoInput.value;
  const newToDo = {
    text: targetValue,
    id: Date.now(),
  };
  toDoInput.value = '';
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
};

const removeToDo = (event) => {
  const item = event.target.parentElement;
  item.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(item.id));
  saveToDos();
};

const paintToDo = (newToDo) => {
  const $li = document.createElement('li');
  const $span = document.createElement('span');
  const $button = document.createElement('button');
  $li.appendChild($span);
  $li.appendChild($button);
  $li.id = newToDo.id;
  $span.innerHTML = `<i>📌</i> ${newToDo.text}`;
  $button.innerText = '❌';
  $button.addEventListener('click', removeToDo);
  toDoList.appendChild($li);
};

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
