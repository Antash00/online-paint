import { makeAutoObservable } from 'mobx'
import Tool from 'tools/tool'

class toolState {
	tool: Tool | null = null

	constructor() {
		makeAutoObservable(this)
	}

	setTool(tool: Tool) {
		this.tool = tool
	}

	setFillColor(color: string) {
		this.tool && (this.tool.fillColor = color)
	}

	setStrokeColor(color: string) {
		this.tool && (this.tool.strokeColor = color)
	}

	setLineWidth(width: number) {
		this.tool && (this.tool.lineWidth = width)
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new toolState()