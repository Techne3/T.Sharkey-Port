import React from "react";
import Navbar from "../../components/NewNav/NavBar";
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
} from "@material-ui/core";

import WellDone from "../../Images/WellDone.png";
import Mern from "../../Images/mern-stack.jpg";
import Redux from "../../Images/react-redux.jpg";
import JavaScript from "../../Images/javascript-fullstack.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#223",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 445,
    margin: "1rem",
    margin: "5rem auto",
    padding: ".5rem",
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
                  Project1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  this
                  thisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthis
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
                image={Mern}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  this
                  thisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthis
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
                  Project1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  this
                  thisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthis
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
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          {/* Project4 */}
          <Card className={classes.cardContainer}>
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
                  this
                  thisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthis
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
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
