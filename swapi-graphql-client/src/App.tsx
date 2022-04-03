import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

import logo from "./images/logo.png";
import PeopleLists from "./components";
import { SearchProvider } from "./context/Context.js";

const useStyles = makeStyles({
  root: {
    width: 150,
    height: 150,
    display: "block",
    margin: "auto",
  },
});

function App() {
  const classes = useStyles();
  return (
    <SearchProvider>
      <Router>
        <Container maxWidth="lg">
          <img src={logo} alt="Star war logo" className={classes.root} />
          <Switch>
            <Route exact path="/">
              <PeopleLists />
            </Route>
          </Switch>
        </Container>
      </Router>
    </SearchProvider>
  );
}

export default App;
