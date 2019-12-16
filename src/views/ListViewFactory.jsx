import React, { useEffect, useState, useMemo} from 'react';
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
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null);
    const [filteredPokemon, setFiltered] = useState([]);

    const handleSearch = e => {
      e.preventDefault();
      let val = e.target[0].value.toLowerCase();
      let valType = e.target[0].name;

      
  
      e.target[0].value = '';
  
    };
  
    useEffect(() => {
      (async () => {
        try {
          const results = await pokeService.getAllPokemons();
          console.log(results)
          setPokemons(results);
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
            <SearchName handleSearch={handleSearch} />
            <SearchType handleSearch={handleSearch} />
            {error && <div>{error.message}</div>}
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
