import Tool from 'tools/tool'

export default class Brush extends Tool {
	private mouseDown: boolean = false

	constructor(canvas: HTMLCanvasElement) {
		super(canvas)
		this.listen()
	}

	listen() {
		this.canvas.onmouseup = this.mouseUpHandler.bind(this)
		this.canvas.onmousedown = this.mouseDownHandler.bind(this)
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
	}

	mouseUpHandler(e: MouseEvent) {
		this.mouseDown = false
	}

	mouseDownHandler(e: MouseEvent) {
		const target = e.target as HTMLButtonElement
		this.mouseDown = true
		this.ctx?.beginPath()
		this.ctx?.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
	}

	mouseMoveHandler(e: MouseEvent) {
		const target = e.target as HTMLButtonElement
		if (this.mouseDown) {
			this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
		}

	}

	draw(x: number, y: number) {
		this.ctx?.lineTo(x, y)
		this.ctx?.stroke()
	}
}