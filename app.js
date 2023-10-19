function calculator() {
    try {
        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));
        let operator = prompt("Enter an operator (+, -, *, /):");

        if (!["+", "-", "*", "/"].includes(operator)) {
            throw new Error("Invalid operator. Please enter +, -, *, or /.");
        }

        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                result = num1 / num2;
                break;
        }

        document.write(`Result: ${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

calculator();
