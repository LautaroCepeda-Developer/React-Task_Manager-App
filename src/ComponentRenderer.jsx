import React from "react";
import ReactLogo from "./Components/Logo/Logo";
import Footer from "./Components/Footer/Footer";
import TaskManager from "./Components/TaskManager/TaskManager";

function RenderComponents() {
	return (
		<React.Fragment>
			<ReactLogo />
			<TaskManager />
			<Footer />
		</React.Fragment>
	);
}

export default RenderComponents;
