import { promises as fs } from 'node:fs'

async function leerArchivos () {
  try {
    const prtextasync = await fs.readFile('./doc1.txt', 'utf-8')
    console.log('Archivo 1 leído asincrónicamente:', prtextasync)

    const setextasync = await fs.readFile('./doc2.txt', 'utf-8')
    console.log('Archivo 2 leído asincrónicamente:', setextasync)
  } catch (err) {
    console.error('Error al leer archivos:', err)
  }
}

leerArchivos()

console.log('leyendo como explicac Midudev')

fs.readFile('./doc1.txt', 'utf-8').then(text => {
  console.log('leido metodo Midudev doc1: ', text)
})

fs.readFile('./doc2.txt', 'utf-8').then(text => {
  console.log('leido metodo Midudev doc2: ', text)
})
