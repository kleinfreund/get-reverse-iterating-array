import getReverseIteratingArray from '../dist/get-reverse-iterating-array.js';

Object.defineProperty(window, 'getReverseIteratingArray', { value: getReverseIteratingArray });

/**
 * @param {string} command
 */
function printCommand(command) {
  printCodeBlock(command, 'command');
}

/**
 * @param {any[]} args
 */
function printOutput(...args) {
  const output = args.map((arg) => stringify(arg));
  printCodeBlock(output.join(' '), 'output');
}

/**
 * @param {string} content
 * @param {string[]} classNames
 */
function printCodeBlock(content, ...classNames) {
  let concatenatedLines = '';
  for (const line of content.trim().split('\n')) {
    concatenatedLines += `<code>${line}</code>\n`;
  }

  document.body.insertAdjacentHTML(
    'beforeend',
    `<pre class="${classNames.join(' ')}">${concatenatedLines}</pre>`
  );
}

/**
 * Recursive algorithm to stringify arrays and their content in order to print them like dev tools.
 *
 * ```js
 * stringify(['1', '2', '3'])
 * //> [ "1", "2", "3" ]
 *
 * stringify([1, '2', undefined, '3', [4, 5, 6]])
 * //> [ 1, "2", undefined, "3", [ 4, 5, 6 ] ]
 * ```
 *
 * @param {any} input
 * @returns {string}
 */
function stringify(input) {
  if (Array.isArray(input)) {
    return `[ ${input.map((element) => stringify(element)).join(', ')} ]`;
  } else if (typeof input === 'string') {
    return `"${input}"`;
  }

  return String(input);
}

function printExamples() {
  printCommand('const regularIteratingArray = [5, 4, 1, 2, 3];')
  const regularIteratingArray = [5, 4, 1, 2, 3];
  printOutput(regularIteratingArray);
  printCommand('Array.from(regularIteratingArray)');
  printOutput(Array.from(regularIteratingArray));

  printCommand('const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);')
  const reverseIteratingArray = getReverseIteratingArray([5, 4, 1, 2, 3]);
  printOutput(reverseIteratingArray);
  printCommand('Array.from(reverseIteratingArray)');
  printOutput(Array.from(reverseIteratingArray));

  printCommand('regularIteratingArray.sort((a, b) => b - a)');
  printOutput(regularIteratingArray.sort((a, b) => b - a));
  printCommand('Array.from(regularIteratingArray)');
  printOutput(Array.from(regularIteratingArray));

  printCommand('reverseIteratingArray.sort((a, b) => b - a)');
  printOutput(reverseIteratingArray.sort((a, b) => b - a));
  printCommand('Array.from(reverseIteratingArray)');
  printOutput(Array.from(reverseIteratingArray));
}

printExamples();
