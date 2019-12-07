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
    '& label.Mui-focused': {
      color: 'rgb(204, 175, 223)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgb(204, 175, 223)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
  menu: {
    width: 200,
  },
  
}));

const SearchBar = ({filterBy, filter}) => {
  const classes = useStyles();
  return (
    <form onSubmit={filterBy}>
      <div>
      <TextField
            id="standard-search"
            label={`Search by ${filter || 'name'}`}
            type="search"
            className={classes.textField}
            margin="normal"
          >
          </TextField>
      </div>
    </form>
  )
}

export default SearchBar;