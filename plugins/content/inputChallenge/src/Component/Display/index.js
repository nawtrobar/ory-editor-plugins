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
		if(this.props.state.solutionType==="string"){
			return (
				<div class="text-exercise">
					<form class="input-challenge-group">	
						<div class="input-challenge-input-wrapper pull-right">
							<input class="input-challenge-input" 
								data-type="input-string-equal-match-challenge"
								type="text"
								placeholder="Deine Lösung"
							/>
						</div>
				</form>
		</div>
			)
		}

		else if(this.props.state.solutionType==="expression"){
			return (
				<div class="text-exercise">
					<form class="input-challenge-group">	
						<div class="input-challenge-input-wrapper pull-right">
							<input class="input-challenge-input" 
								data-type="input-expression-equal-match-challenge"
								type="text"
								placeholder="Deine Lösung"
							/>
						</div>
				</form>
		</div>
			)
		}
		else if(this.props.state.solutionType==="number"){
			return (
				<div class="text-exercise">
					<form class="input-challenge-group">	
						<div class="input-challenge-input-wrapper pull-right">
							<input class="input-challenge-input" 
								data-type="input-number-equal-match-challenge"
								type="text"
								placeholder="Deine Lösung"
							/>
						</div>
				</form>
		</div>
			)
		}
		else {
			return (
				<div class="text-exercise">
					<form class="input-challenge-group">	
						<div class="input-challenge-input-wrapper pull-right">
							MUST SELECT DATATYPE
							/>
						</div>
				</form>
		</div>
			)
		}
	}

}

export default Display
