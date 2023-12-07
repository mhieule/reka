import React from "react";
import LessonCards from "../components/learn/LessonCards";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { StringOutputParser } from "langchain/schema/output_parser";

const model = new OpenAI({
  openAIApiKey: "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",
  maxTokens: 256,
});

const parser = new StringOutputParser();

const prompt = PromptTemplate.fromTemplate(
  "Write a English learning text of topic {topic}? Construct the text so that it can be used as a English learning reading text with proper format."
);

const chainA = new LLMChain({ llm: model, prompt });

// The result is an object with a `text` property.

const LearnTopic = () => {
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
    setTextOutput("");
  };
  return (
    <>
      <div>
        <h1>Topics</h1>
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
          setTextOutput("");
          chainA.run(textInput).then((response) => {
            setTextOutput(response);
          });
        }}
      >
        Generate lesson
      </button>
      <div style={{ margin: "100px" }}></div>
      <div
        style={{
          whiteSpace: "pre-line",
          textAlign: "left",
          border: "1px solid #000",
          padding: "10px",
          backgroundColor: "black",
          borderRadius: "25px",
          color: "white",
        }}
        id="lesson-text"
      >
        {textOutput}
      </div>
    </>
  );
};

export default LearnTopic;
