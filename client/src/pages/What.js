import React from "react";
import { BackDrop } from "../components/BackDrop";
import { Container, Typography, Box } from "@mui/material";
import useStyles from "../components/Styles";
import what from "../assets/what.png";

const What = () => {
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
            What Is Steganography?
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
              src={what}
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
              Steganography involves concealing information within another
              message or a physical object to avoid obvious detection. It is
              typically used with a variety of virtual media such as text,
              image, video, or audio. The hidden information is then extracted
              by the receiver.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              In Greek, the term “steganos” means hidden or covered and
              “graphien” means writing. Steganography is not at all a new
              concept but has been used for thousands of years for private
              communication. A well known example of this is the invisible ink
              used by the Romans which could be deciphered using heat or light.
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default What;
