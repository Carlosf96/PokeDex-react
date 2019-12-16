import React from 'react';
import { Link } from 'react-router-dom';

import Sprites from '../atoms/Sprites';
import useStyles from '../../shared/atoms/styles/CardStyles';

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
        <Sprites styl={classes.image} sprite={sprite}/>
      </Paper>
    </Grid >
  )
};

export default Pokemon;
