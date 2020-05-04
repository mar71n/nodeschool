
# ¡Aprendiendo NODE.JS!  

## COLECCIÓN HTTP (Ejercicio 8 de 13)  

  Escribe un programa que realice una petición HTTP GET a una URL provista  
  como primer argumento del programa. Almacena todos los datos recibidos del  
  servidor, es decir no sólo el primer evento "data", y luego escribe a  
  consola dos líneas:  

   » En la primera escribe la cantidad de caracteres recibidos.  
   » En la segunda escribe la totalidad de caracteres recibidos (todo el  
     string).  

 ─────────────────────────────────────────────────────────────────────────────  

## PISTAS  

  Hay por lo menos dos formas de resolver este problema:  

  1) Almacenar los datos de todos los eventos "data" para luego agregarlos  
  los resultados antes de imprimirlos por consola. Puedes usar el evento  
  "end" para saber cuando terminas de recibir datos.  

  2) Usa un paquete de terceros para evitar los problemas de almacenar el  
  stream completo de datos. Por ejemplo, tienes a disposición: bl (Buffer  
  List) o concat-stream.  

  <https://npmjs.com/bl> <https://npmjs.com/concat-stream>  

  Para instalar alguno de estos paquetes usa Node Package Manager npm de la  
  siguiente forma:  
```bash
     $ npm install bl  
```
  Npm descargará el paquete e instalará la última versión disponible en la  
  carpeta node_modules. Todos los paquetes instalados ahí pueden cargarse  
  desde tu programa usando require sin prefijo. Ejemplo:  
```javascript
     const bl = require('bl')  
```
  Node busca primero en su núcleo de módulos y si no lo encuentra busca en  
  node_modules.  

  En caso de no tener conexión a Internet, simplemente crea una carpeta  
  node_modules y copia el paquete desde el directorio de instalación de  
  learnyounode, es decir:  

  file:///usr/lib/node_modules/learnyounode/node_modules/bl  
  file:///usr/lib/node_modules/learnyounode/node_modules/concat-stream  

  Ambos paquetes pueden usar un stream piped para capturar los datos. Una  
  vez que se acaba el stream se dispara un callback con todos los datos:  
```javascript   
     response.pipe(bl(function (err, data) { /* ... */ }))  
     // or  
     response.pipe(concatStream(function (data) { /* ... */ }))  
```   
  Recuerda hacer data.toString() para convertir al Buffer de Node a String.  

  Puedes leer la documentación de ambos módulos en la carpeta de instalación  
  de learnyounode en:  

  file:///usr/lib/node_modules/learnyounode/docs/bl.html  
  file:///usr/lib/node_modules/learnyounode/docs/concat-stream.html  

 ─────────────────────────────────────────────────────────────────────────────  

   » Para ver estas instrucciones de nuevo, ejecute: learnyounode print  
   » Para ejecutar su programa en un entorno de pruebas, ejecute:  
     learnyounode run program.js  
   » Para verificar su programa, ejecute: learnyounode verify program.js  
   » Para más información, ejecute: learnyounode help  

# ¡Aprendiendo NODE.JS!

## COLECCIÓN HTTP (Ejercicio 8 de 13)


Su resultado propuesto comparado con lo esperado:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "395"
1.  ESPERADO:  "395"

2.  ACTUAL:    "Lets get some bingle no dramas she'll be right ocker. As dry as a longneck piece of piss as cross as a cane toad. It'll be chokkie where as cross as a ciggies."
2.  ESPERADO:  "Lets get some bingle no dramas she'll be right ocker. As dry as a longneck piece of piss as cross as a cane toad. It'll be chokkie where as cross as a ciggies."

3.  ACTUAL:    "As stands out like rage on flamin get a dog up ya offsider. As cunning as a daks where as stands out like rock up. Stands out like a drongo piece of piss come a not my bowl of rice. As cunning as a bonzer also shazza got us some slab. "
3.  ESPERADO:  "As stands out like rage on flamin get a dog up ya offsider. As cunning as a daks where as stands out like rock up. Stands out like a drongo piece of piss come a not my bowl of rice. As cunning as a bonzer also shazza got us some slab. "

4.  ACTUAL:    ""
4.  ESPERADO:  ""


────────────────────────────────────────────────────────────────────────────────

 ✓

 El resultado concuerda con lo esperado


# PASO

 Su solución a COLECCIÓN HTTP pasó sin problemas!

 Aquí está la solución oficial si desea comparar notas:

