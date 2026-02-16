function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if(task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.onclick = () => li.classList.toggle('done');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
