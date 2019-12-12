import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pokemon from "./Pokemon";
import SearchAsync from './SearchAsync';
import SelectFilter from "./SelectFilter";

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
    display: "inline-block",
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "grey",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      backgroundColor: "black"
    }
  }
}));
const ListViewFactory = (PokeService) => {

}
const List = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const [Pokemons, setPokemons] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [filter, setFilter] = React.useState("");

  const changeFilter = e => {
    let filter = e.target.value;
    setFilter(filter);
  };

  const filterBy = e => {
    e.preventDefault();
    let type = e.target[0].value;

    // Extract this as a service

    if(!type && filter === 'type'){
      setError({ message: 'Please enter a Type'})
      return;
    } else if(!type && filter === 'name'){
      setError({ message: 'Please enter a Name'})
      return;
    }

    (async () => {
        if (filter === "type") {
          try {
            const pokeType = type.toLowerCase();
            const { pokemon } = await PokeService.getPokemonByType(pokeType);
            setPokemons(pokemon);
          } catch (err){
            setError({ message: 'Type does not exist'})
          }
        } else {
          try {
            const pokeName = type.toLowerCase();
            const { forms } = await PokeService.getPokemonById(pokeName);
            setPokemons(forms);
          } catch(err){
            setError({ message: 'Pokemon does not exist'})
          }
        }
    })();

    e.target[0].value = "";
  
  };
  
  React.useEffect(() => {
    (async () => {
      try {
        const { results } = await PokeService.getPokemons();
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
        <Grid item xs={12}>
          <SelectFilter changeFilter={changeFilter} filter={filter} />
        </Grid>
        <Grid item xs={12}>
          <SearchAsync filterBy={filterBy} filter={filter}/>
            {error ? <div>{error.message}</div> : ''}
        </Grid>
        <Grid container spacing={1} justify="center">
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

export default ListViewFactory;
