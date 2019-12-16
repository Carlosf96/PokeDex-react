import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles;