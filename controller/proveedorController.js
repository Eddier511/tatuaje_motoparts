
//Modelo de datos conectado al mongodb(conexion al schema de Proveedor)
const modeloProveedor = require('../models/proveedorModels');



//rutas del crud
const crearProveedor = async (req, res)=>{
    try {
        const _datos = new modeloProveedor ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerProveedor = async (req, res)=>{
try {
    const _datos = await modeloProveedor.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los Proveedor"
    });
}
};



//Put
const actualizarProveedor = async (req, res)=>{
try {
 
    const _datos = await modeloProveedor.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarProveedor = async (req, res)=>{
try {
 
    const _datos = await modeloProveedor.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarProveedor,
    crearProveedor,
    eliminarProveedor,
    obtenerProveedor
};