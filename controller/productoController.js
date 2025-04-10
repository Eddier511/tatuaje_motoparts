
//Modelo de datos conectado al mongodb(conexion al schema de Productos)
const modeloProducto = require('../models/productoModels');



//rutas del crud
const crearProducto = async (req, res)=>{
    try {
        const _datos = new modeloProducto ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerProductos = async (req, res)=>{
try {
    const _datos = await modeloProducto.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los Productos"
    });
}
};



//Put
const actualizarProductos = async (req, res)=>{
try {
 
    const _datos = await modeloProducto.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarProductos = async (req, res)=>{
try {
 
    const _datos = await modeloProducto.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarProductos,
    crearProducto,
    eliminarProductos,
    obtenerProductos
};