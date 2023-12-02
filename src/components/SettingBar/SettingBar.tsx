import React from 'react'
import { cnSettingBar } from 'common/constants'
import './settingbar.sass'
import toolState from 'store/toolState'

export const SettingBar = () => {
	return (
		<div className={ cnSettingBar() }>
			<div className={ cnSettingBar('item') }>
				<label htmlFor={ 'line-width' }>Line width</label>
				<input type={ 'number' } id={ 'line-width' } min={ 1 } max={ 25 } defaultValue={ 1 }
				       onChange={ (e) => toolState.setLineWidth(e.target.valueAsNumber) }/>
			</div>
			<div className={ cnSettingBar('item') }>
				<label htmlFor={ 'stroke-color' }>Stroke color</label>
				<input type={ 'color' } id={ 'stroke-color' }
				       onChange={ (e) => toolState.setStrokeColor(e.target.value) }/>
			</div>
		</div>
	)
}