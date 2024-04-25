let stack = [];

function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;
    console.log('Evaluando la expresión: ', expression);

    // Añadir un paréntesis de cierre si falta después de usar la raíz cuadrada
    expression = expression.replace(/Math\.sqrt\(/g, 'Math.sqrt(');
    expression = expression.replace(/\√\(/g, 'Math.sqrt(');
    expression = expression.replace(/\^/g, '**');

    if ((expression.match(/\(/g) || []).length > (expression.match(/\)/g) || []).length) {
        expression += ')';
    }

    try {
        let result = eval(expression);
        stack.push(expression + ' = ' + result);
        display.value = '';  // Limpia la pantalla después de mostrar el resultado
        updateStackDisplay();
    } catch (e) {
        console.error('Error al evaluar la expresión: ', e);
        display.value = 'Error';
        setTimeout(() => { display.value = ''; }, 2000); // Limpiar después de mostrar el error por un breve tiempo
    }
}

function inputValue(value) {
    let display = document.getElementById('display');
    // Agregar un paréntesis de cierre si el último valor fue una raíz cuadrada o π
    if ((value === 'Math.sqrt(' || value === 'Math.PI') && display.value !== '') {
        display.value = value + display.value + ')';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    stack = [];  // Limpia la pila de operaciones
    updateStackDisplay();
}

function updateStackDisplay() {
    let stackContainer = document.getElementById('stack-container');
    stackContainer.innerHTML = stack.map(operation => `<div>${operation}</div>`).join('');
}