import Brush from 'tools/brush'

export default class Eraser extends Brush {

	draw(x: number, y: number) {
		this.ctx.strokeStyle = 'white'
		this.ctx.lineWidth = 10
		this.ctx.lineTo(x, y)
		this.ctx.stroke()
	}
}