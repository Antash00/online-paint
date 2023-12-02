import React, { useEffect, useRef } from 'react'
import { cnCanvas } from 'common/constants'
import { observer } from 'mobx-react-lite'
import './canvas.sass'
import canvasState from 'store/canvasState'
import toolState from 'store/toolState'
import Brush from 'tools/brush'


export const Canvas = observer(() => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
		canvasRef.current && toolState.setTool(new Brush(canvasRef.current))
	}, [])
	return (
		<div className={ cnCanvas() }>
			<canvas onMouseDown={()=> canvasRef.current && canvasState.pushToUndo(canvasRef.current.toDataURL())} ref={ canvasRef } width={ 600 } height={ 400 }></canvas>
		</div>
	)
})