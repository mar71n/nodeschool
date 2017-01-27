var fs = require('fs');
var archivo = process.argv[2];
var contenido = fs.readFileSync(archivo);
var resultado = contenido.toString().split('\n').length-1;
console.log(resultado);
