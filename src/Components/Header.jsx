/** @format */
import Menu from "./Menu";

export default function Header({ title, name, email, age }) {
	const menu = [
		{ id: 1, tile: "menu 1" },
		{ id: 2, tile: "menu 2" },
	];

	const handleReceiveData = (data) => {
		console.log(data);
	};
	return (
		<div>
			<h1>Header</h1>
			<Menu menu={menu} onReceiveData={handleReceiveData} />
		</div>
	);
}
