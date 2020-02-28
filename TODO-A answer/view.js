// 「＋」ボタンクリック
document.getElementById('btn-add-task').addEventListener('click', () => createNewTask());
// 日本語入力確定時にイベントが発生しちゃうので
// document.getElementById('new-task').addEventListener('keydown', (ev) => {
//   if (ev.key === 'Enter') createNewTask();
// });

const createNewTask = () => {
	const title = document.getElementById('new-task');
	if (!title.value) return;
	// 新しい「タスク」を追加
	createTask(title.value);
	title.value = '';
	changeSelectedList(false);
	title.focus();
};

// 「Tasks」ボタンクリック
document.getElementById('uncompleted-tasks').addEventListener('click', () => {
  readTask(false);
  changeSelectedList(false);
});

// 「Compleeted」ボタンクリック
document.getElementById('completed-tasks').addEventListener('click', () => {
  readTask(true);
  changeSelectedList(true);
});

const changeSelectedList = (completed) => {
  // TODO もっとよい書き方があるかもしれないがもう眠かった。
  if (completed) {
    document.getElementById('completed-tasks').classList.add('selected');
    document.getElementById('uncompleted-tasks').classList.remove('selected');
    return;
  }
  document.getElementById('uncompleted-tasks').classList.add('selected');
  document.getElementById('completed-tasks').classList.remove('selected');
};

const show = tasks => {

  hideTasks();
	// ごめんなさいとは思っている
	if (!tasks) { return; }
  tasks.forEach(task => {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('click', updateStatus);
    checkbox.checked = task.completed;
    checkbox.value = task.id;

    const taskTitle = document.createElement('span');
    taskTitle.innerText = `${task.id}：${task.title}`;
    taskTitle.className = 'title';

    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskTitle);

    document.getElementById('todos').appendChild(todoItem)
  });
};

const hideTasks = () => document.getElementById('todos').innerHTML = '';

// document.getElementById('btn-create-task')
//     .addEventListener('click', () => createTodoItem(document.getElementById('new-task').value))
//
// document.getElementById('uncompleted-tasks').addEventListener('click', ev => {
//   hideTasks()
//   // tasks から チェックが外れているデータだけを抽出
//   // して、それをshowTasksすればおｋ
//   // ※ showTasks は少し修正しないと↑ができないかも
//
//   return
//   // todosというdivの要素をtodosに取得
//   const todos = document.getElementById('todos')
//   // tasksのデータを呼び出す
//   const tasks = getTasks()
//
//   for(var i = 0; i<tasks.length;i++){
//     task = tasks[i]
//     const checkbox = tasks[i].completed
//
//     const todoItem = createTodoItem(tasks[i].task)
//     console.log(todoItem)
//     todos.appendChild(task)
//   }
// })
//
// const hideTasks = () => {
//   // 最初に出ているすべての要素のデータを消す
//   document.getElementById('todos').innerHTML = ''
// }
//
// const showTasks = () => {
//   tasks.forEach((task) => {
//     // const input = document.getElementById('new-task')
//     // // new-taskというidを持つ要素をinputに取得する
//
//     const todoItem = document.createElement('div')
//
//     // 新しくdivという要素を作成する。それをtodoItemとする。
//     todoItem.className = 'todo-item'
//     // DOMから引き出すときのために、todoItemを'todo-item'とする。classNameとしている理由は
//     // やることを複数追加することができるようにするため。
//     const check = document.createElement('input')
//     // 新しくinputという要素を作成する。それを　checkとする。
//     check.setAttribute('type', 'checkbox')
//     // checkの要素のタイプをチェックボックスとする。
//     check.addEventListener('click', checked)
//
//     check.checked = task.completed
//
//     const taskTitle = document.createElement('span')
//     // 新しくspanという要素を作成する。それをtitleとする。
//     taskTitle.innerText = task.task
//     // titleのinnerTextを3行目で取得したinputのvalueとする
//     taskTitle.className = 'title'
//     // DOMで引き出すためにtitleを'title'とする
//
//     //
//
//     todoItem.appendChild(check)
//     // checkの情報をDOMに送る
//     todoItem.appendChild(taskTitle)
//
//     document.getElementById('todos').appendChild(todoItem)
//   })
// }
