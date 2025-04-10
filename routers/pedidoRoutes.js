
//Invocando librerias
const express = require("express");
const router = express.Router();

const pedidoController = require('../controller/pedidoController');

router.post("/",pedidoController.crearPedido);
router.get("/", pedidoController.obtenerPedidos);
router.put("/:id", pedidoController.actualizarPedidos);
router.delete("/:id", pedidoController.eliminarPedidos);

module.exports = router;
