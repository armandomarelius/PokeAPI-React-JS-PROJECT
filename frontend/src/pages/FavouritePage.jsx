import { Link } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { ROUTES } from "../routes/paths";

const FavouritePage = () => {
  const { favourites, deleteFromFav } = usePokemon(); // Usamos deleteFromFav del contexto

  if (favourites.length === 0) {
    return (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Your favorite pokemons</h2>
        <p className="text-gray-700 mb-4">
          You currently don´t have any pokemons added to favs.
        </p>
        <Link
          to={ROUTES.HOME}
          className="text-blue-600 hover:underline"
        >
          Return to home page
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Your favourite Pokemons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favourites.map((pokemon) => (
          <div
            key={pokemon._id}
            className="bg-white rounded-lg shadow-lg p-4 text-center"
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="h-32 w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold capitalize">{pokemon.name}</h3>
            <div className="mt-4 flex justify-center space-x-2">
              <button
                onClick={() => deleteFromFav(pokemon._id)} // Eliminar de favoritos
                className="bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors duration-300 text-sm"
              >
                Eliminar
              </button>

              <Link to={`/search/${pokemon.name}`} className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-800">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
