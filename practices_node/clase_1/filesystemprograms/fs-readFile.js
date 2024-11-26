const fs = require('node:fs')

const text = fs.readFileSync('./doc.txt', 'utf-8')

console.log(text)
