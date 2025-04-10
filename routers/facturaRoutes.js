
//Invocando librerias
const express = require("express");
const router = express.Router();

const facturaController = require('../controller/facturaController');

router.post("/",facturaController.crearFactura);
router.get("/", facturaController.obtenerFacturas);
router.put("/:id", facturaController.actualizarFacturas);
router.delete("/:id", facturaController.eliminarFacturas);

module.exports = router;
