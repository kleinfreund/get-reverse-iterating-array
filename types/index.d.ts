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
 */
export default function getReverseIteratingArray<T>(
	array: T[]
): T[]
