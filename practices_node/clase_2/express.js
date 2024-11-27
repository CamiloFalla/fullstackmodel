const express = require('express')
const charmander = require('./pokemon/charmander.json')

const app = express()

// Desactivar la cabecera antes de definir rutas
app.use((req, res, next) => {
  res.removeHeader('X-Powered-By')
  next()
})

const PORT = process.env.PORT ?? 1236

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()

  if (req.headers['content-type'] !== 'application/json') return next() // Corrección del typo

  let body = ''

  // Escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    try {
      const data = JSON.parse(body)
      data.timestamp = Date.now()
      // Mutar la request y meter la info en req.body
      req.body = data
      next()
    } catch (error) {
      res.status(400).send('Invalid JSON format')
    }
  })
})

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi página</h1>')
})

app.get('/pokemon/charmander', (req, res) => {
  res.json(charmander)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// Última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h2>404</h2>')
})

app.listen(PORT, () => {
  console.log(`server is listening on port http://localhost:${PORT}`)
})
