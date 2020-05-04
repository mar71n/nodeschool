const http = require('http')
const urlarg = []
urlarg[0] = process.argv[2]
urlarg[1] = process.argv[3]
urlarg[2] = process.argv[4]
var cuantos = 0
var data = []

function httpGet(index){
  http.get(urlarg[index], function (response) {
    let rawData = '';
    response.on('data', function (data) {rawData += data})
    response.on('end', function (){
      cuantos = cuantos + 1
      data[index] = rawData
      if(cuantos == 3){ terminar()}
    })
    response.on('error',console.error)
  }).on('error', console.error)
}

function terminar(){
  for (let i = 0; i <3; i++){
    console.log(data[i]);
  }
}

httpGet(0)
httpGet(1)
httpGet(2)
