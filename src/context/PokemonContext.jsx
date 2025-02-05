import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

// Crear el contexto
const PokemonContext = createContext();

// Crear el provider del contexto
 export const PokemonProvider = ({ children }) => {
  // HOOKS
  const [favourites, setFavourites] = useState(() => {
    const savedPokemons = localStorage.getItem("pokemons");
    return savedPokemons ? JSON.parse(savedPokemons) : [];
  });

  // Guardar en el localStorage cada vez que favourites cambie
  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(favourites));
  }, [favourites]);

  // Función para añadir un Pokémon a favoritos
  const addToFav = (pokemon) => {
    if (favourites.some((p) => p.id === pokemon.id)) {
      toast.error("Pokemon ya en favs", {
        style: {
          background: "red",
          border: "1px solid black",
          color: "white",
        },
      });
    }else{
      setFavourites((prevFavourites) => [...prevFavourites, pokemon]); // Añadir el Pokémon correctamente
      toast.success("Pokemon añadido a favoritos", {
        style: {
          background: "green",
          border: "1px solid black",
          color: "white",
        },
      });
    }
 
  };

  // Función para eliminar un Pokémon de favoritos
  const deleteToFav = (pokemonId) => {
    if (!favourites.some((p) => p.id === pokemonId)) {
      toast.error("Pokemon no está en favs", {
        style: {
          background: "red",
          border: "1px solid black",
          color: "white",
        },
      });
    }
    setFavourites((prevFavourites) =>
      prevFavourites.filter((pokemon) => pokemon.id !== pokemonId)
    );
    toast.success("Pokemon eliminado de favoritos", {
      style: {
        background: "green",
        border: "1px solid black",
        color: "white",
      },
    });
  };


  return (
    <PokemonContext.Provider value={{ favourites, addToFav, deleteToFav }}>
      {children}
    </PokemonContext.Provider>
  );
  
};

// Hook personalizado para usar el contex
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon debe ser usado dentro de un PokemonProvider");
  }
  return context; 
};