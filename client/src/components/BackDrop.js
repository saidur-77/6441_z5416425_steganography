import React from "react";
import { Box } from "@mui/material";
import { NavBar } from "./NavBar";

/* 
   This is simply a black backdrop to standardise all the pages 
   with the NavBar added on top 
*/

export const BackDrop = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: -1, // Since BackDrop should appear behind the NavBar we will give it a lower priority
        }}
      ></Box>
    </>
  );
};
