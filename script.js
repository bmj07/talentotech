document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerText;

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.innerText = '0';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = eval(`${previousInput}${operator}${currentInput}`);
                    display.innerText = currentInput;
                    operator = '';
                    previousInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    previousInput = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });
});
