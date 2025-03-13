// aquí la función de conexión a mi base de datos MONGODB
import dotenv from "dotenv";
import mongoose from "mongoose";
// uso variables de entorno 
dotenv.config();

// función para conectar con la abse de datos 
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Conexión a MongoDB exitosa");

    } catch(error){
        console.error("Error con la conexión a la bd", error);
        process.exit(1);
    }
}

export default connectDB;
