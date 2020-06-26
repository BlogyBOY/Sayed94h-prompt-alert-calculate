'use strict';

console.log('-- loading: subtract --');

/**
 * subtracts two valid numbers and returns the difference
 * @param {number} x - the left operand
 * @param {number} y - the right operand
 * @returns {number}
 */
function subtract(x, y) {
  if (typeof x !== 'number') { throw new TypeError('x'); }
  if (typeof y !== 'number') { throw new TypeError('y'); }

  const result = x - y;

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
}


{
  console.log('-- testing: subtract ');
  debugger;

  const _1_expect = -2;
  const _1_actual = subtract(-1, 1);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_expect = 2;
  const _2_actual = subtract(1, -1);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_expect = 126;
  const _3_actual = subtract(84, -42);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_expect = 0;
  const _4_actual = subtract(0, 0);
  console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

  const _5_expect = Infinity;
  const _5_actual = subtract(Infinity, 3);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_expect = -0.1;
  const _6_actual = subtract(0.1, 0.2);
  console.assert(_6_actual === _6_expect, 'Test 6');

  const _7_expect = 'TypeError: x';
  let _7_actual;
  try {
    subtract(false, 2);
  } catch (err) {
    _7_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_7_actual === _7_expect, 'Test 7');

  const _8_expect = 'TypeError: y';
  let _8_actual;
  try {
    subtract(1, null);
  } catch (err) {
    _8_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_8_actual === _8_expect, 'Test 8');

  const _9_expect = 'TypeError: x';
  let _9_actual;
  try {
    subtract('1', '2');
  } catch (err) {
    _9_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_9_actual === _9_expect, 'Test 9');
}


function subtractHandler() {
  debugger;
  console.log('-- action: subtract');
  console.log('lastResult (before):', typeof lastResult, '\n', lastResult);

  // read a number from the user

  const input = prompt('Write Some Number');
  if (input === null || input === "") {
    alert('Please enter a valid number');
  } else {
    let inputConfirmed = +input;
    if (Object.is(inputConfirmed, NaN)) { alert('Be sure you are entering a number! Try again. '); }
    else {
      // subtract the last result by the user's number and reassign lastResult
      const result = subtract(inputConfirmed, lastResult);
      // display for use
      alert(`The result is ${result}`);
      console.log('User Input:', typeof inputConfirmed, '\n', inputConfirmed);
      console.log('lastResult (before):', typeof lastResult, '\n', lastResult);
      lastResult = result;
      // log for developers
      console.log('lastResult (after):', typeof lastResult, '\n', lastResult);
      
    }

  alert(`the new result for shared variable is: ${lastResult}`);
  }

}
