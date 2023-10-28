import React from 'react'
import './styles/app.sass'
import { Canvas, SettingBar, Toolbar } from 'components'

const App = () => {
	return (
		<div className="app">
			<Toolbar/>
			<SettingBar/>
			<Canvas/>
		</div>
	)
}

export default App
