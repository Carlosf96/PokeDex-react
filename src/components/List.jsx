import React from 'react';
import PokeService from '../services/PokeService';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pokemon from './Pokemon';
import SearchBar from './Search';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  homebutton: {
    display: 'inline-block',
    border: '1px solid',
    borderRadius: '2px',
    backgroundColor: 'grey',
    textDecoration: 'none',
    color: 'white',
      '&:hover': {
        backgroundColor: 'black'
      }
  }
}));
const List = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const [Pokemons, setPokemons] = React.useState([]);
  const [error, setError] = React.useState(null);
  // const [type, setType] = React.useState('');
  
  const filterByType = (e) => {
    e.preventDefault();
    let type = e.target[0].value;
    (async() => {
      try {
      const {pokemon} = await PokeService.getPokemonByType(type);
      setPokemons(pokemon);
    } catch (err) {
      setError({message: 'Type does not exist'});
      console.log(err)
    } finally {
        // setType(' ');
        
      }
    })();
  }
  React.useEffect(()=>{
    (async()=>{
      try {
        const {results} = await PokeService.getPokemons();
        setPokemons(results);
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
    return (
      <div>
        <p>
        Error: {error.message}
        </p>
        <Link
          to='/'
          className={classes.homebutton}
        >
          Go home
        </Link>
      </div>
      );
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
        <Grid item xs={12}>
          <SearchBar filterByType={filterByType} />
        </Grid>
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