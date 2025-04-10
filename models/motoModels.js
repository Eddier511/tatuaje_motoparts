const mongoose = require("mongoose");

//Modelo de datos Moto
const MotoSchema = new mongoose.Schema(
    {
        marca: String,
        modelo: String,
        cilindraje: String,
        anio: String,
        precio: String,
        color: String,
        proveedor: String,
        fecha_ingreso: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Motos)
//Exportamos el modelo
module.exports = mongoose.model("Moto", MotoSchema);



