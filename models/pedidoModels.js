const mongoose = require("mongoose");

//Modelo de datos Pedido
const PedidoSchema = new mongoose.Schema(
    {
        nombre: String,
        fecha_pedido: String,
        estado: String,
        total: String,
        direccion_envio: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Pedidos)
//Exportamos el modelo
module.exports = mongoose.model("Pedido", PedidoSchema);



