"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getReverseIteratingArray(array) {
    if (Array.isArray(array)) {
        return new Proxy(array, handler);
    }
    throw new TypeError(`Expected “array” parameter to be of type “array” but got ${typeof array}.`);
}
exports.default = getReverseIteratingArray;
const handler = {
    get(targetArray, key) {
        if (key === Symbol.iterator) {
            return reverseIteratorForArray.bind(targetArray);
        }
        return Reflect.get(targetArray, key);
    }
};
function reverseIteratorForArray() {
    let currentIndex = this.length - 1;
    return {
        [Symbol.iterator]() {
            // Return the iterable itself.
            return this;
        },
        next: () => {
            const value = this[currentIndex];
            currentIndex -= 1;
            return {
                value,
                done: value === undefined
            };
        }
    };
}
