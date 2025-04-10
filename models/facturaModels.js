const mongoose = require("mongoose");

//Modelo de datos Factura
const FacturaSchema = new mongoose.Schema(
    {
        pedido_id: String,
        nombre: String,
        email: String,
        empleado: String,
        fecha: String,
        monto: String,
        metodo_pago: String
    }
);


//Modelo de datos conectado al mongodb(conexion al schema de Facturas)
//Exportamos el modelo
module.exports = mongoose.model("Factura", FacturaSchema);



