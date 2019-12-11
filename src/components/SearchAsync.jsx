import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  form: {
    textAlign: '-webkit-center',
  },
  textField: {
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
  }
}));

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

const SearchAsync = ({filterBy, filter}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const classes = useStyles();
  const filterino = filter && [...filter][0].toUpperCase() + [...filter].slice(1).join('');
  console.log(filterino)
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if(filter === 'type'){
        const response = await fetch('https://pokeapi.co/api/v2/type');
        await sleep(1e3);
        const pokemons = await response.json();
        if (active) {
          setOptions(pokemons.results);
        }
      } else if (filter === 'name'){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        await sleep(1e3);
        const pokemons = await response.json();
        if (active) {
          setOptions(pokemons.results);
        }  
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <form onSubmit={filterBy} className={classes.form}>
      <Autocomplete
        id="asynchronous-demo"
        style={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={option => option.name}
        options={options}
        loading={loading}
        renderInput={params => (
          <TextField
            {...params}
            label={filterino || 'Name'}
            fullWidth
            className={classes.textField}
            margin='normal'
            type='Search'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </form>
  );
}
export default SearchAsync;
