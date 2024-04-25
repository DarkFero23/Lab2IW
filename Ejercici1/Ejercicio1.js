let pinCorrecto = "1234";
let intentos = 0;
const maxIntentos = 3;


function generarTeclado() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(i);
    }

    numeros.sort(() => Math.random() - 0.5);

    const keyboardElement = document.getElementById('keyboard');
    keyboardElement.innerHTML = ''; // Limpiar teclado anterior

    numeros.forEach(num => {
        const button = document.createElement('button');
        button.textContent = num;
        button.onclick = () => agregarNumero(num);
        keyboardElement.appendChild(button);

        if (numeros.indexOf(num) === 2 || numeros.indexOf(num) === 5 || numeros.indexOf(num) === 8) {
            keyboardElement.appendChild(document.createElement('br'));
        }
    });
    if (intentos >= maxIntentos) {
        deshabilitarTeclado(true);
    } else {
        deshabilitarTeclado(false);
    }

}

function agregarNumero(num) {
    if (intentos >= maxIntentos) {
        return 0;
    }

    const pinInput = document.getElementById('pin_input');
    if (pinInput.value.length < pinCorrecto.length) {
        pinInput.value += num;
    }
}

function clearPin() {
    const pinInput = document.getElementById('pin_input');
    pinInput.value = ''; 
}

function submitPin() {
    const pinInput = document.getElementById('pin_input');
    if (pinInput.value === pinCorrecto) {
        document.getElementById('status').textContent = 'PIN correcto. Acceso concedido.';
        deshabilitarTeclado(true);
        pinInput.value = '';
        intentos = 0; 
        
    } else {
        intentos++;
        if (intentos >= maxIntentos) {
            document.getElementById('status').textContent = 'PIN incorrecto. Acceso bloqueado.';
        } else {
            document.getElementById('status').textContent = `PIN incorrecto. Intente de nuevo. Intentos restantes: ${maxIntentos - intentos}`;
            pinInput.value = '' ; 
        }
    }
}

function deshabilitarTeclado(disable) {
    const buttons = document.querySelectorAll('#keyboard button');
    buttons.forEach(button => button.disabled = disable);
}

document.addEventListener('DOMContentLoaded', generarTeclado);
