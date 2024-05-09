/** @format */
import Footer from "./Components/Footer"
import Counter from "./Components/Counter"
export default function App() {
	return (
		<div>
			<Counter initCount={0} />
			<Footer>
				<h3>Lê Tùng Dương</h3>
			</Footer>
		</div>
	)
}

//Props =>Truyền dữ liệu từ component cha sang component con
