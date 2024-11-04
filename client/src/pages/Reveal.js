import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import useStyles from "../components/Styles";
import { BackDrop } from "../components/BackDrop";

const Reveal = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [messageLength, setMessageLength] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [error, setError] = useState("");

  /* Check for file selection and then set the selected file in the state */
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  /* Check for message length changes and set the length to input value */
  const handleMessageLengthChange = (event) => {
    setMessageLength(event.target.value);
  };

  const handleReveal = async (event) => {
    /* Prevent the page from reloading after form submission */
    event.preventDefault();

    /* Check if the file and message length are provided - alert the user otherwise */
    if (!file || !messageLength) {
      alert("Please upload an image and enter the message length.");
      return;
    }

    /* Create a form data object to hold the file and message length*/
    const formData = new FormData();
    formData.append("image", file);
    formData.append("message_length", messageLength);

    try {
      /* Make a request to the backend using the formData object we just created */
      const response = await fetch("http://localhost:8080/read_image", {
        method: "POST",
        body: formData,
      });

      /* If the response had an issue simply error out */
      if (!response.ok) {
        throw new Error("Failed to reveal message.");
      }

      /* Set the message returned from the server */
      const data = await response.json();
      setHiddenMessage(data.message);
      setError("");
      setOpenDialog(true);
    } catch (error) {
      setError("Error revealing the message: " + error.message);
      setHiddenMessage("");
    }
  };

  /* Reset the state of the whole form */
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setHiddenMessage("");
    setError("");
    setFile(null);
    setMessageLength("");
  };

  return (
    <>
      <BackDrop />
      <div className={classes.root}>
        <Container maxWidth="sm">
          {/* The title */}
          <Typography
            variant="h4"
            sx={{
              color: "#FF5733",
              fontWeight: "bold",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            Reveal Your Hidden Message
          </Typography>
          <form
            onSubmit={handleReveal}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              type="file"
              onChange={handleFileChange}
              variant="outlined"
              className={classes.inputField}
              /* Ensure safety by only accepting PNG inputs right from the frontend */
              slotProps={{
                htmlInput: {
                  accept: "image/png",
                },
              }}
            />
            <TextField
              label="Message Length"
              value={messageLength}
              onChange={handleMessageLengthChange}
              variant="outlined"
              type="number"
              className={classes.inputField}
              slotProps={{
                inputLabel: {
                  shrink: false,
                },
                input: {
                  inputProps: {
                    min: 1,
                  },
                  /* This is another security feature to ensure any illegal characters 
                  are not entered as the message length by the user */
                  onKeyDown: (e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  },
                },
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  display: messageLength ? "none" : "block",
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
            >
              Reveal Message
            </Button>
          </form>

          {/* Dialog to display the hidden message */}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Revealed Message</DialogTitle>
            <DialogContent>
              <Typography variant="body1">{hiddenMessage}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          {error && (
            <Typography
              variant="h6"
              color="error"
              style={{ marginTop: "1rem" }}
            >
              {error}
            </Typography>
          )}
        </Container>
      </div>
    </>
  );
};

export default Reveal;
