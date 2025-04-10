
//Invocando librerias
const express = require("express");
const router = express.Router();

const empleadoController = require('../controller/empleadoController');

router.post("/",empleadoController.crearEmpleado);
router.get("/", empleadoController.obtenerEmpleados);
router.put("/:id", empleadoController.actualizarEmpleados);
router.delete("/:id", empleadoController.eliminarEmpleados);

module.exports = router;
