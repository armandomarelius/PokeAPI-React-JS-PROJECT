import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { usePokemon } from "../context/PokemonContext";

const SearchPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]); // Para almacenar todos los pokemons
  const [filteredPokemons, setFilteredPokemons] = useState([]); // Para almacenar los pokemons filtrados según la búsqueda
  const { getPokemons } = usePokemon();

  useEffect(() => {
    // Obtener todos los Pokémon cuando la página se cargue
    const fetchPokemons = async () => {
      try {
        const pokemonData = await getPokemons();
        setPokemons(pokemonData);
        setFilteredPokemons(pokemonData);
      } catch (error) {
        toast.error(error.message, {
          style: {
            background: "black",
            border: "1px solid black",
            color: "white",
          },
        });
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    // Filtrar los pokemons cuando se cambia el texto en el campo de búsqueda
    if (search.trim() === "") {
      setFilteredPokemons(pokemons); // Si el campo de búsqueda está vacío, mostrar todos los Pokémon
    } else {
      setFilteredPokemons(
        pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, pokemons]);

  const handlePokemonClick = (pokemonName) => {
    navigate(`/search/${pokemonName.toLowerCase()}`); // Navegar a la página de detalles del Pokémon
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-purple-300 text-white p-4 mx-auto container mt-5 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Buscar Pokémon</h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Buscar Pokémon"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Actualizar el estado de búsqueda en cada cambio
            className="w-full p-3 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
          />
        </div>
      </div>

      {filteredPokemons.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredPokemons.map((pokemon) => (
            <div
              key={pokemon.name}
              className="text-center cursor-pointer"
              onClick={() => handlePokemonClick(pokemon.name)}
            >
              <p className="mt-2 text-lg">{pokemon.name}</p>
            </div>
          ))}
        </div>
      )}
      {filteredPokemons.length === 0 && search.trim() !== "" && (
        <p className="text-center text-white">No se encontraron Pokémon con ese nombre.</p>
      )}
    </div>
  );
};

export default SearchPage;
