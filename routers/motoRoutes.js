
//Invocando librerias
const express = require("express");
const router = express.Router();

const motoController = require('../controller/motoController');

router.post("/",motoController.crearMoto);
router.get("/", motoController.obtenerMotos);
router.put("/:id", motoController.actualizarMotos);
router.delete("/:id", motoController.eliminarMotos);

module.exports = router;
