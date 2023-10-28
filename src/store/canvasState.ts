import { makeAutoObservable } from 'mobx'

export class canvasState {
	canvas: null | object = null

	constructor() {
		makeAutoObservable(this)
	}

	setCanvas(canvas: null | object) {
		this.canvas = canvas
	}
}