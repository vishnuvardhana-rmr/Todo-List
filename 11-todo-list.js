let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodo ();

function renderTodo () {
  let todoListHTML ='';

  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, duedate} = todoObject;
    const html = `
    
    <div class="js-name">${name}</div>
    <div class="js-duedate">${duedate}</div> 
    <button onclick="
      todoList.splice(${i},1);
      renderTodo();
    " class="js-add-button">Delete</button>
    `;
    todoListHTML += html; 
  } 
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodoList() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const duedate = dateInputElement.value;

  todoList.push({
    name,
    duedate
  });
  localStorage.setItem('todoList',JSON.stringify(todoList)) ;

  inputElement.value = ''; 
  dateInputElement.value = '';

  renderTodo();
}
