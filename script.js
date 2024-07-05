const result = document.getElementById('result');
const buttons = document.querySelectorAll('input[type=button]');
let currentInput = "";
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'c') {
            currentInput = "";
            result.value = "";
        }
        else if (value === '=') {
            try {
                currentInput = eval(currentInput);
                result.value = currentInput;
            } catch (e) {
                result.value = "Error";
                currentInput = "";
            }
        }
        else {
            currentInput += value;
            result.value = currentInput;
        }
    });
});