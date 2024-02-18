const express = require("express")
const servidor3 = express();

const puerto = 3000;
//middleware -- debe ir de primero, antes de las rutas (no recomendable, no optimo)
servidor3.use(express.static(__dirname + "/public"))

servidor3.get("/", (req, res)=>{
    //console.log(__dirname)
    res.send("respuesta de la ruta raiz ")
})

servidor3.get("/nosotros", (req, res)=>{
    res.send("respuesta de la ruta nosotros")
})

//middleware -- esta al final, primero se ejecutan las rutas.
servidor3.use((req, res)=>{
    res.status(404).sendFile(__dirname + "/public/404.html")
})

servidor3.listen(puerto, ()=>{
    console.log("escuchando")
})

