import React from "react";
import { makeStyles, Container, Toolbar } from "@material-ui/core";
import AppBarDespesas from "./componets/AppBarDespesas/AppBarDespesas";
import SelectMes from "./componets/SelectMes/SelectMes";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    flexGrow: 1,
  },
}));

function Despesas() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBarDespesas />
      <Toolbar/>
      <Container maxWidth="lg">
        <SelectMes />
      </Container>
    </div>
  );
}

export default Despesas;
