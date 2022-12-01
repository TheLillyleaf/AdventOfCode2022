import * as fs from "fs"

export class dec1 {
	constructor() {
		console.log("hello dec 1")
	}

	printInput() {
		const file = fs.readFileSync("./input")
		console.log(file)
	}
}
