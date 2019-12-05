import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const SearchBar = ({filterByType, handleChange}) => {
  const classes = useStyles();
  return (
    <form onSubmit={filterByType}>
      <div>
      <TextField
            id="standard-search"
            label="Search by type"
            type="search"
            onChange={handleChange}
            className={classes.textField}
            margin="normal"
          />
      </div>
    </form>
  )
}

export default SearchBar;