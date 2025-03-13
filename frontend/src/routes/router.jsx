import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import { ROUTES } from "./paths";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import FavouritePage from "../pages/FavouritePage";
import AboutPage from "../pages/AboutPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";

const router = createBrowserRouter([
    {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
        {
            path:ROUTES.HOME,
            element:<Home />
        },
        {
            path:ROUTES.SEARCH,
            element:<SearchPage />
        },
        {
            path:ROUTES.FAVOURITES,
            element:<FavouritePage />
        },
        {
            path:ROUTES.POKEMON,
            element:<PokemonDetailPage />,
            errorElement: <ErrorPage />,
            //loader: Loader permite hacer un fetch directo a la ruta
            loader: async ({params})=>{
                const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemons/search/${params.name}`);
                if (!response.ok){
                    console.error("Error obteniendo el detalle del pokemon");
                }
                return await response.json();
            }
        },
        {
            path:ROUTES.ABOUT,
            element:<AboutPage />
        }
    ]
    }
]);

export default router;
