import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import profilePic from "../../Images/Boy With Glasses.svg";
import Typed from "react-typed";
import logo from "../../Images/logo.png";

// styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subTitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={logo}
          alt="Tim"
          variant="square"
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Timothy Sharkey
        {/* <Typed strings={["Timothy Sharkey"]} typeSpeed={40} /> */}
      </Typography>
      <br />
      <Typography className={classes.subTitle} variant="h4">
        <Typed
          strings={["Web Developer", "Web Designer", "Tech Enthusiast"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
}

export default Header;
