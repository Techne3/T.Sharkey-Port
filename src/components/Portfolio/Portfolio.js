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
    margin: "5rem auto",
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
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.cardText}
                >
                  Tech Stake: test test test test test test test test test test
                  test test test test test test
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
                  Safe-Route
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Tech Stake: test test test test test test test test test test
                  test test test test test test
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Tech Stake: test test test test test test test test test test
                  test test test test test test
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
