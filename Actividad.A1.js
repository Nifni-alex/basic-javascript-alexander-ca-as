const scanner = require("prompt-sync")({ sigint: true })

let anos = scanner("introduce tu edad=> ")

if (anos > 18) {
    console.log("venga a conduchir")
} else {
    console.log("a tu casa por menor")
}

