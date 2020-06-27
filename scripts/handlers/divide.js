'use strict';

console.log('-- loading: divide --');

/**
 * divides two valid numbers and returns the quotient
 * @param {number} x - the left operand
 * @param {number} y - the right operand
 * @returns {number}
 */
function divide(x, y) {
  if (typeof x !== 'number') { throw new TypeError('x'); }
  if (typeof y !== 'number') { throw new TypeError('y'); }

  const result = (x) / (y);

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
}


{
  console.log('-- testing: divide ');
  debugger;

  const _1_expect = -1;
  const _1_actual = divide(-1, 1);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_expect = 0;
  const _2_actual = divide(3, Infinity);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_expect = -2;
  const _3_actual = divide(84, -42);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_expect = NaN;
  const _4_actual = divide(0, 0);
  console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

  const _5_expect = Infinity;
  const _5_actual = divide(Infinity, 3);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_expect = 0.5;
  const _6_actual = divide(0.1, 0.2);
  console.assert(_6_actual === _6_expect, 'Test 6');

  const _7_expect = 'TypeError: x';
  let _7_actual;
  try {
    divide(false, 2);
  } catch (err) {
    _7_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_7_actual === _7_expect, 'Test 7');

  const _8_expect = 'TypeError: y';
  let _8_actual;
  try {
    divide(1, null);
  } catch (err) {
    _8_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_8_actual === _8_expect, 'Test 8');

  const _9_expect = 'TypeError: x';
  let _9_actual;
  try {
    divide('1', '2');
  } catch (err) {
    _9_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_9_actual === _9_expect, 'Test 9');
}


function divideHandler() {
  debugger;
  console.log('-- action: divide');
  console.log('lastResult (before):', typeof lastResult, '\n', lastResult);

  // read a number from the user
  let input1 = prompt("Enter some number");

  while (input1 === null || input1 === "") {
    alert("Please enter some number. The input can not be empty")
    input1 = prompt("You have to enter some number");
  }

  const num1 = Number(input1);

  // divide the last result by the user's number and reassign lastResult
  lastResult = divide(lastResult, num1);
  console.log('lastResult (after):', typeof lastResult, '\n', lastResult);

  alert(`the new result is: ${lastResult}`);
}
