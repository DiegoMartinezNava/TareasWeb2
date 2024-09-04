// Función para generar un número aleatorio
function generarNumeroSecreto() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

// Función principal del juego
function jugar() {
    let numeroMaquina = generarNumeroSecreto();
    console.log("El número secreto es: " + numeroMaquina);
    
    let vidas = 5;
    let numeroUser = instruccionesJuego(vidas);
    
    while (!verificarNumero(numeroMaquina, numeroUser) && vidas > 1) {
        vidas--;
        numeroUser = instruccionesJuego(vidas);
    }
    
    let gano = verificarNumero(numeroMaquina, numeroUser);
    resultado(gano, numeroMaquina);
}


// Función para solicitar un número al usuario
function instruccionesJuego(vidas) {
    return parseInt(prompt("Ingresa un número del 1 al 10. Tienes " + vidas + " vidas restantes:"));
}

// Función para verificar si el número es correcto
function verificarNumero(numeroMaquina, numeroUser) {
    return numeroMaquina === numeroUser;
}

// Función para mostrar el resultado 
function resultado(gano, numeroMaquina) {
    if (gano) {
        alert("¡Adivinaste¡ SIUUUU");
        console.log("Ganaste");
    } else {
        alert("Perdiste, el número era: " + numeroMaquina);
        console.log("Perdiste, el número era el: " + numeroMaquina);
    }
}

// Iniciar el juego
jugar();
