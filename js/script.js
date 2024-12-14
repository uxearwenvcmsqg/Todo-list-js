// Получаем элементы формы и списка задач
const form = document.querySelector('.container__form');
const input = document.getElementById('input');
const taskList = document.querySelector('.container__tasks ul');

// Функция для создания нового элемента задачи
const createTaskElement = (taskText) => {
  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  // Добавляем кнопку удаления
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.className = 'delete-btn';

  deleteButton.addEventListener('click', () => {
    newTask.remove();
  });

  newTask.appendChild(deleteButton);
  return newTask;
};

// Обрабатываем событие отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  const taskText = input.value.trim(); // Получаем текст из инпута

  if (taskText === '') {
    alert('Введите задачу!');
    return;
  }

  // Создаем и добавляем новый элемент списка
  const newTask = createTaskElement(taskText);
  taskList.appendChild(newTask);

  // Очищаем поле ввода
  input.value = '';
});

// Добавляем функциональность удаления для уже существующих задач
const existingTasks = taskList.querySelectorAll('li');
existingTasks.forEach((task) => {
  const deleteButton = task.querySelector('.delete-btn');
  if (deleteButton) {
    deleteButton.addEventListener('click', () => {
      task.remove();
    });
  }
});
