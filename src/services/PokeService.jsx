import axios from 'axios';

const PokeService = () => {

  const getAllPokemons = async () => {
    let i = 1;
    let n = 150;
    let finalData = [];

    while (i < n) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => finalData.push(res.data))
      .catch(err=> console.log(err));
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
  const filterPokemon = async (filter, val) => {
    let res;
    if(filter === 'Name'){
      res = await getPokemonById(val);
    } else {
      res = await getPokemonByType(val);
    }
    return res
  }
  return {
    getPokemonById,
    getPokemonByType,
    getAllPokemons,
    filterPokemon,
  };
};

export default PokeService;