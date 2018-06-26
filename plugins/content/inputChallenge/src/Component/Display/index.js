import React, { Component } from 'react'

class Display extends Component {
	constructor(props) {
		super(props)
	}
	state = {
		answer:"",
		solutionType:""
	}

	render() {
		return (
			<div align="right">
				<input 
					type="text"
					placeholder="Lösung"
				/>
			</div>
		)
	}
}

export default Display
