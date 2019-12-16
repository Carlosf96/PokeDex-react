import axios from 'axios';
import pokemonDTO from '../entities/Pokemon';

const PokeService = () => {
  const getAllPokemons = async () => {
    let i = 1;
    let n = 150;
    let finalData = [];

    while (i < n) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      finalData.push(pokemonDTO(res.data));
      i++
    }

    return finalData;
  }
  const getPokemonById = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return Promise.resolve(res.data);
  };
  const getPokemonByType = async (type) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return Promise.resolve(res.data);
  };

  return {
    getPokemonById,
    getPokemonByType,
    getAllPokemons,
  };
};

export default PokeService;