const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemonImage')

const form = document.querySelector('.form');
const input = document.querySelector('.inpute__search');

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;

}

const renderpokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.scr = data['sprites']['versions']['genereition-v']['black-white']['animated']['front_default'];



}

form.addEventListener('submit' , (event) => {
    
    event.preventDefault();
    renderpokemon(input.value)
    input.value = '';
    
} );

