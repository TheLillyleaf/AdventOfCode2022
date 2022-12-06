import { readFileSync } from "fs"
import { resolve } from "path"

type S<T> = Array<Array<T>>
type F = (c: S<string>, l: S<number>) => S<string>

const [x, y] = readFileSync(resolve("./input"))
	.toString()
	.split("\n\n")
	.map(v => v.split("\n"))
const j = y.map(v =>
	v
		.split(" ")
		.map(w => parseInt(w, 10))
		.filter(Boolean)
)
const s = x.map(v =>
	v
		.replace(/[\[\]]/g, " ")
		.split("")
		.map(v => v.trim())
)
const c = s
	.pop()
	?.map(
		(v, i) =>
			v &&
			s
				.map(w => w[i])
				.filter(Boolean)
				.reverse()
	)
	.filter(v => v.length) as S<string>

const a: F = (c, l) =>
	l.reduce(
		(v, [m, f, t]) =>
			Array(m)
				.fill(0)
				.reduce((z: S<string>) => z.map((h, i) => (i === t - 1 ? [...h, v[f - 1].pop()] : h)), v),
		c
	)
const b: F = (c, l) =>
	l.reduce(
		(v, [m, f, t]) =>
			v.map((h, i) => (i === t - 1 ? [...h, ...v[f - 1].splice(v[f - 1].length - m, v[f - 1].length)] : h)),
		c
	)
const r = (f: F, c: S<string>, j: S<number>): string =>
	f(JSON.parse(JSON.stringify(c)), j).reduce((t, v) => t + v.pop(), "")

console.debug(r(a, c, j), r(b, c, j))
