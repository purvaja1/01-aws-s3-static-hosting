const quotes = [
  "Small steps every day lead to big results. 🌱",
  "You don't have to be perfect, just consistent. ✨",
  "One task at a time. You've got this. 💪",
  "Progress, not perfection. 🚀",
  "Every completed task is a win. Celebrate it! 🎉",
  "Focus on what matters most today. 🎯",
  "Great things are done by a series of small things. 🌟",
  "Your future self will thank you. ⏳",
  "Start somewhere. Anywhere. Just start. 🏁",
  "Done is better than perfect. ✅"
];

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function init() {
  const now = new Date();
  document.getElementById('date').textContent =
    now.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  const dayIndex = now.getDay();
  document.getElementById('quote').textContent = quotes[dayIndex % quotes.length];
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const name = document.getElementById('taskInput').value.trim();
  if (!name) return alert('Please enter a task!');
  tasks.push({
    id: Date.now(),
    name,
    priority: document.getElementById('prioritySelect').value,
    category: document.getElementById('categorySelect').value,
    time: document.getElementById('timeInput').value,
    done: false
  });
  document.getElementById('taskInput').value = '';
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const pending = tasks.filter(t => !t.done);
  const done    = tasks.filter(t =>  t.done);

  document.getElementById('emptyState').style.display =
    tasks.length === 0 ? 'block' : 'none';

  document.getElementById('taskList').innerHTML = pending.map(taskCard).join('');

  const doneSection = document.getElementById('doneSection');
  doneSection.style.display = done.length ? 'block' : 'none';
  document.getElementById('doneList').innerHTML = done.map(taskCard).join('');

  const pct = tasks.length ? Math.round((done.length / tasks.length) * 100) : 0;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = pct + '% completed';
}

function taskCard(t) {
  return `
    <div class="task-card ${t.done ? 'done' : ''}">
      <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTask(${t.id})" />
      <div class="task-info">
        <div class="task-name">${t.name}</div>
        <div class="task-meta">
          ${t.time ? '🕐 ' + t.time + ' &nbsp;' : ''}
          <span class="badge ${t.category}">${t.category}</span>
          &nbsp;<span class="badge ${t.priority}">${t.priority}</span>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteTask(${t.id})">🗑️</button>
    </div>`;
}

init();