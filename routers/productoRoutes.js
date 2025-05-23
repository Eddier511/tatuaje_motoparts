
//Invocando librerias
const express = require("express");
const router = express.Router();

const productoController = require('../controller/productoController');

router.post("/",productoController.crearProducto);
router.get("/", productoController.obtenerProductos);
router.put("/:id", productoController.actualizarProductos);
router.delete("/:id", productoController.eliminarProductos);

module.exports = router;
