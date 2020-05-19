import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Navbar } from "./components";
import Home from "./components/NewNav/Home";
import Resume from "./components/Resume/Resume";
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </>
  );
}

export default App;
