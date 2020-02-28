// // localStorage と Tasks にデータを登録する関数
// const create = () => {
//   window.tasks =
//   localStorage.setItem('tasks', JSON.stringify(tasks))
// }
//
// const read = () => JSON.parse(localStorage.getItem('tasks'))
//
// const checked = (ev) => {
//   console.log('タスクのチェックボックスが操作されたときの関数', ev.target.checked)
//   // tasks の該当するタスクのチェック状態を変更する
//   // 変更された状態を localStorage に登録する処理を呼び出す
// }

const create = task => {
	let tasks = read();
	if (tasks == null || tasks.length === 0) tasks = [];
	tasks.push(task);
	setTasks(tasks);
};

const read = () => getTasks();

const update = task => setTasks(read().map(val => val.id === task.id ? task : val));

const deleteAll = () => localStorage.clear();

const setTasks = tasks => localStorage.setItem('tasks', JSON.stringify(tasks));

const getTasks = () => JSON.parse(localStorage.getItem('tasks'));
