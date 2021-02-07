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

import Expense from "../../Images/Expense.png";
import WellDone from "../../Images/WellDone.png";
import Mern from "../../Images/mern-stack.jpg";
import ecom from "../../Images/ecom_short.png";
import Redux from "../../Images/react-redux.jpg";
import JavaScript from "../../Images/javascript-fullstack.jpg";
import SafeRoute from "../../Images/SafeRoutes.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#223",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 660,
    minHeight: 650,
    margin: "6rem auto",
    // padding: ".5rem",
  },
  cardText: {
    // display: "flex",
    // flexWrap: "wrap",
    // color: "red",
  },
  media: {
    // padding: ".3rem",
  },
});

function Portfolio() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12}>
          {/* Project1 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                image={WellDone}
                className={classes.media}
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

        <Grid item xs={12} sm={12} md={12}>
          {/* Project2 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                image={ecom}
                className={classes.media}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Bike Ecommerce
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  Bike Ecommerce, is a web-based application
                </Typography>
                <Typography
                  variant="body2"
                  color="tomato"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  Tech Stack: MongoDB,React.js, Redux, Material-UI, PAYPAL
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  • Ecommerce site built using React for frontend user interface
                  <br />
                  • Redux utilized for state management
                  <br />
                  • Backend API built using MongoDB
                  <br />• Integrated PAYPAL for payment authentication
                  <br />• Styled with Material UI
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href="https://github.com/Techne3/ecommerce_app">
                <Button size="small" color="primary">
                  GitHub
                </Button>
              </Link>
              <Link href="https://bikes-ecom.herokuapp.com">
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </Link>
            </CardActions>
            <Typography style={{ margin: " 1.4rem", color: "navy" }}>
              <h4> App login credentials</h4>
              <p />
              Email: <b>test@gmail.com </b>
              <br />
              password: <b>123 </b>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          {/* Project2 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project1" image={SafeRoute} />
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
                  <br />• Built out client-side routing and JWT credential
                  validation using React and controlled the state management
                  with Context Hooks
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
        <Grid item xs={12} sm={12} md={12}>
          {/* Project4 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project1" image={Expense} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Voice Expense
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  Voice assisted expense tracking app
                </Typography>
                <Typography
                  variant="body2"
                  color="tomato"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  Tech Stack: React.js, Context Hooks, Speechly API, Material UI
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  <br />
                  • Voice assisted expense tracking app
                  <br />
                  • Integrated speech recognition using Speechly API
                  <br />• Context Hooks for managing the state
                  <br />• Created a dashboard that updates state and populates
                  data, tables, & graphs using Chart.js once a voice command is
                  given
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href="https://github.com/Techne3/voice_expense">
                <Button size="small" color="primary">
                  GitHub
                </Button>
              </Link>
              <Link href="https://voice-expense.netlify.app/">
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
