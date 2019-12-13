import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Pokemon from '../Pokemon/components/Pokemon';
import SearchName from '../Pokemon/components/SearchName';
import SearchType from '../Pokemon/components/SearchType';

// Restyle to make images and text more responsive
// add lazy loader using react supspense
// add useMemo to fetching data function

const useStyles = makeStyles(() => ({
  // Extract
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
const ListViewFactory = (pokeService) => {
  const ListView = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = React.useState(true);
    const [pokemons, setPokemons] = React.useState([]);
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
            const { pokemon: pokemonRes } = await pokeService.getPokemonByType(pokeType);
            setPokemons(pokemonRes);
          } catch (err) {
            setError({ message: 'Type does not exist' })
          }
        } else {
          try {
            const pokeName = val.toLowerCase();
            const { forms } = await pokeService.getPokemonById(pokeName);
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
          let n = 150;
          while (i < n) {
            const results = await pokeService.getAllPokemons(i);
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
            {!pokemons ?
              <div>No pokemons found!</div>
              :
              pokemons.map((pokemon, idx) => {
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
  return ListView;
}

export default ListViewFactory;
