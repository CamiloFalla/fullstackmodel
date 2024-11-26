console.log('Hola mundo')

console.log('Ejemplo de importación de modelo')

const { sum } = require('./sum')
console.log(sum(3, 2))

console.log('probando estructura nombrada')
const { essum } = require('./sum')

console.log(essum(1, 2))
