import express from 'express';
import { getPokemons, getPokemonById, getPokemonByName, getFavorites, addToFavs, deleteFromFavs} from '../controller/pokemonController.js';

const router = express.Router();

//endpoints
router.get('/pokemons', getPokemons);
router.get('/pokemons/:id', getPokemonById); // Obtiene un Pokémon por su ID
router.get('/pokemons/search/:name', getPokemonByName); // Obtiene un Pokemon por su nombre

router.get('/favorites', getFavorites);
router.put('/favorites/:id', addToFavs);
router.delete('/favorites/:id', deleteFromFavs)



export default router;
