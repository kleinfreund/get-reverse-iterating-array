import getReverseIteratingArray from './get-reverse-iterating-array'

describe('getReverseIteratingArray', () => {
	test('accepts an empty array as a parameter', () => {
		const reverseIteratingArray = getReverseIteratingArray([])
		expect(reverseIteratingArray.length).toBe(0)
	})

	test('accepts a filled array as a parameter', () => {
		const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3])
		expect(reverseIteratingArray.length).toBe(5)
	})

	test('contains the array’s values in insertion order', () => {
		const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3])
		expect(reverseIteratingArray[0]).toBe(5)
		expect(reverseIteratingArray[1]).toBe(4)
		expect(reverseIteratingArray[2]).toBe(1)
		expect(reverseIteratingArray[3]).toBe(2)
		expect(reverseIteratingArray[4]).toBe(3)
	})

	test('accessing the array’s elements via spread syntax produces them in reversed insertion order', () => {
		const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3])
		expect([...reverseIteratingArray]).toEqual([3, 2, 1, 4, 5])
	})

	test('creating an array with Array.from produces an array in reversed insertion order', () => {
		const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3])
		expect(Array.from(reverseIteratingArray)).toEqual([3, 2, 1, 4, 5])
	})

	test('destructuring assignment uses reversed insertion order', () => {
		const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3])
		const [a, b, c, d, e] = reverseIteratingArray
		expect(a).toBe(3)
		expect(b).toBe(2)
		expect(c).toBe(1)
		expect(d).toBe(4)
		expect(e).toBe(5)
	})

	test('Array iterator returns iterator itself', () => {
		const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3])
		const iterator = reverseIteratingArray[Symbol.iterator]()

		expect(typeof iterator[Symbol.iterator]).toBe('function')
		expect(typeof iterator.next).toBe('function')

		const iterator2 = iterator[Symbol.iterator]()

		expect(typeof iterator2[Symbol.iterator]).toBe('function')
		expect(typeof iterator2.next).toBe('function')
	})

	test('throws an error for incompatible types', () => {
		const set = new Set([5, 4, 1, 2, 3])

		const callback = () => {
			// @ts-ignore because the TypeScript error for an invalid argument is expected.
			getReverseIteratingArray(set)
		}

		expect(callback).toThrow('Expected “array” parameter to be an array (got “object”).')
	})
})
