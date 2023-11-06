import { makeAutoObservable } from 'mobx'

class canvasState {
	canvas: HTMLCanvasElement | null = null

	constructor() {
		makeAutoObservable(this)
	}

	public setCanvas(canvas: HTMLCanvasElement | null) {
		this.canvas = canvas
	}
}

export default new canvasState()