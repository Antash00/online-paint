import { makeAutoObservable } from 'mobx'

export class toolState {
	tool = null

	constructor() {
		makeAutoObservable(this)
	}

	setTool(tool:any){
		this.tool = tool
	}
}