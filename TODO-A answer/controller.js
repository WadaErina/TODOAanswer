const createTask = title => {
	const newTask = {
		id: createNewId(read()),
		title,
		completed: false
	};
	create(newTask);
	show(extractTask(read(), false));
};

const readTask = completed => {
	const tasks = read();
	if (tasks == null || tasks.length === 0) return;
	show(extractTask(tasks, completed));
};

// checkbox の状態変化時
const updateStatus = ev => {
	let task = read().find(task => task.id == ev.target.value);
	task.completed = ev.target.checked;
	update(task);
	readTask(!ev.target.checked);
};

const createNewId = tasks => {
	if (!tasks) return 1;
	const latestTask = tasks.reduce((pre, next) => pre.id < next.id ? next : pre);
	return latestTask.id + 1;
};

const extractTask = (tasks, completed) => {
	if (tasks === null) { return; }
	return tasks.filter((t) => t.completed === completed);
};

// LocalStorage を初期化
window.onload = () => {
	changeSelectedList(false);
	show(extractTask(read(), false));
};
