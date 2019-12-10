import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    border: '1px solid rgb(204, 175, 223)',
    textDecoration: 'none',
    fontSize: 18,
    borderRadius: '2px',
    '&:hover': {
      backgroundColor: 'rgb(204,175,223)',
      color: 'white',
    }
  }
}))

const BckBtn = ({id, Link}) => {
  const classes = useStyles();
  return (
    <div>
      <Link
      to={`/${id}`}
      className={classes.button}
      >
      Back
      </Link>
    </div>
  )
}

export default BckBtn;