import * as fs from "fs"

class Dir {
	public size: number
	public content: string[][]

	constructor(public name: string) {}

	addContent(content: string[]) {
		this.content.push(content)
	}

	getSize(): number {
		const size = this.content.reduce((totalSize, line) => {
			const first = line[0]
			if (!isNaN) {
				return +first + totalSize
			} else {
				return totalSize
			}
		}, 0)

		return size
	}
}

const input = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("\n")
	.map(vale => vale.split(" "))

input.forEach(line => {
	if (line[0] == "$" && line[1] == "cd") {

	}
})
