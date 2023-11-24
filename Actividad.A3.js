const scanner = require("prompt-sync")({ sigint: true })

let Cancelar = false
let numImput

let numero
let sumar = 0

while (!Cancelar) {
  numImput = scanner('pon un numero:')

  if (Number(numImput)) {
    numero = Number(numImput)
    sumar += numero
  } else if (numImput !== 'cancelar') {
    console.log('no vale:')
  } else {
    if (Cancelar = true) {
      console.log(sumar)
  }
  }




}
