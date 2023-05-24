/**
 * Returns a `Proxy` to a built-in `Array` whose iteration direction is reversed without affecting the original `Array` object.
 *
 * **Example**:
 *
 * ```js
 * const array = [1, 2, 3]
 * const reverseIteratingArray = getReverseIteratingArray(array)
 *
 * Array.from(array) // [ 1, 2, 3 ]
 * Array.from(reverseIteratingArray) // [ 3, 2, 1 ]
 * ```
 *
 * @param {T[]} array
 * @returns {T[]}
 * @template T
 */
export default function getReverseIteratingArray(array) {
	if (Array.isArray(array)) {
		return new Proxy(array, handler)
	}

	throw new TypeError(`Expected “array” parameter to be an array (got “${typeof array}”).`)
}

/** @type {ProxyHandler<any[]>} */
const handler = {
	get(targetArray, key) {
		if (key === Symbol.iterator) {
			return reverseIteratorForArray.bind(targetArray)
		}

		return Reflect.get(targetArray, key)
	}
}

/**
 * @this {any[]}
 * @returns {IterableIterator<any>}
 */
function reverseIteratorForArray() {
	let currentIndex = this.length - 1

	return {
		[Symbol.iterator]() {
			// Return the iterable itself.
			return this
		},

		next: () => {
			const value = this[currentIndex]
			currentIndex -= 1

			return {
				value,
				done: value === undefined
			}
		}
	}
}
