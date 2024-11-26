const fs = require('node:fs')

// Obtiene las estadísticas del archivo
const stats = fs.statSync('./doc.txt')

// Imprime la información
console.log(
  stats.isFile(), // ¿Es un archivo?
  stats.isDirectory(), // ¿Es un directorio?
  stats.isSymbolicLink(), // ¿Es un enlace simbólico?
  stats.size // Tamaño del archivo en bytes
)
