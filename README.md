# Ejercicios de Typescript

## Ejercicio 1

Crea dos variables:

- `nombre`: que tendra un texto
- `edad`: que tendrá un numero

Después crea una constante llamada `texto` que tenga el siguiente texto: `nombre` tiene `edad` años.

Finalmente muestra la constante `texto` por pantalla.

## Ejercicio 2

Crea dos variables que representan un rectangulo: `alto` y `ancho`. A partir de estos datos, calcula el area del rectangulo y muestralo por consola.

## Ejercicio 3

Crea una constante que tiene un número. Después haz un condicional que evalue ese número y muestre un mensaje dependiendo de estas condiciones:

1. **Si el número es menor que 5**: muestra el texto 'suspendido'
2. **Si el número es mayor o igual a 5**: muestra el texto 'aprobado'
3. **Si el número es igual a 10**: muestra el texto 'excelente'
4. **Si el número es mayor a 10 o menor que 0**: muestra el texto 'nota incorrecta'

## Ejercicio 4

Crea una constante que tiene un número. Después:

1. Muestra un mensaje diciendo si el número es positivo o negativo
2. Muestra un mensaje diciendo si el número es par o impar
3. Muestra un mensaje diciendo si el número es divisible entre 5
4. Muestra un mensaje diciendo si el número es divisible entre 10
5. Muestra un mensaje diciendo si el número es mayor o menor que 100

## Ejercicio 5

Crea una calculadra que determine la operación en base a una variable.

Para eso tendremos 3 constantes:

1. `num1`: Es el primer número
2. `num2`: Es el primer número
3. `op`: representa el operador (`+`, `-`, `*` o `/`).

En base a lo que haya en el operador, tendrás que hacer el calculo y representarlo por consola.

Por ejemplo:

```text
num1 = 2
num2 = 3
operador = +

resultado = 2 + 3
```

## Ejercicio 6

Crea un bucle que muestre todos los números pares del 1 al 100. **NO PUEDES USAR UN IF** en este ejercicio.

## Ejercicio 7

Crea un bucle que vaya del 1 al 20. Por cada número, mostrará el siguiente mensaje:

- Para números divisibles por 3, imprimir “Fizz”.
- Para números divisibles por 5, imprimir “Buzz”.
- Para números divisibles por 3 y 5, imprimir “FizzBuzz”.
- En cualquier otro caso, imprimir el número.

## Ejercicio 8

Muestra las tablas de multiplicar del 1 al 10. Para esto tendrás que utilizar dos bucles anidados.

## Ejercicio 9

Crea una función que reciba un parametro booleano. Si el valor de entrada es verdadero mostrará el mensaje "Eso es cierto" y si el valor es falso mostrará "Es mentira".

## Ejercicio 10

Crea una función que reciba un número, calcule su cubo y lo muestre por pantalla.

## Ejercicio 11

Crea una función que reciba un la velocidad en *km/hora*,la transforme a *metros/hora* y lo muestre por pantalla.

## Ejercicio 12

Escribe una función que recibe dos parametros (`nombre` y `edad`), calculará si es mayor o menor de edad y devolverá el texto: `nombre` tiene `edad` años, y es mayor (o menor, según lo calculado) de edad.

## Ejercicio 13

Escribe una función que recibe dos parametors booleanos. Si ambos valores son `true`, debería devolver `true`. Si ambos son `false`, debería devolver `false`. En cualquier otro caso, devolverá `true`.

Por ejemplo, la llamada `nand(true, true)` devolverá `false`. Y las siguientes llamadas devolverán `true`:

```
nand(true, false);
nand(false, true);
nand(false, false);
```

## Ejercicio 14

Escribe una función que recibe dos parametors booleanos. Si ambos valores son `false`, debería devolver `true`. En cualquier otro caso, devolverá `true`.

Por ejemplo, la llamada `nor(false, false)` devolverá `true`. Y las siguientes llamadas devolverán `true`:

```
nor(true, false);
nor(false, true);
nor(false, false);
```

## Ejercicio 15

Crea una función flecha que recibe un número y devuelve su cubo.

## Ejercici0 16

Crea una función flecha que recibe una velocidad en Km/hora y la devuelve en metros/hora. Recoge el valor devuelto y muestralo por consola.

## Ejercicio 17

Crea una función flecha que recibe el alto y el ancho de un rectangulo. Calcula su area y lo devuelve. Recoge el valor devuelto y muestralo por pantalla.

## Ejercicio 18

Escribe una función que recibe un texto y devuelve el número de letras que tiene

## Ejercicio 19

Escribe una función que recibe un texto y devuelve la primera letra.

## Ejercicio 20

Escribe una función que recibe un texto y devuelve la última letra.

## Ejercicio 21

