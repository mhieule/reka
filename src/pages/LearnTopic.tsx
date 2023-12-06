import React from "react";
import LessonCards from "../components/learn/LessonCards";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const model = new OpenAI({
  openAIApiKey: "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",
});

const prompt = PromptTemplate.fromTemplate(
  "What is a good name for a company that makes {product}?"
);

const chainA = new LLMChain({ llm: model, prompt });

// The result is an object with a `text` property.

const LearnTopic = () => {
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };
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
            value={textInput}
            onChange={handleInputChange}
          />
        </div>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          const resA = chainA.call({ product: "colorful socks" });

          console.log({ resA });
        }}
      >
        Generate lesson
      </button>
      <div style={{ margin: "300px" }}></div>
    </>
  );
};

export default LearnTopic;
