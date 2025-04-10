//Esto es el archivo de ajustes para el servidor 
require("dotenv").config();

//Invocando librerias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nombreControlador = "/usuarios";
// 
const app = express();

//Middleware esto es para el req y respon
app.use(express.json());
app.use(cors());

//Obtener el string de conexion env
const mongoURi = process.env.MONGO_URI;

//Conectarnos a una base de datos, NOSQL
mongoose.connect(mongoURi)
.then( ()=> console.log("Conectado"))
.catch( err => console.error("Error al conectar:", err));

//Crear nuestros esquemas, entidad, 

//Modelo de datos usuario
const UsuarioSchema = new mongoose.Schema(
    {
        nombre: String,
        email: String,
        direccion: String,
        telefono: String
    }
)
//Modelo de datos conectado al mongodb(conexion al schema de Usuarios)
const modeloUsuario = mongoose.model("Usuario", UsuarioSchema);

//rutas del crud
app.post(nombreControlador, async (req, res)=>{
        try {
            const _datos = new modeloUsuario ( req.body );
            await _datos.save();
            res.status(201).json(_datos);
        } catch (error) {
            res.status(500).json( {
                error: "Error al crear"
            });
        }
    }
)

//get obtener los datos

app.get(nombreControlador, async (req, res)=>{
    try {
        const _datos = await modeloUsuario.find();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al obtener los usuarios"
        });
    }
}
)



//Put
app.put(nombreControlador + "/:id", async (req, res)=>{
    try {
     
        const _datos = await modeloUsuario.findByIdAndUpdate(req.params.id, req.body, {new: true} );
        res.status(200).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al actualizar los datos"
        });
    }
}
)

//Delete
app.delete(nombreControlador + "/:id", async (req, res)=>{
    try {
     
        const _datos = await modeloUsuario.findByIdAndDelete(req.params.id);
        res.status(200).json("Datos eliminados");
    } catch (error) {
        res.status(500).json( {
            error: "Error al eliminar los datos"
        });
    }
}
)
//get, post, delete put


//Inciar el servidor

const PORT = process.env.PORT || 6000; //este es el puerto del API no de la base de datos
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

