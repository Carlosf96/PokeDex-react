import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Sprites from '../atoms/Sprites';

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

// DONT INJECT comps
const Pokemon = ({ Grid, Paper, pokemon }) => {
  const classes = useStyles();
  let {sprite, name} = pokemon;
  return (
    <Grid item className='row pokemon-item'>
      <Paper className={classes.paper}>
        <Link
          className={classes.name}
          to={`/${name}`}
        >
          {name}
        </Link>
        <Sprites sprite={sprite}/>
      </Paper>
    </Grid >
  )
};

export default Pokemon;
