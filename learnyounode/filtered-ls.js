'use strict'
const fs = require('fs')
const path = require('path')
const path0 = process.argv[2]
var exte = process.argv[3]
if (process.argv[3].indexOf('.') === 0) {
  exte = process.argv[3]
} else {
  exte = '.' + process.argv[3]
}
fs.readdir(path0 , function(err, list){
  if (err) {
    return console.log(err);
  }
  const files = list.filter(
    function extencion(file){
      //return file.lastIndexOf(exte) === file.length - exte.length & file.lastIndexOf(exte) >= 0
      return path.extname(file) === exte
    }
  )
  for (var i = 0; i < files.length; i++) {
    console.log(files[i])
  }
})
