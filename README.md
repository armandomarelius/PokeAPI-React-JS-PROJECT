# Pokemon Explorer (by Armando Marelius)

Pokemon Explorer is a React application that allows users to browse, search, and favorite their favorite Pokémon using the [PokeAPI](https://pokeapi.co/). It includes features like a responsive UI, React Router navigation, and state management with context.

## Features
- Browse a list of Pokémon
- View detailed Pokémon information
- Search for Pokémon
- Add Pokémon to a favorites list
- Responsive design with Tailwind CSS

## Technologies Used
- **React** (with Hooks)
- **React Router** (for navigation)
- **Tailwind CSS** (for styling)
- **PokeAPI** (for fetching Pokémon data)
- **Context API** (for state management)

## Installation
### Prerequisites
Ensure you have **Node.js** installed on your system.

### Clone the Repository
```bash
git clone https://github.com/armandomarelius/PokeAPI-React-JS-PROJECT.git
cd pokemon-explorer
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```
This will start the app on `http://localhost:5173/` (default Vite port).


## Usage
### Browsing Pokémon
- Visit the homepage to see a list of Pokémon.
- Each Pokémon card displays an image and a name.
- Click on **Details** to view more information.

### Searching Pokémon
- Use the search functionality to find a Pokémon by name.

### Adding to Favorites
- Click **Add to favs** to add a Pokémon to your favorites list.
- Visit the **Favorites** page to view saved Pokémon.

## API Usage
The app fetches data from [PokeAPI](https://pokeapi.co/):
- **List Pokémon:** `https://pokeapi.co/api/v2/pokemon?limit=20`
- **Single Pokémon:** `https://pokeapi.co/api/v2/pokemon/{name}`

## Issues and Contributions
If you encounter any issues or have feature requests, feel free to open an issue on the repository.

## License
This project is open-source and available under the MIT License.

---
Made with ❤️ using React & Tailwind!
By Armando Marelius Garcia Paulsen

