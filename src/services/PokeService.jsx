import axios from 'axios';

const PokeService = (() => {
  const getPokemons = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=60");
    return Promise.resolve(res.data);
  };
  const getPokemonById = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return Promise.resolve(res.data);
  };
  return {
    getPokemons,
    getPokemonById,
  };
})();

export default PokeService;