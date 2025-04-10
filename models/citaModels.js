const mongoose = require("mongoose");

//Modelo de datos Cita
const CitaSchema = new mongoose.Schema(
    {
        nombre: String,
        email: String,
        servicio: String,
        fecha: String,
        empleado: String,
        motivo: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Citas)
//Exportamos el modelo
module.exports = mongoose.model("Cita", CitaSchema);



