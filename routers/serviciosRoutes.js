
//Invocando librerias
const express = require("express");
const router = express.Router();

const serviciosController = require('../controller/serviciosController');

router.post("/",serviciosController.crearServicio);
router.get("/", serviciosController.obtenerServicios);
router.put("/:id", serviciosController.actualizarServicios);
router.delete("/:id", serviciosController.eliminarServicios);

module.exports = router;
