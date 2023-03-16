export default function getReverseIteratingArray(array: any[]): any[] {
  if (Array.isArray(array)) {
    return new Proxy(array, handler)
  }

  throw new TypeError(`Expected “array” parameter to be of type “array” but got ${typeof array}.`)
}

const handler: ProxyHandler<any[]> = {
  get(targetArray: any[], key: string | number | symbol) {
    if (key === Symbol.iterator) {
      return reverseIteratorForArray.bind(targetArray)
    }

    return Reflect.get(targetArray, key)
  }
}

function reverseIteratorForArray(this: any[]): IterableIterator<any> {
  let currentIndex = this.length - 1

  return {
    [Symbol.iterator](): IterableIterator<any> {
      // Return the iterable itself.
      return this
    },

    next: (): IteratorResult<any> => {
      const value = this[currentIndex]
      currentIndex -= 1

      return {
        value,
        done: value === undefined
      }
    }
  }
}
