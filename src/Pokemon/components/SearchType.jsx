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

const SearchType = ({Search}) => {
  const classes = useStyles();
  return (
    <form onSubmit={Search}>
      <div>
      <TextField
            id="standard-search"
            label={`Search by ${'Type'}`}
            type="search"
            className={classes.textField}
            margin="normal"
            name='Type'
            fullWidth
          >
          </TextField>
      </div>
    </form>
  )
}

export default SearchType; 