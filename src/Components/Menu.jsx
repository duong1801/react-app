/** @format */

// import React from "react";

export default function Menu({ menu, onReceiveData }) {
	const handleClick = () => {
		onReceiveData("dữ liệu gửi từ menu");
	};
	return (
		<div>
			<h2>Menu</h2>
			<button onClick={handleClick}>Click me !</button>
		</div>
	);
}
