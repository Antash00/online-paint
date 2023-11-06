export default class Tool {
	protected canvas: HTMLCanvasElement
	protected ctx: CanvasRenderingContext2D | null

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas
		this.ctx = canvas.getContext('2d')
		this.destroyEvents()
	}

	destroyEvents() {
		this.canvas.onmouseup = null
		this.canvas.onmousedown = null
		this.canvas.onmousemove = null
	}
}