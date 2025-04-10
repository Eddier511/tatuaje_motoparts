
//Modelo de datos conectado al mongodb(conexion al schema de Servicios)
const modeloServicio = require('../models/serviciosModels');



//rutas del crud
const crearServicio = async (req, res)=>{
    try {
        const _datos = new modeloServicio ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerServicios = async (req, res)=>{
try {
    const _datos = await modeloServicio.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los usuarios"
    });
}
};



//Put
const actualizarServicios = async (req, res)=>{
try {
 
    const _datos = await modeloServicio.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarServicios = async (req, res)=>{
try {
 
    const _datos = await modeloServicio.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarServicios,
    crearServicio,
    eliminarServicios,
    obtenerServicios
};