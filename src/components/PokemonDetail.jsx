import React from 'react';
import PokeService from '../services/PokeService';
import { useParams, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const PokemonDetail = () => {
  const { name } = useParams();
  const [PokemonDetails, setPokemonDetails] = React.useState({});
  React.useEffect(()=>{
    (async()=>{
      const PokemonData = await PokeService.getPokemonById(String(name));
      setPokemonDetails(PokemonData);
      console.log(PokemonData)
    })();
  }, [])
  const { abilities, sprites, types } = PokemonDetails;
  return (
    <Paper>
      <h1>
       A {PokemonDetails.name}
      </h1>
      {
        sprites ? 
        <img src={sprites["front_default"]} alt='bzz'/> 
        : 
        <p>No Image</p>
      }
      <h2>National Dex Number</h2>
      <p>{PokemonDetails.id}</p>
      <h2>Abilities</h2>
      {
        abilities ? 
        abilities.map(e => e.ability ? 
        <p>{e.ability.name}</p>   
        : 
        <p>No Ability name</p>) 
        : 
        <p>No abilities</p>
      }
      <h2>Types</h2>
      {
        types ?
        <p>
          {[...types.reduce((p,c) => p + '/' + c.type.name , '')].slice(1).join('')}
        </p>
        :
        <p>No types</p>
      }
      <Link
        to='/'
      >
        Home
      </Link>
    </Paper>
  )
}

export default PokemonDetail;