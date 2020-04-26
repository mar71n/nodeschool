const mymodule = require('./mymodule.js')
const path0 = process.argv[2]
var exte = process.argv[3]
mymodule(path0 , exte, function(err, list){
  if (err) {
    return console.error(err);
  }
  for (var i = 0; i < list.length; i++) {
    console.log(list[i])
  }
})
