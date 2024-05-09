/** @format */

import { Component } from "react"

export class Counter extends Component {
	constructor({ initCount }) {
		super()
		this.state = {
			count: initCount,
		}
	}
	handleIncrement = () => {
		console.log("object")
	}
	render() {
		return <div onClick={this.handleIncrement}>Count: {this.state.count}</div>
	}
}

export default Counter
