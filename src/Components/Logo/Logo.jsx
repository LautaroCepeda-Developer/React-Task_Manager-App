import React from "react";
import Logo from "../../Images/ReactLogo.png";
import "./LogoStyle.css";

function ReactLogo() {
	return (
		<div className="logo__container">
			<img className="image" src={Logo} alt="React Logo" />
			<h1 className="title">REACT TASK MANAGER</h1>
		</div>
	);
}

export default ReactLogo;