─────────────────────────────────────────────────────────────────────────────
```JavaScript
    'use strict'
    const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
```
─────────────────────────────────────────────────────────────────────────────
Mi solución:
```javascript
const http = require('http')
const url = process.argv[2]
http.get(url, function (response) {
  let rawData = '';
  response.on('data', function (data) {rawData += data})
  response.on('end', function (){
    console.log(rawData.length)
    console.log(rawData)
  })
  response.on('error',console.error)
}).on('error', console.error)
```
─────────────────────────────────────────────────────────────────────────────
Tienes 5 ejercicios por hacer.

 Escriba 'learnyounode' para mostrar el menú.

─────────────────────────────────────────────────────────────────────────────

  » Para ver estas instrucciones de nuevo, ejecute: learnyounode print
  » Para ejecutar su programa en un entorno de pruebas, ejecute:
    learnyounode run program.js
  » Para verificar su programa, ejecute: learnyounode verify program.js
  » Para más información, ejecute: learnyounode help

# ¡Aprendiendo NODE.JS!  

## MALABARES CON ASINCRONISMO (Ejercicio 9 de 13)  

  Este ejercicio es similar al anterior puesto que debes usar http.get().  
  Sin embargo, esta vez tu programa recibirá tres URLs como argumentos.  

  Tu programa deberá imprimir el contenido de cada una de las URLs en  
  consola en el mismo orden que fueron recibidos los argumentos. No deberás  
  imprimir el largo, solo el contenido como String, pero debes respetar el  
  orden de llegada de los argumentos.  

 ─────────────────────────────────────────────────────────────────────────────  

## PISTAS  

  Como las llamadas a las URLs son asíncronas, es probable que no recibas  
  las respuestas en orden por lo que no puedes imprimir las respuestas a  
  medida que llegan.  

  Tendrás que encolar los resultados y mantener un contador de cuántas  
  peticiones han sido recibidas de modo que al llegar al final puedas  
  imprimir los resultados.  

  En la vida real, utilizar [`async`](https://www.npmjs.com/package/async) o  
  [`run-parallel`](https://www.npmjs.com/package/run-parallel) facilitaria  
  la continuación de los callbacks. Pero para el alcance de este ejercicio  
  se debería realizar sin utilizarlo.  

 ─────────────────────────────────────────────────────────────────────────────  

   » Para ver estas instrucciones de nuevo, ejecute: learnyounode print  
   » Para ejecutar su programa en un entorno de pruebas, ejecute:  
     learnyounode run program.js  
   » Para verificar su programa, ejecute: learnyounode verify program.js  
   » Para más información, ejecute: learnyounode help  

# ¡Aprendiendo NODE.JS!

## MALABARES CON ASINCRONISMO (Ejercicio 9 de 13)


Su resultado propuesto comparado con lo esperado:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "Built like a cleanskin how trent from punchy mongrel. Grab us a postie also as busy as a bottle-o. "
1.  ESPERADO:  "Built like a cleanskin how trent from punchy mongrel. Grab us a postie also as busy as a bottle-o. "

2.  ACTUAL:    "Gutful of ridgy-didge and you little ripper galah. As busy as a avos also flat out like a bounce. We're going chunder how built like a kindie. She'll be right cobber how get a dog up ya dag. "
2.  ESPERADO:  "Gutful of ridgy-didge and you little ripper galah. As busy as a avos also flat out like a bounce. We're going chunder how built like a kindie. She'll be right cobber how get a dog up ya dag. "

3.  ACTUAL:    "He hasn't got a brizzie bloody shazza got us some yobbo. Mad as a big smoke no dramas as busy as a dag. He hasn't got a damper how gutful of reckon. It'll be sleepout how you little ripper boozer. He's got a massive freckle my get a dog up ya fair go. "
3.  ESPERADO:  "He hasn't got a brizzie bloody shazza got us some yobbo. Mad as a big smoke no dramas as busy as a dag. He hasn't got a damper how gutful of reckon. It'll be sleepout how you little ripper boozer. He's got a massive freckle my get a dog up ya fair go. "

4.  ACTUAL:    ""
4.  ESPERADO:  ""


────────────────────────────────────────────────────────────────────────────────

 ✓

 El resultado concuerda con lo esperado


# PASO

 Su solución a MALABARES CON ASINCRONISMO pasó sin problemas!

 Aquí está la solución oficial si desea comparar notas:

─────────────────────────────────────────────────────────────────────────────
```javascript
    'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
```
─────────────────────────────────────────────────────────────────────────────
 Tienes 4 ejercicios por hacer.

 Escriba 'learnyounode' para mostrar el menú.

─────────────────────────────────────────────────────────────────────────────

  » Para ver estas instrucciones de nuevo, ejecute: learnyounode print
  » Para ejecutar su programa en un entorno de pruebas, ejecute:
    learnyounode run program.js
  » Para verificar su programa, ejecute: learnyounode verify program.js
  » Para más información, ejecute: learnyounode help
