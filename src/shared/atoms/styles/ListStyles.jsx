import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  homebutton: {
    display: 'inline-block',
    border: '1px solid',
    borderRadius: '2px',
    backgroundColor: 'grey',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  fields: {
    padding: '0px 100px 0px 80px',
    minWidth: '200px'
  }
}));

export default useStyles;