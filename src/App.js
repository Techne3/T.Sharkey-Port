import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Navbar } from "./components";
import Home from "./components/NewNav/Home";

function App() {
  return (
    <>
      <CssBaseline />
      {/* <Navbar /> */}
      <Home />
    </>
  );
}

export default App;
