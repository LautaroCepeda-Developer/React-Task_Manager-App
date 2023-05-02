import React, { useState } from "react";
import "./TaskFormStyle.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
	const [input, setInput] = useState("");

	const handleChange = (evt) => {
		setInput(evt.target.value);
	};

	const handleShipping = (evt) => {
		evt.preventDefault();
		const newTask = { id: uuidv4(), text: input, finished: false };
		props.onSubmit(newTask);
	};

	return (
		<form className="task__form" onSubmit={handleShipping}>
			<input
				className="form__input"
				type="text"
				placeholder="Write a task"
				name="text"
				autoComplete="off"
				onChange={handleChange}
			/>
			<button className="form__button">Add task</button>
		</form>
	);
}

export default TaskForm;
