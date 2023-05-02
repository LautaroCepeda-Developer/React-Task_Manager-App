import React from "react";
import "./TaskStyle.css";
import DeleteIcon from "../../Images/DeleteIcon.png";

function Task({ id, text, finished, finishTask, deleteTask }) {
	return (
		<div
			className={
				finished ? "task__container finished" : "task__container"
			}
		>
			<div className="task__text" onClick={() => finishTask(id)}>
				{text}
			</div>
			<img
				className="task__icon"
				src={DeleteIcon}
				alt="Delete task icon"
				title="Designed by rukanicon from Flaticon"
				onClick={() => deleteTask(id)}
			></img>
		</div>
	);
}

export default Task;
