import React from "react";
import { BackDrop } from "../components/BackDrop";
import {
  Grid2,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  Box,
} from "@mui/material";
import how from "../assets/how.png";
import what from "../assets/what.png";
import examples from "../assets/examples.png";
import useStyles from "../components/Styles";

/* This array describes the 3 pages that are connected from the About page */
const sections = [
  {
    image: what,
    alt: "What is Steganography",
    heading: "What It Is",
    link: "/what-is-steganography",
  },
  {
    image: how,
    alt: "How Steganography Works",
    heading: "How It Works",
    link: "/how-steganography-works",
  },
  {
    image: examples,
    alt: "Types of Steganography",
    heading: "The Types",
    link: "/steganography-types",
  },
];

const About = () => {
  /* Importing the style that we created in Styles.js */
  const classes = useStyles();

  return (
    <>
      <BackDrop />
      <div className={classes.root}>
        {/* The title */}
        <Typography
          variant="h3"
          sx={{
            color: "#FF5733",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "40px",
          }}
        >
          Steganography
        </Typography>
        <Grid2
          container
          justifyContent="center"
          spacing={2}
          sx={{ gap: "4px" }}
          marginTop="60px"
        >
          {/* Spacing the three images horizontally */}
          {sections.map((section, index) => (
            <Grid2
              item
              xs={12}
              sm={4}
              key={index}
              // Calculating the width of each given that there is 4px spacing between them
              sx={{ maxWidth: "calc(33.33% - 4px)" }}
            >
              <Card>
                <CardActionArea href={section.link}>
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    {/* Darkened Image with Hover Effect */}
                    <CardMedia
                      component="img"
                      image={section.image}
                      alt={section.alt}
                      sx={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        filter: "brightness(0.35)", // Darken the image
                        transition: "filter 0.3s ease-in-out", // Smooth transition
                        "&:hover": {
                          filter: "brightness(1)", // Light up on hover
                        },
                      }}
                    />
                    {/* Centered Text Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "10px",
                        borderRadius: "4px",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h5">{section.heading}</Typography>
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </div>
    </>
  );
};

export default About;
