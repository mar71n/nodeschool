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
