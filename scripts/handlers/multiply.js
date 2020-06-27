'use strict';

console.log('-- loading: multiply --');

/**
 * multiplies two valid numbers and returns the product
 * @param {number} x - the left operand
 * @param {number} y - the right operand
 * @returns {number}
 */
function multiply(x, y) {
  if (typeof x !== 'number') { throw new TypeError('x'); }
  if (typeof y !== 'number') { throw new TypeError('y'); }

  const result = (x) * (y);

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
}


{
  console.log('-- testing: multiply ');
  debugger;

  const _1_expect = -1;
  const _1_actual = multiply(-1, 1);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_expect = Infinity;
  const _2_actual = multiply(3, Infinity);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_expect = -3528;
  const _3_actual = multiply(84, -42);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_expect = 0;
  const _4_actual = multiply(0, 0);
  console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

  const _5_expect = Infinity;
  const _5_actual = multiply(Infinity, 3);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_expect = 0.020000000000000004;
  const _6_actual = multiply(0.1, 0.2);
  console.assert(_6_actual === _6_expect, 'Test 6');

  const _7_expect = 'TypeError: x';
  let _7_actual;
  try {
    multiply(false, 2);
  } catch (err) {
    _7_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_7_actual === _7_expect, 'Test 7');

  const _8_expect = 'TypeError: y';
  let _8_actual;
  try {
    multiply(1, null);
  } catch (err) {
    _8_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_8_actual === _8_expect, 'Test 8');

  const _9_expect = 'TypeError: x';
  let _9_actual;
  try {
    multiply('1', '2');
  } catch (err) {
    _9_actual = `${err.name}: ${err.message}`;
  }
  console.assert(_9_actual === _9_expect, 'Test 9');
}


function multiplyHandler() {
  debugger;
  console.log('-- action: multiply');
  console.log('lastResult (before):', typeof lastResult, '\n', lastResult);

  // read a number from the user
  let input1;
    input1 = prompt("Enter some number");
    while (input1 === null || input1 === "") {
      alert("Please enter some number. The input can not be empty")
      input1 = prompt("You have to enter some number");
    }
    let inputConfirmed = +input1;
		if (Object.is(inputConfirmed, NaN)) { 
      alert('Be sure you are entering a number! Try again. ');   
    } else {
		  // divide the last result by the user's number and reassign lastResult
  lastResult = multiply(lastResult, inputConfirmed);
  console.log('lastResult (after):', typeof lastResult, '\n', lastResult);
  alert(`the new result is: ${lastResult}`);
  }
}
