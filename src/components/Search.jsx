import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

let filters = [
  {
    value: 'Type',
    label: 'Type'
  },
  {
    value: 'Name',
    label: 'Name'
  },
  {
    value: 'NDN',
    label: 'NDN'
  }
];

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
  menu: {
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
            className={classes.textField}
            margin="normal"
            // variant='filled'
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            {/* {filters.map(filter => (
              <MenuItem key={filter.value} value={filter.value}>
                {filter.label}
              </MenuItem>
            ))} */}
          </TextField>
      </div>
    </form>
  )
}

export default SearchBar;