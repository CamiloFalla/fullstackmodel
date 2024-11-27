const express = require('express')

const app = express()
app.disable('x-powered-by')

app.get(',', (req, res) => {
  res.json({ message: 'hola mundo' })
})

const PORT = process.env.PORT ?? 12347

app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`)
})

