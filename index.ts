import * as fs from "fs"

//Day 1 a

const day1a = fs
	.readFileSync("./dec1/input")
	.toString()
	.split("\n\n")
	.map((string: string) => string.split("\n"))
	.map(line => line.map(line => +line))
	.map(line => line.reduce((init, curr) => init + curr))
	.reduce((first, curr) => Math.max(first, curr))

console.log(`Day 1 result: ${day1a}`)

// Day1 B
const day1b = fs
	.readFileSync("./dec1/input")
	.toString()
	.split("\n\n")
	.map((string: string) => string.split("\n"))
	.map(line => line.map(line => +line))
	.map(line => line.reduce((init, curr) => init + curr))
	.sort()
	.reverse()

console.log(`Day 2 result: ${day1b[0] + day1b[1] + day1b[2]}`)
