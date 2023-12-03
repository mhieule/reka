import React from "react";
import { Link } from "react-router-dom";

interface Props {
  src: string;
  title: string;
  context: string;
  buttonLink: string;
}

const LessonCard = ({ src, title, context, buttonLink }: Props) => {
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
        <Link to={buttonLink}>
          <button>Start</button>
        </Link>
      </div>
    </>
  );
};

export default LessonCard;
