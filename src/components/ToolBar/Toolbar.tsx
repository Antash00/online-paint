import React from 'react'
import { cnToolBar } from 'common/constants'
import './toolbar.sass'
import toolState from 'store/toolState'
import Brush from 'tools/brush'
import canvasState from 'store/canvasState'
import Rect from 'tools/rect'
import Circle from 'tools/circle'
import Line from 'tools/line'
import Eraser from 'tools/eraser'

enum Instruments {
	brush,
	rect,
	circle,
	eraser,
	line
}

export const Toolbar = () => {
	function selectTool(code: keyof typeof Instruments) {
		if (canvasState.canvas) {
			switch (code) {
				case 'brush': {
					toolState.setTool(new Brush(canvasState.canvas))
					break
				}
				case 'rect': {
					toolState.setTool(new Rect(canvasState.canvas))
					break
				}
				case 'circle': {
					toolState.setTool(new Circle(canvasState.canvas))
					break
				}
				case 'eraser': {
					toolState.setTool(new Eraser(canvasState.canvas))
					break
				}
				case 'line': {
					toolState.setTool(new Line(canvasState.canvas))
					break
				}
			}
		}
	}

	return (
		<div className={ cnToolBar() }>
			<button className={ cnToolBar('btn', {brush: true}) } onClick={ () => selectTool('brush') }></button>
			<button className={ cnToolBar('btn', {rect: true}) } onClick={ () => selectTool('rect') }></button>
			<button className={ cnToolBar('btn', {circle: true}) } onClick={ () => selectTool('circle') }></button>
			<button className={ cnToolBar('btn', {eraser: true}) } onClick={ () => selectTool('eraser') }></button>
			<button className={ cnToolBar('btn', {line: true}) } onClick={ () => selectTool('line') }></button>
			<input type={ 'color' } className={ cnToolBar('btn', {color: true}) }/>
			<button className={ cnToolBar('btn', {undo: true}) }></button>
			<button className={ cnToolBar('btn', {redo: true}) }></button>
			<button className={ cnToolBar('btn', {save: true}) }></button>
		</div>
	)
}