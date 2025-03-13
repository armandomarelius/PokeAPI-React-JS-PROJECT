import app from "./src/app.js";
import dotenv from 'dotenv';


// levanto el server
dotenv.config(); // carga las variables de entorno

const PORT = process.env.PORT || 3000;
const URL = process.env.FRONT_URL;


app.listen(PORT, () => console.log(`Server levantado en el puerto ${URL}:${PORT}`));