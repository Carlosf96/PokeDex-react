import React, { useEffect, useState, useMemo, Suspense, lazy } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from '../shared/atoms/styles/ListStyles';
import SearchName from '../Pokemon/components/SearchName';
import SearchType from '../Pokemon/components/SearchType';
import PokeSkelt from '../Pokemon/components/PokemonSkel';
const Pokemon = lazy(() => import('../Pokemon/components/Pokemon'));

// Restyle to make images and text more responsive
// add useMemo to fetching data function

const ListViewFactory = (pokeService) => {
  const ListView = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null);
    console.log(pokemons)

    const handleSearch = e => {
      let val = e.target.value.toLowerCase();
      const filteredPokemons = pokemons.filter((p) => p.name.includes(val) || p.type.includes(val));
      console.log(val)
      val ?
        setPokemons(filteredPokemons)
        :
        setPokemons(pokemons);
    };
    // const filteredPokemon = useMemo(handleSearch,[pokemons])

    useEffect(() => {
      (async () => {
        try {
          const results = await pokeService.getAllPokemons();
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
      return <PokeSkelt />;
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
            <Suspense fallback={<h2>...Loading</h2>}>

              {!pokemons ?
                <h2>No pokemons found!</h2>
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

            </Suspense>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return ListView;
}

export default ListViewFactory;
