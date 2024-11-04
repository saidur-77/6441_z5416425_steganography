import React from "react";
import { BackDrop } from "../components/BackDrop";
import { Container, Typography, Box } from "@mui/material";
import useStyles from "../components/Styles";
import how from "../assets/how.png";

const How = () => {
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
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            How Does Steganography Work?
          </Typography>

          {/* Short Rectangle for the Image */}
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
              src={how}
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
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Image steganography can be performed using a couple of different
              methods. In an image, each pixel is made of three bytes of data
              corresponding to its RGB value. Some images also have a fourth
              byte to indicate transparency.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              One method is altering the least significant bit (LSB) of each
              byte which generally foes not result in an obvious visual change.
              Another method is cancelling the text by placing the words at
              specific intervals in a large image. In the cases of very large
              hidden messages this can lead to distorted looking images!
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default How;
