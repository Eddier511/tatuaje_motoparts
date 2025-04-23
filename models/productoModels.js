const mongoose = require("mongoose");

//Modelo de datos Producto
const ProductoSchema = new mongoose.Schema(
    {
        nombre: String,
        descripcion: String,
        categoria: String,
        proveedor: String,
        precio: String,
        fecha_registro: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Productos)
//Exportamos el modelo
module.exports = mongoose.model("Producto", ProductoSchema);



