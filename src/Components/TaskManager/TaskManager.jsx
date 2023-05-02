import React, { useState } from "react";
import "./TaskManagerStyle.css";
import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";

function TaskManager() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		if (task.text.trim()) {
			task.text = task.text.trim();
			const updatedTasks = [task, ...tasks];
			setTasks(updatedTasks);
		}
	};

	const deleteTask = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};

	const finishTask = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.finished = !task.finished;
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	return (
		<div className="taskmanager__container">
			<p className="taskmanager__title">TASKS</p>
			<TaskForm onSubmit={addTask} />
			{/*task down*/}

			{tasks.map((task) => (
				<Task
					key={task.id}
					id={task.id}
					text={task.text}
					finished={task.finished}
					finishTask={finishTask}
					deleteTask={deleteTask}
				/>
			))}
		</div>
	);
}

export default TaskManager;
