import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    types: [{
        type: String,
        required: true
    }],
    base_stats: {
        hp: {
            type: Number,
            required: true
        },
        attack: {
            type: Number,
            required: true
        },
        defense: {
            type: Number,
            required: true
        },
        speed: {
            type: Number,
            required: true
        }
    },
    isFavorite: { type: Boolean, default: false }

});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;
