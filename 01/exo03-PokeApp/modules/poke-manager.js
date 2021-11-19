const { default: axios } = require("axios");
const { loadJsonData, saveJsonData } = require("./tools-box");

const URL_BASE_POKEAPI = 'https://pokeapi.co/api/v2/pokemon/__PokeId__';
const URL_POKEAPI = 'https://pokeapi.co/api/v2';

class PokeManager {

    constructor(){
        this.loadedPokemon = new Map();
        this.favoritesPokemon = [];
        this.fileName = 'favorites-pokemon';
    };

    loadPokemon = (idPokemon) => {

        const pokemonAllReadyLoad = this.loadedPokemon.get(idPokemon);

        if (pokemonAllReadyLoad) {
            return Promise.resolve(pokemonAllReadyLoad);
        }

        return axios.get('/pokemon/' + idPokemon, {
            baseURL : URL_POKEAPI
        }).then(({data}) => {
            console.log('Request !!!');
            const pokemon = {
                id : data.id,
                name : data.name,
                types : data.types.map(t => t.type.name),
                stats : {
                    hp : data.stats[0].base_stat,
                    attack : data.stats[1].base_stat,
                    defense : data.stats[2].base_stat,
                    attackSpe : data.stats[3].base_stat,
                    defenseSpe : data.stats[4].base_stat,
                    speed : data.stats.find(s => s.stat.name === 'speed').base_stat
                }
            };

            this.loadedPokemon.set(pokemon.id , pokemon);

            return pokemon;
        })
        .catch((error) => {
            console.log(error);
            throw new Error(error)
        })
    };

    addPokemonToFavorite = async (idPokemon) => {
        
        const pokemonTarget = await this.loadPokemon(idPokemon);

        let pokemonFavorites = await loadJsonData(this.fileName);
        pokemonFavorites = [...pokemonFavorites, pokemonTarget];

        await saveJsonData(this.fileName, pokemonFavorites);
        console.log('La liste des pokemon a été mise à jour');

    };

    removePokemonToFavorite = (idPokemon) => {
        
    };

    viewPokemonFavorite = () => {

        loadJsonData(this.fileName).then(pokemons => {
            console.log('Voici les pokemon mis en favoris');
            pokemons.forEach((pokemon, index) =>{
                console.log(` - ${pokemon.name} (${pokemon.id})`);
            })
        });
    };
};

module.exports = PokeManager;