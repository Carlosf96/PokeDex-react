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

    alignContent: 'center',
    color: theme.palette.text.secondary,
  },
  name: {
    color: 'inherit',
    borderWidth: '.03rem .02rem 0 .02rem',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: '.1em 0',
    background: 'transparent',
      '&:hover': {
        background: 'grey',
        color: 'white'
      },
    outline: 'none',
    textDecoration: 'none',
  },
  image: {
    width: '25vh',
    height: '25vh',
    alignSelf: 'center'
  },
}));

const Pokemon = ({Grid, Paper, pokemon}) => {
  const classes = useStyles();
  if(pokemon.pokemon){
    pokemon = pokemon.pokemon;
  }
  // console.log(pokemon);
  const id = pokemon.url.split('n/').pop().replace(/\//g, '');
  // console.log(id)
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