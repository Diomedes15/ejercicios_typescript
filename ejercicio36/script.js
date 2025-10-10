var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
console.log(numeroAleatorio);
var respuesta = Number(prompt("Intenta adivinar el número comprendido entre 1 y 10:"));
var intentos = 2;
while (intentos > 0 && respuesta !== numeroAleatorio) {
    var intentosFrase = intentos == 1 ? "queda 1 intento" : "quedan ".concat(intentos, " intentos");
    respuesta = Number(prompt("N\u00FAmero incorrecto. Te ".concat(intentosFrase, " intentos. Int\u00E9ntalo de nuevo:")));
    intentos--;
}
if (respuesta === numeroAleatorio) {
    alert("¡Has adivinado el número!");
}
else {
    alert("Lo siento, el n\u00FAmero era ".concat(numeroAleatorio, ". \u00A1Mejor suerte la pr\u00F3xima vez!"));
}
