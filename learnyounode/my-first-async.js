var fs = require('fs');
var archivo = process.argv[2];
var contenido = "";
function mi_call_back(err,data) {
	contenido = data;
	var resultado = contenido.toString().split('\n').length-1;
	console.log(resultado);
 }
fs.readFile(archivo, mi_call_back);
