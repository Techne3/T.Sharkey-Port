import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "../Footer/Footer";
import SocialLinks from "../SocialLinks.js/SocialLinks";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../Images/logo.png";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Box,
  ListItemIcon,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
// sass styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "1.9rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
    marginTop: "2rem",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

function NavBar() {
  const [isToggle, setIsToggle] = useState({
    right: false,
  });

  const toggleSliderRight = (slider, open) => () => {
    setIsToggle({ ...isToggle, [slider]: open });
  };
  /// bringing in the custom styles from the useStyles function
  const classes = useStyles();

  // Toggle slide function for nav
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSliderRight("right", false)}
    >
      <Avatar
        className={classes.avatar}
        src={logo}
        alt="Tim"
        variant="square"
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={NavLink} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{
            background: "#222",
            position: "fixed",
            marginBottom: "40rem",
          }}
        >
          <Toolbar>
            <IconButton onClick={toggleSliderRight("right", true)}>
              <MenuIcon style={{ color: "tomato", fontSize: "30px" }} />
            </IconButton>
            {/* <Typography variant="h5" style={{ color: "tan" }}>
              TS
            </Typography> */}
            <SocialLinks />
          </Toolbar>
          <MobileRightMenuSlider
            open={isToggle.right}
            onClose={toggleSliderRight("right", false)}
            anchor="right"
          >
            {sideList("right")}
            <Footer />
          </MobileRightMenuSlider>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
