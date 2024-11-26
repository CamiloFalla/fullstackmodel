import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo')
console.log('--------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Versión del Sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus()) // Escala procesos en Node
const memoriaLibreGB = freemem() / (1024 ** 3)
const memoriaTotalGB = totalmem() / (1024 ** 3)
const memoriaUsadaGB = memoriaTotalGB - memoriaLibreGB

console.log('Memoria libre (GB)', memoriaLibreGB.toFixed(2))
console.log('Memoria total (GB)', memoriaTotalGB.toFixed(2))
console.log('Memoria usada (GB)', memoriaUsadaGB.toFixed(2))

console.log('uptime', uptime() / 60 / 60)
