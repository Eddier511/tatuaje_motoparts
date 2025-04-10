
//Modelo de datos conectado al mongodb(conexion al schema de Citas)
const modeloCita = require('../models/citaModels');



//rutas del crud
const crearCita = async (req, res)=>{
    try {
        const _datos = new modeloCita ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerCitas = async (req, res)=>{
try {
    const _datos = await modeloCita.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los Citas"
    });
}
};



//Put
const actualizarCitas = async (req, res)=>{
try {
 
    const _datos = await modeloCita.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarCitas = async (req, res)=>{
try {
 
    const _datos = await modeloCita.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarCitas,
    crearCita,
    eliminarCitas,
    obtenerCitas
};