import React, { useState } from "react";
import { Container, Button, Typography, TextField } from "@mui/material";
import useStyles from "../components/Styles";
import { BackDrop } from "../components/BackDrop";

const Hide = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [downloadLink, setDownloadLink] = useState(null);
  const [uploadComplete, setUploadComplete] = useState(false);

  /* Check for file selection and then set the selected file in the state */
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  /* Check for input message changes and set the message to input value */
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleUpload = async () => {
    /* Check if the file and message are provided - alert the user otherwise */
    if (!file || !message) {
      alert("Please upload an image and enter a message.");
      return;
    }

    /* Create a form data object to hold the file and message */
    const formData = new FormData();
    formData.append("image", file);
    formData.append("message", message);

    try {
      /* Make a request to the backend using the formData object we just created */
      const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: formData,
      });

      /* If the response had an issue simply error out */
      if (!response.ok) {
        throw new Error("Failed to upload file.");
      }

      /* Create a download URL from the returned reponse */
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      setDownloadLink(downloadUrl);

      setUploadComplete(true);
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };

  /* Reset the state of the whole form */
  const handleReset = () => {
    setFile(null);
    setMessage("");
    setDownloadLink(null);
    setUploadComplete(false);
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
            Hide Your Message
          </Typography>
          <div
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
              placeholder="Enter your message"
              value={message}
              onChange={handleMessageChange}
              variant="outlined"
              multiline
              rows={4}
              className={classes.inputField}
              slotProps={{
                inputLabel: {
                  shrink: false,
                },
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  display: message ? "none" : "block",
                },
              }}
            />

            {/* We either have an upload button or a reset button depending on whether or not the upload process is complete */}
            {uploadComplete ? (
              <Button
                variant="contained"
                onClick={handleReset}
                className={classes.button}
                fullWidth
              >
                Reset
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleUpload}
                className={classes.button}
                fullWidth
              >
                Upload and Hide Message
              </Button>
            )}
          </div>

          {/* After the upload is complete we can bring in the download button */}
          {downloadLink && (
            <Button
              variant="contained"
              className={classes.button}
              href={downloadLink}
              download
              sx={{ mt: 3 }}
              fullWidth
            >
              Download Image with Hidden Message
            </Button>
          )}
        </Container>
      </div>
    </>
  );
};

export default Hide;
