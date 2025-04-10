const mongoose = require("mongoose");

//Modelo de datos usuario
const ServiciosSchema = new mongoose.Schema(
    {
        nombre: String,
        descripcion: String,
        precio: String,
        duracion_estimada: String,
        categoria: String,
        empleado: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Servicios)
//Exportamos el modelo
module.exports = mongoose.model("Servicio", ServiciosSchema);



