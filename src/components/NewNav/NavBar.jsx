import React, { useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../../Images/Boy With Glasses.svg";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";

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
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
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
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
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
      <Avatar className={classes.avatar} src={profilePic} alt="Tim" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
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
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSliderRight("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
          </Toolbar>
          <MobileRightMenuSlider
            open={isToggle.right}
            onClose={toggleSliderRight("right", false)}
            anchor="right"
          >
            {sideList("right")}
          </MobileRightMenuSlider>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
