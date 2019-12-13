import React from "react";
import { useParams, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import NextBtn from '../Pokemon/atoms/NextBtn';
import BckBtn from '../Pokemon/atoms/BckBtn';
import Sprites from '../Pokemon/atoms/Sprites';
import Abilities from '../Pokemon/atoms/Abilities';
import Types from '../Pokemon/atoms/Types';
import '../App.css';

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-block"
  },
  card: {
    minWidth: "500px"
  }
}));
const DetailViewFactory = (pokeService) => {
  const DetailView = () => {
    const classes = useStyles();
    const { name } = useParams();
    const [pokemonDetails, setPokemonDetails] = React.useState({});

    React.useEffect(() => {
      (async () => {
        const PokemonData = await pokeService.getPokemonById(name);
        console.log(name);
        setPokemonDetails(PokemonData);
        console.log(PokemonData);
      })();
    }, [name]);

    const { abilities, sprites, types } = pokemonDetails;
    const pokeName =
      [...String(pokemonDetails.name)][0].toUpperCase() +
      [...String(pokemonDetails.name)].slice(1).join("");
    
      return (
      <div className={classes.root}>
        <BckBtn Link={Link} id={pokemonDetails.id-1}/>
        <Paper className={classes.card}>
          <h1>A {pokeName}</h1>
          <Sprites sprites={sprites}/>
          <h2>National Dex Number</h2>
          <p>{pokemonDetails.id}</p>
          <h2>Abilities</h2>
          <Abilities abilities={abilities}/>
          <h2>Types</h2>
          <Types types={types}/>
        </Paper>
        <NextBtn Link={Link} id={pokemonDetails.id + 1} />
      </div>
    );
  };
  return DetailView;
}


export default DetailViewFactory;
