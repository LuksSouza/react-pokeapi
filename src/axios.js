import axios from 'axios';

const pokeapiInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export default pokeapiInstance;