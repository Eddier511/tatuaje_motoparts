//Esto es el archivo de ajustes para el servidor 
const path = require('path');
require("dotenv").config();

//Invocando librerias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usuarioRouters = require("./routers/usuarioRoutes");
const motoRouters = require("./routers/motoRoutes");
const serviciosRouters = require("./routers/serviciosRoutes");
const proveedorRouters = require("./routers/proveedorRoutes");
const pedidoRouters = require("./routers/pedidoRoutes");
const citaRouters = require("./routers/citaRoutes");
const facturaRouters = require("./routers/facturaRoutes");
const productoRouters = require("./routers/productoRoutes");
const empleadoRouters = require("./routers/empleadoRoutes");
const categoriaRouters = require("./routers/categoriaRoutes");
// 
const app = express();

//Middleware esto es para el req y respon
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

//Obtener el string de conexion env
const mongoURi = process.env.MONGO_URI;

//Conectarnos a una base de datos, NOSQL
mongoose.connect(mongoURi)
.then( ()=> console.log("Conectado"))
.catch( err => console.error("Error al conectar:", err));

app.use("/usuarios", usuarioRouters);
app.use("/motos", motoRouters);
app.use("/servicios", serviciosRouters);
app.use("/proveedores", proveedorRouters);
app.use("/pedidos", pedidoRouters);
app.use("/citas", citaRouters);
app.use("/facturas", facturaRouters);
app.use("/productos", productoRouters);
app.use("/empleados", empleadoRouters);
app.use("/categorias", categoriaRouters);


//Inciar el servidor

const PORT = process.env.PORT || 6000; //este es el puerto del API no de la base de datos
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

