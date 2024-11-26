const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('directorio no encontrado: ', err)
    return
  }
  files.forEach(element => {
    console.log(element)
  })
})
