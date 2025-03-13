# Pokémon Explorer Application

A full-stack Pokémon application built with React and Node.js (with MongoDB) that allows users to explore Pokémon, add favorites, and view detailed information.

## Features 🌟

- Browse a comprehensive list of Pokémon
- Search for Pokémon by name
- Add/Remove Pokémon to/from favorites
- View detailed Pokémon information
- MongoDB integration for data persistence
- Visual database management with Mongo Express
- Responsive design with Tailwind CSS

## Prerequisites 📋

- Node.js
- Docker Desktop
- Git

## Installation 🚀

1. Clone the repository:
```bash
git clone https://github.com/armandomarelius/Pokemon.git
cd Pokemon
```

2. Set up environment variables:

**Frontend (.env)**
```
VITE_API_URL=http://localhost:3000
```

**Backend (.env)**
```
MONGODB_URI=mongodb://mongodb:27017/pokemon_db
PORT=3000
FRONT_URL=http://localhost
POKE_URL=https://pokeapi.co/api/v2/pokemon

```

**Start the application using Docker Compose:**
```
docker-compose up
```
This will start all services (frontend, backend, MongoDB, and Mongo Express) in containers.

## Basic Usage 📱

1. Open http://localhost:5173 in your browser
2. Browse the Pokémon list on the home page
3. Click "Add to favs" to add Pokémon to favorites
4. Click "Details" to see more information about a Pokémon
5. Visit the Favorites page to see your favorite Pokémon
6. Use Mongo Express (http://localhost:8081) to view the database

## Project Structure 📁

- **/frontend**: React application with Vite
  - /src: Source code
  - /components: React components
  - /pages: Application pages
  - /context: React context for state management
- **/backend**: Node.js/Express API
  - /src: Source code
  - /controllers: API controllers
  - /models: Database models
  - /routes: API routes
- **docker-compose.yml**: Docker services configuration
- **.env files**: Environment configuration

## Technologies Used 🛠

### Frontend:
- React 18
- Tailwind CSS
- React Router
- Context API
- Vite

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose

### DevOps:
- Docker
- Docker Compose
- Mongo Express

## API Usage

The application fetches data from:
- Local backend API for favorites management
- [PokeAPI](https://pokeapi.co/) for Pokémon information:
  - **List Pokémon:** `https://pokeapi.co/api/v2/pokemon?limit=20`
  - **Single Pokémon:** `https://pokeapi.co/api/v2/pokemon/{name}`

## Issues and Contributions

If you encounter any issues or have feature requests, feel free to open an issue on the repository.

## License

This project is open-source and available under the MIT License.

## Author 👨‍💻

Armando Marelius Garcia Paulsen

---
Made with ❤️ using React, Node.js & MongoDB!