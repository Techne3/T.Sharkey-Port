import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import NavBar from "../NewNav/NavBar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50%)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
    paddingTop: "6rem",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h3" align="center" className={classes.heading}>
          Technical Skills:
        </Typography>
        <Typography variant="h4" align="center" className={classes.subHeading}>
          • React • Redux • Javascript • Node.js • Express
          <br />• SQL • Postgres • Python • SASS • HTML
        </Typography>
        <Typography variant="h4" align="center" className={classes.heading}>
          working experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019-2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Web Developer
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "tomato" }}
            >
              WellDone
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              • Contributed to a team of 5 fullstack developers, 2 Android
              developers, and 2 UX designers
              <br />• Built out a frontend using React with Redux to help with
              state management. Took in data from our stakeholder's IoT device
              and organized it with the use of React charts d3 for data
              visualization, React-map-gl for mapping and geolocation, and
              ag-grid for systematically arranging data.
              <br />• Worked side by side with a stakeholder of a
              well-established nonprofit
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Management
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "tomato" }}
            >
              City Ice
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              • Led and trained a team of 15+ employees on how to maintain
              proper customer relations while still advancing overall
              productivity
              <br />
              • Increased customer contracts and sponsorship deals that helped
              advance our overall profit margin by 30%
              <br />
              • Created a new employment training handbook that broke down daily
              employee protocols into clear and concise objectives to increase
              productivity
              <br />• Supported team members by instilling proficiency skills
              that helped manage employee morale in a fast-paced environment
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2012
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Volunteer
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "tomato" }}
            >
              Salt Lake City Bike Collective
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              Helped run a program to build and tune bikes for underprivileged
              children
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
