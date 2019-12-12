import axios from 'axios';

const PokeService = (() => {
  const getAllPokemons = async (n) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${n}`);
    return Promise.resolve(res.data);
  }
  const getPokemons = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=60");
    return Promise.resolve(res.data);
  };
  const getPokemonById = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return Promise.resolve(res.data);
  };
  const getPokemonByType = async (type) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return Promise.resolve(res.data);
  };
  const getPokeesByFilter = async (filter, type) => {
    if(filter === 'undefined' || filter === 'name'){
      const pokeName = filter.toLowerCase();
      console.log()
     return await getPokemonById(pokeName);
    } else if(filter === 'type') {
     return await getPokemonByType(type);
    } else {
      return await getPokemons();
    }
  };
  return {
    getPokemons,
    getPokemonById,
    getPokemonByType,
    getPokeesByFilter,
    getAllPokemons,
  };
})();

export default PokeService;