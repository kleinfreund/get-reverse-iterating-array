/**
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
