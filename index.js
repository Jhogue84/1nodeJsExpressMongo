const frutas = ["fresa", "mora", "banano", "fresa"]

frutas.forEach(fruta =>{
    //console.log("La fruta es: ", fruta)
    console.count(fruta)
})

console.log("\n")

const animales_exp = require("./animales")

animales_exp.forEach(animal =>{
    console.log("Animal : ", animal)
})

const miVaca = require("cowsay")

console.log(miVaca.say({
    text: "Hola, fundamentos node js",
    e: "Oo",
    T: "U"
}))