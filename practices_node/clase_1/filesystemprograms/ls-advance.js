const fs = require('node:fs')
const fsPromises = require('node:fs').promises
const path = require('node:path')
const pc = require('picocolors')

// Obtiene el argumento del directorio desde la línea de comandos o usa el directorio actual
const folder = process.argv[2] ?? '.'

// Convierte la ruta proporcionada a una ruta absoluta
const absoluteFolder = path.resolve(folder)
console.log(`Verificando el directorio: ${absoluteFolder}`)

// Verifica si el directorio existe
if (!fs.existsSync(absoluteFolder)) {
  pc.red(console.error(`El directorio "${absoluteFolder}" no existe.`))
  process.exit(1) // Termina el programa si el directorio no existe
}

// Lee el contenido del directorio
async function ls (folder) {
  let files
  try {
    // Usa fs.promises para trabajar con promesas
    files = await fsPromises.readdir(folder)
  } catch (err) {
    console.error(`Error al leer el directorio "${folder}":`, err.message)
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
    // Usa fs.promises para obtener estadísticas del archivo
      stats = await fsPromises.stat(filePath)
    } catch (err) {
      console.error(`Error al obtener estadísticas del archivo "${file}":`, err.message)
      return null // Retorna null si no puede obtener estadísticas
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.blue(fileType)} ${pc.green(file.padEnd(20))} ${pc.magentaBright(fileSize.toString().padStart(10))} bytes ${pc.yellowBright(fileModified)}`
  })

  const filesInfo = (await Promise.all(filesPromises)).filter(Boolean) // Filtra resultados null
  filesInfo.forEach(element => console.log(element))
}

// Llama a la función `ls` con la ruta absoluta
ls(absoluteFolder)
