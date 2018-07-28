import {storiesOf} from '@storybook/react'
import * as React from 'react'

import {
	createStateForContentPlugin,
	renderEditable,
	renderHTMLRenderer
}from '../../../../.storybook/helpers'
import plugin from '.'

const initialState = {
	answer: '',
	solutionType:'string'
}

storiesOf('inputChallenge', module)
	.add('Editable (initial state)', () => {
		const content = createStateForContentPlugin({ plugin, initialState })

		return renderEditable(content)
	})
	.add('Editable (Number)', () => {
		const content = createStateForContentPlugin({ 
			plugin,
			initialState:{
				answer: '',
				solutionType: 'number'
			}
		})
		return renderEditable(content)
	})

	.add('Editable (Expression)', () => {
		const content = createStateForContentPlugin({ 
			plugin,
			initialState:{
				answer: '',
				solutionType: 'expression'
			}
		})
		return renderEditable(content)
	})
	.add('Render (w/o user answer)', () => {
		const content = createStateForContentPlugin({ plugin, initialState })

		return renderHTMLRenderer(content)
	})
