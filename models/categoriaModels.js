const mongoose = require("mongoose");

//Modelo de datos Categoria
const CategoriaSchema = new mongoose.Schema(
    {
        nombre: String,
        descripcion: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Usuarios)
//Exportamos el modelo
module.exports = mongoose.model("Categoria", CategoriaSchema);



