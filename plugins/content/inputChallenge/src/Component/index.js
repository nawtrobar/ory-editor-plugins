import React, { Component } from 'react'

import Display from './Display'
import Form from './Form'

const inputChallenge = props =>
  props.readonly ? <Display {...props} /> : <Form {...props} />
export default inputChallenge

//	class inputChallenge extends Component{
//	handleValueChange(event) {
//		const target = event.target
//		const value = target.type === 'checkbox' ? target.checked : target.value
//		const name = target.name
//
//		this.props.onChange({
//			[name]: value
//		})
//	}
//
//	render() {
//		const { readOnly, state } = this.props
//		const {  solutionType, answer } = state
//
//		return (
//			<div>
//				{readOnly ? (
//					<Display {...this.props} />
//				) : (
//					<Form
//						handleValueChange={this.handleValueChange.bind(this)}
//						solutionType={solutionType}
//						answer={answer}
//					/>
//				)}
//			</div>
//		)
//	}
//}
//
