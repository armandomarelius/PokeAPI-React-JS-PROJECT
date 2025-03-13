import express from 'express';
import pokemonRoutes from './routes/pokemonRoutes.js'
import connectDB from '../config/db.js';
import { fetchAndInsertPokemons } from './controller/pokemonController.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors()); //para que no me de problemas de CORS

// aqui las rutas 
 app.use('/', pokemonRoutes);

// ---- conexión con la base de datos ( funcion que crearé en  )
 connectDB();
 // insercion de los pokemons de la API en la database 
 fetchAndInsertPokemons();

export default app;
