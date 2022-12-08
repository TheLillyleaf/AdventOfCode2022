import * as fs from "fs"

const input = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("\n")
	.map(line => line.split(""))

class Grid {
	public visibleTrees = 0
	constructor(public coordinates: Node[][]) {
		this.coordinates.forEach(line => line.forEach(node => this.checkVisibility(node)))
	}

	printScenic() {
		this.coordinates.forEach(line => console.log(line.map(node => `${node.value}(${node.scenicScore})`)))
	}

	checkVisibleTrees(): number {
		const result = this.coordinates.reduce((sum, line) => {
			const lineSum = line.reduce((sum, node) => {
				if (node.visibility.left || node.visibility.down || node.visibility.right || node.visibility.up) {
					return sum + 1
				} else {
					return sum
				}
			}, 0)
			return lineSum + sum
		}, 0)

		return result
	}

	findHighestScenicScore(): number {
		return this.coordinates.reduce((max, line) => {
			const lineMax = Math.max(...line.map(node => node.scenicScore))
			return Math.max(lineMax, max)
		}, 0)
	}

	checkVisibility(currNode: Node) {
		let countLeft = 0
		let countRight = 0
		let countDown = 0
		let countUp = 0
		//Left
		for (let i = currNode.coordinate[1] - 1; i >= 0; i--) {
			if (currNode.visibility.left) {
				countLeft++
			}
			if (this.coordinates[currNode.coordinate[0]][i].value >= currNode.value) {
				currNode.setVisibility("left", false)
			}
		}

		//right
		for (let i = currNode.coordinate[1] + 1; i <= this.coordinates[currNode.coordinate[1]].length - 1; i++) {
			if (currNode.visibility.right) {
				countRight++
			}
			if (this.coordinates[currNode.coordinate[0]][i].value >= currNode.value) {
				currNode.setVisibility("right", false)
			}
		}

		//Up
		for (let i = currNode.coordinate[0] - 1; i >= 0; i--) {
			if (currNode.visibility.up) {
				countUp++
			}
			if (this.coordinates[i][currNode.coordinate[1]].value >= currNode.value) {
				currNode.setVisibility("up", false)
			}
		}

		//Down
		for (let i = currNode.coordinate[0] + 1; i <= this.coordinates.length - 1; i++) {
			if (currNode.visibility.down) {
				countDown++
			}
			if (this.coordinates[i][currNode.coordinate[1]].value >= currNode.value) {
				currNode.setVisibility("down", false)
			}
		}
		const scenicScore = countDown * countLeft * countRight * countUp
		currNode.setScenicScore(scenicScore)
	}
}

class Node {
	public visibility = { left: true, right: true, up: true, down: true }
	public scenicLength = { left: 0, right: 0, up: 0, down: 0 }
	public scenicScore = 0
	constructor(readonly value: number, readonly coordinate: [number, number]) {}

	setVisibility(direction: string, visible: boolean) {
		switch (direction) {
			case "left":
				this.visibility = { ...this.visibility, left: visible }
				break

			case "right":
				this.visibility = { ...this.visibility, right: visible }
				break

			case "up":
				this.visibility = { ...this.visibility, up: visible }
				break

			case "down":
				this.visibility = { ...this.visibility, down: visible }
				break

			default:
				break
		}
	}

	setScenicScore(score: number) {
		this.scenicScore = score
	}
	setScenic(direction: string, score: number) {
		switch (direction) {
			case "left":
				this.scenicLength = { ...this.scenicLength, left: score }
				break

			case "right":
				this.scenicLength = { ...this.scenicLength, right: score }
				break

			case "up":
				this.scenicLength = { ...this.scenicLength, up: score }
				break

			case "down":
				this.scenicLength = { ...this.scenicLength, down: score }
				break

			default:
				break
		}
	}

	getScenicScore(): number {
		return this.scenicLength.down + this.scenicLength.up + this.scenicLength.left + this.scenicLength.right
	}
}

const nodes: Node[][] = []
for (let i = 0; i < input.length; i++) {
	const line: Node[] = []
	for (let ii = 0; ii < input[i].length; ii++) {
		if (i == 0 || ii == 0 || ii == input[i].length - 1 || i == input.length - 1) {
			const tempNode = new Node(+input[i][ii], [i, ii])
			line.push(tempNode)
		} else {
			const tempNode = new Node(+input[i][ii], [i, ii])
			line.push(tempNode)
		}
	}
	nodes.push(line)
}

const grid = new Grid(nodes)

console.log(`Day8A score: ${grid.checkVisibleTrees()}`)
console.log(`Day8B Score: ${grid.findHighestScenicScore()}`)
