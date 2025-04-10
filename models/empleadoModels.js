const mongoose = require("mongoose");

//Modelo de datos Empleado
const EmpleadoSchema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        email: String,
        direccion: String,
        telefono: String,
        puesto: String,
        salario: String,
        fecha_contratacion: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Empleados)
//Exportamos el modelo
module.exports = mongoose.model("Empleado", EmpleadoSchema);



