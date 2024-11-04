import React from "react";
import { AppBar, Toolbar, IconButton, Stack, Button } from "@mui/material";
import TheaterComedy from "@mui/icons-material/TheaterComedy";
import { Link, useLocation } from "react-router-dom";

/* 
    This element is the top most bar that appears on all the pages
    - it contains navigation to the About, Hide and Reveal pages 
    Reference: https://www.youtube.com/watch?v=y9iX6sfB40k&t=276s 
*/

export const NavBar = () => {
  /* Find the URL we are on right now */
  const location = useLocation();

  return (
    <AppBar
      /* Set the position to static since we want the NavBar to stay in one spot at all times */
      position="static"
      sx={{
        backgroundColor: "#FF5733" /* Neon orange theme :) */,
        color: "black",
        /* Increase the priority a little bit so that the NavBar always appears at the top */
        zIndex: (theme) => theme.zIndex.drawer + 2,
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <TheaterComedy />
        </IconButton>
        <Stack direction="row" spacing={4} sx={{ marginLeft: "auto" }}>
          {/* The About Button */}
          <Button
            component={Link}
            to="/"
            sx={{
              color: "black",
              /* We make the font bold when the user is on that page */
              fontWeight: location.pathname === "/" ? "bold" : "normal",
            }}
          >
            ABOUT
          </Button>
          {/* The Hide Button */}
          <Button
            component={Link}
            to="/hide"
            sx={{
              color: "black",
              /* We make the font bold when the user is on that page */
              fontWeight: location.pathname === "/hide" ? "bold" : "normal",
            }}
          >
            HIDE
          </Button>
          {/* The Reveal Button */}
          <Button
            component={Link}
            to="/reveal"
            sx={{
              color: "black",
              /* We make the font bold when the user is on that page */
              fontWeight: location.pathname === "/reveal" ? "bold" : "normal",
            }}
          >
            REVEAL
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
