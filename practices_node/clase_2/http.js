const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')
const fs = require('node:fs')

async function takePort (desiredPort) {
  try {
    const port = await findAvailablePort(desiredPort)
    console.log(`Puerto encontrado: ${port}`)
    return port
  } catch (err) {
    console.log('Imposible conseguir un puerto', err.message)
    return null
  }
}
async function startServer (desiredPort) {
  const port = await takePort(desiredPort)

  if (!port) {
    console.error('Imposible iniciar servidor por problema en puerto')
    process.exit(1)
  }
  const verheader = (req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end('<h1>Bienvenido a mi página de inicio!!!<h1>')
    } else if (req.url === '/contacto') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end('<h1>Entraste a mi página de Contacto!!!<h1>')
    } else if (req.url === '/imagecool') {
      fs.readFile('./clase_2/miimage.jpeg', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo:', err)
          res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
          res.end('<h1>Internal Server Error!!!<h1>')
        } else {
          res.writeHead(200, { 'Content-Type': 'image/jpeg' })
          res.end(data)
        }
      })
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end('<h1>404<h1>')
    }
  }
  const server = http.createServer(verheader)

  server.listen(port, () => {
    const actualport = server.address().port
    console.log(`Servidor escuchando en el puerto ${actualport}`)
  })

  server.on('error', (err) => {
    console.error('Error en el servidor: ', err.message)
    process.exit(1)
  })
}

const desiredPort = process.env.PORT ?? 3000
startServer(desiredPort)
