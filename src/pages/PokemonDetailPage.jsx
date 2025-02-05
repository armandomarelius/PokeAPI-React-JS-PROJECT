import { useLoaderData, useNavigate } from "react-router-dom"
import { usePokemon } from "../context/PokemonContext";


const PokemonDetailPage = () => {
  const { addToFav} = usePokemon();

  const pokemon =useLoaderData();
  
  //useNAvigate para la navegacion porgramática.
  const navigate= useNavigate()
  
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <button 
        className="mb-4 text-blue-800 hover:underline"
        onClick={()=> navigate(-1)}
        >
            Volver
        </button>
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="h-48 w-48 mx-auto" />
        <h1 className="capitalize text-3xl mb-4 text-center mt-2 font-bold">{pokemon.name}</h1>

        <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-amber-400 text-xl mb-2 font-semibold">Estadisticas</h2>
              {pokemon.stats.map(stat =>(
                <div key={stat.stat.name}>
                  <span className="text-xl font-semibold ">{stat.stat.name}: {stat.base_stat}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-amber-400 text-xl mb-2 font-semibold">Tipos</h2>
              {pokemon.types.map(type =>(
                  <span
                  key={type.type.name} 
                  className="text-xl font-semibold mr-3">{type.type.name}</span>
              ))}
            </div>
        </div>
        <button 
        className="p-4 m-4 mx-auto bg-gradient-to-r from bg-yellow-300 to-yellow-500 shadow-lg rounded-lg"
        onClick={()=> addToFav(pokemon)}
        >
              Añadir favs
            </button>
      </div>
    </div>
  )
}

export default PokemonDetailPage