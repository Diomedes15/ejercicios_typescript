const numeroAleatorio: number = Math.floor(Math.random() * 10) + 1

console.log(numeroAleatorio)

let respuesta = Number(prompt("Intenta adivinar el número comprendido entre 1 y 10:"));

let intentos: number = 2;
while (intentos > 0 && respuesta !== numeroAleatorio){
    let intentosFrase = intentos == 1 ? `queda 1 intento` : `quedan ${intentos} intentos`
    respuesta = Number(prompt(`Número incorrecto. Te ${intentosFrase} intentos. Inténtalo de nuevo:`));
    intentos--;
}

if (respuesta === numeroAleatorio){
    alert("¡Has adivinado el número!");
} else {
    alert(`Lo siento, el número era ${numeroAleatorio}. ¡Mejor suerte la próxima vez!`);
}