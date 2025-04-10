
//Invocando librerias
const express = require("express");
const router = express.Router();

const citaController = require('../controller/citaController');

router.post("/",citaController.crearCita);
router.get("/", citaController.obtenerCitas);
router.put("/:id", citaController.actualizarCitas);
router.delete("/:id", citaController.eliminarCitas);

module.exports = router;
