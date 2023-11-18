import Tool from 'tools/tool'

export default class Line extends Tool {
	private mouseDown: boolean = false
	private currentX: number = 0
	private currentY: number = 0
	private saved: string = ''

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
		this.currentX = e.pageX - target.offsetLeft
		this.currentY = e.pageY - target.offsetTop
		this.ctx.beginPath()
		this.ctx.moveTo(this.currentX, this.currentY)
		this.saved = this.canvas.toDataURL()
	}

	mouseMoveHandler(e: MouseEvent) {
		if (this.mouseDown) {
			const target = e.target as HTMLButtonElement
			this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
		}
	}

	draw(x: number, y: number) {
		const img = new Image()
		img.src = this.saved
		img.onload = () => {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
			this.ctx.beginPath()
			this.ctx.moveTo(this.currentX, this.currentY)
			this.ctx.lineTo(x, y)
			this.ctx.stroke()
		}
	}
}