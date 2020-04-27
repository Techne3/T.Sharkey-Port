import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.containerNav}>
      <Paper className={classes.root}>
        <h1>Tim Sharkey</h1>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="Secondary"
          textColor="Secondary"
          centered
        >
          <Tab label="About" />
          <Tab label="My Work" />
          <Tab label="Contact" />
        </Tabs>
      </Paper>
    </div>
  );
};

export default Navbar;
