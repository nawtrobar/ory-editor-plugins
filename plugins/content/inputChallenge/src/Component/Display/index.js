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
			<div class="text-exercise">
				<form class="input-challenge-group">	
					<div class="input-challenge-input-wrapper pull-right">
						<input class="input-challenge-input" 
							type="text"
							placeholder="Deine Lösung"
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default Display
