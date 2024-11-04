import { makeStyles } from "@mui/styles";

/* 
    This page standardises the styles for all the elements on each of the pages
    like the buttons and input fields 
*/

const useStyles = makeStyles({
  root: {
    backgroundColor: "#000",
    color: "#FF3D00",
    minHeight: "90vh", // 100vh minus the NavBar which takes about 10vh
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  inputField: {
    marginBottom: "1rem",
    backgroundColor: "#fff",
    borderRadius: "4px",
    "& .MuiInputLabel-root": {
      color: "#B0B0B0", // Placeholder colour is set to a light grey when we don't have it selected
    },
    "& .MuiInputLabel-root.Mui-focused": {
      display: "none", // Hide the label completely when selected/ has something in it
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FF3D00", // Neon orange border when selected
    },
  },
  button: {
    backgroundColor: "#FF3D00 !important", // Neon orange color for the button background
    color: "#fff",
    fontWeight: "normal",
    "&:hover": {
      fontWeight: "bold", // Bold text on hover
    },
  },
  titleText: {
    color: "#FF3D00",
    marginBottom: "2rem",
  },
});

export default useStyles;
