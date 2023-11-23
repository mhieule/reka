import React from "react";

interface Props {
  src: string;
  title: string;
  context: string;
}

const LessonCard = ({ src, title, context }: Props) => {
  return (
    <>
      <div className="card-container">
        <div className="card-img">
          <img src={src} alt=""></img>
        </div>
        <div className="card-text">
          <h1>{title}</h1>
          <p>{context}</p>
        </div>
        <button>Start</button>
      </div>
    </>
  );
};

export default LessonCard;
