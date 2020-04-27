'use strict'
const fs = require('fs')
const path = require('path')
module.exports = function (eldir, laext, callback){
  if (laext.indexOf('.') !== 0) {
    laext = '.' + laext
  }
  fs.readdir(eldir , function(err, list){
    if (err) {
      return callback(err)
    }
    const files = list.filter(
      function extencion(file){
        return path.extname(file) === laext
      })
    callback(null,files)
  })
}
