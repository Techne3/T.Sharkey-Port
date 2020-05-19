import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

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
      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
        className={classes.root}
      />
      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        className={classes.root}
      />
      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<MailOutlineIcon />}
        className={classes.root}
      />
    </BottomNavigation>
  );
}

export default Footer;
