import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
    paddingLeft: theme.spacing(3),
    fontSize: "50",
  },
  appBar: {},
  logo: {
    height: "20px",
    width: "150px",
  },
}));

function AppBarDespesas(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5">DESPESAS</Typography>
        <div className={classes.title} />
        <img src="/images/logoBranco.png" alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
}

export default AppBarDespesas;
