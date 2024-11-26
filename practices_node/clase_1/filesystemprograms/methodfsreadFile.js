import fs from 'node:fs'

console.log('LECTURA DOCS SINCRONICA')

console.log('leyendo el primer archivo sincrono')
const prtext = fs.readFileSync('./doc1.txt', 'utf-8')
console.log('leido sincronicamente', prtext)

console.log('leyendo el segundo archivo sincrono')
const setext = fs.readFileSync('./doc2.txt', 'utf-8')
console.log('leido sincronicamente', setext)

console.log('LECTURA DOCS ASINCRONICA')

console.log('leyendo el primer archivo Asincrono')
fs.readFile('./doc1.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log('La aplicacion no lee el doc')
  } else {
    console.log('leido asincronicamente', text)
  }
})

console.log('leyendo el segundo archivo Asincrono')
fs.readFile('./doc2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log('La aplicacion no lee el doc')
  } else {
    console.log('leido asincronicamente', text)
  }
})
