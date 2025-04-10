
//Modelo de datos conectado al mongodb(conexion al schema de Empleados)
const modeloEmpleado = require('../models/empleadoModels');



//rutas del crud
const crearEmpleado = async (req, res)=>{
    try {
        const _datos = new modeloEmpleado ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerEmpleados = async (req, res)=>{
try {
    const _datos = await modeloEmpleado.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los Empleados"
    });
}
};



//Put
const actualizarEmpleados = async (req, res)=>{
try {
 
    const _datos = await modeloEmpleado.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarEmpleados = async (req, res)=>{
try {
 
    const _datos = await modeloEmpleado.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarEmpleados,
    crearEmpleado,
    eliminarEmpleados,
    obtenerEmpleados
};