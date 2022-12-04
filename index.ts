import * as fs from "fs"

class Rucksack {
	compartmentA: string[] = []
	compartmentB: string[] = []
	public prio = 0
	constructor(private array: string[]) {
		this.compartmentA = array.slice(0, array.length / 2)
		this.compartmentB = array.slice(array.length / 2)

		console.log(
			`first array ${array} length: ${array.length}. Comp A: ${this.compartmentA}. Comp B: ${
				this.compartmentB
			}. contains duplicates: ${this.checkDuplicate()}`
		)

		if (!this.checkDuplicate()) console.log("false")
	}

	checkDuplicate(): boolean {
		return this.compartmentA.reduce(
			(prev, char) => (this.compartmentB.includes(char) ? (prev = this.determinePrio(char)) : prev),
			false
		)
	}
	determinePrio(char: string): boolean {
		this.prio = `_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.indexOf(char)

		return true
	}
}

const day3aInput = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("\n")
	.map(array => new Rucksack(array.split("")))
	.reduce((score, rucksack) => score + rucksack.prio, 0)

const day3bInput = fs.readFileSync("./input").toString().trim().split("\n")

console.log(`Day 3A score: ${day3aInput}`)

const t: string[] = []

for (let i = 0; i < day3bInput.length; i += 3) {
	const a = day3bInput[i]
	const b = day3bInput[i + 1]
	const c = day3bInput[i + 2]
	const ab: string[] = []
	const bc: string[] = []

	for (const ch of a) {
		if (b.includes(ch)) ab.push(ch)
	}
	for (const ch of b) {
		if (c.includes(ch)) bc.push(ch)
	}

	for (const i of ab) {
		if (bc.includes(i)) {
			t.push(i)
			break
		}
	}
}
let total = 0
for (const i of t) {
	total += `_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.indexOf(i)
}
console.log(`Day 3B score: ${total}`)
