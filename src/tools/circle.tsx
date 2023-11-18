import Tool from 'tools/tool'

export default class Circle extends Tool {
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
		const target = e.target as HTMLElement
		this.mouseDown = true
		this.ctx.beginPath()
		this.ctx.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
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
			let r = width >= height ? Math.sqrt((width / 2) ** 2) : Math.sqrt((height / 2) ** 2)
			this.draw(this.startX, this.startY, r, width >= height ? width : height)
		}

	}

	draw(x: number, y: number, r: number, d: number) {
		const img = new Image()
		img.src = this.saved
		img.onload = () => {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
			this.ctx.beginPath()
			this.ctx.ellipse(x + d / 2, y + d / 2, r, r, Math.PI / 4, 0, 2 * Math.PI)
			this.ctx.stroke()
		}

	}
}