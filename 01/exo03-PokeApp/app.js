const PokeManager = require("./modules/poke-manager");


const pokeManager = new PokeManager();

// pokeManager.loadPokemon(25).then((pokemon) =>{
//     console.log(pokemon);
// });

// pokeManager.loadPokemon(725).then((pokemon) =>{
//     console.log(pokemon);
// });

// const load = async () => {
//     const poke1 = await pokeManager.loadPokemon(25);
//     const poke2 = await pokeManager.loadPokemon(725);
//     console.log(poke1, poke2);
//     console.log('HERE ');
//     console.log('HERE ');
//     console.log('HERE ');
//     console.log(pokeManager.loadedPokemon);
// };

setImmediate( async() => {
    console.log('Rendu des favoris');
    await pokeManager.viewPokemonFavorite();
    await pokeManager.addPokemonToFavorite(100);
    await pokeManager.removePokemonToFavorite(725);
    await pokeManager.viewPokemonFavorite();
});