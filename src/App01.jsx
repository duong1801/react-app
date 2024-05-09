/** @format */
// import React from "react";
// import Header from "./Components/Header";
function App() {
	const title = "Học React không khó";
	const isPrimary = false;
	const isLogin = true;
	// let welcome = <h2>Chào mừng bạn đã quay trở lại</h2>;
	// if (!isLogin) {
	// 	welcome = <h2>Vui lòng đăng nhập để tiếp tục</h2>;
	// }
	const handleClick = (text) => {
		console.log("hello", text);
	};

	const lists = ["item 1", "item 2", "item 3"];
	return (
		<>
			{lists.map((item, index) => (
				<h3 key={index}>{item}</h3>
			))}

			<div>
				<h1>{title}</h1>
				{isLogin ? (
					<h2>Chào mừng bạn quay trở lại</h2>
				) : (
					<h3>Vui lòng đăng nhập để tiếp tục</h3>
				)}
			</div>
			{isLogin || (
				<button
					onClick={function () {
						handleClick("F8");
					}}
					className={`btn btn-${isPrimary ? "primary" : ""}`}>
					Click me
				</button>
			)}
		</>
	);
}
/**
 * Component: hàm, class có chữ đầu tiên viết hoa
 * -> <Tenham /> hoặc <Tenham ></Tenham>
 *
 */
export default App;
