// Solución con bucle contador
function contarLetrasContador(texto: string, letraBuscada: string): number {
    texto = texto.toLowerCase()
    letraBuscada = letraBuscada.toLowerCase()

    let numLetras = 0

    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === letraBuscada) {
            numLetras++
        }
    }

    return numLetras
}

// Solución con bucle for...Of
function contarLetrasForOf(texto: string, letraBuscada: string): number {
    texto = texto.toLowerCase()
    letraBuscada = letraBuscada.toLowerCase()
    let numLetras = 0
    
    for (const letra of texto) {
        if (letra === letraBuscada) {
            numLetras++
        }
    }

    return numLetras
}

// Solución con split
function contarLetrasSplit(texto: string, letraBuscada: string): number {
    texto = texto.toLowerCase()
    letraBuscada = letraBuscada.toLowerCase()

    return texto.split(letraBuscada).length - 1
}

// Solución con reduce
function contarLetrasReduce(texto: string, letraBuscada: string): number {
    texto = texto.toLowerCase()
    letraBuscada = letraBuscada.toLowerCase()

    // Versión concisa:
    // return [...texto].reduce((count, letra) => letra === letraBuscada ? count + 1 : count, 0)
    
    // Versión extendida:
    return [...texto].reduce(
        function (contador, letra) {
            if (letra === letraBuscada) {
                return contador + 1
            } else {
                return contador
            }
    }, 0)
}

// Solución con indexOf
function contarLetrasIndexOf(texto: string, letraBuscada: string): number {
    texto = texto.toLowerCase()
    letraBuscada = letraBuscada.toLowerCase()

    let numLetras = 0
    let posicion = texto.indexOf(letraBuscada)

    while (posicion !== -1){
        numLetras++
        posicion = texto.indexOf(letraBuscada, posicion + 1)
    }

    return numLetras
}

// Solución con regex
function contarLetrasRegex(texto: string, letraBuscada: string): number {
    texto = texto.toLowerCase()
    letraBuscada = letraBuscada.toLowerCase()

    const letraEscapada = letraBuscada.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapa caracteres especiales para regex

    // Versión concisa:
    // return (texto.match(new RegExp(letraEscapada, 'g')) || []).length

    // Versión extendida:
    const regex = new RegExp(letraEscapada, 'g')
    const numLetras = texto.match(regex)

    if (numLetras) {
        return numLetras.length
    } else {
        return 0
    }
}

// Función para hacer las pruebas
function probarFunciones(texto: string, letraBuscada: string, resultadoEsperado: number): string[] {
    const resultados = {
        "contador": contarLetrasContador(texto, letraBuscada),
        "forof": contarLetrasForOf(texto, letraBuscada),
        "split": contarLetrasSplit(texto, letraBuscada),
        "reduce": contarLetrasReduce(texto, letraBuscada),
        "indexof": contarLetrasIndexOf(texto, letraBuscada),
        "regex": contarLetrasRegex(texto, letraBuscada),
    }

    let fallos = []
    for (const [metodo, resultado] of Object.entries(resultados)) {
        if (resultado !== resultadoEsperado) fallos.push(metodo)
    }

    return fallos
}


const frases = [
    { texto: "ORA ORA ORA ORA ORA!", letra: "O", resultado: 5 },
    { texto: "MUDA MUDA MUDA MUDA!", letra: "m", resultado: 4 },
    { texto: "Yare yare daze", letra: "y", resultado: 2 },
    { texto: "I, Giorno Giovanna, have a dream!", letra: "g", resultado: 2 },
    { texto: "Za Warudo! Toki wo tomare!", letra: "o", resultado: 4 },
    { texto: "WRYYYYYYYYY!", letra: "Y", resultado: 9 },
    { texto: "KONO DIO DA!", letra: "d", resultado: 2 },
    { texto: "Your next line is...", letra: "q", resultado: 0 },
];

for (const { texto, letra, resultado } of frases) {
    console.log(`Texto: "${texto}"`)
    console.log(`Letra buscada: "${letra}"`)
    console.log(`Resultado: "${resultado}"`)

    const funcionesFallidas = probarFunciones(texto, letra, resultado)
    if (funcionesFallidas.length > 0) console.log('\x1b[31m%s\x1b[0m', "FALLO EN LAS FUNCIONES: ", funcionesFallidas.join(', '))
    console.log('-------------------------------------\n')
}