import React from 'react'
import { cnToolBar } from 'common/constants'
import './toolbar.sass'
import toolState from 'store/toolState'
import Brush from 'tools/brush'
import canvasState from 'store/canvasState'
import Rect from 'tools/rect'

export const Toolbar = () => {
	return (
		<div className={ cnToolBar() }>
			<button className={ cnToolBar('btn', {brush: true}) } onClick={ () => {
				if (canvasState.canvas) toolState.setTool(new Brush(canvasState.canvas))
			} }></button>
			<button className={ cnToolBar('btn', {rect: true}) } onClick={ () => {
				if (canvasState.canvas) toolState.setTool(new Rect(canvasState.canvas))
			} }></button>
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