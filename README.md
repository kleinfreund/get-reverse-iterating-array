# get-reverse-iterating-array

This function reverses an array’s default iteration direction. By default, the [iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) are defined to iterate on an iterable object’s elements according to their insertion order.

The function `getReverseIteratingArray` returns a new [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object with the array as its target. The array’s `[Symbol.iterator]` property is trapped in order to define custom iteration behaviour. This has the advantage of not changing the implementation of [`Array.prototype[Symbol.iterator]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) directly which would cause the iteration direction of _all_ arrays to be reversed. Using a proxy also avoids unnecessarily copying an array for reverse iteration like [`Array.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) would.

If you require to iterate over an array in _both_ forwards and backwards direction, have a look at [`ReverseIterableArray`](https://www.npmjs.com/package/reverse-iterable-array).

Links:

- [**npmjs.com**/package/get-reverse-iterating-array](https://www.npmjs.com/package/get-reverse-iterating-array)
- [**github.com**/kleinfreund/get-reverse-iterating-array](https://github.com/kleinfreund/get-reverse-iterating-array)

See also:

- `ReverseIterableArray`: [reverse-iterable-array](https://www.npmjs.com/package/reverse-iterable-array)
- `ReverseIterableMap`: [reverse-iterable-map](https://www.npmjs.com/package/reverse-iterable-map)
- `ReverseIterableSet`: [reverse-iterable-set](https://www.npmjs.com/package/reverse-iterable-set)



## Table of contents

- [Installation & usage](#installation--usage)
- [Examples](#examples)
- [Tests](#tests)
- [Documentation](#documentation)



## Installation & usage

### Browser

Download the ES module file …

```sh
curl -O https://raw.githubusercontent.com/kleinfreund/get-reverse-iterating-array/main/dist/esm/get-reverse-iterating-array.mjs
```

… and import it like this:

```js
import getReverseIteratingArray from 'get-reverse-iterating-array.mjs';

const array = getReverseIteratingArray([1, 2, 3]);
```

### Node

Install the node package as a dependency …

```sh
npm install --save get-reverse-iterating-array
```

… and import it like this:

- CommonJS module

  ```node
  const getReverseIteratingArray = require('get-reverse-iterating-array').default;

  const array = getReverseIteratingArray([1, 2, 3]);
  ```

- ES module

  ```js
  import getReverseIteratingArray from 'get-reverse-iterating-array/dist/esm/get-reverse-iterating-array.mjs';

  const array = getReverseIteratingArray([1, 2, 3]);
  ```

- TypeScript module

  ```ts
  import getReverseIteratingArray from 'get-reverse-iterating-array/src/get-reverse-iterating-array';

  const array = getReverseIteratingArray([1, 2, 3]);
  ```



## Examples

For some live usage examples, clone the repository and run the following:

```sh
npm install && npm run examples
```

Then, open [localhost:8080/examples](http://127.0.0.1:8080/examples) in a browser.



## Tests

In order to run the tests, clone the repository and run the following:

```sh
npm install && npm test
```



## Documentation

Create a reverse-iterating array by passing any array to `getReverseIteratingArray`.

```js
const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);
```

The returned object will behave like a regular built-in array with the exception of all cases involving the [iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols). The behaviour of the following concepts will be changed when used together with a reverse-iterating array:

- [`for..of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

  ```js
  for (const element of reverseIteratingArray) {
    console.log(element)
  }
  //> 3
  //> 2
  //> 1
  //> 4
  //> 5
  ```

- [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

  ```js
  [...reverseIteratingArray];
  //> [ 3, 2, 1, 4, 5 ]
  ```

- [`Array.from()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

  ```js
  Array.from(reverseIteratingArray);
  //> [ 3, 2, 1, 4, 5 ]
  ```

- [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

  ```js
  const [a, b, c, d, e] = reverseIteratingArray
  //> a = 3, b = 2, c = 1, d = 4, e = 5
  ```
