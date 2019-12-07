import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  header: {
    fontSize: "24px",
    color: "inherit",
    textDecoration: "none"
  }
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.header}>
      <h1>PokeDex</h1>
    </Link>
  );
};
export default Header;
