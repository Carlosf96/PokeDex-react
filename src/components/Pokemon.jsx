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
    padding: '0px',
    alignContent: 'center',
    color: theme.palette.text.secondary,
  },
  name: {
    color: 'inherit',
    borderWidth: '.03rem .02rem 0 .02rem',
    borderStyle: 'solid',
    borderColor: 'rgb(204, 175, 223)',
    borderRadius: '.1em 0',
    background: 'transparent',
      '&:hover': {
        background: 'rgb(204, 175, 223)',
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
  let id;
  if(pokemon.pokemon){
    pokemon = pokemon.pokemon;
  }
  // console.log(pokemon);
  if(pokemon.url.includes('form')){
    id = pokemon.url.split('m/').pop().replace(/\//g, '');

  } else {
    id = pokemon.url.split('n/').pop().replace(/\//g, '');
  }
  const pokeName = [...String(pokemon.name)][0].toUpperCase() + [...String(pokemon.name)].slice(1).join('');
  return (
    <Grid item className='row pokemon-item'>
      <Paper className={classes.paper}>
        <Link
        className={classes.name}
        to={`/${pokemon.name}`}
        >
          {pokeName}
        </Link>
        <img 
        className={classes.image}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
      </Paper>
    </Grid >
  )
};

export default Pokemon;