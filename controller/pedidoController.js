
//Modelo de datos conectado al mongodb(conexion al schema de Pedidos)
const modeloPedido = require('../models/pedidoModels');



//rutas del crud
const crearPedido = async (req, res)=>{
    try {
        const _datos = new modeloPedido ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerPedidos = async (req, res)=>{
try {
    const _datos = await modeloPedido.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los Pedidos"
    });
}
};



//Put
const actualizarPedidos = async (req, res)=>{
try {
 
    const _datos = await modeloPedido.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarPedidos = async (req, res)=>{
try {
 
    const _datos = await modeloPedido.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarPedidos,
    crearPedido,
    eliminarPedidos,
    obtenerPedidos
};