import * as fs from "fs"

const input = fs
	.readFileSync("./input")
	.toString()
	.split("\n\n")
	.map((string: string) => string.split("\n"))
	.map(line => line.map(line => +line))
	.map(line => line.reduce((init, curr) => init + curr))
//Day 1 a

const day1a = input.reduce((first, curr) => Math.max(first, curr))
const day1a2 = Math.max(...input)

console.log(`Day 1 result: ${day1a}`)
console.log(`Day 1 result:${day1a2}`)
// Day1 B
const day1b = input.sort().reverse()

console.log(`Day 2 result: ${day1b[0] + day1b[1] + day1b[2]}`)
