const express = require('express')
const crypto = require('node:crypto')
const empleados = require('./empleados.json')

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

app.get('/empleados', (req, res) => {
  const { area } = req.query;

  if (area) {
    const normalizedQuery = area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const filteredArea = empleados.filter(employee =>
      employee.area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(normalizedQuery)
    );
    return res.json({ data: filteredArea });
  }

  res.json({ data: empleados });
});

app.get('/empleados/:iduniqemp', (req, res) => {
  const { iduniqemp } = req.params
  const employee = empleados.find(employee => employee.iduniqemp === iduniqemp )
  if (employee) return res.json(employee)

  res.status(404).json({ message: 'Empleado no encontrado' })
})

app.post('/empleados', (req, res) => {
  const {
    iduniqemp,
    name,
    cargo,
    area,
    initevaluate
  } =req.body
  const newEmployee = {
    id: crypto.randomUUID(),
    iduniqemp,
    name,
    cargo,
    area,
    initevaluate: initevaluate ?? false
  }
  
  empleados.push(newEmployee)

  res.status(201).json({ message: newEmployee })
})

const PORT = process.env.PORT ?? 12347

app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`)
})

