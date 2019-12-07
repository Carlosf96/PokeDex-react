import React from "react";
import PokeService from "../services/PokeService";
import { useParams, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import RenderService from '../services/RenderService';
import NextBtn from "./NextBtn";
const useStyles = makeStyles(() => ({
  root: {
    display: "inline-block",
  },
  card: {
    minWidth: '500px'
  }
}));

const PokemonDetail = ({nextProps}) => {
  const classes = useStyles();
  const { name } = useParams();
  const [PokemonDetails, setPokemonDetails] = React.useState({});
  React.useEffect(() => {
   (async () => {
      const PokemonData = await PokeService.getPokemonById(name);
      console.log(name);
      setPokemonDetails(PokemonData);
      console.log(PokemonData);
    })();
  }, [name]);
  const { abilities, sprites, types } = PokemonDetails;
  const pokeName = [...String(PokemonDetails.name)][0].toUpperCase() + [...String(PokemonDetails.name)].slice(1).join('');
  return (
    <div className={classes.root}>
      <Paper className={classes.card}>
        <h1>A {pokeName}</h1>
        {RenderService.renderSprites(sprites)}
        <h2>National Dex Number</h2>
        <p>{PokemonDetails.id}</p>
        <h2>Abilities</h2>
        {RenderService.renderAbilities(abilities)}
        <h2>Types</h2>
        {RenderService.renderTypes(types)}
      </Paper>
      <NextBtn Link={Link} id={PokemonDetails.id+1}/>
    </div>
  );
};

export default PokemonDetail;