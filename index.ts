import * as fs from "fs"

class Dir {
	public size: number
	constructor(public name: string) {}

	countSize(data: string[]) {
		this.size = data.reduce((size, curr) => {
			const fileSize = +curr.split(" ")[0] + size
			if (!isNaN(fileSize)) {
				return fileSize
			} else {
				return 0
			}
		}, 0)

		console.log(`Dir ${this.name} has size: ${this.size}`)
	}
}

const day7a = fs.readFileSync("./input").toString().trim().split("\n")

const dirs: Dir[] = []
day7a.forEach((value, i) => {
	try {
		const temp = value.split(" ")
		if (temp[0] == "$" && temp[1] == "cd" && temp[2] != "/" && day7a[i + 2].split(" ")[0] != "$") {
			const dir = new Dir(temp[2])
			dirs.push(dir)
			let counter = 2
			if (day7a[i + counter] != "") {
				while (day7a[i + counter][0] != "$") {
					const test = day7a[i + counter]
					counter++
				}

				dir.countSize(day7a.splice(i + 2, counter - 2))
			}
		}
	} catch (error) {
		console.log(error)
	}
})

const result = dirs
	.filter(dir => dir.size <= 100000)
	.reduce((totalSize, dir) => {
		console.log(`Dir ${dir.name} has size : ${dir.size}`)
		return dir.size + totalSize
	}, 0)

console.log(result)
