
//Invocando librerias
const express = require("express");
const router = express.Router();

const proveedorController = require('../controller/proveedorController');

router.post("/",proveedorController.crearProveedor);
router.get("/", proveedorController.obtenerProveedor);
router.put("/:id", proveedorController.actualizarProveedor);
router.delete("/:id", proveedorController.eliminarProveedor);

module.exports = router;
