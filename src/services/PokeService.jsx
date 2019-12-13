import axios from 'axios';

const PokeService = () => {

  const getAllPokemons = async (n) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${n}`);
    return Promise.resolve(res.data);
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