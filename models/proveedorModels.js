const mongoose = require("mongoose");

//Modelo de datos Proveedor
const ProveedorSchema = new mongoose.Schema(
    {
        nombre: String,
        telefono: String,
        email: String,
        direccion: String,
        tipo_producto: String,
        fecha_registro: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Proveedors)
//Exportamos el modelo
module.exports = mongoose.model("Proveedor", ProveedorSchema);



