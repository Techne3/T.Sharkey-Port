import React from "react";
import Navbar from "../NewNav/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Card,
  Typography,
  Link,
} from "@material-ui/core";

import WellDone from "../../Images/WellDone.png";
import Mern from "../../Images/mern-stack.jpg";
import Redux from "../../Images/react-redux.jpg";
import JavaScript from "../../Images/javascript-fullstack.jpg";
import SafeRoute from "../../Images/SafeRoutes.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#223",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 445,
    minHeight: 650,
    margin: "6rem auto",
    // padding: ".5rem",
  },
  cardText: {
    // display: "flex",
    // flexWrap: "wrap",
    // color: "red",
  },
});

function Portfolio() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          {/* Project1 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="240"
                image={WellDone}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  WellDone
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  WellDone International is a non-profit organization working to
                  improve global access to clean water.
                </Typography>
                <Typography
                  variant="body2"
                  color="tomato"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  Tech Stack: React.js, Redux, Node.js, Express.js, PostgreSQL
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  • Contributed to a team of 5 fullstack developers, 2 Android
                  developers, and 2 UX designers
                  <br />• Built out a frontend using React with Redux to help
                  with state management. Took in data from our stakeholder's IoT
                  device and organized it with the use of React charts d3 for
                  data visualization, React-map-gl for mapping and geolocation,
                  and ag-grid for systematically arranging data.
                  <br />• Worked side by side with a stakeholder of a
                  well-established nonprofit
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href="https://github.com/Lambda-School-Labs/well-done-fe">
                <Button size="small" color="primary">
                  GitHub
                </Button>
              </Link>
              {/* <Button size="small" color="primary">
                Live Demo
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          {/* Project2 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="240"
                image={SafeRoute}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Safe Routes
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  Safe Route is a web-based application highlighting the most
                  dangerous intersections in a given geographical location.
                </Typography>
                <Typography
                  variant="body2"
                  color="tomato"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  Tech Stack: React.js, Context Hooks, GoogleMaps API, SASS
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  •Contributed to a team of 3 fullstack developers and 3 data
                  scientists to create a user-friendly application over a
                  week-long sprint
                  <br />• Built out client-side form validation using React and
                  controlled the state management with Context Hooks
                  <br />• Created a dashboard that utilized Google Maps Api &
                  statistical information to map hazardous intersections, giving
                  the user the ability to choose a safer route to their
                  destination
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href="https://github.com/Build-Week-Safe-Routes-2/FE_Safe-Routes">
                <Button size="small" color="primary">
                  GitHub
                </Button>
              </Link>
              {/* <Button size="small" color="primary">
                Live Demo
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          {/* Project3 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="240"
                image={Redux}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Use My Tech Stuff
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  Use my tech stuff, is a web-based application to help users
                  get paid for lending out their technical gear. Think Airbnb
                  for your tech gear.
                </Typography>
                <Typography
                  variant="body2"
                  color="tomato"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  Tech Stack: React.js, context hooks, node.js, SASS
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  • Contributed to frontend interface with a team of 3
                  developers over a week-long sprint.
                  <br />• Created a user dashboard to view, filter through, and
                  place holds on available technical gear using React and
                  Context hooks for state management
                  <br />• Applied JSON web token technology for user credential
                  authentication
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href="https://github.com/BuildWeek-use-my-tech-stuff/Front-end-UMTS">
                <Button size="small" color="primary">
                  GitHub
                </Button>
              </Link>
              {/* <Button size="small" color="primary">
                Live Demo
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          {/* Project4 */}
          {/* <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="240"
                image={JavaScript}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Tech Stake: test test test test test test test test test test
                  test test test test test test
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                GitHub
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
