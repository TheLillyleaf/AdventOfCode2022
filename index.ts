import * as fs from "fs"

const day4A = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("\n")
	.map(line => line.split(",").map(section => section.split("-").map(pos => +pos)))
	.reduce((accumulator, currentArray) => {
		if (currentArray[0][0] <= currentArray[1][0] && currentArray[0][1] >= currentArray[1][1]) {
			accumulator++
		} else if (currentArray[0][0] >= currentArray[1][0] && currentArray[0][1] <= currentArray[1][1]) {
			accumulator++
		}
		return accumulator
	}, 0)

console.log(`Day 4A result is:  ${day4A}`)

const day4b = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("\n")
	.map(line => line.split(",").map(section => section.split("-").map(pos => +pos)))
	.reduce((accumulator, currentArray) => {
		const firstMin = currentArray[0][0]
		const firstMax = currentArray[0][1]
		const secondMin = currentArray[1][0]
		const secondMax = currentArray[1][1]

		if (firstMin <= secondMin && firstMax >= secondMin) {
			accumulator++
		} else if (firstMin >= secondMin && firstMin <= secondMax) {
			accumulator++
		}
		return accumulator
	}, 0)

console.log(`Day 4B result is: ${day4b} `)
