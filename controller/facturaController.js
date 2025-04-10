
//Modelo de datos conectado al mongodb(conexion al schema de facturas)
const modeloFactura = require('../models/facturaModels');



//rutas del crud
const crearFactura = async (req, res)=>{
    try {
        const _datos = new modeloFactura ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerFacturas = async (req, res)=>{
try {
    const _datos = await modeloFactura.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los Facturas"
    });
}
};



//Put
const actualizarFacturas = async (req, res)=>{
try {
 
    const _datos = await modeloFactura.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarFacturas = async (req, res)=>{
try {
 
    const _datos = await modeloFactura.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarFacturas,
    crearFactura,
    eliminarFacturas,
    obtenerFacturas
};