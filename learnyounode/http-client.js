const http = require('http')
const url = process.argv[2]
http.get(url, function (response) {
  let rawData = '';
  response.on('data', function (data) {rawData += data + '\n'})
  response.on('end', function (){
    console.log(rawData)
  })
  response.on('error',console.error)
}).on('error', console.error)
