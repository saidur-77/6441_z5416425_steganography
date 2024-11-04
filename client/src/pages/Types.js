import React from "react";
import { BackDrop } from "../components/BackDrop";
import { Container, Typography, Box } from "@mui/material";
import useStyles from "../components/Styles";
import examples from "../assets/examples.png";

const Types = () => {
  /* Importing the style that we created in Styles.js */
  const classes = useStyles();

  return (
    <>
      <BackDrop />
      <div className={classes.root}>
        <Container maxWidth="md">
          {/* Centered Title */}
          <Typography
            variant="h4"
            sx={{
              color: "#FF5733",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center", // Center the title
              marginTop: "40px", // Added margin on top for spacing
            }}
          >
            What are the Types Of Steganography?
          </Typography>

          {/* Short Rectangle Image */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "100px",
              margin: "0 auto",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={examples}
              alt="Steganography illustration"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            {/* Dark Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
                zIndex: 1, // Place above the image
              }}
            />
          </Box>

          {/* Centered Text Below Image */}
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Image Steganography
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Involves altering the pixels of the image in some way with the
              hidden message.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Text Steganography
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Involves changing the format, words, grammar or generating random
              character sequences to get the message across.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Audio Steganography
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Uses the binary sequence within the file to embed the message.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Video Steganography
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              This can allow a large amount of data to be embedded both moving
              images and sound and then compressing the data stream.
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Types;
