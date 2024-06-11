const calculator = new Calculator();

// Test addition
console.log(calculator.add(2, 3)); // Expected output: 5

// Test subtraction
console.log(calculator.subtract(5, 2)); // Expected output: 3

// Test multiplication
console.log(calculator.multiply(4, 3)); // Expected output: 12

// Test division
console.log(calculator.divide(10, 2)); // Expected output: 5

// Test division by zero
try {
    console.log(calculator.divide(10, 0)); // Expected output: Error: Cannot divide by zero
} catch (error) {
    console.log(error.message);
}