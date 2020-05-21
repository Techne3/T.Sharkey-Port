import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "../NewNav/NavBar";

// make custom styles for the input field to override MaterialUI
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);
const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "35%",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

function Contact() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact }),
    })
      .then(() => alert("Thank You!"))
      .catch((error) => alert(error));

    e.preventDefault();
    setContact({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const classes = useStyles();
  const multiClass = useStyle();
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box
          component="form"
          className={classes.form}
          name="form-name"
          value="contact"
        >
          <InputField type="hidden" name="form-name" value="contact" />
          <Typography
            variant="h6"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Please reach out by sending a message below
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "#fff" } }}
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "#fff" } }}
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            // id="outlined-multiline-static"
            // multiline
            // rowsMax="10"
            inputProps={{ style: { color: "#fff" } }}
            name="message"
            value={contact.message}
            onChange={handleChange}
          />
          <br />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            className={classes.button}
            onClick={handleSubmit}
          >
            Contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default Contact;
