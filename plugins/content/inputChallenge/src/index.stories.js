import {storiesOf} from '@storybook/react'
import * as React from 'react'

import {
	createStateForContentPlugin,
	renderEditable,
	renderHTMLRenderer
}from '../../../../.storybook/helpers'
import plugin from '.'

storiesOf('inputChallenge', module)
	.add('Editable (initial state)', () => {
		const content = createStateForContentPlugin({ plugin })

		return renderEditable(content)
	})
	.add('Render (w/o user answer)', () => {
		const content = createStateForContentPlugin({
			plugin,
			initialState: {
				answer:"yes",
				solutionType:"expression",
			}
		})

		return renderHTMLRenderer(content)
	})
