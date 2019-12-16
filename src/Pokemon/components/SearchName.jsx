import React from 'react';
import TextField from '@material-ui/core/TextField';

import useStyles from '../../shared/atoms/styles/SearchStyles';

const SearchName = ({handleSearch}) => {
  const classes = useStyles();
  return (
    <form >
      <TextField
            id='standard-search'
            label='Search By Name'
            type='search'
            className={classes.textField}
            margin='normal'
            name='Name'
            onChange={handleSearch}
            fullWidth
          >
          </TextField>  
    </form>
  )
}

export default SearchName; 