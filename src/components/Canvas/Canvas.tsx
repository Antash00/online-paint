import React, { useEffect, useRef } from 'react'
import { cnCanvas } from 'common/constants'
import { observer } from 'mobx-react-lite'
import { canvasState } from 'store/canvasState'

export const Canvas = observer(() => {
	const canvasRef = useRef(null)
	const canvasClass = new canvasState()
	useEffect(() => {
		canvasClass.setCanvas(canvasRef.current)
	}, [])

	return (
		<div className={ cnCanvas() }>
			<canvas ref={ canvasRef } width={ 600 } height={ 400 }></canvas>
		</div>
	)
})