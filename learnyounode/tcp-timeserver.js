puerto = process.argv[2]
const net = require('net')
function zeroFill(i){
  return (i < 10 ? '0' : '') + i
}
const server = net.createServer(function(socket){
  date1 = new Date
  annio = date1.getFullYear()
  mes = zeroFill(date1.getMonth() + 1)
  dia = zeroFill(date1.getDate())
  hora = zeroFill(date1.getHours())
  minutos = zeroFill(date1.getMinutes())
  socket.write(annio + '-' + mes + '-' + dia + ' ' + hora + ':' + minutos + '\n')
  socket.end()
})
server.listen(puerto)
