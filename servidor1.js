const http = require("http");
const servidor = http.createServer((req, res) =>{
    res.end("Respondiendo la peticion version 2")
})


//const puerto = 3000
servidor.listen(3000, () => {
    console.log("Escuchando solicitudes del usuario")
})