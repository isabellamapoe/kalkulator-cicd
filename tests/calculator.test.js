// tests/calculator.test.js

import { add, subtract, multiply, divide } from '../calculator.js';

// Fungsi test untuk ekspresi string
function testPerformCalculation(expression) {
  try {
    const result = new Function('return ' + expression)();
    if (isNaN(result) || !isFinite(result)) {
      return 'Error';
    }
    return result;
  } catch (error) {
    return 'Error';
  }
}

// Fungsi unit test untuk kalkulator.js
function testCalculatorFunctions() {
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`LULUS: ${message}`);
      passed++;
    } else {
      console.error(`GAGAL: ${message}`);
      failed++;
      process.exitCode = 1; // tandai CI gagal
    }
  }

  console.log('--- Memulai Tes Unit Kalkulator ---');

  assert(add(2, 2) === 4, 'add(2, 2) === 4');
  assert(subtract(5, 3) === 2, 'subtract(5, 3) === 2');
  assert(multiply(4, 3) === 12, 'multiply(4, 3) === 12');
  assert(divide(10, 2) === 5, 'divide(10, 2) === 5');

  try {
    divide(1, 0);
    assert(false, 'divide(1, 0) harusnya error');
  } catch {
    assert(true, 'divide(1, 0) error seperti yang diharapkan');
  }

  assert(testPerformCalculation('2+2') === 4, '2+2 === 4');
  assert(testPerformCalculation('5-3') === 2, '5-3 === 2');
  assert(testPerformCalculation('4*3') === 12, '4*3 === 12');
  assert(testPerformCalculation('10/2') === 5, '10/2 === 5');
  assert(testPerformCalculation('3+5*2-1') === 12, '3+5*2-1 === 12');
  assert(testPerformCalculation('1/0') === 'Error', '1/0 === Error');
  assert(testPerformCalculation('10/4') === 2.5, '10/4 === 2.5');
  assert(testPerformCalculation('sqrt(4)') === 'Error', 'sqrt(4) === Error');

  console.log(`--- Tes Selesai: Lulus ${passed}, Gagal ${failed} ---`);
}

testCalculatorFunctions();
