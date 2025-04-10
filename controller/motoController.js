
//Modelo de datos conectado al mongodb(conexion al schema de Motos)
const modeloMoto = require('../models/motoModels');



//rutas del crud
const crearMoto = async (req, res)=>{
    try {
        const _datos = new modeloMoto ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerMotos = async (req, res)=>{
try {
    const _datos = await modeloMoto.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los Motos"
    });
}
};



//Put
const actualizarMotos = async (req, res)=>{
try {
 
    const _datos = await modeloMoto.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarMotos = async (req, res)=>{
try {
 
    const _datos = await modeloMoto.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarMotos,
    crearMoto,
    eliminarMotos,
    obtenerMotos
};