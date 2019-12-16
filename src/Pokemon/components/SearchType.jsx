import React from 'react';
import TextField from '@material-ui/core/TextField';

import useStyles from '../../shared/atoms/styles';

const SearchType = ({handleSearch}) => {
  const classes = useStyles();
  return (
    <form onChange={handleSearch}> 
      <TextField
            id="standard-search"
            label='Search By Type'
            type="search"
            className={classes.textField}
            margin="normal"
            name='Type'
            onChange={handleSearch}
            fullWidth
          >
          </TextField> 
    </form>
  )
}

export default SearchType; 
