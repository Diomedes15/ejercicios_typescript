function compararCadenas(cadenas: string[]): string {
    const maxLongitud = Math.max(...cadenas.map(cadena => cadena.length));

    const cadenasMasLargas = cadenas.filter(cadena => cadena.length === maxLongitud);

    if (cadenasMasLargas.length === 1) {
        return `La cadena de texto más larga es: ${cadenasMasLargas[0]}`;
    } else {
        return `Las cadenas de texto más largas son: ${cadenasMasLargas.join(" y ")}`;
    }
}

const cadena1: string = "Mi personaje favorito es Jojo";
const cadena2: string = "Mi personaje favorito es Dio";
const cadena3: string = "Mi personaje favorito es Jean Pierre Polnareff";

console.log(compararCadenas([cadena1, cadena2, cadena3]));
