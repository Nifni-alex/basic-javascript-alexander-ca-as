const scanner = require("prompt-sync")({ sigint: true })

let cancelar = false
let frase

let sumar = ''

while (!cancelar) {
  frase = scanner('pon una frase:')

  if (frase === 'cancelar') {
    cancelar = true
  } else {
    sumar += frase + '-'
  }
}

console.log(sumar)