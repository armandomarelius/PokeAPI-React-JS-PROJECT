import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const pokeAPI = import.meta.env.VITE_API_URL;

// Crear el contexto
const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  // HOOKS
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener favoritos desde la API al iniciar
  useEffect(() => {
    fetchFavorites();
  }, []);

  // Función para obtener los favoritos desde la API
  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${pokeAPI}/favorites`);
      
      if (!response.ok) {
        throw new Error("Error al obtener los favoritos");
      }
      
      const data = await response.json();
      setFavourites(data);

    } catch (error) {
      toast.error("Error al cargar favoritos", {
        style: {
          background: "red",
          border: "1px solid black",
          color: "white",
        },
      });
      console.error("Error fetching favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para añadir un Pokémon a favoritos
  const addToFav = async (mypokemon) => {
    if (favourites.some((pokemon) => pokemon._id === mypokemon._id)) {
      toast.error("Pokémon ya en favoritos", {
        style: {
          background: "red",
          border: "1px solid black",
          color: "white",
        },
      });
      return;
    }
  
    try {
      const response = await fetch(`${pokeAPI}/favorites/${mypokemon._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mypokemon),
      });
  
      if (!response.ok) {
        throw new Error("Error al añadir el Pokémon a favoritos");
      }
  
      // Actualizamos la lista de pokemon desde el backend
      fetchFavorites();
  
      toast.success("Pokémon añadido a favoritos", {
        style: {
          background: "green",
          border: "1px solid black",
          color: "white",
        },
      });
    } catch (error) {
      toast.error("Hubo un error al añadir el Pokémon a favoritos", {
        style: {
          background: "red",
          border: "1px solid black",
          color: "white",
        },
      });
    }
  };

  // Función para eliminar un Pokémon de favoritos
  const deleteFromFav = async (pokemonId) => {
    if (!favourites.some((pokemon) => pokemon._id === pokemonId)) {
      toast.error("Pokémon no está en favoritos", {
        style: {
          background: "red",
          border: "1px solid black",
          color: "white",
        },
      });
      return;
    }
  
    try {
      const response = await fetch(`${pokeAPI}/favorites/${pokemonId}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Error al eliminar el Pokémon de favoritos");
      }
  
      // Actualizar la lista de favoritos desde el servidor
      fetchFavorites();
  
      toast.success("Pokémon eliminado de favoritos", {
        style: {
          background: "green",
          border: "1px solid black",
          color: "white",
        },
      });
    } catch (error) {
      toast.error("Hubo un error al eliminar el Pokémon de favoritos", {
        style: {
          background: "red",
          border: "1px solid black",
          color: "white",
        },
      });
    }
  };

  const getPokemons = async () => {
    try {
      const response = await fetch(`${pokeAPI}/pokemons`);
      if(!response.ok){
        throw new Error("Error al obtener todos los pokemons");
      }

      return await response.json();
    } catch(error) {
      throw new Error("ERROR al obtener todos los pokemons de la API ", error);
    }
  };

  return (
    <PokemonContext.Provider value={{ favourites, addToFav, deleteFromFav, getPokemons, loading}}>
      {children}
    </PokemonContext.Provider>
  );
};

// Hook personalizado para usar el context
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon debe ser usado dentro de un PokemonProvider");
  }
  return context; 
};