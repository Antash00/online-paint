import React from 'react'
import { cnToolBar } from 'common/constants'
import './toolbar.sass'

export const Toolbar = () => {
	return (
		<div className={ cnToolBar() }>
			<button className={ cnToolBar('btn', {brush: true}) }></button>
			<button className={ cnToolBar('btn', {rect: true}) }></button>
			<button className={ cnToolBar('btn', {circle: true}) }></button>
			<button className={ cnToolBar('btn', {eraser: true}) }></button>
			<button className={ cnToolBar('btn', {line: true}) }></button>
			<input type={ 'color' } className={ cnToolBar('btn', {color: true}) }/>
			<button className={ cnToolBar('btn', {undo: true}) }></button>
			<button className={ cnToolBar('btn', {redo: true}) }></button>
			<button className={ cnToolBar('btn', {save: true}) }></button>
		</div>
	)
}