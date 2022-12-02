import * as fs from "fs"

function calculate1A(input: string[]): number {
	const computer = determineHand(input[0])
	const human = determineHand(input[1])

	if (computer == human) {
		return calculateRoundPoints("draw") + points(human)
	}
	if (computer == "rock" && human == "scissor") {
		return calculateRoundPoints("loss") + points(human)
	}
	if (computer == "scissor" && human == "paper") {
		return calculateRoundPoints("loss") + points(human)
	}
	if (computer == "paper" && human == "rock") {
		return calculateRoundPoints("loss") + points(human)
	} else {
		return calculateRoundPoints("win") + points(human)
	}
}

function calculate2B(input: string[]): number {
	const computer = determineHand(input[0])
	const outcome = determineOutcome(input[1])

	if (computer == "rock" && outcome == 6) return outcome + points("paper")
	if (computer == "rock" && outcome == 0) return outcome + points("scissor")
	if (computer == "rock" && outcome == 3) return outcome + points("rock")
	if (computer == "paper" && outcome == 6) return outcome + points("scissor")
	if (computer == "paper" && outcome == 0) return outcome + points("rock")
	if (computer == "paper" && outcome == 3) return outcome + points("paper")
	if (computer == "scissor" && outcome == 6) return outcome + points("rock")
	if (computer == "scissor" && outcome == 0) return outcome + points("paper")
	if (computer == "scissor" && outcome == 3) return outcome + points("scissor")
	return 0
}

function calculateRoundPoints(result: string): number {
	if (result == "draw") return 3
	if (result == "win") return 6
	return 0
}

function determineHand(hand: string): string {
	const rock = ["A", "X"]
	const paper = ["B", "Y"]
	const scissor = ["C", "Z"]
	if (rock.includes(hand)) return "rock"
	if (paper.includes(hand)) return "paper"
	return "scissor"
}

function determineOutcome(outcome: string): number {
	if (outcome == "Y") return calculateRoundPoints("draw")
	if (outcome == "X") return calculateRoundPoints("loss")
	return calculateRoundPoints("win")
}

function points(hand: string): number {
	if (hand == "rock") {
		return 1
	} else if (hand == "paper") {
		return 2
	} else {
		return 3
	}
}

// const result2A = fs
// 	.readFileSync("./input")
// 	.toString()
// 	.trim()
// 	.split("\n")
// 	.map(row => row.split(" "))
// 	.reduce((score, round) => {
// 		const handScore = calculate1A(round)
// 		return handScore + score
// 	}, 0)
// console.log(` Day 2 part1 result: ${result2A}`)
const result2B = fs
	.readFileSync("./input")
	.toString()
	.trim()
	.split("\n")
	.map(row => row.split(" "))
	.reduce((score, round) => {
		const handScore = calculate2B(round)
		return handScore + score
	}, 0)

console.log(` Day 2 part2 result: ${result2B}`)
