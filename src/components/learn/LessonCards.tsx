import React from "react";
import LessonCard from "./LessonCard";
import "./LessonCardCSS.css";
import castle from "../../assets/castle.jpg";
import books from "../../assets/books.jpg";
import social from "../../assets/social.jpg";
import augmented from "../../assets/augmented.jpg";

const lessonType1 = {
  src: castle,
  title: "Learn basic phrases",
  context: "Grammar, Vocabulary",
  buttonLink: "/learn/basic",
};
const lessonType2 = {
  src: books,
  title: "Learn from topics",
  context: "Sport, Food, Travel",
  buttonLink: "/learn/topic",
};
const lessonType3 = {
  src: social,
  title: "Learn from social media",
  context: "Tweet/Tiktok/Instagram",
  buttonLink: "/learn/social",
};
const lessonType4 = {
  src: augmented,
  title: "Augmented Learning",
  context: "Coming soon",
  buttonLink: "/learn/augmented",
};

const lessonTypes = [lessonType1, lessonType2, lessonType3, lessonType4];

const LessonCards = () => {
  return (
    <div className="lesson-cards">
      {lessonTypes.map((lessonType) => (
        <LessonCard
          src={lessonType.src}
          title={lessonType.title}
          context={lessonType.context}
          buttonLink={lessonType.buttonLink}
        />
      ))}
    </div>
  );
};

export default LessonCards;
