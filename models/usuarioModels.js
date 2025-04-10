const mongoose = require("mongoose");

//Modelo de datos usuario
const UsuarioSchema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        email: String,
        telefono: String,
        direccion: String,
        fecha_registro: String

    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Usuarios)
//Exportamos el modelo
module.exports = mongoose.model("Usuario", UsuarioSchema);



