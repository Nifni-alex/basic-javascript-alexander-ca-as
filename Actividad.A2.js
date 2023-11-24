const scanner = require("prompt-sync")({ sigint: true })
let nota = scanner("introduce tu nota => ")


if (nota < 3) {
    console.log("tu eres sudo retrasado")
}

if (nota > 3 && nota < 5) {
    console.log("tu eres sudo retrasado, pero notanto")
}

if (nota > 5 && nota < 7) {
    console.log("aprobado pero no tanto")
}

if (nota > 6 && nota < 8) {
    console.log("respetable per te me relajas")
}

if (nota > 7 && nota < 9) {
    console.log("dare por hecho que has copiado porque no me termino de creer")
}


if (nota > 9 && nota < 11) {
    console.log("Exito")
}