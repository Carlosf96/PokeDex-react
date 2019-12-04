import React from 'react';
import PokeService from '../services/PokeService';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pokemon from './Pokemon';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));
const List = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const [Pokemons, setPokemons] = React.useState([]);
  const [error, setError] = React.useState(null);
  /**
   * TODOS:
   *  Model Data
   *    make data model filterable by name and type
   *     make data model globalish
   *       perhaps will have to do some sort of 
   *        objection composition with merging objects
   */
  React.useEffect(()=>{
    (async()=>{
      try {
        const pokemons = await PokeService.getPokemons();
        setPokemons(pokemons.results);
        console.log(Pokemons, pokemons.results)
      }
      catch(err){
        setError(err);
        console.log(err);
      }
      finally{
        setIsLoading(false);
      }
    })()
  }, [])
  
  if (isLoading) {
    return <div>Is loading</div>;
  }

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!Pokemons.length) {
    return (
      <div>
        No Pokemons found!
      </div>
    );
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container spacing={4} justify="center">
        {Pokemons.map(pokemon => {
          return (
            <Pokemon key={pokemon.id} pokemon={pokemon} Grid={Grid} Paper={Paper} />
          );
        })}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default List;