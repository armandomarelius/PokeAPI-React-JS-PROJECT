# Aplicación Explorador de Pokémon 🐱

Una sencilla aplicación de Pokémon construida con React y Node.js que te permite explorar Pokémon, añadirlos a favoritos y ver sus detalles.

## Características 🌟
- Ver lista de Pokémon
- Buscar Pokémon por nombre
- Añadir/Eliminar Pokémon de favoritos
- Ver detalles de Pokémon
- Integración con base de datos MongoDB
- Gestión visual de la base de datos con Mongo Express

## Requisitos Previos 📋
- Node.js
- Docker Desktop
- Git

## Instalación 🚀

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/Pokemon.git
cd Pokemon


## variables de entorno 
frontend (.env)
VITE_API_URL=http://localhost:3000

backend (.env)
MONGODB_URI=mongodb://mongodb:27017/pokemon_db
PORT=3000
FRONT_URL=http://localhost
POKE_URL=https://pokeapi.co/api/v2/pokemon



  ## Basic Usage 📱
1. Abre http://localhost:5173 en navegador 
2. Browse the Pokemon list on the home page
3. Click "Add to favs" to add Pokemon to favorites
4. Click "Details" to see more information about a Pokemon
5. Visit the Favorites page to see your favorite Pokemon
6. Use Mongo Express ( http://localhost:8081 ) to view the database
## Project Structure 📁
- /frontend : React application with Vite
  - /src : Source code
  - /components : React components
  - /pages : Application pages
  - /context : React context for state management
- /backend : Node.js/Express API
  - /src : Source code
  - /controllers : API controllers
  - /models : Database models
  - /routes : API routes
- docker-compose.yml : Docker services configuration
- .env files: Environment configuration
## Tecnologias usadas 🛠
- Frontend:
  - React 18
  - Tailwind CSS
  - React Router
  - Context API
  - Vite
- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
- DevOps:
  - Docker
  - Docker Compose
  - Mongo Express
## Author 👨‍💻
Armando Marelius Garcia Paulsen