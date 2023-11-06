import Tool from 'tools/tool'

export default class Rect extends Tool {
	private mouseDown: boolean = false
	private startX: number = 0
	private startY: number = 0
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
		this.ctx?.beginPath()
		this.ctx?.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
		this.startX = e.pageX - target.offsetLeft
		this.startY = e.pageY - target.offsetTop
		this.saved = this.canvas.toDataURL()
	}

	mouseMoveHandler(e: MouseEvent) {
		const target = e.target as HTMLButtonElement
		if (this.mouseDown) {
			let currentX: number = e.pageX - target.offsetLeft
			let currentY: number = e.pageY - target.offsetTop
			let width: number = currentX - this.startX
			let height: number = currentY - this.startY
			this.draw(this.startX, this.startY, width, height)
		}

	}

	draw(x: number, y: number, w: number, h: number) {
		const img = new Image()
		img.src = this.saved
		img.onload = () => {
			this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
			this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
			this.ctx?.beginPath()
			this.ctx?.rect(x, y, w, h)
			this.ctx?.fill()
			this.ctx?.stroke()
		}

	}
}