import React from "react";
import { makeStyles } from "@material-ui/styles";
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

function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <Link href="https://github.com/Techne3" style={{ background: "#222" }}>
        <BottomNavigationAction
          style={{ paddingTop: 12 }}
          className={classes.root}
          icon={<GitHubIcon />}
        />
      </Link>

      <Link
        href="https://www.linkedin.com/in/timothy-sharkey-40789988/"
        style={{ background: "#222" }}
      >
        <BottomNavigationAction
          style={{ paddingTop: 12 }}
          className={classes.root}
          icon={<LinkedInIcon />}
        />
      </Link>

      <Link href="/contact" style={{ background: "#222" }}>
        <BottomNavigationAction
          style={{ paddingTop: 12 }}
          className={classes.root}
          icon={<MailOutlineIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}

export default Footer;
