import React from "react";

const Modal = () => {
	const [isVisible, setIsVisible] = React.useState(true);

	if (!isVisible) return null;

	return (
		<div
			style={{
				position: "fixed",
				top: "2.5rem", // top-10
				right: "2.5rem", // left-10
				backgroundColor: "white", // bg-white
				boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)", // shadow-lg
				padding: "1rem", // p-4
				borderRadius: "0.375rem", // rounded-md
				zIndex: "999999",
				height: "80vh",
			}}
		>
			<button onClick={() => setIsVisible(false)}>Close</button>
			<h1 style={{ fontSize: "20px", color: "black" }}>
				WXT extension side panel
			</h1>
			<p>This is a custom popup</p>
			<p>This is a custom popup</p>
			<p>This is a custom popup</p>
			<p>This is a custom popup</p>
			<p>This is a custom popup</p>
			<p>This is a custom popup</p>
		</div>
	);
};

export default Modal