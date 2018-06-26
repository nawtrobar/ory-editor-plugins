import React from 'react'
import Display from '../Display'

import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
//import { BottomToolbar } from 'ory-editor-ui'

const handleAnswer = onChange => e => {
	const target = e.target
	if (target instanceof HTMLInputElement) {
		onChange({ 
			answer: target.value
		})

	}
}

const handleType = onChange => e => {
	const target = e.target
	if (target instanceof HTMLInputElement) {
		onChange({ 
			solutionType: target.value
		})
	}
}

const Form = props => (
	<div>
		<Display {...props} />
		<h3>Answer</h3> 
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<TextField
			hintText="Answer"
			floatingLabelText="Correct Answer"
			inputStyle={{color: 'black' }}
			hintStyle={{ color: 'grey' }}
			style={{ width: '512px' }}
			value={props.state.answer}
			onChange={handleAnswer(props.onChange)}
		/>
		<br/>
	</MuiThemeProvider>
	<h3>Solution Type</h3> 
	<input type="radio" name="solutiontype" value="string"  onChange={handleType(props.onChange)} /> String <br/>
	<input type="radio" name="solutiontype" value="number"  onChange={handleType(props.onChange)} /> Number <br/>
	<input type="radio" name="solutiontype" value="expression"  onChange={handleType(props.onChange)} /> Expression <br/>
	</div>
)

export default Form
