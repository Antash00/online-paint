import { makeAutoObservable } from 'mobx'

class canvasState {
	canvas: HTMLCanvasElement | null = null
	undoList: String[] = []
	redoList: String[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setCanvas(canvas: HTMLCanvasElement | null) {
		this.canvas = canvas
	}

	pushToUndo(data: string) {
		this.undoList.push(data)
	}

	pushToRedo(data: string) {
		this.redoList.push(data)
	}

	undo() {
		if (!this.canvas) {
			return
		}
		let ctx = this.canvas.getContext('2d')

		if (this.undoList.length > 0) {
			let url: string = String(this.undoList.pop())
			this.pushToRedo(this.canvas.toDataURL())
			let img = new Image()
			img.src = url
			img.onload = () => {
				ctx?.clearRect(0, 0, this.canvas?.width ?? 0, this.canvas?.height ?? 0)
				ctx?.drawImage(img, 0, 0, this.canvas?.width ?? 0, this.canvas?.height ?? 0)
			}
		} else {
			ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
		}
	}

	redo() {
		if (!this.canvas) {
			return
		}
		let ctx = this.canvas.getContext('2d')

		if (this.redoList.length > 0) {
			let url: string = String(this.redoList.pop())
			this.pushToUndo(this.canvas.toDataURL())
			let img = new Image()
			img.src = url
			img.onload = () => {
				ctx?.clearRect(0, 0, this.canvas?.width ?? 0, this.canvas?.height ?? 0)
				ctx?.drawImage(img, 0, 0, this.canvas?.width ?? 0, this.canvas?.height ?? 0)
			}
		}
	}
}

export default new canvasState()