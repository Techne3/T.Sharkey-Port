import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Navbar } from "./components";
import Home from "./components/NewNav/Home";
import Resume from "./components/Resume/Resume";
import { Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
// import Contact from "./components/Contacts/Contact";
import NewContact from "./components/Contacts/NewContact";
function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={NewContact} />
    </>
  );
}

export default App;
