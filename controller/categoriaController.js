
//Modelo de datos conectado al mongodb(conexion al schema de Categorias)
const modeloCategoria = require('../models/categoriaModels');



//rutas del crud
const crearCategoria = async (req, res)=>{
    try {
        const _datos = new modeloCategoria ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerCategorias = async (req, res)=>{
try {
    const _datos = await modeloCategoria.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los Categorias"
    });
}
};



//Put
const actualizarCategorias = async (req, res)=>{
try {
 
    const _datos = await modeloCategoria.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarCategorias = async (req, res)=>{
try {
 
    const _datos = await modeloCategoria.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarCategorias,
    crearCategoria,
    eliminarCategorias,
    obtenerCategorias
};