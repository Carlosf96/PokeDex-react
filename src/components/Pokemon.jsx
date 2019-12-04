import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 220,
    minWidth: 220,
    padding: theme.spacing(2),
    alignContent: 'center',
    color: theme.palette.text.secondary,
  },
  name: {
    color: 'inherit',
    border: '1px solid black',
    outline: 'none',
    textDecoration: 'none',
  },
  image: {
    maxWidth: 180,
    alignSelf: 'center'
  },
}));

const Pokemon = ({Grid, Paper, pokemon}) => {
  const classes = useStyles();
  console.log(pokemon)
  const id = pokemon.url.split('n/').pop().replace(/\//g, '');
  console.log(id)
  return (
    <Grid item className='row pokemon-item'>
      <Paper className={classes.paper}>
        <Link
        className={classes.name}
        to={`/${pokemon.name}`}
        >
          {pokemon.name}
        </Link>
        <img 
        className={classes.image}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
      </Paper>
    </Grid >
  )
};

export default Pokemon;