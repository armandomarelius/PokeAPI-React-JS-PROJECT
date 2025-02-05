import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SearchPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      toast.error("Por favor, ingresa un nombre de Pokémon", {
        style: {
          background: "black",
          border: "1px solid black",
          color: "white",
        },
      });
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      const pokemon = await response.json(); // Esperar a que se resuelva la promesa
      navigate(`/search/${pokemon.name.toLowerCase()}`); // Navegar a la página de detalles
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

  return (
    <div className="bg-gradient-to-r from-green-500 to-purple-300 text-white p-4 mx-auto container mt-5 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Buscar Pokémon</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar Pokémon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            className="bg-black rounded-lg p-2 hover:bg-purple-800 transition-colors duration-300"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;