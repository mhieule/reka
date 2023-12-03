import React from "react";
import LessonCards from "../components/learn/LessonCards";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const LearnTopic = () => {
  return (
    <>
      <div>
        <h1></h1>
        <h3>
          Begin by describing in natural language what has been on your mind or
          what topic you want to deepen your language skill in. Based on your
          input we will concretize your interest and prepare the corresponding
          lesson.
        </h3>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-textarea"
            label="Enter your favourite topic here"
            placeholder="Your topic"
            multiline
            variant="standard"
            inputProps={{
              style: { fontSize: 30, paddingTop: 20, lineHeight: "1.5" },
            }}
            InputLabelProps={{ style: { fontSize: 30 } }}
            margin="normal"
          />
        </div>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <button>Generate lesson</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default LearnTopic;
