import test from 'ava';
import getReverseIteratingArray from '../src/get-reverse-iterating-array';

test('accepts an empty array as a parameter', t => {
  const reverseIteratingArray = getReverseIteratingArray([]);
  t.is(reverseIteratingArray.length, 0);
});

test('accepts a filled array as a parameter', t => {
  const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);
  t.is(reverseIteratingArray.length, 5);
});

test('contains the array’s values in insertion order', t => {
  const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);
  t.is(reverseIteratingArray[0], 5);
  t.is(reverseIteratingArray[1], 4);
  t.is(reverseIteratingArray[2], 1);
  t.is(reverseIteratingArray[3], 2);
  t.is(reverseIteratingArray[4], 3);
});

test('accessing the array’s elements via spread syntax produces them in reversed insertion order', t => {
  const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);
  t.deepEqual([...reverseIteratingArray], [3, 2, 1, 4, 5]);
});

test('creating an array with Array.from produces an array in reversed insertion order', t => {
  const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);
  t.deepEqual(Array.from(reverseIteratingArray), [3, 2, 1, 4, 5]);
});

test('destructuring assignment uses reversed insertion order', t => {
  const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);
  const [a, b, c, d, e] = reverseIteratingArray;
  t.is(a, 3);
  t.is(b, 2);
  t.is(c, 1);
  t.is(d, 4);
  t.is(e, 5);
});

test('Array iterator returns iterator itself', t => {
  const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);
  const iterator = reverseIteratingArray[Symbol.iterator]();

  t.is(typeof iterator[Symbol.iterator], 'function');
  t.is(typeof iterator.next, 'function');

  const iterator2 = iterator[Symbol.iterator]();

  t.is(typeof iterator2[Symbol.iterator], 'function');
  t.is(typeof iterator2.next, 'function');
});

test('throws an error for incompatible types', t => {
  const set = new Set([5, 4, 1, 2, 3]);

  const error = t.throws(
    () => {
      // @ts-ignore because the TypeScript error for an invalid argument is expected.
      getReverseIteratingArray(set);
    },
    { instanceOf: TypeError }
  );

  t.is(error.message, 'Expected “array” parameter to be of type “array” but got object.');
});
