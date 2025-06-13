// calculator.js
export function performCalculation(expression) {
  try {
    const result = new Function('return ' + expression)();
    if (isNaN(result) || !isFinite(result)) {
      return 'Error';
    }
    return result;
  } catch {
    return 'Error';
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { performCalculation };
}
