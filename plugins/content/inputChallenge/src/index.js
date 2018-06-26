import React from 'react'
import Create from 'material-ui/svg-icons/content/create'

import inputChallenge from './Component'
import plugin from './plugin'

export default {
	...plugin,
	Component: inputChallenge,
	IconComponent: <Create />,	
	text: 'Input Challenge'
}

