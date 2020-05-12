const http = require('http')
const fs = require('fs')
archivo = process.argv[3]
puerto = process.argv[2]
const stream = fs.createReadStream(archivo)
const server = http.createServer(function (req, res) {
  stream.pipe(res)
})
server.listen(puerto)
