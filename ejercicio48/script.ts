function dibujarTablero(): void {
    let texto = "";
    for (let fila of tablero) {
        for (let celda of fila) {
            texto += celda + "  "
        }
        texto += "\n"
    }
    alert(texto)
}

function pedirJugada(): void {
    alert(`Turno del jugador ${valor}`)

    let columnaElegida: number = 0
    let filaElegida: number = 0
    let pedirJugada: boolean = true

    while (pedirJugada) {
        filaElegida = Number(prompt("Introduce la fila (0-2)"))
        if (filaElegida < 0 || filaElegida > 2) {
            alert("Fila no válida, inténtalo de nuevo")
            continue
        }

        columnaElegida = Number(prompt("Introduce la columna (0-2)"))
        if (columnaElegida < 0 || columnaElegida > 2) {
            alert("Columna no válida, inténtalo de nuevo")
            continue
        }

        if (tablero[filaElegida][columnaElegida] !== '_') {
            alert("La celda ya está ocupada, inténtalo de nuevo")
            continue
        }

        tablero[filaElegida][columnaElegida] = valor
        pedirJugada = false
    }
}

function comprobarGanador(): string {
    let ganador = ''

    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] !== '_' && tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
            ganador = tablero[i][0]
            break
        }

        if (tablero[0][i] !== '_' && tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
            ganador = tablero[0][i]
            break
        }
    }

    if (tablero[1][1] !== '_') {
        if ((tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) ||
            (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0])) {
            ganador = tablero[1][1]
        }
    }

    return ganador
}

function quedanMovimientos(): boolean {
    for (let fila of tablero) {
        for (let celda of fila) {
            if (celda === '_') {
                return true
            }
        }
    }
    return false
}

const tablero: string[][] = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_'],
]

let valor: string = "X"
let jugando: boolean = true
let ganador: string = ''

while (jugando){
    dibujarTablero()
    pedirJugada()

    valor = valor === 'X' ? 'O' : 'X'

    ganador = comprobarGanador()
    
    jugando = ganador === '' && quedanMovimientos()
}

if (ganador !== '') {
    alert(`¡El ganador es el jugador ${ganador}!`)
} else {
    alert("¡Empate!")
}