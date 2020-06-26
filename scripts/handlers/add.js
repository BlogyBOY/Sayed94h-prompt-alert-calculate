'use strict';

console.log('-- loading: add --');

/**
 * adds two valid numbers and returns the sum
 * @param {number} x - the left operand
 * @param {number} y - the right operand
 * @returns {number}
 */
function add(x, y) {
	if (typeof x !== 'number') {
		throw new TypeError('x');
	}
	if (typeof y !== 'number') {
		throw new TypeError('y');
	}

	const result = x + y;

	if (typeof result !== 'number') {
		throw new TypeError('result');
	}
	return result;
}

{
	console.log('-- testing: add ');
	debugger;

	const _1_expect = 0;
	const _1_actual = add(-1, 1);
	console.assert(_1_actual === _1_expect, 'Test 1');

	const _2_expect = 0;
	const _2_actual = add(1, -1);
	console.assert(_2_actual === _2_expect, 'Test 2');

	const _3_expect = 42;
	const _3_actual = add(84, -42);
	console.assert(_3_actual === _3_expect, 'Test 3');

	const _4_expect = 0;
	const _4_actual = add(0, 0);
	console.assert(_4_actual === _4_expect, 'Test 4');

	const _5_expect = -3;
	const _5_actual = add(-1, -2);
	console.assert(_5_actual === _5_expect, 'Test 5');

	// https://0.30000000000000004.com/
	const _6_expect = 0.30000000000000004;
	const _6_actual = add(0.1, 0.2);
	console.assert(_6_actual === _6_expect, 'Test 6');

	const _7_expect = 'TypeError: x';
	let _7_actual;
	try {
		add(false, 2);
	} catch (err) {
		_7_actual = `${err.name}: ${err.message}`;
	}
	console.assert(_7_actual === _7_expect, 'Test 7');

	const _8_expect = 'TypeError: y';
	let _8_actual;
	try {
		add(1, null);
	} catch (err) {
		_8_actual = `${err.name}: ${err.message}`;
	}
	console.assert(_8_actual === _8_expect, 'Test 8');

	const _9_expect = 'TypeError: x';
	let _9_actual;
	try {
		add('1', '2');
	} catch (err) {
		_9_actual = `${err.name}: ${err.message}`;
	}
	console.assert(_9_actual === _9_expect, 'Test 9');
}

function addHandler() {
	debugger;
	console.log('-- action: add');
	console.log('lastResult (before):', typeof lastResult, '\n', lastResult);

	// read a number from the user
	const x = prompt(' enter a numbers ');
	const y = Number(x);

	// add the user's number to the last result and reassign lastResult
	const result = add(x, y);
	lastResult = add(lastResult, y);
	console.log('lastResult (after):', typeof lastResult, '\n', lastResult);

	alert(`the new result is: ${lastResult}`);
}
