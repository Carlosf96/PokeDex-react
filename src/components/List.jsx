import React from "react";
import PokeService from "../services/PokeService";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pokemon from "./Pokemon";
import SearchBar from "./Search";
import SelectFilter from "./SelectFilter";
import { Link } from "react-router-dom";

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
  const filterBy = async e => {
    e.preventDefault();
    let type = e.target[0].value;
    (async () => {
      try {
        if (filter === "type") {
          const { pokemon } = await PokeService.getPokemonByType(type);
          setPokemons(pokemon);
        } else {
          const { forms } = await PokeService.getPokemonById(type);
          setPokemons(forms);
        }
      } catch (err) {
        setError({ message: "Type does not exist" });
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

  if (error !== null) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <Link to="/" className={classes.homebutton}>
          Go home
        </Link>
      </div>
    );
  }
  if (!Pokemons.length) {
    return <div>No Pokemons found!</div>;
  }
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <SelectFilter changeFilter={changeFilter} filter={filter} />
          <SearchBar filterBy={filterBy} filter={filter} />
        </Grid>
        <Grid container spacing={1} justify="center">
          {Pokemons.map((pokemon, idx) => {
            return (
              <Pokemon
                key={pokemon.id}
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
