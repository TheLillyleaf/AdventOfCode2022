import * as fs from "fs"

const day6A = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("")
	.reduce((result, curr, i, day1b) => {
		const temp = day1b.slice(i, i + 4)
		const s = new Set()

		temp.forEach(element => s.add(element))

		if (s.size == temp.length && result <= 0) {
			return result + (i + 4)
		}
		return result
	}, 0)
const day6B = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("")
	.reduce((result, curr, i, day1b) => {
		const temp = day1b.slice(i, i + 14)
		const s = new Set()

		temp.forEach(element => s.add(element))

		if (s.size == temp.length && result <= 0) {
			return result + (i + 14)
		}
		return result
	}, 0)

console.log(`Day 6 A result is: ${day6A}`)
console.log(`Day 6 B result is: ${day6B}`)