Escribe una función que reciba como parametros un texto y un número. Y devuelve la letra que ocupe la posición indicada por el número.

## Ejercicio 22

Escribe una función que reciba tres parametros. Un texto y dos números. La función devolverá las letras que van desde la posición indicada por el primer número hasta la posición indicada por el último número.

Por ejemplo, si se llama a la funcón con los parametros: `dia maravilloso`, `5` y `12`. Devolverá `maravill`.

## Ejercicio 23

Escribe una función que reciba un texto y devuelva ese mismo texto en minusculas, un guón medio y de nuevo el mismo texto en mayúsculas.

Por ejemplo, si envías el texto: `Hola`. Devolverá: `hola-HOLA`.

## Ejercicio 24

Haz una función que reciba tres cadenas de texto y devuelva la más larga.

Si las tres son iguales, que devuelva "ninguna es más larga"

## Ejercicio 25

Escribe una función que reciba tres cadenas de texto. Si alguna es menor de 5 caracteres, que devuelva error. Sino, debe devolver un texto compuesto por las 3 **primeras** letras de cada palabra. Quedando la primera en mayúsculas.

Por ejemplo, si recibe los textos: `jonathan`, `joseph` y `jotaro`. Devolverá: `JonJosJot`.

## Ejercicio 26

Escribe una función que reciba tres cadenas de texto. Si alguna es menor de 5 caracteres, que devuelva error. Sino, debe devolver un texto compuesto por las 3 **últimas** letras de cada palabra. Quedando la última en mayúsculas.

Por ejemplo, si recibe los textos: `jonathan`, `joseph` y `jotaro`. Devolverá: `haNepHarO`.

## Ejercicio 27

Haz una función que reciba como parametros un texto y una letra. La función deberá devolver `true` si la letra esta dentro del texto y `false` si no esta. 

La función debe funcionar sin tener en cuenta minúsculas y mayúsculas.

## Ejercicio 28

Haz una función que reciba como parámetro de entrada un texto y devuelva el mismo texto separando las letras con guiones.

Por ejemplo, si envías: `Polnarette es gilipollas`. Devolverá: `P-o-l-n-a-r-e-t-t-e e-s g-i-l-i-p-o-l-l-a-s`.

## Ejercicio 29

Haz una función que reciba como entrada un texto y una letra. Tiene que contar cuantas veces aparece la letra en el texto y devolver ese número.

Esto tiene que funcionar sin importar si la letra es mayúscula o minúscula.

## Ejercicio 30

Haz una función que reciba como entrada dos textos y una letra. Tiene que contar cuantas veces aparece la letra en cada texto y devolver el texto donde la letra aparece más veces.

Esto tiene que funcionar sin importar si la letra es mayúscula o minúscula.

## Ejercicio 31

Escribe una función que reciba tres textos. La función cogerá la primera palabra de cada texto y creará un nuevo texto.

Por ejemplo, si envías los textos: `magician red`, `star platinum` y `hierophant green`. Devolverá: `magician star hierophant`

## Ejercicio 32

Escribe una función que reciba un texto y una palabra. La función tiene que devolver la posición de la primera ocurrencia de la palabra.

Por ejemplo, si envías el texto: `Jotaro es mi JoJo favoríto aunque se apellide Kujo`. La función devolverá: `14`.

## Ejercicio 33

Obten un número aleatorio entre 1 y 6 (ambos incluidos).

## Ejercicio 34

Escribe una constante que tenga un texto largo (por ejemplo, `Jotaro Kujo`). Crea un úmero aleatorio entre 0 y la longitud del texto. Obten la letra en la posición del número generado y muestrala por pantalla.

## Ejercicio 35

El usuario debe introducir dos números y un operador (`+`, `-`, `*` o `/`). El script calculará la operación y la mostrará completa. 

Por ejemplo, si pasas los parametros: `2`, `3` y `+`. El resultado será: `2 + 3 = 5`.

**Nota**: Este ejercicio tendrás que ejecutarlo en un navegador para permitir que el usuario introduzca datos.

## Ejercicio 36

Crea una constante con un número aleatorio. Permite que el usuario intente adivinar ese número introduciendo un valor. Si acierta, se mostrará el mensaje "CORRECTO" y si falla tres veces se mostrará el mensaje "HAS PERDIDO, EL NÚMERO ERA" seguido del número en cuestión.´

**Nota**: Este ejercicio tendrás que ejecutarlo en un navegador para permitir que el usuario introduzca datos.

## Ejercicio 37

Haz una aplicación que se encargue de calcular el coste de un viaje. Para eso, la aplicación te pedirá el destino y las noches que pasarás allí.

Para calcular el coste del viaje, vas a hacer tres funciones: 

**`costeHotel(numNoches)`**

