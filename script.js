import { performCalculation } from './calculator.js';

const display = document.getElementById('display');

function isOperator(value) {
  return ['/', '*', '-', '+'].includes(value);
}

function appendToDisplay(value) {
  if (display.value === 'Error' || (display.value === '0' && value !== '.' && !isOperator(value))) {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  if (display.value === '' || display.value === 'Error') {
    return;
  }
  const result = performCalculation(display.value);
  display.value = result;
}

// Contoh cara pasang event listener:
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value === 'C') {
      clearDisplay();
    } else if (value === 'DEL') {
      deleteLast();
    } else if (value === '=') {
      calculateResult();
    } else {
      appendToDisplay(value);
    }
  });
});
