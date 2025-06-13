import { performCalculation } from '../calculator.js';
import assert from 'assert';

// Tes penjumlahan
assert.strictEqual(performCalculation('2+3'), 5);

// Tes pengurangan
assert.strictEqual(performCalculation('10-4'), 6);

// Tes perkalian
assert.strictEqual(performCalculation('2*5'), 10);

// Tes pembagian
assert.strictEqual(performCalculation('20/4'), 5);

// Tes ekspresi kompleks
assert.strictEqual(performCalculation('2+3*4'), 14);

// Tes pembagian dengan nol
assert.strictEqual(performCalculation('10/0'), 'Error');

// Tes ekspresi invalid
assert.strictEqual(performCalculation('2++2'), 'Error');

console.log('Semua tes lulus!');
