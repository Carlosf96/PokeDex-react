import React from 'react';
import PokeService from '../services/PokeService';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pokemon from './Pokemon';
import SearchName from './SearchName';
import SearchType from './SearchType';

// Restyle to make images and text more responsive
// Change from one input field two
// add lazy loader using react supspense
// add useMemo to fetching data function
// perhaps add  

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
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
  },
  fields: {
    padding: '0px 100px 0px 80px',
    minWidth: '200px'
  }
}));

const List = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const [Pokemons, setPokemons] = React.useState([]);
  const [error, setError] = React.useState(null);

  const Search = e => {
    e.preventDefault();
    let val = e.target[0].value;
    let valType = e.target[0].name;

    (async () => {
      if (valType === 'Type') {
        try {
          const pokeType = val.toLowerCase();
          console.log(pokeType)
          const { pokemon } = await PokeService.getPokemonByType(pokeType);
          setPokemons(pokemon);
        } catch (err) {
          setError({ message: 'Type does not exist' })
        }
      } else {
        try {
          const pokeName = val.toLowerCase();
          const { forms } = await PokeService.getPokemonById(pokeName);
          setPokemons(forms);
        } catch (err) {
          setError({ message: 'Pokemon does not exist' })
        }
      }
    })();

    e.target[0].value = '';

  };

  React.useEffect(() => {
    (async () => {
      let allPokemons = [];
      try {
        let i = 1;
        let n = (964 / 4)
        while (i < n) {
          const results = await PokeService.getAllPokemons(i);
          allPokemons.push(results)
          i++
        }
        setPokemons(allPokemons);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Is loading</div>;
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid item xs={12} className={classes.fields}>
          <SearchName Search={Search} />
          <SearchType Search={Search} />
          {error ? <div>{error.message}</div> : ''}
        </Grid>
        <Grid container spacing={1} justify='center'>
          {!Pokemons ?
            <div>No pokemons found!</div>
            :
            Pokemons.map((pokemon, idx) => {
              return (
                <Pokemon
                  key={idx}
                  idx={idx}
                  pokemon={pokemon}
                  Grid={Grid}
                  Paper={Paper}
                />
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default List;
