import * as fs from "fs"

const input = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("\n")
	.map(line => line.split(""))

class Grid {
	public visibleTrees = 0
	constructor(public coordinates: Node[][]) {}

	printGrid() {
		this.coordinates.forEach(line => console.log(line.map(node => node.value)))
		this.coordinates.forEach(line => console.log(line.map(node => node.edge)))
	}
	setNeighbors() {
		for (let i = 0; i < this.coordinates.length; i++) {
			for (let ii = 0; ii < this.coordinates[i].length; ii++) {
				const curNode = this.coordinates[i][ii]
				const leftN: Node | undefined = this.coordinates[curNode.coordinate[0] - 1][curNode.coordinate[1]]

				if (leftN) {
					curNode.neighbor?.push(leftN)
				}
			}
		}
	}
}

class Node {
	public visibility: boolean
	constructor(
		readonly value: number,
		readonly edge: boolean,
		readonly coordinate: [number, number],
		readonly neighbor?: Node[]
	) {}

	setVisibility(visible: boolean) {
		this.visibility = visible
	}
}

const nodes: Node[][] = []
for (let i = 0; i < input.length; i++) {
	const line: Node[] = []
	for (let ii = 0; ii < input[i].length; ii++) {
		if (i == 0 || ii == 0 || ii == input[i].length - 1 || i == input.length - 1) {
			const tempNode = new Node(+input[i][ii], true, [i, ii])
			tempNode.setVisibility(true)
			line.push(tempNode)
		} else {
			const tempNode = new Node(+input[i][ii], false, [i, ii])
			line.push(tempNode)
		}
	}
	nodes.push(line)
}

const grid = new Grid(nodes)
grid.printGrid()
grid.setNeighbors()