Esta función recibirá como parámetro el número de noches y devolverá el precio a pagar. El coste de cada noche son 140 euros, pero la empresa te hará un descuento del 10% si pasas al menos 3 noches. Y un 15% si pasas una semana.

**`costeAvion(destino)`**

Los costes del avión se calcularán en base a la siguiente tabla:

- Oviedo: 15
- Tokyo: 700
- Madrid» 90
- Barcelona: 50

**`costeAlquilerCoche(numDías)`**

En base al número de días que se alquila el coche se calculará el precio.

El coste base es de 40€ por noche. Pero si alquílas el coche por 3 o más días recibes un descuento de 20€. Y si alquilas por 7 o más días recibirás un descuento de 50€ que no es acumulable con el de 3 días.

**Nota**: Este ejercicio tendrás que ejecutarlo en un navegador para permitir que el usuario introduzca datos.

## Ejercicio 38

Muestra un mensaje por pantalla en el que explique que eres un heroe que ha entrado a una mazmorra con dos puertas. En una puerta se encuentra una muerte segura y en la otra, otra mazmorra.

Aleatoriamente se asignará cual es la buena y cual es la mala.

Cuando el usuario elija, se mostrará el mensaje "has muerto" si entra por la puerta mala.

Si entra por la puerta buena, se volverá a mostrar el mismo mensaje.

Cuando el usuario falle y muera, mostrará un mensaje final que diga "has aguantado X mazmorras", donde X es el número de mazmorras que ha superado.

**Nota**: Este ejercicio tendrás que ejecutarlo en un navegador para permitir que el usuario introduzca datos.

## Ejercicio 39

El programa le pedirá al usuario su nombre. Si el nombre contiene números, mostrará el mensaje "nombre incorrecto" y volverá a preguntar. 

Si no tiene ningún número, preguntará al usuario si ese es su nombre correcto. El usuario tendrá que indicar si lo es, sin introducir ningún texto.

Si el usuario confirma que es su nombre real, se mostrará el mensaje: `Seguimos con el proceso de registro`.

**Nota**: Este ejercicio tendrás que ejecutarlo en un navegador para permitir que el usuario introduzca datos.

## Ejercicio 40

Crea dos constantes, una `base` y un `exponente`. Calcula la potencia `exponente` del número `base`. 

Utiliza un bucle para hacer el calculo.

## Ejercicio 41

Dado un número calcula su factorial.

Nota: El factorial de un número es ese número multiplicado por todos los números más pequeños.

Por ejemplo:

- 3! = 3 x 2 x 1 = 6
- 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
- 1! = 1

## Ejercicio 42

Crea un array con 5 valores. Recorre el array mostrando cada valor por pantalla.

## Ejercicio 43

Crea una función que reciba dos valores y los convierta en un array.

## Ejercicio 44

Recorre la siguiente lista con un bucle: `1, 9, 3, 8, 5, 7`. Imprimiendo en cada iteración el doble de ese número.

## Ejercicio 45

Escribe una función que reciba un array y un número. La función devolverá el valor de la posición indicada por el número.

## Ejercicio 46

Escribe una función que reciba un array, un valor y un número. La función establecerá el valor recibido en la posición indicada por el número.

## Ejercicio 47

Crea un array con diferentes números. Después cuenta cuantos números positivos, negativos y 0 hay en ese array.

## Ejercicio 48

Haz el juego del tres en raya para dos jugadores.

En un alert del navegador dibujarás un tablero cuadrado de 3x3. Cada jugador, por turnos, introducirá el número de una casilla para poner una X o un O, hasta que uno de los dos ponga 3 fichas iguales en línea. 

**Nota**: Este ejercicio tendrás que ejecutarlo en un navegador para permitir que el usuario introduzca datos.

## Ejercicio 49

El jugador debe acertar una palabra secreta que se muestra en pantalla usando guiones bajos. Para ello, se mostrará un prompt solicitando que introduzca una letra, si acierta, se cambiarán los guiones donde aparece la letra, por la letra. Si se ha equivocado, se indicará el error. A los 3 errores, aparecerá un mensaje de "has perdido" y si acierta todas las letras, aparecerá un mensaje de "has ganado".

## Ejercicio 50

A partir de un array con 5 nombres, recorre el array con un `map` para crear un nuevo array con los textos `conozco a alguien llamado NOMBRE`.

## Ejercicio 51 

Crea una variable con un texto. Después, dale la vuelta a ese texto.

Por ejemplo, si tienes el texto "Jotaro Kujo". Tienes que conseguir "ojuK oratoJ".

## Ejercicio 52

Crea una variable con un texto. Después, dale la vuelta a las palabras del texto.

Por ejemplo, si tienes el texto "Os habeis cargado a mi Jojo Favorito, Joseph Joestar!". Debes conseguir "Joestar! Joseph, Favorito Jojo mi a cargado habeis Os"
