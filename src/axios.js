import axios from 'axios';

const instance = axios.create({
    path: 'https://pokeapi.co/api/v2/generation/'
});

export default instance;