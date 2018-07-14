import React, { Component } from 'react'

class Display extends Component {
	constructor(props) {
		super(props)
	}
	state = {
		answer:"",
		solutionType:"string"
	}

	getDataType(type){
		if (type === 'expression') return 'input-expression-equal-match-challenge'
		else if (type === 'number') return 'input-number-exact-match-challenge'
		else return 'input-string-normalized-match-challenge'
	}

	render() {
		const dataType = this.getDataType(this.props.state.solutionType);
			return (
				<div class="text-exercise">
					<form class="input-challenge-group">	
						<div class="input-challenge-input-wrapper pull-right">
							<input class="input-challenge-input" 
								data-type={dataType}
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
