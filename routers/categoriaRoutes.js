
//Invocando librerias
const express = require("express");
const router = express.Router();

const categoriaController = require('../controller/categoriaController');

router.post("/",categoriaController.crearCategoria);
router.get("/", categoriaController.obtenerCategorias);
router.put("/:id", categoriaController.actualizarCategorias);
router.delete("/:id", categoriaController.eliminarCategorias);

module.exports = router;
