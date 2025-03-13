import { useLoaderData, useNavigate } from "react-router-dom"
import { usePokemon } from "../context/PokemonContext";

const PokemonDetailPage = () => {
  const { addToFav } = usePokemon();
  const pokemon = useLoaderData();
  const navigate = useNavigate();
  
  // Verificar si hay datos
  if (!pokemon) {
    return <div className="container mx-auto p-4 text-center">
      <h2 className="text-xl font-bold">No se encontraron datos del Pokémon</h2>
      <button
        className="mt-4 text-blue-800 hover:underline"
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
    </div>;
  }

  // Verificar si es un array y extraer el primer elemento si es necesario ( por que la data puse que la devolviera siempre como array
  // aunque solo sea un elemento )
  const pokemonData = Array.isArray(pokemon) ? pokemon[0] : pokemon;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <button
          className="mb-4 text-blue-800 hover:underline"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        {pokemonData.image ? (
          <img src={pokemonData.image} alt={pokemonData.name} className="h-48 w-48 mx-auto" />
        ) : (
          <div className="h-48 w-48 mx-auto bg-gray-200 flex items-center justify-center">
            <span>Sin imagen</span>
          </div>
        )}
        <h1 className="capitalize text-3xl mb-4 text-center mt-2 font-bold">{pokemonData.name || "Desconocido"}</h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-amber-400 text-xl mb-2 font-semibold">Estadisticas</h2>
            {pokemonData.base_stats ? (
              <>
                <div><span className="text-xl font-semibold">HP: {pokemonData.base_stats.hp}</span></div>
                <div><span className="text-xl font-semibold">Ataque: {pokemonData.base_stats.attack}</span></div>
                <div><span className="text-xl font-semibold">Defensa: {pokemonData.base_stats.defense}</span></div>
                <div><span className="text-xl font-semibold">Velocidad: {pokemonData.base_stats.speed}</span></div>
              </>
            ) : (
              <div className="text-red-500">No hay datos de estadísticas disponibles</div>
            )}
          </div>
          <div>
            <h2 className="text-amber-400 text-xl mb-2 font-semibold">Tipos</h2>
            {pokemonData.types && pokemonData.types.length > 0 ? (
              pokemonData.types.map(type => (
                <span
                  key={type}
                  className="text-xl font-semibold mr-3"
                >
                  {type}
                </span>
              ))
            ) : (
              <div className="text-red-500">No hay datos de tipos disponibles</div>
            )}
          </div>
        </div>
        <button
          className="p-4 m-4 mx-auto bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg rounded-lg"
          onClick={() => addToFav(pokemonData)}
        >
          Añadir favs
        </button>
      </div>
    </div>
  )
}

export default PokemonDetailPage