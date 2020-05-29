import React from "react";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Link,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
      display: "flex",
      justifyContent: "flex-end",
      border: "2px solid #fff",
      marginLeft: "80%",
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

function SocialLinks() {
  const classes = useStyles();
  return (
    <BottomNavigation
      width="auto"
      style={{
        background: "#222",
        display: "flex",
        justifyContent: "flex-end",
        // paddingLeft: "80%",
        width: "100%",
      }}
    >
      <Link href="https://github.com/Techne3" style={{ background: "#222" }}>
        <BottomNavigationAction
          style={{ paddingTop: 15 }}
          className={classes.root}
          icon={<GitHubIcon />}
        />
      </Link>

      <Link
        href="https://www.linkedin.com/in/timothy-sharky/"
        style={{ background: "#222" }}
      >
        <BottomNavigationAction
          style={{ paddingTop: 15 }}
          className={classes.root}
          icon={<LinkedInIcon />}
        />
      </Link>

      <NavLink to="/contact" style={{ background: "#222" }}>
        <BottomNavigationAction
          style={{ paddingTop: 15 }}
          className={classes.root}
          icon={<MailOutlineIcon />}
        />
      </NavLink>
    </BottomNavigation>
  );
}

export default SocialLinks;
