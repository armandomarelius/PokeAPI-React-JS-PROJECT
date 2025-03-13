import Pokemon from "../models/Pokemon.js";
import dotenv from "dotenv";
dotenv.config();

const pokeURL = process.env.POKE_URL;


// fetch a la API 
const fetchPokemonsAPI = async () => {
    try {
        const response = await fetch(`${pokeURL}?limit=50`);
        if(!response.ok){
            console.error("Error en la petición")
        }

        const data = await response.json();
        return data.results // ahi estan los pokemon;

    } catch (error){
        throw new Error("Error en la petición ", error);
    }

}

// función hace fetch y devuelve e inserta la data en mi BD.
export const fetchAndInsertPokemons = async () => {
    try {
        const data = await fetchPokemonsAPI();
        
        const arrayPromesas = data.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url);
            const details = await detailsResponse.json();

            return {
                name: details.name,
                image: details.sprites.other.dream_world.front_default,
                types: details.types.map((t) => t.type.name),
                base_stats: {
                    hp: details.stats[0].base_stat,
                    attack: details.stats[1].base_stat,
                    defense: details.stats[2].base_stat,
                    speed: details.stats[5].base_stat,
                },
            };
        });

        const pokemonDetails = await Promise.all(arrayPromesas);

        console.log("Limpiando base de datos...");
        await Pokemon.deleteMany({});
        const insertedPokemons = await Pokemon.insertMany(pokemonDetails);
        console.log(`Insertados ${insertedPokemons.length} pokémon de forma exitosa`);

    } catch (error) {
        console.error("Error en fetchAndInsertPokemons:", error);
    }
};

//obtenemos pokemons de la BD 
export const getPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find(); // Busca todos los Pokémon en la BD
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(404).json({ error: "Error al obtener los Pokémon de la base de datos" });
    }
};

//obtenemos pokemon por ID 
export const getPokemonById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pokemon = await Pokemon.findById(id); // Buscar en la BD

        if (!pokemon) {
            return res.status(404).json({ message: "Pokémon no encontrado" });
        }

        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el Pokémon" });
    }
};


// Obtenemos Pokémon por nombre
export const getPokemonByName = async (req, res) => {
    const { name } = req.params;  // Obtiene el nombre desde la URL
    
    try {
        // Buscar Pokémon cuyo nombre coincida con la búsqueda
        const pokemons = await Pokemon.find({
            name: name, // cuidado que es sensible a mayusculas 
        });

        if (pokemons.length > 0) {
            return res.status(200).json(pokemons);
        } else {
            return res.status(404).json({ message: `pokemon con el nombre ${name} no encontrado.` });
        }
    } catch (error) {
        // En caso de error, devolvemos una respuesta de error
        console.error("Error al obtener pokemon:", error.message);
        return res.status(500).json({ message: error.message });
    }
};

// obtener los pokemons añadidos a favs 
export const getFavorites = async (req, res) => {
    try {
        const favoritos = await Pokemon.find({ isFavorite: true});
        res.status(200).json(favoritos);
    } catch (error) {
        res.status(404).json({ message: 'Error en el servidor', error });
    }
};

// añadir a favs
// añadir a favs
export const addToFavs = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);

        if (!pokemon) {
            return res.status(404).json({ message: "Pokémon no encontrado" });
        }

        pokemon.isFavorite = true; // Establecemos la propiedad isFavorite como true
        await pokemon.save(); // Guardamos los cambios

        res.status(200).json({ message: `${pokemon.name} añadido a favoritos` });
    } catch (error) {
        res.status(500).json({ error: "Error al añadir el Pokémon a favoritos" });
    }
};


// eliminar de favs
export const deleteFromFavs = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);

        if (!pokemon) {
            return res.status(404).json({ message: "Pokémon no encontrado" });
        }

        pokemon.isFavorite = false;
        await pokemon.save();

        res.status(200).json({ message: `${pokemon.name} eliminado de favoritos` });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el Pokémon de favoritos" });
    }
};
