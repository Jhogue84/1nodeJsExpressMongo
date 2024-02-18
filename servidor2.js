const express = require("express");
const servidor = express();

const puerto = 3000;

//respuesta a travez del router- pueden ser archivos o json
servidor.get("/", (req, res) => {
    res.send("Respuesta con express v1")
})

//la escucha del servidor estar activa.
servidor.listen(puerto, ()=>{
    console.log("Escuchando peticiones desde le puerto ", puerto)
})

//otra respuesta a travez del router, con otra ruta - pueden ser archivos o json
servidor.get("/nosotros", (req, res)=>{
    res.send("Respuesta desde la pagina nosotros")
})